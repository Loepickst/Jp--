(function() {
    'use strict';

    const STYLE_ID = 'study-quest-listening-reward-style';
    const OVERLAY_ID = 'study-quest-listening-result-overlay';
    const PROMPT_ID = 'study-quest-listening-result-prompt';
    const ANNUAL_RESULT_ID = 'study-quest-listening-annual-result';
    const ANNUAL_START_ID = 'study-quest-listening-test-start';

    function ensureStyles() {
        if (document.getElementById(STYLE_ID)) {
            return;
        }
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            .sq-listening-result-prompt {
                position: fixed;
                right: max(16px, env(safe-area-inset-right));
                bottom: max(96px, calc(env(safe-area-inset-bottom) + 88px));
                z-index: 9600;
                display: flex;
                flex-direction: column;
                gap: 10px;
                align-items: flex-end;
                max-width: min(88vw, 320px);
            }
            .sq-listening-result-chip {
                padding: 10px 14px;
                border-radius: 18px;
                background: rgba(255, 255, 255, 0.96);
                color: #6c5143;
                border: 1px solid rgba(214, 64, 69, 0.12);
                box-shadow: 0 10px 24px rgba(44, 44, 44, 0.1);
                font-size: 13px;
                line-height: 1.5;
                text-align: right;
                backdrop-filter: blur(10px);
            }
            .sq-listening-result-button {
                appearance: none;
                border: 1px solid rgba(214, 64, 69, 0.16);
                background: linear-gradient(135deg, #d64045, #b33e3e);
                color: #fff;
                border-radius: 999px;
                padding: 12px 20px;
                font: inherit;
                font-size: 14px;
                font-weight: 800;
                cursor: pointer;
                box-shadow: 0 14px 28px rgba(179, 62, 62, 0.22);
                transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;
            }
            .sq-listening-result-button:hover,
            .sq-listening-result-button:focus-visible {
                transform: translateY(-1px);
                box-shadow: 0 18px 32px rgba(179, 62, 62, 0.28);
            }
            .sq-listening-result-button:focus-visible {
                outline: 2px solid rgba(214, 64, 69, 0.2);
                outline-offset: 3px;
            }
            .sq-listening-result-overlay {
                position: fixed;
                inset: 0;
                z-index: 9700;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 24px;
                background: rgba(248, 244, 236, 0.94);
                backdrop-filter: blur(18px);
            }
            .sq-listening-result-card {
                width: min(100%, 640px);
                background: #fff;
                border: 1px solid #e6e4df;
                border-radius: 20px;
                box-shadow: 0 18px 48px rgba(44, 44, 44, 0.14);
                padding: 30px 28px 28px;
                box-sizing: border-box;
                text-align: center;
            }
            .sq-listening-result-icon {
                width: 72px;
                height: 72px;
                margin: 0 auto 16px;
                border-radius: 999px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #ecf8ef;
                color: #4aa55d;
            }
            .sq-listening-result-title {
                margin: 0 0 8px;
                font-size: 30px;
                line-height: 1.15;
                color: #2c2c2a;
                font-weight: 800;
            }
            .sq-listening-result-subtitle {
                margin: 0 0 20px;
                font-size: 15px;
                line-height: 1.7;
                color: #6f665f;
            }
            .sq-listening-result-grid {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 12px;
                margin-bottom: 22px;
            }
            .sq-listening-result-stat {
                border-radius: 16px;
                background: #faf8f4;
                border: 1px solid #ece8e1;
                padding: 14px 10px;
            }
            .sq-listening-result-stat-label {
                display: block;
                margin-bottom: 6px;
                font-size: 12px;
                font-weight: 700;
                letter-spacing: 0.04em;
                color: #9a8579;
            }
            .sq-listening-result-stat-value {
                font-size: 24px;
                font-weight: 800;
                color: #2c2c2a;
            }
            .sq-listening-result-copy {
                margin: 0 0 20px;
                font-size: 15px;
                line-height: 1.75;
                color: #5f5149;
            }
            .sq-listening-result-actions {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 12px;
                margin-top: 18px;
            }
            .sq-listening-overlay-action {
                appearance: none;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 132px;
                padding: 12px 18px;
                border-radius: 999px;
                border: 1px solid rgba(44, 44, 42, 0.12);
                background: rgba(255, 255, 255, 0.98);
                color: #4d433c;
                text-decoration: none;
                font: inherit;
                font-size: 14px;
                font-weight: 800;
                cursor: pointer;
                box-sizing: border-box;
                box-shadow: 0 8px 18px rgba(44, 44, 42, 0.08);
                transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
            }
            .sq-listening-overlay-action:hover,
            .sq-listening-overlay-action:focus-visible {
                transform: translateY(-1px);
                border-color: rgba(214, 64, 69, 0.22);
                box-shadow: 0 12px 24px rgba(44, 44, 42, 0.12);
            }
            .sq-listening-overlay-action:focus-visible {
                outline: 2px solid rgba(214, 64, 69, 0.16);
                outline-offset: 3px;
            }
            .sq-listening-overlay-action.is-primary {
                border-color: rgba(52, 152, 219, 0.22);
                background: linear-gradient(135deg, #3498db, #2d80b8);
                color: #fff;
            }
            .listening-test-start {
                width: min(760px, calc(100% - 32px));
                margin: 30px auto 110px;
                padding: 38px 34px;
                border: 1px solid #dce2ec;
                border-radius: 16px;
                background: #fff;
                box-sizing: border-box;
                text-align: center;
                box-shadow: 0 16px 40px rgba(37, 49, 76, .08);
            }
            .listening-test-start[hidden] { display: none; }
            .listening-test-start__eyebrow {
                display: block;
                margin-bottom: 8px;
                color: #ae5d56;
                font-size: 11px;
                font-weight: 850;
                letter-spacing: .08em;
            }
            .listening-test-start h2 {
                margin: 0;
                color: #20283b;
                font-family: "Noto Serif SC", "Songti SC", serif;
                font-size: clamp(26px, 3vw, 36px);
            }
            .listening-test-start p {
                margin: 12px auto 22px;
                color: #738096;
                font-size: 14px;
                line-height: 1.8;
            }
            .listening-test-start button,
            .listening-test-result-action {
                min-height: 44px;
                padding: 0 22px;
                border: 1px solid #344467;
                border-radius: 9px;
                color: #fff;
                background: #344467;
                font: inherit;
                font-size: 13px;
                font-weight: 800;
                cursor: pointer;
            }
            .listening-test-result {
                box-sizing: border-box;
                width: min(1180px, calc(100% - 48px));
                margin: 38px auto 120px;
                overflow: hidden;
                border: 1px solid #dce3ec;
                border-radius: 14px;
                background: #fff;
                color: #20283b;
            }
            .listening-test-result *,
            .listening-test-result *::before,
            .listening-test-result *::after { box-sizing: border-box; }
            .listening-test-result[hidden] { display: none; }
            .listening-test-result__head {
                display: grid;
                grid-template-columns: minmax(0, 1fr) minmax(260px, 390px);
                align-items: center;
                justify-content: space-between;
                gap: 32px;
                min-height: 112px;
                padding: 28px 32px 22px;
            }
            .listening-test-result__heading > span {
                display: block;
                margin-bottom: 5px;
                color: #ae5d56;
                font-size: 8px;
                font-weight: 850;
                letter-spacing: .14em;
            }
            .listening-test-result__heading h1 {
                margin: 0;
                font-family: "Noto Serif SC", "Songti SC", serif;
                font-size: 23px;
                font-weight: 750;
                line-height: 1.35;
                letter-spacing: .02em;
            }
            .listening-test-result__context {
                margin: 7px 0 0;
                color: #758093;
                font-size: 9px;
                font-weight: 650;
            }
            .listening-test-result__mentor {
                display: grid;
                grid-template-columns: 44px minmax(0, 1fr);
                align-items: center;
                gap: 12px;
                min-width: 0;
            }
            .listening-test-result__mentor-avatar {
                width: 44px;
                height: 44px;
                overflow: hidden;
                border: 2px solid #fff;
                border-radius: 50%;
                background: #eef1f7;
                box-shadow: 0 0 0 1px #dce3ec;
            }
            .listening-test-result__mentor-avatar img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 68% 18%;
                transform: scale(1.45);
                transform-origin: 68% 18%;
            }
            .listening-test-result__mentor-copy {
                min-width: 0;
                padding-left: 12px;
                border-left: 3px solid #596887;
            }
            .listening-test-result__mentor-copy strong {
                display: block;
                margin-bottom: 3px;
                color: #596887;
                font-size: 9px;
                font-weight: 800;
            }
            .listening-test-result__mentor-copy p {
                margin: 0;
                color: #414b5d;
                font-size: 10px;
                font-weight: 650;
                line-height: 1.55;
            }
            .listening-test-result__summary {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                margin: 0 32px;
                border-top: 1px solid #dce3ec;
                border-bottom: 1px solid #dce3ec;
            }
            .listening-test-result__summary div {
                display: flex;
                align-items: center;
                gap: 12px;
                min-height: 62px;
                padding: 10px 20px;
                border-right: 1px solid #dce3ec;
            }
            .listening-test-result__summary div:first-child { padding-left: 0; }
            .listening-test-result__summary div:last-child { border-right: 0; }
            .listening-test-result__summary small {
                color: #7d899d;
                font-size: 9px;
                font-weight: 750;
                white-space: nowrap;
            }
            .listening-test-result__summary strong {
                font-size: 16px;
                font-weight: 800;
                font-variant-numeric: tabular-nums;
            }
            .listening-test-result__review { padding: 28px 32px 0; }
            .listening-test-result__review-head {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                gap: 20px;
                padding-bottom: 12px;
            }
            .listening-test-result__review-head h2 {
                margin: 0;
                font-family: "Noto Serif SC", "Songti SC", serif;
                font-size: 16px;
                font-weight: 750;
            }
            .listening-test-result__review-head span {
                color: #a9b1bf;
                font-size: 8px;
                font-weight: 650;
            }
            .listening-test-result__review-list {
                border-top: 1px solid #dce3ec;
            }
            .listening-test-result-row {
                display: grid;
                grid-template-columns: 34px minmax(0, 1fr) auto 96px;
                align-items: center;
                gap: 16px;
                width: 100%;
                min-height: 72px;
                padding: 0;
                border: 0;
                border-bottom: 1px solid #dce3ec;
                color: #20283b;
                background: transparent;
                font: inherit;
                text-align: left;
                cursor: pointer;
            }
            .listening-test-result-row:hover,
            .listening-test-result-row:focus-visible { background: #f7f8fa; }
            .listening-test-result-row:focus-visible { outline: 2px solid #596887; outline-offset: -2px; }
            .listening-test-result-row__number {
                color: #596887;
                font-family: "Noto Serif SC", "Songti SC", serif;
                font-size: 12px;
                font-weight: 800;
            }
            .listening-test-result-row__copy {
                display: grid;
                gap: 4px;
                min-width: 0;
            }
            .listening-test-result-row__copy strong {
                overflow: hidden;
                color: #414b5d;
                font-size: 11px;
                font-weight: 800;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .listening-test-result-row__copy span {
                overflow: hidden;
                color: #758093;
                font-size: 9px;
                font-weight: 550;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .listening-test-result-row__state {
                color: #b35e57;
                font-size: 9px;
                font-style: normal;
                font-weight: 800;
                white-space: nowrap;
            }
            .listening-test-result-row__link {
                justify-self: end;
                color: #596887;
                font-size: 9px;
                font-weight: 800;
                white-space: nowrap;
            }
            .listening-test-result__empty {
                display: grid;
                align-content: center;
                gap: 4px;
                min-height: 84px;
                margin: 0;
                border-top: 1px solid #dce3ec;
                border-bottom: 1px solid #dce3ec;
                color: #637087;
                font-size: 10px;
            }
            .listening-test-result__actions {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 10px;
                padding: 22px 32px 28px;
            }
            .listening-test-result-action {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-height: 42px;
                padding: 0 18px;
                border-radius: 9px;
                font-size: 10px;
                text-decoration: none;
            }
            .listening-test-result-action.is-secondary {
                border-color: #ccd4e1;
                color: #344467;
                background: #fff;
            }
            .listening-return-result {
                min-height: 40px;
                padding: 0 16px;
                border: 1px solid #ccd4e1;
                border-radius: 8px;
                color: #344467;
                background: #fff;
                font: inherit;
                font-size: 12px;
                font-weight: 800;
                cursor: pointer;
            }
            body.listening-challenge-waiting .practice-container,
            body.listening-challenge-waiting .listening-page-intro,
            body.listening-challenge-waiting .listening-audio-dock,
            body.listening-challenge-waiting .audio-player-wrapper,
            body.listening-challenge-waiting .audio-wrapper,
            body.listening-challenge-result .practice-container,
            body.listening-challenge-result .listening-page-intro,
            body.listening-challenge-result .listening-audio-dock,
            body.listening-challenge-result .audio-player-wrapper,
            body.listening-challenge-result .audio-wrapper,
            body.listening-challenge-mode #listeningSessionTimer {
                display: none !important;
            }
            body.listening-challenge-result {
                background: #f3f5f8 !important;
            }
            body.listening-challenge-running #questionSelect,
            body.listening-challenge-running #btnExplanation,
            body.listening-challenge-running #btnPractice,
            body.listening-challenge-running #prevBtn,
            body.listening-challenge-running #nextBtn,
            body.listening-challenge-running #rewindBtn,
            body.listening-challenge-running #forwardBtn,
            body.listening-challenge-running #loopBtn,
            body.listening-challenge-running #speedBtn,
            body.listening-challenge-running #playBtn,
            body.listening-challenge-running .listening-skip-button {
                display: none !important;
            }
            body.listening-challenge-running #progressContainer {
                pointer-events: none !important;
            }
            @media (max-width: 640px) {
                .sq-listening-result-grid {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }
                .sq-listening-result-title {
                    font-size: 26px;
                }
                .sq-listening-result-subtitle,
                .sq-listening-result-copy {
                    font-size: 14px;
                }
                .sq-listening-result-card {
                    padding: 24px 18px 22px;
                }
                .sq-listening-result-prompt {
                    right: 14px;
                    left: 14px;
                    align-items: stretch;
                    max-width: none;
                }
                .sq-listening-result-chip {
                    text-align: center;
                }
                .sq-listening-result-button {
                    width: 100%;
                }
                .listening-test-result__summary {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    margin: 0 20px;
                }
                .listening-test-result {
                    width: calc(100% - 28px);
                    margin-top: 30px;
                }
                .listening-test-result__head {
                    grid-template-columns: 1fr;
                    gap: 18px;
                    padding: 22px 20px 18px;
                }
                .listening-test-result__heading h1 { font-size: 20px; }
                .listening-test-result__mentor { grid-template-columns: 38px minmax(0, 1fr); }
                .listening-test-result__mentor-avatar { width: 38px; height: 38px; }
                .listening-test-result__summary div,
                .listening-test-result__summary div:first-child {
                    min-height: 54px;
                    padding: 8px 12px;
                }
                .listening-test-result__summary div:nth-child(2) { border-right: 0; }
                .listening-test-result__summary div:nth-child(-n + 2) { border-bottom: 1px solid #dce3ec; }
                .listening-test-result__review { padding: 24px 20px 0; }
                .listening-test-result__review-head {
                    align-items: flex-start;
                    flex-direction: column;
                    gap: 5px;
                }
                .listening-test-result-row {
                    grid-template-columns: 26px minmax(0, 1fr) auto;
                    gap: 8px 10px;
                    min-height: 82px;
                    padding: 10px 0;
                }
                .listening-test-result-row__copy span { white-space: normal; }
                .listening-test-result-row__state { grid-column: 2; }
                .listening-test-result-row__link { grid-column: 3; grid-row: 1 / span 2; }
                .listening-test-result__actions {
                    align-items: stretch;
                    flex-direction: column-reverse;
                    padding: 20px;
                }
                .listening-test-result-action { width: 100%; }
            }
        `;
        document.head.appendChild(style);
    }

    function htmlEscape(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function normalizeExamKeyForUrl(examKey) {
        return String(examKey || '').trim().replace(/^N[123]-/i, '');
    }

    function buildResultCopy(stats) {
        if (stats.percentage === 100) {
            return '整卷都听得很稳，节奏和信息点都没有漏掉。';
        }
        if (stats.percentage >= 80) {
            return '整体判断已经很顺了，错题复盘一下就会更稳。';
        }
        if (stats.percentage >= 60) {
            return '这一轮已经抓住主线了，再回听几题会更有感觉。';
        }
        return '先别急着翻页，把刚才没抓住的句子回听一遍会很值。';
    }

    function buildResultTitle(stats) {
        if (stats.percentage === 100) return '听解完成';
        if (stats.percentage >= 80) return '状态很稳';
        if (stats.percentage >= 60) return '继续巩固';
        return '再回听一轮';
    }

    function createController(config) {
        ensureStyles();

        function isRandomExamPage() {
            return window.__LISTENING_RANDOM_EXAM__ === true;
        }

        const state = {
            runMeta: null,
            rewardResult: null,
            answered: new Map(),
            promptVisible: false,
            overlayVisible: false,
            reviewMode: false,
            practiceVariant: 'study',
            analysisUnlocked: true,
            pageHooksInstalled: false,
            autoAdvanceTimerId: null,
            audioListenersInstalled: false,
            explanationButtonLabel: '',
            subtitleHintEl: null,
            annualStarted: false,
            annualFinished: false,
            annualReviewIndex: 0,
            internalNavigation: false,
            audioError: false
        };

        function getQuestions() {
            if (typeof config.getQuestions === 'function') {
                const direct = config.getQuestions();
                if (Array.isArray(direct)) return direct;
            }
            const examKey = typeof config.getExamKey === 'function' ? config.getExamKey() : '';
            const examData = window.examData && examKey ? window.examData[examKey] : null;
            return Array.isArray(examData && examData.questions) ? examData.questions : [];
        }

        function getCurrentQuestionIndex() {
            return typeof config.getCurrentQuestionIndex === 'function'
                ? Number(config.getCurrentQuestionIndex()) || 0
                : 0;
        }

        function getCurrentQuestion() {
            const questions = getQuestions();
            return questions[getCurrentQuestionIndex()] || null;
        }

        function getCurrentQuestionId() {
            const question = getCurrentQuestion();
            return question ? String(question.id || getCurrentQuestionIndex()) : '';
        }

        function isReviewMode() {
            return state.reviewMode;
        }

        function getPracticeVariant() {
            if (state.practiceVariant === 'challenge') {
                return 'challenge';
            }
            return 'study';
        }

        function isChallengeMode() {
            return !isReviewMode() && getPracticeVariant() === 'challenge';
        }

        function isAnnualChallengeMode() {
            return isChallengeMode() && /\/years\//i.test(window.location.pathname);
        }

        function getModeKey() {
            if (isReviewMode()) return 'review';
            return isChallengeMode() ? 'challenge' : 'study';
        }

        function getSubType() {
            const subTypes = {
                'task-comprehension': 'task_comprehension',
                'point-comprehension': 'point_comprehension',
                'summary-comprehension': 'overview_comprehension',
                'overview-comprehension': 'overview_comprehension',
                'immediate-response': 'immediate_response',
                'integrated-comprehension': 'integrated_comprehension'
            };
            return subTypes[config.type] || String(config.type || 'listening').replace(/-/g, '_');
        }

        function getLevelKey() {
            return String(config.level || '').trim().toUpperCase();
        }

        function getScopeKey() {
            const examKey = typeof config.getExamKey === 'function' ? config.getExamKey() : '';
            const examKeyPart = String(examKey || '')
                .trim()
                .replace(/[^a-zA-Z0-9_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
            return `${getSubType()}-${getLevelKey().toLowerCase()}-${examKeyPart || 'default'}-${getModeKey()}`;
        }

        function getStats() {
            const total = getQuestions().length;
            let correctCount = 0;
            state.answered.forEach((value) => {
                if (value === true || (value && value.isCorrect === true)) correctCount += 1;
            });
            let answeredCount = 0;
            state.answered.forEach((value) => {
                if (typeof value === 'boolean' || (value && !value.unanswered)) answeredCount += 1;
            });
            const incorrectCount = Math.max(0, answeredCount - correctCount);
            const unansweredCount = Math.max(0, total - answeredCount);
            const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
            return { total, correctCount, answeredCount, incorrectCount, unansweredCount, percentage };
        }

        function dispatchPhase(phase, stats) {
            if (!window.StudyQuestTestUi || typeof window.StudyQuestTestUi.dispatchPracticeState !== 'function') {
                return;
            }
            window.StudyQuestTestUi.dispatchPracticeState({
                module: 'listening',
                subType: getSubType(),
                mode: getModeKey(),
                phase,
                isCorrect: true,
                questionIndex: stats.total,
                questionCount: stats.total,
                accuracy: stats.total > 0 ? stats.correctCount / stats.total : 0,
                streak: stats.correctCount
            });
        }

        function ensureRewardResult() {
            if (!isChallengeMode() || isReviewMode() || state.rewardResult || !state.runMeta) {
                return state.rewardResult;
            }
            if (!window.StudyQuestTestServer || typeof window.StudyQuestTestServer.completeRun !== 'function') {
                return null;
            }
            const stats = getStats();
            state.rewardResult = window.StudyQuestTestServer.completeRun({
                runKey: state.runMeta.runKey,
                module: 'listening',
                subType: getSubType(),
                mode: getModeKey(),
                scopeKey: getScopeKey(),
                questionCount: stats.total,
                answeredCount: stats.answeredCount,
                correctCount: stats.correctCount,
                accuracy: stats.total > 0 ? stats.correctCount / stats.total : 0,
                cleared: true,
                sourcePage: window.location.pathname
            });
            return state.rewardResult;
        }

        function buildDrawMarkup(reward) {
            if (!reward || !reward.accepted || !reward.drawOffer || !reward.drawOffer.available) {
                return '';
            }
            if (!window.StudyQuestTestUi || typeof window.StudyQuestTestUi.getDrawAffordanceMarkup !== 'function') {
                return '';
            }
            return window.StudyQuestTestUi.getDrawAffordanceMarkup(reward.drawOffer.runKey || (state.runMeta && state.runMeta.runKey));
        }

        function clearPrompt() {
            const prompt = document.getElementById(PROMPT_ID);
            if (prompt) prompt.remove();
            state.promptVisible = false;
        }

        function clearAutoAdvanceTimer() {
            if (state.autoAdvanceTimerId) {
                window.clearTimeout(state.autoAdvanceTimerId);
                state.autoAdvanceTimerId = null;
            }
            if (state.subtitleHintEl) {
                state.subtitleHintEl.remove();
                state.subtitleHintEl = null;
            }
        }

        function setAnnualBodyPhase(phase) {
            document.body.classList.toggle('listening-challenge-mode', isAnnualChallengeMode());
            ['waiting', 'running', 'result', 'review'].forEach((name) => {
                document.body.classList.toggle(`listening-challenge-${name}`, isAnnualChallengeMode() && phase === name);
            });
        }

        function ensureAnnualStartGate(message) {
            if (!isAnnualChallengeMode()) return null;
            let gate = document.getElementById(ANNUAL_START_ID);
            if (!gate) {
                gate = document.createElement('section');
                gate.id = ANNUAL_START_ID;
                gate.className = 'listening-test-start';
                const anchor = document.querySelector('.practice-container');
                if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(gate, anchor);
                else document.body.appendChild(gate);
            }
            gate.innerHTML = `
                <span class="listening-test-start__eyebrow">TEST MODE</span>
                <h2>${state.audioError ? '音频暂时无法播放' : '准备好后开始测试'}</h2>
                <p>${htmlEscape(message || (state.audioError ? '请检查音频资源后重试。本题不会被提前判定。' : '开始后音频将连续播放；每段结束时锁定当前答案并自动进入下一题。'))}</p>
                <button type="button">${state.audioError ? '重试播放' : '开始测试'}</button>
            `;
            gate.hidden = false;
            gate.querySelector('button').addEventListener('click', beginAnnualChallenge);
            return gate;
        }

        function hideAnnualStartGate() {
            const gate = document.getElementById(ANNUAL_START_ID);
            if (gate) gate.hidden = true;
        }

        function getCurrentAnswerSnapshot() {
            const question = getCurrentQuestion();
            const lists = Array.from(document.querySelectorAll('#appContainer .options-list'));
            if (!question || !lists.length) {
                return { isCorrect: false, unanswered: true, selectedIndices: [] };
            }
            const selectedIndices = lists.map((list) => {
                const selected = list.querySelector('li.selected');
                return selected ? Number(selected.getAttribute('data-index')) : null;
            });
            const unanswered = selectedIndices.some((value) => !Number.isInteger(value));
            let isCorrect = !unanswered;
            lists.forEach((list, listIndex) => {
                const selectedIndex = selectedIndices[listIndex];
                if (!Number.isInteger(selectedIndex)) {
                    isCorrect = false;
                    return;
                }
                const qIndex = Number(list.getAttribute('data-qidx')) || listIndex;
                const options = question.subQuestions && question.subQuestions[qIndex]
                    ? question.subQuestions[qIndex].options
                    : question.options;
                if (!options || !options[selectedIndex] || options[selectedIndex].correct !== true) {
                    isCorrect = false;
                }
            });
            return { isCorrect, unanswered, selectedIndices };
        }

        function markQuestionAsMistake(question) {
            if (!question || typeof window.getMarks !== 'function' || typeof window.saveMarks !== 'function') return;
            const marks = window.getMarks();
            if (!marks.includes(question.id)) {
                marks.push(question.id);
                window.saveMarks(marks);
                if (typeof window.updateMarkUI === 'function') window.updateMarkUI();
            }
        }

        function playAnnualAudio() {
            const audio = document.getElementById('audioElement');
            if (!audio) {
                state.audioError = true;
                state.annualStarted = false;
                setAnnualBodyPhase('waiting');
                ensureAnnualStartGate('当前题目的音频播放器没有加载成功，请刷新页面或返回年度目录后重试。');
                syncChallengeUi();
                return;
            }
            audio.loop = false;
            audio.playbackRate = 1;
            const promise = audio.play();
            if (promise && typeof promise.catch === 'function') {
                promise.catch(() => {
                    state.audioError = true;
                    state.annualStarted = false;
                    setAnnualBodyPhase('waiting');
                    ensureAnnualStartGate();
                    syncChallengeUi();
                });
            }
        }

        function beginAnnualChallenge() {
            if (!isAnnualChallengeMode() || state.annualFinished) return;
            state.audioError = false;
            state.annualStarted = true;
            hideAnnualStartGate();
            setAnnualBodyPhase('running');
            if (typeof window.setMode === 'function') window.setMode('practice', false);
            syncChallengeUi();
            playAnnualAudio();
        }

        function finalizeAnnualQuestion() {
            if (!isAnnualChallengeMode() || !state.annualStarted || state.annualFinished || state.analysisUnlocked) return;
            const question = getCurrentQuestion();
            if (!question) return;
            const answer = getCurrentAnswerSnapshot();
            state.answered.set(String(question.id || getCurrentQuestionIndex()), answer);
            if (!answer.isCorrect) markQuestionAsMistake(question);

            const container = document.getElementById('appContainer');
            if (container) {
                container.dataset.sqChallengeAnswered = '1';
                container.querySelectorAll('.options-list li').forEach((item) => { item.style.pointerEvents = 'none'; });
                container.querySelectorAll('.inline-confirm-btn').forEach((button) => button.remove());
            }

            const isLast = getCurrentQuestionIndex() >= Math.max(0, getQuestions().length - 1);
            if (isLast) {
                showAnnualResult();
                return;
            }

            if (typeof window.nextQuestion === 'function') {
                state.internalNavigation = true;
                window.nextQuestion();
                state.internalNavigation = false;
                window.setTimeout(playAnnualAudio, 0);
            }
        }

        function getAnnualReviewRows() {
            return getQuestions().map((question, index) => {
                const answer = state.answered.get(String(question.id || index)) || {
                    isCorrect: false,
                    unanswered: true,
                    selectedIndices: []
                };
                return { question, index, answer };
            }).filter((row) => !row.answer.isCorrect);
        }

        function getAnnualSessionMeta() {
            const examKey = typeof config.getExamKey === 'function' ? String(config.getExamKey() || '') : '';
            const source = `${examKey} ${new URLSearchParams(window.location.search).get('year') || ''}`;
            const dateMatch = source.match(/(?:^|[^0-9])(20\d{2}|19\d{2})[-._](0?[1-9]|1[0-2])(?:[^0-9]|$)/);
            const typeLabels = {
                'task-comprehension': '課題理解',
                'point-comprehension': 'ポイント理解',
                'summary-comprehension': '概要理解',
                'overview-comprehension': '概要理解',
                'immediate-response': '即時応答',
                'integrated-comprehension': '統合理解'
            };
            const typeLabel = typeLabels[config.type] || '聴解練習';
            const dateLabel = dateMatch ? `${dateMatch[1]}年${Number(dateMatch[2])}月` : getLevelKey();
            return {
                typeLabel,
                sessionLabel: `${dateLabel} · ${typeLabel}`
            };
        }

        function getAnnualResultComment(stats) {
            if (stats.percentage === 100) return '信息点都接住了，这一轮听得很稳。';
            if (stats.percentage >= 80) return '整体节奏很好，回听标记题就能把细节补齐。';
            if (stats.percentage >= 60) return '主线已经抓住了，再听一次容易漏掉的转折吧。';
            return '先别急，回到标记题，把人物关系和关键信息重新接起来。';
        }

        function getAnnualResultAvatarUrl() {
            return new URL('../../../../../assets/listening/music-duo-private-upper-body-v6.png', document.baseURI).href;
        }

        function buildAnnualIndexHref() {
            const href = typeof config.buildIndexUrl === 'function' ? config.buildIndexUrl() : '../index.html';
            const url = new URL(href, window.location.href);
            url.searchParams.set('browse', 'year');
            return `${url.pathname}${url.search}${url.hash}`;
        }

        function ensureAnnualResult() {
            let result = document.getElementById(ANNUAL_RESULT_ID);
            if (result) return result;
            result = document.createElement('section');
            result.id = ANNUAL_RESULT_ID;
            result.className = 'listening-test-result';
            result.hidden = true;
            const anchor = document.querySelector('.practice-container');
            if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(result, anchor.nextSibling);
            else document.body.appendChild(result);
            return result;
        }

        function showAnnualResult() {
            if (!isAnnualChallengeMode()) return;
            state.annualFinished = true;
            state.annualStarted = false;
            state.analysisUnlocked = false;
            const audio = document.getElementById('audioElement');
            if (audio) audio.pause();
            hideAnnualStartGate();
            setAnnualBodyPhase('result');
            const stats = getStats();
            const rows = getAnnualReviewRows();
            const sessionMeta = getAnnualSessionMeta();
            ensureRewardResult();
            dispatchPhase(stats.percentage === 100 ? 'perfect_clear' : 'clear', stats);

            const result = ensureAnnualResult();
            result.innerHTML = `
                <header class="listening-test-result__head">
                    <div class="listening-test-result__heading">
                        <span>LISTENING TEST · ${htmlEscape(getLevelKey())}</span>
                        <h1>本次听解总结</h1>
                        <p class="listening-test-result__context">${htmlEscape(sessionMeta.sessionLabel)}</p>
                    </div>
                    <aside class="listening-test-result__mentor" aria-label="一二三的评语">
                        <span class="listening-test-result__mentor-avatar"><img src="${htmlEscape(getAnnualResultAvatarUrl())}" alt="一二三"></span>
                        <div class="listening-test-result__mentor-copy"><strong>一二三</strong><p>${htmlEscape(getAnnualResultComment(stats))}</p></div>
                    </aside>
                </header>
                <section class="listening-test-result__summary" aria-label="测试成绩">
                    <div><small>得分</small><strong>${stats.percentage} / 100</strong></div>
                    <div><small>正解</small><strong>${stats.correctCount} 题</strong></div>
                    <div><small>错误</small><strong>${stats.incorrectCount} 题</strong></div>
                    <div><small>未答</small><strong>${stats.unansweredCount} 题</strong></div>
                </section>
                <section class="listening-test-result__review">
                    <header class="listening-test-result__review-head"><h2>本次需要回听的题目</h2><span>点击题目直接进入对应解析</span></header>
                    ${rows.length ? `<div class="listening-test-result__review-list">${rows.map((row) => `
                        <button type="button" class="listening-test-result-row" data-review-question="${row.index}">
                            <span class="listening-test-result-row__number">${String(row.index + 1).padStart(2, '0')}</span>
                            <span class="listening-test-result-row__copy"><strong>問題 ${htmlEscape(row.question.id || row.index + 1)}</strong><span>${htmlEscape(sessionMeta.typeLabel)} · ${row.answer.unanswered ? '音频结束前未选择答案' : '本题答案需要重新确认'}</span></span>
                            <em class="listening-test-result-row__state">${row.answer.unanswered ? '未答' : '错误'}</em>
                            <span class="listening-test-result-row__link">查看解析 ›</span>
                        </button>
                    `).join('')}</div>` : '<p class="listening-test-result__empty">全部回答正确，没有需要回听的题目。</p>'}
                </section>
                <footer class="listening-test-result__actions">
                    <a class="listening-test-result-action is-secondary" href="${htmlEscape(buildAnnualIndexHref())}">返回年度目录</a>
                    <button type="button" class="listening-test-result-action" data-review-first>查看解析</button>
                </footer>
            `;
            result.hidden = false;
            result.querySelectorAll('[data-review-question]').forEach((button) => {
                button.addEventListener('click', () => showAnnualAnalysis(Number(button.dataset.reviewQuestion)));
            });
            result.querySelector('[data-review-first]').addEventListener('click', () => {
                showAnnualAnalysis(rows.length ? rows[0].index : 0);
            });
            syncChallengeUi();
            window.scrollTo({ top: 0, behavior: 'auto' });
        }

        function restoreAnnualAnswer(index) {
            const question = getQuestions()[index];
            if (!question) return;
            const answer = state.answered.get(String(question.id || index));
            if (!answer || !Array.isArray(answer.selectedIndices)) return;
            const lists = Array.from(document.querySelectorAll('#appContainer .options-list'));
            lists.forEach((list, listIndex) => {
                const selectedIndex = answer.selectedIndices[listIndex];
                const items = Array.from(list.children);
                if (Number.isInteger(selectedIndex) && items[selectedIndex]) {
                    items[selectedIndex].classList.add('selected');
                    const qIndex = Number(list.getAttribute('data-qidx')) || listIndex;
                    const options = question.subQuestions && question.subQuestions[qIndex]
                        ? question.subQuestions[qIndex].options
                        : question.options;
                    items[selectedIndex].classList.add(options && options[selectedIndex] && options[selectedIndex].correct ? 'judged-correct' : 'judged-wrong');
                }
                const qIndex = Number(list.getAttribute('data-qidx')) || listIndex;
                const options = question.subQuestions && question.subQuestions[qIndex]
                    ? question.subQuestions[qIndex].options
                    : question.options;
                (options || []).forEach((option, optionIndex) => {
                    if (option.correct && items[optionIndex]) items[optionIndex].classList.add('judged-correct');
                });
                list.classList.add('judged');
            });
            const container = document.getElementById('appContainer');
            if (container) container.classList.add('judged');
        }

        function ensureReturnResultButton() {
            let button = document.getElementById('listening-return-result');
            if (button) return button;
            button = document.createElement('button');
            button.id = 'listening-return-result';
            button.type = 'button';
            button.className = 'listening-return-result';
            button.textContent = '返回结算';
            button.addEventListener('click', showAnnualResult);
            const header = document.querySelector('.card-header');
            if (header) header.appendChild(button);
            return button;
        }

        function showAnnualAnalysis(index) {
            if (!isAnnualChallengeMode()) return;
            const result = ensureAnnualResult();
            result.hidden = true;
            state.analysisUnlocked = true;
            state.annualReviewIndex = Math.max(0, Math.min(getQuestions().length - 1, Number(index) || 0));
            setAnnualBodyPhase('review');
            if (typeof window.changeQuestion === 'function') {
                state.internalNavigation = true;
                window.changeQuestion(state.annualReviewIndex);
                state.internalNavigation = false;
            }
            if (typeof window.setMode === 'function') window.setMode('explanation', false);
            restoreAnnualAnswer(state.annualReviewIndex);
            ensureReturnResultButton().hidden = false;
            syncChallengeUi();
            window.scrollTo({ top: 0, behavior: 'auto' });
        }

        function closeOverlay(options = {}) {
            const { reopenPrompt = false } = options;
            const overlay = document.getElementById(OVERLAY_ID);
            if (overlay) overlay.remove();
            state.overlayVisible = false;
            if (reopenPrompt) {
                showPrompt();
            }
        }

        function ensureChallengeHint() {
            let hint = document.getElementById('sq-listening-challenge-hint');
            if (hint) return hint;
            const target = document.querySelector('.card-header') || document.querySelector('header');
            if (!target || !target.parentNode) return null;

            hint = document.createElement('div');
            hint.id = 'sq-listening-challenge-hint';
            hint.style.margin = '12px 0 0';
            hint.style.padding = '10px 14px';
            hint.style.borderRadius = '999px';
            hint.style.background = 'rgba(179, 62, 62, 0.08)';
            hint.style.color = '#8d2f2f';
            hint.style.fontSize = '13px';
            hint.style.fontWeight = '800';
            hint.style.lineHeight = '1.5';
            hint.style.display = 'inline-flex';
            hint.style.alignItems = 'center';
            hint.style.gap = '8px';
            hint.textContent = '挑战模式：解析将在整卷结算后解锁。';
            target.parentNode.insertBefore(hint, target.nextSibling);
            return hint;
        }

        function syncChallengeUi() {
            const explanationBtn = document.getElementById('btnExplanation');
            const practiceBtn = document.getElementById('btnPractice');
            const questionSelect = document.getElementById('questionSelect');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const loopBtn = document.getElementById('loopBtn');
            const questions = getQuestions();
            const currentIndex = getCurrentQuestionIndex();

            if (isAnnualChallengeMode()) {
                const locked = !state.analysisUnlocked;
                [questionSelect, prevBtn, nextBtn, loopBtn,
                    document.getElementById('rewindBtn'),
                    document.getElementById('forwardBtn'),
                    document.getElementById('speedBtn'),
                    document.getElementById('playBtn')
                ].filter(Boolean).forEach((control) => {
                    control.disabled = locked;
                    control.setAttribute('aria-disabled', locked ? 'true' : 'false');
                });
                if (explanationBtn) explanationBtn.disabled = locked;
                if (practiceBtn) practiceBtn.disabled = locked;
                const progress = document.getElementById('progressContainer');
                if (progress) progress.setAttribute('aria-disabled', locked ? 'true' : 'false');
                const timer = document.getElementById('listeningSessionTimer');
                if (timer) timer.hidden = true;
                return;
            }

            if (explanationBtn && !state.explanationButtonLabel) {
                state.explanationButtonLabel = explanationBtn.textContent || '解析';
            }

            const lockExplanation = isChallengeMode() && !state.analysisUnlocked;
            if (explanationBtn) {
                explanationBtn.disabled = lockExplanation;
                explanationBtn.textContent = lockExplanation ? '结算后解锁' : (state.explanationButtonLabel || '解析');
                explanationBtn.style.opacity = lockExplanation ? '0.55' : '';
                explanationBtn.style.cursor = lockExplanation ? 'not-allowed' : '';
            }

            if (practiceBtn) {
                practiceBtn.disabled = false;
            }

            if (questionSelect) {
                questionSelect.disabled = lockExplanation;
            }

            if (prevBtn) {
                prevBtn.disabled = lockExplanation ? true : currentIndex <= 0;
            }

            if (nextBtn) {
                nextBtn.disabled = lockExplanation ? true : currentIndex >= Math.max(0, questions.length - 1);
            }

            if (loopBtn) {
                loopBtn.disabled = lockExplanation;
                if (lockExplanation) {
                    loopBtn.classList.remove('active');
                }
            }

            const hint = ensureChallengeHint();
            if (hint) {
                hint.style.display = isChallengeMode() ? 'inline-flex' : 'none';
                hint.textContent = state.analysisUnlocked
                    ? '挑战模式：已解锁整套解析，可以回看原文。'
                    : '挑战模式：音频播放结束后 5 秒自动切题，解析将在结算后解锁。';
            }
        }

        function installPageHooks() {
            if (state.pageHooksInstalled) return;

            if (typeof window.setMode === 'function') {
                const originalSetMode = window.setMode;
                window.setMode = function patchedSetMode(mode, updatePreference = true) {
                    if (isChallengeMode() && mode === 'explanation' && !state.analysisUnlocked) {
                        return originalSetMode.call(this, 'practice', false);
                    }
                    return originalSetMode.call(this, mode, updatePreference);
                };
            }

            if (typeof window.selectOption === 'function') {
                const originalSelectOption = window.selectOption;
                window.selectOption = function patchedSelectOption(...args) {
                    const container = document.getElementById('appContainer');
                    if (isAnnualChallengeMode() && (!state.annualStarted || state.analysisUnlocked || (container && container.dataset.sqChallengeAnswered === '1'))) {
                        return;
                    }
                    if (!isAnnualChallengeMode() && isChallengeMode() && container && container.dataset.sqChallengeAnswered === '1') {
                        return;
                    }
                    const result = originalSelectOption.apply(this, args);
                    if (isAnnualChallengeMode() && container) {
                        container.querySelectorAll('.inline-confirm-btn').forEach((button) => button.remove());
                    }
                    return result;
                };
            }

            if (typeof window.checkAnswer === 'function') {
                const originalCheckAnswer = window.checkAnswer;
                window.checkAnswer = function patchedCheckAnswer(...args) {
                    if (isAnnualChallengeMode() && !state.analysisUnlocked) {
                        return;
                    }
                    if (!isChallengeMode() || state.analysisUnlocked) {
                        return originalCheckAnswer.apply(this, args);
                    }

                    const container = document.getElementById('appContainer');
                    const selected = container ? container.querySelector('.options-list li.selected') : null;
                    const question = getCurrentQuestion();
                    const questionId = question && question.id;

                    if (!container || !selected || !question || !questionId) {
                        return;
                    }

                    const index = parseInt(selected.getAttribute('data-index') || '-1', 10);
                    const isCorrect = Boolean(question.options && question.options[index] && question.options[index].correct);
                    state.answered.set(questionId, isCorrect);

                    if (!isCorrect &&
                        typeof window.getMarks === 'function' &&
                        typeof window.saveMarks === 'function') {
                        const marks = window.getMarks();
                        if (!marks.includes(question.id)) {
                            marks.push(question.id);
                            window.saveMarks(marks);
                            if (typeof window.updateMarkUI === 'function') {
                                window.updateMarkUI();
                            }
                        }
                    }

                    const confirmBtn = document.getElementById('inlineConfirmBtn');
                    if (confirmBtn) confirmBtn.remove();

                    container.dataset.sqChallengeAnswered = '1';
                    container.classList.remove('judged');
                    container.querySelectorAll('.options-list li').forEach((item) => {
                        item.style.pointerEvents = 'none';
                    });
                };
            }

            ['nextQuestion', 'prevQuestion', 'changeQuestion'].forEach((name) => {
                if (typeof window[name] !== 'function') return;
                const original = window[name];
                window[name] = function patchedNavigation(...args) {
                    if (isAnnualChallengeMode() && !state.analysisUnlocked && !state.internalNavigation) {
                        return;
                    }
                    clearAutoAdvanceTimer();
                    const result = original.apply(this, args);
                    if (isAnnualChallengeMode() && state.internalNavigation && !state.analysisUnlocked) {
                        onQuestionRendered();
                    }
                    if (isChallengeMode() && state.analysisUnlocked && typeof window.setMode === 'function') {
                        window.setMode('explanation', false);
                        window.setTimeout(() => restoreAnnualAnswer(getCurrentQuestionIndex()), 0);
                    }
                    return result;
                };
            });

            state.pageHooksInstalled = true;
        }

        function persistCurrentQuestionAsIncorrect() {
            const questionId = getCurrentQuestionId();
            if (!questionId || state.answered.has(questionId)) {
                return;
            }

            state.answered.set(questionId, false);

            const question = getCurrentQuestion();
            if (
                question &&
                typeof window.getMarks === 'function' &&
                typeof window.saveMarks === 'function'
            ) {
                const marks = window.getMarks();
                if (!marks.includes(question.id)) {
                    marks.push(question.id);
                    window.saveMarks(marks);
                    if (typeof window.updateMarkUI === 'function') {
                        window.updateMarkUI();
                    }
                }
            }
        }

        function finalizeChallengeQuestionAdvance(questionId) {
            if (!isChallengeMode() || state.analysisUnlocked || state.overlayVisible) {
                return;
            }
            if (questionId !== getCurrentQuestionId()) {
                return;
            }

            const selected = document.querySelector('#appContainer .options-list li.selected');
            if (selected) {
                if (!state.answered.has(questionId) && typeof window.checkAnswer === 'function') {
                    window.checkAnswer();
                }
            } else {
                persistCurrentQuestionAsIncorrect();
            }

            const stats = getStats();
            const isLastQuestion = getCurrentQuestionIndex() >= Math.max(0, stats.total - 1);
            if (isLastQuestion) {
                openResultOverlay();
                return;
            }

            if (typeof window.nextQuestion === 'function') {
                window.nextQuestion();
            }
        }

        function installAudioAutoAdvance() {
            if (state.audioListenersInstalled) {
                return;
            }

            const audio = document.getElementById('audioElement');
            if (!audio) {
                return;
            }

            audio.addEventListener('play', clearAutoAdvanceTimer);
            audio.addEventListener('ended', () => {
                if (!isChallengeMode() || state.analysisUnlocked || state.overlayVisible) {
                    return;
                }
                if (isAnnualChallengeMode()) {
                    finalizeAnnualQuestion();
                    return;
                }
                clearAutoAdvanceTimer();
                const questionId = getCurrentQuestionId();
                if (!questionId) return;

                const hint = ensureChallengeHint();
                if (hint) {
                    hint.style.display = 'inline-flex';
                    hint.textContent = '音频已结束，5 秒后自动切到下一题。';
                    state.subtitleHintEl = hint;
                }

                state.autoAdvanceTimerId = window.setTimeout(() => {
                    state.autoAdvanceTimerId = null;
                    finalizeChallengeQuestionAdvance(questionId);
                }, 5000);
            });
            audio.addEventListener('error', () => {
                if (!isAnnualChallengeMode() || !state.annualStarted || state.annualFinished) return;
                state.audioError = true;
                state.annualStarted = false;
                setAnnualBodyPhase('waiting');
                ensureAnnualStartGate();
                syncChallengeUi();
            });

            state.audioListenersInstalled = true;
        }

        function unlockAnalysisFromOverlay() {
            state.analysisUnlocked = true;
            clearAutoAdvanceTimer();
            closeOverlay({ reopenPrompt: false });
            syncChallengeUi();
            if (typeof window.setMode === 'function') {
                window.setMode('explanation', false);
            }
        }

        function openResultOverlay() {
            if (isAnnualChallengeMode()) {
                showAnnualResult();
                return;
            }
            if (state.overlayVisible) return;
            clearPrompt();
            clearAutoAdvanceTimer();

            const stats = getStats();
            const reward = ensureRewardResult();
            const drawMarkup = buildDrawMarkup(reward);
            const title = buildResultTitle(stats);
            const copy = buildResultCopy(stats);
            const percentageText = `${stats.percentage}%`;
            const rawRetryHref = typeof config.buildRetryUrl === 'function'
                ? config.buildRetryUrl(normalizeExamKeyForUrl(config.getExamKey()))
                : window.location.pathname;
            const retryUrl = new URL(rawRetryHref, window.location.href);
            if (!isReviewMode()) {
                retryUrl.searchParams.set('mode', getPracticeVariant());
            }
            const retryHref = retryUrl.pathname + retryUrl.search + retryUrl.hash;
            const indexHref = typeof config.buildIndexUrl === 'function'
                ? config.buildIndexUrl()
                : '../index.html';

            dispatchPhase(stats.percentage === 100 ? 'perfect_clear' : 'clear', stats);

            const overlay = document.createElement('div');
            overlay.id = OVERLAY_ID;
            overlay.className = 'sq-listening-result-overlay';
            overlay.innerHTML = `
                <div class="sq-listening-result-card">
                    <div class="sq-listening-result-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                    </div>
                    <h2 class="sq-listening-result-title">${htmlEscape(title)}</h2>
                    <p class="sq-listening-result-subtitle">${isChallengeMode() ? '整套挑战已经完成。先确认成绩，再解锁整套解析。' : '你已经完成了本轮听解练习。'}</p>
                    <div class="sq-listening-result-grid">
                        <div class="sq-listening-result-stat">
                            <span class="sq-listening-result-stat-label">正确</span>
                            <span class="sq-listening-result-stat-value">${stats.correctCount}</span>
                        </div>
                        <div class="sq-listening-result-stat">
                            <span class="sq-listening-result-stat-label">错误</span>
                            <span class="sq-listening-result-stat-value">${stats.incorrectCount}</span>
                        </div>
                        <div class="sq-listening-result-stat">
                            <span class="sq-listening-result-stat-label">未答</span>
                            <span class="sq-listening-result-stat-value">${stats.unansweredCount}</span>
                        </div>
                        <div class="sq-listening-result-stat">
                            <span class="sq-listening-result-stat-label">正确率</span>
                            <span class="sq-listening-result-stat-value">${percentageText}</span>
                        </div>
                    </div>
                    <p class="sq-listening-result-copy">${htmlEscape(copy)}</p>
                    ${drawMarkup ? `<div style="display:flex;justify-content:center;margin-bottom:18px;">${drawMarkup}</div>` : ''}
                    <div class="sq-listening-result-actions">
                        <button type="button" class="sq-listening-overlay-action" data-role="analysis">${isChallengeMode() ? '查看解析' : '继续看原题'}</button>
                        <a class="sq-listening-overlay-action is-primary" href="${htmlEscape(retryHref)}">重新做一轮</a>
                        <a class="sq-listening-overlay-action" href="${htmlEscape(indexHref)}">返回题型列表</a>
                    </div>
                </div>
            `;
            if (!isChallengeMode()) {
                overlay.addEventListener('click', (event) => {
                    if (event.target === overlay) {
                        closeOverlay({ reopenPrompt: false });
                    }
                });
            }
            const analysisBtn = overlay.querySelector('[data-role="analysis"]');
            if (analysisBtn) {
                if (isChallengeMode()) {
                    analysisBtn.addEventListener('click', unlockAnalysisFromOverlay);
                } else {
                    analysisBtn.addEventListener('click', () => closeOverlay({ reopenPrompt: false }));
                }
            }
            document.body.appendChild(overlay);
            state.overlayVisible = true;
        }

        function showPrompt() {
            if (state.promptVisible || state.overlayVisible || isReviewMode() || !isChallengeMode()) return;
            const stats = getStats();
            if (!stats.total || stats.answeredCount < stats.total) return;
            const prompt = document.createElement('div');
            prompt.id = PROMPT_ID;
            prompt.className = 'sq-listening-result-prompt';
            prompt.innerHTML = `
                <div class="sq-listening-result-chip">这套题已经做完了，先看一眼结算结果，再决定要不要重做。</div>
                <button type="button" class="sq-listening-result-button">查看结算</button>
            `;
            prompt.querySelector('button').addEventListener('click', openResultOverlay);
            document.body.appendChild(prompt);
            state.promptVisible = true;
        }

        function onQuestionRendered() {
            closeOverlay({ reopenPrompt: false });
            clearAutoAdvanceTimer();
            const container = document.getElementById('appContainer');
            if (container) {
                delete container.dataset.sqChallengeAnswered;
                container.querySelectorAll('.options-list li').forEach((item) => {
                    item.style.pointerEvents = '';
                });
            }
            if (isAnnualChallengeMode()) {
                if (container) container.querySelectorAll('.inline-confirm-btn').forEach((button) => button.remove());
                installAudioAutoAdvance();
                if (state.analysisUnlocked) {
                    setAnnualBodyPhase('review');
                    window.setTimeout(() => restoreAnnualAnswer(getCurrentQuestionIndex()), 0);
                    ensureReturnResultButton().hidden = false;
                } else if (state.annualStarted) {
                    setAnnualBodyPhase('running');
                } else if (!state.annualFinished) {
                    setAnnualBodyPhase('waiting');
                    ensureAnnualStartGate();
                }
                syncChallengeUi();
                clearPrompt();
                return;
            }
            syncChallengeUi();
            installAudioAutoAdvance();
            if (isReviewMode()) {
                clearPrompt();
                return;
            }
            clearPrompt();
        }

        return {
            startRun() {
                const params = new URLSearchParams(window.location.search);
                state.reviewMode = String(params.get('mode') || '').toLowerCase() === 'review';
                state.practiceVariant = state.reviewMode
                    ? 'study'
                    : (String(params.get('mode') || '').toLowerCase() === 'challenge' ? 'challenge' : 'study');
                state.analysisUnlocked = !isChallengeMode();
                state.rewardResult = null;
                state.answered = new Map();
                state.annualStarted = false;
                state.annualFinished = false;
                state.annualReviewIndex = 0;
                state.internalNavigation = false;
                state.audioError = false;
                clearPrompt();
                closeOverlay({ reopenPrompt: false });
                clearAutoAdvanceTimer();
                installPageHooks();
                installAudioAutoAdvance();
                syncChallengeUi();
                if (isChallengeMode() && typeof window.setMode === 'function') {
                    window.setMode('practice', false);
                }
                if (isAnnualChallengeMode()) {
                    setAnnualBodyPhase('waiting');
                    window.setTimeout(() => {
                        ensureAnnualStartGate();
                        syncChallengeUi();
                    }, 0);
                } else {
                    setAnnualBodyPhase('');
                }
                if (state.reviewMode) {
                    state.runMeta = null;
                    return null;
                }
                if (!isChallengeMode()) {
                    state.runMeta = null;
                    return null;
                }
                if (!window.StudyQuestTestServer || typeof window.StudyQuestTestServer.startRun !== 'function') {
                    state.runMeta = null;
                    return null;
                }
                state.runMeta = window.StudyQuestTestServer.startRun({
                    module: 'listening',
                    subType: getSubType(),
                    mode: getModeKey(),
                    scopeKey: getScopeKey(),
                    level: getLevelKey()
                });
                return state.runMeta;
            },
            handleAnswer(isCorrect) {
                if (isReviewMode()) return;
                if (isAnnualChallengeMode() && !state.analysisUnlocked) return;
                const questionId = getCurrentQuestionId();
                if (!questionId) return;
                state.answered.set(questionId, Boolean(isCorrect));
            },
            onQuestionRendered,
            isChallengeMode,
            isAnalysisUnlocked: () => state.analysisUnlocked,
            showResult: showAnnualResult
        };
    }

    window.StudyQuestListeningRewards = {
        create: createController
    };
})();
