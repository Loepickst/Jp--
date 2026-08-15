(function () {
    if (!window.ReadingYearSystem || typeof window.ReadingYearSystem.createReadingYearSession !== 'function') {
        return;
    }

    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const section = pathParts[pathParts.length - 2];
    const parentSection = pathParts[pathParts.length - 3];
    const grandParentSection = pathParts[pathParts.length - 4];
    const fileName = pathParts[pathParts.length - 1] || '';
    const isLevelSegment = /^(?:n1|n2|n3)$/i.test(section);
    const parentIsLevelSegment = /^(?:n1|n2|n3)$/i.test(parentSection);
    const isLongTenPage = grandParentSection === 'l' && parentIsLevelSegment && section === '10';
    const isLongLevelPage = parentSection === 'l' && isLevelSegment;
    const isLongPage = isLongTenPage || isLongLevelPage;
    const typeSection = isLongPage ? 'l' : (isLevelSegment ? parentSection : section);
    const levelSegment = isLongTenPage ? parentSection : isLongLevelPage ? section : (isLevelSegment ? section : 'n1');
    const levelLabel = String(levelSegment || 'n1').toUpperCase();

    if (typeSection !== 'd' && typeSection !== 't' && !isLongPage) {
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const readingMode = (urlParams.get('readingMode') || 'study').toLowerCase();
    const isTestMode = readingMode === 'test';
    const sharedReadingTools = window.StudyQuestReadingMode;
    const useSharedReadingTools = Boolean(
        isTestMode &&
        sharedReadingTools &&
        sharedReadingTools.isTestMode
    );
    const articleType = isLongPage ? 'long' : typeSection === 'd' ? 'integrated' : 'search';
    const articleLabel = isLongPage ? '長文読解' : typeSection === 'd' ? '統合理解' : '情報検索';
    const indexPath = isLongTenPage ? '../../../index.html' : '../../index.html';
    const fileExamKey = fileName.replace(/\.html$/i, '');
    const examKey = urlParams.get('examKey') || fileExamKey;
    const readingSession = window.ReadingYearSystem.createReadingYearSession({
        level: levelLabel,
        type: articleType,
        examKey,
        totalPages: 1,
        indexPath,
        urlParams
    });
    const testServer = window.StudyQuestTestServer;
    let testRunMeta = null;
    const testState = {
        started: false,
        submitted: false,
        timedOut: false,
        selectedMinutes: 8,
        remainingSeconds: 8 * 60,
        elapsedSeconds: 0,
        timerId: null,
        unansweredAtSubmit: 0
    };

    document.body.classList.toggle('reading-mode-study', !readingSession.isReviewMode && !isTestMode);
    document.body.classList.toggle('reading-mode-test', !readingSession.isReviewMode && isTestMode);

    if (readingSession.isReviewMode && readingSession.getReviewPages().length === 0) {
        window.setTimeout(() => {
            alert('当前年份还没有错题记录，先去正常练习一轮吧。');
            readingSession.redirectToIndex();
        }, 0);
        return;
    }

    function isSubmitted() {
        const mainArticle = document.getElementById('mainArticleContent');
        return Boolean(
            (mainArticle && mainArticle.classList.contains('reviewed')) ||
            document.querySelector('.question-card.reviewed') ||
            document.querySelector('.qcard.reviewed') ||
            document.querySelector('.options.reviewed') ||
            document.querySelector('.options-group.reviewed')
        );
    }

    function isPageAllCorrect(score = getPageScore()) {
        return score.incorrectCount === 0 && score.unansweredCount === 0;
    }

    function getPageScore(unansweredOverride) {
        const questionCards = getQuestionCards();
        if (!questionCards.length) {
            return {
                totalQuestions: 0,
                correctCount: 0,
                incorrectCount: 0,
                unansweredCount: 0,
                accuracy: 0
            };
        }

        const unansweredCount = Number.isInteger(unansweredOverride)
            ? unansweredOverride
            : questionCards.filter((card) => !getSelectedInput(card)).length;
        const correctCount = questionCards.filter((card) => {
            const selected = getSelectedInput(card);
            const wrongOption = card.querySelector('.option-label.is-wrong, .option.wrong');
            return Boolean(selected) && !wrongOption;
        }).length;
        const totalQuestions = questionCards.length;
        const incorrectCount = Math.max(0, totalQuestions - correctCount - unansweredCount);

        return {
            totalQuestions,
            correctCount,
            incorrectCount,
            unansweredCount,
            accuracy: totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0
        };
    }

    function recordPageResult(pageAllCorrect) {
        if (typeof readingSession.recordQuestionAttempt === 'function') {
            getQuestionCards().forEach((card, index) => {
                const selected = getSelectedInput(card);
                const hasWrongSelection = Boolean(card.querySelector('.option-label.is-wrong, .option.wrong'));
                readingSession.recordQuestionAttempt(
                    1,
                    getQuestionKey(card) || index + 1,
                    Boolean(selected) && !hasWrongSelection
                );
            });
        }
        readingSession.recordAnswer(1, pageAllCorrect);

        if (readingSession.isReviewMode && pageAllCorrect && readingSession.getReviewPages().length === 0) {
            window.setTimeout(() => {
                alert('🎉 太棒了！这一年的错题已经复习完毕！');
                readingSession.redirectToIndex();
            }, 160);
        }
    }

    function normalizeScopeKey(value) {
        return String(value || '').trim().replace(/\./g, '-').replace(/\s+/g, '');
    }

    function formatExamLabel(value) {
        const match = String(value || '').trim().match(/^(\d{4})[.\-](\d{1,2})$/);
        if (!match) {
            return String(value || '').trim();
        }
        return `${match[1]}年${Number.parseInt(match[2], 10)}月`;
    }

    function buildModeUrl(mode) {
        const nextParams = new URLSearchParams();
        nextParams.set('readingMode', mode);
        nextParams.set('examKey', examKey);
        return `${window.location.pathname}?${nextParams.toString()}`;
    }

    function buildIndexUrl() {
        return `${indexPath}?level=${encodeURIComponent(levelLabel)}&type=${encodeURIComponent(articleType)}&browse=year`;
    }

    function bindStableIndexBackButton() {
        const backButton = document.querySelector('header .header-btn');
        if (!backButton) {
            return;
        }

        backButton.removeAttribute('onclick');
        backButton.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            window.location.href = buildIndexUrl();
        }, true);
    }

    function ensureLegacyLongSubmitScope() {
        if (!isLongPage || document.getElementById('page-1')) {
            return;
        }

        const hasPagedSubmit = Boolean(document.querySelector('[onclick*="submitAnswers(1"]'));
        if (!hasPagedSubmit) {
            return;
        }

        const pageRoot = document.querySelector('.wrap') || document.querySelector('.layout-container');
        if (!pageRoot) {
            return;
        }

        const originalId = pageRoot.id;
        pageRoot.id = 'page-1';

        if (originalId && originalId !== 'page-1' && !document.getElementById(originalId)) {
            const anchor = document.createElement('span');
            anchor.id = originalId;
            anchor.setAttribute('aria-hidden', 'true');
            anchor.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);';
            pageRoot.parentNode.insertBefore(anchor, pageRoot);
        }
    }

    bindStableIndexBackButton();
    ensureLegacyLongSubmitScope();

    function completeRewardRun(score) {
        if (!isTestMode || !testRunMeta || !testServer || typeof testServer.completeRun !== 'function') {
            return null;
        }

        return testServer.completeRun({
            runKey: testRunMeta.runKey,
            module: 'reading',
            subType: `${levelLabel.toLowerCase()}_${articleType}`,
            mode: 'year',
            scopeKey: normalizeScopeKey(examKey),
            questionCount: score.totalQuestions,
            answeredCount: Math.max(0, score.totalQuestions - score.unansweredCount),
            correctCount: score.correctCount,
            accuracy: score.totalQuestions > 0 ? score.correctCount / score.totalQuestions : 0,
            bestStreak: score.correctCount,
            cleared: true,
            sourcePage: window.location.pathname
        });
    }

    function buildDrawMarkup(reward) {
        if (!reward || !reward.accepted || !reward.drawOffer || !reward.drawOffer.available) {
            return '';
        }

        const runKey = reward.drawOffer.runKey || (testRunMeta && testRunMeta.runKey) || '';
        if (window.StudyQuestTestUi && typeof window.StudyQuestTestUi.getDrawAffordanceMarkup === 'function') {
            return window.StudyQuestTestUi.getDrawAffordanceMarkup(runKey);
        }

        const safeRunKey = String(runKey).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
        return safeRunKey
            ? `<button class="lab-draw-affordance" type="button" data-lab-draw-affordance data-draw-run-key="${safeRunKey}" aria-label="打开抽签结果"><span class="lab-draw-affordance-icon" aria-hidden="true">🐶</span></button>`
            : '';
    }

    function showTestResultOverlay(score) {
        if (!isTestMode || document.getElementById('reading-results-panel')) {
            return;
        }

        completeRewardRun(score);
        window.ReadingResultPanel?.show({
            totalQuestions: score.totalQuestions,
            correctCount: score.correctCount,
            accuracy: score.accuracy,
            seconds: testState.elapsedSeconds,
            timedOut: testState.timedOut,
            meta: `练习完成 · ${formatExamLabel(examKey)} · ${articleLabel}`,
            retryUrl: buildModeUrl('test'),
            indexUrl: buildIndexUrl()
        });
    }

    function formatTime(totalSeconds) {
        const safeSeconds = Math.max(0, Math.floor(totalSeconds || 0));
        const minutes = Math.floor(safeSeconds / 60);
        const seconds = safeSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function getAnswerData() {
        try {
            return Function('return typeof answerData !== "undefined" ? answerData : (typeof answersData !== "undefined" ? answersData : null)')();
        } catch (error) {
            return null;
        }
    }

    function getQuestionCards() {
        const standardCards = Array.from(document.querySelectorAll('.question-card[data-question]'));
        if (standardCards.length) {
            return standardCards;
        }
        return Array.from(document.querySelectorAll('.qcard[id^="qcard-"]'));
    }

    function getQuestionKey(card) {
        if (!card) {
            return '';
        }
        if (card.dataset && card.dataset.question) {
            return card.dataset.question;
        }
        const match = String(card.id || '').match(/^qcard-(.+)$/);
        return match ? match[1] : '';
    }

    function getSelectedInput(card) {
        return card ? card.querySelector('.option-input:checked, input[type="radio"]:checked') : null;
    }

    function getOptionInputs(card) {
        return Array.from(card ? card.querySelectorAll('.option-input, input[type="radio"]') : []);
    }

    function getSubmitButtons() {
        return Array.from(document.querySelectorAll('#submitBtn, [id^="submitBtn"], .submit-btn'));
    }

    function setAnswerInputsDisabled(disabled) {
        document.querySelectorAll('.option-input, .qcard input[type="radio"]').forEach((input) => {
            input.disabled = disabled;
        });
        getSubmitButtons().forEach((submitButton) => {
            submitButton.disabled = disabled;
        });
    }

    function countUnansweredQuestions() {
        return getQuestionCards().filter((card) => !getSelectedInput(card)).length;
    }

    function ensureSelectionsForTimedSubmit() {
        const data = getAnswerData() || {};
        getQuestionCards().forEach((card) => {
            if (getSelectedInput(card)) {
                return;
            }

            const qName = getQuestionKey(card);
            const qData = data[qName] || data[`q${qName}`] || null;
            const correctValue = qData ? String(qData.correct) : '';
            const options = getOptionInputs(card);
            const fallback = options.find((input) => String(input.value) !== correctValue) || options[0];
            if (!fallback) {
                return;
            }

            fallback.checked = true;
            const label = fallback.closest('.option-label, .option');
            if (label) {
                label.classList.add('selected');
            }
        });
    }

    function submitCurrentPage() {
        const button = getSubmitButtons().find((item) => !item.disabled);
        if (button) {
            button.click();
            return;
        }
        if (typeof originalSubmitAnswers === 'function') {
            originalSubmitAnswers.call(window);
        }
    }

    function startSharedReadingToolsRun(detail = {}) {
        if (!useSharedReadingTools || testState.started || testState.submitted) {
            return;
        }

        const seconds = Number.parseInt(detail.seconds, 10);
        const minutes = Number.parseInt(detail.minutes, 10);
        testState.started = true;
        testState.selectedMinutes = Number.isFinite(minutes) && minutes > 0
            ? minutes
            : Math.max(1, Math.round((Number.isFinite(seconds) ? seconds : testState.remainingSeconds) / 60));
        testState.remainingSeconds = Number.isFinite(seconds) && seconds > 0
            ? seconds
            : testState.selectedMinutes * 60;
        testState.elapsedSeconds = 0;
        testState.timedOut = false;
        testRunMeta = testServer && typeof testServer.startRun === 'function'
            ? testServer.startRun({
                module: 'reading',
                subType: `${levelLabel.toLowerCase()}_${articleType}`,
                mode: 'year',
                scopeKey: normalizeScopeKey(examKey),
                sourcePage: window.location.pathname
            })
            : null;
        setAnswerInputsDisabled(false);
    }

    function syncSharedReadingToolsResult() {
        if (!useSharedReadingTools || !sharedReadingTools || typeof sharedReadingTools.getResultTimerInfo !== 'function') {
            return;
        }

        const timerInfo = sharedReadingTools.getResultTimerInfo() || {};
        if (Number.isFinite(timerInfo.seconds)) {
            testState.elapsedSeconds = timerInfo.seconds;
        }
        testState.timedOut = Boolean(timerInfo.timedOut || testState.timedOut);
    }

    if (useSharedReadingTools) {
        document.addEventListener('studyquest:reading-test-start', (event) => {
            startSharedReadingToolsRun(event.detail || {});
        });
        document.addEventListener('studyquest:reading-test-timeout', () => {
            if (testState.submitted) {
                return;
            }
            testState.timedOut = true;
            testState.unansweredAtSubmit = countUnansweredQuestions();
            ensureSelectionsForTimedSubmit();
            submitCurrentPage();
        });
    }

    function stopTestTimer() {
        if (testState.timerId) {
            window.clearInterval(testState.timerId);
            testState.timerId = null;
        }
    }

    function submitTimedOutTest() {
        if (testState.submitted) {
            return;
        }

        testState.timedOut = true;
        testState.unansweredAtSubmit = countUnansweredQuestions();
        ensureSelectionsForTimedSubmit();
        submitCurrentPage();
    }

    const originalSubmitAnswers = window.submitAnswers;
    if (typeof originalSubmitAnswers !== 'function') {
        return;
    }

    let hasRecorded = false;
    window.submitAnswers = function submitAnswersWithReadingSession(...args) {
        if (isTestMode && !readingSession.isReviewMode && !testState.started) {
            // Timing is optional. If the learner submits without starting it,
            // create an untimed run here instead of blocking the question.
            testState.started = true;
            testState.elapsedSeconds = 0;
            testState.timedOut = false;
            testRunMeta = testServer && typeof testServer.startRun === 'function'
                ? testServer.startRun({
                    module: 'reading',
                    subType: `${levelLabel.toLowerCase()}_${articleType}`,
                    mode: 'year',
                    scopeKey: normalizeScopeKey(examKey),
                    sourcePage: window.location.pathname
                })
                : null;
        }

        if (isTestMode && testState.submitted) {
            return undefined;
        }

        const wasSubmitted = isSubmitted();
        const result = originalSubmitAnswers.apply(this, args);

        if (!hasRecorded && !wasSubmitted && isSubmitted()) {
            hasRecorded = true;
            testState.submitted = true;
            stopTestTimer();
            syncSharedReadingToolsResult();
            if (useSharedReadingTools && sharedReadingTools && typeof sharedReadingTools.completeTest === 'function') {
                sharedReadingTools.completeTest({ timedOut: testState.timedOut });
                syncSharedReadingToolsResult();
            }
            setAnswerInputsDisabled(true);
            const score = getPageScore(testState.timedOut ? testState.unansweredAtSubmit : undefined);
            recordPageResult(isPageAllCorrect(score));
            showTestResultOverlay(score);
        }

        return result;
    };

    window.ReadingDtYearSession = {
        articleType,
        examKey: readingSession.examKey,
        isReviewMode: readingSession.isReviewMode,
        readingMode,
        isTestMode
    };
})();
