(function (global) {
    const groups = [
        {
            id: 1,
            title: "い形容詞",
            summary: ""
        },
        {
            id: 2,
            title: "な形容詞",
            summary: ""
        }
    ];

    const iAdjectiveIds = [
        ...Array.from({ length: 40 }, (_, index) => index),
        ...Array.from({ length: 55 }, (_, index) => index + 45)
    ];
    const naAdjectiveIds = [
        ...Array.from({ length: 5 }, (_, index) => index + 40),
        ...Array.from({ length: 165 }, (_, index) => index + 100)
    ];

    const groupPlans = [
        {
            group: groups[0],
            wordIds: iAdjectiveIds,
            daySizes: [19, 19, 19, 19, 19]
        },
        {
            group: groups[1],
            wordIds: naAdjectiveIds,
            daySizes: [22, 22, 21, 21, 21, 21, 21, 21]
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

    global.LAB_N1_ADJECTIVE_GROUPS = groups;
    global.LAB_N1_ADJECTIVE_DAYS = days;
    global.LAB_N1_ADJECTIVE_STAGES = stages;

    global.LAB_ADJECTIVE_GROUPS = groups;
    global.LAB_ADJECTIVE_DAYS = days;
    global.LAB_ADJECTIVE_STAGES = stages;
})(typeof window !== "undefined" ? window : globalThis);
