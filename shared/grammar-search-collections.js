(function () {
  "use strict";

  // Collection membership is shared with the app; the web directory groups it
  // using the existing study modules, without merging distinct grammar usages.
  const collections = [
    { key: "formal-nouns", title: "形式名词", description: "こと・もの・わけ 等表达", tone: "maple", icon: "noun", sourceKey: "formal-nouns" },
    { key: "compound-particles", title: "复合格助词", description: "接在名词后的复合表达", tone: "gold", icon: "link", sourceKey: "compound-particles" },
    { key: "adverbial-particles", title: "副助词", description: "范围、程度与限定", tone: "olive", icon: "sprout", sourceKey: "adverbial-particles" },
    { key: "suffix-expressions", title: "接尾表达", description: "动作阶段、难易与倾向", tone: "gold", icon: "suffix", sourceKey: "affix-expressions" },
    { key: "n1-level", title: "TRY! N1", description: "按课复习语法", tone: "maple", icon: "book", bookKey: "try-n1", groupByLesson: true },
    { key: "n2-level", title: "TRY! N2", description: "按课复习语法", tone: "blue", icon: "book", bookKey: "try-n2", groupByLesson: true }
  ];

  const PAGE_SIZE = 12;
  // Same families as daily/grammar/expressions/formal-nouns.js.
  const formalGroups = [
    { key: "koto", title: "こと", description: "事情・内容", excludes: ["n1-050", "mainichi-n1-014"] },
    { key: "mono", title: "もの", description: "事物・常理", excludes: ["mainichi-n1-001", "n1-096"] },
    { key: "tokoro", title: "ところ", description: "阶段・位置" },
    { key: "wake", title: "わけ", description: "理由・道理" },
    { key: "hazu", title: "はず", description: "有依据的预期" },
    { key: "tame", title: "ため", description: "目的・原因" },
    { key: "ue", title: "上", description: "基础・方面", ids: ["n2-142", "n2-149", "n2-202", "n2-233"] },
    { key: "tsumori", title: "つもり", description: "意图・认定" },
    { key: "mama", title: "まま", description: "状态保持", ids: ["n3-047", "supp-formal-noun-002"] },
    { key: "uchi", title: "うち", description: "期间・范围" },
    { key: "sei", title: "せい", description: "负面原因" },
    { key: "okage", title: "おかげ", description: "积极原因" },
    { key: "kawari", title: "かわり", description: "替代・交换", ids: ["n3-045"] },
    { key: "aida", title: "あいだ", description: "期间・间隔", ids: ["supp-n1-review-001", "supp-n1-review-002"] },
    { key: "you", title: "よう", description: "样态・方式", ids: ["n2-175", "n2-212", "n3-002", "n3-027", "n3-063", "n3-080", "supp-n1-review-031", "supp-n1-review-054", "supp-n1-review-056", "supp-formal-noun-001"] },
    { key: "no", title: "の", description: "内容的名词化", ids: ["n3-031", "n3-064", "n1-050"] },
    { key: "kagiri", title: "限り", description: "范围・限度", ids: ["n1-072", "n1-107", "n2-154"] }
  ];
  // Existing compound-particle-study.js groups, resolved through the shared catalog.
  const compoundGroups = [
    { key: "object", title: "对象・立场", entries: ["ni_tsuite", "ni_taishite", "ni_totte", "ni_kotaete", "toshite", "toshitemo"] },
    { key: "basis", title: "依据・关联", entries: ["ni_yotte", "ni_oujite", "wo_ukete", "ni_sotte", "ni_motozuite", "wo_motoni", "no_motode", "wo_tsuujite"] },
    { key: "time", title: "时间・范围", entries: ["ni_atatte", "ni_oite", "ni_saishite", "ni_sakidatte", "ni_watatte", "ni_kakete", "ni_sonaete", "ni_tsuki", "wo_maeni"] },
    { key: "change", title: "变化・方向", entries: ["ni_itaru", "ni_shitagatte", "ni_tsurete", "ni_tomonai", "ni_mukatte", "ni_mukete", "ni_menshite", "ni_kawatte"] },
    { key: "limit", title: "限定・比较", entries: ["ni_kakawarazu", "wo_towazu", "ni_kagiru", "ni_kagitte", "ni_kagiri", "ni_kakete_wa", "ni_kurabete", "ni_shite_wa", "ni_hanshite", "ni_kagirazu", "ni_todomarazu", "wo_nozoite"] },
    { key: "other", title: "其他构式", entries: ["ni_kuwaete", "wo_kanete", "ni_shitatte", "ni_tsuke", "wo_komete", "wo_ni_toshite_group"] }
  ];
  // Source IDs from adverbial-particle.js. Do not use substring classification:
  // several titles contain multiple particles but belong to one primary family.
  const adverbialGroups = [
    { key: "dake", title: "だけ", description: "限定・程度", ids: ["supp-n1-review-016", "supp-n1-review-018", "supp-n1-review-035", "supp-n1-review-017", "n2-178", "learn-dake-ni", "n2-236", "supp-dake-sufficient-n1", "supp-dake-corresponding-degree-n1", "n1-056"] },
    { key: "nomi", title: "のみ", description: "限定・追加", ids: ["n2-194"] },
    { key: "bakari", title: "ばかり", description: "偏重・阶段", ids: ["n3-041", "n2-179", "n3-059", "n3-069", "n2-246", "n1-074", "n1-075"] },
    { key: "made", title: "まで", description: "范围・极限", ids: ["supp-n1-review-037", "n1-076", "n1-084", "n1-005", "n1-043", "n1-045"] },
    { key: "kurai", title: "くらい", description: "程度・评价", ids: ["supp-n1-review-071", "n2-221"] },
    { key: "hodo", title: "ほど", description: "程度・比较", ids: ["n3-007", "n3-057", "n3-044", "n3-111", "supp-n1-review-067", "n1-052"] },
    { key: "kiri", title: "きり", description: "限定・持续", ids: ["n2-168"] },
    { key: "nado", title: "など", description: "列举", ids: ["supp-n1-review-034"] }
  ];
  // Only expressionGroups from affixes-data.js, not its word-building prefixes
  // or suffix vocabulary. Resolve the existing shared cards without duplicating them.
  const suffixGroups = [
    { key: "stage", title: "动作阶段・完成后状态", entries: ["〜かけ（かけ）", "〜立て（たて）", "〜っぱなし（っぱなし）"] },
    { key: "difficulty", title: "难易", entries: ["〜やすい（やすい）", "〜にくい（にくい）", "〜づらい（づらい）", "〜がたい（がたい）", "〜かねる"] },
    { key: "appearance", title: "样子・倾向・表现・覆盖", entries: ["〜がち（がち）", "〜気味（ぎみ）", "〜げ", "〜っぽい", "〜ぶる", "〜ぶり（ぶり / っぷり）", "〜深い（ぶかい）", "〜だらけ（だらけ）", "〜まみれ", "〜ずくめ"] }
  ];

  function getCollection(key) {
    const collection = collections.find((item) => item.key === key);
    return collection ? { ...collection } : null;
  }

  function getItems(key) {
    const collection = getCollection(key);
    const repo = window.GrammarDB && window.GrammarDB.repo;
    if (!collection || !repo) return [];

    if (collection.sourceKey) {
      const catalog = window.GrammarLearningCatalog;
      const ids = catalog && typeof catalog.getOrderedGrammarIds === "function"
        ? catalog.getOrderedGrammarIds(collection.sourceKey) : [];
      const bySearchId = new Map(repo.getSearchDataset().map((item) => [item.id, item]));
      const seen = new Set();
      return ids.map((id) => bySearchId.get(repo.resolveSearchIdFromCanonicalId(id)))
        .filter((item) => {
          if (!item || seen.has(item.canonicalId)) return false;
          seen.add(item.canonicalId);
          return true;
        });
    }

    // Textbook membership is independent of a grammar card's own JLPT level.
    const items = repo.getSearchDataset({ bookKey: collection.bookKey });
    const order = new Map(items.map((item, index) => [item.canonicalId, index]));
    const itemOrder = (item) => {
      if (item.canonicalId === "supp-try-n2-kara-iuto" && order.has("n2-191")) return order.get("n2-191") + 0.5;
      if (item.canonicalId === "supp-try-n2-special-keigo" && order.has("n2-205")) return order.get("n2-205") - 0.5;
      return order.get(item.canonicalId);
    };
    return items.sort((a, b) => Number(a.lessonNumber || 99) - Number(b.lessonNumber || 99) || itemOrder(a) - itemOrder(b));
  }

  function getGroups(key) {
    const collection = getCollection(key);
    const items = getItems(key);
    if (!items.length) return [];
    let definitions;
    if (key === "formal-nouns") definitions = formalGroups;
    else if (key === "compound-particles" || key === "suffix-expressions") {
      definitions = (key === "compound-particles" ? compoundGroups : suffixGroups).map((group) => ({
        ...group,
        ids: group.entries.map((entry) => window.GrammarLearningCatalog.resolve(collection.sourceKey, entry))
      }));
    } else if (key === "adverbial-particles") definitions = adverbialGroups;
    else if (collection.groupByLesson) {
      return [...new Set(items.map((item) => Number(item.lessonNumber) || 0))].map((lesson) => ({
        key: `lesson-${lesson}`,
        title: lesson ? `第 ${lesson} 课` : "补充语法",
        description: collection.title,
        items: items.filter((item) => (Number(item.lessonNumber) || 0) === lesson)
      }));
    } else return [];

    const assigned = new Set();
    const groups = definitions.map((definition) => {
      const matches = items.filter((item) => !assigned.has(item.canonicalId)
        && !(definition.excludes || []).includes(item.canonicalId)
        && (definition.ids ? definition.ids.includes(item.canonicalId) : String(item.title).includes(definition.title)));
      matches.forEach((item) => assigned.add(item.canonicalId));
      return { key: definition.key, title: definition.title, description: definition.description || "", items: matches };
    }).filter((group) => group.items.length);
    // Keep future additions accessible even before their directory mapping is reviewed.
    const unassigned = items.filter((item) => !assigned.has(item.canonicalId));
    if (unassigned.length) groups.push({ key: "more", title: "其他相关表达", description: "合集补充", items: unassigned });
    return groups;
  }

  function getPage(items, requestedPage) {
    const total = items.length;
    const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
    const page = Math.min(pageCount, Math.max(1, Math.floor(Number(requestedPage) || 1)));
    const start = (page - 1) * PAGE_SIZE;
    return { items: items.slice(start, start + PAGE_SIZE), total, page, pageCount, start: total ? start + 1 : 0, end: Math.min(start + PAGE_SIZE, total) };
  }

  window.GrammarSearchCollections = {
    getCollections: () => collections.map((item) => ({ ...item })),
    getCollection,
    getItems,
    getGroups,
    getPage,
    PAGE_SIZE
  };
})();
