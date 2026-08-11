(function () {
    const FAVORITES_KEY = "kikiDailyReadingFavoritesV1";
    const FONT_KEY = "kikiDailyReadingFontScaleV1";
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
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4 5h16v14H4zM15 5v14M7.5 9h4M7.5 12h4"/></svg>';
    }

    function setupLearningSidebar() {
        const sidebar = document.querySelector(".reading-sidebar");
        if (!sidebar) return;

        const toolbar = document.createElement("div");
        toolbar.className = "reading-sidebar-toolbar";
        const button = document.createElement("button");
        button.className = "reading-sidebar-toggle";
        button.type = "button";
        button.setAttribute("aria-controls", "reading-learning-sidebar-content");
        button.innerHTML = `${iconPanel()}<span data-sidebar-label></span>`;
        toolbar.append(button);
        sidebar.prepend(toolbar);

        const content = document.createElement("div");
        content.className = "reading-sidebar-content";
        content.id = "reading-learning-sidebar-content";
        Array.from(sidebar.querySelectorAll(":scope > .reading-side-card")).forEach((card) => content.append(card));
        sidebar.append(content);

        let saved = null;
        try {
            saved = localStorage.getItem(SIDEBAR_KEY);
        } catch (error) {
            saved = null;
        }
        let collapsed = saved === "collapsed";

        const sync = (persist = false) => {
            document.body.classList.toggle("is-reading-sidebar-collapsed", collapsed);
            button.setAttribute("aria-expanded", String(!collapsed));
            content.setAttribute("aria-hidden", String(collapsed));
            const label = button.querySelector("[data-sidebar-label]");
            if (label) label.textContent = collapsed ? "打开学习辅助" : "收起学习辅助";
            if (persist) {
                try {
                    localStorage.setItem(SIDEBAR_KEY, collapsed ? "collapsed" : "expanded");
                } catch (error) {
                    // The UI remains usable when storage is unavailable.
                }
            }
        };

        button.addEventListener("click", () => {
            collapsed = !collapsed;
            sync(true);
        });
        sync();
    }

    function stripRubyText(element) {
        const clone = element.cloneNode(true);
        clone.querySelectorAll("rt").forEach((rt) => rt.remove());
        return clone.textContent.replace(/\s+/g, " ").trim();
    }

    function parseVocabInfo(rawInfo, fallbackWord) {
        const info = (rawInfo || "").trim();
        const separatorIndex = info.search(/[：:]/);
        const head = separatorIndex >= 0 ? info.slice(0, separatorIndex).trim() : fallbackWord;
        const meaning = separatorIndex >= 0 ? info.slice(separatorIndex + 1).trim() : info;
        const readingMatch = head.match(/(.+?)[（(]([^）)]+)[）)]/);
        return {
            word: readingMatch ? readingMatch[1].trim() : (head || fallbackWord),
            reading: readingMatch ? readingMatch[2].trim() : "",
            meaning: meaning || "本文中の重要語です。"
        };
    }

    function getVocabPronunciationSource(entry) {
        const pronunciations = window.KikiReadingPronunciations;
        const sources = pronunciations && pronunciations.entries;
        if (!sources) return "";
        return String(sources[entry.reading] || sources[entry.word] || "").trim();
    }

    function buildVocabMemo() {
        const list = document.querySelector("[data-vocab-list]");
        const moreButton = document.querySelector("[data-vocab-more]");
        if (!list) return;

        const seen = new Set();
        const entries = Array.from(document.querySelectorAll(".reading-content .vocab-word"))
            .map((word) => {
                const fallbackWord = stripRubyText(word);
                const parsed = parseVocabInfo(word.getAttribute("data-info"), fallbackWord);
                const key = `${parsed.word}|${parsed.reading}|${parsed.meaning}`;
                if (seen.has(key)) return null;
                seen.add(key);
                return parsed;
            })
            .filter(Boolean);

        if (!entries.length) {
            list.innerHTML = '<p class="empty-related">この文章の語彙メモはまだありません。</p>';
            if (moreButton) moreButton.hidden = true;
            return;
        }

        list.innerHTML = entries.map((entry, index) => {
            const extraClass = index >= 3 ? " is-extra" : "";
            const reading = entry.reading ? `<span class="vocab-reading">（${escapeHtml(entry.reading)}）</span>` : "";
            const pronunciationSource = getVocabPronunciationSource(entry);
            const sourceAttribute = pronunciationSource
                ? ` data-pronounce-src="${escapeHtml(pronunciationSource)}" data-pronounce-provider="microsoft-neural"`
                : ` data-pronounce-provider="browser"`;
            return `
                <article class="vocab-entry${extraClass}">
                    <div>
                        <h3 class="vocab-term">${escapeHtml(entry.word)} ${reading}</h3>
                        <p class="vocab-meaning">${escapeHtml(entry.meaning)}</p>
                    </div>
                    <button
                        class="vocab-sound-button"
                        type="button"
                        data-pronounce
                        data-pronounce-text="${escapeHtml(entry.word)}"
                        data-pronounce-reading="${escapeHtml(entry.reading || entry.word)}"
                        data-pronounce-lang="ja-JP"
                        data-pronounce-rate="0.92"
                        ${sourceAttribute}
                        aria-label="${escapeHtml(entry.word)} を読み上げる"
                        aria-pressed="false"
                    >
                        ${iconSpeaker()}
                    </button>
                </article>
            `;
        }).join("");

        if (moreButton) {
            moreButton.hidden = entries.length <= 3;
            moreButton.addEventListener("click", () => {
                const expanded = list.classList.toggle("is-expanded");
                moreButton.setAttribute("aria-expanded", String(expanded));
                moreButton.querySelector("span").textContent = expanded ? "閉じる" : "もっと見る";
            });
        }
    }

    function escapeHtml(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function iconSpeaker() {
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4Zm12.5 3a4 4 0 0 0-1.6-3.2v6.4A4 4 0 0 0 16.5 12Zm-1.6-8.3v2.1A7 7 0 0 1 18 12a7 7 0 0 1-3.1 5.8v2.1A9 9 0 0 0 20 12a9 9 0 0 0-5.1-8.3Z"/></svg>';
    }

    function setupVocabCardScroll() {
        const card = document.querySelector("[data-vocab-card]");
        const list = document.querySelector("[data-vocab-list]");
        if (!card || !list) return;

        card.addEventListener("wheel", (event) => {
            if (window.matchMedia("(max-width: 720px)").matches) return;
            if (list.scrollHeight <= list.clientHeight + 1) return;

            event.preventDefault();
            list.scrollTop += event.deltaY;
        }, { passive: false });
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

    function setupFontScale() {
        const scales = ["small", "base", "large"];
        const controls = document.querySelector(".reading-font-controls");
        if (!controls) return;
        let saved = "base";
        try {
            saved = localStorage.getItem(FONT_KEY) || "base";
        } catch (error) {
            // Keep the default size when local storage is unavailable.
        }

        function sync(nextScale) {
            const scale = scales.includes(nextScale) ? nextScale : "base";
            const index = scales.indexOf(scale);
            document.body.setAttribute("data-reading-font-scale", scale);
            controls.querySelectorAll("[data-reading-font-step]").forEach((button) => {
                const step = Number(button.dataset.readingFontStep);
                button.disabled = (step < 0 && index === 0) || (step > 0 && index === scales.length - 1);
            });
            return scale;
        }

        sync(saved);
        controls.addEventListener("click", (event) => {
            const button = event.target.closest("[data-reading-font-step]");
            if (!button || button.disabled) return;
            const current = document.body.getAttribute("data-reading-font-scale") || "base";
            const nextIndex = Math.max(0, Math.min(scales.length - 1, scales.indexOf(current) + Number(button.dataset.readingFontStep)));
            const scale = sync(scales[nextIndex]);
            try {
                localStorage.setItem(FONT_KEY, scale);
            } catch (error) {
                // The visual state still works without persistence.
            }
        });
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
    buildVocabMemo();
    setupLearningSidebar();
    setupVocabCardScroll();
    window.KikiReadingControls?.setup();
    setupTranslation();
    setupFontScale();
    setupFavorites();
    setupReadingBackNavigation();
    setupTooltip();
    window.KikiReadingAudio?.setup();
})();
