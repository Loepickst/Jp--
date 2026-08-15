(function (global) {
    const groups = [
        { id: 1, title: "时间与进程", summary: "" },
        { id: 2, title: "频率与反复", summary: "" },
        { id: 3, title: "否定与限定", summary: "" },
        { id: 4, title: "推测与比拟", summary: "" },
        { id: 5, title: "假设、让步与疑问", summary: "" },
        { id: 6, title: "选择、请求与结果", summary: "" }
    ];

    const dayPlans = [
        { id: 1, groupId: 1, dayNumber: 1, start: 0, end: 6 },
        { id: 2, groupId: 1, dayNumber: 2, start: 7, end: 13 },
        { id: 3, groupId: 1, dayNumber: 3, start: 14, end: 20 },
        { id: 4, groupId: 2, dayNumber: 1, start: 21, end: 29 },
        { id: 5, groupId: 3, dayNumber: 1, start: 30, end: 35 },
        { id: 6, groupId: 3, dayNumber: 2, start: 36, end: 41 },
        { id: 7, groupId: 4, dayNumber: 1, start: 42, end: 47 },
        { id: 8, groupId: 4, dayNumber: 2, start: 48, end: 53 },
        { id: 9, groupId: 5, dayNumber: 1, start: 54, end: 60 },
        { id: 10, groupId: 6, dayNumber: 1, start: 61, end: 66 }
    ];

    const days = dayPlans.map((plan) => {
        const group = groups.find((item) => item.id === plan.groupId);
        return {
            id: plan.id,
            groupId: plan.groupId,
            groupTitle: group ? group.title : "",
            groupSummary: group ? group.summary : "",
            dayNumber: plan.dayNumber,
            title: `${plan.dayNumber}日目`,
            wordIds: Array.from(
                { length: plan.end - plan.start + 1 },
                (_, offset) => plan.start + offset
            )
        };
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

    global.LAB_N1_ADVERB_GROUPS = groups;
    global.LAB_N1_ADVERB_DAYS = days;
    global.LAB_N1_ADVERB_STAGES = stages;
})(typeof window !== "undefined" ? window : globalThis);
