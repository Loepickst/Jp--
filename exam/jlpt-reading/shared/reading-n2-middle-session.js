(function () {
    if (!window.ReadingYearSystem || typeof window.ReadingYearSystem.createReadingYearSession !== 'function') {
        return;
    }

    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const fileName = pathParts[pathParts.length - 1] || '';
    const levelSegment = pathParts[pathParts.length - 2] || '';
    const typeSegment = pathParts[pathParts.length - 3] || '';

    if (typeSegment !== 'm' || !/^n2$/i.test(levelSegment)) {
        return;
    }

    const levelLabel = 'N2';
    const articleType = 'middle';
    const indexPath = '../../index.html';
    const urlParams = new URLSearchParams(window.location.search);
    const examKey = urlParams.get('examKey') || fileName.replace(/\.html$/i, '');
    const readingMode = (urlParams.get('readingMode') || 'study').toLowerCase();
    const isTestMode = readingMode === 'test';
    const testServer = window.StudyQuestTestServer;
    const pageDefinitions = collectPageDefinitions();
    const totalPages = Math.max(1, pageDefinitions.length);
    const readingSession = window.ReadingYearSystem.createReadingYearSession({
        level: levelLabel,
        type: articleType,
        examKey,
        totalPages,
        indexPath,
        urlParams
    });
    const categorySession = window.ReadingCategorySystem
        && typeof window.ReadingCategorySystem.createCategorySession === 'function'
        ? window.ReadingCategorySystem.createCategorySession({
            level: levelLabel,
            type: articleType,
            categoryId: urlParams.get('category') || '',
            practiceMode: urlParams.get('practiceMode') || '',
            examKey: readingSession.examKey || examKey
        })
        : null;
    const isCategoryPractice = Boolean(categorySession && categorySession.isCategoryMode && !readingSession.isReviewMode);
    const categoryInitialTarget = isCategoryPractice
        ? categorySession.getInitialTarget(urlParams.get('page'))
        : null;

    if (categoryInitialTarget && categoryInitialTarget.redirectUrl) {
        window.location.replace(categoryInitialTarget.redirectUrl);
        return;
    }
    if (categoryInitialTarget && categoryInitialTarget.empty) {
        window.setTimeout(() => {
            alert('当前分类暂时没有可练习的文章。');
            window.location.href = categorySession.buildBackUrl();
        }, 0);
        return;
    }

    let currentPage = getCurrentPageNumber();
    let testRunMeta = null;
    const submittedPages = new Set();
    const recordedPages = new Set();
    const timedOutUnansweredByPage = new Map();
    const testState = {
        started: false,
        submitted: false,
        timedOut: false,
        selectedMinutes: 12,
        remainingSeconds: 12 * 60,
        elapsedSeconds: 0,
        timerId: null
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

    bindStableBackButton();
    wrapPageSwitching();
    wrapSubmitFunctions();
    restoreInitialPage();

    if (isTestMode && !readingSession.isReviewMode) {
        bindOptionalTestController();
    }

    window.ReadingN2MiddleSession = {
        articleType,
        examKey: readingSession.examKey,
        isReviewMode: readingSession.isReviewMode,
        isCategoryMode: isCategoryPractice,
        categoryId: isCategoryPractice ? categorySession.category.id : '',
        categorySession,
        readingMode,
        isTestMode
    };

    function collectPageDefinitions() {
        const definitions = new Map();
        document.querySelectorAll('.submit-btn').forEach((button) => {
            const onclick = button.getAttribute('onclick') || '';
            const match = onclick.match(/\b(submitAllAnswers|submitAnswers)\s*\(\s*(\d+)\s*,\s*\[([^\]]*)\]/);
            if (!match) {
                return;
            }
            const page = Number.parseInt(match[2], 10);
            const ids = match[3]
                .split(',')
                .map((item) => Number.parseInt(item.trim(), 10))
                .filter((item) => Number.isInteger(item));
            if (Number.isInteger(page) && page > 0 && ids.length > 0) {
                definitions.set(page, {
                    page,
                    ids,
                    functionName: match[1],
                    button
                });
            }
        });

        if (definitions.size === 0) {
            document.querySelectorAll('.page-container[id^="page-"]').forEach((pageNode) => {
                const pageMatch = String(pageNode.id || '').match(/page-(\d+)/);
                if (!pageMatch) {
                    return;
                }
                const page = Number.parseInt(pageMatch[1], 10);
                const ids = Array.from(pageNode.querySelectorAll('[id^="qcard-"]'))
                    .map((card) => Number.parseInt(String(card.id).replace(/^qcard-/, ''), 10))
                    .filter((item) => Number.isInteger(item));
                if (ids.length > 0) {
                    definitions.set(page, { page, ids, functionName: '', button: null });
                }
            });
        }

        return Array.from(definitions.values()).sort((left, right) => left.page - right.page);
    }

    function getDefinition(page) {
        return pageDefinitions.find((definition) => definition.page === Number.parseInt(page, 10)) || null;
    }

    function getPageContainer(page) {
        return document.getElementById(`page-${page}`);
    }

    function getCurrentPageNumber() {
        const activePage = document.querySelector('.page-container.active[id^="page-"]');
        const match = activePage && activePage.id.match(/page-(\d+)/);
        return match ? Number.parseInt(match[1], 10) : 1;
    }

    function getAnswerData() {
        try {
            return Function('return typeof answersData !== "undefined" ? answersData : (typeof answerData !== "undefined" ? answerData : null)')();
        } catch (error) {
            return null;
        }
    }

    function getQuestionCard(qId) {
        return document.getElementById(`qcard-${qId}`);
    }

    function getSelectedInput(qId) {
        const card = getQuestionCard(qId);
        return card ? card.querySelector(`input[name="q${qId}"]:checked`) : null;
    }

    function getOptionInputs(qId) {
        const card = getQuestionCard(qId);
        return Array.from(card ? card.querySelectorAll(`input[name="q${qId}"]`) : []);
    }

    function isPageSubmitted(page) {
        const container = getPageContainer(page);
        return Boolean(container && container.querySelector('.question-card.reviewed, .qcard.reviewed, .options.reviewed, .options-group.reviewed'));
    }

    function getPageScore(page, unansweredOverride) {
        const definition = getDefinition(page);
        const data = getAnswerData() || {};
        const ids = definition ? definition.ids : [];
        const totalQuestions = ids.length;
        const unansweredCount = Number.isInteger(unansweredOverride)
            ? unansweredOverride
            : ids.filter((qId) => !getSelectedInput(qId)).length;
        const correctCount = ids.filter((qId) => {
            const selected = getSelectedInput(qId);
            const answer = data[qId] || data[`q${qId}`];
            return Boolean(selected && answer && String(selected.value) === String(answer.correct));
        }).length;
        const incorrectCount = Math.max(0, totalQuestions - correctCount - unansweredCount);

        return {
            totalQuestions,
            correctCount,
            incorrectCount,
            unansweredCount,
            accuracy: totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0
        };
    }

    function getTotalScore() {
        const total = pageDefinitions.reduce((sum, definition) => {
            const score = getPageScore(definition.page, timedOutUnansweredByPage.get(definition.page));
            sum.totalQuestions += score.totalQuestions;
            sum.correctCount += score.correctCount;
            sum.incorrectCount += score.incorrectCount;
            sum.unansweredCount += score.unansweredCount;
            return sum;
        }, {
            totalQuestions: 0,
            correctCount: 0,
            incorrectCount: 0,
            unansweredCount: 0,
            accuracy: 0
        });
        total.accuracy = total.totalQuestions > 0 ? Math.round((total.correctCount / total.totalQuestions) * 100) : 0;
        return total;
    }

    function recordPageResult(page) {
        if (recordedPages.has(page)) {
            return;
        }
        const score = getPageScore(page, timedOutUnansweredByPage.get(page));
        const definition = getDefinition(page);
        const data = getAnswerData() || {};
        if (typeof readingSession.recordQuestionAttempt === 'function') {
            (definition ? definition.ids : []).forEach((qId, index) => {
                const selected = getSelectedInput(qId);
                const answer = data[qId] || data[`q${qId}`];
                const isCorrect = Boolean(selected && answer && String(selected.value) === String(answer.correct));
                readingSession.recordQuestionAttempt(page, qId || index + 1, isCorrect);
            });
        }
        recordedPages.add(page);
        submittedPages.add(page);
        readingSession.recordAnswer(page, score.incorrectCount === 0 && score.unansweredCount === 0);

        if (readingSession.isReviewMode && score.incorrectCount === 0 && score.unansweredCount === 0 && readingSession.getReviewPages().length === 0) {
            window.setTimeout(() => {
                alert('🎉 太棒了！这一年的错题已经复习完毕！');
                readingSession.redirectToIndex();
            }, 160);
        }
    }

    function bindStableBackButton() {
        const backButton = document.getElementById('back-to-reading-index') || document.querySelector('header .header-btn');
        if (!backButton) {
            return;
        }
        const backUrl = isCategoryPractice ? categorySession.buildBackUrl() : readingSession.buildIndexUrl();
        backButton.setAttribute('href', backUrl);
        backButton.removeAttribute('onclick');
        backButton.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            window.location.href = backUrl;
        }, true);
    }

    function wrapPageSwitching() {
        const originalSwitchPage = window.switchPage;
        window.switchPage = function switchPageWithReadingSession(pageNumber, ...rest) {
            const requestedPage = Number.parseInt(pageNumber, 10);
            if (!Number.isInteger(requestedPage)) {
                return typeof originalSwitchPage === 'function'
                    ? originalSwitchPage.apply(this, [pageNumber, ...rest])
                    : undefined;
            }

            const targetPage = isCategoryPractice
                ? resolveCategoryPage(requestedPage)
                : resolveReviewPage(requestedPage);
            if (!targetPage) {
                return undefined;
            }

            const result = typeof originalSwitchPage === 'function'
                ? originalSwitchPage.apply(this, [targetPage, ...rest])
                : activatePage(targetPage);
            currentPage = targetPage;
            if (isCategoryPractice) {
                categorySession.rememberProgress(targetPage);
                categorySession.replacePageUrl(targetPage);
            } else {
                readingSession.replacePageUrl(targetPage);
            }
            return result;
        };
    }

    function resolveCategoryPage(requestedPage) {
        const numericPage = Number.parseInt(requestedPage, 10);
        const currentExamPages = categorySession.sequence
            .filter((item) => item.examKey === readingSession.examKey)
            .map((item) => item.page);
        if (currentExamPages.includes(numericPage)) {
            return numericPage;
        }

        const direction = numericPage > currentPage ? 1 : -1;
        const moveTarget = categorySession.getMoveTarget(currentPage, direction);
        if (moveTarget.done) {
            window.location.href = categorySession.buildBackUrl();
            return null;
        }
        if (moveTarget.edge === 'start') {
            return currentPage;
        }
        if (!moveTarget.sameExamKey) {
            window.location.href = moveTarget.href;
            return null;
        }
        return moveTarget.page;
    }

    function resolveReviewPage(requestedPage) {
        if (!readingSession.isReviewMode) {
            return requestedPage;
        }
        const reviewPages = readingSession.getReviewPages();
        if (reviewPages.includes(requestedPage)) {
            return requestedPage;
        }
        const direction = requestedPage > currentPage ? 1 : -1;
        const moveTarget = readingSession.getMoveTarget(currentPage, direction);
        if (moveTarget.done) {
            readingSession.redirectToIndex();
            return null;
        }
        if (moveTarget.page) {
            return moveTarget.page;
        }
        return currentPage;
    }

    function activatePage(page) {
        document.querySelectorAll('.page-container').forEach((container) => container.classList.remove('active'));
        const targetPage = getPageContainer(page);
        if (targetPage) {
            targetPage.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function restoreInitialPage() {
        const requestedPage = Number.parseInt(urlParams.get('page'), 10);
        const initialPage = isCategoryPractice
            ? categoryInitialTarget.page
            : readingSession.getInitialPage(requestedPage);
        if (initialPage !== getCurrentPageNumber()) {
            window.setTimeout(() => {
                window.switchPage(initialPage);
            }, 0);
        } else {
            if (isCategoryPractice) {
                categorySession.rememberProgress(initialPage);
                categorySession.replacePageUrl(initialPage);
            } else {
                readingSession.replacePageUrl(initialPage);
            }
        }
        currentPage = initialPage;
    }

    function wrapSubmitFunctions() {
        const originalSubmitAnswers = window.submitAnswers;
        const originalSubmitAllAnswers = window.submitAllAnswers;

        if (typeof originalSubmitAnswers === 'function') {
            window.submitAnswers = function submitAnswersWithReadingSession(page, ids, ...rest) {
                return handleSubmit(originalSubmitAnswers, this, page, ids, rest);
            };
        }

        if (typeof originalSubmitAllAnswers === 'function') {
            window.submitAllAnswers = function submitAllAnswersWithReadingSession(page, ids, ...rest) {
                return handleSubmit(originalSubmitAllAnswers, this, page, ids, rest);
            };
        }
    }

    function handleSubmit(originalFunction, context, page, ids, rest) {
        const pageNumber = Number.parseInt(page, 10);
        if (!Number.isInteger(pageNumber)) {
            return originalFunction.apply(context, [page, ids, ...rest]);
        }

        if (isTestMode && !readingSession.isReviewMode && !testState.started) {
            startTestRun();
        }

        if (isTestMode && testState.submitted) {
            return undefined;
        }

        const wasSubmitted = isPageSubmitted(pageNumber);
        const result = originalFunction.apply(context, [page, ids, ...rest]);

        if (!wasSubmitted && isPageSubmitted(pageNumber)) {
            recordPageResult(pageNumber);
            if (isTestMode && submittedPages.size >= pageDefinitions.length) {
                completeTest();
            }
        }

        return result;
    }

    function setAnswerInputsDisabled(disabled) {
        document.querySelectorAll('.option-input, .qcard input[type="radio"], .question-card input[type="radio"]').forEach((input) => {
            if (!input.closest('.reviewed')) {
                input.disabled = disabled;
            }
        });
        document.querySelectorAll('.submit-btn').forEach((button) => {
            const pageMatch = String(button.id || '').match(/(\d+)$/);
            const page = pageMatch ? Number.parseInt(pageMatch[1], 10) : null;
            if (!page || !isPageSubmitted(page)) {
                button.disabled = disabled;
            }
        });
    }

    function countPageUnanswered(page) {
        const definition = getDefinition(page);
        return definition ? definition.ids.filter((qId) => !getSelectedInput(qId)).length : 0;
    }

    function ensureSelectionsForTimedSubmit() {
        const data = getAnswerData() || {};
        pageDefinitions.forEach((definition) => {
            if (isPageSubmitted(definition.page)) {
                return;
            }
            timedOutUnansweredByPage.set(definition.page, countPageUnanswered(definition.page));
            definition.ids.forEach((qId) => {
                if (getSelectedInput(qId)) {
                    return;
                }
                const answer = data[qId] || data[`q${qId}`];
                const correctValue = answer ? String(answer.correct) : '';
                const fallback = getOptionInputs(qId).find((input) => String(input.value) !== correctValue) || getOptionInputs(qId)[0];
                if (!fallback) {
                    return;
                }
                fallback.checked = true;
                const label = fallback.closest('.option-label, .option');
                if (label) {
                    label.classList.add('selected');
                }
            });
        });
    }

    function submitAllUnsubmittedPages() {
        pageDefinitions.forEach((definition) => {
            if (isPageSubmitted(definition.page)) {
                return;
            }
            const fn = definition.functionName && typeof window[definition.functionName] === 'function'
                ? window[definition.functionName]
                : null;
            if (fn) {
                fn(definition.page, definition.ids);
            }
        });
    }

    function getSharedReadingTools() {
        return window.StudyQuestReadingMode || null;
    }

    function startTestRun(detail = {}) {
        if (testState.started || testState.submitted) {
            return;
        }

        const seconds = Number.parseInt(detail.seconds, 10);
        const minutes = Number.parseInt(detail.minutes, 10);
        testState.started = true;
        testState.selectedMinutes = Number.isFinite(minutes) && minutes > 0
            ? minutes
            : testState.selectedMinutes;
        testState.remainingSeconds = Number.isFinite(seconds) && seconds > 0
            ? seconds
            : testState.selectedMinutes * 60;
        testState.elapsedSeconds = 0;
        testState.timedOut = false;
        testRunMeta = testServer && typeof testServer.startRun === 'function'
            ? testServer.startRun({
                module: 'reading',
                subType: 'n2_middle',
                mode: 'year',
                scopeKey: normalizeScopeKey(examKey),
                sourcePage: window.location.pathname
            })
            : null;
    }

    function syncSharedReadingToolsResult() {
        const sharedReadingTools = getSharedReadingTools();
        const timerInfo = sharedReadingTools && typeof sharedReadingTools.getResultTimerInfo === 'function'
            ? sharedReadingTools.getResultTimerInfo() || {}
            : {};
        if (Number.isFinite(timerInfo.seconds)) {
            testState.elapsedSeconds = timerInfo.seconds;
        }
        testState.timedOut = Boolean(timerInfo.timedOut || testState.timedOut);
    }

    function bindOptionalTestController() {
        setAnswerInputsDisabled(false);

        document.addEventListener('studyquest:reading-test-start', (event) => {
            startTestRun(event.detail || {});
        });

        document.addEventListener('studyquest:reading-test-timeout', () => {
            if (testState.submitted) {
                return;
            }
            startTestRun();
            testState.timedOut = true;
            ensureSelectionsForTimedSubmit();
            submitAllUnsubmittedPages();
            completeTest();
        });
    }

    function completeTest() {
        if (!isTestMode || testState.submitted) {
            return;
        }
        testState.submitted = true;
        stopTestTimer();
        const sharedReadingTools = getSharedReadingTools();
        if (sharedReadingTools && typeof sharedReadingTools.completeTest === 'function') {
            sharedReadingTools.completeTest({ timedOut: testState.timedOut });
        }
        syncSharedReadingToolsResult();
        setAnswerInputsDisabled(true);
        showTestResultOverlay(getTotalScore());
    }

    function stopTestTimer() {
        if (testState.timerId) {
            window.clearInterval(testState.timerId);
            testState.timerId = null;
        }
    }

    function completeRewardRun(score) {
        if (!isTestMode || !testRunMeta || !testServer || typeof testServer.completeRun !== 'function') {
            return null;
        }
        return testServer.completeRun({
            runKey: testRunMeta.runKey,
            module: 'reading',
            subType: 'n2_middle',
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
            meta: `练习完成 · ${formatExamLabel(examKey)} · 中篇理解`,
            retryUrl: `${window.location.pathname}?readingMode=test&examKey=${encodeURIComponent(examKey)}`,
            indexUrl: readingSession.buildIndexUrl()
        });
    }

    function normalizeScopeKey(value) {
        return String(value || '').trim().replace(/\./g, '-').replace(/\s+/g, '');
    }

    function formatExamLabel(value) {
        const match = String(value || '').trim().match(/^(\d{4})[.\-](\d{1,2})$/);
        return match ? `${match[1]}年${Number.parseInt(match[2], 10)}月` : String(value || '').trim();
    }

})();
