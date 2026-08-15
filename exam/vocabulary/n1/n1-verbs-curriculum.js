(function (global) {
    const groups = [
        {
            id: 1,
            title: "物体操作与加工",
            summary: "按照耕作抓取、放置装配、连接分离和损坏消亡分类学习物体操作。"
        },
        {
            id: 2,
            title: "生产经营与数量变化",
            summary: "学习资源经营、能力成长和数量兴衰三类常见用法。"
        },
        {
            id: 3,
            title: "空间移动与感官变化",
            summary: "学习阻隔回避、移动方向和光影音声等感官变化。"
        },
        {
            id: 4,
            title: "身心状态与人际关系",
            summary: "学习身体恢复、困境反应和亲近照顾中的常用动词。"
        },
        {
            id: 5,
            title: "沟通、冲突与决策",
            summary: "学习请求回应、语言评价、人际冲突、计划推进和判断处置。"
        }
    ];

    const days = [
        {
            id: 1,
            groupId: 1,
            groupTitle: groups[0].title,
            groupSummary: groups[0].summary,
            title: "耕作、采集与抓取",
            wordIds: [40, 41, 42, 49, 50, 51, 52, 53, 91, 92, 93, 99, 128, 180]
        },
        {
            id: 2,
            groupId: 1,
            groupTitle: groups[0].title,
            groupSummary: groups[0].summary,
            title: "放置、固定与装配",
            wordIds: [60, 90, 94, 96, 120, 179, 181, 183, 186, 211, 223, 267]
        },
        {
            id: 3,
            groupId: 1,
            groupTitle: groups[0].title,
            groupSummary: groups[0].summary,
            title: "连接、分离与形状变化",
            wordIds: [34, 48, 58, 81, 83, 84, 85, 117, 182, 207, 255, 256, 258, 266]
        },
        {
            id: 4,
            groupId: 1,
            groupTitle: groups[0].title,
            groupSummary: groups[0].summary,
            title: "损坏、松脱与消亡",
            wordIds: [8, 9, 10, 12, 14, 27, 54, 55, 56, 57, 82, 219, 225]
        },

        {
            id: 5,
            groupId: 2,
            groupTitle: groups[1].title,
            groupSummary: groups[1].summary,
            title: "储备、供给与经营",
            wordIds: [0, 1, 2, 3, 6, 7, 11, 13, 62, 113, 188, 226, 262, 279]
        },
        {
            id: 6,
            groupId: 2,
            groupTitle: groups[1].title,
            groupSummary: groups[1].summary,
            title: "培养、磨练与成长",
            wordIds: [28, 29, 30, 31, 32, 33, 44, 45, 46, 47, 74, 129, 130, 133, 174, 277]
        },
        {
            id: 7,
            groupId: 2,
            groupTitle: groups[1].title,
            groupSummary: groups[1].summary,
            title: "聚集、增减与兴衰",
            wordIds: [4, 24, 25, 26, 35, 36, 37, 38, 39, 97, 98, 127, 173, 210]
        },

        {
            id: 8,
            groupId: 3,
            groupTitle: groups[2].title,
            groupSummary: groups[2].summary,
            title: "阻挡、隐藏与回避",
            wordIds: [67, 68, 69, 71, 72, 73, 76, 78, 79, 86, 87, 142, 143, 144, 172, 276, 278]
        },
        {
            id: 9,
            groupId: 3,
            groupTitle: groups[2].title,
            groupSummary: groups[2].summary,
            title: "行进、漂移与方向变化",
            wordIds: [43, 77, 80, 88, 89, 103, 158, 176, 177, 178, 216, 218, 224, 229, 235]
        },
        {
            id: 10,
            groupId: 3,
            groupTitle: groups[2].title,
            groupSummary: groups[2].summary,
            title: "光影、声音与感官变化",
            wordIds: [19, 61, 102, 116, 118, 131, 132, 134, 135, 136, 137, 138, 151, 205, 209, 236, 237, 253]
        },

        {
            id: 11,
            groupId: 4,
            groupTitle: groups[3].title,
            groupSummary: groups[3].summary,
            title: "身体不适、休息与恢复",
            wordIds: [5, 59, 95, 126, 139, 140, 141, 146, 147, 164, 175, 222, 243]
        },
        {
            id: 12,
            groupId: 4,
            groupTitle: groups[3].title,
            groupSummary: groups[3].summary,
            title: "恐惧、犹豫与困境反应",
            wordIds: [66, 110, 114, 115, 153, 154, 155, 159, 160, 161, 162, 163, 165, 206, 208, 231, 232, 260, 261, 271]
        },
        {
            id: 13,
            groupId: 4,
            groupTitle: groups[3].title,
            groupSummary: groups[3].summary,
            title: "亲近、照顾与敬意",
            wordIds: [20, 21, 22, 23, 145, 152, 156, 157, 168, 169, 170, 171, 187, 268]
        },

        {
            id: 14,
            groupId: 5,
            groupTitle: groups[4].title,
            groupSummary: groups[4].summary,
            title: "委托、请求与回应",
            wordIds: [18, 65, 70, 100, 108, 150, 189, 192, 201, 202, 203, 204, 212, 265]
        },
        {
            id: 15,
            groupId: 5,
            groupTitle: groups[4].title,
            groupSummary: groups[4].summary,
            title: "表达、劝诫与评价",
            wordIds: [166, 167, 190, 191, 193, 200, 213, 214, 215, 217, 244, 246, 270]
        },
        {
            id: 16,
            groupId: 5,
            groupTitle: groups[4].title,
            groupSummary: groups[4].summary,
            title: "欺骗、冲突与敌意",
            wordIds: [16, 63, 124, 194, 195, 196, 197, 238, 239, 240, 241, 245, 247, 248, 249, 250, 251, 252, 254, 264, 274]
        },
        {
            id: 17,
            groupId: 5,
            groupTitle: groups[4].title,
            groupSummary: groups[4].summary,
            title: "计划、挑战与目标推进",
            wordIds: [64, 75, 101, 106, 107, 109, 119, 121, 122, 123, 125, 148, 149, 184, 185, 242, 263, 272, 273, 275]
        },
        {
            id: 18,
            groupId: 5,
            groupTitle: groups[4].title,
            groupSummary: groups[4].summary,
            title: "比较、判断与结果处置",
            wordIds: [15, 17, 104, 105, 111, 112, 198, 199, 220, 221, 227, 228, 230, 233, 234, 257, 259, 269]
        }
    ];

    const stages = [
        { id: 1, groupId: 1, groupTitle: groups[0].title, title: "大类 1 · 物体操作与加工", dayIds: [1, 2, 3, 4] },
        { id: 2, groupId: 2, groupTitle: groups[1].title, title: "大类 2 · 生产经营与数量变化", dayIds: [5, 6, 7] },
        { id: 3, groupId: 3, groupTitle: groups[2].title, title: "大类 3 · 空间移动与感官变化", dayIds: [8, 9, 10] },
        { id: 4, groupId: 4, groupTitle: groups[3].title, title: "大类 4 · 身心状态与人际关系", dayIds: [11, 12, 13] },
        { id: 5, groupId: 5, groupTitle: groups[4].title, title: "大类 5 · 沟通、冲突与决策", dayIds: [14, 15, 16, 17, 18] }
    ];

    global.LAB_N1_VERB_GROUPS = groups;
    global.LAB_N1_VERB_DAYS = days;
    global.LAB_N1_VERB_STAGES = stages;
})(typeof window !== "undefined" ? window : globalThis);
