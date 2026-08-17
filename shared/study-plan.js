(function initStudyPlan() {
    'use strict';

    const STORAGE_KEY = 'kikiStudyPlan_v1';
    const STATE_VERSION = 1;
    const LEVEL_XP = 120;
    const ADDABLE_TYPES = ['vocabulary', 'grammar', 'reading', 'listening'];
    const root = document.querySelector('[data-study-plan-root]');

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
                { id: 'grammar-overview', title: 'JLPT 语法专项总览', chip: '语法 · 专项', url: 'exam/grammar/index.html' },
                { id: 'grammar-form-n2', title: 'N2 文法形式判断', chip: '语法 · 形式', url: 'exam/grammar/grammar/n2/index.html' },
                { id: 'grammar-sort', title: 'JLPT 文法排序练习', chip: '语法 · 排序', url: 'exam/grammar/sort/index.html' },
                { id: 'grammar-cloze', title: 'JLPT 完形填空练习', chip: '语法 · 填空', url: 'exam/grammar/cloze/index.html' },
                { id: 'compound-particles', title: '复合格助词学习', chip: '语法 · 助词', url: 'exam/grammar/复合格助词.html' },
                { id: 'compound-particles-practice', title: '复合格助词练习', chip: '语法 · 助词练习', url: 'exam/grammar/复合格助词练习.html' }
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
                { id: 'listening-overview', title: 'JLPT 听力专项总览', chip: '听力 · 总览', url: 'exam/listening/index.html' },
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
        mobileProgressRing: root.querySelector('[data-mobile-plan-progress-ring]'),
        mobileProgressCount: root.querySelector('[data-mobile-plan-progress-count]'),
        mobilePlanTitle: root.querySelector('[data-mobile-plan-title]'),
        mobileRemaining: root.querySelector('[data-mobile-plan-remaining]'),
        mobileStudyStreak: root.querySelector('[data-mobile-study-streak]'),
        mobileWeekTitle: root.querySelector('[data-mobile-plan-week-title]'),
        mobileWeekStrip: root.querySelector('[data-mobile-plan-week-strip]'),
        calendarToggleButtons: Array.from(root.querySelectorAll('[data-plan-calendar-toggle]')),
        characterLevel: root.querySelector('[data-character-level]'),
        characterXp: root.querySelector('[data-character-xp]'),
        characterNextXp: root.querySelector('[data-character-next-xp]'),
        characterXpBar: root.querySelector('[data-character-xp-bar]'),
        dayPanel: root.querySelector('.day-panel'),
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
        if (!date || !getContent(type, contentId)) return null;
        return {
            id: String(task.id || `task-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`),
            date: toDateKey(date),
            type,
            contentId,
            minutes: Math.max(5, Math.min(240, Number.parseInt(task.minutes, 10) || 30)),
            completed: Boolean(task.completed),
            createdAt: Number.isFinite(Number(task.createdAt)) ? Number(task.createdAt) : Date.now()
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
                ...(parsed.plan && typeof parsed.plan === 'object' ? parsed.plan : {})
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
    const today = getToday();
    let selectedDateKey = toDateKey(today);
    let viewedMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    let activeTaskType = 'reading';
    let isMobileCalendarOpen = false;

    function getTasksForDate(dateKey) {
        return state.tasks
            .filter((task) => task.date === dateKey)
            .sort((a, b) => a.createdAt - b.createdAt);
    }

    function getTasksForMonth(date) {
        const prefix = `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-`;
        return state.tasks.filter((task) => task.date.startsWith(prefix));
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

        if (elements.mobileProgressRing) {
            elements.mobileProgressRing.style.setProperty('--mobile-plan-progress', `${Math.min(100, percentage)}%`);
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
        renderMobileWeek();
    }

    function syncMobileCalendarState() {
        root.classList.toggle('is-calendar-open', isMobileCalendarOpen);
        elements.calendarToggleButtons.forEach((button) => {
            button.setAttribute('aria-expanded', String(isMobileCalendarOpen));
            button.setAttribute('aria-label', isMobileCalendarOpen ? '返回今日任务' : '打开月历');
            button.textContent = isMobileCalendarOpen ? '返回任务' : '查看月历 ›';
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
                `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日，${tasks.length}项任务${holiday ? `，${holiday.name}，${holiday.badge}` : ''}${isExamDay ? '，JLPT N2考试日' : ''}`
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
                examSeal.title = 'JLPT N2 試験日';
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
                examName.textContent = 'JLPT N2 試験日';
                button.appendChild(examName);
            }

            if (tasks.length) {
                const chipList = document.createElement('span');
                chipList.className = 'calendar-task-chips';
                tasks.slice(0, 2).forEach((task) => {
                    const content = getContent(task.type, task.contentId);
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
            const content = getContent(task.type, task.contentId);
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
            const title = document.createElement('h4');
            title.textContent = content.title;
            const meta = document.createElement('small');
            meta.textContent = `${task.minutes} 分钟`;
            copy.append(type, title, meta);

            const topActions = document.createElement('div');
            topActions.className = 'day-task-actions';
            const openLink = document.createElement('a');
            openLink.href = content.url;
            openLink.textContent = '进入内容 ↗';
            topActions.appendChild(openLink);

            const mobileDeleteButton = document.createElement('button');
            mobileDeleteButton.type = 'button';
            mobileDeleteButton.className = 'mobile-task-delete';
            mobileDeleteButton.textContent = '···';
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
        elements.taskContent.textContent = '';
        TYPE_DEFINITIONS[activeTaskType].contents.forEach((content) => {
            const option = document.createElement('option');
            option.value = content.id;
            option.textContent = content.title;
            elements.taskContent.appendChild(option);
        });
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
        const content = getContent(task.type, task.contentId);
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
        }
        elements.studyStreak.textContent = String(calculateStudyStreak());
    }

    function renderAll() {
        renderCalendar();
        renderSelectedDay();
        renderGrowth();
        renderHeaderMetrics();
        renderMobileOverview();
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

    elements.taskForm.addEventListener('submit', addTask);
    window.addEventListener('storage', (event) => {
        if (event.key !== STORAGE_KEY) return;
        state = loadState();
        renderAll();
    });

    renderTaskTypeOptions();
    renderContentOptions();
    syncMobileCalendarState();
    saveState();
    renderAll();
})();
