(function () {
    const MENTOR_IMAGE = '../../../../assets/grammar/grammar-cloze-mentor-ono-full.webp';
    const startedAt = Date.now();

    function getLevel() {
        return String(document.body?.dataset?.readingHighlightLevel || '').toUpperCase()
            || (location.pathname.match(/\/(n\d)\//i)?.[1] || 'N1').toUpperCase();
    }

    function getSession() {
        const id = decodeURIComponent((location.pathname.split('/').pop() || '').replace(/\.html$/, ''));
        const match = id.match(/^(\d{4})\.(\d{1,2})$/);
        return match ? `${match[1]}年${Number(match[2])}月` : id;
    }

    function escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function formatClock(seconds) {
        const safe = Math.max(0, Math.floor(Number(seconds) || 0));
        return `${String(Math.floor(safe / 60)).padStart(2, '0')}:${String(safe % 60).padStart(2, '0')}`;
    }

    function getElapsedText() {
        if (window.ClozeStudyTimer && typeof window.ClozeStudyTimer.getElapsedText === 'function') {
            return window.ClozeStudyTimer.getElapsedText();
        }
        return formatClock((Date.now() - startedAt) / 1000);
    }

    function getDirectoryUrl(kind = '') {
        const level = getLevel();
        const base = new URL('../index.html', location.href);
        base.searchParams.set('level', level);
        const params = new URLSearchParams(location.search);
        const requestedKind = kind || (params.get('mode') === 'review' ? 'mistakes' : params.get('from'));
        if (requestedKind === 'years' || requestedKind === 'mistakes') base.searchParams.set('browse', requestedKind);
        return base.href;
    }

    function getMistakeStorageKey() {
        const fileId = decodeURIComponent((location.pathname.split('/').pop() || '').replace(/\.html$/, ''));
        return `grammar_cloze_mistakes::${getLevel()}::${fileId}`;
    }

    function readMistakes() {
        try {
            const value = JSON.parse(localStorage.getItem(getMistakeStorageKey()) || '[]');
            return Array.isArray(value) ? value.filter(Boolean) : [];
        } catch (error) {
            return [];
        }
    }

    function writeMistakes(ids) {
        localStorage.setItem(getMistakeStorageKey(), JSON.stringify(Array.from(new Set(ids.filter(Boolean)))));
    }

    function syncMistakes(rows) {
        const active = new Set(readMistakes());
        rows.forEach(row => row.correct ? active.delete(row.question.id) : active.add(row.question.id));
        writeMistakes([...active]);
    }

    function normalizeLegacyMarkup() {
        document.body.classList.add('grammar-app', 'cloze-app', 'cloze-practice-page', 'cloze-modernized');
        if (!document.body.dataset.readingHighlightLevel) document.body.dataset.readingHighlightLevel = getLevel();

        const header = document.querySelector('body > .page-header');
        if (header) {
            header.classList.add('top-bar');
            const back = header.querySelector('button');
            const title = header.querySelector('h1');
            const actions = header.querySelector(':scope > div:last-child');
            if (back && !back.id) back.id = 'page-back-btn';
            title?.classList.add('top-title');
            actions?.classList.add('top-actions', 'header-right-slot');
        }

        const articleTitle = document.getElementById('article-title');
        articleTitle?.classList.remove('hidden');
        const embeddedTitle = document.querySelector('#passage-container h3');
        if (articleTitle && embeddedTitle
            && embeddedTitle.textContent.trim() === articleTitle.textContent.trim()) {
            embeddedTitle.remove();
        }
        document.querySelectorAll('#questions-container > div').forEach(block => block.classList.add('question-block'));
    }

    function renderReviewNotice() {
        const params = new URLSearchParams(location.search);
        if (params.get('mode') !== 'review' || document.getElementById('cloze-review-notice')) return;
        const shell = document.querySelector('.page-shell');
        if (!shell) return;
        const count = readMistakes().length;
        const notice = document.createElement('aside');
        notice.id = 'cloze-review-notice';
        notice.className = 'cloze-review-notice';
        notice.innerHTML = count
            ? `<strong>错题复习</strong><span>当前文章还有 ${count} 个空位需要复习，答对后会自动移出错题记录。</span>`
            : '<strong>错题复习</strong><span>当前文章暂无待复习错题，可以重新完成整篇练习。</span>';
        shell.prepend(notice);
    }

    function ensureReadingTools() {
        if (document.getElementById('cloze-reading-tools-script')) return;
        const ownScript = document.getElementById('cloze-practice-redesign-script');
        const base = ownScript?.src || location.href;
        const script = document.createElement('script');
        script.id = 'cloze-reading-tools-script';
        script.src = new URL('../../../jlpt-reading/shared/reading-tools.js', base).href;
        document.body.appendChild(script);
    }

    function updateUnifiedHeaderTitle() {
        const title = `${getLevel()} 完形填空`;
        const ownTitle = document.querySelector('.top-title');
        if (ownTitle) ownTitle.textContent = title;
        document.querySelectorAll('.kiki-unified-header-title').forEach(node => node.textContent = title);
    }

    function installBackNavigation() {
        const back = document.getElementById('page-back-btn');
        const params = new URLSearchParams(location.search);
        const isReview = params.get('mode') === 'review';
        const from = isReview ? 'mistakes' : params.get('from');
        const label = from === 'mistakes' ? '返回错题中心' : (from === 'years' ? '返回年度目录' : '返回练习目录');
        const targetUrl = getDirectoryUrl(from);
        document.querySelectorAll('.kiki-unified-back-label').forEach(node => node.textContent = label);
        document.querySelectorAll('.kiki-unified-back-label-mobile').forEach(node => node.textContent = '返回');
        const unifiedBack = document.querySelector('.kiki-unified-back');
        if (unifiedBack) unifiedBack.href = targetUrl;
        if (!back || back.dataset.clozeBackReady === 'true') return;
        back.dataset.clozeBackReady = 'true';
        const textNode = [...back.childNodes].find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
        if (textNode) textNode.textContent = ` ${label}`;
        back.addEventListener('click', event => {
            event.preventDefault();
            event.stopImmediatePropagation();
            location.href = targetUrl;
        }, true);
    }

    function retireLegacyHeader(attempt = 0) {
        const legacyHeader = document.querySelector('body > .page-header.top-bar');
        if (!legacyHeader) return;
        const unifiedHeader = document.querySelector('.kiki-unified-header');
        const readingTimerReady = document.getElementById('timer-panel-toggle-btn');
        if (unifiedHeader && (readingTimerReady || attempt >= 60)) {
            legacyHeader.remove();
            return;
        }
        window.setTimeout(() => retireLegacyHeader(attempt + 1), 25);
    }

    function modernizeTimerUI(attempt = 0) {
        const timerButton = document.getElementById('timer-panel-toggle-btn');
        const timerLabel = timerButton?.querySelector('.timer-tool-label');
        const timerPanel = document.getElementById('timer-panel');
        if (!timerButton || !timerLabel || !timerPanel) {
            if (attempt < 60) window.setTimeout(() => modernizeTimerUI(attempt + 1), 25);
            return;
        }
        timerLabel.textContent = '用时';
        timerButton.setAttribute('aria-label', '用时与计时设置');
        timerPanel.classList.add('cloze-modern-timer-panel');
    }

    function splitExplanationHtml(source) {
        const marker = /<br\s*\/?>\s*<br\s*\/?>\s*<b>【错误选项分析】<\/b>\s*<br\s*\/?>/i;
        const parts = String(source || '').split(marker);
        return {
            primary: parts.shift() || '',
            alternatives: parts.join('<br>')
        };
    }

    function modernizeExplanationBlock(box) {
        if (!box || box.dataset.clozeExplanationModernized === 'true') return;
        const originalBody = box.querySelector(':scope > div > div:last-child');
        if (!originalBody) return;
        const { primary, alternatives } = splitExplanationHtml(originalBody.innerHTML);
        box.innerHTML = `
            <article class="cloze-explanation-card">
                <header class="cloze-explanation-heading">
                    <strong>解析</strong>
                </header>
                <div class="cloze-explanation-primary">${primary}</div>
                ${alternatives ? `
                    <section class="cloze-explanation-alternatives">
                        <h4>其他选项</h4>
                        <div>${alternatives}</div>
                    </section>` : ''}
            </article>`;
        box.dataset.clozeExplanationModernized = 'true';
    }

    function modernizeExplanationBlocks() {
        normalizeLegacyMarkup();
        document.querySelectorAll('.explanation-box').forEach(modernizeExplanationBlock);
    }

    function watchQuestionRendering() {
        const container = document.getElementById('questions-container');
        if (!container) return;
        modernizeExplanationBlocks();
        const observer = new MutationObserver(modernizeExplanationBlocks);
        observer.observe(container, { childList: true, subtree: true });
    }

    function buildMentorMarkup() {
        return `
            <div id="cloze-mentor-feedback" class="cloze-mentor-feedback is-thinking" role="status" aria-live="polite">
                <span class="cloze-ono-question-avatar" aria-hidden="true"><img src="${MENTOR_IMAGE}" alt=""></span>
                <div class="cloze-mentor-feedback__copy"><span>小野</span><p>「理清“场景”，最佳视角自然就会浮现。」</p></div>
            </div>`;
    }

    function buildPracticeContext() {
        const shell = document.querySelector('.page-shell');
        const articleCard = shell?.querySelector(':scope > .sketch-box:first-of-type');
        const articleTitle = document.getElementById('article-title');
        if (!shell || !articleCard || !articleTitle) return;

        if (!document.getElementById('cloze-practice-context')) {
            const context = document.createElement('header');
            context.id = 'cloze-practice-context';
            context.className = 'cloze-practice-context';
            const count = typeof clozeData !== 'undefined' && Array.isArray(clozeData.questions) ? clozeData.questions.length : 0;
            context.innerHTML = `
                <div><span class="cloze-practice-context__kicker">日本語能力試験 · ${getLevel()} · 年度练习</span><h1>[${getLevel()}] ${getSession()}</h1></div>
                <div class="cloze-practice-context__meta"><span>完形填空</span><strong>${count} 个空</strong></div>`;
            shell.insertBefore(context, articleCard);
        }

        if (!articleCard.querySelector('.cloze-article-heading')) {
            const heading = document.createElement('header');
            heading.className = 'cloze-article-heading';
            articleCard.insertBefore(heading, articleCard.firstChild);
            heading.appendChild(articleTitle);
            heading.insertAdjacentHTML('beforeend', buildMentorMarkup());
        }
    }

    function updateMentor(correct, total) {
        const mentor = document.getElementById('cloze-mentor-feedback');
        const copy = mentor?.querySelector('p');
        if (!mentor || !copy) return;
        mentor.classList.remove('is-thinking', 'is-correct', 'is-wrong');
        const isPerfect = correct === total;
        mentor.classList.add(isPerfect ? 'is-correct' : 'is-wrong');
        copy.textContent = isPerfect
            ? '「很好，你把整篇文章的关系都看清楚了。」'
            : '「有点可惜。别只看空格，回到前后句再确认一次吧。」';
    }

    function getResultData() {
        if (typeof clozeData === 'undefined' || typeof state === 'undefined' || !Array.isArray(clozeData.questions)) return null;
        const rows = clozeData.questions.map(question => {
            const selectedIndex = state.answers?.[question.id];
            const correct = selectedIndex === question.correctIndex;
            return {
                question,
                correct,
                selected: Number.isInteger(selectedIndex) ? question.options?.[selectedIndex] : '未作答',
                answer: question.options?.[question.correctIndex] || ''
            };
        });
        return { rows, correct: rows.filter(row => row.correct).length, total: rows.length };
    }

    function renderResultSummary() {
        const section = document.getElementById('result-section');
        if (!section || section.classList.contains('hidden') || section.dataset.clozeRedesigning === 'true') return;
        const data = getResultData();
        if (!data) return;
        syncMistakes(data.rows);
        section.dataset.clozeRedesigning = 'true';
        const wrongRows = data.rows.filter(row => !row.correct);
        const score = data.total ? Math.round(data.correct / data.total * 100) : 0;
        updateMentor(data.correct, data.total);
        document.getElementById('bottom-action-area')?.setAttribute('hidden', '');
        section.innerHTML = `
            <section class="grammar-result-sheet">
                <header class="grammar-result-heading"><span>RESULT</span><h2>本次练习总结</h2></header>
                <dl class="grammar-result-summary" aria-label="本次完形填空成绩摘要">
                    <div><dt>得分</dt><dd><strong>${score}</strong><span>/ 100</span></dd></div>
                    <div><dt>用时</dt><dd><strong>${getElapsedText()}</strong></dd></div>
                    <div><dt>正解</dt><dd><strong>${data.correct}</strong><span>/ ${data.total}</span></dd></div>
                    <div><dt>待复盘</dt><dd><strong>${wrongRows.length}</strong><span>个空</span></dd></div>
                </dl>
                <section class="grammar-result-review">
                    <header><h3>本次需要复盘的空位</h3><span>回到原文确认空格前后的篇章关系</span></header>
                    <div class="grammar-result-topic-list">
                        ${wrongRows.length ? wrongRows.map((row,index) => `
                            <article class="grammar-result-topic-row">
                                <span class="grammar-result-topic-number">${String(index+1).padStart(2,'0')}</span>
                                <div class="grammar-result-topic-copy"><strong>空位 ${row.question.blankNum}</strong><span>你的答案：${escapeHtml(row.selected)}　·　正确答案：${escapeHtml(row.answer)}</span></div>
                                <span class="grammar-result-topic-count">错 1 题</span>
                                <button type="button" class="grammar-result-topic-link" onclick="scrollToQuestion('${escapeHtml(row.question.id)}')">回看原文 →</button>
                            </article>`).join('') : '<div class="grammar-result-empty"><strong>本次没有需要复盘的空位</strong><span>所有答案均正确，可以继续挑战下一篇。</span></div>'}
                    </div>
                </section>
                <footer class="grammar-result-actions">
                    <button type="button" onclick="location.href='${getDirectoryUrl()}'">返回对应目录</button>
                    <button type="button" class="is-primary" onclick="location.reload()">再练一次</button>
                </footer>
            </section>`;
        section.dataset.clozeRedesigning = 'done';
    }

    function watchResult() {
        const section = document.getElementById('result-section');
        if (!section) return;
        const observer = new MutationObserver(() => {
            if (section.dataset.clozeRedesigning === 'done') return;
            window.setTimeout(renderResultSummary, 20);
        });
        observer.observe(section, { childList:true, attributes:true, attributeFilter:['class'] });
        document.getElementById('submit-btn')?.addEventListener('click', () => window.setTimeout(renderResultSummary, 40));
    }

    function init() {
        normalizeLegacyMarkup();
        updateUnifiedHeaderTitle();
        installBackNavigation();
        buildPracticeContext();
        renderReviewNotice();
        watchQuestionRendering();
        watchResult();
        modernizeTimerUI();
        retireLegacyHeader();
        window.setTimeout(ensureReadingTools, 0);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
    window.addEventListener('kiki-unified-header:ready', () => {
        updateUnifiedHeaderTitle();
        installBackNavigation();
        modernizeTimerUI();
        retireLegacyHeader();
    });
})();
