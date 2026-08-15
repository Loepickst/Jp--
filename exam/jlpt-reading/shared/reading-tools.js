(function () {
    const topBar = document.querySelector(".reading-editorial-header, .top-bar, body > header");
    if (!topBar) {
        if (!window.__kikiReadingToolsWaitingForHeader) {
            window.__kikiReadingToolsWaitingForHeader = true;
            const currentScriptUrl = document.currentScript && document.currentScript.src;
            document.addEventListener("kiki-unified-header:ready", () => {
                window.__kikiReadingToolsWaitingForHeader = false;
                if (!currentScriptUrl || document.getElementById("reading-font-size-btn") || document.getElementById("timer-panel-toggle-btn")) {
                    return;
                }
                const loader = document.createElement("script");
                loader.src = currentScriptUrl;
                loader.dataset.readingToolsHeaderRetry = "true";
                document.head.appendChild(loader);
            }, { once: true });
        }
        return;
    }

    if (window.__kikiReadingToolsInitialized) return;
    window.__kikiReadingToolsInitialized = true;

    const readingPath = window.location.pathname.toLowerCase();
    const isShortPath = /\/s\/n[123]\//.test(readingPath);
    const isMediumPath = /\/m\/n[123]\//.test(readingPath);
    const isArticleTemplate = !isShortPath && !isMediumPath && !!document.querySelector(".question-card, .qcard") &&
        !!document.querySelector(".layout-container, .wrap, .article-section, .article");
    const isShortTemplate = isShortPath;
    const isMediumTemplate = isMediumPath || (!isArticleTemplate && !isShortTemplate && !!document.querySelector(".question-block"));

    if (!isShortTemplate && !isMediumTemplate && !isArticleTemplate) {
        return;
    }

    let actionContainer = topBar.querySelector(".reading-editorial-actions, .top-actions, .top-bar-controls") || document.querySelector(
        isShortTemplate ? ".top-bar .top-bar-controls" : ".top-actions, .top-bar-controls"
    );
    if (!actionContainer) {
        actionContainer = document.createElement("div");
        actionContainer.className = "top-actions";
        topBar.appendChild(actionContainer);
    }
    /* Translation is no longer an independent reading tool. Remove every
       legacy per-template switch so the header exposes only typography and
       timing controls. Embedded translations remain analysis content. */
    document.querySelectorAll(".translate-toggle-btn, .translate-btn").forEach((button) => button.remove());

    document.body.classList.add(
        isShortTemplate ? "jlpt-practice-short" : (isArticleTemplate ? "jlpt-practice-article" : "jlpt-practice-medium")
    );

    const urlParams = new URLSearchParams(window.location.search);
    const isReviewMode = ["review", "mistake"].includes((urlParams.get("mode") || "").toLowerCase());
    const hasCategoryPractice = Boolean(urlParams.get("practiceMode"));
    const modeParam = (urlParams.get("readingMode") || "").toLowerCase();
    const isStudyMode = !isReviewMode && !hasCategoryPractice && (modeParam === "study" || modeParam === "");
    const isTestMode = !isReviewMode && !hasCategoryPractice && modeParam === "test";
    const canRequireResultUnlock = isTestMode;

    document.body.classList.toggle("reading-mode-study", isStudyMode);
    document.body.classList.toggle("reading-mode-test", isTestMode);

    const presets = isShortTemplate ? [2, 3, 5] : [8, 10, 15];
    const timerParam = Number.parseInt(urlParams.get("timer") || urlParams.get("readingTimer") || "", 10);
    const initialTimerMinutes = Number.isFinite(timerParam)
        ? Math.min(180, Math.max(1, timerParam))
        : presets[0];
    const state = {
        timerMode: "countup",
        timerStatus: "idle",
        furiganaEnabled: true,
        elapsedSeconds: 0,
        remainingSeconds: initialTimerMinutes * 60,
        selectedMinutes: initialTimerMinutes,
        timerId: null,
        timeoutSubmitted: false,
        isTimerPanelOpen: false,
        timerDisplayHidden: false,
        // The timer is optional in every reading mode. Entering a test page must
        // never hide the article or block answering while waiting for a timer.
        timerConfigured: true,
        analysisUnlocked: !canRequireResultUnlock,
        testPhase: isTestMode ? "active" : "default",
        testSubmitted: false,
        resultSeconds: 0,
        resultTimedOut: false
    };

    if (isTestMode) {
        state.timerMode = "countdown";
        state.remainingSeconds = initialTimerMinutes * 60;
        state.furiganaEnabled = false;
    }

    const readingModeStyle = document.createElement("style");
    readingModeStyle.textContent = `
        body.reading-mode-test .audio-wrapper {
            display: none !important;
        }

        body.reading-mode-test.jlpt-practice-short {
            padding-bottom: 40px !important;
        }

        .reading-mode-test #analysis-btn.is-disabled {
            opacity: 0.52;
            cursor: not-allowed;
            pointer-events: none;
        }
    `;
    document.head.appendChild(readingModeStyle);

    const furiganaBtn = null;

    const timerBtn = document.createElement("button");
    timerBtn.type = "button";
    timerBtn.id = "timer-panel-toggle-btn";
    timerBtn.className = "reading-tool-btn timer-tool-btn";
    timerBtn.innerHTML = `
        <span class="timer-tool-label">计时功能</span>
        <span class="timer-tool-indicator" id="timer-tool-indicator">00:00</span>
    `;

    const fontChoices = [
        { id: "small", label: "小字号", short: "小", scale: 0.9 },
        { id: "standard", label: "标准字号", short: "标准", scale: 1 },
        { id: "large", label: "大字号", short: "大", scale: 1.12 }
    ];
    const storedFontChoice = window.localStorage.getItem("reading_font_size_v2");
    let currentFontChoice = fontChoices.some((choice) => choice.id === storedFontChoice)
        ? storedFontChoice
        : "standard";

    const fontBtn = document.createElement("button");
    fontBtn.type = "button";
    fontBtn.id = "reading-font-size-btn";
    fontBtn.className = "reading-tool-btn font-size-tool-btn";

    function syncFontButton() {
        const active = fontChoices.find((choice) => choice.id === currentFontChoice) || fontChoices[1];
        fontBtn.innerHTML = `
            <span class="font-size-tool-aa">Aa</span>
            <span class="font-size-tool-label">字号大小</span>
        `;
        document.documentElement.dataset.readingFont = active.id;
        document.documentElement.style.setProperty("--reading-font-scale", String(active.scale));
    }

    syncFontButton();

    actionContainer.appendChild(fontBtn);
    actionContainer.appendChild(timerBtn);

    const timerBackdrop = document.createElement("div");
    timerBackdrop.className = "timer-panel-backdrop";

    const timerPanel = document.createElement("div");
    timerPanel.className = "timer-panel";
    timerPanel.id = "timer-panel";
    timerPanel.innerHTML = `
        <div class="timer-panel-header">
            <div class="timer-panel-title">计时</div>
            <button type="button" class="timer-panel-close" id="timer-panel-close" aria-label="关闭">×</button>
        </div>
        <div class="timer-panel-section">
            <span class="timer-display-pill" id="reading-timer-display">00:00</span>
        </div>
        <div class="timer-panel-section">
            <span class="timer-panel-label">模式</span>
            <button type="button" class="toggle-btn timer-panel-btn is-selected" data-timer-mode="countup">正计时</button>
            <button type="button" class="toggle-btn timer-panel-btn" data-timer-mode="countdown">倒计时</button>
        </div>
        <div class="timer-panel-section timer-panel-countdown-section" id="timer-countdown-group">
            <span class="timer-panel-label">预设时长</span>
        </div>
        <div class="timer-panel-section">
            <span class="timer-panel-label">控制</span>
            <button type="button" class="toggle-btn timer-panel-btn" id="timer-start-btn">开始</button>
            <button type="button" class="toggle-btn timer-panel-btn" id="timer-pause-btn">暂停</button>
            <button type="button" class="toggle-btn timer-panel-btn" id="timer-reset-btn">重置</button>
            <button type="button" class="toggle-btn timer-panel-btn" id="timer-hide-btn">隐藏时间</button>
        </div>
        <div class="timer-panel-status" id="timer-panel-status"></div>
    `;

    document.body.appendChild(timerBackdrop);
    document.body.appendChild(timerPanel);

    const fontBackdrop = document.createElement("div");
    fontBackdrop.className = "reading-tool-backdrop";

    const fontPanel = document.createElement("div");
    fontPanel.className = "font-size-panel";
    fontPanel.id = "reading-font-size-panel";
    fontPanel.innerHTML = `
        <div class="font-size-panel-header">
            <div class="font-size-panel-title">文章字号</div>
            <button type="button" class="font-size-panel-close" aria-label="关闭">×</button>
        </div>
        <div class="font-size-options">
            ${fontChoices.map((choice, index) => `
                <button type="button" class="font-size-option" data-font-choice="${choice.id}">
                    <span class="font-size-option-sample">${index === 0 ? "A−" : (index === 1 ? "A" : "A+")}</span>
                    <span class="font-size-option-copy"><strong>${choice.label}</strong><span>文章、题目与解析</span></span>
                    <span class="font-size-option-check">✓</span>
                </button>
            `).join("")}
        </div>
    `;

    document.body.appendChild(fontBackdrop);
    document.body.appendChild(fontPanel);

    const timerDisplay = document.getElementById("reading-timer-display");
    const timerIndicator = document.getElementById("timer-tool-indicator");
    const countdownGroup = document.getElementById("timer-countdown-group");
    const startBtn = document.getElementById("timer-start-btn");
    const pauseBtn = document.getElementById("timer-pause-btn");
    const resetBtn = document.getElementById("timer-reset-btn");
    const hideBtn = document.getElementById("timer-hide-btn");
    const closeBtn = document.getElementById("timer-panel-close");
    const statusEl = document.getElementById("timer-panel-status");
    const modeButtons = Array.from(timerPanel.querySelectorAll("[data-timer-mode]"));
    const fontCloseBtn = fontPanel.querySelector(".font-size-panel-close");
    const fontOptionButtons = Array.from(fontPanel.querySelectorAll("[data-font-choice]"));
    let isFontPanelOpen = false;
    function syncFontOptions() {
        fontOptionButtons.forEach((button) => {
            button.classList.toggle("is-selected", button.dataset.fontChoice === currentFontChoice);
        });
    }

    function positionFontPanel() {
        if (!isFontPanelOpen) return;
        const mobile = window.matchMedia("(max-width: 768px)").matches;
        const topRect = topBar.getBoundingClientRect();
        const buttonRect = fontBtn.getBoundingClientRect();
        if (mobile) {
            fontPanel.style.top = `${Math.round(topRect.bottom + 10)}px`;
            fontPanel.style.left = "12px";
            fontPanel.style.right = "12px";
            fontPanel.style.width = "auto";
        } else {
            const rightSpace = Math.max(12, window.innerWidth - buttonRect.right);
            fontPanel.style.top = `${Math.round(buttonRect.bottom + 10)}px`;
            fontPanel.style.left = "auto";
            fontPanel.style.right = `${rightSpace}px`;
            fontPanel.style.width = "300px";
        }
    }

    function openFontPanel() {
        closeTimerPanel();
        isFontPanelOpen = true;
        fontBackdrop.classList.add("is-open");
        fontPanel.classList.add("is-open");
        fontBtn.classList.add("is-open");
        syncFontOptions();
        positionFontPanel();
    }

    function closeFontPanel() {
        isFontPanelOpen = false;
        fontBackdrop.classList.remove("is-open");
        fontPanel.classList.remove("is-open");
        fontBtn.classList.remove("is-open");
    }

    countdownGroup.insertAdjacentHTML(
        "beforeend",
        `${presets.map((minute) => `
            <button
                type="button"
                class="toggle-btn timer-panel-btn timer-preset-btn${minute === initialTimerMinutes ? " is-selected" : ""}"
                data-preset-minute="${minute}"
            >${minute}分</button>
        `).join("")}
        <label class="timer-custom-wrap">
            自定义
            <input type="number" min="1" max="180" step="1" class="timer-custom-input" id="timer-custom-input" value="${initialTimerMinutes}">
            分
        </label>`
    );

    const presetButtons = Array.from(countdownGroup.querySelectorAll("[data-preset-minute]"));
    const customInput = document.getElementById("timer-custom-input");

    function isAnalysisMode() {
        if (isShortTemplate) {
            return document.body.classList.contains("show-analysis");
        }

        if (isArticleTemplate) {
            const mainArticle = document.getElementById("mainArticleContent");
            return Boolean(
                (mainArticle && mainArticle.classList.contains("reviewed")) ||
                document.querySelector(".question-card.reviewed") ||
                document.querySelector(".options-group.reviewed")
            );
        }

        return document.body.classList.contains("show-analysis") ||
            document.body.classList.contains("show-article-analysis") ||
            document.body.classList.contains("show-option-analysis");
    }

    function formatClock(totalSeconds) {
        const safeSeconds = Math.max(0, Math.floor(totalSeconds));
        const minutes = Math.floor(safeSeconds / 60);
        const seconds = safeSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    function setStatus(text, tone) {
        statusEl.textContent = text || "";
        statusEl.classList.remove("is-warning", "is-danger");
        if (tone === "warning") {
            statusEl.classList.add("is-warning");
        } else if (tone === "danger") {
            statusEl.classList.add("is-danger");
        }
    }

    function stopTimer() {
        if (state.timerId) {
            window.clearInterval(state.timerId);
            state.timerId = null;
        }
    }

    function emitReadingTestEvent(name, detail) {
        document.dispatchEvent(new CustomEvent(name, { detail: detail || {} }));
    }

    function getCurrentCountdownMinutes() {
        const customValue = Number.parseInt(customInput.value, 10);
        if (Number.isFinite(customValue) && customValue > 0) {
            return customValue;
        }
        return state.selectedMinutes;
    }

    function syncPresetSelection(source) {
        presetButtons.forEach((button) => {
            button.classList.toggle("is-selected", Number(button.dataset.presetMinute) === source);
        });
    }

    function updateTimerDisplay() {
        const displayValue = state.timerMode === "countup"
            ? formatClock(state.elapsedSeconds)
            : formatClock(state.remainingSeconds);
        timerDisplay.textContent = displayValue;
        timerIndicator.textContent = displayValue;
    }

    function syncFuriganaButton() {
        if (!furiganaBtn) {
            return;
        }
        const furiganaLocked = isTestMode;
        furiganaBtn.classList.toggle("is-selected", state.furiganaEnabled);
        furiganaBtn.textContent = furiganaLocked
            ? "注音关"
            : (state.furiganaEnabled ? "注音" : "注音关");
        furiganaBtn.disabled = furiganaLocked;
        furiganaBtn.setAttribute("aria-disabled", furiganaLocked ? "true" : "false");
        furiganaBtn.title = furiganaLocked ? "测试模式下已锁定注音关闭" : "";
    }

    function applyFuriganaPreference() {
        document.body.classList.toggle("furigana-hidden", !state.furiganaEnabled);
    }

    function syncModeUI() {
        timerPanel.classList.toggle("countdown-mode", state.timerMode === "countdown");
        modeButtons.forEach((button) => {
            button.classList.toggle("is-selected", button.dataset.timerMode === state.timerMode);
            button.disabled = state.timerStatus === "running" || state.testSubmitted;
        });
    }

    function syncTimerConfigControls() {
        const settingsLocked = state.timerStatus === "running" || state.testSubmitted;
        presetButtons.forEach((button) => {
            button.disabled = settingsLocked || state.timeoutSubmitted;
        });
        customInput.disabled = settingsLocked || state.timeoutSubmitted;
    }

    function syncActionButtons() {
        startBtn.disabled = state.timeoutSubmitted || state.testSubmitted || state.timerStatus === "running";
        pauseBtn.disabled = state.timeoutSubmitted || state.testSubmitted || state.timerStatus !== "running";
        resetBtn.disabled = state.timeoutSubmitted || state.testSubmitted;
        startBtn.textContent = state.timerStatus === "paused" ? "继续计时" : "开始计时";
        hideBtn.classList.toggle("is-selected", state.timerDisplayHidden);
    }

    function syncTimerButton() {
        timerIndicator.hidden = state.timerDisplayHidden;
        timerBtn.classList.toggle("is-selected", state.isTimerPanelOpen);
        timerBtn.classList.toggle("is-open", state.isTimerPanelOpen);
        timerBtn.classList.toggle("is-running", state.timerStatus === "running" || state.timerStatus === "paused");
    }

    const analysisBtn = document.getElementById("analysis-btn");

    function closeAnalysisView() {
        if (analysisBtn) {
            analysisBtn.classList.remove("active");
            analysisBtn.textContent = "解析";
        }
        document.body.classList.remove("show-analysis");
        document.querySelectorAll(".option-item.expanded").forEach((item) => item.classList.remove("expanded"));
        document.querySelectorAll(".key-sentence.active").forEach((item) => item.classList.remove("active"));
    }

    function openAnalysisView() {
        if (!analysisBtn) {
            return;
        }
        analysisBtn.classList.add("active");
        analysisBtn.textContent = "解析";
        document.body.classList.add("show-analysis");
    }

    function syncAnalysisLock() {
        if (!analysisBtn) {
            return;
        }
        const locked = canRequireResultUnlock && !state.analysisUnlocked;
        analysisBtn.disabled = locked;
        analysisBtn.classList.toggle("is-disabled", locked);
        analysisBtn.textContent = locked ? "解析需结算后查看" : "解析";
    }

    function handleTimerPanelDismissIntent() {
        closeTimerPanel();
        return false;
    }

    function setIdleClock() {
        if (state.timerMode === "countup") {
            state.elapsedSeconds = 0;
        } else {
            state.remainingSeconds = getCurrentCountdownMinutes() * 60;
        }
        updateTimerDisplay();
        syncActionButtons();
        syncTimerButton();
    }

    function getTimerUsedSeconds() {
        if (state.timerMode === "countup") {
            return Math.max(0, state.elapsedSeconds);
        }

        const configuredSeconds = Math.max(1, getCurrentCountdownMinutes()) * 60;
        return Math.max(0, configuredSeconds - state.remainingSeconds);
    }

    function getCurrentQuestionRoot() {
        if (isShortTemplate) {
            if (typeof currentPage !== "undefined") {
                return document.querySelector(`#page-${currentPage} .qa-section`) ||
                    document.querySelector(".page-content.active .qa-section");
            }
            return document.querySelector(".page-content.active .qa-section");
        }

        if (isArticleTemplate) {
            return document.querySelector(".layout-container, .wrap") || document.body;
        }

        return document.querySelector(".question-block");
    }

    function currentPageAnswered(root) {
        if (isArticleTemplate) {
            return isAnalysisMode() || !!(root && root.querySelector(".option-input:checked, .option input:checked"));
        }
        return !!(root && root.querySelector(".option-item.answered-correct, .option-item.answered-wrong"));
    }

    function showTimeoutNote(root, answered) {
        if (!root || root.querySelector(".timer-timeout-note")) {
            return;
        }

        const note = document.createElement("div");
        note.className = "timer-timeout-note";
        note.textContent = answered
            ? "时间结束，当前页已自动提交，现已锁定作答。"
            : "时间结束，当前页已自动提交（未作答），现已锁定作答。";

        const anchor = root.querySelector(".question-title");
        if (anchor) {
            anchor.insertAdjacentElement("afterend", note);
        } else {
            root.prepend(note);
        }
    }

    function completeTestSubmission(options = {}) {
        if (!isTestMode) {
            return;
        }

        const timedOut = Boolean(options.timedOut);
        stopTimer();

        if (!state.testSubmitted || timedOut) {
            state.resultSeconds = timedOut
                ? Math.max(1, getCurrentCountdownMinutes()) * 60
                : getTimerUsedSeconds();
            state.resultTimedOut = timedOut;
        }

        if (timedOut) {
            state.remainingSeconds = 0;
        }

        state.timerStatus = "finished";
        state.testSubmitted = true;
        state.timeoutSubmitted = false;
        state.testPhase = state.analysisUnlocked ? "analysis" : "submitted";
        updateTimerDisplay();
        setStatus(
            timedOut ? "时间结束，本轮已自动交卷。" : "已交卷，提交设置已锁定。",
            timedOut ? "danger" : ""
        );
        closeTimerPanel();
        syncActionButtons();
        syncTimerButton();
        syncTimerConfigControls();
        syncAnalysisLock();
    }

    function finishCountdown() {
        completeTestSubmission({ timedOut: true });
        emitReadingTestEvent("studyquest:reading-test-timeout", {
            seconds: state.resultSeconds,
            timedOut: true
        });
    }

    function startTimer() {
        if (state.timeoutSubmitted || state.testSubmitted) {
            return;
        }

        stopTimer();

        if (state.timerMode === "countup") {
            state.timerStatus = "running";
            setStatus("正在记录本次用时。");
            syncActionButtons();
            syncTimerButton();
            state.timerId = window.setInterval(() => {
                state.elapsedSeconds += 1;
                updateTimerDisplay();
                syncTimerButton();
            }, 1000);
            return;
        }

        if (state.timerStatus !== "paused") {
            state.remainingSeconds = Math.max(1, getCurrentCountdownMinutes()) * 60;
        }

        state.timerStatus = "running";
        if (isTestMode) {
            state.timerConfigured = true;
            state.testPhase = "running";
            closeTimerPanel();
            emitReadingTestEvent("studyquest:reading-test-start", {
                seconds: state.remainingSeconds,
                minutes: getCurrentCountdownMinutes()
            });
        }
        updateTimerDisplay();
        setStatus(
            isTestMode ? "倒计时已开始，时间到会自动提交当前页。" : "倒计时开始，时间到会自动提交当前页。",
            "warning"
        );
        syncActionButtons();
        syncTimerButton();
        syncTimerConfigControls();

        state.timerId = window.setInterval(() => {
            state.remainingSeconds -= 1;
            updateTimerDisplay();
            syncTimerButton();

            if (state.remainingSeconds <= 0) {
                finishCountdown();
            }
        }, 1000);
    }

    function pauseTimer() {
        if (state.timeoutSubmitted || state.testSubmitted || state.timerStatus !== "running") {
            return;
        }

        stopTimer();
        state.timerStatus = "paused";
        setStatus("计时已暂停。");
        syncActionButtons();
        syncTimerButton();
    }

    function resetTimer() {
        if (state.timeoutSubmitted || state.testSubmitted) {
            return;
        }

        stopTimer();
        state.timerStatus = "idle";
        setStatus("");
        setIdleClock();
    }

    function positionTimerPanel() {
        if (!state.isTimerPanelOpen) {
            return;
        }

        const mobile = window.matchMedia("(max-width: 768px)").matches;
        const topRect = topBar.getBoundingClientRect();
        const buttonRect = timerBtn.getBoundingClientRect();
        timerPanel.style.transform = "";

        if (mobile) {
            timerPanel.style.top = `${Math.round(topRect.bottom + 10)}px`;
            timerPanel.style.left = "12px";
            timerPanel.style.right = "12px";
            timerPanel.style.width = "auto";
        } else {
            const panelWidth = Math.min(320, window.innerWidth - 24);
            const rightSpace = Math.max(12, window.innerWidth - buttonRect.right);
            timerPanel.style.top = `${Math.round(buttonRect.bottom + 10)}px`;
            timerPanel.style.left = "auto";
            timerPanel.style.right = `${rightSpace}px`;
            timerPanel.style.width = `${panelWidth}px`;
        }
    }

    function openTimerPanel() {
        closeFontPanel();
        state.isTimerPanelOpen = true;
        timerBackdrop.classList.add("is-open");
        timerPanel.classList.add("is-open");
        positionTimerPanel();
        syncTimerButton();
    }

    function closeTimerPanel() {
        state.isTimerPanelOpen = false;
        timerBackdrop.classList.remove("is-open");
        timerPanel.classList.remove("is-open");
        syncTimerButton();
    }

    function toggleTimerPanel() {
        if (state.isTimerPanelOpen) {
            handleTimerPanelDismissIntent();
        } else {
            openTimerPanel();
        }
    }

    modeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (state.timeoutSubmitted) {
                return;
            }
            state.timerMode = button.dataset.timerMode;
            state.timerStatus = "idle";
            stopTimer();
            setStatus("");
            syncModeUI();
            setIdleClock();
        });
    });

    presetButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (state.timeoutSubmitted) {
                return;
            }
            state.selectedMinutes = Number.parseInt(button.dataset.presetMinute, 10);
            customInput.value = state.selectedMinutes;
            syncPresetSelection(state.selectedMinutes);
            if (state.timerMode === "countdown" && state.timerStatus !== "running") {
                state.remainingSeconds = state.selectedMinutes * 60;
                updateTimerDisplay();
                syncTimerButton();
            }
        });
    });

    customInput.addEventListener("input", () => {
        if (state.timeoutSubmitted) {
            return;
        }
        const value = Number.parseInt(customInput.value, 10);
        if (Number.isFinite(value) && value > 0) {
            state.selectedMinutes = value;
            syncPresetSelection(value);
            if (state.timerMode === "countdown" && state.timerStatus !== "running") {
                state.remainingSeconds = value * 60;
                updateTimerDisplay();
                syncTimerButton();
            }
        }
    });

    startBtn.addEventListener("click", () => {
        startTimer();
    });

    pauseBtn.addEventListener("click", () => {
        pauseTimer();
    });

    resetBtn.addEventListener("click", () => {
        resetTimer();
    });

    hideBtn.addEventListener("click", () => {
        state.timerDisplayHidden = !state.timerDisplayHidden;
        syncActionButtons();
        syncTimerButton();
    });

    if (furiganaBtn) {
        furiganaBtn.addEventListener("click", () => {
            if (isTestMode) {
                return;
            }
            state.furiganaEnabled = !state.furiganaEnabled;
            syncFuriganaButton();
            applyFuriganaPreference();
        });
    }

    timerBtn.addEventListener("click", (event) => {
        event.preventDefault();
        toggleTimerPanel();
    });

    fontBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (isFontPanelOpen) {
            closeFontPanel();
        } else {
            openFontPanel();
        }
    });

    fontOptionButtons.forEach((button) => {
        button.addEventListener("click", () => {
            currentFontChoice = button.dataset.fontChoice || "standard";
            window.localStorage.setItem("reading_font_size_v2", currentFontChoice);
            syncFontButton();
            syncFontOptions();
        });
    });

    fontCloseBtn.addEventListener("click", closeFontPanel);
    fontBackdrop.addEventListener("click", closeFontPanel);

    closeBtn.addEventListener("click", () => {
        handleTimerPanelDismissIntent();
    });

    timerBackdrop.addEventListener("click", () => {
        handleTimerPanelDismissIntent();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && state.isTimerPanelOpen) {
            event.preventDefault();
            handleTimerPanelDismissIntent();
        } else if (event.key === "Escape" && isFontPanelOpen) {
            event.preventDefault();
            closeFontPanel();
        }
    });

    window.addEventListener("resize", () => {
        positionTimerPanel();
        positionFontPanel();
    });
    window.addEventListener("scroll", () => {
        positionTimerPanel();
        positionFontPanel();
    }, { passive: true });

    document.addEventListener("click", (event) => {
        if (!state.timeoutSubmitted || isAnalysisMode()) {
            return;
        }

        const option = event.target.closest(isArticleTemplate ? ".option-label" : ".option-item");
        if (!option) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    }, true);

    document.addEventListener("click", (event) => {
        if (!state.timeoutSubmitted) {
            return;
        }

        const navigation = event.target.closest(".article-navigation .nav-btn");
        if (!navigation) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    }, true);

    document.addEventListener("click", (event) => {
        if (!isStudyMode || !isShortTemplate) {
            return;
        }

        const option = event.target.closest(".option-item");
        if (!option || document.body.classList.contains("show-analysis")) {
            return;
        }

        window.setTimeout(() => {
            const root = getCurrentQuestionRoot();
            if (root && root.hasAttribute("data-answered")) {
                openAnalysisView();
            }
        }, 0);
    });

    document.addEventListener("click", (event) => {
        if (!isStudyMode) {
            return;
        }

        const navigation = event.target.closest(".article-navigation .nav-btn");
        if (!navigation) {
            return;
        }

        window.setTimeout(() => {
            closeAnalysisView();
        }, 0);
    });

    if (isTestMode) {
        state.timerMode = "countdown";
        modeButtons.forEach((button) => {
            const isCountdown = button.dataset.timerMode === "countdown";
            button.classList.toggle("is-selected", isCountdown);
        });
        startBtn.textContent = "开始计时";
        setStatus("计时为可选功能，不启动也可以直接作答。", "");
    }

    window.StudyQuestReadingMode = {
        mode: isStudyMode ? "study" : (isTestMode ? "test" : "default"),
        isStudyMode,
        isTestMode,
        getTestPhase() {
            return state.testPhase;
        },
        isStarted() {
            return state.timerConfigured;
        },
        isSubmitted() {
            return state.testSubmitted;
        },
        isAnalysisUnlocked() {
            return state.analysisUnlocked;
        },
        unlockAnalysis() {
            state.analysisUnlocked = true;
            if (isTestMode && state.testSubmitted) {
                state.testPhase = "analysis";
            }
            syncAnalysisLock();
        },
        completeTest(options = {}) {
            completeTestSubmission(options);
        },
        getResultTimerInfo() {
            return {
                hasResult: state.testSubmitted,
                seconds: state.testSubmitted ? state.resultSeconds : getTimerUsedSeconds(),
                timedOut: state.resultTimedOut
            };
        },
        openAnalysisView,
        closeAnalysisView,
        isTimerConfigured() {
            return state.timerConfigured;
        },
        openTimerPanel
    };

    syncPresetSelection(state.selectedMinutes);
    syncFontOptions();
    syncModeUI();
    syncFuriganaButton();
    applyFuriganaPreference();
    syncActionButtons();
    syncTimerConfigControls();
    updateTimerDisplay();
    syncTimerButton();
    syncAnalysisLock();
    closeTimerPanel();

})();
