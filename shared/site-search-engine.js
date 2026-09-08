(function (root, factory) {
    const api = factory();
    if (typeof module === "object" && module.exports) module.exports = api;
    else root.KikiSiteSearch = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
    "use strict";
    const categories = [
        ["all", "全部"], ["grammar", "语法"], ["textbook", "教材"],
        ["exam", "备考"], ["reading", "阅读文化"], ["word", "词汇"], ["entry", "栏目入口"]
    ];
    const variants = Object.fromEntries([..."語學習讀読聽聴練詞単單會話動體変態時間讓譲"].map((char, i) => [char, [..."语学习读读听听练词单单会话动体变态时间让让"][i]]));
    function normalize(value) {
        return String(value || "").replace(/<[^>]*>/g, " ")
            .replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&")
            .normalize("NFKC").toLowerCase()
            .replace(/[ァ-ヶ]/g, char => String.fromCharCode(char.charCodeAt(0) - 0x60))
            .replace(/[語學習讀読聽聴練詞単單會話動體変態時間讓譲]/g, char => variants[char])
            .replace(/语法/g, "文法").replace(/词汇|语彙/g, "词汇")
            .replace(/听力|听解/g, "听解").replace(/阅读|读解/g, "读解")
            .replace(/けいご|keigo/g, "敬语")
            .replace(/[~～〜!！·・]/g, "").replace(/\s+/g, " ").trim();
    }
    function tokens(query) {
        return [...new Set(normalize(query).replace(/(n[1-5])(?=[^a-z0-9\s])/g, "$1 ")
            .replace(/([^a-z0-9\s])(n[1-5])/g, "$1 $2").split(/[\s,，、;；]+/).filter(Boolean))];
    }
    function levels(value) {
        return [...new Set((String(value || "").normalize("NFKC").toUpperCase().match(/N[1-5](?!\d)/g) || []))];
    }
    function prepare(entries) {
        const seen = new Map();
        entries.forEach(entry => {
            // Merge duplicate links, but retain distinct grammar and word records.
            const key = entry.action === "link" ? "link:" + String(entry.href || "").replace(/([?&])return=[^&#]*&?/, "$1").replace(/[?&]$/, "") : entry.id;
            if (!key) return;
            const existing = seen.get(key);
            // A book entrance and lesson 1 can have the same URL. Keep the
            // actual lesson title so searching its name still finds the page.
            if (!existing || (entry.lessonNumber && !existing.lessonNumber)) seen.set(key, entry);
        });
        return [...seen.values()].map(entry => ({
            ...entry,
            levels: entry.levels || levels([entry.level, entry.tag, entry.title].join(" ")),
            normalized: Object.fromEntries(["title", "reading", "tag", "desc", "extra"].map(key => [key, normalize(entry[key])]))
        }));
    }
    function includes(text, token) {
        return /^n[1-5]$/.test(token) ? new RegExp("(^|[^a-z0-9])" + token + "(?![0-9])").test(text) : text.includes(token);
    }
    function match(entry, query, queryTokens) {
        const fields = entry.normalized;
        const haystack = Object.values(fields).join(" ") + " " + entry.levels.join(" ").toLowerCase();
        if (!queryTokens.every(token => includes(haystack, token))) return null;
        const contentTokens = queryTokens.filter(token => !/^n[1-5]$/.test(token));
        const phrase = contentTokens.join(" ") || query;
        let tier = 1;
        let reason = "相关内容";
        if (fields.title === query || (contentTokens.length && fields.title === phrase)) { tier = 7; reason = "标题完全匹配"; }
        else if (fields.title.startsWith(phrase)) { tier = 6; reason = "标题匹配"; }
        else if (fields.title.includes(phrase)) { tier = 5; reason = "标题匹配"; }
        else if (contentTokens.length && contentTokens.every(token => includes(fields.title, token))) { tier = 4; reason = "标题匹配"; }
        else if (fields.reading && includes(fields.reading, phrase)) { tier = 4; reason = "读音匹配"; }
        else if (includes(fields.desc, phrase)) { tier = 3; reason = "释义匹配"; }
        else if (includes(fields.tag, phrase) || !contentTokens.length) { tier = 2; reason = "标签匹配"; }
        return { ...entry, matchTier: tier, matchReason: reason };
    }
    function priority(entry, sort) {
        const kind = entry.kind || entry.category;
        const orders = {
            relevance: ["lesson", "textbook", "grammar", "exam", "reading", "word", "entry"],
            learning: ["lesson", "textbook", "grammar", "exam", "reading", "word", "entry"],
            items: ["grammar", "word", "lesson", "textbook", "exam", "reading", "entry"],
            practice: ["exam", "lesson", "grammar", "textbook", "word", "reading", "entry"]
        };
        const index = (orders[sort] || orders.relevance).indexOf(kind);
        return index < 0 ? 9 : index;
    }
    function search(index, query, options = {}) {
        const normalizedQuery = normalize(query);
        const queryTokens = tokens(query);
        const category = categories.some(([id]) => id === options.category) ? options.category : "all";
        const level = /^(N[1-5]|ungraded)$/.test(options.level) ? options.level : "all";
        const sort = ["relevance", "learning", "items", "practice"].includes(options.sort) ? options.sort : "relevance";
        const matches = queryTokens.length ? index.map(entry => match(entry, normalizedQuery, queryTokens)).filter(Boolean) : [];
        const byLevel = matches.filter(entry => level === "all" || (level === "ungraded" ? !entry.levels.length : entry.levels.includes(level)));
        const counts = Object.fromEntries(categories.map(([id]) => [id, id === "all" ? byLevel.length : byLevel.filter(entry => entry.category === id).length]));
        const results = byLevel.filter(entry => category === "all" || entry.category === category).sort((a, b) => {
            // Relevance is never drowned out by an arbitrary content-type bonus.
            const tierDiff = b.matchTier - a.matchTier;
            const priorityDiff = priority(a, sort) - priority(b, sort);
            const lessonOrder = a.lessonNumber && b.lessonNumber && a.level === b.level ? a.lessonNumber - b.lessonNumber : 0;
            return tierDiff || priorityDiff || lessonOrder || a.title.length - b.title.length || String(a.id).localeCompare(String(b.id));
        });
        return { results, counts, total: results.length, unfilteredTotal: matches.length };
    }
    return { categories, normalize, tokens, levels, prepare, search };
});
