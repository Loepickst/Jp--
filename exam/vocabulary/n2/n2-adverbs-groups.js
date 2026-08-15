(function (global) {
    'use strict';

    const categoryList = Array.isArray(global.ADVERB_CATEGORY_LIST) ? global.ADVERB_CATEGORY_LIST : [];
    const entries = Array.isArray(global.FULL_WORD_LIST)
        ? global.FULL_WORD_LIST
            .map((word, index) => ({ index, word }))
            .filter((entry) => {
                const surface = String(entry.word && entry.word.word ? entry.word.word : '').trim();
                return surface && surface !== '（準備中）' && surface !== '---';
            })
        : [];

    const mainCategoryNames = [];
    categoryList.forEach((category) => {
        const name = String(category.mainCategory || '').trim();
        if (name && !mainCategoryNames.includes(name)) mainCategoryNames.push(name);
    });

    const groups = mainCategoryNames.map((title, index) => ({
        id: index + 1,
        title,
        summary: ''
    }));

    const groupDayNumbers = new Map();
    let nextDayId = 1;
    const days = categoryList.map((category) => {
        const mainCategory = String(category.mainCategory || '').trim();
        const group = groups.find((item) => item.title === mainCategory);
        const groupId = group ? group.id : 1;
        const dayNumber = (groupDayNumbers.get(groupId) || 0) + 1;
        groupDayNumbers.set(groupId, dayNumber);
        const categoryId = String(category.id || '').trim();
        return {
            id: nextDayId++,
            groupId,
            groupTitle: group ? group.title : mainCategory,
            groupSummary: group ? group.summary : '',
            dayNumber,
            title: `${dayNumber}日目`,
            categoryId,
            categoryTitle: String(category.title || '').trim(),
            wordIds: entries
                .filter((entry) => String(entry.word.sourceCategoryId || entry.word.categoryId || '').trim() === categoryId)
                .sort((left, right) => Number(left.word.sourceOrder || left.index + 1) - Number(right.word.sourceOrder || right.index + 1))
                .map((entry) => entry.index)
        };
    }).filter((day) => day.wordIds.length > 0);

    const stages = groups.map((group) => ({
        id: group.id,
        groupId: group.id,
        groupTitle: group.title,
        title: group.title,
        dayIds: days.filter((day) => day.groupId === group.id).map((day) => day.id)
    })).filter((stage) => stage.dayIds.length > 0);

    global.LAB_N2_ADVERB_GROUPS = groups;
    global.LAB_N2_ADVERB_DAYS = days;
    global.LAB_N2_ADVERB_STAGES = stages;
})(typeof window !== 'undefined' ? window : globalThis);
