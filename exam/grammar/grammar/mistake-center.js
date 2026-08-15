(function () {
    const STORAGE_KEY = 'grammar_choice_performance_v2';
    const MIGRATION_KEY = 'grammar_choice_performance_migrated_v2';
    const LEGACY_PREFIX = 'grammar_choice_marks::';
    const VERSION = 2;
    const DAY_MS = 24 * 60 * 60 * 1000;
    const RECENCY_DAYS = 90;

    const questions = Array.isArray(window.grammarChoiceQuestionDatabase)
        ? window.grammarChoiceQuestionDatabase
        : [];
    const questionById = new Map(questions.map((question) => [question.id, question]));
    const catalog = window.grammarChoiceCategoryCatalog || {};
    const categoryByQuestionId = new Map();
    const categoryByLevelAndId = new Map();
    let lastStoreReadValid = false;

    ['N1', 'N2', 'N3'].forEach((level) => {
        (Array.isArray(catalog[level]) ? catalog[level] : []).forEach((category, index) => {
            const normalized = {
                id: String(category.id || '').trim(),
                level,
                name: String(category.name || category.id || '未分类').trim(),
                index
            };
            if (!normalized.id) return;
            categoryByLevelAndId.set(`${level}::${normalized.id}`, normalized);
            (Array.isArray(category.questionIds) ? category.questionIds : []).forEach((questionId) => {
                categoryByQuestionId.set(String(questionId), normalized);
            });
        });
    });

    function createEmptyStore() {
        return { version: VERSION, questions: {} };
    }

    function safeCount(value) {
        const number = Number(value);
        return Number.isFinite(number) && number > 0 ? Math.floor(number) : 0;
    }

    function safeTimestamp(value) {
        const number = Number(value);
        return Number.isFinite(number) && number > 0 ? number : null;
    }

    function normalizeRecord(raw, questionId) {
        const question = questionById.get(questionId);
        if (!question) return null;
        const category = categoryByQuestionId.get(questionId);
        const attemptCount = safeCount(raw?.attemptCount);
        const correctCount = Math.min(attemptCount, safeCount(raw?.correctCount));
        const wrongCount = Math.min(attemptCount, safeCount(raw?.wrongCount));
        return {
            level: question.level,
            year: question.year,
            categoryId: category?.id || 'uncategorized',
            attemptCount: Math.max(attemptCount, correctCount + wrongCount),
            correctCount,
            wrongCount,
            activeMistake: wrongCount > 0 && Boolean(raw?.activeMistake),
            firstWrongAt: safeTimestamp(raw?.firstWrongAt),
            lastWrongAt: safeTimestamp(raw?.lastWrongAt),
            lastAttemptAt: safeTimestamp(raw?.lastAttemptAt),
            lastSource: String(raw?.lastSource || '')
        };
    }

    function readStore() {
        lastStoreReadValid = false;
        try {
            const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
            if (!parsed || parsed.version !== VERSION || !parsed.questions || typeof parsed.questions !== 'object') {
                return createEmptyStore();
            }
            const normalized = createEmptyStore();
            Object.entries(parsed.questions).forEach(([questionId, raw]) => {
                const record = normalizeRecord(raw, questionId);
                if (record) normalized.questions[questionId] = record;
            });
            lastStoreReadValid = true;
            return normalized;
        } catch (error) {
            return createEmptyStore();
        }
    }

    let store = readStore();

    function saveStore() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
            return true;
        } catch (error) {
            return false;
        }
    }

    function parseLegacyIds(value) {
        try {
            const parsed = JSON.parse(value || '[]');
            return Array.isArray(parsed)
                ? Array.from(new Set(parsed.map((item) => String(item || '').trim()).filter(Boolean)))
                : [];
        } catch (error) {
            return [];
        }
    }

    function migrateLegacyMistakes() {
        if (localStorage.getItem(MIGRATION_KEY) === '1' && lastStoreReadValid) return;
        let changed = false;
        for (let index = 0; index < localStorage.length; index += 1) {
            const key = localStorage.key(index);
            if (!key || !key.startsWith(LEGACY_PREFIX)) continue;
            parseLegacyIds(localStorage.getItem(key)).forEach((questionId) => {
                if (store.questions[questionId]) return;
                const question = questionById.get(questionId);
                if (!question) return;
                const category = categoryByQuestionId.get(questionId);
                store.questions[questionId] = {
                    level: question.level,
                    year: question.year,
                    categoryId: category?.id || 'uncategorized',
                    attemptCount: 1,
                    correctCount: 0,
                    wrongCount: 1,
                    activeMistake: true,
                    firstWrongAt: null,
                    lastWrongAt: null,
                    lastAttemptAt: null,
                    lastSource: 'legacy'
                };
                changed = true;
            });
        }
        if (changed) saveStore();
        try { localStorage.setItem(MIGRATION_KEY, '1'); } catch (error) {}
    }

    function getCategory(questionId) {
        return categoryByQuestionId.get(questionId) || {
            id: 'uncategorized',
            level: questionById.get(questionId)?.level || '',
            name: '未分类',
            index: Number.MAX_SAFE_INTEGER
        };
    }

    function recordAttempt(question, isCorrect, source) {
        if (!question || !question.id || !questionById.has(question.id)) return null;
        const now = Date.now();
        const category = getCategory(question.id);
        const existing = normalizeRecord(store.questions[question.id] || {}, question.id) || {
            level: question.level,
            year: question.year,
            categoryId: category.id,
            attemptCount: 0,
            correctCount: 0,
            wrongCount: 0,
            activeMistake: false,
            firstWrongAt: null,
            lastWrongAt: null,
            lastAttemptAt: null,
            lastSource: ''
        };

        existing.level = question.level;
        existing.year = question.year;
        existing.categoryId = category.id;
        existing.attemptCount += 1;
        existing.lastAttemptAt = now;
        existing.lastSource = String(source || 'practice');
        if (isCorrect) {
            existing.correctCount += 1;
            existing.activeMistake = false;
        } else {
            existing.wrongCount += 1;
            existing.activeMistake = true;
            existing.firstWrongAt = existing.firstWrongAt || now;
            existing.lastWrongAt = now;
        }
        store.questions[question.id] = existing;
        saveStore();
        return { ...existing };
    }

    function recordsForLevel(level) {
        return Object.entries(store.questions)
            .map(([questionId, record]) => ({ questionId, question: questionById.get(questionId), record }))
            .filter((entry) => entry.question && entry.record.level === level);
    }

    function getRecencyValue(timestamp) {
        if (!timestamp) return 0;
        const ageDays = Math.max(0, (Date.now() - timestamp) / DAY_MS);
        return Math.max(0, 1 - ageDays / RECENCY_DAYS);
    }

    function finalizeGroupStats(groups, dimension) {
        const list = Array.from(groups.values()).filter((group) => group.wrongCount > 0);
        const maxWrongCount = Math.max(1, ...list.map((group) => group.wrongCount));
        list.forEach((group) => {
            group.errorRate = group.attemptCount > 0 ? group.wrongCount / group.attemptCount : 0;
            if (dimension === 'category') {
                const sampleConfidence = Math.min(group.attemptCount / 5, 1);
                const adjustedRate = group.errorRate * sampleConfidence;
                const relativeFrequency = group.wrongCount / maxWrongCount;
                const recency = getRecencyValue(group.lastWrongAt);
                group.weaknessScore = Math.round(100 * (0.5 * adjustedRate + 0.3 * relativeFrequency + 0.2 * recency));
            } else {
                group.weaknessScore = 0;
            }
        });
        return list;
    }

    function getYearStats(level) {
        const groups = new Map();
        recordsForLevel(level).forEach(({ question, record }) => {
            const key = question.year;
            if (!groups.has(key)) {
                groups.set(key, { key, label: key, attemptCount: 0, correctCount: 0, wrongCount: 0, activeCount: 0, lastWrongAt: null });
            }
            const group = groups.get(key);
            group.attemptCount += record.attemptCount;
            group.correctCount += record.correctCount;
            group.wrongCount += record.wrongCount;
            if (record.activeMistake && record.wrongCount > 0) group.activeCount += 1;
            group.lastWrongAt = Math.max(group.lastWrongAt || 0, record.lastWrongAt || 0) || null;
        });
        return finalizeGroupStats(groups, 'year')
            .sort((left, right) => getYearSortValue(right.key) - getYearSortValue(left.key));
    }

    function getYearSortValue(year) {
        const match = String(year || '').match(/^(\d{4})年(\d{1,2})月$/);
        return match ? Number(match[1]) * 100 + Number(match[2]) : 0;
    }

    function getCategoryStats(level) {
        const groups = new Map();
        recordsForLevel(level).forEach(({ questionId, record }) => {
            const category = getCategory(questionId);
            const key = category.id;
            if (!groups.has(key)) {
                groups.set(key, {
                    key,
                    label: category.name,
                    categoryIndex: category.index,
                    attemptCount: 0,
                    correctCount: 0,
                    wrongCount: 0,
                    activeCount: 0,
                    lastWrongAt: null
                });
            }
            const group = groups.get(key);
            group.attemptCount += record.attemptCount;
            group.correctCount += record.correctCount;
            group.wrongCount += record.wrongCount;
            if (record.activeMistake && record.wrongCount > 0) group.activeCount += 1;
            group.lastWrongAt = Math.max(group.lastWrongAt || 0, record.lastWrongAt || 0) || null;
        });
        return finalizeGroupStats(groups, 'category').sort((left, right) =>
            right.weaknessScore - left.weaknessScore ||
            right.wrongCount - left.wrongCount ||
            (right.lastWrongAt || 0) - (left.lastWrongAt || 0) ||
            left.categoryIndex - right.categoryIndex
        );
    }

    function getLevelSummary(level) {
        const entries = recordsForLevel(level);
        const summary = entries.reduce((result, { record }) => {
            result.attemptCount += record.attemptCount;
            result.wrongCount += record.wrongCount;
            if (record.activeMistake && record.wrongCount > 0) result.activeCount += 1;
            return result;
        }, { attemptCount: 0, wrongCount: 0, activeCount: 0, topCategory: null });
        summary.topCategory = getCategoryStats(level)[0] || null;
        return summary;
    }

    function getGroupQuestions(level, dimension, key, filter) {
        const activeOnly = filter !== 'all';
        return recordsForLevel(level)
            .filter(({ questionId, question, record }) => {
                if (record.wrongCount <= 0) return false;
                if (activeOnly && !record.activeMistake) return false;
                return dimension === 'category'
                    ? getCategory(questionId).id === key
                    : question.year === key;
            })
            .map(({ questionId, question, record }) => ({
                question,
                record: { ...record },
                category: { ...getCategory(questionId) }
            }))
            .sort((left, right) =>
                Number(right.record.activeMistake) - Number(left.record.activeMistake) ||
                right.record.wrongCount - left.record.wrongCount ||
                (right.record.lastWrongAt || 0) - (left.record.lastWrongAt || 0) ||
                left.question.id.localeCompare(right.question.id)
            );
    }

    function getQuestionHistory(questionId) {
        const question = questionById.get(questionId);
        const record = store.questions[questionId];
        if (!question || !record || record.wrongCount <= 0) return null;
        return { question, record: { ...record }, category: { ...getCategory(questionId) } };
    }

    function getGroupStats(level, dimension, key) {
        const groups = dimension === 'category' ? getCategoryStats(level) : getYearStats(level);
        return groups.find((group) => group.key === key) || null;
    }

    function reload() {
        store = readStore();
        migrateLegacyMistakes();
        return store;
    }

    migrateLegacyMistakes();

    window.GrammarMistakeStore = {
        STORAGE_KEY,
        MIGRATION_KEY,
        recordAttempt,
        getLevelSummary,
        getYearStats,
        getCategoryStats,
        getGroupStats,
        getGroupQuestions,
        getQuestionHistory,
        getCategory,
        reload
    };
})();
