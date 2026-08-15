(function (global) {
    'use strict';

    const groups = [
        {
            id: 1,
            title: '社会・仕事・情報',
            summary: ''
        },
        {
            id: 2,
            title: '日常・状態・感覚',
            summary: ''
        }
    ];

    // 工作沟通、组织管理、媒体科技、数据与流程相关词汇。
    const socialWorkInformationIds = [
        1, 3, 4, 5, 7, 9, 10, 11, 12, 14,
        16, 18, 19, 21, 22, 24, 25, 28, 30, 31,
        32, 33, 35, 36, 40, 41, 43, 44, 45, 46,
        49, 53, 55, 60, 61, 62, 65, 66, 68, 70,
        71, 72, 75, 76, 77, 84, 85, 87, 88, 89
    ];

    // 日常场景、人物印象、状态变化、感受与评价相关词汇。
    const everydayStateSenseIds = Array.from({ length: 90 }, (_, index) => index)
        .filter((wordId) => !socialWorkInformationIds.includes(wordId));

    const groupPlans = [
        {
            group: groups[0],
            wordIds: socialWorkInformationIds,
            daySizes: [10, 10, 10, 10, 10]
        },
        {
            group: groups[1],
            wordIds: everydayStateSenseIds,
            daySizes: [10, 10, 10, 10]
        }
    ];

    let nextDayId = 1;
    const days = groupPlans.flatMap((plan) => {
        let cursor = 0;
        return plan.daySizes.map((size, index) => {
            const wordIds = plan.wordIds.slice(cursor, cursor + size);
            cursor += size;
            return {
                id: nextDayId++,
                groupId: plan.group.id,
                groupTitle: plan.group.title,
                groupSummary: plan.group.summary,
                dayNumber: index + 1,
                title: `${index + 1}日目`,
                wordIds
            };
        });
    });

    const stages = groups.map((group) => ({
        id: group.id,
        groupId: group.id,
        groupTitle: group.title,
        title: group.title,
        dayIds: days
            .filter((day) => day.groupId === group.id)
            .map((day) => day.id)
    }));

    global.LAB_N1_LOANWORD_GROUPS = groups;
    global.LAB_N1_LOANWORD_DAYS = days;
    global.LAB_N1_LOANWORD_STAGES = stages;
})(typeof window !== 'undefined' ? window : globalThis);
