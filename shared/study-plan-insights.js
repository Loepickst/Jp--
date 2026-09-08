(function initStudyPlanInsights(global) {
    'use strict';

    const VOCAB_QUESTION_PREFIX = 'study_quest_test_v1_sentence_review_questions::';
    const VOCAB_COUNT_PREFIX = 'study_quest_test_v1_sentence_review_counts::';
    const VOCAB_TYPED_WORD_PREFIX = 'study_quest_test_v1_vocab_review_words::';
    const VOCAB_TYPED_COUNT_PREFIX = 'study_quest_test_v1_vocab_review_counts::';
    const GRAMMAR_STORE_KEY = 'grammar_choice_performance_v2';
    const READING_STORE_KEY = 'reading_question_mistakes_v2';
    const PAST_VOCAB_STORE_KEY = 'n1-past-vocab-review:v1';

    const SECTION_META = Object.freeze({
        vocabulary: Object.freeze({ name: '語彙', mark: '語', overviewUrl: 'index.html#exam/exam-vocabulary' }),
        grammar: Object.freeze({ name: '文法', mark: '文', overviewUrl: 'exam/grammar/grammar/index.html?browse=mistakes' }),
        reading: Object.freeze({ name: '読解', mark: '読', overviewUrl: 'exam/jlpt-reading/index.html?browse=mistakes' }),
        listening: Object.freeze({ name: '聴解', mark: '聴', overviewUrl: 'index.html#exam/exam-listening' })
    });

    const VOCAB_MODULES = Object.freeze({
        n1_verbs: Object.freeze({ label: '動詞', slug: 'verbs', level: 'N1' }),
        n1_adjectives: Object.freeze({ label: '形容詞', slug: 'adjectives', level: 'N1' }),
        n1_adverbs: Object.freeze({ label: '副詞', slug: 'adverbs', level: 'N1' }),
        n1_loanwords: Object.freeze({ label: '外来語', slug: 'loanwords', level: 'N1' }),
        n1_mimetic: Object.freeze({ label: '擬音語・擬態語', slug: 'mimetic', level: 'N1' }),
        n2_verbs: Object.freeze({ label: '動詞', slug: 'verbs', level: 'N2' }),
        n2_adjectives: Object.freeze({ label: '形容詞', slug: 'adjectives', level: 'N2' }),
        n2_adverbs: Object.freeze({ label: '副詞', slug: 'adverbs', level: 'N2' })
    });

    const GRAMMAR_CATEGORY_NAMES = Object.freeze({
        'k01-particles-toritate': '助詞・取り立て助詞',
        'k02-compound-case-particles': '複合格助詞',
        'k03-adverbs-connectors': '副詞・接続詞',
        'k04-keigo-benefactive-business': '敬語・授受・ビジネス表現',
        'k05-causative-passive-direction': '使役・受身・自他動詞',
        'k06-suffix-compound-auxiliary': '接尾表現・複合動詞・補助動詞',
        'k07-modality-judgment': '様態・推量・伝聞・判断',
        'k07-modality-quotation-judgment': '様態・推量・伝聞・引用',
        'k08-formal-nouns-quotation': '形式名詞・名詞化・引用',
        'k08-formal-nouns-nominalization': '形式名詞・名詞化',
        'k09-condition-cause-concession': '条件・原因・逆接・譲歩',
        'k10-time-aspect-sequence': '時間・アスペクト・順序',
        'k11-evaluation-degree-limitation': '評価・程度・限定',
        'k12-intention-purpose-obligation': '意志・目的・義務',
        uncategorized: '未分類の文法項目'
    });

    const READING_TYPES = Object.freeze({
        short: Object.freeze({ name: '短文理解', path: 's' }),
        middle: Object.freeze({ name: '中文理解', path: 'm' }),
        mid: Object.freeze({ name: '中文理解', path: 'm' }),
        long: Object.freeze({ name: '長文理解', path: 'l' }),
        integrated: Object.freeze({ name: '統合理解', path: 'd' }),
        search: Object.freeze({ name: '情報検索', path: 't' })
    });

    const LISTENING_TYPES = Object.freeze({
        'immediate-response': Object.freeze({ name: '即時応答', note: '応答表現と会話の意図' }),
        'task-comprehension': Object.freeze({ name: '課題理解', note: '条件整理と次の行動' }),
        'point-comprehension': Object.freeze({ name: 'ポイント理解', note: '理由・要点の聞き取り' }),
        'summary-comprehension': Object.freeze({ name: '概要理解', note: '話者の主張と全体像' }),
        'integrated-comprehension': Object.freeze({ name: '統合理解', note: '複数情報の比較と判断' })
    });

    function normalizeLevel(value) {
        return String(value || '').toUpperCase() === 'N1' ? 'N1' : 'N2';
    }

    function safeJson(storage, key, fallback) {
        try {
            const parsed = JSON.parse(storage.getItem(key) || 'null');
            return parsed == null ? fallback : parsed;
        } catch (error) {
            return fallback;
        }
    }

    function safeNumber(value) {
        const number = Number(value);
        return Number.isFinite(number) && number > 0 ? number : 0;
    }

    function toTimestamp(value) {
        if (!value) return 0;
        const number = Number(value);
        if (Number.isFinite(number) && number > 0) return number;
        const parsed = Date.parse(String(value));
        return Number.isFinite(parsed) ? parsed : 0;
    }

    function hashText(value) {
        let hash = 2166136261;
        const text = String(value || '');
        for (let index = 0; index < text.length; index += 1) {
            hash ^= text.charCodeAt(index);
            hash = Math.imul(hash, 16777619);
        }
        return (hash >>> 0).toString(36);
    }

    function getStorageKeys(storage) {
        const keys = [];
        try {
            for (let index = 0; index < storage.length; index += 1) {
                const key = storage.key(index);
                if (key) keys.push(key);
            }
        } catch (error) {
            return [];
        }
        return keys;
    }

    function createSection(type) {
        return {
            type,
            ...SECTION_META[type],
            pending: 0,
            attempts: 0,
            correct: 0,
            wrong: 0,
            topics: [],
            recent: []
        };
    }

    function createTopicMap() {
        return new Map();
    }

    function mergeTopic(topicMap, next) {
        const id = String(next.id || hashText(next.title));
        const previous = topicMap.get(id) || {
            id,
            title: String(next.title || '復習項目'),
            note: '',
            wrongCount: 0,
            pendingCount: 0,
            attemptCount: 0,
            correctCount: 0,
            lastAt: 0,
            url: String(next.url || ''),
            chip: String(next.chip || ''),
            minutes: Number(next.minutes) || 25
        };
        previous.wrongCount += safeNumber(next.wrongCount);
        previous.pendingCount += safeNumber(next.pendingCount);
        previous.attemptCount += safeNumber(next.attemptCount);
        previous.correctCount += safeNumber(next.correctCount);
        previous.lastAt = Math.max(previous.lastAt, toTimestamp(next.lastAt));
        if (next.note) previous.note = String(next.note);
        if (next.url) previous.url = String(next.url);
        if (next.chip) previous.chip = String(next.chip);
        topicMap.set(id, previous);
        return previous;
    }

    function finishSection(section, topicMap) {
        section.topics = Array.from(topicMap.values())
            .map((topic) => {
                const accuracy = topic.attemptCount > 0
                    ? Math.round((topic.correctCount / topic.attemptCount) * 100)
                    : null;
                return { ...topic, accuracy };
            })
            .sort((left, right) =>
                right.pendingCount - left.pendingCount
                || right.wrongCount - left.wrongCount
                || right.lastAt - left.lastAt
                || left.title.localeCompare(right.title)
            );
        const uniqueRecent = new Map();
        section.recent.forEach((record) => {
            const key = `${record.title}::${record.source}::${record.url}`;
            const previous = uniqueRecent.get(key);
            if (!previous || record.timestamp > previous.timestamp) uniqueRecent.set(key, record);
        });
        section.recent = Array.from(uniqueRecent.values())
            .sort((left, right) => right.timestamp - left.timestamp || left.title.localeCompare(right.title))
            .slice(0, 3);
        section.accuracy = section.attempts > 0
            ? Math.round((section.correct / section.attempts) * 100)
            : null;
        section.state = section.pending > 0
            ? '要復習'
            : (section.attempts > 0 || section.recent.length > 0 ? '状態良好' : '未開始');
        return section;
    }

    function getVocabularyModuleUrl(moduleId, kind) {
        const module = VOCAB_MODULES[moduleId];
        if (!module) return SECTION_META.vocabulary.overviewUrl;
        const levelPath = module.level.toLowerCase();
        const type = kind === 'reading' || kind === 'meaning' ? kind : 'sentence';
        return `exam/vocabulary/${levelPath}/practice_${levelPath}_${module.slug}.html?day=-1&type=${type}`;
    }

    function getVocabularyTopicCopy(module, kind) {
        if (kind === 'reading') return { title: `${module.label}・読み方`, note: '読みに迷った語をまとめて復習' };
        if (kind === 'meaning') return { title: `${module.label}・意味判断`, note: '意味と語感の取り違えを確認' };
        if (module.slug === 'adverbs') return { title: '副詞・文脈と呼応', note: '文脈に合う副詞と呼応表現を確認' };
        if (module.slug === 'verbs') return { title: '動詞・文脈と使い分け', note: '意味・自他・よく使う組み合わせを確認' };
        if (module.slug === 'adjectives') return { title: '形容詞・語感と使い分け', note: '似た形容詞のニュアンスを確認' };
        if (module.slug === 'loanwords') return { title: '外来語・意味と用法', note: '原語との意味のずれに注意' };
        return { title: '擬音語・擬態語の語感', note: '場面に合う音と状態表現を確認' };
    }

    function collectVocabulary(storage, level) {
        const section = createSection('vocabulary');
        const topicMap = createTopicMap();
        const moduleIds = Object.keys(VOCAB_MODULES).filter((id) => VOCAB_MODULES[id].level === level);

        moduleIds.forEach((moduleId) => {
            const module = VOCAB_MODULES[moduleId];
            const questionBucket = safeJson(storage, `${VOCAB_QUESTION_PREFIX}${moduleId}`, {});
            const countBucket = safeJson(storage, `${VOCAB_COUNT_PREFIX}${moduleId}`, {});
            Object.values(questionBucket && typeof questionBucket === 'object' ? questionBucket : {}).forEach((record) => {
                if (!record || typeof record !== 'object') return;
                const wordId = String(record.wordId || record.wordLabel || '').trim();
                const wrongCount = Math.max(1, safeNumber(countBucket[wordId]));
                const copy = getVocabularyTopicCopy(module, 'sentence');
                const url = getVocabularyModuleUrl(moduleId, 'sentence');
                const timestamp = toTimestamp(record.lastWrongAt);
                section.pending += 1;
                section.wrong += wrongCount;
                mergeTopic(topicMap, {
                    id: `${moduleId}-sentence`,
                    ...copy,
                    wrongCount,
                    pendingCount: 1,
                    lastAt: timestamp,
                    url,
                    chip: `語彙・${module.label}`
                });
                section.recent.push({
                    timestamp,
                    title: wordId ? `「${wordId}」の文脈問題` : `${module.label}の文脈問題`,
                    source: `${level} ${module.label}・例文練習`,
                    result: `${wrongCount}回ミス`,
                    url
                });
            });

            ['reading', 'meaning'].forEach((kind) => {
                const wordBucket = safeJson(storage, `${VOCAB_TYPED_WORD_PREFIX}${moduleId}::${kind}`, {});
                const typedCountBucket = safeJson(storage, `${VOCAB_TYPED_COUNT_PREFIX}${moduleId}::${kind}`, {});
                Object.values(wordBucket && typeof wordBucket === 'object' ? wordBucket : {}).forEach((record) => {
                    if (!record || typeof record !== 'object') return;
                    const wordId = String(record.wordId || record.word || record.wordLabel || '').trim();
                    const wrongCount = Math.max(1, safeNumber(typedCountBucket[wordId]));
                    const copy = getVocabularyTopicCopy(module, kind);
                    const url = getVocabularyModuleUrl(moduleId, kind);
                    const timestamp = toTimestamp(record.lastWrongAt);
                    section.pending += 1;
                    section.wrong += wrongCount;
                    mergeTopic(topicMap, {
                        id: `${moduleId}-${kind}`,
                        ...copy,
                        wrongCount,
                        pendingCount: 1,
                        lastAt: timestamp,
                        url,
                        chip: `語彙・${module.label}`
                    });
                    section.recent.push({
                        timestamp,
                        title: wordId ? `「${wordId}」${kind === 'reading' ? 'の読み' : 'の意味'}` : copy.title,
                        source: `${level} ${module.label}・${kind === 'reading' ? '読み方' : '意味'}`,
                        result: `${wrongCount}回ミス`,
                        url
                    });
                });
            });
        });

        if (level === 'N1') {
            const pastStore = safeJson(storage, PAST_VOCAB_STORE_KEY, { records: {} });
            Object.values(pastStore && pastStore.records && typeof pastStore.records === 'object' ? pastStore.records : {}).forEach((record) => {
                if (!record || typeof record !== 'object') return;
                const category = String(record.category || '過去問語彙');
                const wrongCount = Math.max(1, safeNumber(record.wrongCount));
                const timestamp = toTimestamp(record.lastWrongAt);
                const url = 'exam/vocabulary/n1/past_vocab_n1.html';
                section.pending += 1;
                section.wrong += wrongCount;
                mergeTopic(topicMap, {
                    id: `past-${category}`,
                    title: `過去問語彙・${category}`,
                    note: '過去問で繰り返し間違えた語彙',
                    wrongCount,
                    pendingCount: 1,
                    lastAt: timestamp,
                    url,
                    chip: '語彙・過去問'
                });
                section.recent.push({ timestamp, title: category, source: 'N1 過去問語彙', result: `${wrongCount}回ミス`, url });
            });
        }

        return finishSection(section, topicMap);
    }

    function getGrammarCategoryName(categoryId) {
        return GRAMMAR_CATEGORY_NAMES[categoryId] || String(categoryId || '未分類の文法項目').replace(/^k\d+-/, '').replace(/-/g, '・');
    }

    function collectGrammar(storage, level) {
        const section = createSection('grammar');
        const topicMap = createTopicMap();
        const store = safeJson(storage, GRAMMAR_STORE_KEY, { questions: {} });
        Object.entries(store && store.questions && typeof store.questions === 'object' ? store.questions : {}).forEach(([questionId, record]) => {
            if (!record || String(record.level || '').toUpperCase() !== level) return;
            const attemptCount = safeNumber(record.attemptCount);
            const correctCount = Math.min(attemptCount, safeNumber(record.correctCount));
            const wrongCount = Math.min(attemptCount || Number.MAX_SAFE_INTEGER, safeNumber(record.wrongCount));
            const active = Boolean(record.activeMistake) && wrongCount > 0;
            const categoryId = String(record.categoryId || 'uncategorized');
            const categoryName = getGrammarCategoryName(categoryId);
            const timestamp = toTimestamp(record.lastAttemptAt || record.lastWrongAt);
            const params = new URLSearchParams({
                level,
                mode: 'review',
                mistakeBy: 'category',
                mistakeKey: categoryId,
                mistakeScope: 'active'
            });
            const url = `exam/grammar/grammar/index.html?${params.toString()}`;
            section.attempts += attemptCount;
            section.correct += correctCount;
            section.wrong += wrongCount;
            if (active) section.pending += 1;
            if (wrongCount > 0) {
                mergeTopic(topicMap, {
                    id: categoryId,
                    title: categoryName,
                    note: active ? '現在も復習が必要な問題があります' : '過去に間違えた文法項目',
                    wrongCount,
                    pendingCount: active ? 1 : 0,
                    attemptCount,
                    correctCount,
                    lastAt: timestamp,
                    url,
                    chip: `文法・${categoryName}`
                });
            }
            if (attemptCount > 0) {
                const accuracy = Math.round((correctCount / attemptCount) * 100);
                section.recent.push({
                    timestamp,
                    title: categoryName,
                    source: `${level} 文法・${record.year || questionId}`,
                    result: `${accuracy}%`,
                    isLow: accuracy < 70,
                    url
                });
            }
        });
        return finishSection(section, topicMap);
    }

    function normalizeReadingType(value) {
        const type = String(value || '').toLowerCase();
        if (type === 'mid' || type === 'medium') return 'middle';
        if (type === 'd') return 'integrated';
        if (type === 't') return 'search';
        if (type === 'l') return 'long';
        return type;
    }

    function getReadingUrl(record) {
        const type = normalizeReadingType(record.type);
        const meta = READING_TYPES[type];
        const level = String(record.level || 'N2').toLowerCase();
        const normalizedExamKey = String(record.examKey || '');
        const examMatch = normalizedExamKey.match(/^(\d{4})-(\d{1,2})$/);
        const examKey = examMatch ? `${examMatch[1]}.${Number(examMatch[2])}` : normalizedExamKey.replace('-', '.');
        const page = Math.max(1, Number.parseInt(record.page, 10) || 1);
        if (!meta || !examKey) return SECTION_META.reading.overviewUrl;
        const params = new URLSearchParams({ page: String(page), examKey: String(record.examKey || ''), mode: 'review' });
        return `exam/jlpt-reading/${meta.path}/${level}/${examKey}.html?${params.toString()}`;
    }

    function collectReading(storage, level) {
        const section = createSection('reading');
        const topicMap = createTopicMap();
        const records = safeJson(storage, READING_STORE_KEY, {});
        Object.values(records && typeof records === 'object' ? records : {}).forEach((record) => {
            if (!record || String(record.level || '').toUpperCase() !== level) return;
            const type = normalizeReadingType(record.type);
            const typeMeta = READING_TYPES[type] || { name: type || '読解', path: 's' };
            const attemptCount = safeNumber(record.attemptCount);
            const correctCount = Math.min(attemptCount, safeNumber(record.correctCount));
            const wrongCount = Math.min(attemptCount || Number.MAX_SAFE_INTEGER, safeNumber(record.wrongCount));
            const active = Boolean(record.activeMistake) && wrongCount > 0;
            const timestamp = toTimestamp(record.lastAttemptAt || record.lastWrongAt || record.lastAnalysisWrongAt);
            const url = getReadingUrl(record);
            section.attempts += attemptCount;
            section.correct += correctCount;
            section.wrong += wrongCount;
            if (active) section.pending += 1;

            const questionPoints = record.questionPointWrongCounts && typeof record.questionPointWrongCounts === 'object'
                ? Object.entries(record.questionPointWrongCounts)
                : [];
            if (questionPoints.length) {
                questionPoints.forEach(([point, count]) => {
                    mergeTopic(topicMap, {
                        id: `point-${hashText(point)}`,
                        title: point,
                        note: record.lastOptionErrorPoint ? `直近の誤り：${record.lastOptionErrorPoint}` : `${typeMeta.name}で繰り返し出現`,
                        wrongCount: safeNumber(count),
                        pendingCount: active ? 1 : 0,
                        lastAt: record.lastAnalysisWrongAt || timestamp,
                        url,
                        chip: `読解・${point}`,
                        minutes: 30
                    });
                });
            } else if (wrongCount > 0) {
                mergeTopic(topicMap, {
                    id: `type-${type}`,
                    title: `${typeMeta.name}・設問判断`,
                    note: '誤答した設問を本文の根拠と一緒に確認',
                    wrongCount,
                    pendingCount: active ? 1 : 0,
                    attemptCount,
                    correctCount,
                    lastAt: timestamp,
                    url,
                    chip: `読解・${typeMeta.name}`,
                    minutes: 30
                });
            }

            if (attemptCount > 0) {
                const accuracy = Math.round((correctCount / attemptCount) * 100);
                section.recent.push({
                    timestamp,
                    title: `${typeMeta.name}・${String(record.examKey || '').replace('-', '.')}`,
                    source: `${level} 読解・第${Math.max(1, Number(record.page) || 1)}篇`,
                    result: `${accuracy}%`,
                    isLow: accuracy < 70,
                    url
                });
            }
        });
        return finishSection(section, topicMap);
    }

    function collectListening(storage, level) {
        const section = createSection('listening');
        const topicMap = createTopicMap();
        const levelKey = level.toLowerCase();
        const keys = getStorageKeys(storage);
        Object.entries(LISTENING_TYPES).forEach(([type, meta]) => {
            const mistakePrefix = `listening_mistakes::${type}::${levelKey}::`;
            let typePending = 0;
            let latestExamKey = '';
            keys.filter((key) => key.startsWith(mistakePrefix)).forEach((key) => {
                const ids = safeJson(storage, key, []);
                const count = Array.isArray(ids) ? new Set(ids.map((item) => String(item))).size : 0;
                if (!count) return;
                typePending += count;
                const examKey = key.slice(mistakePrefix.length);
                if (examKey.localeCompare(latestExamKey) > 0) latestExamKey = examKey;
            });
            const lastPractice = String(storage.getItem(`listening_last_practice::${type}::${levelKey}`) || latestExamKey || '');
            const url = `exam/listening/${type}/${levelKey}/index.html?browse=mistakes`;
            if (typePending > 0) {
                section.pending += typePending;
                section.wrong += typePending;
                mergeTopic(topicMap, {
                    id: type,
                    title: meta.name,
                    note: meta.note,
                    wrongCount: typePending,
                    pendingCount: typePending,
                    url,
                    chip: `聴解・${meta.name}`,
                    minutes: 25
                });
            }
            if (lastPractice) {
                section.recent.push({
                    timestamp: 0,
                    title: `${meta.name}・${lastPractice.replace('-', '.')}`,
                    source: `${level} 聴解`,
                    result: typePending > 0 ? `${typePending}問要復習` : '記録あり',
                    isLow: typePending > 0,
                    url
                });
            }
        });
        return finishSection(section, topicMap);
    }

    function collect(targetLevel, providedStorage) {
        const storage = providedStorage || global.localStorage;
        const level = normalizeLevel(targetLevel);
        return {
            level,
            generatedAt: Date.now(),
            sections: {
                vocabulary: collectVocabulary(storage, level),
                grammar: collectGrammar(storage, level),
                reading: collectReading(storage, level),
                listening: collectListening(storage, level)
            }
        };
    }

    global.StudyPlanInsights = Object.freeze({ collect });
})(window);
