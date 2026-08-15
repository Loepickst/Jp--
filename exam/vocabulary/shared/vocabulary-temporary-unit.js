(function () {
    'use strict';

    const STORAGE_PREFIX = 'kiji_vocab_temporary_unit::';
    const QUERY_KEY = 'temporaryUnit';

    function normalize(value) {
        return String(value == null ? '' : value).trim();
    }

    function storageKey(moduleKey) {
        return STORAGE_PREFIX + normalize(moduleKey);
    }

    function getDefaultWordId(word) {
        return normalize(word && (word.id || word.word || word.term));
    }

    function save(moduleKey, words, getWordId) {
        const identify = typeof getWordId === 'function' ? getWordId : getDefaultWordId;
        const wordIds = [];
        const seen = new Set();
        (Array.isArray(words) ? words : []).forEach((word) => {
            const wordId = normalize(identify(word));
            if (!wordId || seen.has(wordId)) return;
            seen.add(wordId);
            wordIds.push(wordId);
        });
        if (!moduleKey || wordIds.length === 0) return false;
        try {
            sessionStorage.setItem(storageKey(moduleKey), JSON.stringify({
                version: 1,
                moduleKey: normalize(moduleKey),
                wordIds,
                createdAt: Date.now()
            }));
            return true;
        } catch (error) {
            return false;
        }
    }

    function load(moduleKey) {
        try {
            const parsed = JSON.parse(sessionStorage.getItem(storageKey(moduleKey)) || 'null');
            if (!parsed || parsed.version !== 1 || !Array.isArray(parsed.wordIds)) return null;
            return parsed;
        } catch (error) {
            return null;
        }
    }

    function resolve(moduleKey, allWords, getWordId) {
        const currentUrl = new URL(location.href);
        if (currentUrl.searchParams.has(QUERY_KEY)) {
            currentUrl.searchParams.delete(QUERY_KEY);
            history.replaceState(history.state, '', currentUrl.href);
        }
        const saved = load(moduleKey);
        if (!saved) return [];
        const identify = typeof getWordId === 'function' ? getWordId : getDefaultWordId;
        const lookup = new Map();
        (Array.isArray(allWords) ? allWords : []).forEach((word) => {
            const ids = [identify(word), word && word.id, word && word.word].map(normalize).filter(Boolean);
            ids.forEach((wordId) => {
                if (!lookup.has(wordId)) lookup.set(wordId, word);
            });
        });
        return saved.wordIds.map((wordId) => lookup.get(normalize(wordId))).filter(Boolean);
    }

    function open(options) {
        const config = options || {};
        if (!save(config.moduleKey, config.words, config.getWordId)) return false;
        const target = new URL(String(config.url || location.href), location.href);
        target.searchParams.set(QUERY_KEY, '1');
        location.assign(target.href);
        return true;
    }

    function isRequested() {
        return new URLSearchParams(location.search).get(QUERY_KEY) === '1';
    }

    window.VocabularyTemporaryUnit = { save, load, resolve, open, isRequested };
}());
