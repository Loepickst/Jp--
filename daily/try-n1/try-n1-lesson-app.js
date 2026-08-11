(() => {
  "use strict";

  const catalog = Array.isArray(window.tryN1LessonCatalog) ? window.tryN1LessonCatalog : [];
  const insightData = window.tryN1InsightData || Object.create(null);
  const vocabMetaMap = window.tryN1VocabMetaMap || Object.create(null);
  const vocabExampleRubyMap = window.tryN1VocabExampleRubyMap || Object.create(null);
  const legacyDictData = window.tryN1DictData || Object.create(null);
  const bundles = window.tryN1LessonBundles = window.tryN1LessonBundles || {};
  const loadedScripts = new Map();
  const patternPracticeStates = new Map();
  const collapsedLessonSections = new Set();
  const mobileQuery = window.matchMedia("(max-width: 980px)");
  const lessonSections = [
    ["text", "课文"],
    ["vocab", "新单词"],
    ["patterns", "文型"],
  ];
  const WORD_BANK_STORAGE_KEY = "kikiWordBankEntriesV1";
  const WORD_BANK_MAX_ENTRIES = 600;
  const PATTERN_MISTAKE_STORAGE_KEY = "tryN1PatternPracticeMistakesV1";
  const LEGACY_PATTERN_MISTAKE_STORAGE_KEYS = ["try_n1_mistakes_v2"];
  const CONTENT_VERSION = "20260801-1";
  const SHADOWING_TIMELINES = window.tryN1ShadowingTimelines || Object.create(null);
  const SHADOWING_PROSE_GROUPS = {
    3: {
      0: [
      ["友達は「いつまでもそんな暮らしを続けるのはよくない。", "俺は俺なりに楽しく暮らしているよ。"],
      ["一人なら余計な金もかからないし。」", "と全く気にしていない。"],
      ["「まあ、何も食べない嫁ならもらわないでもないがね。」", "などと言うしまつで、友達もあきれてそれ以上は何も言わなかった。"],
      ["ある日の夕方、男の家に若い女が訪ねてきて", "と言った。"],
      ["「それは結構ずくめな話だ。」", "と男は大喜びして女を嫁にした。"],
      ],
      1: [
      ["あるとき、「お前様がいるとゆっくり掃除ができません。", "と嫁が言うので、男は久しぶりに外へ出た。"],
      ["だが、友達は真っ青な顔をして", "と言った。"],
      ["そして、「明日、出かけるふりをして", "と言い残し、逃げるように帰ってしまった。"],
      ["「あのけちの怠け者め！", "とつぶやき、大きい釜で米を炊き始めた。"],
      ["「これでは足りぬ。", "前の口から、恐ろしい言葉が飛び出した。"],
      ["びっくりした男は、つい「ひゃあ！」", "と悲鳴を上げてしまった。"],
      ["「誰じゃ！」", "長い髪の間から、ぎらぎら光る眼が男を睨みつけた。"],
      ["「見たな！", "見られたからには、お前を食わずにはおかないぞ！」"],
      ["捕まったが最後、食べられてしまうに違いない。", "そう思った男は、あわてて逃げ出した。"],
      ["「待て！", "恐ろしい顔で追いかけて来る女は、二口女という妖怪だったのだ。"],
      ],
    },
    8: {
      1: [
        ["「楽園を創らんがため、あのお方がお姿を現される。", "と。"],
      ],
    },
  };
  const SHADOWING_EXCLUDED_TEXTS = {
    "5:2": new Set(["「○×△☆□○×△☆□○×△☆□○×△☆□——！！」"]),
    "7:0": new Set(["「はい。」"]),
  };
  const PATTERN_INDEX_SYMBOLS = Array.from("❶❷❸❹❺❻❼❽❾❿⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴㉑㉒㉓㉔");
  const GRAMMAR_FAVORITE_ID_OVERRIDES = {
    "1:niataru": "supp-try-n1-niataru",
    "2:mademonai": "n1-043",
    "2:temairimashita": "supp-try-n1-temairimashita",
    "2:teyamimasen": "n1-016",
    "3:gane": "supp-try-n1-gane",
    "3:shimatsu": "n1-021",
    "4:uedewa": "n2-142",
    "5:ga": "supp-try-n1-ga-role-emphasis",
    "5:ka_l2": "n1-051",
    "5:gadakeni": "n1-056",
    "5:chairarenai": "n2-160",
    "5:nini": "supp-try-n1-v-ni-v-negative",
    "5:ka": "supp-try-n1-ka-emotive",
    "6:nite": "supp-try-n1-nite",
    "6:nitaemasen": "n1-060",
    "7:ouga": "n1-080",
    "7:rougamaimaiga": "n1-081",
    "7:kara": "supp-try-n1-kara-final",
    "7:rounimonai": "n1-086",
    "7:ssu": "supp-try-n1-ssu",
    "7:makutte": "n1-087",
    "7:temisemasu": "n1-089",
    "8:tamadenokotoda": "n1-084",
    "8:yara": "n2-229",
    "8:meita": "n1-098",
    "8:kanete": "n1-106",
    "10:beshi": "supp-try-n1-beshi",
    "10:tadakorenomi": "n1-113",
    "10:zunihasumanakatta": "n1-118",
    "10:wokinjienei": "n1-122",
  };
  const GRAMMAR_DETAIL_EXAMPLE_OVERRIDES = {
    niataru: {
      ja: "<b><ruby>論<rt>ろん</rt></ruby><ruby>文<rt>ぶん</rt></ruby>を<ruby>書<rt>か</rt></ruby>く<span style='color:#d64045'>にあたって</span>、<ruby>多<rt>おお</rt></ruby>くの<ruby>資<rt>し</rt></ruby><ruby>料<rt>りょう</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めた。</b>",
      zh: "在写论文之前，收集了很多资料。",
    },
    mademonai: {
      ja: "<b><ruby>言<rt>い</rt></ruby>う<span style='color:#d64045'>までもなく</span>、<ruby>健<rt>けん</rt></ruby><ruby>康<rt>こう</rt></ruby>は<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>だ。</b>",
      zh: "不用说，健康很重要。",
    },
    temairimashita: {
      ja: "<b><ruby>私<rt>わたし</rt></ruby>たちは<ruby>長<rt>なが</rt></ruby><ruby>年<rt>ねん</rt></ruby>この<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>ん<span style='color:#d64045'>で<ruby>参<rt>まい</rt></ruby>りました</span>。</b>",
      zh: "我们长年以来一直致力于解决这个问题。",
    },
    teyamimasen: {
      ja: "<b><ruby>平<rt>へい</rt></ruby><ruby>和<rt>わ</rt></ruby>を<ruby>願<rt>ねが</rt></ruby>っ<span style='color:#d64045'>てやみません</span>。</b>",
      zh: "衷心祈愿和平。",
    },
    gane: {
      ja: "<b><ruby>行<rt>い</rt></ruby>ってみたいんです<span style='color:#d64045'>がね</span>。</b>",
      zh: "我是想去看看的啊（但去不了）。",
    },
    shimatsu: {
      ja: "<b><ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>は<ruby>遊<rt>あそ</rt></ruby>んでばかりで、<ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>も<ruby>辞<rt>や</rt></ruby>めてしまう<span style='color:#d64045'><ruby>始<rt>し</rt></ruby><ruby>末<rt>まつ</rt></ruby>だ</span>。</b>",
      zh: "儿子光玩不学，最后竟然落得连学都退了的下场。",
    },
    uedewa: {
      ja: "<b><ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>進<rt>すす</rt></ruby>める<span style='color:#d64045'>うえで</span>、<ruby>報<rt>ほう</rt></ruby><ruby>告<rt>こく</rt></ruby>は<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>だ。</b>",
      zh: "在推进工作的过程中，汇报很重要。",
    },
    ga: {
      ja: "<b><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby><span style='color:#d64045'>が</span>ですよ。</b>",
      zh: "明明是老师，却做了那种事，真是难以置信。",
    },
    ka_l2: {
      ja: "<b>そんなこと、<ruby>誰<rt>だれ</rt></ruby>が<ruby>知<rt>し</rt></ruby>るもの<span style='color:#d64045'>か</span>。</b>",
      zh: "那种事，鬼才知道。",
    },
    gadakeni: {
      ja: "<b><ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>が<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby><span style='color:#d64045'>だけに</span>、<ruby>慎<rt>しん</rt></ruby><ruby>重<rt>ちょう</rt></ruby>に<ruby>交<rt>こう</rt></ruby><ruby>渉<rt>しょう</rt></ruby>しなければならない。</b>",
      zh: "正因为对手是那样的人，所以必须慎重谈判。",
    },
    chairarenai: {
      ja: "<b>もう<ruby>待<rt>ま</rt></ruby>っ<span style='color:#d64045'>ちゃいられない</span>。</b>",
      zh: "已经不能再等了。",
    },
    nini: {
      ja: "<b><ruby>引<rt>ひ</rt></ruby>く<span style='color:#d64045'>に<ruby>引<rt>ひ</rt></ruby>けない</span><ruby>状<rt>じょう</rt></ruby><ruby>況<rt>きょう</rt></ruby>になった。</b>",
      zh: "陷入了想退也退不了的境地。",
    },
    ka: {
      ja: "<b>また<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby><span style='color:#d64045'>か</span>。</b>",
      zh: "又失败了吗（唉）。",
    },
    nite: {
      ja: "<b><ruby>現<rt>げん</rt></ruby><ruby>地<rt>ち</rt></ruby><span style='color:#d64045'>にて</span><ruby>解<rt>かい</rt></ruby><ruby>散<rt>さん</rt></ruby>します。</b>",
      zh: "在当地解散。",
    },
    nitaemasen: {
      ja: "<b><ruby>皆<rt>みな</rt></ruby><ruby>様<rt>さま</rt></ruby>のご<ruby>親<rt>しん</rt></ruby><ruby>切<rt>せつ</rt></ruby>、<ruby>感<rt>かん</rt></ruby><ruby>謝<rt>しゃ</rt></ruby>の<ruby>念<rt>ねん</rt></ruby><span style='color:#d64045'>にたえません</span>。</b>",
      zh: "对各位的亲切，我不胜感激。",
    },
    ouga: {
      ja: "<b><ruby>誰<rt>だれ</rt></ruby>が<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby><span style='color:#d64045'>おうが</span>、<ruby>私<rt>わたし</rt></ruby>は<ruby>決<rt>き</rt></ruby>めたことをやる。</b>",
      zh: "不管谁说什么，我都要做决定的事。",
    },
    rougamaimaiga: {
      ja: "<b><ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby><span style='color:#d64045'>ろうが</span><ruby>降<rt>ふ</rt></ruby>る<span style='color:#d64045'>まいが</span>、<ruby>行<rt>い</rt></ruby>かなければならない。</b>",
      zh: "不管下不下雨，都必须去。",
    },
    kara: {
      ja: "<b>いいか、<ruby>絶<rt>ぜっ</rt></ruby><ruby>対<rt>たい</rt></ruby>に<ruby>約<rt>やく</rt></ruby><ruby>束<rt>そく</rt></ruby>を<ruby>守<rt>まも</rt></ruby>るんだ<span style='color:#d64045'>からな</span>。</b>",
      zh: "听好了，绝对要遵守约定哦。",
    },
    rounimonai: {
      ja: "<b><ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>が<ruby>止<rt>と</rt></ruby>まっていて、<ruby>帰<rt>かえ</rt></ruby>ろ<span style='color:#d64045'>うにも</span><ruby>帰<rt>かえ</rt></ruby>れ<span style='color:#d64045'>ない</span>。</b>",
      zh: "电车停运了，想回也回不去。",
    },
    ssu: {
      ja: "<b>マジ<span style='color:#d64045'>っす</span>か？</b>",
      zh: "真的假的？",
    },
    makutte: {
      ja: "<b>カラオケで<ruby>歌<rt>うた</rt></ruby>い<span style='color:#d64045'>まくる</span>。</b>",
      zh: "在卡拉OK不停地狂唱。",
    },
    temisemasu: {
      ja: "<b><ruby>今<rt>こん</rt></ruby><ruby>度<rt>ど</rt></ruby>こそ、<ruby>必<rt>かなら</rt></ruby>ず<ruby>勝<rt>か</rt></ruby>っ<span style='color:#d64045'>てみせる</span>。</b>",
      zh: "这次我一定要赢给你看。",
    },
    tamadenokotoda: {
      ja: "<b><ruby>聞<rt>き</rt></ruby>かれたから<ruby>答<rt>こた</rt></ruby>え<span style='color:#d64045'>たまでのことだ</span>。</b>",
      zh: "只是因为你问了，我才回答的而已。",
    },
    yara: {
      ja: "<b><ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>には<ruby>本<rt>ほん</rt></ruby><span style='color:#d64045'>やら</span><ruby>服<rt>ふく</rt></ruby><span style='color:#d64045'>やら</span>が<ruby>散<rt>ち</rt></ruby>らかっている。</b>",
      zh: "房间里散落着书啦、衣服啦什么的。",
    },
    meita: {
      ja: "<b><ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<ruby>謎<rt>なぞ</rt></ruby><span style='color:#d64045'>めいた</span><ruby>微<rt>ほほ</rt></ruby><ruby>笑<rt>え</rt></ruby>みを<ruby>浮<rt>う</rt></ruby>かべた。</b>",
      zh: "她脸上浮现出谜一般的微笑。",
    },
    kanete: {
      ja: "<b>その<ruby>件<rt>けん</rt></ruby>については、お<ruby>答<rt>こた</rt></ruby>えし<span style='color:#d64045'>かねます</span>。</b>",
      zh: "关于这件事，我难以奉告 / 不便回答。",
    },
    beshi: {
      ja: "<b><ruby>早<rt>はや</rt></ruby><ruby>寝<rt>ね</rt></ruby><ruby>早<rt>はや</rt></ruby><ruby>起<rt>お</rt></ruby>きす<span style='color:#d64045'>べし</span>。</b>",
      zh: "应当早睡早起。",
    },
    tadakorenomi: {
      ja: "<b><ruby>私<rt>わたし</rt></ruby>はただ<ruby>真<rt>しん</rt></ruby><ruby>実<rt>じつ</rt></ruby>を<ruby>話<rt>はな</rt></ruby>す<span style='color:#d64045'>のみ</span>です。</b>",
      zh: "我只是在陈述事实。",
    },
    zunihasumanakatta: {
      ja: "<b>これだけ<ruby>迷<rt>めい</rt></ruby><ruby>惑<rt>わく</rt></ruby>をかけたのだから、<ruby>謝<rt>あやま</rt></ruby>ら<span style='color:#d64045'>ずにはすまない</span>だろう。</b>",
      zh: "添了这么多麻烦，不道歉是过不去的吧。",
    },
    wokinjienei: {
      ja: "<b><ruby>彼<rt>かれ</rt></ruby>の<ruby>不<rt>ふ</rt></ruby><ruby>幸<rt>こう</rt></ruby>な<ruby>生<rt>お</rt></ruby>い<ruby>立<rt>た</rt></ruby>ちに、<ruby>同<rt>どう</rt></ruby><ruby>情<rt>じょう</rt></ruby><span style='color:#d64045'>を<ruby>禁<rt>きん</rt></ruby>じ<ruby>得<rt>え</rt></ruby>ない</span>。</b>",
      zh: "对他的不幸身世，我不禁寄予深切的同情。",
    },
  };
  const GRAMMAR_CARD_EXTRA_EXAMPLES = {
    ssu: {
      ja: "<b><ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>に<ruby>悔<rt>くや</rt></ruby>しい<span style='color:#d64045'>っす</span>。</b>",
      zh: "真的很不甘心。",
    },
  };
  let patternAlignmentFrame = 0;
  let allGrammarSearchItems = null;
  const lessonGrammarSearchItems = new Map();

  const dom = {
    app: document.querySelector(".app"),
    sidebar: document.getElementById("lesson-sidebar"),
    catalog: document.getElementById("lesson-catalog"),
    catalogToggles: document.querySelectorAll('[data-action="toggle-catalog"]'),
    mobileSectionMenu: document.getElementById("mobile-section-menu"),
    workspace: document.querySelector(".workspace"),
    reader: document.querySelector(".reader"),
    readerTitle: document.getElementById("reader-title"),
    readerBody: document.getElementById("article-start"),
    textPanel: document.querySelector('[data-section-panel="text"]'),
    vocabPanel: document.querySelector('[data-section-panel="vocab"]'),
    vocabList: document.getElementById("vocab-list"),
    vocabSelfCheck: document.querySelector('[data-action="toggle-vocab-self-check"]'),
    patternPanel: document.querySelector('[data-section-panel="patterns"]'),
    patternList: document.getElementById("pattern-list"),
    patternPracticeToggle: document.querySelector("[data-pattern-practice-toggle]"),
    patternPracticeShell: document.getElementById("pattern-practice-shell"),
    audioDock: document.querySelector("[data-audio-dock]"),
    audio: document.querySelector("[data-lesson-audio]"),
    audioPlay: document.querySelector("[data-audio-play]"),
    audioRewind: document.querySelector("[data-audio-rewind]"),
    audioForward: document.querySelector("[data-audio-forward]"),
    audioLabel: document.querySelector("[data-audio-label]"),
    audioCurrent: document.querySelector("[data-audio-current]"),
    audioDuration: document.querySelector("[data-audio-duration]"),
    audioTrack: document.querySelector("[data-audio-track]"),
    audioProgress: document.querySelector("[data-audio-progress]"),
    audioPart: document.querySelector("[data-audio-part]"),
    audioSpeed: document.querySelector("[data-audio-speed]"),
    audioLoop: document.querySelector("[data-audio-loop]"),
    shadowingToggle: document.querySelector(".shadowing-toggle"),
    shadowingPanel: document.querySelector("[data-shadowing-panel]"),
    shadowingProgress: document.querySelector("[data-shadowing-progress]"),
    shadowingStatus: document.querySelector("[data-shadowing-status]"),
    shadowingPrev: document.querySelector("[data-shadowing-prev]"),
    shadowingNext: document.querySelector("[data-shadowing-next]"),
    shadowingOriginal: document.querySelector("[data-shadowing-original]"),
    shadowingSpeed: document.querySelector("[data-shadowing-speed]"),
    shadowingRecord: document.querySelector("[data-shadowing-record]"),
    shadowingPlayback: document.querySelector("[data-shadowing-playback]"),
    shadowingRecording: document.querySelector("[data-shadowing-recording]"),
    detailPopover: document.getElementById("detail-popover"),
    detailSummary: document.getElementById("detail-summary"),
    grammarModal: document.getElementById("grammar-modal"),
    grammarModalTitle: document.getElementById("grammar-modal-title"),
    grammarModalBadges: document.getElementById("grammar-modal-badges"),
    grammarModalBody: document.getElementById("grammar-modal-body"),
  };

  let activeLesson = getLessonFromUrl();
  let activeSection = "text";
  let activeBundle = null;
  let activeDetailAnchor = null;
  let lastGrammarTrigger = null;
  let isVocabSelfCheck = false;
  let lessonLoadToken = 0;
  let audioSources = [];
  let audioPartIndex = 0;
  let audioRateIndex = 1;
  let audioScrubPointerId = null;
  let mobileCatalogMenuOpen = false;
  let activeGrammarDetailKey = null;
  let expandedGrammarExampleKey = null;
  let shadowingActive = false;
  let shadowingSentenceIndex = 0;
  let shadowingSegmentEnd = null;
  let shadowingRecorder = null;
  let shadowingRecorderStream = null;
  let shadowingRecordingIndex = -1;
  let shadowingChunks = [];
  let shadowingDiscardOnStop = false;
  const shadowingRecordingUrls = new Map();
  const audioRates = [0.75, 1, 1.25];
  const lessonPageHeaders = {
    1: { genre: "記事を読む", titles: ["オクトーバーフェスト"] },
    2: { genre: "意見文を読む", titles: ["産業医を増やそう"] },
    3: { genre: "物語を読む", titles: ["飯食わぬ女房（１）", "飯食わぬ女房（２）"] },
    4: { genre: "会話を聞く", titles: ["上司との付き合い方（１）", "上司との付き合い方（２）"] },
    5: { genre: "会話を聞く", titles: ["転職（１）", "転職（２）", "転職（３）"] },
    6: { genre: "スピーチを聞く", titles: ["研修を終えて"] },
    7: { genre: "会話を聞く", titles: ["さすが本田君（１）", "さすが本田君（２）"] },
    8: { genre: "物語を読む", titles: ["楽園の萌花（１）", "楽園の萌花（２）"] },
    9: { genre: "説明を読む", titles: ["トリアージ"] },
    10: { genre: "記事を読む", titles: ["前衛書道"] }
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function normalizeText(value, limit = 800) {
    return String(value || "").replace(/\s+/g, " ").trim().slice(0, limit);
  }

  function syncCatalogToggle() {
    if (!dom.catalogToggles?.length) return;
    const collapsed = mobileQuery.matches
      ? dom.sidebar?.classList.contains("mobile-collapsed")
      : dom.app?.classList.contains("catalog-collapsed");
    const collapseLabel = mobileQuery.matches ? "收起课程目录" : "向左收起课程目录";
    dom.catalogToggles.forEach((toggle) => {
      toggle.setAttribute("aria-expanded", String(!collapsed));
      toggle.setAttribute("aria-label", collapsed ? "展开课程目录" : collapseLabel);
      toggle.title = collapsed ? "展开课程目录" : "收起课程目录";
    });
  }

  function toggleCatalog() {
    if (mobileQuery.matches) {
      dom.sidebar?.classList.toggle("mobile-collapsed");
      if (dom.sidebar?.classList.contains("mobile-collapsed")) mobileCatalogMenuOpen = false;
      renderMobileSectionMenu();
    } else {
      dom.app?.classList.toggle("catalog-collapsed");
    }
    syncCatalogToggle();
  }

  function htmlToText(markup, limit = 800) {
    const template = document.createElement("template");
    template.innerHTML = String(markup || "").replace(/<br\s*\/?>/gi, "\n");
    return String(template.content.textContent || "").replace(/\s+/g, " ").trim().slice(0, limit);
  }

  function htmlWithoutRubyReadings(markup, limit = 800) {
    const template = document.createElement("template");
    template.innerHTML = String(markup || "").replace(/<br\s*\/?>/gi, "\n");
    template.content.querySelectorAll("rt").forEach((reading) => reading.remove());
    return String(template.content.textContent || "").replace(/\s+/g, " ").trim().slice(0, limit);
  }

  function rubyMarkupToReading(markup, limit = 120) {
    const template = document.createElement("template");
    template.innerHTML = String(markup || "");
    Array.from(template.content.querySelectorAll("ruby")).forEach((ruby) => {
      const reading = Array.from(ruby.querySelectorAll("rt"))
        .map((node) => node.textContent || "")
        .join("");
      const base = ruby.cloneNode(true);
      base.querySelectorAll("rt, rp").forEach((node) => node.remove());
      const replacement = reading || base.textContent || "";
      ruby.parentNode?.replaceChild(document.createTextNode(replacement), ruby);
    });
    template.content.querySelectorAll("rt, rp").forEach((node) => node.remove());
    return String(template.content.textContent || "").replace(/\s+/g, " ").trim().slice(0, limit);
  }

  function resolveVocabSpeechText(entry) {
    const source = insightData[entry?.key] || {};
    const meta = vocabMetaMap[entry?.key] || {};
    return String(
      source.reading
      || entry?.reading
      || meta.reading
      || rubyMarkupToReading(entry?.titleHtml || source.titleHtml)
      || entry?.speakText
      || entry?.title
      || entry?.key
      || "",
    ).replace(/\s+/g, " ").trim();
  }

  function getJapaneseSpeechVoice() {
    const voices = window.speechSynthesis?.getVoices?.() || [];
    return voices.find((voice) => String(voice.lang || "").toLowerCase() === "ja-jp")
      || voices.find((voice) => /^ja(?:-|_)/i.test(String(voice.lang || "")))
      || null;
  }

  function formatAudioTime(value) {
    const seconds = Number.isFinite(Number(value)) ? Math.max(0, Math.floor(Number(value))) : 0;
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  }

  function getAudioPartName(index = audioPartIndex) {
    if (audioSources.length <= 1) return "";
    if (audioSources.length === 2) return index === 0 ? "上篇" : "下篇";
    return `第${index + 1}篇`;
  }

  function setAudioPlaying(isPlaying) {
    const use = dom.audioPlay?.querySelector("use");
    use?.setAttribute("href", isPlaying ? "#icon-pause" : "#icon-play");
    dom.audioPlay?.setAttribute("aria-label", isPlaying ? "暂停课文音频" : "播放课文音频");
  }

  function syncAudioUi() {
    if (!dom.audio) return;
    const duration = Number.isFinite(dom.audio.duration) ? dom.audio.duration : 0;
    const current = Number.isFinite(dom.audio.currentTime) ? dom.audio.currentTime : 0;
    const progress = duration > 0 ? Math.min(100, Math.max(0, current / duration * 100)) : 0;
    if (dom.audioCurrent) dom.audioCurrent.textContent = formatAudioTime(current);
    if (dom.audioDuration) dom.audioDuration.textContent = formatAudioTime(duration);
    if (dom.audioProgress) dom.audioProgress.style.width = `${progress}%`;
    if (dom.audioTrack) {
      dom.audioTrack.setAttribute("aria-valuenow", String(Math.round(progress)));
      dom.audioTrack.setAttribute("aria-valuetext", `${formatAudioTime(current)} / ${formatAudioTime(duration)}`);
    }
  }

  function updateAudioControls() {
    const partName = getAudioPartName();
    if (dom.audioLabel) dom.audioLabel.textContent = partName ? `课文音频 · ${partName}` : "课文音频";
    if (dom.audioPart) {
      dom.audioPart.hidden = audioSources.length <= 1;
      dom.audioPart.textContent = partName;
      dom.audioPart.setAttribute("aria-label", audioSources.length > 1 ? `当前${partName}，点击切换篇章` : "课文音频");
    }
    if (dom.audioSpeed) dom.audioSpeed.textContent = `${audioRates[audioRateIndex]}×`;
    if (dom.shadowingSpeed) {
      const rate = audioRates[audioRateIndex];
      dom.shadowingSpeed.textContent = `${rate}×`;
      dom.shadowingSpeed.setAttribute("aria-label", `当前跟读原音速度${rate}倍，点击切换`);
    }
  }

  function cycleAudioRate() {
    audioRateIndex = (audioRateIndex + 1) % audioRates.length;
    if (dom.audio) dom.audio.playbackRate = audioRates[audioRateIndex];
    updateAudioControls();
    if (shadowingActive) {
      setShadowingStatus(`原音速度已切换为 ${audioRates[audioRateIndex]} 倍。`);
    }
  }

  function skipAudioBy(seconds) {
    if (!dom.audio || !audioSources.length || !Number.isFinite(dom.audio.duration)) return;
    clearShadowingAudioSegment();
    dom.audio.currentTime = Math.max(0, Math.min(dom.audio.duration, dom.audio.currentTime + seconds));
    syncAudioUi();
  }

  function seekAudioFromClientX(clientX) {
    if (!dom.audioTrack || !dom.audio || !Number.isFinite(dom.audio.duration) || dom.audio.duration <= 0) return false;
    const rect = dom.audioTrack.getBoundingClientRect();
    if (rect.width <= 0) return false;
    clearShadowingAudioSegment();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    dom.audio.currentTime = ratio * dom.audio.duration;
    syncAudioUi();
    return true;
  }

  function loadAudioPart(index, { autoplay = false } = {}) {
    if (!dom.audio || !audioSources.length) return;
    audioPartIndex = Math.max(0, Math.min(audioSources.length - 1, Number(index) || 0));
    dom.audio.pause();
    dom.audioPlay.disabled = false;
    dom.audio.src = new URL(audioSources[audioPartIndex], window.location.href).href;
    dom.audio.playbackRate = audioRates[audioRateIndex];
    dom.audio.load();
    setAudioPlaying(false);
    syncAudioUi();
    updateAudioControls();
    if (autoplay) dom.audio.play().catch(() => showToast("课文音频播放失败。"));
  }

  function configureLessonAudio(item) {
    if (!dom.audio) return;
    dom.audio.pause();
    dom.audio.removeAttribute("src");
    dom.audio.load();
    audioSources = (Array.isArray(item?.audioSrc) ? item.audioSrc : item?.audioSrc ? [item.audioSrc] : [])
      .map((source) => String(source || "").trim())
      .filter(Boolean);
    audioPartIndex = 0;
    audioRateIndex = 1;
    dom.audio.loop = false;
    if (dom.audioLoop) {
      dom.audioLoop.classList.remove("active");
      dom.audioLoop.setAttribute("aria-pressed", "false");
    }
    if (dom.audioDock) dom.audioDock.hidden = !audioSources.length;
    setAudioPlaying(false);
    syncAudioUi();
    updateAudioControls();
    if (audioSources.length) loadAudioPart(0);
  }

  function normalizeGrammarTitle(value) {
    return String(value || "")
      .replace(/[\s\u3000・･〜~～／/（）()\[\]【】。．、,，:：;；\-—―]/g, "")
      .replace(/N|V|A/g, "")
      .toLowerCase();
  }

  function getLessonFromUrl() {
    const requested = Number(new URLSearchParams(window.location.search).get("lesson"));
    return catalog.some((item) => item.lesson === requested) ? requested : 1;
  }

  function getCatalogItem(lesson = activeLesson) {
    return catalog.find((item) => item.lesson === Number(lesson)) || catalog[0];
  }

  function formatLessonNumber(lesson) {
    const numerals = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四"];
    return `第${numerals[Number(lesson) - 1] || lesson}课`;
  }

  function loadScript(src, marker) {
    const sourceUrl = new URL(src, window.location.href);
    sourceUrl.searchParams.set("v", CONTENT_VERSION);
    const absolute = sourceUrl.href;
    if (loadedScripts.has(absolute)) return loadedScripts.get(absolute);
    const existing = document.querySelector(`script[data-bundle-src="${CSS.escape(marker || absolute)}"]`);
    const promise = new Promise((resolve, reject) => {
      const script = existing || document.createElement("script");
      const onLoad = () => resolve();
      const onError = () => {
        loadedScripts.delete(absolute);
        if (!existing) script.remove();
        reject(new Error("内容加载失败，请稍后重试。"));
      };
      script.addEventListener("load", onLoad, { once: true });
      script.addEventListener("error", onError, { once: true });
      if (!existing) {
        script.src = absolute;
        script.async = true;
        script.dataset.bundleSrc = marker || absolute;
        document.head.appendChild(script);
      }
    });
    loadedScripts.set(absolute, promise);
    return promise;
  }

  function renderCatalog() {
    if (!dom.catalog) return;
    dom.catalog.innerHTML = catalog.map((item) => {
      const isActive = item.lesson === activeLesson;
      const isExpanded = isActive && (mobileQuery.matches ? mobileCatalogMenuOpen : !collapsedLessonSections.has(item.lesson));
      return `
        <div class="lesson-catalog-item${isActive ? " is-active" : ""}${collapsedLessonSections.has(item.lesson) ? " is-sections-collapsed" : ""}" data-catalog-lesson="${item.lesson}">
          <button class="lesson-catalog-button" type="button" data-open-lesson="${item.lesson}" aria-expanded="${isExpanded}">
            <span class="lesson-catalog-number">${formatLessonNumber(item.lesson)}：</span>
            <span class="lesson-catalog-name">${escapeHtml(item.title)}</span>
            <svg class="icon lesson-catalog-chevron"><use href="#icon-chevron-right"></use></svg>
          </button>
          <div class="lesson-catalog-sections">
            ${lessonSections.map(([section, label]) => `
              <button type="button" data-section="${section}" class="${section === activeSection ? "active" : ""}">${label}</button>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");
    renderMobileSectionMenu();
    if (mobileQuery.matches) {
      requestAnimationFrame(() => {
        dom.catalog?.querySelector(`[data-open-lesson="${activeLesson}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      });
    }
  }

  function renderMobileSectionMenu() {
    if (!dom.mobileSectionMenu) return;
    const visible = mobileQuery.matches && mobileCatalogMenuOpen && !dom.sidebar?.classList.contains("mobile-collapsed");
    dom.mobileSectionMenu.hidden = !visible;
    if (!visible) return;
    dom.mobileSectionMenu.innerHTML = lessonSections.map(([section, label]) => `
      <button type="button" data-section="${section}" class="${section === activeSection ? "active" : ""}">${label}</button>
    `).join("");
  }

  function setDocumentTitle() {
    const item = getCatalogItem();
    if (!item) return;
    document.title = `Try! N1 ${formatLessonNumber(item.lesson)}：${item.title}`;
    if (dom.readerTitle) dom.readerTitle.textContent = item.title;
  }

  function setLessonLoading(message, isError = false) {
    if (!dom.textPanel) return;
    dom.textPanel.innerHTML = isError
      ? `<div class="lesson-load-error">${escapeHtml(message)}<button type="button" data-retry-lesson>重新加载</button></div>`
      : `<div class="lesson-loading">${escapeHtml(message)}</div>`;
  }

  function decorateLessonPages(item) {
    if (!dom.textPanel || !item) return;
    const pageHeader = lessonPageHeaders[item.lesson];
    if (!pageHeader) return;
    dom.textPanel.querySelectorAll(".lesson-fragment").forEach((fragment, index) => {
      const article = fragment.querySelector("article");
      if (!article || article.querySelector(":scope > .lesson-header")) return;
      const header = document.createElement("div");
      header.className = "lesson-header";
      header.innerHTML = `<span>${escapeHtml(pageHeader.genre)}</span><span>${escapeHtml(pageHeader.titles[index] || item.title)}</span>`;
      const holes = document.createElement("div");
      holes.className = "paper-holes";
      holes.setAttribute("aria-hidden", "true");
      article.prepend(holes);
      article.prepend(header);
    });
  }

  function getShadowingTimeline() {
    return SHADOWING_TIMELINES[activeLesson] || [];
  }

  function getShadowingSentences() {
    return Array.from(dom.textPanel?.querySelectorAll("[data-shadowing-sentence]") || []);
  }

  function setShadowingStatus(message) {
    if (dom.shadowingStatus) dom.shadowingStatus.textContent = message;
  }

  function revokeShadowingRecordings() {
    shadowingRecordingUrls.forEach((url) => URL.revokeObjectURL(url));
    shadowingRecordingUrls.clear();
    if (dom.shadowingRecording) {
      dom.shadowingRecording.pause();
      dom.shadowingRecording.removeAttribute("src");
      dom.shadowingRecording.load();
    }
  }

  function stopShadowingRecorder({ discard = false } = {}) {
    if (!shadowingRecorder || shadowingRecorder.state === "inactive") return;
    shadowingDiscardOnStop = discard;
    shadowingRecorder.stop();
  }

  function clearShadowingAudioSegment() {
    shadowingSegmentEnd = null;
    updateAudioControls();
  }

  function syncShadowingUi({ scroll = false } = {}) {
    const timeline = getShadowingTimeline();
    const sentences = getShadowingSentences();
    const count = Math.min(timeline.length, sentences.length);
    if (!count) return;
    shadowingSentenceIndex = Math.max(0, Math.min(count - 1, shadowingSentenceIndex));
    sentences.forEach((sentence, index) => {
      const selected = index === shadowingSentenceIndex;
      sentence.classList.toggle("is-shadowing-current", selected);
      sentence.setAttribute("aria-current", selected ? "true" : "false");
    });
    if (dom.shadowingProgress) {
      dom.shadowingProgress.textContent = `第 ${shadowingSentenceIndex + 1} / ${count} 句`;
    }
    const isRecording = shadowingRecorder?.state === "recording";
    if (dom.shadowingPrev) dom.shadowingPrev.disabled = isRecording || shadowingSentenceIndex === 0;
    if (dom.shadowingNext) dom.shadowingNext.disabled = isRecording || shadowingSentenceIndex === count - 1;
    if (dom.shadowingPlayback) {
      dom.shadowingPlayback.disabled = isRecording || !shadowingRecordingUrls.has(shadowingSentenceIndex);
    }
    if (dom.shadowingRecord) {
      dom.shadowingRecord.classList.toggle("is-recording", Boolean(isRecording));
      dom.shadowingRecord.setAttribute("aria-pressed", String(Boolean(isRecording)));
      const label = dom.shadowingRecord.querySelector("span");
      if (label) label.textContent = isRecording ? "结束录音" : "录音";
    }
    if (scroll) {
      sentences[shadowingSentenceIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function selectShadowingSentence(index, { scroll = true } = {}) {
    const timeline = getShadowingTimeline();
    if (!timeline.length || shadowingRecorder?.state === "recording") return;
    dom.audio?.pause();
    dom.shadowingRecording?.pause();
    clearShadowingAudioSegment();
    shadowingSentenceIndex = Math.max(0, Math.min(timeline.length - 1, Number(index) || 0));
    setShadowingStatus(shadowingRecordingUrls.has(shadowingSentenceIndex)
      ? "这一句已有录音，可以回听或重新录制。"
      : "先听原音，再录下自己的跟读。");
    syncShadowingUi({ scroll });
  }

  function isShadowingMarker(value) {
    const text = String(value || "").replace(/\s+/g, " ").trim();
    return !text
      || text.startsWith("※")
      || /^(?:（つづく）|（完）|―\s*中略\s*―)$/.test(text);
  }

  function isExcludedShadowingText(value, partIndex) {
    const text = String(value || "").replace(/\s+/g, " ").trim();
    return SHADOWING_EXCLUDED_TEXTS[`${activeLesson}:${partIndex}`]?.has(text) || false;
  }

  function createShadowingSentence(markup, sentenceIndex, partIndex, tagName = "span") {
    const sentence = document.createElement(tagName);
    sentence.className = "shadowing-sentence";
    sentence.dataset.shadowingSentence = String(sentenceIndex);
    sentence.dataset.shadowingPart = String(partIndex);
    sentence.tabIndex = -1;
    sentence.innerHTML = markup;
    return sentence;
  }

  function mergeShadowingProseChunks(chunks, partIndex) {
    return (SHADOWING_PROSE_GROUPS[activeLesson]?.[partIndex] || []).reduce((groupedChunks, range) => {
      const texts = groupedChunks.map((chunk) => (
        htmlWithoutRubyReadings(chunk).replace(/\s+/g, "")
      ));
      const startIndex = texts.findIndex((text) => text.startsWith(range[0]));
      const endIndex = texts.findIndex((text, index) => (
        index >= startIndex && text.includes(range[1])
      ));
      if (startIndex < 0 || endIndex < startIndex) return groupedChunks;
      return [
        ...groupedChunks.slice(0, startIndex),
        groupedChunks.slice(startIndex, endIndex + 1).join(""),
        ...groupedChunks.slice(endIndex + 1),
      ];
    }, chunks);
  }

  function decorateShadowingProse(japaneseText, partIndex, startIndex) {
    let sentenceIndex = startIndex;
    japaneseText.querySelectorAll(":scope > p:not(.translation)").forEach((paragraph) => {
      const chunks = paragraph.innerHTML.match(/[\s\S]*?[。！？](?:[」』”])?|[\s\S]+$/g) || [];
      const usableChunks = mergeShadowingProseChunks(
        chunks.filter((chunk) => {
          const text = htmlToText(chunk);
          return !isShadowingMarker(text) && !isExcludedShadowingText(text, partIndex);
        }),
        partIndex,
      );
      if (!usableChunks.length) return;
      const fragment = document.createDocumentFragment();
      usableChunks.forEach((chunk) => {
        fragment.appendChild(createShadowingSentence(chunk, sentenceIndex, partIndex));
        sentenceIndex += 1;
      });
      paragraph.replaceChildren(fragment);
    });
    return sentenceIndex;
  }

  function decorateShadowingScript(japaneseText, partIndex, startIndex) {
    let sentenceIndex = startIndex;
    const selector = ".newspaper-content, .script-scene, .script-line";
    const containers = Array.from(japaneseText.querySelectorAll(selector))
      .filter((container) => !container.parentElement?.closest(selector));
    containers.forEach((container) => {
      const translation = Array.from(container.children)
        .find((child) => child.classList.contains("translation"));
      const sourceNodes = Array.from(container.childNodes)
        .filter((node) => !(node.nodeType === Node.ELEMENT_NODE && node.classList.contains("translation")));
      const staging = document.createElement("div");
      sourceNodes.forEach((node) => staging.appendChild(node.cloneNode(true)));
      const markup = staging.innerHTML;
      const text = htmlToText(markup);
      if (isShadowingMarker(text) || isExcludedShadowingText(text, partIndex)) return;
      sourceNodes.forEach((node) => node.remove());
      const tagName = container.classList.contains("script-line") ? "span" : "div";
      const sentence = createShadowingSentence(markup, sentenceIndex, partIndex, tagName);
      container.insertBefore(sentence, translation || container.firstChild);
      sentenceIndex += 1;
    });
    return sentenceIndex;
  }

  function decorateShadowingSentences() {
    if (!dom.textPanel) return false;
    let sentenceIndex = 0;
    dom.textPanel.querySelectorAll(".lesson-fragment").forEach((lessonFragment, partIndex) => {
      const japaneseText = lessonFragment.querySelector(".japanese-text");
      if (!japaneseText) return;
      sentenceIndex = japaneseText.querySelector(".script-line")
        ? decorateShadowingScript(japaneseText, partIndex, sentenceIndex)
        : decorateShadowingProse(japaneseText, partIndex, sentenceIndex);
    });
    return sentenceIndex === getShadowingTimeline().length;
  }

  function syncShadowingAvailability() {
    const available = activeSection === "text"
      && getShadowingTimeline().length > 0
      && getShadowingSentences().length === getShadowingTimeline().length
      && audioSources.length > 0;
    if (dom.shadowingToggle) dom.shadowingToggle.hidden = !available;
    if (!available && shadowingActive) {
      shadowingActive = false;
      stopShadowingRecorder({ discard: true });
      dom.audio?.pause();
      clearShadowingAudioSegment();
    }
    document.body.classList.toggle("shadowing-mode", available && shadowingActive);
    dom.textPanel?.classList.toggle("is-shadowing", available && shadowingActive);
    getShadowingSentences().forEach((sentence) => {
      const interactive = available && shadowingActive;
      sentence.tabIndex = interactive ? 0 : -1;
      if (interactive) {
        sentence.setAttribute("role", "button");
        sentence.setAttribute("aria-label", `选择第${Number(sentence.dataset.shadowingSentence) + 1}句进行跟读`);
      } else {
        sentence.removeAttribute("role");
        sentence.removeAttribute("aria-label");
      }
    });
    if (dom.shadowingPanel) dom.shadowingPanel.hidden = !(available && shadowingActive);
    if (dom.audioDock) {
      dom.audioDock.classList.toggle("is-shadowing-mode", available && shadowingActive);
      dom.audioDock.setAttribute("aria-label", available && shadowingActive ? "逐句跟读控制台" : "课文音频播放器");
    }
    if (dom.shadowingToggle) {
      dom.shadowingToggle.classList.toggle("active", available && shadowingActive);
      dom.shadowingToggle.setAttribute("aria-pressed", String(available && shadowingActive));
    }
  }

  function toggleShadowing() {
    if (!getShadowingTimeline().length || activeSection !== "text") return;
    shadowingActive = !shadowingActive;
    if (shadowingActive) {
      dom.audio?.pause();
      clearShadowingAudioSegment();
      setShadowingStatus(shadowingRecordingUrls.has(shadowingSentenceIndex)
        ? "这一句已有录音，可以回听或重新录制。"
        : "先听原音，再录下自己的跟读。");
    } else {
      stopShadowingRecorder();
      dom.audio?.pause();
      dom.shadowingRecording?.pause();
      clearShadowingAudioSegment();
      setShadowingStatus("先听原音，再录下自己的跟读。");
    }
    syncShadowingAvailability();
    syncShadowingUi();
  }

  function resetShadowing({ clearRecordings = true } = {}) {
    shadowingActive = false;
    shadowingSentenceIndex = 0;
    shadowingSegmentEnd = null;
    stopShadowingRecorder({ discard: clearRecordings });
    if (clearRecordings) revokeShadowingRecordings();
    document.body.classList.remove("shadowing-mode");
    dom.textPanel?.classList.remove("is-shadowing");
    if (dom.shadowingPanel) dom.shadowingPanel.hidden = true;
    if (dom.shadowingToggle) {
      dom.shadowingToggle.hidden = true;
      dom.shadowingToggle.classList.remove("active");
      dom.shadowingToggle.setAttribute("aria-pressed", "false");
    }
    setShadowingStatus("先听原音，再录下自己的跟读。");
  }

  function playShadowingOriginal() {
    const segment = getShadowingTimeline()[shadowingSentenceIndex];
    if (!segment || !dom.audio) return;
    dom.shadowingRecording?.pause();
    dom.audio.pause();
    const targetPart = Math.max(0, Math.min(audioSources.length - 1, Number(segment.part) || 0));
    const startPlayback = () => {
      dom.audio.currentTime = segment.start;
      dom.audio.playbackRate = audioRates[audioRateIndex];
      shadowingSegmentEnd = segment.end;
      if (dom.audioLabel) dom.audioLabel.textContent = `原音 · 第${shadowingSentenceIndex + 1}句`;
      setShadowingStatus("正在播放原音，请注意语速、停顿和语调。");
      dom.audio.play().catch(() => {
        clearShadowingAudioSegment();
        showToast("当前句原音播放失败。");
      });
    };
    if (targetPart !== audioPartIndex) {
      dom.audio.addEventListener("loadedmetadata", startPlayback, { once: true });
      loadAudioPart(targetPart);
      return;
    }
    if (dom.audio.readyState >= 1) {
      startPlayback();
    } else {
      dom.audio.addEventListener("loadedmetadata", startPlayback, { once: true });
    }
  }

  async function startShadowingRecording() {
    if (!shadowingActive || !navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      showToast("当前浏览器无法使用录音功能。");
      return;
    }
    try {
      dom.audio?.pause();
      dom.shadowingRecording?.pause();
      clearShadowingAudioSegment();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeCandidates = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"];
      const mimeType = mimeCandidates.find((candidate) => MediaRecorder.isTypeSupported(candidate)) || "";
      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      shadowingRecorder = recorder;
      shadowingRecorderStream = stream;
      shadowingRecordingIndex = shadowingSentenceIndex;
      shadowingChunks = [];
      shadowingDiscardOnStop = false;
      recorder.addEventListener("dataavailable", (event) => {
        if (event.data?.size) shadowingChunks.push(event.data);
      });
      recorder.addEventListener("stop", () => {
        const recordedIndex = shadowingRecordingIndex;
        if (!shadowingDiscardOnStop && shadowingChunks.length) {
          const previousUrl = shadowingRecordingUrls.get(recordedIndex);
          if (previousUrl) URL.revokeObjectURL(previousUrl);
          const blob = new Blob(shadowingChunks, { type: recorder.mimeType || "audio/webm" });
          shadowingRecordingUrls.set(recordedIndex, URL.createObjectURL(blob));
          if (recordedIndex === shadowingSentenceIndex) {
            setShadowingStatus("录音完成。现在可以回听，或再录一次。");
          }
        }
        stream.getTracks().forEach((track) => track.stop());
        shadowingRecorder = null;
        shadowingRecorderStream = null;
        shadowingChunks = [];
        shadowingRecordingIndex = -1;
        shadowingDiscardOnStop = false;
        syncShadowingUi();
      }, { once: true });
      recorder.start();
      setShadowingStatus("录音中。读完后再次点击录音按钮结束。");
      syncShadowingUi();
    } catch (error) {
      shadowingRecorderStream?.getTracks().forEach((track) => track.stop());
      shadowingRecorderStream = null;
      shadowingRecorder = null;
      showToast("无法使用麦克风，请检查浏览器录音权限。");
      setShadowingStatus("麦克风未开启，仍可继续听原音练习。");
      syncShadowingUi();
    }
  }

  function toggleShadowingRecording() {
    if (shadowingRecorder?.state === "recording") {
      stopShadowingRecorder();
      return;
    }
    startShadowingRecording();
  }

  function playShadowingRecording() {
    const url = shadowingRecordingUrls.get(shadowingSentenceIndex);
    if (!url || !dom.shadowingRecording) return;
    dom.audio?.pause();
    clearShadowingAudioSegment();
    dom.shadowingRecording.src = url;
    dom.shadowingRecording.currentTime = 0;
    setShadowingStatus("正在回听你的跟读录音。");
    dom.shadowingRecording.play().catch(() => showToast("录音回放失败。"));
  }

  function resetLessonViews() {
    resetShadowing();
    isVocabSelfCheck = false;
    if (dom.vocabSelfCheck) {
      dom.vocabSelfCheck.textContent = "自检";
      dom.vocabSelfCheck.setAttribute("aria-pressed", "false");
    }
    if (dom.vocabList) {
      dom.vocabList.innerHTML = "";
      delete dom.vocabList.dataset.lesson;
    }
    if (dom.patternList) {
      dom.patternList.innerHTML = "";
      delete dom.patternList.dataset.lesson;
      dom.patternList.hidden = false;
    }
    if (dom.patternPracticeShell) {
      dom.patternPracticeShell.hidden = true;
      dom.patternPracticeShell.innerHTML = "";
    }
    closeDetail();
    closeGrammarModal(false);
  }

  async function loadLesson(lesson, { history = "push", section = "text" } = {}) {
    const item = getCatalogItem(lesson);
    if (!item) return;
    const token = ++lessonLoadToken;
    activeLesson = item.lesson;
    collapsedLessonSections.delete(item.lesson);
    activeSection = section;
    activeBundle = null;
    configureLessonAudio(item);
    setDocumentTitle();
    renderCatalog();
    resetLessonViews();
    showSectionShell("text");
    setLessonLoading(`正在加载第${item.lesson}课...`);
    if (history !== "none") {
      const url = new URL(window.location.href);
      url.searchParams.set("lesson", String(item.lesson));
      window.history[history === "replace" ? "replaceState" : "pushState"]({ lesson: item.lesson }, "", url);
    }
    try {
      if (!bundles[item.lesson]) await loadScript(item.lessonSrc, `lesson-${item.lesson}`);
      if (token !== lessonLoadToken) return;
      activeBundle = bundles[item.lesson];
      if (!activeBundle) throw new Error("当前课程数据不存在。");
      dom.textPanel.innerHTML = activeBundle.articleHtml || '<div class="lesson-loading">本课暂时没有课文。</div>';
      decorateLessonPages(item);
      decorateShadowingSentences();
      setDocumentTitle();
      showSection(activeSection, false);
      if (dom.readerBody) dom.readerBody.scrollTop = 0;
      if (dom.reader) dom.reader.scrollTop = 0;
      if (mobileQuery.matches) syncCatalogToggle();
    } catch (error) {
      if (token !== lessonLoadToken) return;
      setLessonLoading(error && error.message ? error.message : "课程加载失败。", true);
    }
  }

  function showSectionShell(section) {
    document.querySelectorAll("[data-section-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.sectionPanel !== section;
    });
    if (dom.workspace) dom.workspace.classList.toggle("is-text-section", section === "text");
  }

  function showSection(section, focusContent = true) {
    activeSection = section;
    if (!activeBundle) {
      renderCatalog();
      return;
    }
    if (section !== "text") dom.audio?.pause();
    closeDetail();
    closeGrammarModal(false);
    showSectionShell(section);
    if (section === "vocab") buildVocabList();
    if (section === "patterns") buildPatternList();
    syncShadowingAvailability();
    renderCatalog();
    if (dom.readerBody) dom.readerBody.scrollTop = 0;
    if (dom.reader) dom.reader.scrollTop = 0;
    if (focusContent && !mobileQuery.matches && section !== "text" && dom.reader) {
      dom.reader.focus({ preventScroll: true });
    }
    if (focusContent && mobileQuery.matches && dom.workspace) {
      dom.workspace.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function moveResourceReader(delta) {
    if (!dom.reader || activeSection === "text" || mobileQuery.matches) return false;
    const maximum = Math.max(0, dom.reader.scrollHeight - dom.reader.clientHeight);
    if (!maximum) return false;
    const previous = dom.reader.scrollTop;
    dom.reader.scrollTop = Math.max(0, Math.min(maximum, previous + delta));
    return dom.reader.scrollTop !== previous;
  }

  dom.reader?.addEventListener("wheel", (event) => {
    const multiplier = event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? dom.reader.clientHeight : 1;
    if (moveResourceReader(event.deltaY * multiplier)) event.preventDefault();
  }, { passive: false });

  dom.reader?.addEventListener("keydown", (event) => {
    if (event.target !== dom.reader || activeSection === "text" || mobileQuery.matches) return;
    const distances = {
      ArrowDown: 48,
      ArrowUp: -48,
      PageDown: dom.reader.clientHeight * 0.82,
      PageUp: -dom.reader.clientHeight * 0.82,
      Home: -dom.reader.scrollHeight,
      End: dom.reader.scrollHeight,
    };
    if (!(event.key in distances)) return;
    if (moveResourceReader(distances[event.key])) event.preventDefault();
  });

  function markupToText(markup, limit = 1200) {
    const template = document.createElement("template");
    template.innerHTML = String(markup || "").replace(/<br\s*\/?>/gi, "\n");
    return String(template.content.textContent || "")
      .replace(/[ \t]+/g, " ")
      .replace(/\s*\n\s*/g, "\n")
      .trim()
      .slice(0, limit);
  }

  function findBundleEntry(key) {
    if (!activeBundle) return null;
    return [...(activeBundle.vocab || []), ...(activeBundle.patterns || [])]
      .find((entry) => entry.key === key) || null;
  }

  function getInsightItem(key, anchor = null) {
    const entry = findBundleEntry(key);
    const source = insightData[key] || {};
    const legacySource = legacyDictData[key] || {};
    const legacyDescription = parseLegacyDescription(legacySource.desc);
    const legacyExample = parseLegacyExample(legacySource.ex) || {};
    const isGrammar = source.type === "grammar"
      || ["grammar", "review"].includes(legacySource.type)
      || Boolean((activeBundle?.patterns || []).some((item) => item.key === key))
      || Boolean(anchor?.classList?.contains("grammar-point"))
      || Boolean(anchor?.classList?.contains("grammar-review"));
    const title = source.title
      || legacySource.title
      || (entry?.titleHtml ? htmlWithoutRubyReadings(entry.titleHtml) : "")
      || entry?.title
      || key;
    const example = source.example || {};
    const populated = [
      source.meaningZh,
      source.contextZh,
      source.connection,
      source.usageZh,
      source.exampleJa,
      example.ja,
      legacyDescription.meaning,
      legacyDescription.connection,
      legacyDescription.usage,
      legacyExample.ja,
    ].some((value) => String(value || "").trim());

    return {
      key,
      type: isGrammar ? "grammar" : "vocab",
      title,
      titleHtml: entry?.titleHtml || escapeHtml(title),
      reading: source.reading || (isGrammar ? entry?.speakText : resolveVocabSpeechText(entry)) || "",
      meaningZh: source.meaningZh || legacyDescription.meaning || "",
      contextZh: source.contextZh || legacyDescription.usage || "",
      connection: source.connection || legacyDescription.connection || "",
      usageZh: source.usageZh || legacyDescription.usage || "",
      exampleJa: source.exampleJa || example.ja || legacyExample.ja || "",
      exampleZh: source.exampleZh || example.zh || legacyExample.zh || "",
      isPending: !populated,
    };
  }

  function splitInlineExample(value) {
    const text = String(value || "").trim();
    const match = text.match(/^(.*?)(?:\s*[（(]([^（）()]+)[）)]\s*)$/s);
    return {
      original: match ? match[1].trim() : text,
      translation: match ? match[2].trim() : "",
    };
  }

  function rowMarkup(label, value, valueClass = "", htmlValue = false) {
    if (!value) return "";
    const content = htmlValue ? value : escapeHtml(value);
    const rowClasses = [
      ["例", "例句"].includes(label) ? "is-example-line" : "",
      label === "语义" ? "is-semantic-line" : "",
      label === "场景" ? "is-context-line" : "",
    ].filter(Boolean).join(" ");
    return `<div class="word-bank-entry-line${rowClasses ? ` ${rowClasses}` : ""}"><strong>${escapeHtml(label)}</strong><span class="${escapeHtml(valueClass)}">${content}</span></div>`;
  }

  function emphasizeExampleTarget(markup, targets, className) {
    const source = String(markup || "");
    if (!source || /<strong\b/i.test(source)) return source;
    const baseCandidates = targets
      .map((target) => htmlWithoutRubyReadings(target, 160).replace(/^[〜～~]+/, "").trim())
      .filter((target, index, items) => target && items.indexOf(target) === index)
      .sort((left, right) => right.length - left.length);
    const conjugatedCandidates = baseCandidates.flatMap((target) => {
      const ending = target.slice(-1);
      const stem = target.slice(0, -1);
      const teForms = {
        う: `${stem}って`,
        つ: `${stem}って`,
        る: `${stem}って`,
        む: `${stem}んで`,
        ぶ: `${stem}んで`,
        ぬ: `${stem}んで`,
        く: `${stem}いて`,
        ぐ: `${stem}いで`,
        す: `${stem}して`,
      };
      return teForms[ending] ? [target, teForms[ending]] : [target];
    });
    const candidates = conjugatedCandidates
      .filter((target, index, items) => target && items.indexOf(target) === index)
      .sort((left, right) => right.length - left.length);
    const target = candidates.find((candidate) => source.includes(candidate));
    if (!target) return source;
    return source.replace(target, `<strong class="${escapeHtml(className)}">${escapeHtml(target)}</strong>`);
  }

  function getWordBankEntries() {
    try {
      const entries = JSON.parse(localStorage.getItem(WORD_BANK_STORAGE_KEY) || "[]");
      return Array.isArray(entries) ? entries : [];
    } catch (error) {
      return [];
    }
  }

  function saveWordBankEntries(entries, detail) {
    const normalized = entries.slice(0, WORD_BANK_MAX_ENTRIES);
    localStorage.setItem(WORD_BANK_STORAGE_KEY, JSON.stringify(normalized));
    window.dispatchEvent(new CustomEvent("kiki-word-bank:changed", { detail: { entries: normalized, ...detail } }));
  }

  function getVocabBankId(key) {
    return `try-n1-l${activeLesson}-vocab-${key}`;
  }

  function isVocabSaved(key) {
    const id = getVocabBankId(key);
    return getWordBankEntries().some((entry) => entry && entry.id === id);
  }

  function makeVocabBankEntry(entry) {
    const item = getInsightItem(entry.key);
    const now = new Date().toISOString();
    return {
      id: getVocabBankId(entry.key),
      word: entry.titleHtml
        ? htmlWithoutRubyReadings(entry.titleHtml, 90)
        : htmlToText(item.title || entry.key, 90),
      reading: item.reading,
      meaningZh: item.meaningZh || "解释整理中",
      meaningJa: item.contextZh || "",
      example: item.exampleJa,
      note: "",
      tags: ["教材"],
      sourceTitle: `Try! N1 第${activeLesson}課 ${activeBundle.title}`,
      sourceUrl: `daily/try-n1/lesson-content-redesign.html?lesson=${activeLesson}`,
      sourceText: [item.exampleJa, item.exampleZh, item.meaningZh].filter(Boolean).join(" "),
      createdAt: now,
      updatedAt: now,
      origin: "textbook",
    };
  }

  function toggleVocabFavorite(key) {
    const entry = (activeBundle.vocab || []).find((item) => item.key === key);
    if (!entry) return;
    const wordBankEntry = makeVocabBankEntry(entry);
    const entries = getWordBankEntries();
    const index = entries.findIndex((item) => item && item.id === wordBankEntry.id);
    if (index >= 0) {
      entries.splice(index, 1);
      saveWordBankEntries(entries, { action: "delete", id: wordBankEntry.id });
      showToast("已取消收藏。");
    } else {
      entries.unshift(wordBankEntry);
      saveWordBankEntries(entries, { action: "create", entry: wordBankEntry });
      showToast("已收藏到我推の単語。");
    }
    buildVocabList();
  }

  function showToast(message) {
    let toast = document.getElementById("kiki-word-bank-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "kiki-word-bank-toast";
      toast.className = "kiki-word-bank-toast";
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
  }

  function speakVocab(key, button) {
    const entry = (activeBundle.vocab || []).find((item) => item.key === key);
    if (!entry || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
      showToast("当前浏览器不支持发音。");
      return;
    }
    window.speechSynthesis.cancel();
    document.querySelectorAll(".vocab-pronounce-button.is-speaking").forEach((item) => item.classList.remove("is-speaking"));
    const speechText = resolveVocabSpeechText(entry);
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = "ja-JP";
    const japaneseVoice = getJapaneseSpeechVoice();
    if (japaneseVoice) utterance.voice = japaneseVoice;
    utterance.rate = 0.95;
    button?.classList.add("is-speaking");
    button?.setAttribute("data-speech-text", speechText);
    utterance.onend = () => button?.classList.remove("is-speaking");
    utterance.onerror = () => button?.classList.remove("is-speaking");
    window.speechSynthesis.speak(utterance);
  }

  function stripDuplicateVocabPos(value) {
    return String(value || "")
      .replace(/\s*[（(](?:名词|动词|自动词|他动词|形容词|形容动词|副词|连体词|接续词|感叹词|助词|助动词|数词|代词|专有名词|外来语)[）)]\s*$/u, "")
      .trim();
  }

  function buildVocabList() {
    if (!activeBundle || !dom.vocabList) return;
    if (dom.vocabList.dataset.lesson === String(activeLesson) && dom.vocabList.childElementCount) {
      dom.vocabList.classList.toggle("is-self-check", isVocabSelfCheck);
      return;
    }
    dom.vocabList.dataset.lesson = String(activeLesson);
    dom.vocabList.className = "resource-list word-bank-list lesson-vocab-bank";
    dom.vocabList.classList.toggle("is-self-check", isVocabSelfCheck);
    dom.vocabList.innerHTML = (activeBundle.vocab || []).map((entry) => {
      const item = getInsightItem(entry.key);
      const example = {
        original: vocabExampleRubyMap[entry.key] || item.exampleJa,
        translation: item.exampleZh,
      };
      const exampleOriginal = emphasizeExampleTarget(
        example.original,
        [item.title, item.titleHtml, entry.title, entry.titleHtml],
        "vocab-example-target",
      );
      const saved = isVocabSaved(entry.key);
      const vocabMeta = vocabMetaMap[entry.key] || Object.create(null);
      const meta = [
        entry.pos || vocabMeta.pos,
        entry.pitch || vocabMeta.pitch,
      ].filter(Boolean).join("・");
      return `
        <article class="word-bank-entry-card vocab-bank-card${saved ? " is-saved" : ""}${item.isPending ? " is-pending" : ""}">
          <div class="word-bank-entry-head">
            <div class="word-bank-entry-word">
              <span class="vocab-word-title">${entry.titleHtml || item.titleHtml}</span>
              ${meta ? `<span class="vocab-word-meta">${escapeHtml(meta)}</span>` : ""}
            </div>
            <div class="word-bank-entry-actions">
              <button type="button" class="word-bank-icon-button vocab-pronounce-button" data-vocab-speak-key="${escapeHtml(entry.key)}" aria-label="发音">
                <svg class="icon"><use href="#icon-sound"></use></svg>
              </button>
              <button type="button" class="vocab-save-status" data-vocab-favorite-key="${escapeHtml(entry.key)}" aria-pressed="${saved}">${saved ? "已收藏" : "收藏"}</button>
            </div>
          </div>
          <div class="word-bank-entry-body">
            ${rowMarkup("中文", stripDuplicateVocabPos(item.meaningZh) || "解释整理中", "vocab-answer-content")}
            ${rowMarkup("场景", item.contextZh, "vocab-answer-content")}
            ${rowMarkup("例", `<span class="vocab-example-original">${exampleOriginal}</span>${example.translation ? `<span class="vocab-example-translation vocab-answer-content">${escapeHtml(example.translation)}</span>` : ""}`, "", true)}
          </div>
        </article>`;
    }).join("");
  }

  function getGrammarSearchDataset({ all = false } = {}) {
    const repo = window.GrammarDB && window.GrammarDB.repo;
    if (!repo || typeof repo.getSearchDataset !== "function") return [];
    if (all) {
      if (!allGrammarSearchItems) allGrammarSearchItems = repo.getSearchDataset() || [];
      return allGrammarSearchItems;
    }
    if (!lessonGrammarSearchItems.has(activeLesson)) {
      lessonGrammarSearchItems.set(
        activeLesson,
        repo.getSearchDataset({ level: "N1", bookKey: "try-n1", lessonNumber: activeLesson }) || [],
      );
    }
    return lessonGrammarSearchItems.get(activeLesson);
  }

  function scoreGrammarSearchItem(item, targets, entryKey) {
    const candidate = normalizeGrammarTitle(item.title);
    const romaji = normalizeGrammarTitle(item.romaji);
    if (romaji && romaji === entryKey) return 1200;
    if (!candidate || !targets.length) return 0;
    return targets.reduce((highest, target) => {
      if (candidate === target) return Math.max(highest, 1000);
      if (candidate.length < 3 || target.length < 3) return highest;
      if (target.includes(candidate) || candidate.includes(target)) {
        return Math.max(highest, Math.min(candidate.length, target.length) + 100);
      }
      return highest;
    }, 0);
  }

  function findBestGrammarSearchItem(items, targets, entryKey) {
    let best = null;
    let bestScore = 0;
    items.forEach((item) => {
      const score = scoreGrammarSearchItem(item, targets, entryKey);
      if (score > bestScore) {
        best = item;
        bestScore = score;
      }
    });
    return bestScore >= 100 ? best : null;
  }

  function findGrammarSearchItem(entry) {
    const targets = [
      entry.title,
      htmlToText(entry.titleHtml),
      htmlWithoutRubyReadings(entry.titleHtml),
      entry.key,
    ]
      .map(normalizeGrammarTitle)
      .filter(Boolean);
    const entryKey = normalizeGrammarTitle(entry.key);
    return findBestGrammarSearchItem(getGrammarSearchDataset(), targets, entryKey)
      || findBestGrammarSearchItem(getGrammarSearchDataset({ all: true }), targets, entryKey);
  }

  function normalizeGrammarExample(example) {
    if (!example) return null;
    if (typeof example === "string") {
      const split = splitInlineExample(example);
      return split.original ? { ja: split.original, zh: split.translation } : null;
    }
    const ja = String(example.jp || example.ja || example.original || "").trim();
    const zh = String(example.cn || example.zh || example.translation || "").trim();
    return ja ? { ja, zh } : null;
  }

  function parseLegacyDescription(markup) {
    const template = document.createElement("template");
    template.innerHTML = String(markup || "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/div\s*>/gi, "</div>\n");
    const text = String(template.content.textContent || "")
      .replace(/\u00a0/g, " ")
      .replace(/[ \t]+/g, " ")
      .replace(/\s*\n\s*/g, "\n")
      .trim();
    const fields = Object.create(null);
    const fieldPattern = /【([^】]+)】\s*([\s\S]*?)(?=【[^】]+】|$)/g;
    let match = fieldPattern.exec(text);
    while (match) {
      fields[match[1].trim()] = match[2].trim();
      match = fieldPattern.exec(text);
    }
    return {
      meaning: fields["含义"] || fields["意义"] || "",
      connection: fields["接续"] || "",
      usage: fields["使用"] || fields["用法"] || fields["语境"] || fields["场景"] || (!Object.keys(fields).length ? text : ""),
    };
  }

  function parseLegacyExample(markup) {
    const source = String(markup || "").trim();
    if (!source) return null;
    const parts = source.split(/<br\s*\/?>/i);
    const ja = String(parts.shift() || "").trim();
    const zh = markupToText(parts.join(" "), 800)
      .replace(/^[（(]\s*/, "")
      .replace(/\s*[）)]$/, "")
      .trim();
    if (ja) return { ja, zh };
    const split = splitInlineExample(markupToText(source, 1200));
    return split.original ? { ja: split.original, zh: split.translation } : null;
  }

  function getLegacyGrammarItem(entry) {
    const source = legacyDictData[entry.key];
    if (!source || !["grammar", "review"].includes(source.type)) return null;
    const description = parseLegacyDescription(source.desc);
    return {
      title: source.title || "",
      ...description,
      example: GRAMMAR_DETAIL_EXAMPLE_OVERRIDES[entry.key] || parseLegacyExample(source.ex),
    };
  }

  function resolvePatternData(entry) {
    const insight = getInsightItem(entry.key);
    const library = findGrammarSearchItem(entry);
    const legacy = getLegacyGrammarItem(entry);
    const examples = [];
    const seenExamples = new Set();
    const appendExample = (example) => {
      const normalized = normalizeGrammarExample(example);
      if (!normalized) return;
      const key = markupToText(normalized.ja, 800);
      if (!key || seenExamples.has(key)) return;
      seenExamples.add(key);
      examples.push(normalized);
    };

    (library?.examples || []).forEach(appendExample);
    appendExample(legacy?.example);
    (entry.examples || []).forEach(appendExample);
    if (insight.exampleJa) appendExample({ ja: insight.exampleJa, zh: insight.exampleZh });

    return {
      insight,
      library,
      title: library?.title || legacy?.title || insight.title || entry.title || entry.key,
      titleHtml: entry.titleHtml || escapeHtml(library?.title || legacy?.title || insight.title || entry.title || entry.key),
      meaning: library?.meaning || legacy?.meaning || insight.meaningZh || "解释整理中",
      connection: library?.connection || legacy?.connection || insight.connection || "",
      usage: markupToText(library?.desc || legacy?.usage || insight.usageZh || insight.contextZh, 1600),
      usageHtml: library?.desc || escapeHtml(legacy?.usage || insight.usageZh || insight.contextZh || ""),
      examples,
    };
  }

  function patternIndexSymbol(index) {
    return PATTERN_INDEX_SYMBOLS[index] || String(index + 1);
  }

  function formatPatternTitleHtml(markup) {
    const template = document.createElement("template");
    template.innerHTML = String(markup || "");
    const plainTitle = htmlWithoutRubyReadings(template.innerHTML);
    if (plainTitle && !/^[～〜~]/.test(plainTitle)) {
      template.content.insertBefore(document.createTextNode("～"), template.content.firstChild);
    }

    const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_TEXT);
    let textNode = walker.nextNode();
    while (textNode) {
      if (textNode.parentElement?.tagName !== "RT") {
        textNode.nodeValue = textNode.nodeValue.replace(/([/／])(\s*)(?![～〜~])/g, "$1$2～");
      }
      textNode = walker.nextNode();
    }
    return template.innerHTML;
  }

  function clearPatternCardAlignment() {
    if (!dom.patternList) return;
    dom.patternList.querySelectorAll(".word-bank-entry-head, .word-bank-entry-line").forEach((element) => {
      element.style.removeProperty("min-height");
    });
  }

  function alignPatternCardRows() {
    patternAlignmentFrame = 0;
    if (!dom.patternList) return;
    clearPatternCardAlignment();
    if (mobileQuery.matches || activeSection !== "patterns") return;

    const cards = Array.from(dom.patternList.querySelectorAll(":scope > .pattern-bank-card"));
    if (cards.length < 2) return;
    const columnCount = Math.max(
      1,
      getComputedStyle(dom.patternList).gridTemplateColumns.split(/\s+/).filter(Boolean).length,
    );
    if (columnCount < 2) return;

    const rowSelectors = [
      ".word-bank-entry-head",
      ".word-bank-entry-line:nth-child(1)",
      ".word-bank-entry-line:nth-child(2)",
      ".word-bank-entry-line:nth-child(3)",
      ".word-bank-entry-line:nth-child(4)",
    ];

    for (let start = 0; start < cards.length; start += columnCount) {
      const group = cards.slice(start, start + columnCount);
      rowSelectors.forEach((selector) => {
        const rows = group.map((card) => card.querySelector(selector)).filter(Boolean);
        const maximum = Math.ceil(Math.max(0, ...rows.map((row) => row.getBoundingClientRect().height)));
        if (maximum) rows.forEach((row) => row.style.minHeight = `${maximum}px`);
      });
    }
  }

  function schedulePatternCardAlignment() {
    if (patternAlignmentFrame) cancelAnimationFrame(patternAlignmentFrame);
    patternAlignmentFrame = requestAnimationFrame(() => {
      patternAlignmentFrame = requestAnimationFrame(alignPatternCardRows);
    });
  }

  function buildPatternList() {
    if (!activeBundle || !dom.patternList) return;
    if (dom.patternList.dataset.lesson === String(activeLesson) && dom.patternList.childElementCount) {
      schedulePatternCardAlignment();
      return;
    }
    dom.patternList.dataset.lesson = String(activeLesson);
    dom.patternList.className = "resource-list word-bank-list lesson-pattern-bank";
    dom.patternList.innerHTML = (activeBundle.patterns || []).map((entry, index) => {
      const pattern = resolvePatternData(entry);
      const cardExamples = [];
      const seenCardExamples = new Set();
      [
        ...(pattern.library?.examples || []),
        ...getGrammarExtraExamples(pattern.library),
        GRAMMAR_CARD_EXTRA_EXAMPLES[entry.key],
        ...pattern.examples,
      ].forEach((example) => {
        const normalized = normalizeGrammarExample(example);
        const exampleKey = normalized ? markupToText(normalized.ja, 800) : "";
        if (!normalized || !exampleKey || seenCardExamples.has(exampleKey) || cardExamples.length >= 2) return;
        seenCardExamples.add(exampleKey);
        cardExamples.push(normalized);
      });
      const displayTitleHtml = formatPatternTitleHtml(pattern.titleHtml);
      const patternTitle = htmlWithoutRubyReadings(pattern.title) || pattern.title;
      const patternTitleLength = Array.from(patternTitle).length;
      const patternTitleSizeClass = patternTitleLength >= 18 ? " is-compact" : patternTitleLength >= 14 ? " is-long" : "";
      const grammarCode = `${String(activeLesson).padStart(2, "0")}-${index + 1}`;
      const grammarFavoriteId = String(
        GRAMMAR_FAVORITE_ID_OVERRIDES[`${activeLesson}:${entry.key}`]
        || pattern.library?.canonicalId
        || pattern.library?.id
        || ""
      ).trim();
      return `
        <article class="word-bank-entry-card pattern-bank-card grammar-study-card">
          <header class="grammar-study-head">
            <span class="grammar-study-code" aria-label="第${activeLesson}课第${index + 1}条">${grammarCode}</span>
            <div class="grammar-study-title-block">
              <div class="grammar-study-title-line">
                <h3 class="pattern-word-title${patternTitleSizeClass}" lang="ja">${displayTitleHtml}</h3>
                <span class="grammar-study-meaning">${escapeHtml(pattern.meaning)}</span>
              </div>
            </div>
            <div class="grammar-study-actions grammar-learning-favorite-slot">
              <button
                class="grammar-learning-favorite"
                type="button"
                data-grammar-favorite="${escapeHtml(grammarFavoriteId)}"
                data-grammar-title="${escapeHtml(patternTitle)}"
                aria-label="收藏语法 ${escapeHtml(patternTitle)}"
                title="收藏"
              >
                <span class="grammar-learning-favorite-icon" aria-hidden="true">☆</span>
                <span class="grammar-learning-favorite-label">收藏</span>
              </button>
            </div>
          </header>
          <div class="grammar-study-body">
            <section class="grammar-study-section grammar-study-connection">
              <h4>接续</h4>
              <p>${escapeHtml(pattern.connection)}</p>
            </section>
            <section class="grammar-study-section grammar-study-explanation">
              <h4>用法说明</h4>
              <p>${pattern.usageHtml}</p>
            </section>
            <section class="grammar-study-section grammar-study-examples">
              <h4>例句</h4>
              ${cardExamples.map((example) => {
                const exampleOriginal = emphasizeExampleTarget(
                  example.ja,
                  [pattern.title, pattern.titleHtml, entry.title, entry.titleHtml],
                  "pattern-example-target",
                );
                return `<div class="grammar-study-example-pair">
                  <p class="pattern-example-original" lang="ja">${exampleOriginal}</p>
                  ${example.zh ? `<p class="pattern-example-translation">${escapeHtml(example.zh)}</p>` : ""}
                </div>`;
              }).join("")}
            </section>
          </div>
        </article>`;
    }).join("");
    window.GrammarLearningFavorites?.refresh?.(dom.patternList);
    const practiceState = getPatternPracticeState();
    dom.patternList.hidden = Boolean(practiceState.active);
    if (dom.patternPracticeShell) {
      dom.patternPracticeShell.hidden = !practiceState.active;
      if (practiceState.active) renderPatternPractice();
    }
    updatePatternPracticeToggle();
    schedulePatternCardAlignment();
    document.fonts?.ready?.then(schedulePatternCardAlignment);
  }

  function openGrammarModal() {
    dom.grammarModal.hidden = false;
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => {
      dom.grammarModal.querySelector(".grammar-modal-close")?.focus({ preventScroll: true });
    });
  }

  function closeGrammarModal(restoreFocus = true) {
    if (!dom.grammarModal) return;
    dom.grammarModal.hidden = true;
    dom.grammarModal.classList.remove("textbook-example-mode");
    document.body.classList.remove("modal-open");
    if (restoreFocus && lastGrammarTrigger && document.contains(lastGrammarTrigger)) lastGrammarTrigger.focus({ preventScroll: true });
    lastGrammarTrigger = null;
    activeGrammarDetailKey = null;
    expandedGrammarExampleKey = null;
  }

  function getGrammarExtraExamples(library) {
    const repo = window.GrammarDB && window.GrammarDB.repo;
    if (!repo || typeof repo.getExtraExamples !== "function" || !library) return [];
    const numericId = Number.isFinite(Number(library.id))
      ? Number(library.id)
      : Number(String(library.id || "").match(/(\d+)$/)?.[1] || library.legacy?.sourceNumericId);
    if (!Number.isFinite(numericId)) return [];
    const extraExampleData = repo.getExtraExamples() || {};
    const items = extraExampleData[String(numericId)] || extraExampleData[numericId];
    return Array.isArray(items) ? items.map((example) => ({ ja: example.jp || "", zh: example.cn || "" })) : [];
  }

  function renderGrammarDetail(key, { open = true } = {}) {
    const entry = (activeBundle.patterns || []).find((item) => item.key === key);
    if (!entry) return;
    if (activeGrammarDetailKey !== key) expandedGrammarExampleKey = null;
    activeGrammarDetailKey = key;
    const pattern = resolvePatternData(entry);
    const extraExamples = getGrammarExtraExamples(pattern.library);
    const isExamplesExpanded = expandedGrammarExampleKey === key;
    const visibleExamples = isExamplesExpanded ? [...pattern.examples, ...extraExamples] : pattern.examples;
    dom.grammarModal.classList.remove("textbook-example-mode");
    dom.grammarModalTitle.textContent = htmlWithoutRubyReadings(pattern.title) || "详细解释";
    dom.grammarModalBadges.innerHTML = "";
    dom.grammarModalBody.innerHTML = `
      <section class="grammar-detail-section"><span class="grammar-detail-label">意味</span><div class="grammar-detail-highlight">${escapeHtml(pattern.meaning)}</div></section>
      <section class="grammar-detail-section"><span class="grammar-detail-label">接续</span><div class="grammar-detail-code">${escapeHtml(pattern.connection)}</div></section>
      <section class="grammar-detail-section"><span class="grammar-detail-label">解説</span><div class="grammar-detail-desc">${escapeHtml(pattern.usage)}</div></section>
      <section class="grammar-detail-section"><span class="grammar-detail-label">例文</span><div class="grammar-example-list">
        ${visibleExamples.map((example, index) => `<div class="grammar-example-card${index >= pattern.examples.length ? " is-extra" : ""}"><div class="grammar-example-jp">${example.ja || ""}</div>${example.zh ? `<div class="grammar-example-cn">${escapeHtml(example.zh)}</div>` : ""}</div>`).join("")}
      </div>${extraExamples.length ? `<button class="grammar-more-examples" type="button" data-grammar-more-examples="${escapeHtml(key)}" aria-expanded="${isExamplesExpanded}">${isExamplesExpanded ? "收起例句" : "查看更多例句"}<span aria-hidden="true">${isExamplesExpanded ? "↑" : "➜"}</span></button>` : ""}</section>`;
    if (open) openGrammarModal();
  }

  function positionDetailPopover(anchor) {
    if (!dom.detailPopover || !anchor) return;
    const isMobile = mobileQuery.matches;
    const margin = isMobile ? 10 : 14;
    dom.detailPopover.style.removeProperty("right");
    dom.detailPopover.style.removeProperty("bottom");
    const headerHeight = parseFloat(getComputedStyle(document.body).getPropertyValue("--site-header-height")) || 0;
    let boundary = headerHeight + margin;
    if (isMobile) {
      const stickyElements = [dom.sidebar, document.querySelector(".classic-page-header")];
      boundary = stickyElements.reduce((current, element) => {
        if (!element || element.hidden || getComputedStyle(element).display === "none") return current;
        const rect = element.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) return current;
        return Math.max(current, Math.min(rect.bottom + 8, window.innerHeight * 0.32));
      }, margin);
    }
    const audioRect = dom.audioDock && !dom.audioDock.hidden ? dom.audioDock.getBoundingClientRect() : null;
    const bottomBoundary = isMobile && audioRect && audioRect.height > 0 ? audioRect.height + 14 : margin;
    const anchorRect = anchor.getBoundingClientRect();
    const popoverRect = dom.detailPopover.getBoundingClientRect();
    let left = anchorRect.left + anchorRect.width / 2 - popoverRect.width / 2;
    left = Math.max(margin, Math.min(window.innerWidth - popoverRect.width - margin, left));
    let top = anchorRect.top - popoverRect.height - 12;
    let placement = "top";
    if (top < boundary) {
      top = anchorRect.bottom + 12;
      placement = "bottom";
    }
    top = Math.max(boundary, Math.min(window.innerHeight - popoverRect.height - bottomBoundary, top));
    dom.detailPopover.style.left = `${left}px`;
    dom.detailPopover.style.top = `${top}px`;
    dom.detailPopover.style.setProperty(
      "--popover-arrow-x",
      `${Math.max(18, Math.min(popoverRect.width - 18, anchorRect.left + anchorRect.width / 2 - left))}px`
    );
    dom.detailPopover.dataset.placement = placement;
  }

  function firstQuickSentence(value) {
    const text = markupToText(value, 240)
      .replace(/^[【\[]?[^】\]]{1,8}[】\]]?[：:]\s*/, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!text) return "";
    const match = text.match(/^.*?[。！？]|^.*$/);
    return (match?.[0] || text).trim();
  }

  function isGrammarUsageLabel(value) {
    const text = String(value || "")
      .replace(/[。！？；，、：:\s]/g, "")
      .trim();
    if (!text) return true;
    return /^(?:口语|书面语?|正式|非正式|常用|固定|惯用|强调|委婉|郑重|文学性)(?:表达|用法|句型|语法)?$/.test(text);
  }

  function firstUsefulGrammarUsage(value) {
    const text = markupToText(value, 420)
      .replace(/^[【\[]?[^】\]]{1,8}[】\]]?[：:]\s*/, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!text) return "";
    const sentences = (text.match(/[^。！？]+[。！？]?/g) || [text])
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence && !isGrammarUsageLabel(sentence));
    if (!sentences.length) return "";
    const first = sentences[0];
    const firstLength = first.replace(/[。！？\s]/g, "").length;
    return firstLength < 18 && sentences[1]
      ? `${first}${sentences[1]}`
      : first;
  }

  function resolveQuickGrammarUsage(item) {
    const entry = findBundleEntry(item.key) || {
      key: item.key,
      title: item.title,
      titleHtml: item.titleHtml,
    };
    const library = findGrammarSearchItem(entry);
    const legacy = getLegacyGrammarItem(entry);
    const candidates = [
      library?.desc,
      legacy?.usage,
      item.usageZh,
      item.contextZh,
      item.meaningZh,
    ];
    for (const candidate of candidates) {
      const usage = firstUsefulGrammarUsage(candidate);
      if (usage) return usage;
    }
    return "用于快速确认这一文型的基本用法。";
  }

  function shortenQuickRecall(value, limit = 54) {
    const text = String(value || "").trim();
    if (text.length <= limit) return text;
    const punctuation = Math.max(
      text.lastIndexOf("，", limit),
      text.lastIndexOf("；", limit),
      text.lastIndexOf("、", limit)
    );
    const end = punctuation >= 28 ? punctuation : limit;
    return `${text.slice(0, end).replace(/[，；、：:\s]+$/, "")}。`;
  }

  function buildQuickRecallSummary(item) {
    const title = markupToText(item.title || item.key, 80);
    const meta = vocabMetaMap[item.key] || {};
    const meaning = firstQuickSentence(item.meaningZh);
    const usage = item.type === "grammar"
      ? resolveQuickGrammarUsage(item)
      : firstQuickSentence(item.contextZh);
    if (item.type === "vocab") {
      const reading = markupToText(item.reading, 40);
      const readingLabel = reading && reading !== title ? `（${reading}）` : "";
      const posLabel = meta.pos ? `${meta.pos}。` : "";
      return shortenQuickRecall(`${title}${readingLabel}：${posLabel}${meaning || usage || "用于确认课文中的基本词义。"}`);
    }
    const grammarTitle = `～${title.replace(/^[～〜~]+/, "")}`;
    return shortenQuickRecall(`${grammarTitle}：${usage}`);
  }

  function renderInsight(key, anchor) {
    if (!dom.detailPopover) return;
    const item = getInsightItem(key, anchor);
    dom.detailSummary.textContent = buildQuickRecallSummary(item);
    dom.detailPopover.hidden = false;
    activeDetailAnchor = anchor;
    document.querySelectorAll(".lesson-fragment .vocab-point, .lesson-fragment .grammar-point, .lesson-fragment .grammar-review").forEach((point) => point.classList.toggle("active", point === anchor));
    requestAnimationFrame(() => positionDetailPopover(anchor));
  }

  function closeDetail() {
    if (!dom.detailPopover) return;
    dom.detailPopover.hidden = true;
    dom.detailPopover.style.removeProperty("left");
    dom.detailPopover.style.removeProperty("top");
    dom.detailPopover.style.removeProperty("--popover-arrow-x");
    dom.detailPopover.removeAttribute("data-placement");
    activeDetailAnchor = null;
    document.querySelectorAll(".lesson-fragment .vocab-point, .lesson-fragment .grammar-point, .lesson-fragment .grammar-review").forEach((point) => point.classList.remove("active"));
  }

  function toggleFeature(type) {
    if (type === "ruby") document.body.classList.toggle("hide-ruby");
    if (type === "trans") document.body.classList.toggle("show-trans");
    document.querySelectorAll(`[data-toggle="${type}"]`).forEach((button) => {
      const active = type === "ruby" ? !document.body.classList.contains("hide-ruby") : document.body.classList.contains("show-trans");
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function getPatternPracticeState() {
    if (!patternPracticeStates.has(activeLesson)) {
      patternPracticeStates.set(activeLesson, {
        active: false,
        pool: [],
        queue: [],
        wrong: [],
        index: 0,
        score: 0,
        selected: null,
        answered: false,
        complete: false,
        label: "随机练习",
        emptyMessage: "",
        loading: false,
        error: "",
      });
    }
    return patternPracticeStates.get(activeLesson);
  }

  function shuffled(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function beginPatternRound(items, label = "随机练习") {
    const state = getPatternPracticeState();
    state.queue = items.map((item) => ({ ...item, options: item.options.slice() }));
    state.wrong = [];
    state.index = 0;
    state.score = 0;
    state.selected = null;
    state.answered = false;
    state.complete = false;
    state.active = true;
    state.label = label;
    state.emptyMessage = "";
    dom.patternList.hidden = true;
    dom.patternPracticeShell.hidden = false;
    updatePatternPracticeToggle();
    renderPatternPractice();
  }

  function updatePatternPracticeToggle() {
    const state = getPatternPracticeState();
    if (!dom.patternPracticeToggle) return;
    dom.patternPracticeToggle.disabled = state.loading;
    dom.patternPracticeToggle.setAttribute("aria-expanded", String(state.active));
    dom.patternPracticeToggle.textContent = state.loading ? "加载中..."
      : state.active ? "返回文型"
        : state.error ? "重试加载"
          : "练习一下";
  }

  async function openPatternPractice() {
    const state = getPatternPracticeState();
    if (state.active) {
      state.active = false;
      dom.patternList.hidden = false;
      dom.patternPracticeShell.hidden = true;
      updatePatternPracticeToggle();
      schedulePatternCardAlignment();
      return;
    }
    if (state.pool.length) {
      beginPatternRound(shuffled(state.pool).slice(0, Math.min(10, state.pool.length)));
      return;
    }
    state.loading = true;
    state.error = "";
    updatePatternPracticeToggle();
    dom.patternList.hidden = true;
    dom.patternPracticeShell.hidden = false;
    dom.patternPracticeShell.innerHTML = '<div class="pattern-practice-loading">正在加载本课语法选择练习...</div>';
    try {
      if (!window.tryN1PracticeQuestionData) {
        await loadScript("data/practice/question-data-n1.js", "pattern-question-data-n1-v1");
      }
      const pool = window.tryN1PracticeQuestionData?.[activeLesson]?.choice || [];
      state.pool = pool.filter((item) => (
        item
        && Array.isArray(item.options)
        && item.options.length === 4
        && Number.isInteger(Number(item.answer))
      ));
      if (!state.pool.length) throw new Error("本课暂时没有可用的选择题。");
      state.loading = false;
      beginPatternRound(shuffled(state.pool).slice(0, Math.min(10, state.pool.length)));
    } catch (error) {
      state.loading = false;
      state.error = error?.message || "题库加载失败。";
      dom.patternList.hidden = false;
      dom.patternPracticeShell.innerHTML = `<div class="pattern-practice-error">${escapeHtml(state.error)}<button type="button" data-pattern-practice-action="retry-load">重新加载</button></div>`;
      updatePatternPracticeToggle();
    }
  }

  function emptyPatternMistakeStore() {
    return { version: 1, lessons: {} };
  }

  function readPatternMistakeStore() {
    try {
      const saved = JSON.parse(localStorage.getItem(PATTERN_MISTAKE_STORAGE_KEY) || "null");
      if (!saved || saved.version !== 1 || !saved.lessons || typeof saved.lessons !== "object") {
        return emptyPatternMistakeStore();
      }
      return saved;
    } catch (error) {
      return emptyPatternMistakeStore();
    }
  }

  function writePatternMistakeStore(store) {
    try {
      localStorage.setItem(PATTERN_MISTAKE_STORAGE_KEY, JSON.stringify(store));
    } catch (error) {
      // The practice remains usable if local storage is unavailable.
    }
  }

  function clearLegacyPatternMistakeStorage() {
    try {
      LEGACY_PATTERN_MISTAKE_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
    } catch (error) {
      // Ignore blocked storage; the new practice never reads legacy keys.
    }
  }

  function getStoredPatternMistakeIds(lesson = activeLesson) {
    const store = readPatternMistakeStore();
    const ids = store.lessons[String(lesson)];
    return new Set(Array.isArray(ids) ? ids.map((value) => String(value)) : []);
  }

  function setPatternMistake(questionId, shouldStore, lesson = activeLesson) {
    const id = String(questionId || "").trim();
    if (!id) return;
    const store = readPatternMistakeStore();
    const lessonKey = String(lesson);
    const ids = new Set(Array.isArray(store.lessons[lessonKey]) ? store.lessons[lessonKey].map(String) : []);
    if (shouldStore) ids.add(id);
    else ids.delete(id);
    if (ids.size) store.lessons[lessonKey] = Array.from(ids);
    else delete store.lessons[lessonKey];
    writePatternMistakeStore(store);
  }

  function getPatternMistakeItems(state) {
    const ids = getStoredPatternMistakeIds();
    return state.pool.filter((item) => ids.has(String(item.id || "")));
  }

  function openPatternMistakes() {
    const state = getPatternPracticeState();
    const mistakes = getPatternMistakeItems(state);
    if (mistakes.length) {
      beginPatternRound(shuffled(mistakes).slice(0, Math.min(10, mistakes.length)), "错题库");
      return;
    }
    state.queue = [];
    state.wrong = [];
    state.index = 0;
    state.score = 0;
    state.selected = null;
    state.answered = false;
    state.complete = false;
    state.active = true;
    state.label = "错题库";
    state.emptyMessage = "本课错题库目前为空。";
    dom.patternList.hidden = true;
    dom.patternPracticeShell.hidden = false;
    updatePatternPracticeToggle();
    renderPatternPractice();
  }

  function patternTopbar(state) {
    const progress = state.queue.length
      ? `<span>进度 <strong>${Math.min(state.index + 1, state.queue.length)} / ${state.queue.length}</strong></span><span>得分 <strong>${state.score}</strong></span>`
      : "";
    const mistakeCount = getPatternMistakeItems(state).length;
    return `<div class="pattern-practice-topbar"><div class="pattern-practice-meta"><span>${escapeHtml(state.label)}</span>${progress}</div><div class="pattern-practice-tools"><button class="pattern-practice-restart" type="button" data-pattern-practice-action="restart"><span aria-hidden="true">↻</span><span>重新开始</span></button><button class="pattern-practice-mistakes${state.label === "错题库" ? " is-active" : ""}" type="button" data-pattern-practice-action="mistakes" aria-pressed="${state.label === "错题库"}"><span>错题库</span><strong>${mistakeCount}</strong></button></div></div>`;
  }

  function formatPatternExplanation(item) {
    return String(item.explanation || "暂无解析。")
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const translation = line.match(/^(翻译|句意)[：:]\s*(.*)$/);
        return translation
          ? `<p><span class="pattern-practice-explanation-label">句意：</span>${escapeHtml(translation[2])}</p>`
          : `<p>${escapeHtml(line)}</p>`;
      })
      .join("");
  }

  function renderPatternPractice() {
    const state = getPatternPracticeState();
    if (!state.active || !dom.patternPracticeShell) return;
    if (state.emptyMessage) {
      dom.patternPracticeShell.innerHTML = `${patternTopbar(state)}<section class="pattern-practice-result pattern-practice-empty"><h3>错题库</h3><p class="pattern-practice-result-score">${escapeHtml(state.emptyMessage)}</p><div class="pattern-practice-result-actions"><button class="pattern-practice-next" type="button" data-pattern-practice-action="retry-random">开始随机练习</button></div></section>`;
      return;
    }
    if (state.index >= state.queue.length) {
      state.complete = true;
      const percent = state.queue.length ? Math.round(state.score / state.queue.length * 100) : 0;
      dom.patternPracticeShell.innerHTML = `${patternTopbar(state)}<section class="pattern-practice-result"><h3>练习完成</h3><p class="pattern-practice-result-score">本轮答对 <strong>${state.score}</strong> / ${state.queue.length} 题，正确率 ${percent}%。</p><div class="pattern-practice-result-actions"><button class="pattern-practice-next" type="button" data-pattern-practice-action="retry-random">再练一次</button>${state.wrong.length ? '<button class="pattern-practice-secondary" type="button" data-pattern-practice-action="retry-wrong">错题再练</button>' : ""}</div></section>`;
      updatePatternPracticeToggle();
      return;
    }
    const item = state.queue[state.index];
    const answer = Number(item.answer);
    const options = item.options.map((option, index) => {
      const correct = state.answered && index === answer;
      const wrong = state.answered && index === state.selected && index !== answer;
      return `<button class="pattern-practice-option${correct ? " is-correct" : ""}${wrong ? " is-wrong" : ""}" type="button" data-pattern-practice-choice="${index}" ${state.answered ? "disabled" : ""}><span class="pattern-practice-option-number">${index + 1}</span><span>${escapeHtml(option)}</span><span class="pattern-practice-option-status">${correct ? "正确" : wrong ? "错误" : ""}</span></button>`;
    }).join("");
    const feedback = state.answered
      ? `<div class="pattern-practice-feedback"><div class="pattern-practice-verdict ${state.selected === answer ? "is-correct" : "is-wrong"}">${state.selected === answer ? "回答正确" : `回答错误，正确答案是 ${answer + 1} ${escapeHtml(item.options[answer])}`}</div><div class="pattern-practice-explanation">${formatPatternExplanation(item)}</div><div class="pattern-practice-actions"><button class="pattern-practice-next" type="button" data-pattern-practice-action="next">${state.index === state.queue.length - 1 ? "查看结果" : "下一题"}</button></div></div>`
      : "";
    dom.patternPracticeShell.innerHTML = `${patternTopbar(state)}<article class="pattern-practice-card"><div class="pattern-practice-question-label">选择最合适的文型</div><h3 class="pattern-practice-question">${item.question || ""}</h3><div class="pattern-practice-options">${options}</div>${feedback}</article>`;
  }

  function answerPatternPractice(index) {
    const state = getPatternPracticeState();
    if (state.answered) return;
    const item = state.queue[state.index];
    state.selected = index;
    state.answered = true;
    if (index === Number(item.answer)) {
      state.score += 1;
      setPatternMistake(item.id, false);
    } else {
      state.wrong.push(item);
      setPatternMistake(item.id, true);
    }
    renderPatternPractice();
  }

  function handlePatternPracticeAction(action) {
    const state = getPatternPracticeState();
    if (action === "back") openPatternPractice();
    if (action === "next" && state.answered) {
      state.index += 1;
      state.selected = null;
      state.answered = false;
      renderPatternPractice();
    }
    if (action === "retry-random") {
      beginPatternRound(shuffled(state.pool).slice(0, Math.min(10, state.pool.length)));
    }
    if (action === "retry-wrong" && state.wrong.length) {
      beginPatternRound(state.wrong.slice(), "错题再练");
    }
    if (action === "restart" && state.pool.length) {
      beginPatternRound(shuffled(state.pool).slice(0, Math.min(10, state.pool.length)));
    }
    if (action === "mistakes") openPatternMistakes();
    if (action === "retry-load") openPatternPractice();
  }

  document.addEventListener("click", (event) => {
    const openLessonButton = event.target.closest("[data-open-lesson]");
    if (openLessonButton) {
      const lesson = Number(openLessonButton.dataset.openLesson);
      if (mobileQuery.matches) {
        if (lesson === activeLesson) {
          mobileCatalogMenuOpen = !mobileCatalogMenuOpen;
          renderCatalog();
        } else {
          mobileCatalogMenuOpen = true;
          loadLesson(lesson, { history: "push", section: "text" });
        }
        return;
      }
      if (lesson === activeLesson) {
        if (collapsedLessonSections.has(lesson)) collapsedLessonSections.delete(lesson);
        else collapsedLessonSections.add(lesson);
        renderCatalog();
      } else {
        loadLesson(lesson, { history: "push", section: "text" });
      }
      return;
    }

    const sectionButton = event.target.closest("[data-section]");
    if (sectionButton) {
      if (mobileQuery.matches) mobileCatalogMenuOpen = false;
      showSection(sectionButton.dataset.section);
      return;
    }

    const toggle = event.target.closest("[data-toggle]");
    if (toggle) {
      toggleFeature(toggle.dataset.toggle);
      return;
    }

    const shadowingSentence = event.target.closest("[data-shadowing-sentence]");
    if (shadowingSentence && shadowingActive) {
      selectShadowingSentence(Number(shadowingSentence.dataset.shadowingSentence));
      return;
    }

    const speak = event.target.closest("[data-vocab-speak-key]");
    if (speak) {
      event.preventDefault();
      event.stopPropagation();
      speakVocab(speak.dataset.vocabSpeakKey, speak);
      return;
    }

    const favorite = event.target.closest("[data-vocab-favorite-key]");
    if (favorite) {
      event.preventDefault();
      event.stopPropagation();
      toggleVocabFavorite(favorite.dataset.vocabFavoriteKey);
      return;
    }

    const detailButton = event.target.closest(".lesson-pattern-bank [data-grammar-detail-key]");
    if (detailButton) {
      lastGrammarTrigger = detailButton;
      renderGrammarDetail(detailButton.dataset.grammarDetailKey);
      return;
    }

    const moreExamplesButton = event.target.closest("[data-grammar-more-examples]");
    if (moreExamplesButton) {
      const key = moreExamplesButton.dataset.grammarMoreExamples;
      const previousScrollTop = dom.grammarModalBody?.scrollTop || 0;
      expandedGrammarExampleKey = expandedGrammarExampleKey === key ? null : key;
      renderGrammarDetail(key, { open: false });
      requestAnimationFrame(() => {
        if (dom.grammarModalBody) dom.grammarModalBody.scrollTop = previousScrollTop;
        dom.grammarModalBody?.querySelector(`[data-grammar-more-examples="${CSS.escape(key)}"]`)?.focus({ preventScroll: true });
      });
      return;
    }

    const patternChoice = event.target.closest("[data-pattern-practice-choice]");
    if (patternChoice) {
      answerPatternPractice(Number(patternChoice.dataset.patternPracticeChoice));
      return;
    }

    const patternAction = event.target.closest("[data-pattern-practice-action]");
    if (patternAction) {
      handlePatternPracticeAction(patternAction.dataset.patternPracticeAction);
      return;
    }

    const action = event.target.closest("[data-action]");
    if (action) {
      if (action.dataset.action === "toggle-vocab-self-check") {
        isVocabSelfCheck = !isVocabSelfCheck;
        dom.vocabList?.classList.toggle("is-self-check", isVocabSelfCheck);
        action.textContent = isVocabSelfCheck ? "退出自检" : "自检";
        action.setAttribute("aria-pressed", String(isVocabSelfCheck));
      }
      if (action.dataset.action === "close-detail") closeDetail();
      if (action.dataset.action === "close-grammar-detail") closeGrammarModal();
      if (action.dataset.action === "toggle-catalog") toggleCatalog();
      if (action.dataset.action === "toggle-shadowing") toggleShadowing();
      return;
    }

    if (event.target.closest("[data-retry-lesson]")) {
      loadLesson(activeLesson, { history: "none", section: "text" });
      return;
    }

    const point = event.target.closest(".lesson-fragment .vocab-point, .lesson-fragment .grammar-point, .lesson-fragment .grammar-review");
    if (point && point.dataset.key && activeSection === "text") {
      renderInsight(point.dataset.key, point);
      return;
    }

    if (dom.grammarModal && event.target === dom.grammarModal) {
      closeGrammarModal();
      return;
    }
    if (!event.target.closest("#detail-popover")) closeDetail();
  });

  dom.patternPracticeToggle?.addEventListener("click", openPatternPractice);

  dom.audioPlay?.addEventListener("click", () => {
    if (!dom.audio || !audioSources.length) return;
    clearShadowingAudioSegment();
    if (dom.audio.paused) {
      if (Number.isFinite(dom.audio.duration) && dom.audio.currentTime >= dom.audio.duration) dom.audio.currentTime = 0;
      dom.audio.play().catch(() => showToast("课文音频播放失败。"));
    } else {
      dom.audio.pause();
    }
  });

  dom.audioRewind?.addEventListener("click", () => skipAudioBy(-5));
  dom.audioForward?.addEventListener("click", () => skipAudioBy(5));

  dom.audioTrack?.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || !seekAudioFromClientX(event.clientX)) return;
    event.preventDefault();
    audioScrubPointerId = event.pointerId;
    dom.audioTrack.classList.add("is-scrubbing");
    dom.audioTrack.setPointerCapture?.(event.pointerId);
  });

  dom.audioTrack?.addEventListener("pointermove", (event) => {
    if (audioScrubPointerId !== event.pointerId) return;
    event.preventDefault();
    seekAudioFromClientX(event.clientX);
  });

  const finishAudioScrub = (event) => {
    if (audioScrubPointerId !== event.pointerId) return;
    if (event.type === "pointerup") seekAudioFromClientX(event.clientX);
    if (dom.audioTrack.hasPointerCapture?.(event.pointerId)) dom.audioTrack.releasePointerCapture(event.pointerId);
    audioScrubPointerId = null;
    dom.audioTrack.classList.remove("is-scrubbing");
  };

  dom.audioTrack?.addEventListener("pointerup", finishAudioScrub);
  dom.audioTrack?.addEventListener("pointercancel", finishAudioScrub);
  dom.audioTrack?.addEventListener("lostpointercapture", () => {
    audioScrubPointerId = null;
    dom.audioTrack.classList.remove("is-scrubbing");
  });

  dom.audioTrack?.addEventListener("click", (event) => {
    if (!event.detail) return;
    seekAudioFromClientX(event.clientX);
  });

  dom.audioTrack?.addEventListener("keydown", (event) => {
    if (!dom.audio || !Number.isFinite(dom.audio.duration)) return;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Home") dom.audio.currentTime = 0;
    if (event.key === "End") dom.audio.currentTime = dom.audio.duration;
    if (event.key === "ArrowLeft") skipAudioBy(-5);
    if (event.key === "ArrowRight") skipAudioBy(5);
    syncAudioUi();
  });

  dom.audioSpeed?.addEventListener("click", cycleAudioRate);
  dom.shadowingSpeed?.addEventListener("click", cycleAudioRate);

  dom.audioLoop?.addEventListener("click", () => {
    if (!dom.audio) return;
    dom.audio.loop = !dom.audio.loop;
    dom.audioLoop.classList.toggle("active", dom.audio.loop);
    dom.audioLoop.setAttribute("aria-pressed", String(dom.audio.loop));
  });

  dom.audioPart?.addEventListener("click", () => {
    if (!dom.audio || audioSources.length < 2) return;
    clearShadowingAudioSegment();
    const autoplay = !dom.audio.paused;
    loadAudioPart((audioPartIndex + 1) % audioSources.length, { autoplay });
  });

  dom.audio?.addEventListener("loadedmetadata", syncAudioUi);
  dom.audio?.addEventListener("durationchange", syncAudioUi);
  dom.audio?.addEventListener("timeupdate", () => {
    syncAudioUi();
    if (shadowingSegmentEnd !== null && dom.audio.currentTime >= shadowingSegmentEnd) {
      const end = shadowingSegmentEnd;
      shadowingSegmentEnd = null;
      dom.audio.pause();
      dom.audio.currentTime = end;
      syncAudioUi();
      updateAudioControls();
      setShadowingStatus("原音播放完成。现在可以开始录音。");
    }
  });
  dom.audio?.addEventListener("play", () => setAudioPlaying(true));
  dom.audio?.addEventListener("pause", () => setAudioPlaying(false));
  dom.audio?.addEventListener("ended", () => {
    shadowingSegmentEnd = null;
    if (!dom.audio.loop && audioPartIndex < audioSources.length - 1) {
      loadAudioPart(audioPartIndex + 1, { autoplay: true });
      return;
    }
    setAudioPlaying(false);
  });
  dom.audio?.addEventListener("error", () => {
    if (dom.audioLabel) dom.audioLabel.textContent = "课文音频加载失败";
    if (dom.audioPlay) dom.audioPlay.disabled = true;
    setAudioPlaying(false);
  });

  dom.shadowingPrev?.addEventListener("click", () => selectShadowingSentence(shadowingSentenceIndex - 1));
  dom.shadowingNext?.addEventListener("click", () => selectShadowingSentence(shadowingSentenceIndex + 1));
  dom.shadowingOriginal?.addEventListener("click", playShadowingOriginal);
  dom.shadowingRecord?.addEventListener("click", toggleShadowingRecording);
  dom.shadowingPlayback?.addEventListener("click", playShadowingRecording);
  dom.shadowingRecording?.addEventListener("ended", () => {
    setShadowingStatus("回听完成。可以重新录制，或进入下一句。");
  });
  dom.textPanel?.addEventListener("keydown", (event) => {
    const sentence = event.target.closest("[data-shadowing-sentence]");
    if (!sentence || !shadowingActive || !["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    selectShadowingSentence(Number(sentence.dataset.shadowingSentence));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (mobileCatalogMenuOpen) {
        mobileCatalogMenuOpen = false;
        renderCatalog();
      } else if (shadowingActive) {
        toggleShadowing();
      } else if (dom.grammarModal && !dom.grammarModal.hidden) closeGrammarModal();
      else closeDetail();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedInsideSidebar = event.composedPath().includes(dom.sidebar);
    if (mobileQuery.matches && mobileCatalogMenuOpen && !clickedInsideSidebar) {
      mobileCatalogMenuOpen = false;
      renderCatalog();
    }
  });

  window.addEventListener("popstate", () => loadLesson(getLessonFromUrl(), { history: "none", section: "text" }));
  window.addEventListener("resize", () => {
    if (activeDetailAnchor && dom.detailPopover && !dom.detailPopover.hidden) positionDetailPopover(activeDetailAnchor);
    if (activeSection === "patterns") schedulePatternCardAlignment();
  });
  dom.reader?.addEventListener("scroll", () => {
    if (activeDetailAnchor && dom.detailPopover && !dom.detailPopover.hidden) positionDetailPopover(activeDetailAnchor);
  }, { passive: true });
  window.addEventListener("kiki-word-bank:changed", () => {
    if (activeSection === "vocab") {
      dom.vocabList.dataset.lesson = "";
      buildVocabList();
    }
  });
  mobileQuery.addEventListener?.("change", (event) => {
    mobileCatalogMenuOpen = false;
    if (event.matches) {
      dom.app?.classList.remove("catalog-collapsed");
      dom.sidebar?.classList.remove("mobile-collapsed");
    } else {
      dom.sidebar?.classList.remove("mobile-collapsed");
    }
    syncCatalogToggle();
    renderCatalog();
    if (activeSection === "patterns") schedulePatternCardAlignment();
  });

  document.body.classList.remove("hide-ruby", "show-trans");
  clearLegacyPatternMistakeStorage();
  document.querySelectorAll('[data-toggle="ruby"]').forEach((button) => button.classList.add("active"));
  syncCatalogToggle();
  renderCatalog();
  loadLesson(activeLesson, { history: "replace", section: "text" });
})();
