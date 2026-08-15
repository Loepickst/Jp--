(function () {
    'use strict';

    const body = document.body;
    if (!body || !body.classList.contains('reading-content-page')) return;

    const redesignScriptUrl = document.currentScript && document.currentScript.src
        ? new URL(document.currentScript.src)
        : null;

    function loadReadingAnnotationTools() {
        if (!redesignScriptUrl || document.querySelector('[data-reading-annotation-loader]')) return;

        if (!document.querySelector('[data-reading-annotation-style]')) {
            const style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = new URL('reading-annotation-tools.css?v=20260810-1', redesignScriptUrl).href;
            style.dataset.readingAnnotationStyle = 'true';
            document.head.appendChild(style);
        }

        const loader = document.createElement('script');
        loader.src = new URL('reading-annotation-tools.js?v=20260810-1', redesignScriptUrl).href;
        loader.dataset.readingAnnotationLoader = 'true';
        document.head.appendChild(loader);
    }

    function loadUnifiedReadingHeader() {
        if (!redesignScriptUrl || window.__kikiUnifiedHeaderLoaded || document.querySelector('[data-kiki-unified-header-loader]')) {
            return;
        }

        const loader = document.createElement('script');
        loader.src = new URL('../../../shared/unified-header.js?v=20260813-reading-middle-title-1', redesignScriptUrl).href;
        loader.dataset.kikiUnifiedHeaderLoader = 'true';
        document.head.appendChild(loader);
    }

    function loadReadingPracticeTools() {
        if (!redesignScriptUrl || document.getElementById('reading-font-size-btn') || document.getElementById('timer-panel-toggle-btn')) {
            return;
        }
        if (document.querySelector('script[src*="reading-tools.js"]')) return;

        const loader = document.createElement('script');
        loader.src = new URL('reading-tools.js?v=20260811-reading-single-source-1', redesignScriptUrl).href;
        loader.dataset.readingToolsLoader = 'true';
        loader.addEventListener('load', syncPracticeHeaderActions, { once: true });
        document.head.appendChild(loader);
    }

    const path = window.location.pathname.toLowerCase();
    const levelMatch = path.match(/\/(n[123])\//);
    const level = levelMatch ? levelMatch[1].toUpperCase() : 'N1';
    const typeMap = {
        '/s/': '短文理解',
        '/m/': '中篇理解',
        '/l/': '长篇理解',
        '/d/': '统合理解',
        '/t/': '信息检索'
    };
    const sessionTypeMap = {
        '/s/': '短篇',
        '/m/': '中篇',
        '/l/': '长篇',
        '/d/': '综合理解',
        '/t/': '信息检索'
    };
    const headerTypeMap = {
        '/s/': '短文読解',
        '/m/': '中篇読解',
        '/l/': '長文読解',
        '/d/': '統合理解',
        '/t/': '情報検索'
    };
    const storageTypeMap = {
        '/s/': 'short',
        '/m/': 'middle',
        '/l/': 'long',
        '/d/': 'integrated',
        '/t/': 'search'
    };
    const type = Object.keys(typeMap).find((key) => path.includes(key));
    const typeLabel = type ? typeMap[type] : '阅读理解';
    const sessionTypeLabel = type ? sessionTypeMap[type] : '阅读理解';
    const headerTypeLabel = type ? headerTypeMap[type] : '読解練習';
    const practiceHeaderTitle = `${level} · ${headerTypeLabel}`;
    const storageType = type ? storageTypeMap[type] : '';
    const isShortReading = type === '/s/';
    const pageParams = new URLSearchParams(window.location.search);
    const isCategoryPractice = pageParams.get('practiceMode') === 'category'
        && Boolean(storageType)
        && Boolean(pageParams.get('category'));
    const periodMatch = decodeURIComponent(path).match(/(\d{4})\.(\d{1,2})(?:[^/]*)\.html$/);
    const sessionPeriod = periodMatch
        ? `${periodMatch[1]}年${String(Number(periodMatch[2])).padStart(2, '0')}月`
        : '';
    const sessionDataKey = periodMatch ? `${periodMatch[1]}.${Number(periodMatch[2])}` : '';
    const analysisData = window.ReadingAnalysisData || {};
    const readingMentorImageUrl = redesignScriptUrl
        ? new URL('../../../assets/reading/reading-master-apprentice-hero-v1.webp', redesignScriptUrl).href
        : '../../../assets/reading/reading-master-apprentice-hero-v1.webp';
    const resultLogoUrl = redesignScriptUrl
        ? new URL('../../../assets/home-redesign/kiji-logo-maple-header-v3.webp?v=20260810-no-tagline', redesignScriptUrl).href
        : '../../../assets/home-redesign/kiji-logo-maple-header-v3.webp?v=20260810-no-tagline';
    const questionTypeLabels = {
        'viewpoint-main': '主旨观点',
        'reason-logic': '原因理由',
        'reference-meaning': '指代释义',
        'method-condition': '方法条件',
        'fact-comparison': '事实对比'
    };
    const jinQuestionGuides = {
        'viewpoint-main': '莫急着逐句取舍，先看全文反复落笔之处，再定作者真正所持之意。',
        'reason-logic': '先寻结果，再循转折与因果回看前文，莫将缘由与结论倒置。',
        'reference-meaning': '所指之意多藏于近处，顺着前文寻找语意完整的承接即可。',
        'method-condition': '先分清所求之法与成立之条件，再与原文逐项相照。',
        'fact-comparison': '人物、时间、条件与范围，须和原文一一相照，不可自行补意。'
    };
    const jinQuestionGuideParts = {
        'viewpoint-main': '先定全文所向',
        'reason-logic': '循结果查明前因',
        'reference-meaning': '顺上下文辨明所指',
        'method-condition': '分清方法与条件',
        'fact-comparison': '核对人物、时间与范围'
    };
    const optionErrorLabels = {
        'not-stated': '原文无依据',
        opposite: '原意相反',
        'relation-error': '逻辑关系错误',
        'object-scope-error': '对象范围错误',
        'concept-focus-error': '概念重点错误'
    };
    const sequenceLabels = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    const readingIndexUrl = document.currentScript && document.currentScript.src
        ? new URL('../index.html', document.currentScript.src)
        : new URL('../../../jlpt-reading/index.html', window.location.href);

    function topLevelPracticePages() {
        return Array.from(document.querySelectorAll('.page-content, .page-container')).filter((page) => {
            const parentPage = page.parentElement && page.parentElement.closest('.page-content, .page-container');
            return !parentPage;
        });
    }

    function practicePageNumber(page, fallbackIndex) {
        const idMatch = String(page.id || '').match(/(?:^|-)page-(\d+)$/i)
            || String(page.id || '').match(/^page-(\d+)$/i);
        if (idMatch) return Number.parseInt(idMatch[1], 10);

        const dataValue = page.dataset.page || page.dataset.pageNumber || page.dataset.articlePage;
        const dataNumber = Number.parseInt(dataValue, 10);
        return Number.isInteger(dataNumber) && dataNumber > 0 ? dataNumber : fallbackIndex + 1;
    }

    function applyCategoryPracticeScope() {
        if (!isCategoryPractice || !sessionDataKey) return null;

        const system = window.ReadingCategorySystem;
        if (!system || typeof system.getCategoryPracticeItems !== 'function') return null;

        const categoryId = pageParams.get('category');
        const examKey = typeof system.normalizeExamKey === 'function'
            ? system.normalizeExamKey(pageParams.get('examKey') || sessionDataKey)
            : String(pageParams.get('examKey') || sessionDataKey).replace('.', '-');
        const items = system.getCategoryPracticeItems({
            level,
            type: storageType,
            categoryId,
            pathContext: 'year'
        });
        const currentItems = items.filter((item) => item.examKey === examKey);
        const allowedPages = new Set(currentItems.map((item) => Number.parseInt(item.page, 10)));
        if (!allowedPages.size) return null;

        const pages = topLevelPracticePages();
        const retainedPages = [];
        pages.forEach((page, index) => {
            const pageNumber = practicePageNumber(page, index);
            if (!allowedPages.has(pageNumber)) {
                page.remove();
                return;
            }

            page.dataset.categoryPracticeArticle = 'true';
            page.dataset.categoryPracticePage = String(pageNumber);
            retainedPages.push(page);
        });

        body.classList.add('reading-category-practice-mode');
        body.dataset.readingCategoryId = categoryId;
        return {
            categoryId,
            examKey,
            items,
            currentItems,
            retainedPages
        };
    }

    function persistReadingResumePosition() {
        const params = new URLSearchParams(window.location.search);
        if (
            !storageType
            || !sessionDataKey
            || params.get('practiceMode') === 'category'
            || ['review', 'mistake'].includes(params.get('mode'))
        ) {
            return;
        }

        const page = Math.max(1, Number.parseInt(params.get('page'), 10) || 1);
        if (
            window.ReadingYearSystem &&
            typeof window.ReadingYearSystem.saveReadingLastPosition === 'function'
        ) {
            window.ReadingYearSystem.saveReadingLastPosition(level, storageType, sessionDataKey, page);
            return;
        }

        const examKey = sessionDataKey.replace(/^(\d{4})\.(\d{1,2})$/, (_match, year, month) => {
            return `${year}-${String(Number(month)).padStart(2, '0')}`;
        });
        try {
            localStorage.setItem(`reading_last_practice::${level}::${storageType}`, examKey);
            localStorage.setItem(`reading_last_position_v2::${level}`, JSON.stringify({
                level,
                type: storageType,
                examKey,
                page,
                updatedAt: new Date().toISOString()
            }));
        } catch (error) {
            console.warn('Unable to save the last reading position.', error);
        }
    }

    persistReadingResumePosition();

    function isSameReadingDocument(url) {
        return url.pathname === window.location.pathname;
    }

    function safeSameOriginUrl(rawUrl) {
        if (!rawUrl) return null;
        try {
            const url = new URL(rawUrl, window.location.href);
            return url.origin === window.location.origin ? url : null;
        } catch (error) {
            return null;
        }
    }

    function readingBackFallbackUrl() {
        const params = new URLSearchParams(window.location.search);
        const fallback = new URL(readingIndexUrl.href);
        fallback.searchParams.set('level', level);
        if (params.get('mode') === 'review') {
            fallback.searchParams.set('browse', 'mistakes');
            return fallback;
        }
        if (params.get('practiceMode') === 'category' && storageType && params.get('category')) {
            fallback.searchParams.set('type', storageType);
            fallback.searchParams.set('browse', 'category');
            fallback.searchParams.set('category', params.get('category'));
            return fallback;
        }
        const explicitReturn = safeSameOriginUrl(params.get('return'));
        if (explicitReturn && !isSameReadingDocument(explicitReturn)) return explicitReturn;
        if (storageType) {
            fallback.searchParams.set('type', storageType);
            fallback.searchParams.set('browse', 'year');
        }
        return fallback;
    }

    function readingBackLabel() {
        const params = new URLSearchParams(window.location.search);
        if (params.get('practiceMode') === 'category') return '返回分类目录';
        if (params.get('mode') === 'review') return '返回错题目录';
        return '返回年度目录';
    }

    function canReturnThroughHistory() {
        const referrer = safeSameOriginUrl(document.referrer);
        if (!referrer || window.history.length <= 1) return false;
        return !isSameReadingDocument(referrer);
    }

    function bindReadingBack(back) {
        if (!back || back.dataset.readingPreviousBound === 'true') return back;

        /*
         * The public header reuses the legacy page link. Some older helpers may
         * already have attached a home-directory click handler to that node.
         * Re-own the control once so the content page has exactly one active
         * navigation path instead of relying on listener order.
         */
        const ownedBack = back.cloneNode(true);
        back.replaceWith(ownedBack);
        back = ownedBack;

        const params = new URLSearchParams(window.location.search);
        const fallback = readingBackFallbackUrl();
        const hasCanonicalDirectory = params.get('practiceMode') === 'category' || params.get('mode') === 'review';
        back.dataset.readingPreviousBound = 'true';
        back.dataset.kikiDynamicBack = 'true';
        back.dataset.kikiCanonicalBack = 'true';
        back.removeAttribute('onclick');
        if (back.tagName === 'A') back.setAttribute('href', fallback.href);
        else back.dataset.backHref = fallback.href;

        back.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();
            if (!hasCanonicalDirectory && canReturnThroughHistory()) {
                window.history.back();
                return;
            }
            window.location.replace(fallback.href);
        }, true);

        return back;
    }

    const readingResultTiming = (() => {
        let units = [];
        let activeIndex = 0;
        let lastStamp = performance.now();
        let startedStamp = lastStamp;
        let observer = null;

        function settle(now = performance.now()) {
            if (!units.length) return;
            const elapsed = Math.max(0, now - lastStamp);
            units[activeIndex].milliseconds += elapsed;
            lastStamp = now;
        }

        function activate(index) {
            if (!units[index] || index === activeIndex) return;
            settle();
            activeIndex = index;
        }

        function labelFor(unit, index) {
            const heading = unit.querySelector('.reading-editorial-session-title, .header-title');
            const raw = heading ? heading.textContent.replace(/\s+/g, ' ').trim() : '';
            const withoutPeriod = raw.replace(/^\d{4}年\d{2}月\s*/, '').trim();
            return withoutPeriod || `${sessionTypeLabel}${units.length > 1 ? `（${sequenceLabels[index] || index + 1}）` : ''}`;
        }

        function start() {
            const roots = Array.from(document.querySelectorAll('.reading-editorial-unit'));
            if (!roots.length) return;
            const now = performance.now();
            units = roots.map((element, index) => ({ element, label: '', milliseconds: 0, index }));
            units.forEach((unit, index) => { unit.label = labelFor(unit.element, index); });
            activeIndex = Math.max(0, roots.findIndex((root) => root.classList.contains('active')));
            lastStamp = now;
            startedStamp = now;

            const mutationObserver = new MutationObserver(() => {
                const next = units.findIndex((unit) => unit.element.classList.contains('active') && unit.element.style.display !== 'none');
                if (next >= 0) activate(next);
            });
            units.forEach((unit) => mutationObserver.observe(unit.element, { attributes: true, attributeFilter: ['class', 'style'] }));

            if ('IntersectionObserver' in window && units.length > 1) {
                const ratios = new Map();
                observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => ratios.set(entry.target, entry.intersectionRatio));
                    let bestIndex = activeIndex;
                    let bestRatio = 0;
                    units.forEach((unit, index) => {
                        const ratio = ratios.get(unit.element) || 0;
                        if (ratio > bestRatio) {
                            bestRatio = ratio;
                            bestIndex = index;
                        }
                    });
                    if (bestRatio >= 0.24) activate(bestIndex);
                }, { threshold: [0.24, 0.45, 0.7] });
                units.forEach((unit) => observer.observe(unit.element));
            }
        }

        function snapshot(targetSeconds) {
            settle();
            if (!units.length) return [];
            const trackedTotal = units.reduce((sum, unit) => sum + unit.milliseconds, 0) / 1000;
            const fallbackTotal = Math.max(1, (performance.now() - startedStamp) / 1000);
            const desiredTotal = Math.max(1, Number(targetSeconds) || trackedTotal || fallbackTotal);
            const sourceTotal = trackedTotal || fallbackTotal;
            const scale = desiredTotal / sourceTotal;
            const values = units.map((unit) => Math.max(0, unit.milliseconds / 1000 * scale));
            if (values.every((value) => value < 0.5)) values[activeIndex] = desiredTotal;
            let rounded = values.map((value) => Math.max(0, Math.round(value)));
            const roundedTotal = rounded.reduce((sum, value) => sum + value, 0);
            rounded[activeIndex] = Math.max(0, rounded[activeIndex] + Math.round(desiredTotal) - roundedTotal);
            return units.map((unit, index) => ({ label: unit.label, seconds: rounded[index] }));
        }

        function totalSeconds() {
            settle();
            return Math.max(0, Math.round(units.reduce((sum, unit) => sum + unit.milliseconds, 0) / 1000));
        }

        return { start, snapshot, totalSeconds, activate };
    })();

    function escapeResultText(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function formatResultTime(totalSeconds) {
        const safeSeconds = Math.max(0, Math.round(Number(totalSeconds) || 0));
        return `${String(Math.floor(safeSeconds / 60)).padStart(2, '0')}:${String(safeSeconds % 60).padStart(2, '0')}`;
    }

    function resultIndexUrl() {
        const params = new URLSearchParams(window.location.search);
        if (params.get('practiceMode') === 'category' || params.get('mode') === 'review') {
            return readingBackFallbackUrl().href;
        }
        const back = document.querySelector('#back-to-reading-index, .reading-editorial-back');
        if (back && back.tagName === 'A' && back.href) return back.href;
        return readingBackFallbackUrl().href;
    }

    function revealReadingAnalysis() {
        const controller = window.StudyQuestReadingMode;
        if (controller && typeof controller.unlockAnalysis === 'function') controller.unlockAnalysis();
        normalizeArticleTranslations();
        body.classList.add('show-analysis', 'reading-paper-submitted');
        document.querySelectorAll('.reading-cloze-explanation, .explanation-box, .exp').forEach(highlightQuotedEvidence);
        highlightCorrectAnswerEvidence();
        const firstAnalysis = document.querySelector('.reading-option-analysis-question, .reading-cloze-explanation:not(.reading-legacy-analysis-hidden), .explanation-box:not(.reading-legacy-analysis-hidden)');
        window.setTimeout(() => (firstAnalysis || document.body).scrollIntoView({ block: 'start', behavior: 'smooth' }), 30);
    }

    function resultQuestionElements() {
        const selectors = '.reading-editorial-question, .qa-section, .question-card, .qcard';
        return Array.from(document.querySelectorAll(selectors)).filter((question, index, list) => (
            list.findIndex((item) => item === question || item.contains(question)) === index
        ));
    }

    function resultAnswerData() {
        try {
            return Function('return typeof answerData !== "undefined" ? answerData : (typeof answersData !== "undefined" ? answersData : null)')();
        } catch (error) {
            return null;
        }
    }

    function resultQuestionNumber(question, index) {
        const number = question.querySelector('.reading-editorial-question-number, .question-num-badge, .q-number, .qnum');
        const match = String(number ? number.textContent : '').match(/\d+/);
        if (match) return Number(match[0]);
        return resultQuestionLocation(question, index).articleQuestionNumber;
    }

    function resultQuestionLocation(question, index) {
        const units = Array.from(document.querySelectorAll('.reading-editorial-unit, .page-content, .page-container'))
            .filter((unit, unitIndex, list) => !list.some((candidate, candidateIndex) => candidateIndex < unitIndex && candidate.contains(unit)));
        const unit = question.closest('.reading-editorial-unit, .page-content, .page-container');
        const articleIndex = Math.max(0, units.indexOf(unit));
        const questions = resultQuestionElements().filter((candidate) => unit ? unit.contains(candidate) : true);
        const localIndex = Math.max(0, questions.indexOf(question));
        return {
            articleNumber: articleIndex + 1,
            articleQuestionNumber: localIndex + 1,
            articleLabel: `阅读（${sequenceLabels[articleIndex] || String(articleIndex + 1)}）`
        };
    }

    function resultOptionElements(question) {
        const options = Array.from(question.querySelectorAll(':scope > .option-item, .options-group > .option-label, .options > .option, .option-item, .option-label'));
        return options.filter((option, index, list) => !list.some((candidate, candidateIndex) => (
            candidateIndex < index && candidate.contains(option)
        )));
    }

    function resultQuestionState(question, index, answerData) {
        const options = resultOptionElements(question);
        const selected = options.find((option) => option.classList.contains('selected') || option.querySelector('input:checked')) || null;
        const visiblyCorrect = options.find((option) => (
            option.classList.contains('is-correct')
            || option.classList.contains('answered-correct')
            || option.dataset.readingAnswer === 'correct'
        )) || null;

        const checkedInput = selected && selected.querySelector('input:checked');
        const questionInput = checkedInput || question.querySelector('input[type="radio"], input[type="checkbox"]');
        const inputName = questionInput ? String(questionInput.name || '') : '';
        const idMatch = inputName.match(/q?(\d+)/i);
        const qId = String(question.dataset.qId || (idMatch ? idMatch[1] : '') || index + 1);
        const answer = answerData && (answerData[qId] || answerData[`q${qId}`]);
        const correctValue = answer && answer.correct != null ? String(answer.correct) : '';
        const selectedValue = checkedInput ? String(checkedInput.value) : '';
        const isCorrect = Boolean(
            selected
            && (
                selected === visiblyCorrect
                || selected.classList.contains('answered-correct')
                || (correctValue && selectedValue === correctValue)
            )
        );
        const isAnswered = Boolean(selected);
        const questionType = question.dataset.readingQuestionType || '';
        const typeLabel = questionTypeLabels[questionType] || '阅读理解';
        const errorId = selected ? selected.dataset.readingErrorType : '';
        const errorLabel = !isAnswered
            ? '未作答'
            : (optionErrorLabels[errorId] || '答案判断错误');
        const reasonNode = selected && selected.querySelector('.reading-option-analysis__reason, .option-explanation, .option-detail-analysis, .detail');
        const reason = reasonNode
            ? reasonNode.textContent.replace(/\s+/g, ' ').trim()
            : (!isAnswered ? '本题没有选择答案。' : '请进入本次解析，结合原文重新确认选项依据。');

        return {
            number: resultQuestionNumber(question, index),
            ...resultQuestionLocation(question, index),
            isAnswered,
            isCorrect,
            questionType,
            optionErrorType: errorId,
            typeLabel,
            errorLabel,
            reason,
            element: question
        };
    }

    function unifiedResultHeader(title) {
        const sourceHeader = document.querySelector('.kiki-unified-header');
        const sourceBrand = sourceHeader && sourceHeader.querySelector('.kiki-unified-brand');
        const brandHref = sourceBrand && sourceBrand.href ? sourceBrand.href : '../../../index.html';
        const logoSrc = sourceBrand && sourceBrand.querySelector('img')?.src
            ? sourceBrand.querySelector('img').src
            : resultLogoUrl;
        const backLabel = readingBackLabel();
        return `
            <header class="kiki-unified-header kiki-unified-header--practice rrp-public-header">
                <div class="kiki-unified-header-left">
                    <a class="kiki-unified-brand" href="${escapeResultText(brandHref)}" aria-label="返回首页"><img src="${escapeResultText(logoSrc)}" alt="kiji"></a>
                    <span class="kiki-unified-divider" aria-hidden="true"></span>
                    <button class="kiki-unified-back" type="button" data-reading-result-action="index">
                        <svg class="kiki-unified-back-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18 9 12l6-6"></path></svg>
                        <span class="kiki-unified-back-label">${escapeResultText(backLabel)}</span>
                        <span class="kiki-unified-back-label-mobile" aria-hidden="true">返回</span>
                    </button>
                </div>
                <p class="kiki-unified-header-title">${escapeResultText(title)}</p>
                <div class="kiki-unified-header-right"></div>
            </header>`;
    }

    function collectReadingResultQuestions(totalQuestions) {
        const answerData = resultAnswerData();
        const questions = resultQuestionElements();
        const limit = totalQuestions > 0 ? totalQuestions : questions.length;
        return questions.slice(0, limit).map((question, index) => resultQuestionState(question, index, answerData));
    }

    function showUnifiedReadingResult(options = {}) {
        if (document.getElementById('reading-results-panel')) return;

        const controller = window.StudyQuestReadingMode;
        if (controller && controller.isTestMode && !controller.isSubmitted?.()) {
            controller.completeTest?.({ timedOut: Boolean(options.timedOut) });
        }
        const timerInfo = controller && controller.getResultTimerInfo ? controller.getResultTimerInfo() : null;
        const trackedSeconds = readingResultTiming.totalSeconds();
        const totalSeconds = Math.max(0, Number.isFinite(Number(options.seconds))
            ? Number(options.seconds)
            : (timerInfo && timerInfo.hasResult ? Number(timerInfo.seconds) : trackedSeconds));
        const effectiveSeconds = totalSeconds > 0 ? totalSeconds : trackedSeconds;
        const totalQuestions = Math.max(0, Number(options.totalQuestions) || 0);
        const rawCorrectCount = Math.max(0, Number(options.correctCount) || 0);
        const correctCount = totalQuestions ? Math.min(totalQuestions, rawCorrectCount) : rawCorrectCount;
        const incorrectCount = Math.max(0, totalQuestions - correctCount);
        const accuracy = Number.isFinite(Number(options.accuracy))
            ? Math.max(0, Math.min(100, Math.round(Number(options.accuracy))))
            : (totalQuestions ? Math.round(correctCount / totalQuestions * 100) : 0);
        const questionResults = Array.isArray(options.questionResults)
            ? options.questionResults
            : collectReadingResultQuestions(totalQuestions);
        const normalizedResults = questionResults.length
            ? questionResults
            : Array.from({ length: totalQuestions }, (_, index) => ({
                number: index + 1,
                articleNumber: 1,
                articleQuestionNumber: index + 1,
                articleLabel: '阅读（一）',
                isAnswered: true,
                isCorrect: index < correctCount,
                typeLabel: '阅读理解',
                errorLabel: '答案判断错误',
                reason: '请进入本次解析，结合原文重新确认选项依据。'
            }));
        const mistakeResults = normalizedResults.filter((result) => !result.isCorrect);
        const readingYearSystem = window.ReadingYearSystem;
        mistakeResults.forEach((result) => {
            if (
                result.isAnswered === false
                || !result.element
                || result.element.dataset.readingAnalysisStatsRecorded === 'true'
                || !readingYearSystem
                || typeof readingYearSystem.recordReadingAnalysisResult !== 'function'
                || !sessionPeriod
                || !storageType
                || !result.questionType
                || !result.optionErrorType
            ) return;
            readingYearSystem.recordReadingAnalysisResult(
                level,
                storageType,
                sessionPeriod,
                result.articleNumber || 1,
                result.number,
                result.questionType,
                result.optionErrorType
            );
            result.element.dataset.readingAnalysisStatsRecorded = 'true';
        });
        const mistakeRows = mistakeResults.length
            ? mistakeResults.map((result) => `
                <li class="rrp-mistake-row">
                    <span class="rrp-mistake-number"><small>${escapeResultText(result.articleLabel || '阅读（一）')}</small><strong>题 ${String(result.articleQuestionNumber || result.number).padStart(2, '0')}</strong></span>
                    <span class="rrp-mistake-type">${escapeResultText(result.typeLabel || '阅读理解')}</span>
                    <strong class="rrp-mistake-label">${escapeResultText(result.errorLabel || '答案判断错误')}</strong>
                </li>`).join('')
            : '<li class="rrp-mistake-empty"><span aria-hidden="true">✓</span><strong>本次全部答对，暂无需要重点复习的题目。</strong></li>';

        const overlay = document.createElement('div');
        overlay.id = 'reading-results-panel';
        overlay.className = 'reading-results-panel';
        overlay.innerHTML = `
            ${unifiedResultHeader(options.headerTitle || practiceHeaderTitle)}
            <main class="rrp-page">
                <section class="rrp-sheet" aria-label="阅读练习结算面板">
                    <header class="rrp-heading">
                        <span>RESULT</span>
                        <h1>本次练习总结</h1>
                    </header>
                    <dl class="rrp-metrics">
                        <div><dt>正确率</dt><dd><strong>${accuracy}</strong><span>%</span><small>${correctCount} / ${totalQuestions}</small></dd></div>
                        <div><dt>总用时</dt><dd><strong>${formatResultTime(effectiveSeconds)}</strong></dd></div>
                    </dl>
                    <section class="rrp-answers">
                        <div class="rrp-section-head"><h2>答题情况</h2></div>
                        <div class="rrp-mistake-columns" aria-hidden="true"><span>错误题号</span><span>题目问点</span><span>选项错点</span></div>
                        <ol class="rrp-mistake-list">${mistakeRows}</ol>
                    </section>
                    <footer class="rrp-actions">
                        <button class="rrp-action" type="button" data-reading-result-action="index">${escapeResultText(readingBackLabel())}</button>
                        <button class="rrp-action" type="button" data-reading-result-action="retry">再做一次</button>
                        <button class="rrp-action rrp-action-primary" type="button" data-reading-result-action="analysis">查看本次解析</button>
                    </footer>
                </section>
            </main>`;

        overlay.addEventListener('click', (event) => {
            const action = event.target.closest('[data-reading-result-action]')?.dataset.readingResultAction;
            if (!action) return;
            if (action === 'analysis') {
                const questionIndex = Number(event.target.closest('[data-reading-result-action]')?.dataset.readingQuestionIndex);
                overlay.remove();
                body.classList.remove('reading-results-open');
                if (typeof options.onAnalysis === 'function') options.onAnalysis();
                else revealReadingAnalysis();
                if (Number.isInteger(questionIndex) && questionIndex >= 0) {
                    window.setTimeout(() => {
                        const target = resultQuestionElements()[questionIndex];
                        if (target) target.scrollIntoView({ block: 'start', behavior: 'smooth' });
                    }, 80);
                }
            } else if (action === 'retry') {
                if (typeof options.onRetry === 'function') options.onRetry();
                else window.location.href = options.retryUrl || window.location.href;
            } else if (action === 'index') {
                if (typeof options.onIndex === 'function') options.onIndex();
                else window.location.href = options.indexUrl || resultIndexUrl();
            }
        });
        body.classList.add('reading-results-open');
        document.body.appendChild(overlay);
        overlay.querySelector('.rrp-action-primary')?.focus({ preventScroll: true });
    }

    window.ReadingResultPanel = {
        show: showUnifiedReadingResult,
        revealAnalysis: revealReadingAnalysis,
        getPassageTimes: (seconds) => readingResultTiming.snapshot(seconds),
        getTrackedSeconds: () => readingResultTiming.totalSeconds(),
        activatePassage: (index) => readingResultTiming.activate(index)
    };

    function showResultForQuestions(questions) {
        const list = Array.from(questions || []);
        const readingYearSystem = window.ReadingYearSystem;
        if (
            readingYearSystem &&
            typeof readingYearSystem.recordReadingQuestionAttempt === 'function' &&
            sessionPeriod &&
            storageTypeMap[type]
        ) {
            list.forEach((question, index) => {
                if (question.dataset.readingMistakeRecorded === 'true') return;
                const selected = question.querySelector('.option-item.selected, .option-label.selected');
                const correct = question.querySelector('.option-item.is-correct, .option-label.is-correct');
                const unit = question.closest('.reading-editorial-unit, .page-content, .page-container');
                const units = Array.from(document.querySelectorAll('.reading-editorial-unit, .page-content, .page-container'));
                const unitIndex = units.indexOf(unit);
                const pageNumber = unitIndex >= 0 ? unitIndex + 1 : 1;
                readingYearSystem.recordReadingQuestionAttempt(
                    level,
                    storageTypeMap[type],
                    sessionPeriod,
                    pageNumber,
                    index + 1,
                    Boolean(selected && correct && selected === correct)
                );
                question.dataset.readingMistakeRecorded = 'true';
            });
        }
        const correctCount = list.filter((question) => {
            const selected = question.querySelector('.option-item.selected, .option-label.selected');
            const correct = question.querySelector('.option-item.is-correct, .option-label.is-correct');
            return selected && correct && selected === correct;
        }).length;
        showUnifiedReadingResult({
            totalQuestions: list.length,
            correctCount,
            accuracy: list.length ? Math.round(correctCount / list.length * 100) : 0,
            indexUrl: resultIndexUrl()
        });
    }

    function sessionTitle(index, total) {
        const prefix = sessionPeriod ? `${sessionPeriod} ` : '';
        const sequence = total > 1
            ? `（${sequenceLabels[index] || String(index + 1)}）`
            : '';
        return `${prefix}${sessionTypeLabel}${sequence}`;
    }

    body.classList.remove('reading-editorial-v2');
    body.classList.add('reading-cloze-v2');
    body.classList.toggle('reading-search-paper-flow', type === '/t/');
    body.dataset.readingLevel = level;
    body.dataset.readingType = typeLabel;

    function syncPracticeHeaderActions() {
        const unifiedHeader = document.querySelector('.kiki-unified-header');
        const unifiedTitle = unifiedHeader && unifiedHeader.querySelector('.kiki-unified-header-title');
        const unifiedRight = unifiedHeader && unifiedHeader.querySelector('.kiki-unified-header-right');
        if (!unifiedHeader || !unifiedRight) return;

        if (unifiedTitle) unifiedTitle.textContent = practiceHeaderTitle;

        const back = unifiedHeader.querySelector('.kiki-unified-back, [data-kiki-unified-back]');
        if (back) {
            const backLabel = readingBackLabel();
            back.setAttribute('aria-label', backLabel);
            const desktopLabel = back.querySelector('.kiki-unified-back-label');
            const mobileLabel = back.querySelector('.kiki-unified-back-label-mobile');
            if (desktopLabel) desktopLabel.textContent = backLabel;
            if (mobileLabel) mobileLabel.textContent = '返回';
            bindReadingBack(back);
        }

        let actions = document.querySelector('.reading-editorial-actions, .top-actions, .top-bar-controls');
        if (actions && !unifiedHeader.contains(actions)) unifiedRight.appendChild(actions);

        ['#reading-font-size-btn', '#timer-panel-toggle-btn'].forEach((selector) => {
            const tool = document.querySelector(selector);
            if (tool && !unifiedRight.contains(tool)) {
                if (!actions) {
                    actions = document.createElement('div');
                    actions.className = 'top-actions top-bar-controls reading-editorial-actions';
                    unifiedRight.appendChild(actions);
                }
                actions.appendChild(tool);
            }
        });
    }

    function normalizeRoot(root, index, roots) {
        root.classList.add('reading-editorial-unit');
        root.classList.remove('sketch-box', 'sketch');

        const total = Array.isArray(roots) ? roots.length : 1;
        let title = root.querySelector(':scope > .header-title, :scope > .reading-editorial-session-title');
        if (!title) {
            title = document.createElement('h2');
            root.prepend(title);
        }
        title.classList.add('reading-editorial-session-title');
        title.textContent = sessionTitle(Number(index) || 0, total);
        delete title.dataset.kicker;

        const article = root.querySelector(':scope > .article-section, :scope > .article') ||
            root.querySelector('.article-section, .article');
        const articleContent = root.querySelector(':scope > .article-content') ||
            (article && article.querySelector('.article-content'));

        if (article) {
            article.classList.add('reading-editorial-article');
            article.classList.remove('sketch-box', 'sketch');
        }
        if (articleContent) articleContent.classList.add('reading-editorial-copy');

        root.querySelectorAll('.article-meta, .meta').forEach((node) => {
            node.classList.add('reading-editorial-meta');
        });

        root.querySelectorAll('.qa-section, .question-card, .qcard').forEach((question, questionIndex) => {
            question.dataset.readingUnitIndex = String(index);
            question.dataset.readingQuestionIndex = String(questionIndex);
            normalizeQuestion(question, questionIndex);
        });
        ensureReadingSessionMentor(root, title);
        root.querySelectorAll('.question-section, .questions').forEach((node) => {
            node.classList.add('reading-editorial-questions');
        });
        root.querySelectorAll('.article-navigation, .page-nav, .action-bar').forEach((node) => {
            node.classList.add('reading-editorial-navigation');
        });
    }

    function readingQuestionTypes(root) {
        return Array.from(new Set(
            Array.from(root.querySelectorAll('.reading-option-analysis-question'))
                .map((question) => question.dataset.readingQuestionType)
                .filter((questionType) => Boolean(jinQuestionGuides[questionType]))
        ));
    }

    function readingMentorGuide(root) {
        if (type === '/d/') {
            return '把两边的说法并排看看吧！先找共同点，再留意各自不同的主张。';
        }
        if (type === '/t/') {
            return '先圈住题目的条件，再去图表里一个个对照，很快就能找到答案啦！';
        }

        const questionTypes = readingQuestionTypes(root);
        if (questionTypes.length === 1) return jinQuestionGuides[questionTypes[0]];
        if (questionTypes.length > 1) {
            const guideParts = questionTypes
                .slice(0, 2)
                .map((questionType) => jinQuestionGuideParts[questionType])
                .filter(Boolean);
            if (guideParts.length) {
                return `一篇数问，各有落点；${guideParts.join('，')}，答案自会分明。`;
            }
        }

        if (type === '/l/') return '长文莫急，先取各段主意，再合看全文脉络。';
        if (type === '/m/') return '先理清段落的起承转合，再回到题目所问之处。';
        return '先读清所问，再回原文寻找最贴近的一句。';
    }

    function ensureReadingSessionMentor(root, title) {
        if (!root || !title) return;

        let heading = title.closest('.reading-editorial-session-heading');
        if (!heading) {
            heading = document.createElement('div');
            heading.className = 'reading-editorial-session-heading';
            title.parentNode.insertBefore(heading, title);
            heading.appendChild(title);
        }

        let mentor = heading.querySelector(':scope > .reading-question-mentor');
        if (!mentor) {
            mentor = document.createElement('aside');
            mentor.className = 'reading-question-mentor';
            mentor.setAttribute('aria-label', '当前阅读的作答提醒');

            const avatar = document.createElement('span');
            avatar.className = 'reading-question-mentor__avatar';
            avatar.setAttribute('aria-hidden', 'true');
            const image = document.createElement('img');
            image.src = readingMentorImageUrl;
            image.alt = '';
            avatar.appendChild(image);

            const copy = document.createElement('div');
            copy.className = 'reading-question-mentor__copy';
            const name = document.createElement('span');
            name.className = 'reading-question-mentor__name';
            const guide = document.createElement('p');
            guide.className = 'reading-question-mentor__guide';
            copy.append(name, guide);
            mentor.append(avatar, copy);
            heading.appendChild(mentor);
        }

        const kaoruGuide = type === '/d/' || type === '/t/';
        mentor.classList.toggle('reading-question-mentor--kaoru', kaoruGuide);
        const name = mentor.querySelector('.reading-question-mentor__name');
        const guide = mentor.querySelector('.reading-question-mentor__guide');
        if (name) name.textContent = kaoruGuide ? '薰 · 読解修行' : '仁 · 読解指南';
        if (guide) guide.textContent = readingMentorGuide(root);
    }

    function normalizeQuestion(question, index) {
        question.classList.add('reading-editorial-question');
        question.classList.remove('sketch-box', 'sketch');

        const head = question.querySelector(':scope > .question-title, :scope > .q-header, :scope > .q-head');
        if (head) {
            head.classList.add('reading-editorial-question-head');

            /* Medium-reading pages used a clickable boxed `問1` badge for the
               retired note-recorder. Replace the control itself—not only its
               paint—with the same passive number used by the new paper UI. */
            const legacyMain = head.querySelector(':scope > .question-title-main');
            if (legacyMain) {
                while (legacyMain.firstChild) head.insertBefore(legacyMain.firstChild, legacyMain);
                legacyMain.remove();
            }

            if (type === '/m/') {
                const oldNumber = head.querySelector(':scope > .reading-editorial-question-number, :scope > .question-num-badge, :scope > .q-number, :scope > .qnum');
                /* N2 medium pages still carry the original JLPT paper numbers
                   (57, 58, ...), while the rebuilt N1 pages number questions
                   locally inside each article (01, 02, ...).  The global
                   number remains in data-q-id for answer/analysis lookup; only
                   the visual number is normalised here so both levels share
                   the same paper layout and navigation rhythm. */
                const page = question.closest('.page-content, .page-container');
                const localQuestions = page
                    ? Array.from(page.querySelectorAll('.qa-section, .question-card, .qcard')).filter((item) => (
                        item.closest('.page-content, .page-container') === page
                    ))
                    : [];
                const localIndex = localQuestions.indexOf(question);
                const displayNumber = localIndex >= 0 ? localIndex + 1 : (index || 0) + 1;
                const number = document.createElement('span');
                number.className = 'reading-editorial-question-number';
                number.textContent = String(displayNumber).padStart(2, '0');
                number.setAttribute('aria-label', `问题 ${displayNumber}`);
                if (oldNumber) oldNumber.replaceWith(number);
                else head.prepend(number);

                const oldQuestionText = head.querySelector('.question-title-text, .q-text, .qtext');
                if (oldQuestionText) {
                    const walker = document.createTreeWalker(oldQuestionText, NodeFilter.SHOW_TEXT);
                    while (walker.nextNode()) {
                        const textNode = walker.currentNode;
                        if (!textNode.nodeValue.trim()) continue;
                        textNode.nodeValue = textNode.nodeValue.replace(/^\s*(?:問\s*)?\d+\s*[、.．]\s*/, '');
                        break;
                    }
                }
            }
        }

        const questionText = question.querySelector('.question-title-text, .q-text, .qtext');
        if (questionText) {
            questionText.classList.add('reading-editorial-question-text');
        }

        const questionTranslation = question.querySelector('.q-text-trans, .qtrans');
        if (questionTranslation) questionTranslation.classList.add('reading-editorial-question-translation');

        const number = question.querySelector('.reading-editorial-question-number, .q-number, .qnum');
        if (number) number.classList.add('reading-editorial-question-number');

        const options = Array.from(question.querySelectorAll(':scope > .option-item, .options-group > .option-label, .options > .option'));
        options.forEach((option, optionIndex) => {
            option.classList.add('reading-editorial-option');
            option.style.removeProperty('background');
            const numberNode = option.querySelector('.option-number, .custom-radio, .radio');
            if (numberNode) {
                numberNode.classList.add('reading-editorial-option-number');
            } else {
                const generated = document.createElement('span');
                generated.className = 'reading-editorial-option-number';
                generated.textContent = String(optionIndex + 1);
                option.prepend(generated);
            }
        });

        const explanation = question.querySelector(':scope > .explanation-box, :scope > .exp');
        if (explanation) explanation.classList.add('reading-editorial-explanation');
        question.querySelectorAll('.option-explanation, .option-detail-analysis, .detail').forEach((node) => {
            node.classList.add('reading-editorial-option-analysis');
        });

        /* The oldest short-reading files already store one concrete explanation
           inside every choice. N1 short reading keeps that relationship intact:
           after submission each original choice becomes an accordion row whose
           own explanation opens directly beneath it. */
        const hasSharedExplanation = question.querySelector(':scope > .explanation-box, :scope > .exp, :scope > .reading-cloze-explanation');
        const legacyExplanations = options.map((option, optionIndex) => {
            const source = option.querySelector(':scope > .option-explanation');
            if (!source) return null;
            const copy = source.cloneNode(true);
            copy.querySelectorAll('.badge').forEach((badge) => badge.remove());
            return {
                number: optionIndex + 1,
                correct: option.classList.contains('is-correct'),
                text: copy.textContent.replace(/\s+/g, ' ').trim()
            };
        }).filter(Boolean);

        const structuredRecord = structuredAnalysisRecord(question);

        if (structuredRecord) {
            prepareStructuredOptionAnalysis(question, options, structuredRecord);
            question.querySelectorAll(':scope > .reading-structured-analysis').forEach((node) => node.remove());
            question.querySelectorAll([
                ':scope > .explanation-box',
                ':scope > .exp',
                ':scope > .reading-cloze-explanation',
                ':scope > .key-sentence-box',
                '.option-explanation',
                '.option-detail-analysis',
                '.detail'
            ].join(',')).forEach((node) => node.classList.add('reading-legacy-analysis-hidden'));
            return;
        }

        if (!hasSharedExplanation && legacyExplanations.length) {
            const card = document.createElement('section');
            card.className = 'reading-cloze-explanation';

            const heading = document.createElement('div');
            heading.className = 'reading-cloze-explanation__heading';
            heading.innerHTML = '<strong>解答・解析</strong>';
            card.appendChild(heading);

            const correct = legacyExplanations.find((item) => item.correct);
            if (correct) {
                const primary = document.createElement('div');
                primary.className = 'reading-cloze-explanation__primary';
                primary.innerHTML = `<b>正解 ${correct.number}</b><p>${correct.text}</p>`;
                card.appendChild(primary);
            }

            const alternatives = legacyExplanations.filter((item) => !item.correct && item.text);
            if (alternatives.length) {
                const list = document.createElement('div');
                list.className = 'reading-cloze-explanation__alternatives';
                const title = document.createElement('h4');
                title.textContent = '其他选项';
                list.appendChild(title);
                alternatives.forEach((item) => {
                    const row = document.createElement('p');
                    row.innerHTML = `<b>${item.number}</b><span>${item.text}</span>`;
                    list.appendChild(row);
                });
                card.appendChild(list);
            }
            question.appendChild(card);
        }
    }

    function topLevelReadingQuestions() {
        const list = Array.from(document.querySelectorAll('.qa-section, .question-card, .qcard'));
        return list.filter((question, index) => !list.some((candidate, candidateIndex) => (
            candidateIndex < index && candidate.contains(question)
        )));
    }

    function structuredAnalysisRecord(question) {
        /* New data-driven middle papers already carry the complete analysis on
           the question and option nodes.  Read that source directly instead of
           falling back to the older year-wide analysis bundle. */
        const inlineOptions = Array.from(question.querySelectorAll(':scope > .option-item'));
        const inlineType = question.dataset.readingQuestionType || '';
        if (question.closest('.reading-middle-data-page')
            && questionTypeLabels[inlineType]
            && inlineOptions.length === 4) {
            const inlineRecord = {
                id: question.dataset.readingAnalysisId || `${level.toLowerCase()}-${storageType || 'middle'}-${sessionDataKey || 'paper'}-${question.dataset.qId || 'question'}`,
                type: inlineType,
                evidenceTexts: (question.dataset.readingEvidence || '').split('|').filter(Boolean),
                options: inlineOptions.map((option, optionIndex) => ({
                    number: optionIndex + 1,
                    text: option.querySelector('.option-text')?.textContent?.trim() || '',
                    translation: option.querySelector('.option-translation')?.textContent?.trim() || '',
                    correct: option.dataset.readingAnswer === 'correct' || option.classList.contains('is-correct'),
                    error: option.dataset.readingErrorType || null,
                    explanation: option.dataset.readingExplanation || ''
                }))
            };
            question.dataset.readingAnalysisOrdinal = String(topLevelReadingQuestions().indexOf(question));
            return inlineRecord;
        }
        if (!sessionDataKey || !storageType) return null;
        const records = analysisData[level] && analysisData[level][storageType]
            ? analysisData[level][storageType][sessionDataKey]
            : null;
        if (!Array.isArray(records)) return null;
        const questions = topLevelReadingQuestions();
        const ordinal = questions.indexOf(question);
        let recordIndex = ordinal;

        /* Category practice removes every article that does not belong to the
           selected category.  The remaining article therefore no longer has
           the same DOM ordinal as it had in the original paper.  Short-reading
           analysis records are keyed by that original article number, so use
           the retained page number instead of the filtered DOM position. */
        if (isCategoryPractice && ordinal >= 0) {
            const page = question.closest('.page-content, .page-container');
            const retainedPageNumber = Number.parseInt(page?.dataset.categoryPracticePage, 10);
            const originalPageNumber = Number.isInteger(retainedPageNumber) && retainedPageNumber > 0
                ? retainedPageNumber
                : (page ? practicePageNumber(page, ordinal) : null);
            const stableRecordIndex = Number.isInteger(originalPageNumber)
                ? records.findIndex((candidate) => Number.parseInt(candidate?.questionNumber, 10) === originalPageNumber)
                : -1;
            if (stableRecordIndex >= 0) recordIndex = stableRecordIndex;
        }

        const record = recordIndex >= 0 ? records[recordIndex] : null;
        if (!record || !questionTypeLabels[record.type] || !Array.isArray(record.options) || record.options.length !== 4) {
            return null;
        }
        question.dataset.readingAnalysisOrdinal = String(recordIndex);
        question.dataset.readingAnalysisId = record.id || `${level.toLowerCase()}-${storageType}-${sessionDataKey}-${recordIndex + 1}`;
        question.dataset.readingQuestionType = record.type;
        question.dataset.readingEvidence = [
            ...(record.evidenceSelectors || []),
            ...(record.evidenceTexts || []),
            ...(record.evidenceIndices || [])
        ].join('|');
        return record;
    }

    function explicitEvidenceForQuestion(question, record) {
        const unit = question.closest('.page-content, .page-container, .reading-editorial-unit, .layout-container, .wrap');
        if (!unit) return [];
        const result = [];
        const add = (node) => {
            if (node && !result.includes(node) && result.length < 2) result.push(node);
        };

        const indexedCandidates = Array.from(unit.querySelectorAll([
            '.article-content .key-sentence',
            '.reading-editorial-copy .key-sentence',
            '.article-content .ks-target',
            '.reading-editorial-copy .ks-target'
        ].join(',')));
        if (Array.isArray(record.evidenceIndices)) {
            record.evidenceIndices.forEach((index) => add(indexedCandidates[Number(index)]));
        }

        const evidenceTexts = (record.evidenceTexts || [])
            .map(normalizeEvidenceText)
            .filter((text) => text.length >= 4);
        const selectorMatches = [];
        (record.evidenceSelectors || []).forEach((selector) => {
            try {
                unit.querySelectorAll(selector).forEach((node) => selectorMatches.push(node));
            } catch (error) {
                /* Invalid legacy selectors are ignored; explicit text remains authoritative. */
            }
        });

        const searchable = Array.from(new Set([
            ...selectorMatches,
            ...unit.querySelectorAll([
                '.article-content .ks-target',
                '.article-content .key-sentence',
                '.reading-editorial-copy .ks-target',
                '.reading-editorial-copy .key-sentence',
                '.article-content p',
                '.reading-editorial-copy p',
                '.poster-text-block',
                '.info-box',
                'td',
                'li'
            ].join(','))
        ])).sort((left, right) => normalizeEvidenceText(evidenceText(left)).length - normalizeEvidenceText(evidenceText(right)).length);

        evidenceTexts.forEach((term) => {
            const match = searchable.find((node) => {
                const candidate = normalizeEvidenceText(evidenceText(node));
                return candidate.includes(term) || term.includes(candidate);
            });
            add(match);
        });
        if (!result.length && selectorMatches.length) selectorMatches.slice(0, 2).forEach(add);
        return result;
    }

    function prepareStructuredOptionAnalysis(question, options, record) {
        question.classList.add('reading-option-analysis-question');

        options.forEach((option, optionIndex) => {
            const item = record.options[optionIndex] || {};
            const errorId = item.error;
            const isCorrect = Boolean(item.correct);

            option.classList.add('reading-structured-option');
            option.dataset.readingAnalysisId = `${record.id || question.dataset.readingAnalysisId || 'reading'}-option-${optionIndex + 1}`;
            option.setAttribute('aria-expanded', 'false');
            option.setAttribute('tabindex', '0');

            if (errorId) option.dataset.readingErrorType = errorId;
            if (isCorrect) {
                option.dataset.readingAnswer = 'correct';
                option.classList.add('reading-option-correct');
            }

            /* Keep feedback inside the actual text row.  `querySelector()`
               returns nodes in document order, so the former combined selector
               could pick the outer `.option-content` before its
               `.option-text-group` child.  Medium-reading CSS renders that
               wrapper with `display: contents`; inserting a mark there turned
               the mark into a separate grid row above the option. */
            const textGroup = option.querySelector('.option-text-group')
                || option.querySelector('.option-content-wrapper, .ocont')
                || option.querySelector('.option-content')
                || option;
            let translation = option.querySelector('.option-translation, .option-trans, .otrans');
            if (!translation && item.translation && item.translation !== item.text) {
                translation = document.createElement('span');
                translation.className = 'option-translation reading-inline-option-translation';
                translation.textContent = item.translation;
                textGroup.appendChild(translation);
            } else if (translation) {
                translation.classList.add('reading-inline-option-translation');
            }
            if (isCorrect && !textGroup.querySelector('.reading-option-correct-mark')) {
                const mark = document.createElement('span');
                mark.className = 'reading-option-correct-mark';
                mark.textContent = '✓';
                mark.setAttribute('aria-label', '正确答案');
                textGroup.prepend(mark);
            }
            if (!isCorrect && !textGroup.querySelector('.reading-option-wrong-mark')) {
                const mark = document.createElement('span');
                mark.className = 'reading-option-wrong-mark';
                mark.textContent = '×';
                mark.setAttribute('aria-label', '选错的答案');
                textGroup.prepend(mark);
            }

            option.querySelectorAll(':scope > .reading-option-analysis').forEach((node) => node.remove());
            const drawer = document.createElement('div');
            drawer.className = `reading-option-analysis${isCorrect ? ' is-correct' : ''}`;

            const label = document.createElement('span');
            label.className = 'reading-option-analysis__label';
            label.textContent = isCorrect ? '正确答案' : (optionErrorLabels[errorId] || '选项错误');
            drawer.appendChild(label);

            const reason = document.createElement('p');
            reason.className = 'reading-option-analysis__reason';
            reason.textContent = item.explanation || '该选项的解析内容暂未补充。';
            drawer.appendChild(reason);
            option.appendChild(drawer);
        });
    }

    function toggleStructuredOptionAnalysis(option) {
        if (!option || !option.classList.contains('reading-structured-option')) return false;
        const question = option.closest('.reading-option-analysis-question');
        const shouldOpen = !option.classList.contains('is-analysis-open');
        if (question) {
            question.querySelectorAll('.reading-structured-option').forEach((item) => {
                item.classList.remove('is-analysis-open');
                item.setAttribute('aria-expanded', 'false');
            });
        }
        option.classList.toggle('is-analysis-open', shouldOpen);
        option.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
        return true;
    }

    function isStructuredQuestionSubmitted(question) {
        if (!question) return false;
        if (body.classList.contains('reading-paper-submitted') || body.classList.contains('show-analysis')) return true;
        if (question.classList.contains('reviewed')) return true;
        if (question.querySelector('.options-group.reviewed, .options.reviewed')) return true;
        if (question.querySelector('.explanation-box.show, .exp.show, .reading-cloze-explanation.show')) return true;
        return false;
    }

    function syncStructuredQuestionState(question) {
        if (!question || !question.classList.contains('reading-option-analysis-question')) return false;
        if (!isStructuredQuestionSubmitted(question)) return false;

        question.querySelectorAll('.reading-structured-option').forEach((option, optionIndex) => {
            const isCorrect = option.dataset.readingAnswer === 'correct'
                || option.classList.contains('is-correct')
                || option.classList.contains('correct');
            const isWrong = option.classList.contains('answered-wrong')
                || option.classList.contains('is-wrong')
                || option.classList.contains('wrong');
            if (option.classList.contains('answered-correct') !== isCorrect) {
                option.classList.toggle('answered-correct', isCorrect);
            }
            if (option.classList.contains('answered-wrong') !== isWrong) {
                option.classList.toggle('answered-wrong', isWrong);
            }

            const numberNode = option.querySelector('.reading-editorial-option-number, .option-number, .custom-radio, .radio');
            if (numberNode && /^[✔✓✖×]$/.test(numberNode.textContent.trim())) {
                numberNode.textContent = String(optionIndex + 1);
            }
        });

        if (!body.classList.contains('show-analysis')) body.classList.add('show-analysis');
        if (!body.classList.contains('reading-paper-submitted')) body.classList.add('reading-paper-submitted');
        question.querySelectorAll([
            ':scope > .explanation-box',
            ':scope > .exp',
            ':scope > .reading-cloze-explanation',
            ':scope > .key-sentence-box',
            '.option-explanation',
            '.option-detail-analysis',
            '.detail'
        ].join(',')).forEach((node) => {
            if (!node.classList.contains('reading-legacy-analysis-hidden')) {
                node.classList.add('reading-legacy-analysis-hidden');
            }
        });
        return true;
    }

    function setupUnifiedAnalysisInteractions() {
        let evidenceSyncQueued = false;
        const syncAll = () => {
            const submitted = Array.from(document.querySelectorAll('.reading-option-analysis-question'))
                .some(syncStructuredQuestionState);
            if (submitted && !evidenceSyncQueued) {
                evidenceSyncQueued = true;
                window.requestAnimationFrame(() => {
                    evidenceSyncQueued = false;
                    highlightCorrectAnswerEvidence();
                });
            }
        };

        document.addEventListener('click', (event) => {
            const option = event.target.closest('.reading-structured-option');
            if (!option) return;
            const question = option.closest('.reading-option-analysis-question');
            if (!syncStructuredQuestionState(question)) return;
            event.preventDefault();
            event.stopImmediatePropagation();
            toggleStructuredOptionAnalysis(option);
        }, true);

        document.addEventListener('keydown', (event) => {
            if (!['Enter', ' '].includes(event.key)) return;
            const option = event.target.closest('.reading-structured-option');
            if (!option) return;
            const question = option.closest('.reading-option-analysis-question');
            if (!syncStructuredQuestionState(question)) return;
            event.preventDefault();
            event.stopImmediatePropagation();
            toggleStructuredOptionAnalysis(option);
        }, true);

        const observer = new MutationObserver((mutations) => {
            const relevant = mutations.some((mutation) => mutation.target.matches && mutation.target.matches([
                'body',
                '.reading-option-analysis-question',
                '.options',
                '.options-group',
                '.reading-structured-option',
                '.explanation-box',
                '.exp',
                '.reading-cloze-explanation'
            ].join(',')));
            if (relevant) syncAll();
        });
        observer.observe(document.body, {
            subtree: true,
            attributes: true,
            attributeFilter: ['class']
        });
        document.addEventListener('click', (event) => {
            if (event.target.closest('.reading-evidence-jump')) return;
            window.setTimeout(syncAll, 0);
        }, true);
        syncAll();
    }

    function normalizeLayout() {
        document.querySelectorAll('.quick-nav').forEach((node) => node.remove());
        document.querySelectorAll('.footer').forEach((node) => node.remove());

        const pageRoots = Array.from(document.querySelectorAll('.page-content, .page-container'));
        if (pageRoots.length) {
            pageRoots.forEach(normalizeRoot);
            const holder = pageRoots[0].parentElement;
            if (holder) holder.classList.add('reading-editorial-stage');
        } else {
            const root = document.querySelector('.layout-container, .wrap');
            if (root) normalizeRoot(root, 0, [root]);
        }

        document.querySelectorAll('.article-section, .article').forEach((node) => {
            node.classList.add('reading-editorial-article');
            node.classList.remove('sketch-box', 'sketch');
        });
        document.querySelectorAll('.article-content').forEach((node) => node.classList.add('reading-editorial-copy'));
        document.querySelectorAll('.qa-section, .question-card, .qcard').forEach(normalizeQuestion);
        document.querySelectorAll('.question-section, .questions').forEach((node) => node.classList.add('reading-editorial-questions'));
    }

    function translationFragments(translation) {
        const fragments = [[]];
        Array.from(translation.childNodes).forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') {
                if (fragments[fragments.length - 1].some((item) => item.nodeType !== Node.TEXT_NODE || item.nodeValue.trim())) {
                    fragments.push([]);
                }
                return;
            }
            fragments[fragments.length - 1].push(node.cloneNode(true));
        });
        return fragments.filter((fragment) => fragment.some((node) => (
            node.nodeType !== Node.TEXT_NODE || node.nodeValue.trim()
        )));
    }

    function insertTranslationAfter(source, translation) {
        if (!source || !source.parentNode) return;
        source.parentNode.insertBefore(translation, source.nextSibling);
    }

    function prepareTranslationNode(translation) {
        translation.querySelectorAll('.trans-title').forEach((title) => title.remove());
        translation.classList.add('reading-inline-translation', 'show');
        translation.classList.remove('analysis-element');
        translation.setAttribute('role', 'note');
        translation.setAttribute('aria-label', '译文');
        translation.dataset.readingTranslationReady = 'true';
        return translation;
    }

    function normalizeArticleTranslations() {
        document.querySelectorAll('.translation, .article-translation, .para-translation').forEach((translation) => {
            if (translation.dataset.readingTranslationReady === 'true') return;

            const paragraph = translation.closest('.paragraph');
            const group = translation.closest('.paragraph-group');
            const article = translation.closest('.article-content, .reading-editorial-copy');
            const container = paragraph || group || article || translation.parentElement;
            if (!container) {
                prepareTranslationNode(translation);
                return;
            }

            const sourceBlocks = Array.from(container.children).filter((node) => (
                node !== translation
                && node.tagName === 'P'
                && !node.closest('.paragraph-analysis')
                && node.textContent.trim()
            ));

            /* The oldest medium-reading pages keep the translation inside a
               hidden analysis wrapper. Move it beside the Japanese paragraph
               so every document follows the same original -> translation
               reading order. */
            const analysisWrapper = translation.closest('.paragraph-analysis');
            if (analysisWrapper && paragraph) {
                const source = Array.from(paragraph.children).find((node) => node.tagName === 'P' && node.textContent.trim());
                if (source) insertTranslationAfter(source, prepareTranslationNode(translation));
                else prepareTranslationNode(translation);
                return;
            }

            /* Some long articles store several original paragraphs followed
               by one <br>-separated translation. Split only when the counts
               match exactly; otherwise keep the complete translation together
               below the source group so no wording is lost or mispaired. */
            const fragments = translationFragments(translation);
            if (sourceBlocks.length > 1 && fragments.length === sourceBlocks.length) {
                sourceBlocks.forEach((source, index) => {
                    const inlineTranslation = translation.cloneNode(false);
                    fragments[index].forEach((node) => inlineTranslation.appendChild(node));
                    insertTranslationAfter(source, prepareTranslationNode(inlineTranslation));
                });
                translation.remove();
                return;
            }

            const source = sourceBlocks[sourceBlocks.length - 1];
            const prepared = prepareTranslationNode(translation);
            if (source) insertTranslationAfter(source, prepared);
        });
    }

    function setupExamPaperFootnotes() {
        const articles = Array.from(document.querySelectorAll('.article-content, .reading-editorial-copy'))
            .filter((article, index, list) => !list.some((candidate, candidateIndex) => (
                candidateIndex < index && candidate.contains(article)
            )));
        if (!articles.length) return;

        const markerPattern = /[（(]\s*注\s*([０-９0-9一二三四五六七八九十]*)\s*[）)]/g;
        const normalizeDigits = (value) => String(value || '')
            .normalize('NFKC')
            .replace(/[^0-9一二三四五六七八九十]/g, '');
        const chineseNumbers = {
            一: 1, 二: 2, 三: 3, 四: 4, 五: 5,
            六: 6, 七: 7, 八: 8, 九: 9, 十: 10
        };
        const numberValue = (value) => {
            const normalized = normalizeDigits(value);
            if (/^\d+$/.test(normalized)) return Number(normalized);
            return chineseNumbers[normalized] || 0;
        };
        const cleanTerm = (value) => String(value || '')
            .replace(markerPattern, '')
            .replace(/^[～〜]+|[～〜]+$/g, '')
            .replace(/\s+/g, '')
            .trim();
        const cleanDescription = (value) => String(value || '')
            .replace(/^\s*【?注(?:解)?】?\s*/u, '')
            .replace(/\s+/g, ' ')
            .trim();
        const removeMarkerText = (root) => {
            if (!root) return 0;
            let detected = 0;
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
            const nodes = [];
            while (walker.nextNode()) nodes.push(walker.currentNode);
            nodes.forEach((node) => {
                node.nodeValue = node.nodeValue.replace(markerPattern, (_, value) => {
                    detected = detected || numberValue(value);
                    return '';
                });
            });
            return detected;
        };
        const removeAdjacentMarker = (target) => {
            let sibling = target && target.nextSibling;
            while (sibling && sibling.nodeType === Node.TEXT_NODE && !sibling.nodeValue.trim()) sibling = sibling.nextSibling;
            if (!sibling || sibling.nodeType !== Node.TEXT_NODE) return 0;
            let detected = 0;
            sibling.nodeValue = sibling.nodeValue.replace(/^\s*[（(]\s*注\s*([０-９0-9一二三四五六七八九十]+)\s*[）)]/, (_, value) => {
                detected = numberValue(value);
                return '';
            });
            return detected;
        };
        const parseLegacyNote = (text) => {
            const compact = String(text || '').replace(/\s+/g, ' ').trim();
            const match = compact.match(/^[（(]\s*注\s*([０-９0-9一二三四五六七八九十]*)\s*[）)]\s*([^：:]+)[：:]\s*(.+)$/);
            if (match) {
                return {
                    number: numberValue(match[1]),
                    term: cleanTerm(match[2]),
                    description: cleanDescription(match[3])
                };
            }

            /* A few source files omit the colon before a conventional
               “ここでは…” explanation.  Treat that phrase as the boundary
               instead of leaving the old note block on screen. */
            const noColon = compact.match(/^[（(]\s*注\s*([０-９0-9一二三四五六七八九十]*)\s*[）)]\s*(.+?)(ここでは[、,].+)$/);
            if (!noColon) return null;
            return {
                number: numberValue(noColon[1]),
                term: cleanTerm(noColon[2]),
                description: cleanDescription(noColon[3])
            };
        };
        const parseLegacyBlock = (block) => {
            const rows = Array.from(block.querySelectorAll(':scope > .note-item, :scope > p, :scope > div'));
            if (rows.length) return rows.map((node) => parseLegacyNote(node.textContent)).filter(Boolean);

            /* A number of older papers store notes as bare text separated only
               by <br>.  Preserve each line instead of collapsing the whole
               block into one unparseable sentence. */
            const fragments = block.innerHTML.split(/<br\s*\/?\s*>/i);
            return fragments.map((fragment) => {
                const shell = document.createElement('div');
                shell.innerHTML = fragment;
                return parseLegacyNote(shell.textContent);
            }).filter(Boolean);
        };
        const comparableDescription = (value) => cleanDescription(value)
            .replace(/[。．.]$/u, '')
            .replace(/\s+/g, '');
        const termCandidates = (value) => {
            const original = cleanTerm(value);
            const withoutReadings = original.replace(/[（(][^）)]*[）)]/g, '');
            const phraseStem = withoutReadings.split(/[～〜]/)[0]
                /* Printed notes sometimes record a noun phrase with its
                   trailing particle (for example 「不可逆にして不可分の」),
                   while the passage places the note marker immediately after
                   the noun phrase itself.  Include that surface form so the
                   native note remains attached to the article. */
                .replace(/[をがはにでとへの]$/u, '');
            const verbStem = withoutReadings
                .replace(/する$/u, '')
                .replace(/[すくぐむぶぬつるう]$/u, '');
            return Array.from(new Set([original, withoutReadings, phraseStem, verbStem]
                .map((term) => term.replace(/^[～〜]+|[～〜]+$/g, '').trim())
                .filter((term) => term && term.length >= 2)))
                .sort((left, right) => right.length - left.length);
        };
        const legacyNoteMatchesPassage = (article, note) => {
            if (!article || !note) return false;
            const japaneseText = Array.from(article.querySelectorAll('.japanese, .jp-text, .article-text, .paragraph'))
                .filter((node) => !node.closest('.translation, .article-translation, .para-translation'))
                .map((node) => node.textContent || '')
                .join('')
                /* The printed note number may split a headword, as in
                   「ハイライト（注1）部分」.  Compare against the paper text
                   with markers removed so the complete native headword is
                   not mistaken for an orphaned note. */
                .replace(markerPattern, '')
                .replace(/\s+/g, '');
            return termCandidates(note.term).some((term) => japaneseText.includes(term.replace(/\s+/g, '')));
        };
        const inferTermBeforeMarker = (target) => {
            if (!target || !target.parentElement) return '';
            const range = document.createRange();
            range.selectNodeContents(target.parentElement);
            range.setEndBefore(target);
            const context = range.toString()
                .replace(/\s+/g, '')
                .split(/[。！？!?、，「」『』]/u)
                .pop()
                .replace(/^(?:そんな|こんな|あんな)/u, '');
            if (!context) return '';
            return context.length > 16 ? context.slice(-16) : context;
        };
        const hasInlineNoteMarker = (target) => {
            if (!target) return false;
            const ownText = String(target.textContent || '');
            if (/[（(]\s*注\s*[０-９0-9一二三四五六七八九十]*\s*[）)]/u.test(ownText)) return true;
            let sibling = target.nextSibling;
            while (sibling && sibling.nodeType === Node.TEXT_NODE && !sibling.nodeValue.trim()) sibling = sibling.nextSibling;
            return Boolean(
                sibling
                && sibling.nodeType === Node.TEXT_NODE
                && /^\s*[（(]\s*注\s*[０-９0-9一二三四五六七八九十]+\s*[）)]/u.test(sibling.nodeValue)
            );
        };
        const glossaryTerm = (target) => {
            if (!target) return '';
            const copy = target.cloneNode(true);
            copy.querySelectorAll('rt, rp, .reading-paper-note-ref').forEach((node) => node.remove());
            return cleanTerm(copy.textContent);
        };
        const glossaryReading = (target) => {
            if (!target) return '';
            const declared = String(target.dataset.reading || '').trim();
            if (declared) return declared;
            return Array.from(target.querySelectorAll('rt'))
                .map((node) => node.textContent.trim())
                .filter(Boolean)
                .join('');
        };
        const isJapaneseDefinition = (value) => {
            const text = String(value || '').trim();
            if (!/[ぁ-んァ-ヶ]/u.test(text)) return false;

            /* Original JLPT notes are written as short Japanese definitions.
               Some Chinese study glosses contain a Japanese conjugation in
               parentheses, so kana alone is not sufficient; simplified
               Chinese glyphs and Chinese punctuation keep those glosses in
               the analysis layer. */
            const chineseSignals = /[这为与从们关写发后听吗处头将对属应开当总愿无时显见观让读还进选过连难题错译边类点义种别样间临汉较则够并须门确实认]|[，；]/u;
            return !chineseSignals.test(text);
        };
        const appendAnalysisVocabulary = (article, records) => {
            if (!article || !records.length) return;
            article.querySelectorAll(':scope > .reading-analysis-vocabulary').forEach((node) => node.remove());

            const section = document.createElement('section');
            /* This section owns its visibility rule. Do not reuse the legacy
               `analysis-element` hook: that hook is intentionally forced
               hidden for old embedded answer blocks and would also hide this
               newly separated glossary. */
            section.className = 'reading-analysis-vocabulary';
            section.setAttribute('aria-label', '解析词汇解释');

            const heading = document.createElement('h3');
            heading.textContent = '词汇解释';
            section.appendChild(heading);

            const list = document.createElement('ol');
            records.forEach((record, index) => {
                const item = document.createElement('li');

                const number = document.createElement('span');
                number.className = 'reading-analysis-vocabulary__number';
                number.textContent = String(index + 1).padStart(2, '0');

                const word = document.createElement('strong');
                word.className = 'reading-analysis-vocabulary__word';
                word.textContent = record.term;
                if (record.reading && record.reading !== record.term) {
                    const reading = document.createElement('span');
                    reading.className = 'reading-analysis-vocabulary__reading';
                    reading.textContent = `（${record.reading}）`;
                    word.appendChild(reading);
                }

                const meaning = document.createElement('span');
                meaning.className = 'reading-analysis-vocabulary__meaning';
                meaning.textContent = record.meaning;

                item.append(number, word, meaning);
                list.appendChild(item);
            });
            section.appendChild(list);
            article.appendChild(section);
        };

        articles.forEach((article, articleIndex) => {
            if (article.dataset.readingPaperFootnotesReady === 'true') return;
            article.dataset.readingPaperFootnotesReady = 'true';

            const legacyBlocks = Array.from(article.querySelectorAll('.article-notes, .basic-notes'));
            let following = article.nextElementSibling;
            while (following && following.matches('.article-notes, .basic-notes')) {
                legacyBlocks.push(following);
                following = following.nextElementSibling;
            }
            /* A data-driven article page keeps its source note block in the
               article, but the paper-note normalizer must only consume notes
               whose Japanese headword actually appears in that article.  This
               prevents a later paragraph wrapper from claiming another
               article's note list. */
            const legacyNotes = legacyBlocks
                .flatMap(parseLegacyBlock)
                .filter((note) => legacyNoteMatchesPassage(article, note));
            const claimedLegacyNumbers = new Set(legacyNotes.map((note) => note.number).filter(Boolean));
            let legacyAutoNumber = 1;
            legacyNotes.forEach((note) => {
                if (note.number) return;
                while (claimedLegacyNumbers.has(legacyAutoNumber)) legacyAutoNumber += 1;
                note.number = legacyAutoNumber;
                claimedLegacyNumbers.add(legacyAutoNumber);
                legacyAutoNumber += 1;
            });
            const legacyByTerm = new Map(legacyNotes.map((note) => [cleanTerm(note.term), note]));
            const legacyByDescription = new Map(legacyNotes.map((note) => [
                comparableDescription(note.description),
                note
            ]).filter(([description]) => description));
            const usedNumbers = new Set(legacyNotes.map((note) => note.number).filter(Boolean));
            let nextNumber = 1;
            const takeNumber = () => {
                while (usedNumbers.has(nextNumber)) nextNumber += 1;
                usedNumbers.add(nextNumber);
                return nextNumber++;
            };

            const noteMap = new Map();
            const linkedNumbers = new Set();
            const appendReference = (target, number) => {
                target.classList.add('reading-paper-note-term');
                target.classList.remove('vocab-word', 'note-word', 'note', 'exam-note');
                target.removeAttribute('title');
                target.setAttribute('aria-describedby', `reading-note-${articleIndex + 1}-${number}`);
                if (!target.nextElementSibling || !target.nextElementSibling.classList.contains('reading-paper-note-ref')) {
                    const ref = document.createElement('sup');
                    ref.className = 'reading-paper-note-ref';
                    ref.textContent = String(number);
                    ref.setAttribute('aria-label', `注${number}`);
                    target.after(ref);
                }
                linkedNumbers.add(number);
            };
            const allTargets = Array.from(article.querySelectorAll([
                '.note-word[data-desc]',
                '.note[data-desc]',
                '.exam-note[data-meaning]',
                '.vocab-word[data-meaning]'
            ].join(','))).filter((target) => !target.closest([
                '.translation',
                '.article-translation',
                '.para-translation',
                '.article-notes',
                '.basic-notes',
                '.reading-paper-notes'
            ].join(',')));

            /* Keep the paper's own Japanese annotations and the editor's
               Chinese study glossary as two different information layers.
               Native notes always carry a note marker/data-note, use a note
               class, or match the source's legacy note list.  A bare
               `.vocab-word[data-meaning]` is an analysis aid and must not be
               renumbered as if it were printed on the original paper. */
            const isNativeNoteTarget = (target) => {
                if (!target.matches('.vocab-word[data-meaning]')) return true;
                if (target.dataset.note || hasInlineNoteMarker(target)) return true;
                const term = cleanTerm(glossaryTerm(target));
                const description = cleanDescription(target.dataset.meaning);
                return Boolean(
                    legacyByTerm.get(term)
                    || legacyByDescription.get(comparableDescription(description))
                    || /^\s*【?注(?:解)?】?/u.test(String(target.dataset.meaning || ''))
                    || isJapaneseDefinition(description)
                );
            };
            const targets = allTargets.filter(isNativeNoteTarget);
            const glossaryRecords = [];
            const glossaryKeys = new Set();
            allTargets.filter((target) => !isNativeNoteTarget(target)).forEach((target) => {
                const term = glossaryTerm(target);
                const meaning = cleanDescription(target.dataset.meaning);
                if (!term || !meaning) return;
                const key = `${term}|${meaning}`;
                if (!glossaryKeys.has(key)) {
                    glossaryKeys.add(key);
                    glossaryRecords.push({ term, reading: glossaryReading(target), meaning });
                }
                target.classList.remove('vocab-word');
                target.classList.add('reading-analysis-vocab-source');
                target.removeAttribute('data-reading');
                target.removeAttribute('data-meaning');
                target.removeAttribute('title');
            });

            targets.forEach((target) => {
                const originalText = target.textContent;
                let explicitNumber = numberValue(target.dataset.note);
                explicitNumber = explicitNumber || removeMarkerText(target) || removeAdjacentMarker(target);
                const term = cleanTerm(target.textContent || originalText);
                const targetDescription = cleanDescription(target.dataset.desc || target.dataset.meaning);
                const isMarkerOnly = !term && explicitNumber > 0;
                if (isMarkerOnly) {
                    if (!targetDescription) return;
                    const inferredTerm = inferTermBeforeMarker(target) || `注${explicitNumber}`;
                    if (!noteMap.has(inferredTerm)) noteMap.set(inferredTerm, {
                        number: explicitNumber,
                        term: inferredTerm,
                        description: targetDescription
                    });
                    target.className = 'reading-paper-note-ref';
                    target.textContent = String(explicitNumber);
                    target.removeAttribute('data-note');
                    target.removeAttribute('data-desc');
                    target.removeAttribute('data-meaning');
                    target.removeAttribute('title');
                    target.setAttribute('aria-label', `注${explicitNumber}`);
                    target.setAttribute('aria-describedby', `reading-note-${articleIndex + 1}-${explicitNumber}`);
                    linkedNumbers.add(explicitNumber);
                    return;
                }
                if (!term) return;
                const legacy = legacyByTerm.get(term)
                    || legacyByDescription.get(comparableDescription(targetDescription));
                const noteTerm = cleanTerm((legacy && legacy.term) || term);
                const existing = noteMap.get(noteTerm);
                const number = existing
                    ? existing.number
                    : (explicitNumber || (legacy && legacy.number) || takeNumber());
                usedNumbers.add(number);
                const description = cleanDescription(
                    (legacy && legacy.description)
                    || targetDescription
                );
                if (!description) return;

                if (!existing) noteMap.set(noteTerm, { number, term: noteTerm, description });
                appendReference(target, number);
            });

            const wrapLegacyTerm = (note) => {
                if (linkedNumbers.has(note.number)) return true;
                const excludedSelector = [
                    '.translation',
                    '.article-translation',
                    '.para-translation',
                    '.article-notes',
                    '.basic-notes',
                    '.reading-paper-notes',
                    '.reading-paper-note-term',
                    'script',
                    'style'
                ].join(',');
                const walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT, {
                    acceptNode(node) {
                        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                        if (node.parentElement && node.parentElement.closest(excludedSelector)) return NodeFilter.FILTER_REJECT;
                        return NodeFilter.FILTER_ACCEPT;
                    }
                });
                const nodes = [];
                while (walker.nextNode()) nodes.push(walker.currentNode);

                const markerSource = '[（(]\\s*注\\s*[０-９0-9一二三四五六七八九十]*\\s*[）)]';
                const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const findCandidate = (text, candidate) => {
                    const directStart = text.indexOf(candidate);
                    if (directStart >= 0) return {
                        start: directStart,
                        end: directStart + candidate.length
                    };

                    /* Preserve a headword whose printed note marker appears
                       inside it (for example ハイライト（注1）部分). */
                    const flexible = new RegExp(
                        Array.from(candidate)
                            .map(escapeRegExp)
                            .join(`(?:\\s*${markerSource}\\s*)?`),
                        'u'
                    );
                    const match = flexible.exec(text);
                    return match ? { start: match.index, end: match.index + match[0].length } : null;
                };

                for (const candidate of termCandidates(note.term)) {
                    let location = null;
                    const textNode = nodes.find((node) => {
                        location = findCandidate(node.nodeValue, candidate);
                        return Boolean(location);
                    });
                    if (!textNode) continue;
                    const { start, end } = location;
                    const before = textNode.nodeValue.slice(0, start);
                    let after = textNode.nodeValue.slice(end);
                    after = after.replace(/^\s*[（(]\s*注\s*[０-９0-9一二三四五六七八九十]*\s*[）)]/, '');
                    const fragment = document.createDocumentFragment();
                    if (before) fragment.appendChild(document.createTextNode(before));
                    const term = document.createElement('span');
                    term.className = 'reading-paper-note-term';
                    term.textContent = candidate;
                    fragment.appendChild(term);
                    const ref = document.createElement('sup');
                    ref.className = 'reading-paper-note-ref';
                    ref.textContent = String(note.number);
                    ref.setAttribute('aria-label', `注${note.number}`);
                    fragment.appendChild(ref);
                    if (after) fragment.appendChild(document.createTextNode(after));
                    term.setAttribute('aria-describedby', `reading-note-${articleIndex + 1}-${note.number}`);
                    textNode.replaceWith(fragment);
                    linkedNumbers.add(note.number);
                    return true;
                }
                return false;
            };

            legacyNotes.forEach((note) => {
                if (!note.term || !note.description) return;
                if (!noteMap.has(note.term)) noteMap.set(note.term, note);
                wrapLegacyTerm(note);
            });

            legacyBlocks.forEach((block) => block.remove());
            /* Old files occasionally contain notes left over from a different
               article revision.  A paper footnote must always have a visible
               source marker, so do not print an orphaned note below the text. */
            const notes = Array.from(noteMap.values())
                .filter((note) => linkedNumbers.has(note.number))
                .sort((left, right) => left.number - right.number);
            if (notes.length) {
                const aside = document.createElement('aside');
                aside.className = 'reading-paper-notes';
                aside.setAttribute('aria-label', '文章注释');
                const list = document.createElement('ol');
                notes.forEach((note) => {
                    const item = document.createElement('li');
                    item.id = `reading-note-${articleIndex + 1}-${note.number}`;
                    const number = document.createElement('span');
                    number.className = 'reading-paper-note-number';
                    number.textContent = `注${note.number}`;
                    const term = document.createElement('strong');
                    term.textContent = note.term;
                    const description = document.createElement('span');
                    description.textContent = note.description;
                    item.append(number, term, document.createTextNode('：'), description);
                    list.appendChild(item);
                });
                aside.appendChild(list);
                /* Keep printed annotations attached to the passage itself.
                   Older pages place the questions inside the same article
                   root, so appending here used to push notes below every
                   question.  Insert before the source (or, when absent,
                   before the question list) instead. */
                const paperNoteAnchor = Array.from(article.children).find((child) => (
                    child.matches('.source, .qa-container, .reading-editorial-questions, .question-section, .questions')
                ));
                if (paperNoteAnchor) article.insertBefore(aside, paperNoteAnchor);
                else article.appendChild(aside);
            }
            appendAnalysisVocabulary(article, glossaryRecords);

            /* Translations sometimes repeat the source term with the old
               tooltip class.  In the paper layout those copies are plain
               translated text; only the source term owns the numbered note. */
            article.querySelectorAll([
                '.translation .vocab-word',
                '.article-translation .vocab-word',
                '.para-translation .vocab-word',
                '.translation .note-word',
                '.article-translation .note-word',
                '.para-translation .note-word',
                '.translation .note',
                '.article-translation .note',
                '.para-translation .note',
                '.translation .exam-note',
                '.article-translation .exam-note',
                '.para-translation .exam-note'
            ].join(',')).forEach((target) => {
                target.classList.remove('vocab-word', 'note-word', 'note', 'exam-note');
                target.removeAttribute('data-reading');
                target.removeAttribute('data-meaning');
                target.removeAttribute('data-note');
                target.removeAttribute('data-desc');
                target.removeAttribute('title');
            });
        });

        body.classList.add('reading-exam-footnotes-ready');
        document.querySelectorAll('.vocab-tooltip, .tooltip').forEach((tooltip) => tooltip.classList.remove('show'));
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.reading-paper-note-term, .reading-paper-note-ref')) return;
            event.stopImmediatePropagation();
        }, true);
    }

    function setupAnalysisSourceJumps() {
        const jumpButtons = Array.from(document.querySelectorAll('.source-jump-btn'));
        if (!jumpButtons.length) return;

        const sourceKeyFor = (button) => {
            const inlineHandler = button.getAttribute('onclick') || '';
            const handlerMatch = inlineHandler.match(/jumpToTarget\(\s*['\"]([^'\"]+)['\"]\s*\)/);
            if (handlerMatch) return handlerMatch[1];
            const themeClass = Array.from(button.classList).find((name) => name.startsWith('ks-theme-'));
            return themeClass ? themeClass.replace(/^ks-theme-/, '') : '';
        };

        jumpButtons.forEach((button) => {
            const sourceKey = sourceKeyFor(button);
            if (!sourceKey) return;
            button.dataset.readingSourceKey = sourceKey;
            button.removeAttribute('onclick');
            button.onclick = null;
            button.setAttribute('role', 'button');
            button.setAttribute('tabindex', '0');
            button.setAttribute('aria-label', '解析依据へ移動して強調表示');
            const question = button.closest('.reading-editorial-question, .qa-section, .question-card, .qcard');
            if (question) question.dataset.readingSourceKey = sourceKey;
        });
    }

    function highlightQuotedEvidence(root) {
        if (!root || root.dataset.readingEvidenceReady === 'true') return;
        root.dataset.readingEvidenceReady = 'true';
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.nodeValue || !/[「『][^」』]+[」』]/.test(node.nodeValue)) return NodeFilter.FILTER_REJECT;
                if (node.parentElement && node.parentElement.closest('mark, script, style')) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach((node) => {
            const fragment = document.createDocumentFragment();
            node.nodeValue.split(/([「『][^」』]+[」』])/g).filter(Boolean).forEach((part) => {
                if (/^[「『].+[」』]$/.test(part)) {
                    const mark = document.createElement('mark');
                    mark.textContent = part;
                    fragment.appendChild(mark);
                } else {
                    fragment.appendChild(document.createTextNode(part));
                }
            });
            node.replaceWith(fragment);
        });
    }

    function evidenceText(node) {
        if (!node) return '';
        const copy = node.cloneNode(true);
        copy.querySelectorAll('rt, .sentence-badge, .reading-evidence-index, .inline-note-container, .translation, .article-translation, .para-translation').forEach((item) => item.remove());
        return copy.textContent.replace(/\s+/g, ' ').trim();
    }

    function normalizeEvidenceText(value) {
        return String(value || '')
            .normalize('NFKC')
            .replace(/[\s「」『』“”‘’（）()［］\[\]【】、，。．・：:；;！？!?…—―-]/g, '')
            .trim();
    }

    function evidenceTermsForQuestion(question) {
        const correctOption = question.querySelector([
            '.option-item.is-correct',
            '.option-label.is-correct',
            '.option.is-correct',
            '.option-item.answered-correct',
            '.option-label.answered-correct',
            '.option.answered-correct'
        ].join(','));
        if (!correctOption) return { terms: [], answerText: '', analysisText: '' };

        const answerCopy = correctOption.cloneNode(true);
        answerCopy.querySelectorAll([
            'rt',
            '.choice-number',
            '.option-number',
            '.option-translation',
            '.translation',
            '.option-explanation',
            '.option-detail-analysis',
            '.detail'
        ].join(',')).forEach((item) => item.remove());
        const answerText = normalizeEvidenceText(answerCopy.textContent);

        const sources = Array.from(correctOption.querySelectorAll([
            '.option-explanation',
            '.option-detail-analysis',
            '.detail'
        ].join(',')));
        const sharedExplanation = question.querySelector(':scope > .reading-cloze-explanation, :scope > .explanation-box, :scope > .exp');
        if (!sources.length && sharedExplanation) sources.push(sharedExplanation);

        const terms = new Set();
        const analysisText = normalizeEvidenceText(sources.map((source) => source.textContent).join(' '));
        sources.forEach((source) => {
            const sourceText = source.textContent.replace(/\s+/g, ' ');
            const patterns = [/「([^」]{2,})」/g, /『([^』]{2,})』/g];
            patterns.forEach((pattern) => {
                let match;
                while ((match = pattern.exec(sourceText))) {
                    const term = normalizeEvidenceText(match[1]);
                    const isUsefulShortTerm = term.length === 2 && /[\u3400-\u9fff]/.test(term);
                    if ((term.length >= 3 || isUsefulShortTerm) && /[\u3040-\u30ff\u3400-\u9fff]/.test(term)) terms.add(term);
                }
            });
        });
        return {
            terms: Array.from(terms).sort((a, b) => b.length - a.length),
            answerText,
            analysisText
        };
    }

    function evidenceSimilarity(query, candidate) {
        if (!query || !candidate) return 0;
        if (candidate.includes(query)) return Math.min(query.length, 48) + 24;

        const size = query.length >= 8 ? 2 : 1;
        const queryParts = [];
        for (let index = 0; index <= query.length - size; index += 1) {
            queryParts.push(query.slice(index, index + size));
        }
        if (!queryParts.length) return 0;

        const candidateParts = new Set();
        for (let index = 0; index <= candidate.length - size; index += 1) {
            candidateParts.add(candidate.slice(index, index + size));
        }
        const overlap = queryParts.filter((part) => candidateParts.has(part)).length;
        const coverage = overlap / queryParts.length;
        if (coverage < (query.length >= 8 ? .24 : .5)) return 0;
        return coverage * Math.min(query.length, 40);
    }

    function evidenceContextSimilarity(query, candidate) {
        if (!query || !candidate) return 0;
        const partsFor = (value) => {
            const parts = new Set();
            for (let index = 0; index < value.length - 1; index += 1) {
                const part = value.slice(index, index + 2);
                if (/[\u3040-\u30ff\u3400-\u9fff]/.test(part)) parts.add(part);
            }
            return parts;
        };
        const queryParts = partsFor(query);
        const candidateParts = partsFor(candidate);
        if (!queryParts.size || !candidateParts.size) return 0;
        let overlap = 0;
        queryParts.forEach((part) => {
            if (candidateParts.has(part)) overlap += 1;
        });
        const coverage = overlap / Math.min(queryParts.size, candidateParts.size);
        return coverage >= .08 ? coverage * 24 : 0;
    }

    function legacySourceEvidenceForQuestion(question) {
        const sourceKey = question && question.dataset.readingSourceKey;
        if (!sourceKey) return [];
        const safeKey = sourceKey.replace(/[^a-zA-Z0-9_-]/g, '');
        const candidates = Array.from(document.querySelectorAll(`.target-${safeKey}`));
        const leafTargets = candidates.filter((candidate) => (
            !candidates.some((other) => other !== candidate && candidate.contains(other))
        ));
        return leafTargets.length ? leafTargets : candidates;
    }

    function evidenceBadgeHost(target) {
        if (!target) return null;
        if (target.matches('tr')) return target.querySelector('th, td');
        if (target.matches('table, thead, tbody, tfoot')) return target.querySelector('th, td');
        return target;
    }

    function markQuestionEvidence(question, targets, questionIndex) {
        const uniqueTargets = Array.from(new Set(targets.filter(Boolean)));
        if (!question || !uniqueTargets.length) return;

        /* Keep the evidence owner globally unique, but take the displayed
           question number from the current article itself.  Recalculating it
           from the surrounding page structure becomes unreliable when a
           reading set contains several articles or legacy wrapper elements. */
        const displayedQuestionNumber = resultQuestionNumber(question, questionIndex);
        const number = String(displayedQuestionNumber).padStart(2, '0');
        const owner = `reading-evidence-q${questionIndex + 1}`;
        const tone = String(((displayedQuestionNumber - 1) % 10) + 1);
        question.dataset.readingEvidenceOwner = owner;
        question.dataset.readingEvidenceNumber = number;
        question.dataset.readingEvidenceTone = tone;

        uniqueTargets.forEach((target) => {
            const owners = new Set((target.dataset.readingEvidenceOwners || '').split(/\s+/).filter(Boolean));
            owners.add(owner);
            target.dataset.readingEvidenceOwners = Array.from(owners).join(' ');
            if (!target.dataset.readingEvidenceTone) target.dataset.readingEvidenceTone = tone;
            target.classList.add('reading-answer-evidence');

            const host = evidenceBadgeHost(target);
            if (!host || host.querySelector(`:scope > .reading-evidence-index[data-reading-evidence-owner="${owner}"]`)) return;
            const badge = document.createElement('span');
            badge.className = 'reading-evidence-index';
            badge.dataset.readingEvidenceOwner = owner;
            badge.dataset.readingEvidenceTone = tone;
            badge.textContent = number;
            badge.setAttribute('aria-label', `第 ${displayedQuestionNumber} 题关键句`);
            host.prepend(badge);
        });

        const legacyJump = question.querySelector('.source-jump-btn');
        legacyJump?.remove();
        const jump = document.createElement('button');
        jump.type = 'button';
        jump.className = 'reading-evidence-jump';
        jump.dataset.readingGeneratedJump = 'true';
        jump.innerHTML = '<span aria-hidden="true">↗</span><span>定位关键句</span>';
        jump.dataset.readingEvidenceOwner = owner;
        jump.dataset.readingEvidenceTone = tone;
        jump.setAttribute('aria-label', `定位第 ${displayedQuestionNumber} 题关键句`);
        jump.setAttribute('aria-pressed', 'false');
        jump.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            focusQuestionEvidence(jump);
        });
        jump.addEventListener('keydown', (event) => {
            if (!['Enter', ' '].includes(event.key)) return;
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            focusQuestionEvidence(jump);
        });

        const head = question.querySelector('.reading-editorial-question-head, .question-title, .q-header, .q-head');
        if (head && jump.parentElement !== head) head.appendChild(jump);
        else if (!head && jump.parentElement !== question) question.prepend(jump);
    }

    function focusQuestionEvidence(control) {
        const submitted = body.classList.contains('show-analysis')
            || body.classList.contains('reading-paper-submitted');
        if (!submitted || !control) return;
        const owner = control.dataset.readingEvidenceOwner;
        if (!owner) return;

        const targets = Array.from(document.querySelectorAll('.reading-answer-evidence')).filter((target) => (
            (target.dataset.readingEvidenceOwners || '').split(/\s+/).includes(owner)
        ));
        if (!targets.length) return;
        document.querySelectorAll('.reading-evidence-jump[aria-pressed="true"]').forEach((button) => button.setAttribute('aria-pressed', 'false'));
        control.setAttribute('aria-pressed', 'true');
        document.querySelectorAll('.reading-answer-evidence.reading-evidence-focus').forEach((target) => target.classList.remove('reading-evidence-focus'));
        targets.forEach((target) => target.classList.add('reading-evidence-focus'));
        const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        targets[0].scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center', inline: 'nearest' });
    }

    function setupEvidenceJumpInteractions() {
        document.addEventListener('click', (event) => {
            const control = event.target.closest('.reading-evidence-jump');
            if (!control) return;
            event.preventDefault();
            event.stopPropagation();
            focusQuestionEvidence(control);
        });
        document.addEventListener('keydown', (event) => {
            if (!['Enter', ' '].includes(event.key)) return;
            const control = event.target.closest('.reading-evidence-jump');
            if (!control) return;
            event.preventDefault();
            focusQuestionEvidence(control);
        });
    }

    function highlightCorrectAnswerEvidence() {
        document.querySelectorAll('.reading-evidence-index').forEach((node) => node.remove());
        document.querySelectorAll('.reading-evidence-jump[data-reading-generated-jump="true"]').forEach((node) => node.remove());
        document.querySelectorAll('.reading-answer-evidence').forEach((node) => {
            node.classList.remove('reading-answer-evidence', 'reading-evidence-focus', 'active', 'flash', 'flash-focus');
            delete node.dataset.readingEvidenceOwners;
            delete node.dataset.readingEvidenceTone;
        });

        topLevelReadingQuestions().forEach((question, questionIndex) => {
            let matchedTargets = legacySourceEvidenceForQuestion(question);
            const structuredRecord = structuredAnalysisRecord(question);
            if (!matchedTargets.length && structuredRecord) {
                matchedTargets = explicitEvidenceForQuestion(question, structuredRecord);
            }

            if (!matchedTargets.length) {
                const { terms, answerText, analysisText } = evidenceTermsForQuestion(question);
                if (!terms.length && !answerText && !analysisText) return;

                const unit = question.closest('.page-content, .page-container, .reading-editorial-unit, .layout-container, .wrap');
                if (!unit) return;
                const candidates = Array.from(unit.querySelectorAll('.article-content .key-sentence, .reading-editorial-copy .key-sentence'));
                if (!candidates.length) return;

                const scored = candidates.map((candidate, order) => {
                    const candidateText = normalizeEvidenceText(evidenceText(candidate));
                    const termScores = terms.map((term) => evidenceSimilarity(term, candidateText));
                    const quoteScore = termScores.reduce((total, score) => total + score, 0);
                    const answerScore = evidenceSimilarity(answerText, candidateText) * .7;
                    const candidateContext = normalizeEvidenceText(candidate.querySelector('.inline-note-container')?.textContent);
                    const contextScore = evidenceContextSimilarity(analysisText, candidateContext);
                    return {
                        candidate,
                        order,
                        score: quoteScore * 2 + answerScore + contextScore,
                        directMatches: terms.filter((term) => candidateText.includes(term)).length
                    };
                }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score || a.order - b.order);

                if (!scored.length) return;
                const bestScore = scored[0].score;
                matchedTargets = scored
                    .filter((item, index) => index === 0 || item.directMatches > 0 || item.score >= bestScore * .72)
                    .slice(0, 2)
                    .map((item) => item.candidate);
            }

            markQuestionEvidence(question, matchedTargets, questionIndex);
        });
    }

    function setupShortDesktopFlow() {
        if (!isShortReading) return;
        /* Category practice is a cross-year article sequence.  Its annual HTML
           file is only a transport container, so it must keep the original
           single-article navigator instead of being rebuilt as an annual
           desktop batch containing every article in that file. */
        if (isCategoryPractice) {
            body.classList.add('reading-category-single-article-flow');
            return;
        }
        body.classList.add('reading-short-paper-flow');

        const pages = Array.from(document.querySelectorAll('.page-content, .page-container'));
        if (!pages.length) return;

        const holder = pages[0].parentElement;
        if (holder && !holder.querySelector(':scope > .reading-short-session-overview')) {
            const overview = document.createElement('section');
            overview.className = 'reading-short-session-overview';
            overview.setAttribute('aria-label', '本套短篇阅读');

            const overviewTitle = document.createElement('h1');
            overviewTitle.className = 'reading-editorial-session-title reading-short-session-title';
            overviewTitle.textContent = `${sessionPeriod ? `${sessionPeriod} ` : ''}${sessionTypeLabel}`;
            overview.appendChild(overviewTitle);
            holder.insertBefore(overview, pages[0]);
            ensureReadingSessionMentor(holder, overviewTitle);
        }

        pages.forEach((page, index) => {
            page.dataset.paperNumber = String(index + 1);
            let heading = page.querySelector([
                ':scope > .reading-editorial-session-heading > .reading-editorial-session-title',
                ':scope > .reading-editorial-session-heading > .header-title',
                ':scope > .reading-editorial-session-title',
                ':scope > .header-title'
            ].join(', '));
            if (!heading) {
                heading = document.createElement('h2');
                heading.className = 'reading-editorial-session-title';
                page.prepend(heading);
            }
            if (heading) {
                heading.dataset.originalTitle = heading.textContent.trim();
                heading.textContent = `（${sequenceLabels[index] || String(index + 1)}）`;
                heading.classList.add('reading-short-unit-index');
                delete heading.dataset.kicker;

                const headingRow = heading.closest('.reading-editorial-session-heading');
                if (headingRow) {
                    headingRow.classList.add('reading-short-unit-heading');
                    headingRow.querySelector(':scope > .reading-question-mentor')?.remove();
                }
            }
        });

        if (pages.length < 2) return;

        let navigation = document.querySelector('.article-navigation');
        if (!navigation) {
            navigation = document.createElement('div');
            navigation.className = 'article-navigation';
            (holder || document.body).appendChild(navigation);
        }
        navigation.classList.add('reading-short-batch-navigation');
        let prevButton = navigation.querySelector('#prev-btn, [data-reading-prev]');
        let nextButton = navigation.querySelector('#next-btn, [data-reading-next]');
        if (!prevButton) {
            prevButton = document.createElement('button');
            prevButton.id = 'prev-btn';
            prevButton.type = 'button';
            prevButton.className = 'nav-btn';
            prevButton.textContent = '← 上一篇';
            navigation.prepend(prevButton);
        }
        if (!nextButton) {
            nextButton = document.createElement('button');
            nextButton.id = 'next-btn';
            nextButton.type = 'button';
            nextButton.className = 'nav-btn';
            nextButton.textContent = '下一篇 →';
            navigation.appendChild(nextButton);
        }
        const legacySubmit = navigation.querySelector('#study-submit-btn');
        if (legacySubmit) legacySubmit.remove();

        let batchButton = document.getElementById('reading-short-batch-submit');
        if (!batchButton) {
            batchButton = document.createElement('button');
            batchButton.id = 'reading-short-batch-submit';
            batchButton.className = 'submit-btn reading-short-batch-submit';
            batchButton.type = 'button';
            batchButton.textContent = '判定答案';
            batchButton.hidden = true;
            navigation.appendChild(batchButton);
        }

        function isDesktopFlow() {
            return window.matchMedia('(min-width: 761px)').matches;
        }

        let mobilePage = Math.max(1, pages.findIndex((page) => page.classList.contains('active')) + 1);

        function renderMobilePage(pageNumber, shouldScroll) {
            mobilePage = Math.min(pages.length, Math.max(1, Number(pageNumber) || 1));
            window.currentPage = mobilePage;
            if (!isDesktopFlow()) {
                pages.forEach((page, index) => {
                    const active = index === mobilePage - 1;
                    page.style.display = active ? 'block' : 'none';
                    page.classList.toggle('active', active);
                });
                if (shouldScroll) pages[mobilePage - 1].scrollIntoView({ block: 'start', behavior: 'smooth' });
            } else {
                pages.forEach((page) => page.style.removeProperty('display'));
            }
            if (prevButton) {
                prevButton.disabled = mobilePage === 1;
                prevButton.classList.toggle('disabled', mobilePage === 1);
            }
            if (nextButton) {
                nextButton.disabled = mobilePage === pages.length;
                nextButton.classList.toggle('disabled', mobilePage === pages.length);
            }
        }

        window.showPage = (pageNumber) => renderMobilePage(pageNumber, false);
        window.prevPage = () => renderMobilePage(mobilePage - 1, true);
        window.nextPage = () => renderMobilePage(mobilePage + 1, true);
        window.toggleOption = () => {};
        window.submitCurrentStudyPage = () => {};

        if (prevButton) {
            prevButton.removeAttribute('onclick');
            prevButton.addEventListener('click', (event) => {
                event.preventDefault();
                renderMobilePage(mobilePage - 1, true);
            });
        }
        if (nextButton) {
            nextButton.removeAttribute('onclick');
            nextButton.addEventListener('click', (event) => {
                event.preventDefault();
                renderMobilePage(mobilePage + 1, true);
            });
        }

        function questionsForPage(page) {
            return Array.from(page.querySelectorAll('.qa-section[data-q-id], .question-card, .qcard'));
        }

        function allQuestions() {
            return pages.flatMap(questionsForPage);
        }

        function optionsForQuestion(question) {
            return Array.from(question.querySelectorAll(':scope > .option-item, .options-group > .option-label, .options > .option'));
        }

        function selectedOption(question) {
            return question.querySelector('.option-item.selected, .option-label.selected, .option.selected')
                || Array.from(question.querySelectorAll('input[type="radio"]:checked'))
                    .map((input) => input.closest('.option-label, .option-item, .option'))[0]
                || null;
        }

        function correctOption(question) {
            return question.querySelector([
                '[data-reading-answer="correct"]',
                '.option-item.is-correct',
                '.option-label.is-correct',
                '.option.is-correct',
                '.reading-option-correct'
            ].join(','));
        }

        function allAnswered() {
            const questions = allQuestions();
            return questions.length > 0 && questions.every((question) => Boolean(selectedOption(question)));
        }

        function syncBatchButton() {
            if (!isDesktopFlow()) {
                batchButton.hidden = true;
                return;
            }
            const complete = allAnswered();
            batchButton.hidden = !complete;
            batchButton.disabled = !complete;
            navigation.classList.toggle('is-ready', complete);
        }

        /* Desktop short reading is a new, self-contained paper flow.  Intercept
           the legacy inline handler before it can change currentPage, clear
           another answer or scroll to the top.  Mobile intentionally keeps the
           original one-passage navigation. */
        document.addEventListener('click', (event) => {
            const option = event.target.closest([
                '.reading-short-paper-flow .qa-section[data-q-id] .option-item',
                '.reading-short-paper-flow .question-card .option-label',
                '.reading-short-paper-flow .qcard .option'
            ].join(','));
            if (!option) return;
            event.preventDefault();
            event.stopImmediatePropagation();
            if (body.classList.contains('show-analysis')) {
                toggleStructuredOptionAnalysis(option);
                return;
            }

            const question = option.closest('.qa-section[data-q-id], .question-card, .qcard');
            optionsForQuestion(question).forEach((item) => {
                item.classList.remove('selected', 'answered-correct', 'answered-wrong', 'expanded');
                item.setAttribute('aria-checked', 'false');
                const input = item.querySelector('input[type="radio"]');
                if (input) input.checked = false;
            });
            option.classList.add('selected');
            option.setAttribute('aria-checked', 'true');
            const input = option.querySelector('input[type="radio"]');
            if (input) input.checked = true;
            question.dataset.answered = 'selected';
            syncBatchButton();
        }, true);

        document.addEventListener('keydown', (event) => {
            if (!body.classList.contains('show-analysis') || !['Enter', ' '].includes(event.key)) return;
            const option = event.target.closest('.reading-short-paper-flow .reading-structured-option');
            if (!option) return;
            event.preventDefault();
            toggleStructuredOptionAnalysis(option);
        }, true);

        batchButton.addEventListener('click', () => {
            if (!allAnswered()) return;
            const questions = allQuestions();
            questions.forEach((question) => {
                const selected = selectedOption(question);
                const correct = correctOption(question);
                question.dataset.answered = 'true';
                if (selected) selected.classList.add(selected === correct ? 'answered-correct' : 'answered-wrong');
                if (correct) correct.classList.add('answered-correct');
                question.classList.add('reviewed');
                question.querySelector('.options-group, .options')?.classList.add('reviewed');
                question.querySelectorAll('input[type="radio"]').forEach((input) => { input.disabled = true; });
            });
            body.classList.add('show-analysis', 'reading-paper-submitted');
            document.querySelectorAll('.reading-cloze-explanation, .explanation-box, .exp').forEach(highlightQuotedEvidence);
            highlightCorrectAnswerEvidence();
            batchButton.hidden = true;
            navigation.classList.remove('is-ready');
            showResultForQuestions(questions);
        });

        window.addEventListener('resize', syncBatchButton, { passive: true });
        window.addEventListener('resize', () => renderMobilePage(mobilePage, false), { passive: true });
        document.addEventListener('change', () => window.setTimeout(syncBatchButton, 0));
        renderMobilePage(mobilePage, false);
        syncBatchButton();
    }

    function setupMediumPagedFlow() {
        if (type !== '/m/') return;
        body.classList.add('reading-medium-paper-flow');
        body.classList.remove('recorder-collapsed', 'recorder-expanded', 'recorder-summary-expanded');

        document.querySelectorAll([
            '.quick-nav-widget',
            '.quick-nav',
            '.sentence-recorder-bar',
            '#sentenceRecorderBar',
            '.reading-medium-audio',
            '.audio-wrapper'
        ].join(',')).forEach((node) => node.remove());

        const pages = Array.from(document.querySelectorAll('.page-content, .page-container'));
        if (!pages.length) return;

        let navigation = document.querySelector('.article-navigation');
        if (!navigation) {
            navigation = document.createElement('div');
            navigation.className = 'article-navigation';
            const stage = pages[0].parentElement;
            (stage || document.body).appendChild(navigation);
        }

        pages.forEach((page) => {
            page.querySelectorAll('.action-bar, .page-nav, .page-navigation-bar').forEach((node) => node.remove());
        });

        navigation.classList.add('reading-medium-navigation');
        let prevButton = navigation.querySelector('#prev-btn');
        let nextButton = navigation.querySelector('#next-btn');
        if (!prevButton) {
            prevButton = document.createElement('button');
            prevButton.id = 'prev-btn';
            prevButton.type = 'button';
            prevButton.className = 'nav-btn';
            prevButton.textContent = '← 上一篇';
            navigation.prepend(prevButton);
        }
        if (!nextButton) {
            nextButton = document.createElement('button');
            nextButton.id = 'next-btn';
            nextButton.type = 'button';
            nextButton.className = 'nav-btn';
            nextButton.textContent = '下一篇 →';
            navigation.appendChild(nextButton);
        }
        const oldSubmit = navigation.querySelector('#study-submit-btn');
        if (oldSubmit) oldSubmit.remove();

        const submitButton = document.createElement('button');
        submitButton.id = 'reading-medium-batch-submit';
        submitButton.className = 'submit-btn reading-medium-batch-submit';
        submitButton.type = 'button';
        submitButton.textContent = '判定答案';
        submitButton.hidden = true;
        navigation.appendChild(submitButton);

        let currentPageNumber = Math.max(1, pages.findIndex((page) => page.classList.contains('active')) + 1);

        const answerData = window.__readingAnswerData || null;
        pages.forEach((page) => {
            page.querySelectorAll('.qa-section[data-q-id], .question-card, .qcard').forEach((question) => {
                const firstInput = question.querySelector('input[type="radio"]');
                const questionId = firstInput && firstInput.name ? firstInput.name.replace(/^q/, '') : question.dataset.qId;
                if (questionId && !question.dataset.qId) question.dataset.qId = questionId;
                const record = answerData && questionId ? answerData[questionId] : null;
                if (!record) return;

                question.querySelectorAll('.option-label, .option').forEach((option) => {
                    const input = option.querySelector('input[type="radio"]');
                    option.classList.toggle('is-correct', Boolean(input && String(input.value) === String(record.correct)));
                });

                const keySentence = question.querySelector('.ks-text, .kstext');
                const explanation = question.querySelector('.explanation-content, .exp-content');
                if (keySentence && record.keySentence) keySentence.textContent = record.keySentence;
                if (explanation && record.explanation) explanation.textContent = record.explanation;
                question.querySelectorAll('.option-label, .option').forEach((option) => {
                    const input = option.querySelector('input[type="radio"]');
                    const detail = option.querySelector('.option-detail-analysis, .detail');
                    if (input && detail && record.optAnalysis && record.optAnalysis[input.value]) {
                        detail.textContent = record.optAnalysis[input.value];
                    }
                });
            });
        });

        function allQuestions() {
            return pages.flatMap((page) => Array.from(page.querySelectorAll('.qa-section[data-q-id], .question-card, .qcard')));
        }

        function allAnswered() {
            const questions = allQuestions();
            return questions.length > 0 && questions.every((question) => question.querySelector('.option-item.selected, .option-label.selected, .option.selected'));
        }

        function syncControls() {
            if (prevButton) {
                prevButton.disabled = currentPageNumber === 1;
                prevButton.classList.toggle('disabled', currentPageNumber === 1);
            }
            if (nextButton) {
                nextButton.disabled = currentPageNumber === pages.length;
                nextButton.classList.toggle('disabled', currentPageNumber === pages.length);
            }
            const complete = allAnswered();
            submitButton.hidden = !complete || body.classList.contains('show-analysis');
            submitButton.disabled = !complete;
        }

        function renderPage(pageNumber, shouldScroll) {
            currentPageNumber = Math.min(pages.length, Math.max(1, Number(pageNumber) || 1));
            window.currentPage = currentPageNumber;
            pages.forEach((page, index) => {
                const active = index === currentPageNumber - 1;
                page.style.display = active ? 'block' : 'none';
                page.classList.toggle('active', active);
            });
            if (shouldScroll) pages[currentPageNumber - 1].scrollIntoView({ block: 'start', behavior: 'smooth' });
            syncControls();
        }

        window.showPage = (pageNumber) => renderPage(pageNumber, false);
        window.prevPage = () => renderPage(currentPageNumber - 1, true);
        window.nextPage = () => renderPage(currentPageNumber + 1, true);
        window.toggleOption = () => {};
        window.submitCurrentStudyPage = () => {};

        if (prevButton) {
            prevButton.removeAttribute('onclick');
            prevButton.addEventListener('click', (event) => {
                event.preventDefault();
                renderPage(currentPageNumber - 1, true);
            });
        }
        if (nextButton) {
            nextButton.removeAttribute('onclick');
            nextButton.addEventListener('click', (event) => {
                event.preventDefault();
                renderPage(currentPageNumber + 1, true);
            });
        }

        document.addEventListener('click', (event) => {
            const option = event.target.closest([
                '.page-content .qa-section[data-q-id] .option-item',
                '.page-container .question-card .option-label',
                '.page-container .qcard .option'
            ].join(','));
            if (!option) return;
            event.preventDefault();
            event.stopImmediatePropagation();
            if (body.classList.contains('show-analysis')) {
                /* This handler is registered before the shared analysis
                   delegation and therefore owns medium-reading option clicks.
                   Once submitted, reuse the same one-open-at-a-time drawer
                   behavior as short reading instead of swallowing the click. */
                toggleStructuredOptionAnalysis(option);
                return;
            }

            const question = option.closest('.qa-section[data-q-id], .question-card, .qcard');
            question.querySelectorAll('.option-item, .option-label, .option').forEach((item) => {
                item.classList.remove('selected', 'answered-correct', 'answered-wrong', 'expanded');
                item.setAttribute('aria-checked', 'false');
                const radio = item.querySelector('input[type="radio"]');
                if (radio) radio.checked = false;
            });
            option.classList.add('selected');
            option.setAttribute('aria-checked', 'true');
            const selectedRadio = option.querySelector('input[type="radio"]');
            if (selectedRadio) selectedRadio.checked = true;
            question.dataset.answered = 'selected';
            syncControls();
        }, true);

        submitButton.addEventListener('click', () => {
            if (!allAnswered()) return;
            const questions = allQuestions();
            questions.forEach((question) => {
                const selected = question.querySelector('.option-item.selected, .option-label.selected, .option.selected');
                const correct = question.querySelector('.option-item.is-correct, .option-label.is-correct, .option.is-correct');
                question.dataset.answered = 'true';
                if (selected) selected.classList.add(selected === correct ? 'answered-correct' : 'answered-wrong');
                if (correct) correct.classList.add('answered-correct');
            });
            body.classList.add('show-analysis', 'reading-paper-submitted');
            document.querySelectorAll('.reading-cloze-explanation, .explanation-box, .exp').forEach(highlightQuotedEvidence);
            highlightCorrectAnswerEvidence();
            syncControls();
            showResultForQuestions(questions);
        });

        renderPage(currentPageNumber, false);
    }

    const categoryPracticeScope = applyCategoryPracticeScope();
    if (isCategoryPractice && !categoryPracticeScope) {
        console.warn('Unable to resolve the selected reading category; the page was left unchanged.');
    }

    loadUnifiedReadingHeader();
    window.addEventListener('kiki-unified-header:ready', syncPracticeHeaderActions);
    normalizeLayout();
    normalizeArticleTranslations();
    setupExamPaperFootnotes();
    loadReadingAnnotationTools();
    readingResultTiming.start();
    document.querySelectorAll('.reading-cloze-explanation, .explanation-box, .exp').forEach(highlightQuotedEvidence);
    setupShortDesktopFlow();
    setupMediumPagedFlow();
    setupUnifiedAnalysisInteractions();
    setupAnalysisSourceJumps();
    setupEvidenceJumpInteractions();
    window.addEventListener('load', () => {
        window.setTimeout(() => {
            loadReadingPracticeTools();
            syncPracticeHeaderActions();
        }, 0);
    }, { once: true });
})();
