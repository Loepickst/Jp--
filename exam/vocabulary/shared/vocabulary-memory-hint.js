(function (global) {
    'use strict';

    const HAN_PATTERN = /[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]+/g;
    const READING_OVERRIDES = Object.freeze({
        '相変わらず': 'あいかわらず',
        '当分': 'とうぶん',
        '絶えず': 'たえず',
        '前もって': 'まえもって',
        'いつの間に': 'いつのまに',
        '従来': 'じゅうらい',
        '今に': 'いまに',
        '今にも': 'いまにも',
        '近々': 'ちかぢか',
        '追って': 'おって',
        '時折': 'ときおり',
        '滅多に': 'めったに',
        '再三': 'さいさん',
        '年中': 'ねんじゅう',
        '一切': 'いっさい',
        '少しも': 'すこしも',
        '大（たい）して': 'たいして',
        '決して': 'けっして',
        '必ずしも': 'かならずしも',
        '一向': 'いっこう',
        '一見': 'いっけん',
        '万一': 'まんいち',
        '仮に': 'かりに',
        '強いて': 'しいて',
        '一体': 'いったい',
        '果たして': 'はたして',
        '何とぞ': 'なにとぞ',
        '危うく': 'あやうく',
        '案の定': 'あんのじょう'
    });

    function decodeBasicEntities(value) {
        return String(value || '')
            .replace(/&nbsp;/gi, ' ')
            .replace(/&amp;/gi, '&')
            .replace(/&lt;/gi, '<')
            .replace(/&gt;/gi, '>')
            .replace(/&quot;/gi, '"')
            .replace(/&#39;/gi, "'");
    }

    function toPlainText(value) {
        return decodeBasicEntities(value)
            .replace(/<[^>]*>/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function getReadingFromRuby(wordHtml) {
        const html = String(wordHtml || '');
        if (!html) return '';

        const readingText = html.replace(
            /<ruby[^>]*>[\s\S]*?<rt[^>]*>([\s\S]*?)<\/rt>[\s\S]*?<\/ruby>/gi,
            (_, reading) => toPlainText(reading)
        );
        return toPlainText(readingText);
    }

    function getReading(wordData, role) {
        const word = toPlainText(wordData && wordData.word);
        if (READING_OVERRIDES[word]) return READING_OVERRIDES[word];

        const explicitReading = toPlainText(wordData && wordData.reading);
        if (explicitReading && !HAN_PATTERN.test(explicitReading)) return explicitReading;
        HAN_PATTERN.lastIndex = 0;

        if (role === 'himari') {
            const mimeticAnswer = toPlainText(wordData && wordData.practice && wordData.practice.answer);
            if (mimeticAnswer) return mimeticAnswer;
        }

        const rubyReading = getReadingFromRuby(wordData && wordData.word_html);
        if (rubyReading) return rubyReading;
        return word;
    }

    function getKanjiAnchor(wordData) {
        const word = toPlainText(wordData && wordData.word);
        const matches = word.match(HAN_PATTERN);
        return matches ? matches.join('・') : '';
    }

    function getMeaning(wordData) {
        const meaning = toPlainText(wordData && wordData.mean)
            .split(/[；;]/)
            .map((item) => item.trim())
            .filter(Boolean)[0];
        return meaning || '这个意思';
    }

    function shortenScene(value) {
        const normalized = toPlainText(value)
            .replace(/^[“「『]|[”」』]$/g, '')
            .replace(/[。！？!?]+$/g, '')
            .trim();
        if (normalized.length <= 42) return normalized;

        const firstClause = normalized.split(/[，,；;]/)[0].trim();
        if (firstClause.length >= 12 && firstClause.length <= 42) {
            return firstClause;
        }
        return `${normalized.slice(0, 40).trim()}…`;
    }

    function getScene(wordData) {
        const examples = Array.isArray(wordData && wordData.examples) ? wordData.examples : [];
        const firstChineseExample = examples.find((item) => item && item.cn);
        const practice = wordData && wordData.practice;
        const collocation = wordData && wordData.collocation;
        const candidates = [
            firstChineseExample && firstChineseExample.cn,
            practice && practice.cn,
            wordData && wordData.usage,
            wordData && wordData.nuance,
            collocation && collocation.cn,
            wordData && wordData.mean
        ];

        for (const candidate of candidates) {
            const scene = shortenScene(candidate);
            if (scene) return scene;
        }
        return '这个词出现在句子里的瞬间';
    }

    const CURATED_MAP_NAMES = Object.freeze({
        amamiya: 'N1_VERB_MEMORY_HINTS',
        rin: 'N1_ADJECTIVE_MEMORY_HINTS',
        himari: 'N1_MIMETIC_MEMORY_HINTS',
        rina: 'N1_ADVERB_MEMORY_HINTS',
        yota: 'N1_LOANWORD_MEMORY_HINTS'
    });

    function getCuratedHint(wordData, role) {
        const mapName = CURATED_MAP_NAMES[role];
        const word = toPlainText(wordData && wordData.word);
        const hintMap = mapName && global[mapName];
        if (!word || !hintMap || typeof hintMap !== 'object') return '';
        const entryId = toPlainText(wordData && wordData.id);
        const reading = getReading(wordData, role);
        const lookupKeys = [
            entryId ? `id:${entryId}` : '',
            reading ? `${word}::${reading}` : '',
            word
        ].filter(Boolean);
        for (const key of lookupKeys) {
            const hint = toPlainText(hintMap[key]);
            if (hint) return hint;
        }
        return '';
    }

    function buildHint(wordData, role) {
        const curatedHint = getCuratedHint(wordData, role);
        if (curatedHint) return curatedHint;
        return getScene(wordData) || getMeaning(wordData);
    }

    global.VocabularyMemoryHint = Object.freeze({
        buildHint,
        getCuratedHint,
        getKanjiAnchor,
        getReading,
        getScene
    });
})(typeof window !== 'undefined' ? window : globalThis);
