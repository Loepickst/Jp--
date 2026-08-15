(function (global) {
    const groups = [
        {
            id: 1,
            title: "擬声語",
            summary: ""
        },
        {
            id: 2,
            title: "擬態語",
            summary: ""
        }
    ];

    // 声音、说话声、呼吸声或能够直接听见的声响。
    const giseigoIds = [6, 44, 45, 53, 54, 60, 62, 76, 79, 81];
    const gitaigoIds = Array.from({ length: 90 }, (_, index) => index)
        .filter((wordId) => !giseigoIds.includes(wordId));

    const groupPlans = [
        {
            group: groups[0],
            wordIds: giseigoIds,
            daySizes: [10]
        },
        {
            group: groups[1],
            wordIds: gitaigoIds,
            daySizes: [10, 10, 10, 10, 10, 10, 10, 10]
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

    global.LAB_N1_MIMETIC_GROUPS = groups;
    global.LAB_N1_MIMETIC_DAYS = days;
    global.LAB_N1_MIMETIC_STAGES = stages;

    global.LAB_ONOMATOPOEIA_GROUPS = groups;
    global.LAB_ONOMATOPOEIA_DAYS = days;
    global.LAB_ONOMATOPOEIA_STAGES = stages;
})(typeof window !== "undefined" ? window : globalThis);
