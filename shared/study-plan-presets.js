(function registerStudyPlanPresets() {
    'use strict';

    const tryN2Lessons = [
        ['lesson-01', '2026-09-03', 'try-n2-lesson-01', 'TRY！N2 第1课', '开课'],
        ['lesson-02', '2026-09-05', 'try-n2-lesson-02', 'TRY！N2 第2课', '①＋②'],
        ['lesson-03', '2026-09-07', 'try-n2-lesson-03', 'TRY！N2 第3课', '周一加课'],
        ['lesson-04', '2026-09-08', 'try-n2-lesson-04', 'TRY！N2 第4课', ''],
        ['lesson-05', '2026-09-10', 'try-n2-lesson-05', 'TRY！N2 第5课', '①＋②'],
        ['lesson-06', '2026-09-12', 'try-n2-lesson-06', 'TRY！N2 第6课', '①＋②'],
        ['lesson-07', '2026-09-14', 'try-n2-lesson-07', 'TRY！N2 第7课', '①＋② · 周一加课'],
        ['lesson-08', '2026-09-15', 'try-n2-lesson-08', 'TRY！N2 第8课', ''],
        ['lesson-09', '2026-09-17', 'try-n2-lesson-09', 'TRY！N2 第9课', '①＋②'],
        ['lesson-10', '2026-09-19', 'try-n2-lesson-10', 'TRY！N2 第10课', '①＋②'],
        ['lesson-11', '2026-09-21', 'try-n2-lesson-11', 'TRY！N2 第11课', '周一加课'],
        ['lesson-12', '2026-09-22', 'try-n2-lesson-12', 'TRY！N2 第12课', '①＋②'],
        ['lesson-13', '2026-09-24', 'try-n2-lesson-13', 'TRY！N2 第13课', '①＋②'],
        ['lesson-14', '2026-09-26', 'try-n2-lesson-14', 'TRY！N2 第14课', '基础课程完成']
    ].map(([id, date, contentId, label, note]) => Object.freeze({
        id,
        date,
        type: 'grammar',
        contentId,
        label,
        note,
        minutes: 30
    }));

    window.StudyPlanPresets = Object.freeze({
        version: 1,
        presets: Object.freeze([
            Object.freeze({
                id: 'try-n2-2026-autumn',
                title: 'TRY！N2 课程计划',
                subtitle: '2026.12 N2 能力考前冲刺班 · 第一阶段',
                targetLevel: 'N2',
                startDate: '2026-09-03',
                endDate: '2026-09-26',
                description: '仅导入 TRY！N2 第1课至第14课，不包含后续专项、真题与模拟课程。',
                scheduleLabel: '周二・周四・周六｜周一加课 9.7・9.14・9.21',
                defaultMinutes: 30,
                items: Object.freeze(tryN2Lessons)
            })
        ])
    });
})();
