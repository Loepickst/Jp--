(function () {
    const FONT_KEY = "kikiDailyReadingFontScaleV1";
    const FAVORITES_KEY = "kikiDailyReadingFavoritesV1";
    const RECENT_KEY = "kikiDailyReadingRecentV1";
    const SIDEBAR_KEY = "kikiDailyReadingSidebarV1";

    const article = document.querySelector("[data-reading-article]");
    const tooltip = document.getElementById("smart-tooltip");
    const toast = document.querySelector("[data-reading-toast]");

    if (!article) return;

    const articleId = article.getAttribute("data-article-id") || location.pathname;
    const articleTitle = article.getAttribute("data-article-title") || document.title;
    const articleUrl = article.getAttribute("data-article-url") || location.pathname.split("/").pop();

    function readJson(key, fallback) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch (error) {
            return fallback;
        }
    }

    function writeJson(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // Local storage can be unavailable in strict browser modes.
        }
    }

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("is-visible");
        clearTimeout(showToast.timer);
        showToast.timer = setTimeout(() => {
            toast.classList.remove("is-visible");
        }, 1600);
    }

    function getProjectRelativeArticlePath() {
        let pathname = "";
        try {
            pathname = decodeURIComponent(window.location.pathname || "");
        } catch (error) {
            pathname = window.location.pathname || "";
        }
        const segments = pathname.split("/").filter(Boolean);
        const dailyIndex = segments.indexOf("daily");
        return dailyIndex >= 0 ? segments.slice(dailyIndex).join("/") : pathname.replace(/^\/+/, "");
    }

    function setupRecentReading() {
        if (articleId === "阅读模版.html" || articleUrl === "阅读模版.html") {
            return;
        }
        const path = getProjectRelativeArticlePath();
        if (!/^daily\/light-read\/daily\/[^/]+\.html$/i.test(path)) {
            return;
        }
        writeJson(RECENT_KEY, {
            id: articleId,
            path,
            openedAt: new Date().toISOString()
        });
    }

    function setupEditorialHeader() {
        const header = document.querySelector(".reading-article-header");
        if (!header || header.querySelector(".reading-article-eyebrow")) return;
        const eyebrow = document.createElement("p");
        eyebrow.className = "reading-article-eyebrow";
        eyebrow.textContent = "日常のことば · N1";
        header.prepend(eyebrow);
    }

    function iconPanel() {
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m13 6-6 6 6 6m6-12-6 6 6 6"/></svg>';
    }

    function setupLearningSidebar() {
        const sidebar = document.querySelector(".reading-sidebar");
        if (!sidebar || sidebar.dataset.assistReady === "true") return;
        sidebar.dataset.assistReady = "true";
        sidebar.setAttribute("aria-label", "词汇学习辅助");

        const toolbar = document.createElement("div");
        toolbar.className = "reading-sidebar-toolbar";
        const button = document.createElement("button");
        button.className = "reading-sidebar-toggle";
        button.type = "button";
        button.setAttribute("aria-controls", "reading-learning-sidebar-content");
        button.innerHTML = `${iconPanel()}<span data-sidebar-label>词汇学习</span>`;
        toolbar.append(button);

        const content = document.createElement("div");
        content.className = "reading-sidebar-content";
        content.id = "reading-learning-sidebar-content";
        buildStudyVocabulary(content);
        sidebar.replaceChildren(toolbar, content);
        // The DOM follows the visual order: auxiliary rail, then the article.
        article.parentNode.insertBefore(sidebar, article);

        let saved = null;
        try {
            saved = localStorage.getItem(SIDEBAR_KEY);
        } catch (error) {
            // An unavailable preference store must not prevent reading.
        }
        const wideScreen = window.matchMedia("(min-width: 1200px)");
        let desktopCollapsed = saved === "collapsed";
        let compactCollapsed = true;
        const isCollapsed = () => wideScreen.matches ? desktopCollapsed : compactCollapsed;

        function sync(restoreFocus = false) {
            const collapsed = isCollapsed();
            if (collapsed && content.contains(document.activeElement)) restoreFocus = true;
            document.body.classList.toggle("is-reading-sidebar-collapsed", collapsed);
            button.setAttribute("aria-expanded", String(!collapsed));
            button.setAttribute("aria-label", collapsed ? "展开词汇学习" : "收起词汇学习");
            content.hidden = collapsed;
            content.setAttribute("aria-hidden", String(collapsed));
            if (restoreFocus) button.focus({ preventScroll: true });
        }

        function collapse(restoreFocus = false) {
            if (wideScreen.matches) {
                desktopCollapsed = true;
                try { localStorage.setItem(SIDEBAR_KEY, "collapsed"); } catch (error) {}
            } else {
                compactCollapsed = true;
            }
            sync(restoreFocus);
        }

        button.addEventListener("click", () => {
            if (wideScreen.matches) {
                desktopCollapsed = !desktopCollapsed;
                try {
                    localStorage.setItem(SIDEBAR_KEY, desktopCollapsed ? "collapsed" : "expanded");
                } catch (error) {}
            } else {
                compactCollapsed = !compactCollapsed;
            }
            sync();
        });
        sidebar.addEventListener("keydown", (event) => {
            if (event.key !== "Escape" || isCollapsed()) return;
            event.preventDefault();
            collapse(true);
        });
        document.addEventListener("click", (event) => {
            if (!wideScreen.matches && !isCollapsed() && !sidebar.contains(event.target)) collapse();
        });
        const onBreakpointChange = () => {
            compactCollapsed = true;
            sync();
        };
        if (typeof wideScreen.addEventListener === "function") {
            wideScreen.addEventListener("change", onBreakpointChange);
        } else {
            wideScreen.addListener(onBreakpointChange);
        }
        sync();
    }

    function stripRubyText(element) {
        const clone = element.cloneNode(true);
        clone.querySelectorAll("rt").forEach((rt) => rt.remove());
        return clone.textContent.replace(/\s+/g, " ").trim();
    }

    function getStudyVocabulary() {
        const seen = new Set();
        return Array.from(article.querySelectorAll(".vocab-word")).map((element) => {
            const info = (element.getAttribute("data-info") || "").trim();
            const separator = info.search(/[：:]/);
            const head = separator >= 0 ? info.slice(0, separator).trim() : stripRubyText(element);
            const meaning = separator >= 0 ? info.slice(separator + 1).trim() : info;
            const readingMatch = head.match(/^(.+?)[（(]([^）)]+)[）)]$/);
            return {
                word: readingMatch ? readingMatch[1].trim() : head,
                reading: readingMatch ? readingMatch[2].trim() : "",
                meaning
            };
        }).filter((entry) => {
            if (!entry.word || !entry.meaning) return false;
            const key = JSON.stringify([entry.word, entry.reading, entry.meaning]);
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    }

    function buildStudyVocabulary(content) {
        const entries = getStudyVocabulary();
        const summary = document.createElement("p");
        summary.className = "reading-assist-vocab-summary";
        summary.textContent = entries.length ? `${entries.length} 个词汇` : "这篇文章尚未添加词汇解释。";
        content.append(summary);
        if (!entries.length) return;

        const list = document.createElement("ul");
        list.className = "reading-assist-vocab-list";
        list.setAttribute("aria-label", "本文词汇解释");
        // Explicit list semantics remain available when list markers are removed.
        list.setAttribute("role", "list");
        const sources = window.KikiReadingPronunciations?.entries || {};
        entries.forEach((entry) => {
            const item = document.createElement("li");
            item.className = "reading-assist-vocab-entry";
            const term = document.createElement("h2");
            term.className = "reading-assist-vocab-term";
            term.lang = "ja";
            term.textContent = entry.word;
            if (entry.reading) {
                const reading = document.createElement("span");
                reading.className = "reading-assist-vocab-reading";
                reading.textContent = entry.reading;
                term.append(reading);
            }
            const meaning = document.createElement("p");
            meaning.className = "reading-assist-vocab-meaning";
            meaning.lang = "zh-CN";
            meaning.textContent = entry.meaning;
            const sound = document.createElement("button");
            sound.type = "button";
            sound.className = "reading-assist-vocab-sound";
            sound.dataset.pronounce = "";
            sound.dataset.pronounceText = entry.word;
            sound.dataset.pronounceReading = entry.reading || entry.word;
            sound.dataset.pronounceLang = "ja-JP";
            sound.dataset.pronounceRate = "0.92";
            sound.dataset.wordBankIgnore = "true";
            const source = String(sources[entry.reading] || sources[entry.word] || "").trim();
            if (source) sound.dataset.pronounceSrc = source;
            sound.dataset.pronounceProvider = source ? "microsoft-neural" : "browser";
            sound.setAttribute("aria-label", `朗读 ${entry.word}`);
            sound.setAttribute("aria-pressed", "false");
            sound.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M4 9v6h4l5 4V5L8 9H4Zm12 0a5 5 0 0 1 0 6m3-9a9 9 0 0 1 0 12"/></svg>';
            item.append(term, sound, meaning);
            list.append(item);
        });
        content.append(list);
    }

    function setupTranslation() {
        const button = document.querySelector("[data-reading-action='translation']");
        if (!button) return;
        button.addEventListener("click", () => {
            const active = document.body.classList.toggle("is-translation-visible");
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
            showToast(active ? "訳文を表示しました" : "訳文を隠しました");
        });
    }

    function setupFontPicker() {
        const picker = document.querySelector(".reading-font-picker");
        if (!picker || picker.dataset.ready === "true") return;
        picker.dataset.ready = "true";
        const trigger = picker.querySelector("[data-reading-font-trigger]");
        const panel = picker.querySelector(".reading-font-popover");
        const slider = picker.querySelector("[data-reading-font-range]");
        const output = picker.querySelector("[data-reading-font-output]");
        const phoneScreen = window.matchMedia("(max-width: 720px)");
        let saved = "base";
        try { saved = localStorage.getItem(FONT_KEY) || "base"; } catch (error) {}

        function syncSize() {
            const legacy = phoneScreen.matches
                ? { small: 15, base: 17, large: 19 }
                : { small: 16, base: 18, large: 20 };
            const candidate = Object.prototype.hasOwnProperty.call(legacy, saved) ? legacy[saved] : Number(saved);
            const size = Number.isFinite(candidate) && candidate >= 15 && candidate <= 24
                ? Math.round(candidate) : legacy.base;
            document.body.style.setProperty("--reading-body-size", `${size}px`);
            slider.value = String(size);
            slider.style.setProperty("--reading-font-progress", `${((size - 15) / 9) * 100}%`);
            slider.setAttribute("aria-valuetext", `${size} 像素`);
            output.textContent = `${size}px`;
        }
        function setOpen(open, restoreFocus = false) {
            panel.hidden = !open;
            trigger.setAttribute("aria-expanded", String(open));
            if (open) slider.focus({ preventScroll: true });
            else if (restoreFocus) trigger.focus({ preventScroll: true });
        }
        trigger.addEventListener("click", () => setOpen(panel.hidden));
        slider.addEventListener("input", () => {
            saved = slider.value;
            syncSize();
            try { localStorage.setItem(FONT_KEY, saved); } catch (error) {}
        });
        document.addEventListener("click", (event) => {
            if (!panel.hidden && !picker.contains(event.target)) setOpen(false);
        });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && !panel.hidden) {
                event.preventDefault();
                setOpen(false, true);
            }
        });
        picker.addEventListener("focusout", (event) => {
            if (event.relatedTarget && !picker.contains(event.relatedTarget)) setOpen(false);
        });
        if (typeof phoneScreen.addEventListener === "function") {
            phoneScreen.addEventListener("change", syncSize);
        } else {
            phoneScreen.addListener(syncSize);
        }
        syncSize();
    }

    function articlePayload(extra) {
        return {
            id: articleId,
            title: articleTitle,
            url: articleUrl,
            updatedAt: new Date().toISOString(),
            ...extra
        };
    }

    function setupFavorites() {
        const buttons = document.querySelectorAll("[data-reading-action='favorite']");
        const sync = () => {
            const favorites = readJson(FAVORITES_KEY, {});
            const active = Boolean(favorites[articleId]);
            buttons.forEach((button) => {
                button.classList.toggle("is-active", active);
                button.setAttribute("aria-pressed", String(active));
                const accessibleLabel = active
                    ? "お気に入りを解除"
                    : (button.getAttribute("data-default-label") || "お気に入りに追加");
                button.setAttribute("aria-label", accessibleLabel);
                button.title = accessibleLabel;
                const label = button.querySelector("[data-label]");
                if (label) label.textContent = active ? "保存済み" : (button.getAttribute("data-default-label") || "お気に入りに追加");
            });
        };

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const favorites = readJson(FAVORITES_KEY, {});
                if (favorites[articleId]) {
                    delete favorites[articleId];
                    writeJson(FAVORITES_KEY, favorites);
                    showToast("保存を解除しました");
                } else {
                    favorites[articleId] = articlePayload({ createdAt: new Date().toISOString() });
                    writeJson(FAVORITES_KEY, favorites);
                    showToast("お気に入りに追加しました");
                }
                sync();
            });
        });

        sync();
    }

    function sameNavigationTarget(a, b) {
        return a.origin === b.origin
            && a.pathname === b.pathname
            && a.search === b.search
            && a.hash === b.hash;
    }

    function setupReadingBackNavigation() {
        const backLink = document.querySelector(".reading-head-back");
        if (!backLink) return;

        const rawReturn = new URLSearchParams(window.location.search).get("return")
            || "../../../index.html#daily/daily-light-read";
        let targetUrl;
        try {
            targetUrl = new URL(rawReturn, window.location.href);
        } catch (error) {
            targetUrl = new URL("../../../index.html#daily/daily-light-read", window.location.href);
        }

        backLink.href = targetUrl.href;
        backLink.addEventListener("click", (event) => {
            event.preventDefault();
            try {
                const referrerUrl = document.referrer ? new URL(document.referrer, window.location.href) : null;
                if (referrerUrl && sameNavigationTarget(referrerUrl, targetUrl) && window.history.length > 1) {
                    window.history.back();
                    return;
                }
            } catch (error) {
                // Fall back to the canonical home panel.
            }

            window.location.href = targetUrl.href;
        });
    }

    function setupTooltip() {
        if (!tooltip) return;
        let activeWord = null;
        let hideTimer = null;

        const hideTooltip = () => {
            if (!tooltip) return;
            tooltip.style.opacity = "0";
            tooltip.style.transform = "translateY(4px)";
            clearTimeout(hideTimer);
            hideTimer = setTimeout(() => {
                tooltip.style.display = "none";
            }, 160);
            activeWord = null;
        };

        document.querySelectorAll(".vocab-word").forEach((word) => {
            word.setAttribute("tabindex", "0");
            word.addEventListener("click", (event) => {
                event.stopPropagation();
                if (activeWord === word) {
                    hideTooltip();
                    return;
                }
                activeWord = word;
                tooltip.textContent = word.getAttribute("data-info") || stripRubyText(word);
                tooltip.style.display = "block";
                tooltip.style.transform = "translateY(0)";

                const rect = word.getBoundingClientRect();
                const tipRect = tooltip.getBoundingClientRect();
                const margin = 16;
                let left = rect.left + (rect.width / 2) - (tipRect.width / 2);
                let top = rect.top + window.scrollY - tipRect.height - 12;
                let arrowOffset = "50%";

                if (left < margin) {
                    left = margin;
                    arrowOffset = `${rect.left + rect.width / 2 - margin}px`;
                } else if (left + tipRect.width > window.innerWidth - margin) {
                    left = window.innerWidth - tipRect.width - margin;
                    arrowOffset = `${rect.left + rect.width / 2 - left}px`;
                }
                if (top < window.scrollY + margin) {
                    top = rect.bottom + window.scrollY + 12;
                }

                tooltip.style.left = `${left}px`;
                tooltip.style.top = `${top}px`;
                tooltip.style.opacity = "1";

                let styleTag = document.getElementById("daily-reading-tooltip-arrow");
                if (!styleTag) {
                    styleTag = document.createElement("style");
                    styleTag.id = "daily-reading-tooltip-arrow";
                    document.head.appendChild(styleTag);
                }
                styleTag.textContent = `#smart-tooltip::after { left: ${arrowOffset}; transform: translateX(-50%); }`;
            });

            word.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    word.click();
                }
            });
        });

        document.addEventListener("click", hideTooltip);
        window.addEventListener("resize", hideTooltip);
        window.addEventListener("scroll", hideTooltip, { passive: true });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") hideTooltip();
        });
    }


    setupRecentReading();
    setupEditorialHeader();
    setupLearningSidebar();
    setupTranslation();
    setupFontPicker();
    setupFavorites();
    setupReadingBackNavigation();
    setupTooltip();
    window.KikiReadingAudio?.setup();
})();
