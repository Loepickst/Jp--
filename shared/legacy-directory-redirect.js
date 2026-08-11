(function () {
    const REDIRECTS = {
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
        "exam/listening/immediate-response/index.html": "#exam/exam-listening/exam-listening-response",
        "exam/jlpt-reading/index.html": "#exam/exam-reading"
    };

    function getProjectRelativePath() {
        let pathname = "";
        try {
            pathname = decodeURIComponent(window.location.pathname || "");
        } catch (error) {
            pathname = window.location.pathname || "";
        }

        const segments = pathname.split("/").filter(Boolean);
        const markerIndex = segments.findIndex((segment) => segment === "daily" || segment === "exam");
        return markerIndex >= 0 ? segments.slice(markerIndex).join("/") : segments.join("/");
    }

    function getRootPrefix() {
        let pathname = "";
        try {
            pathname = decodeURIComponent(window.location.pathname || "");
        } catch (error) {
            pathname = window.location.pathname || "";
        }

        const segments = pathname.split("/").filter(Boolean);
        const markerIndex = segments.findIndex((segment) => segment === "daily" || segment === "exam");
        const depth = markerIndex >= 0
            ? Math.max(0, segments.length - markerIndex - 1)
            : Math.max(0, segments.length - 1);

        return depth ? "../".repeat(depth) : "";
    }

    function shouldKeepFunctionalQuery() {
        const params = new URLSearchParams(window.location.search || "");
        return Array.from(params.keys()).some((key) => key !== "return");
    }

    const hash = REDIRECTS[getProjectRelativePath()];
    if (!hash || shouldKeepFunctionalQuery()) {
        return;
    }

    window.location.replace(`${getRootPrefix()}index.html${hash}`);
})();
