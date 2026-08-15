(function () {
    'use strict';
    const root = window.ReadingAnalysisData = window.ReadingAnalysisData || {};
    root.N1 = root.N1 || {};
    root.N1.search = {
  "2010.12": [
    {
      "id": "n1-search-2010-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "日本国内の大学院で、理学、工学、農学の分野を専攻している者",
        "2010年4月時点で、修士課程の1年次、博士課程の1年次か2年次に在籍している者、または修士課程の2年次で、2011年4月に博士課程進学を予定している者"
      ],
      "options": [
        {
          "number": 1,
          "text": "ソムシリーさん",
          "translation": "ソムシリーさん",
          "correct": false,
          "error": "opposite",
          "explanation": "ソムシリー在2011年预定领取其他奖学金为“有”，违反了海报中「他の…奨学金支給を受けない者」（不接受其他奖学金者，此处使用动词「ない形」表示否定限制）的规定。"
        },
        {
          "number": 2,
          "text": "ワンさん",
          "translation": "ワンさん",
          "correct": true,
          "error": null,
          "explanation": "ワン（王同学）是中国国籍、博士2年级、专攻农学、成绩2.9（满足2.8以上）、无其他奖学金，完美符合海报中罗列的所有报名资格。"
        },
        {
          "number": 3,
          "text": "アフマドさん",
          "translation": "アフマドさん",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "アフマド专攻的是“法学”，违反了海报中仅限「理学、工学、農学の分野」（理学、工学、农学领域）的规定。"
        },
        {
          "number": 4,
          "text": "ジョンさん",
          "translation": "ジョンさん",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "ジョン是“学部4年”（本科4年级），违反了海报中「日本国内の大学院で」（必须在日本国内的研究生院）的要求。"
        }
      ]
    },
    {
      "id": "n1-search-2010-12-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "在籍大学院の指導教授からの推薦書",
        "研究計画書（3000字以内）、書式は自由"
      ],
      "options": [
        {
          "number": 1,
          "text": "ホームページから研究計画書の様式をダウンロードする。",
          "translation": "从官网上下载研究计划书的格式样式。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "海报中关于研究计划书有明确标注：「書式は自由」（格式自由），因此无需从官网下载特定样式。"
        },
        {
          "number": 2,
          "text": "博士課程進学が決定していることを証明する書類をもらう。",
          "translation": "获取已决定升入博士课程的证明材料。",
          "correct": false,
          "error": "not-stated",
          "explanation": "海报中「①提出書類」（提交材料）一栏里，并未要求提供“已决定升入博士的证明文件”。"
        },
        {
          "number": 3,
          "text": "出身大学の指導教授の推薦書を取り寄せる。",
          "translation": "索要本科原毕业大学导师的推荐信。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "海报规定的是「在籍大学院の指導教授からの推薦書」（目前在读研究生院导师的推荐信），而不是选项中说的「出身大学」（本科毕业大学）的导师推荐信。"
        },
        {
          "number": 4,
          "text": "応募書類を大学院の事務所に提出する。",
          "translation": "将报名材料提交给研究生院的办公室。",
          "correct": true,
          "error": null,
          "explanation": "海报在截止日期下方专门注明：「申請者が直接応募するのではなく、必ず所属の大学院を通じて応募すること」（申请者不得直接报名，必须通过所属研究生院报名），这与选项中“将材料提交给研究生院办公室”恰好契合。"
        }
      ]
    }
  ],
  "2010.7": [
    {
      "id": "n1-search-2010-7-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "清森市内の秋を題材にしたもの。",
        "絵画部門に出品する作品は、イラスト、水彩画、油絵、どれでも可。"
      ],
      "options": [
        {
          "number": 1,
          "text": "清森高校に通っていたとき入賞した秋の風景画",
          "translation": "在清森高中上学时曾获奖的秋季风景画",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "「入賞した」（曾获奖）违反了「未発表のものに限ります」（仅限未发表）以及不得在其他比赛获奖的规定。"
        },
        {
          "number": 2,
          "text": "清森市にある清森温泉の紅葉の油絵とイラスト",
          "translation": "清森市内清森温泉的红叶油画和插画",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "两者同属「絵画部門」，违反了「各部門1人1点に限ります」（各部门每人限1件）的规定。"
        },
        {
          "number": 3,
          "text": "清森市にある清森公園で撮った春の木々の写真",
          "translation": "在清森市内清森公园拍摄的春季树木照片",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "「春の木々」（春季树木）违反了「秋を題材にしたもの」（以秋天为题材）的规定。"
        },
        {
          "number": 4,
          "text": "去年清森市で行われた秋祭りの写真と水彩画",
          "translation": "去年在清森市举行的秋季祭典的照片和水彩画",
          "correct": true,
          "error": null,
          "explanation": "满足「秋を題材」（秋天题材）；因为规定写明「制作年は問わない」（使用动词「問う」的ない形表示年份不限），所以去年的也没问题；且分属摄影和绘画两部门，满足「各部門1人1点」的要求。"
        }
      ]
    },
    {
      "id": "n1-search-2010-7-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "清森市のホームページ上に1月15日に発表します。入賞者には1月中に結果を郵送します。電話および窓口での問い合わせには応じられません。",
        "2011年2月下旬（予定）最優秀賞と優秀賞の方には、表彰式で賞状および副賞をお渡しします。"
      ],
      "options": [
        {
          "number": 1,
          "text": "1月中旬に清森市のホームページを見る。",
          "translation": "1月中旬查看清森市的官方主页。",
          "correct": true,
          "error": null,
          "explanation": "原文写明「ホームページ上に1月15日に発表します」（1月15日在主页公布），15日即属于「1月中旬」。"
        },
        {
          "number": 2,
          "text": "1月中旬に直接、観光係に電話して聞く。",
          "translation": "1月中旬直接打电话给观光组询问。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文明确规定，使用了被动态的否定形式：「電話および窓口での問い合わせには応じられません」（不接受电话及窗口咨询）。"
        },
        {
          "number": 3,
          "text": "2月下旬に市役所の窓口に問い合わせる。",
          "translation": "2月下旬前往市政府窗口咨询。",
          "correct": false,
          "error": "relation-error",
          "explanation": "理由同上，不接受窗口（窓口）的咨询。"
        },
        {
          "number": 4,
          "text": "2月下旬に届く予定の通知を待つ。",
          "translation": "等待预定于2月下旬寄到的通知。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "邮寄通知的时间是「1月中」（1月内），选项中的「2月下旬」其实是「表彰式」（表彰仪式）的时间。"
        }
      ]
    }
  ],
  "2011.12": [
    {
      "id": "n1-search-2011-12-01",
      "questionNumber": 1,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "中学生以上の一般市民を対象に、便利な道具のアイデアを募集します。",
        "片手で簡単に操作できる道具のアイデア"
      ],
      "options": [
        {
          "number": 1,
          "text": "山田さん",
          "translation": "山田さん",
          "correct": false,
          "error": "relation-error",
          "explanation": "山田是“小学生”，不满足报名资格中年龄限制的条件：「中学生以上の一般市民」（初中生以上的普通市民）。"
        },
        {
          "number": 2,
          "text": "鈴木さん",
          "translation": "鈴木さん",
          "correct": false,
          "error": "relation-error",
          "explanation": "铃木的课题满足“单手操作”，但她能提交的东西是「アイデアのメモ」（点子的备忘录），不符合「アイデア部門」报名需提交「イラストが必要です」（需要插图）这一条件。"
        },
        {
          "number": 3,
          "text": "チェンさん",
          "translation": "チェンさん",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "陈的课题是“好开且不易漏的水壶”，未能体现“单手操作”，不符合「特定課題：片手で…」（单手简单操作）的课题要求。且他提交的「試作品」也不符合该部门需提交插图的规定。"
        },
        {
          "number": 4,
          "text": "川村さん",
          "translation": "川村さん",
          "correct": true,
          "error": null,
          "explanation": "川村是“大学生”（满足初中以上要求）；作品是“单手轻松输入的键盘”（满足单手操作的特定课题）；能够提交“插图”（满足该部门的材料要求）。各项条件均准确对应。"
        }
      ]
    },
    {
      "id": "n1-search-2011-12-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "機器の実物の動きや使い方がわかるような動画が必要です。",
        "一次審査は実物の動画を含めた書類審査、二次審査は模型および書類審査です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "アイデア部門の自由課題に応募し、作品のイラストを提出する。",
          "translation": "报名点子部门的自由课题，并提交作品的插图。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "前川先生希望能针对实物进行审查，而「アイデア部門」在获奖后才会被制作成试制品（「試作品が作られます」，此处使用动词被动态），且只需提交插图，不符合前川的诉求。"
        },
        {
          "number": 2,
          "text": "アイデア部門の自由課題に応募し、模型とイラストを提出する。",
          "translation": "报名点子部门的自由课题，并提交模型和插图。",
          "correct": false,
          "error": "not-stated",
          "explanation": "除了选错部门之外，「アイデア部門」的报名也只需插图（イラストが必要です），并未要求提交模型。"
        },
        {
          "number": 3,
          "text": "開発部門に応募し、実物の動きなどがわかるような動画を提出する。",
          "translation": "报名开发部门，并提交能看清实物动作等情况的视频。",
          "correct": true,
          "error": null,
          "explanation": "前川希望实物被审查，应选「開発部門」，因为该部门的一次审查就是「実物の動画を含めた書類審査」（包含实物视频的材料审查）。而报名阶段所需的材料，原文也明确写道：「開発部門の応募には、機器の実物の動きや使い方がわかるような動画が必要です」（需要能看清机器实物动作的视频），准确契合选项3。"
        },
        {
          "number": 4,
          "text": "開発部門に応募し、実物の動きなどを記録した動画と実物を提出する。",
          "translation": "报名开发部门，并提交记录实物动作等情况的视频和实物本身。",
          "correct": false,
          "error": "not-stated",
          "explanation": "虽然选对了部门，但在报名阶段（応募の段階で），原文并未要求直接提交「実物」（实物本身），只要求提交视频。提交实物属于过度添加条件。"
        }
      ]
    }
  ],
  "2011.7": [
    {
      "id": "n1-search-2011-7-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "① 中国料理店スタッフ 食器洗い、材料の準備 800 水曜定休10:00―14:00 週3回以上なるべく多く勤務できる方を望む",
        "② 日本そば屋スタッフ 注文を取る・料理を出す等の接客、後片付け 900 月曜定休10:00―21:00 週2回以上時間は相談可"
      ],
      "options": [
        {
          "number": 1,
          "text": "①中国料理店スタッフ",
          "translation": "①中餐馆员工",
          "correct": false,
          "error": "opposite",
          "explanation": "工作时间为「10:00-14:00」，与小李仅能在下午3点到晚上9点工作（15:00-21:00の間しか働けない，此处的「ない」是动词可能态「働ける」的否定形）的时间要求不符。"
        },
        {
          "number": 2,
          "text": "②日本そば屋スタッフ",
          "translation": "②日式荞麦面店员工",
          "correct": true,
          "error": null,
          "explanation": "工作时间为「10:00-21:00」，包含了15:00-21:00；条件是「週2回以上」，满足小李每周打3次工的要求。其时薪为900日元，比④（800日元）更高，因此工资最多。"
        },
        {
          "number": 3,
          "text": "③居酒屋スタッフ",
          "translation": "③居酒屋员工",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "工作条件里明确要求「1回は必ず23:00まで」（必须有一次工作到23:00），而小李只能工作到晚上9点，时间要求不匹配。"
        },
        {
          "number": 4,
          "text": "④コンビニ店員",
          "translation": "④便利店店员",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "班次(2)为「15:00-21:00」，时间上满足。但在22点前，其时薪为800日元，比②的900日元低，不符合“工资最高（一番給料が多い）”的条件。"
        }
      ]
    },
    {
      "id": "n1-search-2011-7-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "⑦ 新製品宣伝スタッフ スーパーで新製品（飲み物）をお客様に紹介する 1000 7月の土・日曜9:00―18:00のうち3時間以上 7月中に2日以上勤務できる人",
        "⑧ 引っ越しアシスタント 荷物を造る、荷物の出し入れ 950 毎日原則9:00―17:00（残業あり） 1日だけでも可"
      ],
      "options": [
        {
          "number": 1,
          "text": "1つ",
          "translation": "一项",
          "correct": false,
          "error": "relation-error",
          "explanation": "符合条件的工作不止1个，请参考选项3的详细分析。"
        },
        {
          "number": 2,
          "text": "2つ",
          "translation": "两项",
          "correct": false,
          "error": "relation-error",
          "explanation": "符合条件的工作不止2个，请参考选项3的详细分析。"
        },
        {
          "number": 3,
          "text": "3つ",
          "translation": "三项",
          "correct": true,
          "error": null,
          "explanation": "山田同学是“大学生”，且只想在7月里进行“1天或2天的短期打工（1日か2日だけ）”。核对表格中的「条件」一栏： ⑦新产品宣传：「7月中に2日以上」（7月内做2天以上即可），符合。 ⑧搬家助手：「1日だけでも可」（仅1天也可以），符合。 ⑨监考辅助：「7月25日のみ」（仅7月25日一天），且条件标明「大学生」，符合。 其他工作大部分要求「長期できる人」（能长期做）或每周固定次数，均不符合短期要求。因此共有3个工作符合。"
        },
        {
          "number": 4,
          "text": "4つ",
          "translation": "四项",
          "correct": false,
          "error": "relation-error",
          "explanation": "符合条件的短期工作只有⑦、⑧、⑨这3个，没有第4个。"
        }
      ]
    }
  ],
  "2012.12": [
    {
      "id": "n1-search-2012-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "隔月でお送りいたします。",
        "すべての公演のチケットを会員割引価格でお求めいただけます（一般会員10％引、学生会員15％引）。"
      ],
      "options": [
        {
          "number": 1,
          "text": "東西劇場の情報が掲載されている会報誌を毎月受け取ることができる。",
          "translation": "每个月都可以收到刊载着东西剧场信息的会刊。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文第一项福利明确写着会刊是「隔月でお送りいたします」（每两月寄送一次），而不是选项所说的「毎月」（每个月）。"
        },
        {
          "number": 2,
          "text": "東西劇場で行われる公演をすべて１５％割引で観劇することができる。",
          "translation": "在东西剧场举行的所有公演都可以享受15%（打85折）的折扣观看。",
          "correct": true,
          "error": null,
          "explanation": "萨拉是大学学生，身份对应「学生会員」。原文第二项福利标明：「すべての公演のチケットを…学生会員15％引」（所有公演门票，学生会员享15%折扣），各项要素准确对应。"
        },
        {
          "number": 3,
          "text": "東西劇場と系列劇場で行われる公演をすべて割引で見ることができる。",
          "translation": "东西剧场和系列剧场举行的所有公演都可以享受折扣观看。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文在第二项福利后半句指出：「系列劇場の公演にも一部割引を受けられるものがあります」（系列剧场的公演也有【部分】可享受折扣）。选项将其扩大为系列剧场的“所有公演”都能打折，与原文不符。"
        },
        {
          "number": 4,
          "text": "東西劇場と系列劇場の売店で１０％割引で買い物をすることができる。",
          "translation": "在东西剧场和系列剧场的商店都可以享受10%（打9折）的折扣购物。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文第三项福利说明了商店的折扣额度：「東西劇場10％引、系列劇場5％引」。选项说两家商店都能打10%折，这与系列商店仅打5%折的事实不符。"
        }
      ]
    },
    {
      "id": "n1-search-2012-12-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "一般会員の方は、事務局で入会費のお支払いおよび年会費振替用の金融機関口座のご登録をお願いします"
      ],
      "options": [
        {
          "number": 1,
          "text": "事務局で入会費と年会費を直接払う。",
          "translation": "在事务局直接支付入会费和年会费。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "袁先生是公司职员，对应「一般会員」。入会手续的第二段说明：一般会员在事务局仅需直接支付入会费（入会費のお支払い），而年会费是通过办理自动转账手续后续扣除的，不需要直接支付（直接払う）。"
        },
        {
          "number": 2,
          "text": "金融機関で入会費と年会費を振り込む。",
          "translation": "在金融机构转账汇入入会费和年会费。",
          "correct": false,
          "error": "not-stated",
          "explanation": "入会费是在事务局直接支付的，且并未要求自行去金融机构进行转账汇款（振り込む）。"
        },
        {
          "number": 3,
          "text": "事務局で入会費を直接払い、年会費の自動振替の手続きもする。",
          "translation": "在事务局直接支付入会费，并办理年会费自动转账的手续。",
          "correct": true,
          "error": null,
          "explanation": "精准契合了一般会员的入会手续：「事務局で入会費のお支払いおよび年会費振替用の金融機関口座のご登録をお願いします」（请在事务局支付入会费，并登记用于转账年会费的金融机构账户），即在事务局完成这两项手续。"
        },
        {
          "number": 4,
          "text": "事務局で入会費を直接払い、金融機関で年会費の自動振替の手続きをする。",
          "translation": "在事务局直接支付入会费，在金融机构办理年会费自动转账的手续。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "选项错在“在金融机构办理转账手续”（金融機関で...手続きをする）。根据原文，登记银行账户的自动转账手续同样是在「事務局で」（事务局）统一办理的。"
        }
      ]
    }
  ],
  "2012.7": [
    {
      "id": "n1-search-2012-7-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "毎回講師と新聞記事を読みながら英語力を身につける。",
        "毎週木曜"
      ],
      "options": [
        {
          "number": 1,
          "text": "①",
          "translation": "①",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "①号课程主要针对基础的听和说（「聞く・話す」を中心とした），无法满足“想读英文报纸”的需求。"
        },
        {
          "number": 2,
          "text": "②",
          "translation": "②",
          "correct": true,
          "error": null,
          "explanation": "山田的需求是“读报纸”以及“平日（工作日）上课”（原句使用「しか～ない」表限定）。②号课程包含“边读报纸文章边学习”（新聞記事を読みながら），且时间是“每周四”（毎週木曜），完美符合这两项要求。"
        },
        {
          "number": 3,
          "text": "③",
          "translation": "③",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "③号课程是入门级别的听力和日常会话，没有关于阅读报纸的内容，且时间是“每周六”（周末），与只能工作日上课的要求不符。"
        },
        {
          "number": 4,
          "text": "④",
          "translation": "④",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "④号课程虽然包含了“杂志和报纸等的阅读”（雑誌や新聞などの読解もあり），但上课时间是“每周日”（毎週日曜），违反了只能在工作日（平日）上课的限制条件。"
        }
      ]
    },
    {
      "id": "n1-search-2012-7-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "必ず事前に見学をして、ご自分のレベルに合っているかどうかを確認してからお申し込みください。",
        "受講の予約、申し込みはお電話で。"
      ],
      "options": [
        {
          "number": 1,
          "text": "見学をしてレベルを確認してから、電話で受講を申し込む。",
          "translation": "参观并确认水平后，通过电话报名听课。",
          "correct": true,
          "error": null,
          "explanation": "关于④号讲座，其介绍中明确要求“务必事前参观确认水平后再报名”（必ず事前に見学をして…確認してからお申し込みください）。而底部的通用报名规定则写明“报名通过电话进行”（申し込みはお電話で）。将这两者结合，即为选项1所述内容。"
        },
        {
          "number": 2,
          "text": "会館に行って総合パンフレットをもらい、窓口で申し込む。",
          "translation": "去会馆拿综合宣传册，在窗口报名。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "底部的通用报名规定中明确指出“窗口不办理报名”（窓口では、申し込み…はいたしません），因此去窗口报名是错误的。"
        },
        {
          "number": 3,
          "text": "電話で受講申込書を送ってもらい、会館に行って申し込む。",
          "translation": "通过电话让人把报名表寄过来，然后去会馆报名。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "同样地，规定中指明必须通过“电话”报名，而不是亲自去会馆报名（会館に行って申し込む）。"
        },
        {
          "number": 4,
          "text": "事前見学の予約をし、見学後、郵便局で受講料を振り込む。",
          "translation": "预约事前参观，参观后在邮局汇入听课费。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "汇款需通过“银行”（銀行から受講料を振り込んで），而不是邮局（郵便局）。"
        }
      ]
    }
  ],
  "2013.12": [
    {
      "id": "n1-search-2013-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "栽培する野菜や花は、農園によって決められています",
        "自由に野菜や花の栽培が楽しめます。"
      ],
      "options": [
        {
          "number": 1,
          "text": "①",
          "translation": "①",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "①号农园在特征栏中标明「栽培する野菜や花は、農園によって決められています」（栽培的蔬菜由农园决定，使用被动态），这与穆迪想自己决定种什么的要求不符。"
        },
        {
          "number": 2,
          "text": "②",
          "translation": "②",
          "correct": true,
          "error": null,
          "explanation": "穆迪有两个要求：1.“想自己决定种什么”，2.“希望有人教怎么种”。核对表格，②号农园既能「自由に野菜や花の栽培が楽しめます」（自由享受栽培），又能「必要に応じて栽培指導を受けられます」（根据需要接受栽培指导），准确对应了这两个要求。"
        },
        {
          "number": 3,
          "text": "③",
          "translation": "③",
          "correct": false,
          "error": "relation-error",
          "explanation": "③号农园和④号农园在表格下方的补充说明中被明确指出：「③④では栽培指導は行っていません」（不进行栽培指导），这无法满足穆迪需要人教的条件。"
        },
        {
          "number": 4,
          "text": "④",
          "translation": "④",
          "correct": false,
          "error": "relation-error",
          "explanation": "理由同上，④号农园也不提供栽培指导。"
        }
      ]
    },
    {
      "id": "n1-search-2013-12-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "原口市内にお住まいの人または市内にお勤めの人",
        "最長3年間の継続利用が可能"
      ],
      "options": [
        {
          "number": 1,
          "text": "原口市に住んでいる人しか借りることができない。",
          "translation": "只有居住在原口市的人才能租借。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "海报在【対象者】（对象）一栏写明是「市内にお住まいの人または市内にお勤めの人」（居住在市内或在市内工作的人），因此并非“只有”住在市内的人才能租借，排除了表示限定的选项1。"
        },
        {
          "number": 2,
          "text": "同じ農園を３年以上連続して借りなければならない。",
          "translation": "必须连续租借同一个农园3年以上。",
          "correct": false,
          "error": "relation-error",
          "explanation": "海报在【利用期間】一栏写明「最長3年間の継続利用が可能」（最长可使用3年，使用了名词「可能」），说明是“可以”续借，而不是“必须连续租借3年以上”，选项逻辑错误。"
        },
        {
          "number": 3,
          "text": "自分で農具を準備しなければならない農園がある。",
          "translation": "有的农园必须自己准备农具。",
          "correct": true,
          "error": null,
          "explanation": "核对表格内容，③号和④号农园的特征栏中都明确标有「必要な農具は、各自で準備してください」（必需的农具请各自准备），这准确对应了选项所述的“有的农园必须自己准备农具”。"
        },
        {
          "number": 4,
          "text": "早く応募しないと希望の農園が借りられないことがある。",
          "translation": "如果不早点报名，有时会租不到希望的农园。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "海报在【応募方法】一栏写明「希望者が多い場合は抽選になります」（如果报名者多则进行抽签），说明名额分配靠抽签，而不是靠先到先得的拼手速（早く応募しないと…）。"
        }
      ]
    }
  ],
  "2013.7": [
    {
      "id": "n1-search-2013-7-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "電話の場合は検診日の2日前まで",
        "上記①～⑨以外の検査をご希望の場合は、必ずお電話にてお申し込みください。"
      ],
      "options": [
        {
          "number": 1,
          "text": "電話で、2日前までに予約する。",
          "translation": "通过电话，提前2天前预约。",
          "correct": true,
          "error": null,
          "explanation": "海报在【予約方法】一栏明确规定：如果需要追加检查（上記①〜⑨以外の検査），必须通过电话申请（必ずお電話にてお申し込みください）。而针对电话预约的时间限制，原文写道：电话预约最晚需在体检日前2天（電話の場合は検診日の2日前まで）。两者结合，对应选项1。题干中的「しなければならない」是动词「なる」的ない形加条件表示“必须”。"
        },
        {
          "number": 2,
          "text": "電話で、4日前までに予約する。",
          "translation": "通过电话，提前4天前预约。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“提前4天”（4日前まで）是使用电子邮件（Eメール）预约的时间限制。"
        },
        {
          "number": 3,
          "text": "Eメールで、2日前までに予約する。",
          "translation": "通过电子邮件，提前2天前预约。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "一旦涉及追加检查，根据规定必须使用电话（必ずお電話にて），不能使用电子邮件（Eメール）。"
        },
        {
          "number": 4,
          "text": "Eメールで、4日前までに予約する。",
          "translation": "通过电子邮件，提前4天前预约。",
          "correct": false,
          "error": "relation-error",
          "explanation": "理由同上，涉及追加检查必须使用电话，排除了电子邮件选项。"
        }
      ]
    },
    {
      "id": "n1-search-2013-7-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "結果記入用の指定用紙がある場合は、受診当日、受付にご提出ください。",
        "英文による健康診断書も作成いたします（作成料別途）。ご希望の方は、ご予約時にお知らせください。"
      ],
      "options": [
        {
          "number": 1,
          "text": "予約時に英文の診断書の作成を依頼し、受診日までに用紙を郵送する。",
          "translation": "预约时委托制作英文诊断书，并在就诊日前将表格邮寄过去。",
          "correct": false,
          "error": "relation-error",
          "explanation": "关于“公司指定的表格”，海报在【検査結果】一栏中明确指示要在“体检当天，提交至接待处”（受診当日、受付にご提出ください），而非在体检日前邮寄（郵送する）。"
        },
        {
          "number": 2,
          "text": "予約時に英文の診断書の作成を依頼し、受診当日用紙を渡す。",
          "translation": "预约时委托制作英文诊断书，并在就诊当天递交表格。",
          "correct": true,
          "error": null,
          "explanation": "安小姐的需求包含两点：①英文诊断书，②指定表格。对应海报【検査結果】的规定：①需要英文版者请在“预约时告知”（ご予約時にお知らせください）；②持有填写结果用的指定表格，请在“体检当天提交”（受診当日、受付にご提出ください）。该选项将两点准确结合。"
        },
        {
          "number": 3,
          "text": "受診当日に英文の診断書の作成を依頼し、受診後用紙を郵送する。",
          "translation": "就诊当天委托制作英文诊断书，并在就诊后邮寄表格。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "申请英文诊断书需要在“预约时”（ご予約時に）告知，而不是在“体检当天”（受診当日に）临时委托。表格也需要在“当天”当面提交，并非事后邮寄。"
        },
        {
          "number": 4,
          "text": "受診当日に英文の診断書の作成を依頼し、用紙を渡す。",
          "translation": "就诊当天委托制作英文诊断书，并递交表格。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "错误同样在于申请英文诊断书的时间点，规定要求在“预约时”而不是“体检当天”临时提出申请。"
        }
      ]
    }
  ],
  "2014.12": [
    {
      "id": "n1-search-2014-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "・就職希望者（留学生含む）は、[就職ガイダンス]のどちらかに必ず出席してください。"
      ],
      "options": [
        {
          "number": 1,
          "text": "一つ",
          "translation": "一项",
          "correct": true,
          "error": null,
          "explanation": "关于必须要出席的活动，主表下方的「注意事項」第一条明确写有：「就職希望者（留学生含む）は、[就職ガイダンス]のどちらかに必ず出席してください」（求职者含留学生，必须出席[就职指导]中的任意一场）。注意这里的「どちらか」意为二者择一，因此只需参加一场即可。其他活动中，比如留学生指导明确标明「希望者のみ」（仅限有意愿者），并非必须。"
        },
        {
          "number": 2,
          "text": "二つ",
          "translation": "两项",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "不需要两场。根据规定只需在两场就职指导中任选一场（どちらか）出席。"
        },
        {
          "number": 3,
          "text": "三つ",
          "translation": "三项",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "除了任意一场就职指导外，其他的体验谈、说明会都没有强制出席的要求。"
        },
        {
          "number": 4,
          "text": "四つ",
          "translation": "四项",
          "correct": false,
          "error": "relation-error",
          "explanation": "理由同上，强制参加的活动数量只有一个。"
        }
      ]
    },
    {
      "id": "n1-search-2014-12-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "③ 10月3日(金) イ 就職活動体験談(1) 広告、マスコミ業界に就職した卒業生による就職活動の体験談",
        "イ…18:30-20:00"
      ],
      "options": [
        {
          "number": 1,
          "text": "③と⑧のみ",
          "translation": "仅③和⑧",
          "correct": true,
          "error": null,
          "explanation": "林同学的需求是：传媒行业（マスコミ）、前辈分享（体験談）、工作内容（説明会），且只能在17:00以后出席。我们逐一核对： ・关于前辈分享：第③项活动是传媒行业的体验谈，时间标注为「イ」，查阅说明可知「イ」是18:30-20:00，满足17点以后，因此可选③。 ・关于工作内容：查看下方的说明会明细表，传媒行业（広告・マスコミ）有两场。12月1日那场的时间是 17:15-18:15，满足17点以后，因此可选⑧。而12月17日那场的时间是 16:00-17:00，与上课时间冲突，排除⑩。综上，只有③和⑧符合条件。"
        },
        {
          "number": 2,
          "text": "③と⑧と⑩",
          "translation": "③、⑧和⑩",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "包含了第⑩项活动。查阅下方的说明会明细表可知，12月17日（⑩）的传媒行业说明会时间是 16:00-17:00，而林同学只能在17点以后出席，时间冲突。"
        },
        {
          "number": 3,
          "text": "⑧のみ",
          "translation": "仅⑧",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "漏掉了第③项活动。第③项是传媒行业前辈的经验分享，且时间是 18:30-20:00，符合林同学的需求。"
        },
        {
          "number": 4,
          "text": "⑧と⑩のみ",
          "translation": "仅⑧和⑩",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "漏掉了符合条件的第③项，却包含了与上课时间冲突的第⑩项（16:00-17:00）。"
        }
      ]
    }
  ],
  "2014.7": [
    {
      "id": "n1-search-2014-7-01",
      "questionNumber": 1,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "18歳以上＊129歳以下",
        "10,500円"
      ],
      "options": [
        {
          "number": 1,
          "text": "A",
          "translation": "A",
          "correct": false,
          "error": "relation-error",
          "explanation": "A卡的年会费为「10,500円」，超出了中西先生期望的5000日元以内（5000円以内に抑えたい）的预算条件。"
        },
        {
          "number": 2,
          "text": "B",
          "translation": "B",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "B卡的报名资格一栏明确写有「18歳以上＊1（同时包含）29歳以下」。中西先生的年龄是35岁，不符合B卡的年龄限制规定。"
        },
        {
          "number": 3,
          "text": "C",
          "translation": "C",
          "correct": true,
          "error": null,
          "explanation": "中西先生35岁，符合C卡的年龄要求（18岁以上）；C卡年会费为「2,625円」，符合5000日元以内的要求；此时剩下的候选是C卡和D卡（D卡年会费1,050日元），对比两者的海外旅行保险，C卡最高3,000万，D卡最高2,000万。根据“保险额度尽量高”（なるべく高額なものがよい）的条件，C卡最符合要求。"
        },
        {
          "number": 4,
          "text": "D",
          "translation": "D",
          "correct": false,
          "error": "relation-error",
          "explanation": "虽然D卡也满足年龄和年会费条件，但其海外旅行保险（最高2,000万）低于C卡（最高3,000万），因此在“保险额度尽量高”的对比下被排除。"
        }
      ]
    },
    {
      "id": "n1-search-2014-7-02",
      "questionNumber": 2,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "（１）運転免許をお持ちの方は、必ず運転免許証",
        "＊（１）もしくは（２）に書かれた住所と入会申込書の現住所が異なる場合は、現住所が記載されている以下の書類のうち、いずれか1点のコピーを併せてご提出ください。"
      ],
      "options": [
        {
          "number": 1,
          "text": "運転免許証のコピーだけ",
          "translation": "仅驾照的复印件",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "由于山本先生刚搬家导致驾照地址与现址不同，根据补充规定（＊），除了驾照外，还需要“一并提交（併せてご提出ください）”能够证明现址的额外材料。仅提供驾照是不够的。"
        },
        {
          "number": 2,
          "text": "運転免許証のコピーと住民票のコピー",
          "translation": "驾照复印件与住民票(户口本)复印件",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "「住民票」属于（2）类没有驾照时的身份证明材料，并不在下方规定的地址补充材料（a、b、c项）之列。"
        },
        {
          "number": 3,
          "text": "運転免許証のコピーと先月の電話料金の領収書のコピー",
          "translation": "驾照复印件与上个月电话费收据复印件",
          "correct": false,
          "error": "not-stated",
          "explanation": "补充材料的a项为「公共料金（電気、ガス、水道のいずれか一つ）の領収書」（公共事业费：电、煤气、水之中任意一个的收据）。「電話料金」（电话费）并未包含在明确的规定范围内（含まれていない）。"
        },
        {
          "number": 4,
          "text": "運転免許証のコピーと先月の水道料金の領収書のコピー",
          "translation": "驾照复印件与上个月水费收据复印件",
          "correct": true,
          "error": null,
          "explanation": "山本先生有驾照，根据规定（1）「必ず運転免許証」，必须提供驾照复印件。同时因为地址不符，根据补充规定（＊），需要从a、b、c三项中选一件。选项4中的「水道料金」（水费）准确对应了a项「公共料金（電気、ガス、水道のいずれか一つ）」的要求。"
        }
      ]
    }
  ],
  "2015.12": [
    {
      "id": "n1-search-2015-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "東あさひ市立博物館では、特別展を年数回開催します。会員の方は、各特別展につき１回、無料で入場できます。また、同一の特別展を２回以上ご覧になる際は、２回目以降は割引料金で入場できます。"
      ],
      "options": [
        {
          "number": 1,
          "text": "常設展をいつでも割引料金で見学できる。",
          "translation": "可以随时以折扣价参观常设展。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文写的是常设展“何度でも無料で入場”，意思是无限次免费，而不是打折（割引料金）。"
        },
        {
          "number": 2,
          "text": "開催されるすべての特別展にそれぞれ一度だけ無料で入れる。",
          "translation": "举办的所有特别展都能分别免费进入一次。",
          "correct": true,
          "error": null,
          "explanation": "原文提到“特別展を年数回開催します。会員の方は、各特別展につき１回、無料で入場できます”，即每一个特别展都可以免费入场1次。该选项说法相符。"
        },
        {
          "number": 3,
          "text": "ショップで売られている本や雑誌を１０％安く買える。",
          "translation": "在商店售卖的书和杂志可以便宜10%购买。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文提到商店享受10%折扣时特别注明了“ただし、書籍は除きます”（但是，书籍除外），所以书和杂志不能便宜10%。"
        },
        {
          "number": 4,
          "text": "半年間、毎月無料で博物館発行の情報誌を送ってもらえる。",
          "translation": "半年内，每月都能免费获赠博物馆发行的资讯杂志。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文写的是“年６回、毎偶数月に発行”（每年6次，逢偶数月发行），而不是连续“半年間、毎月”（半年内每月）派送。"
        }
      ]
    },
    {
      "id": "n1-search-2015-12-02",
      "questionNumber": 2,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "会員証の有効期間内に手続きをする",
        "その場で会員証を発行"
      ],
      "options": [
        {
          "number": 1,
          "text": "２０日までに窓口に行って、継続入会の申し込みをする。",
          "translation": "20号之前去窗口办理继续入会的申请。",
          "correct": true,
          "error": null,
          "explanation": "要在21号当天看展并马上享受服务，因为邮寄需要2周左右时间，所以应当去窗口办理，可以“当场发行”（その場で会員証を発行）。另外，题干要求“费用更便宜”（より安く），继续入会（8500日元）比新入会（10000日元）便宜。而办理继续入会需要在“有效期内”（会員証の有効期間内に手続きをする場合），即20日及以前。因此，20日之前去窗口办理继续入会符合了所有条件。"
        },
        {
          "number": 2,
          "text": "２０日までに郵送で、継続入会の申し込みをする。",
          "translation": "20号之前通过邮寄办理继续入会的申请。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "邮寄方式确认汇款后到会员证寄达“大约需要两周时间”（２週間程度かかります），无法保证在21日马上使用会员服务。"
        },
        {
          "number": 3,
          "text": "２１日に窓口に行って、継続入会の申し込みをする。",
          "translation": "21号去窗口办理继续入会的申请。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "继续入会要求在“有效期内”办理。如果21日去，此时有效期（到20日止）已经结束，将无法再办理继续入会。"
        },
        {
          "number": 4,
          "text": "２１日に窓口に行って、新規入会の申し込みをする。",
          "translation": "21号去窗口办理新入会的申请。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "如果拖到21日再去窗口，因为过期只能办理新入会，费用为10000日元，比继续入会（8500日元）贵，不符合题干中“更便宜”（より安く）的要求。"
        }
      ]
    }
  ],
  "2015.7": [
    {
      "id": "n1-search-2015-7-01",
      "questionNumber": 1,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "モニター契約期間中、以下にお住まいの方",
        "やまかわ新聞を朝、夕刊ともに自宅で購読中の方"
      ],
      "options": [
        {
          "number": 1,
          "text": "水野さん",
          "translation": "水野さん",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "水野同学订阅的报纸是「朝刊のみ」（仅早报），不符合招募条件（2）中「朝、夕刊ともに自宅で購読中の方」（早、晚报均在家中订阅的人）的要求。"
        },
        {
          "number": 2,
          "text": "ソウさん",
          "translation": "ソウさん",
          "correct": false,
          "error": "relation-error",
          "explanation": "宗同学的职业是「広告代理店社員」（广告代理店员工），不符合招募条件（4）中未在新闻、传媒、广告相关行业就职的限制。"
        },
        {
          "number": 3,
          "text": "チョウさん",
          "translation": "チョウさん",
          "correct": true,
          "error": null,
          "explanation": "赵同学是旅行公司员工，27岁，居住在东京都，订阅了早报和晚报。各项信息均准确对应了招募条件（1）至（5），且满足题干中“有电脑且过去未曾报名过”的补充条件。因此选项3正确。"
        },
        {
          "number": 4,
          "text": "山田さん",
          "translation": "山田さん",
          "correct": false,
          "error": "relation-error",
          "explanation": "山田同学预定在合约期内的2016年8月搬至“爱知县”，不符合招募条件（1）中合约期间内居住在关东1都3县内的要求。"
        }
      ]
    },
    {
      "id": "n1-search-2015-7-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "②アンケート実施当日にウェブサイトのアンケート回答ページにアクセスして回答してください。",
        "アンケート実施前一週間分の紙面を保管しておいてください。アンケートはその中から当社指定の記事や広告について答えていただきます。"
      ],
      "options": [
        {
          "number": 1,
          "text": "指定時間内に所定のウェブサイトを通じて回答する。",
          "translation": "在指定时间内通过指定的网站回答。",
          "correct": true,
          "error": null,
          "explanation": "步骤②明确指示要在“实施当天访问网站的问卷回答页面进行回答（ウェブサイトの…ページにアクセスして）”，注意事项中也规定了“回答时间为实施当天的上午7点起24小时内”。该选项“在指定时间内通过指定的网站回答”准确对应了这两点要求。"
        },
        {
          "number": 2,
          "text": "保管しておいたすべての新聞を読み直して回答する。",
          "translation": "将保存下来的所有报纸重新读一遍再回答。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "注意事项中说明，只需针对“本公司指定的报道或广告（当社指定の記事や広告）”进行回答即可，并非要求重新阅读保留下来的“所有报纸（すべての新聞）”。"
        },
        {
          "number": 3,
          "text": "「実施のお知らせ」を受信してから24時間以内に回答する。",
          "translation": "在收到“实施通知”后的24小时内回答。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文在步骤①写明“通知”会在实施的1周前发到，而注意事项指出回答时间是“实施当天的上午7点起24小时内”，并非收到通知后的24小时内。"
        },
        {
          "number": 4,
          "text": "回答形式を問わず、すべての質問に回答する。",
          "translation": "不论回答形式如何，所有的提问都必须要回答。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "注意事项最后一条指出“自由记述的部分可以留空（空欄でもかまいません）”，不要求回答“所有提问（すべての質問）”。"
        }
      ]
    }
  ],
  "2016.12": [
    {
      "id": "n1-search-2016-12-01",
      "questionNumber": 1,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "相互利用協定に加盟している図書館は、学生証の提示のみで、利用することができます。",
        "長島大学図書館 可 可"
      ],
      "options": [
        {
          "number": 1,
          "text": "学生証を持参して、長島大学図書館に行く。",
          "translation": "带上学生证，去长岛大学图书馆。",
          "correct": true,
          "error": null,
          "explanation": "林同学想“明天之内借书”。长岛大学属于“协定学校”，根据表格，阅览和借出均为“可”。且前往协定学校只需“出示学生证（学生証の提示のみ）”，所以明天直接带学生证去即可借到书。"
        },
        {
          "number": 2,
          "text": "今から紹介状を申請し、それを持参して、あおば大学図書館に行く。",
          "translation": "现在开始申请介绍信，然后带上它，去青叶大学图书馆。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "青叶大学（あおば）虽然是协定学校，但表格中显示其借出（貸出）为“不可”，因此无法借书。"
        },
        {
          "number": 3,
          "text": "学生証を持参して、中山工業大学図書館に行く。",
          "translation": "带上学生证，去中山工业大学图书馆。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "中山工业大学是协定学校，但表格中显示其借出（貸出）为“不可”，因此无法借书。"
        },
        {
          "number": 4,
          "text": "今から紹介状を申請し、それを持参して、さくら大学図書館に行く。",
          "translation": "现在开始申请介绍信，然后带上它，去樱花大学图书馆。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "樱花大学（さくら）不在协定学校列表中，属于“协定校以外”。前往非协定校需要申请介绍信，而介绍信发行需要约5天时间（発行まで約５日かかります），赶不上“明天之内”的要求。"
        }
      ]
    },
    {
      "id": "n1-search-2016-12-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "申し込みは、本学図書館受付、または本学図書館ホームページ上で行ってください。",
        "一度に依頼できる件数は５件までです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "複写依頼は、資料を所蔵する大学のホームページから行わなければならない。",
          "translation": "复印委托，要在收藏该资料的大学的主页上进行。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "关于复印申请（複写依頼），②中提到申请途径是“本校图书馆前台，或本校图书馆主页（本学図書館受付、または本学図書館ホームページ上）”，而非资料所在大学的主页。"
        },
        {
          "number": 2,
          "text": "複写依頼は、一度に２件以上まとめて申し込むことはできない。",
          "translation": "复印委托，不能一次合并申请2件以上。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "②中说明“一次可申请的数量上限为5件（一度に依頼できる件数は５件まで）”，并非不能一次申请2件以上。"
        },
        {
          "number": 3,
          "text": "資料の借用に必要な送料は、半額を自身が負担しなければならない。",
          "translation": "资料借用所需的邮费，自己要负担一半。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "③中说明，关于借用资料的往返邮费等，是“全额由使用者负担（全額利用者負担）”，并非负担半额。"
        },
        {
          "number": 4,
          "text": "借用した資料は、大森大学図書館内で閲覧しなければならない。",
          "translation": "借用的资料，要在大森大学图书馆内阅览。",
          "correct": true,
          "error": null,
          "explanation": "③中明确规定，借用的资料“仅限于在本校图书馆内阅览（本学図書館内での閲覧に限ります）”，该选项内容相符。"
        }
      ]
    }
  ],
  "2016.7": [
    {
      "id": "n1-search-2016-7-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "2017年4月～2018年3月（1年間）",
        "任期中を通じて、以下のa）～c）の条件をすべて満たす方"
      ],
      "options": [
        {
          "number": 1,
          "text": "キムさん",
          "translation": "Kim",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "Kim在岩里市上大学且住在岩里市，不符合资格b要求中的“居住在川村市，或者在川村市的学校就读”。"
        },
        {
          "number": 2,
          "text": "カーンさん",
          "translation": "Kahn",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "Kahn预定在3月9日至20日期间回国，因此无法参加资格c所要求的3月18日的“事前说明会”。"
        },
        {
          "number": 3,
          "text": "ホンさん",
          "translation": "Hong",
          "correct": true,
          "error": null,
          "explanation": "Hong虽然在岩里市上大学，但他从1月起住在川村市，符合资格b的要求。同时也满足其他两项条件，故可以报名。"
        },
        {
          "number": 4,
          "text": "クルスさん",
          "translation": "Cruz",
          "correct": false,
          "error": "relation-error",
          "explanation": "Cruz虽然目前在川村市，但他预定在2017年10月回国。而招募资格大前提明确指出要在“整个任期内（2017年4月～2018年3月）”满足条件，因此不符合长期要求。"
        }
      ]
    },
    {
      "id": "n1-search-2016-7-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "市役所広報課にメール（1）、（2）をご提出ください。（2017年2月24日（金）締切り）。",
        "必ず（3）をご持参ください。"
      ],
      "options": [
        {
          "number": 1,
          "text": "申込書、志望理由書をメールで提出する。",
          "translation": "通过邮件提交申请书、志愿理由书。",
          "correct": true,
          "error": null,
          "explanation": "在“报名方法”一段中写明，“请将(1)申请书和(2)志愿理由书通过邮件（メール）发送至市役所广报课，截止日期为2月24日”。该选项说法一致。"
        },
        {
          "number": 2,
          "text": "申込書、志望理由書を持参して提出する。",
          "translation": "自带并提交申请书、志愿理由书。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文件(1)和(2)在文中明确要求的是“发送邮件（メール）”提交，而不是“自带（持参）”。"
        },
        {
          "number": 3,
          "text": "申込書、志望理由書、写真をメールで提出する。",
          "translation": "通过邮件提交申请书、志愿理由书、照片。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "对于(3)照片，原文指出要在面试时“务必自带（必ず(3)をご持参ください）”，而不是在2月24日前通过邮件提交。"
        },
        {
          "number": 4,
          "text": "申込書、志望理由書、写真を持参して提出する。",
          "translation": "自带并提交申请书、志愿理由书、照片。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "照片(3)虽然是自带，但(1)和(2)是通过邮件提交。选项将三者混为一谈，全部归为自带提交，与原文不符。"
        }
      ]
    }
  ],
  "2017.12": [
    {
      "id": "n1-search-2017-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "16歳以上の方",
        "平日 A 9,000 月～金の営業時間内"
      ],
      "options": [
        {
          "number": 1,
          "text": "フルタイム",
          "translation": "全时段",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "全时段套餐满足时间要求，但月会费为10,000日元，比平日A套餐贵。吴女士希望“尽可能便宜（できるだけ安い）”，此项并非最优选择。"
        },
        {
          "number": 2,
          "text": "平日 A",
          "translation": "平日 A",
          "correct": true,
          "error": null,
          "explanation": "吴女士55岁，不符合老年套餐（60岁以上）的要求。她希望在使用时间上涵盖周二的10:00-12:00和周三的17:00-19:00。平日A（9,000日元）涵盖周一至周五的全部营业时间，既满足时段要求，价格也比全时段套餐（10,000日元）更便宜，符合条件。"
        },
        {
          "number": 3,
          "text": "平日 B",
          "translation": "平日 B",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "平日B套餐的使用时间是“至17:00（17:00まで）”，无法涵盖吴女士希望的周三17:00至19:00的时段。"
        },
        {
          "number": 4,
          "text": "平日 C",
          "translation": "平日 C",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "平日C套餐的使用时间是“18:00之后（18:00以降）”，无法涵盖吴女士希望的周二10:00至12:00的时段，也无法涵盖周三的17:00至18:00。"
        }
      ]
    },
    {
      "id": "n1-search-2017-12-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "③入会金（5,000円）および2か月分（1か月目、2か月目）の月会費",
        "特典① 入会金が無料！"
      ],
      "options": [
        {
          "number": 1,
          "text": "入会金と２か月分の月会費",
          "translation": "入会费和2个月份的月会费",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "夏季活动明确指出“特权① 入会费免费（入会金が無料）”，所以办理时不需要再支付入会费。"
        },
        {
          "number": 2,
          "text": "入会金と１か月分の月会費",
          "translation": "入会费和1个月份的月会费",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "既不需要支付入会费，且所需支付的月会费不仅是1个月份。"
        },
        {
          "number": 3,
          "text": "２か月分の月会費",
          "translation": "2个月份的月会费",
          "correct": true,
          "error": null,
          "explanation": "根据正常的“入会手续”条款，办理时需缴纳“③入会费及2个月份（第1个月、第2个月）的月会费”。由于适用“夏季入会活动”，特权①免除了入会费；而特权②说明“月会费1个月免费”，括号内明确标注为“免除第3个月的月会费（3か月目の月会費を免除）”。因此，办理入会手续时，第1个月和第2个月的月会费并未减免，仍需支付2个月份的月会费。"
        },
        {
          "number": 4,
          "text": "１か月分の月会費",
          "translation": "1个月份的月会费",
          "correct": false,
          "error": "not-stated",
          "explanation": "夏季活动中免除的是“第3个月的月会费”，办理手续时所要求的“第1个月、第2个月”会费并未享受免费，依然应当支付2个月份的月会费。"
        }
      ]
    }
  ],
  "2017.7": [
    {
      "id": "n1-search-2017-7-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "16歳以上の方",
        "平日 A 9,000 月～金の営業時間内"
      ],
      "options": [
        {
          "number": 1,
          "text": "フルタイム",
          "translation": "全时段",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "全时段套餐满足时间要求，但月会费为10,000日元，比平日A套餐贵。吴女士希望“尽可能便宜（できるだけ安い）”，此项并非最优选择。"
        },
        {
          "number": 2,
          "text": "平日 A",
          "translation": "平日 A",
          "correct": true,
          "error": null,
          "explanation": "吴女士55岁，不符合老年套餐（60岁以上）的要求。她希望在使用时间上涵盖周二的10:00-12:00和周三的17:00-19:00。平日A（9,000日元）涵盖周一至周五的全部营业时间，既满足时段要求，价格也比全时段套餐（10,000日元）更便宜，符合条件。"
        },
        {
          "number": 3,
          "text": "平日 B",
          "translation": "平日 B",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "平日B套餐的使用时间是“至17:00（17:00まで）”，无法涵盖吴女士希望的周三17:00至19:00的时段。"
        },
        {
          "number": 4,
          "text": "平日 C",
          "translation": "平日 C",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "平日C套餐的使用时间是“18:00之后（18:00以降）”，无法涵盖吴女士希望的周二10:00至12:00的时段，也无法涵盖周三的17:00至18:00。"
        }
      ]
    },
    {
      "id": "n1-search-2017-7-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "③入会金（5,000円）および2か月分（1か月目、2か月目）の月会費",
        "特典① 入会金が無料！"
      ],
      "options": [
        {
          "number": 1,
          "text": "入会金と２か月分の月会費",
          "translation": "入会费和2个月份的月会费",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "夏季活动明确指出“特权① 入会费免费（入会金が無料）”，所以办理时不需要再支付入会费。"
        },
        {
          "number": 2,
          "text": "入会金と１か月分の月会費",
          "translation": "入会费和1个月份的月会费",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "既不需要支付入会费，且所需支付的月会费不仅是1个月份。"
        },
        {
          "number": 3,
          "text": "２か月分の月会費",
          "translation": "2个月份的月会费",
          "correct": true,
          "error": null,
          "explanation": "根据正常的“入会手续”条款，办理时需缴纳“③入会费及2个月份（第1个月、第2个月）的月会费”。由于适用“夏季入会活动”，特权①免除了入会费；而特权②说明“月会费1个月免费”，括号内明确标注为“免除第3个月的月会费（3か月目の月会費を免除）”。因此，办理入会手续时，第1个月和第2个月的月会费并未减免，仍需支付2个月份的月会费。"
        },
        {
          "number": 4,
          "text": "１か月分の月会費",
          "translation": "1个月份的月会费",
          "correct": false,
          "error": "not-stated",
          "explanation": "夏季活动中免除的是“第3个月的月会费”，办理手续时所要求的“第1个月、第2个月”会费并未享受免费，依然应当支付2个月份的月会费。"
        }
      ]
    }
  ],
  "2018.12": [
    {
      "id": "n1-search-2018-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "5,300円",
        "6,000円"
      ],
      "options": [
        {
          "number": 1,
          "text": "サブリナさんも友達も５，３００円",
          "translation": "萨布丽娜和朋友都是5,300日元",
          "correct": false,
          "error": "relation-error",
          "explanation": "朋友不住在中桥区，不符合区民条件，所以不能适用区民费率（5,300日元）。"
        },
        {
          "number": 2,
          "text": "サブリナさん５，３００円、友達６，０００円",
          "translation": "萨布丽娜5,300日元，朋友6,000日元",
          "correct": true,
          "error": null,
          "explanation": "萨布丽娜住在中桥区，符合“区民”的条件，且年龄为24岁（大人），所以适用“区民费率”，为5,300日元。她的朋友不是区民，但是属于“和区民一起使用（区民ではないが区民と一緒にご利用の方）”，所以适用“大人”一栏下该类别的费率，为6,000日元。此选项描述准确相符。"
        },
        {
          "number": 3,
          "text": "サブリナさん５，３００円、友達７，３００円",
          "translation": "萨布丽娜5,300日元，朋友7,300日元",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "朋友是和区民萨布丽娜一起使用，并非单独使用，所以适用的不是7,300日元的档位。"
        },
        {
          "number": 4,
          "text": "サブリナさんも友達も７，３００円",
          "translation": "萨布丽娜和朋友都是7,300日元",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "萨布丽娜属于区民，无需支付7,300日元的高费率。"
        }
      ]
    },
    {
      "id": "n1-search-2018-12-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "（例：10月1日の宿泊を希望の場合、4月1日から9月24日まで）",
        "ご宿泊時にお支払いください。現金またはクレジットカードでのお支払いが可能です。区民料金適用には、宿泊時に、区民※であることを証明できるもののご提示が必要です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "４月１日から９月２４日の間で、申し込み時に区民であることを証明できるものを提示する。",
          "translation": "在4月1日到9月24日之间，在报名时出示能证明是区民身份的材料。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "在原文【费用的支付】一栏中明确记载，为了适用区民费率，需要在“住宿时（宿泊時に）”出示证明，而非“报名时（申し込み時に）”。"
        },
        {
          "number": 2,
          "text": "４月１日から９月２４日の間で、宿泊時に区民であることを証明できるものを提示する。",
          "translation": "在4月1日到9月24日之间，在住宿时出示能证明是区民身份的材料。",
          "correct": true,
          "error": null,
          "explanation": "穆卡吉在中桥区的公司工作，符合补充条件“b. 在中桥区的公司工作的人”，属于“区民”。根据规定，区民预约10月1日的住宿，报名期间是从4月1日到9月24日。同时，原文明确提出要在“住宿时出示能证明区民身份的材料（宿泊時に、区民であることを証明できるもののご提示が必要）”。各项条件均符合本选项的描述。"
        },
        {
          "number": 3,
          "text": "４月１日から９月３０日の間で、宿泊時に区民であることを証明できるものを提示する。",
          "translation": "在4月1日到9月30日之间，在住宿时出示能证明是区民身份的材料。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "申请期间的截止日是“希望住宿日的1周前”，如果是10月1日入住，提前1周是9月24日，而不是9月30日。"
        },
        {
          "number": 4,
          "text": "６月１日から９月２４日の間で、申し込み時に区民であることを証明できるものを提示する。",
          "translation": "在6月1日到9月24日之间，在报名时出示能证明是区民身份的材料。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“6月1日到9月24日”是非区民的预约期间，穆卡吉由于在中桥区工作，属于区民，预约期间应从4月1日开始。此外，出示证明的时间要求也是错的。"
        }
      ]
    }
  ],
  "2018.7": [
    {
      "id": "n1-search-2018-7-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "ボランティア② 花を植えたり、草取りなどの花壇の整備をしたりします。",
        "ボランティア②"
      ],
      "options": [
        {
          "number": 1,
          "text": "3月8日の1週間前までに申し込み、3月8日か9日の説明会に参加する。",
          "translation": "在3月8日的1周前报名，并参加3月8日或9日的说明会。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "3月8日是志愿者①的说明会日期。奈妮想要“照顾花卉”（花の世話），这属于志愿者②（花を植えたり…），对应的说明会并非3月8日或9日。"
        },
        {
          "number": 2,
          "text": "3月8日の1週間前までに申し込み、3月15日と16日の説明会に参加する。",
          "translation": "在3月8日的1周前报名，并参加3月15日和16日的说明会。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "报名截止日期和参加日期均与文中要求不符。另外，说明会只需参加一天即可，不需要15日“和”16日都参加。"
        },
        {
          "number": 3,
          "text": "3月15日の1週間前までに申し込み、3月15日か16日の説明会に参加する。",
          "translation": "在3月15日的1周前报名，并参加3月15日或16日的说明会。",
          "correct": true,
          "error": null,
          "explanation": "奈妮想要全年照顾花卉，对应的是“志愿者②”。关于志愿者②，报名截止日期是“说明会举办首日的1周前”（登録説明会開催日1日目の1週間前），即3月15日的1周前；并且要求在3月15日或16日中参加其中一天的说明会（必ずいずれかの日にご参加ください）。该选项的描述完全相符。"
        },
        {
          "number": 4,
          "text": "3月15日の1週間前までに申し込み、3月15日と16日の説明会に参加する。",
          "translation": "在3月15日的1周前报名，并参加3月15日和16日的说明会。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中的要求是“参加其中一天的说明会（いずれかの日にご参加）”，选项描述为“参加15日和（と）16日的说明会”，要求其参加两天，与文中规定不符。"
        }
      ]
    },
    {
      "id": "n1-search-2018-7-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "（開始2時間前に集合）",
        "※2 ①または②にご参加の方が③にも参加された場合、③の登録費用は必要ありません。"
      ],
      "options": [
        {
          "number": 1,
          "text": "イベント開始2時間前に公園に行く。",
          "translation": "在活动开始的2小时前前往公园。",
          "correct": true,
          "error": null,
          "explanation": "胡里奥既参加志愿者①又参加志愿者③。关于志愿者③当天的集合时间，活动列表中明确记载“开始的2小时前集合”（開始2時間前に集合）。关于费用，底部的补充说明提到“参加了①或②的人如果也参加了③，不需要缴纳③的注册费用（③の登録費用は必要ありません）”。因此，当天他只需提前2小时去公园，无需支付费用。本选项符合。"
        },
        {
          "number": 2,
          "text": "イベント開始2時間前に公園に行き、ボランティア登録費用50円を支払う。",
          "translation": "在活动开始的2小时前前往公园，并支付50日元的志愿者注册费。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "虽然提早2小时的时间是对的，但根据规定，由于他已经参加了志愿者①，因此不需要再缴纳志愿者③的50日元注册费。"
        },
        {
          "number": 3,
          "text": "イベント開始時間に公園に行く。",
          "translation": "在活动开始的时间前往公园。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "活动要求在“开始的2小时前集合”，而不是在开始时间才去公园。"
        },
        {
          "number": 4,
          "text": "イベント開始時間に公園に行き、ボランティア登録費用50円を支払う。",
          "translation": "在活动开始的时间前往公园，并支付50日元的志愿者注册费。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "集合时间不符合（应当是提前2小时），并且也不需要支付50日元的注册费。"
        }
      ]
    }
  ],
  "2019.12": [
    {
      "id": "n1-search-2019-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "過去3年以内に本助成金の交付を受けていないこと",
        "2020年4月1日から12月31日までの間"
      ],
      "options": [
        {
          "number": 1,
          "text": "この助成金の交付を過去に一度も受けていない団体である必要がある。",
          "translation": "需要是过去一次也没有接受过此助成金交付的团体。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "対象団体的条件中写的是“过去3年内（過去3年以内に）”未接受过交付，而不是“过去一次也没有（過去に一度も）”接受过。两者的范围不符。"
        },
        {
          "number": 2,
          "text": "助成を受ける事業は決められた期間内に実施しなければならない。",
          "translation": "接受助成的事业需要在规定的期间内实施。",
          "correct": true,
          "error": null,
          "explanation": "対象事業一项中明确规定，接受助成的事业需要在“2020年4月1日到12月31日期间实施（2020年4月1日から12月31日までの間に実施）”。本选项指出要在“规定的期间内实施（決められた期間内に実施）”，内容相符。"
        },
        {
          "number": 3,
          "text": "合計を３０万円以内にすれば、複数の事業について応募できる。",
          "translation": "只要将合计控制在30万日元以内，就可以申请多个事业。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "助成額一项明确说明了“1个团体仅可报名1个事业（1団体につき1事業のみ応募可）”，因此即便是合计在30万日元以内，也不能申请多个（複数の事業）事业。"
        },
        {
          "number": 4,
          "text": "団体によるプレゼンテーションを１次選考の際に行わなければならない。",
          "translation": "在第1次选拔的时候，需要进行团体演讲。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "根据下方的スケジュール（日程安排）显示，“团体演讲（団体によるプレゼンテーション）”是在“第2次选拔（２次選考）”时进行，而不是在第1次选拔的时候。"
        }
      ]
    },
    {
      "id": "n1-search-2019-12-02",
      "questionNumber": 2,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "上記の書類を郵送していただくか、センター窓口に直接ご持参ください。（メール、ファクス不可）",
        "2020年1月10日（金）～1月28日（火）"
      ],
      "options": [
        {
          "number": 1,
          "text": "１２月１９日の説明会に参加し、提出書類を応募期間内にファクスで送る。",
          "translation": "参加12月19日的说明会，并在报名期间内通过传真发送提交材料。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "応募方法一栏中明确标注了“不可通过邮件或传真（メール、ファクス不可）”，因此不能通过传真（ファクス）发送。"
        },
        {
          "number": 2,
          "text": "１２月１９日の説明会に参加し、提出書類を応募期間内に着くように郵送する。",
          "translation": "参加12月19日的说明会，并将提交材料通过邮寄的方式使其在报名期间内寄达。",
          "correct": true,
          "error": null,
          "explanation": "针对第一点，孙先生无法参加10日的说明会，根据说明会要求“希望报名的人请参加①或②其中的一场（①か②のいずれかに）”，他需要参加19日的说明会；针对第二点，题干说他“除了要求参加的内容之外，不打算参加其他环节”，由于“个别咨询会”是“仅限希望者（希望者のみ）”参加，他可以不参加；针对第三点，材料提交可以通过“邮寄（郵送）”并在报名期间内寄达。此选项满足了以上所有条件。"
        },
        {
          "number": 3,
          "text": "１２月１９日の説明会と個別相談会に参加し、提出書類を応募期間内にメールで送る。",
          "translation": "参加12月19日的说明会和个别咨询会，并在报名期间内通过邮件发送提交材料。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "包含了不打算参加的“个别咨询会（個別相談会）”，且使用了不允许的“邮件（メール）”方式发送材料。"
        },
        {
          "number": 4,
          "text": "１２月１９日の説明会と個別相談会に参加し、提出書類を応募期間内に窓口に提出する。",
          "translation": "参加12月19日的说明会和个别咨询会，并在报名期间内将提交材料提交至窗口。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "包含了不打算参加的“个别咨询会（個別相談会）”。"
        }
      ]
    }
  ],
  "2019.7": [
    {
      "id": "n1-search-2019-7-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "開催日の1週間前までにお支払いください。詳細は、お申し込みの結果をお知らせする返信はがきでご案内します。"
      ],
      "options": [
        {
          "number": 1,
          "text": "開催日当日は、自身で直接見学先に向かわなければならない。",
          "translation": "举办日当天，必须自己直接前往参观地。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "关于Event C（市内建築めぐり）的集合地点，文中记载为「県立歴史博物館9:30集合」（在县立历史博物馆集合），而非由自己直接前往参观地（自身で直接見学先に向かう）。"
        },
        {
          "number": 2,
          "text": "特別展の解説も聞きたい場合、開催日の前日までに連絡する必要がある。",
          "translation": "如果也想听特别展的解说，需要在举办日的前一天之前进行联系。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "Event C 的补充说明提到，若想听特别展的解说，要求是「当日お申し出ください」（请在当天提出），而非需要在前一天之前联系。"
        },
        {
          "number": 3,
          "text": "受け付けは先着順のため、できるだけ早く申し込まなければならない。",
          "translation": "因为受理是按照先到先得的顺序，所以应该尽可能早地报名。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "关于 A～C 的报名，规则明确写有「定員を超えた場合は抽選となります」（如果超过定额则进行抽选），因此并非先到先得（先着順）。"
        },
        {
          "number": 4,
          "text": "参加が決まったら、開催日の1週間前までに参加費を支払う必要がある。",
          "translation": "一旦决定参加，就需要在举办日的1周前支付参加费用。",
          "correct": true,
          "error": null,
          "explanation": "关于 Event C 的参加费，在底部的【受講料・参加費】部分写明 A、C 是「開催日の1週間前までにお支払いください」（请在举办日的1周前进行支付）。本选项的内容符合规定条件。"
        }
      ]
    },
    {
      "id": "n1-search-2019-7-02",
      "questionNumber": 2,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "全2回1,800円 ※1回のみの受講可、1回1,000円",
        "※1回のみの受講可、1回1,000円"
      ],
      "options": [
        {
          "number": 1,
          "text": "7月24日までに電話で申し込み、当日1,000円を会場で支払う。",
          "translation": "在7月24日之前通过电话报名，当天在会场支付1,000日元。",
          "correct": true,
          "error": null,
          "explanation": "阿格尼斯希望参加7月27日的 Event D。根据【申込方法】，D 的报名截止时间为「各回の3日前」（每次的3天前），即需要在7月24日之前通过电话报名。费用方面，根据 Event D 的信息「1回のみの受講可、1回1,000円」，只报一次的话费用为1,000日元。支付方式根据【受講料・参加費】，B、D为「当日会場にてお支払いください」（当天在会场支付）。该选项描述均与原文明细一致。"
        },
        {
          "number": 2,
          "text": "7月24日までに電話で申し込み、当日1,800円を会場で支払う。",
          "translation": "在7月24日之前通过电话报名，当天在会场支付1,800日元。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "此选项的金额标注为1,800日元。1,800日元是「全2回」的总费用，而阿格尼斯只希望能参加7月27日这一场，单次费用应为1,000日元。"
        },
        {
          "number": 3,
          "text": "7月27日までに電話で申し込み、当日1,000円を会場で支払う。",
          "translation": "在7月27日之前通过电话报名，当天在会场支付1,000日元。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "此选项的报名截止日期标为「7月27日までに」（7月27日前）。Event D 的要求是每次的3天前（各回の3日前）也就是7月24日前报名。"
        },
        {
          "number": 4,
          "text": "7月27日までに電話で申し込み、当日1,800円を会場で支払う。",
          "translation": "在7月27日之前通过电话报名，当天在会场支付1,800日元。",
          "correct": false,
          "error": "relation-error",
          "explanation": "此选项的报名截止日期和参加费用两项均与原文的条件不符。"
        }
      ]
    }
  ],
  "2020.12": [
    {
      "id": "n1-search-2020-12-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "以下のお客様に関しましては、必ずお電話でご予約ください。準備等ございますので、見学希望日の7日前までにお申し込みをお願いします。",
        "必ずお電話でご予約"
      ],
      "options": [
        {
          "number": 1,
          "text": "インターネットで行う場合は見学希望日の3日前まで、電話の場合は前日までにする",
          "translation": "用网络进行的情况下需要在希望参观日的3天前为止办理，电话的情况下需要在前一天为止办理。",
          "correct": false,
          "error": "not-stated",
          "explanation": "此选项列出的是普通的网络和电话预约限制，并未考虑孙老师带领15名学生这一特殊条件。"
        },
        {
          "number": 2,
          "text": "インターネットでも電話でもいいが、見学希望日の7日前までにする",
          "translation": "无论是网络还是电话都可以，但需要在希望参观日的7天前为止办理。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "包含网络（インターネット）的选项，但对于“10人以上”或“学校活动”的客人，文中规定要求“请务必用电话预约（必ずお電話でご予約ください）”。"
        },
        {
          "number": 3,
          "text": "電話で見学希望日の7日前までにする",
          "translation": "用电话在希望参观日的7天前为止办理。",
          "correct": true,
          "error": null,
          "explanation": "孙老师带领班级里的15名学生，符合海报补充说明中的条件：既是“作为10人以上团体来利用的客人（10名以上の団体）”，也是“为了与学校相关的活动来利用的客人（学校にかかわる活動）”。根据补充规定，符合这类情况的客人“请务必用电话预约（必ずお電話でご予約ください）”，并且因为准备的原因“请在希望参观日的7天前报名（7日前までにお申し込みをお願いします）”。选项的描述符合此规定。"
        },
        {
          "number": 4,
          "text": "電話で見学希望日の前日までにする",
          "translation": "用电话在希望参观日的前一天为止办理。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "满足特殊条件的客人需要提前7天（7日前まで）预约，选项中写的前一天（前日まで）的时间不足。"
        }
      ]
    },
    {
      "id": "n1-search-2020-12-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "注意：土、日、祝日は工場の一部が見学できない場合もございます。",
        "〇"
      ],
      "options": [
        {
          "number": 1,
          "text": "16日の14時と20日の9時。見学は16日はすべてできるが、20日は一部できない所がある。",
          "translation": "16日的14时和20日的9时。16日可以参观全部区域，但20日有部分地方不能参观。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "根据海报中的标识说明，“△”代表“剩余2名以下”。马可一行有3人，因此无法预约标记为“△”的16日14时（水曜14時），所以可预约时间并非16日14时和20日9时两个。"
        },
        {
          "number": 2,
          "text": "16日の14時と20日の9時。見学は16日も20日も一部できない所がある。",
          "translation": "16日的14时和20日的9时。16日和20日都有部分地方不能参观。",
          "correct": false,
          "error": "relation-error",
          "explanation": "无法预约16日的14时，错误理由同上。"
        },
        {
          "number": 3,
          "text": "20日の9時。見学は一部できない所がある。",
          "translation": "20日的9时。有部分地方不能参观。",
          "correct": true,
          "error": null,
          "explanation": "首先找出3人共同的空闲时间。通过对比马可的笔记可知，三人都有空的时间是16日的下午（对应14时）和20日的上午（对应9时或10时）。接着查看预约情况表：16日的14时显示为“△（剩余2名以下）”，马可一行3人超出了名额无法预约；20日的10时显示为“×（不可）”，只有20日的9时显示为“〇（可）”。所以他们唯一能预约的时间是20日的9时。此外，由于20日是星期日，根据海报「所要時間」下方的注意事项：“周六、周日、节假日会有工厂部分区域无法参观的情况（土、日、祝日は工場の一部が見学できない場合もございます）”。该选项的描述与客观条件相符。"
        },
        {
          "number": 4,
          "text": "20日の9時。見学はできない。",
          "translation": "20日的9时。不能进行参观。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "根据注意事项，只是工厂的部分区域有无法参观的情况（一部が見学できない場合もございます），并不是说完全不能参观（見学はできない）。"
        }
      ]
    }
  ]
};
})();
