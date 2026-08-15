(function (global) {
    'use strict';

    const groups = [
        { id: 1, title: 'い形容詞', summary: '' },
        { id: 2, title: 'な形容詞', summary: '' }
    ];

    const entries = Array.isArray(global.FULL_WORD_LIST)
        ? global.FULL_WORD_LIST
            .map((word, index) => ({ index, word }))
            .filter((entry) => {
                const surface = String(entry.word && entry.word.word ? entry.word.word : '').trim();
                return surface && surface !== '（準備中）' && entry.word.scheduleKind !== 'duplicate';
            })
        : [];

    const groupPlans = [
        {
            group: groups[0],
            wordIds: entries.filter((entry) => entry.word.pos === 'い形').map((entry) => entry.index),
            daySizes: [19, 19, 19, 19, 19]
        },
        {
            group: groups[1],
            wordIds: entries.filter((entry) => entry.word.pos === 'な形').map((entry) => entry.index),
            daySizes: [18, 18, 18, 18, 18]
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
        dayIds: days.filter((day) => day.groupId === group.id).map((day) => day.id)
    }));

    global.LAB_N2_ADJECTIVE_GROUPS = groups;
    global.LAB_N2_ADJECTIVE_DAYS = days;
    global.LAB_N2_ADJECTIVE_STAGES = stages;
})(typeof window !== 'undefined' ? window : globalThis);
