// Day 1 Words (User provided)
const DAY1_WORDS = [
    {
        "word": "潤う",
        "word_html": "<ruby>潤<rt>うるお</rt></ruby>う",
        "tone": "3",
        "pos": "自五",
        "mean": "湿润、滋润；受惠、受益",
        "nuance": "1. 含有适度的水分，不干燥。\n2. 得到恩惠或利益。",
        "examples": [
            { "jp": "<ruby>久<rt>ひさ</rt></ruby>しぶりの<ruby>雨<rt>あめ</rt></ruby>で<ruby>田<rt>た</rt></ruby><ruby>畑<rt>はた</rt></ruby>が<span class='ex-highlight'><ruby>潤<rt>うるお</rt></ruby>った</span>。", "cn": "久违的雨水滋润了田地。" },
            { "jp": "<ruby>観<rt>かん</rt></ruby><ruby>光<rt>こう</rt></ruby><ruby>客<rt>きゃく</rt></ruby>の<ruby>増<rt>ぞう</rt></ruby><ruby>加<rt>か</rt></ruby>で<ruby>町<rt>まち</rt></ruby>が<span class='ex-highlight'><ruby>潤<rt>うるお</rt></ruby>う</span>。", "cn": "因为游客增加，城镇富裕起来。" }
        ],
        "practice": {
            "sentence": "恵みの雨が降り、乾いた大地が<span class='blank-space'></span>。",
            "cn": "恩泽之雨降下，滋润了干燥的大地。",
            "answer": "うるおった",
            "options": ["うるおった", "たくわえた", "まかなった", "ついやした"]
        }
    },
    {
        "word": "儲かる",
        "word_html": "<ruby>儲<rt>もう</rt></ruby>かる",
        "tone": "3",
        "pos": "自五",
        "mean": "赚钱、盈利；赚到、得利",
        "nuance": "1. 产生利润，生意兴隆。\n2. 得到意想不到的好处或省事。",
        "examples": [
            { "jp": "<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>、この<ruby>商<rt>しょう</rt></ruby><ruby>売<rt>ばい</rt></ruby>は<span class='ex-highlight'><ruby>儲<rt>もう</rt></ruby>かる</span>らしい。", "cn": "最近，这生意似乎很赚钱。" },
            { "jp": "<ruby>奢<rt>おご</rt></ruby>ってもらって<span class='ex-highlight'><ruby>儲<rt>もう</rt></ruby>かった</span>。", "cn": "被人请客，赚到了。" }
        ],
        "practice": {
            "sentence": "この新しいビジネスモデルは、将来的に大きく<span class='blank-space'></span>だろう。",
            "cn": "这种新的商业模式将来应该会赚不少钱。",
            "answer": "もうかる",
            "options": ["もうかる", "そなえる", "たずさわる", "そむく"]
        }
    },
    {
        "word": "備える",
        "word_html": "<ruby>備<rt>そな</rt></ruby>える",
        "tone": "3",
        "pos": "他一",
        "mean": "防备、准备；设置、配备；具备、具有",
        "nuance": "1. 为了预防万一的情况。\n2. 安装必要的设施、装置。\n3. 生来具有或修得的能力。",
        "examples": [
            { "jp": "<ruby>地<rt>じ</rt></ruby><ruby>震<rt>しん</rt></ruby>に<span class='ex-highlight'><ruby>備<rt>そな</rt></ruby>えて</span>、<ruby>水<rt>みず</rt></ruby>と<ruby>食<rt>しょく</rt></ruby><ruby>料<rt>りょう</rt></ruby>を<ruby>確<rt>かく</rt></ruby><ruby>保<rt>ほ</rt></ruby>する。", "cn": "为了防备地震，确保水和食物。" },
            { "jp": "このホテルは<ruby>全<rt>ぜん</rt></ruby><ruby>室<rt>しつ</rt></ruby>にWi-Fiを<span class='ex-highlight'><ruby>備<rt>そな</rt></ruby>えている</span>。", "cn": "这家酒店所有房间都配备了Wi-Fi。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>指<rt>し</rt></ruby><ruby>導<rt>どう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>としての<ruby>資<rt>し</rt></ruby><ruby>質<rt>しつ</rt></ruby>を<ruby>十<rt>じゅう</rt></ruby><ruby>分<rt>ぶん</rt></ruby>に<span class='ex-highlight'><ruby>備<rt>そな</rt></ruby>えている</span>。", "cn": "他充分具备作为领导者的素质。" }
        ],
        "practice": {
            "sentence": "災害に<span class='blank-space'></span>、避難経路を確認しておく。",
            "cn": "为了应对灾害，先确认好避难路线。",
            "answer": "そなえて",
            "options": ["そなえて", "たくわえて", "したがって", "もたれて"]
        }
    },
    {
        "word": "蓄える",
        "word_html": "<ruby>蓄<rt>たくわ</rt></ruby>える",
        "tone": "4",
        "pos": "他一",
        "mean": "储备、积蓄；积累、蕴蓄",
        "nuance": "1. 为了将来积攒金钱、物资。\n2. 充实知识、实力、经验。",
        "examples": [
            { "jp": "<ruby>万<rt>まん</rt></ruby><ruby>一<rt>いち</rt></ruby>に<ruby>備<rt>そな</rt></ruby>えて<ruby>食<rt>しょく</rt></ruby><ruby>料<rt>りょう</rt></ruby>を<span class='ex-highlight'><ruby>蓄<rt>たくわ</rt></ruby>える</span>。", "cn": "为了防备万一而储备食物。" },
            { "jp": "<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んで<ruby>知<rt>ち</rt></ruby><ruby>識<rt>しき</rt></ruby>を<span class='ex-highlight'><ruby>蓄<rt>たくわ</rt></ruby>える</span>。", "cn": "读书积累知识。" }
        ],
        "practice": {
            "sentence": "老後の生活のために、若いうちから資金を<span class='blank-space'></span>。",
            "cn": "为了晚年生活，趁年轻就开始积攒资金。",
            "answer": "たくわえる",
            "options": ["たくわえる", "そなえる", "まかなう", "あきなう"]
        }
    },
    {
        "word": "溜まる",
        "word_html": "<ruby>溜<rt>た</rt></ruby>まる",
        "tone": "0",
        "pos": "自五",
        "mean": "积存、滞留；积攒、堆积",
        "nuance": "1. 液体、灰尘等停留不动。\n2. 不知不觉中事物聚集增多。",
        "examples": [
            { "jp": "<ruby>道<rt>どう</rt></ruby><ruby>路<rt>ろ</rt></ruby>のくぼみに<ruby>雨<rt>あま</rt></ruby><ruby>水<rt>みず</rt></ruby>が<span class='ex-highlight'><ruby>溜<rt>た</rt></ruby>まる</span>。", "cn": "路面的坑洼里积存了雨水。" },
            { "jp": "<ruby>家<rt>や</rt></ruby><ruby>賃<rt>ちん</rt></ruby>が<span class='ex-highlight'><ruby>溜<rt>た</rt></ruby>まって</span>しまった。", "cn": "拖欠了房租。" }
        ],
        "practice": {
            "sentence": "仕事が忙しくて、ストレスが<span class='blank-space'></span>一方だ。",
            "cn": "工作太忙，压力只会不断累积。",
            "answer": "たまる",
            "options": ["たまる", "うるおう", "くだける", "そそる"]
        }
    },
    {
        "word": "凭れる",
        "word_html": "<ruby>凭<rt>もた</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "靠、倚靠；(胃)不消化、积食；依赖、仰仗",
        "nuance": "1. 将身体重量托付给物体。\n2. (胃)不消化、积食。\n3. 依靠他人的力量。",
        "examples": [
            { "jp": "<ruby>疲<rt>つか</rt></ruby>れて<span class='ex-highlight'><ruby>壁<rt>かべ</rt></ruby>に<ruby>凭<rt>もた</rt></ruby>れる</span>。", "cn": "累得靠在墙上。" },
            { "jp": "<ruby>油<rt>あぶら</rt></ruby>っぽい<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>で<span class='ex-highlight'><ruby>胃<rt>い</rt></ruby>が<ruby>凭<rt>もた</rt></ruby>れる</span>。", "cn": "因为油腻的菜，胃不舒服。" },
            { "jp": "いつまでも<span class='ex-highlight'><ruby>親<rt>おや</rt></ruby>に<ruby>凭<rt>もた</rt></ruby>れて</span>はいけない。", "cn": "不能总是依赖父母。" }
        ],
        "practice": {
            "sentence": "電車のドアに<span class='blank-space'></span>のは危険です。",
            "cn": "靠在电车门上很危险。",
            "answer": "もたれる",
            "options": ["もたれる", "たおれる", "くずれる", "そなえる"]
        }
    },
    {
        "word": "賄う",
        "word_html": "<ruby>賄<rt>まかな</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "支付、供给；供饭、提供膳食",
        "nuance": "1. 提供维持所需的费用、物资。\n2. 准备饭菜。",
        "examples": [
            { "jp": "アルバイトで<span class='ex-highlight'><ruby>学<rt>がく</rt></ruby><ruby>費<rt>ひ</rt></ruby>を<ruby>賄<rt>まかな</rt></ruby>う</span>。", "cn": "靠打工支付学费。" },
            { "jp": "<ruby>寮<rt>りょう</rt></ruby>では<ruby>朝<rt>あさ</rt></ruby><ruby>夕<rt>ゆう</rt></ruby>の<span class='ex-highlight'><ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby>を<ruby>賄<rt>まかな</rt></ruby>って</span>くれる。", "cn": "宿舍提供早晚两餐。" }
        ],
        "practice": {
            "sentence": "この給料だけで、家族全員の生活費を<span class='blank-space'></span>のは難しい。",
            "cn": "只靠这份工资，很难负担全家人的生活费。",
            "answer": "まかなう",
            "options": ["まかなう", "もうかる", "うるおう", "ついやす"]
        }
    },
    {
        "word": "商う",
        "word_html": "<ruby>商<rt>あきな</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "做生意",
        "nuance": "1. 从事商业活动。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>雑<rt>ざっ</rt></ruby><ruby>貨<rt>か</rt></ruby>を<ruby>商<rt>あきな</rt></ruby>って</span><ruby>生<rt>せい</rt></ruby><ruby>計<rt>けい</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる。", "cn": "靠贩卖杂货维持生计。" }
        ],
        "practice": {
            "sentence": "彼は代々、呉服を<span class='blank-space'></span>老舗の主人だ。",
            "cn": "他是祖上传下来的老字号和服店的老板。",
            "answer": "あきなう",
            "options": ["あきなう", "まかなう", "たずさわる", "したがって"]
        }
    },
    {
        "word": "崩す",
        "word_html": "<ruby>崩<rt>くず</rt></ruby>す",
        "tone": "2",
        "pos": "他五",
        "mean": "拆毁、弄乱；放松、弄坏；换零钱",
        "nuance": "1. 破坏堆积物或原有形状。\n2. 使姿势、身体状况、书写格式等变样。\n3. 将大额货币换成小额。",
        "examples": [
            { "jp": "<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>のために<span class='ex-highlight'><ruby>山<rt>やま</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>す</span>。", "cn": "为了施工把山铲平。" },
            { "jp": "<ruby>働<rt>はたら</rt></ruby>きすぎで<span class='ex-highlight'><ruby>体<rt>たい</rt></ruby><ruby>調<rt>ちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>す</span>。", "cn": "因为工作过度搞垮了身体。" },
            { "jp": "<ruby>一<rt>いち</rt></ruby><ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby><ruby>札<rt>さつ</rt></ruby>を<span class='ex-highlight'><ruby>千<rt>せん</rt></ruby><ruby>円<rt>えん</rt></ruby><ruby>札<rt>さつ</rt></ruby>に<ruby>崩<rt>くず</rt></ruby>す</span>。", "cn": "把一万日元换成千元钞票。" }
        ],
        "practice": {
            "sentence": "細かいお金がないので、千円札を<span class='blank-space'></span>もらえませんか。",
            "cn": "我没有零钱，可以帮我把一千日元纸币换开吗？",
            "answer": "くずして",
            "options": ["くずして", "こわして", "たおして", "つぶして"]
        }
    },
    {
        "word": "倒す",
        "word_html": "<ruby>倒<rt>たお</rt></ruby>す",
        "tone": "2",
        "pos": "他五",
        "mean": "推倒、弄倒；打败、推翻",
        "nuance": "1. 使竖立的物体侧下。\n2. 战胜对手或推翻政权。",
        "examples": [
            { "jp": "<ruby>風<rt>かぜ</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>くて<span class='ex-highlight'><ruby>自<rt>じ</rt></ruby><ruby>転<rt>てん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>を<ruby>倒<rt>たお</rt></ruby>して</span>しまった。", "cn": "风太大，把自行车弄倒了。" },
            { "jp": "<ruby>決<rt>けっ</rt></ruby><ruby>勝<rt>しょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>で<span class='ex-highlight'>ライバルを<ruby>倒<rt>たお</rt></ruby>す</span>。", "cn": "在决赛中打败竞争对手。" }
        ],
        "practice": {
            "sentence": "将棋で、ついに師匠を<span class='blank-space'></span>。",
            "cn": "下将棋时，我终于打败了师父。",
            "answer": "たおした",
            "options": ["たおした", "くずした", "こわした", "つぶした"]
        }
    },
    {
        "word": "壊す",
        "word_html": "<ruby>壊<rt>こわ</rt></ruby>す",
        "tone": "2",
        "pos": "他五",
        "mean": "弄坏、破坏；损害身体；破坏(气氛)",
        "nuance": "1. 使物体破损或建筑物倒塌。\n2. 因某种原因导致健康受损。\n3. 搞砸原本和谐的氛围。",
        "examples": [
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>がおもちゃを<span class='ex-highlight'><ruby>壊<rt>こわ</rt></ruby>して</span>しまった。", "cn": "孩子把玩具弄坏了。" },
            { "jp": "お<ruby>酒<rt>さけ</rt></ruby>の<ruby>飲<rt>の</rt></ruby>み<ruby>過<rt>す</rt></ruby>ぎで<ruby>体<rt>からだ</rt></ruby>を<span class='ex-highlight'><ruby>壊<rt>こわ</rt></ruby>す</span>。", "cn": "因为饮酒过量把身体搞垮了。" },
            { "jp": "つまらない<ruby>冗<rt>じょう</rt></ruby><ruby>談<rt>だん</rt></ruby>で<ruby>場<rt>ば</rt></ruby>の<ruby>雰<rt>ふん</rt></ruby><ruby>囲<rt>い</rt></ruby><ruby>気<rt>き</rt></ruby>を<span class='ex-highlight'><ruby>壊<rt>こわ</rt></ruby>す</span>。", "cn": "因为无聊的玩笑破坏了现场的气氛。" }
        ],
        "practice": {
            "sentence": "無理なスケジュールで働いて、体を<span class='blank-space'></span>しまった。",
            "cn": "因为勉强按不合理的日程工作，身体都搞垮了。",
            "answer": "こわして",
            "options": ["こわして", "たおして", "くずして", "くだけて"]
        }
    },
    {
        "word": "費やす",
        "word_html": "<ruby>費<rt>つい</rt></ruby>やす",
        "tone": "3",
        "pos": "他五",
        "mean": "花费、耗费",
        "nuance": "1. 为了某种目的使用时间、金钱、精力。",
        "examples": [
            { "jp": "<ruby>研<rt>けん</rt></ruby><ruby>究<rt>きゅう</rt></ruby>に<ruby>長<rt>なが</rt></ruby>い<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<span class='ex-highlight'><ruby>費<rt>つい</rt></ruby>やす</span>。", "cn": "在研究上花费了很长时间。" }
        ],
        "practice": {
            "sentence": "彼はその問題の解決に、多くの労力を<span class='blank-space'></span>。",
            "cn": "他为了解决那个问题，花费了大量精力。",
            "answer": "ついやした",
            "options": ["ついやした", "たくわえた", "まかなった", "そなえた"]
        }
    },
    {
        "word": "潰す",
        "word_html": "<ruby>潰<rt>つぶ</rt></ruby>す",
        "tone": "0",
        "pos": "他五",
        "mean": "压碎、弄碎；消磨(时间)；使...破产/毁灭",
        "nuance": "1. 施加压力使形状破坏。\n2. 为了度过空闲时间做某事。\n3. 使组织解散、人才埋没。",
        "examples": [
            { "jp": "<ruby>空<rt>あ</rt></ruby>き<ruby>缶<rt>かん</rt></ruby>を<ruby>足<rt>あし</rt></ruby>で<ruby>踏<rt>ふ</rt></ruby>んで<span class='ex-highlight'><ruby>潰<rt>つぶ</rt></ruby>す</span>。", "cn": "用脚把空罐子踩扁。" },
            { "jp": "カフェで<ruby>暇<rt>ひま</rt></ruby>を<span class='ex-highlight'><ruby>潰<rt>つぶ</rt></ruby>す</span>。", "cn": "喝咖啡来打发时间。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>才<rt>さい</rt></ruby><ruby>能<rt>のう</rt></ruby>を<span class='ex-highlight'><ruby>潰<rt>つぶ</rt></ruby>されて</span>しまった。", "cn": "他的才能被埋没了。" }
        ],
        "practice": {
            "sentence": "待ち合わせの時間まで、近くの本屋で時間を<span class='blank-space'></span>。",
            "cn": "距离约好的时间还有一会儿，我在附近书店打发时间。",
            "answer": "つぶした",
            "options": ["つぶした", "ついやした", "こわした", "たおした"]
        }
    },
    {
        "word": "携わる",
        "word_html": "<ruby>携<rt>たずさ</rt></ruby>わる",
        "tone": "4",
        "pos": "自五",
        "mean": "从事、参与",
        "nuance": "1. 作为职业或工作涉及某事。",
        "examples": [
            { "jp": "<ruby>長<rt>なが</rt></ruby><ruby>年<rt>ねん</rt></ruby>、<ruby>教<rt>きょう</rt></ruby><ruby>育<rt>いく</rt></ruby>に<span class='ex-highlight'><ruby>携<rt>たずさ</rt></ruby>わっている</span>。", "cn": "常年从事教育工作。" }
        ],
        "practice": {
            "sentence": "彼は長年、医療の現場に<span class='blank-space'></span>きた。",
            "cn": "他多年来一直从事医疗现场的工作。",
            "answer": "たずさわって",
            "options": ["たずさわって", "したがって", "そなえて", "あきなって"]
        }
    },
    {
        "word": "砕ける",
        "word_html": "<ruby>砕<rt>くだ</rt></ruby>ける",
        "tone": "3",
        "pos": "自一",
        "mean": "破碎、粉碎；挫败；平易近人、不拘礼节",
        "nuance": "1. 变成细小的碎片。\n2. 势头、希望被破坏。\n3. 态度或语言非正式、通俗。",
        "examples": [
            { "jp": "コップが<ruby>床<rt>ゆか</rt></ruby>に<ruby>落<rt>お</rt></ruby>ちて<span class='ex-highlight'><ruby>砕<rt>くだ</rt></ruby>けた</span>。", "cn": "杯子掉在地上摔碎了。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>は<ruby>厳<rt>きび</rt></ruby>しい<ruby>現<rt>げん</rt></ruby><ruby>実<rt>じつ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<span class='ex-highlight'><ruby>砕<rt>くだ</rt></ruby>けた</span>。", "cn": "他的梦想在残酷的现实面前破灭了。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>砕<rt>くだ</rt></ruby>けた</span><ruby>口<rt>く</rt></ruby><ruby>調<rt>ちょう</rt></ruby>で<ruby>話<rt>はな</rt></ruby>す。", "cn": "他用随和的口吻说话。" }
        ],
        "practice": {
            "sentence": "面接官が<span class='blank-space'></span>態度で接してくれたので、緊張がほぐれた。",
            "cn": "面试官用轻松随和的态度接待我，让我放松了下来。",
            "answer": "くだけた",
            "options": ["くだけた", "こわれた", "たおれた", "くずれた"]
        }
    },
    {
        "word": "拘る",
        "word_html": "<ruby>拘<rt>こだわ</rt></ruby>る",
        "tone": "3",
        "pos": "自五",
        "mean": "特别讲究、拘泥",
        "nuance": "1. 在意细节，追求完美或过于执着。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>食<rt>しょく</rt></ruby><ruby>材<rt>ざい</rt></ruby>に<ruby>徹<rt>てっ</rt></ruby><ruby>底<rt>てい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<span class='ex-highlight'><ruby>拘<rt>こだわ</rt></ruby>って</span><ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る。", "cn": "他做菜非常讲究食材。" }
        ],
        "practice": {
            "sentence": "些細なことにいつまでも<span class='blank-space'></span>と、前に進めないよ。",
            "cn": "如果总是纠结于细枝末节，就没法往前走。",
            "answer": "こだわっている",
            "options": ["こだわっている", "そなえている", "したがっている", "そむいている"]
        }
    },
    {
        "word": "背く",
        "word_html": "<ruby>背<rt>そむ</rt></ruby>く",
        "tone": "2",
        "pos": "自五",
        "mean": "背过脸去；违背、违反；背叛、背离",
        "nuance": "1. 把脸转过去不看。\n2. 不遵从命令、规则或期待。\n3. 辜负信任，脱离。",
        "examples": [
            { "jp": "<ruby>太<rt>たい</rt></ruby><ruby>陽<rt>よう</rt></ruby>に<span class='ex-highlight'><ruby>背<rt>そむ</rt></ruby>いて</span><ruby>立<rt>た</rt></ruby>つ。", "cn": "背对太阳站着。" },
            { "jp": "<ruby>親<rt>おや</rt></ruby>の<ruby>期<rt>き</rt></ruby><ruby>待<rt>たい</rt></ruby>に<span class='ex-highlight'><ruby>背<rt>そむ</rt></ruby>いて</span><ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>た。", "cn": "违背父母的期待离家出走了。" },
            { "jp": "<ruby>上<rt>じょう</rt></ruby><ruby>司<rt>し</rt></ruby>の<ruby>命<rt>めい</rt></ruby><ruby>令<rt>れい</rt></ruby>に<span class='ex-highlight'><ruby>背<rt>そむ</rt></ruby>く</span>。", "cn": "违抗上司的命令。" }
        ],
        "practice": {
            "sentence": "親の言いつけに<span class='blank-space'></span>、家を出た。",
            "cn": "他违背父母的叮嘱，离开了家。",
            "answer": "そむいて",
            "options": ["そむいて", "したがって", "はなれて", "にげて"]
        }
    },
    {
        "word": "有り触れる",
        "word_html": "<ruby>有<rt>あ</rt></ruby>り<ruby>触<rt>ふ</rt></ruby>れる",
        "tone": "4",
        "pos": "自一",
        "mean": "常见的、不稀奇",
        "nuance": "1. 到处都有，平凡无奇。",
        "examples": [
            { "jp": "それは<span class='ex-highlight'>ありふれた</span>ラブストーリーだ。", "cn": "那是老套的爱情故事。" }
        ],
        "practice": {
            "sentence": "それはどこにでもある、<span class='blank-space'></span>話だ。",
            "cn": "那是到处都有的寻常故事。",
            "answer": "ありふれた",
            "options": ["ありふれた", "そなえた", "たくわえた", "まかなった"]
        }
    },
    {
        "word": "従う",
        "word_html": "<ruby>従<rt>したが</rt></ruby>う",
        "tone": "0",
        "pos": "自五",
        "mean": "服从、听从；伴随、跟随；跟随",
        "nuance": "1. 遵守规则、命令或指示。\n2. 跟在后面，或随着某事态发生。\n3. 跟随某人进行行动。",
        "examples": [
            { "jp": "<ruby>郷<rt>ごう</rt></ruby>に<ruby>入<rt>い</rt></ruby>っては<ruby>郷<rt>ごう</rt></ruby>に<span class='ex-highlight'><ruby>従<rt>したが</rt></ruby>え</span>。", "cn": "入乡随俗。" },
            { "jp": "<ruby>年<rt>とし</rt></ruby>をとるに<span class='ex-highlight'><ruby>従<rt>したが</rt></ruby>って</span>、<ruby>体<rt>たい</rt></ruby><ruby>力<rt>りょく</rt></ruby>が<ruby>落<rt>お</rt></ruby>ちる。", "cn": "随着年龄增长，体力下降。" },
            { "jp": "<ruby>案<rt>あん</rt></ruby><ruby>内<rt>ない</rt></ruby><ruby>人<rt>にん</rt></ruby>に<span class='ex-highlight'><ruby>従<rt>したが</rt></ruby>って</span><ruby>見<rt>けん</rt></ruby><ruby>学<rt>がく</rt></ruby>する。", "cn": "跟随向导参观。" }
        ],
        "practice": {
            "sentence": "法律には<span class='blank-space'></span>なければならない。",
            "cn": "必须遵守法律。",
            "answer": "したがわ",
            "options": ["したがわ", "そむか", "そなえ", "たずさわ"]
        }
    },
    {
        "word": "唆る",
        "word_html": "<ruby>唆<rt>そそ</rt></ruby>る",
        "tone": "0",
        "pos": "他五",
        "mean": "引起、勾起",
        "nuance": "1. 刺激食欲、兴趣、好奇心等。",
        "examples": [
            { "jp": "カレーの<ruby>香<rt>かお</rt></ruby>りが<ruby>食<rt>しょく</rt></ruby><ruby>欲<rt>よく</rt></ruby>を<span class='ex-highlight'><ruby>唆<rt>そそ</rt></ruby>る</span>。", "cn": "咖喱的香气勾起了食欲。" }
        ],
        "practice": {
            "sentence": "このミステリー小説は、読者の好奇心を<span class='blank-space'></span>。",
            "cn": "这本推理小说很能勾起读者的好奇心。",
            "answer": "そそる",
            "options": ["そそる", "うるおう", "もうかる", "たまる"]
        }
    }
];

// Day 2 Words (Add new words here)
const DAY2_WORDS = [
   {
        "word": "馴染む",
        "word_html": "<ruby>馴<rt>な</rt></ruby><ruby>染<rt>じ</rt></ruby>む",
        "tone": "2",
        "pos": "自五",
        "mean": "适应、习惯；融合、协调",
        "nuance": "1. 变得与其融洽，不再生疏。\n2. 颜色、氛围、穿搭等配合得当。",
        "examples": [
            { "jp": "新しい<ruby>職場<rt>しょくば</rt></ruby>にすっかり<span class='ex-highlight'><ruby>馴染<rt>なじ</rt></ruby>んだ</span>。", "cn": "完全适应了新职场。" },
            { "jp": "<ruby>履<rt>は</rt></ruby>き<ruby>慣<rt>な</rt></ruby>れて<ruby>靴<rt>くつ</rt></ruby>が<ruby>足<rt>あし</rt></ruby>に<span class='ex-highlight'><ruby>馴染<rt>なじ</rt></ruby>む</span>。", "cn": "穿惯了，鞋子变得合脚了。" }
        ],
        "practice": {
            "sentence": "転校して一ヶ月が経ち、ようやくクラスの雰囲気に<span class='blank-space'></span>きた。",
            "cn": "转学一个月后，我终于适应了班里的氛围。",
            "answer": "なじんで",
            "options": ["なじんで", "からんで", "ゆがんで", "ゆるんで"]
        }
    },
    {
        "word": "甘える",
        "word_html": "<ruby>甘<rt>あま</rt></ruby>える",
        "tone": "0",
        "pos": "自一",
        "mean": "撒娇；利用、承蒙",
        "nuance": "1. 像孩子一样依赖对方。\n2. 顺从对方的好意。",
        "examples": [
            { "jp": "<ruby>子供<rt>こども</rt></ruby>が<ruby>母親<rt>ははおや</rt></ruby>に<span class='ex-highlight'><ruby>甘<rt>あま</rt></ruby>える</span>。", "cn": "孩子向母亲撒娇。" },
            { "jp": "お<ruby>言葉<rt>ことば</rt></ruby>に<span class='ex-highlight'><ruby>甘<rt>あま</rt></ruby>えて</span>、いただきます。", "cn": "那我就承蒙您的好意，不客气地收下了。" }
        ],
        "practice": {
            "sentence": "彼女は末っ子で、いつも親に<span class='blank-space'></span>いる。",
            "cn": "她是家里最小的孩子，总是向父母撒娇。",
            "answer": "あまえて",
            "options": ["あまえて", "かまえて", "きたえて", "ひかえて"]
        }
    },
    {
        "word": "懐く",
        "word_html": "<ruby>懐<rt>なつ</rt></ruby>く",
        "tone": "2",
        "pos": "自五",
        "mean": "亲近、依恋",
        "nuance": "1. 通常指动物或小孩对人产生好感并跟随。",
        "examples": [
            { "jp": "<ruby>野良犬<rt>のらいぬ</rt></ruby>が<ruby>私<rt>わたし</rt></ruby>に<span class='ex-highlight'><ruby>懐<rt>なつ</rt></ruby>いた</span>。", "cn": "流浪狗跟我亲近起来了。" }
        ],
        "practice": {
            "sentence": "この猫は人見知りが激しいが、私にはすぐに<span class='blank-space'></span>。",
            "cn": "这只猫很怕生，却很快亲近了我。",
            "answer": "なついた",
            "options": ["なついた", "うなずいた", "ささやいた", "なげいた"]
        }
    },
    {
        "word": "可愛がる",
        "word_html": "<ruby>可<rt>か</rt></ruby><ruby>愛<rt>わい</rt></ruby>がる",
        "tone": "4",
        "pos": "他五",
        "mean": "疼爱、宠爱；偏爱、提拔",
        "nuance": "1. 对晚辈、弱小者给予怜爱。\n2. 上司对下属的特别关照。",
        "examples": [
            { "jp": "<ruby>祖父母<rt>そふぼ</rt></ruby>は<ruby>孫<rt>まご</rt></ruby>をとても<span class='ex-highlight'><ruby>可愛<rt>かわい</rt></ruby>がる</span>。", "cn": "祖父母非常疼爱孙子。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>部長<rt>ぶちょう</rt></ruby>に<span class='ex-highlight'><ruby>可愛<rt>かわい</rt></ruby>がられている</span>。", "cn": "他很受部长赏识。" }
        ],
        "practice": {
            "sentence": "彼は新人時代から部長に<span class='blank-space'></span>いた。",
            "cn": "他从新人时期起就很受部长疼爱。",
            "answer": "かわいがられて",
            "options": ["かわいがられて", "ちょうほうがられて", "おもしろがられて", "いやがられて"]
        }
    },
    {
        "word": "賑わう",
        "word_html": "<ruby>賑<rt>にぎ</rt></ruby>わう",
        "tone": "3",
        "pos": "自五",
        "mean": "热闹、繁华；兴旺",
        "nuance": "1. 人多拥挤，气氛热烈。\n2. 生意好，繁盛。",
        "examples": [
            { "jp": "<ruby>祭<rt>まつ</rt></ruby>りで<ruby>町<rt>まち</rt></ruby>が<span class='ex-highlight'><ruby>賑<rt>にぎ</rt></ruby>わっている</span>。", "cn": "因为庆典，街道很热闹。" },
            { "jp": "<ruby>商店街<rt>しょうてんがい</rt></ruby>は<ruby>買<rt>か</rt></ruby>い<ruby>物客<rt>ものきゃく</rt></ruby>で<span class='ex-highlight'><ruby>賑<rt>にぎ</rt></ruby>わう</span>。", "cn": "商店街因为购物的客人而显得繁华。" }
        ],
        "practice": {
            "sentence": "休日になると、この公園は家族連れで<span class='blank-space'></span>。",
            "cn": "到了休息日，这座公园会因带孩子来的家庭而热闹起来。",
            "answer": "にぎわう",
            "options": ["にぎわう", "あじわう", "かまう", "やしなう"]
        }
    },
    {
        "word": "栄える",
        "word_html": "<ruby>栄<rt>さか</rt></ruby>える",
        "tone": "3",
        "pos": "自一",
        "mean": "繁荣、兴盛",
        "nuance": "1. 国家、文化、家族等处于鼎盛状态。",
        "examples": [
            { "jp": "この<ruby>港<rt>みなと</rt></ruby><ruby>町<rt>まち</rt></ruby>は<span class='ex-highlight'><ruby>貿<rt>ぼう</rt></ruby><ruby>易<rt>えき</rt></ruby>で<ruby>栄<rt>さか</rt></ruby>えて</span>いる。", "cn": "这个港口城市因贸易而繁荣。" }
        ],
        "practice": {
            "sentence": "かつてこの国は貿易によって<span class='blank-space'></span>いた。",
            "cn": "这个国家曾经依靠贸易繁荣一时。",
            "answer": "さかえて",
            "options": ["さかえて", "さえて", "はえて", "たたえて"]
        }
    },
    {
        "word": "興る",
        "word_html": "<ruby>興<rt>おこ</rt></ruby>る",
        "tone": "2",
        "pos": "自五",
        "mean": "兴起、兴盛；发生、创立",
        "nuance": "1. 国家、产业等繁荣昌盛。\n2. 新事物开始出现。",
        "examples": [
            { "jp": "<ruby>独<rt>どく</rt></ruby><ruby>裁<rt>さい</rt></ruby><ruby>政<rt>せい</rt></ruby><ruby>権<rt>けん</rt></ruby>が<ruby>倒<rt>たお</rt></ruby>れ、<ruby>新<rt>あたら</rt></ruby>しい<ruby>国<rt>くに</rt></ruby>が<span class='ex-highlight'><ruby>興<rt>おこ</rt></ruby>った</span>。", "cn": "独裁政权倒台，新的国家兴起了。" },
            { "jp": "この<ruby>地<rt>ち</rt></ruby>で<ruby>新<rt>あたら</rt></ruby>しい<ruby>文<rt>ぶん</rt></ruby><ruby>化<rt>か</rt></ruby>が<span class='ex-highlight'><ruby>興<rt>おこ</rt></ruby>る</span>。", "cn": "新的文化将在这片土地上兴起。" }
        ],
        "practice": {
            "sentence": "明治時代になって、新しい産業が次々と<span class='blank-space'></span>。",
            "cn": "明治时代到来后，新的产业一个接一个兴起。",
            "answer": "おこった",
            "options": ["おこった", "つのった", "ひたった", "こった"]
        }
    },
    {
        "word": "寂れる",
        "word_html": "<ruby>寂<rt>さび</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "荒凉、衰败；衰落、萧条",
        "nuance": "1. 人气减少而变得冷清、荒凉。\n2. 传统、习俗等逐渐消失。",
        "examples": [
            { "jp": "<ruby>人<rt>ひと</rt></ruby><ruby>通<rt>どお</rt></ruby>りのない<span class='ex-highlight'><ruby>寂<rt>さび</rt></ruby>れた</span><ruby>商<rt>しょう</rt></ruby><ruby>店<rt>てん</rt></ruby><ruby>街<rt>がい</rt></ruby>。", "cn": "没有人来往的冷清的商业街。" },
            { "jp": "<ruby>昔<rt>むかし</rt></ruby>の<ruby>祭<rt>まつ</rt></ruby>りも<ruby>参<rt>さん</rt></ruby><ruby>加<rt>か</rt></ruby><ruby>者<rt>しゃ</rt></ruby>が<ruby>減<rt>へ</rt></ruby>って<span class='ex-highlight'><ruby>寂<rt>さび</rt></ruby>れて</span>しまった。", "cn": "过去的祭典也由于参与者的减少而衰落了。" }
        ],
        "practice": {
            "sentence": "若者が都市へ流出し、この村はすっかり<span class='blank-space'></span>しまった。",
            "cn": "年轻人流向城市，这个村子已经彻底萧条了。",
            "answer": "さびれて",
            "options": ["さびれて", "すたれて", "あきれて", "たわむれて"]
        }
    },
    {
        "word": "練る",
        "word_html": "<ruby>練<rt>ね</rt></ruby>る",
        "tone": "1",
        "pos": "他五",
        "mean": "推敲、以此充实；揉、捏、以此锻炼",
        "nuance": "1. 精心策划、完善想法或计策。\n2. 揉面团，或引申为锻炼身心。",
        "examples": [
            { "jp": "<ruby>作<rt>さく</rt></ruby><ruby>戦<rt>せん</rt></ruby>をじっくり<span class='ex-highlight'><ruby>練<rt>ね</rt></ruby>る</span>。", "cn": "仔细推敲作战计划。" },
            { "jp": "<ruby>筋<rt>きん</rt></ruby><ruby>肉<rt>にく</rt></ruby>を<span class='ex-highlight'><ruby>練<rt>ね</rt></ruby>る</span>ために<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>運<rt>うん</rt></ruby><ruby>動<rt>どう</rt></ruby>している。", "cn": "为了锻炼肌肉每天都运动。" }
        ],
        "practice": {
            "sentence": "彼は失敗しないように、綿密に計画を<span class='blank-space'></span>。",
            "cn": "为了不失败，他周密地制定了计划。",
            "answer": "ねった",
            "options": ["ねった", "ほった", "もった", "つった"]
        }
    },
    {
        "word": "培う",
        "word_html": "<ruby>培<rt>つちか</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "培育；培养、以此充实",
        "nuance": "1. 本义指培育植物，现多用于抽象意义。\n2. 常指抽象的能力、性质、力量。",
        "examples": [
            { "jp": "<ruby>長<rt>なが</rt></ruby>い<ruby>年<rt>ねん</rt></ruby><ruby>月<rt>げつ</rt></ruby>をかけて<ruby>友<rt>ゆう</rt></ruby><ruby>情<rt>じょう</rt></ruby>を<span class='ex-highlight'><ruby>培<rt>つちか</rt></ruby>う</span>。", "cn": "花费漫长的岁月培养友情。" },
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>たちのコミュニケーション<ruby>能<rt>のう</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<span class='ex-highlight'><ruby>培<rt>つちか</rt></ruby>う</span>。", "cn": "培养孩子们的沟通能力。" }
        ],
        "practice": {
            "sentence": "留学経験を通して、国際的な視野を<span class='blank-space'></span>。",
            "cn": "通过留学经历，他培养了国际视野。",
            "answer": "つちかった",
            "options": ["つちかった", "まかなった", "つくろった", "ほうむった"]
        }
    },
    {
        "word": "築く",
        "word_html": "<ruby>築<rt>きず</rt></ruby>く",
        "tone": "2",
        "pos": "他五",
        "mean": "修筑、建造；建立、构筑",
        "nuance": "1. 修建城堡、堤坝等大型建筑物。\n2. 确立地位、关系、财富等抽象基础。",
        "examples": [
            { "jp": "<ruby>祖<rt>そ</rt></ruby><ruby>父<rt>ふ</rt></ruby>は<ruby>若<rt>わか</rt></ruby>い<ruby>頃<rt>ころ</rt></ruby>、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>手<rt>て</rt></ruby>で<ruby>家<rt>いえ</rt></ruby>を<span class='ex-highlight'><ruby>築<rt>きず</rt></ruby>いた</span>。", "cn": "祖父年轻时亲手建造了自己的房子。" },
            { "jp": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>に<ruby>信<rt>しん</rt></ruby><ruby>頼<rt>らい</rt></ruby><ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby>を<span class='ex-highlight'><ruby>築<rt>きず</rt></ruby>く</span>。", "cn": "在两人之间建立信赖关系。" }
        ],
        "practice": {
            "sentence": "彼は一代で巨万の富を<span class='blank-space'></span>。",
            "cn": "他白手起家，积累了巨大的财富。",
            "answer": "きずいた",
            "options": ["きずいた", "ひらいた", "はじいた", "えがいた"]
        }
    },
    {
        "word": "磨く",
        "word_html": "<ruby>磨<rt>みが</rt></ruby>く",
        "tone": "0",
        "pos": "他五",
        "mean": "擦、刷；磨练、钻研",
        "nuance": "1. 弄干净、擦亮。\n2. 努力提高学问、技艺、修养。",
        "examples": [
            { "jp": "<ruby>食<rt>しょく</rt></ruby><ruby>後<rt>ご</rt></ruby>に<ruby>歯<rt>は</rt></ruby>を<span class='ex-highlight'><ruby>磨<rt>みが</rt></ruby>く</span>。", "cn": "饭后刷牙。" },
            { "jp": "<ruby>海<rt>かい</rt></ruby><ruby>外<rt>がい</rt></ruby>で<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>の<ruby>腕<rt>うで</rt></ruby>を<span class='ex-highlight'><ruby>磨<rt>みが</rt></ruby>く</span>。", "cn": "在海外磨练烹饪手艺。" }
        ],
        "practice": {
            "sentence": "プロとして通用するように、さらに技術を<span class='blank-space'></span>必要がある。",
            "cn": "为了能作为专业人士立足，还需要继续打磨技术。",
            "answer": "みがく",
            "options": ["みがく", "くだく", "さばく", "なげく"]
        }
    },
    {
        "word": "養う",
        "word_html": "<ruby>養<rt>やしな</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "扶养、供养；培养、养成",
        "nuance": "1. 提供衣食住等生活物资。\n2. 积蓄力量、能力、习惯。",
        "examples": [
            { "jp": "<ruby>働<rt>はたら</rt></ruby>き<ruby>盛<rt>ざか</rt></ruby>りの<ruby>父<rt>ちち</rt></ruby>が<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>を<span class='ex-highlight'><ruby>養<rt>やしな</rt></ruby>う</span>。", "cn": "正值壮年的父亲供养家人。" },
            { "jp": "<ruby>読<rt>どく</rt></ruby><ruby>書<rt>しょ</rt></ruby>で<ruby>知<rt>ち</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<span class='ex-highlight'><ruby>養<rt>やしな</rt></ruby>う</span>。", "cn": "通过读书培养智力。" }
        ],
        "practice": {
            "sentence": "彼は病気療養中で、田舎で英気を<span class='blank-space'></span>いる。",
            "cn": "他正在疗养，在乡下养精蓄锐。",
            "answer": "やしなって",
            "options": ["やしなって", "ともなって", "つくろって", "したって"]
        }
    },
    {
        "word": "育む",
        "word_html": "<ruby>育<rt>はぐく</rt></ruby>む",
        "tone": "3",
        "pos": "他五",
        "mean": "抚育、养育；培育、孕育",
        "nuance": "1. 精心保护并养大孩子或动物。\n2. 培养抽象的事物，如爱、文化、梦想。",
        "examples": [
            { "jp": "<ruby>親<rt>おや</rt></ruby><ruby>鳥<rt>どり</rt></ruby>が<ruby>雛<rt>ひな</rt></ruby>を<span class='ex-highlight'><ruby>育<rt>はぐく</rt></ruby>む</span>。", "cn": "母鸟哺育着小鸟。" },
            { "jp": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かに<ruby>愛<rt>あい</rt></ruby>を<span class='ex-highlight'><ruby>育<rt>はぐく</rt></ruby>んできた</span>。", "cn": "两人静静地培育了爱情。" }
        ],
        "practice": {
            "sentence": "豊かな自然が、彼らの感性を<span class='blank-space'></span>。",
            "cn": "丰富的自然环境培育了他们的感性。",
            "answer": "はぐくんだ",
            "options": ["はぐくんだ", "からんだ", "ゆがんだ", "はげんだ"]
        }
    },
    {
        "word": "削る",
        "word_html": "<ruby>削<rt>けず</rt></ruby>る",
        "tone": "0",
        "pos": "他五",
        "mean": "削、刮；削减",
        "nuance": "1. 用刀具切削物体表面。\n2. 减少数量、时间、预算。",
        "examples": [
            { "jp": "ナイフで<ruby>鉛<rt>えん</rt></ruby><ruby>筆<rt>ぴつ</rt></ruby>を<span class='ex-highlight'><ruby>削<rt>けず</rt></ruby>る</span>。", "cn": "用小刀削铅笔。" },
            { "jp": "<ruby>睡<rt>すい</rt></ruby><ruby>眠<rt>みん</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<span class='ex-highlight'><ruby>削<rt>けず</rt></ruby>って</span><ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>する。", "cn": "削减睡眠时间来学习。" }
        ],
        "practice": {
            "sentence": "予算を<span class='blank-space'></span>ために、無駄な経費を見直した。",
            "cn": "为了削减预算，重新审查了不必要的经费。",
            "answer": "けずる",
            "options": ["けずる", "さぐる", "ねばる", "もぐる"]
        }
    },
    {
        "word": "狭める",
        "word_html": "<ruby>狭<rt>せば</rt></ruby>める",
        "tone": "3",
        "pos": "他一",
        "mean": "弄窄、缩小；缩小",
        "nuance": "1. 使物理空间变窄。\n2. 使抽象的范围、差距或界限变窄。",
        "examples": [
            { "jp": "<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>のため<ruby>道<rt>みち</rt></ruby><ruby>幅<rt>はば</rt></ruby>を<span class='ex-highlight'><ruby>狭<rt>せば</rt></ruby>める</span>。", "cn": "因为施工缩小了路宽。" },
            { "jp": "<ruby>犯<rt>はん</rt></ruby><ruby>人<rt>にん</rt></ruby>の<ruby>捜<rt>そう</rt></ruby><ruby>査<rt>さ</rt></ruby><ruby>範<rt>はん</rt></ruby><ruby>囲<rt>い</rt></ruby>を<span class='ex-highlight'><ruby>狭<rt>せば</rt></ruby>めている</span>。", "cn": "正在缩小犯人的搜查范围。" }
        ],
        "practice": {
            "sentence": "捜査の範囲を<span class='blank-space'></span>、犯人を特定した。",
            "cn": "缩小搜查范围后，锁定了犯人。",
            "answer": "せばめて",
            "options": ["せばめて", "ゆがめて", "ゆるめて", "いためて"]
        }
    },
    {
        "word": "集る",
        "word_html": "<ruby>集<rt>たか</rt></ruby>る",
        "tone": "0",
        "pos": "自五",
        "mean": "聚集、群集；敲诈、勒索",
        "nuance": "1. 虫子等在食物或脏东西上聚集。\n2. 威胁人给钱，或厚着脸皮让人请客。",
        "examples": [
            { "jp": "<ruby>砂<rt>さ</rt></ruby><ruby>糖<rt>とう</rt></ruby>にアリが<span class='ex-highlight'>たかる</span>。", "cn": "蚂蚁聚集在糖上。" },
            { "jp": "<ruby>不<rt>ふ</rt></ruby><ruby>良<rt>りょう</rt></ruby>グループに<span class='ex-highlight'>たかられる</span>。", "cn": "被不良团伙敲诈勒索。" }
        ],
        "practice": {
            "sentence": "落ちていた飴に、すぐに蟻が<span class='blank-space'></span>きた。",
            "cn": "糖果一掉在地上，蚂蚁很快就围了上来。",
            "answer": "たかって",
            "options": ["たかって", "もぐって", "あせって", "めぐって"]
        }
    },
    {
        "word": "集う",
        "word_html": "<ruby>集<rt>つど</rt></ruby>う",
        "tone": "2",
        "pos": "自五",
        "mean": "聚会、聚集",
        "nuance": "1. 人们为了特定目的聚集在一起。",
        "examples": [
            { "jp": "<ruby>記<rt>き</rt></ruby><ruby>念<rt>ねん</rt></ruby><ruby>式<rt>しき</rt></ruby><ruby>典<rt>てん</rt></ruby>に<ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby><ruby>々<rt>びと</rt></ruby>が<span class='ex-highlight'><ruby>集<rt>つど</rt></ruby>う</span>。", "cn": "许多人聚集在纪念典礼上。" }
        ],
        "practice": {
            "sentence": "そのイベントには、全国から愛好家が<span class='blank-space'></span>。",
            "cn": "那场活动吸引了来自全国各地的爱好者。",
            "answer": "つどった",
            "options": ["つどった", "いわった", "おぎなった", "したった"]
        }
    },
    {
        "word": "募る",
        "word_html": "<ruby>募<rt>つの</rt></ruby>る",
        "tone": "2",
        "pos": "自五/他五",
        "mean": "招募、募集；越来越厉害、激化",
        "nuance": "1. 广泛征求人员、资金等。\n2. 感情、寒冷等程度加剧。",
        "examples": [
            { "jp": "<ruby>参<rt>さん</rt></ruby><ruby>加<rt>か</rt></ruby><ruby>者<rt>しゃ</rt></ruby>を<span class='ex-highlight'><ruby>募<rt>つの</rt></ruby>る</span>。", "cn": "招募参加者。" },
            { "jp": "<ruby>故<rt>こ</rt></ruby><ruby>郷<rt>きょう</rt></ruby>への<ruby>思<rt>おも</rt></ruby>いが<span class='ex-highlight'><ruby>募<rt>つの</rt></ruby>る</span>。", "cn": "对故乡的思念越来越强烈。" }
        ],
        "practice": {
            "sentence": "留学したいという思いは、日増しに<span class='blank-space'></span>ばかりだ。",
            "cn": "想去留学的心情一天比一天强烈。",
            "answer": "つのる",
            "options": ["つのる", "しげる", "さとる", "ねばる"]
        }
    },
    {
        "word": "群がる",
        "word_html": "<ruby>群<rt>むら</rt></ruby>がる",
        "tone": "3",
        "pos": "自五",
        "mean": "聚集、群集",
        "nuance": "1. 许多昆虫、动物或人聚集在一起（常指乱哄哄地挤在一起）。",
        "examples": [
            { "jp": "<ruby>駅<rt>えき</rt></ruby><ruby>前<rt>まえ</rt></ruby>に<ruby>人<rt>ひと</rt></ruby>が<span class='ex-highlight'><ruby>群<rt>むら</rt></ruby>がって</span>いた。", "cn": "车站前聚满了人。" }
        ],
        "practice": {
            "sentence": "アイドルが登場すると、ファンが一斉に<span class='blank-space'></span>。",
            "cn": "偶像一登场，粉丝们就一齐涌了上去。",
            "answer": "むらがった",
            "options": ["むらがった", "ころがった", "つながった", "ひろがった"]
        }
    },
];
const DAY3_WORDS = [
{
        "word": "耕す",
        "word_html": "<ruby>耕<rt>たがや</rt></ruby>す",
        "tone": "3",
        "pos": "他五",
        "mean": "耕作、耕耘",
        "nuance": "1. 翻松田地泥土，准备种植。",
        "examples": [
            { "jp": "トラクターで<ruby>畑<rt>はたけ</rt></ruby>を<span class='ex-highlight'><ruby>耕<rt>たがや</rt></ruby>す</span>。", "cn": "用拖拉机耕田。" }
        ],
        "practice": {
            "sentence": "トラクターで畑を<span class='blank-space'></span>、種まきの準備をする。",
            "cn": "用拖拉机耕地，为播种做准备。",
            "answer": "たがやして",
            "options": ["たがやして", "うえて", "ほって", "かって"]
        }
    },
    {
        "word": "植える",
        "word_html": "<ruby>植<rt>う</rt></ruby>える",
        "tone": "0",
        "pos": "他一",
        "mean": "种植、栽种；灌输、植入",
        "nuance": "1. 把植物种在土里。\n2. 把思想、意识灌输给某人。",
        "examples": [
            { "jp": "<ruby>庭<rt>にわ</rt></ruby>に<ruby>桜<rt>さくら</rt></ruby>の<ruby>木<rt>き</rt></ruby>を<span class='ex-highlight'><ruby>植<rt>う</rt></ruby>える</span>。", "cn": "在院子里种樱花树。" },
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>の<ruby>心<rt>こころ</rt></ruby>に<ruby>夢<rt>ゆめ</rt></ruby>を<span class='ex-highlight'><ruby>植<rt>う</rt></ruby>える</span>。", "cn": "在孩子心中种下梦想。" }
        ],
        "practice": {
            "sentence": "庭に記念の木を<span class='blank-space'></span>。",
            "cn": "在院子里种一棵纪念树。",
            "answer": "うえる",
            "options": ["うえる", "ほる", "つむ", "こぐ"]
        }
    },
    {
        "word": "掘る",
        "word_html": "<ruby>掘<rt>ほ</rt></ruby>る",
        "tone": "1",
        "pos": "他五",
        "mean": "挖掘、刨；发掘、探究",
        "nuance": "1. 挖土、挖洞。\n2. 挖出埋藏物，或发掘人才/冷门好物，探究事情真相。",
        "examples": [
            { "jp": "<ruby>犬<rt>いぬ</rt></ruby>が<ruby>庭<rt>にわ</rt></ruby>の<ruby>土<rt>つち</rt></ruby>を<span class='ex-highlight'><ruby>掘<rt>ほ</rt></ruby>る</span>。", "cn": "狗在刨院子里的土。" },
            { "jp": "<ruby>歴<rt>れき</rt></ruby><ruby>史<rt>し</rt></ruby>を<span class='ex-highlight'><ruby>掘<rt>ほ</rt></ruby>る</span>。", "cn": "深入研究历史。" }
        ],
        "practice": {
            "sentence": "犬が庭の土を<span class='blank-space'></span>いる。",
            "cn": "狗正在院子里挖土。",
            "answer": "ほって",
            "options": ["ほって", "たがやして", "うめて", "もって"]
        }
    },
    {
        "word": "漕ぐ",
        "word_html": "<ruby>漕<rt>こ</rt></ruby>ぐ",
        "tone": "1",
        "pos": "他五",
        "mean": "划(船)；蹬(车)；荡(秋千)",
        "nuance": "1. 拨水使船前进。\n2. 踩踏板使车前进。\n3. 使秋千摆动。",
        "examples": [
            { "jp": "オールでボートを<span class='ex-highlight'><ruby>漕<rt>こ</rt></ruby>ぐ</span>。", "cn": "用桨划船。" },
            { "jp": "<ruby>自<rt>じ</rt></ruby><ruby>転<rt>てん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>を<span class='ex-highlight'><ruby>漕<rt>こ</rt></ruby>いで</span><ruby>坂<rt>さか</rt></ruby>を<ruby>登<rt>のぼ</rt></ruby>る。", "cn": "蹬着自行车爬坡。" },
            { "jp": "<ruby>公<rt>こう</rt></ruby><ruby>園<rt>えん</rt></ruby>でブランコを<span class='ex-highlight'><ruby>漕<rt>こ</rt></ruby>ぐ</span>。", "cn": "在公园荡秋千。" }
        ],
        "practice": {
            "sentence": "自転車を<span class='blank-space'></span>坂を上る。",
            "cn": "蹬着自行车爬坡。",
            "answer": "こいで",
            "options": ["こいで", "またいで", "かついで", "おして"]
        }
    },
    {
        "word": "極める",
        "word_html": "<ruby>極<rt>きわ</rt></ruby>める",
        "tone": "3",
        "pos": "他一",
        "mean": "登峰造极、精通；极其、达到极限；穷究",
        "nuance": "1. 在学问、技艺等方面达到顶点。\n2. 程度达到最高点，常用于夸张。\n3. 彻底探究真相。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>長<rt>なが</rt></ruby><ruby>年<rt>ねん</rt></ruby>の<ruby>修<rt>しゅ</rt></ruby><ruby>行<rt>ぎょう</rt></ruby>で<ruby>剣<rt>けん</rt></ruby>の<ruby>道<rt>みち</rt></ruby>を<span class='ex-highlight'><ruby>極<rt>きわ</rt></ruby>めた</span>。", "cn": "他通过长年的修行，在剑道上登峰造极。" },
            { "jp": "<ruby>豪<rt>ごう</rt></ruby><ruby>華<rt>か</rt></ruby><ruby>客<rt>きゃく</rt></ruby><ruby>船<rt>せん</rt></ruby>で<ruby>贅<rt>ぜい</rt></ruby><ruby>沢<rt>たく</rt></ruby>を<span class='ex-highlight'><ruby>極<rt>きわ</rt></ruby>める</span>。", "cn": "在豪华客轮上极尽奢华。" },
            { "jp": "<ruby>事<rt>じ</rt></ruby><ruby>件<rt>けん</rt></ruby>の<ruby>真<rt>しん</rt></ruby><ruby>相<rt>そう</rt></ruby>を<span class='ex-highlight'><ruby>極<rt>きわ</rt></ruby>める</span>。", "cn": "彻底查明事件的真相。" }
        ],
        "practice": {
            "sentence": "彼は長年の修行で武道を<span class='blank-space'></span>。",
            "cn": "他经过多年的修行，钻研透了武道。",
            "answer": "きわめた",
            "options": ["きわめた", "はげんだ", "つとめた", "つくした"]
        }
    },
    {
        "word": "励む",
        "word_html": "<ruby>励<rt>はげ</rt></ruby>む",
        "tone": "2",
        "pos": "自五",
        "mean": "刻苦、奋发",
        "nuance": "1. 振奋精神，专心致志做某事。",
        "examples": [
            { "jp": "<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby>、<ruby>試<rt>し</rt></ruby><ruby>験<rt>けん</rt></ruby><ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>に<span class='ex-highlight'><ruby>励<rt>はげ</rt></ruby>んでいる</span>。", "cn": "每天都在刻苦准备考试。" }
        ],
        "practice": {
            "sentence": "将来の夢に向かって勉強に<span class='blank-space'></span>。",
            "cn": "朝着将来的梦想努力学习。",
            "answer": "はげむ",
            "options": ["はげむ", "いどむ", "からむ", "おしむ"]
        }
    },
    {
        "word": "尽くす",
        "word_html": "<ruby>尽<rt>つ</rt></ruby>くす",
        "tone": "2",
        "pos": "他五",
        "mean": "竭尽、用尽；效力、贡献；...尽、...光",
        "nuance": "1. 全部拿出来，不留余地。\n2. 为了他人或团体竭尽全力。\n3. (VR+尽くす，表示动作彻底完成)",
        "examples": [
            { "jp": "<ruby>勝<rt>しょう</rt></ruby><ruby>利<rt>り</rt></ruby>のために<ruby>全<rt>ぜん</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<span class='ex-highlight'><ruby>尽<rt>つ</rt></ruby>くす</span>。", "cn": "为了胜利竭尽全力。" },
            { "jp": "<ruby>国<rt>くに</rt></ruby>のために<span class='ex-highlight'><ruby>尽<rt>つ</rt></ruby>くす</span>。", "cn": "为国效力。" },
            { "jp": "<ruby>森<rt>もり</rt></ruby>を<ruby>焼<rt>や</rt></ruby>き<span class='ex-highlight'><ruby>尽<rt>つ</rt></ruby>くす</span>。", "cn": "把森林烧光。" }
        ],
        "practice": {
            "sentence": "全力を<span class='blank-space'></span>戦ったが、負けてしまった。",
            "cn": "虽然全力以赴战斗了，但还是输了。",
            "answer": "つくして",
            "options": ["つくして", "ついやして", "こわして", "たおして"]
        }
    },
    {
        "word": "努める",
        "word_html": "<ruby>努<rt>つと</rt></ruby>める",
        "tone": "3",
        "pos": "自一",
        "mean": "努力、以此尽力",
        "nuance": "1. 为了达到目的而付出力量。",
        "examples": [
            { "jp": "<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>の<ruby>解<rt>かい</rt></ruby><ruby>決<rt>けつ</rt></ruby>に<span class='ex-highlight'><ruby>努<rt>つと</rt></ruby>める</span>。", "cn": "致力于解决问题。" }
        ],
        "practice": {
            "sentence": "問題の早期解決に<span class='blank-space'></span>。",
            "cn": "努力尽早解决问题。",
            "answer": "つとめる",
            "options": ["つとめる", "もとめる", "まとめる", "はげめる"]
        }
    },
    {
        "word": "絡む",
        "word_html": "<ruby>絡<rt>から</rt></ruby>む",
        "tone": "2",
        "pos": "自五",
        "mean": "缠绕、纠缠；密切相关、牵涉；找茬、纠缠不清",
        "nuance": "1. 线、毛发等缠在一起。\n2. 涉及金钱、利益、感情等。\n3. 对人无理取闹，常指醉汉。",
        "examples": [
            { "jp": "ネックレスの<ruby>鎖<rt>くさり</rt></ruby>が<span class='ex-highlight'><ruby>絡<rt>から</rt></ruby>んで</span>ほどけない。", "cn": "项链链子缠在一起解不开。" },
            { "jp": "<ruby>金<rt>かね</rt></ruby>が<span class='ex-highlight'><ruby>絡<rt>から</rt></ruby>む</span>と<ruby>人<rt>にん</rt></ruby><ruby>間<rt>げん</rt></ruby><ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby>は<ruby>複<rt>ふく</rt></ruby><ruby>雑<rt>ざつ</rt></ruby>になる。", "cn": "一旦牵涉到钱，人际关系就会变复杂。" },
            { "jp": "<ruby>酔<rt>よ</rt></ruby>っ<ruby>払<rt>ぱら</rt></ruby>いに<span class='ex-highlight'><ruby>絡<rt>から</rt></ruby>まれて</span><ruby>困<rt>こま</rt></ruby>った。", "cn": "被醉汉纠缠，真倒霉。" }
        ],
        "practice": {
            "sentence": "ネックレスの鎖が<span class='blank-space'></span>ほどけない。",
            "cn": "项链的链子缠住了，解不开。",
            "answer": "からんで",
            "options": ["からんで", "むすんで", "つないで", "あんで"]
        }
    },
    {
        "word": "摘む",
        "word_html": "<ruby>摘<rt>つ</rt></ruby>む",
        "tone": "0",
        "pos": "他五",
        "mean": "摘、采；扼杀、摘除",
        "nuance": "1. 用手指掐断植物的茎或叶，如花、茶、棉花。\n2. 在坏事或才能发展之前除掉。",
        "examples": [
            { "jp": "<ruby>庭<rt>にわ</rt></ruby>で<ruby>綺<rt>き</rt></ruby><ruby>麗<rt>れい</rt></ruby>な<ruby>花<rt>はな</rt></ruby>を<span class='ex-highlight'><ruby>摘<rt>つ</rt></ruby>んだ</span>。", "cn": "在院子里摘了漂亮的花。" },
            { "jp": "<ruby>才<rt>さい</rt></ruby><ruby>能<rt>のう</rt></ruby>の<ruby>芽<rt>め</rt></ruby>を<span class='ex-highlight'><ruby>摘<rt>つ</rt></ruby>んで</span>はいけない。", "cn": "不能扼杀才能的萌芽。" }
        ],
        "practice": {
            "sentence": "野に咲く花を<span class='blank-space'></span>。",
            "cn": "采摘野外盛开的花。",
            "answer": "つむ",
            "options": ["つむ", "ほる", "かる", "うえる"]
        }
    },
    {
        "word": "摘む",
        "word_html": "<ruby>摘<rt>つま</rt></ruby>む",
        "tone": "0",
        "pos": "他五",
        "mean": "捏、夹；摘取、以此概述",
        "nuance": "1. 用指尖夹住物体。\n2. 提取重点。",
        "examples": [
            { "jp": "<ruby>臭<rt>くさ</rt></ruby>いので<ruby>鼻<rt>はな</rt></ruby>を<span class='ex-highlight'>つまむ</span>。", "cn": "因为太臭所以捏住鼻子。" },
            { "jp": "<ruby>要<rt>よう</rt></ruby><ruby>点<rt>てん</rt></ruby>を<span class='ex-highlight'>つまんで</span><ruby>話<rt>はな</rt></ruby>す。", "cn": "摘取要点说。" }
        ],
        "practice": {
            "sentence": "要点を<span class='blank-space'></span>話してください。",
            "cn": "请抓住要点说。",
            "answer": "つまんで",
            "options": ["つまんで", "つかんで", "つんで", "からんで"]
        }
    },
    {
        "word": "刈る",
        "word_html": "<ruby>刈<rt>か</rt></ruby>る",
        "tone": "0",
        "pos": "他五",
        "mean": "割、剪、修剪",
        "nuance": "1. 用刀具切断并去除草、毛发等。",
        "examples": [
            { "jp": "トラクターで<ruby>草<rt>くさ</rt></ruby>を<span class='ex-highlight'><ruby>刈<rt>か</rt></ruby>る</span>。", "cn": "用拖拉机割草。" }
        ],
        "practice": {
            "sentence": "羊の毛を<span class='blank-space'></span>。",
            "cn": "剪羊毛。",
            "answer": "かる",
            "options": ["かる", "そる", "けずる", "きる"]
        }
    },
    {
        "word": "掴む",
        "word_html": "<ruby>掴<rt>つか</rt></ruby>む",
        "tone": "2",
        "pos": "他五",
        "mean": "抓住、握住；掌握、理解；获得、俘获",
        "nuance": "1. 用手用力握住物体。\n2. 理解要点、内容。\n3. 得到机会、大笔金钱或人心。",
        "examples": [
            { "jp": "<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>で<ruby>吊<rt>つり</rt></ruby><ruby>革<rt>かわ</rt></ruby>を<span class='ex-highlight'><ruby>掴<rt>つか</rt></ruby>む</span>。", "cn": "在电车上抓住吊环。" },
            { "jp": "<ruby>文<rt>ぶん</rt></ruby><ruby>章<rt>しょう</rt></ruby>の<ruby>要<rt>よう</rt></ruby><ruby>領<rt>りょう</rt></ruby>を<span class='ex-highlight'><ruby>掴<rt>つか</rt></ruby>む</span>。", "cn": "掌握文章的要领。" },
            { "jp": "<ruby>歌<rt>か</rt></ruby><ruby>手<rt>しゅ</rt></ruby>はファンの<ruby>心<rt>こころ</rt></ruby>を<span class='ex-highlight'><ruby>掴<rt>つか</rt></ruby>んだ</span>。", "cn": "歌手俘获了粉丝的心。" }
        ],
        "practice": {
            "sentence": "彼は大金を<span class='blank-space'></span>チャンスを狙っている。",
            "cn": "他正寻找抓住大钱机会的办法。",
            "answer": "つかむ",
            "options": ["つかむ", "つむ", "ぬすむ", "ひろう"]
        }
    },
    {
        "word": "しがみつく",
        "word_html": "しがみつく",
        "tone": "0",
        "pos": "自五",
        "mean": "紧紧抱住、死死抓住；恋旧、不想离开",
        "nuance": "1. 用力抱住不放开。\n2. 固执地依附于职位或过去。",
        "examples": [
            { "jp": "<ruby>怖<rt>こわ</rt></ruby>くて<ruby>母<rt>はは</rt></ruby>の<ruby>足<rt>あし</rt></ruby>に<span class='ex-highlight'>しがみついた</span>。", "cn": "因为害怕，死死抱住妈妈的腿。" },
            { "jp": "いつまでも<ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>の<ruby>椅<rt>い</rt></ruby><ruby>子<rt>こ</rt></ruby>に<span class='ex-highlight'>しがみつく</span>。", "cn": "一直赖在社长的位子上不走。" }
        ],
        "practice": {
            "sentence": "必死にロープに<span class='blank-space'></span>、助けを待った。",
            "cn": "他拼命抓住绳子，等待救援。",
            "answer": "しがみついて",
            "options": ["しがみついて", "つかまって", "ぶらさがって", "よりかかって"]
        }
    },
    {
        "word": "解ける",
        "word_html": "<ruby>解<rt>ほど</rt></ruby>ける",
        "tone": "3",
        "pos": "自一",
        "mean": "松开、散开；缓解、放松",
        "nuance": "1. 打好的结或缠绕的东西松脱。\n2. 紧张的情绪或警戒心消除。",
        "examples": [
            { "jp": "<ruby>靴<rt>くつ</rt></ruby><ruby>紐<rt>ひも</rt></ruby>が<span class='ex-highlight'><ruby>解<rt>ほど</rt></ruby>けた</span>。", "cn": "鞋带松了。" },
            { "jp": "<ruby>緊<rt>きん</rt></ruby><ruby>張<rt>ちょう</rt></ruby>が<span class='ex-highlight'><ruby>解<rt>ほど</rt></ruby>けて</span>、ほっとした。", "cn": "紧张感消除，松了一口气。" }
        ],
        "practice": {
            "sentence": "誤解が<span class='blank-space'></span>、二人は仲直りした。",
            "cn": "误会解开后，两人和好了。",
            "answer": "ほどけて",
            "options": ["ほどけて", "むすべて", "ちぎれて", "やぶれて"]
        }
    },
    {
        "word": "解れる",
        "word_html": "<ruby>解<rt>ほぐ</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "解开、变软；缓解、放松",
        "nuance": "1. 从缠结、紧绷的状态变得松散。\n2. 紧张、拘谨的气氛得以缓和。",
        "examples": [
            { "jp": "マッサージで<ruby>肩<rt>かた</rt></ruby>が<span class='ex-highlight'><ruby>解<rt>ほぐ</rt></ruby>れる</span>。", "cn": "通过按摩，肩膀放松了。" },
            { "jp": "<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>の<ruby>冗<rt>じょう</rt></ruby><ruby>談<rt>だん</rt></ruby>で、<ruby>教<rt>きょう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の<ruby>雰<rt>ふん</rt></ruby><ruby>囲<rt>い</rt></ruby><ruby>気<rt>き</rt></ruby>が<span class='ex-highlight'>ほぐれた</span>。", "cn": "老师的玩笑让教室的气氛变得轻松了。" }
        ],
        "practice": {
            "sentence": "準備運動をして体が<span class='blank-space'></span>きた。",
            "cn": "做了热身运动，身体渐渐放松了。",
            "answer": "ほぐれて",
            "options": ["ほぐれて", "くずれて", "こわれて", "くだけて"]
        }
    },
    {
        "word": "綻びる",
        "word_html": "<ruby>綻<rt>ほころ</rt></ruby>びる",
        "tone": "4",
        "pos": "自一",
        "mean": "绽线、开线；(花蕾)微开；(表情)舒展、露笑",
        "nuance": "1. 衣服的缝合处裂开。\n2. 花蕾稍微张开，快要盛开。\n3. 紧绷的脸放松下来微笑。",
        "examples": [
            { "jp": "ズボンの<ruby>尻<rt>しり</rt></ruby>が<span class='ex-highlight'><ruby>綻<rt>ほころ</rt></ruby>びる</span>。", "cn": "裤子屁股那儿开线了。" },
            { "jp": "<ruby>春<rt>はる</rt></ruby>の<ruby>訪<rt>おとず</rt></ruby>れとともに<ruby>梅<rt>うめ</rt></ruby>の<ruby>花<rt>はな</rt></ruby>が<span class='ex-highlight'><ruby>綻<rt>ほころ</rt></ruby>びる</span>。", "cn": "随着春天的到来，梅花开始开放。" },
            { "jp": "<ruby>思<rt>おも</rt></ruby>わず<ruby>顔<rt>かお</rt></ruby>が<span class='ex-highlight'><ruby>綻<rt>ほころ</rt></ruby>びる</span>。", "cn": "不由得展露笑容。" }
        ],
        "practice": {
            "sentence": "梅のつぼみが<span class='blank-space'></span>始めた。",
            "cn": "梅花的花蕾开始绽开。",
            "answer": "ほころび",
            "options": ["ほころび", "さけ", "ほどけ", "ゆるみ"]
        }
    },
    {
        "word": "裂ける",
        "word_html": "<ruby>裂<rt>さ</rt></ruby>ける",
        "tone": "2",
        "pos": "自一",
        "mean": "裂开、破裂；决裂",
        "nuance": "1. 物体受到拉力而断开。\n2. 关系断绝。",
        "examples": [
            { "jp": "<ruby>乾<rt>かん</rt></ruby><ruby>燥<rt>そう</rt></ruby>で<ruby>唇<rt>くちびる</rt></ruby>が<span class='ex-highlight'><ruby>裂<rt>さ</rt></ruby>けた</span>。", "cn": "嘴唇因为干燥而裂开了。" },
            { "jp": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>の<ruby>仲<rt>なか</rt></ruby>が<span class='ex-highlight'><ruby>裂<rt>さ</rt></ruby>ける</span>。", "cn": "两人关系决裂。" }
        ],
        "practice": {
            "sentence": "友情が<span class='blank-space'></span>ような出来事があった。",
            "cn": "发生了一件足以撕裂友情的事。",
            "answer": "さける",
            "options": ["さける", "われる", "おれる", "くだける"]
        }
    },
    {
        "word": "緩める",
        "word_html": "<ruby>緩<rt>ゆる</rt></ruby>める",
        "tone": "3",
        "pos": "他一",
        "mean": "放松、松开；放慢、减缓；解除、放宽",
        "nuance": "1. 使紧绷的东西变松，如力度、绳结。\n2. 降低速度或严厉程度。\n3. 放松警惕，降低要求。",
        "examples": [
            { "jp": "ネクタイを<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>めて</span>くつろぐ。", "cn": "松开领带放松一下。" },
            { "jp": "カーブでスピードを<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>める</span>。", "cn": "在弯道放慢速度。" },
            { "jp": "<ruby>気<rt>き</rt></ruby>を<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>める</span>と<ruby>事<rt>じ</rt></ruby><ruby>故<rt>こ</rt></ruby>につながる。", "cn": "放松警惕会导致事故。" }
        ],
        "practice": {
            "sentence": "攻撃の手を<span class='blank-space'></span>な。",
            "cn": "不要放松攻击的手。",
            "answer": "ゆるめる",
            "options": ["ゆるめる", "とめる", "やすめる", "よわめる"]
        }
    },
    {
        "word": "和らぐ",
        "word_html": "<ruby>和<rt>やわ</rt></ruby>らぐ",
        "tone": "3",
        "pos": "自五",
        "mean": "变缓和、减轻；平静、温和",
        "nuance": "1. 痛苦、寒冷、冲击等程度变弱。\n2. 气氛、表情、心境变柔和。",
        "examples": [
            { "jp": "<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んで<ruby>頭<rt>ず</rt></ruby><ruby>痛<rt>つう</rt></ruby>が<span class='ex-highlight'><ruby>和<rt>やわ</rt></ruby>らいだ</span>。", "cn": "吃了药，头痛缓解了。" },
            { "jp": "<ruby>冬<rt>ふゆ</rt></ruby>が<ruby>過<rt>す</rt></ruby>ぎて<ruby>寒<rt>さむ</rt></ruby>さが<span class='ex-highlight'><ruby>和<rt>やわ</rt></ruby>らいだ</span>。", "cn": "冬天过去，寒冷缓和了。" }
        ],
        "practice": {
            "sentence": "彼の優しい言葉で、不安が<span class='blank-space'></span>。",
            "cn": "他温柔的话语缓解了我的不安。",
            "answer": "やわらいだ",
            "options": ["やわらいだ", "ゆるんだ", "ほどけた", "うすれた"]
        }
    },    
];
const DAY4_WORDS = [
{
        "word": "嵌める",
        "word_html": "<ruby>嵌<rt>は</rt></ruby>める",
        "tone": "0",
        "pos": "他一",
        "mean": "镶嵌、套上；设计陷害、算计",
        "nuance": "1. 使物体紧密地进入吻合的场所。\n2. 欺骗对方使其落入圈套。",
        "examples": [
            { "jp": "<ruby>指<rt>ゆび</rt></ruby>に<ruby>指<rt>ゆび</rt></ruby><ruby>輪<rt>わ</rt></ruby>を<span class='ex-highlight'><ruby>嵌<rt>は</rt></ruby>める</span>。", "cn": "把戒指戴在手指上。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はまんまと<ruby>罠<rt>わな</rt></ruby>に<span class='ex-highlight'><ruby>嵌<rt>は</rt></ruby>められた</span>。", "cn": "他被彻底地算计了。" }
        ],
        "practice": {
            "sentence": "相手を罠に<span class='blank-space'></span>。",
            "cn": "设陷阱套住对方。",
            "answer": "はめる",
            "options": ["はめる", "うめる", "とめる", "きめる"]
        }
    },
    {
        "word": "浸る",
        "word_html": "<ruby>浸<rt>ひた</rt></ruby>る",
        "tone": "2",
        "pos": "自五",
        "mean": "浸泡；沉浸、陶醉",
        "nuance": "1. 身体或物体进入液体中。\n2. 完全处于某种心境、状态或记忆中。",
        "examples": [
            { "jp": "<ruby>温<rt>おん</rt></ruby><ruby>泉<rt>せん</rt></ruby>に<span class='ex-highlight'><ruby>浸<rt>ひた</rt></ruby>って</span><ruby>疲<rt>つか</rt></ruby>れを<ruby>取<rt>と</rt></ruby>る。", "cn": "泡温泉消除疲劳。" },
            { "jp": "<ruby>昔<rt>むかし</rt></ruby>の<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>で</rt></ruby>に<span class='ex-highlight'><ruby>浸<rt>ひた</rt></ruby>る</span>。", "cn": "沉浸在往昔的回忆中。" }
        ],
        "practice": {
            "sentence": "久しぶりに故郷に帰って、思い出に<span class='blank-space'></span>。",
            "cn": "久违地回到故乡，沉浸在回忆里。",
            "answer": "ひたった",
            "options": ["ひたった", "つかった", "しずんだ", "おぼれた"]
        }
    },
    {
        "word": "占める",
        "word_html": "<ruby>占<rt>し</rt></ruby>める",
        "tone": "2",
        "pos": "他一",
        "mean": "占、占据；占(比例)",
        "nuance": "1. 占有场所、地位。\n2. 构成整体的某一部分。",
        "examples": [
            { "jp": "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>の<ruby>中<rt>ちゅう</rt></ruby><ruby>央<rt>おう</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きなテーブルが<span class='ex-highlight'><ruby>占<rt>し</rt></ruby>めている</span>。", "cn": "一张大桌子占据了房间中央。" },
            { "jp": "<ruby>反<rt>はん</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>が<ruby>過<rt>か</rt></ruby><ruby>半<rt>はん</rt></ruby><ruby>数<rt>すう</rt></ruby>を<span class='ex-highlight'><ruby>占<rt>し</rt></ruby>める</span>。", "cn": "反对意见占了过半数。" }
        ],
        "practice": {
            "sentence": "この会社では女性が全社員の6割を<span class='blank-space'></span>。",
            "cn": "在这家公司，女性占全体员工的六成。",
            "answer": "しめている",
            "options": ["しめている", "しめしている", "しめっている", "もとめている"]
        }
    },
    {
        "word": "奪う",
        "word_html": "<ruby>奪<rt>うば</rt></ruby>う",
        "tone": "2",
        "pos": "他五",
        "mean": "抢夺、剥夺；迷住、夺去(心/目光)",
        "nuance": "1. 用暴力夺取物品、生命或权利。\n2. 强烈吸引，使人看得入迷。",
        "examples": [
            { "jp": "<ruby>強<rt>ごう</rt></ruby><ruby>盗<rt>とう</rt></ruby>が<ruby>通<rt>つう</rt></ruby><ruby>行<rt>こう</rt></ruby><ruby>人<rt>にん</rt></ruby>のバッグを<span class='ex-highlight'><ruby>奪<rt>うば</rt></ruby>った</span>。", "cn": "强盗抢走了路人的包。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<ruby>美<rt>うつく</rt></ruby>しさに<ruby>目<rt>め</rt></ruby>を<span class='ex-highlight'><ruby>奪<rt>うば</rt></ruby>われた</span>。", "cn": "被她的美貌深深吸引。" }
        ],
        "practice": {
            "sentence": "美しい景色に心を<span class='blank-space'></span>。",
            "cn": "我被美丽的景色深深吸引了。",
            "answer": "うばわれた",
            "options": ["うばわれた", "うしなった", "かくした", "おおった"]
        }
    },
    {
        "word": "及ぼす",
        "word_html": "<ruby>及<rt>およ</rt></ruby>ぼす",
        "tone": "3",
        "pos": "他五",
        "mean": "波及、施加",
        "nuance": "1. 使影响、受害等作用于对象。",
        "examples": [
            { "jp": "<ruby>台<rt>たい</rt></ruby><ruby>風<rt>ふう</rt></ruby>は<ruby>農<rt>のう</rt></ruby><ruby>作<rt>さく</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>に<ruby>甚<rt>じん</rt></ruby><ruby>大<rt>だい</rt></ruby>な<ruby>被<rt>ひ</rt></ruby><ruby>害<rt>がい</rt></ruby>を<span class='ex-highlight'><ruby>及<rt>およ</rt></ruby>ぼした</span>。", "cn": "台风给农作物造成了巨大的灾害。" }
        ],
        "practice": {
            "sentence": "親の行動は子供に大きな影響を<span class='blank-space'></span>。",
            "cn": "父母的行为会对孩子产生很大影响。",
            "answer": "およぼす",
            "options": ["およぼす", "およぶ", "いたる", "せまる"]
        }
    },
    {
        "word": "授ける",
        "word_html": "<ruby>授<rt>さず</rt></ruby>ける",
        "tone": "3",
        "pos": "他一",
        "mean": "授予、颁发；传授",
        "nuance": "1. 上级赐予下级、神赐予人。\n2. 教授秘诀、智慧等。",
        "examples": [
            { "jp": "<ruby>王<rt>おう</rt></ruby>が<ruby>勇<rt>ゆう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>に<ruby>使<rt>し</rt></ruby><ruby>命<rt>めい</rt></ruby>を<span class='ex-highlight'><ruby>授<rt>さず</rt></ruby>けた</span>。", "cn": "国王将使命交付给了勇者。" },
            { "jp": "<ruby>師<rt>し</rt></ruby><ruby>匠<rt>しょう</rt></ruby>が<ruby>弟<rt>で</rt></ruby><ruby>子<rt>し</rt></ruby>に<ruby>秘<rt>ひ</rt></ruby><ruby>伝<rt>でん</rt></ruby>を<span class='ex-highlight'><ruby>授<rt>さず</rt></ruby>ける</span>。", "cn": "师父向徒弟传授秘诀。" }
        ],
        "practice": {
            "sentence": "神が人間に知恵を<span class='blank-space'></span>と言われている。",
            "cn": "据说神赋予了人类智慧。",
            "answer": "さずけた",
            "options": ["さずけた", "あずけた", "ささげた", "かかげた"]
        }
    },
    {
        "word": "渋る",
        "word_html": "<ruby>渋<rt>しぶ</rt></ruby>る",
        "tone": "2",
        "pos": "他五",
        "mean": "不情愿、犹豫；不畅、受阻",
        "nuance": "1. 因嫌麻烦或不满意而不想做某事。\n2. 事情的进展不顺利，不顺畅。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>返<rt>へん</rt></ruby><ruby>事<rt>じ</rt></ruby>を<span class='ex-highlight'><ruby>渋<rt>しぶ</rt></ruby>っている</span>。", "cn": "他迟迟不愿意答复。" },
            { "jp": "リンゴの<ruby>売<rt>う</rt></ruby>れ<ruby>行<rt>ゆ</rt></ruby>きが<span class='ex-highlight'><ruby>渋<rt>しぶ</rt></ruby>る</span>。", "cn": "苹果的销路不畅。" }
        ],
        "practice": {
            "sentence": "彼は難色を示して、協力を<span class='blank-space'></span>。",
            "cn": "他露出为难的态度，不愿合作。",
            "answer": "しぶった",
            "options": ["しぶった", "とどこおった", "ねばった", "かたよった"]
        }
    },
    {
        "word": "滞る",
        "word_html": "<ruby>滞<rt>とどこお</rt></ruby>る",
        "tone": "4",
        "pos": "自五",
        "mean": "停滞、迟延；堵塞",
        "nuance": "1. 事务进展受阻，不通畅。\n2. 交通受阻，停滞的状态。",
        "examples": [
            { "jp": "<ruby>雪<rt>ゆき</rt></ruby>の<ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby>で<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>が<span class='ex-highlight'><ruby>滞<rt>とどこお</rt></ruby>っている</span>。", "cn": "因为下雪，工程停滞了。" },
            { "jp": "<ruby>事<rt>じ</rt></ruby><ruby>件<rt>けん</rt></ruby>で<ruby>車<rt>くるま</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れが<span class='ex-highlight'><ruby>滞<rt>とどこお</rt></ruby>っている</span>。", "cn": "因事故造成车流堵塞。" }
        ],
        "practice": {
            "sentence": "不景気で資金の回転が<span class='blank-space'></span>。",
            "cn": "经济不景气导致资金周转停滞。",
            "answer": "とどこおる",
            "options": ["とどこおる", "つまる", "とどまる", "ふさがる"]
        }
    },
    {
        "word": "妨げる",
        "word_html": "<ruby>妨<rt>さまた</rt></ruby>げる",
        "tone": "4",
        "pos": "他一",
        "mean": "妨碍、阻碍；遮挡",
        "nuance": "1. 干扰某事的进行或发展。\n2. 挡住视线或通道。",
        "examples": [
            { "jp": "<ruby>雨<rt>あめ</rt></ruby>が<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>の<ruby>進<rt>しん</rt></ruby><ruby>行<rt>こう</rt></ruby>を<span class='ex-highlight'><ruby>妨<rt>さまた</rt></ruby>げた</span>。", "cn": "雨阻碍了工程的进展。" },
            { "jp": "カーテンが<ruby>日<rt>にっ</rt></ruby><ruby>光<rt>こう</rt></ruby>を<span class='ex-highlight'><ruby>妨<rt>さまた</rt></ruby>げる</span>。", "cn": "窗帘遮挡了阳光。" }
        ],
        "practice": {
            "sentence": "大声で話して、周りの人の勉強を<span class='blank-space'></span>はいけない。",
            "cn": "不可以大声说话，妨碍周围的人学习。",
            "answer": "さまたげて",
            "options": ["さまたげて", "へだてて", "ささえて", "かまえて"]
        }
    },
    {
        "word": "阻む",
        "word_html": "<ruby>阻<rt>はば</rt></ruby>む",
        "tone": "2",
        "pos": "他五",
        "mean": "阻挡、阻挠；遏止",
        "nuance": "1. 强力阻止对方的前进或行动。\n2. 使气势或计划受挫。",
        "examples": [
            { "jp": "<ruby>倒<rt>たお</rt></ruby>れた<ruby>木<rt>き</rt></ruby>が<ruby>行<rt>ゆ</rt></ruby>く<ruby>手<rt>て</rt></ruby>を<span class='ex-highlight'><ruby>阻<rt>はば</rt></ruby>む</span>。", "cn": "倒下的树阻挡了去路。" },
            { "jp": "<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>攻<rt>こう</rt></ruby><ruby>撃<rt>げき</rt></ruby>を<span class='ex-highlight'><ruby>阻<rt>はば</rt></ruby>む</span>。", "cn": "阻挡对手的攻击。" }
        ],
        "practice": {
            "sentence": "大きな壁が彼らの行く手を<span class='blank-space'></span>。",
            "cn": "一堵大墙挡住了他们的去路。",
            "answer": "はばんでいる",
            "options": ["はばんでいる", "こばんでいる", "にくんでいる", "のぞんでいる"]
        }
    },
    {
        "word": "拒む",
        "word_html": "<ruby>拒<rt>こば</rt></ruby>む",
        "tone": "2",
        "pos": "他五",
        "mean": "拒绝、抗拒",
        "nuance": "1. 坚决不接受请求、要求或外力。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>不<rt>ふ</rt></ruby><ruby>当<rt>とう</rt></ruby>な<ruby>要<rt>よう</rt></ruby><ruby>求<rt>きゅう</rt></ruby>を<span class='ex-highlight'><ruby>拒<rt>こば</rt></ruby>んだ</span>。", "cn": "他拒绝了不当的要求。" }
        ],
        "practice": {
            "sentence": "彼は不当な要求を断固として<span class='blank-space'></span>。",
            "cn": "他坚决拒绝了不合理的要求。",
            "answer": "こばんだ",
            "options": ["こばんだ", "はばんだ", "うらんだ", "あゆんだ"]
        }
    },
    {
        "word": "止す",
        "word_html": "<ruby>止<rt>よ</rt></ruby>す",
        "tone": "1",
        "pos": "他五",
        "mean": "停止、作罢",
        "nuance": "1. 废止打算做或正在做的事。",
        "examples": [
            { "jp": "<ruby>冗<rt>じょう</rt></ruby><ruby>談<rt>だん</rt></ruby>は<span class='ex-highlight'>よせ</span>。", "cn": "别开玩笑了。" }
        ],
        "practice": {
            "sentence": "危険だから、その計画は<span class='blank-space'></span>方がいい。",
            "cn": "太危险了，那个计划还是放弃比较好。",
            "answer": "よした",
            "options": ["よした", "のがれた", "まぬがれた", "はなれた"]
        }
    },
    {
        "word": "障る",
        "word_html": "<ruby>障<rt>さわ</rt></ruby>る",
        "tone": "0",
        "pos": "自五",
        "mean": "妨碍；有害、有损；得罪、伤(感情)",
        "nuance": "1. 对事情的进行、进展造成影响。\n2. 对身体或某种状态产生坏影响。\n3. 引起不快。",
        "examples": [
            { "jp": "この<ruby>騒<rt>そう</rt></ruby><ruby>音<rt>おん</rt></ruby>は<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>に<span class='ex-highlight'><ruby>障<rt>さわ</rt></ruby>る</span>。", "cn": "这个噪音会影响学习。" },
            { "jp": "<ruby>無<rt>む</rt></ruby><ruby>理<rt>り</rt></ruby>をすると<ruby>体<rt>からだ</rt></ruby>に<span class='ex-highlight'><ruby>障<rt>さわ</rt></ruby>る</span>。", "cn": "勉强的话会有损健康。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>気<rt>き</rt></ruby>に<span class='ex-highlight'><ruby>障<rt>さわ</rt></ruby>る</span>ことを<ruby>言<rt>い</rt></ruby>ってしまった。", "cn": "说了让他不高兴的话。" }
        ],
        "practice": {
            "sentence": "あまり無理をすると体に<span class='blank-space'></span>よ。",
            "cn": "太勉强的话会影响身体。",
            "answer": "さわる",
            "options": ["さわる", "まわる", "こまる", "くさる"]
        }
    },
    {
        "word": "差し支える",
        "word_html": "<ruby>差<rt>さ</rt></ruby>し<ruby>支<rt>つか</rt></ruby>える",
        "tone": "0",
        "pos": "自一",
        "mean": "妨碍、有影响",
        "nuance": "1. 导致不便或无法进行。",
        "examples": [
            { "jp": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>に<span class='ex-highlight'><ruby>差<rt>さ</rt></ruby>し<ruby>支<rt>つか</rt></ruby>える</span>ので、お<ruby>酒<rt>さけ</rt></ruby>は<ruby>控<rt>ひか</rt></ruby>える。", "cn": "因为会妨碍工作，所以我节制饮酒。" }
        ],
        "practice": {
            "sentence": "明日の仕事に<span class='blank-space'></span>ので、もう帰ります。",
            "cn": "会影响明天的工作，所以我先回去了。",
            "answer": "さしつかえる",
            "options": ["さしつかえる", "つかえる", "つかまえる", "ひかえる"]
        }
    },
    {
        "word": "熟す",
        "word_html": "<ruby>熟<rt>こな</rt></ruby>す",
        "tone": "0",
        "pos": "他五",
        "mean": "运用自如、掌握；消化、弄碎；完成、处理",
        "nuance": "1. 熟练地处理技术、语言、工作。\n2. 将某个东西弄碎，消化食物。\n3. 按计划处理完数量庞大的任务。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は3か<ruby>国<rt>こく</rt></ruby><ruby>語<rt>ご</rt></ruby>を<ruby>自<rt>じ</rt></ruby><ruby>由<rt>ゆう</rt></ruby>に<span class='ex-highlight'><ruby>熟<rt>こな</rt></ruby>して</span>いる。", "cn": "她能熟练使用三国语言。" },
            { "jp": "<ruby>胃<rt>い</rt></ruby>が<ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>で、<ruby>硬<rt>かた</rt></ruby>い<ruby>肉<rt>にく</rt></ruby>も<span class='ex-highlight'><ruby>熟<rt>こな</rt></ruby>す</span>。", "cn": "胃很好，硬肉也能消化。" },
            { "jp": "<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は<ruby>大<rt>たい</rt></ruby><ruby>量<rt>りょう</rt></ruby>の<ruby>注<rt>ちゅう</rt></ruby><ruby>文<rt>もん</rt></ruby>を<ruby>手<rt>て</rt></ruby><ruby>際<rt>ぎわ</rt></ruby>よく<span class='ex-highlight'><ruby>熟<rt>こな</rt></ruby>した</span>。", "cn": "今天熟练地处理了大量订单。" }
        ],
        "practice": {
            "sentence": "彼女は難しい役を見事に<span class='blank-space'></span>。",
            "cn": "她出色地完成了那个高难度角色。",
            "answer": "こなした",
            "options": ["こなした", "たがやした", "ひたした", "のがした"]
        }
    },
    {
        "word": "捗る",
        "word_html": "<ruby>捗<rt>はかど</rt></ruby>る",
        "tone": "3",
        "pos": "自五",
        "mean": "进展顺利",
        "nuance": "1. 工作、学习等效率高，进度快。",
        "examples": [
            { "jp": "<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>が<span class='ex-highlight'><ruby>捗<rt>はかど</rt></ruby>った</span>。", "cn": "今天工作效率很高。" }
        ],
        "practice": {
            "sentence": "静かな環境で勉強が<span class='blank-space'></span>。",
            "cn": "在安静的环境里学习很顺利。",
            "answer": "はかどる",
            "options": ["はかどる", "ねばる", "くぐる", "めぐる"]
        }
    },
    {
        "word": "逃れる",
        "word_html": "<ruby>逃<rt>のが</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "逃脱、逃跑；逃避、免除",
        "nuance": "1. 摆脱危险、灾难。\n2. 推卸责任、免受处罚。",
        "examples": [
            { "jp": "<ruby>危<rt>き</rt></ruby><ruby>機<rt>き</rt></ruby><ruby>一<rt>いっ</rt></ruby><ruby>髪<rt>ぱつ</rt></ruby>で<ruby>死<rt>し</rt></ruby>を<span class='ex-highlight'><ruby>逃<rt>のが</rt></ruby>れた</span>。", "cn": "千钧一发之际死里逃生。" },
            { "jp": "<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>を<span class='ex-highlight'><ruby>逃<rt>のが</rt></ruby>れる</span>ことはできない。", "cn": "无法推卸责任。" }
        ],
        "practice": {
            "sentence": "犯人は警察の目を<span class='blank-space'></span>、海外へ逃亡した。",
            "cn": "犯人避开警方视线，逃往海外。",
            "answer": "のがれて",
            "options": ["のがれて", "はなれて", "それて", "かくれて"]
        }
    },
    {
        "word": "離れる",
        "word_html": "<ruby>離<rt>はな</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "离开、远离；脱离；相隔、差距",
        "nuance": "1. 物理距离变远，也可以用于情感。\n2. 离开组织、职业。\n3. 时间或年龄有差距。",
        "examples": [
            { "jp": "<ruby>駅<rt>えき</rt></ruby>から<span class='ex-highlight'><ruby>離<rt>はな</rt></ruby>れた</span><ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>に<ruby>住<rt>す</rt></ruby>む。", "cn": "住在离车站很远的地方。" },
            { "jp": "<ruby>職<rt>しょく</rt></ruby>を<span class='ex-highlight'><ruby>離<rt>はな</rt></ruby>れる</span>。", "cn": "离职。" },
            { "jp": "<ruby>年<rt>とし</rt></ruby>の<span class='ex-highlight'><ruby>離<rt>はな</rt></ruby>れた</span><ruby>兄<rt>きょう</rt></ruby><ruby>弟<rt>だい</rt></ruby>。", "cn": "年龄相差很大的兄弟。" }
        ],
        "practice": {
            "sentence": "ふるさとを<span class='blank-space'></span>、都会で暮らす。",
            "cn": "离开故乡，在城市生活。",
            "answer": "はなれて",
            "options": ["はなれて", "のがれて", "わかれて", "おくれて"]
        }
    },
    {
        "word": "免れる",
        "word_html": "<ruby>免<rt>まぬが</rt></ruby>れる",
        "tone": "4",
        "pos": "他一",
        "mean": "避免、逃脱；免除、摆脱",
        "nuance": "1. 幸免于灾难、危险等坏事。\n2. 免受责任、处罚。",
        "examples": [
            { "jp": "<ruby>台<rt>たい</rt></ruby><ruby>風<rt>ふう</rt></ruby>の<ruby>被<rt>ひ</rt></ruby><ruby>害<rt>がい</rt></ruby>を<span class='ex-highlight'><ruby>免<rt>まぬが</rt></ruby>れる</span>。", "cn": "免受台风的侵害。" },
            { "jp": "<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>を<span class='ex-highlight'><ruby>免<rt>まぬが</rt></ruby>れる</span>ことはできない。", "cn": "无法免除责任。" }
        ],
        "practice": {
            "sentence": "彼は証拠不十分で罪を<span class='blank-space'></span>。",
            "cn": "他因证据不足而逃过了罪责。",
            "answer": "まぬがれた",
            "options": ["まぬがれた", "のがれた", "ゆるされた", "すくわれた"]
        }
    },
    {
        "word": "避ける",
        "word_html": "<ruby>避<rt>よ</rt></ruby>ける",
        "tone": "2",
        "pos": "他一",
        "mean": "躲闪、躲避；防备",
        "nuance": "1. 物理上快速移动身体以避开迎面而来的物体。\n2. 主动规避可能造成危险或不利的情况。",
        "examples": [
            { "jp": "<ruby>飛<rt>と</rt></ruby>んできたボールを<span class='ex-highlight'>よける</span>。", "cn": "躲开飞过来的球。" },
            { "jp": "<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>を<span class='ex-highlight'><ruby>避<rt>よ</rt></ruby>ける</span>ために、<ruby>早<rt>はや</rt></ruby>めに<ruby>出<rt>しゅっ</rt></ruby><ruby>発<rt>ぱつ</rt></ruby>した。", "cn": "为了避开大雨，提前出发了。" }
        ],
        "practice": {
            "sentence": "水たまりを<span class='blank-space'></span>歩く。",
            "cn": "避开水坑走路。",
            "answer": "よけて",
            "options": ["よけて", "さけて", "どけて", "ぬけて"]
        }
    }
];
const DAY5_WORDS = [
{
        "word": "逸れる",
        "word_html": "<ruby>逸<rt>そ</rt></ruby>れる",
        "tone": "2",
        "pos": "自一",
        "mean": "偏离、岔开；(话题)跑偏",
        "nuance": "1. 脱离原本的路线或方向。\n2. 脱离主题。",
        "examples": [
            { "jp": "<ruby>台<rt>たい</rt></ruby><ruby>風<rt>ふう</rt></ruby>がコースを<span class='ex-highlight'><ruby>逸<rt>そ</rt></ruby>れた</span>。", "cn": "台风偏离了路径。" },
            { "jp": "<ruby>話<rt>はなし</rt></ruby>が<ruby>本<rt>ほん</rt></ruby><ruby>題<rt>だい</rt></ruby>から<span class='ex-highlight'><ruby>逸<rt>そ</rt></ruby>れて</span>しまった。", "cn": "话题偏离了主题。" }
        ],
        "practice": {
            "sentence": "話がいつの間にか横道に<span class='blank-space'></span>、結論が出なかった。",
            "cn": "话题不知什么时候跑偏了，最后也没得出结论。",
            "answer": "それた",
            "options": ["それた", "ずれた", "はずれた", "ゆがんだ"]
        }
    },
    {
        "word": "ずれる",
        "word_html": "ずれる",
        "tone": "2",
        "pos": "自一",
        "mean": "错位、移位；有分歧、不合拍",
        "nuance": "1. 原本吻合的位置发生了滑动或偏差。\n2. 意见、时机、感觉等不一致。",
        "examples": [
            { "jp": "<ruby>眼<rt>め</rt></ruby><ruby>鏡<rt>がね</rt></ruby>が<span class='ex-highlight'>ずれる</span>。", "cn": "眼镜滑下来了。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>とは<ruby>話<rt>はなし</rt></ruby>の<ruby>焦<rt>しょう</rt></ruby><ruby>点<rt>てん</rt></ruby>が<span class='ex-highlight'>ずれている</span>。", "cn": "和他聊天不在一个频道。" }
        ],
        "practice": {
            "sentence": "議論の焦点が本来の目的から<span class='blank-space'></span>いる。",
            "cn": "讨论的焦点偏离了原本的目的。",
            "answer": "ずれている",
            "options": ["ずれている", "はずれている", "へだてている", "さえぎっている"]
        }
    },
    {
        "word": "外れる",
        "word_html": "<ruby>外<rt>はず</rt></ruby>れる",
        "tone": "0",
        "pos": "自一",
        "mean": "脱落、掉下；不中、落空；被排除",
        "nuance": "1. 安装好的东西松开或分家。\n2. 未击中目标，或预测失败。\n3. 从名单、职位中被拿掉。",
        "examples": [
            { "jp": "シャツのボタンが<span class='ex-highlight'><ruby>外<rt>はず</rt></ruby>れた</span>。", "cn": "衬衫扣子开了。" },
            { "jp": "<ruby>宝<rt>たから</rt></ruby>くじが<span class='ex-highlight'><ruby>外<rt>はず</rt></ruby>れる</span>。", "cn": "彩票没中奖。" },
            { "jp": "<ruby>代<rt>だい</rt></ruby><ruby>表<rt>ひょう</rt></ruby>メンバーから<span class='ex-highlight'><ruby>外<rt>はず</rt></ruby>れる</span>。", "cn": "落选代表队成员。" }
        ],
        "practice": {
            "sentence": "天気予報が<span class='blank-space'></span>、午後から激しい雨が降り出した。",
            "cn": "天气预报落空，下午下起了大雨。",
            "answer": "はずれて",
            "options": ["はずれて", "それて", "ずれて", "ころがって"]
        }
    },
    {
        "word": "偏る",
        "word_html": "<ruby>偏<rt>かたよ</rt></ruby>る",
        "tone": "3",
        "pos": "自五",
        "mean": "偏向、不平衡",
        "nuance": "1. 集中在一方，失去整体平衡。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>偏<rt>かたよ</rt></ruby>った</span><ruby>考<rt>かんが</rt></ruby>えを<ruby>持<rt>も</rt></ruby>つ。", "cn": "持有偏激的想法。" }
        ],
        "practice": {
            "sentence": "彼の考え方は極端に<span class='blank-space'></span>いて、柔軟性に欠ける。",
            "cn": "他的想法极端偏颇，缺乏灵活性。",
            "answer": "かたよって",
            "options": ["かたよって", "ゆがんで", "へだてて", "まって"]
        }
    },
    {
        "word": "歪める",
        "word_html": "<ruby>歪<rt>ゆが</rt></ruby>める",
        "tone": "3",
        "pos": "他一",
        "mean": "弄歪、扭曲；歪曲；扭曲",
        "nuance": "1. 使物体形状弯曲变形。\n2. 故意改变事实或解释。\n3. 使人的性格或想法变得不正常。",
        "examples": [
            { "jp": "<ruby>熱<rt>ねつ</rt></ruby>でプラスチックを<span class='ex-highlight'><ruby>歪<rt>ゆが</rt></ruby>める</span>。", "cn": "受热使塑料变形。" },
            { "jp": "<ruby>事<rt>じ</rt></ruby><ruby>実<rt>じつ</rt></ruby>を<span class='ex-highlight'><ruby>歪<rt>ゆが</rt></ruby>めて</span><ruby>伝<rt>つた</rt></ruby>える。", "cn": "歪曲事实进行传达。" },
            { "jp": "<ruby>家<rt>か</rt></ruby><ruby>庭<rt>てい</rt></ruby><ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby>が<ruby>彼<rt>かれ</rt></ruby>の<ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby>を<span class='ex-highlight'><ruby>歪<rt>ゆが</rt></ruby>めて</span>しまった。", "cn": "家庭环境使他的性格变得扭曲了。" }
        ],
        "practice": {
            "sentence": "事実を<span class='blank-space'></span>解釈し、誤った情報を広めてしまった。",
            "cn": "他歪曲事实进行解释，传播了错误信息。",
            "answer": "ゆがめて",
            "options": ["ゆがめて", "へだてて", "さえぎって", "はずして"]
        }
    },
    {
        "word": "歪む",
        "word_html": "<ruby>歪<rt>ひず</rt></ruby>む",
        "tone": "0",
        "pos": "自五",
        "mean": "翘曲、走样；(关系)产生裂痕/紧张",
        "nuance": "1. 因受力不均导致形状改变。\n2. 抽象的压力导致不正常。",
        "examples": [
            { "jp": "<ruby>地<rt>じ</rt></ruby><ruby>震<rt>しん</rt></ruby>で<ruby>建<rt>たて</rt></ruby><ruby>物<rt>もの</rt></ruby>の<ruby>柱<rt>はしら</rt></ruby>が<span class='ex-highlight'><ruby>歪<rt>ひず</rt></ruby>んだ</span>。", "cn": "因为地震，建筑的柱子发生了变形。" },
            { "jp": "<ruby>無<rt>む</rt></ruby><ruby>理<rt>り</rt></ruby>がたたって<ruby>夫<rt>ふう</rt></ruby><ruby>婦<rt>ふ</rt></ruby><ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby>が<span class='ex-highlight'>ひずむ</span>。", "cn": "因长期勉强维持，夫妻关系出现了裂痕。" }
        ],
        "practice": {
            "sentence": "地震の激しい揺れで、建物の鉄骨がぐにゃりと<span class='blank-space'></span>。",
            "cn": "剧烈地震使建筑的钢骨弯曲变形。",
            "answer": "ひずんだ",
            "options": ["ひずんだ", "かたよった", "ずれた", "それた"]
        }
    },
    {
        "word": "隔てる",
        "word_html": "<ruby>隔<rt>へだ</rt></ruby>てる",
        "tone": "3",
        "pos": "他一",
        "mean": "隔开、相隔；疏远",
        "nuance": "1. 设置屏障或距离，使两者分开，可用于时间。\n2. 产生心理上的距离。",
        "examples": [
            { "jp": "<ruby>川<rt>かわ</rt></ruby>が<ruby>二<rt>ふた</rt></ruby>つの<ruby>国<rt>くに</rt></ruby>を<span class='ex-highlight'><ruby>隔<rt>へだ</rt></ruby>てている</span>。", "cn": "河流隔开了两个国家。" },
            { "jp": "<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>と<span class='ex-highlight'><ruby>隔<rt>へだ</rt></ruby>て</span>のない<ruby>会<rt>かい</rt></ruby><ruby>話<rt>わ</rt></ruby>をする。", "cn": "和朋友进行亲密无间的交谈。" }
        ],
        "practice": {
            "sentence": "長年音信不通だった友人と、二十年の時を<span class='blank-space'></span>再会を果たした。",
            "cn": "和多年音信不通的朋友，时隔二十年再次重逢。",
            "answer": "へだてて",
            "options": ["へだてて", "さえぎって", "はなれて", "のがれて"]
        }
    },
    {
        "word": "遮る",
        "word_html": "<ruby>遮<rt>さえぎ</rt></ruby>る",
        "tone": "3",
        "pos": "他五",
        "mean": "遮挡、阻挡；打断",
        "nuance": "1. 挡住光线、风、视线等。\n2. 打断别人的谈话或行动。",
        "examples": [
            { "jp": "カーテンで<ruby>日<rt>にっ</rt></ruby><ruby>光<rt>こう</rt></ruby>を<span class='ex-highlight'><ruby>遮<rt>さえぎ</rt></ruby>る</span>。", "cn": "用窗帘遮挡阳光。" },
            { "jp": "<ruby>人<rt>ひと</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を<span class='ex-highlight'><ruby>遮<rt>さえぎ</rt></ruby>らないで</span>ください。", "cn": "请不要打断别人的话。" }
        ],
        "practice": {
            "sentence": "カーテンを閉めて外からの強い日差しを<span class='blank-space'></span>、室内を暗くした。",
            "cn": "拉上窗帘挡住外面强烈的阳光，让室内暗了下来。",
            "answer": "さえぎり",
            "options": ["さえぎり", "へだて", "ゆがめ", "はずし"]
        }
    },
    {
        "word": "舞う",
        "word_html": "<ruby>舞<rt>ま</rt></ruby>う",
        "tone": "1",
        "pos": "自五",
        "mean": "飞舞、飘舞；跳舞",
        "nuance": "1. 花瓣、雪花、灰尘等在空中盘旋。\n2. 多指日本传统舞蹈，动作轻盈盘旋。",
        "examples": [
            { "jp": "<ruby>桜<rt>さくら</rt></ruby>の<ruby>花<rt>はな</rt></ruby>びらが<ruby>風<rt>かぜ</rt></ruby>に<span class='ex-highlight'><ruby>舞<rt>ま</rt></ruby>う</span>。", "cn": "樱花花瓣随风飘舞。" },
            { "jp": "<ruby>舞<rt>ぶ</rt></ruby><ruby>台<rt>たい</rt></ruby>で<ruby>優<rt>ゆう</rt></ruby><ruby>雅<rt>が</rt></ruby>に<span class='ex-highlight'><ruby>舞<rt>ま</rt></ruby>う</span>。", "cn": "在舞台上优雅地起舞。" }
        ],
        "practice": {
            "sentence": "春風に吹かれて、満開の桜の花びらが美しく空に<span class='blank-space'></span>。",
            "cn": "在春风吹拂下，盛开的樱花花瓣美丽地飞舞在空中。",
            "answer": "まう",
            "options": ["まう", "ころがる", "それる", "かたよる"]
        }
    },
    {
        "word": "転がる",
        "word_html": "<ruby>転<rt>ころ</rt></ruby>がる",
        "tone": "0",
        "pos": "自五",
        "mean": "滚动；躺卧；到处都是、不稀奇",
        "nuance": "1. 球状物或圆柱体旋转移动。\n2. 人随意地躺下。\n3. 多比喻随处可见平凡的事物。",
        "examples": [
            { "jp": "ボールが<ruby>坂<rt>さか</rt></ruby>を<span class='ex-highlight'><ruby>転<rt>ころ</rt></ruby>がって</span><ruby>落<rt>お</rt></ruby>ちた。", "cn": "球顺着坡滚下去了。" },
            { "jp": "<ruby>草<rt>そう</rt></ruby><ruby>原<rt>げん</rt></ruby>に<span class='ex-highlight'><ruby>転<rt>ころ</rt></ruby>がって</span><ruby>空<rt>そら</rt></ruby>を<ruby>見<rt>み</rt></ruby>る。", "cn": "躺在草地上看天。" },
            { "jp": "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>には<ruby>本<rt>ほん</rt></ruby>が<span class='ex-highlight'><ruby>転<rt>ころ</rt></ruby>がっている</span>。", "cn": "房间里到处都是书。" }
        ],
        "practice": {
            "sentence": "リビングの床には、子供のおもちゃがあちこちに<span class='blank-space'></span>。",
            "cn": "客厅地板上到处滚落着孩子的玩具。",
            "answer": "ころがっている",
            "options": ["ころがっている", "まっている", "ひずんでいる", "へだてている"]
        }
    },
    {
        "word": "掲げる",
        "word_html": "<ruby>掲<rt>かか</rt></ruby>げる",
        "tone": "0",
        "pos": "他一",
        "mean": "悬挂、高举；提出、标榜；刊登",
        "nuance": "1. 把旗帜、招牌等挂在高处。\n2. 提出主义、方针、口号并公之于众。\n3. 在报纸刊物上发表。",
        "examples": [
            { "jp": "<ruby>旗<rt>はた</rt></ruby>を<span class='ex-highlight'><ruby>掲<rt>かか</rt></ruby>げて</span><ruby>行<rt>こう</rt></ruby><ruby>進<rt>しん</rt></ruby>する。", "cn": "举起旗帜进行游行。" },
            { "jp": "<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>のビジョンを<span class='ex-highlight'><ruby>掲<rt>かか</rt></ruby>げる</span>。", "cn": "提出公司的愿景。" },
            { "jp": "<ruby>記<rt>き</rt></ruby><ruby>事<rt>じ</rt></ruby>を<ruby>新<rt>しん</rt></ruby><ruby>聞<rt>ぶん</rt></ruby>に<span class='ex-highlight'><ruby>掲<rt>かか</rt></ruby>げる</span>。", "cn": "在报纸上刊登文章。" }
        ],
        "practice": {
            "sentence": "崇高な理念を<span class='blank-space'></span>、新しい会社を設立した。",
            "cn": "他高举崇高理念，创办了一家新公司。",
            "answer": "かかげて",
            "options": ["かかげて", "めくって", "しぼって", "はさんで"]
        }
    },
    {
        "word": "捲る",
        "word_html": "<ruby>捲<rt>めく</rt></ruby>る",
        "tone": "0",
        "pos": "他五",
        "mean": "翻、翻开",
        "nuance": "1. 翻书页、掀起覆盖物。",
        "examples": [
            { "jp": "<ruby>本<rt>ほん</rt></ruby>のページを<ruby>一<rt>いち</rt></ruby><ruby>枚<rt>まい</rt></ruby><ruby>一<rt>いち</rt></ruby><ruby>枚<rt>まい</rt></ruby><span class='ex-highlight'><ruby>捲<rt>めく</rt></ruby>る</span>。", "cn": "一页一页地翻书。" }
        ],
        "practice": {
            "sentence": "新しい月になったので、カレンダーを一枚<span class='blank-space'></span>。",
            "cn": "到了新的月份，把日历翻过一页。",
            "answer": "めくる",
            "options": ["めくる", "しぼる", "すくう", "かかげる"]
        }
    },
    {
        "word": "絞る",
        "word_html": "<ruby>絞<rt>しぼ</rt></ruby>る",
        "tone": "2",
        "pos": "他五",
        "mean": "拧、挤；绞(尽脑汁)、挤出(声音)；缩小(范围)",
        "nuance": "1. 用力挤压出液体。\n2. 竭尽全力。\n3. 集中焦点，减少候补。",
        "examples": [
            { "jp": "<ruby>雑<rt>ぞう</rt></ruby><ruby>巾<rt>きん</rt></ruby>を<span class='ex-highlight'><ruby>絞<rt>しぼ</rt></ruby>る</span>。", "cn": "拧抹布。" },
            { "jp": "<ruby>声<rt>こえ</rt></ruby>を<span class='ex-highlight'><ruby>絞<rt>しぼ</rt></ruby>って</span><ruby>救<rt>すく</rt></ruby>いを<ruby>求<rt>もと</rt></ruby>める。", "cn": "拼命呼救。" },
            { "jp": "<ruby>候<rt>こう</rt></ruby><ruby>補<rt>ほ</rt></ruby><ruby>者<rt>しゃ</rt></ruby>を3<ruby>人<rt>にん</rt></ruby>に<span class='ex-highlight'><ruby>絞<rt>しぼ</rt></ruby>る</span>。", "cn": "把候选人缩小到3人。" }
        ],
        "practice": {
            "sentence": "皆で知恵を<span class='blank-space'></span>、難局を乗り越えるための解決策を考えた。",
            "cn": "大家绞尽脑汁，思考渡过难关的解决办法。",
            "answer": "しぼって",
            "options": ["しぼって", "めくって", "はさんで", "はじいて"]
        }
    },
    {
        "word": "掬う",
        "word_html": "<ruby>掬<rt>すく</rt></ruby>う",
        "tone": "0",
        "pos": "他五",
        "mean": "捞、舀",
        "nuance": "1. 用手或勺子从液体/散沙中取物。",
        "examples": [
            { "jp": "<ruby>川<rt>かわ</rt></ruby>の<ruby>水<rt>みず</rt></ruby>を<ruby>手<rt>て</rt></ruby>に<span class='ex-highlight'><ruby>掬<rt>すく</rt></ruby>って</span><ruby>飲<rt>の</rt></ruby>む。", "cn": "用手捧起河水喝。" }
        ],
        "practice": {
            "sentence": "冷めないうちに、熱々のスープをスプーンで<span class='blank-space'></span>口に運んだ。",
            "cn": "趁热把滚烫的汤用勺子舀起来送入口中。",
            "answer": "すくう",
            "options": ["すくう", "はじく", "しぼる", "かぶる"]
        }
    },
    {
        "word": "挟む",
        "word_html": "<ruby>挟<rt>はさ</rt></ruby>む",
        "tone": "2",
        "pos": "他五",
        "mean": "夹、隔；插(嘴)、打断；怀有、心存",
        "nuance": "1. 物体位于两者之间。\n2. 介入谈话或事务、活动。\n3. 心中怀有疑问或某种感觉。",
        "examples": [
            { "jp": "パンにハムを<span class='ex-highlight'><ruby>挟<rt>はさ</rt></ruby>む</span>。", "cn": "面包里夹火腿。" },
            { "jp": "<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>に<ruby>休<rt>きゅう</rt></ruby><ruby>憩<rt>けい</rt></ruby>を<span class='ex-highlight'><ruby>挟<rt>はさ</rt></ruby>む</span>。", "cn": "比赛中途休息。" },
            { "jp": "<ruby>不<rt>ふ</rt></ruby><ruby>満<rt>まん</rt></ruby>を<span class='ex-highlight'><ruby>挟<rt>はさ</rt></ruby>んだ</span><ruby>口<rt>く</rt></ruby><ruby>調<rt>ちょう</rt></ruby>で<ruby>答<rt>こた</rt></ruby>えた。", "cn": "用带着不满的语气回答。" }
        ],
        "practice": {
            "sentence": "読みかけの本にしおりを<span class='blank-space'></span>、机の上に置いた。",
            "cn": "把书签夹在读到一半的书里，放在桌上。",
            "answer": "はさんで",
            "options": ["はさんで", "さえぎって", "へだてて", "かたよって"]
        }
    },
    {
        "word": "窶れる",
        "word_html": "<ruby>窶<rt>やつ</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "消瘦、憔悴",
        "nuance": "1. 因病、劳累或烦恼而变得瘦弱难看。",
        "examples": [
            { "jp": "<ruby>長<rt>なが</rt></ruby>い<ruby>看<rt>かん</rt></ruby><ruby>病<rt>びょう</rt></ruby>で<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'>やつれて</span>しまった。", "cn": "长时间的护理让她变得憔悴。" }
        ],
        "practice": {
            "sentence": "長年の過労がたたり（产生恶果）、彼はすっかり<span class='blank-space'></span>しまった。",
            "cn": "多年的过度劳累终于带来恶果，他整个人都憔悴了。",
            "answer": "やつれて",
            "options": ["やつれて", "かぶって", "はずんで", "かさんで"]
        }
    },
    {
        "word": "被る",
        "word_html": "<ruby>被<rt>かぶ</rt></ruby>る",
        "tone": "2",
        "pos": "自五/他五",
        "mean": "戴、盖；蒙受、承担；重叠、雷同",
        "nuance": "1. 戴帽子、盖被子。\n2. 承受液体、灰尘、罪名等。\n3. 与他人的服装或想法等发生重合。",
        "examples": [
            { "jp": "<ruby>帽<rt>ぼう</rt></ruby><ruby>子<rt>し</rt></ruby>を<span class='ex-highlight'><ruby>被<rt>かぶ</rt></ruby>る</span>。", "cn": "戴帽子。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>全<rt>すべ</rt></ruby>ての<ruby>罪<rt>つみ</rt></ruby>を<span class='ex-highlight'><ruby>被<rt>かぶ</rt></ruby>った</span>。", "cn": "他承担了所有罪行。" },
            { "jp": "<ruby>職<rt>しょく</rt></ruby><ruby>場<rt>ば</rt></ruby>で<ruby>服<rt>ふく</rt></ruby><ruby>装<rt>そう</rt></ruby>が<span class='ex-highlight'>かぶって</span>しまった。", "cn": "在职场上与别人撞衫了。" }
        ],
        "practice": {
            "sentence": "彼は他人のミスによる損害を全て<span class='blank-space'></span>ことになった。",
            "cn": "他不得不承担别人失误造成的全部损失。",
            "answer": "かぶる",
            "options": ["かぶる", "かかげる", "それる", "ゆがむ"]
        }
    },
    {
        "word": "嵩む",
        "word_html": "<ruby>嵩<rt>かさ</rt></ruby>む",
        "tone": "2",
        "pos": "自五",
        "mean": "增多、涨",
        "nuance": "1. 体积增大，或数量/金额变大。",
        "examples": [
            { "jp": "<ruby>荷<rt>に</rt></ruby><ruby>物<rt>もつ</rt></ruby>が<span class='ex-highlight'><ruby>嵩<rt>かさ</rt></ruby>んで</span><ruby>持<rt>も</rt></ruby>ちきれない。", "cn": "行李太多拿不了。" }
        ],
        "practice": {
            "sentence": "無駄遣いが重なり、借金が予想以上に<span class='blank-space'></span>しまった。",
            "cn": "不断乱花钱，债务比预想中膨胀得还要厉害。",
            "answer": "かさんで",
            "options": ["かさんで", "はずんで", "ゆがんで", "ころがって"]
        }
    },
    {
        "word": "弾む",
        "word_html": "<ruby>弾<rt>はず</rt></ruby>む",
        "tone": "0",
        "pos": "自五",
        "mean": "反弹、蹦；高涨、活跃",
        "nuance": "1. 球等物体触地弹起。\n2. 呼吸急促、心情兴奋、对话热烈。",
        "examples": [
            { "jp": "ボールがよく<span class='ex-highlight'><ruby>弾<rt>はず</rt></ruby>む</span>。", "cn": "球弹得很高。" },
            { "jp": "<ruby>旧<rt>きゅう</rt></ruby><ruby>友<rt>ゆう</rt></ruby>との<ruby>話<rt>はなし</rt></ruby>が<span class='ex-highlight'><ruby>弾<rt>はず</rt></ruby>んだ</span>。", "cn": "和老朋友聊得很投机。" }
        ],
        "practice": {
            "sentence": "明日からの旅行のことを考えると、期待に胸が<span class='blank-space'></span>。",
            "cn": "一想到明天开始的旅行，我就满怀期待。",
            "answer": "はずむ",
            "options": ["はずむ", "はじく", "まう", "ころがる"]
        }
    },
    {
        "word": "弾く",
        "word_html": "<ruby>弾<rt>はじ</rt></ruby>く",
        "tone": "2",
        "pos": "他五",
        "mean": "弹、拨；排斥、不沾",
        "nuance": "1. 用手指拨动或弹击。\n2. 表面光滑使水或油无法附着。",
        "examples": [
            { "jp": "<ruby>指<rt>ゆび</rt></ruby>でコインを<span class='ex-highlight'><ruby>弾<rt>はじ</rt></ruby>く</span>。", "cn": "用手指弹硬币。" },
            { "jp": "この<ruby>布<rt>ぬの</rt></ruby>は<ruby>水<rt>みず</rt></ruby>を<span class='ex-highlight'><ruby>弾<rt>はじ</rt></ruby>く</span><ruby>加<rt>か</rt></ruby><ruby>工<rt>こう</rt></ruby>がされている。", "cn": "这块布料做了防水处理。" }
        ],
        "practice": {
            "sentence": "このレインコートは特殊な素材でできており、雨水をよく<span class='blank-space'></span>。",
            "cn": "这件雨衣使用了特殊材料，很能防水。",
            "answer": "はじく",
            "options": ["はじく", "はずむ", "しぼる", "すくう"]
        }
    }    
];
const DAY6_WORDS = [
{
        "word": "譲る",
        "word_html": "<ruby>譲<rt>ゆず</rt></ruby>る",
        "tone": "0",
        "pos": "他五",
        "mean": "让给、转让；让步、妥协",
        "nuance": "1. 把东西、权利或座位给别人。\n2. 坚持己见但暂且退让。",
        "examples": [
            { "jp": "お<ruby>年<rt>とし</rt></ruby><ruby>寄<rt>よ</rt></ruby>りに<ruby>席<rt>せき</rt></ruby>を<span class='ex-highlight'><ruby>譲<rt>ゆず</rt></ruby>る</span>。", "cn": "给老人让座。" },
            { "jp": "<ruby>予<rt>よ</rt></ruby><ruby>算<rt>さん</rt></ruby>については<ruby>一<rt>いっ</rt></ruby><ruby>歩<rt>ぽ</rt></ruby>も<span class='ex-highlight'><ruby>譲<rt>ゆず</rt></ruby>れない</span>。", "cn": "关于预算一步也不能退让。" }
        ],
        "practice": {
            "sentence": "電車でお年寄りに席を<span class='blank-space'></span>。",
            "cn": "在电车上把座位让给了老人。",
            "answer": "ゆずった",
            "options": ["ゆずった", "さぐった", "ひびいた", "そびえた"]
        }
    },
    {
        "word": "探る",
        "word_html": "<ruby>探<rt>さぐ</rt></ruby>る",
        "tone": "0",
        "pos": "他五",
        "mean": "摸索、掏；试探、探听",
        "nuance": "1. 在看不见的情况下用手寻找。\n2. 暗中调查情况或对方的心思。",
        "examples": [
            { "jp": "<ruby>暗<rt>くら</rt></ruby><ruby>闇<rt>やみ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>壁<rt>かべ</rt></ruby>を<span class='ex-highlight'><ruby>探<rt>さぐ</rt></ruby>り</span>ながら<ruby>進<rt>すす</rt></ruby>む。", "cn": "在黑暗中摸着墙前进。" },
            { "jp": "<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>腹<rt>はら</rt></ruby>を<span class='ex-highlight'><ruby>探<rt>さぐ</rt></ruby>る</span>。", "cn": "试探对方的心思。" }
        ],
        "practice": {
            "sentence": "手探りで暗闇の中、出口を<span class='blank-space'></span>。",
            "cn": "在黑暗中摸索着寻找出口。",
            "answer": "さぐる",
            "options": ["さぐる", "ゆずる", "ひびく", "かなう"]
        }
    },
    {
        "word": "響く",
        "word_html": "<ruby>響<rt>ひび</rt></ruby>く",
        "tone": "2",
        "pos": "自五",
        "mean": "回响、回荡；打动(人心)；产生(坏)影响",
        "nuance": "1. 声音反响，震动传开。\n2. 深深地感触到内心。\n3. 后果显现出来。",
        "examples": [
            { "jp": "<ruby>鐘<rt>かね</rt></ruby>の<ruby>音<rt>おと</rt></ruby>が<span class='ex-highlight'><ruby>響<rt>ひび</rt></ruby>く</span>。", "cn": "钟声回荡。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>が<ruby>胸<rt>むね</rt></ruby>に<span class='ex-highlight'><ruby>響<rt>ひび</rt></ruby>いた</span>。", "cn": "他的话深深打动了我的心。" },
            { "jp": "<ruby>睡<rt>すい</rt></ruby><ruby>眠<rt>みん</rt></ruby><ruby>不<rt>ふ</rt></ruby><ruby>足<rt>そく</rt></ruby>が<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>に<span class='ex-highlight'><ruby>響<rt>ひび</rt></ruby>く</span>。", "cn": "睡眠不足影响了工作。" }
        ],
        "practice": {
            "sentence": "彼の励ましの言葉が、落ち込んでいた私の心に深く<span class='blank-space'></span>。",
            "cn": "他鼓励的话深深打动了我低落的心。",
            "answer": "ひびいた",
            "options": ["ひびいた", "そびえた", "かなった", "ゆずった"]
        }
    },
    {
        "word": "聳える",
        "word_html": "<ruby>聳<rt>そび</rt></ruby>える",
        "tone": "3",
        "pos": "自一",
        "mean": "耸立、屹立",
        "nuance": "1. 山或建筑物高高地立着。",
        "examples": [
            { "jp": "<ruby>目<rt>め</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>高<rt>こう</rt></ruby><ruby>層<rt>そう</rt></ruby>ビルが<span class='ex-highlight'><ruby>聳<rt>そび</rt></ruby>えている</span>。", "cn": "眼前耸立着高层建筑。" }
        ],
        "practice": {
            "sentence": "遠くからでも見えるほど、巨大な塔が街の中心に<span class='blank-space'></span>。",
            "cn": "巨大的塔耸立在城市中心，远远就能看见。",
            "answer": "そびえている",
            "options": ["そびえている", "ひびいている", "さぐっている", "かなっている"]
        }
    },
    {
        "word": "敵う",
        "word_html": "<ruby>敵<rt>かな</rt></ruby>う",
        "tone": "2",
        "pos": "自五",
        "mean": "敌得过、比得上；受得了、忍受",
        "nuance": "1. 能力相当，常用于否定形。\n2. 常接在「〜ては」后面，用否定形表示“受不了”。",
        "examples": [
            { "jp": "<ruby>将<rt>しょう</rt></ruby><ruby>棋<rt>ぎ</rt></ruby>では<ruby>彼<rt>かれ</rt></ruby>に<span class='ex-highlight'><ruby>敵<rt>かな</rt></ruby>わない</span>。", "cn": "下象棋我敌不过他。" },
            { "jp": "<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は<ruby>暑<rt>あつ</rt></ruby>くて<span class='ex-highlight'><ruby>敵<rt>かな</rt></ruby>わない</span>。", "cn": "今天热得让人受不了。" }
        ],
        "practice": {
            "sentence": "口喧嘩では、どう頑張っても彼女に<span class='blank-space'></span>。",
            "cn": "要说吵架的话，无论怎么努力我都敌不过她。",
            "answer": "かなわない",
            "options": ["かなわない", "ゆずらない", "さぐらない", "ひびかない"]
        }
    },
    {
        "word": "適う",
        "word_html": "<ruby>適<rt>かな</rt></ruby>う",
        "tone": "2",
        "pos": "自五",
        "mean": "符合、适合",
        "nuance": "1. 符合条件、道理或目的。",
        "examples": [
            { "jp": "<ruby>目<rt>もく</rt></ruby><ruby>的<rt>てき</rt></ruby>に<span class='ex-highlight'><ruby>適<rt>かな</rt></ruby>う</span><ruby>人<rt>じん</rt></ruby><ruby>材<rt>ざい</rt></ruby>を<ruby>探<rt>さが</rt></ruby>す。", "cn": "寻找符合目的的人才。" }
        ],
        "practice": {
            "sentence": "厳しい条件に<span class='blank-space'></span>物件を、根気よく探す。",
            "cn": "我耐心寻找符合苛刻条件的房子。",
            "answer": "かなう",
            "options": ["かなう", "すます", "とげる", "ほどこす"]
        }
    },
    {
        "word": "済ます",
        "word_html": "<ruby>済<rt>す</rt></ruby>ます",
        "tone": "2",
        "pos": "他五",
        "mean": "弄完、办完；凑合、将就；还清",
        "nuance": "1. 使事情结束。\n2. 用代用品解决，不追求完美。\n3. 偿还债务。",
        "examples": [
            { "jp": "<ruby>宿<rt>しゅく</rt></ruby><ruby>題<rt>だい</rt></ruby>を<span class='ex-highlight'><ruby>済<rt>す</rt></ruby>ませて</span>から<ruby>遊<rt>あそ</rt></ruby>ぶ。", "cn": "做完作业后再玩。" },
            { "jp": "<ruby>昼<rt>ちゅう</rt></ruby><ruby>食<rt>しょく</rt></ruby>をコンビニで<span class='ex-highlight'><ruby>済<rt>す</rt></ruby>ます</span>。", "cn": "在便利店解决午饭。" },
            { "jp": "<ruby>借<rt>しゃっ</rt></ruby><ruby>金<rt>きん</rt></ruby>を<span class='ex-highlight'><ruby>済<rt>す</rt></ruby>ます</span>。", "cn": "还清欠款。" }
        ],
        "practice": {
            "sentence": "時間がないので、夕食は宅配ピザで簡単に<span class='blank-space'></span>。",
            "cn": "没有时间，所以晚餐就用外送披萨简单解决了。",
            "answer": "すませた",
            "options": ["すませた", "とげた", "ほどこした", "はたした"]
        }
    },
    {
        "word": "遂げる",
        "word_html": "<ruby>遂<rt>と</rt></ruby>げる",
        "tone": "2",
        "pos": "他一",
        "mean": "完成、实现",
        "nuance": "1. 最终达成目的或使命。",
        "examples": [
            { "jp": "ついに<ruby>目<rt>もく</rt></ruby><ruby>的<rt>てき</rt></ruby>を<span class='ex-highlight'><ruby>遂<rt>と</rt></ruby>げた</span>。", "cn": "终于达成了目的。" }
        ],
        "practice": {
            "sentence": "多くの苦難を乗り越え、彼はついに悲願を<span class='blank-space'></span>。",
            "cn": "克服许多苦难后，他终于实现了夙愿。",
            "answer": "とげた",
            "options": ["とげた", "すませた", "ほどこした", "はたした"]
        }
    },
    {
        "word": "施す",
        "word_html": "<ruby>施<rt>ほどこ</rt></ruby>す",
        "tone": "3",
        "pos": "他五",
        "mean": "施舍；施加、装饰；施行、进行",
        "nuance": "1. 给予恩惠或财物。\n2. 做细致的加工或装饰。\n3. 进行手术、治疗、教育或采取对策。",
        "examples": [
            { "jp": "<ruby>物<rt>もの</rt></ruby><ruby>乞<rt>ご</rt></ruby>いをする<ruby>人<rt>ひと</rt></ruby>に<ruby>恩<rt>おん</rt></ruby><ruby>恵<rt>けい</rt></ruby>を<span class='ex-highlight'><ruby>施<rt>ほどこ</rt></ruby>す</span>。", "cn": "施恩与乞讨的人。" },
            { "jp": "<ruby>写<rt>しゃ</rt></ruby><ruby>真<rt>しん</rt></ruby>に<ruby>彩<rt>さい</rt></ruby><ruby>色<rt>しょく</rt></ruby>を<span class='ex-highlight'><ruby>施<rt>ほどこ</rt></ruby>す</span>。", "cn": "给照片上色。" },
            { "jp": "<ruby>患<rt>かん</rt></ruby><ruby>者<rt>じゃ</rt></ruby>に<ruby>緊<rt>きん</rt></ruby><ruby>急<rt>きゅう</rt></ruby><ruby>手<rt>しゅ</rt></ruby><ruby>術<rt>じゅつ</rt></ruby>を<span class='ex-highlight'><ruby>施<rt>ほどこ</rt></ruby>す</span>。", "cn": "对患者施行紧急手术。" }
        ],
        "practice": {
            "sentence": "古くなった建物の外壁に、美しい装飾を<span class='blank-space'></span>。",
            "cn": "给老旧建筑的外墙加上美丽装饰。",
            "answer": "ほどこす",
            "options": ["ほどこす", "はたす", "しのぐ", "まさる"]
        }
    },
    {
        "word": "果たす",
        "word_html": "<ruby>果<rt>は</rt></ruby>たす",
        "tone": "2",
        "pos": "他五",
        "mean": "完成、实现；起到、发挥",
        "nuance": "1. 履行义务、责任、承诺。\n2. 发挥某种作用或功能。",
        "examples": [
            { "jp": "<ruby>親<rt>おや</rt></ruby>としての<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>を<span class='ex-highlight'><ruby>果<rt>は</rt></ruby>たす</span>。", "cn": "尽到作为父母的责任。" },
            { "jp": "<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby>な<ruby>役<rt>やく</rt></ruby><ruby>割<rt>わり</rt></ruby>を<span class='ex-highlight'><ruby>果<rt>は</rt></ruby>たす</span>。", "cn": "发挥重要的作用。" }
        ],
        "practice": {
            "sentence": "長年の努力が実り、ついに子供の頃からの約束を<span class='blank-space'></span>。",
            "cn": "多年的努力终于开花结果，实现了儿时的约定。",
            "answer": "はたす",
            "options": ["はたす", "ほどこす", "しのぐ", "おとる"]
        }
    },
    {
        "word": "凌ぐ",
        "word_html": "<ruby>凌<rt>しの</rt></ruby>ぐ",
        "tone": "2",
        "pos": "他五",
        "mean": "忍耐、以此度过；超越、胜过",
        "nuance": "1. 勉强应付过难关、饥饿、恶劣天气。\n2. 在程度或能力上超过前者。",
        "examples": [
            { "jp": "<ruby>雨<rt>あめ</rt></ruby>を<span class='ex-highlight'><ruby>凌<rt>しの</rt></ruby>ぐ</span>ために<ruby>木<rt>き</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>避<rt>ひ</rt></ruby><ruby>難<rt>なん</rt></ruby>した。", "cn": "为了避雨躲到树下。" },
            { "jp": "<ruby>前<rt>ぜん</rt></ruby><ruby>作<rt>さく</rt></ruby>を<span class='ex-highlight'><ruby>凌<rt>しの</rt></ruby>ぐ</span>ヒット<ruby>作<rt>さく</rt></ruby>。", "cn": "超越前作的热门作品。" }
        ],
        "practice": {
            "sentence": "水を飲んで、一時的に空腹を<span class='blank-space'></span>。",
            "cn": "喝点水暂时充饥。",
            "answer": "しのぐ",
            "options": ["しのぐ", "まさる", "おとる", "おぎなう"]
        }
    },
    {
        "word": "勝る",
        "word_html": "<ruby>勝<rt>まさ</rt></ruby>る",
        "tone": "2",
        "pos": "自五",
        "mean": "胜过、优越",
        "nuance": "1. 在力量、价值、品质上高于比较对象。",
        "examples": [
            { "jp": "<ruby>健<rt>けん</rt></ruby><ruby>康<rt>こう</rt></ruby>に<span class='ex-highlight'><ruby>勝<rt>まさ</rt></ruby>る</span><ruby>宝<rt>たから</rt></ruby>はない。", "cn": "没有比健康更宝贵的财富了。" }
        ],
        "practice": {
            "sentence": "経験と実績では、誰にも<span class='blank-space'></span>自信がある。",
            "cn": "在经验和成绩方面，我有自信不输任何人。",
            "answer": "まさる",
            "options": ["まさる", "おとる", "おぎなう", "しのぶ"]
        }
    },
    {
        "word": "劣る",
        "word_html": "<ruby>劣<rt>おと</rt></ruby>る",
        "tone": "0",
        "pos": "自五",
        "mean": "劣、逊色",
        "nuance": "1. 价值、能力、质量等低于比较对象。",
        "examples": [
            { "jp": "<ruby>性<rt>せい</rt></ruby><ruby>能<rt>のう</rt></ruby>では<ruby>他<rt>た</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>製<rt>せい</rt></ruby><ruby>品<rt>ひん</rt></ruby>に<span class='ex-highlight'><ruby>劣<rt>おと</rt></ruby>る</span>。", "cn": "在性能上逊色于其他公司的产品。" }
        ],
        "practice": {
            "sentence": "最新機種と比べると、このパソコンは性能が<span class='blank-space'></span>。",
            "cn": "和最新机型相比，这台电脑性能逊色。",
            "answer": "おとる",
            "options": ["おとる", "まさる", "しのぶ", "こらえる"]
        }
    },
    {
        "word": "補う",
        "word_html": "<ruby>補<rt>おぎな</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "弥补、补充；赔偿",
        "nuance": "1. 补足不足的部分。\n2. 补偿损失。",
        "examples": [
            { "jp": "<ruby>栄<rt>えい</rt></ruby><ruby>養<rt>よう</rt></ruby><ruby>剤<rt>ざい</rt></ruby>でビタミンを<span class='ex-highlight'><ruby>補<rt>おぎな</rt></ruby>う</span>。", "cn": "用营养补充剂补充维生素。" },
            { "jp": "<ruby>損<rt>そん</rt></ruby><ruby>害<rt>がい</rt></ruby>を<ruby>金<rt>きん</rt></ruby><ruby>銭<rt>せん</rt></ruby>で<span class='ex-highlight'><ruby>補<rt>おぎな</rt></ruby>う</span>。", "cn": "用金钱来填补损失。" }
        ],
        "practice": {
            "sentence": "急な欠員が出たため、短期のアルバイトで<span class='blank-space'></span>。",
            "cn": "因为突然有人手空缺，就用短期兼职来补上。",
            "answer": "おぎなう",
            "options": ["おぎなう", "しのぶ", "こらえる", "にぶる"]
        }
    },
    {
        "word": "忍ぶ",
        "word_html": "<ruby>忍<rt>しの</rt></ruby>ぶ",
        "tone": "0",
        "pos": "自五/他五",
        "mean": "忍耐；隐蔽、躲藏",
        "nuance": "1. 忍受屈辱或痛苦。\n2. 避开他人的耳目，悄悄行动。",
        "examples": [
            { "jp": "<ruby>涙<rt>なみだ</rt></ruby>を<span class='ex-highlight'><ruby>忍<rt>しの</rt></ruby>んで</span><ruby>別<rt>わか</rt></ruby>れを<ruby>告<rt>つ</rt></ruby>げた。", "cn": "忍住眼泪告别了。" },
            { "jp": "<ruby>人<rt>ひと</rt></ruby><ruby>目<rt>め</rt></ruby>を<span class='ex-highlight'><ruby>忍<rt>しの</rt></ruby>んで</span><ruby>会<rt>あ</rt></ruby>う。", "cn": "偷偷地见面。" }
        ],
        "practice": {
            "sentence": "恥を<span class='blank-space'></span>、先生に教えを請う。",
            "cn": "忍着羞耻向老师请教。",
            "answer": "しのんで",
            "options": ["しのんで", "こらえて", "にぶって", "とがって"]
        }
    },
    {
        "word": "堪える",
        "word_html": "<ruby>堪<rt>こら</rt></ruby>える",
        "tone": "3",
        "pos": "他一",
        "mean": "忍住、控制",
        "nuance": "1. 压抑内部涌上来的感情或生理反应，如眼泪、笑、痛。",
        "examples": [
            { "jp": "<ruby>笑<rt>わら</rt></ruby>いたい<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちを<ruby>必<rt>ひっ</rt></ruby><ruby>死<rt>し</rt></ruby>に<span class='ex-highlight'><ruby>堪<rt>こら</rt></ruby>えた</span>。", "cn": "拼命忍住想笑的心情。" }
        ],
        "practice": {
            "sentence": "足の激しい痛みを<span class='blank-space'></span>、ゴールまで走りきった。",
            "cn": "忍着脚上的剧痛，坚持跑到了终点。",
            "answer": "こらえる",
            "options": ["こらえる", "しのぶ", "にぶる", "とがる"]
        }
    },
    {
        "word": "鈍る",
        "word_html": "<ruby>鈍<rt>にぶ</rt></ruby>る",
        "tone": "2",
        "pos": "自五",
        "mean": "变钝；迟钝、退步；变弱",
        "nuance": "1. 刀具等不锋利。\n2. 技能、动作、头脑等变得不灵敏。\n3. 势头或决心减弱。",
        "examples": [
            { "jp": "ナイフの<ruby>切<rt>き</rt></ruby>れ<ruby>味<rt>あじ</rt></ruby>が<span class='ex-highlight'><ruby>鈍<rt>にぶ</rt></ruby>る</span>。", "cn": "刀变得不快了。" },
            { "jp": "<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby><ruby>不<rt>ぶ</rt></ruby><ruby>足<rt>そく</rt></ruby>で<ruby>腕<rt>うで</rt></ruby>が<span class='ex-highlight'><ruby>鈍<rt>にぶ</rt></ruby>る</span>。", "cn": "因为缺乏练习，手艺退步。" },
            { "jp": "<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>で<ruby>負<rt>ま</rt></ruby>けて<ruby>意<rt>い</rt></ruby><ruby>欲<rt>よく</rt></ruby>が<span class='ex-highlight'><ruby>鈍<rt>にぶ</rt></ruby>った</span>。", "cn": "因为比赛失败，干劲减弱了。" }
        ],
        "practice": {
            "sentence": "厳しい寒さで手足がかじかみ、動きが<span class='blank-space'></span>。",
            "cn": "严寒让手脚冻僵，动作变得迟钝。",
            "answer": "にぶる",
            "options": ["にぶる", "とがる", "さえる", "たくらむ"]
        }
    },
    {
        "word": "尖る",
        "word_html": "<ruby>尖<rt>とが</rt></ruby>る",
        "tone": "2",
        "pos": "自五",
        "mean": "尖、锐利；敏感、紧绷",
        "nuance": "1. 顶端细长锐利。\n2. 神经或感觉变得敏锐。",
        "examples": [
            { "jp": "<ruby>怒<rt>おこ</rt></ruby>った<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<ruby>目<rt>め</rt></ruby>が<span class='ex-highlight'><ruby>尖<rt>とが</rt></ruby>っていた</span>。", "cn": "生气的她眼神很锐利。" },
            { "jp": "<ruby>神<rt>しん</rt></ruby><ruby>経<rt>けい</rt></ruby>が<span class='ex-highlight'><ruby>尖<rt>とが</rt></ruby>っている</span>。", "cn": "神经紧绷。" }
        ],
        "practice": {
            "sentence": "削りたての鉛筆の先のように、神経が<span class='blank-space'></span>。",
            "cn": "他的神经像刚削好的铅笔尖一样敏感紧绷。",
            "answer": "とがっている",
            "options": ["とがっている", "にぶっている", "さえている", "たくらんでいる"]
        }
    },
    {
        "word": "冴える",
        "word_html": "<ruby>冴<rt>さ</rt></ruby>える",
        "tone": "2",
        "pos": "自一",
        "mean": "清澈、鲜明；清醒、敏锐；精湛、出色",
        "nuance": "1. 光、色、声音等非常清晰，寒冷刺骨。\n2. 头脑清楚，感觉灵敏。\n3. 技术高超，表现精彩。",
        "examples": [
            { "jp": "<ruby>冬<rt>ふゆ</rt></ruby>の<ruby>夜<rt>よ</rt></ruby><ruby>空<rt>ぞら</rt></ruby>に<ruby>月<rt>つき</rt></ruby>が<span class='ex-highlight'><ruby>冴<rt>さ</rt></ruby>えている</span>。", "cn": "冬天的夜空中月亮分外清朗。" },
            { "jp": "<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は<ruby>頭<rt>あたま</rt></ruby>が<span class='ex-highlight'><ruby>冴<rt>さ</rt></ruby>えている</span>。", "cn": "今天头脑很清醒。" },
            { "jp": "<ruby>職<rt>しょく</rt></ruby><ruby>人<rt>にん</rt></ruby>の<ruby>技<rt>わざ</rt></ruby>が<span class='ex-highlight'><ruby>冴<rt>さ</rt></ruby>える</span>。", "cn": "工匠的技艺精湛。" }
        ],
        "practice": {
            "sentence": "コーヒーを飲んだせいか、夜になっても目が<span class='blank-space'></span>眠れない。",
            "cn": "也许是喝了咖啡，到了晚上眼睛还很清醒，睡不着。",
            "answer": "さえて",
            "options": ["さえて", "にぶって", "とがって", "たくらんで"]
        }
    },
    {
        "word": "企む",
        "word_html": "<ruby>企<rt>たくら</rt></ruby>む",
        "tone": "3",
        "pos": "他五",
        "mean": "策划、图谋",
        "nuance": "1. 暗中计划坏事或恶作剧。",
        "examples": [
            { "jp": "<ruby>何<rt>なに</rt></ruby>か<ruby>悪<rt>あく</rt></ruby><ruby>事<rt>じ</rt></ruby>を<span class='ex-highlight'><ruby>企<rt>たくら</rt></ruby>んで</span>いるに<ruby>違<rt>ちが</rt></ruby>いない。", "cn": "肯定在策划什么坏事。" }
        ],
        "practice": {
            "sentence": "彼はライバル会社への復讐を密かに<span class='blank-space'></span>。",
            "cn": "他暗中策划报复竞争公司。",
            "answer": "たくらむ",
            "options": ["たくらむ", "さえる", "とがる", "にぶる"]
        }
    }
];
const DAY7_WORDS = [
    {
        "word": "挙げる",
        "word_html": "<ruby>挙<rt>あ</rt></ruby>げる",
        "tone": "0",
        "pos": "他一",
        "mean": "举起；列举；举行、取得",
        "nuance": "1. 物理动作：举手、举旗。\n2. 举出例子、名字。\n3. 举行婚礼、取得成果、竭尽全力。",
        "examples": [
            { "jp": "<ruby>賛<rt>さん</rt></ruby><ruby>成<rt>せい</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<span class='ex-highlight'><ruby>手<rt>て</rt></ruby>を<ruby>挙<rt>あ</rt></ruby>げて</span>ください。", "cn": "赞成的人请举手。" },
            { "jp": "<ruby>具<rt>ぐ</rt></ruby><ruby>体<rt>たい</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>例<rt>れい</rt></ruby>を<span class='ex-highlight'><ruby>挙<rt>あ</rt></ruby>げる</span>。", "cn": "列举具体的例子。" },
            { "jp": "<ruby>結<rt>けっ</rt></ruby><ruby>婚<rt>こん</rt></ruby><ruby>式<rt>しき</rt></ruby>を<span class='ex-highlight'><ruby>挙<rt>あ</rt></ruby>げる</span>。", "cn": "举行婚礼。" }
        ],
        "practice": {
            "sentence": "彼は会議の中で、自説を裏付けるための具体的なデータをいくつも<span class='blank-space'></span>説明した。",
            "cn": "他在会议中列举了多项具体数据来支持自己的观点。",
            "answer": "あげて",
            "options": ["あげて", "もうけて", "もよおして", "もくろんで"]
        }
    },
    {
        "word": "目論む",
        "word_html": "<ruby>目<rt>もく</rt></ruby><ruby>論<rt>ろ</rt></ruby>む",
        "tone": "3",
        "pos": "他五",
        "mean": "计划、策划",
        "nuance": "在此构思未来的计划。",
        "examples": [
            { "jp": "<ruby>新<rt>あたら</rt></ruby>しい<ruby>事<rt>じ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>を<span class='ex-highlight'><ruby>目<rt>もく</rt></ruby><ruby>論<rt>ろ</rt></ruby>む</span>。", "cn": "策划新的事业。" }
        ],
        "practice": {
            "sentence": "その企業は新技術を導入することで、業界シェアの拡大を<span class='blank-space'></span>ている。",
            "cn": "那家公司企图通过引进新技术来扩大行业份额。",
            "answer": "もくろんで",
            "options": ["もくろんで", "あげて", "さからって", "くつがえして"]
        }
    },
    {
        "word": "催す",
        "word_html": "<ruby>催<rt>もよお</rt></ruby>す",
        "tone": "3",
        "pos": "他五",
        "mean": "举办、举行；感觉要...",
        "nuance": "1. 召集人开会、搞活动。\n2. 感到困倦、便意、尿意等生理现象。",
        "examples": [
            { "jp": "<ruby>歓<rt>かん</rt></ruby><ruby>迎<rt>げい</rt></ruby><ruby>会<rt>かい</rt></ruby>を<span class='ex-highlight'><ruby>催<rt>もよお</rt></ruby>す</span>。", "cn": "举办欢迎会。" },
            { "jp": "<ruby>食<rt>しょく</rt></ruby><ruby>後<rt>ご</rt></ruby>に<span class='ex-highlight'><ruby>眠<rt>ねむ</rt></ruby><ruby>気<rt>け</rt></ruby>を<ruby>催<rt>もよお</rt></ruby>す</span>。", "cn": "饭后感到困倦。" }
        ],
        "practice": {
            "sentence": "来月、定年退職される田中部長のために、ホテルで盛大な送別会を<span class='blank-space'></span>ことになった。",
            "cn": "下个月决定在酒店为退休的田中部长举办盛大的送别会。",
            "answer": "もよおす",
            "options": ["もよおす", "いじる", "よわる", "かすむ"]
        }
    },
    {
        "word": "設ける",
        "word_html": "<ruby>設<rt>もう</rt></ruby>ける",
        "tone": "3",
        "pos": "他一",
        "mean": "设立、制定；预备、创造",
        "nuance": "1. 设置规则、机关、委员会。\n2. 特意留出时间、机会、空隙。",
        "examples": [
            { "jp": "<ruby>厳<rt>きび</rt></ruby>しい<ruby>規<rt>き</rt></ruby><ruby>則<rt>そく</rt></ruby>を<span class='ex-highlight'><ruby>設<rt>もう</rt></ruby>ける</span>。", "cn": "制定严格的规则。" },
            { "jp": "<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>いの<ruby>席<rt>せき</rt></ruby>を<span class='ex-highlight'><ruby>設<rt>もう</rt></ruby>ける</span>。", "cn": "专门安排面谈的机会。" }
        ],
        "practice": {
            "sentence": "トラブルを未然に防ぐため、会社は従業員に対して厳格なセキュリティガイドラインを<span class='blank-space'></span>。",
            "cn": "为了防患于未然，公司为员工制定了严格的安全准则。",
            "answer": "もうけた",
            "options": ["もうけた", "あげた", "もくろんだ", "さからった"]
        }
    },
    {
        "word": "逆らう",
        "word_html": "<ruby>逆<rt>さか</rt></ruby>らう",
        "tone": "3",
        "pos": "自五",
        "mean": "逆、违背；违抗、反抗",
        "nuance": "1. 逆着水流、风向等物理方向。\n2. 不服从命令、教导或大势。",
        "examples": [
            { "jp": "<ruby>風<rt>かぜ</rt></ruby>に<span class='ex-highlight'><ruby>逆<rt>さか</rt></ruby>らって</span><ruby>走<rt>はし</rt></ruby>る。", "cn": "逆风奔跑。" },
            { "jp": "<ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れに<span class='ex-highlight'><ruby>逆<rt>さか</rt></ruby>らう</span>。", "cn": "逆时代潮流而动。" }
        ],
        "practice": {
            "sentence": "時代の流れに<span class='blank-space'></span>、彼はあくまでも伝統的な手法にこだわり続けている。",
            "cn": "他逆着时代潮流，坚持传统做法。",
            "answer": "さからって",
            "options": ["さからって", "くつがえして", "よわって", "うすまって"]
        }
    },
    {
        "word": "覆す",
        "word_html": "<ruby>覆<rt>くつがえ</rt></ruby>す",
        "tone": "3",
        "pos": "他五",
        "mean": "打翻；推翻、颠覆",
        "nuance": "1. 把东西弄翻。\n2. 彻底改变定论、判决或常识。",
        "examples": [
            { "jp": "<ruby>荒<rt>あら</rt></ruby><ruby>波<rt>なみ</rt></ruby>が<ruby>船<rt>ふね</rt></ruby>を<span class='ex-highlight'><ruby>覆<rt>くつがえ</rt></ruby>した</span>。", "cn": "狂浪掀翻了船。" },
            { "jp": "<ruby>常<rt>じょう</rt></ruby><ruby>識<rt>しき</rt></ruby>を<span class='ex-highlight'><ruby>覆<rt>くつがえ</rt></ruby>す</span><ruby>大<rt>だい</rt></ruby><ruby>発<rt>はっ</rt></ruby><ruby>見<rt>けん</rt></ruby>。", "cn": "颠覆常识的大发现。" }
        ],
        "practice": {
            "sentence": "彼は圧倒的な実力を見せつけ、事前の予想を<span class='blank-space'></span>勝利を手にした。",
            "cn": "他展现出压倒性的实力，推翻赛前预想取得了胜利。",
            "answer": "くつがえして",
            "options": ["くつがえして", "さからって", "もうけて", "もよおして"]
        }
    },
    {
        "word": "弱る",
        "word_html": "<ruby>弱<rt>よわ</rt></ruby>る",
        "tone": "2",
        "pos": "自五",
        "mean": "衰弱、虚弱；为难、困扰",
        "nuance": "1. 身体或力量变弱。\n2. 遇到难题不知如何是好。",
        "examples": [
            { "jp": "<ruby>病<rt>びょう</rt></ruby><ruby>気<rt>き</rt></ruby>で<ruby>体<rt>からだ</rt></ruby>が<span class='ex-highlight'><ruby>弱<rt>よわ</rt></ruby>る</span>。", "cn": "因病身体衰弱。" },
            { "jp": "<ruby>返<rt>へん</rt></ruby><ruby>事<rt>じ</rt></ruby>に<span class='ex-highlight'><ruby>弱<rt>よわ</rt></ruby>る</span>。", "cn": "不知该怎么回复而感到为难。" }
        ],
        "practice": {
            "sentence": "長引く不況の影響で、多くの中小企業の経営体力が急速に<span class='blank-space'></span>きている。",
            "cn": "受长期经济低迷影响，许多中小企业的经营实力正在迅速衰弱。",
            "answer": "よわって",
            "options": ["よわって", "うすまって", "かすんで", "ぼやけて"]
        }
    },
    {
        "word": "薄まる",
        "word_html": "<ruby>薄<rt>うす</rt></ruby>まる",
        "tone": "3",
        "pos": "自五",
        "mean": "变淡、稀释；淡薄",
        "nuance": "1. 液体浓度降低。\n2. 兴趣、记忆、存在感等减弱。",
        "examples": [
            { "jp": "<ruby>氷<rt>こおり</rt></ruby>が<ruby>溶<rt>と</rt></ruby>けてジュースが<span class='ex-highlight'><ruby>薄<rt>うす</rt></ruby>まる</span>。", "cn": "冰化了，果汁变淡了。" },
            { "jp": "<ruby>遠<rt>とお</rt></ruby>い<ruby>昔<rt>むかし</rt></ruby>の<ruby>記<rt>き</rt></ruby><ruby>憶<rt>おく</rt></ruby>が<span class='ex-highlight'><ruby>薄<rt>うす</rt></ruby>まる</span>。", "cn": "遥远的记忆变得淡薄了。" }
        ],
        "practice": {
            "sentence": "彼の無実が証明されるにつれて、周囲の彼に対する疑いは次第に<span class='blank-space'></span>いった。",
            "cn": "随着他的清白得到证明，周围对他的怀疑逐渐淡了。",
            "answer": "うすまって",
            "options": ["うすまって", "よわって", "すんで", "すけて"]
        }
    },
    {
        "word": "弄る",
        "word_html": "<ruby>弄<rt>いじ</rt></ruby>る",
        "tone": "2",
        "pos": "他五",
        "mean": "摆弄、玩弄；随意改动、捣鼓；调侃、戏弄",
        "nuance": "1. 手不自觉地触摸、抚摸或把玩某物。\n2. 作为爱好，对机器、庭院等进行修整或改装。\n3. 拿人开玩笑。",
        "examples": [
            { "jp": "<ruby>会<rt>かい</rt></ruby><ruby>話<rt>わ</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>、ずっとスマホを<span class='ex-highlight'><ruby>弄<rt>いじ</rt></ruby>っている</span>。", "cn": "谈话时一直在玩手机。" },
            { "jp": "<ruby>素<rt>しら</rt></ruby><ruby>人<rt>うと</rt></ruby>がパソコンを<span class='ex-highlight'><ruby>弄<rt>いじ</rt></ruby>って</span><ruby>壊<rt>こわ</rt></ruby>してしまった。", "cn": "外行人随意摆弄电脑，结果弄坏了。" },
            { "jp": "<ruby>後<rt>こう</rt></ruby><ruby>輩<rt>はい</rt></ruby>を<span class='ex-highlight'><ruby>弄<rt>いじ</rt></ruby>る</span>。", "cn": "拿后辈开玩笑。" }
        ],
        "practice": {
            "sentence": "彼は大事なプレゼンテーションの最中、緊張のあまりネクタイを<span class='blank-space'></span>癖が出てしまった。",
            "cn": "在重要演讲途中，他因为紧张而下意识摆弄领带。",
            "answer": "いじる",
            "options": ["いじる", "なまける", "サボる", "かすむ"]
        }
    },
    {
        "word": "怠ける",
        "word_html": "<ruby>怠<rt>なま</rt></ruby>ける",
        "tone": "3",
        "pos": "自/他一",
        "mean": "偷懒、懈怠",
        "nuance": "1. 该做的事情不做，贪图安逸。",
        "examples": [
            { "jp": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<span class='ex-highlight'><ruby>怠<rt>なま</rt></ruby>ける</span>。", "cn": "工作偷懒。" }
        ],
        "practice": {
            "sentence": "受験生であるにもかかわらず、夏休みの間ずっと勉強を<span class='blank-space'></span>いたため、志望校の判定が下がってしまった。",
            "cn": "明明是考生，却整个暑假都偷懒不学习，志愿学校的评估也下降了。",
            "answer": "なまけて",
            "options": ["なまけて", "おこたって", "サボって", "ばてて"]
        }
    },
    {
        "word": "怠る",
        "word_html": "<ruby>怠<rt>おこた</rt></ruby>る",
        "tone": "3",
        "pos": "他五",
        "mean": "疏忽、懈怠",
        "nuance": "1. 该做的准备没做，或没给到应有的注意。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>健<rt>けん</rt></ruby><ruby>康<rt>こう</rt></ruby><ruby>管<rt>かん</rt></ruby><ruby>理<rt>り</rt></ruby>を<ruby>怠<rt>おこた</rt></ruby>った</span>ため、<ruby>病<rt>びょう</rt></ruby><ruby>気<rt>き</rt></ruby>になった。", "cn": "他因为忽视健康管理，给自己整生病了。" }
        ],
        "practice": {
            "sentence": "建設現場での安全確認を<span class='blank-space'></span>ことが、今回の大規模な事故につながったと見られている。",
            "cn": "施工现场疏于安全确认，被认为导致了这次大型事故。",
            "answer": "おこたった",
            "options": ["おこたった", "なまけた", "さからった", "くつがえした"]
        }
    },
    {
        "word": "霞む",
        "word_html": "<ruby>霞<rt>かす</rt></ruby>む",
        "tone": "0",
        "pos": "自五",
        "mean": "朦胧、看不清；相形见绌、被抢风头",
        "nuance": "1. 因雾气或眼力衰退导致视线模糊。\n2. 因旁人过于出色而显得黯淡无光。",
        "examples": [
            { "jp": "<ruby>霧<rt>きり</rt></ruby>で<ruby>山<rt>やま</rt></ruby>が<span class='ex-highlight'><ruby>霞<rt>かす</rt></ruby>んで</span><ruby>見<rt>み</rt></ruby>える。", "cn": "因为雾，山看起来蒙蒙眬眬。" },
            { "jp": "<ruby>主<rt>しゅ</rt></ruby><ruby>役<rt>やく</rt></ruby>が<span class='ex-highlight'><ruby>霞<rt>かす</rt></ruby>む</span>ほどの<ruby>名<rt>めい</rt></ruby><ruby>演<rt>えん</rt></ruby><ruby>技<rt>ぎ</rt></ruby>。", "cn": "演技好到让主角都黯然失色。" }
        ],
        "practice": {
            "sentence": "今年の新人選手の活躍があまりにも凄すぎて、ベテラン選手の存在感が<span class='blank-space'></span>しまった。",
            "cn": "今年新选手表现太耀眼，老将的存在感都被冲淡了。",
            "answer": "かすんで",
            "options": ["かすんで", "ぼやけて", "うすまって", "よわって"]
        }
    },
    {
        "word": "ぼやける",
        "word_html": "ぼやける",
        "tone": "3",
        "pos": "自一",
        "mean": "模糊、看不清；含糊、暧昧",
        "nuance": "1. 轮廓或焦点不清晰导致视力模糊。\n2. 意思或记忆不再明确。",
        "examples": [
            { "jp": "<ruby>涙<rt>なみだ</rt></ruby>で<ruby>視<rt>し</rt></ruby><ruby>界<rt>かい</rt></ruby>が<span class='ex-highlight'>ぼやける</span>。", "cn": "因为眼泪，视线变得模糊。" },
            { "jp": "<ruby>記<rt>き</rt></ruby><ruby>憶<rt>おく</rt></ruby>が<span class='ex-highlight'>ぼやける</span>。", "cn": "记忆变得模糊了。" }
        ],
        "practice": {
            "sentence": "久しぶりに故郷の写真を眺めていると、涙で視界が<span class='blank-space'></span>何も見えなくなった。",
            "cn": "久违地看着故乡的照片，眼泪让视线模糊，什么也看不清了。",
            "answer": "ぼやけて",
            "options": ["ぼやけて", "かすんで", "かすれて", "にじんで"]
        }
    },
    {
        "word": "サボる",
        "word_html": "サボる",
        "tone": "2",
        "pos": "他五",
        "mean": "偷懒、逃课、旷工",
        "nuance": "1. 逃避本来该做的工作或学习。",
        "examples": [
            { "jp": "<ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>を<span class='ex-highlight'>サボって</span><ruby>遊<rt>あそ</rt></ruby>びに<ruby>行<rt>い</rt></ruby>く。", "cn": "逃学去玩。" }
        ],
        "practice": {
            "sentence": "面倒な会議を<span class='blank-space'></span>映画を見に行ったら、そこで部長とばったり鉢合わせしてしまった。",
            "cn": "翘掉麻烦的会议去看电影，结果在那里碰巧遇到了部长。",
            "answer": "サボって",
            "options": ["サボって", "なまけて", "いじって", "もうけて"]
        }
    },
    {
        "word": "澄む",
        "word_html": "<ruby>澄<rt>す</rt></ruby>む",
        "tone": "1",
        "pos": "自五",
        "mean": "清澈、澄清；清亮、宁静",
        "nuance": "1. 液体透明、没有混浊。\n2. 声音、神情或心境没有杂质，显得纯净。",
        "examples": [
            { "jp": "<ruby>川<rt>かわ</rt></ruby>の<ruby>水<rt>みず</rt></ruby>が<span class='ex-highlight'><ruby>澄<rt>す</rt></ruby>んで</span>いる。", "cn": "河水清澈。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<span class='ex-highlight'><ruby>澄<rt>す</rt></ruby>んだ</span><ruby>笑<rt>え</rt></ruby><ruby>顔<rt>がお</rt></ruby>に<ruby>癒<rt>い</rt></ruby>やされる。", "cn": "被他纯净的笑容治愈了。" }
        ],
        "practice": {
            "sentence": "早朝の山頂で深呼吸をすると、冷たくて<span class='blank-space'></span>空気が体中に行き渡るのを感じた。",
            "cn": "清晨在山顶深呼吸时，感到冰冷清澈的空气充满全身。",
            "answer": "すんだ",
            "options": ["すんだ", "すけた", "よわった", "うすまった"]
        }
    },
    {
        "word": "透ける",
        "word_html": "<ruby>透<rt>す</rt></ruby>ける",
        "tone": "0",
        "pos": "自一",
        "mean": "透明、透视；看穿、显露",
        "nuance": "1. 透过物体可以看到里面或后面。\n2. 谎言或本心暴露出来。",
        "examples": [
            { "jp": "<ruby>中<rt>なか</rt></ruby><ruby>身<rt>み</rt></ruby>が<span class='ex-highlight'><ruby>透<rt>す</rt></ruby>けて</span><ruby>見<rt>み</rt></ruby>える。", "cn": "能透过包装看到里面的东西。" },
            { "jp": "<ruby>下<rt>した</rt></ruby><ruby>心<rt>ごころ</rt></ruby>が<span class='ex-highlight'><ruby>透<rt>す</rt></ruby>けて</span><ruby>見<rt>み</rt></ruby>える。", "cn": "企图显露无遗。" }
        ],
        "practice": {
            "sentence": "彼の提案は一見親切そうに見えるが、その裏にある利益独占の意図が<span class='blank-space'></span>見えている。",
            "cn": "他的提案乍看很亲切，但背后想独占利益的意图已经透了出来。",
            "answer": "すけて",
            "options": ["すけて", "すんで", "にじんで", "しみて"]
        }
    },
    {
        "word": "掠れる",
        "word_html": "<ruby>掠<rt>かす</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "嘶哑；模糊、飞白",
        "nuance": "1. 声音不响亮。\n2. 墨水不足导致字迹出现断痕。",
        "examples": [
            { "jp": "<ruby>叫<rt>さけ</rt></ruby>びすぎて<ruby>声<rt>こえ</rt></ruby>が<span class='ex-highlight'><ruby>掠<rt>かす</rt></ruby>れる</span>。", "cn": "喊得太多嗓子哑了。" },
            { "jp": "インクがなくなって<ruby>字<rt>じ</rt></ruby>が<span class='ex-highlight'><ruby>掠<rt>かす</rt></ruby>れる</span>。", "cn": "没墨水了，字迹模糊。" }
        ],
        "practice": {
            "sentence": "昨日、カラオケで長時間歌いすぎたせいで、今日は声が<span class='blank-space'></span>しまってうまく話せない。",
            "cn": "昨天在卡拉 OK 唱太久，今天声音沙哑得几乎说不好话。",
            "answer": "かすれて",
            "options": ["かすれて", "にじんで", "ぼやけて", "かすんで"]
        }
    },
    {
        "word": "滲む",
        "word_html": "<ruby>滲<rt>にじ</rt></ruby>む",
        "tone": "2",
        "pos": "自五",
        "mean": "晕开、洇；渗出、涌出；流露",
        "nuance": "1. 液体在纸或布上扩散。\n2. 液体从内部冒出来。\n3. 感情自然表现出来。",
        "examples": [
            { "jp": "<ruby>雨<rt>あめ</rt></ruby>で<ruby>宛<rt>あて</rt></ruby><ruby>名<rt>な</rt></ruby>が<span class='ex-highlight'><ruby>滲<rt>にじ</rt></ruby>む</span>。", "cn": "因为淋雨，信封上的名字晕开了。" },
            { "jp": "<ruby>包<rt>ほう</rt></ruby><ruby>帯<rt>たい</rt></ruby>に<ruby>血<rt>ち</rt></ruby>が<span class='ex-highlight'><ruby>滲<rt>にじ</rt></ruby>む</span>。", "cn": "血渗出了绷带。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>には<ruby>自<rt>じ</rt></ruby><ruby>信<rt>しん</rt></ruby>が<span class='ex-highlight'><ruby>滲<rt>にじ</rt></ruby>んで</span>いた。", "cn": "他的态度中透出一股自信。" }
        ],
        "practice": {
            "sentence": "突然の雨でカバンの中まで濡れてしまい、封筒に書いた宛名の文字が<span class='blank-space'></span>読めなくなってしまった。",
            "cn": "突如其来的雨把包里也淋湿了，写在信封上的地址字迹晕开，变得无法辨认。",
            "answer": "にじんで",
            "options": ["にじんで", "しみて", "かすれて", "すけて"]
        }
    },
    {
        "word": "染みる",
        "word_html": "<ruby>染<rt>し</rt></ruby>みる",
        "tone": "0",
        "pos": "自一",
        "mean": "渗入、渗透；刺痛；铭刻于心、感动",
        "nuance": "1. 液体渗进内部，多指味道、汗水等。\n2. 药物、寒气、烟雾等刺激身体。\n3. 深深地触动感情。",
        "examples": [
            { "jp": "<ruby>味<rt>あじ</rt></ruby>がよく<span class='ex-highlight'><ruby>染<rt>し</rt></ruby>みた</span><ruby>大<rt>だい</rt></ruby><ruby>根<rt>こん</rt></ruby>。", "cn": "非常入味的萝卜。" },
            { "jp": "<ruby>消<rt>しょう</rt></ruby><ruby>毒<rt>どく</rt></ruby><ruby>薬<rt>やく</rt></ruby>が<ruby>傷<rt>きず</rt></ruby><ruby>口<rt>ぐち</rt></ruby>に<span class='ex-highlight'><ruby>染<rt>し</rt></ruby>みる</span>。", "cn": "消毒药刺痛伤口。" },
            { "jp": "<ruby>親<rt>おや</rt></ruby>の<ruby>優<rt>やさ</rt></ruby>しさが<ruby>心<rt>こころ</rt></ruby>に<span class='ex-highlight'><ruby>染<rt>し</rt></ruby>みる</span>。", "cn": "父母的温柔铭刻在心。" }
        ],
        "practice": {
            "sentence": "辛いときに掛けてくれた友人の温かい言葉が、冷え切った心に深く<span class='blank-space'></span>。",
            "cn": "艰难时朋友给我的温暖话语，深深沁入了冰冷的心。",
            "answer": "しみた",
            "options": ["しみた", "にじんだ", "すんだ", "おこたった"]
        }
    },
    {
        "word": "ばてる",
        "word_html": "ばてる",
        "tone": "2",
        "pos": "自一",
        "mean": "精疲力竭、累趴下",
        "nuance": "1. 体力耗尽，动弹不得。",
        "examples": [
            { "jp": "<ruby>暑<rt>あつ</rt></ruby>さで<span class='ex-highlight'>ばてる</span>。", "cn": "热得累趴下了。" }
        ],
        "practice": {
            "sentence": "炎天下の中で激しい運動を続けたため、すっかり<span class='blank-space'></span>動けなくなってしまった。",
            "cn": "在烈日下持续剧烈运动，结果完全累垮，动不了了。",
            "answer": "ばてて",
            "options": ["ばてて", "サボって", "なまけて", "よわって"]
        }
    },   
];
const DAY8_WORDS = [
{
        "word": "冷やす",
        "word_html": "<ruby>冷<rt>ひ</rt></ruby>やす",
        "tone": "2",
        "pos": "他五",
        "mean": "冰镇、使变凉；使(头脑)冷静；惊出冷汗",
        "nuance": "1. 降低物体的温度。\n2. 让激动的感情平复。\n3. 特指「肝を冷やす」，吓破胆。",
        "examples": [
            { "jp": "ビールを<span class='ex-highlight'><ruby>冷<rt>ひ</rt></ruby>やす</span>。", "cn": "冰镇啤酒。" },
            { "jp": "<ruby>少<rt>すこ</rt></ruby>し<ruby>頭<rt>あたま</rt></ruby>を<span class='ex-highlight'><ruby>冷<rt>ひ</rt></ruby>やして</span>こい。", "cn": "去冷静一下头脑。" },
            { "jp": "<ruby>事<rt>じ</rt></ruby><ruby>故<rt>こ</rt></ruby>になりそうで<ruby>肝<rt>きも</rt></ruby>を<span class='ex-highlight'><ruby>冷<rt>ひ</rt></ruby>やした</span>。", "cn": "差点出事故，吓出一身冷汗。" }
        ],
        "practice": {
            "sentence": "子供が急に道路に飛び出してきたため、ブレーキをかけて肝を<span class='blank-space'></span>。",
            "cn": "孩子突然冲到马路上，我急忙刹车，吓得心惊胆战。",
            "answer": "ひやした",
            "options": ["ひやした", "やすらいだ", "くつろいだ", "いこった"]
        }
    },
    {
        "word": "安らぐ",
        "word_html": "<ruby>安<rt>やす</rt></ruby>らぐ",
        "tone": "3",
        "pos": "自五",
        "mean": "安宁、平静",
        "nuance": "1. 心情放松，没有烦恼。",
        "examples": [
            { "jp": "<ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby>を<ruby>聴<rt>き</rt></ruby>くと<ruby>心<rt>こころ</rt></ruby>が<span class='ex-highlight'><ruby>安<rt>やす</rt></ruby>らぐ</span>。", "cn": "听音乐让心灵安宁。" }
        ],
        "practice": {
            "sentence": "激しい議論のあと、美しい景色を眺めていると次第に心が<span class='blank-space'></span>きた。",
            "cn": "激烈争论之后，看着美丽的景色，心情渐渐平静了下来。",
            "answer": "やすらいで",
            "options": ["やすらいで", "ひやして", "かくして", "ひめて"]
        }
    },
    {
        "word": "隠す",
        "word_html": "<ruby>隠<rt>かく</rt></ruby>す",
        "tone": "2",
        "pos": "他五",
        "mean": "隐藏、遮盖；隐瞒",
        "nuance": "1. 把东西藏起来不让人看见。\n2. 掩盖真相、秘密。",
        "examples": [
            { "jp": "<ruby>雲<rt>くも</rt></ruby>に<span class='ex-highlight'><ruby>隠<rt>かく</rt></ruby>された</span><ruby>月<rt>つき</rt></ruby>。", "cn": "被云遮住的月亮。" },
            { "jp": "<ruby>本<rt>ほん</rt></ruby><ruby>心<rt>しん</rt></ruby>を<span class='ex-highlight'><ruby>隠<rt>かく</rt></ruby>す</span>。", "cn": "隐藏真心话。" }
        ],
        "practice": {
            "sentence": "彼は何かを<span class='blank-space'></span>いるようで、私の質問に対して曖昧な返事しかしなかった。",
            "cn": "他似乎隐瞒着什么，对我的问题只给出含糊的回答。",
            "answer": "かくして",
            "options": ["かくして", "かばって", "になって", "おびて"]
        }
    },
    {
        "word": "秘める",
        "word_html": "<ruby>秘<rt>ひ</rt></ruby>める",
        "tone": "2",
        "pos": "他一",
        "mean": "秘藏、藏在心里；蕴藏",
        "nuance": "1. 不公开，深藏于内部。\n2. 内部含有某种潜力或可能性。",
        "examples": [
            { "jp": "<ruby>想<rt>おも</rt></ruby>いを<ruby>胸<rt>むね</rt></ruby>に<span class='ex-highlight'><ruby>秘<rt>ひ</rt></ruby>める</span>。", "cn": "把思念深藏在心底。" },
            { "jp": "<ruby>無<rt>む</rt></ruby><ruby>限<rt>げん</rt></ruby>の<ruby>可<rt>か</rt></ruby><ruby>能<rt>のう</rt></ruby><ruby>性<rt>せい</rt></ruby>を<span class='ex-highlight'><ruby>秘<rt>ひ</rt></ruby>めた</span><ruby>新<rt>しん</rt></ruby><ruby>人<rt>じん</rt></ruby>。", "cn": "蕴藏着无限潜力的新人。" }
        ],
        "practice": {
            "sentence": "この新製品は、市場を大きく変える可能性を<span class='blank-space'></span>ている。",
            "cn": "这款新产品蕴藏着大幅改变市场的可能性。",
            "answer": "ひめ",
            "options": ["ひめ", "ひそめ", "かくし", "かばい"]
        }
    },
    {
        "word": "潜める",
        "word_html": "<ruby>潜<rt>ひそ</rt></ruby>める",
        "tone": "3",
        "pos": "他一",
        "mean": "隐藏(身形)；压低、屏住；隐藏(情绪/恶意)",
        "nuance": "1. 藏身以等待时机。\n2. 使声音、呼吸变小以防被发现。\n3. 隐藏负面的、危险的内心活动。",
        "examples": [
            { "jp": "<ruby>息<rt>いき</rt></ruby>を<span class='ex-highlight'><ruby>潜<rt>ひそ</rt></ruby>める</span>。", "cn": "屏住呼吸。" },
            { "jp": "<ruby>声<rt>こえ</rt></ruby>を<span class='ex-highlight'><ruby>潜<rt>ひそ</rt></ruby>めて</span><ruby>話<rt>はな</rt></ruby>す。", "cn": "压低声音说话。" },
            { "jp": "<ruby>殺<rt>さっ</rt></ruby><ruby>気<rt>き</rt></ruby>を<span class='ex-highlight'><ruby>潜<rt>ひそ</rt></ruby>める</span>。", "cn": "隐藏杀气。" }
        ],
        "practice": {
            "sentence": "犯人は警察の捜査を逃れるため、古いアパートの一室に身を<span class='blank-space'></span>いた。",
            "cn": "为了躲避警方搜查，犯人藏身在一间旧公寓里。",
            "answer": "ひそめて",
            "options": ["ひそめて", "ひめて", "かくして", "やすらいで"]
        }
    },
    {
        "word": "庇う",
        "word_html": "<ruby>庇<rt>かば</rt></ruby>う",
        "tone": "2",
        "pos": "他五",
        "mean": "袒护、包庇；护着",
        "nuance": "1. 保护某人不受指责或攻击。\n2. 因受伤而小心保护患处。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>部<rt>ぶ</rt></ruby><ruby>下<rt>か</rt></ruby>のミスを<span class='ex-highlight'><ruby>庇<rt>かば</rt></ruby>った</span>。", "cn": "他包庇下属的失误。" },
            { "jp": "<ruby>傷<rt>きず</rt></ruby>ついた<ruby>足<rt>あし</rt></ruby>を<span class='ex-highlight'><ruby>庇<rt>かば</rt></ruby>って</span><ruby>歩<rt>ある</rt></ruby>く。", "cn": "护着受伤的脚走。" }
        ],
        "practice": {
            "sentence": "部長は自分の責任を問われることを覚悟で、部下の失敗を<span class='blank-space'></span>。",
            "cn": "部长做好承担责任的觉悟，袒护了下属的失败。",
            "answer": "かばった",
            "options": ["かばった", "かくした", "ひそめた", "ひめた"]
        }
    },
    {
        "word": "寛ぐ",
        "word_html": "<ruby>寛<rt>くつろ</rt></ruby>ぐ",
        "tone": "3",
        "pos": "自五",
        "mean": "放松、舒服",
        "nuance": "1. 身心放松，不拘束。",
        "examples": [
            { "jp": "ソファで<span class='ex-highlight'><ruby>寛<rt>くつろ</rt></ruby>いで</span>テレビを<ruby>見<rt>み</rt></ruby>る。", "cn": "在沙发上舒舒服服地看电视。" }
        ],
        "practice": {
            "sentence": "休日は家でゆっくりと<span class='blank-space'></span>、日頃の疲れを癒やすことにしている。",
            "cn": "休息日我决定在家悠闲放松，消除平日的疲劳。",
            "answer": "くつろいで",
            "options": ["くつろいで", "いこって", "ねばって", "つらぬいて"]
        }
    },
    {
        "word": "憩う",
        "word_html": "<ruby>憩<rt>いこ</rt></ruby>う",
        "tone": "2",
        "pos": "自五",
        "mean": "休息、休憩",
        "nuance": "1. 在舒适的场所暂停活动，恢复精神。",
        "examples": [
            { "jp": "<ruby>水<rt>みず</rt></ruby><ruby>辺<rt>べ</rt></ruby>で<ruby>鳥<rt>とり</rt></ruby>たちが<span class='ex-highlight'><ruby>憩<rt>いこ</rt></ruby>っている</span>。", "cn": "鸟儿们在水边休憩。" }
        ],
        "practice": {
            "sentence": "公園のベンチでは、散歩を楽しむ人々が思い思いに<span class='blank-space'></span>いた。",
            "cn": "公园长椅上，享受散步的人们各自悠闲地休息着。",
            "answer": "いこって",
            "options": ["いこって", "くつろいで", "やすらいで", "ひやして"]
        }
    },
    {
        "word": "貫く",
        "word_html": "<ruby>貫<rt>つらぬ</rt></ruby>く",
        "tone": "3",
        "pos": "他五",
        "mean": "贯穿、穿透；贯彻、坚持",
        "nuance": "1. 物理上穿过。\n2. 始终保持某种信念或风格。",
        "examples": [
            { "jp": "トンネルが<ruby>山<rt>やま</rt></ruby>を<span class='ex-highlight'><ruby>貫<rt>つらぬ</rt></ruby>く</span>。", "cn": "隧道贯穿了山脉。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>まで<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>のスタイルを<span class='ex-highlight'><ruby>貫<rt>つらぬ</rt></ruby>いた</span>。", "cn": "他坚持自己的风格直到最后。" }
        ],
        "practice": {
            "sentence": "周囲からの反対があっても、彼は自分の信念を最後まで<span class='blank-space'></span>。",
            "cn": "即使遭到周围反对，他也把自己的信念贯彻到底。",
            "answer": "つらぬいた",
            "options": ["つらぬいた", "ねばった", "になった", "おびた"]
        }
    },
    {
        "word": "粘る",
        "word_html": "<ruby>粘<rt>ねば</rt></ruby>る",
        "tone": "2",
        "pos": "自五",
        "mean": "发黏；坚持不懈、死磨硬泡",
        "nuance": "1. 像纳豆一样拉丝。\n2. 顽强地支撑，不轻易放弃。",
        "examples": [
            { "jp": "この<ruby>納<rt>なっ</rt></ruby><ruby>豆<rt>とう</rt></ruby>はよく<span class='ex-highlight'><ruby>粘<rt>ねば</rt></ruby>る</span>。", "cn": "这个纳豆很黏。" },
            { "jp": "<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>で<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>まで<span class='ex-highlight'><ruby>粘<rt>ねば</rt></ruby>る</span>。", "cn": "在比赛中顽强坚持到最后。" }
        ],
        "practice": {
            "sentence": "交渉は難航したが、最後まで<span class='blank-space'></span>おかげで、有利な条件を引き出せた。",
            "cn": "谈判进展艰难，但多亏坚持到最后，争取到了有利条件。",
            "answer": "ねばった",
            "options": ["ねばった", "になった", "おびた", "いたわった"]
        }
    },
    {
        "word": "担う",
        "word_html": "<ruby>担<rt>にな</rt></ruby>う",
        "tone": "2",
        "pos": "他五",
        "mean": "挑、背；肩负、承担",
        "nuance": "1. 物理上用肩膀挑东西。\n2. 承担责任、任务、未来。",
        "examples": [
            { "jp": "<ruby>荷<rt>に</rt></ruby><ruby>物<rt>もつ</rt></ruby>を<ruby>肩<rt>かた</rt></ruby>に<span class='ex-highlight'><ruby>担<rt>にな</rt></ruby>う</span>。", "cn": "把行李扛在肩上。" },
            { "jp": "<ruby>次<rt>つぎ</rt></ruby>の<ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>を<span class='ex-highlight'><ruby>担<rt>にな</rt></ruby>う</span><ruby>若<rt>わか</rt></ruby><ruby>者<rt>もの</rt></ruby>。", "cn": "肩负下一时代的年轻人。" }
        ],
        "practice": {
            "sentence": "今後の日本経済を<span class='blank-space'></span>重要な産業として、IT分野が注目されている。",
            "cn": "IT 领域作为支撑今后日本经济的重要产业而受到关注。",
            "answer": "になう",
            "options": ["になう", "おびる", "ねばる", "つらぬく"]
        }
    },
    {
        "word": "帯びる",
        "word_html": "<ruby>帯<rt>お</rt></ruby>びる",
        "tone": "2",
        "pos": "他一",
        "mean": "佩戴；带有、呈...色；肩负、负有",
        "nuance": "1. 佩刀、勋章等。\n2. 含有某种性质、成分或颜色。\n3. 承担某种使命。",
        "examples": [
            { "jp": "<ruby>武<rt>ぶ</rt></ruby><ruby>士<rt>し</rt></ruby>は<ruby>常<rt>つね</rt></ruby>に<ruby>刀<rt>かたな</rt></ruby>を<span class='ex-highlight'><ruby>帯<rt>お</rt></ruby>びて</span>いた。", "cn": "武士总是佩带着刀。" },
            { "jp": "<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>が<ruby>現<rt>げん</rt></ruby><ruby>実<rt>じつ</rt></ruby><ruby>味<rt>み</rt></ruby>を<span class='ex-highlight'><ruby>帯<rt>お</rt></ruby>びて</span>きた。", "cn": "计划变得现实可行了。" },
            { "jp": "<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby>な<ruby>使<rt>し</rt></ruby><ruby>命<rt>めい</rt></ruby>を<span class='ex-highlight'><ruby>帯<rt>お</rt></ruby>びて</span><ruby>帰<rt>き</rt></ruby><ruby>国<rt>こく</rt></ruby>する。", "cn": "身负重要使命回国。" }
        ],
        "practice": {
            "sentence": "彼の話は具体的で、次第に現実味を<span class='blank-space'></span>きた。",
            "cn": "他的话很具体，渐渐带上了现实感。",
            "answer": "おびて",
            "options": ["おびて", "になって", "かくして", "ひめて"]
        }
    },
    {
        "word": "労る",
        "word_html": "<ruby>労<rt>いたわ</rt></ruby>る",
        "tone": "3",
        "pos": "他五",
        "mean": "体恤、照顾；慰劳",
        "nuance": "1. 同情并善待老人、病人或弱者。\n2. 体贴他人的劳苦。",
        "examples": [
            { "jp": "お<ruby>年<rt>とし</rt></ruby><ruby>寄<rt>よ</rt></ruby>りを<span class='ex-highlight'><ruby>労<rt>いたわ</rt></ruby>る</span>。", "cn": "照顾老人。" },
            { "jp": "<ruby>部<rt>ぶ</rt></ruby><ruby>下<rt>か</rt></ruby>を<span class='ex-highlight'><ruby>労<rt>いたわ</rt></ruby>る</span>。", "cn": "慰劳下属。" }
        ],
        "practice": {
            "sentence": "連日の残業で疲れている部下を<span class='blank-space'></span>、食事に連れて行った。",
            "cn": "他体恤连日加班而疲惫的下属，带他们去吃了饭。",
            "answer": "いたわって",
            "options": ["いたわって", "あんじて", "あやぶんで", "おそれて"]
        }
    },
    {
        "word": "案じる",
        "word_html": "<ruby>案<rt>あん</rt></ruby>じる",
        "tone": "3",
        "pos": "他一",
        "mean": "担心、挂念",
        "nuance": "1. 担心某人的安危或将来。",
        "examples": [
            { "jp": "<ruby>親<rt>おや</rt></ruby>は<ruby>常<rt>つね</rt></ruby>に<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>の<ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>を<span class='ex-highlight'><ruby>案<rt>あん</rt></ruby>じて</span>いる。", "cn": "父母总是挂念着孩子的未来。" }
        ],
        "practice": {
            "sentence": "夜遅くなっても帰ってこない娘の身を<span class='blank-space'></span>、父親は何度も時計を見た。",
            "cn": "女儿深夜还没回来，父亲担心她的安危，不停看表。",
            "answer": "あんじて",
            "options": ["あんじて", "あやぶんで", "おそれて", "なぐさめて"]
        }
    },
    {
        "word": "危ぶむ",
        "word_html": "<ruby>危<rt>あや</rt></ruby>ぶむ",
        "tone": "3",
        "pos": "他五",
        "mean": "担心(结果)、怀疑",
        "nuance": "1. 认为情况不妙，怀疑能否成功。",
        "examples": [
            { "jp": "<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>の<ruby>実<rt>じつ</rt></ruby><ruby>現<rt>げん</rt></ruby>が<span class='ex-highlight'><ruby>危<rt>あや</rt></ruby>ぶまれる</span>。", "cn": "计划能否实现令人担忧。" }
        ],
        "practice": {
            "sentence": "資金不足により、新プロジェクトの存続が<span class='blank-space'></span>ている。",
            "cn": "由于资金不足，新项目能否继续下去令人担忧。",
            "answer": "あやぶまれ",
            "options": ["あやぶまれ", "あんじられ", "おそれられ", "なぐさめられ"]
        }
    },
    {
        "word": "恐れる",
        "word_html": "<ruby>恐<rt>おそ</rt></ruby>れる",
        "tone": "3",
        "pos": "他一",
        "mean": "害怕、畏惧；敬畏",
        "nuance": "1. 对可怕的事物或坏结果感到恐惧。\n2. 对神、伟人感到敬畏。",
        "examples": [
            { "jp": "<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>を<span class='ex-highlight'><ruby>恐<rt>おそ</rt></ruby>れて</span>はいけない。", "cn": "不要害怕失败。" },
            { "jp": "<ruby>神<rt>かみ</rt></ruby>を<span class='ex-highlight'><ruby>恐<rt>おそ</rt></ruby>れる</span>。", "cn": "敬畏神明。" }
        ],
        "practice": {
            "sentence": "彼は失敗を<span class='blank-space'></span>あまり、新しいことに挑戦できずにいる。",
            "cn": "他太害怕失败，以至于无法挑战新事物。",
            "answer": "おそれる",
            "options": ["おそれる", "あやぶむ", "あんじる", "いたわる"]
        }
    },
    {
        "word": "慰める",
        "word_html": "<ruby>慰<rt>なぐさ</rt></ruby>める",
        "tone": "4",
        "pos": "他一",
        "mean": "安慰、抚慰；排解(无聊)",
        "nuance": "1. 使悲伤、痛苦的人心情平静。\n2. 做某事来排遣心情。",
        "examples": [
            { "jp": "<ruby>失<rt>しつ</rt></ruby><ruby>恋<rt>れん</rt></ruby>した<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>を<span class='ex-highlight'><ruby>慰<rt>なぐさ</rt></ruby>める</span>。", "cn": "安慰失恋的朋友。" },
            { "jp": "<ruby>暇<rt>ひま</rt></ruby>を<span class='ex-highlight'><ruby>慰<rt>なぐさ</rt></ruby>める</span>。", "cn": "排遣无聊。" }
        ],
        "practice": {
            "sentence": "落ち込んでいる友人を<span class='blank-space'></span>ために、美味しい食事に誘った。",
            "cn": "为了安慰低落的朋友，我邀请他去吃好吃的。",
            "answer": "なぐさめる",
            "options": ["なぐさめる", "なだめる", "いたわる", "あんじる"]
        }
    },
    {
        "word": "宥める",
        "word_html": "<ruby>宥<rt>なだ</rt></ruby>める",
        "tone": "3",
        "pos": "他一",
        "mean": "安抚、劝解",
        "nuance": "1. 平息对方的愤怒或不满、哭闹。",
        "examples": [
            { "jp": "<ruby>怒<rt>おこ</rt></ruby>っている<ruby>客<rt>きゃく</rt></ruby>を<span class='ex-highlight'><ruby>宥<rt>なだ</rt></ruby>める</span>。", "cn": "安抚生气的客人。" }
        ],
        "practice": {
            "sentence": "泣き叫ぶ子供を<span class='blank-space'></span>、母親は優しく背中をさすった。",
            "cn": "母亲安抚着哭喊的孩子，温柔地拍着他的背。",
            "answer": "なだめて",
            "options": ["なだめて", "なぐさめて", "さまよって", "ためらって"]
        }
    },
    {
        "word": "彷徨う",
        "word_html": "<ruby>彷徨<rt>さまよ</rt></ruby>う",
        "tone": "3",
        "pos": "自五",
        "mean": "徘徊、游荡；挣扎、游离",
        "nuance": "1. 无目的地到处走动，或迷路。\n2. 在某种危险边缘徘徊。",
        "examples": [
            { "jp": "<ruby>森<rt>もり</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を<span class='ex-highlight'><ruby>彷<rt>さま</rt></ruby><ruby>徨<rt>よ</rt></ruby>う</span>。", "cn": "在森林里徘徊。" },
            { "jp": "<ruby>生<rt>せい</rt></ruby><ruby>死<rt>し</rt></ruby>の<ruby>境<rt>さかい</rt></ruby>を<span class='ex-highlight'><ruby>彷<rt>さま</rt></ruby><ruby>徨<rt>よ</rt></ruby>う</span>。", "cn": "在生死边缘徘徊。" }
        ],
        "practice": {
            "sentence": "道に迷ってしまい、暗い森の中を朝まで<span class='blank-space'></span>。",
            "cn": "迷了路，在昏暗森林里一直徘徊到早晨。",
            "answer": "さまよった",
            "options": ["さまよった", "ためらった", "なだめた", "いこった"]
        }
    },
    {
        "word": "躊躇う",
        "word_html": "<ruby>躊躇<rt>ためら</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "犹豫、踌躇",
        "nuance": "1. 因无法下决心而停止行动，或迟迟不行动。",
        "examples": [
            { "jp": "<ruby>告<rt>こく</rt></ruby><ruby>白<rt>はく</rt></ruby>するのを<span class='ex-highlight'><ruby>躊躇<rt>ためら</rt></ruby>う</span>。", "cn": "想告白但迟疑了。" }
        ],
        "practice": {
            "sentence": "高額な買い物だったので、購入ボタンを押すのを一瞬<span class='blank-space'></span>。",
            "cn": "因为是高额购物，他在按下购买按钮前犹豫了一瞬。",
            "answer": "ためらった",
            "options": ["ためらった", "さまよった", "あやぶんだ", "おそれた"]
        }
    }  
];
const DAY9_WORDS = [
    {
        "word": "戸惑う",
        "word_html": "<ruby>戸<rt>と</rt></ruby><ruby>惑<rt>まど</rt></ruby>う",
        "tone": "3",
        "pos": "自五",
        "mean": "困惑、不知所措",
        "nuance": "1. 因情况突变或不习惯而感到迷茫，不知道该怎么办。",
        "examples": [
            { "jp": "<ruby>突<rt>とつ</rt></ruby><ruby>然<rt>ぜん</rt></ruby>の<ruby>質<rt>しつ</rt></ruby><ruby>問<rt>もん</rt></ruby>に<span class='ex-highlight'><ruby>戸<rt>と</rt></ruby><ruby>惑<rt>まど</rt></ruby>う</span>。", "cn": "面对突然的提问感到困惑。" }
        ],
        "practice": {
            "sentence": "海外赴任の初日は、言葉も習慣も違う環境に<span class='blank-space'></span>。",
            "cn": "海外赴任的第一天，面对语言和习惯都不同的环境，他不知所措。",
            "answer": "とまどった",
            "options": ["とまどった", "てこずった", "まごついた", "うろたえた"]
        }
    },
    {
        "word": "手こずる",
        "word_html": "<ruby>手<rt>て</rt></ruby>こずる",
        "tone": "3",
        "pos": "自五",
        "mean": "棘手、难对付",
        "nuance": "1. 因为对象很难处理而让人感到费劲、折腾。",
        "examples": [
            { "jp": "<ruby>反<rt>はん</rt></ruby><ruby>抗<rt>こう</rt></ruby><ruby>期<rt>き</rt></ruby>の<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>に<span class='ex-highlight'><ruby>手<rt>て</rt></ruby>こずる</span>。", "cn": "对处于叛逆期的儿子感到棘手。" }
        ],
        "practice": {
            "sentence": "このネジは錆びついていて、外すのにずいぶん<span class='blank-space'></span>。",
            "cn": "这颗螺丝生锈了，拆下来费了很大劲。",
            "answer": "てこずった",
            "options": ["てこずった", "わずらった", "いつわった", "せかした"]
        }
    },
    {
        "word": "まごつく",
        "word_html": "まごつく",
        "tone": "3",
        "pos": "自五",
        "mean": "手忙脚乱、不知所措",
        "nuance": "1. 因不熟悉方法或路况而行动迟缓、犹豫。",
        "examples": [
            { "jp": "<ruby>道<rt>みち</rt></ruby>がわからず<span class='ex-highlight'>まごつく</span>。", "cn": "因为不认识路而转悠。" }
        ],
        "practice": {
            "sentence": "慣れない着物の着付けに<span class='blank-space'></span>、約束の時間に遅れてしまいそうだ。",
            "cn": "不习惯穿和服，穿衣服时手忙脚乱，差点赶不上约定时间。",
            "answer": "まごついて",
            "options": ["まごついて", "おがんで", "したって", "うながして"]
        }
    },
    {
        "word": "狼狽える",
        "word_html": "<ruby>狼狽<rt>うろた</rt></ruby>える",
        "tone": "4",
        "pos": "自一",
        "mean": "惊慌失措、狼狈",
        "nuance": "1. 因突发状况而彻底失去冷静，慌成一团。",
        "examples": [
            { "jp": "<ruby>嘘<rt>うそ</rt></ruby>がバレて<span class='ex-highlight'><ruby>狼狽<rt>うろた</rt></ruby>える</span>。", "cn": "谎言败露而惊慌失措。" }
        ],
        "practice": {
            "sentence": "想定外のトラブルが発生したが、リーダーは<span class='blank-space'></span>ことなく冷静に対処した。",
            "cn": "发生了意料之外的麻烦，但领导没有慌张，冷静处理了。",
            "answer": "うろたえる",
            "options": ["うろたえる", "とまどう", "まごつく", "わずらう"]
        }
    },
    {
        "word": "患う",
        "word_html": "<ruby>患<rt>わずら</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "患病",
        "nuance": "1. 患有较为严重的疾病。",
        "examples": [
            { "jp": "<ruby>肺<rt>はい</rt></ruby><ruby>炎<rt>えん</rt></ruby>を<span class='ex-highlight'><ruby>患<rt>わずら</rt></ruby>った</span><ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>がある。", "cn": "曾经得过肺炎。" }
        ],
        "practice": {
            "sentence": "若い頃に大病を<span class='blank-space'></span>せいで、健康には人一倍気を使っている。",
            "cn": "因为年轻时患过大病，他比一般人更注意健康。",
            "answer": "わずらった",
            "options": ["わずらった", "したった", "おがんだ", "うながした"]
        }
    },
    {
        "word": "煩う",
        "word_html": "<ruby>煩<rt>わずら</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "苦恼、烦恼",
        "nuance": "1. 内心长期被某种事物困扰或痛苦。",
        "examples": [
            { "jp": "<ruby>恋<rt>こい</rt></ruby><span class='ex-highlight'><ruby>煩<rt>わずら</rt></ruby>い</span>。", "cn": "相思病。" }
        ],
        "practice": {
            "sentence": "些細なことでくよくよと思いを<span class='blank-space'></span>のは、精神衛生上よくない。",
            "cn": "为一些小事反复烦恼，对心理健康不好。",
            "answer": "わずらう",
            "options": ["わずらう", "てこずる", "せかす", "うながす"]
        }
    },
    {
        "word": "促す",
        "word_html": "<ruby>促<rt>うなが</rt></ruby>す",
        "tone": "3",
        "pos": "他五",
        "mean": "催促、敦促；促进、推动",
        "nuance": "1. 劝说对方行动。\n2. 推动事物发展。",
        "examples": [
            { "jp": "<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>を<span class='ex-highlight'><ruby>促<rt>うなが</rt></ruby>す</span>。", "cn": "提醒注意。" },
            { "jp": "<ruby>植<rt>しょく</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>の<ruby>成<rt>せい</rt></ruby><ruby>長<rt>ちょう</rt></ruby>を<span class='ex-highlight'><ruby>促<rt>うなが</rt></ruby>す</span>。", "cn": "促进植物生长。" }
        ],
        "practice": {
            "sentence": "司会者は、議論が停滞しないように参加者に発言を<span class='blank-space'></span>。",
            "cn": "主持人促使参会者发言，以免讨论停滞。",
            "answer": "うながした",
            "options": ["うながした", "せかした", "おがんだ", "したった"]
        }
    },
    {
        "word": "急かす",
        "word_html": "<ruby>急<rt>せ</rt></ruby>かす",
        "tone": "2",
        "pos": "他五",
        "mean": "催、催促",
        "nuance": "1. 让人快点做。",
        "examples": [
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>を<span class='ex-highlight'><ruby>急<rt>せ</rt></ruby>かして</span><ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>かせる。", "cn": "催促孩子去学校。" }
        ],
        "practice": {
            "sentence": "出発時間が迫っているのに、母は「早くしなさい」と私を<span class='blank-space'></span>。",
            "cn": "出发时间快到了，妈妈催我说“快一点”。",
            "answer": "せかした",
            "options": ["せかした", "うながした", "まごついた", "うろたえた"]
        }
    },
    {
        "word": "拝む",
        "word_html": "<ruby>拝<rt>おが</rt></ruby>む",
        "tone": "2",
        "pos": "他五",
        "mean": "合掌礼拜、祈祷；恳求、央求",
        "nuance": "1. 双手合十祈求神佛。\n2. 低声下气地恳求，央求他人。",
        "examples": [
            { "jp": "<ruby>神<rt>じん</rt></ruby><ruby>社<rt>じゃ</rt></ruby>で<ruby>初<rt>はつ</rt></ruby><ruby>詣<rt>もうで</rt></ruby>をして<ruby>神<rt>かみ</rt></ruby><ruby>様<rt>さま</rt></ruby>を<span class='ex-highlight'><ruby>拝<rt>おが</rt></ruby>む</span>。", "cn": "在神社新年参拜，向神明祈祷。" },
            { "jp": "<ruby>借<rt>しゃっ</rt></ruby><ruby>金<rt>きん</rt></ruby>を<ruby>返<rt>かえ</rt></ruby>すために<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>に<span class='ex-highlight'><ruby>拝<rt>おが</rt></ruby>んで</span><ruby>金<rt>かね</rt></ruby>を<ruby>借<rt>か</rt></ruby>りた。", "cn": "为了还债，低声下气地向朋友借钱。" }
        ],
        "practice": {
            "sentence": "初日の出に向かって手を合わせ、今年一年の家族の健康を<span class='blank-space'></span>。",
            "cn": "面向初升的太阳合掌，祈愿家人这一年健康。",
            "answer": "おがんだ",
            "options": ["おがんだ", "したった", "てこずった", "うながした"]
        }
    },
    {
        "word": "慕う",
        "word_html": "<ruby>慕<rt>した</rt></ruby>う",
        "tone": "2",
        "pos": "他五",
        "mean": "爱戴、依恋；思念、怀念",
        "nuance": "1. 对长辈、恩师抱有亲近与尊敬之情，想追随对方。\n2. 对故乡、往事或已逝故人的深切想念。",
        "examples": [
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>たちは<ruby>優<rt>やさ</rt></ruby>しい<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>を<span class='ex-highlight'><ruby>慕<rt>した</rt></ruby>っている</span>。", "cn": "孩子们都很敬爱那位温柔的老师。" },
            { "jp": "<ruby>亡<rt>な</rt></ruby>き<ruby>友<rt>とも</rt></ruby>を<span class='ex-highlight'><ruby>慕<rt>した</rt></ruby>う</span><ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちは<ruby>消<rt>き</rt></ruby>えない。", "cn": "思念已逝朋友的心情挥之不去。" }
        ],
        "practice": {
            "sentence": "学生時代から彼の高潔な人柄を<span class='blank-space'></span>、多くの後輩が集まってきた。",
            "cn": "从学生时代起，许多后辈就仰慕他高洁的人品而聚集到他身边。",
            "answer": "したって",
            "options": ["したって", "おがんで", "うながして", "てこずって"]
        }
    },
    {
        "word": "仰ぐ",
        "word_html": "<ruby>仰<rt>あお</rt></ruby>ぐ",
        "tone": "2",
        "pos": "他五",
        "mean": "仰望；尊奉、敬仰；请求(指示)",
        "nuance": "1. 抬头看高处。\n2. 将某人视为尊长。\n3. 向上级寻求帮助或命令。",
        "examples": [
            { "jp": "<ruby>夜<rt>よ</rt></ruby><ruby>空<rt>ぞら</rt></ruby>を<span class='ex-highlight'><ruby>仰<rt>あお</rt></ruby>いで</span><ruby>星<rt>ほし</rt></ruby>を<ruby>眺<rt>なが</rt></ruby>める。", "cn": "仰望夜空中的星星。" },
            { "jp": "<ruby>偉<rt>い</rt></ruby><ruby>大<rt>だい</rt></ruby>な<ruby>先<rt>せん</rt></ruby><ruby>輩<rt>ぱい</rt></ruby>を<span class='ex-highlight'><ruby>仰<rt>あお</rt></ruby>いで</span><ruby>努<rt>ど</rt></ruby><ruby>力<rt>りょく</rt></ruby>する。", "cn": "敬仰伟大的前辈而努力。" },
            { "jp": "<ruby>上<rt>じょう</rt></ruby><ruby>司<rt>し</rt></ruby>の<ruby>指<rt>し</rt></ruby><ruby>示<rt>じ</rt></ruby>を<span class='ex-highlight'><ruby>仰<rt>あお</rt></ruby>ぐ</span>。", "cn": "请示上级。" }
        ],
        "practice": {
            "sentence": "プロジェクトの進行に重大な問題が発生したため、本社に判断を<span class='blank-space'></span>ことにした。",
            "cn": "项目推进中发生了重大问题，因此决定请示总公司。",
            "answer": "あおぐ",
            "options": ["あおぐ", "うやまう", "したう", "おがむ"]
        }
    },
    {
        "word": "敬う",
        "word_html": "<ruby>敬<rt>うやま</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "尊敬、恭敬",
        "nuance": "1. 对长辈、神佛或高尚的人表示敬意。",
        "examples": [
            { "jp": "<ruby>神<rt>かみ</rt></ruby>を<span class='ex-highlight'><ruby>敬<rt>うやま</rt></ruby>い</span>、<ruby>自<rt>し</rt></ruby><ruby>然<rt>ぜん</rt></ruby>を<ruby>畏<rt>おそ</rt></ruby>れる。", "cn": "敬神畏自然。" }
        ],
        "practice": {
            "sentence": "長年にわたり地域医療に貢献してきた医師を、町の人々は<span class='blank-space'></span>。",
            "cn": "镇上的人们尊敬那位多年为地方医疗作出贡献的医生。",
            "answer": "うやまった",
            "options": ["うやまった", "あおいだ", "とおざけた", "かこんだ"]
        }
    },
    {
        "word": "遠ざける",
        "word_html": "<ruby>遠<rt>とお</rt></ruby>ざける",
        "tone": "4",
        "pos": "他一",
        "mean": "疏远、避开；戒除",
        "nuance": "1. 故意拉开距离，不让接近。\n2. 由于某种原因而不接触烟酒等。",
        "examples": [
            { "jp": "<ruby>悪<rt>あく</rt></ruby><ruby>友<rt>ゆう</rt></ruby>を<span class='ex-highlight'><ruby>遠<rt>とお</rt></ruby>ざける</span>。", "cn": "疏远坏朋友。" },
            { "jp": "<ruby>甘<rt>あま</rt></ruby>いものを<span class='ex-highlight'><ruby>遠<rt>とお</rt></ruby>ざけて</span>いる。", "cn": "我在戒甜食。" }
        ],
        "practice": {
            "sentence": "彼はスキャンダルを恐れて、以前の遊び仲間を意識的に<span class='blank-space'></span>ようになった。",
            "cn": "他害怕丑闻，开始有意识地疏远以前一起玩的朋友。",
            "answer": "とおざける",
            "options": ["とおざける", "ちぢめる", "せかす", "うながす"]
        }
    },
    {
        "word": "縮まる",
        "word_html": "<ruby>縮<rt>ちぢ</rt></ruby>まる",
        "tone": "0",
        "pos": "自五",
        "mean": "缩短、缩小",
        "nuance": "1. 距离、时间、寿命等变短。",
        "examples": [
            { "jp": "<ruby>寿<rt>じゅ</rt></ruby><ruby>命<rt>みょう</rt></ruby>が<span class='ex-highlight'><ruby>縮<rt>ちぢ</rt></ruby>まる</span><ruby>思<rt>おも</rt></ruby>いだ。", "cn": "吓得我折寿。" }
        ],
        "practice": {
            "sentence": "ライバルとの実力差は、この一年の猛特訓で確実に<span class='blank-space'></span>。",
            "cn": "通过这一年的高强度训练，和对手的实力差确实缩小了。",
            "answer": "ちぢまった",
            "options": ["ちぢまった", "とおざかった", "たけた", "うえた"]
        }
    },
    {
        "word": "長ける",
        "word_html": "<ruby>長<rt>た</rt></ruby>ける",
        "tone": "2",
        "pos": "自一",
        "mean": "擅长、精通",
        "nuance": "1. 在某方面能力出众。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>交<rt>こう</rt></ruby><ruby>渉<rt>しょう</rt></ruby>に<span class='ex-highlight'><ruby>長<rt>た</rt></ruby>けて</span>いる。", "cn": "他擅长谈判。" }
        ],
        "practice": {
            "sentence": "彼女は語学だけでなく、人身掌握術にも<span class='blank-space'></span>優秀なリーダーだ。",
            "cn": "她不仅擅长语言，还精通掌握人心，是位优秀的领导者。",
            "answer": "たけて",
            "options": ["たけて", "うえて", "つたって", "たどって"]
        }
    },
    {
        "word": "飢える",
        "word_html": "<ruby>飢<rt>う</rt></ruby>える",
        "tone": "2",
        "pos": "自一",
        "mean": "饥饿；渴望、渴求",
        "nuance": "1. 长期没饭吃，处于饥饿状态。\n2. 强烈希望得到某种缺乏的东西，如爱、血、知识。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>飢<rt>う</rt></ruby>えている</span>ライオンが<ruby>人<rt>ひと</rt></ruby>を<ruby>襲<rt>おそ</rt></ruby>った。", "cn": "饥饿的狮子袭击了人类。" },
            { "jp": "<ruby>愛<rt>あい</rt></ruby>に<span class='ex-highlight'><ruby>飢<rt>う</rt></ruby>えて</span>いる<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>。", "cn": "缺爱的孩子。" }
        ],
        "practice": {
            "sentence": "戦後の混乱期には、多くの人々が日々の食料に<span class='blank-space'></span>いた。",
            "cn": "战后混乱时期，许多人每天都为食物所困。",
            "answer": "うえて",
            "options": ["うえて", "たけて", "あおいだ", "うやまった"]
        }
    },
    {
        "word": "歩む",
        "word_html": "<ruby>歩<rt>あゆ</rt></ruby>む",
        "tone": "2",
        "pos": "自五",
        "mean": "行走、通过；经历、度过",
        "nuance": "1. 文学性的说法，多指抽象的道路。\n2. 度过人生或历史的过程。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かに<ruby>道<rt>みち</rt></ruby>を<span class='ex-highlight'><ruby>歩<rt>あゆ</rt></ruby>んで</span>いた。", "cn": "他静静地走在路上。" },
            { "jp": "<ruby>共<rt>とも</rt></ruby>に<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>を<span class='ex-highlight'><ruby>歩<rt>あゆ</rt></ruby>む</span>。", "cn": "共同走过人生。" }
        ],
        "practice": {
            "sentence": "彼女は女優として、誰にも真似できない独自の道を<span class='blank-space'></span>きた。",
            "cn": "她作为演员，走出了一条无人能够模仿的独特道路。",
            "answer": "あゆんで",
            "options": ["あゆんで", "つたって", "たどって", "かこんで"]
        }
    },
    {
        "word": "伝う",
        "word_html": "<ruby>伝<rt>つた</rt></ruby>う",
        "tone": "0",
        "pos": "自五",
        "mean": "沿着、顺着",
        "nuance": "1. 顺着细长的物体移动。",
        "examples": [
            { "jp": "<ruby>涙<rt>なみだ</rt></ruby>が<ruby>頬<rt>ほお</rt></ruby>を<span class='ex-highlight'><ruby>伝<rt>つた</rt></ruby>う</span>。", "cn": "眼泪顺着脸颊流下。" }
        ],
        "practice": {
            "sentence": "雨のしずくが窓ガラスを<span class='blank-space'></span>落ちるのを、ぼんやりと眺めていた。",
            "cn": "我呆呆地看着雨滴顺着窗玻璃滑落。",
            "answer": "つたって",
            "options": ["つたって", "たどって", "あゆんで", "かこんで"]
        }
    },
    {
        "word": "辿る",
        "word_html": "<ruby>辿<rt>たど</rt></ruby>る",
        "tone": "2",
        "pos": "他五",
        "mean": "沿路前进；追寻、探索；走向(结局)",
        "nuance": "1. 边确认路边前进。\n2. 追溯记忆或线索。\n3. 事物向某种状态发展，多指坏结局。",
        "examples": [
            { "jp": "<ruby>地<rt>ち</rt></ruby><ruby>図<rt>ず</rt></ruby>を<span class='ex-highlight'><ruby>辿<rt>たど</rt></ruby>って</span><ruby>目<rt>もく</rt></ruby><ruby>的<rt>てき</rt></ruby><ruby>地<rt>ち</rt></ruby>へ<ruby>行<rt>い</rt></ruby>く。", "cn": "顺着地图去目的地。" },
            { "jp": "<ruby>記<rt>き</rt></ruby><ruby>憶<rt>おく</rt></ruby>を<span class='ex-highlight'><ruby>辿<rt>たど</rt></ruby>る</span>。", "cn": "回想记忆。" },
            { "jp": "<ruby>破<rt>は</rt></ruby><ruby>滅<rt>めつ</rt></ruby>の<ruby>道<rt>みち</rt></ruby>を<span class='ex-highlight'><ruby>辿<rt>たど</rt></ruby>る</span>。", "cn": "走向毁灭的道路。" }
        ],
        "practice": {
            "sentence": "わずかな記憶を<span class='blank-space'></span>、子供の頃に住んでいた家を探し当てた。",
            "cn": "凭着模糊的记忆，我找到了小时候住过的房子。",
            "answer": "たどって",
            "options": ["たどって", "つたって", "あゆんで", "とおざけて"]
        }
    },
    {
        "word": "囲む",
        "word_html": "<ruby>囲<rt>かこ</rt></ruby>む",
        "tone": "0",
        "pos": "他五",
        "mean": "包围、环绕",
        "nuance": "1. 在周围围起来。",
        "examples": [
            { "jp": "テーブルを<span class='ex-highlight'><ruby>囲<rt>かこ</rt></ruby>んで</span>みんなで<ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby>する。", "cn": "大家围着桌子一起吃饭。" }
        ],
        "practice": {
            "sentence": "週末は鍋を<span class='blank-space'></span>、家族みんなで団らんのひとときを過ごした。",
            "cn": "周末一家人围着火锅，度过了团圆时光。",
            "answer": "かこんで",
            "options": ["かこんで", "あおいだ", "うやまった", "したった"]
        }
    }
];
const DAY10_WORDS = [
{
        "word": "なぞる",
        "word_html": "なぞる",
        "tone": "2",
        "pos": "他五",
        "mean": "描、临摹；模仿、追寻",
        "nuance": "1. 沿着原有的线条画。\n2. 按照前人的做法或历史轨迹行动。",
        "examples": [
            { "jp": "<ruby>文<rt>も</rt></ruby><ruby>字<rt>じ</rt></ruby>を<span class='ex-highlight'>なぞって</span><ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>する。", "cn": "照着字迹临摹练习。" },
            { "jp": "<ruby>事<rt>じ</rt></ruby><ruby>件<rt>けん</rt></ruby>の<ruby>経<rt>けい</rt></ruby><ruby>過<rt>か</rt></ruby>を<span class='ex-highlight'>なぞった</span>だけの<ruby>小<rt>しょう</rt></ruby><ruby>説<rt>せつ</rt></ruby>。", "cn": "还原事件经过的小说。" }
        ],
        "practice": {
            "sentence": "書き始める前に、手本の文字を何度も<span class='blank-space'></span>練習した。",
            "cn": "开始写之前，我把字帖上的字描了很多遍练习。",
            "answer": "なぞって",
            "options": ["なぞって", "すえて", "はがして", "とどめて"]
        }
    },
    {
        "word": "据える",
        "word_html": "<ruby>据<rt>す</rt></ruby>える",
        "tone": "0",
        "pos": "他一",
        "mean": "安放、设置；推举；使沉着、下定(决心)",
        "usage": "把物品、装置或人安置到某个位置，也可用于腹を据える等惯用表达。",
        "collocation": { "jp": "防犯カメラを据える", "cn": "安装监控摄像头" },
        "nuance": "1. 把沉重或固定的东西放在某处。\n2. 让某人坐在某个职位上。\n3. 用于惯用语，如腹、腰。",
        "examples": [
            { "jp": "<ruby>花<rt>か</rt></ruby><ruby>瓶<rt>びん</rt></ruby>をテーブルに<span class='ex-highlight'><ruby>据<rt>す</rt></ruby>える</span>。", "cn": "把花瓶摆放在桌上。" },
            { "jp": "<ruby>議<rt>ぎ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>の<ruby>座<rt>ざ</rt></ruby>に<span class='ex-highlight'><ruby>据<rt>す</rt></ruby>える</span>。", "cn": "推举到议长的位子上。" },
            { "jp": "<ruby>腹<rt>はら</rt></ruby>を<span class='ex-highlight'><ruby>据<rt>す</rt></ruby>えて</span>かかる。", "cn": "做好心理准备去面对。" }
        ],
        "practice": {
            "sentence": "不審者を監視するために、入り口に防犯カメラを<span class='blank-space'></span>。",
            "cn": "为了监控可疑人员，在入口处安装了防盗摄像头。",
            "answer": "すえた",
            "options": ["すえた", "なぞった", "はがした", "のぞんだ"]
        }
    },
    {
        "word": "剥がす",
        "word_html": "<ruby>剥<rt>は</rt></ruby>がす",
        "tone": "2",
        "pos": "他五",
        "mean": "剥下、撕下",
        "nuance": "1. 把贴在表面的东西揭下来。",
        "examples": [
            { "jp": "<ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>のシールを<span class='ex-highlight'><ruby>剥<rt>は</rt></ruby>がす</span>。", "cn": "撕下商品上的贴纸。" }
        ],
        "practice": {
            "sentence": "商品に貼られているシールを、糊が残らないように丁寧に<span class='blank-space'></span>ください。",
            "cn": "请把贴在商品上的贴纸小心撕下，不要留下胶痕。",
            "answer": "はがして",
            "options": ["はがして", "とどめて", "すえて", "なぞって"]
        }
    },
    {
        "word": "留める",
        "word_html": "<ruby>留<rt>とど</rt></ruby>める",
        "tone": "3",
        "pos": "他一",
        "mean": "保留、挽留；放在(心上)",
        "usage": "使事物停留在某个范围、状态或记忆中。",
        "collocation": { "jp": "被害を最小限に留める", "cn": "把损害控制在最低限度" },
        "nuance": "1. 使停留在原处或某种状态。\n2. 使某事物继续存在，保持不消失。",
        "examples": [
            { "jp": "<ruby>被<rt>ひ</rt></ruby><ruby>害<rt>がい</rt></ruby>を<ruby>最<rt>さい</rt></ruby><ruby>小<rt>しょう</rt></ruby><ruby>限<rt>げん</rt></ruby>に<span class='ex-highlight'><ruby>留<rt>とど</rt></ruby>める</span>。", "cn": "把受害程度控制在最小限度。" },
            { "jp": "<ruby>心<rt>こころ</rt></ruby>に<span class='ex-highlight'><ruby>留<rt>とど</rt></ruby>めて</span>おく。", "cn": "记在心里。" }
        ],
        "practice": {
            "sentence": "迅速な対応のおかげで、火災の被害を最小限に<span class='blank-space'></span>ことができた。",
            "cn": "多亏迅速应对，才把火灾损失控制在最低限度。",
            "answer": "とどめる",
            "options": ["とどめる", "はがす", "のぞむ", "すえる"]
        }
    },
    {
        "word": "臨む",
        "word_html": "<ruby>臨<rt>のぞ</rt></ruby>む",
        "tone": "0",
        "pos": "自五",
        "mean": "面临、面对；面朝、靠近；莅临、出席",
        "usage": "面对比赛、仪式、局面等正式或重要场面。",
        "collocation": { "jp": "試合に臨む", "cn": "参加比赛、面对比赛" },
        "nuance": "1. 面对重大场面、局势、比赛。\n2. 地理位置上面向风景或水域。\n3. 参加正式仪式。",
        "examples": [
            { "jp": "<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>に<span class='ex-highlight'><ruby>臨<rt>のぞ</rt></ruby>む</span>。", "cn": "参加比赛。" },
            { "jp": "<ruby>海<rt>うみ</rt></ruby>に<span class='ex-highlight'><ruby>臨<rt>のぞ</rt></ruby>む</span><ruby>家<rt>いえ</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる。", "cn": "住在面朝大海的房子里。" },
            { "jp": "<ruby>式<rt>しき</rt></ruby><ruby>典<rt>てん</rt></ruby>に<span class='ex-highlight'><ruby>臨<rt>のぞ</rt></ruby>む</span>ために<ruby>正<rt>せい</rt></ruby><ruby>装<rt>そう</rt></ruby>する。", "cn": "为了参加典礼而穿上礼服。" }
        ],
        "practice": {
            "sentence": "選手たちは厳しいトレーニングを積み、オリンピックの決勝戦に<span class='blank-space'></span>。",
            "cn": "选手们经过严格训练，参加了奥运会决赛。",
            "answer": "のぞんだ",
            "options": ["のぞんだ", "すえた", "とどめた", "なぞった"]
        }
    },
    {
        "word": "挑む",
        "word_html": "<ruby>挑<rt>いど</rt></ruby>む",
        "tone": "2",
        "pos": "自五",
        "mean": "挑战",
        "usage": "向困难目标、强敌或新课题发起挑战。",
        "collocation": { "jp": "世界記録に挑む", "cn": "挑战世界纪录" },
        "nuance": "1. 向强者或难题发起冲击。",
        "examples": [
            { "jp": "<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby><ruby>記<rt>き</rt></ruby><ruby>録<rt>ろく</rt></ruby>に<span class='ex-highlight'><ruby>挑<rt>いど</rt></ruby>む</span>。", "cn": "挑战世界纪录。" }
        ],
        "practice": {
            "sentence": "彼は幾度もの失敗を乗り越え、前人未到の大記録に果敢に<span class='blank-space'></span>。",
            "cn": "他克服多次失败，果敢挑战前所未有的大纪录。",
            "answer": "いどんだ",
            "options": ["いどんだ", "いとなんだ", "あつかった", "あやまった"]
        }
    },
    {
        "word": "扱う",
        "word_html": "<ruby>扱<rt>あつか</rt></ruby>う",
        "tone": "0",
        "pos": "他五",
        "mean": "操作、使用；对待、处理；经营、出售",
        "nuance": "1. 操作机器、工具。\n2. 接待人、处理问题、把...当作...。\n3. 店铺贩卖某类商品。",
        "examples": [
            { "jp": "<ruby>精<rt>せい</rt></ruby><ruby>密<rt>みつ</rt></ruby><ruby>機<rt>き</rt></ruby><ruby>器<rt>き</rt></ruby>を<ruby>慎<rt>しん</rt></ruby><ruby>重<rt>ちょう</rt></ruby>に<span class='ex-highlight'><ruby>扱<rt>あつか</rt></ruby>っている</span>。", "cn": "十分小心地操作着精密仪器。" },
            { "jp": "<ruby>客<rt>きゃく</rt></ruby>を<ruby>王<rt>おう</rt></ruby><ruby>様<rt>さま</rt></ruby>のように<span class='ex-highlight'><ruby>扱<rt>あつか</rt></ruby>う</span>。", "cn": "把客人当作国王一样对待。" },
            { "jp": "この<ruby>店<rt>みせ</rt></ruby>では<ruby>洋<rt>よう</rt></ruby><ruby>書<rt>しょ</rt></ruby>を<span class='ex-highlight'><ruby>扱<rt>あつか</rt></ruby>っている</span>。", "cn": "这家店出售外文书。" }
        ],
        "practice": {
            "sentence": "この店では、国内では手に入りにくい海外の珍しい雑貨を幅広く<span class='blank-space'></span>いる。",
            "cn": "这家店广泛经营国内难以买到的海外稀奇杂货。",
            "answer": "あつかって",
            "options": ["あつかって", "あやして", "いどんで", "のぞんで"]
        }
    },
    {
        "word": "あやす",
        "word_html": "あやす",
        "tone": "2",
        "pos": "他五",
        "mean": "哄、逗(孩子)",
        "nuance": "1. 通过摇晃、做鬼脸等方式让哭泣的婴儿停止哭泣或高兴。",
        "examples": [
            { "jp": "<ruby>泣<rt>な</rt></ruby>いている<ruby>赤<rt>あか</rt></ruby>ちゃんを<span class='ex-highlight'>あやす</span>。", "cn": "哄哭泣的婴儿。" }
        ],
        "practice": {
            "sentence": "人見知りで泣き止まない赤ちゃんを、ベテランの保育士が巧みに<span class='blank-space'></span>くれた。",
            "cn": "经验丰富的保育员熟练地哄好了怕生又哭个不停的宝宝。",
            "answer": "あやして",
            "options": ["あやして", "あつかって", "いとなんで", "はがして"]
        }
    },
    {
        "word": "営む",
        "word_html": "<ruby>営<rt>いとな</rt></ruby>む",
        "tone": "3",
        "pos": "他五",
        "mean": "经营；营(生)、过(生活)；举办、操办",
        "usage": "从事商业活动，也可表示经营生活或举行仪式。",
        "collocation": { "jp": "ラーメン屋を営む", "cn": "经营拉面店" },
        "nuance": "1. 从事商业活动。\n2. 有规律、有秩序地过日子。\n3. 实施、举行某种活动。",
        "examples": [
            { "jp": "<ruby>夫<rt>ふう</rt></ruby><ruby>婦<rt>ふ</rt></ruby>でラーメン<ruby>屋<rt>や</rt></ruby>を<span class='ex-highlight'><ruby>営<rt>いとな</rt></ruby>む</span>。", "cn": "夫妻俩经营着一家拉面店。" },
            { "jp": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>は<ruby>結<rt>けっ</rt></ruby><ruby>婚<rt>こん</rt></ruby>して<ruby>平<rt>へい</rt></ruby><ruby>穏<rt>おん</rt></ruby>な<ruby>家<rt>か</rt></ruby><ruby>庭<rt>てい</rt></ruby>を<span class='ex-highlight'><ruby>営<rt>いとな</rt></ruby>んで</span>いる。", "cn": "两人结婚后过着平静的家庭生活。" },
            { "jp": "<ruby>祖<rt>そ</rt></ruby><ruby>父<rt>ふ</rt></ruby>の<ruby>法<rt>ほう</rt></ruby><ruby>事<rt>じ</rt></ruby>を<span class='ex-highlight'><ruby>営<rt>いとな</rt></ruby>む</span>。", "cn": "操办祖父的法事。" }
        ],
        "practice": {
            "sentence": "彼らは都会の喧騒を離れ、自然豊かな山奥で自給自足の生活を<span class='blank-space'></span>いる。",
            "cn": "他们远离都市喧嚣，在自然丰富的深山里过着自给自足的生活。",
            "answer": "いとなんで",
            "options": ["いとなんで", "いどんで", "とどめて", "すえて"],
            "optionWordIds": ["営む", "挑む", "留める", "据える"]
        }
    },
    {
        "word": "謝る",
        "word_html": "<ruby>謝<rt>あやま</rt></ruby>る",
        "tone": "3",
        "pos": "他五",
        "mean": "道歉、谢罪",
        "nuance": "1. 承认错误并请求原谅。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>素<rt>す</rt></ruby><ruby>直<rt>なお</rt></ruby>に<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>非<rt>ひ</rt></ruby>を<span class='ex-highlight'><ruby>謝<rt>あやま</rt></ruby>った</span>。", "cn": "他坦率地承认错误并道了歉。" }
        ],
        "practice": {
            "sentence": "誤解から友人を傷つけてしまったので、すぐに電話をして素直に<span class='blank-space'></span>。",
            "cn": "因为误会伤害了朋友，我马上打电话坦率道歉。",
            "answer": "あやまった",
            "options": ["あやまった", "いとなんだ", "あつかった", "あやした"]
        }
    },
    {
        "word": "唱える",
        "word_html": "<ruby>唱<rt>とな</rt></ruby>える",
        "tone": "3",
        "pos": "他一",
        "mean": "念、诵；提倡、主张",
        "nuance": "1. 发出声音念经、咒语。\n2. 提出某种学说或异议。",
        "examples": [
            { "jp": "お<ruby>経<rt>きょう</rt></ruby>を<span class='ex-highlight'><ruby>唱<rt>とな</rt></ruby>える</span>。", "cn": "念经。" },
            { "jp": "<ruby>異<rt>い</rt></ruby><ruby>議<rt>ぎ</rt></ruby>を<span class='ex-highlight'><ruby>唱<rt>とな</rt></ruby>える</span>。", "cn": "提出异议。" }
        ],
        "practice": {
            "sentence": "彼は長年にわたり、組織の抜本的な改革を<span class='blank-space'></span>きた。",
            "cn": "多年来，他一直主张对组织进行根本性改革。",
            "answer": "となえて",
            "options": ["となえて", "たたえて", "さとして", "いつわって"]
        }
    },
    {
        "word": "讃える",
        "word_html": "<ruby>讃<rt>たた</rt></ruby>える",
        "tone": "3",
        "pos": "他一",
        "mean": "称赞、赞颂",
        "nuance": "1. 表彰功绩或赞美。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>勇<rt>ゆう</rt></ruby><ruby>気<rt>き</rt></ruby>を<span class='ex-highlight'><ruby>讃<rt>たた</rt></ruby>える</span>。", "cn": "赞颂他的勇气。" }
        ],
        "practice": {
            "sentence": "彼の長年の功績を<span class='blank-space'></span>、記念碑が建てられた。",
            "cn": "为了表彰他多年来的功绩，建立了一座纪念碑。",
            "answer": "たたえて",
            "options": ["たたえて", "となえて", "うったえて", "あやして"]
        }
    },
    {
        "word": "訴える",
        "word_html": "<ruby>訴<rt>うった</rt></ruby>える",
        "tone": "4",
        "pos": "他一",
        "mean": "起诉、控告；诉说；打动、感动",
        "nuance": "1. 通过法律手段解决。\n2. 把自己的要求、想法强烈表达出来。\n3. 依靠某种手段打动对方。",
        "examples": [
            { "jp": "<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>を<span class='ex-highlight'><ruby>訴<rt>うった</rt></ruby>える</span>。", "cn": "起诉公司。" },
            { "jp": "<ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby><ruby>保<rt>ほ</rt></ruby><ruby>護<rt>ご</rt></ruby>の<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby><ruby>性<rt>せい</rt></ruby>を<span class='ex-highlight'><ruby>訴<rt>うった</rt></ruby>える</span>。", "cn": "呼吁保护环境的必要性。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>演<rt>えん</rt></ruby><ruby>説<rt>ぜつ</rt></ruby>は<ruby>人<rt>ひと</rt></ruby>々の<ruby>心<rt>こころ</rt></ruby>に<span class='ex-highlight'><ruby>訴<rt>うった</rt></ruby>えた</span>。", "cn": "他的演说打动了人们的心。" }
        ],
        "practice": {
            "sentence": "被害者は法廷で、涙ながらにその悲惨さを<span class='blank-space'></span>。",
            "cn": "受害者在法庭上含泪诉说了那份悲惨。",
            "answer": "うったえた",
            "options": ["うったえた", "いつわった", "さとした", "いどんだ"]
        }
    },
    {
        "word": "諭す",
        "word_html": "<ruby>諭<rt>さと</rt></ruby>す",
        "tone": "2",
        "pos": "他五",
        "mean": "教导、晓谕",
        "nuance": "1. 耐心地向对方说明道理，使其明白错在哪里。",
        "examples": [
            { "jp": "<ruby>子<rt>こ</rt></ruby>どもに<ruby>嘘<rt>うそ</rt></ruby>をついてはいけないと<span class='ex-highlight'><ruby>諭<rt>さと</rt></ruby>す</span>。", "cn": "教导孩子不能说谎。" }
        ],
        "practice": {
            "sentence": "悪戯をした子供を、頭ごなしに叱るのではなく優しく<span class='blank-space'></span>。",
            "cn": "对恶作剧的孩子，他没有劈头盖脸地骂，而是温柔地开导。",
            "answer": "さとした",
            "options": ["さとした", "うったえた", "となえた", "たたえた"]
        }
    },
    {
        "word": "偽る",
        "word_html": "<ruby>偽<rt>いつわ</rt></ruby>る",
        "tone": "3",
        "pos": "他五",
        "mean": "伪造、冒充；欺骗",
        "nuance": "1. 说谎隐瞒真实身份或事实。\n2. 欺骗别人，甚至欺骗自己的本心。",
        "examples": [
            { "jp": "<ruby>年<rt>ねん</rt></ruby><ruby>齢<rt>れい</rt></ruby>を<span class='ex-highlight'><ruby>偽<rt>いつわ</rt></ruby>る</span>。", "cn": "谎报年龄。" },
            { "jp": "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>を<span class='ex-highlight'><ruby>偽<rt>いつわ</rt></ruby>って</span><ruby>生<rt>い</rt></ruby>きたくない。", "cn": "不想欺骗自己地活着。" }
        ],
        "practice": {
            "sentence": "経歴を<span class='blank-space'></span>入社したことが発覚し、解雇された。",
            "cn": "他伪造履历入职的事被发现后，被解雇了。",
            "answer": "いつわって",
            "options": ["いつわって", "あつかって", "いとなんで", "はがして"]
        }
    },
    {
        "word": "欺く",
        "word_html": "<ruby>欺<rt>あざむ</rt></ruby>く",
        "tone": "3",
        "pos": "他五",
        "mean": "欺骗、蒙蔽；胜似...",
        "nuance": "1. 用巧妙的手段让对方上当。\n2. 美丽程度不输给...",
        "examples": [
            { "jp": "<ruby>敵<rt>てき</rt></ruby>を<span class='ex-highlight'><ruby>欺<rt>あざむ</rt></ruby>く</span>。", "cn": "欺骗敌人。" },
            { "jp": "<ruby>昼<rt>ひる</rt></ruby>を<span class='ex-highlight'><ruby>欺<rt>あざむ</rt></ruby>く</span><ruby>明<rt>あか</rt></ruby>るさ。", "cn": "亮如白昼。" }
        ],
        "practice": {
            "sentence": "敵を<span class='blank-space'></span>には、まず味方からと言われる。",
            "cn": "常说要欺骗敌人，首先要从欺骗自己人开始。",
            "answer": "あざむく",
            "options": ["あざむく", "さとす", "となえる", "うったえる"]
        }
    },
    {
        "word": "誤魔化す",
        "word_html": "<ruby>誤<rt>ご</rt></ruby><ruby>魔<rt>ま</rt></ruby><ruby>化<rt>か</rt></ruby>す",
        "tone": "3",
        "pos": "他五",
        "mean": "敷衍、蒙混；笑着掩饰；掩盖",
        "nuance": "1. 含糊其辞，试图掩盖真相或尴尬。\n2. 用笑声缓解气氛。\n3. 用其他的方法手段来掩饰欠缺的部分。",
        "examples": [
            { "jp": "<ruby>話<rt>はなし</rt></ruby>を<span class='ex-highlight'><ruby>誤<rt>ご</rt></ruby><ruby>魔<rt>ま</rt></ruby><ruby>化<rt>か</rt></ruby>さない</span>で。", "cn": "别岔开话题。" },
            { "jp": "<ruby>人<rt>ひと</rt></ruby>の<ruby>質<rt>しつ</rt></ruby><ruby>問<rt>もん</rt></ruby>に<ruby>笑<rt>わら</rt></ruby>って<span class='ex-highlight'><ruby>誤<rt>ご</rt></ruby><ruby>魔<rt>ま</rt></ruby><ruby>化<rt>か</rt></ruby>す</span>。", "cn": "把别人的提问一笑糊弄过去。" },
            { "jp": "<ruby>化<rt>け</rt></ruby><ruby>粧<rt>しょう</rt></ruby>で<ruby>顔<rt>かお</rt></ruby><ruby>色<rt>いろ</rt></ruby>の<ruby>悪<rt>わる</rt></ruby>さを<span class='ex-highlight'><ruby>誤<rt>ご</rt></ruby><ruby>魔<rt>ま</rt></ruby><ruby>化<rt>か</rt></ruby>す</span>。", "cn": "用化妆掩盖脸色不好。" }
        ],
        "practice": {
            "sentence": "都合が悪くなると、彼はいつも笑って話を<span class='blank-space'></span>。",
            "cn": "一遇到不方便回答的事，他总是笑着把话题糊弄过去。",
            "answer": "ごまかす",
            "options": ["ごまかす", "あざむく", "だます", "かえりみる"],
            "optionWordIds": ["誤魔化す", null, null, "顧みる"]
        }
    },
    {
        "word": "騙す",
        "word_html": "<ruby>騙<rt>だま</rt></ruby>す",
        "tone": "2",
        "pos": "他五",
        "mean": "欺骗、诱骗",
        "nuance": "1. 通过说谎或虚假手段，使对方相信不实之事。",
        "examples": [
            { "jp": "<ruby>甘<rt>あま</rt></ruby>い<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>で<ruby>女<rt>じょ</rt></ruby><ruby>性<rt>せい</rt></ruby>を<span class='ex-highlight'><ruby>騙<rt>だま</rt></ruby>す</span>。", "cn": "用甜言蜜语欺骗女性。" }
        ],
        "practice": {
            "sentence": "詐欺グループに<span class='blank-space'></span>、大金を奪われてしまった。",
            "cn": "我被诈骗集团骗走了一大笔钱。",
            "answer": "だまされて",
            "options": ["だまされて", "ごまかされて", "かえりみられて", "せかされて"]
        }
    },
    {
        "word": "顧みる",
        "word_html": "<ruby>顧<rt>かえり</rt></ruby>みる",
        "tone": "4",
        "pos": "他一",
        "mean": "顾及",
        "nuance": "1. 多搭配否定，表示不顾、无视自身安危。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>も<span class='ex-highlight'><ruby>顧<rt>かえり</rt></ruby>みず</span><ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>を<ruby>救<rt>すく</rt></ruby>った。", "cn": "他不顾危险救了孩子。" }
        ],
        "practice": {
            "sentence": "彼は仕事に熱中するあまり、家庭を<span class='blank-space'></span>余裕がなかった。",
            "cn": "他太投入工作，已经没有余力顾及家庭。",
            "answer": "かえりみる",
            "options": ["かえりみる", "やしなう", "あざむく", "ごまかす"],
            "optionWordIds": ["顧みる", null, null, null]
        }
    },
    {
        "word": "省みる",
        "word_html": "<ruby>省<rt>かえり</rt></ruby>みる",
        "tone": "4",
        "pos": "他一",
        "mean": "反省、回顾",
        "nuance": "1. 回顾自己的言行，思考对错。",
        "examples": [
            { "jp": "<ruby>我<rt>わ</rt></ruby>が<ruby>身<rt>み</rt></ruby>を<span class='ex-highlight'><ruby>省<rt>かえり</rt></ruby>みる</span>。", "cn": "反省吾身。" }
        ],
        "practice": {
            "sentence": "失敗したときは、他人のせいにする前に自らを<span class='blank-space'></span>べきだ。",
            "cn": "失败时，在责怪别人之前，应该先反省自己。",
            "answer": "かえりみる",
            "options": ["かえりみる", "あやまる", "だます", "となえる"],
            "optionWordIds": ["省みる", null, null, null]
        }
    },
];
const DAY11_WORDS = [
{
        "word": "戒める",
        "word_html": "<ruby>戒<rt>いまし</rt></ruby>める",
        "tone": "4",
        "pos": "他一",
        "mean": "告诫、劝诫；自律",
        "nuance": "1. 严厉地教导人不要犯错。\n2. 约束自己。",
        "examples": [
            { "jp": "<ruby>部<rt>ぶ</rt></ruby><ruby>下<rt>か</rt></ruby>の<ruby>緩<rt>ゆる</rt></ruby>みを<span class='ex-highlight'><ruby>戒<rt>いまし</rt></ruby>める</span>。", "cn": "告诫部下不要松懈。" },
            { "jp": "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>を<span class='ex-highlight'><ruby>戒<rt>いまし</rt></ruby>める</span>。", "cn": "自我告诫。" }
        ],
        "practice": {
            "sentence": "彼は自らの怠慢を厳しく<span class='blank-space'></span>、再出発を誓った。",
            "cn": "他严厉告诫自己的懒散，发誓重新出发。",
            "answer": "いましめて",
            "options": ["いましめて", "ゆだねて", "たくして", "ねだって"]
        }
    },
    {
        "word": "委ねる",
        "word_html": "<ruby>委<rt>ゆだ</rt></ruby>ねる",
        "tone": "3",
        "pos": "他一",
        "mean": "委托、听凭；献身",
        "nuance": "1. 把决定权完全交给对方或命运。\n2. 全身心投入。",
        "examples": [
            { "jp": "<ruby>運<rt>うん</rt></ruby><ruby>命<rt>めい</rt></ruby>に<ruby>身<rt>み</rt></ruby>を<span class='ex-highlight'><ruby>委<rt>ゆだ</rt></ruby>ねる</span>。", "cn": "听天由命。" },
            { "jp": "<ruby>判<rt>はん</rt></ruby><ruby>断<rt>だん</rt></ruby>を<ruby>彼<rt>かれ</rt></ruby>に<span class='ex-highlight'><ruby>委<rt>ゆだ</rt></ruby>ねる</span>。", "cn": "把判断权交给他。" }
        ],
        "practice": {
            "sentence": "最終的な判断は、現場の責任者に<span class='blank-space'></span>ことにした。",
            "cn": "最终判断决定交给现场负责人。",
            "answer": "ゆだねる",
            "options": ["ゆだねる", "いましめる", "たくす", "せがむ"]
        }
    },
    {
        "word": "託す",
        "word_html": "<ruby>託<rt>たく</rt></ruby>す",
        "tone": "2",
        "pos": "他五",
        "mean": "寄托",
        "nuance": "1. 把希望、梦想、口信寄托给别人。",
        "examples": [
            { "jp": "<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>に<span class='ex-highlight'><ruby>託<rt>たく</rt></ruby>す</span>。", "cn": "把梦想寄托在孩子身上。" }
        ],
        "practice": {
            "sentence": "彼は引退する際、後輩に自分の夢を<span class='blank-space'></span>。",
            "cn": "他退休时，把自己的梦想托付给了后辈。",
            "answer": "たくした",
            "options": ["たくした", "いましめた", "ねだった", "しびれた"]
        }
    },
    {
        "word": "せがむ",
        "word_html": "せがむ",
        "tone": "2",
        "pos": "他五",
        "mean": "死乞白赖、纠缠",
        "nuance": "1. 强行要求、闹着要。",
        "examples": [
            { "jp": "デートを<span class='ex-highlight'>せがむ</span>。", "cn": "死缠着要约会。" }
        ],
        "practice": {
            "sentence": "子供がおもちゃを買ってくれと親に<span class='blank-space'></span>いる。",
            "cn": "孩子缠着父母要买玩具。",
            "answer": "せがんで",
            "options": ["せがんで", "いましめて", "たくして", "ゆだねて"]
        }
    },
    {
        "word": "強請る",
        "word_html": "<ruby>強請<rt>ねだ</rt></ruby>る",
        "tone": "2",
        "pos": "他五",
        "mean": "撒娇央求、强讨",
        "nuance": "1. 利用对方的好感或弱点索要财物。",
        "examples": [
            { "jp": "<ruby>父<rt>ちち</rt></ruby>にお<ruby>小<rt>こ</rt></ruby><ruby>遣<rt>づか</rt></ruby>いを<span class='ex-highlight'>ねだる</span>。", "cn": "向父亲撒娇讨零花钱。" }
        ],
        "practice": {
            "sentence": "彼女は高級なバッグを彼氏に<span class='blank-space'></span>困らせた。",
            "cn": "她向男朋友缠着要高级包包，把对方弄得很为难。",
            "answer": "ねだって",
            "options": ["ねだって", "いましめて", "たくして", "しびれて"]
        }
    },
    {
        "word": "痺れる",
        "word_html": "<ruby>痺<rt>しび</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "麻木、发麻；陶醉、销魂",
        "nuance": "1. 身体部位因受压或电流而失去知觉。\n2. 被对方的魅力电到，深感震撼。",
        "examples": [
            { "jp": "<ruby>正<rt>せい</rt></ruby><ruby>座<rt>ざ</rt></ruby>をして<ruby>足<rt>あし</rt></ruby>が<span class='ex-highlight'><ruby>痺<rt>しび</rt></ruby>れた</span>。", "cn": "跪坐久了腿麻了。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>のロックな<ruby>生<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby>に<span class='ex-highlight'><ruby>痺<rt>しび</rt></ruby>れる</span>。", "cn": "他那摇滚般的生活方式让我着迷。" }
        ],
        "practice": {
            "sentence": "長時間正座をしていたので、足が<span class='blank-space'></span>立てない。",
            "cn": "长时间正坐，腿麻得站不起来。",
            "answer": "しびれて",
            "options": ["しびれて", "おびえて", "ふるえて", "こぼれて"]
        }
    },
    {
        "word": "震える",
        "word_html": "<ruby>震<rt>ふる</rt></ruby>える",
        "tone": "0",
        "pos": "自一",
        "mean": "震动；发抖、颤抖",
        "nuance": "1. 物体晃动。\n2. 因寒冷、恐惧、愤怒或感动而身体抖动。",
        "examples": [
            { "jp": "<ruby>木<rt>き</rt></ruby>の<ruby>葉<rt>は</rt></ruby>が<ruby>風<rt>かぜ</rt></ruby>に<span class='ex-highlight'><ruby>震<rt>ふる</rt></ruby>える</span>。", "cn": "树叶被风吹得抖动着。" },
            { "jp": "<ruby>怒<rt>いか</rt></ruby>りに<ruby>手<rt>て</rt></ruby>が<span class='ex-highlight'><ruby>震<rt>ふる</rt></ruby>える</span>。", "cn": "气得手抖。" }
        ],
        "practice": {
            "sentence": "寒さのあまり、全身がガタガタと<span class='blank-space'></span>止まらなかった。",
            "cn": "冷得全身直发抖，停不下来。",
            "answer": "ふるえて",
            "options": ["ふるえて", "しびれて", "おびえて", "ゆるがして"]
        }
    },
    {
        "word": "揺るがす",
        "word_html": "<ruby>揺<rt>ゆ</rt></ruby>るがす",
        "tone": "3",
        "pos": "他五",
        "mean": "震动、撼动",
        "nuance": "1. 强烈地动摇根基或社会。",
        "examples": [
            { "jp": "<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby>を<span class='ex-highlight'><ruby>揺<rt>ゆ</rt></ruby>るがす</span><ruby>大<rt>だい</rt></ruby><ruby>事<rt>じ</rt></ruby><ruby>件<rt>けん</rt></ruby>。", "cn": "撼动世界的大事件。" }
        ],
        "practice": {
            "sentence": "その不祥事は、政権の基盤を<span class='blank-space'></span>事態となった。",
            "cn": "那起丑闻动摇了政权的根基。",
            "answer": "ゆるがす",
            "options": ["ゆるがす", "ふるえる", "おびえる", "あふれる"]
        }
    },
    {
        "word": "怯える",
        "word_html": "<ruby>怯<rt>おび</rt></ruby>える",
        "tone": "3",
        "pos": "自一",
        "mean": "害怕、胆怯",
        "nuance": "1. 因恐惧而身体蜷缩或心理不安。",
        "examples": [
            { "jp": "<ruby>影<rt>かげ</rt></ruby>に<span class='ex-highlight'><ruby>怯<rt>おび</rt></ruby>える</span>。", "cn": "杯弓蛇影。" }
        ],
        "practice": {
            "sentence": "捨て犬は人間を警戒し、物陰で<span class='blank-space'></span>いた。",
            "cn": "流浪狗警惕人类，躲在阴影处害怕地发抖。",
            "answer": "おびえて",
            "options": ["おびえて", "ふるえて", "こぼれて", "あふれて"]
        }
    },
    {
        "word": "零れる",
        "word_html": "<ruby>零<rt>こぼ</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "洒落、溢出；流露",
        "nuance": "1. 液体或颗粒物满出来掉落。\n2. 笑容、眼泪、抱怨不自觉地表现出来。",
        "examples": [
            { "jp": "コップから<ruby>水<rt>みず</rt></ruby>が<span class='ex-highlight'><ruby>零<rt>こぼ</rt></ruby>れる</span>。", "cn": "水从杯子里洒出来了。" },
            { "jp": "<ruby>愚<rt>ぐ</rt></ruby><ruby>痴<rt>ち</rt></ruby>が<span class='ex-highlight'><ruby>零<rt>こぼ</rt></ruby>れる</span>。", "cn": "发牢骚。" }
        ],
        "practice": {
            "sentence": "彼の口から、思わず本音が<span class='blank-space'></span>。",
            "cn": "他不由自主地说出了真心话。",
            "answer": "こぼれた",
            "options": ["こぼれた", "あふれた", "おびえた", "ふるえた"]
        }
    },
    {
        "word": "溢れる",
        "word_html": "<ruby>溢<rt>あふ</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "溢出；充满、洋溢",
        "nuance": "1. 液体漫出来。\n2. 人、物或感情多得装不下。",
        "examples": [
            { "jp": "コップから<ruby>水<rt>みず</rt></ruby>が<span class='ex-highlight'><ruby>溢<rt>あふ</rt></ruby>れる</span>。", "cn": "水从杯子里溢出来了。" },
            { "jp": "<ruby>会<rt>かい</rt></ruby><ruby>場<rt>じょう</rt></ruby>は<ruby>観<rt>かん</rt></ruby><ruby>光<rt>こう</rt></ruby><ruby>客<rt>きゃく</rt></ruby>で<span class='ex-highlight'><ruby>溢<rt>あふ</rt></ruby>れて</span>いる。", "cn": "会场里挤满了游客。" }
        ],
        "practice": {
            "sentence": "大雨で川の水が<span class='blank-space'></span>、道路が冠水した。",
            "cn": "因大雨河水外溢，道路被水淹了。",
            "answer": "あふれて",
            "options": ["あふれて", "こぼれて", "そそいで", "ただよって"]
        }
    },
    {
        "word": "注ぐ",
        "word_html": "<ruby>注<rt>そそ</rt></ruby>ぐ",
        "tone": "2",
        "pos": "自五/他五",
        "mean": "注入、倒入；倾注",
        "nuance": "1. 液体流入，或把液体倒进容器。\n2. 集中精力、感情。",
        "examples": [
            { "jp": "カップにお<ruby>湯<rt>ゆ</rt></ruby>を<span class='ex-highlight'><ruby>注<rt>そそ</rt></ruby>ぐ</span>。", "cn": "往杯子里倒热水。" },
            { "jp": "<ruby>研<rt>けん</rt></ruby><ruby>究<rt>きゅう</rt></ruby>に<ruby>情<rt>じょう</rt></ruby><ruby>熱<rt>ねつ</rt></ruby>を<span class='ex-highlight'><ruby>注<rt>そそ</rt></ruby>ぐ</span>。", "cn": "倾注热情在研究上。" }
        ],
        "practice": {
            "sentence": "彼女は生涯をかけて、恵まれない子供たちの教育に愛情を<span class='blank-space'></span>。",
            "cn": "她用一生把爱倾注在贫困儿童的教育上。",
            "answer": "そそいだ",
            "options": ["そそいだ", "うなずいた", "うつむいた", "うなだれた"]
        }
    },
    {
        "word": "頷く",
        "word_html": "<ruby>頷<rt>うなず</rt></ruby>く",
        "tone": "3",
        "pos": "自五",
        "mean": "点头",
        "nuance": "1. 表示肯定、同意或理解。",
        "examples": [
            { "jp": "<ruby>質<rt>しつ</rt></ruby><ruby>問<rt>もん</rt></ruby>に<span class='ex-highlight'><ruby>頷<rt>うなず</rt></ruby>いて</span><ruby>答<rt>こた</rt></ruby>える。", "cn": "点头回答问题。" }
        ],
        "practice": {
            "sentence": "上司の説明に深く<span class='blank-space'></span>、納得した様子を見せた。",
            "cn": "他深深点头，对上司的说明露出理解的样子。",
            "answer": "うなずき",
            "options": ["うなずき", "すくめ", "ただよい", "さかのぼり"]
        }
    },
    {
        "word": "俯く",
        "word_html": "<ruby>俯<rt>うつむ</rt></ruby>く",
        "tone": "3",
        "pos": "自五",
        "mean": "低头、脸朝下",
        "nuance": "1. 因害羞、愧疚或思考而将视线投向下方。",
        "examples": [
            { "jp": "<ruby>恥<rt>は</rt></ruby>ずかしくて<span class='ex-highlight'><ruby>俯<rt>うつむ</rt></ruby>く</span>。", "cn": "害羞得低下了头。" }
        ],
        "practice": {
            "sentence": "叱られた子供は、悲しそうにずっと<span class='blank-space'></span>ままだった。",
            "cn": "被责骂的孩子一直悲伤地低着头。",
            "answer": "うつむいた",
            "options": ["うつむいた", "うなだれた", "そそいだ", "けなした"]
        }
    },
    {
        "word": "項垂れる",
        "word_html": "<ruby>項<rt>うな</rt></ruby><ruby>垂<rt>だ</rt></ruby>れる",
        "tone": "4",
        "pos": "自一",
        "mean": "垂头丧气",
        "nuance": "1. 因失望、悲伤、羞愧而无力地垂下脑袋。",
        "examples": [
            { "jp": "<ruby>敗<rt>はい</rt></ruby><ruby>北<rt>ぼく</rt></ruby>を<ruby>知<rt>し</rt></ruby>って<span class='ex-highlight'>うなだれる</span>。", "cn": "得知败北后垂头丧气。" }
        ],
        "practice": {
            "sentence": "試合に負けた選手たちは、ショックでガックリと<span class='blank-space'></span>。",
            "cn": "输掉比赛的选手们受到打击，垂头丧气。",
            "answer": "うなだれた",
            "options": ["うなだれた", "すくめた", "うなずいた", "ほろびた"]
        }
    },
    {
        "word": "竦める",
        "word_html": "<ruby>竦<rt>すく</rt></ruby>める",
        "tone": "3",
        "pos": "他一",
        "mean": "耸(肩)；缩(脖子/身体)",
        "nuance": "1. 耸肩以表示无奈或不知情。\n2. 因恐惧或寒冷而缩紧身体。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は「やれやれ」と<ruby>肩<rt>かた</rt></ruby>を<span class='ex-highlight'><ruby>竦<rt>すく</rt></ruby>めた</span>。", "cn": "他一副“哎呀呀”的样子耸了耸肩。" },
            { "jp": "<ruby>寒<rt>さむ</rt></ruby>さに<ruby>首<rt>くび</rt></ruby>を<span class='ex-highlight'><ruby>竦<rt>すく</rt></ruby>める</span>。", "cn": "冷得缩起了脖子。" }
        ],
        "practice": {
            "sentence": "予想外の質問をされ、彼は困ったように肩を<span class='blank-space'></span>。",
            "cn": "被问到意料之外的问题，他困惑地耸了耸肩。",
            "answer": "すくめた",
            "options": ["すくめた", "うなずいた", "ただよった", "さかのぼった"]
        }
    },
    {
        "word": "漂う",
        "word_html": "<ruby>漂<rt>ただよ</rt></ruby>う",
        "tone": "3",
        "pos": "自五",
        "mean": "漂浮；弥漫、充满；流浪",
        "nuance": "1. 悬浮在水面或空中。\n2. 香气、气氛笼罩四周。\n3. 无目的地移动或心神不定。",
        "examples": [
            { "jp": "<ruby>海<rt>うみ</rt></ruby>に<ruby>小<rt>こ</rt></ruby><ruby>舟<rt>ぶね</rt></ruby>が<span class='ex-highlight'><ruby>漂<rt>ただよ</rt></ruby>う</span>。", "cn": "小船漂浮在海上。" },
            { "jp": "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>に<ruby>花<rt>はな</rt></ruby>の<ruby>香<rt>かお</rt></ruby>りが<span class='ex-highlight'><ruby>漂<rt>ただよ</rt></ruby>う</span>。", "cn": "房间里弥漫着花香。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<ruby>心<rt>こころ</rt></ruby>はどこか<ruby>宙<rt>ちゅう</rt></ruby>に<span class='ex-highlight'><ruby>漂<rt>ただよ</rt></ruby>って</span>いた。", "cn": "她的心思好像飘荡去了某处。" }
        ],
        "practice": {
            "sentence": "早朝の湖面には、幻想的な霧が静かに<span class='blank-space'></span>いた。",
            "cn": "清晨的湖面上，梦幻般的雾静静漂浮着。",
            "answer": "ただよって",
            "options": ["ただよって", "すくんで", "ほろびて", "うつむいて"]
        }
    },
    {
        "word": "貶す",
        "word_html": "<ruby>貶<rt>けな</rt></ruby>す",
        "tone": "0",
        "pos": "他五",
        "mean": "贬低、说坏话",
        "nuance": "1. 故意挑毛病，否定对方的价值。",
        "examples": [
            { "jp": "<ruby>影<rt>かげ</rt></ruby>で<ruby>同<rt>どう</rt></ruby><ruby>僚<rt>りょう</rt></ruby>を<span class='ex-highlight'><ruby>貶<rt>けな</rt></ruby>す</span>。", "cn": "在背后说同事坏话。" }
        ],
        "practice": {
            "sentence": "他人の努力を<span class='blank-space'></span>ばかりで、自分では何もしないのは良くない。",
            "cn": "总是贬低别人的努力，自己却什么都不做，这样不好。",
            "answer": "けなす",
            "options": ["けなす", "そそぐ", "さかのぼる", "ほろびる"]
        }
    },
    {
        "word": "遡る",
        "word_html": "<ruby>遡<rt>さかのぼ</rt></ruby>る",
        "tone": "4",
        "pos": "自五",
        "mean": "逆流而上；追溯",
        "nuance": "1. 逆着水流往上游走。\n2. 回到过去的时间点或追寻事物根源。",
        "examples": [
            { "jp": "<ruby>川<rt>かわ</rt></ruby>を<span class='ex-highlight'><ruby>遡<rt>さかのぼ</rt></ruby>る</span>。", "cn": "逆流而上。" },
            { "jp": "<ruby>歴<rt>れき</rt></ruby><ruby>史<rt>し</rt></ruby>を<span class='ex-highlight'><ruby>遡<rt>さかのぼ</rt></ruby>る</span>。", "cn": "追溯历史。" }
        ],
        "practice": {
            "sentence": "この伝統行事の起源は、数百年前の江戸時代まで<span class='blank-space'></span>。",
            "cn": "这个传统活动的起源可以追溯到数百年前的江户时代。",
            "answer": "さかのぼる",
            "options": ["さかのぼる", "ただよう", "うなずく", "うつむく"]
        }
    },
    {
        "word": "滅びる",
        "word_html": "<ruby>滅<rt>ほろ</rt></ruby>びる",
        "tone": "3",
        "pos": "自一",
        "mean": "灭亡、绝种",
        "nuance": "1. 国家、文明、物种等彻底消失。",
        "examples": [
            { "jp": "<ruby>文<rt>ぶん</rt></ruby><ruby>明<rt>めい</rt></ruby>が<span class='ex-highlight'><ruby>滅<rt>ほろ</rt></ruby>びる</span>。", "cn": "文明灭亡。" }
        ],
        "practice": {
            "sentence": "環境破壊が進めば、多くの貴重な動植物が<span class='blank-space'></span>恐れがある。",
            "cn": "如果环境破坏继续下去，许多珍贵动植物都有灭绝的危险。",
            "answer": "ほろびる",
            "options": ["ほろびる", "すくむ", "けなす", "そそぐ"]
        }
    }
];
const DAY12_WORDS = [
{
        "word": "争う",
        "word_html": "<ruby>争<rt>あらそ</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "争夺、竞争；争吵、争论；争取",
        "nuance": "1. 为了抢夺某物而发生冲突。\n2. 意见不合。\n3. 情况紧急，连一分一秒都要争取。",
        "examples": [
            { "jp": "<ruby>美<rt>うつく</rt></ruby>しさを<span class='ex-highlight'><ruby>争<rt>あらそ</rt></ruby>う</span><ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>の<ruby>女<rt>じょ</rt></ruby><ruby>優<rt>ゆう</rt></ruby>。", "cn": "两位女演员在比拼美貌。" },
            { "jp": "<ruby>裁<rt>さい</rt></ruby><ruby>判<rt>ばん</rt></ruby>で<span class='ex-highlight'><ruby>争<rt>あらそ</rt></ruby>う</span>。", "cn": "打官司。" },
            { "jp": "<ruby>一<rt>いっ</rt></ruby><ruby>刻<rt>こく</rt></ruby>を<span class='ex-highlight'><ruby>争<rt>あらそ</rt></ruby>う</span><ruby>事<rt>じ</rt></ruby><ruby>態<rt>たい</rt></ruby>だ。", "cn": "这事刻不容缓。" }
        ],
        "practice": {
            "sentence": "優勝を目指して、選手たちが激しく<span class='blank-space'></span>。",
            "cn": "选手们为了争夺冠军激烈竞争。",
            "answer": "あらそっている",
            "options": ["あらそっている", "きそっている", "さばいている", "くだしている"]
        }
    },
    {
        "word": "競う",
        "word_html": "<ruby>競<rt>きそ</rt></ruby>う",
        "tone": "2",
        "pos": "他五",
        "mean": "竞赛、比赛",
        "nuance": "1. 互相切磋技能、速度等，比谁做得更好。",
        "examples": [
            { "jp": "<ruby>速<rt>はや</rt></ruby>さを<span class='ex-highlight'><ruby>競<rt>きそ</rt></ruby>う</span>。", "cn": "比速度。" }
        ],
        "practice": {
            "sentence": "オリンピックの舞台で、世界中のアスリートが技を<span class='blank-space'></span>。",
            "cn": "在奥运舞台上，来自世界各地的运动员互相较量技艺。",
            "answer": "きそいあう",
            "options": ["きそいあう", "あらそいあう", "ひきずりあう", "さばきあう"]
        }
    },
    {
        "word": "蘇る",
        "word_html": "<ruby>蘇<rt>よみがえ</rt></ruby>る",
        "tone": "3",
        "pos": "自五",
        "mean": "复苏、复活；重现、唤起",
        "nuance": "1. 死而复生。\n2. 已经消失的记忆或感情重新回来。",
        "examples": [
            { "jp": "<ruby>死<rt>し</rt></ruby><ruby>者<rt>しゃ</rt></ruby>が<span class='ex-highlight'><ruby>蘇<rt>よみがえ</rt></ruby>る</span>。", "cn": "死者复活。" },
            { "jp": "<ruby>記<rt>き</rt></ruby><ruby>憶<rt>おく</rt></ruby>が<ruby>鮮<rt>せん</rt></ruby><ruby>明<rt>めい</rt></ruby>に<span class='ex-highlight'><ruby>蘇<rt>よみがえ</rt></ruby>る</span>。", "cn": "记忆鲜明地复苏了。" }
        ],
        "practice": {
            "sentence": "雨上がりの庭に、植物たちが生き生きと<span class='blank-space'></span>。",
            "cn": "雨后的庭院里，植物们重新焕发生机。",
            "answer": "よみがえった",
            "options": ["よみがえった", "しりぞいた", "すたれた", "ひきずった"]
        }
    },
    {
        "word": "括る",
        "word_html": "<ruby>括<rt>くく</rt></ruby>る",
        "tone": "0",
        "pos": "他五",
        "mean": "捆、扎；总结、概括",
        "nuance": "1. 把散乱的东西束在一起。\n2. 归纳为一类。",
        "examples": [
            { "jp": "<ruby>髪<rt>かみ</rt></ruby>を<span class='ex-highlight'><ruby>括<rt>くく</rt></ruby>る</span>。", "cn": "扎头发。" },
            { "jp": "<ruby>一<rt>ひと</rt></ruby>つに<span class='ex-highlight'><ruby>括<rt>くく</rt></ruby>る</span>。", "cn": "归为一类。" }
        ],
        "practice": {
            "sentence": "散らかった書類を紐で<span class='blank-space'></span>整理した。",
            "cn": "把散乱的文件用绳子捆起来整理好。",
            "answer": "くくって",
            "options": ["くくって", "しりぞいて", "すたれて", "さばいて"]
        }
    },
    {
        "word": "退く",
        "word_html": "<ruby>退<rt>しりぞ</rt></ruby>く",
        "tone": "3",
        "pos": "自五",
        "mean": "倒退、后退；引退、辞职",
        "nuance": "1. 身体向后移动。\n2. 辞去官职或地位。",
        "examples": [
            { "jp": "<ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じてその<ruby>場<rt>ば</rt></ruby>から<span class='ex-highlight'><ruby>退<rt>しりぞ</rt></ruby>いた</span>。", "cn": "感觉到危险后从那个地方退开了。" },
            { "jp": "<ruby>現<rt>げん</rt></ruby><ruby>役<rt>えき</rt></ruby>を<span class='ex-highlight'><ruby>退<rt>しりぞ</rt></ruby>く</span>。", "cn": "从现役引退。" }
        ],
        "practice": {
            "sentence": "長年務めた社長の座を<span class='blank-space'></span>、後進に道を譲った。",
            "cn": "他退出多年担任的社长职位，把道路让给后辈。",
            "answer": "しりぞき",
            "options": ["しりぞき", "よみがえり", "あらそい", "きそい"]
        }
    },
    {
        "word": "廃れる",
        "word_html": "<ruby>廃<rt>すた</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "过时、衰退",
        "nuance": "1. 不再流行，变得陈旧。\n2. 道德、风俗等失去力量。",
        "examples": [
            { "jp": "<ruby>流<rt>りゅう</rt></ruby><ruby>行<rt>こう</rt></ruby>が<span class='ex-highlight'><ruby>廃<rt>すた</rt></ruby>れる</span>。", "cn": "流行过时了。" },
            { "jp": "<ruby>昔<rt>むかし</rt></ruby>の<ruby>慣<rt>かん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>は<ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>に<span class='ex-highlight'><ruby>廃<rt>すた</rt></ruby>れて</span>いった。", "cn": "旧时的习俗逐渐被废弃了。" }
        ],
        "practice": {
            "sentence": "インターネットの普及により、手紙を書く習慣は<span class='blank-space'></span>つつある。",
            "cn": "随着互联网普及，写信的习惯正在逐渐衰退。",
            "answer": "すたれ",
            "options": ["すたれ", "よみがえり", "しりぞき", "くくり"]
        }
    },
    {
        "word": "課す",
        "word_html": "<ruby>課<rt>か</rt></ruby>す",
        "tone": "1",
        "pos": "他五",
        "mean": "课、征收；布置、下达",
        "nuance": "1. 征收税金、罚款。\n2. 分派任务、作业、义务。",
        "examples": [
            { "jp": "<ruby>重<rt>じゅう</rt></ruby><ruby>税<rt>ぜい</rt></ruby>を<span class='ex-highlight'><ruby>課<rt>か</rt></ruby>す</span>。", "cn": "课重税。" },
            { "jp": "<ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>に<ruby>宿<rt>しゅく</rt></ruby><ruby>題<rt>だい</rt></ruby>を<span class='ex-highlight'><ruby>課<rt>か</rt></ruby>す</span>。", "cn": "给学生布置作业。" }
        ],
        "practice": {
            "sentence": "政府は環境汚染を防ぐため、企業に新たな義務を<span class='blank-space'></span>。",
            "cn": "政府为了防止环境污染，向企业课以新的义务。",
            "answer": "かした",
            "options": ["かした", "くだした", "さばいた", "あらそった"]
        }
    },
    {
        "word": "下す",
        "word_html": "<ruby>下<rt>くだ</rt></ruby>す",
        "tone": "0",
        "pos": "他五",
        "mean": "下达(判断/命令)；打败",
        "nuance": "1. 做出决定、判决。\n2. 击败对手。",
        "examples": [
            { "jp": "<ruby>決<rt>けつ</rt></ruby><ruby>断<rt>だん</rt></ruby>を<span class='ex-highlight'><ruby>下<rt>くだ</rt></ruby>す</span>。", "cn": "做出决断。" },
            { "jp": "<ruby>強<rt>きょう</rt></ruby><ruby>敵<rt>てき</rt></ruby>を<span class='ex-highlight'><ruby>下<rt>くだ</rt></ruby>す</span>。", "cn": "击败强敌。" }
        ],
        "practice": {
            "sentence": "裁判官は被告人に対して、厳しい判決を<span class='blank-space'></span>。",
            "cn": "法官对被告作出了严厉判决。",
            "answer": "くだした",
            "options": ["くだした", "かした", "さばいた", "きそった"]
        }
    },
    {
        "word": "裁く",
        "word_html": "<ruby>裁<rt>さば</rt></ruby>く",
        "tone": "2",
        "pos": "他五",
        "mean": "审判、裁决；处理、调停",
        "nuance": "1. 判定罪行、纠纷。\n2. 妥善处理事物或争端。",
        "examples": [
            { "jp": "<ruby>罪<rt>つみ</rt></ruby>を<span class='ex-highlight'><ruby>裁<rt>さば</rt></ruby>く</span>。", "cn": "审判罪行。" },
            { "jp": "<ruby>喧<rt>けん</rt></ruby><ruby>嘩<rt>か</rt></ruby>を<span class='ex-highlight'><ruby>裁<rt>さば</rt></ruby>く</span>。", "cn": "仲裁吵架。" }
        ],
        "practice": {
            "sentence": "彼は公平な立場で、二人の間の争いを<span class='blank-space'></span>。",
            "cn": "他站在公正立场上，裁断了两人之间的争执。",
            "answer": "さばいた",
            "options": ["さばいた", "くだした", "かした", "あらそった"]
        }
    },
    {
        "word": "引きずる",
        "word_html": "<ruby>引<rt>ひ</rt></ruby>きずる",
        "tone": "0",
        "pos": "他五",
        "mean": "拖、拉；拖延、无法忘怀",
        "nuance": "1. 在地面上拖动形体。\n2. 深受过去影响，无法摆脱。",
        "examples": [
            { "jp": "<ruby>足<rt>あし</rt></ruby>を<span class='ex-highlight'><ruby>引<rt>ひ</rt></ruby>きずって</span><ruby>歩<rt>ある</rt></ruby>く。", "cn": "拖着腿走。" },
            { "jp": "<ruby>過<rt>か</rt></ruby><ruby>去<rt>こ</rt></ruby>の<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>を<span class='ex-highlight'><ruby>引<rt>ひ</rt></ruby>きずる</span>。", "cn": "对过去的失败耿耿于怀。" }
        ],
        "practice": {
            "sentence": "長いコートの裾を<span class='blank-space'></span>歩く姿が印象的だった。",
            "cn": "他拖着长大衣下摆走路的样子令人印象深刻。",
            "answer": "ひきずって",
            "options": ["ひきずって", "くくって", "しりぞいて", "すたれて"]
        }
    },
    {
        "word": "しくじる",
        "word_html": "しくじる",
        "tone": "3",
        "pos": "他五",
        "mean": "搞砸、失败",
        "nuance": "1. 因失误而导致坏结果。",
        "examples": [
            { "jp": "<ruby>入<rt>にゅう</rt></ruby><ruby>試<rt>し</rt></ruby>で<span class='ex-highlight'>しくじる</span>。", "cn": "入学考试搞砸了。" }
        ],
        "practice": {
            "sentence": "大事なプレゼンテーションで<span class='blank-space'></span>しまい、契約を逃した。",
            "cn": "在重要演示中搞砸了，结果错失了合同。",
            "answer": "しくじって",
            "options": ["しくじって", "くじけて", "つまずいて", "とぼけて"]
        }
    },
    {
        "word": "挫ける",
        "word_html": "<ruby>挫<rt>くじ</rt></ruby>ける",
        "tone": "3",
        "pos": "自一",
        "mean": "气馁、沮丧；扭伤",
        "nuance": "1. 意志消沉。\n2. 手脚关节扭伤。",
        "examples": [
            { "jp": "<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby><ruby>続<rt>つづ</rt></ruby>きで<ruby>心<rt>こころ</rt></ruby>が<span class='ex-highlight'><ruby>挫<rt>くじ</rt></ruby>ける</span>。", "cn": "接连失败，心里气馁了。" },
            { "jp": "<ruby>足<rt>あし</rt></ruby>が<span class='ex-highlight'><ruby>挫<rt>くじ</rt></ruby>けて</span><ruby>歩<rt>ある</rt></ruby>けない。", "cn": "脚扭伤了，走不了路。" }
        ],
        "practice": {
            "sentence": "何度失敗しても、決して<span class='blank-space'></span>ことなく挑戦し続けた。",
            "cn": "无论失败多少次，他都从不气馁，继续挑战。",
            "answer": "くじける",
            "options": ["くじける", "しくじる", "よそおう", "めぐる"]
        }
    },
    {
        "word": "躓く",
        "word_html": "<ruby>躓<rt>つまず</rt></ruby>く",
        "tone": "0",
        "pos": "自五",
        "mean": "绊倒；受挫、栽跟头",
        "nuance": "1. 脚碰到障碍物失去平衡。\n2. 事情在进行中遇到障碍而失败。",
        "examples": [
            { "jp": "<ruby>石<rt>いし</rt></ruby>に<span class='ex-highlight'><ruby>躓<rt>つまず</rt></ruby>いて</span><ruby>転<rt>ころ</rt></ruby>んだ。", "cn": "绊到石头摔倒了。" },
            { "jp": "<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>が<ruby>途<rt>と</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>で<span class='ex-highlight'><ruby>躓<rt>つまず</rt></ruby>く</span>。", "cn": "计划在中途受挫。" }
        ],
        "practice": {
            "sentence": "階段で<span class='blank-space'></span>転びそうになったが、手すりを持って助かった。",
            "cn": "在楼梯上绊了一下差点摔倒，幸好抓住了扶手。",
            "answer": "つまずいて",
            "options": ["つまずいて", "くじけて", "さっして", "もえて"]
        }
    },
    {
        "word": "屈する",
        "word_html": "<ruby>屈<rt>くっ</rt></ruby>する",
        "tone": "0",
        "pos": "自/他サ",
        "mean": "屈服、认输；弯曲",
        "nuance": "1. 向强大的力量或困难低头。\n2. 弄弯身体部位。",
        "examples": [
            { "jp": "<ruby>権<rt>けん</rt></ruby><ruby>力<rt>りょく</rt></ruby>に<span class='ex-highlight'><ruby>屈<rt>くっ</rt></ruby>しない</span>。", "cn": "不向权力屈服。" },
            { "jp": "<ruby>膝<rt>ひざ</rt></ruby>を<span class='ex-highlight'><ruby>屈<rt>くっ</rt></ruby>する</span>。", "cn": "屈膝。" }
        ],
        "practice": {
            "sentence": "彼はどんなに強い圧力をかけられても、決して<span class='blank-space'></span>ことはなかった。",
            "cn": "无论受到多强的压力，他都绝不屈服。",
            "answer": "くっする",
            "options": ["くっする", "さっする", "めぐる", "はえる"]
        }
    },
    {
        "word": "察する",
        "word_html": "<ruby>察<rt>さっ</rt></ruby>する",
        "tone": "0",
        "pos": "他サ",
        "mean": "察觉、推测；同情、体谅",
        "nuance": "1. 体察隐藏的情况或他人的心情。\n2. 设身处地为他人着想。",
        "examples": [
            { "jp": "<ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>を<span class='ex-highlight'><ruby>察<rt>さっ</rt></ruby>する</span>。", "cn": "察觉到危险。" },
            { "jp": "お<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちをお<span class='ex-highlight'><ruby>察<rt>さっ</rt></ruby>しします</span>。", "cn": "我很体谅您的心情。" }
        ],
        "practice": {
            "sentence": "友人の表情から何か悩みがあることを<span class='blank-space'></span>、声をかけた。",
            "cn": "从朋友的表情察觉到他似乎有烦恼，于是上前搭话。",
            "answer": "さっして",
            "options": ["さっして", "くっして", "よそおって", "とぼけて"]
        }
    },
    {
        "word": "巡る",
        "word_html": "<ruby>巡<rt>めぐ</rt></ruby>る",
        "tone": "0",
        "pos": "自五",
        "mean": "巡游、绕圈；循环；围绕",
        "nuance": "1. 绕着某个范围移动一圈或周游。\n2. 季节、血液等周期性重复。\n3. 特指以某事物为中心发生争议或动作。",
        "examples": [
            { "jp": "<ruby>名<rt>めい</rt></ruby><ruby>所<rt>しょ</rt></ruby>を<span class='ex-highlight'><ruby>巡<rt>めぐ</rt></ruby>る</span>。", "cn": "巡游名胜。" },
            { "jp": "<ruby>季<rt>き</rt></ruby><ruby>節<rt>せつ</rt></ruby>が<span class='ex-highlight'><ruby>巡<rt>めぐ</rt></ruby>る</span>。", "cn": "季节轮回。" },
            { "jp": "<ruby>遺<rt>い</rt></ruby><ruby>産<rt>さん</rt></ruby>を<span class='ex-highlight'><ruby>巡<rt>めぐ</rt></ruby>る</span><ruby>争<rt>あらそ</rt></ruby>い。", "cn": "围绕遗产的争夺。" }
        ],
        "practice": {
            "sentence": "環境問題を<span class='blank-space'></span>、激しい議論が交わされた。",
            "cn": "围绕环境问题，双方展开了激烈讨论。",
            "answer": "めぐって",
            "options": ["めぐって", "もえて", "はえて", "よそおって"]
        }
    },
    {
        "word": "燃える",
        "word_html": "<ruby>燃<rt>も</rt></ruby>える",
        "tone": "0",
        "pos": "自一",
        "mean": "燃烧；热情高涨",
        "nuance": "1. 起火。\n2. 充满热情、斗志。",
        "examples": [
            { "jp": "<ruby>家<rt>いえ</rt></ruby>が<span class='ex-highlight'><ruby>燃<rt>も</rt></ruby>えて</span>いる。", "cn": "房子在燃烧。" },
            { "jp": "<ruby>嫉<rt>しっ</rt></ruby><ruby>妬<rt>と</rt></ruby>に<span class='ex-highlight'><ruby>燃<rt>も</rt></ruby>えて</span><ruby>冷<rt>れい</rt></ruby><ruby>静<rt>せい</rt></ruby>さを<ruby>失<rt>うしな</rt></ruby>った。", "cn": "因嫉妒心燃起而失去冷静。" }
        ],
        "practice": {
            "sentence": "理想の実現に向けて、若者たちの心は情熱に<span class='blank-space'></span>。",
            "cn": "为了实现理想，年轻人们心中燃烧着热情。",
            "answer": "もえている",
            "options": ["もえている", "めぐっている", "はえている", "とぼけている"]
        }
    },
    {
        "word": "映える",
        "word_html": "<ruby>映<rt>は</rt></ruby>える",
        "tone": "2",
        "pos": "自一",
        "mean": "照耀、闪耀；显得好看、相得益彰",
        "nuance": "1. 受光线照射而显得美丽。\n2. 与周围环境或颜色搭配，显得格外显眼或漂亮。",
        "examples": [
            { "jp": "<ruby>夕<rt>ゆう</rt></ruby><ruby>日<rt>ひ</rt></ruby>に<span class='ex-highlight'><ruby>映<rt>は</rt></ruby>える</span><ruby>富<rt>ふ</rt></ruby><ruby>士<rt>じ</rt></ruby><ruby>山<rt>さん</rt></ruby>。", "cn": "夕阳照耀下的富士山。" },
            { "jp": "SNSでは<span class='ex-highlight'><ruby>映<rt>は</rt></ruby>える</span><ruby>写<rt>しゃ</rt></ruby><ruby>真<rt>しん</rt></ruby>が<ruby>好<rt>この</rt></ruby>まれる。", "cn": "社交网络上喜欢那些“上镜”的照片。" }
        ],
        "practice": {
            "sentence": "真っ白な雪景色に、彼女の赤いコートがよく<span class='blank-space'></span>。",
            "cn": "在纯白的雪景中，她的红色大衣格外醒目。",
            "answer": "はえる",
            "options": ["はえる", "もえる", "めぐる", "とぼける"]
        }
    },
    {
        "word": "装う",
        "word_html": "<ruby>装<rt>よそお</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "打扮、穿戴；假装、伪装",
        "nuance": "1. 修饰外表。\n2. 掩饰真相，表现出另一种样子。",
        "examples": [
            { "jp": "<ruby>春<rt>はる</rt></ruby>の<ruby>服<rt>ふく</rt></ruby>に<span class='ex-highlight'><ruby>装<rt>よそお</rt></ruby>う</span>。", "cn": "换上春装。" },
            { "jp": "<ruby>客<rt>きゃく</rt></ruby>を<span class='ex-highlight'><ruby>装<rt>よそお</rt></ruby>って</span><ruby>店<rt>みせ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>る。", "cn": "伪装成客人进店。" }
        ],
        "practice": {
            "sentence": "犯人は警察官を<span class='blank-space'></span>、堂々と建物に侵入した。",
            "cn": "犯人假扮成警察，大摇大摆地进入了建筑物。",
            "answer": "よそおって",
            "options": ["よそおって", "とぼけて", "さっして", "つまずいて"]
        }
    },
    {
        "word": "惚ける",
        "word_html": "<ruby>惚<rt>とぼ</rt></ruby>ける",
        "tone": "3",
        "pos": "自一",
        "mean": "装傻、佯装不知",
        "nuance": "1. 假装不知情或故意表现得无辜，装糊涂。",
        "examples": [
            { "jp": "わざと<span class='ex-highlight'><ruby>惚<rt>とぼ</rt></ruby>けた</span>ふりをしてごまかした。", "cn": "故意装傻蒙混过去了。" }
        ],
        "practice": {
            "sentence": "都合が悪くなるとすぐに<span class='blank-space'></span>、責任を逃れようとする。",
            "cn": "一遇到不方便的事，他就马上装糊涂，想逃避责任。",
            "answer": "とぼけて",
            "options": ["とぼけて", "よそおって", "くじけて", "さっして"]
        }
    }
];
const DAY13_WORDS = [
{
        "word": "揉める",
        "word_html": "<ruby>揉<rt>も</rt></ruby>める",
        "tone": "0",
        "pos": "自一",
        "mean": "起纠纷、发生争执",
        "nuance": "1. 因意见不合而产生摩擦或争吵。",
        "examples": [
            { "jp": "<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>で<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かれて、かなり<span class='ex-highlight'><ruby>揉<rt>も</rt></ruby>めた</span>。", "cn": "会议上意见不一，发生了激烈争论。" }
        ],
        "practice": {
            "sentence": "遺産相続の問題で親族間が<span class='blank-space'></span>、解決の糸口が見えない。",
            "cn": "因遗产继承问题，亲戚之间闹得不可开交，看不到解决的头绪。",
            "answer": "もめて",
            "options": ["もめて", "こじれて", "ぼやいて", "うなって"]
        }
    },
    {
        "word": "拗れる",
        "word_html": "<ruby>拗<rt>こじ</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "恶化、变复杂；(病情)加重、拖延",
        "nuance": "1. 事情或关系变得僵化，难以解决。\n2. 感冒等久治不愈。",
        "examples": [
            { "jp": "<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>との<ruby>仲<rt>なか</rt></ruby>が<span class='ex-highlight'><ruby>拗<rt>こじ</rt></ruby>れて</span>、<ruby>実<rt>じっ</rt></ruby><ruby>家<rt>か</rt></ruby>には<ruby>帰<rt>かえ</rt></ruby>っていない。", "cn": "和家人关系僵了，就没再回老家。" },
            { "jp": "アレルギーが<span class='ex-highlight'><ruby>拗<rt>こじ</rt></ruby>れて</span>、<ruby>呼<rt>こ</rt></ruby><ruby>吸<rt>きゅう</rt></ruby>が<ruby>苦<rt>くる</rt></ruby>しくなった。", "cn": "过敏反应恶化导致呼吸困难。" }
        ],
        "practice": {
            "sentence": "些細な誤解から人間関係が<span class='blank-space'></span>しまった。",
            "cn": "因一点小误会，人际关系变得复杂起来。",
            "answer": "こじれて",
            "options": ["こじれて", "もめて", "うなって", "いやして"]
        }
    },
    {
        "word": "捉える",
        "word_html": "<ruby>捉<rt>とら</rt></ruby>える",
        "tone": "3",
        "pos": "他一",
        "mean": "捕捉、抓住；看待、理解、认识；打动、吸引",
        "nuance": "1. 把握事物的本质、特征或机会。\n2. 将某事物理解为某种性质，或对其抱有某种认识。\n3. 牢牢抓住人心。",
        "examples": [
            { "jp": "チャンスを<span class='ex-highlight'><ruby>捉<rt>とら</rt></ruby>える</span>。", "cn": "抓住机会。" },
            { "jp": "<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>を<ruby>成<rt>せい</rt></ruby><ruby>長<rt>ちょう</rt></ruby>のチャンスとして<span class='ex-highlight'><ruby>捉<rt>とら</rt></ruby>える</span>。", "cn": "把失败看作是成长的机会。" },
            { "jp": "<ruby>読<rt>どく</rt></ruby><ruby>者<rt>しゃ</rt></ruby>の<ruby>心<rt>こころ</rt></ruby>を<span class='ex-highlight'><ruby>捉<rt>とら</rt></ruby>える</span>。", "cn": "打动读者的心。" }
        ],
        "practice": {
            "sentence": "彼の作品は、現代社会の問題点を鋭く<span class='blank-space'></span>ている。",
            "cn": "他的作品敏锐地捕捉到了现代社会的问题。",
            "answer": "とらえて",
            "options": ["とらえて", "いやして", "うなって", "からかって"]
        }
    },
    {
        "word": "癒やす",
        "word_html": "<ruby>癒<rt>い</rt></ruby>やす",
        "tone": "2",
        "pos": "他五",
        "mean": "治愈、疗愈；解乏、消除",
        "nuance": "1. 医治肉体或心灵的创伤。\n2. 解除疲劳或饥渴。",
        "examples": [
            { "jp": "<ruby>心<rt>こころ</rt></ruby>の<ruby>傷<rt>きず</rt></ruby>を<span class='ex-highlight'><ruby>癒<rt>い</rt></ruby>やす</span>。", "cn": "治愈心灵的创伤。" },
            { "jp": "<ruby>温<rt>おん</rt></ruby><ruby>泉<rt>せん</rt></ruby>で<ruby>疲<rt>つか</rt></ruby>れを<span class='ex-highlight'><ruby>癒<rt>い</rt></ruby>やす</span>。", "cn": "泡温泉消除疲劳。" }
        ],
        "practice": {
            "sentence": "美しい音楽には、疲れた心を<span class='blank-space'></span>力がある。",
            "cn": "美丽的音乐有治愈疲惫心灵的力量。",
            "answer": "いやす",
            "options": ["いやす", "とらえる", "うなる", "ののしる"]
        }
    },
    {
        "word": "唸る",
        "word_html": "<ruby>唸<rt>うな</rt></ruby>る",
        "tone": "2",
        "pos": "自五",
        "mean": "呻吟；轰鸣、低吼；赞叹、叫好",
        "nuance": "1. 因痛苦或用力而发出低沉的声音。\n2. 猛兽低吼，或机器、风等发出巨大的声响。\n3. 因极度佩服对方的技艺或作品而发出感叹。",
        "examples": [
            { "jp": "<ruby>痛<rt>いた</rt></ruby>みに<span class='ex-highlight'><ruby>唸<rt>うな</rt></ruby>る</span>。", "cn": "痛得呻吟。" },
            { "jp": "<ruby>犬<rt>いぬ</rt></ruby>が<ruby>低<rt>ひく</rt></ruby>く<span class='ex-highlight'><ruby>唸<rt>うな</rt></ruby>って</span><ruby>敵<rt>てき</rt></ruby>を<ruby>威<rt>い</rt></ruby><ruby>嚇<rt>かく</rt></ruby>した。", "cn": "狗低声咆哮着威吓敌人。" },
            { "jp": "<ruby>名<rt>めい</rt></ruby><ruby>人<rt>じん</rt></ruby>の<ruby>技<rt>わざ</rt></ruby>に<span class='ex-highlight'><ruby>唸<rt>うな</rt></ruby>る</span>。", "cn": "对名人的绝技赞叹不已。" }
        ],
        "practice": {
            "sentence": "あまりの腹痛に、ベッドの上で<span class='blank-space'></span>しまった。",
            "cn": "肚子疼得太厉害，在床上忍不住呻吟起来。",
            "answer": "うなって",
            "options": ["うなって", "どなって", "ぼやいて", "すねて"]
        }
    },
    {
        "word": "からかう",
        "word_html": "からかう",
        "tone": "3",
        "pos": "他五",
        "mean": "戏弄、嘲弄",
        "nuance": "1. 开玩笑地嘲笑或戏弄对方，寻开心。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<ruby>新<rt>あたら</rt></ruby>しい<ruby>髪<rt>かみ</rt></ruby><ruby>型<rt>がた</rt></ruby>を<span class='ex-highlight'>からかった</span>ら、ちょっと<ruby>怒<rt>おこ</rt></ruby>られた。", "cn": "打趣了一下她的新发型，结果被她小生气了一下。" }
        ],
        "practice": {
            "sentence": "子供が犬を<span class='blank-space'></span>遊んでいたら、噛まれそうになった。",
            "cn": "孩子逗狗玩，差点被咬。",
            "answer": "からかって",
            "options": ["からかって", "ぼやいて", "ののしって", "どなって"]
        }
    },
    {
        "word": "ぼやく",
        "word_html": "ぼやく",
        "tone": "2",
        "pos": "自/他五",
        "mean": "发牢骚、抱怨",
        "nuance": "1. 小声地抱怨不满、诉苦。",
        "examples": [
            { "jp": "<ruby>給<rt>きゅう</rt></ruby><ruby>料<rt>りょう</rt></ruby>が<ruby>安<rt>やす</rt></ruby>いと<span class='ex-highlight'>ぼやく</span>。", "cn": "发牢骚说工资低。" }
        ],
        "practice": {
            "sentence": "彼はいつも仕事の忙しさを<span class='blank-space'></span>ばかりで、何も改善しようとしない。",
            "cn": "他总是抱怨工作忙，却什么改善都不做。",
            "answer": "ぼやく",
            "options": ["ぼやく", "からかう", "うなる", "ののしる"]
        }
    },
    {
        "word": "罵る",
        "word_html": "<ruby>罵<rt>ののし</rt></ruby>る",
        "tone": "3",
        "pos": "他五",
        "mean": "谩骂、辱骂",
        "nuance": "1. 大声地用难听的话骂人。",
        "examples": [
            { "jp": "<ruby>怒<rt>いか</rt></ruby>りのあまり、<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>を<ruby>思<rt>おも</rt></ruby>わず<span class='ex-highlight'><ruby>罵<rt>ののし</rt></ruby>って</span>しまった。", "cn": "因为太生气，不由自主地骂了她。" }
        ],
        "practice": {
            "sentence": "人前で汚い言葉を使って相手を<span class='blank-space'></span>のはやめるべきだ。",
            "cn": "不应该在人前用难听的话辱骂对方。",
            "answer": "ののしる",
            "options": ["ののしる", "ぼやく", "からかう", "どなる"]
        }
    },
    {
        "word": "怒鳴る",
        "word_html": "<ruby>怒<rt>ど</rt></ruby><ruby>鳴<rt>な</rt></ruby>る",
        "tone": "2",
        "pos": "自/他五",
        "mean": "怒吼、大声斥责",
        "nuance": "1. 带有怒气地大声喊叫。",
        "examples": [
            { "jp": "<ruby>大<rt>おお</rt></ruby><ruby>声<rt>ごえ</rt></ruby>で<span class='ex-highlight'><ruby>怒<rt>ど</rt></ruby><ruby>鳴<rt>な</rt></ruby>る</span>。", "cn": "大声怒吼。" }
        ],
        "practice": {
            "sentence": "父親はいたずらをした息子を、顔を真っ赤にして<span class='blank-space'></span>。",
            "cn": "父亲气得满脸通红，对恶作剧的儿子大声吼了起来。",
            "answer": "どなった",
            "options": ["どなった", "ぼやいた", "からかった", "いきどおった"]
        }
    },
    {
        "word": "憤る",
        "word_html": "<ruby>憤<rt>いきどお</rt></ruby>る",
        "tone": "3",
        "pos": "自/他五",
        "mean": "愤慨、激愤",
        "nuance": "1. 对不公正、不讲理的事情感到强烈的愤怒。",
        "examples": [
            { "jp": "<ruby>社<rt>しゃ</rt></ruby><ruby>会<rt>かい</rt></ruby>の<ruby>不<rt>ふ</rt></ruby><ruby>正<rt>せい</rt></ruby>を<span class='ex-highlight'><ruby>憤<rt>いきどお</rt></ruby>る</span>。", "cn": "对社会的不正之风感到愤慨。" }
        ],
        "practice": {
            "sentence": "無実の罪で投獄された友人の不運に、彼は激しく<span class='blank-space'></span>。",
            "cn": "朋友因莫须有的罪名入狱，他为这份不幸感到强烈愤怒。",
            "answer": "いきどおった",
            "options": ["いきどおった", "どなった", "ののしった", "うらんだ"]
        }
    },
    {
        "word": "恨む",
        "word_html": "<ruby>恨<rt>うら</rt></ruby>む",
        "tone": "2",
        "pos": "他五",
        "mean": "怨恨、记恨；抱怨、责怪",
        "nuance": "1. 对别人对自己的作为感到不满而怀恨在心。\n2. 将不好的结果归咎于某事（如命运）。",
        "examples": [
            { "jp": "<ruby>人<rt>ひと</rt></ruby>を<span class='ex-highlight'><ruby>恨<rt>うら</rt></ruby>む</span>。", "cn": "怨恨别人。" },
            { "jp": "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>運<rt>うん</rt></ruby><ruby>命<rt>めい</rt></ruby>を<span class='ex-highlight'><ruby>恨<rt>うら</rt></ruby>む</span>。", "cn": "抱怨自己的命运。" }
        ],
        "practice": {
            "sentence": "自分の不注意でチャンスを逃したことを、いつまでも<span class='blank-space'></span>いても仕方がない。",
            "cn": "因为自己的疏忽错失机会，再怎么怨恨也没有用。",
            "answer": "うらんで",
            "options": ["うらんで", "にくんで", "すねて", "あなどって"]
        }
    },
    {
        "word": "憎む",
        "word_html": "<ruby>憎<rt>にく</rt></ruby>む",
        "tone": "2",
        "pos": "他五",
        "mean": "憎恶、厌恶",
        "nuance": "1. 出于某种观念或强烈的反感，极度讨厌某人或某事。",
        "examples": [
            { "jp": "<ruby>社<rt>しゃ</rt></ruby><ruby>会<rt>かい</rt></ruby>の<ruby>不<rt>ふ</rt></ruby><ruby>正<rt>せい</rt></ruby>を<span class='ex-highlight'><ruby>憎<rt>にく</rt></ruby>む</span>。", "cn": "憎恶社会的不正之风。" }
        ],
        "practice": {
            "sentence": "彼は戦争を激しく<span class='blank-space'></span>、平和活動に人生を捧げた。",
            "cn": "他强烈憎恨战争，把一生献给了和平活动。",
            "answer": "にくんで",
            "options": ["にくんで", "うらんで", "なめて", "まじえて"]
        }
    },
    {
        "word": "拗ねる",
        "word_html": "<ruby>拗<rt>す</rt></ruby>ねる",
        "tone": "2",
        "pos": "自一",
        "mean": "闹别扭、生闷气",
        "nuance": "1. 因心中不满而态度变得不顺从、赌气。",
        "examples": [
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>が<span class='ex-highlight'><ruby>拗<rt>す</rt></ruby>ねて</span><ruby>返<rt>へん</rt></ruby><ruby>事<rt>じ</rt></ruby>をしない。", "cn": "孩子闹别扭不答应。" }
        ],
        "practice": {
            "sentence": "欲しいおもちゃを買ってもらえず、子供が<span class='blank-space'></span>部屋に閉じこもってしまった。",
            "cn": "没给买想要的玩具，孩子闹别扭，把自己关进了房间。",
            "answer": "すねて",
            "options": ["すねて", "ぼやいて", "からかって", "うなって"]
        }
    },
    {
        "word": "舐める",
        "word_html": "<ruby>舐<rt>な</rt></ruby>める",
        "tone": "2",
        "pos": "他一",
        "mean": "舔；尝尽、经历；小看、轻视",
        "nuance": "1. 用舌头接触物体表面。\n2. 经历艰辛或苦难。\n3. 认为对方不如自己，不把对方放在眼里。",
        "examples": [
            { "jp": "<ruby>猫<rt>ねこ</rt></ruby>が<ruby>足<rt>あし</rt></ruby>を<span class='ex-highlight'><ruby>舐<rt>な</rt></ruby>める</span>。", "cn": "猫舔爪子。" },
            { "jp": "<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>の<ruby>苦<rt>く</rt></ruby><ruby>労<rt>ろう</rt></ruby>を<span class='ex-highlight'><ruby>舐<rt>な</rt></ruby>める</span>。", "cn": "饱尝人生的苦难。" },
            { "jp": "<ruby>人<rt>ひと</rt></ruby>を<span class='ex-highlight'><ruby>舐<rt>な</rt></ruby>めた</span>ような<ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>をとる。", "cn": "摆出一副瞧不起人的样子。" }
        ],
        "practice": {
            "sentence": "彼は若くして人生の辛酸を<span class='blank-space'></span>きた苦労人だ。",
            "cn": "他年纪轻轻就饱尝人生辛酸，是个吃过很多苦的人。",
            "answer": "なめて",
            "options": ["なめて", "すねて", "まじえて", "かわして"]
        }
    },
    {
        "word": "侮る",
        "word_html": "<ruby>侮<rt>あなど</rt></ruby>る",
        "tone": "3",
        "pos": "他五",
        "mean": "轻视、看不起",
        "nuance": "1. 低估对方的能力或价值，认为不值得重视。",
        "examples": [
            { "jp": "<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>チームを<span class='ex-highlight'><ruby>侮<rt>あなど</rt></ruby>った</span><ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby>、<ruby>負<rt>ま</rt></ruby>けてしまった。", "cn": "因为轻敌而输了比赛。" }
        ],
        "practice": {
            "sentence": "自然の力を<span class='blank-space'></span>はいけない。",
            "cn": "不能小看自然的力量。",
            "answer": "あなどって",
            "options": ["あなどって", "すねて", "ぼやいて", "どなって"]
        }
    },
    {
        "word": "交える",
        "word_html": "<ruby>交<rt>まじ</rt></ruby>える",
        "tone": "3",
        "pos": "他一",
        "mean": "掺杂、夹杂；交换",
        "nuance": "1. 把不同的东西混在一起。\n2. 交换意见或交锋。",
        "examples": [
            { "jp": "<ruby>冗<rt>じょう</rt></ruby><ruby>談<rt>だん</rt></ruby>を<span class='ex-highlight'><ruby>交<rt>まじ</rt></ruby>えて</span><ruby>話<rt>はな</rt></ruby>す。", "cn": "夹杂着玩笑说话。" },
            { "jp": "<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>を<span class='ex-highlight'><ruby>交<rt>まじ</rt></ruby>える</span>。", "cn": "交谈。" }
        ],
        "practice": {
            "sentence": "先生は自身の体験談を<span class='blank-space'></span>、わかりやすく説明してくれた。",
            "cn": "老师穿插自己的亲身经历，讲得很容易理解。",
            "answer": "まじえて",
            "options": ["まじえて", "かさねて", "あわせて", "そえて"]
        }
    },
    {
        "word": "交わす",
        "word_html": "<ruby>交<rt>か</rt></ruby>わす",
        "tone": "0",
        "pos": "他五",
        "mean": "互相、交换；互相...",
        "nuance": "1. 双方彼此进行同样的动作或交流。\n2. 接在动词第一连用形后，表示双方共同做某事。",
        "examples": [
            { "jp": "<ruby>挨<rt>あい</rt></ruby><ruby>拶<rt>さつ</rt></ruby>を<span class='ex-highlight'><ruby>交<rt>か</rt></ruby>わす</span>。", "cn": "互致问候。" },
            { "jp": "<ruby>微<rt>ほほ</rt></ruby><ruby>笑<rt>え</rt></ruby>み<span class='ex-highlight'><ruby>交<rt>か</rt></ruby>わす</span>。", "cn": "相视微笑。" }
        ],
        "practice": {
            "sentence": "試合終了のホイッスルが鳴ると、選手たちは互いに握手を<span class='blank-space'></span>。",
            "cn": "比赛结束哨声一响，选手们互相握手。",
            "answer": "かわした",
            "options": ["かわした", "まわした", "かわかした", "さわがした"],
            "optionWordIds": ["交わす", null, null, null]
        }
    },
    {
        "word": "正す",
        "word_html": "<ruby>正<rt>ただ</rt></ruby>す",
        "tone": "2",
        "pos": "他五",
        "mean": "纠正、改正；端正",
        "nuance": "1. 把错的改成对的，把乱的整理好。\n2. 使姿势或服装整齐。",
        "examples": [
            { "jp": "<ruby>乱<rt>みだ</rt></ruby>れた<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>を<span class='ex-highlight'><ruby>正<rt>ただ</rt></ruby>す</span>。", "cn": "端正散漫的生活。" },
            { "jp": "<ruby>服<rt>ふく</rt></ruby><ruby>装<rt>そう</rt></ruby>を<span class='ex-highlight'><ruby>正<rt>ただ</rt></ruby>して</span><ruby>出<rt>しゅっ</rt></ruby><ruby>席<rt>せき</rt></ruby>する。", "cn": "整理一下服装出席。" }
        ],
        "practice": {
            "sentence": "彼は襟を<span class='blank-space'></span>、真剣な表情で話を聞いていた。",
            "cn": "他整理好衣襟，神情认真地听着。",
            "answer": "ただして",
            "options": ["ただして", "ならして", "さらして", "もらして"]
        }
    },
    {
        "word": "紛れる",
        "word_html": "<ruby>紛<rt>まぎ</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "混淆、混入；忘却、分散",
        "nuance": "1. 混在其他事物中，难以分辨原本的特征。\n2. 注意力被转移，暂时忘记了原本的悲伤或疲惫。",
        "examples": [
            { "jp": "<ruby>人<rt>ひと</rt></ruby><ruby>込<rt>ご</rt></ruby>みに<span class='ex-highlight'><ruby>紛<rt>まぎ</rt></ruby>れて</span><ruby>彼<rt>かれ</rt></ruby>の<ruby>姿<rt>すがた</rt></ruby>を<ruby>見<rt>み</rt></ruby><ruby>失<rt>うしな</rt></ruby>った。", "cn": "他混在人群中消失了。" },
            { "jp": "<ruby>子<rt>こ</rt></ruby>どもたちの<ruby>笑<rt>わら</rt></ruby>い<ruby>声<rt>ごえ</rt></ruby>に<span class='ex-highlight'><ruby>紛<rt>まぎ</rt></ruby>れて</span>、<ruby>心<rt>こころ</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>し<ruby>和<rt>やわ</rt></ruby>らいだ。", "cn": "被孩子们的笑声冲淡了悲伤，心情稍微轻松了一点。" }
        ],
        "practice": {
            "sentence": "忙しさに<span class='blank-space'></span>、大切な約束を忘れてしまった。",
            "cn": "忙乱之中，我忘记了重要的约定。",
            "answer": "まぎれて",
            "options": ["まぎれて", "はぐれて", "みだれて", "こじれて"]
        }
    },
    {
        "word": "改める",
        "word_html": "<ruby>改<rt>あらた</rt></ruby>める",
        "tone": "4",
        "pos": "他一",
        "mean": "改变、更新；改正",
        "nuance": "1. 换成新的或改变原有的做法。\n2. 对行为、态度、习惯等进行改正或修改。",
        "examples": [
            { "jp": "<ruby>日<rt>ひ</rt></ruby>を<span class='ex-highlight'><ruby>改<rt>あらた</rt></ruby>めて</span><ruby>訪<rt>ほう</rt></ruby><ruby>問<rt>もん</rt></ruby>します。", "cn": "另选日期再进行拜访。" },
            { "jp": "<ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>を<span class='ex-highlight'><ruby>改<rt>あらた</rt></ruby>めて</span><ruby>再<rt>さい</rt></ruby><ruby>挑<rt>ちょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>する。", "cn": "改正态度后重新挑战。" }
        ],
        "practice": {
            "sentence": "正式な場では、服装を<span class='blank-space'></span>臨むべきだ。",
            "cn": "在正式场合，应该整理好服装再出席。",
            "answer": "あらためて",
            "options": ["あらためて", "たしかめて", "ながめて", "あきらめて"]
        }
    },
    {
        "word": "足掻く",
        "word_html": "<ruby>足<rt>あ</rt></ruby><ruby>掻<rt>が</rt></ruby>く",
        "tone": "2",
        "pos": "自五",
        "mean": "挣扎；拼命挣扎",
        "nuance": "1. 手脚乱动，想要挣脱。\n2. 想尽办法试图摆脱困境。",
        "examples": [
            { "jp": "<ruby>水<rt>すい</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>で<span class='ex-highlight'><ruby>足<rt>あ</rt></ruby><ruby>掻<rt>が</rt></ruby>く</span>。", "cn": "在水中挣扎。" },
            { "jp": "<ruby>借<rt>しゃっ</rt></ruby><ruby>金<rt>きん</rt></ruby>まみれの<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>から<ruby>抜<rt>ぬ</rt></ruby>け<ruby>出<rt>で</rt></ruby>そうと<span class='ex-highlight'><ruby>足<rt>あ</rt></ruby><ruby>掻<rt>が</rt></ruby>いている</span>。", "cn": "事到如今再怎么挣扎也晚了。" }
        ],
        "practice": {
            "sentence": "絶望的な状況でも、最後まで<span class='blank-space'></span>活路を見出そうとした。",
            "cn": "即使身处绝望境地，也要挣扎到最后，寻找出路。",
            "answer": "あがいて",
            "options": ["あがいて", "さわいで", "なげいて", "うごいて"]
        }
    },
    {
        "word": "もがく",
        "word_html": "もがく",
        "tone": "2",
        "pos": "自五",
        "mean": "挣扎、扭动；焦急挣扎",
        "nuance": "1. 因痛苦或束缚而手脚乱动。\n2. 拼命努力想要脱离困境。",
        "examples": [
            { "jp": "<ruby>水<rt>みず</rt></ruby>に<ruby>落<rt>お</rt></ruby>ちて<ruby>必<rt>ひっ</rt></ruby><ruby>死<rt>し</rt></ruby>に<span class='ex-highlight'>もがいた</span>。", "cn": "掉进水里后拼命挣扎。" },
            { "jp": "<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>諦<rt>あきら</rt></ruby>めたくなくて、<ruby>何<rt>なん</rt></ruby><ruby>年<rt>ねん</rt></ruby>も<span class='ex-highlight'>もがき<ruby>続<rt>つづ</rt></ruby>けた</span>。", "cn": "因为不想放弃梦想，挣扎了好几年。" }
        ],
        "practice": {
            "sentence": "ネットの網に絡まった魚が、逃げようとして激しく<span class='blank-space'></span>。",
            "cn": "被网缠住的鱼为了逃脱，正激烈挣扎着。",
            "answer": "もがいていた",
            "options": ["もがいていた", "かついでいた", "さばいていた", "くだいていた"]
        }
    },
    {
        "word": "継ぐ",
        "word_html": "<ruby>継<rt>つ</rt></ruby>ぐ",
        "tone": "0",
        "pos": "他五",
        "mean": "继承；拼接",
        "nuance": "1. 接替家业、地位、意志等。\n2. 把断开的东西接在一起。",
        "examples": [
            { "jp": "<ruby>家<rt>か</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>を<span class='ex-highlight'><ruby>継<rt>つ</rt></ruby>ぐ</span>。", "cn": "继承家业。" },
            { "jp": "<ruby>糸<rt>いと</rt></ruby>を<span class='ex-highlight'><ruby>継<rt>つ</rt></ruby>ぐ</span>。", "cn": "把线接上。" }
        ],
        "practice": {
            "sentence": "亡き父の遺志を<span class='blank-space'></span>、彼は若くして社長の座に就いた。",
            "cn": "他继承亡父的遗志，年纪轻轻就坐上了社长之位。",
            "answer": "ついで",
            "options": ["ついで", "はいで", "といで", "かいで"]
        }
    },
    {
        "word": "踏まえる",
        "word_html": "<ruby>踏<rt>ふ</rt></ruby>まえる",
        "tone": "3",
        "pos": "他一",
        "mean": "踩、踏；立足于、根据",
        "nuance": "1. 用力踩在某物上。\n2. 将某事物作为判断或思考的基础。",
        "examples": [
            { "jp": "<ruby>大<rt>だい</rt></ruby><ruby>地<rt>ち</rt></ruby>を<span class='ex-highlight'><ruby>踏<rt>ふ</rt></ruby>まえて</span><ruby>立<rt>た</rt></ruby>つ。", "cn": "脚踏大地站立。" },
            { "jp": "<ruby>現<rt>げん</rt></ruby><ruby>実<rt>じつ</rt></ruby>を<span class='ex-highlight'><ruby>踏<rt>ふ</rt></ruby>まえて</span><ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる。", "cn": "立足于现实制定计划。" }
        ],
        "practice": {
            "sentence": "現状の課題を<span class='blank-space'></span>上で、今後の対策を練る必要がある。",
            "cn": "需要在掌握现状课题的基础上，制定今后的对策。",
            "answer": "ふまえた",
            "options": ["ふまえた", "かまえた", "とらえた", "こらえた"]
        }
    },
    {
        "word": "晒す",
        "word_html": "<ruby>晒<rt>さら</rt></ruby>す",
        "tone": "0",
        "pos": "他五",
        "mean": "暴露；置于危险或视线中",
        "nuance": "1. 暴露在阳光、风雨等自然环境中。\n2. 使处于某种恶劣或引人注目的状态。",
        "examples": [
            { "jp": "<ruby>日<rt>にっ</rt></ruby><ruby>光<rt>こう</rt></ruby>に<span class='ex-highlight'><ruby>晒<rt>さら</rt></ruby>す</span>。", "cn": "暴露在阳光下。" },
            { "jp": "<ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>に<ruby>身<rt>み</rt></ruby>を<span class='ex-highlight'><ruby>晒<rt>さら</rt></ruby>す</span>。", "cn": "将自己置于危险之中。" }
        ],
        "practice": {
            "sentence": "恥を<span class='blank-space'></span>覚悟で、みんなの前で自分の失敗を告白した。",
            "cn": "他抱着丢脸的觉悟，在大家面前坦白了自己的失败。",
            "answer": "さらす",
            "options": ["さらす", "もらす", "ちらす", "こらす"]
        }
    },
];
const DAY14_WORDS = [
{
        "word": "否む",
        "word_html": "<ruby>否<rt>いな</rt></ruby>む",
        "tone": "2",
        "pos": "他五",
        "mean": "否认、拒绝",
        "nuance": "1. 不承认或拒绝接受。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>を<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>まで<span class='ex-highlight'><ruby>否<rt>いな</rt></ruby>んだ</span>。", "cn": "他到最后都否认自己的责任。" }
        ],
        "practice": {
            "sentence": "その事実は<span class='blank-space'></span>べくもない。",
            "cn": "这个事实无可否认。",
            "answer": "いなむ",
            "options": ["いなむ", "このむ", "にくむ", "あゆむ"]
        }
    },
    {
        "word": "収まる",
        "word_html": "<ruby>収<rt>おさ</rt></ruby>まる",
        "tone": "3",
        "pos": "自五",
        "mean": "容纳、装入；就任、安定；平息、解决",
        "nuance": "1. 恰好放进某个空间。\n2. 安于某个位置或状态。\n3. 纷乱、天气、情绪、疼痛等恢复平静。",
        "examples": [
            { "jp": "<ruby>本<rt>ほん</rt></ruby>が<ruby>本<rt>ほん</rt></ruby><ruby>棚<rt>だな</rt></ruby>に<span class='ex-highlight'><ruby>収<rt>おさ</rt></ruby>まる</span>。", "cn": "书放进了书架。" },
            { "jp": "<ruby>会<rt>かい</rt></ruby><ruby>長<rt>ちょう</rt></ruby>の<ruby>座<rt>ざ</rt></ruby>に<span class='ex-highlight'><ruby>収<rt>おさ</rt></ruby>まる</span>。", "cn": "就任会长之位。" },
            { "jp": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>の<ruby>喧<rt>けん</rt></ruby><ruby>嘩<rt>か</rt></ruby>がようやく<span class='ex-highlight'><ruby>収<rt>おさ</rt></ruby>まった</span>。", "cn": "两人的争吵终于平息了。" }
        ],
        "practice": {
            "sentence": "予算の範囲内に<span class='blank-space'></span>ように計画を立てた。",
            "cn": "制定计划时要确保控制在预算范围内。",
            "answer": "おさまる",
            "options": ["おさまる", "きまる", "はまる", "つまる"]
        }
    },
    {
        "word": "当てはめる",
        "word_html": "<ruby>当<rt>あ</rt></ruby>てはめる",
        "tone": "4",
        "pos": "他一",
        "mean": "适用、应用；套用",
        "nuance": "1. 把规则、条件等对应到具体事物上。\n2. 将事物硬套入某个固有的框架或公式。",
        "examples": [
            { "jp": "<ruby>規<rt>き</rt></ruby><ruby>則<rt>そく</rt></ruby>を<ruby>現<rt>げん</rt></ruby><ruby>実<rt>じつ</rt></ruby>に<span class='ex-highlight'><ruby>当<rt>あ</rt></ruby>てはめる</span>。", "cn": "把规则应用到现实中。" },
            { "jp": "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>基<rt>き</rt></ruby><ruby>準<rt>じゅん</rt></ruby>を<ruby>人<rt>ひと</rt></ruby>に<span class='ex-highlight'><ruby>当<rt>あ</rt></ruby>てはめる</span>。", "cn": "把自己的标准套用在别人身上。" }
        ],
        "practice": {
            "sentence": "昔の事例を現代にそのまま<span class='blank-space'></span>のは無理がある。",
            "cn": "把过去的案例原封不动套用到现代是不现实的。",
            "answer": "あてはめる",
            "options": ["あてはめる", "わりあてる", "くみあわせる", "うけいれる"]
        }
    },
    {
        "word": "もてなす",
        "word_html": "もてなす",
        "tone": "3",
        "pos": "他五",
        "mean": "款待、招待",
        "nuance": "1. 用心对待客人，提供优质的餐饮或服务。",
        "examples": [
            { "jp": "<ruby>手<rt>て</rt></ruby><ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>で<ruby>客<rt>きゃく</rt></ruby>を<span class='ex-highlight'>もてなす</span>。", "cn": "用亲手做的菜肴款待客人。" }
        ],
        "practice": {
            "sentence": "遠方からの来客を心を込めて<span class='blank-space'></span>。",
            "cn": "用心招待了远道而来的客人。",
            "answer": "もてなした",
            "options": ["もてなした", "もてあそんだ", "もてはやした", "もてあました"]
        }
    },
    {
        "word": "弁える",
        "word_html": "<ruby>弁<rt>わきま</rt></ruby>える",
        "tone": "4",
        "pos": "他一",
        "mean": "辨别、明辨；懂得、知晓",
        "nuance": "1. 清楚地判断事物的道理或是非。\n2. 在特定场合明白该有的常识、礼仪或自己的身份分寸。",
        "examples": [
            { "jp": "<ruby>善<rt>ぜん</rt></ruby><ruby>悪<rt>あく</rt></ruby>を<span class='ex-highlight'>わきまえる</span>。", "cn": "明辨善恶。" },
            { "jp": "<ruby>身<rt>み</rt></ruby>の<ruby>程<rt>ほど</rt></ruby>を<span class='ex-highlight'>わきまえる</span>。", "cn": "懂得自己的分寸。" }
        ],
        "practice": {
            "sentence": "公の場では、自分の立場を<span class='blank-space'></span>振る舞いが求められる。",
            "cn": "在公共场合，需要有符合自己立场的举止。",
            "answer": "わきまえた",
            "options": ["わきまえた", "ふまえた", "かまえた", "となえた"]
        }
    },
    {
        "word": "煽てる",
        "word_html": "<ruby>煽<rt>おだ</rt></ruby>てる",
        "tone": "0",
        "pos": "他一",
        "mean": "奉承、戴高帽",
        "nuance": "1. 说好话颂扬对方，使其得意忘形。",
        "examples": [
            { "jp": "<ruby>人<rt>ひと</rt></ruby>を<span class='ex-highlight'><ruby>煽<rt>おだ</rt></ruby>てて</span><ruby>木<rt>き</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>らせる。", "cn": "给人戴高帽让人得意忘形。" }
        ],
        "practice": {
            "sentence": "上司に<span class='blank-space'></span>、出世のチャンスを得ようとした。",
            "cn": "他奉承上司，想获得升职机会。",
            "answer": "おだてて",
            "options": ["おだてて", "あわてて", "かさねて", "へだてて"]
        }
    },
    {
        "word": "暮れる",
        "word_html": "<ruby>暮<rt>く</rt></ruby>れる",
        "tone": "0",
        "pos": "自一",
        "mean": "(时间)将尽、结束；沉浸在",
        "nuance": "1. 天色变暗，或一年、一季走到尽头。\n2. 一直处于某种悲伤或迷茫的状态中无法脱身。",
        "examples": [
            { "jp": "<ruby>秋<rt>あき</rt></ruby>が<span class='ex-highlight'><ruby>暮<rt>く</rt></ruby>れよう</span>としている。", "cn": "秋天将尽。" },
            { "jp": "<ruby>悲<rt>かな</rt></ruby>しみに<span class='ex-highlight'><ruby>暮<rt>く</rt></ruby>れる</span><ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby>だった。", "cn": "每天都沉浸在悲伤之中。" }
        ],
        "practice": {
            "sentence": "失敗続きで気持ちが<span class='blank-space'></span>、何も手につかない。",
            "cn": "接连失败让他心情灰暗，什么也做不下去。",
            "answer": "くれている",
            "options": ["くれている", "ぐれている", "ぬれている", "ずれている"]
        }
    },
    {
        "word": "図る",
        "word_html": "<ruby>図<rt>はか</rt></ruby>る",
        "tone": "2",
        "pos": "他五",
        "mean": "谋求、设法",
        "nuance": "1. 计划并努力实现某个目标。",
        "examples": [
            { "jp": "<ruby>自<rt>じ</rt></ruby><ruby>社<rt>しゃ</rt></ruby>の<ruby>利<rt>り</rt></ruby><ruby>益<rt>えき</rt></ruby>を<span class='ex-highlight'><ruby>図<rt>はか</rt></ruby>って</span>、<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>提<rt>てい</rt></ruby><ruby>案<rt>あん</rt></ruby>を<ruby>断<rt>ことわ</rt></ruby>った。", "cn": "为了本公司的利益，拒绝了对方的提案。" }
        ],
        "practice": {
            "sentence": "再起を<span class='blank-space'></span>ために、今はじっと耐える時期だ。",
            "cn": "为了东山再起，现在正是忍耐的时候。",
            "answer": "はかる",
            "options": ["はかる", "いのる", "さぐる", "たどる"]
        }
    },
    {
        "word": "志す",
        "word_html": "<ruby>志<rt>こころざ</rt></ruby>す",
        "tone": "4",
        "pos": "他五",
        "mean": "立志、志愿",
        "nuance": "1. 心中定下目标，并决心为之努力。",
        "examples": [
            { "jp": "<ruby>医<rt>い</rt></ruby><ruby>者<rt>しゃ</rt></ruby>を<span class='ex-highlight'><ruby>志<rt>こころざ</rt></ruby>して</span><ruby>医<rt>い</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>部<rt>ぶ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>った。", "cn": "立志成为医生而进入了医学院。" }
        ],
        "practice": {
            "sentence": "兄は政治家を<span class='blank-space'></span>、勉強に励んでいる。",
            "cn": "哥哥立志成为政治家，正在努力学习。",
            "answer": "こころざして",
            "options": ["こころざして", "こころみて", "こころがけて", "こころえて"]
        }
    },
    {
        "word": "暴れる",
        "word_html": "<ruby>暴<rt>あば</rt></ruby>れる",
        "tone": "0",
        "pos": "自一",
        "mean": "胡闹、施暴；大显身手、异常活跃",
        "nuance": "1. 动作粗暴地乱动，甚至破坏周围的事物。\n2. 不受约束地发挥巨大的能量。",
        "examples": [
            { "jp": "<ruby>酔<rt>よ</rt></ruby>っ<ruby>払<rt>ぱら</rt></ruby>いが<ruby>駅<rt>えき</rt></ruby><ruby>前<rt>まえ</rt></ruby>で<span class='ex-highlight'><ruby>暴<rt>あば</rt></ruby>れた</span>。", "cn": "醉汉在车站前闹事。" },
            { "jp": "<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>で<ruby>大<rt>おお</rt></ruby>いに<span class='ex-highlight'><ruby>暴<rt>あば</rt></ruby>れる</span>。", "cn": "在比赛中大显身手。" }
        ],
        "practice": {
            "sentence": "犯人は取り押さえられた際に<span class='blank-space'></span>、警官に怪我を負わせた。",
            "cn": "犯人被制服时激烈反抗，弄伤了警察。",
            "answer": "あばれて",
            "options": ["あばれて", "あずかって", "あやつって", "あやまって"]
        }
    },
    {
        "word": "翻す",
        "word_html": "<ruby>翻<rt>ひるがえ</rt></ruby>す",
        "tone": "3",
        "pos": "他五",
        "mean": "使...翻飞、飘动；突然改变；翻转身躯",
        "nuance": "1. 使旗帜、衣服等在风中飘扬。\n2. 迅速改变态度、意见、决定等。\n3. 轻快地转动身体以躲避或行动。",
        "examples": [
            { "jp": "<ruby>旗<rt>はた</rt></ruby>を<ruby>風<rt>かぜ</rt></ruby>に<span class='ex-highlight'><ruby>翻<rt>ひるがえ</rt></ruby>す</span>。", "cn": "让旗帜在风中飘扬。" },
            { "jp": "<ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>を<ruby>急<rt>きゅう</rt></ruby>に<span class='ex-highlight'><ruby>翻<rt>ひるがえ</rt></ruby>す</span>。", "cn": "态度发生一百八十度大转变。" },
            { "jp": "<ruby>身<rt>み</rt></ruby>を<span class='ex-highlight'><ruby>翻<rt>ひるがえ</rt></ruby>して</span><ruby>逃<rt>に</rt></ruby>げる。", "cn": "猛地转身逃跑。" }
        ],
        "practice": {
            "sentence": "彼は非難を浴びると、すぐに前言を<span class='blank-space'></span>。",
            "cn": "他一受到指责，就马上推翻前言。",
            "answer": "ひるがえした",
            "options": ["ひるがえした", "ひきかえした", "くりかえした", "うらがえした"]
        }
    },
    {
        "word": "塞ぐ",
        "word_html": "<ruby>塞<rt>ふさ</rt></ruby>ぐ",
        "tone": "0",
        "pos": "自/他五",
        "mean": "堵住、封死；占据、挡住；郁闷、心情沉重",
        "nuance": "1. 物理上填满孔洞、缝隙，或挡住道路。\n2. 占据空间，或遮挡视线及光线。\n3. 心情不畅快。",
        "examples": [
            { "jp": "<ruby>穴<rt>あな</rt></ruby>を<span class='ex-highlight'><ruby>塞<rt>ふさ</rt></ruby>ぐ</span>。", "cn": "把洞堵上。" },
            { "jp": "<ruby>荷<rt>に</rt></ruby><ruby>物<rt>もつ</rt></ruby>が<ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>を<span class='ex-highlight'><ruby>塞<rt>ふさ</rt></ruby>ぐ</span>。", "cn": "行李占地方。" },
            { "jp": "<ruby>気<rt>き</rt></ruby><ruby>分<rt>ぶん</rt></ruby>が<span class='ex-highlight'><ruby>塞<rt>ふさ</rt></ruby>ぐ</span>。", "cn": "心情郁闷。" }
        ],
        "practice": {
            "sentence": "梅雨明けを待ちわびるあまり、<ruby>曇<rt>くも</rt></ruby>り<ruby>空<rt>ぞら</rt></ruby>を<ruby>見<rt>み</rt></ruby>るたびに<ruby>心<rt>こころ</rt></ruby>が<span class='blank-space'></span>。",
            "cn": "因为盼着梅雨结束，每次看到阴天心情就郁闷。",
            "answer": "ふさぐ",
            "options": ["ふさぐ", "つなぐ", "あおぐ", "そよぐ"]
        }
    },
    {
        "word": "紡ぐ",
        "word_html": "<ruby>紡<rt>つむ</rt></ruby>ぐ",
        "tone": "2",
        "pos": "他五",
        "mean": "纺；编织、组织",
        "nuance": "1. 把棉、麻等纤维抽出并纺成纱线。\n2. 将词语精心组合成文章、故事，或比喻人际羁绊的连结。",
        "examples": [
            { "jp": "<ruby>綿<rt>わた</rt></ruby>から<ruby>糸<rt>いと</rt></ruby>を<span class='ex-highlight'><ruby>紡<rt>つむ</rt></ruby>ぐ</span>。", "cn": "把棉花纺成线。" },
            { "jp": "<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>を<span class='ex-highlight'><ruby>紡<rt>つむ</rt></ruby>ぐ</span>。", "cn": "用心诉说。" }
        ],
        "practice": {
            "sentence": "古い伝説を新しい言葉で<span class='blank-space'></span>、子どもたちに伝えることにした。",
            "cn": "他用新的语言编织古老传说，决定讲给孩子们听。",
            "answer": "つむんで",
            "options": ["つむんで", "つぐんで", "はぐくんで", "めぐんで"]
        }
    },
    {
        "word": "躱す",
        "word_html": "<ruby>躱<rt>かわ</rt></ruby>す",
        "tone": "0",
        "pos": "他五",
        "mean": "躲闪、避开；巧妙地回避、搪塞",
        "nuance": "1. 敏捷地避开飞来的物体或物理攻击。\n2. 避开难以回答的问题或他人的锋芒，不作正面交锋。",
        "examples": [
            { "jp": "<ruby>敵<rt>てき</rt></ruby>の<ruby>攻<rt>こう</rt></ruby><ruby>撃<rt>げき</rt></ruby>を<ruby>身<rt>み</rt></ruby><ruby>軽<rt>がる</rt></ruby>に<span class='ex-highlight'><ruby>躱<rt>かわ</rt></ruby>す</span>。", "cn": "轻巧地躲开敌人的攻击。" },
            { "jp": "<ruby>鋭<rt>するど</rt></ruby>い<ruby>質<rt>しつ</rt></ruby><ruby>問<rt>もん</rt></ruby>を<span class='ex-highlight'><ruby>躱<rt>かわ</rt></ruby>す</span>。", "cn": "巧妙地回避尖锐的问题。" }
        ],
        "practice": {
            "sentence": "記者たちの質問をのらりくらりと<span class='blank-space'></span>。",
            "cn": "他对记者们的问题东拉西扯地躲了过去。",
            "answer": "かわした",
            "options": ["かわした", "かわいた", "かよった", "かさなった"],
            "optionWordIds": ["躱す", null, null, null]
        }
    },
    {
        "word": "値する",
        "word_html": "<ruby>値<rt>あたい</rt></ruby>する",
        "tone": "0",
        "pos": "自サ",
        "mean": "值得、配得上；相当于……的价值",
        "nuance": "1. 具有某种内涵，值得受到某种评价、待遇或值得去做某事。\n2. 在价格、数字或地位等客观事实上等同。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>尊<rt>そん</rt></ruby><ruby>敬<rt>けい</rt></ruby>に<span class='ex-highlight'><ruby>値<rt>あたい</rt></ruby>する</span><ruby>人<rt>じん</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>だ。", "cn": "他是个值得尊敬的人物。" },
            { "jp": "<ruby>一<rt>いっ</rt></ruby><ruby>千<rt>せん</rt></ruby><ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>に<span class='ex-highlight'><ruby>値<rt>あたい</rt></ruby>する</span><ruby>宝<rt>ほう</rt></ruby><ruby>石<rt>せき</rt></ruby>。", "cn": "价值一千万日元的宝石。" }
        ],
        "practice": {
            "sentence": "この作品は一読に<span class='blank-space'></span>。",
            "cn": "这部作品值得一读。",
            "answer": "あたいする",
            "options": ["あたいする", "くっする", "めんする", "そうする"]
        }
    },
];      
// Combine all words
const ALL_DEFINED_WORDS = [...DAY1_WORDS, ...DAY2_WORDS, ...DAY3_WORDS, ...DAY4_WORDS, ...DAY5_WORDS, ...DAY6_WORDS, ...DAY7_WORDS, ...DAY8_WORDS, ...DAY9_WORDS, ...DAY10_WORDS, ...DAY11_WORDS, ...DAY12_WORDS, ...DAY13_WORDS, ...DAY14_WORDS];

// Generate full list for 15 days * 20 words = 300 words
const FULL_WORD_LIST = [];
for (let i = 0; i < 300; i++) {
    // Use ALL_DEFINED_WORDS data
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
const TOTAL_DAYS = 14;
