(function (root, factory) {
    const routes = factory();
    if (typeof module === "object" && module.exports) module.exports = routes;
    if (!root || !root.document) return;
    root.KikiRoutes = routes;
    const script = root.document.currentScript;
    const projectRoot = new URL("../", script.src);
    // Resolve saved/old links before navigation, without visiting the old page.
    function directLink(event) {
        const anchor = event.target.closest && event.target.closest("a[href]");
        if (!anchor || anchor.hasAttribute("download")) return;
        const direct = routes.canonicalize(anchor.href, root.location.href, projectRoot);
        if (direct.href !== anchor.href) anchor.href = direct.href;
    }
    root.document.addEventListener("click", directLink, true);
    root.document.addEventListener("auxclick", directLink, true);
})(typeof window === "undefined" ? null : window, function () {
    "use strict";
    const directories = Object.freeze({
        "daily/grammar/index.html": "#daily/daily-grammar",
        "daily/light-read/index.html": "#daily/daily-light-read",
        "daily/light-read/daily/read_daily.html": "#daily/daily-light-read",
        "daily/light-read/folklore/read_folklore.html": "#daily/daily-light-read",
        "exam/vocabulary/index.html": "#exam/exam-vocabulary",
        "exam/vocabulary/n1/index.html": "#exam/exam-vocabulary",
        "exam/vocabulary/n2/index.html": "#exam/exam-vocabulary",
        "exam/grammar/index.html": "#exam/exam-grammar",
        "exam/listening/index.html": "#exam/exam-listening",
        "exam/listening/full-practice/index.html": "#exam/exam-listening/exam-listening-full",
        "exam/listening/task-comprehension/index.html": "#exam/exam-listening/exam-listening-task",
        "exam/listening/point-comprehension/index.html": "#exam/exam-listening/exam-listening-point",
        "exam/listening/summary-comprehension/index.html": "#exam/exam-listening/exam-listening-summary",
        "exam/listening/immediate-response/index.html": "#exam/exam-listening/exam-listening-response"
    });
    const aliases = Object.freeze({
        "daily/culture/index.html": "index.html#daily/daily-culture",
        "exam/grammar/grammar/n2/index.html": "exam/grammar/grammar/index.html?level=N2",
        "exam/grammar/grammar/n3/index.html": "exam/grammar/grammar/index.html?level=N3",
        "exam/jlpt-reading/s/n2/index.html": "exam/jlpt-reading/index.html?level=N2&type=short&browse=year",
        "exam/grammar/复合格助词.html": "daily/grammar/expressions/复合格助词.html",
        "exam/grammar/复合格助词练习.html": "daily/grammar/expressions/复合格助词练习.html"
    });

    function canonicalize(value, base, root, depth = 0) {
        const url = new URL(value, base);
        const projectRoot = new URL(root);
        if (url.origin !== projectRoot.origin || !url.pathname.startsWith(projectRoot.pathname)) return url;
        let path;
        try { path = decodeURIComponent(url.pathname.slice(projectRoot.pathname.length)); }
        catch (_) { return url; }
        let result = url;
        if (directories[path] && [...url.searchParams.keys()].every(key => key === "return")) {
            result = new URL("index.html" + directories[path], projectRoot);
        } else if (aliases[path]) {
            result = new URL(aliases[path], projectRoot);
            // These old exercise URLs keep their query/hash as well as the level.
            if (path !== "daily/culture/index.html") {
                for (const [key, value] of url.searchParams) {
                    if (!result.searchParams.has(key)) result.searchParams.append(key, value);
                }
                if (url.hash) result.hash = url.hash;
            }
        }
        // A return= URL is relative to its destination, not the source page.
        if (depth < 3 && result.searchParams.has("return")) {
            const oldBack = result.searchParams.get("return");
            try {
                const back = canonicalize(oldBack, url, projectRoot, depth + 1);
                if (back.href !== new URL(oldBack, url).href || result.pathname !== url.pathname) {
                    result.searchParams.set("return", back.href);
                }
            } catch (_) { /* Preserve user-provided return values that are not URLs. */ }
        }
        return result;
    }
    return { directories, aliases, canonicalize };
});
