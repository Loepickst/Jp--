(function (window) {
    const COLLECTION_KEY = "omikujiCollection";
    const COLLECTION_META_KEY = "omikujiCollectionMeta_v1";

    const RARITY_ORDER = Object.freeze(["EX", "MR", "SP", "KR", "UR", "SSR", "SR", "R"]);
    const RARITY_COLORS = Object.freeze({
        EX: "#5B4BC4",
        MR: "#B7282E",
        SP: "#9c27b0",
        KR: "#000000",
        UR: "#d4af37",
        SSR: "#d32f2f",
        SR: "#00897b",
        R: "#f57c00"
    });
    const FOIL_CONFIG = Object.freeze({
        pityThreshold: 60,
        duplicateRate: 0.10
    });
    const HIDDEN_STAGE2_UNLOCK_COUNTS = Object.freeze({
        R: 15,
        SR: 12,
        SSR: 10,
        UR: 8,
        KR: 5
    });
    const limitedEvents = Object.freeze([
        {
            id: "foil_once_2026_07",
            type: "guaranteed_foil_once",
            title: "必闪卡",
            label: "一次性道具",
            desc: "使用后，下一张可闪卡必为闪卡。",
            deliveryMode: "consumable_card",
            quantity: 2,
            status: "active"
        }
    ]);

    const THEME_SET_BY_CARD_ID = Object.freeze({});

    const EX_CARD_ASSET_BASE = "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/";
    const LEGACY_PRACTICE_REWARD_ID_MAP = Object.freeze({
        growth_vocabulary_max: "practice_yaji_max",
        growth_grammar_max: "practice_gaoji_max",
        growth_reading_max: "practice_geji_max",
        growth_listening_max: "practice_anji_max",
        practice_tingji_max: "practice_anji_max"
    });

    function safeParseJSON(rawValue, fallback) {
        try {
            const parsed = JSON.parse(rawValue);
            return parsed === null || parsed === undefined ? fallback : parsed;
        } catch (error) {
            return fallback;
        }
    }

    function normalizeFortuneId(value) {
        const normalizedValue = String(value || "").trim();
        if (!normalizedValue) {
            return "";
        }
        return LEGACY_PRACTICE_REWARD_ID_MAP[normalizedValue] || normalizedValue;
    }

    function getCollectionVariantCounts(entry, fallbackCount = 0) {
        const totalCount = Math.max(0, Number.parseInt(fallbackCount, 10) || 0);
        const variants = entry && entry.variants;
        let normalCount = Math.max(0, Number.parseInt(variants && variants.normalCount, 10) || 0);
        const foilCount = Math.max(0, Number.parseInt(variants && variants.foilCount, 10) || 0);

        if (!variants || typeof variants !== "object" || Array.isArray(variants)) {
            normalCount = totalCount;
        } else if (normalCount + foilCount < totalCount) {
            normalCount += totalCount - normalCount - foilCount;
        }

        return { normalCount, foilCount };
    }

    function mergeCollectionMetaEntry(baseEntry, incomingEntry) {
        const count = Number.parseInt(incomingEntry && incomingEntry.count, 10);
        if (!Number.isInteger(count) || count <= 0) {
            return baseEntry || null;
        }

        const nextEntry = baseEntry
            ? { ...baseEntry }
            : {
                count: 0,
                firstObtainedAt: null,
                lastObtainedAt: null,
                isNew: false
            };

        const firstObtainedAt = Number(incomingEntry.firstObtainedAt);
        const lastObtainedAt = Number(incomingEntry.lastObtainedAt);
        const baseVariants = getCollectionVariantCounts(nextEntry, nextEntry.count);
        const incomingVariants = getCollectionVariantCounts(incomingEntry, count);
        nextEntry.count += count;
        nextEntry.variants = {
            normalCount: baseVariants.normalCount + incomingVariants.normalCount,
            foilCount: baseVariants.foilCount + incomingVariants.foilCount
        };
        nextEntry.preferredVariant = incomingEntry.preferredVariant === "foil" || nextEntry.preferredVariant === "foil"
            ? "foil"
            : "normal";
        if (Number.isFinite(firstObtainedAt) && firstObtainedAt > 0) {
            nextEntry.firstObtainedAt = nextEntry.firstObtainedAt
                ? Math.min(nextEntry.firstObtainedAt, firstObtainedAt)
                : firstObtainedAt;
        }
        if (Number.isFinite(lastObtainedAt) && lastObtainedAt > 0) {
            nextEntry.lastObtainedAt = nextEntry.lastObtainedAt
                ? Math.max(nextEntry.lastObtainedAt, lastObtainedAt)
                : lastObtainedAt;
        }
        nextEntry.isNew = Boolean(nextEntry.isNew || incomingEntry.isNew);
        const incomingExclusiveVariantId = String(incomingEntry.exclusiveVariantId || "").trim();
        if (!nextEntry.exclusiveVariantId && incomingExclusiveVariantId) {
            nextEntry.exclusiveVariantId = incomingExclusiveVariantId;
        }
        const hiddenStage2UnlockedAt = Number(incomingEntry.hiddenStage2UnlockedAt);
        if (Number.isFinite(hiddenStage2UnlockedAt) && hiddenStage2UnlockedAt > 0) {
            nextEntry.hiddenStage2UnlockedAt = nextEntry.hiddenStage2UnlockedAt
                ? Math.min(nextEntry.hiddenStage2UnlockedAt, hiddenStage2UnlockedAt)
                : hiddenStage2UnlockedAt;
        }
        return nextEntry;
    }

    function attachCatalogMetadata(card) {
        return {
            acquireMode: "draw",
            themeSetId: THEME_SET_BY_CARD_ID[card.id] || "",
            ...card
        };
    }

    function createHiddenStage2(rarity, icon) {
        return {
            unlockCount: HIDDEN_STAGE2_UNLOCK_COUNTS[rarity] || 10,
            icon
        };
    }

    const fortunes = [
        { id: "sp1", rarity: "SP", title: "感谢祭", desc: "感谢你一直以来的支持，谢谢。", weight: 1, color: "#9c27b0", icon: `${EX_CARD_ASSET_BASE}ganxieji.png`, isSpecial: true },
        {
            id: "sp_qiuji_autumn",
            rarity: "SP",
            title: "秋吉",
            desc: "上次的怦然心动，还记得是什么时候吗",
            weight: 1,
            color: "#9c27b0",
            icon: "takarakuji/qiuji_starlight.webp",
            isSpecial: true,
            poolRole: "guaranteed_once",
            guaranteedOnce: true,
            lockedCollectionTitle: "秋吉",
            lockedCollectionMark: "？",
            exclusiveArtVariants: [
                {
                    id: "starlight",
                    icon: "takarakuji/qiuji_starlight.webp",
                    desc: "上次的怦然心动，还记得是什么时候吗"
                },
                {
                    id: "pumpkin",
                    icon: "takarakuji/qiuji_pumpkin.webp",
                    desc: "秋天的第一个南瓜，最甜了"
                },
                {
                    id: "companions",
                    icon: "takarakuji/qiuji_companions.webp",
                    desc: "好狗伴，陪一生"
                },
                {
                    id: "hike",
                    icon: "takarakuji/qiuji_hike.webp",
                    desc: "来一场说走就走的远足吧"
                }
            ]
        },
        { id: "food_journey_jiangbanya", rarity: "SP", title: "酱吉", desc: "好的就是山胡椒油这口味", weight: 1, color: "#9c27b0", icon: "takarakuji/food_journey_jiangbanya.webp", isSpecial: true, unlockPoolId: "ki_food_journey", poolRole: "followup", unlockRequirement: { type: "card_owned", cardId: "food_journey_chiji_starter" } },
        { id: "food_journey_choudoufu", rarity: "SP", title: "臭吉", desc: "臭臭的，但是吃着挺香", weight: 1, color: "#9c27b0", icon: "takarakuji/food_journey_choudoufu.webp", isSpecial: true, unlockPoolId: "ki_food_journey", poolRole: "followup", unlockRequirement: { type: "card_owned", cardId: "food_journey_chiji_starter" } },
        { id: "food_journey_xiaolongxia", rarity: "SP", title: "虾吉", desc: "小龙虾配啤酒，最高！", weight: 1, color: "#9c27b0", icon: "takarakuji/food_journey_xiaolongxia.webp", isSpecial: true, unlockPoolId: "ki_food_journey", poolRole: "followup", unlockRequirement: { type: "card_owned", cardId: "food_journey_chiji_starter" } },
        { id: "food_journey_chayan", rarity: "SP", title: "茶吉", desc: "一杯筝筝纸鸢，不加糖，谢谢", weight: 1, color: "#9c27b0", icon: "takarakuji/food_journey_chayan.webp", isSpecial: true, unlockPoolId: "ki_food_journey", poolRole: "followup", unlockRequirement: { type: "card_owned", cardId: "food_journey_chiji_starter" } },
        { id: "food_journey_yutou", rarity: "SP", title: "鱼吉", desc: "真是，太！好！吃！啦！", weight: 1, color: "#9c27b0", icon: "takarakuji/food_journey_yutou.webp", isSpecial: true, unlockPoolId: "ki_food_journey", poolRole: "followup", unlockRequirement: { type: "card_owned", cardId: "food_journey_chiji_starter" } },
        { id: "f1", rarity: "KR", title: "旺吉", desc: "🎉你就是最帅（美）的气运之子🎉！kiki祝福你，旺！", weight: 3, color: "#000000", icon: `${EX_CARD_ASSET_BASE}wangji.png`, foilVariant: { icon: "takarakuji/foil_wangji.webp?v=20260720-redesign3" } },
        { id: "f19", rarity: "KR", title: "乐吉", desc: "喝上一口肥宅水，快乐一整天！", weight: 7, color: "#000000", icon: `${EX_CARD_ASSET_BASE}keleji.png` },
        { id: "food_journey_chiji_starter", rarity: "KR", title: "吃吉", desc: "学饿了，出去吃点东西吧～", weight: 7, color: "#000000", icon: "takarakuji/chiji%202.png", unlockPoolId: "ki_food_journey", poolRole: "starter" },
        { id: "theme_worldcup_mengji", rarity: "KR", title: "梦吉", desc: "梦里什么都有，洗洗睡吧", weight: 7, color: "#000000", icon: "takarakuji/mengji.webp?v=20260721-redesign1", foilVariant: { icon: "takarakuji/foil_mengji.webp?v=20260721-foil1" } },
        { id: "f34", rarity: "KR", title: "肯吉", desc: "疯狂星期四，V你50。真要啊！不行，我要自己吃。", weight: 2, color: "#000000", icon: `${EX_CARD_ASSET_BASE}kenji.png`, availability: { type: "weekday", weekdays: [4], label: "周四限定" } },
        { id: "f21", rarity: "KR", title: "桃吉", desc: "学习上的不如意，说不定会带来其他方面的好运哦～", weight: 3, color: "#000000", icon: `${EX_CARD_ASSET_BASE}taoji.png` },
        { id: "f37", rarity: "KR", title: "画吉", desc: "快看～，我成为一幅画了，啊啊啊啊啊啊", weight: 3, color: "#000000", icon: `${EX_CARD_ASSET_BASE}huaji.png` },
        { id: "f32", rarity: "KR", title: "天吉", desc: "知识中的私语，细细聆听，那是日语之神对你的回应。", weight: 3, color: "#000000", icon: `${EX_CARD_ASSET_BASE}tianji.png` },
        { id: "f45", rarity: "KR", title: "武吉", desc: "迷えば、敗れる", weight: 3, color: "#000000", icon: `${EX_CARD_ASSET_BASE}wuji.png`, foilVariant: { icon: "takarakuji/foil_wuji.webp?v=20260717-redesign1" } },
        { id: "f46", rarity: "KR", title: "哦吉", desc: "哦？能力考嘛，面白い。", weight: 3, color: "#000000", icon: "takarakuji/ohji.webp" },
        { id: "f48", rarity: "KR", title: "忍吉", desc: "吃得痛中痛，方为狗上狗，啊，轻点轻点～！", weight: 3, color: "#000000", icon: "takarakuji/renji.webp?v=20260720-renji1", foilVariant: { icon: "takarakuji/foil_renji.webp?v=20260720-renji-foil1" } },
        { id: "practice_yaji_max", rarity: "KR", title: "丫吉", desc: "去背你的单词，别抢我的肉啦。", weight: 3, color: "#000000", icon: "takarakuji/yaji2.png", themeSetId: "exam_good_luck" },
        { id: "practice_gaoji_max", rarity: "KR", title: "高吉", desc: "文字里的故事，就如怀中的手办一样温暖。", weight: 3, color: "#000000", icon: "takarakuji/gaoji.png", themeSetId: "exam_good_luck" },
        { id: "practice_geji_max", rarity: "KR", title: "🐦吉", desc: "读到关键句时，线索像小鸟一样轻轻落回掌心，整篇文章也会突然明朗。", weight: 3, color: "#000000", icon: "takarakuji/geji2.png", themeSetId: "exam_good_luck" },
        { id: "practice_anji_max", rarity: "KR", title: "安吉", desc: "天気がいいから、散歩しましょう", weight: 3, color: "#000000", icon: "takarakuji/anji.png", themeSetId: "exam_good_luck" },
        { id: "f8", rarity: "UR", title: "神吉", desc: "⛩️考神附体！今天直觉准得可怕，做阅读题一抓一个准，就算蒙的也全对！", weight: 1, color: "#d4af37", icon: `${EX_CARD_ASSET_BASE}shenji.png` },
        { id: "f7", rarity: "UR", title: "玉吉", desc: "一尾便是一重境界。熬过漫长的沉淀与枯燥的练习，终能修得灵动的语感。", weight: 3, color: "#F44336", icon: `${EX_CARD_ASSET_BASE}huji.png`, themeSetId: "hyakki_yakou" },
        { id: "f16", rarity: "UR", title: "鹿吉", desc: "步履从容，一步一印，语感自然如影随形。", weight: 1, color: "#e6b422", icon: `${EX_CARD_ASSET_BASE}luji2.png` },
        { id: "f22", rarity: "UR", title: "学吉", desc: "切磋琢磨之友，乃求学路上的不灭之光。", weight: 1, color: "#d4af37", icon: `${EX_CARD_ASSET_BASE}xueji.png`, foilVariant: { icon: "takarakuji/foil_youji_friend.webp?v=20260717-redesign1" } },
        { id: "f30", rarity: "UR", title: "狮吉", desc: "即使是幼小的“可爱”，终有一天也可成为草原的王！（😆）", weight: 1, color: "#d4af37", icon: `${EX_CARD_ASSET_BASE}shiji.png` },
        { id: "f35", rarity: "UR", title: "绯吉", desc: "软软的狗耳朵，可是为听八卦而生的哦！", weight: 1, color: "#d4af37", icon: `${EX_CARD_ASSET_BASE}feiji.png` },
        { id: "f47", rarity: "UR", title: "马吉", desc: "骐骥非一跃而致千里，学亦如是；日积寸功，终可策马凌云。", weight: 1, color: "#B8893C", icon: "takarakuji/maji.webp" },
        { id: "f2", rarity: "SSR", title: "虎吉", desc: "运气爆棚！干什么都是如虎添翼，チョロいもんだぜ！", weight: 5, color: "#d32f2f", icon: `${EX_CARD_ASSET_BASE}huyan.png`, foilVariant: { icon: "takarakuji/foil_huji_tiger.webp?v=20260720-redesign3" } },
        { id: "f9", rarity: "SSR", title: "猫吉", desc: "明确内心，不被外界所迷惑，直取自己的“目标”，走最优雅的“猫步”。", weight: 5, color: "#ec407a", icon: `${EX_CARD_ASSET_BASE}maoji2.png`, hiddenStage2: createHiddenStage2("SSR", "takarakuji/stage2_maoji.webp"), foilVariant: { icon: "takarakuji/foil_maoji.webp?v=20260717-redesign1" } },
        { id: "f12", rarity: "SSR", title: "鸽吉", desc: "咕咕咕，咕咕咕咕咕咕咕，咕咕？咕！", weight: 3, color: "#d32f2f", icon: `${EX_CARD_ASSET_BASE}geji.png`, hiddenStage2: createHiddenStage2("SSR", "takarakuji/stage2_geji.png"), foilVariant: { icon: "takarakuji/foil_geji.webp?v=20260717-redesign2" } },
        { id: "f13", rarity: "SSR", title: "蛇吉", desc: "褪下“舒适”的旧壳，灵动的语感方能重获新生。", weight: 5, color: "#ec407a", icon: `${EX_CARD_ASSET_BASE}sheji.png`, foilVariant: { icon: "takarakuji/foil_sheji.webp?v=20260720-redesign3" } },
        { id: "f20", rarity: "SSR", title: "憨吉", desc: "狗狗我啊，今天，指定是不行了。（不行！）", weight: 4, color: "#1976d2", icon: `${EX_CARD_ASSET_BASE}cheemsji.png` },
        { id: "f23", rarity: "SSR", title: "猪吉", desc: "猪突猛进，猪突猛进，猪突猛劲！冲！", weight: 4, color: "#ec407a", icon: `${EX_CARD_ASSET_BASE}zhuji.png`, foilVariant: { icon: "takarakuji/foil_zhuji.webp?v=20260717-redesign1" } },
        { id: "f26", rarity: "SSR", title: "羊吉", desc: "昨天已成过去，明天无人能知，那就好好享受只属于我们的今天吧！", weight: 5, color: "#ec407a", icon: `${EX_CARD_ASSET_BASE}yangji.png`, foilVariant: { icon: "takarakuji/foil_yangji.webp?v=20260720-redesign3" } },
        { id: "f27", rarity: "SSR", title: "鸭吉", desc: "累了吗，渴了吗，饿了吗，再坚持坚持，就差一点了，冲鸭！", weight: 5, color: "#1976d2", icon: `${EX_CARD_ASSET_BASE}yaji.png`, foilVariant: { icon: "takarakuji/foil_yaji.webp?v=20260720-redesign3" } },
        { id: "f28", rarity: "SSR", title: "豹吉", desc: "他人的光辉不属于自己，正视自己的一切，扎实走好每一步才是真。", weight: 5, color: "#d32f2f", icon: `${EX_CARD_ASSET_BASE}baoji.png`, foilVariant: { icon: "takarakuji/foil_baoji.webp?v=20260720-redesign3" } },
        { id: "f38", rarity: "SSR", title: "象吉", desc: "只有真正的硬实力，才会让一切“臣服”与你。", weight: 5, color: "#d32f2f", icon: `${EX_CARD_ASSET_BASE}xiangji.png`, foilVariant: { icon: "takarakuji/foil_xiangji.webp?v=20260720-redesign3" } },
        { id: "f10", rarity: "SR", title: "蝴吉", desc: "飞舞的思绪！如蝶一般，“漂亮”的拿下今天的知识吧。", weight: 10, color: "#00897b", icon: `${EX_CARD_ASSET_BASE}chongji.png`, foilVariant: { icon: "takarakuji/foil_chouji.webp?v=20260717-redesign1" } },
        { id: "f3", rarity: "SR", title: "猴吉", desc: "做不了真“大圣”，也能拥有“大圣”心，先得敢想，才能真成！", weight: 10, color: "#388e3c", icon: `${EX_CARD_ASSET_BASE}houji.png`, hiddenStage2: createHiddenStage2("SR", "takarakuji/stage2_houji.png"), foilVariant: { icon: "takarakuji/foil_houji.webp?v=20260717-redesign2" } },
        { id: "f36", rarity: "SR", title: "挠吉", desc: "是玩还是学，this is a question！", weight: 10, color: "#388e3c", icon: `${EX_CARD_ASSET_BASE}naoji.png`, foilVariant: { icon: "takarakuji/foil_naoji.webp?v=20260717-redesign2" } },
        { id: "f6", rarity: "SR", title: "熊吉", desc: "学饿了就吃点，吃饱了就休息，那学习呢？学习就明天再说吧。", weight: 10, color: "#7b1fa2", icon: `${EX_CARD_ASSET_BASE}xiongji.png`, hiddenStage2: createHiddenStage2("SR", "takarakuji/stage2_xiongji.webp"), foilVariant: { icon: "takarakuji/foil_xiongji.webp?v=20260717-redesign1" } },
        { id: "f14", rarity: "SR", title: "燕吉", desc: "每天只衔一个词，日积月累，也能筑起坚不可摧的语言之巢。", weight: 10, color: "#7b1fa2", icon: `${EX_CARD_ASSET_BASE}yanji.png`, hiddenStage2: createHiddenStage2("SR", "takarakuji/stage2_yanji.webp"), foilVariant: { icon: "takarakuji/foil_yanji.webp?v=20260717-redesign1" } },
        { id: "f17", rarity: "SR", title: "牛吉", desc: "纵使当下如对牛弹琴般不得要领，耐下性子温故知新，笨功夫自有回响。", weight: 10, color: "#546e7a", icon: `${EX_CARD_ASSET_BASE}niuji.png`, hiddenStage2: createHiddenStage2("SR", "takarakuji/stage2_niuji.png"), foilVariant: { icon: "takarakuji/foil_niuji.webp?v=20260717-redesign2" } },
        { id: "f24", rarity: "SR", title: "兔吉", desc: "兔起鹘落般的进步，恰恰蕴藏在从一到十、踏踏实实的研磨之中。", weight: 10, color: "#00897b", icon: `${EX_CARD_ASSET_BASE}tuji.png`, foilVariant: { icon: "takarakuji/foil_tuji.webp?v=20260720-rabbit-foil-final1" } },
        { id: "f29", rarity: "SR", title: "狈吉", desc: "他人眼中的“奸”，也可以是真正的“友”。", weight: 10, color: "#546e7a", icon: `${EX_CARD_ASSET_BASE}beiji.png`, foilVariant: { icon: "takarakuji/foil_beiji.webp?v=20260717-redesign2" } },
        { id: "f33", rarity: "SR", title: "碌吉", desc: "答完你的，答你的，一个一个来。", weight: 10, color: "#7b1fa2", icon: `${EX_CARD_ASSET_BASE}luji3.png`, foilVariant: { icon: "takarakuji/foil_luji.webp?v=20260717-redesign2" } },
        { id: "f5", rarity: "R", title: "犬吉", desc: "温故而知新。比起新内容，今天更适合把之前的错题翻出来‘叙叙旧’哦！", weight: 30, color: "#f57c00", icon: `${EX_CARD_ASSET_BASE}quanji.png`, hiddenStage2: createHiddenStage2("R", "takarakuji/stage2_quanji.png"), foilVariant: { icon: "takarakuji/foil_quanji.webp?v=20260717-redesign1" } },
        { id: "f4", rarity: "R", title: "鼠吉", desc: "一点一滴地搬运，终能囤满语言的粮仓。", weight: 30, color: "#1976d2", icon: `${EX_CARD_ASSET_BASE}shuji.png`, hiddenStage2: createHiddenStage2("R", "takarakuji/stage2_shuji.png"), foilVariant: { icon: "takarakuji/foil_shuji.webp?v=20260717-redesign1" } },
        { id: "f11", rarity: "R", title: "狐吉", desc: "🍵普普通通、平平淡淡的一天。按部就班地背单词吧，没有波澜也是一种幸福。", weight: 30, color: "#8d6e63", icon: `${EX_CARD_ASSET_BASE}pingji.png`, hiddenStage2: createHiddenStage2("R", "takarakuji/stage2_huji.png"), foilVariant: { icon: "takarakuji/foil_huji.webp?v=20260717-redesign1" } },
        { id: "f15", rarity: "R", title: "龟吉", desc: "要想“快”，先得“慢”，只有学会了放平心态去细细打磨，“快”便会自然出现。", weight: 30, color: "#8d6e63", icon: `${EX_CARD_ASSET_BASE}guiji.png`, hiddenStage2: createHiddenStage2("R", "takarakuji/stage2_guiji.png"), foilVariant: { icon: "takarakuji/foil_guiji.webp?v=20260720-rabbit-turtle-fix1" } },
        { id: "f18", rarity: "R", title: "鼬吉", desc: "思维若如鼬般柔软，再凶狠的学习障碍，也能轻盈越过。", weight: 30, color: "#8d6e63", icon: `${EX_CARD_ASSET_BASE}youji.png`, hiddenStage2: createHiddenStage2("R", "takarakuji/stage2_youji.png"), foilVariant: { icon: "takarakuji/foil_youji.webp?v=20260717-redesign2" } },
        { id: "f31", rarity: "R", title: "鬼吉", desc: "好意的显现，不一定是笑容，有时候也可能会是某种“恐怖😱”哦", weight: 30, color: "#8d6e63", icon: `${EX_CARD_ASSET_BASE}eji.png`, hiddenStage2: createHiddenStage2("R", "takarakuji/stage2_eji.png"), foilVariant: { icon: "takarakuji/foil_eji.webp?v=20260717-redesign2" } },
        { id: "f25", rarity: "R", title: "鵺吉", desc: "困难，即是机遇，不要畏惧不要害怕，解题之法就在其中！", weight: 30, color: "#8d6e63", icon: `${EX_CARD_ASSET_BASE}nueji.png`, themeSetId: "hyakki_yakou", hiddenStage2: createHiddenStage2("R", "takarakuji/stage2_nueji.png"), foilVariant: { icon: "takarakuji/foil_nueji.webp?v=20260720-redesign3" } },
        { id: "f40", rarity: "SSR", title: "狗吉", desc: "万人的敬仰，源自你手中的力量", weight: 5, color: "#d32f2f", icon: `${EX_CARD_ASSET_BASE}tiangouji.png`, themeSetId: "hyakki_yakou" },
        { id: "f41", rarity: "UR", title: "岐吉", desc: "狂乱肆虐的欲望，看，它正在吞噬一切", weight: 1, color: "#d4af37", icon: `${EX_CARD_ASSET_BASE}qiji.png`, themeSetId: "hyakki_yakou" },
        { id: "f42", rarity: "SR", title: "座吉", desc: "那微小的脚步声，便是幸福的证明。", weight: 10, color: "#00897b", icon: `${EX_CARD_ASSET_BASE}zuoji.png`, themeSetId: "hyakki_yakou", hiddenStage2: createHiddenStage2("SR", "takarakuji/stage2_zuoji.png") },
        { id: "f43", rarity: "SR", title: "河吉", desc: "吾乃清流の主，要来比试相扑吗", weight: 10, color: "#00897b", icon: `${EX_CARD_ASSET_BASE}tongji.png`, themeSetId: "hyakki_yakou", foilVariant: { icon: "takarakuji/foil_heji.webp?v=20260717-redesign2" } },
        { id: "f44", rarity: "UR", title: "雪吉", desc: "最冰冷的话语，蕴藏着最温暖的真情。", weight: 1, color: "#d4af37", icon: `${EX_CARD_ASSET_BASE}xueji2.png`, themeSetId: "hyakki_yakou" },
        { id: "f39", rarity: "R", title: "鹰吉", desc: "日复一日的练习，必然让你练就锐利的“鹰眼”，一箭正中要害！", weight: 30, color: "#5C4A3D", icon: `${EX_CARD_ASSET_BASE}yingji.png`, hiddenStage2: createHiddenStage2("R", "takarakuji/stage2_yingji.png"), foilVariant: { icon: "takarakuji/foil_yingji.webp?v=20260717-redesign2" } }
    ].map(attachCatalogMetadata);

    const petRewardFortunes = Object.freeze([]);

    const achievementRewardFortunes = [
        {
            id: "sp_yingji1",
            rarity: "SP",
            title: "赢吉",
            desc: "相信自己，会赢的！",
            color: "#9c27b0",
            icon: `${EX_CARD_ASSET_BASE}yingji1.png`,
            isRewardOnly: true,
            acquireMode: "achievement",
            rewardSource: { type: "level_practice_count", level: "N1", threshold: 30 }
        }
    ];

    const practiceRewardFortunes = [
        { id: "practice_ciji_past_vocab", rarity: "MR", title: "词吉", desc: "指尖跃动的假名，是对你努力的回应", color: "#A85A3D", icon: "takarakuji/ciji.png", isRewardOnly: true, acquireMode: "growth" }
    ];

    const themeRewardFortunes = [
        {
            id: "practice_shengji_max",
            rarity: "MR",
            title: "胜吉",
            desc: "烟花的美丽稍纵即逝，但你的努力不会消失。",
            color: "#C96A2A",
            icon: "takarakuji/shengji.png",
            isRewardOnly: true,
            acquireMode: "set_reward",
            themeSetId: "exam_good_luck",
            rewardSource: { type: "set_complete", setId: "exam_good_luck" }
        },
        {
            id: "theme_hyakki_yakou_chiji",
            rarity: "MR",
            title: "魑吉",
            desc: "狗长鼻，猫长尾，狐现九尾，百兽夜行～",
            color: "#B7282E",
            icon: `${EX_CARD_ASSET_BASE}chiji.png`,
            isRewardOnly: true,
            acquireMode: "set_reward",
            themeSetId: "hyakki_yakou",
            rewardSource: { type: "set_complete", setId: "hyakki_yakou" }
        }
    ];

    const themeSets = Object.freeze([
        {
            id: "exam_good_luck",
            title: "考试大吉",
            intro: "把词汇、语法、阅读与听力四张积累卡收齐后，这场旅程便会真正迎来属于你的胜利。",
            cardIds: ["practice_yaji_max", "practice_gaoji_max", "practice_geji_max", "practice_anji_max"],
            rewardCardId: "practice_shengji_max",
            coverCardId: "practice_yaji_max"
        },
        {
            id: "hyakki_yakou",
            title: "百鬼夜行",
            intro: "众妖踏月而来，百鬼夜行。集齐夜行众相后，终可见真相。",
            cardIds: ["f25", "f7", "f40", "f41", "f42", "f43", "f44"],
            rewardCardId: "theme_hyakki_yakou_chiji",
            coverCardId: "f40"
        }
    ]);

    const unlockPools = Object.freeze([
        {
            id: "ki_food_journey",
            title: "kiの美食旅",
            starterCardId: "food_journey_chiji_starter",
            status: "active",
            followupCardIds: [
                "food_journey_jiangbanya",
                "food_journey_choudoufu",
                "food_journey_xiaolongxia",
                "food_journey_chayan",
                "food_journey_yutou"
            ]
        }
    ]);

    const collectionCatalog = Object.freeze([
        ...achievementRewardFortunes,
        ...practiceRewardFortunes,
        ...themeRewardFortunes,
        ...fortunes
    ]);

    const catalogById = collectionCatalog.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {});

    const themeSetById = themeSets.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {});

    const unlockPoolById = unlockPools.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {});

    function migrateLegacyStage3Entry(id, entry) {
        const fortune = catalogById[id];
        const legacyUnlockedAt = Number(entry && entry.hiddenStage3UnlockedAt) || 0;
        if (!fortune || !fortune.foilVariant || !fortune.foilVariant.icon || legacyUnlockedAt <= 0) {
            return entry;
        }

        const migratedEntry = { ...entry };
        const variants = getCollectionVariantCounts(entry, entry.count);
        if (variants.foilCount <= 0) {
            migratedEntry.variants = {
                normalCount: Math.max(0, variants.normalCount - 1),
                foilCount: 1
            };
        }
        migratedEntry.preferredVariant = "foil";
        delete migratedEntry.hiddenStage3UnlockedAt;
        return migratedEntry;
    }

    function getCollectionMeta() {
        const raw = safeParseJSON(window.localStorage.getItem(COLLECTION_META_KEY), {});
        if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
            return {};
        }

        return Object.keys(raw).reduce((acc, id) => {
            const normalizedId = normalizeFortuneId(id);
            const entry = raw[id];
            if (!entry || typeof entry !== "object" || Array.isArray(entry) || !catalogById[normalizedId]) {
                return acc;
            }

            const mergedEntry = mergeCollectionMetaEntry(
                acc[normalizedId],
                migrateLegacyStage3Entry(normalizedId, entry)
            );
            if (mergedEntry) {
                acc[normalizedId] = mergedEntry;
            }
            return acc;
        }, {});
    }

    function getUnlockedFortuneIds() {
        const meta = getCollectionMeta();
        const metaIds = Object.keys(meta).filter((id) => {
            const entry = meta[id];
            return entry && Number(entry.count) > 0;
        });
        const legacyCollection = safeParseJSON(window.localStorage.getItem(COLLECTION_KEY), []);
        const legacyIds = Array.isArray(legacyCollection)
            ? legacyCollection
                .filter((id) => typeof id === "string" && id.trim())
                .map((id) => normalizeFortuneId(id))
                .filter((id) => catalogById[id])
                .filter(Boolean)
            : [];
        return Array.from(new Set([...legacyIds, ...metaIds]));
    }

    function getUnlockedCatalog(options = {}) {
        const includeRewardOnly = options.includeRewardOnly !== false;
        const unlockedIds = new Set(getUnlockedFortuneIds());
        return collectionCatalog.filter((item) => {
            if (!unlockedIds.has(item.id)) return false;
            if (!includeRewardOnly && item.isRewardOnly) return false;
            return true;
        });
    }

    function getFortuneById(id) {
        const normalizedId = normalizeFortuneId(id);
        return normalizedId && catalogById[normalizedId] ? catalogById[normalizedId] : null;
    }

    function getExclusiveArtVariant(cardId, variantId) {
        const fortune = typeof cardId === "object" && cardId
            ? cardId
            : getFortuneById(cardId);
        const variants = fortune && Array.isArray(fortune.exclusiveArtVariants)
            ? fortune.exclusiveArtVariants
            : [];
        const normalizedVariantId = String(variantId || "").trim();
        if (!normalizedVariantId || variants.length === 0) {
            return null;
        }
        const variant = variants.find((item) => item && item.id === normalizedVariantId);
        return variant ? { ...variant } : null;
    }

    function getThemeSetById(id) {
        const normalizedId = String(id || "").trim();
        return normalizedId && themeSetById[normalizedId] ? themeSetById[normalizedId] : null;
    }

    function getUnlockPoolById(id) {
        const normalizedId = String(id || "").trim();
        return normalizedId && unlockPoolById[normalizedId] ? unlockPoolById[normalizedId] : null;
    }

    function getThemeSetProgress(metaOrSetId, maybeSetId) {
        const meta = typeof metaOrSetId === "string" && maybeSetId === undefined
            ? getCollectionMeta()
            : (metaOrSetId && typeof metaOrSetId === "object" ? metaOrSetId : getCollectionMeta());
        const setId = typeof metaOrSetId === "string" && maybeSetId === undefined
            ? metaOrSetId
            : maybeSetId;
        const themeSet = getThemeSetById(setId);

        if (!themeSet) {
            return null;
        }

        if (themeSet.isPlaceholder) {
            const placeholderMembers = Array.isArray(themeSet.placeholderMembers) ? themeSet.placeholderMembers : [];
            return {
                setId: themeSet.id,
                title: themeSet.title,
                unlockedCount: 0,
                totalCount: placeholderMembers.length,
                rewardCardId: "",
                rewardUnlocked: false,
                coverCardId: "",
                allCollected: false,
                isPlaceholder: true,
                excludeFromCompletionTotals: Boolean(themeSet.excludeFromCompletionTotals),
                placeholderMembers,
                placeholderReward: themeSet.placeholderReward || null
            };
        }

        const unlockedCount = themeSet.cardIds.filter((cardId) => {
            const entry = meta[cardId];
            return entry && Number(entry.count) > 0;
        }).length;
        const rewardEntry = meta[themeSet.rewardCardId];
        const rewardUnlocked = Boolean(rewardEntry && Number(rewardEntry.count) > 0);

        return {
            setId: themeSet.id,
            title: themeSet.title,
            unlockedCount,
            totalCount: themeSet.cardIds.length,
            rewardCardId: themeSet.rewardCardId,
            rewardUnlocked,
            coverCardId: themeSet.coverCardId,
            allCollected: unlockedCount === themeSet.cardIds.length,
            isPlaceholder: false,
            excludeFromCompletionTotals: Boolean(themeSet.excludeFromCompletionTotals)
        };
    }

    window.OmikujiCatalog = {
        COLLECTION_KEY,
        COLLECTION_META_KEY,
        fortunes,
        petRewardFortunes,
        achievementRewardFortunes,
        practiceRewardFortunes,
        themeRewardFortunes,
        themeSets,
        unlockPools,
        rarityOrder: [...RARITY_ORDER],
        rarityColors: { ...RARITY_COLORS },
        foilConfig: {
            pityThreshold: FOIL_CONFIG.pityThreshold,
            duplicateRate: FOIL_CONFIG.duplicateRate
        },
        hiddenStage2UnlockCounts: { ...HIDDEN_STAGE2_UNLOCK_COUNTS },
        limitedEvents,
        collectionCatalog,
        safeParseJSON,
        getCollectionMeta,
        getUnlockedFortuneIds,
        getUnlockedCatalog,
        getFortuneById,
        getExclusiveArtVariant,
        getThemeSetById,
        getUnlockPoolById,
        getThemeSetProgress,
        normalizeFortuneId
    };
})(window);
