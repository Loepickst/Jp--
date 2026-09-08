(function initStudyPlan() {
    'use strict';

    const STORAGE_KEY = 'kikiStudyPlan_v1';
    const AVATAR_STORAGE_KEY = 'kikiStudyPlanAvatar_v1';
    const USER_PROFILE_CHANGED_EVENT = 'kiki-user-profile:changed';
    const STATE_VERSION = 1;
    const LEVEL_XP = 120;
    const DEFAULT_CHARACTER_NAME = 'kiki';
    const AVATAR_MAX_FILE_SIZE = 12 * 1024 * 1024;
    const AVATAR_OUTPUT_SIZE = 512;
    const TARGET_LEVELS = Object.freeze(['N1', 'N2']);
    const ADDABLE_TYPES = ['vocabulary', 'grammar', 'reading', 'listening'];
    const INSIGHT_TYPES = Object.freeze(['vocabulary', 'grammar', 'reading', 'listening']);
    const INSIGHT_COLORS = Object.freeze({
        vocabulary: Object.freeze({ color: '#b65355', soft: '#f8e8e7' }),
        grammar: Object.freeze({ color: '#b68a4a', soft: '#f4ebdc' }),
        reading: Object.freeze({ color: '#4f7d7b', soft: '#e5eeed' }),
        listening: Object.freeze({ color: '#587a98', soft: '#e8edf4' })
    });
    const root = document.querySelector('[data-study-plan-root]');

    const TRY_N1_TASK_CONTENTS = Object.freeze([
        'オクトーバーフェスト',
        '産業医を増やそう',
        '飯食わぬ女房',
        '上司との付き合い方',
        '転職',
        '研修を終えて',
        'さすが本田君',
        '楽園の萌花',
        'トリアージ',
        '前衛書道'
    ].map((title, index) => Object.freeze({
        id: `try-n1-lesson-${String(index + 1).padStart(2, '0')}`,
        title: `TRY！N1 第${index + 1}课 · ${title}`,
        chip: `语法 · TRY N1-${index + 1}`,
        url: `daily/try-n1/lesson-content-redesign.html?lesson=${index + 1}`
    })));

    const TRY_N2_TASK_CONTENTS = Object.freeze([
        'スタッフ募集のお知らせ',
        '転任のあいさつ',
        'ホテルの仕事',
        '台風情報',
        '就職活動',
        '苦労した5年間',
        'オオカミと生態系',
        '取引先で',
        '食べ放題',
        '満員電車',
        'ラーメンの紹介',
        'ウォーキングシューズの開発',
        '人生の転機',
        'オリンピックの開催について'
    ].map((title, index) => Object.freeze({
        id: `try-n2-lesson-${String(index + 1).padStart(2, '0')}`,
        title: `TRY！N2 第${index + 1}课 · ${title}`,
        chip: `语法 · TRY N2-${index + 1}`,
        url: `daily/try-n2/lesson-content-redesign.html?lesson=${index + 1}`
    })));

    const DAILY_GRAMMAR_TASK_CONTENTS = Object.freeze([
        { id: 'grammar-learning-word-classes', title: '语法学习 · 词汇分类', chip: '语法 · 分类', url: 'daily/grammar/foundation/word-classes.html' },
        { id: 'grammar-learning-verb-change', title: '语法学习 · 动词的活用', chip: '语法 · 活用', url: 'daily/grammar/foundation/change.html' },
        { id: 'grammar-learning-sentence-structure', title: '语法学习 · 语句构造', chip: '语法 · 构造', url: 'daily/grammar/expressions/sentence-structure.html' },
        { id: 'grammar-learning-particle-concept', title: '语法学习 · 助词概念', chip: '语法 · 概念', url: 'daily/grammar/particles/particle-concept.html' },
        { id: 'grammar-learning-case-particle', title: '语法学习 · 格助詞理解', chip: '语法 · 格助词', url: 'daily/grammar/particles/kakujyo.html' },
        { id: 'grammar-learning-adverbial-particle', title: '语法学习 · 副助詞理解', chip: '语法 · 副助词', url: 'daily/grammar/particles/fukujoshi.html' },
        { id: 'grammar-learning-parallel-particle', title: '语法学习 · 並列助詞理解', chip: '语法 · 并列', url: 'daily/grammar/particles/heiretsujoshi.html' },
        { id: 'grammar-learning-focus-particle', title: '语法学习 · 提示助詞理解', chip: '语法 · 提示', url: 'daily/grammar/particles/teijijyoshi.html' },
        { id: 'grammar-learning-connection-particle', title: '语法学习 · 接続助詞理解', chip: '语法 · 接续助词', url: 'daily/grammar/particles/setsuzokujoshi.html' },
        { id: 'grammar-learning-final-particle', title: '语法学习 · 終助詞理解', chip: '语法 · 终助词', url: 'daily/grammar/particles/shujoshi.html' },
        { id: 'grammar-learning-conjunction', title: '语法学习 · 接续词使用', chip: '语法 · 接续词', url: 'daily/grammar/expressions/conjunction.html' },
        { id: 'grammar-learning-compound-particle', title: '语法学习 · 复合格助词', chip: '语法 · 复合助词', url: 'daily/grammar/expressions/复合格助词.html' },
        { id: 'grammar-learning-keigo', title: '语法学习 · 敬語学習', chip: '语法 · 敬语', url: 'daily/grammar/expressions/敬语.html' },
        { id: 'grammar-learning-conditional', title: '语法学习 · 假定表达', chip: '语法 · 条件', url: 'daily/grammar/expressions/conditional-comparison.html' },
        { id: 'grammar-learning-formal-nouns', title: '语法学习 · 形式名词', chip: '语法 · 形式名词', url: 'daily/grammar/expressions/formal-nouns.html' },
        { id: 'grammar-learning-te-auxiliary', title: '语法学习 · 补助动词', chip: '语法 · 补助动词', url: 'daily/grammar/foundation/te-auxiliary.html' },
        { id: 'grammar-learning-appearance', title: '语法学习 · 样态表达', chip: '语法 · 样态', url: 'daily/grammar/expressions/appearance-expressions.html' },
        { id: 'grammar-learning-demonstratives', title: '语法学习 · 指示词', chip: '语法 · 指示词', url: 'daily/grammar/foundation/demonstratives.html' },
        { id: 'grammar-learning-affixes', title: '语法学习 · 接头接尾词', chip: '语法 · 接辞', url: 'daily/grammar/foundation/affixes.html' }
    ].map((content) => Object.freeze(content)));

    if (!root) {
        return;
    }

    const TYPE_DEFINITIONS = Object.freeze({
        vocabulary: Object.freeze({
            label: '词汇',
            shortLabel: '词汇',
            color: '#b65355',
            contents: Object.freeze([
                { id: 'n2-verbs', title: 'N2 核心动词', chip: '词汇 · 动词', url: 'exam/vocabulary/n2/verbs_n2.html' },
                { id: 'n2-adjectives', title: 'N2 核心形容词', chip: '词汇 · 形容词', url: 'exam/vocabulary/n2/adjectives_n2.html' },
                { id: 'n2-adverbs', title: 'N2 核心副词', chip: '词汇 · 副词', url: 'exam/vocabulary/n2/adverbs_n2.html' },
                { id: 'n1-verbs', title: 'N1 核心动词', chip: '词汇 · N1动词', url: 'exam/vocabulary/n1/verbs_n1.html' },
                { id: 'n1-adjectives', title: 'N1 核心形容词', chip: '词汇 · N1形容词', url: 'exam/vocabulary/n1/adjectives_n1.html' },
                { id: 'n1-adverbs', title: 'N1 核心副词', chip: '词汇 · N1副词', url: 'exam/vocabulary/n1/adverbs_n1.html' },
                { id: 'n1-loanwords', title: 'N1 外来语', chip: '词汇 · 外来语', url: 'exam/vocabulary/n1/loanwords_n1.html' },
                { id: 'n1-mimetic', title: 'N1 拟声拟态词', chip: '词汇 · 拟声词', url: 'exam/vocabulary/n1/mimetic_n1.html' }
            ])
        }),
        grammar: Object.freeze({
            label: '语法',
            shortLabel: '语法',
            color: '#b68a4a',
            contents: Object.freeze([
                ...TRY_N1_TASK_CONTENTS,
                ...TRY_N2_TASK_CONTENTS,
                ...DAILY_GRAMMAR_TASK_CONTENTS,
                { id: 'grammar-overview', title: 'JLPT 语法专项总览', chip: '语法 · 专项', url: 'index.html#exam/exam-grammar' },
                { id: 'grammar-form-n2', title: 'N2 文法形式判断', chip: '语法 · 形式', url: 'exam/grammar/grammar/index.html?level=N2' },
                { id: 'grammar-sort', title: 'JLPT 文法排序练习', chip: '语法 · 排序', url: 'exam/grammar/sort/index.html' },
                { id: 'grammar-cloze', title: 'JLPT 完形填空练习', chip: '语法 · 填空', url: 'exam/grammar/cloze/index.html' },
                { id: 'compound-particles', title: '复合格助词学习', chip: '语法 · 助词', url: 'daily/grammar/expressions/复合格助词.html' },
                { id: 'compound-particles-practice', title: '复合格助词练习', chip: '语法 · 助词练习', url: 'daily/grammar/expressions/复合格助词练习.html' }
            ])
        }),
        reading: Object.freeze({
            label: '阅读',
            shortLabel: '阅读',
            color: '#4f7d7b',
            contents: Object.freeze([
                { id: 'reading-overview', title: 'JLPT 阅读专项总览', chip: '阅读 · 总览', url: 'exam/jlpt-reading/index.html' },
                { id: 'reading-short-n2-2020-12', title: 'N2 短文理解 · 2020.12', chip: '阅读 · 短篇', url: 'exam/jlpt-reading/s/n2/2020.12.html' },
                { id: 'reading-middle-n2-2020-12', title: 'N2 中篇理解 · 2020.12', chip: '阅读 · 中篇', url: 'exam/jlpt-reading/m/n2/2020.12.html' },
                { id: 'reading-long-n2-2020-12', title: 'N2 长文理解 · 2020.12', chip: '阅读 · 长篇', url: 'exam/jlpt-reading/l/n2/2020.12.html' },
                { id: 'reading-short-n1-2020-12', title: 'N1 短文理解 · 2020.12', chip: '阅读 · N1短篇', url: 'exam/jlpt-reading/s/n1/2020.12.html' },
                { id: 'reading-middle-n1-2024-7', title: 'N1 中篇理解 · 2024.7', chip: '阅读 · N1中篇', url: 'exam/jlpt-reading/m/n1/2024.7.html' }
            ])
        }),
        listening: Object.freeze({
            label: '听力',
            shortLabel: '听力',
            color: '#587a98',
            contents: Object.freeze([
                { id: 'listening-overview', title: 'JLPT 听力专项总览', chip: '听力 · 总览', url: 'index.html#exam/exam-listening' },
                { id: 'listening-immediate-n1', title: 'N1 即时应答', chip: '听力 · N1应答', url: 'exam/listening/immediate-response/n1/index.html' },
                { id: 'listening-task-n1', title: 'N1 课题理解', chip: '听力 · N1课题', url: 'exam/listening/task-comprehension/n1/index.html' },
                { id: 'listening-point-n1', title: 'N1 要点理解', chip: '听力 · N1要点', url: 'exam/listening/point-comprehension/n1/index.html' },
                { id: 'listening-summary-n1', title: 'N1 概要理解', chip: '听力 · N1概要', url: 'exam/listening/summary-comprehension/n1/index.html' },
                { id: 'listening-integrated-n1', title: 'N1 综合理解', chip: '听力 · N1综合', url: 'exam/listening/integrated-comprehension/n1/index.html' },
                { id: 'listening-immediate-n2', title: 'N2 即时应答', chip: '听力 · 应答', url: 'exam/listening/immediate-response/n2/index.html' },
                { id: 'listening-task-n2', title: 'N2 课题理解', chip: '听力 · 课题', url: 'exam/listening/task-comprehension/n2/index.html' },
                { id: 'listening-point-n2', title: 'N2 要点理解', chip: '听力 · 要点', url: 'exam/listening/point-comprehension/n2/index.html' },
                { id: 'listening-summary-n2', title: 'N2 概要理解', chip: '听力 · 概要', url: 'exam/listening/summary-comprehension/n2/index.html' },
                { id: 'listening-integrated-n2', title: 'N2 综合理解', chip: '听力 · 综合', url: 'exam/listening/integrated-comprehension/n2/index.html' },
                { id: 'listening-full-n2', title: 'N2 听力整套练习', chip: '听力 · 整套', url: 'exam/listening/full-practice/index.html' }
            ])
        }),
        test: Object.freeze({
            label: '测验',
            shortLabel: '测验',
            color: '#756179',
            contents: Object.freeze([])
        })
    });

    const elements = {
        calendarTitle: root.querySelector('[data-calendar-title]'),
        calendarGrid: root.querySelector('[data-calendar-grid]'),
        calendarScroll: root.querySelector('[data-calendar-scroll]'),
        prevButton: root.querySelector('[data-calendar-prev]'),
        nextButton: root.querySelector('[data-calendar-next]'),
        todayButton: root.querySelector('[data-calendar-today]'),
        selectedDate: root.querySelector('[data-selected-date]'),
        taskList: root.querySelector('[data-day-task-list]'),
        taskSummary: root.querySelector('[data-day-task-summary]'),
        taskFormPanel: root.querySelector('[data-task-form-panel]'),
        taskForm: root.querySelector('[data-task-form]'),
        taskTypeOptions: root.querySelector('[data-task-type-options]'),
        taskContent: root.querySelector('[data-task-content]'),
        taskMinutes: root.querySelector('[data-task-minutes]'),
        saveTask: root.querySelector('[data-save-task]'),
        monthProgressCount: root.querySelector('[data-month-progress-count]'),
        monthProgressBar: root.querySelector('[data-month-progress-bar]'),
        examCountdown: root.querySelector('[data-exam-countdown]'),
        studyStreak: root.querySelector('[data-study-streak]'),
        mobileSummary: root.querySelector('.mobile-plan-summary'),
        mobilePlanDate: root.querySelector('[data-mobile-plan-date]'),
        mobileExamCountdown: root.querySelector('[data-mobile-exam-countdown]'),
        mobileMonthProgressCount: root.querySelector('[data-mobile-month-progress-count]'),
        mobileCharacterLevel: root.querySelector('[data-mobile-character-level]'),
        mobileStudyStreakSecondary: root.querySelector('[data-mobile-study-streak-secondary]'),
        mobileProgressRing: root.querySelector('[data-mobile-plan-progress-ring]'),
        mobileProgressCount: root.querySelector('[data-mobile-plan-progress-count]'),
        mobilePlanTitle: root.querySelector('[data-mobile-plan-title]'),
        mobileRemaining: root.querySelector('[data-mobile-plan-remaining]'),
        mobileStudyStreak: root.querySelector('[data-mobile-study-streak]'),
        mobileWeekTitle: root.querySelector('[data-mobile-plan-week-title]'),
        mobileWeekStrip: root.querySelector('[data-mobile-plan-week-strip]'),
        levelSelects: Array.from(root.querySelectorAll('[data-plan-level]')),
        targetLevelLabels: Array.from(root.querySelectorAll('[data-plan-target-label]')),
        dayTasksTitle: root.querySelector('[data-day-tasks-title]'),
        calendarToggleButtons: Array.from(root.querySelectorAll('[data-plan-calendar-toggle]')),
        characterLevel: root.querySelector('[data-character-level]'),
        characterXp: root.querySelector('[data-character-xp]'),
        characterNextXp: root.querySelector('[data-character-next-xp]'),
        characterXpBar: root.querySelector('[data-character-xp-bar]'),
        characterName: root.querySelector('[data-character-name]'),
        characterAvatar: root.querySelector('[data-character-avatar]'),
        characterAvatarChange: root.querySelector('[data-character-avatar-change]'),
        characterAvatarInput: root.querySelector('[data-character-avatar-input]'),
        characterAvatarReset: root.querySelector('[data-character-avatar-reset]'),
        dayPanel: root.querySelector('.day-panel'),
        planViewTabs: Array.from(root.querySelectorAll('[data-plan-view-tab]')),
        importOpen: root.querySelector('[data-plan-import-open]'),
        importDialog: root.querySelector('[data-plan-import-dialog]'),
        importClose: root.querySelector('[data-plan-import-close]'),
        importPreview: root.querySelector('[data-plan-import-preview]'),
        importConfirm: root.querySelector('[data-plan-import-confirm]'),
        importFootnote: root.querySelector('[data-plan-import-footnote]'),
        insightsView: root.querySelector('[data-plan-insights-view]'),
        insightCategories: root.querySelector('[data-plan-insight-categories]'),
        insightDetail: root.querySelector('[data-plan-insight-detail]'),
        insightDot: root.querySelector('[data-plan-insight-dot]'),
        insightTitle: root.querySelector('[data-plan-insight-title]'),
        insightTopicCount: root.querySelector('[data-plan-insight-topic-count]'),
        insightTopicList: root.querySelector('[data-plan-insight-topic-list]'),
        insightRecentList: root.querySelector('[data-plan-insight-recent-list]'),
        insightOverviewLink: root.querySelector('[data-plan-insight-overview-link]'),
        toast: root.querySelector('[data-plan-toast]')
    };

    if (!elements.calendarGrid || !elements.taskForm) {
        return;
    }

    function padNumber(value) {
        return String(value).padStart(2, '0');
    }

    function toDateKey(date) {
        return `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-${padNumber(date.getDate())}`;
    }

    function parseDateKey(value) {
        const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || ''));
        if (!match) return null;
        const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
        return Number.isNaN(date.getTime()) ? null : date;
    }

    function normalizeTargetLevel(value) {
        const normalized = String(value || '').toUpperCase();
        return TARGET_LEVELS.includes(normalized) ? normalized : 'N2';
    }

    function getContentTargetLevel(content) {
        if (!content) return null;
        const haystack = `${content.id || ''} ${content.title || ''} ${content.url || ''}`;
        const match = haystack.match(/(?:^|[^A-Z0-9])(N[12])(?:[^A-Z0-9]|$)/i);
        return match ? match[1].toUpperCase() : null;
    }

    function createChinaHolidaySchedule2026() {
        const schedule = {};

        function addHolidayRange(startKey, endKey, name) {
            const cursor = parseDateKey(startKey);
            const end = parseDateKey(endKey);
            if (!cursor || !end) return;
            while (cursor.getTime() <= end.getTime()) {
                schedule[toDateKey(cursor)] = Object.freeze({
                    name,
                    type: 'holiday',
                    badge: '休'
                });
                cursor.setDate(cursor.getDate() + 1);
            }
        }

        addHolidayRange('2026-01-01', '2026-01-03', '元旦');
        addHolidayRange('2026-02-15', '2026-02-23', '春节');
        addHolidayRange('2026-04-04', '2026-04-06', '清明节');
        addHolidayRange('2026-05-01', '2026-05-05', '劳动节');
        addHolidayRange('2026-06-19', '2026-06-21', '端午节');
        addHolidayRange('2026-09-25', '2026-09-27', '中秋节');
        addHolidayRange('2026-10-01', '2026-10-07', '国庆节');

        return Object.freeze(schedule);
    }

    const CHINA_HOLIDAY_SCHEDULE_2026 = createChinaHolidaySchedule2026();

    function getToday() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }

    function getContent(type, contentId) {
        const definition = TYPE_DEFINITIONS[type];
        if (!definition) return null;
        return definition.contents.find((entry) => entry.id === contentId) || null;
    }

    function normalizeCustomContent(value, type) {
        if (!value || typeof value !== 'object') return null;
        const title = String(value.title || '').trim();
        const url = String(value.url || '').trim();
        if (!title || !url || !ADDABLE_TYPES.includes(type)) return null;
        return {
            title,
            chip: String(value.chip || `${TYPE_DEFINITIONS[type].label} · 复习`).trim(),
            url
        };
    }

    function getTaskContent(task) {
        if (!task || typeof task !== 'object') return null;
        return normalizeCustomContent(task.content, task.type) || getContent(task.type, task.contentId);
    }

    function createDefaultTasks(referenceDate) {
        const year = referenceDate.getFullYear();
        const month = referenceDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const selectedDay = referenceDate.getDate();
        const specs = [
            [1, 'grammar', 'grammar-overview', 25],
            [3, 'reading', 'reading-short-n2-2020-12', 30],
            [4, 'vocabulary', 'n2-verbs', 25],
            [5, 'listening', 'listening-immediate-n2', 25],
            [6, 'grammar', 'grammar-form-n2', 25],
            [7, 'vocabulary', 'n2-adverbs', 20],
            [8, 'reading', 'reading-middle-n2-2020-12', 30],
            [10, 'vocabulary', 'n2-adjectives', 25],
            [11, 'grammar', 'compound-particles', 25],
            [12, 'listening', 'listening-summary-n2', 30],
            [13, 'reading', 'reading-long-n2-2020-12', 35],
            [14, 'vocabulary', 'n2-verbs', 20],
            [17, 'vocabulary', 'n1-mimetic', 20],
            [18, 'grammar', 'grammar-sort', 30],
            [19, 'listening', 'listening-point-n2', 30],
            [20, 'reading', 'reading-overview', 30],
            [21, 'vocabulary', 'n1-loanwords', 25],
            [22, 'reading', 'reading-middle-n2-2020-12', 30],
            [24, 'vocabulary', 'n2-verbs', 30],
            [25, 'grammar', 'grammar-cloze', 30],
            [26, 'listening', 'listening-integrated-n2', 30],
            [27, 'reading', 'reading-long-n2-2020-12', 35],
            [28, 'vocabulary', 'n2-adverbs', 25],
            [29, 'listening', 'listening-full-n2', 45]
        ].filter(([day]) => day <= daysInMonth && day !== selectedDay);

        specs.push(
            [selectedDay, 'vocabulary', 'n2-verbs', 25],
            [selectedDay, 'reading', 'reading-middle-n2-2020-12', 30]
        );

        return specs.map(([day, type, contentId, minutes], index) => ({
            id: `preset-${year}-${padNumber(month + 1)}-${padNumber(day)}-${index + 1}`,
            date: toDateKey(new Date(year, month, day)),
            type,
            contentId,
            minutes,
            completed: false,
            createdAt: Date.now() + index
        }));
    }

    function createDefaultState() {
        const today = getToday();
        return {
            version: STATE_VERSION,
            plan: {
                targetLevel: 'N2',
                examDate: '2026-12-06'
            },
            tasks: createDefaultTasks(today),
            updatedAt: Date.now()
        };
    }

    function normalizeTask(task) {
        if (!task || typeof task !== 'object') return null;
        const date = parseDateKey(task.date);
        const type = String(task.type || '');
        const contentId = String(task.contentId || '');
        const customContent = normalizeCustomContent(task.content, type);
        if (!date || (!getContent(type, contentId) && !customContent)) return null;
        return {
            id: String(task.id || `task-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`),
            date: toDateKey(date),
            type,
            contentId,
            minutes: Math.max(5, Math.min(240, Number.parseInt(task.minutes, 10) || 30)),
            completed: Boolean(task.completed),
            createdAt: Number.isFinite(Number(task.createdAt)) ? Number(task.createdAt) : Date.now(),
            ...(customContent ? { content: customContent } : {}),
            ...(String(task.presetId || '').trim() ? { presetId: String(task.presetId).trim() } : {}),
            ...(String(task.presetItemId || '').trim() ? { presetItemId: String(task.presetItemId).trim() } : {})
        };
    }

    function loadState() {
        let parsed = null;
        try {
            parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
        } catch (error) {
            parsed = null;
        }

        if (!parsed || typeof parsed !== 'object') {
            return createDefaultState();
        }

        const defaults = createDefaultState();
        return {
            version: STATE_VERSION,
            plan: {
                ...defaults.plan,
                ...(parsed.plan && typeof parsed.plan === 'object' ? parsed.plan : {}),
                targetLevel: normalizeTargetLevel(parsed.plan && parsed.plan.targetLevel)
            },
            tasks: Array.isArray(parsed.tasks) ? parsed.tasks.map(normalizeTask).filter(Boolean) : defaults.tasks,
            updatedAt: Number.isFinite(Number(parsed.updatedAt)) ? Number(parsed.updatedAt) : Date.now()
        };
    }

    function saveState() {
        state.updatedAt = Date.now();
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (error) {
            showToast('浏览器未能保存更改，请检查存储权限。');
        }
    }

    function loadCustomAvatarUrl() {
        try {
            const value = localStorage.getItem(AVATAR_STORAGE_KEY) || '';
            return /^data:image\/(?:png|jpeg|webp);base64,/i.test(value) ? value : '';
        } catch (error) {
            return '';
        }
    }

    function getPetUserName() {
        const petSystem = window.HomePetSystem;
        if (!petSystem || typeof petSystem.getUserName !== 'function') return DEFAULT_CHARACTER_NAME;
        const userName = String(petSystem.getUserName() || '').trim();
        return userName || DEFAULT_CHARACTER_NAME;
    }

    function renderCharacterName() {
        const characterName = getPetUserName();
        if (elements.characterName) elements.characterName.textContent = characterName;
        if (elements.characterAvatarChange) {
            elements.characterAvatarChange.setAttribute('aria-label', `更换 ${characterName} 的头像`);
        }
        if (elements.characterAvatar) {
            elements.characterAvatar.alt = `${characterName} 当前头像`;
        }
        if (elements.characterAvatarReset) {
            elements.characterAvatarReset.setAttribute('aria-label', `恢复 ${characterName} 的默认头像`);
        }
        return characterName;
    }

    function renderCharacterAvatar() {
        if (!elements.characterAvatar) return;
        const defaultSrc = elements.characterAvatar.dataset.defaultSrc || elements.characterAvatar.getAttribute('src') || '';
        elements.characterAvatar.src = customAvatarUrl || defaultSrc;
        if (elements.characterAvatarReset) {
            elements.characterAvatarReset.hidden = !customAvatarUrl;
        }
    }

    function createAvatarDataUrl(file) {
        return new Promise((resolve, reject) => {
            const objectUrl = URL.createObjectURL(file);
            const image = new Image();

            image.onload = () => {
                URL.revokeObjectURL(objectUrl);
                const sourceSize = Math.min(image.naturalWidth, image.naturalHeight);
                if (!sourceSize) {
                    reject(new Error('invalid-image'));
                    return;
                }

                const outputSize = Math.min(AVATAR_OUTPUT_SIZE, sourceSize);
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                if (!context) {
                    reject(new Error('canvas-unavailable'));
                    return;
                }

                canvas.width = outputSize;
                canvas.height = outputSize;
                context.imageSmoothingEnabled = true;
                context.imageSmoothingQuality = 'high';
                context.drawImage(
                    image,
                    (image.naturalWidth - sourceSize) / 2,
                    (image.naturalHeight - sourceSize) / 2,
                    sourceSize,
                    sourceSize,
                    0,
                    0,
                    outputSize,
                    outputSize
                );
                resolve(canvas.toDataURL('image/webp', 0.88));
            };

            image.onerror = () => {
                URL.revokeObjectURL(objectUrl);
                reject(new Error('invalid-image'));
            };
            image.src = objectUrl;
        });
    }

    async function replaceCharacterAvatar(file) {
        if (!file) return;
        if (!/^image\/(?:png|jpeg|webp)$/i.test(file.type)) {
            showToast('请选择 PNG、JPG 或 WebP 图片。');
            return;
        }
        if (file.size > AVATAR_MAX_FILE_SIZE) {
            showToast('图片不能超过 12 MB。');
            return;
        }

        if (elements.characterAvatarChange) elements.characterAvatarChange.disabled = true;
        try {
            const nextAvatarUrl = await createAvatarDataUrl(file);
            localStorage.setItem(AVATAR_STORAGE_KEY, nextAvatarUrl);
            customAvatarUrl = nextAvatarUrl;
            renderCharacterAvatar();
            showToast(`${getPetUserName()} 的头像已更换。`);
        } catch (error) {
            showToast('图片处理或保存失败，请换一张图片重试。');
        } finally {
            if (elements.characterAvatarChange) elements.characterAvatarChange.disabled = false;
        }
    }

    function resetCharacterAvatar() {
        try {
            localStorage.removeItem(AVATAR_STORAGE_KEY);
            customAvatarUrl = '';
            renderCharacterAvatar();
            showToast(`已恢复 ${getPetUserName()} 的默认头像。`);
        } catch (error) {
            showToast('暂时无法恢复默认头像，请稍后重试。');
        }
    }

    function showToast(message) {
        if (!elements.toast) return;
        elements.toast.textContent = message;
        elements.toast.classList.add('is-visible');
        window.clearTimeout(showToast.timer);
        showToast.timer = window.setTimeout(() => {
            elements.toast.classList.remove('is-visible');
        }, 2100);
    }

    let state = loadState();
    let customAvatarUrl = loadCustomAvatarUrl();
    const today = getToday();
    let selectedDateKey = toDateKey(today);
    let viewedMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    let activeTaskType = 'reading';
    let isMobileCalendarOpen = false;
    let activePlanView = 'calendar';
    let activeInsightType = 'grammar';
    let insightSnapshot = null;

    function getPresetCatalog() {
        const catalog = window.StudyPlanPresets;
        return catalog && Array.isArray(catalog.presets) ? catalog.presets : [];
    }

    function getPrimaryPreset() {
        return getPresetCatalog()[0] || null;
    }

    function formatPresetDate(dateKey) {
        const date = parseDateKey(dateKey);
        return date ? `${date.getMonth() + 1}.${date.getDate()}` : String(dateKey || '');
    }

    function taskMatchesPresetItem(task, preset, item) {
        if (!task || !preset || !item) return false;
        const matchesSource = task.presetId === preset.id && task.presetItemId === item.id;
        const matchesSchedule = task.date === item.date
            && task.type === item.type
            && task.contentId === item.contentId;
        return matchesSource || matchesSchedule;
    }

    function getPresetCoverage(preset) {
        const items = preset && Array.isArray(preset.items) ? preset.items : [];
        const matched = items.filter((item) => state.tasks.some((task) => (
            taskMatchesPresetItem(task, preset, item)
        ))).length;
        return { matched, total: items.length };
    }

    function renderPresetImportPreview() {
        if (!elements.importPreview || !elements.importConfirm) return;
        const preset = getPrimaryPreset();
        elements.importPreview.textContent = '';

        if (!preset) {
            const empty = document.createElement('p');
            empty.className = 'plan-import-empty';
            empty.textContent = '暂时没有可导入的课程计划。';
            elements.importPreview.appendChild(empty);
            elements.importConfirm.disabled = true;
            elements.importConfirm.textContent = '暂无课程';
            return;
        }

        const coverage = getPresetCoverage(preset);
        const card = document.createElement('article');
        card.className = 'plan-import-preset-card';

        const header = document.createElement('header');
        const headingCopy = document.createElement('div');
        const eyebrow = document.createElement('span');
        eyebrow.textContent = 'TRY! N2 · 14 LESSONS';
        const title = document.createElement('h4');
        title.textContent = preset.title;
        const subtitle = document.createElement('p');
        subtitle.textContent = preset.subtitle;
        headingCopy.append(eyebrow, title, subtitle);
        const stateBadge = document.createElement('strong');
        stateBadge.textContent = coverage.matched === coverage.total ? '導入済み' : '導入可能';
        header.append(headingCopy, stateBadge);

        const description = document.createElement('p');
        description.className = 'plan-import-description';
        description.textContent = preset.description;

        const facts = document.createElement('dl');
        facts.className = 'plan-import-facts';
        [
            ['期間', `${formatPresetDate(preset.startDate)} - ${formatPresetDate(preset.endDate)}`],
            ['课程数', `${coverage.total}节`],
            ['予定時間', `每课 ${preset.defaultMinutes || 30}分钟`]
        ].forEach(([label, value]) => {
            const item = document.createElement('div');
            const term = document.createElement('dt');
            term.textContent = label;
            const detail = document.createElement('dd');
            detail.textContent = value;
            item.append(term, detail);
            facts.appendChild(item);
        });

        const schedule = document.createElement('p');
        schedule.className = 'plan-import-schedule';
        schedule.textContent = preset.scheduleLabel;

        const lessonList = document.createElement('div');
        lessonList.className = 'plan-import-lesson-list';
        preset.items.forEach((item) => {
            const row = document.createElement('div');
            row.className = 'plan-import-lesson';
            if (state.tasks.some((task) => taskMatchesPresetItem(task, preset, item))) {
                row.classList.add('is-imported');
            }
            const date = document.createElement('time');
            date.dateTime = item.date;
            date.textContent = formatPresetDate(item.date);
            const copy = document.createElement('span');
            const lessonTitle = document.createElement('strong');
            lessonTitle.textContent = item.label;
            const note = document.createElement('small');
            note.textContent = item.note || '常规课';
            copy.append(lessonTitle, note);
            const status = document.createElement('i');
            status.textContent = row.classList.contains('is-imported') ? '追加済み' : '追加';
            row.append(date, copy, status);
            lessonList.appendChild(row);
        });

        card.append(header, description, facts, schedule, lessonList);
        elements.importPreview.appendChild(card);

        const remaining = Math.max(0, coverage.total - coverage.matched);
        elements.importConfirm.disabled = remaining === 0;
        elements.importConfirm.textContent = remaining === 0 ? '14节课程已导入' : `导入 ${remaining} 节课程`;
        if (elements.importFootnote) {
            elements.importFootnote.textContent = coverage.matched
                ? `检测到 ${coverage.matched} 节课程已存在；本次只会补齐缺少的课程。`
                : '已有任务会保留；相同日期与课程不会重复添加。';
        }
    }

    function openPresetImportDialog() {
        if (!elements.importDialog) return;
        renderPresetImportPreview();
        if (typeof elements.importDialog.showModal === 'function') {
            elements.importDialog.showModal();
        } else {
            elements.importDialog.setAttribute('open', '');
        }
    }

    function closePresetImportDialog() {
        if (!elements.importDialog) return;
        if (typeof elements.importDialog.close === 'function') {
            elements.importDialog.close();
        } else {
            elements.importDialog.removeAttribute('open');
        }
    }

    function importPrimaryPreset() {
        const preset = getPrimaryPreset();
        if (!preset) {
            showToast('暂时没有可导入的课程计划。');
            return;
        }

        const additions = preset.items.filter((item) => (
            getContent(item.type, item.contentId)
            && !state.tasks.some((task) => taskMatchesPresetItem(task, preset, item))
        ));

        additions.forEach((item, index) => {
            state.tasks.push({
                id: `preset-${preset.id}-${item.id}`,
                date: item.date,
                type: item.type,
                contentId: item.contentId,
                minutes: item.minutes || preset.defaultMinutes || 30,
                completed: false,
                createdAt: Date.now() + index,
                presetId: preset.id,
                presetItemId: item.id
            });
        });

        if (additions.length) {
            state.plan.targetLevel = normalizeTargetLevel(preset.targetLevel);
            selectedDateKey = preset.startDate;
            const startDate = parseDateKey(preset.startDate);
            if (startDate) viewedMonth = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
            activePlanView = 'calendar';
            isMobileCalendarOpen = window.innerWidth <= 767;
            saveState();
            renderContentOptions();
            setPlanView('calendar');
            renderAll();
            syncMobileCalendarState();
        }

        closePresetImportDialog();
        showToast(additions.length ? `已导入 ${additions.length} 节 TRY！N2 课程。` : '14节 TRY！N2 课程已经全部导入。');
    }

    function getTasksForDate(dateKey) {
        return state.tasks
            .filter((task) => task.date === dateKey)
            .sort((a, b) => a.createdAt - b.createdAt);
    }

    function getTasksForMonth(date) {
        const prefix = `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-`;
        return state.tasks.filter((task) => task.date.startsWith(prefix));
    }

    function getContentsForTargetLevel(type) {
        const definition = TYPE_DEFINITIONS[type];
        if (!definition) return [];
        const targetLevel = normalizeTargetLevel(state.plan.targetLevel);
        return definition.contents.filter((content) => {
            const contentLevel = getContentTargetLevel(content);
            return !contentLevel || contentLevel === targetLevel;
        });
    }

    function formatSelectedDate(date) {
        const weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][date.getDay()];
        return `${date.getMonth() + 1}月${date.getDate()}日 · ${weekday}`;
    }

    function renderMobileWeek() {
        if (!elements.mobileWeekStrip || !elements.mobileWeekTitle) return;
        const selectedDate = parseDateKey(selectedDateKey) || today;
        const weekStart = new Date(selectedDate);
        weekStart.setDate(selectedDate.getDate() - ((selectedDate.getDay() + 6) % 7));
        const todayKey = toDateKey(today);
        const weekdayLabels = ['一', '二', '三', '四', '五', '六', '日'];

        elements.mobileWeekTitle.textContent = `${selectedDate.getMonth() + 1}月${selectedDate.getDate()}日 · 本周`;
        elements.mobileWeekStrip.textContent = '';

        for (let index = 0; index < 7; index += 1) {
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + index);
            const dateKey = toDateKey(date);
            const tasks = getTasksForDate(dateKey);
            const isSelected = dateKey === selectedDateKey;
            const isToday = dateKey === todayKey;
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'mobile-plan-week-day';
            if (isSelected) button.classList.add('is-selected');
            if (isToday) button.classList.add('is-today');
            button.setAttribute('aria-pressed', String(isSelected));
            button.setAttribute('aria-label', `${date.getMonth() + 1}月${date.getDate()}日，${tasks.length}项任务`);

            const label = document.createElement('small');
            label.textContent = isToday ? '今日' : weekdayLabels[index];
            const number = document.createElement('strong');
            number.textContent = String(date.getDate());
            button.append(label, number);

            if (tasks.length) {
                const dot = document.createElement('i');
                dot.setAttribute('aria-hidden', 'true');
                button.appendChild(dot);
            }

            button.addEventListener('click', () => {
                selectDate(dateKey, date.getMonth() !== viewedMonth.getMonth());
            });
            elements.mobileWeekStrip.appendChild(button);
        }
    }

    function renderMobileOverview() {
        const date = parseDateKey(selectedDateKey) || today;
        const tasks = getTasksForDate(selectedDateKey);
        const completed = tasks.filter((task) => task.completed).length;
        const remainingMinutes = tasks
            .filter((task) => !task.completed)
            .reduce((total, task) => total + task.minutes, 0);
        const percentage = tasks.length ? (completed / tasks.length) * 100 : 0;

        if (elements.mobileSummary) {
            elements.mobileSummary.style.setProperty('--mobile-plan-progress', `${Math.min(100, percentage)}%`);
        }
        if (elements.mobileProgressRing) {
            elements.mobileProgressRing.style.setProperty('--mobile-plan-progress', `${Math.min(100, percentage)}%`);
        }
        if (elements.mobilePlanDate) {
            elements.mobilePlanDate.textContent = formatSelectedDate(date);
        }
        if (elements.mobileProgressCount) {
            elements.mobileProgressCount.textContent = `${completed}/${tasks.length}`;
        }
        if (elements.mobilePlanTitle) {
            elements.mobilePlanTitle.textContent = selectedDateKey === toDateKey(today)
                ? '今日的学习'
                : `${date.getMonth() + 1}月${date.getDate()}日的学习`;
        }
        if (elements.mobileRemaining) {
            if (!tasks.length) {
                elements.mobileRemaining.textContent = '还没有安排任务';
            } else if (!remainingMinutes) {
                elements.mobileRemaining.textContent = '今天的任务已经完成';
            } else {
                elements.mobileRemaining.textContent = '';
                elements.mobileRemaining.append('还有 ');
                const minutes = document.createElement('strong');
                minutes.textContent = `${remainingMinutes} 分钟`;
                elements.mobileRemaining.append(minutes, '完成计划');
            }
        }
        if (elements.mobileStudyStreak) {
            elements.mobileStudyStreak.textContent = String(calculateStudyStreak());
        }
        if (elements.mobileStudyStreakSecondary) {
            elements.mobileStudyStreakSecondary.textContent = String(calculateStudyStreak());
        }
        renderMobileWeek();
    }

    function syncMobileCalendarState() {
        root.classList.toggle('is-calendar-open', isMobileCalendarOpen);
        elements.calendarToggleButtons.forEach((button) => {
            button.setAttribute('aria-expanded', String(isMobileCalendarOpen));
            button.setAttribute('aria-label', isMobileCalendarOpen ? '返回今日任务' : '打开月历');
            const label = button.querySelector('[data-plan-calendar-label]');
            if (label) {
                label.textContent = isMobileCalendarOpen ? '返回任务' : '月历';
            } else {
                button.textContent = isMobileCalendarOpen ? '返回任务' : '查看月历 ›';
            }
        });
    }

    function renderCalendar() {
        elements.calendarTitle.textContent = `${viewedMonth.getFullYear()}年 ${viewedMonth.getMonth() + 1}月`;
        elements.calendarGrid.textContent = '';

        const firstOfMonth = new Date(viewedMonth.getFullYear(), viewedMonth.getMonth(), 1);
        const mondayOffset = (firstOfMonth.getDay() + 6) % 7;
        const gridStart = new Date(firstOfMonth);
        gridStart.setDate(firstOfMonth.getDate() - mondayOffset);
        const todayKey = toDateKey(today);

        for (let index = 0; index < 42; index += 1) {
            const date = new Date(gridStart);
            date.setDate(gridStart.getDate() + index);
            const dateKey = toDateKey(date);
            const tasks = getTasksForDate(dateKey);
            const isOutside = date.getMonth() !== viewedMonth.getMonth();
            const isSelected = dateKey === selectedDateKey;
            const isToday = dateKey === todayKey;
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;
            const isComplete = tasks.length > 0 && tasks.every((task) => task.completed);
            const holiday = CHINA_HOLIDAY_SCHEDULE_2026[dateKey] || null;
            const isExamDay = dateKey === state.plan.examDate;

            const cell = document.createElement('div');
            cell.className = 'calendar-day';
            if (isOutside) cell.classList.add('is-outside');
            if (isSelected) cell.classList.add('is-selected');
            if (isToday) cell.classList.add('is-today');
            if (isWeekend) cell.classList.add('is-weekend');
            if (holiday) cell.classList.add('is-public-holiday');
            if (isExamDay) cell.classList.add('is-exam-day');
            cell.setAttribute('role', 'gridcell');
            cell.setAttribute('aria-selected', String(isSelected));

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'calendar-day-button';
            button.setAttribute(
                'aria-label',
                `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日，${tasks.length}项任务${holiday ? `，${holiday.name}，${holiday.badge}` : ''}${isExamDay ? `，JLPT ${state.plan.targetLevel}考试日` : ''}`
            );
            button.dataset.date = dateKey;

            const numberRow = document.createElement('span');
            numberRow.className = 'calendar-day-number-row';
            const number = document.createElement('span');
            number.className = 'calendar-day-number';
            number.textContent = String(date.getDate());
            numberRow.appendChild(number);

            const flags = document.createElement('span');
            flags.className = 'calendar-day-flags';

            if (isExamDay) {
                const examSeal = document.createElement('span');
                examSeal.className = 'calendar-exam-seal';
                examSeal.textContent = '試験';
                examSeal.title = `JLPT ${state.plan.targetLevel} 試験日`;
                flags.appendChild(examSeal);
            }

            if (holiday) {
                const holidayBadge = document.createElement('span');
                holidayBadge.className = `calendar-holiday-badge is-${holiday.type}`;
                holidayBadge.textContent = holiday.badge;
                holidayBadge.title = holiday.name;
                flags.appendChild(holidayBadge);
            }

            if (isComplete) {
                const mark = document.createElement('span');
                mark.className = 'calendar-complete-mark';
                mark.textContent = '✓';
                mark.setAttribute('aria-label', '当天任务已全部完成');
                flags.appendChild(mark);
            } else if (isToday) {
                const label = document.createElement('span');
                label.className = 'calendar-today-label';
                label.textContent = '今天';
                flags.appendChild(label);
            }

            if (flags.childElementCount) {
                numberRow.appendChild(flags);
            }

            button.appendChild(numberRow);

            if (holiday) {
                const holidayName = document.createElement('span');
                holidayName.className = `calendar-holiday-name is-${holiday.type}`;
                holidayName.textContent = holiday.name;
                button.appendChild(holidayName);
            }

            if (isExamDay) {
                const examName = document.createElement('span');
                examName.className = 'calendar-exam-name';
                examName.textContent = `JLPT ${state.plan.targetLevel} 試験日`;
                button.appendChild(examName);
            }

            if (tasks.length) {
                const chipList = document.createElement('span');
                chipList.className = 'calendar-task-chips';
                tasks.slice(0, 2).forEach((task) => {
                    const content = getTaskContent(task);
                    const chip = document.createElement('span');
                    chip.className = `calendar-task-chip type-soft-${task.type}`;
                    if (task.completed) chip.classList.add('is-completed');
                    chip.textContent = content ? content.chip : TYPE_DEFINITIONS[task.type].label;
                    chipList.appendChild(chip);
                });
                if (tasks.length > 2) {
                    const more = document.createElement('span');
                    more.className = 'calendar-task-more';
                    more.textContent = `另有 ${tasks.length - 2} 项`;
                    chipList.appendChild(more);
                }
                button.appendChild(chipList);
            }

            button.addEventListener('click', () => selectDate(dateKey, isOutside));
            cell.appendChild(button);
            elements.calendarGrid.appendChild(cell);
        }

        renderMonthProgress();
        if (window.innerWidth <= 800 && elements.calendarScroll) {
            window.requestAnimationFrame(() => {
                const selectedCell = elements.calendarGrid.querySelector('.calendar-day.is-selected');
                if (!selectedCell) return;
                const centeredOffset = selectedCell.offsetLeft
                    - ((elements.calendarScroll.clientWidth - selectedCell.offsetWidth) / 2);
                const gridStyle = window.getComputedStyle(elements.calendarGrid);
                const columnGap = Number.parseFloat(gridStyle.columnGap) || 0;
                const columnStep = selectedCell.offsetWidth + columnGap;
                const alignedOffset = columnStep > 0
                    ? Math.round(centeredOffset / columnStep) * columnStep
                    : centeredOffset;
                elements.calendarScroll.scrollLeft = Math.max(0, alignedOffset);
            });
        }
    }

    function selectDate(dateKey, switchMonth) {
        const date = parseDateKey(dateKey);
        if (!date) return;
        selectedDateKey = dateKey;
        if (switchMonth) {
            viewedMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        }
        renderCalendar();
        renderSelectedDay();
        renderMobileOverview();
        if (window.innerWidth <= 767 && isMobileCalendarOpen) {
            isMobileCalendarOpen = false;
            syncMobileCalendarState();
        }
        if (window.innerWidth <= 800 && elements.dayPanel) {
            elements.dayPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function renderSelectedDay() {
        const date = parseDateKey(selectedDateKey) || today;
        const tasks = getTasksForDate(selectedDateKey);
        const totalMinutes = tasks.reduce((total, task) => total + task.minutes, 0);
        elements.selectedDate.textContent = formatSelectedDate(date);
        if (elements.dayTasksTitle) {
            elements.dayTasksTitle.textContent = selectedDateKey === toDateKey(today)
                ? '今日的学习'
                : `${date.getMonth() + 1}月${date.getDate()}日的学习`;
        }
        elements.taskSummary.textContent = tasks.length
            ? `${tasks.length} 项 · 预计 ${totalMinutes} 分钟`
            : '0 项';
        elements.saveTask.textContent = `保存到 ${date.getMonth() + 1}月${date.getDate()}日`;
        elements.taskList.textContent = '';

        if (!tasks.length) {
            const empty = document.createElement('div');
            empty.className = 'day-task-empty';
            empty.textContent = '当天还没有任务，可在下方添加。';
            elements.taskList.appendChild(empty);
            return;
        }

        tasks.forEach((task) => {
            const content = getTaskContent(task);
            const typeDefinition = TYPE_DEFINITIONS[task.type];
            if (!content || !typeDefinition) return;

            const card = document.createElement('article');
            card.className = 'day-task-card';
            if (task.completed) card.classList.add('is-completed');
            card.style.setProperty('--task-color', typeDefinition.color);

            const copy = document.createElement('div');
            copy.className = 'day-task-copy';
            const type = document.createElement('span');
            type.className = `day-task-type type-soft-${task.type}`;
            type.textContent = typeDefinition.label;
            const presetSource = document.createElement('span');
            presetSource.className = 'day-task-preset-source';
            presetSource.textContent = '预设课程';
            const title = document.createElement('h4');
            title.textContent = content.title;
            const meta = document.createElement('small');
            meta.textContent = `${task.minutes} 分钟`;
            copy.append(type);
            if (task.presetId) copy.append(presetSource);
            copy.append(title, meta);

            const topActions = document.createElement('div');
            topActions.className = 'day-task-actions';
            const openLink = document.createElement('a');
            openLink.href = content.url;
            openLink.textContent = '进入';
            topActions.appendChild(openLink);

            const mobileDeleteButton = document.createElement('button');
            mobileDeleteButton.type = 'button';
            mobileDeleteButton.className = 'mobile-task-delete';
            mobileDeleteButton.textContent = '删除';
            mobileDeleteButton.setAttribute('aria-label', `删除${content.title}`);
            mobileDeleteButton.addEventListener('click', () => deleteTask(task.id));
            topActions.appendChild(mobileDeleteButton);

            const mobileCompleteButton = document.createElement('button');
            mobileCompleteButton.type = 'button';
            mobileCompleteButton.className = 'mobile-task-check';
            mobileCompleteButton.textContent = task.completed ? '✓' : '';
            mobileCompleteButton.setAttribute('aria-label', task.completed ? '取消完成' : '标记完成');
            mobileCompleteButton.addEventListener('click', () => toggleTask(task.id));

            const footer = document.createElement('div');
            footer.className = 'day-task-footer';
            const completeButton = document.createElement('button');
            completeButton.type = 'button';
            completeButton.className = 'task-complete-button';
            completeButton.textContent = task.completed ? '✓ 已完成' : '○ 标记完成';
            completeButton.addEventListener('click', () => toggleTask(task.id));
            const deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.className = 'task-delete-button';
            deleteButton.textContent = '删除';
            deleteButton.addEventListener('click', () => deleteTask(task.id));
            footer.append(completeButton, deleteButton);

            card.append(mobileCompleteButton, copy, topActions, footer);
            elements.taskList.appendChild(card);
        });
    }

    function renderTaskTypeOptions() {
        elements.taskTypeOptions.textContent = '';
        ADDABLE_TYPES.forEach((type) => {
            const definition = TYPE_DEFINITIONS[type];
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'task-type-option';
            button.textContent = definition.label;
            button.dataset.taskType = type;
            button.style.setProperty('--active-color', definition.color);
            button.setAttribute('aria-pressed', String(type === activeTaskType));
            if (type === activeTaskType) button.classList.add('is-active');
            button.addEventListener('click', () => {
                activeTaskType = type;
                renderTaskTypeOptions();
                renderContentOptions();
            });
            elements.taskTypeOptions.appendChild(button);
        });
    }

    function renderContentOptions() {
        const previousValue = elements.taskContent.value;
        elements.taskContent.textContent = '';
        const contents = getContentsForTargetLevel(activeTaskType);
        contents.forEach((content) => {
            const option = document.createElement('option');
            option.value = content.id;
            option.textContent = content.title;
            elements.taskContent.appendChild(option);
        });
        if (contents.some((content) => content.id === previousValue)) {
            elements.taskContent.value = previousValue;
        }
    }

    function addTask(event) {
        event.preventDefault();
        const contentId = elements.taskContent.value;
        const minutes = Number.parseInt(elements.taskMinutes.value, 10) || 30;
        if (!getContent(activeTaskType, contentId)) return;

        const duplicate = state.tasks.some((task) => (
            task.date === selectedDateKey
            && task.type === activeTaskType
            && task.contentId === contentId
        ));
        if (duplicate) {
            showToast('这项内容已经安排在当天。');
            return;
        }

        state.tasks.push({
            id: `task-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            date: selectedDateKey,
            type: activeTaskType,
            contentId,
            minutes,
            completed: false,
            createdAt: Date.now()
        });
        saveState();
        renderAll();
        if (elements.taskFormPanel) {
            elements.taskFormPanel.open = false;
        }
        showToast('任务已保存。');
    }

    function toggleTask(taskId) {
        const task = state.tasks.find((entry) => entry.id === taskId);
        if (!task) return;
        task.completed = !task.completed;
        saveState();
        renderAll();
        showToast(task.completed ? '任务完成，属性经验已更新。' : '已取消完成标记。');
    }

    function deleteTask(taskId) {
        const task = state.tasks.find((entry) => entry.id === taskId);
        if (!task) return;
        const content = getTaskContent(task);
        const confirmed = window.confirm(`确定删除“${content ? content.title : '这项任务'}”吗？`);
        if (!confirmed) return;
        state.tasks = state.tasks.filter((entry) => entry.id !== taskId);
        saveState();
        renderAll();
        showToast('任务已删除。');
    }

    function renderMonthProgress() {
        const tasks = getTasksForMonth(viewedMonth);
        const completed = tasks.filter((task) => task.completed).length;
        const percentage = tasks.length ? (completed / tasks.length) * 100 : 0;
        elements.monthProgressCount.textContent = `${completed} / ${tasks.length}`;
        elements.monthProgressBar.style.width = `${Math.min(100, percentage)}%`;
        if (elements.mobileMonthProgressCount) {
            elements.mobileMonthProgressCount.textContent = `${completed} / ${tasks.length}`;
        }
    }

    function calculateStudyStreak() {
        const completedDateKeys = new Set(
            state.tasks.filter((task) => task.completed).map((task) => task.date)
        );
        let cursor = new Date(today);
        if (!completedDateKeys.has(toDateKey(cursor))) {
            cursor.setDate(cursor.getDate() - 1);
        }
        let streak = 0;
        while (completedDateKeys.has(toDateKey(cursor))) {
            streak += 1;
            cursor.setDate(cursor.getDate() - 1);
        }
        return streak;
    }

    function renderGrowth() {
        const completedTasks = state.tasks.filter((task) => task.completed);
        const completedMinutes = completedTasks.reduce((total, task) => total + task.minutes, 0);
        const totalXp = completedMinutes * 2;
        const level = Math.floor(totalXp / LEVEL_XP) + 1;
        const levelXp = totalXp % LEVEL_XP;
        elements.characterLevel.textContent = String(level);
        if (elements.mobileCharacterLevel) {
            elements.mobileCharacterLevel.textContent = String(level);
        }
        elements.characterXp.textContent = String(levelXp);
        elements.characterNextXp.textContent = String(LEVEL_XP);
        elements.characterXpBar.style.width = `${(levelXp / LEVEL_XP) * 100}%`;

        ADDABLE_TYPES.forEach((type) => {
            const minutes = completedTasks
                .filter((task) => task.type === type)
                .reduce((total, task) => total + task.minutes, 0);
            const value = Math.min(100, Math.floor(minutes / 3));
            const row = root.querySelector(`[data-ability="${type}"]`);
            if (!row) return;
            const bar = row.querySelector('i b');
            const number = row.querySelector('strong');
            if (bar) bar.style.width = `${value}%`;
            if (number) number.textContent = String(value);
        });
    }

    function renderHeaderMetrics() {
        const examDate = parseDateKey(state.plan.examDate);
        if (examDate) {
            const millisecondsPerDay = 24 * 60 * 60 * 1000;
            const days = Math.max(0, Math.ceil((examDate.getTime() - today.getTime()) / millisecondsPerDay));
            elements.examCountdown.textContent = String(days);
            if (elements.mobileExamCountdown) {
                elements.mobileExamCountdown.textContent = String(days);
            }
        }
        elements.studyStreak.textContent = String(calculateStudyStreak());
    }

    function renderPlanTarget() {
        const targetLevel = normalizeTargetLevel(state.plan.targetLevel);
        state.plan.targetLevel = targetLevel;
        elements.levelSelects.forEach((select) => {
            select.value = targetLevel;
        });
        elements.targetLevelLabels.forEach((label) => {
            label.textContent = `JLPT ${targetLevel}`;
        });
    }

    function setInsightTheme(element, type) {
        if (!element) return;
        const palette = INSIGHT_COLORS[type] || INSIGHT_COLORS.grammar;
        element.style.setProperty('--insight-color', palette.color);
        element.style.setProperty('--insight-soft', palette.soft);
    }

    function formatInsightDate(timestamp) {
        const date = new Date(Number(timestamp) || 0);
        if (!timestamp || Number.isNaN(date.getTime())) return '最近';
        return `${date.getMonth() + 1}/${date.getDate()}`;
    }

    function createInsightEmpty(title, description) {
        const empty = document.createElement('div');
        empty.className = 'plan-insight-empty';
        const copy = document.createElement('div');
        const heading = document.createElement('strong');
        heading.textContent = title;
        const detail = document.createElement('small');
        detail.textContent = description;
        copy.append(heading, detail);
        empty.appendChild(copy);
        return empty;
    }

    function getInsightTaskId(type, topic) {
        return `insight-${type}-${String(topic && topic.id || 'review')}`;
    }

    function isInsightTaskAdded(type, topic) {
        const taskId = getInsightTaskId(type, topic);
        const todayKey = toDateKey(today);
        return state.tasks.some((task) => (
            task.date === todayKey
            && task.type === type
            && task.contentId === taskId
        ));
    }

    function addInsightTask(section, topic) {
        if (!section || !topic || !ADDABLE_TYPES.includes(section.type)) return;
        if (isInsightTaskAdded(section.type, topic)) {
            showToast('这项复习已经加入今天的计划。');
            return;
        }
        const taskId = getInsightTaskId(section.type, topic);
        state.tasks.push({
            id: `task-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            date: toDateKey(today),
            type: section.type,
            contentId: taskId,
            content: {
                title: `${TYPE_DEFINITIONS[section.type].label}复习 · ${topic.title}`,
                chip: topic.chip || `${section.name} · 弱点`,
                url: topic.url || section.overviewUrl
            },
            minutes: Math.max(10, Math.min(90, Number(topic.minutes) || 25)),
            completed: false,
            createdAt: Date.now()
        });
        saveState();
        renderAll();
        showToast('已加入今天的学习计划。');
    }

    function renderInsightCategories(sections) {
        if (!elements.insightCategories) return;
        elements.insightCategories.textContent = '';
        INSIGHT_TYPES.forEach((type) => {
            const section = sections[type];
            if (!section) return;
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'plan-insight-category';
            button.dataset.insightType = type;
            button.setAttribute('aria-pressed', String(type === activeInsightType));
            setInsightTheme(button, type);

            const head = document.createElement('span');
            head.className = 'plan-insight-category-head';
            const name = document.createElement('span');
            name.className = 'plan-insight-category-name';
            const mark = document.createElement('span');
            mark.className = 'plan-insight-category-mark';
            mark.textContent = section.mark;
            name.append(mark, section.name);
            const stateBadge = document.createElement('span');
            stateBadge.className = 'plan-insight-state';
            stateBadge.textContent = section.state;
            head.append(name, stateBadge);

            const metric = document.createElement('span');
            metric.className = 'plan-insight-category-metric';
            const primary = document.createElement('strong');
            const primaryLabel = document.createElement('small');
            if (section.accuracy !== null) {
                primary.append(`${section.accuracy}%`);
                primaryLabel.textContent = '正答率';
            } else if (section.pending > 0) {
                primary.append(String(section.pending));
                primaryLabel.textContent = '要復習';
            } else {
                primary.append('—');
                primaryLabel.textContent = '記録なし';
            }
            primary.appendChild(primaryLabel);
            const pending = document.createElement('span');
            pending.textContent = `${section.pending}問 要復習`;
            metric.append(primary, pending);

            button.append(head, metric);
            button.addEventListener('click', () => {
                activeInsightType = type;
                renderInsights();
            });
            elements.insightCategories.appendChild(button);
        });
    }

    function renderInsightTopics(section) {
        if (!elements.insightTopicList || !elements.insightTopicCount) return;
        elements.insightTopicList.textContent = '';
        elements.insightTopicCount.textContent = `${section.topics.length}項目`;
        const topics = section.topics.slice(0, 3);
        if (!topics.length) {
            const hasHistory = section.attempts > 0 || section.recent.length > 0;
            elements.insightTopicList.appendChild(createInsightEmpty(
                hasHistory ? '現在、復習待ちの問題はありません' : 'まだ練習記録がありません',
                hasHistory
                    ? '新しい誤答が記録されると、ここに知識点別で表示されます。'
                    : '試験対策エリアで練習すると、錯題と弱点が自動で反映されます。'
            ));
            return;
        }

        topics.forEach((topic, index) => {
            const item = document.createElement('article');
            item.className = 'plan-insight-topic';
            setInsightTheme(item, section.type);

            const rank = document.createElement('span');
            rank.className = 'plan-insight-topic-rank';
            rank.textContent = String(index + 1).padStart(2, '0');

            const copy = document.createElement('div');
            copy.className = 'plan-insight-topic-copy';
            const title = document.createElement('strong');
            title.textContent = topic.title;
            const note = document.createElement('small');
            note.textContent = topic.accuracy === null
                ? topic.note
                : `${topic.note} · 正答率 ${topic.accuracy}%`;
            copy.append(title, note);

            const actions = document.createElement('div');
            actions.className = 'plan-insight-topic-actions';
            const count = document.createElement('span');
            count.textContent = `${Math.max(topic.pendingCount, topic.wrongCount)}回ミス`;
            const openLink = document.createElement('a');
            openLink.className = 'plan-insight-open-link';
            openLink.href = topic.url || section.overviewUrl;
            openLink.textContent = '原題';
            const addButton = document.createElement('button');
            addButton.type = 'button';
            addButton.className = 'plan-insight-add-button';
            const added = isInsightTaskAdded(section.type, topic);
            addButton.classList.toggle('is-added', added);
            addButton.textContent = added ? '追加済み' : '今日に追加';
            addButton.addEventListener('click', () => addInsightTask(section, topic));
            actions.append(count, openLink, addButton);

            item.append(rank, copy, actions);
            elements.insightTopicList.appendChild(item);
        });
    }

    function renderInsightRecent(section) {
        if (!elements.insightRecentList) return;
        elements.insightRecentList.textContent = '';
        if (!section.recent.length) {
            elements.insightRecentList.appendChild(createInsightEmpty(
                '最近の練習はありません',
                'この項目の練習を始めると、直近の結果がここに表示されます。'
            ));
            return;
        }

        section.recent.forEach((record) => {
            const item = document.createElement('a');
            item.className = 'plan-insight-recent-item';
            item.href = record.url || section.overviewUrl;
            const date = document.createElement('span');
            date.className = 'plan-insight-recent-date';
            date.textContent = formatInsightDate(record.timestamp);
            const copy = document.createElement('span');
            copy.className = 'plan-insight-recent-copy';
            const title = document.createElement('strong');
            title.textContent = record.title;
            const source = document.createElement('small');
            source.textContent = record.source;
            copy.append(title, source);
            const result = document.createElement('span');
            result.className = 'plan-insight-recent-result';
            if (record.isLow) result.classList.add('is-low');
            result.textContent = record.result;
            item.append(date, copy, result);
            elements.insightRecentList.appendChild(item);
        });
    }

    function renderInsights() {
        if (!elements.insightsView || !globalThis.StudyPlanInsights) return;
        insightSnapshot = globalThis.StudyPlanInsights.collect(state.plan.targetLevel);
        const sections = insightSnapshot.sections || {};
        const section = sections[activeInsightType] || sections.grammar;
        if (!section) return;
        renderInsightCategories(sections);
        setInsightTheme(elements.insightDetail, section.type);
        if (elements.insightDot) setInsightTheme(elements.insightDot, section.type);
        if (elements.insightTitle) elements.insightTitle.textContent = `${section.name}の弱点`;
        if (elements.insightOverviewLink) elements.insightOverviewLink.href = section.overviewUrl;
        renderInsightTopics(section);
        renderInsightRecent(section);
    }

    function setPlanView(view) {
        activePlanView = view === 'insights' ? 'insights' : 'calendar';
        const insightsActive = activePlanView === 'insights';
        root.classList.toggle('is-insights-view', insightsActive);
        elements.planViewTabs.forEach((button) => {
            button.setAttribute('aria-selected', String(button.dataset.planViewTab === activePlanView));
        });
        if (elements.insightsView) {
            elements.insightsView.hidden = !insightsActive;
        }
        if (insightsActive) {
            isMobileCalendarOpen = false;
            syncMobileCalendarState();
            renderInsights();
        }
    }

    function renderAll() {
        renderCharacterName();
        renderPlanTarget();
        renderCalendar();
        renderSelectedDay();
        renderGrowth();
        renderHeaderMetrics();
        renderMobileOverview();
        renderCharacterAvatar();
        if (activePlanView === 'insights') renderInsights();
    }

    elements.prevButton.addEventListener('click', () => {
        viewedMonth = new Date(viewedMonth.getFullYear(), viewedMonth.getMonth() - 1, 1);
        renderCalendar();
    });

    elements.nextButton.addEventListener('click', () => {
        viewedMonth = new Date(viewedMonth.getFullYear(), viewedMonth.getMonth() + 1, 1);
        renderCalendar();
    });

    elements.todayButton.addEventListener('click', () => {
        selectedDateKey = toDateKey(today);
        viewedMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        isMobileCalendarOpen = false;
        syncMobileCalendarState();
        renderAll();
    });

    elements.calendarToggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            isMobileCalendarOpen = !isMobileCalendarOpen;
            syncMobileCalendarState();
        });
    });

    elements.planViewTabs.forEach((button) => {
        button.addEventListener('click', () => {
            setPlanView(button.dataset.planViewTab);
        });
    });

    if (elements.importOpen) {
        elements.importOpen.addEventListener('click', openPresetImportDialog);
    }
    if (elements.importClose) {
        elements.importClose.addEventListener('click', closePresetImportDialog);
    }
    if (elements.importConfirm) {
        elements.importConfirm.addEventListener('click', importPrimaryPreset);
    }
    if (elements.characterAvatarChange && elements.characterAvatarInput) {
        elements.characterAvatarChange.addEventListener('click', () => elements.characterAvatarInput.click());
        elements.characterAvatarInput.addEventListener('change', async () => {
            const [file] = elements.characterAvatarInput.files || [];
            elements.characterAvatarInput.value = '';
            await replaceCharacterAvatar(file);
        });
    }
    if (elements.characterAvatarReset) {
        elements.characterAvatarReset.addEventListener('click', resetCharacterAvatar);
    }
    if (elements.importDialog) {
        elements.importDialog.addEventListener('click', (event) => {
            if (event.target === elements.importDialog) closePresetImportDialog();
        });
    }

    elements.taskForm.addEventListener('submit', addTask);
    elements.levelSelects.forEach((select) => {
        select.addEventListener('change', () => {
            const nextLevel = normalizeTargetLevel(select.value);
            if (nextLevel === state.plan.targetLevel) {
                renderPlanTarget();
                return;
            }
            state.plan.targetLevel = nextLevel;
            saveState();
            renderContentOptions();
            renderAll();
            showToast(`备考级别已切换为 JLPT ${nextLevel}。`);
        });
    });
    window.addEventListener('storage', (event) => {
        renderCharacterName();
        if (event.key === AVATAR_STORAGE_KEY) {
            customAvatarUrl = loadCustomAvatarUrl();
            renderCharacterAvatar();
            return;
        }
        if (event.key === STORAGE_KEY) {
            state = loadState();
            renderAll();
            return;
        }
        if (activePlanView === 'insights') renderInsights();
    });
    window.addEventListener(USER_PROFILE_CHANGED_EVENT, renderCharacterName);
    window.addEventListener('pageshow', () => {
        if (activePlanView === 'insights') renderInsights();
    });

    renderTaskTypeOptions();
    renderContentOptions();
    syncMobileCalendarState();
    setPlanView('calendar');
    saveState();
    renderAll();
})();
