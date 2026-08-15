// Day 1 Words (Sample)
const DAY1_WORDS = [
    {
        "word": "細い",
        "word_html": "<ruby>細<rt>ほそ</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "纤细、细；微弱",
        "nuance": "1. 物体狭窄或直径小。\n2. 状况、势头微弱，不强烈。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>はとても<span class='ex-highlight'><ruby>細<rt>ほそ</rt></ruby>い</span><ruby>指<rt>ゆび</rt></ruby>をしている。", "cn": "她的手指非常纤细。" },
            { "jp": "あまりに<ruby>疲<rt>つか</rt></ruby>れて<ruby>声<rt>こえ</rt></ruby>が<span class='ex-highlight'><ruby>細<rt>ほそ</rt></ruby>くなって</span>しまった。", "cn": "太累了，声音都变得微弱了。" }
        ],
        "practice": {
            "sentence": "彼女はモデルのように<span class='ex-highlight'>____</span>体型を維持している。",
            "cn": "她保持着像模特一样纤细的体型。",
            "options": ["ほそい", "うすい", "こまかい", "あさい"],
            "answer": "ほそい"
        }
    },
    {
        "word": "粗い",
        "word_html": "<ruby>粗<rt>あら</rt></ruby>い",
        "tone": "0",
        "pos": "い形",
        "mean": "粗、大；粗糙、鲁莽",
        "nuance": "1. 事物颗粒大或纹理粗糙。\n2. 言行或手法上不细腻，粗鲁。",
        "examples": [
            { "jp": "この<ruby>布<rt>ぬの</rt></ruby>は<ruby>目<rt>め</rt></ruby>が<span class='ex-highlight'><ruby>粗<rt>あら</rt></ruby>くて</span>、<ruby>肌<rt>はだ</rt></ruby><ruby>触<rt>ざわ</rt></ruby>りがよくない。", "cn": "这块布网眼很大，摸起来不太舒服。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>仕<rt>し</rt></ruby><ruby>上<rt>あ</rt></ruby>げはいつも<span class='ex-highlight'><ruby>粗<rt>あら</rt></ruby>い</span>。", "cn": "他收尾工作总是比较粗糙。" }
        ],
        "practice": {
            "sentence": "この画像は解像度が低くて、画質が<span class='ex-highlight'>____</span>。",
            "cn": "这张图片分辨率很低，画质很粗糙。",
            "options": ["あらい", "からい", "あまい", "ゆるい"],
            "answer": "あらい"
        }
    },
    {
        "word": "鈍い",
        "word_html": "<ruby>鈍<rt>にぶ</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "不锋利、钝；迟钝；黯淡、微弱",
        "nuance": "1. 事物不锋利、不尖利。\n2. 动作，反应迟钝、不敏捷、反应慢。\n3. （光、色、声音）不鲜明、不亮、黯淡或低沉。",
        "examples": [
            { "jp": "<ruby>小<rt>こ</rt></ruby><ruby>刀<rt>がたな</rt></ruby>が<span class='ex-highlight'><ruby>鈍<rt>にぶ</rt></ruby>くて</span><ruby>切<rt>き</rt></ruby>れない。", "cn": "小刀不快切不动。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>が<ruby>弱<rt>よわ</rt></ruby>くて、<ruby>起<rt>お</rt></ruby>きた<ruby>直<rt>ちょく</rt></ruby><ruby>後<rt>ご</rt></ruby>は<ruby>反<rt>はん</rt></ruby><ruby>応<rt>のう</rt></ruby>が<span class='ex-highlight'><ruby>鈍<rt>にぶ</rt></ruby>い</span>。", "cn": "他早起后反应总是慢半拍。" },
            { "jp": "<span class='ex-highlight'><ruby>鈍<rt>にぶ</rt></ruby>い</span><ruby>光<rt>ひかり</rt></ruby>を<ruby>放<rt>はな</rt></ruby>つ。", "cn": "放出微弱的光。" }
        ],
        "practice": {
            "sentence": "久しぶりに運動したので、体の動きが<span class='ex-highlight'>____</span>。",
            "cn": "很久没运动了，身体动作变得迟钝。",
            "options": ["にぶい", "しぶい", "のろい", "おもい"],
            "answer": "にぶい"
        }
    },
    {
        "word": "固い",
        "word_html": "<ruby>固<rt>かた</rt></ruby>い",
        "tone": "0",
        "pos": "い形",
        "mean": "牢固、坚硬；坚定；死板、顽固",
        "nuance": "1. 事物十分的牢固，结实。\n2. 态度或心理上的坚定、不易动摇。\n3. 严肃，死板的样子。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>口<rt>くち</rt></ruby>が<span class='ex-highlight'><ruby>固<rt>かた</rt></ruby>い</span>から、<ruby>安<rt>あん</rt></ruby><ruby>心<rt>しん</rt></ruby>して<ruby>秘<rt>ひ</rt></ruby><ruby>密<rt>みつ</rt></ruby>を<ruby>話<rt>はな</rt></ruby>せる。", "cn": "他很能守口如瓶，可以放心地把秘密告诉他。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<ruby>意<rt>い</rt></ruby><ruby>志<rt>し</rt></ruby>が<span class='ex-highlight'><ruby>固<rt>かた</rt></ruby>い</span>。", "cn": "她意志非常坚定。" },
            { "jp": "<ruby>部<rt>ぶ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>頭<rt>あたま</rt></ruby>が<span class='ex-highlight'><ruby>固<rt>かた</rt></ruby>い</span>けど、<ruby>基<rt>き</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>的<rt>てき</rt></ruby>にはいい<ruby>人<rt>ひと</rt></ruby>だよ。", "cn": "部长有点顽固不化，但人还算不错。" }
        ],
        "practice": {
            "sentence": "彼は口が<span class='ex-highlight'>____</span>から、秘密を話しても大丈夫だ。",
            "cn": "他嘴很严，把秘密告诉他也没关系。",
            "options": ["かたい", "もろい", "つよい", "おもい"],
            "answer": "かたい"
        }
    },
    {
        "word": "脆い",
        "word_html": "<ruby>脆<rt>もろ</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "易碎、脆弱；脆弱、动摇",
        "nuance": "1. 事物容易碎裂、不坚固、脆弱。\n2. 对事物缺乏抵抗力，脆弱、易动摇的状态。",
        "examples": [
            { "jp": "このガラス<ruby>製<rt>せい</rt></ruby><ruby>品<rt>ひん</rt></ruby>はとても<span class='ex-highlight'><ruby>脆<rt>もろ</rt></ruby>い</span>。", "cn": "这款玻璃制品非常易碎。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>意<rt>い</rt></ruby><ruby>外<rt>がい</rt></ruby>と<ruby>情<rt>じょう</rt></ruby>に<span class='ex-highlight'><ruby>脆<rt>もろ</rt></ruby>い</span>ところがある。", "cn": "他其实很容易被感情打动。" }
        ],
        "practice": {
            "sentence": "人間の信頼関係は意外と<span class='ex-highlight'>____</span>ものだ。",
            "cn": "人与人之间的信任关系意外地很脆弱。",
            "options": ["もろい", "ほそい", "よわい", "うすい"],
            "answer": "もろい"
        }
    },
    {
        "word": "緩い",
        "word_html": "<ruby>緩<rt>ゆる</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "松、宽松；平缓、缓慢；宽松、不严",
        "nuance": "1. 事物不紧，尺寸大，有空隙。\n2. 坡度或速度不急促。\n3. 规则、审查或管理不严格。",
        "examples": [
            { "jp": "この<ruby>靴<rt>くつ</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>い</span>。", "cn": "这双鞋有点松。" },
            { "jp": "ここは<ruby>川<rt>かわ</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れが<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>い</span>。", "cn": "这里河水流得很平缓。" },
            { "jp": "その<ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>は<ruby>規<rt>き</rt></ruby><ruby>則<rt>そく</rt></ruby>が<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>い</span>。", "cn": "那所学校的规定很宽松。" }
        ],
        "practice": {
            "sentence": "このネジは<span class='ex-highlight'>____</span>から、ドライバーで締めてください。",
            "cn": "这颗螺丝松了，请用螺丝刀拧紧。",
            "options": ["ゆるい", "かたい", "おもい", "にぶい"],
            "answer": "ゆるい"
        }
    },
    {
        "word": "えぐい",
        "word_html": "えぐい",
        "tone": "2",
        "pos": "い形",
        "mean": "涩、苦涩；过分、惨不忍睹；厉害、惊人",
        "nuance": "1. 尝起来刺激喉咙、涩味重。\n2. 情况凄惨、严酷或做法过分。\n3. 年轻人用语，表示令人惊讶的程度。",
        "examples": [
            { "jp": "この<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<span class='ex-highlight'>えぐい</span>。", "cn": "这种蔬菜有点涩。" },
            { "jp": "そのやり<ruby>方<rt>かた</rt></ruby>はあまりにも<span class='ex-highlight'>えぐい</span>。", "cn": "那个做法也太过分了。" },
            { "jp": "このラーメンの<ruby>美<rt>お</rt></ruby><ruby>味<rt>い</rt></ruby>しさは<span class='ex-highlight'>えぐい</span>。", "cn": "这拉面好吃得惊人。" }
        ],
        "practice": {
            "sentence": "この山菜はアク抜きをしないと<span class='ex-highlight'>____</span>味がする。",
            "cn": "这种山菜不去涩的话，会有刺舌的涩味。",
            "options": ["えぐい", "あまい", "うすい", "しぶい"],
            "answer": "えぐい"
        }
    },
    {
        "word": "淡い",
        "word_html": "<ruby>淡<rt>あわ</rt></ruby>い",
        "tone": "0",
        "pos": "い形",
        "mean": "浅、淡；淡淡的、微弱",
        "nuance": "1. 颜色、味道等不浓厚。\n2. 感情、期待等不强烈。",
        "examples": [
            { "jp": "<ruby>春<rt>はる</rt></ruby>らしい<span class='ex-highlight'><ruby>淡<rt>あわ</rt></ruby>い</span><ruby>色<rt>いろ</rt></ruby>の<ruby>服<rt>ふく</rt></ruby>を<ruby>着<rt>き</rt></ruby>る。", "cn": "穿上有着春天气息的浅色衣服。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>に<span class='ex-highlight'><ruby>淡<rt>あわ</rt></ruby>い</span><ruby>期<rt>き</rt></ruby><ruby>待<rt>たい</rt></ruby>を<ruby>抱<rt>いだ</rt></ruby>いていた。", "cn": "曾对他抱有淡淡的期待。" }
        ],
        "practice": {
            "sentence": "夕暮れの空に<span class='ex-highlight'>____</span>ピンク色の雲が浮かんでいる。",
            "cn": "傍晚的天空中飘着淡粉色的云。",
            "options": ["あわい", "こい", "くろい", "あかい"],
            "answer": "あわい"
        }
    },
    {
        "word": "清い",
        "word_html": "<ruby>清<rt>きよ</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "清澈、洁净；纯洁、清白",
        "nuance": "1. 水流、环境等干净、没有浑浊。\n2. 心灵、行为等毫无污点。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>清<rt>きよ</rt></ruby>い</span><ruby>水<rt>みず</rt></ruby>が<ruby>流<rt>なが</rt></ruby>れている。", "cn": "流淌着清澈的水。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'><ruby>清<rt>きよ</rt></ruby>い</span><ruby>心<rt>こころ</rt></ruby>を<ruby>持<rt>も</rt></ruby>っている。", "cn": "她拥有一颗纯洁的心。" }
        ],
        "practice": {
            "sentence": "彼は<span class='ex-highlight'>____</span>心を持っていて、誰に対しても親切だ。",
            "cn": "他有一颗纯净的心，对谁都很亲切。",
            "options": ["きよい", "きたない", "わるい", "くろい"],
            "answer": "きよい"
        }
    },
    {
        "word": "浅い",
        "word_html": "<ruby>浅<rt>あさ</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "浅；浅薄、不久；浅",
        "nuance": "1. 从表面到内部或底部的距离短。\n2. 时间短、经验不足。\n3. 睡眠、颜色等程度不深。",
        "examples": [
            { "jp": "この<ruby>川<rt>かわ</rt></ruby>は<span class='ex-highlight'><ruby>浅<rt>あさ</rt></ruby>い</span>から<ruby>安<rt>あん</rt></ruby><ruby>全<rt>ぜん</rt></ruby>だ。", "cn": "这条河很浅，所以很安全。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はまだ<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>が<span class='ex-highlight'><ruby>浅<rt>あさ</rt></ruby>い</span>。", "cn": "他经验还尚浅。" },
            { "jp": "<ruby>昨<rt>き</rt></ruby><ruby>日<rt>のう</rt></ruby>は<ruby>眠<rt>ねむ</rt></ruby>りが<span class='ex-highlight'><ruby>浅<rt>あさ</rt></ruby>かった</span>。", "cn": "昨天睡眠很浅。" }
        ],
        "practice": {
            "sentence": "まだこの業界に入って日が<span class='ex-highlight'>____</span>ので、分からないことが多い。",
            "cn": "我进入这个行业时间还很短，不懂的事情很多。",
            "options": ["あさい", "ふかい", "ながい", "おもい"],
            "answer": "あさい"
        }
    },
    {
        "word": "貧しい",
        "word_html": "<ruby>貧<rt>まず</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "贫穷、贫困；贫乏、缺乏",
        "nuance": "1. 财物缺乏，生活拮据。\n2. 知识、思想、资源或内容等不足。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>貧<rt>まず</rt></ruby>しい</span><ruby>家<rt>か</rt></ruby><ruby>庭<rt>てい</rt></ruby>に<ruby>育<rt>そだ</rt></ruby>った。", "cn": "他在贫困的家庭中长大。" },
            { "jp": "<ruby>資<rt>し</rt></ruby><ruby>源<rt>げん</rt></ruby>が<span class='ex-highlight'><ruby>貧<rt>まず</rt></ruby>しい</span><ruby>国<rt>くに</rt></ruby>。", "cn": "资源匮乏的国家。" }
        ],
        "practice": {
            "sentence": "戦後の<span class='ex-highlight'>____</span>時代を生き抜いてきた。",
            "cn": "他熬过了战后贫困的时代。",
            "options": ["まずしい", "はげしい", "さびしい", "くやしい"],
            "answer": "まずしい"
        }
    },
    {
        "word": "乏しい",
        "word_html": "<ruby>乏<rt>とぼ</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "缺乏、不足；贫乏、贫困",
        "nuance": "1. 缺少某种事物，数量少。\n2. 经济上不宽裕，财力不足。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>が<span class='ex-highlight'><ruby>乏<rt>とぼ</rt></ruby>しい</span>。", "cn": "他经验不足。" },
            { "jp": "<ruby>資<rt>し</rt></ruby><ruby>源<rt>げん</rt></ruby>に<span class='ex-highlight'><ruby>乏<rt>とぼ</rt></ruby>しい</span><ruby>国<rt>くに</rt></ruby>。", "cn": "资源匮乏的国家。" }
        ],
        "practice": {
            "sentence": "彼はまだ若くて、社会経験が<span class='ex-highlight'>____</span>。",
            "cn": "他还年轻，社会经验很不足。",
            "options": ["とぼしい", "くわしい", "まぶしい", "あやしい"],
            "answer": "とぼしい"
        }
    },
    {
        "word": "薄い",
        "word_html": "<ruby>薄<rt>うす</rt></ruby>い",
        "tone": "0",
        "pos": "い形",
        "mean": "薄；淡、稀薄；冷淡、微弱",
        "nuance": "1. 物体的厚度小。\n2. 味道、颜色、浓度等不深。\n3. 感情、关心程度或可能性等不大。",
        "examples": [
            { "jp": "この<ruby>本<rt>ほん</rt></ruby>は<span class='ex-highlight'><ruby>薄<rt>うす</rt></ruby>い</span>。", "cn": "这本书很薄。" },
            { "jp": "<ruby>味<rt>あじ</rt></ruby>が<span class='ex-highlight'><ruby>薄<rt>うす</rt></ruby>い</span>スープ。", "cn": "味道很淡的汤。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>来<rt>く</rt></ruby>る<ruby>可<rt>か</rt></ruby><ruby>能<rt>のう</rt></ruby><ruby>性<rt>せい</rt></ruby>は<span class='ex-highlight'><ruby>薄<rt>うす</rt></ruby>い</span>。", "cn": "他来的可能性很小。" }
        ],
        "practice": {
            "sentence": "このスープは味が<span class='ex-highlight'>____</span>ので、もう少し塩を足そう。",
            "cn": "这汤味道太淡了，再加一点盐吧。",
            "options": ["うすい", "こい", "あまい", "からい"],
            "answer": "うすい"
        }
    },
    {
        "word": "まずい",
        "word_html": "まずい",
        "tone": "2",
        "pos": "い形",
        "mean": "难吃；不妙、糟糕；笨拙",
        "nuance": "1. 食物味道不好，可写成「不味い」。\n2. 情况、事态不顺利，会带来麻烦。\n3. 做法、手艺或表现等不高明。",
        "examples": [
            { "jp": "この<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>は<span class='ex-highlight'>まずい</span>。", "cn": "这道菜很难吃。" },
            { "jp": "このままでは<span class='ex-highlight'>まずいこと</span>になる。", "cn": "这样下去情况就不妙了。" },
            { "jp": "やり<ruby>方<rt>かた</rt></ruby>が<span class='ex-highlight'>まずい</span>。", "cn": "做法很笨拙。" }
        ],
        "practice": {
            "sentence": "寝坊してしまった、これは<span class='ex-highlight'>____</span>ぞ。",
            "cn": "睡过头了，这下可糟了。",
            "options": ["まずい", "うまい", "ずるい", "ひどい"],
            "answer": "まずい"
        }
    },
    {
        "word": "渋い",
        "word_html": "<ruby>渋<rt>しぶ</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "涩；素雅、沉稳；吝啬、小气",
        "nuance": "1. 有涩味，刺激舌头。\n2. 事物不华丽但有品味，给人成熟稳重的感觉。\n3. 在花钱或给予评价时不痛快。",
        "examples": [
            { "jp": "<ruby>濃<rt>こ</rt></ruby>いお<ruby>茶<rt>ちゃ</rt></ruby>が<span class='ex-highlight'><ruby>渋<rt>しぶ</rt></ruby>い</span>。", "cn": "浓茶很涩。" },
            { "jp": "<span class='ex-highlight'><ruby>渋<rt>しぶ</rt></ruby>い</span><ruby>色<rt>いろ</rt></ruby>のネクタイ。", "cn": "颜色素雅的领带。" },
            { "jp": "あの<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>は<ruby>点<rt>てん</rt></ruby><ruby>数<rt>すう</rt></ruby>が<span class='ex-highlight'><ruby>渋<rt>しぶ</rt></ruby>い</span>。", "cn": "那位老师给分很吝啬。" }
        ],
        "practice": {
            "sentence": "彼はいつも<span class='ex-highlight'>____</span>顔をしている。",
            "cn": "他总是一副不高兴的表情。",
            "options": ["しぶい", "あまい", "からい", "にがい"],
            "answer": "しぶい"
        }
    },
    {
        "word": "怠い",
        "word_html": "<ruby>怠<rt>だる</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "懒散、乏力；麻烦、烦人",
        "nuance": "1. 身体感到沉重、疲劳，没有力气。\n2. 觉得某事很麻烦，提不起劲。",
        "examples": [
            { "jp": "<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>いて、<ruby>体<rt>からだ</rt></ruby>が<span class='ex-highlight'><ruby>怠<rt>だる</rt></ruby>い</span>。", "cn": "感冒了，身体很乏力。" },
            { "jp": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>に<ruby>行<rt>い</rt></ruby>くのが<span class='ex-highlight'><ruby>怠<rt>だる</rt></ruby>い</span>。", "cn": "去上班真麻烦。" }
        ],
        "practice": {
            "sentence": "今日はなんだか体が<span class='ex-highlight'>____</span>て、何もする気が起きない。",
            "cn": "今天总觉得身体发沉，什么都不想做。",
            "options": ["だるく", "わるく", "おもく", "つよく"],
            "answer": "だるく"
        }
    },
    {
        "word": "でかい",
        "word_html": "でかい",
        "tone": "2",
        "pos": "い形",
        "mean": "巨大的、大的；响亮的、大的",
        "nuance": "1. 形容物体的体积、规模等非常大。\n2. 形容声音很大。",
        "examples": [
            { "jp": "あそこに<span class='ex-highlight'>でかい</span>ビルが<ruby>建<rt>た</rt></ruby>った。", "cn": "那里盖起了一座巨大的大楼。" },
            { "jp": "<ruby>声<rt>こえ</rt></ruby>が<span class='ex-highlight'>でかくて</span>、<ruby>筒<rt>つつ</rt></ruby><ruby>抜<rt>ぬ</rt></ruby>けだ。", "cn": "声音太大，全被听见了。" }
        ],
        "practice": {
            "sentence": "彼の夢は<span class='ex-highlight'>____</span>。",
            "cn": "他的梦想很大。",
            "options": ["でかい", "ちいさい", "せまい", "ひくい"],
            "answer": "でかい"
        }
    },
    {
        "word": "疎い",
        "word_html": "<ruby>疎<rt>うと</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "生疏、不熟悉；疏远",
        "nuance": "1. 对特定的知识、情报或世俗之事缺乏了解。\n2. 关系不亲密。",
        "examples": [
            { "jp": "<ruby>私<rt>わたし</rt></ruby>は<ruby>流<rt>りゅう</rt></ruby><ruby>行<rt>こう</rt></ruby>に<span class='ex-highlight'><ruby>疎<rt>うと</rt></ruby>い</span>。", "cn": "我对流行事物很不熟悉。" },
            { "jp": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>の<ruby>仲<rt>なか</rt></ruby>はだんだん<span class='ex-highlight'><ruby>疎<rt>うと</rt></ruby>く</span>なってきた。", "cn": "两个人的关系逐渐疏远起来了。" }
        ],
        "practice": {
            "sentence": "私は機械に<span class='ex-highlight'>____</span>ので、パソコンの設定ができない。",
            "cn": "我对机器很不熟，所以不会设置电脑。",
            "options": ["うとい", "くわしい", "かしこい", "するどい"],
            "answer": "うとい"
        }
    },
    {
        "word": "幼い",
        "word_html": "<ruby>幼<rt>おさな</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "年幼、幼小；幼稚、不成熟",
        "nuance": "1. 年纪很小。\n2. 想法或行为像小孩子一样，缺乏经验。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>幼<rt>おさな</rt></ruby>い</span><ruby>頃<rt>ころ</rt></ruby>の<ruby>記<rt>き</rt></ruby><ruby>憶<rt>おく</rt></ruby>があまりない。", "cn": "不太有小时候的记忆。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>えはまだ<span class='ex-highlight'><ruby>幼<rt>おさな</rt></ruby>い</span>。", "cn": "他的想法还很幼稚。" }
        ],
        "practice": {
            "sentence": "彼女の顔立ちは実年齢より<span class='ex-highlight'>____</span>見える。",
            "cn": "她的长相比实际年龄显得幼小。",
            "options": ["おさなく", "ふるく", "わかく", "あたらしく"],
            "answer": "おさなく"
        }
    },
    {
        "word": "尊い",
        "word_html": "<ruby>尊<rt>とうと</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "珍贵、宝贵；崇高、神圣",
        "nuance": "1. 价值极高，极为重要，难以替代。\n2. 地位或精神高尚，令人敬畏和尊崇。",
        "examples": [
            { "jp": "<ruby>命<rt>いのち</rt></ruby>は<span class='ex-highlight'><ruby>尊<rt>とうと</rt></ruby>い</span>ものだ。", "cn": "生命是宝贵的。" },
            { "jp": "<span class='ex-highlight'><ruby>尊<rt>とうと</rt></ruby>い</span><ruby>犠<rt>ぎ</rt></ruby><ruby>牲<rt>せい</rt></ruby>を<ruby>払<rt>はら</rt></ruby>う。", "cn": "付出崇高的牺牲。" }
        ],
        "practice": {
            "sentence": "平和のために<span class='ex-highlight'>____</span>命が失われた。",
            "cn": "为和平牺牲了宝贵的生命。",
            "options": ["とうとい", "たかい", "おもい", "ふかい"],
            "answer": "とうとい"
        }
    }
];
const DAY2_WORDS = [
{
        "word": "華々しい",
        "word_html": "<ruby>華<rt>はな</rt></ruby><ruby>々<rt>ばな</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "华丽、辉煌",
        "nuance": "1. 非常华丽，引人注目，多用于表现活跃、成功等好的方面。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>華<rt>はな</rt></ruby><ruby>々<rt>ばな</rt></ruby>しい</span><ruby>活<rt>かつ</rt></ruby><ruby>躍<rt>やく</rt></ruby>を<ruby>見<rt>み</rt></ruby>せる。", "cn": "展现出辉煌的活跃表现。" }
        ],
        "practice": {
            "sentence": "新入社員の田中さんは、営業成績トップという<span class='ex-highlight'>____</span>デビューを飾った。",
            "cn": "新员工田中以销售成绩第一的亮眼表现完成了出道。",
            "options": ["はなばなしい", "おもおもしい", "ものものしい", "そうぞうしい"],
            "answer": "はなばなしい"
        }
    },
    {
        "word": "重々しい",
        "word_html": "<ruby>重<rt>おも</rt></ruby><ruby>々<rt>おも</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "庄重、稳重；沉重、严肃",
        "nuance": "1. 态度、举止、言辞等庄严，不轻浮。\n2. 气氛、情况等沉重，让人感到压抑或有威严。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>重<rt>おも</rt></ruby><ruby>々<rt>おも</rt></ruby>しい</span><ruby>口<rt>くち</rt></ruby><ruby>調<rt>ちょう</rt></ruby>で<ruby>語<rt>かた</rt></ruby>りはじめた。", "cn": "他用庄重的语气开始讲述。" },
            { "jp": "<ruby>葬<rt>そう</rt></ruby><ruby>儀<rt>ぎ</rt></ruby>は<span class='ex-highlight'><ruby>重<rt>おも</rt></ruby><ruby>々<rt>おも</rt></ruby>しい</span><ruby>雰<rt>ふん</rt></ruby><ruby>囲<rt>い</rt></ruby><ruby>気<rt>き</rt></ruby>の<ruby>中<rt>なか</rt></ruby>、<ruby>静<rt>しず</rt></ruby>かに<ruby>行<rt>おこな</rt></ruby>われた。", "cn": "葬礼在庄严肃穆的氛围中安静地进行。" }
        ],
        "practice": {
            "sentence": "裁判長が判決を言い渡す前、法廷内は<span class='ex-highlight'>____</span>空気に包まれた。",
            "cn": "宣判前，法庭里笼罩着沉重的气氛。",
            "options": ["おもおもしい", "うっとうしい", "まぎらわしい", "なれなれしい"],
            "answer": "おもおもしい"
        }
    },
    {
        "word": "物々しい",
        "word_html": "<ruby>物<rt>もの</rt></ruby><ruby>々<rt>もの</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "戒备森严；夸张、煞有介事",
        "nuance": "1. 警备等异常严密，让人感到紧张或有压迫感。\n2. 排场或仪式过大，显得过于隆重或夸张。",
        "examples": [
            { "jp": "<ruby>会<rt>かい</rt></ruby><ruby>場<rt>じょう</rt></ruby>は<span class='ex-highlight'><ruby>物<rt>もの</rt></ruby><ruby>々<rt>もの</rt></ruby>しい</span><ruby>警<rt>けい</rt></ruby><ruby>備<rt>び</rt></ruby>が<ruby>敷<rt>し</rt></ruby>かれていた。", "cn": "会场布置了戒备森严的警备。" },
            { "jp": "<span class='ex-highlight'><ruby>物<rt>もの</rt></ruby><ruby>々<rt>もの</rt></ruby>しい</span><ruby>装<rt>そう</rt></ruby><ruby>備<rt>び</rt></ruby>で<ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>る。", "cn": "带着夸张的装备去爬山。" }
        ],
        "practice": {
            "sentence": "銀行強盗の現場周辺は、多数のパトカーと警官によって<span class='ex-highlight'>____</span>雰囲気に包まれていた。",
            "cn": "银行抢劫现场周围布满警车和警察，气氛十分紧张。",
            "options": ["ものものしい", "はなばなしい", "すがすがしい", "みすぼらしい"],
            "answer": "ものものしい"
        }
    },
    {
        "word": "由々しい",
        "word_html": "<ruby>由<rt>ゆ</rt></ruby>々しい",
        "tone": "3",
        "pos": "い形",
        "mean": "严重、非同小可",
        "nuance": "1. 事态极其严重，不能置之不理，多接“事态”“问题”等负面词汇。",
        "examples": [
            { "jp": "これは<span class='ex-highlight'><ruby>由<rt>ゆ</rt></ruby>々しい</span><ruby>事<rt>じ</rt></ruby><ruby>態<rt>たい</rt></ruby>だ。", "cn": "这是非常严重的事态。" }
        ],
        "practice": {
            "sentence": "顧客の個人情報が流出するという、企業として<span class='ex-highlight'>____</span>事態が起きてしまった。",
            "cn": "发生了顾客个人信息泄露这种对企业来说十分严重的事态。",
            "options": ["ゆゆしい", "さびしい", "くやしい", "あやしい"],
            "answer": "ゆゆしい"
        }
    },
    {
        "word": "騒々しい",
        "word_html": "<ruby>騒<rt>そう</rt></ruby><ruby>々<rt>ぞう</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "吵杂、喧闹；动荡、不安宁",
        "nuance": "1. 声音大且杂乱，让人觉得吵闹。\n2. 社会、世间或氛围发生骚动，不稳定。",
        "examples": [
            { "jp": "<ruby>外<rt>そと</rt></ruby>が<span class='ex-highlight'><ruby>騒<rt>そう</rt></ruby><ruby>々<rt>ぞう</rt></ruby>しい</span>ので<ruby>窓<rt>まど</rt></ruby>を<ruby>閉<rt>し</rt></ruby>めた。", "cn": "外面很嘈杂，所以把窗户关上了。" },
            { "jp": "<ruby>世<rt>せ</rt></ruby><ruby>間<rt>けん</rt></ruby>が<span class='ex-highlight'><ruby>騒<rt>そう</rt></ruby><ruby>々<rt>ぞう</rt></ruby>しく</span>なってきた。", "cn": "世道变得动荡不安起来。" }
        ],
        "practice": {
            "sentence": "授業中にもかかわらず、廊下が何やら<span class='ex-highlight'>____</span>ので、先生が注意しに行った。",
            "cn": "明明还在上课，走廊却不知为何很吵闹，老师过去提醒了。",
            "options": ["そうぞうしい", "いさましい", "たくましい", "なれなれしい"],
            "answer": "そうぞうしい"
        }
    },
    {
        "word": "馴れ馴れしい",
        "word_html": "<ruby>馴<rt>な</rt></ruby>れ<ruby>馴<rt>な</rt></ruby>れしい",
        "tone": "5",
        "pos": "い形",
        "mean": "过分亲昵、熟不拘礼",
        "nuance": "1. 关系并不深却表现得过于亲密，让人感到不快。",
        "examples": [
            { "jp": "<ruby>初<rt>しょ</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>面<rt>めん</rt></ruby>なのに<span class='ex-highlight'><ruby>馴<rt>な</rt></ruby>れ<ruby>馴<rt>な</rt></ruby>れしい</span><ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>をとる。", "cn": "虽然是初次见面，却采取过分亲昵的态度。" }
        ],
        "practice": {
            "sentence": "あまり親しくない人から<span class='ex-highlight'>____</span>態度で接されると、少し不快に感じることがある。",
            "cn": "被不太熟的人用过分亲近的态度对待，有时会觉得不舒服。",
            "options": ["なれなれしい", "よそよそしい", "うらやましい", "にくらしい"],
            "answer": "なれなれしい"
        }
    },
    {
        "word": "凛々しい",
        "word_html": "<ruby>凛<rt>り</rt></ruby><ruby>々<rt>り</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "凛然、威严；英姿飒爽",
        "nuance": "1. 容貌、态度等端庄威武，令人起敬。\n2. 充满朝气和活力，多指人的仪态帅气。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>凛<rt>り</rt></ruby><ruby>々<rt>り</rt></ruby>しい</span><ruby>顔<rt>かお</rt></ruby><ruby>立<rt>だ</rt></ruby>ちをしている。", "cn": "他长着一副英俊威武的面容。" },
            { "jp": "<span class='ex-highlight'><ruby>凛<rt>り</rt></ruby><ruby>々<rt>り</rt></ruby>しい</span><ruby>姿<rt>すがた</rt></ruby>で<ruby>舞<rt>ぶ</rt></ruby><ruby>台<rt>たい</rt></ruby>に<ruby>立<rt>た</rt></ruby>つ。", "cn": "以英姿飒爽的身姿站在舞台上。" }
        ],
        "practice": {
            "sentence": "成人式で袴を着た息子の姿は、いつもよりずっと<span class='ex-highlight'>____</span>見えた。",
            "cn": "成人式上穿着袴的儿子，看起来比平时英姿飒爽得多。",
            "options": ["りりしく", "みすぼらしく", "なれなれしく", "わかわかしく"],
            "answer": "りりしく"
        }
    },
    {
        "word": "清々しい",
        "word_html": "<ruby>清<rt>すが</rt></ruby><ruby>々<rt>すが</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "清爽、爽快",
        "nuance": "1. 心情舒畅，没有烦恼或不快，神清气爽。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>清<rt>すが</rt></ruby><ruby>々<rt>すが</rt></ruby>しい</span><ruby>朝<rt>あさ</rt></ruby>の<ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>を<ruby>吸<rt>す</rt></ruby>う。", "cn": "呼吸清爽的早晨空气。" }
        ],
        "practice": {
            "sentence": "山頂に到着すると、<span class='ex-highlight'>____</span>風が吹いていて疲れが吹き飛んだ。",
            "cn": "到达山顶后，清爽的风吹来，疲劳一扫而空。",
            "options": ["すがすがしい", "そうぞうしい", "まぎらわしい", "あつくるしい"],
            "answer": "すがすがしい"
        }
    },
    {
        "word": "図々しい",
        "word_html": "<ruby>図<rt>ずう</rt></ruby><ruby>々<rt>ずう</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "厚颜无耻、不要脸",
        "nuance": "1. 不顾及他人，不知羞耻地只顾自己方便。",
        "examples": [
            { "jp": "<ruby>人<rt>ひと</rt></ruby>の<ruby>物<rt>もの</rt></ruby>を<ruby>勝<rt>かっ</rt></ruby><ruby>手<rt>て</rt></ruby>に<ruby>使<rt>つか</rt></ruby>うなんて、<span class='ex-highlight'><ruby>図<rt>ずう</rt></ruby><ruby>々<rt>ずう</rt></ruby>しい</span><ruby>人<rt>ひと</rt></ruby>だ。", "cn": "随便用别人的东西，真是个厚颜无耻的人。" }
        ],
        "practice": {
            "sentence": "列に割り込んでくるなんて、なんて<span class='ex-highlight'>____</span>人なんだろう。",
            "cn": "居然插队，真是个厚脸皮的人。",
            "options": ["ずうずうしい", "めずらしい", "ばかばかしい", "あやしい"],
            "answer": "ずうずうしい"
        }
    },
    {
        "word": "馬鹿馬鹿しい",
        "word_html": "<ruby>馬<rt>ば</rt></ruby><ruby>鹿<rt>か</rt></ruby><ruby>馬<rt>ば</rt></ruby><ruby>鹿<rt>か</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "愚蠢、无聊；荒谬、极其不合理",
        "nuance": "1. 毫无意义，不值得理睬或不值得去做。\n2. 程度严重得让人觉得可笑。",
        "examples": [
            { "jp": "<span class='ex-highlight'>馬鹿馬鹿しい</span><ruby>噂<rt>うわさ</rt></ruby><ruby>話<rt>ばなし</rt></ruby>は<ruby>信<rt>しん</rt></ruby>じない。", "cn": "我不信那种无聊的谣言。" },
            { "jp": "こんな<ruby>安<rt>やす</rt></ruby>い<ruby>給<rt>きゅう</rt></ruby><ruby>料<rt>りょう</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>くなんて<span class='ex-highlight'>馬鹿馬鹿しい</span>。", "cn": "拿这么点工资干活真是太蠢了。" }
        ],
        "practice": {
            "sentence": "そんな<span class='ex-highlight'>____</span>話は聞いたことがない。",
            "cn": "我从没听过那么荒唐的话。",
            "options": ["ばかばかしい", "わかわかしい", "なれなれしい", "うっとうしい"],
            "answer": "ばかばかしい"
        }
    },
    {
        "word": "瑞々しい",
        "word_html": "<ruby>瑞<rt>みず</rt></ruby><ruby>々<rt>みず</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "水灵、鲜嫩；充满朝气、清新",
        "nuance": "1. 水果、蔬菜等水分充足，十分新鲜。\n2. 感性、才能或状态非常年轻，有活力。",
        "examples": [
            { "jp": "<ruby>市<rt>し</rt></ruby><ruby>場<rt>じょう</rt></ruby>で<span class='ex-highlight'><ruby>瑞<rt>みず</rt></ruby><ruby>々<rt>みず</rt></ruby>しい</span><ruby>桃<rt>もも</rt></ruby>を<ruby>買<rt>か</rt></ruby>ってきた。", "cn": "在市场上买来了水灵灵的桃子。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<span class='ex-highlight'><ruby>瑞<rt>みず</rt></ruby><ruby>々<rt>みず</rt></ruby>しい</span><ruby>感<rt>かん</rt></ruby><ruby>性<rt>せい</rt></ruby>が<ruby>作<rt>さく</rt></ruby><ruby>品<rt>ひん</rt></ruby>に<ruby>表<rt>あらわ</rt></ruby>れている。", "cn": "她那充满朝气的感性体现在了作品中。" }
        ]
    },
    {
        "word": "快い",
        "word_html": "<ruby>快<rt>こころよ</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "愉快 爽快；欣然、爽快地",
        "nuance": "1. 侧重于主观感情和心情上的舒畅，或者事情发展令人满意。\n2. 痛快地答应，毫不勉强。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>心<rt>こころ</rt></ruby>のこもったもてなしに、<span class='ex-highlight'><ruby>快<rt>こころよ</rt></ruby>い</span><ruby>気分<rt>きぶん</rt></ruby>になった。", "cn": "他那充满诚意的款待，让人心情十分愉快。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>頼<rt>たの</rt></ruby>みを<span class='ex-highlight'><ruby>快<rt>こころよ</rt></ruby>く</span><ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けてくれた。", "cn": "他爽快地接受了请求。" }
        ],
        "practice": {
            "sentence": "疲れた体にマッサージを受けると、<span class='ex-highlight'>____</span>眠りに落ちてしまった。",
            "cn": "接受按摩后，疲惫的身体舒服得进入了梦乡。",
            "options": ["こころよい", "きもちよい", "ここちよい", "いさぎよい"],
            "answer": "こころよい"
        }
    },
    {
        "word": "心地よい",
        "word_html": "<ruby>心<rt>ここ</rt></ruby><ruby>地<rt>ち</rt></ruby>よい",
        "tone": "4",
        "pos": "い形",
        "mean": "舒服、舒适",
        "nuance": "1. 感觉舒畅，身心愉悦，侧重于身体感官接触到外界刺激时，比如风、气温、声音、震动等，产生的生理或心理上的舒服感觉。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>心<rt>ここ</rt></ruby><ruby>地<rt>ち</rt></ruby>よい</span><ruby>風<rt>かぜ</rt></ruby>が<ruby>吹<rt>ふ</rt></ruby>いている。", "cn": "吹着令人舒适的风。" }
        ],
        "practice": {
            "sentence": "海辺のホテルで波の音を聞きながら、<span class='ex-highlight'>____</span>時間を過ごした。",
            "cn": "在海边酒店听着海浪声，度过了舒适的时光。",
            "options": ["ここちよい", "こころよい", "きもちよい", "すばやい"],
            "answer": "ここちよい"
        }
    },
    {
        "word": "擽ったい",
        "word_html": "<ruby>擽<rt>くすぐ</rt></ruby>ったい",
        "tone": "5",
        "pos": "い形",
        "mean": "痒痒、发痒；难为情、不好意思",
        "nuance": "1. 身体被接触时感到发痒。\n2. 受到夸奖或特殊对待时感到害羞。",
        "examples": [
            { "jp": "<ruby>足<rt>あし</rt></ruby>の<ruby>裏<rt>うら</rt></ruby>が<span class='ex-highlight'><ruby>擽<rt>くすぐ</rt></ruby>ったい</span>。", "cn": "脚底发痒。" },
            { "jp": "みんなに<ruby>褒<rt>ほ</rt></ruby>められて、なんだか<span class='ex-highlight'><ruby>擽<rt>くすぐ</rt></ruby>ったい</span><ruby>気<rt>き</rt></ruby><ruby>分<rt>ぶん</rt></ruby>だ。", "cn": "被大家夸奖，总觉得有点不好意思。" }
        ],
        "practice": {
            "sentence": "先生に皆の前で褒められて、なんだか<span class='ex-highlight'>____</span>気持ちになった。",
            "cn": "被老师当着大家的面表扬，总觉得有些难为情。",
            "options": ["くすぐったい", "わずらわしい", "まぎらわしい", "もっともらしい"],
            "answer": "くすぐったい"
        }
    },
    {
        "word": "煩わしい",
        "word_html": "<ruby>煩<rt>わずら</rt></ruby>わしい",
        "tone": "5",
        "pos": "い形",
        "mean": "繁琐、麻烦；烦人、惹人厌",
        "nuance": "1. 事情错综复杂，让人感到心烦、费事。\n2. 人际关系等让人觉得郁闷、想逃避。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>煩<rt>わずら</rt></ruby>わしい</span><ruby>手<rt>て</rt></ruby><ruby>続<rt>つづ</rt></ruby>きをやっと<ruby>済<rt>す</rt></ruby>ませた。", "cn": "好不容易办完了繁琐的手续。" },
            { "jp": "<span class='ex-highlight'><ruby>煩<rt>わずら</rt></ruby>わしい</span><ruby>人<rt>にん</rt></ruby><ruby>間<rt>げん</rt></ruby><ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby>から<ruby>逃<rt>のが</rt></ruby>れたい。", "cn": "想逃离烦人的人际关系。" }
        ],
        "practice": {
            "sentence": "近所付き合いは大切だが、時には<span class='ex-highlight'>____</span>と感じることもある。",
            "cn": "邻里交往很重要，但有时也会觉得麻烦。",
            "options": ["わずらわしい", "くすぐったい", "あどけない", "みすぼらしい"],
            "answer": "わずらわしい"
        }
    },
    {
        "word": "紛らわしい",
        "word_html": "<ruby>紛<rt>まぎ</rt></ruby>らわしい",
        "tone": "5",
        "pos": "い形",
        "mean": "容易混淆、模糊不清",
        "nuance": "1. 与其他事物非常相似，容易弄错或引起误解。",
        "examples": [
            { "jp": "この<ruby>二<rt>ふた</rt></ruby>つの<ruby>単<rt>たん</rt></ruby><ruby>語<rt>ご</rt></ruby>は<ruby>意<rt>い</rt></ruby><ruby>味<rt>み</rt></ruby>が<ruby>似<rt>に</rt></ruby>ていて<span class='ex-highlight'><ruby>紛<rt>まぎ</rt></ruby>らわしい</span>。", "cn": "这两个单词意思相近，很容易混淆。" }
        ],
        "practice": {
            "sentence": "この二つの商品はパッケージが似ていて、非常に<span class='ex-highlight'>____</span>。",
            "cn": "这两件商品包装相似，非常容易混淆。",
            "options": ["まぎらわしい", "なれなれしい", "さびしい", "くやしい"],
            "answer": "まぎらわしい"
        }
    },
    {
        "word": "尤もらしい",
        "word_html": "<ruby>尤<rt>もっと</rt></ruby>もらしい",
        "tone": "5",
        "pos": "い形",
        "mean": "煞有介事、冠冕堂皇",
        "nuance": "1. 听起来好像很有道理，似乎是真的，多含贬义。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>尤<rt>もっと</rt></ruby>もらしい</span><ruby>理<rt>り</rt></ruby><ruby>由<rt>ゆう</rt></ruby>を<ruby>言<rt>い</rt></ruby>って<ruby>断<rt>ことわ</rt></ruby>った。", "cn": "他找了个冠冕堂皇的理由拒绝了。" }
        ],
        "practice": {
            "sentence": "彼は遅刻した理由を<span class='ex-highlight'>____</span>顔で説明したが、誰も信じなかった。",
            "cn": "他一本正经地解释迟到理由，但谁也没相信。",
            "options": ["もっともらしい", "ほこらしい", "ばかばかしい", "あつくるしい"],
            "answer": "もっともらしい"
        }
    },
    {
        "word": "あどけない",
        "word_html": "あどけない",
        "tone": "4",
        "pos": "い形",
        "mean": "天真无邪、稚气未脱",
        "nuance": "1. 毫无心机，充满孩子气，十分惹人喜爱。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'>あどけない</span><ruby>笑<rt>え</rt></ruby><ruby>顔<rt>がお</rt></ruby>で<ruby>笑<rt>わら</rt></ruby>う。", "cn": "她露出天真无邪的笑容。" }
        ],
        "practice": {
            "sentence": "眠っている赤ちゃんの<span class='ex-highlight'>____</span>表情を見ていると、心が癒される。",
            "cn": "看着熟睡宝宝天真的表情，心都被治愈了。",
            "options": ["あどけない", "はかない", "しぶい", "にくい"],
            "answer": "あどけない"
        }
    },
    {
        "word": "危うい",
        "word_html": "<ruby>危<rt>あや</rt></ruby>うい",
        "tone": "3",
        "pos": "い形",
        "mean": "危险、危急；险些、差点儿",
        "nuance": "1. 处境险恶，有受损或丧失的风险。\n2. 差点儿就发生不好的事情，岌岌可危。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>地<rt>ち</rt></ruby><ruby>位<rt>い</rt></ruby>が<span class='ex-highlight'><ruby>危<rt>あや</rt></ruby>うい</span>。", "cn": "他的地位岌岌可危。" },
            { "jp": "<span class='ex-highlight'><ruby>危<rt>あや</rt></ruby>うい</span>ところで<ruby>助<rt>たす</rt></ruby>かった。", "cn": "在千钧一发之际得救了。" }
        ],
        "practice": {
            "sentence": "登山中に足を滑らせて滑落しそうになり、非常に<span class='ex-highlight'>____</span>場面があった。",
            "cn": "登山时脚下一滑差点坠落，场面非常危险。",
            "options": ["あやうい", "けむたい", "もろい", "ひさしい"],
            "answer": "あやうい"
        }
    },
    {
        "word": "ぎこちない",
        "word_html": "ぎこちない",
        "tone": "4",
        "pos": "い形",
        "mean": "笨拙、生硬",
        "nuance": "1. 动作、表情、态度或说话方式不自然、不流畅。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>笑<rt>え</rt></ruby><ruby>顔<rt>がお</rt></ruby>はどこか<span class='ex-highlight'>ぎこちない</span>。", "cn": "他的笑容总觉得有些生硬。" }
        ],
        "practice": {
            "sentence": "ロボットのような<span class='ex-highlight'>____</span>動きでダンスを踊り、会場の笑いを誘った。",
            "cn": "他像机器人一样动作生硬地跳舞，引得全场发笑。",
            "options": ["ぎこちない", "ひさしい", "いちじるしい", "まぎらわしい"],
            "answer": "ぎこちない"
        }
    },
    
];
const DAY3_WORDS = [
{
        "word": "清らか",
        "word_html": "<ruby>清<rt>きよ</rt></ruby>らか",
        "tone": "2",
        "pos": "な形",
        "mean": "洁净、清澈；纯真",
        "nuance": "1. 水或空气等完全没有杂质、透明的感觉。\n2. 心灵或形象纯洁，毫无污点。",
        "examples": [
            { "jp": "<ruby>山<rt>やま</rt></ruby>から<span class='ex-highlight'><ruby>清<rt>きよ</rt></ruby>らかな</span><ruby>水<rt>みず</rt></ruby>が<ruby>流<rt>なが</rt></ruby>れてくる。", "cn": "山间流出清澈的水。" },
            { "jp": "<span class='ex-highlight'><ruby>清<rt>きよ</rt></ruby>らかな</span><ruby>心<rt>こころ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ。", "cn": "拥有一颗纯洁的心。" }
        ],
        "practice": {
            "sentence": "都会の喧騒を離れ、<span class='ex-highlight'>____</span>空気を胸いっぱいに吸い込む。",
            "cn": "远离都市喧嚣，尽情吸入清新的空气。",
            "options": ["きよらかな", "なめらかな", "やわらかな", "おおらかな"],
            "answer": "きよらかな"
        }
    },
    {
        "word": "柔らか",
        "word_html": "<ruby>柔<rt>やわ</rt></ruby>らか",
        "tone": "3",
        "pos": "な形",
        "mean": "柔软；温和、柔和",
        "nuance": "1. 物体的质地、触感不坚硬。\n2. 态度、语气、光线等不生硬。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>柔<rt>やわ</rt></ruby>らかい</span>パンにバターを<ruby>塗<rt>ぬ</rt></ruby>る。", "cn": "在柔软的面包上抹黄油。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はいつも<span class='ex-highlight'><ruby>柔<rt>やわ</rt></ruby>らかな</span><ruby>物<rt>もの</rt></ruby><ruby>腰<rt>ごし</rt></ruby>で<ruby>客<rt>きゃく</rt></ruby>に<ruby>接<rt>せっ</rt></ruby>する。", "cn": "他总是以温和的态度接待客人。" }
        ],
        "practice": {
            "sentence": "赤ちゃんの頬は驚くほど<span class='ex-highlight'>____</span>で、ずっと触っていたくなる。",
            "cn": "宝宝的脸颊柔软得惊人，让人一直想摸。",
            "options": ["やわらか", "なめらか", "おだやか", "きよらか"],
            "answer": "やわらか"
        }
    },
    {
        "word": "滑らか",
        "word_html": "<ruby>滑<rt>なめ</rt></ruby>らか",
        "tone": "2",
        "pos": "な形",
        "mean": "平滑、光滑；流利、顺畅",
        "nuance": "1. 表面没有凹凸或摩擦感，摸起来很顺手。\n2. 说话、动作或事情进展得非常自然，没有阻滞。",
        "examples": [
            { "jp": "<ruby>絹<rt>きぬ</rt></ruby>のような<span class='ex-highlight'><ruby>滑<rt>なめ</rt></ruby>らかな</span><ruby>肌<rt>はだ</rt></ruby>。", "cn": "丝绸般光滑的肌肤。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>英語<rt>えいご</rt></ruby>を<span class='ex-highlight'><ruby>滑<rt>なめ</rt></ruby>らかに</span><ruby>話<rt>はな</rt></ruby>す。", "cn": "他英语说得很流利。" }
        ],
        "practice": {
            "sentence": "何度も練習したので、スピーチはつっかえることなく<span class='ex-highlight'>____</span>だった。",
            "cn": "反复练习后，演讲顺畅得没有停顿。",
            "options": ["なめらか", "やわらか", "おおらか", "きよらか"],
            "answer": "なめらか"
        }
    },
    {
        "word": "大らか",
        "word_html": "<ruby>大<rt>おお</rt></ruby>らか",
        "tone": "2",
        "pos": "な形",
        "mean": "豁达、大度",
        "nuance": "1. 心胸宽广，不拘泥于小事，落落大方。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>大<rt>おお</rt></ruby>らかな</span><ruby>人<rt>ひと</rt></ruby>で、<ruby>細<rt>こま</rt></ruby>かいミスは<ruby>気<rt>き</rt></ruby>にしない。", "cn": "他是个豁达的人，不在意细小的错误。" }
        ],
        "practice": {
            "sentence": "彼は<span class='ex-highlight'>____</span>性格で、小さなミスは笑って許してくれる。",
            "cn": "他性格大度，小错误都会笑着原谅。",
            "options": ["おおらかな", "おだやかな", "きよらかな", "やわらかな"],
            "answer": "おおらかな"
        }
    },
    {
        "word": "穏やか",
        "word_html": "<ruby>穏<rt>おだ</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "平静、安稳；温和、沉稳",
        "nuance": "1. 天气、海面、局势等安定、没有波折。\n2. 性格、言谈、态度等平和，不激进。",
        "examples": [
            { "jp": "<ruby>今日<rt>きょう</rt></ruby>は<ruby>波<rt>なみ</rt></ruby>が<span class='ex-highlight'><ruby>穏<rt>おだ</rt></ruby>やか</span>で、<ruby>絶<rt>ぜっ</rt></ruby><ruby>好<rt>こう</rt></ruby>の<ruby>釣<rt>つ</rt></ruby>り<ruby>日<rt>び</rt></ruby><ruby>和<rt>より</rt></ruby>だ。", "cn": "今天海面上风平浪静，是钓鱼的大好天气。" },
            { "jp": "<ruby>父<rt>ちち</rt></ruby>は<span class='ex-highlight'><ruby>穏<rt>おだ</rt></ruby>やかな</span><ruby>口<rt>く</rt></ruby><ruby>調<rt>ちょう</rt></ruby>で<ruby>私<rt>わたし</rt></ruby>を<ruby>諭<rt>さと</rt></ruby>した。", "cn": "父亲用温和的语气劝导我。" }
        ],
        "practice": {
            "sentence": "昨日の嵐が嘘のように、今日は<span class='ex-highlight'>____</span>天気だ。",
            "cn": "昨天的暴风雨像假的一样，今天天气很平静。",
            "options": ["おだやかな", "おおらかな", "なめらかな", "きよらかな"],
            "answer": "おだやかな"
        }
    },
    {
        "word": "勇ましい",
        "word_html": "<ruby>勇<rt>いさ</rt></ruby>ましい",
        "tone": "4",
        "pos": "い形",
        "mean": "勇敢、英勇；雄壮、振奋人心",
        "nuance": "1. 充满勇气，无所畏惧的样子。\n2. 声音或情景充满气势，令人振奋。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>勇<rt>いさ</rt></ruby>ましい</span><ruby>戦<rt>せん</rt></ruby><ruby>士<rt>し</rt></ruby>たちが<ruby>戦<rt>せん</rt></ruby><ruby>場<rt>じょう</rt></ruby>へ<ruby>向<rt>む</rt></ruby>かう。", "cn": "英勇的战士们奔向战场。" },
            { "jp": "<span class='ex-highlight'><ruby>勇<rt>いさ</rt></ruby>ましい</span><ruby>行<rt>こう</rt></ruby><ruby>進<rt>しん</rt></ruby><ruby>曲<rt>きょく</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえてくる。", "cn": "传来了雄壮的进行曲。" }
        ],
        "practice": {
            "sentence": "彼は<span class='ex-highlight'>____</span>決断を下し、新しい事業に挑戦した。",
            "cn": "他做出了勇敢的决定，挑战新的事业。",
            "options": ["いさましい", "すさまじい", "こうばしい", "めざましい"],
            "answer": "いさましい"
        }
    },
    {
        "word": "望ましい",
        "word_html": "<ruby>望<rt>のぞ</rt></ruby>ましい",
        "tone": "4",
        "pos": "い形",
        "mean": "期望的、理想的",
        "nuance": "1. 符合希望的，最好是那样的状态、条件或结果。",
        "examples": [
            { "jp": "<ruby>応<rt>おう</rt></ruby><ruby>募<rt>ぼ</rt></ruby><ruby>者<rt>しゃ</rt></ruby>は<ruby>日<rt>にち</rt></ruby><ruby>常<rt>じょう</rt></ruby><ruby>会<rt>かい</rt></ruby><ruby>話<rt>わ</rt></ruby>レベルの<ruby>英<rt>えい</rt></ruby><ruby>語<rt>ご</rt></ruby>が<ruby>話<rt>はな</rt></ruby>せる<ruby>人<rt>ひと</rt></ruby>が<span class='ex-highlight'><ruby>望<rt>のぞ</rt></ruby>ましい</span>。", "cn": "应聘者最好是具备日常英语对话能力的人。" }
        ],
        "practice": {
            "sentence": "チームのリーダーには、冷静な判断力を持つ人が<span class='ex-highlight'>____</span>。",
            "cn": "团队领导最好是拥有冷静判断力的人。",
            "options": ["のぞましい", "このましい", "めでたい", "いさぎよい"],
            "answer": "のぞましい"
        }
    },
    {
        "word": "好ましい",
        "word_html": "<ruby>好<rt>この</rt></ruby>ましい",
        "tone": "4",
        "pos": "い形",
        "mean": "令人满意的、符合期望的",
        "nuance": "1. 令人抱有好感，最好是那样的状态。",
        "examples": [
            { "jp": "<ruby>誰<rt>だれ</rt></ruby>からも<span class='ex-highlight'><ruby>好<rt>この</rt></ruby>ましい</span><ruby>印<rt>いん</rt></ruby><ruby>象<rt>しょう</rt></ruby>を<ruby>持<rt>も</rt></ruby>たれる。", "cn": "给所有人都留下令人满意的印象。" }
        ],
        "practice": {
            "sentence": "彼の常に前向きな態度は、周囲に<span class='ex-highlight'>____</span>影響を与えている。",
            "cn": "他始终积极向上的态度，对周围产生了良好影响。",
            "options": ["このましい", "のぞましい", "めでたい", "いさぎよい"],
            "answer": "このましい"
        }
    },
    {
        "word": "めでたい",
        "word_html": "めでたい",
        "tone": "3",
        "pos": "い形",
        "mean": "可喜可贺的、值得庆祝的；天真的、缺心眼的",
        "nuance": "1. 事情顺利，令人高兴，值得祝贺。\n2. 带有嘲讽意味，指人过于天真、盲目乐观。",
        "examples": [
            { "jp": "<ruby>今日<rt>きょう</rt></ruby>は<span class='ex-highlight'>めでたい</span><ruby>日<rt>ひ</rt></ruby>だ。", "cn": "今天是个可喜可贺的日子。" },
            { "jp": "そんな<ruby>話<rt>はなし</rt></ruby>を<ruby>信<rt>しん</rt></ruby>じるなんて、<ruby>君<rt>きみ</rt></ruby>も<span class='ex-highlight'>めでたい</span>ね。", "cn": "居然相信那种话，你也真够天真的。" }
        ],
        "practice": {
            "sentence": "孫が生まれたそうで、それは実に<span class='ex-highlight'>____</span>話だ。",
            "cn": "听说孙子出生了，那真是件可喜的事。",
            "options": ["めでたい", "ありがたい", "もったいない", "おそろしい"],
            "answer": "めでたい"
        }
    },
    {
        "word": "潔い",
        "word_html": "<ruby>潔<rt>いさぎよ</rt></ruby>い",
        "tone": "4",
        "pos": "い形",
        "mean": "干脆的、果断的；光明磊落的、清白的",
        "nuance": "1. 遇到不利情况时痛快地接受或放弃，不拖泥带水。\n2. 心中没有愧疚，态度坦荡。",
        "examples": [
            { "jp": "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>非<rt>ひ</rt></ruby>を<span class='ex-highlight'><ruby>潔<rt>いさぎよ</rt></ruby>く</span><ruby>認<rt>みと</rt></ruby>める。", "cn": "干脆地承认自己的过错。" },
            { "jp": "<span class='ex-highlight'><ruby>潔<rt>いさぎよ</rt></ruby>い</span><ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>で<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>を<ruby>取<rt>と</rt></ruby>る。", "cn": "以光明磊落的态度承担责任。" }
        ],
        "practice": {
            "sentence": "言い訳をせずに自分の非を認めるなんて、なんと<span class='ex-highlight'>____</span>態度だ。",
            "cn": "不找借口承认自己的过错，是多么干脆的态度啊。",
            "options": ["いさぎよい", "すばやい", "たやすい", "めずらしい"],
            "answer": "いさぎよい"
        }
    },
    {
        "word": "素早い",
        "word_html": "<ruby>素<rt>す</rt></ruby><ruby>早<rt>ばや</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "敏捷的、迅速的",
        "nuance": "1. 动作、判断或反应非常快，毫不迟疑。",
        "examples": [
            { "jp": "<ruby>状<rt>じょう</rt></ruby><ruby>況<rt>きょう</rt></ruby>の<ruby>変<rt>へん</rt></ruby><ruby>化<rt>か</rt></ruby>に<span class='ex-highlight'><ruby>素<rt>す</rt></ruby><ruby>早<rt>ばや</rt></ruby>く</span><ruby>対<rt>たい</rt></ruby><ruby>応<rt>おう</rt></ruby>する。", "cn": "对状况的变化做出迅速的反应。" }
        ],
        "practice": {
            "sentence": "猫は<span class='ex-highlight'>____</span>動きで塀の上に飛び乗った。",
            "cn": "猫以敏捷的动作跳上了围墙。",
            "options": ["すばやい", "たやすい", "めずらしい", "いさぎよい"],
            "answer": "すばやい"
        }
    },
    {
        "word": "容易い",
        "word_html": "<ruby>容易<rt>たやす</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "容易的、轻易的",
        "nuance": "1. 不费力气就能做到，非常简单。",
        "examples": [
            { "jp": "その<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>は<span class='ex-highlight'><ruby>容易<rt>たやす</rt></ruby>く</span><ruby>解<rt>かい</rt></ruby><ruby>決<rt>けつ</rt></ruby>できた。", "cn": "那个问题轻易地就解决了。" }
        ],
        "practice": {
            "sentence": "新しい技術を習得するのは、そう<span class='ex-highlight'>____</span>ことではない。",
            "cn": "掌握新技术并不是那么容易的事。",
            "options": ["たやすい", "すばやい", "いちじるしい", "おびただしい"],
            "answer": "たやすい"
        }
    },
    {
        "word": "珍しい",
        "word_html": "<ruby>珍<rt>めずら</rt></ruby>しい",
        "tone": "4",
        "pos": "い形",
        "mean": "罕见的、稀有的；新奇的、少见的",
        "nuance": "1. 数量很少，不常见，因此显得珍贵。\n2. 因为和平时不一样而让人觉得新鲜、意外。",
        "examples": [
            { "jp": "これは<span class='ex-highlight'><ruby>珍<rt>めずら</rt></ruby>しい</span><ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>です。", "cn": "这是罕见的动物。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>怒<rt>おこ</rt></ruby>るなんて<span class='ex-highlight'><ruby>珍<rt>めずら</rt></ruby>しい</span>。", "cn": "他居然会生气，真少见。" }
        ],
        "practice": {
            "sentence": "この地域で雪が降るのは非常に<span class='ex-highlight'>____</span>。",
            "cn": "这个地区下雪非常罕见。",
            "options": ["めずらしい", "けがらわしい", "はなはだしい", "ほほえましい"],
            "answer": "めずらしい"
        }
    },
    {
        "word": "だらしない",
        "word_html": "だらしない",
        "tone": "4",
        "pos": "い形",
        "mean": "散漫、邋遢；没出息、软弱",
        "nuance": "1. 外表不整洁，生活没有条理，作风散漫。\n2. 没有毅力，缺乏骨气，不能振作。",
        "examples": [
            { "jp": "<span class='ex-highlight'>だらしない</span><ruby>格<rt>かっ</rt></ruby><ruby>好<rt>こう</rt></ruby>で<ruby>外<rt>がい</rt></ruby><ruby>出<rt>しゅつ</rt></ruby>する。", "cn": "穿着邋遢地出门。" },
            { "jp": "ちょっと<ruby>負<rt>ま</rt></ruby>けたぐらいで<ruby>泣<rt>な</rt></ruby>くなんて、<span class='ex-highlight'>だらしない</span>。", "cn": "稍微输了一下就哭，真没出息。" }
        ],
        "practice": {
            "sentence": "部屋が散らかっていて<span class='ex-highlight'>____</span>生活をしている。",
            "cn": "房间乱糟糟的，过着很邋遢的生活。",
            "options": ["だらしない", "めずらしい", "いさぎよい", "おびただしい"],
            "answer": "だらしない"
        }
    },
    {
        "word": "厳しい",
        "word_html": "<ruby>厳<rt>きび</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "严格、严厉；严峻、残酷",
        "nuance": "1. 标准高，不宽容，对人对事要求极严。\n2. 情况、自然条件等非常恶劣，难以忍受。",
        "examples": [
            { "jp": "<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>は<ruby>規<rt>き</rt></ruby><ruby>則<rt>そく</rt></ruby>に<span class='ex-highlight'><ruby>厳<rt>きび</rt></ruby>しい</span>。", "cn": "老师对规定很严格。" },
            { "jp": "<ruby>今<rt>こ</rt></ruby><ruby>年<rt>とし</rt></ruby>の<ruby>冬<rt>ふゆ</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby>さが<span class='ex-highlight'><ruby>厳<rt>きび</rt></ruby>しい</span>。", "cn": "今年冬天的寒冷十分严酷。" }
        ],
        "practice": {
            "sentence": "現状のままでは、目標を達成するのは<span class='ex-highlight'>____</span>と言わざるを得ない。",
            "cn": "照目前这样来看，不得不说达成目标很困难。",
            "options": ["きびしい", "ほしい", "くわしい", "あやしい"],
            "answer": "きびしい"
        }
    },
    {
        "word": "慌ただしい",
        "word_html": "<ruby>慌<rt>あわ</rt></ruby>ただしい",
        "tone": "5",
        "pos": "い形",
        "mean": "慌张、匆忙；不稳、动荡",
        "nuance": "1. 事情一件接一件，没有喘息的时间。\n2. 局势等变化剧烈，不安定。",
        "examples": [
            { "jp": "<ruby>出<rt>で</rt></ruby>かけ<ruby>際<rt>ぎわ</rt></ruby>で、<ruby>家<rt>いえ</rt></ruby><ruby>中<rt>じゅう</rt></ruby>が<span class='ex-highlight'><ruby>慌<rt>あわ</rt></ruby>ただしい</span>。", "cn": "正要出门，家里乱哄哄的一片匆忙。" },
            { "jp": "<ruby>世<rt>よ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>が<span class='ex-highlight'><ruby>慌<rt>あわ</rt></ruby>ただしく</span>なってきた。", "cn": "世间变得动荡不安起来。" }
        ],
        "practice": {
            "sentence": "年末は忘年会や大掃除で<span class='ex-highlight'>____</span>日々が続く。",
            "cn": "年末因为忘年会和大扫除，日子一直很忙乱。",
            "options": ["あわただしい", "やかましい", "いさましい", "すさまじい"],
            "answer": "あわただしい"
        }
    },
    {
        "word": "著しい",
        "word_html": "<ruby>著<rt>いちじる</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "显著、明显",
        "nuance": "1. 变化、差别等非常明显，引人注目。",
        "examples": [
            { "jp": "<ruby>科<rt>か</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>技<rt>ぎ</rt></ruby><ruby>術<rt>じゅつ</rt></ruby>の<span class='ex-highlight'><ruby>著<rt>いちじる</rt></ruby>しい</span><ruby>進<rt>しん</rt></ruby><ruby>歩<rt>ぽ</rt></ruby>。", "cn": "科学技术的显著进步。" }
        ],
        "practice": {
            "sentence": "この数年で、都市の景観は<span class='ex-highlight'>____</span>変化を遂げた。",
            "cn": "这几年城市景观发生了显著变化。",
            "options": ["いちじるしい", "はなはだしい", "けがらわしい", "ほほえましい"],
            "answer": "いちじるしい"
        }
    },
    {
        "word": "甚だしい",
        "word_html": "<ruby>甚<rt>はなは</rt></ruby>だしい",
        "tone": "5",
        "pos": "い形",
        "mean": "极度、非常",
        "nuance": "1. 程度极深，太过分，多用于负面事物，如误解、差别等。",
        "examples": [
            { "jp": "それは<span class='ex-highlight'><ruby>甚<rt>はなは</rt></ruby>だしい</span><ruby>誤<rt>ご</rt></ruby><ruby>解<rt>かい</rt></ruby>だ。", "cn": "那是极大的误解。" }
        ],
        "practice": {
            "sentence": "公共の場で大騒ぎするとは、非常識も<span class='ex-highlight'>____</span>。",
            "cn": "在公共场合大吵大闹，实在太没有常识了。",
            "options": ["はなはだしい", "おびただしい", "いちじるしい", "ほほえましい"],
            "answer": "はなはだしい"
        }
    },
    {
        "word": "夥しい",
        "word_html": "<ruby>夥<rt>おびただ</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "大量的、极多的",
        "nuance": "1. 数量多得惊人，多用于负面或令人震撼的语境。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>夥<rt>おびただ</rt></ruby>しい</span><ruby>数<rt>かず</rt></ruby>のカラスが<ruby>飛<rt>と</rt></ruby>んでいる。", "cn": "大量的乌鸦在飞。" }
        ],
        "practice": {
            "sentence": "事故現場には<span class='ex-highlight'>____</span>量の血が流れていた。",
            "cn": "事故现场流了大量的血。",
            "options": ["おびただしい", "はなはだしい", "いちじるしい", "けがらわしい"],
            "answer": "おびただしい"
        }
    },
    {
        "word": "凄まじい",
        "word_html": "<ruby>凄<rt>すさ</rt></ruby>まじい",
        "tone": "4",
        "pos": "い形",
        "mean": "惊人、可怕",
        "nuance": "1. 气势或程度极强，令人感到恐惧或震撼。",
        "examples": [
            { "jp": "<ruby>台<rt>たい</rt></ruby><ruby>風<rt>ふう</rt></ruby>が<span class='ex-highlight'><ruby>凄<rt>すさ</rt></ruby>まじい</span><ruby>音<rt>おと</rt></ruby>を<ruby>立<rt>た</rt></ruby>てている。", "cn": "台风发出惊人的响声。" }
        ],
        "practice": {
            "sentence": "その映画は<span class='ex-highlight'>____</span>人気で、チケットがすぐに完売した。",
            "cn": "那部电影人气惊人，票很快就售罄了。",
            "options": ["すさまじい", "いさましい", "やかましい", "めまぐるしい"],
            "answer": "すさまじい"
        }
    },
];
const DAY4_WORDS = [
    {
        "word": "香ばしい",
        "word_html": "<ruby>香<rt>こう</rt></ruby>ばしい",
        "tone": "4",
        "pos": "い形",
        "mean": "芳香、焦香",
        "usage": "多形容烤制或炒制食物散发出的令人愉快的香味。",
        "collocation": { "jp": "香ばしい匂い", "cn": "焦香的气味" },
        "nuance": "1. 食物烤好或炒好时散发出的令人愉悦的香味。",
        "examples": [
            { "jp": "<ruby>焙<rt>あぶ</rt></ruby>りたてのコーヒーが<span class='ex-highlight'><ruby>香<rt>こう</rt></ruby>ばしい</span>。", "cn": "刚烘焙好的咖啡香味扑鼻。" }
        ],
        "practice": {
            "sentence": "パン屋の前を通ると、焼きたての<span class='ex-highlight'>____</span>匂いがする。",
            "cn": "经过面包店前，会闻到刚出炉面包的焦香味。",
            "options": ["こうばしい", "かんばしい", "めぼしい", "てあつい"],
            "answer": "こうばしい",
            "optionWordIds": ["香ばしい", "芳しい", "目ぼしい", "手厚い"]
        }
    },
    {
        "word": "芳しい",
        "word_html": "<ruby>芳<rt>かんば</rt></ruby>しい",
        "tone": "4",
        "pos": "い形",
        "mean": "芬芳、芳香；出色、令人满意",
        "usage": "可形容芬芳的气味；否定形常表示结果或评价不理想。",
        "collocation": { "jp": "芳しい香り", "cn": "芬芳的香气" },
        "nuance": "1. 花草或香料散发出的好闻气味。\n2. 多用于否定形式，表示结果或评价不理想。",
        "examples": [
            { "jp": "<ruby>庭<rt>にわ</rt></ruby>に<ruby>花<rt>はな</rt></ruby>の<span class='ex-highlight'><ruby>芳<rt>かんば</rt></ruby>しい</span><ruby>香<rt>かお</rt></ruby>りが<ruby>漂<rt>ただよ</rt></ruby>う。", "cn": "院子里飘荡着花朵的芬芳。" },
            { "jp": "<ruby>成<rt>せい</rt></ruby><ruby>績<rt>せき</rt></ruby>が<span class='ex-highlight'><ruby>芳<rt>かんば</rt></ruby>しくない</span>。", "cn": "成绩不理想。" }
        ],
        "practice": {
            "sentence": "景気の回復は依然として<span class='ex-highlight'>____</span>ない状況だ。",
            "cn": "经济复苏依然不太理想。",
            "options": ["かんばしく", "こうばしく", "めざましく", "こころぼそく"],
            "answer": "かんばしく"
        }
    },
    {
        "word": "心細い",
        "word_html": "<ruby>心<rt>こころ</rt></ruby><ruby>細<rt>ぼそ</rt></ruby>い",
        "tone": "5",
        "pos": "い形",
        "mean": "心中没底、不安",
        "nuance": "1. 因没有依靠或前景不明而感到孤独、心里不踏实。",
        "examples": [
            { "jp": "<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>で<ruby>外<rt>がい</rt></ruby><ruby>国<rt>こく</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くのは<span class='ex-highlight'><ruby>心<rt>こころ</rt></ruby><ruby>細<rt>ぼそ</rt></ruby>い</span>。", "cn": "一个人去国外，心里总觉得没底。" }
        ],
        "practice": {
            "sentence": "財布を忘れて出かけてしまい、とても<span class='ex-highlight'>____</span>思いをした。",
            "cn": "忘带钱包出门，心里非常没底。",
            "options": ["こころぼそい", "こころづよい", "こころない", "こころもとない"],
            "answer": "こころぼそい"
        }
    },
    {
        "word": "心強い",
        "word_html": "<ruby>心<rt>こころ</rt></ruby><ruby>強<rt>づよ</rt></ruby>い",
        "tone": "5",
        "pos": "い形",
        "mean": "受鼓舞、有信心",
        "nuance": "1. 因有依靠或支持而感到心里踏实、坚强。",
        "examples": [
            { "jp": "あなたが<ruby>一<rt>いっ</rt></ruby><ruby>緒<rt>しょ</rt></ruby>に<ruby>来<rt>き</rt></ruby>てくれると<span class='ex-highlight'><ruby>心<rt>こころ</rt></ruby><ruby>強<rt>づよ</rt></ruby>い</span>。", "cn": "有你陪我一起去的话，我就放心多了。" }
        ],
        "practice": {
            "sentence": "経験豊富な先輩がチームにいると非常に<span class='ex-highlight'>____</span>。",
            "cn": "团队里有经验丰富的前辈，会让人非常安心。",
            "options": ["こころづよい", "こころぼそい", "てあつい", "ていたい"],
            "answer": "こころづよい"
        }
    },
    {
        "word": "心無い",
        "word_html": "<ruby>心<rt>こころ</rt></ruby><ruby>無<rt>な</rt></ruby>い",
        "tone": "4",
        "pos": "い形",
        "mean": "无情、冷酷；无心、无意",
        "nuance": "1. 缺乏同情心，言行草率从而伤害到他人。\n2. 没有用心，不经意间做出的行为。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>心<rt>こころ</rt></ruby><ruby>無<rt>な</rt></ruby>い</span><ruby>人<rt>ひと</rt></ruby>の<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>に<ruby>傷<rt>きず</rt></ruby>ついた。", "cn": "被那些说话不负责任的人伤到了。" },
            { "jp": "<span class='ex-highlight'><ruby>心<rt>こころ</rt></ruby><ruby>無<rt>な</rt></ruby>い</span><ruby>返<rt>へん</rt></ruby><ruby>事<rt>じ</rt></ruby>をする。", "cn": "做出无心的回答。" }
        ],
        "practice": {
            "sentence": "ネット上の<span class='ex-highlight'>____</span>書き込みが人を傷つけることがある。",
            "cn": "网络上无情的留言有时会伤害人。",
            "options": ["こころない", "こころもとない", "なやましい", "めざましい"],
            "answer": "こころない"
        }
    },
    {
        "word": "心許ない",
        "word_html": "<ruby>心<rt>こころ</rt></ruby><ruby>許<rt>もと</rt></ruby>ない",
        "tone": "6",
        "pos": "い形",
        "mean": "心里没底、没把握",
        "nuance": "1. 因不确定、不可靠或由于证据、记忆模糊而感到不安。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>だけでは、どうも<span class='ex-highlight'><ruby>心<rt>こころ</rt></ruby><ruby>許<rt>もと</rt></ruby>ない</span>。", "cn": "仅凭他的解释，总觉得心里没底。" }
        ],
        "practice": {
            "sentence": "知らない土地で財布を落としてしまい、非常に<span class='ex-highlight'>____</span>。",
            "cn": "在陌生地方丢了钱包，让人非常不安。",
            "options": ["こころもとない", "こころづよい", "なやましい", "めざましい"],
            "answer": "こころもとない"
        }
    },
    {
        "word": "目まぐるしい",
        "word_html": "<ruby>目<rt>め</rt></ruby>まぐるしい",
        "tone": "5",
        "pos": "い形",
        "mean": "眼花缭乱、瞬息万变",
        "nuance": "1. 事物变化极快，让人应接不暇。",
        "examples": [
            { "jp": "<ruby>現<rt>げん</rt></ruby><ruby>代<rt>だい</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>会<rt>かい</rt></ruby>は<ruby>変<rt>へん</rt></ruby><ruby>化<rt>か</rt></ruby>が<span class='ex-highlight'><ruby>目<rt>め</rt></ruby>まぐるしい</span>。", "cn": "现代社会变化极快，让人眼花缭乱。" }
        ],
        "practice": {
            "sentence": "IT業界は技術の進歩が<span class='ex-highlight'>____</span>、ついていくのが大変だ。",
            "cn": "IT 行业技术进步日新月异，跟上变化很不容易。",
            "options": ["めまぐるしく", "めざましく", "かんばしく", "あわただしく"],
            "answer": "めまぐるしく"
        }
    },
    {
        "word": "目覚ましい",
        "word_html": "<ruby>目<rt>め</rt></ruby><ruby>覚<rt>ざま</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "显著、惊人、出色",
        "nuance": "1. 进步或成就非常明显，令人惊叹。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はこの<ruby>一<rt>いち</rt></ruby><ruby>年<rt>ねん</rt></ruby>で<span class='ex-highlight'><ruby>目<rt>め</rt></ruby><ruby>覚<rt>ざま</rt></ruby>しい</span><ruby>成<rt>せい</rt></ruby><ruby>長<rt>ちょう</rt></ruby>を<ruby>遂<rt>と</rt></ruby>げた。", "cn": "他在这一年里取得了令人瞩目的成长。" }
        ],
        "practice": {
            "sentence": "彼女はピアノのコンクールで<span class='ex-highlight'>____</span>活躍を見せた。",
            "cn": "她在钢琴比赛中表现得非常出色。",
            "options": ["めざましい", "めまぐるしい", "あわただしい", "すさまじい"],
            "answer": "めざましい"
        }
    },
    {
        "word": "目ぼしい",
        "word_html": "<ruby>目<rt>め</rt></ruby>ぼしい",
        "tone": "3",
        "pos": "い形",
        "mean": "显著的、有价值的",
        "usage": "表示显眼、值得关注，常用于候选对象或有价值的事物。",
        "collocation": { "jp": "目ぼしい人", "cn": "值得注意的人选" },
        "nuance": "1. 引人注目，或指有希望、值得一看的事物。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>目<rt>め</rt></ruby>ぼしい</span><ruby>成<rt>せい</rt></ruby><ruby>果<rt>か</rt></ruby>は<ruby>得<rt>え</rt></ruby>られなかった。", "cn": "没能获得显著的成果。" }
        ],
        "practice": {
            "sentence": "バーゲンセールに行ったが、<span class='ex-highlight'>____</span>商品はすでに売り切れていた。",
            "cn": "去了特卖会，但值得关注的商品已经卖完了。",
            "options": ["めぼしい", "めざましい", "めまぐるしい", "なやましい"],
            "answer": "めぼしい",
            "optionWordIds": ["目ぼしい", "目覚ましい", "目まぐるしい", "悩ましい"]
        }
    },
    {
        "word": "手厚い",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>厚<rt>あつ</rt></ruby>い",
        "tone": "0",
        "pos": "い形",
        "mean": "周到、优厚",
        "usage": "形容待遇、照顾、支援等周到而充分。",
        "collocation": { "jp": "手厚いもてなし", "cn": "周到的招待" },
        "nuance": "1. 待遇、照顾或保护非常诚恳且周全。",
        "examples": [
            { "jp": "<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>から<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>厚<rt>あつ</rt></ruby>い</span><ruby>手<rt>て</rt></ruby><ruby>当<rt>あて</rt></ruby>をもらう。", "cn": "从公司领取了优厚的津贴。" }
        ],
        "practice": {
            "sentence": "政府は被災地に対して<span class='ex-highlight'>____</span>支援を行うことを決定した。",
            "cn": "政府决定向灾区提供周到的支援。",
            "options": ["てあつい", "ていたい", "かんばしい", "あわただしい"],
            "answer": "てあつい",
            "optionWordIds": ["手厚い", "手痛い", "芳しい", "慌ただしい"]
        }
    },
    {
        "word": "手痛い",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>痛<rt>いた</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "惨重、打击大",
        "nuance": "1. 受到程度很深的打击、损失或批评。",
        "examples": [
            { "jp": "<ruby>不<rt>ふ</rt></ruby><ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>から<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>痛<rt>いた</rt></ruby>い</span>ミスをしてしまった。", "cn": "因为不注意犯下了惨痛的错误。" }
        ],
        "practice": {
            "sentence": "株の投資で失敗し、<span class='ex-highlight'>____</span>損害を被った。",
            "cn": "股票投资失败，遭受了沉重损失。",
            "options": ["ていたい", "てあつい", "こころぼそい", "めぼしい"],
            "answer": "ていたい"
        }
    },
    {
        "word": "手強い",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>強<rt>ごわ</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "难对付、强劲",
        "nuance": "1. 对手或问题非常强大，难以轻易取胜或解决。",
        "examples": [
            { "jp": "<ruby>決<rt>けっ</rt></ruby><ruby>勝<rt>しょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>の<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>はなかなか<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>強<rt>ごわ</rt></ruby>い</span>。", "cn": "决赛的对手相当难对付。" }
        ],
        "practice": {
            "sentence": "彼は<span class='ex-highlight'>____</span>対戦相手だ。",
            "cn": "他是个难缠的对手。",
            "options": ["てごわい", "てがたい", "てあらい", "てゆるい"],
            "answer": "てごわい"
        }
    },
    {
        "word": "手堅い",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>堅<rt>がた</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "稳妥、可靠",
        "nuance": "1. 做法扎实稳健，没有风险，值得信赖。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>堅<rt>がた</rt></ruby>い</span><ruby>方<rt>ほう</rt></ruby><ruby>法<rt>ほう</rt></ruby>で<ruby>資<rt>し</rt></ruby><ruby>金<rt>きん</rt></ruby>を<ruby>運<rt>うん</rt></ruby><ruby>用<rt>よう</rt></ruby>している。", "cn": "他正用稳妥的方法运作资金。" }
        ],
        "practice": {
            "sentence": "銀行預金は<span class='ex-highlight'>____</span>資産運用の手段の一つだ。",
            "cn": "银行存款是一种稳妥的资产运用方式。",
            "options": ["てがたい", "てごわい", "てあらい", "てゆるい"],
            "answer": "てがたい"
        }
    },
    {
        "word": "手荒い",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>荒<rt>あら</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "粗鲁、粗暴",
        "nuance": "1. 动作不温柔，或者做法不细致甚至带有攻击性。",
        "examples": [
            { "jp": "<ruby>売<rt>う</rt></ruby>り<ruby>物<rt>もの</rt></ruby>を<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>荒<rt>あら</rt></ruby>く</span><ruby>扱<rt>あつか</rt></ruby>ってはいけない。", "cn": "不能粗鲁地对待商品。" }
        ],
        "practice": {
            "sentence": "人質を<span class='ex-highlight'>____</span>扱うな。",
            "cn": "不要粗暴对待人质。",
            "options": ["てあらく", "てがたく", "てごわく", "てゆるく"],
            "answer": "てあらく"
        }
    },
    {
        "word": "手緩い",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>緩<rt>ゆる</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "手软、不严厉",
        "nuance": "1. 处理问题不够果断，或者惩罚、审查的力度不够。",
        "examples": [
            { "jp": "<ruby>犯<rt>はん</rt></ruby><ruby>人<rt>にん</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>処<rt>しょ</rt></ruby><ruby>置<rt>ち</rt></ruby>が<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>緩<rt>ゆる</rt></ruby>い</span>。", "cn": "对犯人的处置太轻了。" }
        ],
        "practice": {
            "sentence": "現状の規制では<span class='ex-highlight'>____</span>、もっと厳しくすべきだ。",
            "cn": "现有规定太宽松了，应该更严格一些。",
            "options": ["てゆるい", "てごわい", "てがたい", "てあらい"],
            "answer": "てゆるい"
        }
    }
];
const DAY5_WORDS = [
{
        "word": "疑わしい",
        "word_html": "<ruby>疑<rt>うたが</rt></ruby>わしい",
        "tone": "5",
        "pos": "い形",
        "mean": "可疑的、有疑问的",
        "nuance": "1. 让人怀疑其真实性、正确性或身份。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>には<span class='ex-highlight'><ruby>疑<rt>うたが</rt></ruby>わしい</span><ruby>点<rt>てん</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い。", "cn": "他的话里有很多可疑点。" }
        ],
        "practice": {
            "sentence": "彼の行動は非常に<span class='ex-highlight'>____</span>。",
            "cn": "他的行动非常可疑。",
            "options": ["うたがわしい", "あっけない", "いとしい", "ものたりない"],
            "answer": "うたがわしい"
        }
    },
    {
        "word": "呆気ない",
        "word_html": "<ruby>呆<rt>あっ</rt></ruby><ruby>気<rt>け</rt></ruby>ない",
        "tone": "4",
        "pos": "い形",
        "mean": "太简单的、没意思的",
        "nuance": "1. 由于比预期中结束得快或简单，而感到不满足、不过瘾。",
        "examples": [
            { "jp": "<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>は<span class='ex-highlight'><ruby>呆<rt>あっ</rt></ruby><ruby>気<rt>け</rt></ruby>なく</span><ruby>終<rt>お</rt></ruby>わってしまった。", "cn": "比赛竟如此简单地结束了。" }
        ],
        "practice": {
            "sentence": "期待していた映画の結末は意外と<span class='ex-highlight'>____</span>ものだった。",
            "cn": "期待已久的电影结局意外地草草了事。",
            "options": ["あっけない", "うたがわしい", "まちどおしい", "せつない"],
            "answer": "あっけない"
        }
    },
    {
        "word": "愛しい",
        "word_html": "<ruby>愛<rt>いと</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "心爱的、可爱的",
        "nuance": "1. 觉得非常爱怜，令人怜爱。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>愛<rt>いと</rt></ruby>しい</span><ruby>我<rt>わ</rt></ruby>が<ruby>子<rt>こ</rt></ruby>の<ruby>寝<rt>ね</rt></ruby><ruby>顔<rt>がお</rt></ruby>を<ruby>見<rt>み</rt></ruby>る。", "cn": "看着心爱的孩子的睡脸。" }
        ],
        "practice": {
            "sentence": "遠く離れて暮らす家族が<span class='ex-highlight'>____</span>。",
            "cn": "我思念远方生活的家人。",
            "options": ["いとしい", "あくどい", "そっけない", "やましい"],
            "answer": "いとしい"
        }
    },
    {
        "word": "物足りない",
        "word_html": "<ruby>物<rt>もの</rt></ruby><ruby>足<rt>た</rt></ruby>りない",
        "tone": "0",
        "pos": "い形",
        "mean": "美中不足的、不够完善的",
        "nuance": "1. 总觉得少了点什么，感到不完全满意。",
        "examples": [
            { "jp": "この<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<span class='ex-highlight'><ruby>物<rt>もの</rt></ruby><ruby>足<rt>た</rt></ruby>りない</span>。", "cn": "这道菜总觉得还差点什么。" }
        ],
        "practice": {
            "sentence": "彼の説明は簡潔すぎて、少し<span class='ex-highlight'>____</span>。",
            "cn": "他的说明太简略了，让人觉得有点不够。",
            "options": ["ものたりない", "まちどおしい", "せつない", "うしろめたい"],
            "answer": "ものたりない"
        }
    },
    {
        "word": "待ち遠しい",
        "word_html": "<ruby>待<rt>ま</rt></ruby>ち<ruby>遠<rt>どお</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "急切等待、盼望",
        "nuance": "1. 觉得期待的事情来得太慢，心里很焦急。",
        "examples": [
            { "jp": "<ruby>春<rt>はる</rt></ruby><ruby>休<rt>やす</rt></ruby>みが<span class='ex-highlight'><ruby>待<rt>ま</rt></ruby>ち<ruby>遠<rt>どお</rt></ruby>しい</span>。", "cn": "盼望着放春假。" }
        ],
        "practice": {
            "sentence": "週末の旅行が<span class='ex-highlight'>____</span>てたまらない。",
            "cn": "我盼周末的旅行盼得不得了。",
            "options": ["まちどおしく", "あくどく", "そっけなく", "やましく"],
            "answer": "まちどおしく"
        }
    },
    {
        "word": "切ない",
        "word_html": "<ruby>切<rt>せつ</rt></ruby>ない",
        "tone": "3",
        "pos": "い形",
        "mean": "难受、哀伤",
        "nuance": "1. 因为悲伤、寂寞或爱慕而感到心口像被揪住一样难受。",
        "examples": [
            { "jp": "<ruby>別<rt>わか</rt></ruby>れのシーンを<ruby>見<rt>み</rt></ruby>るのは<span class='ex-highlight'><ruby>切<rt>せつ</rt></ruby>ない</span>。", "cn": "看到分别的场景令人感到悲伤难受。" }
        ],
        "practice": {
            "sentence": "秋の夕暮れは、なんとなく<span class='ex-highlight'>____</span>気持ちになる。",
            "cn": "秋天的傍晚总让人莫名感到伤感。",
            "options": ["せつない", "うたがわしい", "あっけない", "ものたりない"],
            "answer": "せつない"
        }
    },
    {
        "word": "悪どい",
        "word_html": "<ruby>悪<rt>あく</rt></ruby>どい",
        "tone": "3",
        "pos": "い形",
        "mean": "恶毒、过分；过于浓艳",
        "nuance": "1. 做法卑鄙或程度极其恶劣。\n2. 颜色、味道等过于浓烈，让人反感。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>悪<rt>あく</rt></ruby>どい</span><ruby>商<rt>しょう</rt></ruby><ruby>売<rt>ばい</rt></ruby>はやめるべきだ。", "cn": "应该停止那种恶毒的买卖。" },
            { "jp": "この<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>は<ruby>味<rt>あじ</rt></ruby><ruby>付<rt>つ</rt></ruby>けが<ruby>少<rt>すこ</rt></ruby>し<span class='ex-highlight'><ruby>悪<rt>あく</rt></ruby>どい</span>。", "cn": "这道菜的味道有点太重了。" }
        ],
        "practice": {
            "sentence": "その商売の手口はあまりにも<span class='ex-highlight'>____</span>。",
            "cn": "那种做生意的手法实在太恶劣了。",
            "options": ["あくどい", "そっけない", "うしろめたい", "やましい"],
            "answer": "あくどい"
        }
    },
    {
        "word": "素っ気ない",
        "word_html": "<ruby>素<rt>そ</rt></ruby>っ<ruby>気<rt>け</rt></ruby>ない",
        "tone": "4",
        "pos": "い形",
        "mean": "冷淡、冷漠",
        "nuance": "1. 言行毫无诚意或热情，显得很冷漠。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はいつも<span class='ex-highlight'><ruby>素<rt>そ</rt></ruby>っ<ruby>気<rt>け</rt></ruby>ない</span><ruby>返<rt>へん</rt></ruby><ruby>事<rt>じ</rt></ruby>をする。", "cn": "他总是做出冷淡的回答。" }
        ],
        "practice": {
            "sentence": "せっかく挨拶したのに、<span class='ex-highlight'>____</span>態度をとられた。",
            "cn": "难得打了招呼，却被冷淡对待。",
            "options": ["そっけない", "あくどい", "いとしい", "まちどおしい"],
            "answer": "そっけない"
        }
    },
    {
        "word": "後ろめたい",
        "word_html": "<ruby>後<rt>うし</rt></ruby>ろめたい",
        "tone": "4",
        "pos": "い形",
        "mean": "内疚、心里不安",
        "nuance": "1. 因为做了对不起别人的事或亏心事，而觉得没脸见人。",
        "examples": [
            { "jp": "<ruby>嘘<rt>うそ</rt></ruby>をつくのは<span class='ex-highlight'><ruby>後<rt>うし</rt></ruby>ろめたい</span>ものだ。", "cn": "撒谎是会让人感到内心不安的。" }
        ],
        "practice": {
            "sentence": "友人に秘密を隠しているのが<span class='ex-highlight'>____</span>。",
            "cn": "对朋友隐瞒秘密让我感到内疚。",
            "options": ["うしろめたい", "あっけない", "ものたりない", "せつない"],
            "answer": "うしろめたい"
        }
    },
    {
        "word": "疚しい",
        "word_html": "<ruby>疚<rt>やま</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "内疚、问心有愧",
        "nuance": "1. 因做了坏事或违反道德的事而感到内心不安，多与否定词连用。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>疚<rt>やま</rt></ruby>しい</span>ことは<ruby>何<rt>なに</rt></ruby>もない。", "cn": "没有什么问心有愧的事情。" }
        ],
        "practice": {
            "sentence": "私は<span class='ex-highlight'>____</span>ことは何もしていないので、堂々としていればいい。",
            "cn": "我没有做任何亏心事，所以堂堂正正就好。",
            "options": ["やましい", "あくどい", "そっけない", "いとしい"],
            "answer": "やましい"
        }
    },
    {
        "word": "きまり悪い",
        "word_html": "きまり<ruby>悪<rt>わる</rt></ruby>い",
        "tone": "4",
        "pos": "い形",
        "mean": "难为情、不好意思",
        "nuance": "1. 因自己的失误或处于尴尬处境而感到羞愧。",
        "examples": [
            { "jp": "<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>をみんなに<ruby>見<rt>み</rt></ruby>られて、<span class='ex-highlight'>きまり<ruby>悪<rt>わる</rt></ruby>い</span>。", "cn": "在大家面前失败了，真不好意思。" }
        ],
        "practice": {
            "sentence": "会議で発言した内容が間違っていて、とても<span class='ex-highlight'>____</span>思いをした。",
            "cn": "在会议上说错了话，觉得非常尴尬。",
            "options": ["きまりわるい", "けむたい", "なだかい", "たのもしい"],
            "answer": "きまりわるい"
        }
    },
    {
        "word": "煙たい",
        "word_html": "<ruby>煙<rt>けむ</rt></ruby>たい",
        "tone": "3",
        "pos": "い形",
        "mean": "烟呛人；令人拘束、不好对付",
        "nuance": "1. 由于烟气刺眼或呛嗓子而感到难受。\n2. 因对方地位高或过于严厉而感到相处不自然，想敬而远之。",
        "examples": [
            { "jp": "タバコの<ruby>煙<rt>けむり</rt></ruby>で<ruby>目<rt>め</rt></ruby>が<span class='ex-highlight'><ruby>煙<rt>けむ</rt></ruby>たい</span>。", "cn": "烟草的烟熏得眼睛难受。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>口<rt>くち</rt></ruby>うるさいので、<ruby>周<rt>しゅう</rt></ruby><ruby>囲<rt>い</rt></ruby>から<span class='ex-highlight'><ruby>煙<rt>けむ</rt></ruby>たい</span><ruby>存<rt>そん</rt></ruby><ruby>在<rt>ざい</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>われている。", "cn": "他很啰嗦，周围的人都觉得他是个不好相处的人。" }
        ],
        "practice": {
            "sentence": "社長は社員にとって<span class='ex-highlight'>____</span>存在だ。",
            "cn": "社长对员工来说是个让人敬而远之的存在。",
            "options": ["けむたい", "きまりわるい", "いやしい", "なさけない"],
            "answer": "けむたい"
        }
    },
    {
        "word": "名高い",
        "word_html": "<ruby>名<rt>な</rt></ruby><ruby>高<rt>だか</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "有名的、著名的",
        "nuance": "1. 名字在广泛圈内被众人所知。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<span class='ex-highlight'><ruby>名<rt>な</rt></ruby><ruby>高<rt>だか</rt></ruby>い</span><ruby>学<rt>がく</rt></ruby><ruby>者<rt>しゃ</rt></ruby>だ。", "cn": "他是享誉世界的学者。" }
        ],
        "practice": {
            "sentence": "この地方は美味しいワインの産地として<span class='ex-highlight'>____</span>。",
            "cn": "这个地方作为美味葡萄酒的产地而闻名。",
            "options": ["なだかい", "たのもしい", "しぶとい", "みすぼらしい"],
            "answer": "なだかい"
        }
    },
    {
        "word": "頼もしい",
        "word_html": "<ruby>頼<rt>たの</rt></ruby>もしい",
        "tone": "4",
        "pos": "い形",
        "mean": "可靠的、大有希望的",
        "nuance": "1. 因有实力或值得信赖而让人感到放心，对未来充满期待。",
        "examples": [
            { "jp": "<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>で<ruby>何<rt>なん</rt></ruby>でもこなす<ruby>姿<rt>すがた</rt></ruby>は<span class='ex-highlight'><ruby>頼<rt>たの</rt></ruby>もしい</span>。", "cn": "他一个人能搞定所有事情的样子很可靠。" }
        ],
        "practice": {
            "sentence": "新入社員だが、仕事への取り組み方が非常に<span class='ex-highlight'>____</span>。",
            "cn": "虽然是新员工，但他对工作的态度非常可靠。",
            "options": ["たのもしい", "なだかい", "なにげない", "なまぬるい"],
            "answer": "たのもしい"
        }
    },
    {
        "word": "卑しい",
        "word_html": "<ruby>卑<rt>いや</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "卑鄙、贪婪；卑微、低贱",
        "nuance": "1. 品格低劣，或者在饮食、金钱方面表现得没有教养。\n2. 身份或地位低下。",
        "examples": [
            { "jp": "<ruby>他<rt>た</rt></ruby><ruby>人<rt>にん</rt></ruby>のものを<ruby>欲<rt>ほ</rt></ruby>しがるなんて<span class='ex-highlight'><ruby>卑<rt>いや</rt></ruby>しい</span>。", "cn": "想要别人的东西，真是太贪婪了。" },
            { "jp": "<ruby>職<rt>しょく</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>に<ruby>貴<rt>き</rt></ruby><ruby>賤<rt>せん</rt></ruby>はない、<span class='ex-highlight'><ruby>卑<rt>いや</rt></ruby>しい</span><ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>などない。", "cn": "职业不分贵贱，没有低微的工作。" }
        ],
        "practice": {
            "sentence": "金に<span class='ex-highlight'>____</span>人は信用できない。",
            "cn": "贪财的人不值得信任。",
            "options": ["いやしい", "けむたい", "きまりわるい", "なさけない"],
            "answer": "いやしい"
        }
    },
    {
        "word": "情けない",
        "word_html": "<ruby>情<rt>なさ</rt></ruby>けない",
        "tone": "4",
        "pos": "い形",
        "mean": "没出息、可耻；可怜、凄惨",
        "nuance": "1. 由于行为或结果太差，令人感到羞愧、扫兴或遗憾。\n2. 处境十分悲惨，令人同情。",
        "examples": [
            { "jp": "<ruby>簡<rt>かん</rt></ruby><ruby>単<rt>たん</rt></ruby>に<ruby>諦<rt>あきら</rt></ruby>めてしまうなんて、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>でも<span class='ex-highlight'><ruby>情<rt>なさ</rt></ruby>けない</span>。", "cn": "竟然这么轻易就放弃，连我自己都觉得太没出息了。" },
            { "jp": "こんな<span class='ex-highlight'><ruby>情<rt>なさ</rt></ruby>けない</span><ruby>姿<rt>すがた</rt></ruby>を<ruby>人<rt>ひと</rt></ruby>に<ruby>見<rt>み</rt></ruby>られたくない。", "cn": "不想让人看到自己如此凄惨的样子。" }
        ],
        "practice": {
            "sentence": "大事な試合で、練習通りの力を出せずに負けてしまい、本当に<span class='ex-highlight'>____</span>気持ちになった。",
            "cn": "在重要比赛中没能发挥出平时训练的水平输了，心里真的很窝囊。",
            "options": ["なさけない", "あやうい", "おさない", "もろい"],
            "answer": "なさけない"
        }
    },
    {
        "word": "しぶとい",
        "word_html": "しぶとい",
        "tone": "3",
        "pos": "い形",
        "mean": "顽强、坚韧；执拗、难对付",
        "nuance": "1. 遇到困难也不轻易屈服，有韧劲。\n2. 负面状态持续很久，让人感到棘手。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'>しぶとい</span><ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby>で、<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>しても<ruby>立<rt>た</rt></ruby>ち<ruby>上<rt>あ</rt></ruby>がる。", "cn": "他性格顽强，无论失败多少次都会重新振作。" },
            { "jp": "この<ruby>風邪<rt>かぜ</rt></ruby>は<span class='ex-highlight'>しぶとくて</span>、なかなか<ruby>治<rt>なお</rt></ruby>らない。", "cn": "这感冒很顽固，怎么也治不好。" }
        ],
        "practice": {
            "sentence": "害虫は生命力が<span class='ex-highlight'>____</span>、駆除するのが大変だ。",
            "cn": "害虫生命力顽强，驱除起来很麻烦。",
            "options": ["しぶとく", "なだかく", "たのもしく", "みすぼらしく"],
            "answer": "しぶとく"
        }
    },
    {
        "word": "何気ない",
        "word_html": "<ruby>何<rt>なに</rt></ruby><ruby>気<rt>げ</rt></ruby>ない",
        "tone": "4",
        "pos": "い形",
        "mean": "无心、无意；若无其事、平静",
        "nuance": "1. 没有特别的想法或意图。\n2. 表面看起来没有什么异常，不露声色。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<span class='ex-highlight'><ruby>何<rt>なに</rt></ruby><ruby>気<rt>げ</rt></ruby>ない</span><ruby>一<rt>ひと</rt></ruby><ruby>言<rt>こと</rt></ruby>に<ruby>傷<rt>きず</rt></ruby>ついた。", "cn": "被他无心的一句话伤到了。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'><ruby>何<rt>なに</rt></ruby><ruby>気<rt>げ</rt></ruby>ない</span><ruby>顔<rt>かお</rt></ruby>で<ruby>嘘<rt>うそ</rt></ruby>をついた。", "cn": "她若无其事地撒了谎。" }
        ],
        "practice": {
            "sentence": "日常の<span class='ex-highlight'>____</span>風景の中に、幸せは隠れている。",
            "cn": "幸福藏在日常不经意的风景里。",
            "options": ["なにげない", "なまぬるい", "みすぼらしい", "しぶとい"],
            "answer": "なにげない"
        }
    },
    {
        "word": "生ぬるい",
        "word_html": "<ruby>生<rt>なま</rt></ruby>ぬるい",
        "tone": "4",
        "pos": "い形",
        "mean": "微温、不冷不热；温吞、不彻底、不严格",
        "nuance": "1. 温度介于冷热之间，多指让人感到不舒服的温度。\n2. 做法、态度或处分等力度不足，不够彻底、严格。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>生<rt>なま</rt></ruby>ぬるい</span><ruby>風<rt>かぜ</rt></ruby>が<ruby>吹<rt>ふ</rt></ruby>いてきて<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ち<ruby>悪<rt>わる</rt></ruby>い。", "cn": "吹来一阵不冷不热的风，感觉很不舒服。" },
            { "jp": "そんな<span class='ex-highlight'><ruby>生<rt>なま</rt></ruby>ぬるい</span><ruby>処<rt>しょ</rt></ruby><ruby>罰<rt>ばつ</rt></ruby>では、<ruby>誰<rt>だれ</rt></ruby>も<ruby>納<rt>なっ</rt></ruby><ruby>得<rt>とく</rt></ruby>しない。", "cn": "那么轻微的处罚，谁都不会信服。" }
        ],
        "practice": {
            "sentence": "コーラは冷えていないと<span class='ex-highlight'>____</span>て美味しくない。",
            "cn": "可乐不冰的话，温吞吞的就不好喝。",
            "options": ["なまぬるく", "なにげなく", "けむたく", "きまりわるく"],
            "answer": "なまぬるく"
        }
    },
    {
        "word": "みすぼらしい",
        "word_html": "みすぼらしい",
        "tone": "5",
        "pos": "い形",
        "mean": "寒酸、破旧",
        "nuance": "1. 外表、穿着或建筑物等显得贫穷、破败。",
        "examples": [
            { "jp": "<span class='ex-highlight'>みすぼらしい</span><ruby>身<rt>み</rt></ruby>なりをしているが、<ruby>彼<rt>かれ</rt></ruby>は<ruby>立<rt>りっ</rt></ruby><ruby>派<rt>ぱ</rt></ruby>な<ruby>学<rt>がく</rt></ruby><ruby>者<rt>しゃ</rt></ruby>だ。", "cn": "虽然打扮得很寒酸，但他是一位杰出的学者。" }
        ],
        "practice": {
            "sentence": "何年も手入れされていないその家は、とても<span class='ex-highlight'>____</span>見えた。",
            "cn": "那栋多年没有维护的房子看起来非常破败。",
            "options": ["みすぼらしく", "なだかく", "たのもしく", "しぶとく"],
            "answer": "みすぼらしく"
        }
    },
    {
        "word": "穢らわしい",
        "word_html": "<ruby>穢<rt>けが</rt></ruby>らわしい",
        "tone": "5",
        "pos": "い形",
        "mean": "肮脏、恶心",
        "nuance": "1. 物理上或精神上不干净，令人感到反感、厌恶。",
        "examples": [
            { "jp": "そんな<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>くのも<span class='ex-highlight'><ruby>穢<rt>けが</rt></ruby>らわしい</span>。", "cn": "听到那种话都觉得脏了耳朵。" }
        ],
        "practice": {
            "sentence": "不正に手を染めるような<span class='ex-highlight'>____</span>まねはしたくない。",
            "cn": "我不想做那种沾染不正当行为的肮脏勾当。",
            "options": ["けがらわしい", "ほほえましい", "いちじるしい", "めずらしい"],
            "answer": "けがらわしい"
        }
    },
    {
        "word": "喧しい",
        "word_html": "<ruby>喧<rt>やかま</rt></ruby>しい",
        "tone": "4",
        "pos": "い形",
        "mean": "吵闹、喧哗；啰嗦、严厉；议论纷纷",
        "nuance": "1. 声音嘈杂刺耳，令人心烦。\n2. 对细节要求极高，爱挑剔。\n3. 社会评价或话题讨论得很热烈。",
        "examples": [
            { "jp": "<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>の<ruby>音<rt>おと</rt></ruby>が<span class='ex-highlight'><ruby>喧<rt>やかま</rt></ruby>しくて</span><ruby>眠<rt>ねむ</rt></ruby>れない。", "cn": "施工的声音太吵了，睡不着。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はマナーにとても<span class='ex-highlight'><ruby>喧<rt>やかま</rt></ruby>しい</span>。", "cn": "他对礼仪要求非常严苛。" },
            { "jp": "その<ruby>事<rt>じ</rt></ruby><ruby>件<rt>けん</rt></ruby>について<ruby>世<rt>せ</rt></ruby><ruby>間<rt>けん</rt></ruby>が<span class='ex-highlight'><ruby>喧<rt>やかま</rt></ruby>しい</span>。", "cn": "世间对那起事件议论纷纷。" }
        ],
        "practice": {
            "sentence": "隣の部屋から<span class='ex-highlight'>____</span>音楽が聞こえてきて集中できない。",
            "cn": "隔壁房间传来吵闹的音乐，没法集中注意力。",
            "options": ["やかましい", "あわただしい", "かんばしい", "なやましい"],
            "answer": "やかましい"
        }
    },
    {
        "word": "悩ましい",
        "word_html": "<ruby>悩<rt>なや</rt></ruby>ましい",
        "tone": "4",
        "pos": "い形",
        "mean": "令人烦恼的；诱人的、迷人的",
        "nuance": "1. 难以做出决定或处理，让人感到困扰。\n2. 由于性感或魅力让人心神不宁。",
        "examples": [
            { "jp": "どちらを<ruby>選<rt>えら</rt></ruby>ぶか<ruby>非<rt>ひ</rt></ruby><ruby>常<rt>じょう</rt></ruby>に<span class='ex-highlight'><ruby>悩<rt>なや</rt></ruby>ましい</span><ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>だ。", "cn": "选哪个是非常令人烦恼的问题。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<span class='ex-highlight'><ruby>悩<rt>なや</rt></ruby>ましい</span>ポーズに<ruby>目<rt>め</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>われる。", "cn": "被她迷人的姿势夺去了目光。" }
        ],
        "practice": {
            "sentence": "A案もB案も一長一短があり、どちらを採用するか<span class='ex-highlight'>____</span>。",
            "cn": "A 方案和 B 方案各有利弊，让人很难抉择。",
            "options": ["なやましい", "めざましい", "すさまじい", "あわただしい"],
            "answer": "なやましい"
        }
    },
    {
        "word": "微笑ましい",
        "word_html": "<ruby>微<rt>ほほ</rt></ruby><ruby>笑<rt>え</rt></ruby>ましい",
        "tone": "5",
        "pos": "い形",
        "mean": "令人微笑、欣慰",
        "nuance": "1. 看到后让人不禁露出微笑，感到温暖或有趣。",
        "examples": [
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>たちの<ruby>遊<rt>あそ</rt></ruby>ぶ<ruby>姿<rt>すがた</rt></ruby>が<span class='ex-highlight'><ruby>微<rt>ほほ</rt></ruby><ruby>笑<rt>え</rt></ruby>ましい</span>。", "cn": "孩子们玩耍的身影令人感到欣慰。" }
        ],
        "practice": {
            "sentence": "老夫婦が仲良く散歩している姿はとても<span class='ex-highlight'>____</span>。",
            "cn": "老夫妇亲密散步的样子很令人暖心。",
            "options": ["ほほえましい", "いちじるしい", "はなはだしい", "けがらわしい"],
            "answer": "ほほえましい"
        }
    },
    {
        "word": "もどかしい",
        "word_html": "もどかしい",
        "tone": "4",
        "pos": "い形",
        "mean": "令人焦急、着急",
        "nuance": "1. 事情进展缓慢，不如意或无法顺利表达，让人心里着急不痛快。",
        "examples": [
            { "jp": "<ruby>言<rt>い</rt></ruby>いたいことがうまく<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>にできなくて、<span class='ex-highlight'>もどかしい</span>。", "cn": "想说的话无法很好地用语言表达出来，令人焦急。" }
        ],
        "practice": {
            "sentence": "外国語で自分の気持ちをうまく伝えられないのは<span class='ex-highlight'>____</span>ものだ。",
            "cn": "无法用外语顺利表达自己的心情，真让人着急。",
            "options": ["もどかしい", "のぞましい", "このましい", "めでたい"],
            "answer": "もどかしい"
        }
    },
];

const DAY6_WORDS = [
    {
        "word": "朗らか",
        "word_html": "<ruby>朗<rt>ほが</rt></ruby>らか",
        "tone": "2",
        "pos": "な形",
        "mean": "开朗、愉快；清脆、晴朗",
        "nuance": "1. 性格、气氛等明快、爽朗。\n2. 声音悦耳清脆，或天气晴和。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'><ruby>朗<rt>ほが</rt></ruby>らかな</span><ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby>で、クラスの<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby><ruby>者<rt>もの</rt></ruby>だ。", "cn": "她性格开朗，是班里的红人。" },
            { "jp": "<ruby>窓<rt>まど</rt></ruby>の<ruby>外<rt>そと</rt></ruby>から<span class='ex-highlight'><ruby>朗<rt>ほが</rt></ruby>らかな</span><ruby>歌<rt>うた</rt></ruby><ruby>声<rt>ごえ</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえてくる。", "cn": "从窗外传来了清脆的歌声。" }
        ],
        "practice": {
            "sentence": "朝のキャンパスでは、<span class='ex-highlight'>____</span>笑顔で挨拶する学生たちが多い。",
            "cn": "早晨的校园里，很多学生带着开朗的笑容打招呼。",
            "options": ["ほがらかな", "きよらかな", "やわらかな", "なめらかな"],
            "answer": "ほがらかな"
        }
    },
    {
        "word": "清らか",
        "word_html": "<ruby>清<rt>きよ</rt></ruby>らか",
        "tone": "2",
        "pos": "な形",
        "mean": "洁净、清澈；纯洁、清白",
        "nuance": "1. 水、空气等环境干净没有杂质。\n2. 心灵、品行等高洁、无垢。",
        "examples": [
            { "jp": "<ruby>山<rt>やま</rt></ruby>の<span class='ex-highlight'><ruby>清<rt>きよ</rt></ruby>らかな</span><ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>を<ruby>胸<rt>むね</rt></ruby>いっぱいに<ruby>吸<rt>す</rt></ruby>い<ruby>込<rt>こ</rt></ruby>む。", "cn": "大口呼吸山里清新的空气。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>清<rt>きよ</rt></ruby>らかな</span><ruby>心<rt>こころ</rt></ruby>を<ruby>持<rt>も</rt></ruby>っている。", "cn": "他拥有一颗纯洁的心。" }
        ],
        "practice": {
            "sentence": "高原の<span class='ex-highlight'>____</span>空気を吸うと、心まで洗われる気がする。",
            "cn": "吸入高原清新的空气，感觉连心都被洗净了。",
            "options": ["きよらかな", "ほがらかな", "おおらかな", "あきらかな"],
            "answer": "きよらかな"
        }
    },
    {
        "word": "柔らか",
        "word_html": "<ruby>柔<rt>やわ</rt></ruby>らか",
        "tone": "3",
        "pos": "な形",
        "mean": "柔软；温和、柔和",
        "nuance": "1. 物体的质地、触感不坚硬。\n2. 态度、语气、光线等不生硬。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>柔<rt>やわ</rt></ruby>らかい</span>パンにバターを<ruby>塗<rt>ぬ</rt></ruby>る。", "cn": "在柔软的面包上抹黄油。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はいつも<span class='ex-highlight'><ruby>柔<rt>やわ</rt></ruby>らかな</span><ruby>物<rt>もの</rt></ruby><ruby>腰<rt>ごし</rt></ruby>で<ruby>客<rt>きゃく</rt></ruby>に<ruby>接<rt>せっ</rt></ruby>する。", "cn": "他总是以温和的态度接待客人。" }
        ],
        "practice": {
            "sentence": "赤ちゃんの<span class='ex-highlight'>____</span>肌に触れると、思わず微笑んでしまう。",
            "cn": "触摸宝宝柔软的肌肤，让人不禁露出微笑。",
            "options": ["やわらかな", "なめらかな", "ほがらかな", "きよらかな"],
            "answer": "やわらかな"
        }
    },
    {
        "word": "滑らか",
        "word_html": "<ruby>滑<rt>なめ</rt></ruby>らか",
        "tone": "2",
        "pos": "な形",
        "mean": "光滑、平滑；流利、顺利",
        "nuance": "1. 表面没有凹凸，触感顺滑。\n2. 言语表达流利，或事情进展毫无阻碍。",
        "examples": [
            { "jp": "この<ruby>生<rt>き</rt></ruby><ruby>地<rt>じ</rt></ruby>は<ruby>質<rt>しつ</rt></ruby><ruby>感<rt>かん</rt></ruby>が<span class='ex-highlight'><ruby>滑<rt>なめ</rt></ruby>らか</span>だ。", "cn": "这块布料的质感很光滑。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>はフランス<ruby>語<rt>ご</rt></ruby>を<span class='ex-highlight'><ruby>滑<rt>なめ</rt></ruby>らかに</span><ruby>話<rt>はな</rt></ruby>す。", "cn": "她法语说得很流利。" }
        ],
        "practice": {
            "sentence": "氷の上を<span class='ex-highlight'>____</span>に滑るのは、爽快で気持ちがいい。",
            "cn": "在冰上顺滑地滑行，又爽快又舒服。",
            "options": ["なめらか", "やわらか", "ほがらか", "きよらか"],
            "answer": "なめらか"
        }
    },
    {
        "word": "大らか",
        "word_html": "<ruby>大<rt>おお</rt></ruby>らか",
        "tone": "2",
        "pos": "な形",
        "mean": "豁达、大度",
        "nuance": "1. 心胸宽广，不拘泥于小事，落落大方。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>大<rt>おお</rt></ruby>らかな</span><ruby>人<rt>ひと</rt></ruby>で、<ruby>細<rt>こま</rt></ruby>かいミスは<ruby>気<rt>き</rt></ruby>にしない。", "cn": "他是个豁达的人，不在意细小的错误。" }
        ],
        "practice": {
            "sentence": "些細な失敗を気にせず、<span class='ex-highlight'>____</span>な態度で接してくれる先輩に感謝している。",
            "cn": "感谢那位不计较小失败、用宽厚态度对待我的前辈。",
            "options": ["おおらか", "ほがらか", "きよらか", "なめらか"],
            "answer": "おおらか"
        }
    },
    {
        "word": "安らか",
        "word_html": "<ruby>安<rt>やす</rt></ruby>らか",
        "tone": "2",
        "pos": "な形",
        "mean": "平静、安稳；安宁、太平",
        "nuance": "1. 心情、睡眠或临终时安详，没有烦恼、痛苦或不安。\n2. 国家、社会或环境等和平安定，没有纷争和动荡。",
        "examples": [
            { "jp": "<ruby>祖<rt>そ</rt></ruby><ruby>父<rt>ふ</rt></ruby>は<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>に<ruby>見<rt>み</rt></ruby><ruby>守<rt>まも</rt></ruby>られながら、<span class='ex-highlight'><ruby>安<rt>やす</rt></ruby>らかに</span><ruby>眠<rt>ねむ</rt></ruby>りについた。", "cn": "祖父在家人的陪伴下，安详地离世了。" },
            { "jp": "この<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby>に<span class='ex-highlight'><ruby>安<rt>やす</rt></ruby>らかな</span><ruby>日<rt>ひ</rt></ruby><ruby>々<rt>び</rt></ruby>が<ruby>訪<rt>おとず</rt></ruby>れることを<ruby>祈<rt>いの</rt></ruby>っている。", "cn": "祈祷这个世界能迎来安宁的日子。" }
        ],
        "practice": {
            "sentence": "この<ruby>湖<rt>みずうみ</rt></ruby>は<ruby>波<rt>なみ</rt></ruby>もなく、とても<span class='ex-highlight'>____</span>だ。",
            "cn": "这个湖没有波浪，非常宁静。",
            "options": ["やすらか", "おおらか", "なめらか", "ほがらか"],
            "answer": "やすらか"
        }
    },
    {
        "word": "穏やか",
        "word_html": "<ruby>穏<rt>おだ</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "平静、安稳；温和、沉稳",
        "nuance": "1. 天气、海面、局势等安定、没有波折。\n2. 性格、言谈、态度等平和，不激进。",
        "examples": [
            { "jp": "<ruby>今日<rt>きょう</rt></ruby>は<ruby>波<rt>なみ</rt></ruby>が<span class='ex-highlight'><ruby>穏<rt>おだ</rt></ruby>やか</span>で、<ruby>絶<rt>ぜっ</rt></ruby><ruby>好<rt>こう</rt></ruby>の<ruby>釣<rt>つ</rt></ruby>り<ruby>日<rt>び</rt></ruby><ruby>和<rt>より</rt></ruby>だ。", "cn": "今天海面上风平浪静，是钓鱼的大好天气。" },
            { "jp": "<ruby>父<rt>ちち</rt></ruby>は<span class='ex-highlight'><ruby>穏<rt>おだ</rt></ruby>やかな</span><ruby>口<rt>く</rt></ruby><ruby>調<rt>ちょう</rt></ruby>で<ruby>私<rt>わたし</rt></ruby>を<ruby>諭<rt>さと</rt></ruby>した。", "cn": "父亲用温和的语气劝导我。" }
        ],
        "practice": {
            "sentence": "その<ruby>人<rt>ひと</rt></ruby>の<ruby>話<rt>はな</rt></ruby>し<ruby>方<rt>かた</rt></ruby>はとても<span class='ex-highlight'>____</span>で、<ruby>聞<rt>き</rt></ruby>み<ruby>手<rt>て</rt></ruby>も<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>く。",
            "cn": "那个人说话很温和，听的人也会放松下来。",
            "options": ["おだやか", "なごやか", "やわらか", "ほがらか"],
            "answer": "おだやか"
        }
    },
    {
        "word": "細やか",
        "word_html": "<ruby>細<rt>こま</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "细腻、周到；浓厚、深厚",
        "nuance": "1. 对细节关注充分，照顾得体。\n2. 情感、情分等非常浓重。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<ruby>客<rt>きゃく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<span class='ex-highlight'><ruby>細<rt>こま</rt></ruby>やかな</span><ruby>心<rt>こころ</rt></ruby><ruby>遣<rt>づか</rt></ruby>いができる<ruby>人<rt>ひと</rt></ruby>だ。", "cn": "她是一个能对客人观察入微、体贴周到的人。" },
            { "jp": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>は<span class='ex-highlight'><ruby>細<rt>こま</rt></ruby>やかな</span><ruby>愛<rt>あい</rt></ruby><ruby>情<rt>じょう</rt></ruby>を<ruby>通<rt>かよ</rt></ruby>わせている。", "cn": "两人之间交流着深厚的感情。" }
        ],
        "practice": {
            "sentence": "この<ruby>旅<rt>りょ</rt></ruby><ruby>館<rt>かん</rt></ruby>の<ruby>接<rt>せっ</rt></ruby><ruby>客<rt>きゃく</rt></ruby>は<span class='ex-highlight'>____</span>で、<ruby>宿<rt>しゅく</rt></ruby><ruby>泊<rt>はく</rt></ruby><ruby>客<rt>きゃく</rt></ruby>からの<ruby>評<rt>ひょう</rt></ruby><ruby>判<rt>ばん</rt></ruby>もいい。",
            "cn": "这家旅馆服务细致，住客评价也很好。",
            "options": ["こまやか", "きよらか", "おおらか", "あきらか"],
            "answer": "こまやか"
        }
    },
    {
        "word": "ささやか",
        "word_html": "ささやか",
        "tone": "2",
        "pos": "な形",
        "mean": "微薄、琐小",
        "nuance": "1. 规模较小但蕴含心意，多用于谦逊。",
        "examples": [
            { "jp": "<ruby>誕<rt>たん</rt></ruby><ruby>生<rt>じょう</rt></ruby><ruby>日<rt>び</rt></ruby>に<span class='ex-highlight'>ささやかな</span><ruby>贈<rt>おく</rt></ruby>り<ruby>物<rt>もの</rt></ruby>をした。", "cn": "生日时送了一份微薄的礼物。" }
        ],
        "practice": {
            "sentence": "わたしの<span class='ex-highlight'>____</span>な<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちですが、どうぞお<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>りください。",
            "cn": "这是我的一点小心意，请收下。",
            "options": ["ささやか", "こまやか", "なごやか", "ほがらか"],
            "answer": "ささやか"
        }
    },
    {
        "word": "軽やか",
        "word_html": "<ruby>軽<rt>かろ</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "轻快、轻盈；轻松、欢快",
        "nuance": "1. 动作敏捷，没有沉重感。\n2. 心情、声音、颜色等轻巧悦耳。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'><ruby>軽<rt>かろ</rt></ruby>やかな</span><ruby>足<rt>あし</rt></ruby><ruby>取<rt>ど</rt></ruby>りで<ruby>階<rt>かい</rt></ruby><ruby>段<rt>だん</rt></ruby>を<ruby>駆<rt>か</rt></ruby>け<ruby>上<rt>あ</rt></ruby>がった。", "cn": "她迈着轻盈的步伐跑上了楼梯。" },
            { "jp": "<span class='ex-highlight'><ruby>軽<rt>かろ</rt></ruby>やかな</span>ピアノの<ruby>音<rt>ね</rt></ruby><ruby>色<rt>いろ</rt></ruby>が<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>に<ruby>流<rt>なが</rt></ruby>れている。", "cn": "房间里流淌着轻快的钢琴声。" }
        ],
        "practice": {
            "sentence": "バレリーナの<span class='ex-highlight'>____</span>なステップに、<ruby>観<rt>かん</rt></ruby><ruby>客<rt>きゃく</rt></ruby>は<ruby>魅<rt>み</rt></ruby>せられた。",
            "cn": "芭蕾舞演员轻盈的步伐让观众着迷。",
            "options": ["かろやか", "しなやか", "なめらか", "すみやか"],
            "answer": "かろやか"
        }
    },
    {
        "word": "鮮やか",
        "word_html": "<ruby>鮮<rt>あざ</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "鲜艳、鲜明；熟练、出色；清晰、深刻",
        "nuance": "1. 色彩、光线清晰且漂亮。\n2. 技巧高超，动作完成得非常漂亮。\n3. 记忆、印象等历历在目，没有模糊。",
        "examples": [
            { "jp": "<ruby>秋<rt>あき</rt></ruby>になると、<ruby>山<rt>やま</rt></ruby>の<ruby>木<rt>き</rt></ruby><ruby>々<rt>ぎ</rt></ruby>が<span class='ex-highlight'><ruby>鮮<rt>あざ</rt></ruby>やかな</span><ruby>赤<rt>あか</rt></ruby>や<ruby>黄<rt>き</rt></ruby><ruby>色<rt>いろ</rt></ruby>に<ruby>染<rt>そ</rt></ruby>まる。", "cn": "一到秋天，山上的树木就会染上鲜艳的红色和黄色。" },
            { "jp": "<span class='ex-highlight'><ruby>鮮<rt>あざ</rt></ruby>やかな</span><ruby>手<rt>て</rt></ruby>さばきで<ruby>魚<rt>さかな</rt></ruby>をさばく。", "cn": "以极其熟练的手法处理鱼。" },
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>の<ruby>記<rt>き</rt></ruby><ruby>憶<rt>おく</rt></ruby>が<ruby>今<rt>いま</rt></ruby>でも<span class='ex-highlight'><ruby>鮮<rt>あざ</rt></ruby>やかに</span><ruby>蘇<rt>よみがえ</rt></ruby>る。", "cn": "小时候的记忆至今依然清晰地浮现在脑海中。" }
        ],
        "practice": {
            "sentence": "彼女の<span class='ex-highlight'>____</span>な日本語は、ネイティブのように聞こえる。",
            "cn": "她流利漂亮的日语听起来像母语者一样。",
            "options": ["あざやか", "すみやか", "しとやか", "さわやか"],
            "answer": "あざやか"
        }
    },
    {
        "word": "速やか",
        "word_html": "<ruby>速<rt>すみ</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "迅速、及时",
        "nuance": "1. 立刻进行某事，毫不拖延。",
        "examples": [
            { "jp": "<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>が<ruby>発<rt>はっ</rt></ruby><ruby>生<rt>せい</rt></ruby>したら、<span class='ex-highlight'><ruby>速<rt>すみ</rt></ruby>やかに</span><ruby>報<rt>ほう</rt></ruby><ruby>告<rt>こく</rt></ruby>してください。", "cn": "如果发生问题，请迅速汇报。" }
        ],
        "practice": {
            "sentence": "お<ruby>支<rt>し</rt></ruby><ruby>払<rt>はら</rt></ruby>いは<span class='ex-highlight'>____</ruby>に<ruby>済<rt>す</rt></ruby>ませてください。",
            "cn": "请尽快完成付款。",
            "options": ["すみやか", "あざやか", "しとやか", "すこやか"],
            "answer": "すみやか"
        }
    },
    {
        "word": "健やか",
        "word_html": "<ruby>健<rt>すこ</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "健壮、健康",
        "nuance": "1. 身心发育良好，处于健康的状态。",
        "examples": [
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>たちが<span class='ex-highlight'><ruby>健<rt>すこ</rt></ruby>やかに</span><ruby>育<rt>そだ</rt></ruby>つことを<ruby>願<rt>ねが</rt></ruby>っている。", "cn": "衷心祝愿孩子们能够健康成长。" }
        ],
        "practice": {
            "sentence": "毎日の<ruby>散<rt>さん</rt></ruby><ruby>歩<rt>ぽ</rt></ruby>で、<ruby>心<rt>しん</rt></ruby><ruby>身<rt>しん</rt></ruby>ともに<span class='ex-highlight'>____</span>になる。",
            "cn": "每天散步能让身心都变得健康。",
            "options": ["すこやか", "あざやか", "すみやか", "さわやか"],
            "answer": "すこやか"
        }
    },
    {
        "word": "淑やか",
        "word_html": "<ruby>淑<rt>しと</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "端庄、优雅",
        "nuance": "1. 举止、言谈等文静、高雅，多用于形容女性。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'><ruby>淑<rt>しと</rt></ruby>やかな</span><ruby>身<rt>み</rt></ruby>のこなしで<ruby>挨<rt>あい</rt></ruby><ruby>拶<rt>さつ</rt></ruby>をした。", "cn": "她以端庄的举止打了招呼。" }
        ],
        "practice": {
            "sentence": "彼女は<span class='ex-highlight'>____</span>に<ruby>微<rt>ほほ</rt></ruby><ruby>笑<rt>え</rt></ruby>んで、<ruby>客<rt>きゃく</rt></ruby>を<ruby>迎<rt>むか</rt></ruby>えた。",
            "cn": "她娴静地微笑着迎接客人。",
            "options": ["しとやか", "あざやか", "すこやか", "まろやか"],
            "answer": "しとやか"
        }
    },
    {
        "word": "爽やか",
        "word_html": "<ruby>爽<rt>さわ</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "清爽、凉爽；爽朗、明快",
        "nuance": "1. 天气、风等让人感觉清爽宜人，心情舒畅。\n2. 人的态度、声音、笑容或性格等明快，毫不拖泥带水。",
        "examples": [
            { "jp": "<ruby>朝<rt>あさ</rt></ruby>の<span class='ex-highlight'><ruby>爽<rt>さわ</rt></ruby>やかな</span><ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>を<ruby>吸<rt>す</rt></ruby>い<ruby>込<rt>こ</rt></ruby>む。", "cn": "呼吸早晨清爽的空气。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はいつも<span class='ex-highlight'><ruby>爽<rt>さわ</rt></ruby>やかな</span><ruby>笑<rt>え</rt></ruby><ruby>顔<rt>がお</rt></ruby>で<ruby>接<rt>せっ</rt></ruby>してくれる。", "cn": "他总是带着爽朗的笑容待人接物。" }
        ],
        "practice": {
            "sentence": "朝の<ruby>風<rt>かぜ</rt></ruby>が<span class='ex-highlight'>____</span>で、<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちがいい。",
            "cn": "早晨的风很清爽，令人心情很好。",
            "options": ["さわやか", "あざやか", "すこやか", "ゆるやか"],
            "answer": "さわやか"
        }
    },
    {
        "word": "緩やか",
        "word_html": "<ruby>緩<rt>ゆる</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "平缓、缓慢；宽松、不严；宽松、宽大",
        "nuance": "1. 坡度不陡，或变化、速度等缓慢。\n2. 规则、限制、管理或审查等不严格。\n3. 衣服等尺寸大，不紧绷。",
        "examples": [
            { "jp": "<ruby>川<rt>かわ</rt></ruby>が<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>やかに</span><ruby>流<rt>なが</rt></ruby>れている。", "cn": "河水在平缓地流淌着。" },
            { "jp": "この<ruby>国<rt>くに</rt></ruby>は<ruby>輸<rt>ゆ</rt></ruby><ruby>出<rt>しゅつ</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>規<rt>き</rt></ruby><ruby>制<rt>せい</rt></ruby>が<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>やか</span>だ。", "cn": "这个国家对出口的限制很宽松。" },
            { "jp": "<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>やかな</span><ruby>服<rt>ふく</rt></ruby>を<ruby>着<rt>き</rt></ruby>てリラックスする。", "cn": "穿着宽松的衣服放松休息。" }
        ],
        "practice": {
            "sentence": "このスカートは<ruby>腰<rt>こし</rt></ruby>まわりが<span class='ex-highlight'>____</span>で、<ruby>楽<rt>らく</rt></ruby>ちんです。",
            "cn": "这条裙子腰部比较宽松，穿起来很轻松。",
            "options": ["ゆるやか", "さわやか", "あきらか", "なめらか"],
            "answer": "ゆるやか"
        }
    },
    {
        "word": "明らか",
        "word_html": "<ruby>明<rt>あき</rt></ruby>らか",
        "tone": "2",
        "pos": "な形",
        "mean": "明显、显然",
        "nuance": "1. 事实、因果关系等清楚明白，毫无疑问。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>嘘<rt>うそ</rt></ruby>をついているのは<span class='ex-highlight'><ruby>明<rt>あき</rt></ruby>らか</span>だ。", "cn": "他撒谎是显而易见的。" }
        ],
        "practice": {
            "sentence": "この<ruby>事<rt>じ</rt></ruby><ruby>件<rt>けん</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>人<rt>じん</rt></ruby><ruby>為<rt>い</rt></ruby>的なミスだ。",
            "cn": "这起事件显然是人为失误。",
            "options": ["あきらか", "さわやか", "ゆるやか", "ほがらか"],
            "answer": "あきらか"
        }
    },
    {
        "word": "しなやか",
        "word_html": "しなやか",
        "tone": "2",
        "pos": "な形",
        "mean": "柔软、柔韧；优美、柔和",
        "nuance": "1. 物体柔软且富有弹性，不易折断。\n2. 人的动作、姿态或身段非常柔软美丽。",
        "examples": [
            { "jp": "<ruby>竹<rt>たけ</rt></ruby>の<span class='ex-highlight'>しなやかな</span><ruby>枝<rt>えだ</rt></ruby>が<ruby>風<rt>かぜ</rt></ruby>に<ruby>揺<rt>ゆ</rt></ruby>れている。", "cn": "竹子柔韧的枝条在风中摇曳。" },
            { "jp": "ダンサーの<span class='ex-highlight'>しなやかな</span><ruby>動<rt>うご</rt></ruby>きに<ruby>魅<rt>み</rt></ruby><ruby>了<rt>りょう</rt></ruby>された。", "cn": "被舞者优美的动作迷住了。" }
        ],
        "practice": {
            "sentence": "ヨガを<ruby>続<rt>つづ</rt></ruby>けると、<ruby>体<rt>からだ</rt></ruby>が<span class='ex-highlight'>____</span>になる。",
            "cn": "坚持做瑜伽，身体会变得柔韧。",
            "options": ["しなやか", "あざやか", "すこやか", "まろやか"],
            "answer": "しなやか"
        }
    },
    {
        "word": "円やか",
        "word_html": "<ruby>円<rt>まろ</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "醇厚、圆润；柔和、温和",
        "nuance": "1. 食物的味道、口感纯正温和，没有刺激性。\n2. 声音、性格或形状圆润不尖锐。",
        "examples": [
            { "jp": "このワインは<span class='ex-highlight'><ruby>円<rt>まろ</rt></ruby>やかな</span><ruby>味<rt>あじ</rt></ruby>わいが<ruby>特<rt>とく</rt></ruby><ruby>徴<rt>ちょう</rt></ruby>だ。", "cn": "这款葡萄酒的特点是口感醇厚。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<span class='ex-highlight'><ruby>円<rt>まろ</rt></ruby>やかな</span><ruby>声<rt>こえ</rt></ruby>に<ruby>癒<rt>いや</rt></ruby>される。", "cn": "被她柔和的声音治愈了。" }
        ],
        "practice": {
            "sentence": "この<ruby>珈<rt>コー</rt></ruby><ruby>琲<rt>ヒー</rt></ruby>は<ruby>苦<rt>にが</rt></ruby>みが<span class='ex-highlight'>____</span>で、<ruby>飲<rt>の</rt></ruby>みやすい。",
            "cn": "这杯咖啡苦味柔和，很容易入口。",
            "options": ["まろやか", "しなやか", "あざやか", "さわやか"],
            "answer": "まろやか"
        }
    },
    {
        "word": "和やか",
        "word_html": "<ruby>和<rt>なご</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "和睦、融洽",
        "nuance": "1. 气氛、态度或人际关系等和谐，令人感到轻松愉快。",
        "examples": [
            { "jp": "<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>は<ruby>終<rt>しゅう</rt></ruby><ruby>始<rt>し</rt></ruby><span class='ex-highlight'><ruby>和<rt>なご</rt></ruby>やかな</span><ruby>雰<rt>ふん</rt></ruby><ruby>囲<rt>い</rt></ruby><ruby>気<rt>き</rt></ruby>で<ruby>進<rt>すす</rt></ruby>んだ。", "cn": "会议始终在融洽的气氛中进行。" }
        ],
        "practice": {
            "sentence": "お<ruby>互<rt>たが</rt></ruby>いに<span class='ex-highlight'>____</span>に<ruby>話<rt>はな</rt></ruby>し合えば、<ruby>解<rt>かい</rt></ruby><ruby>決<rt>けつ</rt></ruby>できるはずだ。",
            "cn": "如果彼此和气地交谈，应该能解决问题。",
            "options": ["なごやか", "あざやか", "さわやか", "まろやか"],
            "answer": "なごやか"
        }
    }
];

const DAY7_WORDS = [
{
        "word": "厳か",
        "word_html": "<ruby>厳<rt>おごそ</rt></ruby>か",
        "tone": "2",
        "pos": "な形",
        "mean": "庄严、肃穆",
        "nuance": "1. 仪式、气氛等庄重威严，令人起敬。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>厳<rt>おごそ</rt></ruby>かな</span><ruby>雰<rt>ふん</rt></ruby><ruby>囲<rt>い</rt></ruby><ruby>気<rt>き</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>結<rt>けっ</rt></ruby><ruby>婚<rt>こん</rt></ruby><ruby>式<rt>しき</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>われた。", "cn": "在庄严肃穆的气氛中举行了结婚典礼。" }
        ],
        "practice": {
            "sentence": "神社での<ruby>祭<rt>まつ</rt></ruby>りは<span class='ex-highlight'>____</span>な<ruby>雰<rt>ふん</rt></ruby><ruby>囲<rt>い</rt></ruby><ruby>気<rt>き</rt></ruby>の<ruby>中<rt>なか</rt></ruby><ruby>執<rt>と</rt></ruby>り<ruby>行<rt>おこな</rt></ruby>われた。",
            "cn": "神社的祭典在庄严的气氛中举行。",
            "options": ["おごそか", "おおらか", "やすらか", "あきらか"],
            "answer": "おごそか"
        }
    },
    {
        "word": "疎か",
        "word_html": "<ruby>疎<rt>おろそ</rt></ruby>か",
        "tone": "2",
        "pos": "な形",
        "mean": "疏忽、怠慢",
        "nuance": "1. 不重视，不认真对待应做的事，常与「にする」连用。",
        "examples": [
            { "jp": "<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>を<span class='ex-highlight'><ruby>疎<rt>おろそ</rt></ruby>か</span>にしては、<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>に<ruby>勝<rt>か</rt></ruby>つことはできない。", "cn": "疏忽了练习的话，是无法在比赛中获胜的。" }
        ],
        "practice": {
            "sentence": "<ruby>日<rt>にち</rt></ruby><ruby>頃<rt>ごう</rt></ruby>の<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>を<span class='ex-highlight'>____</span>にすると、<ruby>試<rt>し</rt></ruby><ruby>験<rt>けん</rt></ruby>の<ruby>時<rt>とき</rt></ruby>に<ruby>困<rt>こま</rt></ruby>る<ruby>場<rt>ば</rt></ruby><ruby>面<rt>めん</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>える。",
            "cn": "如果平时疏于学习，考试时就会遇到更多麻烦。",
            "options": ["おろそか", "おごそか", "おろか", "したたか"],
            "answer": "おろそか"
        }
    },
    {
        "word": "愚か",
        "word_html": "<ruby>愚<rt>おろ</rt></ruby>か",
        "tone": "1",
        "pos": "な形",
        "mean": "愚蠢、糊涂",
        "nuance": "1. 缺乏判断力，做出不合理或无意义的事情。",
        "examples": [
            { "jp": "<ruby>同<rt>おな</rt></ruby>じ<ruby>間<rt>ま</rt></ruby><ruby>違<rt>ちが</rt></ruby>いを<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>すのは<span class='ex-highlight'><ruby>愚<rt>おろ</rt></ruby>かな</span>ことだ。", "cn": "重复同样的错误是愚蠢的行为" }
        ],
        "practice": {
            "sentence": "あの<ruby>時<rt>とき</rt></ruby>の<ruby>決<rt>けつ</rt></ruby><ruby>断<rt>だん</rt></ruby>は<ruby>今<rt>いま</rt></ruby>から<ruby>思<rt>おも</rt></ruby>えば<span class='ex-highlight'>____</span>だったと<ruby>気<rt>き</rt></ruby>づいた。",
            "cn": "现在回想起来，才发现当时的决定很愚蠢。",
            "options": ["おろか", "おろそか", "したたか", "かすか"],
            "answer": "おろか"
        }
    },
    {
        "word": "強か",
        "word_html": "<ruby>強<rt>したた</rt></ruby>か",
        "tone": "2",
        "pos": "な形",
        "mean": "顽强、难对付；剧烈、严重",
        "nuance": "1. 身心强韧，很有心计或实力，不容易受他人摆布。\n2. 程度非常严重，如受重伤或大醉如泥。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'><ruby>強<rt>したた</rt></ruby>かな</span><ruby>女<rt>じょ</rt></ruby><ruby>性<rt>せい</rt></ruby>で、どんな<ruby>逆<rt>ぎゃっ</rt></ruby><ruby>境<rt>きょう</rt></ruby>も<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>えてきた。", "cn": "这款葡萄酒的特点是口感醇厚。" },
            { "jp": "<ruby>床<rt>ゆか</rt></ruby>に<ruby>腰<rt>こし</rt></ruby>を<span class='ex-highlight'><ruby>強<rt>したた</rt></ruby>か</span>に<ruby>打<rt>う</rt></ruby>ち<ruby>付<rt>つ</rt></ruby>けた。", "cn": "腰部重重地撞到了地板上。" }
        ],
        "practice": {
            "sentence": "けんかの<ruby>最<rt>さい</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>、<ruby>肩<rt>かた</rt></ruby>を<span class='ex-highlight'>____</span>に<ruby>打<rt>う</rt></ruby>って<ruby>腫<rt>は</rt></ruby>れてしまった。",
            "cn": "吵架时肩膀被狠狠撞了一下，肿了起来。",
            "options": ["したたか", "おろか", "かすか", "ひそか"],
            "answer": "したたか"
        }
    },
    {
        "word": "微か",
        "word_html": "<ruby>微<rt>かす</rt></ruby>か",
        "tone": "1",
        "pos": "な形",
        "mean": "微弱、模糊；微少、极少",
        "nuance": "1. 声音、光线、气味或记忆等非常细微，勉强能感觉到。\n2. 希望或可能性等非常渺茫。",
        "examples": [
            { "jp": "<ruby>遠<rt>とお</rt></ruby>くの<ruby>方<rt>ほう</rt></ruby>から<span class='ex-highlight'><ruby>微<rt>かす</rt></ruby>かな</span><ruby>物<rt>もの</rt></ruby><ruby>音<rt>おと</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえる。", "cn": "从远处传来微弱的响声。" },
            { "jp": "<span class='ex-highlight'><ruby>微<rt>かす</rt></ruby>かな</span><ruby>希<rt>き</rt></ruby><ruby>望<rt>ぼう</rt></ruby>を<ruby>抱<rt>いだ</rt></ruby>いて<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby>を<ruby>待<rt>ま</rt></ruby>つ。", "cn": "抱著一丝微弱的希望等待结果。" }
        ],
        "practice": {
            "sentence": "かつての<ruby>記<rt>き</rt></ruby><ruby>憶<rt>おく</rt></ruby>は<span class='ex-highlight'>____</span>ながらも、<ruby>心<rt>こころ</rt></ruby>の<ruby>奥<rt>おく</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>っている。",
            "cn": "过去的记忆虽然微弱，却仍留在心底。",
            "options": ["かすか", "ひそか", "おろか", "したたか"],
            "answer": "かすか"
        }
    },
    {
        "word": "密か",
        "word_html": "<ruby>密<rt>ひそ</rt></ruby>か",
        "tone": "1",
        "pos": "な形",
        "mean": "秘密、暗中",
        "nuance": "1. 不让别人知道，私下里进行某事。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>密<rt>ひそ</rt></ruby>かに</span><ruby>転<rt>てん</rt></ruby><ruby>職<rt>しょく</rt></ruby>の<ruby>準<rt>じゅん</rt></ruby><ruby>備<rt>び</rt></ruby>を<ruby>進<rt>すす</rt></ruby>めている。", "cn": "他正在暗中准备换工作。" }
        ],
        "practice": {
            "sentence": "<ruby>誰<rt>だれ</rt></ruby>にも<ruby>言<rt>い</rt></ruby>わず、<span class='ex-highlight'>____</span>な<ruby>思<rt>おも</rt></ruby>いを<ruby>抱<rt>いだ</rt></ruby>いていた。",
            "cn": "他一直没有告诉任何人，怀着秘密的心思。",
            "options": ["ひそか", "かすか", "おろか", "したたか"],
            "answer": "ひそか"
        }
    },
    {
        "word": "絶大",
        "word_html": "<ruby>絶<rt>ぜつ</rt></ruby><ruby>大<rt>だい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "极大、绝大",
        "nuance": "1. 程度达到很高的级别，多用于信用、人气、权力等抽象事物。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>国<rt>こく</rt></ruby><ruby>民<rt>みん</rt></ruby>から<span class='ex-highlight'><ruby>絶<rt>ぜつ</rt></ruby><ruby>大<rt>だい</rt></ruby>な</span><ruby>支<rt>し</rt></ruby><ruby>持<rt>じ</rt></ruby>を<ruby>得<rt>え</rt></ruby>ている。", "cn": "他获得了国民绝大的支持。" }
        ],
        "practice": {
            "sentence": "その<ruby>人<rt>ひと</rt></ruby>は<ruby>業<rt>ぎょう</rt></ruby><ruby>界<rt>かい</rt></ruby>で<span class='ex-highlight'>____</span>な<ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<ruby>持<rt>も</rt></ruby>っている。",
            "cn": "那个人在业界拥有极大的影响力。",
            "options": ["ぜつだい", "そうだい", "せいだい", "じんだい"],
            "answer": "ぜつだい"
        }
    },
    {
        "word": "壮大",
        "word_html": "<ruby>壮<rt>そう</rt></ruby><ruby>大<rt>だい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "宏大、雄伟",
        "nuance": "1. 规模宏伟、气势磅礴，多用于计划、梦想、景观等。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>壮<rt>そう</rt></ruby><ruby>大<rt>だい</rt></ruby>な</span><ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>を<ruby>立<rt>た</rt></ruby>てている。", "cn": "他正在制定一个宏大的计划。" }
        ],
        "practice": {
            "sentence": "<ruby>宇<rt>う</rt></ruby><ruby>宙<rt>ちゅう</rt></ruby>を<ruby>舞<rt>ま</rt></ruby>う<ruby>夢<rt>ゆめ</rt></ruby>は、<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>からの<span class='ex-highlight'>____</span>な<ruby>野<rt>や</rt></ruby><ruby>望<rt>ぼう</rt></ruby>だ。",
            "cn": "在宇宙中飞翔的梦想，是我从小就有的宏大野心。",
            "options": ["そうだい", "ぜつだい", "せいだい", "じんだい"],
            "answer": "そうだい"
        }
    },
    {
        "word": "盛大",
        "word_html": "<ruby>盛<rt>せい</rt></ruby><ruby>大<rt>だい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "盛大、隆重",
        "nuance": "1. 仪式、集会等规模巨大且气氛热烈。",
        "examples": [
            { "jp": "<ruby>創<rt>そう</rt></ruby><ruby>立<rt>りつ</rt></ruby><ruby>記<rt>き</rt></ruby><ruby>念<rt>ねん</rt></ruby>のパーティーが<span class='ex-highlight'><ruby>盛<rt>せい</rt></ruby><ruby>大<rt>だい</rt></ruby>に</span><ruby>行<rt>おこな</rt></ruby>われた。", "cn": "创立纪念派对隆重地举行了。" }
        ],
        "practice": {
            "sentence": "<ruby>卒<rt>そつ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>式<rt>しき</rt></ruby>は<ruby>保<rt>ほ</rt></ruby><ruby>護<rt>ご</rt></ruby><ruby>者<rt>しゃ</rt></ruby>も<ruby>交<rt>まじ</rt></ruby>えて<span class='ex-highlight'>____</span>に<ruby>開<rt>かい</rt></ruby><ruby>催<rt>さい</rt></ruby>された。",
            "cn": "毕业典礼连同家长一起盛大举行。",
            "options": ["せいだい", "そうだい", "じんだい", "ぜつだい"],
            "answer": "せいだい"
        }
    },
    {
        "word": "甚大",
        "word_html": "<ruby>甚<rt>じん</rt></ruby><ruby>大<rt>だい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "巨大、甚大",
        "nuance": "1. 程度非常严重，多用于描述损害、影响等负面事物。",
        "examples": [
            { "jp": "<ruby>台<rt>たい</rt></ruby><ruby>風<rt>ふう</rt></ruby>によって<span class='ex-highlight'><ruby>甚<rt>じん</rt></ruby><ruby>大<rt>だい</rt></ruby>な</span><ruby>被<rt>ひ</rt></ruby><ruby>害<rt>がい</rt></ruby>が<ruby>出<rt>で</rt></ruby>た。", "cn": "台风造成了巨大的灾害。" }
        ],
        "practice": {
            "sentence": "この<ruby>地<rt>ち</rt></ruby><ruby>震<rt>しん</rt></ruby>は<ruby>経<rt>けい</rt></ruby><ruby>済<rt>ざい</rt></ruby>に<span class='ex-highlight'>____</span>な<ruby>打<rt>だ</rt></ruby><ruby>撃<rt>げき</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えた。",
            "cn": "这次地震给经济造成了巨大打击。",
            "options": ["じんだい", "せいだい", "そうだい", "ぜつだい"],
            "answer": "じんだい"
        }
    },
    {
        "word": "強大",
        "word_html": "<ruby>強<rt>きょう</rt></ruby><ruby>大<rt>だい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "强大、强有力",
        "nuance": "1. 力量、势力、权力等非常强大，具有压倒性。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>強<rt>きょう</rt></ruby><ruby>大<rt>だい</rt></ruby>な</span><ruby>権<rt>けん</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<ruby>手<rt>て</rt></ruby>に<ruby>入<rt>い</rt></ruby>れる。", "cn": "掌握了强大的权力。" }
        ],
        "practice": {
            "sentence": "この<ruby>国<rt>くに</rt></ruby>は<ruby>軍<rt>ぐん</rt></ruby><ruby>事<rt>じ</rt></ruby>力を<span class='ex-highlight'>____</span>に<ruby>持<rt>も</rt></ruby>ち<ruby>上<rt>あ</rt></ruby>げた。",
            "cn": "这个国家大幅提升了军事实力。",
            "options": ["きょうだい", "ぜつだい", "そうだい", "ばくだい"],
            "answer": "きょうだい"
        }
    },
    {
        "word": "莫大",
        "word_html": "<ruby>莫<rt>ばく</rt></ruby><ruby>大<rt>だい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "莫大、巨大",
        "nuance": "1. 数量、金额等大得无法计算，多用于费用、利益、遗产等。",
        "examples": [
            { "jp": "<ruby>新<rt>あたら</rt></ruby>しい<ruby>工<rt>こう</rt></ruby><ruby>場<rt>じょう</rt></ruby>の<ruby>建<rt>けん</rt></ruby><ruby>設<rt>せつ</rt></ruby>には<span class='ex-highlight'><ruby>莫<rt>ばく</rt></ruby><ruby>大<rt>だい</rt></ruby>な</span><ruby>費<rt>ひ</rt></ruby><ruby>用<rt>よう</rt></ruby>がかかる。", "cn": "建设新工厂需要耗费巨额的费用。" }
        ],
        "practice": {
            "sentence": "この<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>を<ruby>実<rt>じつ</rt></ruby><ruby>現<rt>げん</rt></ruby>するには<span class='ex-highlight'>____</span>な<ruby>資<rt>し</rt></ruby><ruby>金<rt>きん</rt></ruby>が<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>だ。",
            "cn": "实现这个计划需要庞大的资金。",
            "options": ["ばくだい", "きょうだい", "ぼうだい", "いだい"],
            "answer": "ばくだい"
        }
    },
    {
        "word": "寛大",
        "word_html": "<ruby>寛<rt>かん</rt></ruby><ruby>大<rt>だい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "宽大、宽厚",
        "nuance": "1. 心胸开阔，不计较过失，对人严厉程度低。",
        "examples": [
            { "jp": "<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>の<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>を<span class='ex-highlight'><ruby>寛<rt>かん</rt></ruby><ruby>大<rt>だい</rt></ruby>な</span><ruby>心<rt>こころ</rt></ruby>で<ruby>許<rt>ゆる</rt></ruby>してくれた。", "cn": "老师用宽厚的心原谅了我的失败。" }
        ],
        "practice": {
            "sentence": "あの<ruby>人<rt>ひと</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>にでも<span class='ex-highlight'>____</span>に<ruby>接<rt>せっ</rt></ruby>する。",
            "cn": "那个人对谁都很宽容。",
            "options": ["かんだい", "ばくだい", "きょうだい", "いだい"],
            "answer": "かんだい"
        }
    },
    {
        "word": "偉大",
        "word_html": "<ruby>偉<rt>い</rt></ruby><ruby>大<rt>だい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "伟大",
        "nuance": "1. 成就、人格、贡献等非常卓越，令人崇敬。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>科<rt>か</rt></ruby><ruby>学<rt>がく</rt></ruby>の<ruby>歴<rt>れき</rt></ruby><ruby>史<rt>し</rt></ruby>に<ruby>名<rt>な</rt></ruby>を<ruby>残<rt>のこ</rt></ruby>す<span class='ex-highlight'><ruby>偉<rt>い</rt></ruby><ruby>大<rt>だい</rt></ruby>な</span><ruby>人<rt>じん</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>だ。", "cn": "他是名垂科学史的伟大人物。" }
        ],
        "practice": {
            "sentence": "かれは<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby>に<span class='ex-highlight'>____</span>な<ruby>業<rt>ぎょう</rt></ruby><ruby>績<rt>せき</rt></ruby>を<ruby>残<rt>のこ</rt></ruby>した。",
            "cn": "他在世界上留下了伟大的成就。",
            "options": ["いだい", "ばくだい", "ぼうだい", "きょうだい"],
            "answer": "いだい"
        }
    },
    {
        "word": "膨大",
        "word_html": "<ruby>膨<rt>ぼう</rt></ruby><ruby>大<rt>だい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "庞大、巨额",
        "nuance": "1. 数量、规模、资金等急剧增加或大得惊人。",
        "examples": [
            { "jp": "この<ruby>作<rt>さく</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>を<ruby>終<rt>お</rt></ruby>わらせるには<span class='ex-highlight'><ruby>膨<rt>ぼう</rt></ruby><ruby>大<rt>だい</rt></ruby>な</span><ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>が<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>だ。", "cn": "要完成这项工作需要庞大的时间。" }
        ],
        "practice": {
            "sentence": "データの<ruby>量<rt>りょう</rt></ruby>が<span class='ex-highlight'>____</span>で、<ruby>処<rt>しょ</rt></ruby><ruby>理<rt>り</rt></ruby>に<ruby>日<rt>にち</rt></ruby>を<ruby>要<rt>よう</rt></ruby>する。",
            "cn": "数据量庞大，处理需要好几天。",
            "options": ["ぼうだい", "ばくだい", "いだい", "ゆうだい"],
            "answer": "ぼうだい"
        }
    },
    {
        "word": "雄大",
        "word_html": "<ruby>雄<rt>ゆう</rt></ruby><ruby>大<rt>だい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "雄伟、壮阔",
        "nuance": "1. 自然景观等气势磅礴，规模宏大。",
        "examples": [
            { "jp": "<ruby>富<rt>ふ</rt></ruby><ruby>士<rt>じ</rt></ruby><ruby>山<rt>さん</rt></ruby>の<span class='ex-highlight'><ruby>雄<rt>ゆう</rt></ruby><ruby>大<rt>だい</rt></ruby>な</span><ruby>景<rt>けい</rt></ruby><ruby>色<rt>しき</rt></ruby>に<ruby>見<rt>み</rt></ruby>とれてしまった。", "cn": "我不禁对富士山那雄伟壮阔的景色看呆了。" }
        ],
        "practice": {
            "sentence": "その<ruby>山<rt>やま</rt></ruby>の<span class='ex-highlight'>____</span>な<ruby>姿<rt>すがた</rt></ruby>に<ruby>心<rt>こころ</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>われた。",
            "cn": "那座山雄伟的姿态让我深深着迷。",
            "options": ["ゆうだい", "こうだい", "ぼうだい", "いだい"],
            "answer": "ゆうだい"
        }
    },
    {
        "word": "広大",
        "word_html": "<ruby>広<rt>こう</rt></ruby><ruby>大<rt>だい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "广大、辽阔",
        "nuance": "1. 面积、土地、空间等非常宽广。",
        "examples": [
            { "jp": "この<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>は<span class='ex-highlight'><ruby>広<rt>こう</rt></ruby><ruby>大<rt>だい</rt></ruby>な</span>キャンパスを<ruby>有<rt>ゆう</rt></ruby>している。", "cn": "这所大学拥有辽阔的校园。" }
        ],
        "practice": {
            "sentence": "この<ruby>平<rt>へい</rt></ruby><ruby>野<rt>や</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>土<rt>と</rt></ruby><ruby>地<rt>ち</rt></ruby>を<ruby>誇<rt>ほこ</rt></ruby>っている。",
            "cn": "这片平原以辽阔的土地为傲。",
            "options": ["こうだい", "ゆうだい", "ぼうだい", "ばくだい"],
            "answer": "こうだい"
        }
    },
    {
        "word": "勇敢",
        "word_html": "<ruby>勇<rt>ゆう</rt></ruby><ruby>敢<rt>かん</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "勇敢、果敢",
        "nuance": "1. 面对危险或困难不退缩，有胆量。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>勇<rt>ゆう</rt></ruby><ruby>敢<rt>かん</rt></ruby>な</span><ruby>行<rt>こう</rt></ruby><ruby>動<rt>どう</rt></ruby>で、<ruby>火<rt>か</rt></ruby><ruby>事<rt>じ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>から<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>を<ruby>助<rt>たす</rt></ruby>け<ruby>出<rt>だ</rt></ruby>した。", "cn": "他以勇敢的行动从火灾中救出了孩子。" }
        ],
        "practice": {
            "sentence": "かれは<ruby>困<rt>こん</rt></ruby><ruby>難<rt>なん</rt></ruby>に<ruby>立<rt>た</rt></ruby>ち<ruby>向<rt>む</rt></ruby>かう<span class='ex-highlight'>____</span>な<ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>を<ruby>見<rt>み</rt></ruby>せた。",
            "cn": "他展现出勇敢面对困难的态度。",
            "options": ["ゆうかん", "きょうかん", "せいかん", "ばつかん"],
            "answer": "ゆうかん"
        }
    },
    {
        "word": "無邪気",
        "word_html": "<ruby>無<rt>む</rt></ruby><ruby>邪<rt>じゃ</rt></ruby><ruby>気<rt>き</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "纯真、天真",
        "nuance": "1. 像小孩子一样思想单纯，没有心机。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>無<rt>む</rt></ruby><ruby>邪<rt>じゃ</rt></ruby><ruby>気<rt>き</rt></ruby>に</span><ruby>遊<rt>あそ</rt></ruby>ぶ<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>たちの<ruby>姿<rt>すがた</rt></ruby>を<ruby>見<rt>み</rt></ruby>て、<ruby>心<rt>こころ</rt></ruby>が<ruby>癒<rt>いや</rt></ruby>やされた。", "cn": "看着天真无邪地玩耍的孩子们，心被治愈了。" }
        ],
        "practice": {
            "sentence": "かの<ruby>女<rt>じょ</rt></ruby>の<span class='ex-highlight'>____</span>な<ruby>笑<rt>え</rt></ruby><ruby>顔<rt>がお</rt></ruby>に<ruby>皆<rt>みんな</rt></ruby>が<ruby>癒<rt>いや</rt></ruby>された。",
            "cn": "她天真的笑容治愈了大家。",
            "options": ["むじゃき", "ゆうかん", "つうれつ", "ぜつだい"],
            "answer": "むじゃき"
        }
    },
    {
        "word": "痛烈",
        "word_html": "<ruby>痛<rt>つう</rt></ruby><ruby>烈<rt>れつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "痛烈、严厉",
        "nuance": "1. 攻击、批评等非常尖锐、深刻且有力。",
        "examples": [
            { "jp": "<ruby>若<rt>わか</rt></ruby><ruby>手<rt>て</rt></ruby><ruby>議<rt>ぎ</rt></ruby><ruby>員<rt>いん</rt></ruby>が<ruby>政<rt>せい</rt></ruby><ruby>府<rt>ふ</rt></ruby>の<ruby>対<rt>たい</rt></ruby><ruby>応<rt>おう</rt></ruby>を<span class='ex-highlight'><ruby>痛<rt>つう</rt></ruby><ruby>烈<rt>れつ</rt></ruby>に</span><ruby>批<rt>ひ</rt></ruby><ruby>判<rt>はん</rt></ruby>した。", "cn": "年轻议员对政府的应对进行了严厉的批评。" }
        ],
        "practice": {
            "sentence": "かれは<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>を<span class='ex-highlight'>____</span>に<ruby>反<rt>はん</rt></ruby><ruby>論<rt>ろん</rt></ruby>した。",
            "cn": "他猛烈反驳了对方的意见。",
            "options": ["つうれつ", "むじゃき", "ゆうかん", "ぜつだい"],
            "answer": "つうれつ"
        }
    }

];

const DAY8_WORDS = [
{
        "word": "温和",
        "word_html": "<ruby>温<rt>おん</rt></ruby><ruby>和<rt>わ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "温和、随和；温暖、宜人",
        "nuance": "1. 人的性格、态度等平和，不激进。\n2. 气候、自然条件等温暖且舒适。",
        "examples": [
            { "jp": "<ruby>担<rt>たん</rt></ruby><ruby>任<rt>にん</rt></ruby>の<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>は<span class='ex-highlight'><ruby>温<rt>おん</rt></ruby><ruby>和<rt>わ</rt></ruby>な</span><ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby>で、<ruby>生<rt>せい</rt></ruby><ruby>徒<rt>と</rt></ruby>から<ruby>信<rt>しん</rt></ruby><ruby>頼<rt>らい</rt></ruby>されている。", "cn": "班主任性格温和，深受学生信赖。" },
            { "jp": "この<ruby>地<rt>ち</rt></ruby><ruby>方<rt>ほう</rt></ruby>は<ruby>気<rt>き</rt></ruby><ruby>候<rt>こう</rt></ruby>が<span class='ex-highlight'><ruby>温<rt>おん</rt></ruby><ruby>和<rt>わ</rt></ruby></span>で、とても<ruby>過<rt>す</rt></ruby>ごしやすい。", "cn": "这个地方气候温暖，非常宜居。" }
        ],
        "practice": {
            "sentence": "この<ruby>町<rt>まち</rt></ruby>は<ruby>冬<rt>ふゆ</rt></ruby>でも<span class='ex-highlight'>____</span>で、<ruby>観<rt>かん</rt></ruby><ruby>光<rt>こう</rt></ruby><ruby>客<rt>きゃく</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い。",
            "cn": "这座城市冬天也很温和，游客很多。",
            "options": ["おんわ", "からっと", "さわやか", "きびしい"],
            "answer": "おんわ"
        }
    },
    {
        "word": "従順",
        "word_html": "<ruby>従<rt>じゅう</rt></ruby><ruby>順<rt>じゅん</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "顺从、听话",
        "nuance": "1. 顺从他人的教导或命令，不反抗。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>親<rt>おや</rt></ruby>の<ruby>言<rt>い</rt></ruby>うことに<span class='ex-highlight'><ruby>従<rt>じゅう</rt></ruby><ruby>順<rt>じゅん</rt></ruby>な</span><ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>だった。", "cn": "他曾是个对父母的话言听计从的孩子。" }
        ],
        "practice": {
            "sentence": "その<ruby>犬<rt>いぬ</rt></ruby>は<ruby>飼<rt>か</rt></ruby>い<ruby>主<rt>ぬし</rt></ruby>の<ruby>指<rt>し</rt></ruby><ruby>図<rt>じ</rt></ruby>に<span class='ex-highlight'>____</span>に<ruby>従<rt>したが</rt></ruby>う。",
            "cn": "那条狗顺从主人的指示。",
            "options": ["じゅうじゅん", "わがまま", "ふてぶてしい", "おっとり"],
            "answer": "じゅうじゅん"
        }
    },
    {
        "word": "厳正",
        "word_html": "<ruby>厳<rt>げん</rt></ruby><ruby>正<rt>せい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "严正、公正",
        "nuance": "1. 严格且公平，不徇私情。",
        "examples": [
            { "jp": "<ruby>不<rt>ふ</rt></ruby><ruby>正<rt>せい</rt></ruby>がないよう、<span class='ex-highlight'><ruby>厳<rt>げん</rt></ruby><ruby>正<rt>せい</rt></ruby>な</span><ruby>審<rt>しん</rt></ruby><ruby>査<rt>さ</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>われた。", "cn": "为了防止舞弊，进行了严正的审查。" }
        ],
        "practice": {
            "sentence": "この<ruby>試<rt>し</rt></ruby><ruby>験<rt>けん</rt></ruby>の<ruby>採<rt>さい</rt></ruby><ruby>点<rt>てん</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>行<rt>おこな</rt></ruby>われる。",
            "cn": "这场考试的阅卷会严格进行。",
            "options": ["げんせい", "おおらか", "なごやか", "ゆるゆる"],
            "answer": "げんせい"
        }
    },
    {
        "word": "忠実",
        "word_html": "<ruby>忠<rt>ちゅう</rt></ruby><ruby>実<rt>じつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "忠诚、尽职；忠实、准确",
        "nuance": "1. 忠于主人、职守或约定等。\n2. 不折不扣地按照原样或事实。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>長<rt>なが</rt></ruby><ruby>年<rt>ねん</rt></ruby>、<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>に<span class='ex-highlight'><ruby>忠<rt>ちゅう</rt></ruby><ruby>実<rt>じつ</rt></ruby>な</span><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>として<ruby>働<rt>はたら</rt></ruby>いてきた。", "cn": "他多年来作为一名对公司尽职尽责的员工在工作。" },
            { "jp": "この<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>は<ruby>原<rt>げん</rt></ruby><ruby>作<rt>さく</rt></ruby>に<span class='ex-highlight'><ruby>忠<rt>ちゅう</rt></ruby><ruby>実<rt>じつ</rt></ruby>に</span><ruby>作<rt>つく</rt></ruby>られている。", "cn": "这部电影是忠实于原著制作的。" }
        ],
        "practice": {
            "sentence": "この<ruby>翻<rt>ほん</rt></ruby><ruby>訳<rt>やく</rt></ruby>は<ruby>原<rt>げん</rt></ruby><ruby>文<rt>ぶん</rt></ruby>を<span class='ex-highlight'>____</span>に<ruby>再<rt>さい</rt></ruby><ruby>現<rt>げん</rt></ruby>している。",
            "cn": "这篇翻译忠实再现了原文。",
            "options": ["ちゅうじつ", "あやふや", "てきとう", "こっそり"],
            "answer": "ちゅうじつ"
        }
    },
    {
        "word": "均等",
        "word_html": "<ruby>均<rt>きん</rt></ruby><ruby>等<rt>とう</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "均等、平等",
        "nuance": "1. 在数量、比例或权利上没有差别。",
        "examples": [
            { "jp": "<ruby>利<rt>り</rt></ruby><ruby>益<rt>えき</rt></ruby>をメンバー<ruby>全<rt>ぜん</rt></ruby><ruby>員<rt>いん</rt></ruby>で<span class='ex-highlight'><ruby>均<rt>きん</rt></ruby><ruby>等<rt>とう</rt></ruby>に</span><ruby>分<rt>ぶん</rt></ruby><ruby>配<rt>ぱい</rt></ruby>する。", "cn": "将利润在所有成员之间进行均等分配。" }
        ],
        "practice": {
            "sentence": "この<ruby>蛋<rt>たまご</rt></ruby><ruby>糕<rt>ご</rt></ruby>を<span class='ex-highlight'>____</span>に<ruby>四<rt>よん</rt></ruby><ruby>等<rt>とう</rt></ruby><ruby>分<rt>ぶん</rt></ruby>してください。",
            "cn": "请把这块蛋糕平均分成四份。",
            "options": ["きんとう", "おおむね", "ざっくり", "すこし"],
            "answer": "きんとう"
        }
    },
    {
        "word": "手軽",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>軽<rt>がる</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "简便、轻便",
        "nuance": "1. 不费功夫，不花大钱或不需要复杂的程序就能轻易做到。",
        "examples": [
            { "jp": "キャンプでも<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>軽<rt>がる</rt></ruby>に</span><ruby>作<rt>つく</rt></ruby>れる<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>を<ruby>教<rt>おそ</rt></ruby>わった。", "cn": "学到了在露营时也能简便制作的料理。" }
        ],
        "practice": {
            "sentence": "この<ruby>機<rt>き</rt></ruby><ruby>能<rt>のう</rt></ruby>は<ruby>片<rt>かた</rt></ruby><ruby>手<rt>て</rt></ruby>で<span class='ex-highlight'>____</span>に<ruby>操<rt>そう</rt></ruby><ruby>作<rt>さ</rt></ruby>できる。",
            "cn": "这个功能可以单手轻松操作。",
            "options": ["てがる", "めんどう", "じゅうぶん", "はんぱ"],
            "answer": "てがる"
        }
    },
    {
        "word": "気軽",
        "word_html": "<ruby>気<rt>き</rt></ruby><ruby>軽<rt>がる</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "随意、轻松",
        "nuance": "1. 没有心理负担，不犹豫，不客气。",
        "examples": [
            { "jp": "<ruby>何<rt>なに</rt></ruby>か<ruby>困<rt>こま</rt></ruby>ったことがあれば、<span class='ex-highlight'><ruby>気<rt>き</rt></ruby><ruby>軽<rt>がる</rt></ruby>に</span><ruby>相<rt>そう</rt></ruby><ruby>談<rt>だん</rt></ruby>してください。", "cn": "如果有什么困难，请尽管随意找我商量。" }
        ],
        "practice": {
            "sentence": "お<ruby>酒<rt>さけ</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>飲<rt>の</rt></ruby>める<ruby>店<rt>みせ</rt></ruby>がいい。",
            "cn": "我想找一家能轻松喝酒的店。",
            "options": ["きがる", "きびしい", "おもい", "はんぱ"],
            "answer": "きがる"
        }
    },
    {
        "word": "軽快",
        "word_html": "<ruby>軽<rt>けい</rt></ruby><ruby>快<rt>かい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "轻快、轻盈；欢快、舒畅",
        "nuance": "1. 动作敏捷，没有沉重感。\n2. 节奏或气氛等轻松愉快。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'><ruby>軽<rt>けい</rt></ruby><ruby>快<rt>かい</rt></ruby>な</span>ステップでステージを<ruby>移<rt>い</rt></ruby><ruby>動<rt>どう</rt></ruby>した。", "cn": "她迈着轻盈的步伐在舞台上移动。" },
            { "jp": "ラジオから<span class='ex-highlight'><ruby>軽<rt>けい</rt></ruby><ruby>快<rt>かい</rt></ruby>な</span><ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby>が<ruby>流<rt>なが</rt></ruby>れてきた。", "cn": "收音机里传来了欢快的音乐。" }
        ],
        "practice": {
            "sentence": "この<ruby>靴<rt>くつ</rt></ruby>は<ruby>歩<rt>ある</rt></ruby>き<ruby>心地<rt>ごこち</rt></ruby>が<span class='ex-highlight'>____</span>だ。",
            "cn": "这双鞋走起来很轻快。",
            "options": ["けいかい", "おもたい", "かたい", "にぶい"],
            "answer": "けいかい"
        }
    },
    {
        "word": "気まま",
        "word_html": "<ruby>気<rt>き</rt></ruby>まま",
        "tone": "0",
        "pos": "な形",
        "mean": "任性、随意",
        "nuance": "1. 不顾忌他人或周围环境，只按自己的心意行事。",
        "examples": [
            { "jp": "たまには<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>で<span class='ex-highlight'><ruby>気<rt>き</rt></ruby>ままな</span><ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<ruby>過<rt>す</rt></ruby>ごしたい。", "cn": "偶尔也想一个人度过一段随心所欲的时光。" }
        ],
        "practice": {
            "sentence": "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>過<rt>す</rt></ruby>ごしたい。",
            "cn": "休息日我想随心所欲地度过。",
            "options": ["きまま", "きちんと", "せっかち", "おだやか"],
            "answer": "きまま"
        }
    },
    {
        "word": "贅沢",
        "word_html": "<ruby>贅<rt>ぜい</rt></ruby><ruby>沢<rt>たく</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "奢侈、华贵；挑剔、奢求",
        "nuance": "1. 超过了必要程度，花费大量金钱或心血。\n2. 对现状不满足，要求过高。",
        "examples": [
            { "jp": "<ruby>皇<rt>こう</rt></ruby><ruby>帝<rt>てい</rt></ruby>は、<ruby>極<rt>きわ</rt></ruby>めて<span class='ex-highlight'>ぜいたくな</span><ruby>宮<rt>きゅう</rt></ruby><ruby>殿<rt>でん</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる。", "cn": "皇帝住在极具奢华的宫殿之中。" },
            { "jp": "<ruby>今<rt>いま</rt></ruby>の<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>に<ruby>文<rt>もん</rt></ruby><ruby>句<rt>く</rt></ruby>を<ruby>言<rt>い</rt></ruby>うなんて<span class='ex-highlight'><ruby>贅<rt>ぜい</rt></ruby><ruby>沢<rt>たく</rt></ruby></span>だ。", "cn": "对现在的生活发牢骚，真是太不知足了。" }
        ],
        "practice": {
            "sentence": "あの<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>店<rt>てん</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>空<rt>くう</rt></ruby><ruby>間<rt>かん</rt></ruby>で<ruby>評<rt>ひょう</rt></ruby><ruby>判<rt>ばん</rt></ruby>だ。",
            "cn": "那家餐厅以奢华的空间而闻名。",
            "options": ["ぜいたく", "さっぱり", "こっそり", "ぼんやり"],
            "answer": "ぜいたく"
        }
    },
    {
        "word": "簡素",
        "word_html": "<ruby>簡<rt>かん</rt></ruby><ruby>素<rt>そ</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "简单、简朴",
        "nuance": "1. 去除了多余的装饰，结构或程序简单。",
        "examples": [
            { "jp": "<ruby>結<rt>けっ</rt></ruby><ruby>婚<rt>こん</rt></ruby><ruby>式<rt>しき</rt></ruby>は<ruby>親<rt>しん</rt></ruby><ruby>戚<rt>せき</rt></ruby>だけで<span class='ex-highlight'><ruby>簡<rt>かん</rt></ruby><ruby>素<rt>そ</rt></ruby>に</span><ruby>行<rt>おこな</rt></ruby>った。", "cn": "婚礼只请了亲戚，简单地举行了。" }
        ],
        "practice": {
            "sentence": "この<ruby>家<rt>いえ</rt></ruby>は<ruby>外<rt>がい</rt></ruby><ruby>観<rt>かん</rt></ruby>が<span class='ex-highlight'>____</span>で<ruby>落<rt>らく</rt></ruby><ruby>着<rt>ちゃく</rt></ruby>ける。",
            "cn": "这栋房子外观简朴，让人很放松。",
            "options": ["かんそ", "はで", "ごてごて", "ぎんみゃく"],
            "answer": "かんそ"
        }
    },
    {
        "word": "素朴",
        "word_html": "<ruby>素<rt>そ</rt></ruby><ruby>朴<rt>ぼく</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "淳朴、朴实；单纯、简单",
        "nuance": "1. 不加修饰，保持自然本色的性格或风格。\n2. 思考方式或味道等不复杂，很直接。",
        "examples": [
            { "jp": "この<ruby>村<rt>むら</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>たちはみんな<span class='ex-highlight'><ruby>素<rt>そ</rt></ruby><ruby>朴<rt>ぼく</rt></ruby></span>で<ruby>親<rt>しん</rt></ruby><ruby>切<rt>せつ</rt></ruby>だ。", "cn": "这个村子里的人们都很淳朴、热情。" },
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>らしい<span class='ex-highlight'><ruby>素<rt>そ</rt></ruby><ruby>朴<rt>ぼく</rt></ruby>な</span><ruby>疑<rt>ぎ</rt></ruby><ruby>問<rt>もん</rt></ruby>を<ruby>投<rt>な</rt></ruby>げかける。", "cn": "提出了一个充满童心的纯真疑问。" }
        ],
        "practice": {
            "sentence": "この<ruby>家<rt>いえ</rt></ruby>は<ruby>造<rt>ぞう</rt></ruby><ruby>り<rt>り</rt></ruby>が<span class='ex-highlight'>____</span>で、<ruby>飾<rt>かざ</rt></ruby>り<ruby>気<rt>け</rt></ruby>がない。",
            "cn": "这栋房子结构朴素，没有多余装饰。",
            "options": ["そぼく", "ぜいたく", "ゆうかん", "げんせい"],
            "answer": "そぼく"
        }
    },
    {
        "word": "簡潔",
        "word_html": "<ruby>簡<rt>かん</rt></ruby><ruby>潔<rt>けつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "简洁、简明",
        "nuance": "1. 文字或言谈不啰唆，要领明确。",
        "examples": [
            { "jp": "<ruby>報<rt>ほう</rt></ruby><ruby>告<rt>こく</rt></ruby><ruby>書<rt>しょ</rt></ruby>は<span class='ex-highlight'><ruby>簡<rt>かん</rt></ruby><ruby>潔<rt>けつ</rt></ruby>に</span>まとめる<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>がある。", "cn": "报告书有必要简洁地进行总结。" }
        ],
        "practice": {
            "sentence": "この<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>はとても<span class='ex-highlight'>____</span>で、すぐに<ruby>要<rt>よう</rt></ruby><ruby>点<rt>てん</rt></ruby>がわかった。",
            "cn": "这个说明非常简洁，一下子就明白了重点。",
            "options": ["かんけつ", "ぼうだい", "きょうだい", "むじゃき"],
            "answer": "かんけつ"
        }
    },
    {
        "word": "質素",
        "word_html": "<ruby>質<rt>しっ</rt></ruby><ruby>素<rt>そ</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "俭朴、朴素",
        "nuance": "1. 生活水平或饮食、衣着等不过分消费，不华丽。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>大<rt>おお</rt></ruby><ruby>金<rt>かね</rt></ruby><ruby>持<rt>も</rt></ruby>ちだが、<span class='ex-highlight'><ruby>質<rt>しっ</rt></ruby><ruby>素<rt>そ</rt></ruby>な</span><ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>っている。", "cn": "他虽然是个大富豪，却过着俭朴的生活。" }
        ],
        "practice": {
            "sentence": "この<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>は<ruby>味<rt>あじ</rt></ruby>つけが<span class='ex-highlight'>____</ruby>で、<ruby>体<rt>からだ</rt></ruby>に<ruby>優<rt>やさ</rt></ruby>しい。",
            "cn": "这道菜调味朴素，对身体很温和。",
            "options": ["しっそ", "からい", "しおからい", "あまい"],
            "answer": "しっそ"
        }
    },
    {
        "word": "上品",
        "word_html": "<ruby>上<rt>じょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "优雅、高尚",
        "nuance": "1. 品位、言谈或举止让人感到高雅，有教养。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>はいつも<span class='ex-highlight'><ruby>上<rt>じょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>な</span><ruby>服<rt>ふく</rt></ruby>を<ruby>着<rt>き</rt></ruby>ている。", "cn": "她总是穿着优雅的衣服。" }
        ],
        "practice": {
            "sentence": "この<ruby>花<rt>はな</rt></ruby>の<ruby>香<rt>かお</rt></ruby>りは<span class='ex-highlight'>____</span>で、<ruby>人<rt>ひと</rt></ruby>を<ruby>落<rt>らく</rt></ruby><ruby>着<rt>ちゃく</rt></ruby>かせる。",
            "cn": "这朵花的香气很高雅，让人平静下来。",
            "options": ["じょうひん", "げんせい", "つうれつ", "ぼうだい"],
            "answer": "じょうひん"
        }
    },
    {
        "word": "地味",
        "word_html": "<ruby>地<rt>じ</rt></ruby><ruby>味<rt>み</rt></ruby>",
        "tone": "2",
        "pos": "な形",
        "mean": "朴素、低调；不起眼、踏实",
        "nuance": "1. 颜色、设计等不抢眼，不鲜艳。\n2. 人的性格或工作内容不张扬，很稳重。",
        "examples": [
            { "jp": "そのスーツは<ruby>彼<rt>かれ</rt></ruby>には<ruby>少<rt>すこ</rt></ruby>し<span class='ex-highlight'><ruby>地<rt>じ</rt></ruby><ruby>味<rt>み</rt></ruby></span>すぎる。", "cn": "这件衣服对他来说有点过于土了。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>地<rt>じ</rt></ruby><ruby>味<rt>み</rt></ruby>な</span><ruby>努<rt>ど</rt></ruby><ruby>力<rt>りょく</rt></ruby>をコツコツと<ruby>積<rt>つ</rt></ruby>み<ruby>重<rt>かさ</rt></ruby>ねた。", "cn": "他一步一个脚印地努力着。" }
        ],
        "practice": {
            "sentence": "この<ruby>色<rt>いろ</rt></ruby>は<ruby>派<rt>は</rt></ruby><ruby>手<rt>で</rt></ruby>すぎず、<span class='ex-highlight'>____</span>で<ruby>使<rt>つか</rt></ruby>いやすい。",
            "cn": "这个颜色不太鲜艳，低调又好用。",
            "options": ["じみ", "げんせい", "ゆうかん", "ぜいたく"],
            "answer": "じみ"
        }
    },
    {
        "word": "円滑",
        "word_html": "<ruby>円<rt>えん</rt></ruby><ruby>滑<rt>かつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "圆滑、顺利",
        "nuance": "1. 事物进展顺畅，没有阻碍。",
        "examples": [
            { "jp": "<ruby>交<rt>こう</rt></ruby><ruby>渉<rt>しょう</rt></ruby>を<span class='ex-highlight'><ruby>円<rt>えん</rt></ruby><ruby>滑<rt>かつ</rt></ruby>に</span><ruby>進<rt>すす</rt></ruby>めるための<ruby>努<rt>ど</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<ruby>惜<rt>お</rt></ruby>しまない。", "cn": "为了让交涉融洽地进行，不遗余力地付出努力。" }
        ],
        "practice": {
            "sentence": "この<ruby>団<rt>だん</rt></ruby><ruby>体<rt>たい</rt></ruby>の<ruby>運<rt>うん</rt></ruby><ruby>営<rt>えい</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>行<rt>おこな</rt></ruby>われている。",
            "cn": "这个团体运作得很顺畅。",
            "options": ["えんかつ", "ぞんざい", "げんせい", "むじゃき"],
            "answer": "えんかつ"
        }
    },
    {
        "word": "歴然",
        "word_html": "<ruby>歴<rt>れき</rt></ruby><ruby>然<rt>ぜん</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "历然、明显",
        "nuance": "1. 事实、差异等非常明确，不容置疑。",
        "examples": [
            { "jp": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>の<ruby>実<rt>じっ</rt></ruby><ruby>力<rt>りょく</rt></ruby>の<ruby>差<rt>さ</rt></ruby>は<span class='ex-highlight'><ruby>歴<rt>れき</rt></ruby><ruby>然<rt>ぜん</rt></ruby></span>としている。", "cn": "两人的实力差距是显而易见的。" }
        ],
        "practice": {
            "sentence": "この<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby>は<span class='ex-highlight'>____</span>で、だれもが<ruby>認<rt>みと</rt></ruby>める。",
            "cn": "这个结果很明显，谁都会承认。",
            "options": ["れきぜん", "ぼうだい", "きょうだい", "ぜいたく"],
            "answer": "れきぜん"
        }
    },
    {
        "word": "整然",
        "word_html": "<ruby>整<rt>せい</rt></ruby><ruby>然<rt>ぜん</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "整齐、有序；井然、有条理",
        "nuance": "1. 物理上的排列非常整齐。\n2. 逻辑、论证或结构等条理清晰。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>らはいすを<ruby>集<rt>あつ</rt></ruby>めて<span class='ex-highlight'><ruby>整<rt>せい</rt></ruby><ruby>然<rt>ぜん</rt></ruby>と</span><ruby>列<rt>れつ</rt></ruby>に<ruby>並<rt>なら</rt></ruby>べた。", "cn": "他们把椅子集中整齐地排了队。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>を<span class='ex-highlight'><ruby>整<rt>せい</rt></ruby><ruby>然<rt>ぜん</rt></ruby>と</span><ruby>述<rt>の</rt></ruby>べた。", "cn": "她条理清晰地陈述了自己的意见。" }
        ],
        "practice": {
            "sentence": "この<ruby>資<rt>し</rt></ruby><ruby>料<rt>りょう</rt></ruby>は<span class='ex-highlight'>____</span>と<ruby>並<rt>なら</rt></ruby>べられている。",
            "cn": "这些资料排列得整整齐齐。",
            "options": ["せいぜん", "ばくぜん", "れきぜん", "えんぜん"],
            "answer": "せいぜん"
        }
    },
    {
        "word": "漠然",
        "word_html": "<ruby>漠<rt>ばく</rt></ruby><ruby>然<rt>ぜん</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "漠然、模糊",
        "nuance": "1. 由于不具体或不明确而感到含糊不清。",
        "examples": [
            { "jp": "<ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<span class='ex-highlight'><ruby>漠<rt>ばく</rt></ruby><ruby>然<rt>ぜん</rt></ruby>とした</span><ruby>不<rt>ふ</rt></ruby><ruby>安<rt>あん</rt></ruby>を<ruby>抱<rt>いだ</rt></ruby>いている。", "cn": "对未来抱着一种漠然的焦虑感。" }
        ],
        "practice": {
            "sentence": "この<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>不<rt>ふ</rt></ruby><ruby>安<rt>あん</rt></ruby>は<span class='ex-highlight'>____</span>としている。",
            "cn": "我对这个计划感到一种说不清的不安。",
            "options": ["ばくぜん", "せいぜん", "れきぜん", "えんぜん"],
            "answer": "ばくぜん"
        }
    }
];

const DAY9_WORDS = [
{
        "word": "鮮烈",
        "word_html": "<ruby>鮮<rt>せん</rt></ruby><ruby>烈<rt>れつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "鲜烈、鲜明",
        "nuance": "1. 印象或冲击力极其深刻，难以忘怀。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>のデビュー<ruby>戦<rt>せん</rt></ruby>は、<ruby>観<rt>かん</rt></ruby><ruby>客<rt>きゃく</rt></ruby>に<span class='ex-highlight'><ruby>鮮<rt>せん</rt></ruby><ruby>烈<rt>れつ</rt></ruby>な</span><ruby>印<rt>いん</rt></ruby><ruby>象<rt>しょう</rt></ruby>を与えた。", "cn": "他的出道战给观众留下了极其深刻的印象。" }
        ],
        "practice": {
            "sentence": "あの<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>の<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>のシーンは<ruby>観<rt>かん</rt></ruby><ruby>客<rt>きゃく</rt></ruby>に<span class='ex-highlight'>____</span>な<ruby>感<rt>かん</rt></ruby><ruby>動<rt>どう</rt></ruby>を<ruby>与<rt>あた</rt></ruby>えた。",
            "cn": "那部电影的最后一幕给观众留下了鲜明的感动。",
            "options": ["せんれつ", "あんい", "かんそ", "そぼく"],
            "answer": "せんれつ"
        }
    },
    {
        "word": "克明",
        "word_html": "<ruby>克<rt>こく</rt></ruby><ruby>明<rt>めい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "详细、细致",
        "nuance": "1. 记录、描写等非常详尽，不遗漏任何细节。",
        "examples": [
            { "jp": "その<ruby>日<rt>にっ</rt></ruby><ruby>記<rt>き</rt></ruby>には、<ruby>当<rt>とう</rt></ruby><ruby>時<rt>じ</rt></ruby>の<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>の<ruby>様<rt>よう</rt></ruby><ruby>子<rt>す</rt></ruby>が<span class='ex-highlight'><ruby>克<rt>こく</rt></ruby><ruby>明<rt>めい</rt></ruby>に</span><ruby>記<rt>しる</rt></ruby>されている。", "cn": "那本日记事本里详细地记录了当时的生活状况。" }
        ],
        "practice": {
            "sentence": "この<ruby>報<rt>ほう</rt></ruby><ruby>告<rt>こく</rt></ruby><ruby>書<rt>しょ</rt></ruby>は<ruby>当<rt>とう</rt></ruby><ruby>時<rt>じ</rt></ruby>の<ruby>状<rt>じょう</rt></ruby><ruby>況<rt>きょう</rt></ruby>を<span class='ex-highlight'>____</span>に<ruby>再<rt>さい</rt></ruby><ruby>現<rt>げん</rt></ruby>している。",
            "cn": "这份报告详细再现了当时的情况。",
            "options": ["こくめい", "ぞんざい", "きがる", "げんせい"],
            "answer": "こくめい"
        }
    },
    {
        "word": "丹念",
        "word_html": "<ruby>丹<rt>たん</rt></ruby><ruby>念<rt>ねん</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "细心、精心",
        "nuance": "1. 投入心思，非常仔细地进行某事。",
        "examples": [
            { "jp": "<ruby>職<rt>しょく</rt></ruby><ruby>人<rt>にん</rt></ruby>が<span class='ex-highlight'><ruby>丹<rt>たん</rt></ruby><ruby>念<rt>ねん</rt></ruby>に</span><ruby>磨<rt>みが</rt></ruby>き<ruby>上<rt>あ</rt></ruby>げた<ruby>製<rt>せい</rt></ruby><ruby>品<rt>ひん</rt></ruby>は、<ruby>素<rt>す</rt></ruby><ruby>晴<rt>ば</rt></ruby>らしい<ruby>輝<rt>かがや</rt></ruby>きを<ruby>放<rt>はな</rt></ruby>っている。", "cn": "匠人精心打磨出的产品散发着迷人的光泽。" }
        ],
        "practice": {
            "sentence": "この<ruby>家<rt>いえ</rt></ruby>は<ruby>職<rt>しょく</rt></ruby><ruby>人<rt>にん</rt></ruby>が<span class='ex-highlight'>____</span>に<ruby>作<rt>つく</rt></ruby>り<ruby>上<rt>あ</rt></ruby>げた<ruby>住<rt>すみ</rt></ruby><ruby>宅<rt>たく</rt></ruby>だ。",
            "cn": "这栋房子是工匠精心建造的住宅。",
            "options": ["たんねん", "げんせい", "ゆうかん", "せいぜん"],
            "answer": "たんねん"
        }
    },
    {
        "word": "切実",
        "word_html": "<ruby>切<rt>せつ</rt></ruby><ruby>実<rt>じつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "深有感触、刻骨铭心；迫切、严重",
        "nuance": "1. 内心深受触动，身心体会到某事。\n2. 没有余裕，处于紧迫的状态。",
        "examples": [
            { "jp": "<ruby>病<rt>びょう</rt></ruby><ruby>気<rt>き</rt></ruby>を<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>して、<ruby>健<rt>けん</rt></ruby><ruby>康<rt>こう</rt></ruby>のありがたさを<span class='ex-highlight'><ruby>切<rt>せつ</rt></ruby><ruby>実<rt>じつ</rt></ruby>に</span><ruby>感<rt>かん</rt></ruby>じた。", "cn": "经历过生病后，切实地感受到了健康的宝贵。" },
            { "jp": "<ruby>深<rt>しん</rt></ruby><ruby>刻<rt>こく</rt></ruby>な<ruby>人<rt>ひと</rt></ruby><ruby>手<rt>で</rt></ruby><ruby>不<rt>ぶ</rt></ruby><ruby>足<rt>そく</rt></ruby>は、<ruby>多<rt>おお</rt></ruby>くの<ruby>中<rt>ちゅう</rt></ruby><ruby>小<rt>しょう</rt></ruby><ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>にとって<span class='ex-highlight'><ruby>切<rt>せつ</rt></ruby><ruby>実<rt>じつ</rt></ruby>な</span><ruby>悩<rt>なや</rt></ruby>みだ。", "cn": "严重的人手不足是很多中小企业面临的迫切烦恼。" }
        ],
        "practice": {
            "sentence": "この<ruby>国<rt>くに</rt></ruby>の<ruby>若<rt>わか</rt></ruby>ものにとって<ruby>就<rt>しゅう</rt></ruby><ruby>職<rt>しょく</rt></ruby>の<ruby>困<rt>こん</rt></ruby><ruby>難<rt>なん</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>だ。",
            "cn": "对这个国家的年轻人来说，就业困难是切实的问题。",
            "options": ["せつじつ", "げんせい", "きがる", "てがる"],
            "answer": "せつじつ"
        }
    },
    {
        "word": "堅実",
        "word_html": "<ruby>堅<rt>けん</rt></ruby><ruby>実<rt>じつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "稳健、可靠",
        "nuance": "1. 想法或做法踏实，没有风险，不容易失败。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>派<rt>は</rt></ruby><ruby>手<rt>で</rt></ruby>さはないが、とても<span class='ex-highlight'><ruby>堅<rt>けん</rt></ruby><ruby>実<rt>じつ</rt></ruby>な</span><ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>をする<ruby>人<rt>ひと</rt></ruby>だ。", "cn": "他虽然不张扬，但做事非常踏实可靠。" }
        ],
        "practice": {
            "sentence": "この<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>経<rt>けい</rt></ruby><ruby>営<rt>えい</rt></ruby>で<ruby>定<rt>てい</rt></ruby><ruby>評<rt>ひょう</rt></ruby>がある。",
            "cn": "这家公司以稳健经营而有口碑。",
            "options": ["けんじつ", "せんれつ", "げんせい", "きがる"],
            "answer": "けんじつ"
        }
    },
    {
        "word": "有望",
        "word_html": "<ruby>有<rt>ゆう</rt></ruby><ruby>望<rt>ぼう</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "有希望、大有可为",
        "nuance": "1. 很有可能成功，未来值得期待。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>を<span class='ex-highlight'><ruby>有<rt>ゆう</rt></ruby><ruby>望<rt>ぼう</rt></ruby><ruby>視<rt>し</rt></ruby>されて</span>いる<ruby>若<rt>わか</rt></ruby><ruby>手<rt>て</rt></ruby><ruby>研<rt>けん</rt></ruby><ruby>究<rt>きゅう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>だ。", "cn": "他是被看好的、前途无量的年轻研究员。" }
        ],
        "practice": {
            "sentence": "この<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>は<ruby>来<rt>らい</rt></ruby><ruby>年<rt>ねん</rt></ruby>のオリンピックで<span class='ex-highlight'>____</ruby>とされている。",
            "cn": "这位选手被认为很有希望参加明年的奥运会。",
            "options": ["ゆうぼう", "ぞんざい", "げんせい", "てがる"],
            "answer": "ゆうぼう"
        }
    },
    {
        "word": "ルーズ",
        "word_html": "ルーズ",
        "tone": "1",
        "pos": "な形",
        "mean": "散漫、邋遢",
        "nuance": "1. 对时间、金钱或规则等不讲究，很随便。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>に<span class='ex-highlight'>ルーズ</span>で、<ruby>約<rt>やく</rt></ruby><ruby>束<rt>そく</rt></ruby>の<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<ruby>守<rt>まも</rt></ruby>ったことがない。", "cn": "他时间观念散漫，从来没遵守过约定时间。" }
        ],
        "practice": {
            "sentence": "あの<ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>は<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>の<ruby>進<rt>しん</rt></ruby><ruby>行<rt>こう</rt></ruby>が<span class='ex-highlight'>____</span>で<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>だ。",
            "cn": "那名员工工作推进很散漫，成了问题。",
            "options": ["ルーズ", "きちんと", "たんねん", "せいぜん"],
            "answer": "ルーズ"
        }
    },
    {
        "word": "ぞんざい",
        "word_html": "ぞんざい",
        "tone": "3",
        "pos": "な形",
        "mean": "草率、马虎；粗鲁、无礼",
        "nuance": "1. 对待事情的态度极其随意，不认真。\n2. 言谈举止缺乏敬意，让人感到不快。",
        "examples": [
            { "jp": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<span class='ex-highlight'>ぞんざいに<ruby>扱<rt>あつか</rt></ruby>う</span>と、<ruby>後<rt>あと</rt></ruby>で<ruby>大<rt>おお</rt></ruby>きなミスにつながる。", "cn": "对待工作马马虎虎的话，之后会酿成大错。" },
            { "jp": "<ruby>目<rt>め</rt></ruby><ruby>上<rt>うえ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して、そんな<span class='ex-highlight'>ぞんざいな<ruby>口<rt>くち</rt></ruby>の<ruby>利<rt>き</rt></ruby>き<ruby>方<rt>かた</rt></ruby></span>をしてはいけない。", "cn": "对长辈不该用那样粗鲁的口气说话。" }
        ],
        "practice": {
            "sentence": "この<ruby>書<rt>しょ</rt></ruby><ruby>類<rt>るい</rt></ruby>の<ruby>作<rt>さく</rt></ruby><ruby>成<rt>せい</rt></ruby>は<span class='ex-highlight'>____</span>でミスが<ruby>多<rt>おお</rt></ruby>い。",
            "cn": "这份文件做得很粗率，错误很多。",
            "options": ["ぞんざい", "たんねん", "けんじつ", "きがる"],
            "answer": "ぞんざい"
        }
    },
    {
        "word": "雑",
        "word_html": "<ruby>雑<rt>ざつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "草率、粗心；粗糙、劣质",
        "nuance": "1. 做事的态度不认真，粗枝大叶。\n2. 物品的制作或材质等不精良。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>はいつも<span class='ex-highlight'><ruby>雑<rt>ざつ</rt></ruby></span>で、ミスが<ruby>多<rt>おお</rt></ruby>い。", "cn": "他的工作总是很草率，错误很多。" },
            { "jp": "この<ruby>服<rt>ふく</rt></ruby>は<ruby>縫<rt>ぬ</rt></ruby>い<ruby>方<rt>かた</rt></ruby>が<span class='ex-highlight'><ruby>雑<rt>ざつ</rt></ruby></span>ですぐにほつれてしまう。", "cn": "这件衣服缝制得很粗糙，马上就脱线了。" }
        ],
        "practice": {
            "sentence": "この<ruby>作<rt>さく</rt></ruby><ruby>品<rt>ひん</rt></ruby>は<ruby>作<rt>つく</rt></ruby>りが<span class='ex-highlight'>____</span>で<ruby>安<rt>やす</rt></ruby>っぽい。",
            "cn": "这件作品做工粗糙，看起来很廉价。",
            "options": ["ざつ", "たんねん", "けんじつ", "ゆうぼう"],
            "answer": "ざつ"
        }
    },
    {
        "word": "几帳面",
        "word_html": "<ruby>几<rt>き</rt></ruby><ruby>帳<rt>ちょう</rt></ruby><ruby>面<rt>めん</rt></ruby>",
        "tone": "2",
        "pos": "な形",
        "mean": "一丝不苟、严谨",
        "nuance": "1. 做事规矩，连细微处也不马虎。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>几<rt>き</rt></ruby><ruby>帳<rt>ちょう</rt></ruby><ruby>面<rt>めん</rt></ruby>な</span><ruby>彼<rt>かれ</rt></ruby>は、<ruby>毎<rt>まい</rt></ruby><ruby>月<rt>つき</rt></ruby>の<ruby>家<rt>か</rt></ruby><ruby>計<rt>けい</rt></ruby><ruby>簿<rt>ぼ</rt></ruby>を1<ruby>円<rt>えん</rt></ruby><ruby>単<rt>たん</rt></ruby><ruby>位<rt>い</rt></ruby>まで<ruby>正<rt>せい</rt></ruby><ruby>確<rt>かく</rt></ruby>に<ruby>記<rt>き</rt></ruby><ruby>録<rt>ろく</rt></ruby>している。", "cn": "严谨的他每月的账本甚至会精确到1日元。" }
        ],
        "practice": {
            "sentence": "この<ruby>銀<rt>ぎん</rt></ruby><ruby>行<rt>こう</rt></ruby><ruby>員<rt>いん</rt></ruby>は<span class='ex-highlight'>____</span>で<ruby>計<rt>けい</rt></ruby><ruby>算<rt>さん</rt></ruby>を<ruby>間<rt>ま</rt></ruby><ruby>違<rt>ちが</rt></ruby>えない。",
            "cn": "这位银行职员做事一丝不苟，不会算错账。",
            "options": ["きちょうめん", "ぞんざい", "げんせい", "きがる"],
            "answer": "きちょうめん"
        }
    },
    {
        "word": "けち",
        "word_html": "けち",
        "tone": "1",
        "pos": "な形",
        "mean": "吝啬、小气；卑鄙",
        "nuance": "1. 舍不得花钱或给东西。\n2. 心胸狭隘，纠结于微不足道的小事。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>大<rt>おお</rt></ruby><ruby>金<rt>かね</rt></ruby><ruby>持<rt>も</rt></ruby>ちなのに、とても<span class='ex-highlight'>けちだ</span>。", "cn": "他虽然是个大富豪，却非常小气。" },
            { "jp": "そんな<span class='ex-highlight'>けちな</span>ことは<ruby>言<rt>い</rt></ruby>わずに、もっと<ruby>広<rt>ひろ</rt></ruby>い<ruby>心<rt>こころ</rt></ruby>で<ruby>考<rt>かんが</rt></ruby>えなさい。", "cn": "别说那种小家子气的话，心胸放宽一点去思考吧。" }
        ],
        "practice": {
            "sentence": "あの<ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は<ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>の<ruby>賞<rt>しょう</rt></ruby><ruby>与<rt>よ</rt></ruby>に<span class='ex-highlight'>____</span>で、<ruby>評<rt>ひょう</rt></ruby><ruby>判<rt>ばん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い。",
            "cn": "那位社长对员工奖金很吝啬，名声不好。",
            "options": ["けち", "こうかん", "ゆうかん", "おおぎょう"],
            "answer": "けち"
        }
    },
    {
        "word": "直向き",
        "word_html": "<ruby>直<rt>ひた</rt></ruby><ruby>向<rt>む</rt></ruby>き",
        "tone": "0",
        "pos": "な形",
        "mean": "一心一意、专心致志",
        "nuance": "1. 朝着一个目标努力，不顾其他。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<span class='ex-highlight'><ruby>直<rt>ひた</rt></ruby><ruby>向<rt>む</rt></ruby>きな</span><ruby>努<rt>ど</rt></ruby><ruby>力<rt>りょく</rt></ruby>が<ruby>実<rt>み</rt></ruby>を<ruby>結<rt>むす</rt></ruby>び、ついに<ruby>優<rt>ゆう</rt></ruby><ruby>勝<rt>しょう</rt></ruby>した。", "cn": "她那一心一意的努力终于有了回报，最终获得了冠军。" }
        ],
        "practice": {
            "sentence": "あの<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>に<ruby>打<rt>う</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>んでいる。",
            "cn": "那名选手一心一意地投入训练。",
            "options": ["ひたむき", "きがる", "ルーズ", "ぞんざい"],
            "answer": "ひたむき"
        }
    },
    {
        "word": "只管",
        "word_html": "<ruby>只管<rt>ひたすら</rt></ruby>",
        "tone": "0",
        "pos": "な形（副）",
        "mean": "一心一意、只顾",
        "nuance": "1. 专心致志地做某事，不顾及其他事物。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>只管<rt>ひたすら</rt></ruby></span><ruby>学<rt>がく</rt></ruby><ruby>問<rt>もん</rt></ruby>に<ruby>打<rt>う</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>んでいる。", "cn": "他一心一意地投入到学问中。" }
        ],
        "practice": {
            "sentence": "あの<ruby>作<rt>さっ</rt></ruby><ruby>家<rt>か</rt></ruby>は<span class='ex-highlight'>____</span>シナリオ<ruby>作<rt>づく</rt></ruby>りに<ruby>没<rt>ぼっ</rt></ruby><ruby>頭<rt>とう</rt></ruby>している。",
            "cn": "那位作家一味埋头写剧本。",
            "options": ["ひたすら", "たんき", "いちず", "ものずき"],
            "answer": "ひたすら"
        }
    },
    {
        "word": "頑固",
        "word_html": "<ruby>頑<rt>がん</rt></ruby><ruby>固<rt>こ</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "顽固、固执；顽固、难除",
        "nuance": "1. 性格倔强，不容易改变主张。\n2. 疾病、污垢等持久且难以根治或去除。",
        "examples": [
            { "jp": "<ruby>祖<rt>そ</rt></ruby><ruby>父<rt>ふ</rt></ruby>は<span class='ex-highlight'><ruby>頑<rt>がん</rt></ruby><ruby>固<rt>こ</rt></ruby>な</span><ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby>で、<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>言<rt>い</rt></ruby>い<ruby>出<rt>だ</rt></ruby>したら<ruby>聞<rt>き</rt></ruby>かない。", "cn": "祖父性格顽固，一旦说了就不听劝。" },
            { "jp": "この<span class='ex-highlight'><ruby>頑<rt>がん</rt></ruby><ruby>固<rt>こ</rt></ruby>な</span><ruby>汚<rt>よご</rt></ruby>れは、<ruby>普<rt>ふ</rt></ruby><ruby>通<rt>つう</rt></ruby>の<ruby>洗<rt>せん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>では<ruby>落<rt>お</rt></ruby>ちない。", "cn": "这种顽固的污垢，用普通洗涤剂是洗不掉的。" }
        ],
        "practice": {
            "sentence": "あの<ruby>部<rt>ぶ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>を<ruby>曲<rt>ま</rt></ruby>げない<span class='ex-highlight'>____</span>さで<ruby>知<rt>し</rt></ruby>られる。",
            "cn": "那位部长以固执己见、不肯改变想法而出名。",
            "options": ["がんこ", "かたくな", "ひたむき", "いちず"],
            "answer": "がんこ"
        }
    },
    {
        "word": "頑な",
        "word_html": "<ruby>頑<rt>かたく</rt></ruby>な",
        "tone": "0",
        "pos": "な形",
        "mean": "顽固、固执",
        "nuance": "1. 由于心态封闭而拒绝改变主意或接受建议，带贬义。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>非<rt>ひ</rt></ruby>を<ruby>認<rt>みと</rt></ruby>めようとせず、<span class='ex-highlight'><ruby>頑<rt>かたく</rt></ruby>なな</span><ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>続<rt>つづ</rt></ruby>けた。", "cn": "他不愿承认自己的错误，始终采取顽固的态度。" }
        ],
        "practice": {
            "sentence": "あの<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>は<ruby>謝<rt>しゃ</rt></ruby><ruby>罪<rt>ざい</rt></ruby>を<ruby>拒<rt>きょ</rt></ruby>み<ruby>続<rt>つづ</rt></ruby>ける<span class='ex-highlight'>____</span>さを<ruby>見<rt>み</rt></ruby>せている。",
            "cn": "那名选手顽固地拒绝道歉。",
            "options": ["かたくな", "がんこ", "ひたすら", "たんき"],
            "answer": "かたくな"
        }
    },
    {
        "word": "短気",
        "word_html": "<ruby>短<rt>たん</rt></ruby><ruby>気<rt>き</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "急躁、易怒",
        "nuance": "1. 缺乏耐心，动不动就发脾气。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>短<rt>たん</rt></ruby><ruby>気<rt>き</rt></ruby>な</span><ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby>で、すぐに<ruby>怒<rt>おこ</rt></ruby>り<ruby>出<rt>だ</rt></ruby>す。", "cn": "他性格急躁，动不动就发火。" }
        ],
        "practice": {
            "sentence": "あの<ruby>上<rt>うえ</rt></ruby><ruby>司<rt>し</rt></ruby>は<ruby>些<rt>さ</rt></ruby><ruby>細<rt>さい</rt></ruby>なことで<ruby>怒<rt>おこ</rt></ruby>る<span class='ex-highlight'>____</span>さが<ruby>欠<rt>けつ</rt></ruby><ruby>点<rt>てん</rt></ruby>だ。",
            "cn": "那位上司动不动就生气，急脾气是他的缺点。",
            "options": ["たんき", "けち", "ものずき", "あんい"],
            "answer": "たんき"
        }
    },
    {
        "word": "一途",
        "word_html": "<ruby>一<rt>いち</rt></ruby><ruby>途<rt>ず</rt></ruby>",
        "tone": "2",
        "pos": "な形",
        "mean": "一心一意、专心致志",
        "nuance": "1. 全心全意地对待某人或某事，不顾其他。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<ruby>彼<rt>かれ</rt></ruby>をひたすら<span class='ex-highlight'><ruby>一<rt>いち</rt></ruby><ruby>途<rt>ず</rt></ruby>に</span><ruby>愛<rt>あい</rt></ruby>している。", "cn": "她全心全意地爱着他。" }
        ],
        "practice": {
            "sentence": "あの<ruby>研<rt>けん</rt></ruby><ruby>究<rt>きゅう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>真<rt>しん</rt></ruby><ruby>理<rt>り</rt></ruby>を<ruby>追<rt>お</rt></ruby>い<ruby>求<rt>もと</rt></ruby>めている。",
            "cn": "那位研究者一心追求真理。",
            "options": ["いちず", "ひたすら", "がんこ", "たんき"],
            "answer": "いちず"
        }
    },
    {
        "word": "物好き",
        "word_html": "<ruby>物<rt>もの</rt></ruby><ruby>好<rt>ず</rt></ruby>き",
        "tone": "0",
        "pos": "な形（名）",
        "mean": "好奇心强、嗜好古怪",
        "nuance": "1. 喜欢一般人觉得奇怪或不感兴趣的事物。",
        "examples": [
            { "jp": "こんな<ruby>雨<rt>あめ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>に<ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>るなんて、よっぽどの<span class='ex-highlight'><ruby>物<rt>もの</rt></ruby><ruby>好<rt>ず</rt></ruby>き</span>だ。", "cn": "这种雨天还去爬山，真是个怪人。" }
        ],
        "practice": {
            "sentence": "あの<ruby>人<rt>ひと</rt></ruby>は<ruby>真<rt>ま</rt></ruby><ruby>夜<rt>よ</rt></ruby><ruby>中<rt>なか</rt></ruby>に<ruby>廃<rt>はい</rt></ruby><ruby>墟<rt>きょ</rt></ruby>を<ruby>探<rt>さが</rt></ruby>すなんて<span class='ex-highlight'>____</span>だ。",
            "cn": "那个人半夜去探索废墟，真是个怪人。",
            "options": ["ものずき", "いちず", "あんたい", "あんい"],
            "answer": "ものずき"
        }
    },
    {
        "word": "安泰",
        "word_html": "<ruby>安<rt>あん</rt></ruby><ruby>泰<rt>たい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "安稳、太平",
        "nuance": "1. 处于没有危险且安定的状态，多指国家、地位或生活。",
        "examples": [
            { "jp": "<ruby>政<rt>せい</rt></ruby><ruby>権<rt>けん</rt></ruby>が<ruby>交<rt>こう</rt></ruby><ruby>替<rt>たい</rt></ruby>しても、<ruby>国<rt>こく</rt></ruby><ruby>民<rt>みん</rt></ruby>の<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>が<span class='ex-highlight'><ruby>安<rt>あん</rt></ruby><ruby>泰<rt>たい</rt></ruby></span>であるとは<ruby>限<rt>かぎ</rt></ruby>らない。", "cn": "即便政权更迭，国民的生活也未必能高枕无忧。" }
        ],
        "practice": {
            "sentence": "この<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>は<ruby>経<rt>けい</rt></ruby><ruby>済<rt>ざい</rt></ruby><ruby>不<rt>ふ</rt></ruby><ruby>況<rt>きょう</rt></ruby>でも<span class='ex-highlight'>____</span>な<ruby>地<rt>ち</rt></ruby><ruby>位<rt>い</rt></ruby>を<ruby>保<rt>たも</rt></ruby>っている。",
            "cn": "这家公司即使在经济不景气中也保持着安稳地位。",
            "options": ["あんたい", "あんい", "かんそ", "げんせい"],
            "answer": "あんたい"
        }
    },
    {
        "word": "安易",
        "word_html": "<ruby>安<rt>あん</rt></ruby><ruby>易<rt>い</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "容易、简单；轻率、马虎",
        "nuance": "1. 不花心思，把事情想得太简单。\n2. 态度随便，不认真负责。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>安<rt>あん</rt></ruby><ruby>易<rt>い</rt></ruby>な</span><ruby>考<rt>かんが</rt></ruby>えで<ruby>投<rt>とう</rt></ruby><ruby>資<rt>し</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めると、<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>する<ruby>可<rt>か</rt></ruby><ruby>能<rt>のう</rt></ruby><ruby>性<rt>せい</rt></ruby>が<ruby>高<rt>たか</rt></ruby>い。", "cn": "抱着简单的想法开始投资的话，失败的可能性很高。" },
            { "jp": "プロとして、そんな<span class='ex-highlight'><ruby>安<rt>あん</rt></ruby><ruby>易<rt>い</rt></ruby>な</span><ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>はできない。", "cn": "作为专业人士，不能做那么马虎的工作。" }
        ],
        "practice": {
            "sentence": "この<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>考<rt>かんが</rt></ruby>えで<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>した。",
            "cn": "这个计划因为想法太草率而失败了。",
            "options": ["あんい", "あんたい", "かんそ", "げんせい"],
            "answer": "あんい"
        }
    }
];

const DAY10_WORDS = [
{
        "word": "安静",
        "word_html": "<ruby>安<rt>あん</rt></ruby><ruby>静<rt>せい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "安静、静养",
        "nuance": "1. 为了养病或恢复体力而保持静止不动。",
        "examples": [
            { "jp": "<ruby>医<rt>い</rt></ruby><ruby>者<rt>しゃ</rt></ruby>に<ruby>一<rt>いっ</rt></ruby><ruby>週<rt>しゅう</rt></ruby><ruby>間<rt>かん</rt></ruby>の<span class='ex-highlight'><ruby>絶<rt>ぜっ</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>安<rt>あん</rt></ruby><ruby>静<rt>せい</rt></ruby></span>を<ruby>言<rt>い</rt></ruby>い<ruby>渡<rt>わた</rt></ruby>された。", "cn": "医生嘱咐我要绝对静养一周。" }
        ],
        "practice": {
            "sentence": "この<ruby>病<rt>びょう</rt></ruby><ruby>院<rt>いん</rt></ruby>では<ruby>術<rt>じゅつ</rt></ruby><ruby>後<rt>ご</rt></ruby>の<ruby>患<rt>かん</rt></ruby><ruby>者<rt>じゃ</rt></ruby>に<span class='ex-highlight'>____</span>を<ruby>保<rt>たも</rt></ruby>つように<ruby>指<rt>し</rt></ruby><ruby>導<rt>どう</rt></ruby>している。",
            "cn": "这家医院指导术后患者保持静养。",
            "options": ["あんせい", "あんたい", "あんい", "あんぜん"],
            "answer": "あんせい"
        }
    },
    {
        "word": "蔑ろ",
        "word_html": "<ruby>蔑<rt>ないがし</rt></ruby>ろ",
        "tone": "0",
        "pos": "な形",
        "mean": "忽视、轻视",
        "nuance": "1. 不重视，把人或事物不当回事，常搭配「にする」。",
        "examples": [
            { "jp": "<ruby>親<rt>おや</rt></ruby>の<ruby>忠<rt>ちゅう</rt></ruby><ruby>告<rt>こく</rt></ruby>を<span class='ex-highlight'><ruby>蔑<rt>ないがし</rt></ruby>ろにして</span>はいけない。", "cn": "不能无视父母的忠告。" }
        ],
        "practice": {
            "sentence": "あの<ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>は<ruby>ルール</ruby>を<span class='ex-highlight'>____</span>にして<ruby>怒<rt>おこ</rt></ruby>られた。",
            "cn": "那名员工无视规则，被批评了。",
            "options": ["ないがしろ", "なみだ", "ながし", "なげすて"],
            "answer": "ないがしろ"
        }
    },
    {
        "word": "巧み",
        "word_html": "<ruby>巧<rt>たく</rt></ruby>み",
        "tone": "0",
        "pos": "な形",
        "mean": "巧妙、高明",
        "nuance": "1. 技术、手腕、言辞等非常熟练且巧妙。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>巧<rt>たく</rt></ruby>みな<ruby>話<rt>わ</rt></ruby><ruby>術<rt>じゅつ</rt></ruby></span>で<ruby>人<rt>ひと</rt></ruby><ruby>々<rt>びと</rt></ruby>を<ruby>魅<rt>み</rt></ruby><ruby>了<rt>りょう</rt></ruby>した。", "cn": "他用巧妙的话术吸引了人们。" }
        ],
        "practice": {
            "sentence": "この<ruby>企<rt>き</rt></ruby><ruby>画<rt>かく</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>手<rt>て</rt></ruby><ruby>法<rt>ほう</rt></ruby>で<ruby>顧<rt>こ</rt></ruby><ruby>客<rt>きゃく</rt></ruby>を<ruby>獲<rt>かく</rt></ruby><ruby>得<rt>とく</rt></ruby>した。",
            "cn": "这个企划用巧妙的手法赢得了顾客。",
            "options": ["たくみ", "ぞんざい", "あんい", "げんせい"],
            "answer": "たくみ"
        }
    },
    {
        "word": "顕著",
        "word_html": "<ruby>顕<rt>けん</rt></ruby><ruby>著<rt>ちょ</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "显著、明显",
        "nuance": "1. 变化、事实或倾向等非常清晰，一眼就能看出来。",
        "examples": [
            { "jp": "<ruby>新<rt>あたら</rt></ruby>しい<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んでから、<span class='ex-highlight'><ruby>顕<rt>けん</rt></ruby><ruby>著<rt>ちょ</rt></ruby>な<ruby>効<rt>こう</rt></ruby><ruby>果<rt>か</rt></ruby></span>が<ruby>現<rt>あらわ</rt></ruby>れた。", "cn": "吃了新药之后，出现了显著的效果。" }
        ],
        "practice": {
            "sentence": "この<ruby>新<rt>しん</rt></ruby><ruby>薬<rt>やく</rt></ruby>は<ruby>効<rt>こう</rt></ruby><ruby>果<rt>か</rt></ruby>が<span class='ex-highlight'>____</span>に<ruby>現<rt>あらわ</rt></ruby>れた。",
            "cn": "这种新药效果显著。",
            "options": ["けんちょ", "げんせい", "あんい", "ぞんざい"],
            "answer": "けんちょ"
        }
    },
    {
        "word": "緊密",
        "word_html": "<ruby>緊<rt>きん</rt></ruby><ruby>密<rt>みつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "紧密、密切",
        "nuance": "1. 双方的关系、合作或联系非常近，不可分割。",
        "examples": [
            { "jp": "<ruby>両<rt>りょう</rt></ruby><ruby>国<rt>こく</rt></ruby>は<span class='ex-highlight'><ruby>緊<rt>きん</rt></ruby><ruby>密<rt>みつ</rt></ruby>な<ruby>連<rt>れん</rt></ruby><ruby>携<rt>けい</rt></ruby></span>を<ruby>保<rt>たも</rt></ruby>っている。", "cn": "两国保持着紧密的合作关系。" }
        ],
        "practice": {
            "sentence": "この<ruby>部<rt>ぶ</rt></ruby><ruby>門<rt>もん</rt></ruby>は<ruby>他<rt>た</rt></ruby><ruby>社<rt>しゃ</rt></ruby>と<span class='ex-highlight'>____</span>な<ruby>連<rt>れん</rt></ruby><ruby>携<rt>けい</rt></ruby>を<ruby>取<rt>と</rt></ruby>っている。",
            "cn": "这个部门与其他公司保持着紧密合作。",
            "options": ["きんみつ", "けんちょ", "たくみ", "ぞんざい"],
            "answer": "きんみつ"
        }
    },
    {
        "word": "綿密",
        "word_html": "<ruby>綿<rt>めん</rt></ruby><ruby>密<rt>みつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "周密、详尽",
        "nuance": "1. 计划、调查、探讨等极度细致，毫无破绽或遗漏",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>綿<rt>めん</rt></ruby><ruby>密<rt>みつ</rt></ruby>な</span><ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>を<ruby>立<rt>た</rt></ruby>ててから<ruby>実<rt>じっ</rt></ruby><ruby>行<rt>こう</rt></ruby>に<ruby>移<rt>うつ</rt></ruby>す。", "cn": "制定了详尽的计划后再付诸行动。" }
        ],
        "practice": {
            "sentence": "この<ruby>調<rt>ちょう</rt></ruby><ruby>査<rt>さ</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>行<rt>おこな</rt></ruby>われた。",
            "cn": "这项调查进行得很周密。",
            "options": ["めんみつ", "きんみつ", "ぞんざい", "あんい"],
            "answer": "めんみつ"
        }
    },
    {
        "word": "過密",
        "word_html": "<ruby>過<rt>か</rt></ruby><ruby>密<rt>みつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "过密、过于集中",
        "nuance": "1. 人口、日程安排或建筑物等过于密集、没有空隙",
        "examples": [
            { "jp": "<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>は<span class='ex-highlight'><ruby>過<rt>か</rt></ruby><ruby>密<rt>みつ</rt></ruby>な</span>スケジュールで<ruby>疲<rt>ひ</rt></ruby><ruby>労<rt>ろう</rt></ruby>が<ruby>溜<rt>た</rt></ruby>まっている。", "cn": "最近日程安排得太满，积累了疲劳。" }
        ],
        "practice": {
            "sentence": "この<ruby>町<rt>まち</rt></ruby>は<ruby>人<rt>じん</rt></ruby><ruby>口<rt>こう</rt></ruby>が<span class='ex-highlight'>____</span>で<ruby>住<rt>す</rt></ruby>みにくい。",
            "cn": "这座城市人口过密，住起来不舒服。",
            "options": ["かみつ", "めんみつ", "ぞんざい", "あんい"],
            "answer": "かみつ"
        }
    },
    {
        "word": "過疎",
        "word_html": "<ruby>過<rt>か</rt></ruby><ruby>疎<rt>そ</rt></ruby>",
        "tone": "1",
        "pos": "な形（名）",
        "mean": "过疏、人口稀少",
        "nuance": "1. 人口过度流失，导致地区社会机能难以维持的状态",
        "examples": [
            { "jp": "この<ruby>村<rt>むら</rt></ruby>は<span class='ex-highlight'><ruby>過<rt>か</rt></ruby><ruby>疎<rt>そ</rt></ruby><ruby>化<rt>か</rt></ruby></span>が<ruby>進<rt>すす</rt></ruby>んでいる。", "cn": "这个村子的过疏化正在加剧。" }
        ],
        "practice": {
            "sentence": "この<ruby>地<rt>ち</rt></ruby><ruby>域<rt>いき</rt></ruby>は<span class='ex-highlight'>____</span>が<ruby>進<rt>すす</rt></ruby>み<ruby>店<rt>みせ</rt></ruby>が<ruby>減<rt>へ</rt></ruby>っている。",
            "cn": "这个地区人口过疏，店铺也在减少。",
            "options": ["かそ", "かみつ", "めんみつ", "きんみつ"],
            "answer": "かそ"
        }
    },
    {
        "word": "濃密",
        "word_html": "<ruby>濃<rt>のう</rt></ruby><ruby>密<rt>みつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "浓烈、浓厚；紧凑、丰富",
        "nuance": "1. 气味、色彩或感情等非常深厚、强烈\n2. 时间、内容等安排得很满且质量很高，让人感觉充实",
        "examples": [
            { "jp": "<ruby>花<rt>か</rt></ruby><ruby>壇<rt>だん</rt></ruby>から<span class='ex-highlight'><ruby>濃<rt>のう</rt></ruby><ruby>密<rt>みつ</rt></ruby>な</span><ruby>花<rt>はな</rt></ruby>の<ruby>香<rt>かお</rt></ruby>りが<ruby>漂<rt>ただよ</rt></ruby>ってくる。", "cn": "花坛里飘来浓郁的花香。" },
            { "jp": "<ruby>留<rt>りゅう</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>の<span class='ex-highlight'><ruby>濃<rt>のう</rt></ruby><ruby>密<rt>みつ</rt></ruby>な</span><ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>が<ruby>今<rt>いま</rt></ruby>の<ruby>私<rt>わたし</rt></ruby>を<ruby>支<rt>ささ</rt></ruby>えている。", "cn": "留学期间丰富充实的经验支撑着现在的我。" }
        ],
        "practice": {
            "sentence": "この<ruby>香<rt>こう</rt></ruby><ruby>水<rt>すい</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>香<rt>かお</rt></ruby>りが<ruby>特<rt>とく</rt></ruby><ruby>徴<rt>ちょう</rt></ruby>だ。",
            "cn": "这款香水以浓郁的香气为特点。",
            "options": ["のうみつ", "かそ", "かみつ", "めんみつ"],
            "answer": "のうみつ"
        }
    },
    {
        "word": "精密",
        "word_html": "<ruby>精<rt>せい</rt></ruby><ruby>密<rt>みつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "精密、精确",
        "nuance": "1. 机械的构造、检查的结果等细致且准确度极高，没有误差",
        "examples": [
            { "jp": "<ruby>時<rt>と</rt></ruby><ruby>計<rt>けい</rt></ruby>の<ruby>内<rt>ない</rt></ruby><ruby>部<rt>ぶ</rt></ruby>には<span class='ex-highlight'><ruby>精<rt>せい</rt></ruby><ruby>密<rt>みつ</rt></ruby>な</span><ruby>部<rt>ぶ</rt></ruby><ruby>品<rt>ひん</rt></ruby>が<ruby>使<rt>つか</rt></ruby>われている。", "cn": "钟表内部使用了精密的零件。" }
        ],
        "practice": {
            "sentence": "この<ruby>機<rt>き</rt></ruby><ruby>械<rt>かい</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>設<rt>せっ</rt></ruby><ruby>計<rt>けい</rt></ruby>が<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>だ。",
            "cn": "这台机器需要精密的设计。",
            "options": ["せいみつ", "のうみつ", "かそ", "きんみつ"],
            "answer": "せいみつ"
        }
    },
    {
        "word": "閑静",
        "word_html": "<ruby>閑<rt>かん</rt></ruby><ruby>静<rt>せい</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "幽静、恬静",
        "nuance": "1. 环境、住宅区等安静且没有喧闹。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>閑<rt>かん</rt></ruby><ruby>静<rt>せい</rt></ruby>な</span><ruby>住<rt>じゅう</rt></ruby><ruby>宅<rt>たく</rt></ruby><ruby>街<rt>がい</rt></ruby>に<ruby>家<rt>いえ</rt></ruby>を<ruby>建<rt>た</rt></ruby>てた。", "cn": "在幽静的住宅区里建了房子。" }
        ],
        "practice": {
            "sentence": "この<ruby>公<rt>こう</rt></ruby><ruby>園<rt>えん</rt></ruby>は<ruby>市<rt>し</rt></ruby><ruby>中<rt>ちゅう</rt></ruby><ruby>心<rt>しん</rt></ruby>に<ruby>近<rt>ちか</rt></ruby>いのに、とても<span class='ex-highlight'>____</span>で<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>ける。",
            "cn": "这个公园虽然靠近市中心，却非常安静，让人放松。",
            "options": ["かんせい", "にぎやか", "さわがしい", "やかましい"],
            "answer": "かんせい"
        }
    },
    {
        "word": "長閑",
        "word_html": "<ruby>長閑<rt>のどか</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "晴朗、宁静；悠闲、悠然",
        "nuance": "1. 天气晴好，让人感到宁静舒适。\n2. 内心或生活状态悠闲自在，没有烦恼。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>長閑<rt>のどか</rt></ruby>な</span><ruby>春<rt>はる</rt></ruby>の<ruby>陽<rt>よう</rt></ruby><ruby>気<rt>き</rt></ruby>に<ruby>誘<rt>さそ</rt></ruby>われて<ruby>散<rt>さん</rt></ruby><ruby>歩<rt>ぽ</rt></ruby>に<ruby>出<rt>で</rt></ruby>かけた。", "cn": "被晴朗宁静的春光吸引，出门散步了。" },
            { "jp": "<ruby>田<rt>いな</rt></ruby><ruby>舎<rt>か</rt></ruby>で<span class='ex-highlight'><ruby>長閑<rt>のどか</rt></ruby>な</span><ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>る。", "cn": "在乡下过着悠闲的生活。" }
        ],
        "practice": {
            "sentence": "今日は<ruby>空<rt>そら</rt></ruby>も<ruby>青<rt>あお</rt></ruby>く、<ruby>風<rt>かぜ</rt></ruby>も<ruby>穏<rt>おだ</rt></ruby>やかで、とても<span class='ex-highlight'>____</span>な<ruby>一<rt>いっ</rt></ruby><ruby>日<rt>にち</rt></ruby>だ。",
            "cn": "今天天空湛蓝、风也温和，是非常悠闲的一天。",
            "options": ["のどか", "あらい", "はげしい", "きびしい"],
            "answer": "のどか"
        }
    },
    {
        "word": "裏腹",
        "word_html": "<ruby>裏<rt>うら</rt></ruby><ruby>腹<rt>はら</rt></ruby>",
        "tone": "0",
        "pos": "な形（名）",
        "mean": "相反、违背",
        "nuance": "1. 事物或想法之间互相矛盾，背道而驰。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>と<ruby>行<rt>こう</rt></ruby><ruby>動<rt>どう</rt></ruby>は<span class='ex-highlight'><ruby>裏<rt>うら</rt></ruby><ruby>腹<rt>はら</rt></ruby></span>だ。", "cn": "他的言行完全相反。" }
        ],
        "practice": {
            "sentence": "あの<ruby>人<rt>ひと</rt></ruby>は<ruby>表<rt>おもて</rt></ruby>では<ruby>優<rt>やさ</rt></ruby>しいが、<ruby>実<rt>じっ</rt></ruby><ruby>際<rt>さい</rt></ruby>は<ruby>意<rt>い</rt></ruby><ruby>地<rt>じ</rt></ruby>わるで、まさに<span class='ex-highlight'>____</span>だ。",
            "cn": "那个人表面温柔，实际却很刻薄，真是表里相反。",
            "options": ["うらはら", "にたもの", "そっくり", "ちょうど"],
            "answer": "うらはら"
        }
    },
    {
        "word": "いい加減",
        "word_html": "いい<ruby>加<rt>か</rt></ruby><ruby>減<rt>げん</rt></ruby>",
        "tone": "0",
        "pos": "な形（副）",
        "mean": "适度、恰到好处；敷衍、马虎；够了、适可而止",
        "nuance": "1. 温度、时间或程度等刚刚好，不过分。\n2. 做事不负责任，态度随便。\n3. 表示忍耐到了极限，多作副词使用。",
        "examples": [
            { "jp": "お<ruby>風<rt>ふ</rt></ruby><ruby>呂<rt>ろ</rt></ruby>のお<ruby>湯<rt>ゆ</rt></ruby>が<span class='ex-highlight'>いい<ruby>加<rt>か</rt></ruby><ruby>減<rt>げん</rt></ruby>の</span><ruby>温<rt>おん</rt></ruby><ruby>度<rt>ど</rt></ruby>になった。", "cn": "洗澡水变成了恰到好处的温度。" },
            { "jp": "<span class='ex-highlight'>いい<ruby>加<rt>か</rt></ruby><ruby>減<rt>げん</rt></ruby>な</span><ruby>返<rt>へん</rt></ruby><ruby>事<rt>じ</rt></ruby>をしてはいけない。", "cn": "不能做敷衍的回答。" },
            { "jp": "<ruby>冗<rt>じょう</rt></ruby><ruby>談<rt>だん</rt></ruby>も<span class='ex-highlight'>いい<ruby>加<rt>か</rt></ruby><ruby>減<rt>げん</rt></ruby>に</span>しろ！", "cn": "开玩笑也该适可而止了！" }
        ],
        "practice": {
            "sentence": "この<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>終<rt>お</rt></ruby>わらせないで、<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>まで<ruby>真<rt>しん</rt></ruby><ruby>剣<rt>けん</rt></ruby>にやりなさい。",
            "cn": "这项工作不要敷衍了事，要认真做到最后。",
            "options": ["いいかげん", "しっかり", "ていねい", "まじめ"],
            "answer": "いいかげん"
        }
    },
    {
        "word": "あやふや",
        "word_html": "あやふや",
        "tone": "0",
        "pos": "な形",
        "mean": "含糊、模棱两可",
        "nuance": "1. 态度、记忆、言辞或状态等不明确，含混不清。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<span class='ex-highlight'>あやふやな</span><ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>は<ruby>信<rt>しん</rt></ruby><ruby>用<rt>よう</rt></ruby>できない。", "cn": "他那模棱两可的态度让人无法信任。" }
        ],
        "practice": {
            "sentence": "この<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>については、まだ<span class='ex-highlight'>____</span>な<ruby>回<rt>かい</rt></ruby><ruby>答<rt>とう</rt></ruby>しか<ruby>得<rt>え</rt></ruby>ていない。",
            "cn": "关于这个问题，目前还只得到含糊的回答。",
            "options": ["あやふや", "はっきり", "めいはく", "たんとう"],
            "answer": "あやふや"
        }
    },
    {
        "word": "丁寧",
        "word_html": "<ruby>丁<rt>てい</rt></ruby><ruby>寧<rt>ねい</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "礼貌、恭敬；仔细、细致",
        "nuance": "1. 言谈举止符合礼仪，对人尊重。\n2. 做事用心，不粗心大意。",
        "examples": [
            { "jp": "<ruby>客<rt>きゃく</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<span class='ex-highlight'><ruby>丁<rt>てい</rt></ruby><ruby>寧<rt>ねい</rt></ruby>な<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby><ruby>遣<rt>づか</rt></ruby>い</span>をする。", "cn": "对客人使用礼貌的用语。" },
            { "jp": "<ruby>壊<rt>こわ</rt></ruby>れやすいので、<span class='ex-highlight'><ruby>丁<rt>てい</rt></ruby><ruby>寧<rt>ねい</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>扱<rt>あつか</rt></ruby>って</span>ください。", "cn": "因为容易碎，请小心细致地轻拿轻放。" }
        ],
        "practice": {
            "sentence": "この<ruby>手<rt>て</rt></ruby><ruby>紙<rt>がみ</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>書<rt>か</rt></ruby>かれていて、<ruby>読<rt>よ</rt></ruby>み<ruby>手<rt>て</rt></ruby>の<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちが<ruby>伝<rt>つた</rt></ruby>わってくる。",
            "cn": "这封信写得很礼貌，能感受到写信人的心意。",
            "options": ["ていねい", "そっけない", "いいかげん", "あらっぽい"],
            "answer": "ていねい"
        }
    },
    {
        "word": "余計",
        "word_html": "<ruby>余<rt>よ</rt></ruby><ruby>計<rt>けい</rt></ruby>",
        "tone": "0",
        "pos": "な形（副）",
        "mean": "多余、无用；更加、格外",
        "nuance": "1. 不需要的，反而添乱或带来负面效果。\n2. 程度比平常或之前更甚，多作副词。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>余<rt>よ</rt></ruby><ruby>計<rt>けい</rt></ruby>な<ruby>心<rt>しん</rt></ruby><ruby>配<rt>ぱい</rt></ruby></span>をして<ruby>疲<rt>つか</rt></ruby>れてしまった。", "cn": "白白操心，把自己弄得很累。" },
            { "jp": "<ruby>人<rt>ひと</rt></ruby><ruby>前<rt>まえ</rt></ruby>で<ruby>褒<rt>ほ</rt></ruby>められて、<span class='ex-highlight'><ruby>余<rt>よ</rt></ruby><ruby>計<rt>けい</rt></ruby>に<ruby>恥<rt>は</rt></ruby>ずかしく</span>なった。", "cn": "当众被夸奖，觉得更加不好意思了。" }
        ],
        "practice": {
            "sentence": "あなたが<ruby>手<rt>て</rt></ruby>を<ruby>貸<rt>か</rt></ruby>してくれれば<span class='ex-highlight'>____</span>に<ruby>早<rt>はや</rt></ruby>く<ruby>終<rt>お</rt></ruby>わるはずだ。",
            "cn": "如果你来帮忙，应该会更快结束。",
            "options": ["よけい", "すこし", "おそく", "ふつう"],
            "answer": "よけい"
        }
    },
    {
        "word": "退屈",
        "word_html": "<ruby>退<rt>たい</rt></ruby><ruby>屈<rt>くつ</rt></ruby>",
        "tone": "0",
        "pos": "な形（名）",
        "mean": "无聊、厌倦",
        "nuance": "1. 因为无事可做或内容乏味而感到无趣。",
        "examples": [
            { "jp": "この<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>はストーリーが<ruby>単<rt>たん</rt></ruby><ruby>調<rt>ちょう</rt></ruby>で<span class='ex-highlight'><ruby>退<rt>たい</rt></ruby><ruby>屈<rt>くつ</rt></ruby>だった</span>。", "cn": "这部电影情节太单调了，很无聊。" }
        ],
        "practice": {
            "sentence": "この<ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>は<ruby>内<rt>ない</rt></ruby><ruby>容<rt>よう</rt></ruby>が<ruby>古<rt>ふる</rt></ruby>くて、<ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>にとっては<span class='ex-highlight'>____</span>でしかない。",
            "cn": "这堂课内容陈旧，对学生来说只有无聊。",
            "options": ["たいくつ", "おもしろい", "たのしい", "おかしい"],
            "answer": "たいくつ"
        }
    },
    {
        "word": "真剣",
        "word_html": "<ruby>真<rt>しん</rt></ruby><ruby>剣<rt>けん</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "认真、严肃",
        "nuance": "1. 态度极度认真，绝不开玩笑。",
        "examples": [
            { "jp": "<ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>について<span class='ex-highlight'><ruby>真<rt>しん</rt></ruby><ruby>剣<rt>けん</rt></ruby>に<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う</span><ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>がある。", "cn": "有必要对将来进行认真的讨论。" }
        ],
        "practice": {
            "sentence": "この<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>は<span class='ex-highlight'>____</ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>まないと、<ruby>解<rt>かい</rt></ruby>けない。",
            "cn": "这个问题必须认真处理，否则解不开。",
            "options": ["しんけん", "ふざけて", "いいかげん", "たいくつ"],
            "answer": "しんけん"
        }
    },
    {
        "word": "強引",
        "word_html": "<ruby>強<rt>ごう</rt></ruby><ruby>引<rt>いん</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "强硬、霸道",
        "nuance": "1. 无视他人的意愿或客观困难，强行推进某事。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>強<rt>ごう</rt></ruby><ruby>引<rt>いん</rt></ruby>な<ruby>手<rt>しゅ</rt></ruby><ruby>段<rt>だん</rt></ruby></span>で<ruby>契<rt>けい</rt></ruby><ruby>約<rt>やく</rt></ruby>をまとめた。", "cn": "他用强硬的手段促成了合约。" }
        ],
        "practice": {
            "sentence": "あの<ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>反<rt>はん</rt></ruby><ruby>対<rt>たい</rt></ruby>する<ruby>人<rt>ひと</rt></ruby>を<ruby>押<rt>お</rt></ruby>し<ruby>切<rt>き</rt></ruby>って<ruby>新<rt>しん</rt></ruby><ruby>規<rt>き</rt></ruby>を<ruby>導<rt>どう</rt></ruby><ruby>入<rt>にゅう</rt></ruby>した。",
            "cn": "那位社长强行压下反对者，引进了新项目。",
            "options": ["ごういん", "おとなしい", "ゆうき", "れいせい"],
            "answer": "ごういん"
        }
    }
];
const DAY11_WORDS = [
{
        "word": "軽率",
        "word_html": "<ruby>軽<rt>けい</rt></ruby><ruby>率<rt>そつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "轻率、草率",
        "nuance": "1. 说话或行动不经过慎重考虑。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>軽<rt>けい</rt></ruby><ruby>率<rt>そつ</rt></ruby>な<ruby>発<rt>はつ</rt></ruby><ruby>言<rt>げん</rt></ruby></span>が<ruby>大<rt>おお</rt></ruby>きな<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>起<rt>お</rt></ruby>こした。", "cn": "轻率的发言引起了严重的问题。" }
        ],
        "practice": {
            "sentence": "この<ruby>契<rt>けい</rt></ruby><ruby>約<rt>やく</rt></ruby>を<span class='ex-highlight'>____</span>に<ruby>結<rt>けっ</rt></ruby><ruby>ん</rt></ruby>だ<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby>、<ruby>損<rt>そん</rt></ruby><ruby>害<rt>がい</rt></ruby>を<ruby>被<rt>こうむ</rt></ruby>った。",
            "cn": "轻率签下这份合同，结果蒙受了损失。",
            "options": ["けいそつ", "ていねい", "めんみつ", "きんみつ"],
            "answer": "けいそつ"
        }
    },
    {
        "word": "互角",
        "word_html": "<ruby>互<rt>ご</rt></ruby><ruby>角<rt>かく</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "势均力敌、不相上下",
        "nuance": "1. 双方实力或水平相当，分不出胜负。",
        "examples": [
            { "jp": "<ruby>両<rt>りょう</rt></ruby>チームの<ruby>実<rt>じっ</rt></ruby><ruby>力<rt>りょく</rt></ruby>は<span class='ex-highlight'><ruby>互<rt>ご</rt></ruby><ruby>角<rt>かく</rt></ruby>で</span>、どちらが<ruby>勝<rt>か</rt></ruby>つか<ruby>分<rt>わ</rt></ruby>からない。", "cn": "两队实力势均力敌，不知道哪边会赢。" }
        ],
        "practice": {
            "sentence": "この<ruby>選<rt>せん</rt></ruby><ruby>挙<rt>きょ</rt></ruby>は<span class='ex-highlight'>____</span>の<ruby>勝<rt>しょう</rt></ruby><ruby>負<rt>ぶ</rt></ruby>となり、<ruby>接<rt>せっ</rt></ruby><ruby>戦<rt>せん</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いている。",
            "cn": "这场选举势均力敌，战况持续胶着。",
            "options": ["ごかく", "おおげさ", "めいはく", "あんい"],
            "answer": "ごかく"
        }
    },
    {
        "word": "在り来り",
        "word_html": "<ruby>在<rt>あ</rt></ruby>り<ruby>来<rt>きた</rt></ruby>り",
        "tone": "0",
        "pos": "な形（名）",
        "mean": "司空见惯、寻常",
        "nuance": "1. 极其普通，到处都有，毫无新意。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>在<rt>あ</rt></ruby>り<ruby>来<rt>きた</rt></ruby>りな<ruby>結<rt>けつ</rt></ruby><ruby>末<rt>まつ</rt></ruby></span>の<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>でがっかりした。", "cn": "电影的结局极其老套，让人失望。" }
        ],
        "practice": {
            "sentence": "その<ruby>企<rt>き</rt></ruby><ruby>画<rt>かく</rt></ruby>は<span class='ex-highlight'>____</span>の<ruby>アイデア<rt>あいであ</rt></ruby>で、<ruby>新<rt>しん</rt></ruby><ruby>鮮<rt>せん</rt></ruby>さに<ruby>欠<rt>か</rt></ruby>ける。",
            "cn": "那个企划只是普通点子，缺乏新鲜感。",
            "options": ["ありきたり", "げんせい", "ぞんざい", "いいかげん"],
            "answer": "ありきたり"
        }
    },
    {
        "word": "月並み",
        "word_html": "<ruby>月<rt>つき</rt></ruby><ruby>並<rt>な</rt></ruby>み",
        "tone": "0",
        "pos": "な形",
        "mean": "老套、平凡",
        "nuance": "1. 像例行公事一样常见，缺乏独创性，平庸。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>月<rt>つき</rt></ruby><ruby>並<rt>な</rt></ruby>みな<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby></span>だが、ご<ruby>結<rt>けっ</rt></ruby><ruby>婚<rt>こん</rt></ruby>おめでとうございます。", "cn": "虽然是老套的祝福语，还是祝你们新婚快乐。" }
        ],
        "practice": {
            "sentence": "その<ruby>演<rt>えん</rt></ruby><ruby>説<rt>ぜつ</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>内<rt>ない</rt></ruby><ruby>容<rt>よう</rt></ruby>で、<ruby>聴<rt>ちょう</rt></ruby><ruby>衆<rt>しゅう</rt></ruby>を<ruby>魅<rt>み</rt></ruby>了<rt>りょう</rt></ruby>できなかった。",
            "cn": "那场演讲内容老套，没能吸引听众。",
            "options": ["つきなみ", "たくみ", "けんちょ", "のうみつ"],
            "answer": "つきなみ"
        }
    },
    {
        "word": "憂鬱",
        "word_html": "<ruby>憂<rt>ゆう</rt></ruby><ruby>鬱<rt>うつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "忧郁、郁闷",
        "nuance": "1. 心情沉重，提不起精神，感到烦闷。",
        "examples": [
            { "jp": "<ruby>雨<rt>あめ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>くと、なんとなく<span class='ex-highlight'><ruby>憂<rt>ゆう</rt></ruby><ruby>鬱<rt>うつ</rt></ruby>な<ruby>気<rt>き</rt></ruby><ruby>分<rt>ぶん</rt></ruby></span>になる。", "cn": "连续的下雨天，总让人心情变得忧郁。" }
        ],
        "practice": {
            "sentence": "<ruby>失<rt>しっ</rt></ruby><ruby>恋<rt>れん</rt></ruby>してから、<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby>が<span class='ex-highlight'>____</span>で<ruby>何<rt>なに</rt></ruby>をする<ruby>気<rt>き</rt></ruby>も<ruby>起<rt>お</rt></ruby>きない。",
            "cn": "失恋之后，每天都很郁闷，什么也不想做。",
            "options": ["ゆううつ", "のどか", "おおげさ", "げんせい"],
            "answer": "ゆううつ"
        }
    },
    {
        "word": "奔放",
        "word_html": "<ruby>奔<rt>ほん</rt></ruby><ruby>放<rt>ぽう</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "奔放、自由",
        "nuance": "1. 不受传统、常理或规范的束缚，随心所欲，常与「自由」连用。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<ruby>自<rt>じ</rt></ruby><ruby>由<rt>ゆう</rt></ruby><span class='ex-highlight'><ruby>奔<rt>ほん</rt></ruby><ruby>放<rt>ぽう</rt></ruby>な<ruby>生<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby></span>に<ruby>憧<rt>あこが</rt></ruby>れる<ruby>人<rt>ひと</rt></ruby>は<ruby>多<rt>おお</rt></ruby>い。", "cn": "很多人向往她那自由奔放的生活方式。" }
        ],
        "practice": {
            "sentence": "あの<ruby>芸<rt>げい</rt></ruby><ruby>術<rt>じゅつ</rt></ruby><ruby>家<rt>か</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>想<rt>そう</rt></ruby><ruby>像<rt>ぞう</rt></ruby>で、<ruby>新<rt>あたら</rt></ruby>しい<ruby>作<rt>さく</rt></ruby><ruby>品<rt>ぴん</rt></ruby>を<ruby>生<rt>う</rt></ruby>み<ruby>出<rt>だ</rt></ruby>す。",
            "cn": "那位艺术家以奔放的想象力创作出新作品。",
            "options": ["ほんぽう", "あんい", "けいそつ", "めいはく"],
            "answer": "ほんぽう"
        }
    },
    {
        "word": "崇高",
        "word_html": "<ruby>崇<rt>すう</rt></ruby><ruby>高<rt>こう</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "崇高、伟大",
        "nuance": "1. 精神、理念、目标或品格等非常高尚，令人敬佩。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby><ruby>平<rt>へい</rt></ruby><ruby>和<rt>わ</rt></ruby>という<span class='ex-highlight'><ruby>崇<rt>すう</rt></ruby><ruby>高<rt>こう</rt></ruby>な<ruby>理<rt>り</rt></ruby><ruby>想<rt>そう</rt></ruby></span>を<ruby>掲<rt>かか</rt></ruby>げている。", "cn": "他提出了世界和平这一崇高的理想。" }
        ],
        "practice": {
            "sentence": "その<ruby>詩<rt>し</rt></ruby><ruby>人<rt>じん</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>テーマ<rt>てーま</rt></ruby>を<ruby>扱<rt>あつか</rt></ruby>い、<ruby>読<rt>どく</rt></ruby><ruby>者<rt>しゃ</rt></ruby>の<ruby>心<rt>こころ</rt></ruby>を<ruby>打<rt>う</rt></ruby>つ。",
            "cn": "那位诗人处理崇高的主题，打动了读者的心。",
            "options": ["すうこう", "つきなみ", "いいかげん", "あやふや"],
            "answer": "すうこう"
        }
    },
    {
        "word": "性急",
        "word_html": "<ruby>性<rt>せい</rt></ruby><ruby>急<rt>きゅう</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "性急、急躁",
        "nuance": "1. 性格急躁，缺乏耐心，做事急于求成。",
        "examples": [
            { "jp": "まだ<ruby>状<rt>じょう</rt></ruby><ruby>況<rt>きょう</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からないのだから、<span class='ex-highlight'><ruby>性<rt>せい</rt></ruby><ruby>急<rt>きゅう</rt></ruby>な<ruby>判<rt>はん</rt></ruby><ruby>断<rt>だん</rt></ruby></span>は<ruby>避<rt>さ</rt></ruby>けるべきだ。", "cn": "既然还不了解状况，就应该避免做出急躁的判断。" }
        ],
        "practice": {
            "sentence": "あの<ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>進<rt>すす</rt></ruby>めて<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>した。",
            "cn": "那名员工急于推进工作，结果失败了。",
            "options": ["せいきゅう", "ゆううつ", "ほんぽう", "けいそつ"],
            "answer": "せいきゅう"
        }
    },
    {
        "word": "肝心",
        "word_html": "<ruby>肝<rt>かん</rt></ruby><ruby>心<rt>じん</rt></ruby>",
        "tone": "0",
        "pos": "な形（名）",
        "mean": "关键、最重要",
        "nuance": "1. 事物中最核心、最重要的部分，不可或缺。",
        "examples": [
            { "jp": "<ruby>準<rt>じゅん</rt></ruby><ruby>備<rt>び</rt></ruby>はすべて<ruby>整<rt>ととの</rt></ruby>ったが、<span class='ex-highlight'><ruby>肝<rt>かん</rt></ruby><ruby>心<rt>じん</rt></ruby>な<ruby>主<rt>しゅ</rt></ruby><ruby>役<rt>やく</rt></ruby></span>がまだ<ruby>到<rt>とう</rt></ruby><ruby>着<rt>ちゃく</rt></ruby>していない。", "cn": "准备工作都已经就绪，但最关键的主角还没到。" }
        ],
        "practice": {
            "sentence": "この<ruby>プレゼン<rt>ぷれぜん</rt></ruby>の<span class='ex-highlight'>____</span>な<ruby>資<rt>し</rt></ruby><ruby>料<rt>りょう</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れてきてしまった。",
            "cn": "我忘带了这次演示最关键的资料。",
            "options": ["かんじん", "すうこう", "げんせい", "ぞんざい"],
            "answer": "かんじん"
        }
    },
    {
        "word": "正当",
        "word_html": "<ruby>正<rt>せい</rt></ruby><ruby>当<rt>とう</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "正当、合理",
        "nuance": "1. 符合道理、法律或常理，无可非议。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>正<rt>せい</rt></ruby><ruby>当<rt>とう</rt></ruby>な<ruby>理<rt>り</rt></ruby><ruby>由<rt>ゆう</rt></ruby></span>があって<ruby>遅<rt>ち</rt></ruby><ruby>刻<rt>こく</rt></ruby>したのだから、<ruby>責<rt>せ</rt></ruby>められない。", "cn": "他是有正当的理由才迟到的，所以不能责怪他。" }
        ],
        "practice": {
            "sentence": "その<ruby>要求<rt>ようきゅう</rt></ruby>は<span class='ex-highlight'>____</span>で、<ruby>拒<rt>きょ</rt></ruby><ruby>否<rt>ひ</rt></ruby>することはできない。",
            "cn": "这个要求正当，无法拒绝。",
            "options": ["せいとう", "ふせい", "いいかげん", "あやふや"],
            "answer": "せいとう"
        }
    },
    {
        "word": "不当",
        "word_html": "<ruby>不<rt>ふ</rt></ruby><ruby>当<rt>とう</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "不当、不合理",
        "nuance": "1. 不符合道理、常理或法律，有失公平。",
        "examples": [
            { "jp": "<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>から<span class='ex-highlight'><ruby>不<rt>ふ</rt></ruby><ruby>当<rt>とう</rt></ruby>な</span><ruby>扱<rt>あつか</rt></ruby>いを<ruby>受<rt>う</rt></ruby>けた<ruby>場<rt>ば</rt></ruby><ruby>合<rt>あい</rt></ruby>は、すぐに<ruby>労<rt>ろう</rt></ruby><ruby>働<rt>どう</rt></ruby><ruby>基<rt>き</rt></ruby><ruby>準<rt>じゅん</rt></ruby><ruby>監<rt>かん</rt></ruby><ruby>督<rt>とく</rt></ruby><ruby>署<rt>しょ</rt></ruby>に<ruby>相<rt>そう</rt></ruby><ruby>談<rt>だん</rt></ruby>してください。", "cn": "如果受到了公司不当的对待，请立刻向劳动基准监督署咨询。" }
        ],
        "practice": {
            "sentence": "この<ruby>処<rt>しょ</rt></ruby><ruby>罰<rt>ばつ</rt></ruby>は<ruby>規<rt>き</rt></ruby><ruby>則<rt>そく</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わず、<span class='ex-highlight'>____</span>だと<ruby>言<rt>い</rt></ruby>える。",
            "cn": "这个处分不符合规定，可以说是不正当的。",
            "options": ["ふとう", "せいとう", "ていき", "かんたん"],
            "answer": "ふとう"
        }
    },
    {
        "word": "有数",
        "word_html": "<ruby>有<rt>ゆう</rt></ruby><ruby>数<rt>すう</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "屈指可数、杰出",
        "nuance": "1. 在同类中极为罕见、出类拔萃，排得上名次。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby>でも<span class='ex-highlight'><ruby>有<rt>ゆう</rt></ruby><ruby>数<rt>すう</rt></ruby>な</span><ruby>科<rt>か</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>者<rt>しゃ</rt></ruby>の<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>だ。", "cn": "他是世界上屈指可数的科学家之一。" }
        ],
        "practice": {
            "sentence": "この<ruby>国<rt>くに</rt></ruby>は<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby>でも<span class='ex-highlight'>____</span>な<ruby>観<rt>かん</rt></ruby><ruby>光<rt>こう</rt></ruby><ruby>地<rt>ち</rt></ruby>を<ruby>抱<rt>いだ</rt></ruby>えている。",
            "cn": "这个国家拥有世界上屈指可数的旅游胜地。",
            "options": ["ゆうすう", "ふすう", "へいぼう", "りっぱ"],
            "answer": "ゆうすう"
        }
    },
    {
        "word": "疎ら",
        "word_html": "<ruby>疎<rt>まば</rt></ruby>ら",
        "tone": "0",
        "pos": "な形",
        "mean": "稀疏、零星",
        "nuance": "1. 人或事物的分布不密集，数量少且分散。",
        "examples": [
            { "jp": "<ruby>早<rt>そう</rt></ruby><ruby>朝<rt>ちょう</rt></ruby>のバスは、<ruby>乗<rt>じょう</rt></ruby><ruby>客<rt>きゃく</rt></ruby>も<span class='ex-highlight'><ruby>疎<rt>まば</rt></ruby>らだった</span>。", "cn": "清晨的公交车上，乘客也很稀疏。" }
        ],
        "practice": {
            "sentence": "この<ruby>辺<rt>へん</rt></ruby><ruby>り<rt>り</rt></ruby>は<ruby>人<rt>ひと</rt></ruby>も<ruby>店<rt>みせ</rt></ruby>も<span class='ex-highlight'>____</span>で、<ruby>静<rt>しず</rt></ruby>かすぎる。",
            "cn": "这一带人和店都很稀少，安静得过头。",
            "options": ["まばら", "みっつ", "おおぜい", "ぎじゅつ"],
            "answer": "まばら"
        }
    },
    {
        "word": "零細",
        "word_html": "<ruby>零<rt>れい</rt></ruby><ruby>細<rt>さい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "规模极小、微薄",
        "nuance": "1. 多指企业经营规模极小，或资金、收入等非常少。",
        "examples": [
            { "jp": "この<ruby>町<rt>まち</rt></ruby>には<span class='ex-highlight'><ruby>零<rt>れい</rt></ruby><ruby>細<rt>さい</rt></ruby>な</span><ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い。", "cn": "这个镇上有很多微型企业。" }
        ],
        "practice": {
            "sentence": "この<ruby>店<rt>みせ</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>規<rt>き</rt></ruby><ruby>模<rt>ぼ</rt></ruby>で<ruby>営<rt>えい</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>しており、<ruby>従<rt>じゅう</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>員<rt>いん</rt></ruby>は<ruby>三<rt>さん</rt></ruby><ruby>人<rt>にん</rt></ruby>だけだ。",
            "cn": "这家店规模很小，只有三名员工。",
            "options": ["れいさい", "だいき", "ゆうしゅう", "こうぎょう"],
            "answer": "れいさい"
        }
    },
    {
        "word": "繊細",
        "word_html": "<ruby>繊<rt>せん</rt></ruby><ruby>細<rt>さい</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "纤细、细致；敏感、细腻",
        "nuance": "1. 物品的形状细长，或工艺品等制作得非常精细。\n2. 感情、感受性等容易受到外界影响，或能体察到细微的变化。",
        "examples": [
            { "jp": "この<ruby>指<rt>ゆび</rt></ruby><ruby>輪<rt>わ</rt></ruby>はとても<span class='ex-highlight'><ruby>繊<rt>せん</rt></ruby><ruby>細<rt>さい</rt></ruby>な<ruby>作<rt>つく</rt></ruby>り</span>をしている。", "cn": "这枚戒指制作得非常精细。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>はとても<span class='ex-highlight'><ruby>繊<rt>せん</rt></ruby><ruby>細<rt>さい</rt></ruby>な<ruby>心<rt>こころ</rt></ruby></span>の<ruby>持<rt>も</rt></ruby><ruby>ち<ruby>主<rt>ぬし</rt></ruby>だ。", "cn": "她是一个内心非常敏感细腻的人。" }
        ],
        "practice": {
            "sentence": "この<ruby>玻<rt>はり</rt></ruby><ruby>璃<rt>び</rt></ruby><ruby>細<rt>ざい</rt></ruby><ruby>工<rt>く</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>技<rt>ぎ</rt></ruby><ruby>術<rt>じゅつ</rt></ruby>を<ruby>要<rt>よう</rt></ruby>するため、<ruby>作<rt>さく</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>に<ruby>半<rt>はん</rt></ruby><ruby>日<rt>にち</rt></ruby>を<ruby>要<rt>よう</rt></ruby>する。",
            "cn": "这件玻璃工艺品需要精细技术，制作要花半天时间。",
            "options": ["せんさい", "そっこう", "ふとう", "いいかげん"],
            "answer": "せんさい"
        }
    },
    {
        "word": "手薄",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>薄<rt>うす</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "人手不足；不足",
        "nuance": "1. 负责某项工作的人员数量不够。\n2. 手头拥有的事物，或库存不足。",
        "examples": [
            { "jp": "<ruby>連<rt>れん</rt></ruby><ruby>休<rt>きゅう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>は<ruby>病<rt>びょう</rt></ruby><ruby>院<rt>いん</rt></ruby>のスタッフが<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>薄<rt>うす</rt></ruby>に</span>なる。", "cn": "长假期间医院的医护人员会人手不足。" },
            { "jp": "<ruby>在<rt>ざい</rt></ruby><ruby>庫<rt>こ</rt></ruby>が<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>薄<rt>うす</rt></ruby>に</span>なった。", "cn": "库存不多了。" }
        ],
        "practice": {
            "sentence": "この<ruby>工<rt>こう</rt></ruby><ruby>場<rt>じょう</rt></ruby>は<ruby>正<rt>せい</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>が<span class='ex-highlight'>____</span>の<ruby>為<rt>ため</rt></ruby>、<ruby>臨<rt>りん</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>派<rt>は</rt></ruby><ruby>遣<rt>けん</rt></ruby><ruby>員<rt>いん</rt></ruby>を<ruby>増<rt>ぞう</rt></ruby><ruby>員<rt>いん</rt></ruby>した。",
            "cn": "这家工厂正式员工不足，因此临时增加了派遣人员。",
            "options": ["てうす", "ふそく", "おおぜい", "かんたん"],
            "answer": "てうす"
        }
    },
    {
        "word": "端的",
        "word_html": "<ruby>端<rt>たん</rt></ruby><ruby>的<rt>てき</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "直截了当、开门见山；明白、清楚",
        "nuance": "1. 说话或态度直接，不绕弯子。\n2. 清楚地表现出事物的本质或状态。",
        "examples": [
            { "jp": "<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby><ruby>点<rt>てん</rt></ruby>を<span class='ex-highlight'><ruby>端<rt>たん</rt></ruby><ruby>的<rt>てき</rt></ruby>に</span><ruby>指<rt>し</rt></ruby><ruby>摘<rt>てき</rt></ruby>する。", "cn": "直截当地指出问题点。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>表<rt>ひょう</rt></ruby><ruby>情<rt>じょう</rt></ruby>に<ruby>怒<rt>いか</rt></ruby>りが<span class='ex-highlight'><ruby>端<rt>たん</rt></ruby><ruby>的<rt>てき</rt></ruby>に</span><ruby>表<rt>あらわ</rt></ruby>れている。", "cn": "他的表情清楚地表现出了愤怒。" }
        ],
        "practice": {
            "sentence": "この<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>の<ruby>テ<rt>て</rt></ruby><ruby>ー<rt>ー</rt></ruby><ruby>マ<rt>ま</rt></ruby>は<ruby>観<rt>かん</rt></ruby><ruby>客<rt>きゃく</rt></ruby>に<span class='ex-highlight'>____</span>に<ruby>伝<rt>つた</rt></ruby>わり、<ruby>感<rt>かん</rt></ruby><ruby>動<rt>どう</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>ぶ。",
            "cn": "这部电影的主题直接传达给了观众，引发了感动。",
            "options": ["たんてき", "あやふや", "おおげさ", "ふとう"],
            "answer": "たんてき"
        }
    },
    {
        "word": "大袈裟",
        "word_html": "<ruby>大<rt>おお</rt></ruby><ruby>袈<rt>げ</rt></ruby><ruby>裟<rt>さ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "夸张、小题大做",
        "nuance": "1. 言行超出了实际程度，显得夸大其词。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はいつも<ruby>話<rt>はなし</rt></ruby>を<span class='ex-highlight'><ruby>大<rt>おお</rt></ruby><ruby>袈<rt>げ</rt></ruby><ruby>裟<rt>さ</rt></ruby>に</span><ruby>言<rt>い</rt></ruby>う。", "cn": "他总是把话说得很夸张。" }
        ],
        "practice": {
            "sentence": "その<ruby>記<rt>き</rt></ruby><ruby>者<rt>しゃ</rt></ruby>は<ruby>事<rt>じ</rt></ruby><ruby>実<rt>じつ</rt></ruby>を<span class='ex-highlight'>____</span>に<ruby>報<rt>ほう</rt></ruby><ruby>道<rt>どう</rt></ruby>し、<ruby>読<rt>どく</rt></ruby><ruby>者<rt>しゃ</rt></ruby>を<ruby>驚<rt>おどろ</rt></ruby>かせた。",
            "cn": "那名记者夸大报道事实，惊动了读者。",
            "options": ["おおげさ", "たんてき", "せんさい", "ようせい"],
            "answer": "おおげさ"
        }
    },
    {
        "word": "明白",
        "word_html": "<ruby>明<rt>めい</rt></ruby><ruby>白<rt>はく</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "明白、明显",
        "nuance": "1. 事实或证据清楚明了，毫无疑问。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>犯<rt>はん</rt></ruby><ruby>人<rt>にん</rt></ruby>であることは<span class='ex-highlight'><ruby>明<rt>めい</rt></ruby><ruby>白<rt>はく</rt></ruby>だ</span>。", "cn": "他是犯人这件事是显而易见的。" }
        ],
        "practice": {
            "sentence": "この<ruby>資<rt>し</rt></ruby><ruby>料<rt>りょう</rt></ruby>が<ruby>真<rt>しん</rt></ruby><ruby>実<rt>じつ</rt></ruby>かどうかは、<span class='ex-highlight'>____</span>な<ruby>証<rt>しょう</rt></ruby><ruby>拠<rt>こ</rt></ruby>が<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>だ。",
            "cn": "这份资料是否真实，需要明确的证据。",
            "options": ["めいはく", "ふとう", "あやふや", "おおげさ"],
            "answer": "めいはく"
        }
    },
    {
        "word": "些細",
        "word_html": "<ruby>些<rt>さ</rt></ruby><ruby>細<rt>さい</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "琐碎、微小",
        "nuance": "1. 事物非常微不足道，不值一提。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>些<rt>さ</rt></ruby><ruby>細<rt>さい</rt></ruby>な</span>ことで<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>と<ruby>喧<rt>けん</rt></ruby><ruby>嘩<rt>か</rt></ruby>をしてしまった。", "cn": "因为一点琐碎的小事和朋友吵架了。" }
        ],
        "practice": {
            "sentence": "この<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>で<ruby>議<rt>ぎ</rt></ruby><ruby>論<rt>ろん</rt></ruby>しているのは、<span class='ex-highlight'>____</span>な<ruby>点<rt>てん</rt></ruby>に<ruby>過<rt>す</rt></ruby>ぎない。",
            "cn": "这次会议讨论的只是些细枝末节。",
            "options": ["ささい", "たいせつ", "おおげさ", "めいはく"],
            "answer": "ささい"
        }
    }
];
const DAY12_WORDS = [
{
        "word": "深刻",
        "word_html": "<ruby>深<rt>しん</rt></ruby><ruby>刻<rt>こく</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "严重、严峻；沉重、严肃",
        "nuance": "1. 事态恶化，状况极其严重且不容乐观。\n2. 表情或内心感到非常痛苦或严肃。",
        "examples": [
            { "jp": "<ruby>地<rt>ち</rt></ruby><ruby>球<rt>きゅう</rt></ruby><ruby>温<rt>おん</rt></ruby><ruby>暖<rt>だん</rt></ruby><ruby>化<rt>か</rt></ruby>は、<span class='ex-highlight'><ruby>深<rt>しん</rt></ruby><ruby>刻<rt>こく</rt></ruby>な</span><ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>となっている。", "cn": "全球变暖正在成为一个严重的问题。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>深<rt>しん</rt></ruby><ruby>刻<rt>こく</rt></ruby>な</span><ruby>顔<rt>かお</rt></ruby>で<ruby>考<rt>かんが</rt></ruby>え<ruby>込<rt>こ</rt></ruby>んでいる。", "cn": "他满脸沉重地在沉思。" }
        ],
        "practice": {
            "sentence": "この<ruby>病<rt>びょう</rt></ruby><ruby>気<rt>き</rt></ruby>は<span class='ex-highlight'>____</span>で、<ruby>治<rt>ち</rt></ruby><ruby>療<rt>りょう</rt></ruby>が<ruby>長<rt>なが</rt></ruby><ruby>期<rt>き</rt></ruby><ruby>間<rt>かん</rt></ruby>を<ruby>要<rt>よう</rt></ruby>する。",
            "cn": "这种病很严重，治疗需要很长时间。",
            "options": ["しんこく", "かるい", "ふへん", "あんい"],
            "answer": "しんこく"
        }
    },
    {
        "word": "厄介",
        "word_html": "<ruby>厄<rt>やっ</rt></ruby><ruby>介<rt>かい</rt></ruby>",
        "tone": "1",
        "pos": "な形（名）",
        "mean": "麻烦、棘手；照顾、照料",
        "nuance": "1. 事情难以处理，惹人厌烦，不容易解决。\n2. 多作名词，指受人关照或给别人添麻烦。",
        "examples": [
            { "jp": "<ruby>非<rt>ひ</rt></ruby><ruby>常<rt>じょう</rt></ruby>に<span class='ex-highlight'><ruby>厄<rt>やっ</rt></ruby><ruby>介<rt>かい</rt></ruby>な</span><ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>に<ruby>巻<rt>ま</rt></ruby>き<ruby>込<rt>こ</rt></ruby>まれてしまった。", "cn": "被卷入了非常棘手的问题中。" },
            { "jp": "しばらくの<ruby>間<rt>あいだ</rt></ruby>、<ruby>叔父<rt>おじ</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>に<span class='ex-highlight'><ruby>厄<rt>やっ</rt></ruby><ruby>介<rt>かい</rt></ruby>に</span>なる。", "cn": "暂时要在叔父家受照顾了。" }
        ],
        "practice": {
            "sentence": "あの<ruby>客<rt>きゃく</rt></ruby><ruby>戸<rt>と</rt></ruby>は<ruby>要<rt>よう</rt></ruby><ruby>求<rt>きゅう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>くて<span class='ex-highlight'>____</span>だ。",
            "cn": "那位客户要求很多，很难应付。",
            "options": ["やっかい", "かんたん", "すいてい", "りっぱ"],
            "answer": "やっかい"
        }
    },
    {
        "word": "着実",
        "word_html": "<ruby>着<rt>ちゃく</rt></ruby><ruby>実<rt>じつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "踏实、稳步",
        "nuance": "1. 办事牢靠，一步一个脚印地取得进展或增长。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby><span class='ex-highlight'><ruby>着<rt>ちゃく</rt></ruby><ruby>実<rt>じつ</rt></ruby>に</span><ruby>実<rt>じっ</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<ruby>伸<rt>の</rt></ruby>ばしている。", "cn": "他每天都在稳步提升实力。" }
        ],
        "practice": {
            "sentence": "この<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>業<rt>ぎょう</rt></ruby><ruby>績<rt>せき</rt></ruby>を<ruby>伸<rt>の</rt></ruby>ばしている。",
            "cn": "这家公司稳步提升业绩。",
            "options": ["ちゃくじつ", "きゅうそく", "おおげさ", "あやふや"],
            "answer": "ちゃくじつ"
        }
    },
    {
        "word": "格段",
        "word_html": "<ruby>格<rt>かく</rt></ruby><ruby>段<rt>だん</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "显著、特别",
        "nuance": "1. 程度上的差距非常大，多搭配「に」作副词使用。",
        "examples": [
            { "jp": "<ruby>新<rt>あたら</rt></ruby>しいシステムは、<ruby>以<rt>い</rt></ruby><ruby>前<rt>ぜん</rt></ruby>のものより<ruby>操<rt>そう</rt></ruby><ruby>作<rt>さ</rt></ruby><ruby>性<rt>せい</rt></ruby>が<span class='ex-highlight'><ruby>格<rt>かく</rt></ruby><ruby>段<rt>だん</rt></ruby>に</span><ruby>向<rt>こう</rt></ruby><ruby>上<rt>じょう</rt></ruby>している。", "cn": "新系统的操作性比以前有了显著的提升。" }
        ],
        "practice": {
            "sentence": "この<ruby>政<rt>せい</rt></ruby><ruby>策<rt>さく</rt></ruby>の<ruby>効<rt>こう</rt></ruby><ruby>果<rt>か</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>高<rt>たか</rt></ruby>まった。",
            "cn": "这项政策的效果大幅提高。",
            "options": ["かくだん", "すこし", "ほぼ", "ふつう"],
            "answer": "かくだん"
        }
    },
    {
        "word": "抜群",
        "word_html": "<ruby>抜<rt>ばつ</rt></ruby><ruby>群<rt>ぐん</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "出众、超群",
        "nuance": "1. 在众人或同类中尤为突出，极为优秀。",
        "examples": [
            { "jp": "あなたはユーモアのセンスが<span class='ex-highlight'><ruby>抜<rt>ばつ</rt></ruby><ruby>群<rt>ぐん</rt></ruby></span>です。", "cn": "你的幽默感超群。" }
        ],
        "practice": {
            "sentence": "この<ruby>新<rt>しん</rt></ruby><ruby>製<rt>せい</rt></ruby><ruby>品<rt>ひん</rt></ruby>の<ruby>性<rt>せい</rt></ruby><ruby>能<rt>のう</rt></ruby>は<span class='ex-highlight'>____</span>だ。",
            "cn": "这款新产品性能出众。",
            "options": ["ばつぐん", "ふつう", "ていさい", "おくれ"],
            "answer": "ばつぐん"
        }
    },
    {
        "word": "大幅",
        "word_html": "<ruby>大<rt>おお</rt></ruby><ruby>幅<rt>はば</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "大幅、大幅度",
        "nuance": "1. 变动的范围、数量或程度非常大。",
        "examples": [
            { "jp": "<ruby>今<rt>こん</rt></ruby><ruby>月<rt>げつ</rt></ruby>の<ruby>売<rt>うり</rt></ruby><ruby>上<rt>あげ</rt></ruby>は<span class='ex-highlight'><ruby>大<rt>おお</rt></ruby><ruby>幅<rt>はば</rt></ruby>に</span><ruby>増<rt>ぞう</rt></ruby><ruby>加<rt>か</rt></ruby>した。", "cn": "这个月的销售额大幅增加了。" }
        ],
        "practice": {
            "sentence": "この<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>は<ruby>予<rt>よ</rt></ruby><ruby>算<rt>さん</rt></ruby>を<span class='ex-highlight'>____</ruby>に<ruby>削<rt>さく</rt></ruby><ruby>減<rt>げん</rt></ruby>した。",
            "cn": "这个计划大幅削减了预算。",
            "options": ["おおはば", "すこし", "ちょっと", "たいし"],
            "answer": "おおはば"
        }
    },
    {
        "word": "画一的",
        "word_html": "<ruby>画<rt>かく</rt></ruby><ruby>一<rt>いつ</rt></ruby><ruby>的<rt>てき</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "统一、刻板",
        "nuance": "1. 事物完全按照同一个标准，缺乏变化和个性。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>画<rt>かく</rt></ruby><ruby>一<rt>いつ</rt></ruby><ruby>的<rt>てき</rt></ruby>な</span><ruby>教<rt>きょう</rt></ruby><ruby>育<rt>いく</rt></ruby>では、<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>の<ruby>個<rt>こ</rt></ruby><ruby>性<rt>せい</rt></ruby>は<ruby>育<rt>そだ</rt></ruby>たない。", "cn": "在刻板的教育下，孩子们的个性无法得到培养。" }
        ],
        "practice": {
            "sentence": "この<ruby>作<rt>さく</rt></ruby><ruby>品<rt>ぴん</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>デ<rt>で</rt></ruby><ruby>ザ<rt>ざ</rt></ruby><ruby>イ<rt>い</rt></ruby>ンで、<ruby>新<rt>しん</rt></ruby><ruby>鮮<rt>せん</rt></ruby>さに<ruby>欠<rt>か</rt></ruby>ける。",
            "cn": "这件作品采用千篇一律的设计，缺乏新鲜感。",
            "options": ["かくいつてき", "ユニーク", "げんそう", "こうどう"],
            "answer": "かくいつてき"
        }
    },
    {
        "word": "画期的",
        "word_html": "<ruby>画<rt>かっ</rt></ruby><ruby>期<rt>き</rt></ruby><ruby>的<rt>てき</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "划时代、突破性",
        "nuance": "1. 前所未有，开创了新时代或新局面。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>画<rt>かっ</rt></ruby><ruby>期<rt>き</rt></ruby><ruby>的<rt>てき</rt></ruby>な</span><ruby>発<rt>はつ</rt></ruby><ruby>明<rt>めい</rt></ruby>により、<ruby>私<rt>わたし</rt></ruby>たちの<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きく<ruby>変<rt>か</rt></ruby>わった。", "cn": "因为划时代的发明，我们的生活发生了巨大的改变。" }
        ],
        "practice": {
            "sentence": "その<ruby>技<rt>ぎ</rt></ruby><ruby>術<rt>じゅつ</rt></ruby>は<span class='ex-highlight'>____</span>な<ruby>革<rt>かく</rt></ruby><ruby>新<rt>しん</rt></ruby>を<ruby>も<rt>も</rt></ruby>たらした。",
            "cn": "那项技术带来了划时代的革新。",
            "options": ["かっきてき", "ありきたり", "ふへん", "ていさい"],
            "answer": "かっきてき"
        }
    },
    {
        "word": "本格的",
        "word_html": "<ruby>本<rt>ほん</rt></ruby><ruby>格<rt>かく</rt></ruby><ruby>的<rt>てき</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "正式、真正；正宗、地道",
        "nuance": "1. 事物具备了应有的形态，正式开始或进入状态。\n2. 完全符合原本的作法、规格或传统。",
        "examples": [
            { "jp": "<ruby>秋<rt>あき</rt></ruby>になり、<span class='ex-highlight'><ruby>本<rt>ほん</rt></ruby><ruby>格<rt>かく</rt></ruby><ruby>的<rt>てき</rt></ruby>な</span><ruby>寒<rt>さむ</rt></ruby>さが<ruby>到<rt>とう</rt></ruby><ruby>来<rt>らい</rt></ruby>した。", "cn": "到了秋天，真正的寒冷到来了。" },
            { "jp": "このレストランでは<span class='ex-highlight'><ruby>本<rt>ほん</rt></ruby><ruby>格<rt>かく</rt></ruby><ruby>的<rt>てき</rt></ruby>な</span>フランス<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>が<ruby>味<rt>あじ</rt></ruby>わえる。", "cn": "在这家餐厅能品尝到正宗的法国菜。" }
        ],
        "practice": {
            "sentence": "この<ruby>店<rt>みせ</rt></ruby>では<span class='ex-highlight'>____</span>な<ruby>意<rt>い</rt></ruby><ruby>大<rt>た</rt></ruby><ruby>利<rt>り</rt></ruby><ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>が<ruby>味<rt>あじ</rt></ruby>わえる。",
            "cn": "这家店可以品尝到正宗的意大利料理。",
            "options": ["ほんかくてき", "かんたん", "おおげさ", "ふへん"],
            "answer": "ほんかくてき"
        }
    },
    {
        "word": "区区",
        "word_html": "<ruby>区<rt>まち</rt></ruby><ruby>区<rt>まち</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "形形色色、参差不齐",
        "nuance": "1. 事物的种类、意见、大小等各不相同，不统一。",
        "examples": [
            { "jp": "<ruby>参<rt>さん</rt></ruby><ruby>加<rt>か</rt></ruby><ruby>者<rt>しゃ</rt></ruby>の<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>は<span class='ex-highlight'>まちまち</span>で、<ruby>結<rt>けつ</rt></ruby><ruby>論<rt>ろん</rt></ruby>が<ruby>出<rt>で</rt></ruby>なかった。", "cn": "参与者的意见各有不同，没能得出结论。" }
        ],
        "practice": {
            "sentence": "その<ruby>調<rt>ちょう</rt></ruby><ruby>査<rt>さ</rt></ruby>の<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby>は<span class='ex-highlight'>____</span>で、<ruby>一<rt>いち</rt></ruby><ruby>致<rt>ち</rt></ruby>が<ruby>得<rt>え</rt></ruby>られない。",
            "cn": "那项调查的结果参差不齐，无法达成一致。",
            "options": ["まちまち", "いっち", "たんじゅん", "かんたん"],
            "answer": "まちまち"
        }
    },
    {
        "word": "無造作",
        "word_html": "<ruby>無<rt>む</rt></ruby><ruby>造<rt>ぞう</rt></ruby><ruby>作<rt>さ</rt></ruby>",
        "tone": "2",
        "pos": "な形",
        "mean": "随手、漫不经心；轻易、毫不费力",
        "nuance": "1. 不假思索，不加修饰，随随便便地做某事。\n2. 做起来很简单，不费功夫。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>書<rt>しょ</rt></ruby><ruby>類<rt>るい</rt></ruby>を<span class='ex-highlight'><ruby>無<rt>む</rt></ruby><ruby>造<rt>ぞう</rt></ruby><ruby>作<rt>さ</rt></ruby>に</span><ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>投<rt>な</rt></ruby>げ<ruby>出<rt>だ</rt></ruby>した。", "cn": "他把文件漫不经心地扔在了桌子上。" },
            { "jp": "<ruby>難<rt>なん</rt></ruby><ruby>問<rt>もん</rt></ruby>を<span class='ex-highlight'><ruby>無<rt>む</rt></ruby><ruby>造<rt>ぞう</rt></ruby><ruby>作<rt>さ</rt></ruby>に</span><ruby>解<rt>と</rt></ruby>いてみせた。", "cn": "毫不费力地解开了难题。" }
        ],
        "practice": {
            "sentence": "この<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>は<ruby>彼<rt>かれ</rt></ruby>にとって<span class='ex-highlight'>____</span>に<ruby>解<rt>と</rt></ruby>けるらしい。",
            "cn": "这个问题对他来说似乎能轻松解开。",
            "options": ["むぞうさ", "むやみ", "ふとう", "おおげさ"],
            "answer": "むぞうさ"
        }
    },
    {
        "word": "無闇",
        "word_html": "<ruby>無<rt>む</rt></ruby><ruby>闇<rt>やみ</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "胡乱、盲目；过度、无节制",
        "nuance": "1. 不考虑后果或缘由，随便乱做。\n2. 程度过重，常以「無闇に」的形式作副词使用。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>無<rt>む</rt></ruby><ruby>闇<rt>やみ</rt></ruby>に</span><ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>むのは<ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>だ。", "cn": "胡乱吃药是很危险的。" },
            { "jp": "<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>、<span class='ex-highlight'><ruby>無<rt>む</rt></ruby><ruby>闇<rt>やみ</rt></ruby>に</span><ruby>喉<rt>のど</rt></ruby>が<ruby>渴<rt>かわ</rt></ruby>く。", "cn": "最近总是异常口渴。" }
        ],
        "practice": {
            "sentence": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>お<rt>お</rt></ruby><ruby>酒<rt>さけ</rt></ruby>を<span class='ex-highlight'>____</span>に<ruby>飲<rt>の</rt></ruby>みすぎて<ruby>体<rt>からだ</rt></ruby>を<ruby>壊<rt>こわ</rt></ruby>した。",
            "cn": "他酒喝得太没节制，结果把身体弄坏了。",
            "options": ["むやみ", "むぞうさ", "ちゃくじつ", "たんてき"],
            "answer": "むやみ"
        }
    },
    {
        "word": "無念",
        "word_html": "<ruby>無<rt>む</rt></ruby><ruby>念<rt>ねん</rt></ruby>",
        "tone": "1",
        "pos": "な形",
        "mean": "遗憾、懊悔",
        "nuance": "1. 因未能达到目的而感到极其不甘心和悔恨。",
        "examples": [
            { "jp": "あと<ruby>一<rt>いっ</rt></ruby><ruby>歩<rt>ぽ</rt></ruby>で<ruby>優<rt>ゆう</rt></ruby><ruby>勝<rt>しょう</rt></ruby>を<ruby>逃<rt>のが</rt></ruby>し、<span class='ex-highlight'><ruby>無<rt>む</rt></ruby><ruby>念<rt>ねん</rt></ruby>だ</span>。", "cn": "只差一步错失了冠军，非常遗憾。" }
        ],
        "practice": {
            "sentence": "<ruby>試<rt>し</rt></ruby><ruby>験<rt>けん</rt></ruby>に<ruby>落<rt>お</rt></ruby>ちて、<span class='ex-highlight'>____</span>に<ruby>思<rt>おも</rt></ruby>っている。",
            "cn": "考试落榜了，心里很不甘。",
            "options": ["むねん", "むやみ", "ふとう", "ささい"],
            "answer": "むねん"
        }
    },
    {
        "word": "無性",
        "word_html": "<ruby>無<rt>む</rt></ruby><ruby>性<rt>しょう</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "极其、莫名其妙地",
        "nuance": "1. 找不到具体原因，但某种感情或冲动非常强烈，常作副词「無性に」使用。",
        "examples": [
            { "jp": "<ruby>夜<rt>よ</rt></ruby><ruby>中<rt>じゅう</rt></ruby>になると、<span class='ex-highlight'><ruby>無<rt>む</rt></ruby><ruby>性<rt>しょう</rt></ruby>に</span>ラーメンが<ruby>食<rt>た</rt></ruby>べたくなる。", "cn": "一到半夜，就莫名其妙地特别想吃拉面。" }
        ],
        "practice": {
            "sentence": "<ruby>雨<rt>あめ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>になると、<span class='ex-highlight'>____</span>に<ruby>甘<rt>あま</rt></ruby>いものが<ruby>食<rt>た</rt></ruby>べたくなる。",
            "cn": "一到下雨天，就特别想吃甜食。",
            "options": ["むしょう", "むねん", "おおげさ", "てきとう"],
            "answer": "むしょう"
        }
    },
    {
        "word": "不審",
        "word_html": "<ruby>不<rt>ふ</rt></ruby><ruby>審<rt>しん</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "可疑、疑问",
        "nuance": "1. 觉得事情奇怪、不正常而产生怀疑。",
        "examples": [
            { "jp": "<ruby>近<rt>きん</rt></ruby><ruby>所<rt>じょ</rt></ruby>で<span class='ex-highlight'><ruby>不<rt>ふ</rt></ruby><ruby>審<rt>しん</rt></ruby>な</span><ruby>人<rt>じん</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>がうろうろしている。", "cn": "附近有个可疑的人在徘徊。" }
        ],
        "practice": {
            "sentence": "<ruby>夜<rt>よる</rt></ruby><ruby>遅<rt>おそ</rt></ruby>く<ruby>車<rt>くるま</rt></ruby>を<ruby>見<rt>み</rt></ruby>まわしている<ruby>人<rt>ひと</rt></ruby>が<span class='ex-highlight'>____</span>に<ruby>思<rt>おも</rt></ruby>える。",
            "cn": "深夜有个可疑的人在车旁徘徊，让人觉得不放心。",
            "options": ["ふしん", "むやみ", "ささい", "ちゃくじつ"],
            "answer": "ふしん"
        }
    },
    {
        "word": "不評",
        "word_html": "<ruby>不<rt>ふ</rt></ruby><ruby>評<rt>ひょう</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "不受欢迎、评价差",
        "nuance": "1. 反响不好，风评不佳",
        "examples": [
            { "jp": "その<ruby>新<rt>あたら</rt></ruby>しいルールは<ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>たちの<ruby>間<rt>あいだ</rt></ruby>で<span class='ex-highlight'><ruby>不<rt>ふ</rt></ruby><ruby>評<rt>ひょう</rt></ruby>だ</span>。", "cn": "那个新规定在学生们中间评价很差。" }
        ],
        "practice": {
            "sentence": "その<ruby>店<rt>みせ</rt></ruby>の<ruby>接<rt>せっ</rt></ruby><ruby>客<rt>きゃく</rt></ruby>は<ruby>客<rt>きゃく</rt></ruby>に<span class='ex-highlight'>____</span>で、<ruby>評<rt>ひょう</rt></ruby><ruby>判<rt>ばん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い。",
            "cn": "那家店的接客服务不受顾客欢迎，口碑不好。",
            "options": ["ふひょう", "むねん", "おおげさ", "せんさい"],
            "answer": "ふひょう"
        }
    },
    {
        "word": "不用意",
        "word_html": "<ruby>不<rt>ふ</rt></ruby><ruby>用<rt>よう</rt></ruby><ruby>意<rt>い</rt></ruby>",
        "tone": "2",
        "pos": "な形",
        "mean": "不经意、不小心",
        "nuance": "1. 说话或做事没有经过慎重考虑，缺乏防备和警觉心",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<span class='ex-highlight'><ruby>不<rt>ふ</rt></ruby><ruby>用<rt>よう</rt></ruby><ruby>意<rt>い</rt></ruby>な</span><ruby>一<rt>ひと</rt></ruby><ruby>言<rt>こと</rt></ruby>が、チームを<ruby>混<rt>こん</rt></ruby><ruby>乱<rt>らん</rt></ruby>させてしまった。", "cn": "他不经意的一句话，让团队陷入了混乱。" }
        ],
        "practice": {
            "sentence": "<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>で<span class='ex-highlight'>____</span>な<ruby>発<rt>はつ</rt></ruby><ruby>言<rt>げん</rt></ruby>をして、<ruby>困<rt>こま</rt></ruby>らせてしまった。",
            "cn": "在会议上说了不谨慎的话，给别人添了麻烦。",
            "options": ["ふようい", "ふしん", "むやみ", "ささい"],
            "answer": "ふようい"
        }
    },
    {
        "word": "不意",
        "word_html": "<ruby>不<rt>ふ</rt></ruby><ruby>意<rt>い</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "突然、出乎意料",
        "nuance": "1. 事情发生得毫无征兆，完全没有料想到",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>不<rt>ふ</rt></ruby><ruby>意<rt>い</rt></ruby>の</span><ruby>来<rt>らい</rt></ruby><ruby>客<rt>きゃく</rt></ruby>で、<ruby>慌<rt>あわ</rt></ruby>てて<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>を<ruby>片<rt>かた</rt></ruby><ruby>付<rt>づ</rt></ruby>けた。", "cn": "因为突然的来客，慌忙收拾了房间。" }
        ],
        "practice": {
            "sentence": "<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>から<span class='ex-highlight'>____</span>の<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>がかかってきて<ruby>驚<rt>おどろ</rt></ruby>いた。",
            "cn": "朋友突然打来电话，让我吓了一跳。",
            "options": ["ふい", "ふようい", "むねん", "おおげさ"],
            "answer": "ふい"
        }
    },
    {
        "word": "惨め",
        "word_html": "<ruby>惨<rt>みじ</rt></ruby>め",
        "tone": "0",
        "pos": "な形",
        "mean": "凄惨、悲惨",
        "nuance": "1. 处境或样子非常可怜，让人看不下去",
        "examples": [
            { "jp": "<ruby>全<rt>ぜん</rt></ruby><ruby>財<rt>ざい</rt></ruby><ruby>産<rt>さん</rt></ruby>を<ruby>失<rt>うしな</rt></ruby>い、<span class='ex-highlight'><ruby>惨<rt>みじ</rt></ruby>めな</span><ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>っている。", "cn": "失去了所有财产，过着凄惨的生活。" }
        ],
        "practice": {
            "sentence": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>借<rt>しゃっ</rt></ruby><ruby>金<rt>きん</rt></ruby>で<span class='ex-highlight'>____</span>な<ruby>日<rt>にち</rt></ruby>を<ruby>送<rt>おく</rt></ruby>っている。",
            "cn": "他因为债务过着凄惨的日子。",
            "options": ["みじめ", "むやみ", "ふとう", "ちゃくじつ"],
            "answer": "みじめ"
        }
    },
    {
        "word": "億劫",
        "word_html": "<ruby>億<rt>おっ</rt></ruby><ruby>劫<rt>くう</rt></ruby>",
        "tone": "3",
        "pos": "な形",
        "mean": "嫌麻烦、懒得动弹",
        "nuance": "1. 觉得事情麻烦，提不起劲去做，嫌烦",
        "examples": [
            { "jp": "<ruby>雨<rt>あめ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>は<ruby>外<rt>そと</rt></ruby>に<ruby>出<rt>で</rt></ruby>るのが<span class='ex-highlight'><ruby>億<rt>おっ</rt></ruby><ruby>劫<rt>くう</rt></ruby>に</span>なる。", "cn": "下雨天连出门都觉得嫌麻烦。" }
        ],
        "practice": {
            "sentence": "<ruby>寒<rt>さむ</rt></ruby>い<ruby>朝<rt>あさ</rt></ruby>は<ruby>布<rt>ふ</rt></ruby><ruby>団<rt>とん</rt></ruby>を<ruby>出<rt>で</rt></ruby>るのが<span class='ex-highlight'>____</span>だ。",
            "cn": "寒冷的早晨，连从被窝里出来都觉得麻烦。",
            "options": ["おっくう", "ふい", "むねん", "ささい"],
            "answer": "おっくう"
        }
    },
];
const DAY13_WORDS = [
{
        "word": "多忙",
        "word_html": "<ruby>多<rt>た</rt></ruby><ruby>忙<rt>ぼう</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "繁忙、极忙",
        "nuance": "1. 事务非常多，处于非常忙碌的状态。",
        "examples": [
            { "jp": "<ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は<span class='ex-highlight'><ruby>多<rt>た</rt></ruby><ruby>忙<rt>ぼう</rt></ruby>な</span><ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby>を<ruby>送<rt>おく</rt></ruby>っている。", "cn": "社长每天都过得很忙碌。" }
        ],
        "practice": {
            "sentence": "プロジェクトの<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>りが<ruby>近<rt>ちか</rt></ruby>づき、チーム<ruby>全<rt>ぜん</rt></ruby><ruby>体<rt>たい</rt></ruby>が<span class='ex-highlight'>____</span>を<ruby>極<rt>きわ</rt></ruby>めている。",
            "cn": "项目截止日期临近，整个团队忙得不可开交。",
            "options": ["たぼう", "ひま", "ゆうくん", "あんい"],
            "answer": "たぼう"
        }
    },
    {
        "word": "ひっきりなし",
        "word_html": "ひっきりなし",
        "tone": "5",
        "pos": "な形",
        "mean": "接连不断、连续不断",
        "nuance": "1. 事物不间断地发生，常以「ひっきりなしに」的形式作副词使用。",
        "examples": [
            { "jp": "<ruby>今<rt>きょ</rt></ruby><ruby>日<rt>う</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>から、<span class='ex-highlight'>ひっきりなしに</span><ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>がかかってくる。", "cn": "今天从早上开始，电话就接连不断地打来。" }
        ],
        "practice": {
            "sentence": "イベント<ruby>開<rt>かい</rt></ruby><ruby>始<rt>し</rt></ruby>と<ruby>同<rt>どう</rt></ruby>じ<ruby>時<rt>じ</rt></ruby>に、<ruby>来<rt>らい</rt></ruby><ruby>場<rt>じょう</rt></ruby>し<ruby>来<rt>らい</rt></ruby><ruby>客<rt>きゃく</ruby>が<span class='ex-highlight'>____</span>に<ruby>列<rt>れつ</ruby>を<ruby>作<rt>つく</ruby>り<ruby>始<rt>はじ</rt></ruby>めた。",
            "cn": "活动一开始，来客就络绎不绝地来了。",
            "options": ["ひっきりなし", "たまに", "ゆっくり", "ふつう"],
            "answer": "ひっきりなし"
        }
    },
    {
        "word": "猛烈",
        "word_html": "<ruby>猛<rt>もう</rt></ruby><ruby>烈<rt>れつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "猛烈、激烈",
        "nuance": "1. 势头、程度非常强大，超乎寻常。",
        "examples": [
            { "jp": "<ruby>台<rt>たい</rt></ruby><ruby>風<rt>ふう</rt></ruby>の<ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby>で、<span class='ex-highlight'><ruby>猛<rt>猛</rt></ruby><ruby>烈<rt>れつ</rt></ruby>な</span><ruby>風<rt>かぜ</rt></ruby>が<ruby>吹<rt>ふ</rt></ruby>いている。", "cn": "受台风影响，正刮着猛烈的大风。" }
        ],
        "practice": {
            "sentence": "エンジンが<span class='ex-highlight'>____</span>な<ruby>音<rt>おと</rt></ruby>を<ruby>立<rt>た</rt></ruby>てながら、スピードを<ruby>上<rt>あ</rt></ruby>げていく。",
            "cn": "引擎发出猛烈的声音，不断加速。",
            "options": ["もうれつ", "かるい", "しずか", "ゆるやか"],
            "answer": "もうれつ"
        }
    },
    {
        "word": "皮肉",
        "word_html": "<ruby>皮<rt>ひ</rt></ruby><ruby>肉<rt>にく</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "讽刺、挖苦；事与愿违",
        "nuance": "1. 说话带刺，讥讽别人。\n2. 结果与预期完全相反，带有一种讽刺感。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>皮<rt>ひ</rt></ruby><ruby>肉<rt>にく</rt></ruby>な</span><ruby>笑<rt>え</rt></ruby>みを<ruby>浮<rt>う</rt></ruby>かべた。", "cn": "他浮现出一丝讽刺的微笑。" },
            { "jp": "<ruby>雨<rt>あめ</rt></ruby>を<ruby>待<rt>ま</rt></ruby>っていたのに、<ruby>洗<rt>せん</rt></ruby><ruby>濯<rt>たく</rt></ruby>をしたら<ruby>晴<rt>は</rt></ruby>れるとは<span class='ex-highlight'><ruby>皮<rt>ひ</rt></ruby><ruby>肉<rt>にく</rt></ruby>な</span>ものだ。", "cn": "一直等雨来，一洗衣服就天晴了，真是讽刺。" }
        ],
        "practice": {
            "sentence": "いつも<ruby>遅<rt>ち</rt></ruby>れるくせに、<ruby>今<rt>こん</rt></ruby><ruby>日<rt>にち</rt></ruby>だけは<ruby>早<rt>はや</rt></ruby>く<ruby>来<rt>き</rt></ruby>たとは<span class='ex-highlight'>____</span>な<ruby>も<rt>も</rt></ruby>のだ。",
            "cn": "他明明总是迟到，偏偏今天来得很早，真是讽刺。",
            "options": ["ひにく", "ただしい", "ふつう", "うれしい"],
            "answer": "ひにく"
        }
    },
    {
        "word": "露骨",
        "word_html": "<ruby>露<rt>ろ</rt></ruby><ruby>骨<rt>こつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "露骨、毫无掩饰",
        "nuance": "1. 感情、欲望或意图不加遮掩地表现出来，往往给人不快感。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>不<rt>ふ</rt></ruby><ruby>快<rt>かい</rt></ruby>な<ruby>気<rt>き</rt></ruby><ruby>持<rt>もち</rt></ruby>を<span class='ex-highlight'><ruby>露<rt>ろ</rt></ruby><ruby>骨<rt>こつ</rt></ruby>に</span><ruby>顔<rt>かお</rt></ruby>に<ruby>出<rt>だ</rt></ruby>した。", "cn": "他把不快的情绪露骨地表现在了脸上。" }
        ],
        "practice": {
            "sentence": "その<ruby>俳<rt>はい</rt></ruby><ruby>優<rt>ゆう</rt></ruby>は<ruby>観<rt>かん</rt></ruby><ruby>客<rt>きゃく</rt></ruby>を<ruby>怒<rt>おこ</rt></ruby>らせるような<span class='ex-highlight'>____</span>な<ruby>発<rt>はつ</rt></ruby><ruby>言<rt>げん</rt></ruby>をした。",
            "cn": "那位演员发表了会激怒观众的露骨言论。",
            "options": ["ろこつ", "ていねい", "おもしろ", "あいぼう"],
            "answer": "ろこつ"
        }
    },
    {
        "word": "適当",
        "word_html": "<ruby>適<rt>てき</rt></ruby><ruby>当<rt>とう</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "适当、恰当；马虎、敷衍",
        "nuance": "1. （褒义）正好符合某种目的或要求。\n2. （贬义）做事随随便便，不负责任。",
        "examples": [
            { "jp": "その<ruby>仕事<rt>しごと</rt></ruby>に<span class='ex-highlight'><ruby>適<rt>てき</rt></ruby><ruby>当<rt>とう</rt></ruby>な</span><ruby>人<rt>ひと</rt></ruby>を<ruby>探<rt>さが</rt></ruby>している。", "cn": "正在寻找适合那项工作的人。" },
            { "jp": "<span class='ex-highlight'><ruby>適<rt>てき</rt></ruby><ruby>当<rt>とう</rt></ruby>な</span><ruby>返<rt>へん</rt></ruby><ruby>事<rt>じ</rt></ruby>をしてその<ruby>場<rt>ば</rt></ruby>を<ruby>逃<rt>に</rt></ruby>げた。", "cn": "随口敷衍了几句就溜了。" }
        ],
        "practice": {
            "sentence": "この<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>については、もっと<span class='ex-highlight'>____</span>な<ruby>対<rt>たい</rt></ruby><ruby>応<rt>おう</rt></ruby>が<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>だ。",
            "cn": "关于这个问题，需要更合适的应对。",
            "options": ["てきとう", "いいかげん", "ふかん", "おおげさ"],
            "answer": "てきとう"
        }
    },
    {
        "word": "平気",
        "word_html": "<ruby>平<rt>へい</rt></ruby><ruby>気<rt>き</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "满不在乎、毫不在意；没事、没关系",
        "nuance": "1. 面对负面情况内心毫无波动，不当回事。\n2. 身体或状态没有受到影响，不需要担心。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>平<rt>へい</rt></ruby><ruby>気<rt>き</rt></ruby>な</span><ruby>顔<rt>かお</rt></ruby>でひどいことを<ruby>言<rt>い</rt></ruby>う。", "cn": "他一脸满不在乎地说着过分的话。" },
            { "jp": "<ruby>少<rt>すこ</rt></ruby>し<ruby>熱<rt>ねつ</rt></ruby>があるが、このくらいなら<span class='ex-highlight'><ruby>平<rt>へい</rt></ruby><ruby>気<rt>き</rt></ruby>だ</span>。", "cn": "虽然有点发烧，但这种程度没关系。" }
        ],
        "practice": {
            "sentence": "あの<ruby>人<rt>ひと</rt></ruby>は<ruby>批<rt>ひ</rt></ruby><ruby>判<rt>はん</rt></ruby>されても<span class='ex-highlight'>____</span>だ。",
            "cn": "那个人即使被批评也满不在乎。",
            "options": ["へいき", "きずつ", "しんぱい", "かなしい"],
            "answer": "へいき"
        }
    },
    {
        "word": "煩雑",
        "word_html": "<ruby>煩<rt>はん</rt></ruby><ruby>雑<rt>ざつ</rt></ruby>",
        "tone": "0",
        "pos": "な形",
        "mean": "繁杂、烦琐",
        "nuance": "1. 手续、程序或事务等复杂繁多，让人感到极其麻烦。",
        "examples": [
            { "jp": "そのシステムを<ruby>導<rt>どう</rt></ruby><ruby>入<rt>にゅう</rt></ruby>すれば、<span class='ex-highlight'><ruby>煩<rt>はん</rt></ruby><ruby>雑<rt>ざつ</rt></ruby>な</span><ruby>手<rt>て</rt></ruby><ruby>続<rt>つづ</rt></ruby>きを<ruby>省<rt>しょう</rt></ruby><ruby>略<rt>りゃく</rt></ruby>できる。", "cn": "如果引入那个系统，就能省略繁杂的手续。" }
        ],
        "practice": {
            "sentence": "この<ruby>申<rt>しん</rt></ruby><ruby>請<rt>せい</rt></ruby>の<ruby>流<rt>りゅう</rt></ruby>れは<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>も<ruby>手<rt>て</rt></ruby><ruby>間<rt>ま</rt></ruby>もかかる<span class='ex-highlight'>____</span>だ。",
            "cn": "这个申请流程又费时间又费工夫，十分繁杂。",
            "options": ["はんざつ", "かんたん", "すいてい", "りっぱ"],
            "answer": "はんざつ"
        }
    },
    {
        "word": "ユニーク",
        "word_html": "ユニーク",
        "tone": "2",
        "pos": "な形",
        "mean": "独特、独一无二",
        "nuance": "1. 与众不同，具有极强的独创性或个性。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>のアイデアはいつも<span class='ex-highlight'>ユニークだ</span>。", "cn": "他的主意总是很独特。" }
        ],
        "practice": {
            "sentence": "このアート<ruby>作<rt>さく</rt></ruby><ruby>品<rt>ひん</rt></ruby>は<ruby>他<rt>ほか</rt></ruby>に<ruby>類<rt>るい</rt></ruby>を<ruby>見<rt>み</rt></ruby>ない<span class='ex-highlight'>____</span>なデザインだ。",
            "cn": "这件艺术作品设计独特，找不到类似的作品。",
            "options": ["ユニーク", "シンプル", "ノーマル", "マイナー"],
            "answer": "ユニーク"
        }
    },
    {
        "word": "シンプル",
        "word_html": "シンプル",
        "tone": "1",
        "pos": "な形",
        "mean": "简单、简洁",
        "nuance": "1. 没有多余的装饰，结构、设计或想法不复杂。",
        "examples": [
            { "jp": "この<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>は<span class='ex-highlight'>シンプル</span>で<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>く。", "cn": "这个房间布置得很简洁，让人感到心境平和。" }
        ],
        "practice": {
            "sentence": "この<ruby>家<rt>いえ</rt></ruby>のインテリアは<span class='ex-highlight'>____</span>で、<ruby>過<rt>か</rt></ruby>ごし<ruby>や<rt>や</rt></ruby>すい。",
            "cn": "这栋房子的室内装饰很简洁，住起来很舒服。",
            "options": ["シンプル", "コンプレックス", "カラフル", "ハード"],
            "answer": "シンプル"
        }
    },
    {
        "word": "エレガント",
        "word_html": "エレガント",
        "tone": "1",
        "pos": "な形",
        "mean": "优雅、高贵",
        "nuance": "1. 举止、服装或设计等充满品味，显得高雅脱俗。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'>エレガントな</span>ドレスを<ruby>着<rt>き</rt></ruby>てパーティーに<ruby>現<rt>あらわ</rt></ruby>れた。", "cn": "她穿着优雅的礼服出现在派对上。" }
        ],
        "practice": {
            "sentence": "このホテルのロビーは<span class='ex-highlight'>____</span>なインテリアで、<ruby>寛<rt>くつろ</rt></ruby>げる。",
            "cn": "这家酒店的大堂装饰优雅，让人放松。",
            "options": ["エレガント", "カジュアル", "シンプル", "ラフ"],
            "answer": "エレガント"
        }
    }, 
    {
        "word": "クール",
        "word_html": "クール",
        "tone": "1",
        "pos": "な形",
        "mean": "冷静、冷酷；帅气、酷",
        "nuance": "1. 遇到事情不慌乱，或者态度冷淡不带感情。\n2. 外表、行为或风格非常有魅力，受人欢迎。",
        "examples": [
            { "jp": "トラブルが<ruby>起<rt>お</rt></ruby>きても、<ruby>彼<rt>かれ</rt></ruby>は<ruby>常<rt>つね</rt></ruby>に<span class='ex-highlight'>クールに<ruby>対<rt>たい</rt></ruby><ruby>処<rt>しょ</rt></ruby>する</span>。", "cn": "即使发生纠纷，他也总是冷静地应对。" },
            { "jp": "そのレザージャケット、とても<span class='ex-highlight'>クール</span>だね。", "cn": "那件皮夹克真酷啊。" }
        ],
        "practice": {
            "sentence": "プレゼンの<ruby>質<rt>しつ</rt></ruby><ruby>問<rt>もん</rt></ruby>に<span class='ex-highlight'>____</span>に<ruby>答<rt>こた</rt></ruby>えた。",
            "cn": "他冷静地回答了演示中的提问。",
            "options": ["クール", "ホット", "ウォーム", "ダーク"],
            "answer": "クール"
        }
    },
    {
        "word": "モダン",
        "word_html": "モダン",
        "tone": "2",
        "pos": "な形",
        "mean": "现代、摩登",
        "nuance": "1. 具有现代感，符合当下的审美或新潮趋势。",
        "examples": [
            { "jp": "この<ruby>美<rt>び</rt></ruby><ruby>術<rt>じゅつ</rt></ruby><ruby>館<rt>かん</rt></ruby>は<span class='ex-highlight'>モダンな<ruby>建<rt>けん</rt></ruby><ruby>築<rt>ちく</rt></ruby>スタイル</span>を<ruby>採<rt>さい</rt></ruby><ruby>用<rt>よう</rt></ruby>している。", "cn": "这家美术馆采用了现代的建筑风格。" }
        ],
        "practice": {
            "sentence": "このカフェは<span class='ex-highlight'>____</span>なデザインで、<ruby>若<rt>わか</rt></ruby>い<ruby>客<rt>きゃく</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い。",
            "cn": "这家咖啡馆设计现代，年轻客人很多。",
            "options": ["モダン", "クラシック", "レトロ", "アンティーク"],
            "answer": "モダン"
        }
    },
    {
        "word": "シビア",
        "word_html": "シビア",
        "tone": "1",
        "pos": "な形",
        "mean": "严厉、苛刻",
        "nuance": "1. 标准或要求极高，不容许任何妥协或失败。",
        "examples": [
            { "jp": "プロのスポーツの<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby>はとても<span class='ex-highlight'>シビア</span>だ。", "cn": "职业体育的世界是非常严酷苛刻的。" }
        ],
        "practice": {
            "sentence": "この<ruby>試<rt>し</rt></ruby><ruby>験<rt>けん</rt></ruby>は<ruby>合<rt>ごう</rt></ruby><ruby>格<rt>かく</rt></ruby>ラインが<span class='ex-highlight'>____</span>で、<ruby>落<rt>お</rt></ruby>ちる<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い。",
            "cn": "这场考试合格线很严，落榜的人很多。",
            "options": ["シビア", "アバウト", "ルーズ", "イージー"],
            "answer": "シビア"
        }
    },
    {
        "word": "ドライ",
        "word_html": "ドライ",
        "tone": "2",
        "pos": "な形（名）",
        "mean": "冷淡、讲求实际；干燥",
        "nuance": "1. 指人处理事情不讲情面，不感性用事，非常现实。\n2. 没有水分的状态。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>に<ruby>対<rt>たい</rt></ruby>してとても<span class='ex-highlight'>ドライだ</span>。", "cn": "他对工作非常冷淡现实。" },
            { "jp": "<span class='ex-highlight'>ドライな<ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby></span>で<ruby>肌<rt>はだ</rt></ruby>が<ruby>荒<rt>あ</rt></ruby>れる。", "cn": "空气干燥导致皮肤粗糙。" }
        ],
        "practice": {
            "sentence": "この<ruby>国<rt>くに</rt></ruby>は<ruby>冬<rt>ふゆ</rt></ruby>になると<span class='ex-highlight'>____</span>な<ruby>気<rt>くう</rt></ruby><ruby>候<rt>こう</rt></ruby>になる。",
            "cn": "这个国家到了冬天会变得气候干燥。",
            "options": ["ドライ", "ウェット", "ソフト", "マイルド"],
            "answer": "ドライ"
        }
    },
    {
        "word": "ナイーブ",
        "word_html": "ナイーブ",
        "tone": "2",
        "pos": "な形",
        "mean": "敏感、容易受伤；纯真、纯洁",
        "nuance": "1. 指感情细腻、容易受到外界刺激。\n2. 思想单纯，没有被世俗污染（注意：日语中该词多为褒义，指纯真，不同于英语的幼稚）。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'>ナイーブな<ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby></span>で、ちょっとした<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>にも<ruby>傷<rt>きず</rt></ruby>つく。", "cn": "他性格敏感，别人随口一句话都会让他受伤。" },
            { "jp": "<ruby>若<rt>わか</rt></ruby><ruby>者<rt>もの</rt></ruby>の<span class='ex-highlight'>ナイーブな<ruby>感<rt>かん</rt></ruby><ruby>性<rt>せい</rt></ruby></span>を<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>にしたい。", "cn": "想珍视年轻人纯真的感性。" }
        ],
        "practice": {
            "sentence": "この<ruby>子<rt>こ</rt></ruby>は<span class='ex-highlight'>____</span>で、<ruby>微<rt>び</rt></ruby><ruby>妙<rt>みょう</rt></ruby>な<ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>に<ruby>気<rt>き</rt></ruby>づく。",
            "cn": "这个孩子很敏感，能察觉细微的气氛。",
            "options": ["ナイーブ", "タフ", "ワイルド", "クール"],
            "answer": "ナイーブ"
        }
    },
    {
        "word": "ストレート",
        "word_html": "ストレート",
        "tone": "3",
        "pos": "な形（名）",
        "mean": "直率、直接",
        "nuance": "1. 说话做事不拐弯抹角，坦率。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<span class='ex-highlight'>ストレートな<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby></span>は、<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>で<ruby>評<rt>ひょう</rt></ruby><ruby>価<rt>か</rt></ruby>された。", "cn": "他在会议上直率的意见受到了好评。" }
        ],
        "practice": {
            "sentence": "この<ruby>人<rt>ひと</rt></ruby>の<span class='ex-highlight'>____</span>な<ruby>物<rt>もの</rt></ruby><ruby>言<rt>い</rt></ruby>いは<ruby>信<rt>しん</rt></ruby><ruby>頼<rt>らい</rt></ruby>できる。",
            "cn": "这个人说话直率，值得信赖。",
            "options": ["ストレート", "カーブ", "トリッキー", "シャープ"],
            "answer": "ストレート"
        }
    },
    {
        "word": "タフ",
        "word_html": "タフ",
        "tone": "1",
        "pos": "な形",
        "mean": "顽强、坚韧",
        "nuance": "1. 体力或精神上非常强壮，能承受艰苦的条件或巨大的压力。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はとても<span class='ex-highlight'>タフな<ruby>人<rt>ひと</rt></ruby></span>で、<ruby>三<rt>さん</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>間<rt>かん</rt></ruby><ruby>徹<rt>てつ</rt></ruby><ruby>夜<rt>や</rt></ruby>しても<ruby>平<rt>へい</rt></ruby><ruby>気<rt>き</rt></ruby>だ。", "cn": "他是个极其坚韧的人，就算熬夜三天也没事。" }
        ],
        "practice": {
            "sentence": "この<ruby>部<rt>ぶ</rt></ruby><ruby>隊<rt>たい</rt></ruby>の<ruby>隊<rt>たい</rt></ruby><ruby>員<rt>いん</rt></ruby>は<span class='ex-highlight'>____</span>で、<ruby>厳<rt>きび</rt></ruby>しい<ruby>訓<rt>くん</rt></ruby><ruby>練<rt>れん</rt></ruby>にも<ruby>耐<rt>た</rt></ruby>える。",
            "cn": "这支部队的队员很坚韧，能承受严格训练。",
            "options": ["タフ", "デリケート", "センシティブ", "ソフト"],
            "answer": "タフ"
        }
    },
    {
        "word": "タイト",
        "word_html": "タイト",
        "tone": "1",
        "pos": "な形",
        "mean": "紧凑、紧张；紧身、紧贴",
        "nuance": "1. 日程安排、预算或期限等没有余地，排得很满。\n2. 衣服等紧紧贴在身上。",
        "examples": [
            { "jp": "<ruby>今<rt>こん</rt></ruby><ruby>週<rt>しゅう</rt></ruby>は<span class='ex-highlight'>タイトなスケジュール</span>で<ruby>動<rt>うご</rt></ruby>いている。", "cn": "这周正按照紧凑的日程在活动。" },
            { "jp": "<span class='ex-highlight'>タイトなスカート</span>をはく。", "cn": "穿紧身裙。" }
        ],
        "practice": {
            "sentence": "この<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby><ruby>程<rt>てい</rt></ruby>は<span class='ex-highlight'>____</span>で、<ruby>休<rt>やす</rt></ruby>む<ruby>暇<rt>ひま</rt></ruby>がない。",
            "cn": "这次会议日程很紧，几乎没有休息时间。",
            "options": ["タイト", "ルーズ", "ワイド", "ラフ"],
            "answer": "タイト"
        }
    },
    {
        "word": "ハード",
        "word_html": "ハード",
        "tone": "1",
        "pos": "な形",
        "mean": "繁重、艰苦",
        "nuance": "1. 训练、工作或日程等强度很大，非常累人。",
        "examples": [
            { "jp": "<span class='ex-highlight'>ハードな<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby></span>を<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>えて、チームは<ruby>強<rt>つよ</rt></ruby>くなった。", "cn": "克服了艰苦的训练，队伍变强了。" }
        ],
        "practice": {
            "sentence": "この<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>は<span class='ex-highlight'>____</span>で、<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>疲<rt>つか</rt></ruby>れている。",
            "cn": "这份工作很辛苦，每天都让人很累。",
            "options": ["ハード", "ソフト", "イージー", "ライト"],
            "answer": "ハード"
        }
    },
    {
        "word": "デリケート",
        "word_html": "デリケート",
        "tone": "3",
        "pos": "な形",
        "mean": "微妙、棘手；敏感、娇嫩",
        "nuance": "1. 问题、立场或人的心理等需要极为小心谨慎地处理，稍有不慎就会惹麻烦。\n2. 体质、皮肤或精密仪器等容易受外部环境影响而产生不适或故障。",
        "examples": [
            { "jp": "それは<ruby>非<rt>ひ</rt></ruby><ruby>常<rt>じょう</rt></ruby>に<span class='ex-highlight'>デリケートな<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby></span>なので、<ruby>慎<rt>しん</rt></ruby><ruby>重<rt>じゅう</rt></ruby>に<ruby>扱<rt>あつか</rt></ruby>うべきだ。", "cn": "那是极其棘手的问题，应该慎重处理。" },
            { "jp": "<ruby>赤<rt>あか</rt></ruby>ちゃんの<span class='ex-highlight'>デリケートな<ruby>肌<rt>はだ</rt></ruby></span>を<ruby>守<rt>まも</rt></ruby>る。", "cn": "保护婴儿娇嫩的肌肤。" }
        ],
        "practice": {
            "sentence": "この<ruby>話<rt>はなし</rt></ruby>は<span class='ex-highlight'>____</span>なので、<ruby>場<rt>ば</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ばないと<ruby>失<rt>しっ</rt></ruby><ruby>礼<rt>れい</rt></ruby>になる。",
            "cn": "这个话题很敏感，不选场合说会很失礼。",
            "options": ["デリケート", "タフ", "ラフ", "ワイルド"],
            "answer": "デリケート"
        }
    },
    {
        "word": "コンスタント",
        "word_html": "コンスタント",
        "tone": "1",
        "pos": "な形",
        "mean": "恒定、持续",
        "nuance": "1. 保持一定的状态或节奏，不发生剧烈波动，常以「コンスタントに」的形式作副词使用。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>毎<rt>まい</rt></ruby><ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby><span class='ex-highlight'>コンスタントに</span><ruby>良<rt>よ</rt></ruby>い<ruby>成<rt>せい</rt></ruby><ruby>績<rt>せき</rt></ruby>を<ruby>収<rt>おさ</rt></ruby>めている。", "cn": "他每场比赛都持续取得着好成绩。" }
        ],
        "practice": {
            "sentence": "この<ruby>機<rt>き</rt></ruby><ruby>械<rt>かい</rt></ruby>は<span class='ex-highlight'>____</span>に<ruby>動<rt>うご</rt></ruby>いていて、<ruby>故<rt>こ</rt></ruby><ruby>障<rt>しょう</rt></ruby>がない。",
            "cn": "这台机器稳定运转，没有故障。",
            "options": ["コンスタント", "ランダム", "イレギュラー", "テンポラリー"],
            "answer": "コンスタント"
        }
    },
    {
        "word": "リーズナブル",
        "word_html": "リーズナブル",
        "tone": "1",
        "pos": "な形",
        "mean": "划算、公道",
        "nuance": "1. 价格合适，性价比高，不贵。",
        "examples": [
            { "jp": "このレストランは<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>が<ruby>美<rt>お</rt></ruby><ruby>味<rt>い</rt></ruby>しくて、<ruby>値<rt>ね</rt></ruby><ruby>段<rt>だん</rt></ruby>も<span class='ex-highlight'>リーズナブルだ</span>。", "cn": "这家餐厅菜很好吃，价格也很公道。" }
        ],
        "practice": {
            "sentence": "この<ruby>店<rt>みせ</rt></ruby>は<ruby>品<rt>しな</rt></ruby><ruby>質<rt>しつ</rt></ruby>がよくて、<ruby>値<rt>ね</rt></ruby><ruby>段<rt>だん</rt></ruby>も<span class='ex-highlight'>____</span>だ。",
            "cn": "这家店品质不错，价格也合理。",
            "options": ["リーズナブル", "エクスペンシブ", "リッチ", "プレミアム"],
            "answer": "リーズナブル"
        }
    },
    {
        "word": "スマート",
        "word_html": "スマート",
        "tone": "2",
        "pos": "な形",
        "mean": "苗条、匀称；利落、干练",
        "nuance": "1. 体型瘦削且好看（注意与英语原意“聪明”的巨大差异）。\n2. 动作、处理事情的方法或穿着打扮不拖泥带水，显得很潇洒。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'>スマートな<ruby>体<rt>たい</rt></ruby><ruby>型<rt>けい</rt></ruby></span>を<ruby>維<rt>い</rt></ruby><ruby>持<rt>じ</rt></ruby>している。", "cn": "她维持着苗条的体型。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はクレーム<ruby>対<rt>たい</rt></ruby><ruby>応<rt>おう</rt></ruby>を<span class='ex-highlight'>スマートに<ruby>解<rt>かい</rt></ruby><ruby>決<rt>けつ</rt></ruby>した</span>。", "cn": "他利落地解决了投诉问题。" }
        ],
        "practice": {
            "sentence": "このスーツは<span class='ex-highlight'>____</span>で、<ruby>着<rt>き</rt></ruby>こなしが<ruby>簡<rt>かん</rt></ruby><ruby>単<rt>たん</rt></ruby>だ。",
            "cn": "这套西装很利落，容易穿出好效果。",
            "options": ["スマート", "ルーズ", "ヘビー", "ワイド"],
            "answer": "スマート"
        }
    },
    {
        "word": "フランク",
        "word_html": "フランク",
        "tone": "2",
        "pos": "な形",
        "mean": "坦率、爽朗",
        "nuance": "1. 说话或态度直爽，不藏着掖着，没有架子。",
        "examples": [
            { "jp": "<ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は<ruby>若<rt>わか</rt></ruby><ruby>手<rt>て</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>と<span class='ex-highlight'>フランクに<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>を<ruby>交<rt>か</rt></ruby><ruby>換<rt>かん</rt></ruby>した</span>。", "cn": "社长和年轻员工坦率地交换了意见。" }
        ],
        "practice": {
            "sentence": "この<ruby>先<rt>せん</rt></ruby><ruby>輩<rt>ぱい</rt></ruby>は<span class='ex-highlight'>____</span>で、<ruby>話<rt>はな</rt></ruby>しかけやすい。",
            "cn": "这位前辈很坦率亲切，容易搭话。",
            "options": ["フランク", "シャイ", "ナーバス", "クール"],
            "answer": "フランク"
        }
    },
];
// Combine all words
const ALL_DEFINED_WORDS = [
    ...DAY1_WORDS, 
    ...DAY2_WORDS, 
    ...DAY3_WORDS, 
    ...DAY4_WORDS,
    ...DAY5_WORDS,
    ...DAY6_WORDS,
    ...DAY7_WORDS,
    ...DAY8_WORDS,
    ...DAY9_WORDS,
    ...DAY10_WORDS,
    ...DAY11_WORDS,
    ...DAY12_WORDS,
    ...DAY13_WORDS
];

// Generate full list for 13 days: 12*20 + 1*25 = 265 words
const FULL_WORD_LIST = [];
for (let i = 0; i < 265; i++) {
    if (i < ALL_DEFINED_WORDS.length) {
        const base = ALL_DEFINED_WORDS[i];
        FULL_WORD_LIST.push({
            ...base,
            id: i // unique id
        });
    } else {
        // Placeholder for future days
        FULL_WORD_LIST.push({
            id: i,
            word: "（準備中）",
            word_html: "<span style='color:#ccc;'>（准备中）</span>",
            tone: "",
            pos: "",
            mean: "数据准备中...",
            nuance: "",
            examples: []
        });
    }
}

const WORDS_PER_DAY = 20;
const TOTAL_DAYS = 13;
