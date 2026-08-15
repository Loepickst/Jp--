(function (global) {
    'use strict';

    const categoryPlans = [
        { id: '01', groupId: 1, title: '整理、收纳与积累' },
        { id: '02', groupId: 1, title: '物体操作与手部动作' },
        { id: '03', groupId: 1, title: '移动、方向与位置关系' },
        { id: '04', groupId: 1, title: '姿势、接触与身体动作' },
        { id: '05', groupId: 2, title: '准备、确认、决定与达成' },
        { id: '06', groupId: 2, title: '工作、职责与经济活动' },
        { id: '07', groupId: 2, title: '授受、邀请与请求' },
        { id: '08', groupId: 3, title: '感情、心理与态度' },
        { id: '09', groupId: 3, title: '语言、认知、调查与判断' },
        { id: '10', groupId: 4, title: '自然现象与状态变化' },
        { id: '11', groupId: 4, title: '破损、恶化与异常状态' },
        { id: '12', groupId: 5, title: '对立、竞争、阻碍与控制' },
        { id: '13', groupId: 5, title: '抽象关系、范围与程度' }
    ];

    const groups = [
        { id: 1, title: '物体操作与空间移动', summary: '' },
        { id: 2, title: '准备、工作与授受', summary: '' },
        { id: 3, title: '心理、语言与判断', summary: '' },
        { id: 4, title: '状态变化与异常', summary: '' },
        { id: 5, title: '对立、控制与抽象关系', summary: '' },
        { id: 6, title: '複合動詞', summary: '' }
    ];

    const entries = Array.isArray(global.FULL_WORD_LIST)
        ? global.FULL_WORD_LIST
            .map((word, index) => ({ index, word }))
            .filter((entry) => {
                const surface = String(entry.word && entry.word.word ? entry.word.word : '').trim();
                return surface && surface !== '（準備中）' && surface !== '---';
            })
        : [];

    let nextDayId = 1;
    const groupDayNumbers = new Map();
    const normalDays = categoryPlans.map((plan) => {
        const group = groups.find((item) => item.id === plan.groupId);
        const dayNumber = (groupDayNumbers.get(plan.groupId) || 0) + 1;
        groupDayNumbers.set(plan.groupId, dayNumber);
        return {
            id: nextDayId++,
            groupId: plan.groupId,
            groupTitle: group ? group.title : '',
            groupSummary: group ? group.summary : '',
            dayNumber,
            title: plan.title,
            categoryId: plan.id,
            wordIds: entries
                .filter((entry) => entry.word.scheduleKind !== 'compound'
                    && String(entry.word.sourceCategoryId || '').trim() === plan.id)
                .sort((left, right) => Number(left.word.sourceOrder || left.index + 1) - Number(right.word.sourceOrder || right.index + 1))
                .map((entry) => entry.index)
        };
    }).filter((day) => day.wordIds.length > 0);

    const compoundGroup = groups.find((group) => group.id === 6);
    const compoundEntries = entries
        .filter((entry) => entry.word.scheduleKind === 'compound')
        .sort((left, right) => Number(left.word.sourceOrder || left.index + 1) - Number(right.word.sourceOrder || right.index + 1));
    const compoundDays = [];
    for (let start = 0; start < compoundEntries.length; start += 20) {
        const dayNumber = compoundDays.length + 1;
        compoundDays.push({
            id: nextDayId++,
            groupId: compoundGroup.id,
            groupTitle: compoundGroup.title,
            groupSummary: compoundGroup.summary,
            dayNumber,
            title: `${dayNumber}日目`,
            wordIds: compoundEntries.slice(start, start + 20).map((entry) => entry.index)
        });
    }

    const days = [...normalDays, ...compoundDays];
    const stages = groups.map((group) => ({
        id: group.id,
        groupId: group.id,
        groupTitle: group.title,
        title: group.title,
        dayIds: days.filter((day) => day.groupId === group.id).map((day) => day.id)
    })).filter((stage) => stage.dayIds.length > 0);

    global.LAB_N2_VERB_GROUPS = groups;
    global.LAB_N2_VERB_DAYS = days;
    global.LAB_N2_VERB_STAGES = stages;
})(typeof window !== 'undefined' ? window : globalThis);
