(function() {
    const READING_QUESTION_PERFORMANCE_KEY = 'reading_question_mistakes_v2';

    function normalizeReadingType(value) {
        const type = String(value || '').trim();
        if (type === 'mid' || type === 'medium') {
            return 'middle';
        }
        if (type === 'd') {
            return 'integrated';
        }
        if (type === 't') {
            return 'search';
        }
        if (type === 'l') {
            return 'long';
        }
        return type;
    }

    function normalizeExamKey(value) {
        const text = String(value || '').trim();
        if (!text) {
            return '';
        }

        let match = text.match(/^(\d{4})[.\-](\d{1,2})$/);
        if (match) {
            return `${match[1]}-${match[2].padStart(2, '0')}`;
        }

        match = text.match(/^(\d{4})年(\d{1,2})月$/);
        if (match) {
            return `${match[1]}-${match[2].padStart(2, '0')}`;
        }

        return text.replace('.', '-');
    }

    function buildReadingMarksKey(level, type, examKey) {
        return `reading_marks::${level}::${normalizeReadingType(type)}::${examKey}`;
    }

    function buildReadingLastPracticeKey(level, type) {
        return `reading_last_practice::${level}::${normalizeReadingType(type)}`;
    }

    function buildReadingLastPositionKey(level) {
        return `reading_last_position_v2::${String(level || '').toUpperCase()}`;
    }

    function saveReadingLastPosition(level, type, examKey, page) {
        const normalizedLevel = String(level || '').toUpperCase();
        const normalizedType = normalizeReadingType(type);
        const normalizedExamKey = normalizeExamKey(examKey);
        if (!normalizedLevel || !normalizedType || !normalizedExamKey) {
            return null;
        }

        const position = {
            level: normalizedLevel,
            type: normalizedType,
            examKey: normalizedExamKey,
            page: Math.max(1, Number.parseInt(page, 10) || 1),
            updatedAt: new Date().toISOString()
        };

        try {
            localStorage.setItem(buildReadingLastPracticeKey(normalizedLevel, normalizedType), normalizedExamKey);
            localStorage.setItem(buildReadingLastPositionKey(normalizedLevel), JSON.stringify(position));
        } catch (error) {
            console.warn('Unable to save the last reading position.', error);
        }
        return position;
    }

    function getReadingLastPosition(level) {
        try {
            const parsed = JSON.parse(localStorage.getItem(buildReadingLastPositionKey(level)) || 'null');
            if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
                return null;
            }
            const normalizedLevel = String(level || '').toUpperCase();
            const normalizedType = normalizeReadingType(parsed.type);
            const normalizedExamKey = normalizeExamKey(parsed.examKey);
            if (String(parsed.level || '').toUpperCase() !== normalizedLevel || !normalizedType || !normalizedExamKey) {
                return null;
            }
            return {
                level: normalizedLevel,
                type: normalizedType,
                examKey: normalizedExamKey,
                page: Math.max(1, Number.parseInt(parsed.page, 10) || 1),
                updatedAt: parsed.updatedAt || null
            };
        } catch (error) {
            return null;
        }
    }

    function parseNumberArray(rawValue) {
        try {
            const parsed = JSON.parse(rawValue || '[]');
            if (!Array.isArray(parsed)) {
                return [];
            }

            return Array.from(new Set(
                parsed
                    .map((item) => Number.parseInt(item, 10))
                    .filter((item) => Number.isInteger(item) && item > 0)
            )).sort((a, b) => a - b);
        } catch (error) {
            return [];
        }
    }

    function getReadingMarks(level, type, examKey) {
        const normalizedExamKey = normalizeExamKey(examKey);
        const normalizedType = normalizeReadingType(type);
        const marks = parseNumberArray(localStorage.getItem(buildReadingMarksKey(level, normalizedType, normalizedExamKey)));
        if (marks.length > 0 || normalizedType !== 'middle') {
            return marks;
        }

        return parseNumberArray(localStorage.getItem(`reading_marks::${level}::mid::${normalizedExamKey}`));
    }

    function saveReadingMarks(level, type, examKey, marks) {
        const normalized = Array.from(new Set(
            (marks || [])
                .map((item) => Number.parseInt(item, 10))
                .filter((item) => Number.isInteger(item) && item > 0)
        )).sort((a, b) => a - b);

        const normalizedExamKey = normalizeExamKey(examKey);
        const normalizedType = normalizeReadingType(type);
        const key = buildReadingMarksKey(level, normalizedType, normalizedExamKey);
        const legacyMiddleKey = normalizedType === 'middle'
            ? `reading_marks::${level}::mid::${normalizedExamKey}`
            : null;
        if (normalized.length === 0) {
            localStorage.removeItem(key);
            if (legacyMiddleKey) {
                localStorage.removeItem(legacyMiddleKey);
            }
            return;
        }

        localStorage.setItem(key, JSON.stringify(normalized));
        if (legacyMiddleKey && legacyMiddleKey !== key) {
            localStorage.removeItem(legacyMiddleKey);
        }
    }

    function collectReadingReviewItems(level, type) {
        const items = [];
        const normalizedType = normalizeReadingType(type);
        const prefixes = [`reading_marks::${level}::${normalizedType}::`];
        if (normalizedType === 'middle') {
            prefixes.push(`reading_marks::${level}::mid::`);
        }
        const seenExamKeys = new Set();

        for (let index = 0; index < localStorage.length; index++) {
            const key = localStorage.key(index);
            if (!key) {
                continue;
            }

            const matchedPrefix = prefixes.find((prefix) => key.startsWith(prefix));
            if (!matchedPrefix) {
                continue;
            }

            const examKey = key.slice(matchedPrefix.length);
            if (seenExamKeys.has(examKey)) {
                continue;
            }
            const marks = parseNumberArray(localStorage.getItem(key));
            if (marks.length === 0) {
                continue;
            }

            seenExamKeys.add(examKey);
            items.push({
                examKey,
                count: marks.length
            });
        }

        items.sort((left, right) => right.examKey.localeCompare(left.examKey));
        return items;
    }

    function loadReadingQuestionPerformance() {
        try {
            const parsed = JSON.parse(localStorage.getItem(READING_QUESTION_PERFORMANCE_KEY) || '{}');
            if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
                return {};
            }
            return parsed;
        } catch (error) {
            return {};
        }
    }

    function saveReadingQuestionPerformance(records) {
        try {
            localStorage.setItem(READING_QUESTION_PERFORMANCE_KEY, JSON.stringify(records || {}));
        } catch (error) {
            console.warn('Unable to save reading question performance.', error);
        }
    }

    function normalizeQuestionNumber(value, fallback) {
        const text = String(value == null ? '' : value).trim();
        const numericMatch = text.match(/\d+/);
        if (numericMatch) {
            return String(Number.parseInt(numericMatch[0], 10));
        }
        const fallbackNumber = Number.parseInt(fallback, 10);
        return Number.isInteger(fallbackNumber) && fallbackNumber > 0 ? String(fallbackNumber) : '1';
    }

    function buildReadingQuestionRecordId(level, type, examKey, page, questionNumber) {
        return [
            String(level || '').toUpperCase(),
            normalizeReadingType(type),
            normalizeExamKey(examKey),
            Math.max(1, Number.parseInt(page, 10) || 1),
            normalizeQuestionNumber(questionNumber, 1)
        ].join('::');
    }

    function getReadingQuestionRecords(level, type, examKey, options) {
        const settings = options || {};
        const normalizedLevel = String(level || '').toUpperCase();
        const normalizedType = normalizeReadingType(type);
        const normalizedExamKey = examKey == null ? null : normalizeExamKey(examKey);
        const records = Object.values(loadReadingQuestionPerformance()).filter((record) => {
            if (!record || typeof record !== 'object') {
                return false;
            }
            if (String(record.level || '').toUpperCase() !== normalizedLevel) {
                return false;
            }
            if (normalizeReadingType(record.type) !== normalizedType) {
                return false;
            }
            if (normalizedExamKey !== null && normalizeExamKey(record.examKey) !== normalizedExamKey) {
                return false;
            }
            return settings.activeOnly ? Boolean(record.activeMistake) : true;
        });

        return records.sort((left, right) => {
            const examComparison = String(right.examKey || '').localeCompare(String(left.examKey || ''));
            if (examComparison) return examComparison;
            const pageComparison = (Number(left.page) || 1) - (Number(right.page) || 1);
            if (pageComparison) return pageComparison;
            return (Number(left.questionNumber) || 0) - (Number(right.questionNumber) || 0);
        });
    }

    function syncReadingPageMark(level, type, examKey, page) {
        const currentPage = Math.max(1, Number.parseInt(page, 10) || 1);
        const hasActiveMistake = getReadingQuestionRecords(level, type, examKey, { activeOnly: true })
            .some((record) => Number(record.page) === currentPage);
        let marks = getReadingMarks(level, type, examKey);
        if (hasActiveMistake && !marks.includes(currentPage)) {
            marks.push(currentPage);
        } else if (!hasActiveMistake) {
            marks = marks.filter((item) => item !== currentPage);
        }
        saveReadingMarks(level, type, examKey, marks);
    }

    function recordReadingQuestionAttempt(level, type, examKey, page, questionNumber, isCorrect) {
        const normalizedLevel = String(level || '').toUpperCase();
        const normalizedType = normalizeReadingType(type);
        const normalizedExamKey = normalizeExamKey(examKey);
        const normalizedPage = Math.max(1, Number.parseInt(page, 10) || 1);
        const normalizedQuestionNumber = normalizeQuestionNumber(questionNumber, 1);
        const recordId = buildReadingQuestionRecordId(
            normalizedLevel,
            normalizedType,
            normalizedExamKey,
            normalizedPage,
            normalizedQuestionNumber
        );
        const records = loadReadingQuestionPerformance();
        const previous = records[recordId] && typeof records[recordId] === 'object' ? records[recordId] : {};
        const now = new Date().toISOString();
        const correct = Boolean(isCorrect);
        const next = {
            ...previous,
            level: normalizedLevel,
            type: normalizedType,
            examKey: normalizedExamKey,
            page: normalizedPage,
            questionNumber: normalizedQuestionNumber,
            attemptCount: Math.max(0, Number(previous.attemptCount) || 0) + 1,
            correctCount: Math.max(0, Number(previous.correctCount) || 0) + (correct ? 1 : 0),
            wrongCount: Math.max(0, Number(previous.wrongCount) || 0) + (correct ? 0 : 1),
            activeMistake: !correct,
            firstWrongAt: previous.firstWrongAt || (correct ? null : now),
            lastWrongAt: correct ? (previous.lastWrongAt || null) : now,
            lastAttemptAt: now
        };
        records[recordId] = next;
        saveReadingQuestionPerformance(records);
        syncReadingPageMark(normalizedLevel, normalizedType, normalizedExamKey, normalizedPage);
        return next;
    }

    function recordReadingAnalysisResult(level, type, examKey, page, questionNumber, questionPoint, optionErrorPoint) {
        const normalizedLevel = String(level || '').toUpperCase();
        const normalizedType = normalizeReadingType(type);
        const normalizedExamKey = normalizeExamKey(examKey);
        const normalizedPage = Math.max(1, Number.parseInt(page, 10) || 1);
        const normalizedQuestionNumber = normalizeQuestionNumber(questionNumber, 1);
        const normalizedQuestionPoint = String(questionPoint || '').trim();
        const normalizedOptionErrorPoint = String(optionErrorPoint || '').trim();
        if (!normalizedLevel || !normalizedType || !normalizedExamKey || !normalizedQuestionPoint || !normalizedOptionErrorPoint) {
            return null;
        }

        const recordId = buildReadingQuestionRecordId(
            normalizedLevel,
            normalizedType,
            normalizedExamKey,
            normalizedPage,
            normalizedQuestionNumber
        );
        const records = loadReadingQuestionPerformance();
        const previous = records[recordId] && typeof records[recordId] === 'object' ? records[recordId] : {};
        const questionPointWrongCounts = previous.questionPointWrongCounts && typeof previous.questionPointWrongCounts === 'object'
            ? { ...previous.questionPointWrongCounts }
            : {};
        const optionErrorWrongCounts = previous.optionErrorWrongCounts && typeof previous.optionErrorWrongCounts === 'object'
            ? { ...previous.optionErrorWrongCounts }
            : {};
        questionPointWrongCounts[normalizedQuestionPoint] = Math.max(0, Number(questionPointWrongCounts[normalizedQuestionPoint]) || 0) + 1;
        optionErrorWrongCounts[normalizedOptionErrorPoint] = Math.max(0, Number(optionErrorWrongCounts[normalizedOptionErrorPoint]) || 0) + 1;

        const now = new Date().toISOString();
        records[recordId] = {
            ...previous,
            level: normalizedLevel,
            type: normalizedType,
            examKey: normalizedExamKey,
            page: normalizedPage,
            questionNumber: normalizedQuestionNumber,
            questionPoint: normalizedQuestionPoint,
            lastOptionErrorPoint: normalizedOptionErrorPoint,
            questionPointWrongCounts,
            optionErrorWrongCounts,
            lastAnalysisWrongAt: now
        };
        saveReadingQuestionPerformance(records);
        return records[recordId];
    }

    function getReadingAnalysisSummary(level, type) {
        const normalizedLevel = String(level || '').toUpperCase();
        const normalizedType = type == null ? null : normalizeReadingType(type);
        const questionPoints = {};
        const optionErrorPoints = {};

        Object.values(loadReadingQuestionPerformance()).forEach((record) => {
            if (!record || typeof record !== 'object') return;
            if (String(record.level || '').toUpperCase() !== normalizedLevel) return;
            if (normalizedType !== null && normalizeReadingType(record.type) !== normalizedType) return;

            Object.entries(record.questionPointWrongCounts || {}).forEach(([key, value]) => {
                questionPoints[key] = Math.max(0, Number(questionPoints[key]) || 0) + Math.max(0, Number(value) || 0);
            });
            Object.entries(record.optionErrorWrongCounts || {}).forEach(([key, value]) => {
                optionErrorPoints[key] = Math.max(0, Number(optionErrorPoints[key]) || 0) + Math.max(0, Number(value) || 0);
            });
        });

        return { questionPoints, optionErrorPoints };
    }

    function collectReadingQuestionReviewItems(level, type) {
        const grouped = new Map();
        getReadingQuestionRecords(level, type, null, { activeOnly: true }).forEach((record) => {
            const examKey = normalizeExamKey(record.examKey);
            if (!grouped.has(examKey)) {
                grouped.set(examKey, {
                    examKey,
                    count: 0,
                    totalWrongCount: 0,
                    questions: []
                });
            }
            const entry = grouped.get(examKey);
            entry.count += 1;
            entry.totalWrongCount += Math.max(1, Number(record.wrongCount) || 1);
            entry.questions.push(record);
        });

        return Array.from(grouped.values()).sort((left, right) => right.examKey.localeCompare(left.examKey));
    }

    function createReadingYearSession(config) {
        const level = config.level;
        const type = normalizeReadingType(config.type);
        const examKey = normalizeExamKey(config.examKey);
        const totalPages = Number.parseInt(config.totalPages, 10);
        const indexPath = config.indexPath || '../index.html';
        const params = config.urlParams || new URLSearchParams(window.location.search);
        const mode = params.get('mode');
        const readingMode = params.get('readingMode');
        const isReviewMode = mode === 'review' || mode === 'mistake';
        const requestedPage = Math.max(1, Number.parseInt(params.get('page'), 10) || 1);

        saveReadingLastPosition(level, type, examKey, requestedPage);

        function getReviewPages() {
            return getReadingMarks(level, type, examKey).filter((page) => page >= 1 && page <= totalPages);
        }

        function recordAnswer(page, isCorrect) {
            const currentPage = Number.parseInt(page, 10);
            let marks = getReviewPages();

            if (!isCorrect) {
                if (!marks.includes(currentPage)) {
                    marks.push(currentPage);
                }
            } else {
                marks = marks.filter((item) => item !== currentPage);
            }

            saveReadingMarks(level, type, examKey, marks);
        }

        function recordQuestionAttempt(page, questionNumber, isCorrect) {
            return recordReadingQuestionAttempt(level, type, examKey, page, questionNumber, isCorrect);
        }

        function getInitialPage(requestedPage) {
            const fallbackPage = Number.isInteger(requestedPage) && requestedPage >= 1 && requestedPage <= totalPages
                ? requestedPage
                : 1;

            if (!isReviewMode) {
                return fallbackPage;
            }

            const reviewPages = getReviewPages();
            if (reviewPages.length === 0) {
                return fallbackPage;
            }

            return reviewPages.includes(fallbackPage) ? fallbackPage : reviewPages[0];
        }

        function buildPageUrl(page) {
            const nextParams = new URLSearchParams();
            nextParams.set('page', String(page));
            nextParams.set('examKey', examKey);
            if (isReviewMode) {
                nextParams.set('mode', 'review');
            } else if (readingMode) {
                nextParams.set('readingMode', readingMode);
            }
            return `${window.location.pathname}?${nextParams.toString()}`;
        }

        function replacePageUrl(page) {
            const nextUrl = buildPageUrl(page);
            saveReadingLastPosition(level, type, examKey, page);
            try {
                window.history.replaceState({ path: nextUrl }, '', nextUrl);
            } catch (error) {
                console.warn('History API is restricted in this environment.');
            }
        }

        function getNavState(page) {
            if (!isReviewMode) {
                return {
                    prevDisabled: page <= 1,
                    nextDisabled: page >= totalPages
                };
            }

            const reviewPages = getReviewPages();
            if (reviewPages.length === 0) {
                return { prevDisabled: true, nextDisabled: true };
            }

            const currentIndex = reviewPages.indexOf(page);
            if (currentIndex === -1) {
                return { prevDisabled: true, nextDisabled: true };
            }

            return {
                prevDisabled: currentIndex === 0,
                nextDisabled: currentIndex === reviewPages.length - 1
            };
        }

        function getMoveTarget(currentPage, direction) {
            const reviewPages = getReviewPages();
            if (reviewPages.length === 0) {
                return { done: true };
            }

            const currentIndex = reviewPages.indexOf(currentPage);
            if (currentIndex !== -1) {
                const nextIndex = currentIndex + direction;
                if (nextIndex < 0) {
                    return { edge: 'start' };
                }
                if (nextIndex >= reviewPages.length) {
                    return { done: true };
                }
                return { page: reviewPages[nextIndex] };
            }

            if (direction > 0) {
                const nextPage = reviewPages.find((page) => page > currentPage);
                return nextPage ? { page: nextPage } : { done: true };
            }

            const previousPages = reviewPages.filter((page) => page < currentPage);
            if (previousPages.length === 0) {
                return { edge: 'start' };
            }
            return { page: previousPages[previousPages.length - 1] };
        }

        function buildIndexUrl() {
            const nextParams = new URLSearchParams();
            nextParams.set('level', level);
            nextParams.set('type', type);
            nextParams.set('browse', 'year');
            return `${indexPath}?${nextParams.toString()}`;
        }

        function redirectToIndex() {
            window.location.href = buildIndexUrl();
        }

        return {
            level,
            type,
            examKey,
            isReviewMode,
            getReviewPages,
            recordAnswer,
            recordQuestionAttempt,
            getInitialPage,
            buildPageUrl,
            replacePageUrl,
            getNavState,
            getMoveTarget,
            buildIndexUrl,
            redirectToIndex
        };
    }

    window.ReadingYearSystem = {
        normalizeReadingType,
        normalizeExamKey,
        buildReadingMarksKey,
        buildReadingLastPracticeKey,
        buildReadingLastPositionKey,
        saveReadingLastPosition,
        getReadingLastPosition,
        getReadingMarks,
        saveReadingMarks,
        collectReadingReviewItems,
        getReadingQuestionRecords,
        recordReadingQuestionAttempt,
        recordReadingAnalysisResult,
        getReadingAnalysisSummary,
        collectReadingQuestionReviewItems,
        createReadingYearSession
    };
})();
