(function () {
    "use strict";

    if (window.__kikiVocabularyLevelSwitcherLoaded) return;
    window.__kikiVocabularyLevelSwitcherLoaded = true;

    const ROUTES = {
        verbs: {
            N1: "../n1/verbs_n1.html",
            N2: "../n2/verbs_n2.html"
        },
        adjectives: {
            N1: "../n1/adjectives_n1.html",
            N2: "../n2/adjectives_n2.html"
        },
        adverbs: {
            N1: "../n1/adverbs_n1.html",
            N2: "../n2/adverbs_n2.html"
        },
        mimetic: {
            N1: "../n1/mimetic_n1.html"
        },
        loanwords: {
            N1: "../n1/loanwords_n1.html"
        }
    };

    function pageConfig() {
        const path = decodeURIComponent(window.location.pathname).toLowerCase();
        const fileName = path.split("/").pop() || "";
        const category = Object.keys(ROUTES).find((key) => fileName.startsWith(`${key}_n`));
        if (!category) return null;
        return {
            category,
            currentLevel: path.includes("/n2/") ? "N2" : "N1",
            routes: ROUTES[category]
        };
    }

    function createButton(level, config) {
        const button = document.createElement("button");
        const route = config.routes[level];
        const isActive = config.currentLevel === level;
        button.type = "button";
        button.className = `vocabulary-level-tab${isActive ? " is-active" : ""}`;
        button.textContent = level;
        button.setAttribute("aria-label", route ? `切换到 ${level} 词汇` : `${level} 内容暂未开放`);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
        if (isActive) button.setAttribute("aria-current", "page");
        if (!route) {
            button.disabled = true;
            button.title = `${level} 内容暂未开放`;
        } else if (!isActive) {
            button.addEventListener("click", function () {
                window.location.assign(new URL(route, window.location.href).href);
            });
        }
        return button;
    }

    function mount() {
        const config = pageConfig();
        const heading = document.querySelector("#days-view .directory-section-heading");
        if (!config || !heading || heading.querySelector(".vocabulary-level-switcher")) return;

        const oldHint = Array.from(heading.children).find((element) => element.tagName === "P");
        if (oldHint) oldHint.remove();

        const switcher = document.createElement("div");
        switcher.className = "vocabulary-level-switcher";
        switcher.setAttribute("aria-label", "切换词汇等级");

        const label = document.createElement("span");
        label.className = "vocabulary-level-switcher-label";
        label.textContent = "级别";

        const tabs = document.createElement("div");
        tabs.className = "vocabulary-level-tabs";
        tabs.setAttribute("role", "group");
        tabs.append(createButton("N1", config), createButton("N2", config));

        switcher.append(label, tabs);
        heading.appendChild(switcher);
    }

    const daysView = document.getElementById("days-view");
    if (daysView) {
        new MutationObserver(mount).observe(daysView, { childList: true, subtree: true });
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", mount, { once: true });
    } else {
        mount();
    }
})();
