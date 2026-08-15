(function () {
    const directoryScriptUrl = document.currentScript && document.currentScript.src
        ? document.currentScript.src
        : window.location.href;
    const TYPE_CONFIG = {
        'task-comprehension': {
            ja: '課題理解',
            zh: '任务理解',
            categoryType: 'task_comprehension',
            years: {
                N1: standardSessions(2010, 2020, (year) => `years/n1_${year}.html`, { noJuly: [2020] }),
                N2: standardSessions(2010, 2020, (year) => `years/${year}.html`, { noJuly: [2020] }),
                N3: []
            }
        },
        'point-comprehension': {
            ja: 'ポイント理解',
            zh: '重点理解',
            categoryType: 'point_comprehension',
            years: {
                N1: standardSessions(2010, 2021, (year) => `years/${year}.html`, { noJuly: [2020] }),
                N2: standardSessions(2010, 2020, (year) => `years/${year}.html`, { noJuly: [2020] }),
                N3: []
            }
        },
        'summary-comprehension': {
            ja: '概要理解',
            zh: '概要理解',
            categoryType: 'overview_comprehension',
            progressTypes: ['summary-comprehension', 'overview-comprehension'],
            years: {
                N1: sessionFileYears(2010, 2019, (year, month) => `years/${year}.${month === 7 ? '7' : '12'}.html`)
                    .concat(session(`${2020}-12`, 'years/2020.12.html'))
                    .concat(session(`${2021}-07`, 'years/2021.7.html')),
                N2: standardSessions(2010, 2020, (year) => `years/${year}.html`, { noJuly: [2020] }),
                N3: []
            }
        },
        'immediate-response': {
            ja: '即時応答',
            zh: '即时应答',
            categoryType: 'immediate_response',
            years: {
                N1: standardSessions(2010, 2020, (year) => `years/n1_${year}.html`, { noJuly: [2020] }),
                N2: standardSessions(2010, 2020, (year) => `years/j_${year}.html`, { noJuly: [2020] }),
                N3: [2010, 2018, 2019, 2020, 2021, 2022].flatMap((year) => [7, 12].map((month) => session(`${year}-${pad(month)}`, `years/n3_${year}.html`)))
            }
        },
        'integrated-comprehension': {
            ja: '総合理解',
            zh: '综合理解',
            categoryType: 'integrated_comprehension',
            years: {
                N1: [],
                N2: sessionFileYears(2010, 2019, (year, month) => `years/${year}.${month === 7 ? '7' : '12'}.html`)
                    .concat(session(`${2020}-12`, 'years/2020.12.html')),
                N3: []
            }
        }
    };

    function pad(value) {
        return String(value).padStart(2, '0');
    }

    function session(key, href) {
        const match = String(key).match(/^(\d{4})-(\d{2})$/);
        return {
            key,
            year: match ? Number(match[1]) : 0,
            month: match ? Number(match[2]) : 0,
            href: `${href}${href.includes('?') ? '&' : '?'}year=${key}`
        };
    }

    function standardSessions(startYear, endYear, fileForYear, options = {}) {
        const noJuly = new Set(options.noJuly || []);
        const result = [];
        for (let year = startYear; year <= endYear; year += 1) {
            [7, 12].forEach((month) => {
                if (month === 7 && noJuly.has(year)) return;
                result.push(session(`${year}-${pad(month)}`, fileForYear(year)));
            });
        }
        return result;
    }

    function sessionFileYears(startYear, endYear, fileForSession) {
        const result = [];
        for (let year = startYear; year <= endYear; year += 1) {
            [7, 12].forEach((month) => result.push(session(`${year}-${pad(month)}`, fileForSession(year, month))));
        }
        return result;
    }

    function getRouteContext() {
        const parts = window.location.pathname.split('/').filter(Boolean);
        const levelIndex = parts.findIndex((part) => /^n[123]$/i.test(part));
        const level = levelIndex >= 0 ? parts[levelIndex].toUpperCase() : 'N1';
        const type = levelIndex > 0 ? parts[levelIndex - 1] : 'task-comprehension';
        return { type, level };
    }

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    const context = getRouteContext();
    const config = TYPE_CONFIG[context.type] || TYPE_CONFIG['task-comprehension'];
    let currentView = 'main';
    let pendingYearEntry = null;
    let selectedTrainingMode = localStorage.getItem('listening_training_mode') === 'challenge'
        ? 'challenge'
        : 'study';

    function getSessions() {
        return Array.isArray(config.years[context.level]) ? config.years[context.level] : [];
    }

    function progressTypes() {
        return Array.from(new Set([context.type].concat(config.progressTypes || [])));
    }

    function getLastPractice() {
        if (!window.ListeningProgress) return '';
        for (const type of progressTypes()) {
            const value = window.ListeningProgress.getLastPractice(type, context.level.toLowerCase());
            if (value) return value;
        }
        return '';
    }

    function getMistakeIds(examKey) {
        if (!window.ListeningProgress) return [];
        for (const type of progressTypes()) {
            const values = window.ListeningProgress.getMistakeIds(type, context.level.toLowerCase(), examKey);
            if (Array.isArray(values) && values.length) return values;
        }
        return [];
    }

    function getPool() {
        if (!window.ListeningQuestionPools) return [];
        return window.ListeningQuestionPools.getPool(config.categoryType, context.level) || [];
    }

    function getQuestionCount(examKey) {
        return getPool().filter((question) => {
            const source = window.ListeningProgress && window.ListeningProgress.normalizeExamKey
                ? window.ListeningProgress.normalizeExamKey(question.sourceExamKey)
                : String(question.sourceExamKey || '');
            return source === examKey;
        }).length;
    }

    function renderShell() {
        document.title = `${context.level} ${config.ja}｜聴解特訓`;
        document.body.innerHTML = `
            <header class="sort-page-header">
                <a href="../../index.html" id="listening-page-back" class="grammar-back-link back-btn" data-kiki-dynamic-back aria-label="聴解メニューへ戻る">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    <span id="listening-back-copy">聴解メニューへ戻る</span>
                </a>
                <h1 id="listening-header-title" class="sort-page-header-title">${context.level} 聴解特訓</h1>
                <div class="header-right-slot">
                    <button id="listening-mistake-button" type="button" class="header-mistake-center-btn">
                        <span>誤答ノート</span><strong id="listening-mistake-count">0</strong>
                    </button>
                </div>
            </header>
            <main class="page-shell">
                <div class="grammar-app-main">
                    ${renderMainView()}
                    ${renderYearView()}
                    ${renderCategoryView()}
                    ${renderMistakeView()}
                </div>
            </main>
            ${renderCategoryModal()}
            ${renderRandomModal()}
            ${renderTrainingModeModal()}
        `;
    }

    function renderHero(view) {
        const lines = {
            main: '选择今天想要进行的听力练习吧，kiki。',
            year: `选一套${config.zh}真题，把声音里的线索按顺序抓住吧，kiki。`,
            category: `选一个${config.zh}场景，集中辨清容易漏掉的信息吧，kiki。`
        };
        return `
            <section class="grammar-character-hero" aria-label="听力练习引导">
                <div class="grammar-character-figure listening-character-figure">
                    <img src="../../../../assets/listening/music-duo-private-upper-body-v6.png" alt="听力搭档枫与一二三的半身像">
                </div>
                <div class="grammar-character-speech">
                    <p class="grammar-character-name">一二三 × 枫 · 聴解ナビ</p>
                    <h2>${escapeHtml(lines[view])}</h2>
                    ${view === 'main' ? '<button id="listening-resume-button" type="button" class="grammar-resume-line" hidden><span><strong>继续练习</strong>　<span id="listening-resume-copy"></span></span><span>继续 →</span></button>' : ''}
                </div>
            </section>
        `;
    }

    function levelTabs(attribute) {
        return `
            <div class="grammar-level-tabs grammar-main-level-tabs" aria-label="切换练习等级">
                ${['N1', 'N2', 'N3'].map((level) => `<button type="button" ${attribute}="${level}" class="${level === context.level ? 'is-active' : ''}" aria-current="${level === context.level ? 'true' : 'false'}">${level}</button>`).join('')}
            </div>
        `;
    }

    function renderMainView() {
        return `
            <div id="listening-view-main" class="view-section active selection-view-shell grammar-directory-view">
                ${renderHero('main')}
                <div class="grammar-section-title"><h2>${escapeHtml(config.ja)} · 练习目录</h2>${levelTabs('data-main-level')}</div>
                <section class="grammar-practice-entry" aria-label="主要练习入口">
                    <nav class="grammar-primary-routes">
                        <button type="button" class="grammar-primary-route is-year" data-open-view="year">
                            <span class="grammar-primary-route__index">01</span>
                            <span class="grammar-primary-route__copy"><strong>年度练习</strong><small>按考试年份完成真题</small></span>
                            <span class="grammar-primary-route__arrow">›</span>
                        </button>
                        <button type="button" class="grammar-primary-route is-category" data-open-view="category">
                            <span class="grammar-primary-route__index">02</span>
                            <span class="grammar-primary-route__copy"><strong>分类练习</strong><small>按听力场景集中练习</small></span>
                            <span class="grammar-primary-route__arrow">›</span>
                        </button>
                    </nav>
                    <button type="button" class="grammar-random-entry" id="listening-random-open">
                        <span><strong>随机练习</strong><small>从当前级别随机抽题</small></span>
                        <span>开始随机小测　›</span>
                    </button>
                </section>
            </div>
        `;
    }

    function renderYearView() {
        return `
            <div id="listening-view-year" class="view-section selection-view-shell">
                ${renderHero('year')}
                <div class="grammar-section-title grammar-year-title">
                    <h2>${context.level} ${escapeHtml(config.ja)} · 年度真题</h2>
                    <button type="button" class="grammar-directory-back" data-return-main><span>‹</span>練習メニューへ戻る</button>
                </div>
                <div id="listening-year-list" class="exam-year-list"></div>
                <footer class="grammar-level-switcher grammar-year-level-switcher"><span>切换级别</span>${levelTabs('data-year-level')}</footer>
            </div>
        `;
    }

    function renderCategoryView() {
        return `
            <div id="listening-view-category" class="view-section selection-view-shell">
                ${renderHero('category')}
                <div class="grammar-section-title grammar-category-title">
                    <h2>${context.level} ${escapeHtml(config.ja)} · 分类练习</h2>
                    <button type="button" class="grammar-directory-back" data-return-main><span>‹</span>練習メニューへ戻る</button>
                </div>
                <section class="grammar-category-directory"><div id="listening-category-list" class="grammar-category-grid"></div></section>
                <footer class="grammar-level-switcher"><span>切换级别</span>${levelTabs('data-category-level')}</footer>
            </div>
        `;
    }

    function renderMistakeView() {
        return `
            <div id="listening-view-mistakes" class="view-section selection-view-shell mistake-center-view">
                <section class="mistake-mentor-strip" aria-label="听力错题复习建议">
                    <img src="../../../../assets/listening/music-duo-private-upper-body-v6.png" alt="听力搭档枫与一二三的半身像">
                    <div><span>一二三 × 枫 · 错题复习</span><h2>从漏听的地方重新开始，把声音里的线索补完整吧，kiki。</h2></div>
                </section>
                <div class="grammar-section-title mistake-center-title">
                    <h2>${context.level} ${escapeHtml(config.ja)} · 错题中心</h2>
                    ${levelTabs('data-mistake-level')}
                </div>
                <section class="mistake-overview-line">
                    <div><span>待复习</span><strong id="listening-mistake-total">0 题</strong></div>
                    <div><span>涉及真题</span><strong id="listening-mistake-exams">0 套</strong></div>
                    <div class="mistake-overview-weak"><span>复习方式</span><strong>按年份重新作答</strong></div>
                </section>
                <div id="listening-mistake-list" class="listening-mistake-list"></div>
            </div>
        `;
    }

    function renderCategoryModal() {
        return `
            <div id="listening-category-modal" class="listening-category-set-modal" hidden>
                <section class="listening-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="listening-category-modal-title">
                    <header class="listening-modal-header"><div><span class="listening-modal-kicker">分類練習</span><h2 id="listening-category-modal-title">选择练习组</h2></div><button type="button" class="listening-modal-close" data-close-modal aria-label="关闭">×</button></header>
                    <p id="listening-category-modal-summary" class="listening-set-summary"></p>
                    <div id="listening-category-set-list" class="listening-set-list"></div>
                </section>
            </div>
        `;
    }

    function renderRandomModal() {
        return `
            <div id="listening-random-modal" class="listening-random-modal" hidden>
                <section class="listening-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="listening-random-title">
                    <header class="listening-modal-header"><div><span class="listening-modal-kicker">RANDOM TEST</span><h2 id="listening-random-title">随机练习</h2></div><button type="button" class="listening-modal-close" data-close-modal aria-label="关闭">×</button></header>
                    <p class="listening-random-copy">选择抽题年份范围，系统会从当前级别的${escapeHtml(config.zh)}题目中随机生成测试。</p>
                    <div class="listening-random-fields">
                        <label class="listening-random-field">开始年份<select id="listening-random-from"></select></label>
                        <label class="listening-random-field">结束年份<select id="listening-random-to"></select></label>
                    </div>
                    <p id="listening-random-status" class="listening-set-summary"></p>
                    <div class="listening-modal-actions"><button type="button" class="listening-modal-action" data-close-modal>取消</button><button id="listening-random-start" type="button" class="listening-modal-action is-primary">开始测试</button></div>
                </section>
            </div>
        `;
    }

    function renderTrainingModeModal() {
        return `
            <div id="listening-training-mode-overlay" class="training-mode-overlay" hidden>
                <div class="training-mode-modal listening-training-mode-modal" role="dialog" aria-modal="true" aria-labelledby="listening-training-mode-title">
                    <header class="training-mode-header">
                        <img src="../../../../assets/listening/music-duo-private-upper-body-v6.png" alt="听力搭档枫与一二三的半身像">
                        <div>
                            <span>一二三 × 枫 · 练习建议</span>
                            <div id="listening-training-mode-title" class="training-mode-title">选择练习方式</div>
                            <div id="listening-training-mode-subtitle" class="training-mode-subtitle">请选择答题与批改方式。</div>
                        </div>
                    </header>
                    <div class="training-mode-grid">
                        <button type="button" class="training-mode-card" data-listening-training-mode="study">
                            <span class="training-mode-number">01</span>
                            <span><b class="training-mode-card-title">学习模式</b><small class="training-mode-card-copy">逐题作答，立即查看正误与解析</small></span>
                            <span class="training-mode-mark" aria-hidden="true"></span>
                        </button>
                        <button type="button" class="training-mode-card" data-listening-training-mode="challenge">
                            <span class="training-mode-number">02</span>
                            <span><b class="training-mode-card-title">测试模式</b><small class="training-mode-card-copy">连续播放，整套完成后统一批改</small></span>
                            <span class="training-mode-mark" aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="training-mode-actions">
                        <button type="button" id="listening-training-mode-cancel" class="training-mode-action">取消</button>
                        <button type="button" id="listening-training-mode-confirm" class="training-mode-action is-primary">开始</button>
                    </div>
                </div>
            </div>
        `;
    }

    function renderYears() {
        const container = document.getElementById('listening-year-list');
        const sessions = getSessions().slice().sort((left, right) => right.year - left.year || left.month - right.month);
        if (!sessions.length) {
            container.innerHTML = '<div class="listening-directory-empty">这个级别的年度真题仍在整理中。</div>';
            return;
        }
        const lastPractice = getLastPractice();
        const grouped = sessions.reduce((map, entry) => {
            if (!map.has(entry.year)) map.set(entry.year, []);
            map.get(entry.year).push(entry);
            return map;
        }, new Map());
        container.innerHTML = Array.from(grouped.entries()).map(([year, entries]) => `
            <section class="grammar-year-stage" aria-label="${year} 年真题">
                <header class="grammar-year-stage-header"><span class="grammar-year-stage-title"><strong>${year} 年</strong></span></header>
                <div class="grammar-year-sessions">
                    ${entries.map((entry) => {
                        const current = entry.key === lastPractice;
                        return `<button type="button" data-year-session-key="${escapeHtml(entry.key)}" class="exam-year-item grammar-year-session ${current ? 'is-current' : ''}"><span class="grammar-year-session-copy"><strong>${entry.month} 月</strong></span><span class="grammar-year-session-state">${current ? '继续 ›' : '进入 ›'}</span></button>`;
                    }).join('')}
                </div>
            </section>
        `).join('');
    }

    function renderCategories() {
        const container = document.getElementById('listening-category-list');
        if (!window.ListeningCategorySystem) {
            container.innerHTML = '<div class="listening-directory-empty">分类题库没有加载成功。</div>';
            return;
        }
        const categories = window.ListeningCategorySystem.getCategories(config.categoryType, context.level);
        if (!categories.length) {
            container.innerHTML = '<div class="listening-directory-empty">这个级别的分类题单仍在整理中。</div>';
            return;
        }
        container.innerHTML = categories.map((category, index) => `
            <button type="button" class="grammar-category-item" data-category-id="${escapeHtml(category.id)}" ${category.itemCount ? '' : 'disabled'}>
                <span class="grammar-category-item__number">${pad(index + 1)}</span>
                <b title="${escapeHtml(category.name)}">${escapeHtml(category.name)}</b>
                <em>${category.itemCount} 题</em><i>进入 ›</i>
            </button>
        `).join('');
    }

    function renderMistakes() {
        const rows = getSessions().map((entry) => ({ entry, ids: getMistakeIds(entry.key) })).filter((item) => item.ids.length);
        const total = rows.reduce((sum, item) => sum + item.ids.length, 0);
        document.getElementById('listening-mistake-count').textContent = String(total);
        document.getElementById('listening-mistake-total').textContent = `${total} 题`;
        document.getElementById('listening-mistake-exams').textContent = `${rows.length} 套`;
        const container = document.getElementById('listening-mistake-list');
        if (!rows.length) {
            container.innerHTML = '<div class="listening-directory-empty">目前没有待复习的错题。</div>';
            return;
        }
        container.innerHTML = rows.map((item, index) => {
            const href = `${item.entry.href}${item.entry.href.includes('?') ? '&' : '?'}mode=review`;
            return `<a href="${escapeHtml(href)}" class="listening-mistake-row"><span>${pad(index + 1)}</span><strong>${item.entry.year} 年 ${item.entry.month} 月</strong><small>${item.ids.length} 题待复习　›</small></a>`;
        }).join('');
    }

    function updateResume() {
        const button = document.getElementById('listening-resume-button');
        const copy = document.getElementById('listening-resume-copy');
        const last = getLastPractice();
        const target = getSessions().find((entry) => entry.key === last);
        button.hidden = !target;
        if (!target) return;
        copy.textContent = `${target.year}年${target.month}月 · ${config.ja}`;
        button.onclick = () => openTrainingMode(target);
    }

    function syncTrainingModeModal() {
        document.querySelectorAll('[data-listening-training-mode]').forEach((button) => {
            const active = button.dataset.listeningTrainingMode === selectedTrainingMode;
            button.classList.toggle('is-selected', active);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        const subtitle = document.getElementById('listening-training-mode-subtitle');
        if (subtitle && pendingYearEntry) {
            subtitle.textContent = `${pendingYearEntry.year} 年 ${pendingYearEntry.month} 月 · ${config.zh}`;
        }
    }

    function openTrainingMode(entry) {
        if (!entry) return;
        pendingYearEntry = entry;
        syncTrainingModeModal();
        document.getElementById('listening-training-mode-overlay').hidden = false;
    }

    function closeTrainingMode() {
        document.getElementById('listening-training-mode-overlay').hidden = true;
        pendingYearEntry = null;
    }

    function startPendingYearPractice() {
        if (!pendingYearEntry) return;
        localStorage.setItem('listening_training_mode', selectedTrainingMode);
        const url = new URL(pendingYearEntry.href, window.location.href);
        url.searchParams.set('mode', selectedTrainingMode);
        window.location.href = url.href;
    }

    function showView(view, updateUrl = true) {
        currentView = view;
        document.querySelectorAll('.view-section').forEach((section) => section.classList.remove('active'));
        const target = document.getElementById(`listening-view-${view}`);
        if (target) target.classList.add('active');
        const back = document.getElementById('listening-page-back');
        const backLabel = view === 'main' ? '聴解メニューへ戻る' : '練習メニューへ戻る';
        if (back) {
            back.href = view === 'main' ? '../../index.html' : './index.html';
            back.setAttribute('aria-label', backLabel);
            const legacyCopy = back.querySelector('#listening-back-copy');
            const unifiedCopy = back.querySelector('.kiki-unified-back-label');
            if (legacyCopy) legacyCopy.textContent = backLabel;
            if (unifiedCopy) unifiedCopy.textContent = backLabel;
        }
        document.getElementById('listening-mistake-button').hidden = view === 'mistakes';
        if (updateUrl) {
            const url = new URL(window.location.href);
            if (view === 'main') url.searchParams.delete('browse');
            else url.searchParams.set('browse', view);
            window.history.replaceState({}, '', `${url.pathname}${url.search}`);
        }
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    function switchLevel(level, view) {
        const url = new URL(`../${level.toLowerCase()}/index.html`, window.location.href);
        if (view && view !== 'main') url.searchParams.set('browse', view);
        window.location.href = url.href;
    }

    function openCategory(categoryId) {
        if (!window.ListeningCategorySystem) return;
        const category = window.ListeningCategorySystem.getCategory(config.categoryType, context.level, categoryId);
        if (!category) return;
        const stats = window.ListeningCategorySystem.getCategoryStats(config.categoryType, context.level, categoryId);
        const sets = window.ListeningCategorySystem.getCategorySets(config.categoryType, context.level, categoryId, 6);
        document.getElementById('listening-category-modal-title').textContent = category.name;
        document.getElementById('listening-category-modal-summary').textContent = `${stats.itemCount || 0} 题 · 共 ${sets.length} 组`;
        document.getElementById('listening-category-set-list').innerHTML = sets.map((set) => {
            const href = window.ListeningCategorySystem.buildCategoryPracticeUrl({ type: config.categoryType, level: context.level, categoryId, setNumber: set.setNumber });
            const state = set.completed ? '已完成' : (set.lastIndex >= 0 ? `上次第 ${set.lastIndex + 1} 题` : '未开始');
            return `<a href="${escapeHtml(href)}" class="listening-set-link"><strong>第 ${set.setNumber} 组</strong><small>${set.start}–${set.end} 题 · ${state}</small><span>进入 ›</span></a>`;
        }).join('') || '<div class="listening-directory-empty">暂无可用练习组。</div>';
        document.getElementById('listening-category-modal').hidden = false;
    }

    function prepareRandomModal() {
        const poolYears = window.ListeningQuestionPools ? window.ListeningQuestionPools.getAvailableYears(config.categoryType, context.level) : [];
        const years = Array.from(new Set((poolYears.length ? poolYears : getSessions().map((entry) => entry.year)).map(Number))).filter(Boolean).sort((a, b) => a - b);
        const from = document.getElementById('listening-random-from');
        const to = document.getElementById('listening-random-to');
        const options = years.map((year) => `<option value="${year}">${year} 年</option>`).join('');
        from.innerHTML = options;
        to.innerHTML = options;
        if (years.length) {
            from.value = String(years[0]);
            to.value = String(years[years.length - 1]);
        }
        document.getElementById('listening-random-start').disabled = !years.length;
        syncRandomStatus();
    }

    function syncRandomStatus() {
        const fromYear = Number(document.getElementById('listening-random-from').value);
        const toYear = Number(document.getElementById('listening-random-to').value);
        const count = window.ListeningQuestionPools && fromYear && toYear
            ? window.ListeningQuestionPools.countQuestionsInRange(config.categoryType, context.level, Math.min(fromYear, toYear), Math.max(fromYear, toYear))
            : 0;
        document.getElementById('listening-random-status').textContent = count ? `当前范围可抽取 ${count} 题。` : '当前级别暂无可用于随机测试的题目。';
    }

    function closeModals() {
        document.getElementById('listening-category-modal').hidden = true;
        document.getElementById('listening-random-modal').hidden = true;
        closeTrainingMode();
    }

    function bindEvents() {
        document.getElementById('listening-page-back').addEventListener('click', (event) => {
            if (currentView === 'main') return;
            event.preventDefault();
            showView('main');
        });
        document.querySelectorAll('[data-open-view]').forEach((button) => button.addEventListener('click', () => showView(button.dataset.openView)));
        document.querySelectorAll('[data-return-main]').forEach((button) => button.addEventListener('click', () => showView('main')));
        document.getElementById('listening-mistake-button').addEventListener('click', () => showView('mistakes'));
        document.querySelectorAll('[data-main-level],[data-year-level],[data-category-level],[data-mistake-level]').forEach((button) => {
            button.addEventListener('click', () => switchLevel(button.textContent.trim(), currentView));
        });
        document.getElementById('listening-category-list').addEventListener('click', (event) => {
            const button = event.target.closest('[data-category-id]');
            if (button) openCategory(button.dataset.categoryId);
        });
        document.getElementById('listening-year-list').addEventListener('click', (event) => {
            const button = event.target.closest('[data-year-session-key]');
            if (!button) return;
            openTrainingMode(getSessions().find((entry) => entry.key === button.dataset.yearSessionKey));
        });
        document.getElementById('listening-random-open').addEventListener('click', () => {
            prepareRandomModal();
            document.getElementById('listening-random-modal').hidden = false;
        });
        document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeModals));
        document.getElementById('listening-category-modal').addEventListener('click', (event) => { if (event.target.id === 'listening-category-modal') closeModals(); });
        document.getElementById('listening-random-modal').addEventListener('click', (event) => { if (event.target.id === 'listening-random-modal') closeModals(); });
        document.getElementById('listening-random-from').addEventListener('change', syncRandomStatus);
        document.getElementById('listening-random-to').addEventListener('change', syncRandomStatus);
        document.getElementById('listening-random-start').addEventListener('click', () => {
            if (!window.ListeningRandomEntry) return;
            const fromYear = Number(document.getElementById('listening-random-from').value);
            const toYear = Number(document.getElementById('listening-random-to').value);
            window.location.href = window.ListeningRandomEntry.buildRandomExamHref(config.categoryType, context.level, Math.min(fromYear, toYear), Math.max(fromYear, toYear));
        });
        document.querySelectorAll('[data-listening-training-mode]').forEach((button) => {
            button.addEventListener('click', () => {
                selectedTrainingMode = button.dataset.listeningTrainingMode === 'challenge' ? 'challenge' : 'study';
                syncTrainingModeModal();
            });
        });
        document.getElementById('listening-training-mode-cancel').addEventListener('click', closeTrainingMode);
        document.getElementById('listening-training-mode-confirm').addEventListener('click', startPendingYearPractice);
        document.getElementById('listening-training-mode-overlay').addEventListener('click', (event) => {
            if (event.target.id === 'listening-training-mode-overlay') closeTrainingMode();
        });
        document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModals(); });
    }

    function ensureUnifiedHeader() {
        if (window.__kikiUnifiedHeaderLoaded || document.querySelector('[data-kiki-unified-header-loader]')) return;
        const loader = document.createElement('script');
        loader.src = new URL('../../../shared/unified-header.js?v=20260810-listening-white', directoryScriptUrl).href;
        loader.dataset.kikiUnifiedHeaderLoader = 'true';
        document.body.appendChild(loader);
    }

    renderShell();
    renderYears();
    renderCategories();
    renderMistakes();
    updateResume();
    bindEvents();
    const requestedView = new URLSearchParams(window.location.search).get('browse');
    showView(['year', 'category', 'mistakes'].includes(requestedView) ? requestedView : 'main', false);
    ensureUnifiedHeader();
})();
