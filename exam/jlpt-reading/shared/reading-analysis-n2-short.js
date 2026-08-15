(function () {
    'use strict';
    const root = window.ReadingAnalysisData = window.ReadingAnalysisData || {};
    root.N2 = root.N2 || {};
    root.N2.short = {
  "2010.12": [
    {
      "id": "n2-short-2010-12-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "さらにその物質には、人間の神経を安静させる効果もあるという。私たちが森林に入るとリラックスした気分になるのは、このためだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人間の持つ嫌なにおいを防ぐ。",
          "translation": "防止人类身上带有的难闻气味。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到的是消除落叶和枯木腐烂时的难闻气味，并非防止“人类身上带有的（人間の持つ）”难闻气味。"
        },
        {
          "number": 2,
          "text": "人々の気持ちを落ち着かせる。",
          "translation": "使人们的心情平静下来。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中该物质具有“使人类神经安静（人間の神経を安静させる効果）”的作用，从而让人感到放松（リラックスした気分になる）。"
        },
        {
          "number": 3,
          "text": "落ち葉や枯れ木を腐りにくくする。",
          "translation": "使落叶和枯木变得难以腐烂。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章提到该物质能消除落叶和枯木腐烂时产生的气味，并未说明它能让落叶枯木“难以腐烂（腐りにくくする）”。"
        },
        {
          "number": 4,
          "text": "木々がもともと持っているにおいを消す。",
          "translation": "消除树木原本带有的气味。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是消除腐烂时产生的难闻气味，而不是消除“树木原本带有的（もともと持っている）”气味。"
        }
      ]
    },
    {
      "id": "n2-short-2010-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "本番で最高の実力を発揮させるためにすることを、練習と呼びます。すなわち、休養することが試合にとって、今、最もするべきことだとすれば、休養こそ勝つための練習といえるときがあるのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "「練習のための練習」をすること",
          "translation": "进行“为了练习而进行的练习”。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章开头就对“为了练习而进行的练习（練習のための練習）”持否定或质疑的态度。"
        },
        {
          "number": 2,
          "text": "練習でも最高の力を出すこと",
          "translation": "在练习中也要发挥出最高力量。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是为了在“正式比赛中（本番で）”发挥最高实力去练习，而不是在练习中也要发挥最高力量。"
        },
        {
          "number": 3,
          "text": "必要であれば休養を取ること",
          "translation": "如果有必要的话就去休息。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“如果休息是当下最应该做的事情，那么休息也是练习（休養することが…最もするべきことだとすれば、休養こそ勝つための練習といえる）”的主张。"
        },
        {
          "number": 4,
          "text": "試合の前に休養を取ること",
          "translation": "在比赛前进行休息。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章是说“如果（～とすれば）”休息是必要的，那么就应该休息，而不是一概而论主张“比赛前去休息（試合の前に休養を取る）”。"
        }
      ]
    },
    {
      "id": "n2-short-2010-12-03",
      "questionNumber": 3,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "大手ハンバーガー店が今月16日から30日まで、新商品がまずかったら全額返金するというキャンペーンを実施する。",
        "返金は当日限りで、期間中1人1回のみ、それから商品を半分以上食べていないことが条件だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "新商品がまずければいつでも全額返金する。",
          "translation": "如果新商品难吃，随时全额退款。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章明确规定了退款是“有条件的（当日限り、半分以上食べていない等）”，而不是“随时（いつでも）”可以退款。"
        },
        {
          "number": 2,
          "text": "どの商品でもまずければ条件付きで全額返金する。",
          "translation": "无论是哪种商品，只要难吃就有条件地全额退款。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "活动的退款对象仅限于“新商品（新商品）”，而不是“任何商品（どの商品でも）”。"
        },
        {
          "number": 3,
          "text": "新商品の味が気に入らなければ、条件付きで全額返金する。",
          "translation": "如果对新商品的味道不满意，有条件地全额退款。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了活动对象为“新商品”，且退款是“附带条件的（当日限りで、期間中1人1回のみ…）”。"
        },
        {
          "number": 4,
          "text": "どの商品でも味が気に入らなければ1回だけ全額返金する。",
          "translation": "无论是哪种商品，只要对味道不满意，仅限1次全额退款。",
          "correct": false,
          "error": "opposite",
          "explanation": "同样，活动对象并不是“任何商品（どの商品でも）”，而是特定指“新商品”。"
        }
      ]
    },
    {
      "id": "n2-short-2010-12-04",
      "questionNumber": 4,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "ご来場者カードに商品番号をご記入いただき、販売スタッフにお渡しください。",
        "販売スタッフがお届け先やご希望日をお伺いし、その後、お会計となります。"
      ],
      "options": [
        {
          "number": 1,
          "text": "来場者カードに商品番号とお届け先および希望日を記入して販売スタッフに渡した後、代金を支払う。",
          "translation": "在入场者卡片上填写商品编号、送货地址以及期望日期并交给销售人员后，支付货款。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "地址（お届け先）和期望日期（希望日）是销售人员口头询问的，不需要顾客填写在卡片上。"
        },
        {
          "number": 2,
          "text": "来場者カードに商品番号と配達希望日を記入して販売スタッフに渡し、商品が自宅に届いたときに代金を支払う。",
          "translation": "在入场者卡片上填写商品编号和期望送货日期并交给销售人员，在商品送到家时支付货款。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "同上，期望日期不需要填写在卡片上，且结账是当场进行（その後、お会計となります），并非货到付款（商品が自宅に届いたときに代金を支払う）。"
        },
        {
          "number": 3,
          "text": "商品番号と希望日など書いた来場者カードを販売スタッフに渡し、商品を届けてもらった後で代金を支払う。",
          "translation": "将写有商品编号和期望日期等的入场者卡片交给销售人员，在让人把商品送达后支付货款。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "期望日期不需要写在卡片上，且并非货到付款（届けてもらった後で代金を支払う）。"
        },
        {
          "number": 4,
          "text": "商品番号を書いた来場者カードを販売スタッフに渡して配達日などを確認した後、代金を支払う。",
          "translation": "将写有商品编号的入场者卡片交给销售人员并确认送货日期等之后，支付货款。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了“在卡片上填写商品编号并交给销售人员”、“确认送货日期”、“支付货款”的正确流程。"
        }
      ]
    },
    {
      "id": "n2-short-2010-12-05",
      "questionNumber": 5,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "一人の時は、朝目覚めて寝るまで「何をすべきか",
        "一日中、選択と決断をし、その結果を自分一人で引き受けねばならない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "実力があれば、自由にできる部分もあるから",
          "translation": "只要有实力，也有能自由支配的部分。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到“对于没有实力的人来说自由太沉重”，但并没有说在公司上班是因为“有实力就有自由”所以轻松。"
        },
        {
          "number": 2,
          "text": "周囲の協力が得られれば、時間を自由に使えるから",
          "translation": "如果能得到周围的协助，就能自由使用时间。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章中并未提及“得到周围的协助”以及“自由使用时间”。"
        },
        {
          "number": 3,
          "text": "自分の能力に適したしごとが与えられ無理がないから",
          "translation": "会被分配适合自己能力的工作，所以不勉强。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章中并未提及被分配“适合自己能力的工作”。"
        },
        {
          "number": 4,
          "text": "自分一人で決めることも責任を取ることもしなくて済むから",
          "translation": "因为不需要自己一个人做决定，也不需要独自承担责任。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文章中独自生活需要“自己做判断和决定”、“独自承担结果”的反面，即公司生活不需要独自面对这些，因此感到轻松。"
        }
      ]
    }
  ],
  "2010.7": [
    {
      "id": "n2-short-2010-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "人間の心理にはハロー（後光）効果といって、最初に受けた印象を強めていく傾向があります。"
      ],
      "options": [
        {
          "number": 1,
          "text": "新しいイメージを次々に重ねてことで、最初の印象は次第に変化していく。",
          "translation": "通过不断叠加新的印象，最初的印象会逐渐发生变化。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章提到的是「最初に受けた印象を強めていく」（强化最初的印象）以及「イメージを重ねていく」（叠加印象），说明最初的印象不仅没有发生变化，反而被固化和加深了。"
        },
        {
          "number": 2,
          "text": "初対面のときに受けた印象は、その後に持つイメージに影響を与えていく。",
          "translation": "初次见面时留下的印象，会影响后续对这个人的整体看法。",
          "correct": true,
          "error": null,
          "explanation": "选项内容契合了文章中「最初に受けた印象を強めていく傾向があります」（有不断强化最初印象的倾向）的观点，即第一印象会左右后续产生的看法。"
        },
        {
          "number": 3,
          "text": "だれとでもよい関係を築いておけば、初対面の人にもよいイメージを与えられる。",
          "translation": "只要和大家都建立良好的关系，就能给初次见面的人留下好印象。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章探讨的是由于第一印象而产生的心理现象（如「清潔な印象をうけると…よいイメージを重ねていきます」），该选项颠倒了因果关系，讨论的是如何去给初次见面的人留下好印象。"
        },
        {
          "number": 4,
          "text": "最初に悪い印象を与えてしまっても、その後の付き合いでイメージは変えられる。",
          "translation": "哪怕最初留下了坏印象，也可以通过随后的交往来改变形象。",
          "correct": false,
          "error": "not-stated",
          "explanation": "根据原文「悪い印象を重ねてしまう」（会叠加坏印象），如果在最初给人留下了散漫的印象，后续往往也会被叠加负面看法，文中并未提及可以通过交往改变这层形象。"
        }
      ]
    },
    {
      "id": "n2-short-2010-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "森林の役割を重視するあまり、自然の循環を忘れた『植林神話",
        "木を植えることはいいことだ。われわれは無条件にそう考えがちだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "乾燥地帯の地下水を増やすには、環境に適した木を植える必要があると考えること",
          "translation": "认为为了增加干燥地带的地下水，有必要种植适合环境的树木。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章提到在干燥地带种树「少ししかない水が木に吸い取られる」（少量的水会被树吸走）导致地下水干涸，并没有提到为了增加地下水去种树。"
        },
        {
          "number": 2,
          "text": "自然界の水の循環を考慮して、場所を選んで木を植えたほうがいいと考えること",
          "translation": "认为考虑到自然界的水循环，最好选择适宜的地点来种树。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "选项说的是“考虑到水循环去选择地点种树”，这是作者提倡的理智做法，而“植树神话”恰恰是原文指出的「自然の循環を忘れた」（忘记了自然循环）的盲目行为。"
        },
        {
          "number": 3,
          "text": "自然界における森林の役割に注目し、木を植えるのはいいことだと考えること",
          "translation": "关注森林在自然界中的作用，认为只要种树就是一件好事。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文的「森林の役割を重視するあまり」（过于重视森林的作用）以及开头提到的「木を植えることはいいことだ」（种树是好事）这种无条件的盲目认知。"
        },
        {
          "number": 4,
          "text": "乾燥地帯での森林の役割を見直して、木をどんどん植えるようと考えること",
          "translation": "认为要重新审视森林在干燥地带的作用，从而不断地去种树。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“植树神话”是泛指世界上普遍存在的一种认知，并不是特指在干燥地带「役割を見直して」（重新审视森林的作用）之后才去种树。"
        }
      ]
    },
    {
      "id": "n2-short-2010-7-03",
      "questionNumber": 3,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "本製品をお買い上げのお客様へのアンケート用紙の配布およびご協力の呼びかけをお願いいたします。"
      ],
      "options": [
        {
          "number": 1,
          "text": "販売店が、この製品の売り上げをさらに伸ばすことに協力する。",
          "translation": "经销商在进一步提高该产品销售额方面予以配合。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文虽然提到「順調に売り上げを伸ばしてまいりました」（销售额顺利增长），但这只是一句陈述，并没有在信中要求经销商去配合提高销售额。"
        },
        {
          "number": 2,
          "text": "販売店が、お客様にアンケート用紙を渡すことに協力する。",
          "translation": "经销商在向顾客发放问卷调查表方面予以配合。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "经销商的任务确实包括「アンケート用紙の配布」（发放问卷调查表），但这属于「配布」这部分的内容。此处的「ご協力」（配合）是经销商需要向顾客呼吁的内容，并非指发放问卷这一动作本身。"
        },
        {
          "number": 3,
          "text": "この製品を買った人が、それを他の人にすすめることに協力する。",
          "translation": "购买了该产品的人在向他人推荐该产品方面予以配合。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文中没有提到需要购买者「他の人にすすめる」（向他人推荐）这方面的内容。"
        },
        {
          "number": 4,
          "text": "この製品を買った人が、アンケートに答えることに協力する。",
          "translation": "购买了该产品的人在回答问卷方面予以配合。",
          "correct": true,
          "error": null,
          "explanation": "恰当地指出了「ご協力」（配合）的主体是「お客様」（购买产品的人），而配合的具体事项是回答调查问卷。"
        }
      ]
    },
    {
      "id": "n2-short-2010-7-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "いずれ装置が完全に機能すれば、地球から新たに水を運ぶことも不要になる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "実験や酸素を作るときには地球から運ばれた水が使用される。",
          "translation": "在进行实验或制造氧气时，会使用从地球运来的水。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "根据原文「再生された水は飲料水や実験のほか、酸素を作り出すのにも使われる」（再生水除了用作饮用水和实验外，还被用来制造氧气），实验和制氧使用的是再生水。"
        },
        {
          "number": 2,
          "text": "使用後の水はリサイクルされ、再生装置からすべて供給される。",
          "translation": "使用后的水会被回收，全部由再生装置提供。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「地球から新たに水を運ぶことも不要になる」（就不再需要从地球运送新水了）这一最终结果。"
        },
        {
          "number": 3,
          "text": "飲料水は地球からの水を使用し、ほかは再生装置から供給される。",
          "translation": "饮用水使用来自地球的水，其他的由再生装置提供。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文明确说明「再生された水は飲料水…に使われる」（再生水用作饮用水），饮用水并非全部来自地球。"
        },
        {
          "number": 4,
          "text": "地球から運ばれる水と再生装置で作られた水の両方が使用される。",
          "translation": "从地球运来的水和再生装置制造的水都会被使用。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "当装置完全发挥功能时，原文指出「地球から新たに水を運ぶことも不要になる」（不再需要从地球运送新水了），因而不会出现两者并用的情况。"
        }
      ]
    },
    {
      "id": "n2-short-2010-7-05",
      "questionNumber": 5,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "相手の心と行動に影響をあたえ、やる気を出させたり、自信をもたせたり、伸びていくようにする。つまり、こちらが望んでいるような方向へ向かわせることがねらいなのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "相手を伸ばしたいという目的を持った行為である。",
          "translation": "带有想让对方成长这一目的的行为。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「伸びていくようにする」（让其获得成长）这一核心目的。"
        },
        {
          "number": 2,
          "text": "相手自身が望む方向へ向かうようにする行為である。",
          "translation": "让对方朝着自身所期望的方向发展的行为。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文写的是「こちらが望んでいるような方向へ向かわせる」（让对方朝着我们所期望的方向发展），而不是顺着对方自身期望的方向。"
        },
        {
          "number": 3,
          "text": "相手に自分が感じたことをそのまま伝える行為である。",
          "translation": "将自己的感受原原本本传达给对方的行为。",
          "correct": false,
          "error": "opposite",
          "explanation": "根据原文「自然な気持ちのあらわれなどではなく、ほかの狙いをもった…きわめて意図的な行為」（并非自然情感的流露，而是带有其他目的、极其刻意的行为），说明这种夸奖并不是单纯去传达自身感受。"
        },
        {
          "number": 4,
          "text": "相手に自然な気持ちを表現させようとする行為である。",
          "translation": "试图让对方表达自然情感的行为。",
          "correct": false,
          "error": "not-stated",
          "explanation": "夸奖的目的在于「相手の心と行動に影響をあたえ」（对对方的内心和行动产生影响），原文并未提及要让对方表现出自然的情感。"
        }
      ]
    }
  ],
  "2011.12": [
    {
      "id": "n2-short-2011-12-01",
      "questionNumber": 1,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "『寒さに強い"
      ],
      "options": [
        {
          "number": 1,
          "text": "気温の低下に対応できるようになる",
          "translation": "变得能够应对气温的下降。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「寒さの変化に早く適応できる」（能够快速适应寒冷变化）的内容。"
        },
        {
          "number": 2,
          "text": "気温の変化を感じなくなる",
          "translation": "变得感觉不到气温的变化。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是适应变化（「適応する」），并没有说变得感觉不到（「感じなくなる」）变化。"
        },
        {
          "number": 3,
          "text": "寒さが敏感にわかるようになる",
          "translation": "变得对寒冷十分敏感。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章讨论的是适应能力，而不是让身体对寒冷变得敏感（「敏感にわかるようになる」）。"
        },
        {
          "number": 4,
          "text": "寒さに耐える強さが身につく",
          "translation": "掌握忍耐寒冷的强度。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文明确指出锻炼的是后者，即适应变化的强度，而不是前者忍耐寒冷的强度（「寒さに耐える強さ」）。"
        }
      ]
    },
    {
      "id": "n2-short-2011-12-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "残り１０台につきましては誠に申し訳ございませんが、製造が注文に追い付かず来月以降になる予定です。ただいまできるだけ早い発送を目指しておりますが、もうしばらくお待ちいただけますでしょうか。"
      ],
      "options": [
        {
          "number": 1,
          "text": "一部の商品の発送が遅れるので待ってほしい",
          "translation": "一部分商品的发送会延迟，希望对方等待。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「残り１０台につきましては…来月以降になる予定です」以及「もうしばらくお待ちいただけますでしょうか」。"
        },
        {
          "number": 2,
          "text": "一部の商品の製造が追いつかないので注文の数量を変更してほしい",
          "translation": "一部分商品的制造跟不上，希望对方更改订单数量。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文只是说制造跟不上，并没有要求对方「注文の数量を変更してほしい」（更改订单数量）。"
        },
        {
          "number": 3,
          "text": "すべての商品を同時に発送できるように努力している",
          "translation": "正在努力使所有商品能够同时发送。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文明确提到100台中有90台会在本月底发送，剩余10台下个月以后发送，并非「すべての商品を同時に発送」（所有商品同时发送）。"
        },
        {
          "number": 4,
          "text": "すべての商品の製造が間に合わないので来月以降の発送になる",
          "translation": "所有商品的制造都来不及，所以会在下个月以后发送。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文指出是「残り１０台」（剩下的10台）来不及，并不是「すべての商品」（所有商品）都来不及。"
        }
      ]
    },
    {
      "id": "n2-short-2011-12-03",
      "questionNumber": 3,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "どこかで手違いが生じたのではないかと思いますが、再度ご確認のうえ、至急注文した品をお送り下さるようにお願いいたします。"
      ],
      "options": [
        {
          "number": 1,
          "text": "商品到着の連絡。",
          "translation": "联系商品已送达。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "邮件开头确实提到了商品到达，但这只是陈述背景，并不是发件人「最も伝えたいこと」（最想传达的事情）。"
        },
        {
          "number": 2,
          "text": "「日本語の友・初級」を預かる。",
          "translation": "告知暂存《日语之友·初级》。",
          "correct": false,
          "error": "relation-error",
          "explanation": "邮件末尾提到了暂存错发的教材，但这只是补充说明，核心目的还是为了索要正确的教材。"
        },
        {
          "number": 3,
          "text": "「日本語の友・初級」を急いで送ってほしい。",
          "translation": "希望赶紧送来《日语之友·初级》。",
          "correct": false,
          "error": "relation-error",
          "explanation": "原文明确指出收到的是初级教材，而自己订购的是中级教材。要求对方赶紧送来发错的“初级”教材不符合逻辑。"
        },
        {
          "number": 4,
          "text": "「日本語の友・中級」を急いで送ってほしい。",
          "translation": "希望赶紧送来《日语之友·中级》。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「至急注文した品をお送り下さるようにお願いいたします」（尽快将我们订购的商品寄过来）这一核心诉求，而订购的商品正是中级教材。"
        }
      ]
    },
    {
      "id": "n2-short-2011-12-04",
      "questionNumber": 4,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "しかし、下位だと思っている人が一人でゾウに命令したりすると、反発して鼻や体で押されたりして事故となってしまうのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "ゾウが新人の順位が低いと思っている間は反抗することがあるから",
          "translation": "因为大象在认为新人地位低期间有可能会进行反抗。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「下位だと思っている人が一人でゾウに命令したりすると、反発して…」（如果被它们认为地位较低的人单独对它们下命令，它们就会产生反抗）。"
        },
        {
          "number": 2,
          "text": "ゾウが新人をベテランだと思いこみ経験者の命令を聞かなくなるから",
          "translation": "因为大象会把新人误认为是老手，从而不听经验丰富者的命令。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文指出大象把新人看作地位最低（「ゾウから見れば最低」），并不会把他们当成老手（「ベテランだと思いこみ」）。"
        },
        {
          "number": 3,
          "text": "世話に慣れていない新人がゾウに対して命令ばかりしてしまうから",
          "translation": "因为还不习惯照顾大象的新人只会一味地对大象下命令。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到如果地位低的人单独下命令大象会反抗，并没有说是因为新人只会一味地对大象下命令（「命令ばかりしてしまう」）。"
        },
        {
          "number": 4,
          "text": "新人に順位がわからずゾウが反発して暴れ出すから",
          "translation": "因为新人不清楚排序，导致大象产生反抗而发狂。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是大象会给人排序，而不是“新人不清楚排序”（「新人に順位がわからず」）导致大象反抗。"
        }
      ]
    },
    {
      "id": "n2-short-2011-12-05",
      "questionNumber": 5,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "カメラを間に置いた向こう側とぼくとの表現性が、フィフティ：フィフティの割合で成り立っている。"
      ],
      "options": [
        {
          "number": 1,
          "text": "写真家が写される側に刺激されて表現したもの",
          "translation": "摄影师被拍摄对象所触动而表达出的作品。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "虽然文章提到了作者对表达的认可，但核心逻辑是双方各占一半的共生成立，而不仅是单方面的「刺激されて」（被触动）。"
        },
        {
          "number": 2,
          "text": "写真家が主体的に対象を選んで表現したもの",
          "translation": "摄影师主动地选择对象并表达出的作品。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文特别强调了不能说是「１００パーセント僕の表現」（百分之百我的表达），暗示摄影师并不是完全「主体的に」（主动地）在进行创作。"
        },
        {
          "number": 3,
          "text": "写真家が対象を偶然にとらえて表現したもの",
          "translation": "摄影师偶然捕捉到对象并表达出的作品。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章虽然提到「サッと横取りして」（迅速截取），但这并不是说捕捉是「偶然に」（偶然地），其重点在于双方表达性的平衡。"
        },
        {
          "number": 4,
          "text": "写真家が写される側と共に表現したもの",
          "translation": "摄影师与被拍摄对象共同表达出的作品。",
          "correct": true,
          "error": null,
          "explanation": "准确契合了原文「５０：５０の表現物」（50:50的表达产物）以及由双方共同促成影像结实的观点。"
        }
      ]
    }
  ],
  "2011.7": [
    {
      "id": "n2-short-2011-7-01",
      "questionNumber": 1,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "これらはどれも人類によって起こされた問題である。しかし、このような問題を環境問題と呼ぶことで、人は無意識のうちにその問題から目をそらしているのではないか。むしろ『人間問題"
      ],
      "options": [
        {
          "number": 1,
          "text": "環境は人間にしか変えられないから",
          "translation": "因为只有人类才能改变环境。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到「未来の環境を変えることができる」（能改变未来的环境），但并没有说是只有人类才能改变，属于过度推断。"
        },
        {
          "number": 2,
          "text": "良い環境を必要としているのは人間だから",
          "translation": "因为需要良好环境的是人类。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章重点在于这些问题是人类造成的，人们需要去正视它（「自分の問題としてとらえる」），并没有提及需要良好环境的是人类。"
        },
        {
          "number": 3,
          "text": "人間が責任を持って考えるべき問題だから",
          "translation": "因为这是人类应该负责任去思考的问题。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「自分の問題としてとらえる」（当作自身的问题来对待）以及不应「目をそらしている」（回避问题）的核心观点。"
        },
        {
          "number": 4,
          "text": "人間の生活に多大な影響を与えている問題だから",
          "translation": "因为这是对人类生活产生巨大影响的问题。",
          "correct": false,
          "error": "relation-error",
          "explanation": "作者呼吁改名的原因是希望人类不要回避自己引发的问题，而不是因为它对生活影响大。"
        }
      ]
    },
    {
      "id": "n2-short-2011-7-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "お客様がプリンター用インクを追加購入なさる際に、定価の５％引きでお求めいただいておりますが、この７、８月中に購入のお申し込みをされたお客様には、さらにお得な特別割引価格でお届けいたします。"
      ],
      "options": [
        {
          "number": 1,
          "text": "「ジミック」のプリンターを使っている人は、７、８月中だけインクを５％引きで買うことができる。",
          "translation": "使用“Jimmick”打印机的人，只有在7、8月份才能以5%的折扣购买墨水。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说平时就是「定価の５％引き」（定价的5%折扣），并不是只有7、8月份才打95折。"
        },
        {
          "number": 2,
          "text": "「ジミック」のプリンターを使っている人が７、８月中にインクを注文すれば、５％引きより安く買うことができる。",
          "translation": "使用“Jimmick”打印机的人如果在7、8月份订购墨水，可以买到比5%折扣更便宜的价格。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文在7、8月份订购会提供「さらにお得な特別割引価格」（更加实惠的特别折扣价格），也就是比平时5%的折扣更便宜。"
        },
        {
          "number": 3,
          "text": "「ジミック」のプリンターを７、８月中に買う人は、インクを５％引きより安く買うことができる。",
          "translation": "在7、8月份购买“Jimmick”打印机的人，可以买到比5%折扣更便宜的墨水。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文明确提到折扣对象是「プリンター用インクを追加購入なさる」（追加购买打印机用墨水）的顾客，而不是购买打印机的人。"
        },
        {
          "number": 4,
          "text": "「ジミック」のプリンターを７、８月中に買う人がインクを一緒に注文すれば、どちらも５％引きで買うことができる。",
          "translation": "在7、8月份购买“Jimmick”打印机的人如果一起订购墨水，两者都可以享受5%的折扣。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中没有提到将打印机和墨水一起订购的折扣方案，属于无中生有。"
        }
      ]
    },
    {
      "id": "n2-short-2011-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "車の安全にとって重要なのはアクセルではなく、ブレーキなのだ。",
        "われわれ人間も恐怖や不安という名のブレーキを使って、自分たちの安全に役立てることが大切だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "恐怖や不安は、安全性の向上を妨げる。",
          "translation": "恐怖和不安会阻碍安全性的提高。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说恐怖和不安是“刹车”，「安全にとって重要なのは…ブレーキなのだ」（对安全来说重要的是刹车），指出它们有助于安全，而不是阻碍安全。"
        },
        {
          "number": 2,
          "text": "恐怖や不安を感じることが、安全につながる。",
          "translation": "感觉到恐怖和不安，关系到安全。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「恐怖や不安という名のブレーキを使って、自分たちの安全に役立てることが大切だ」（使用名为恐怖和不安的刹车，来为自身的安全发挥作用是很重要的）。"
        },
        {
          "number": 3,
          "text": "恐怖や不安を取り除くことが、安全に役立つ。",
          "translation": "消除恐怖和不安，有助于安全。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文强调的是利用这种情绪，就像「ブレーキのない車を走らせることはできない」（没有刹车的汽车无法行驶）一样，消除它们反而不安全。"
        },
        {
          "number": 4,
          "text": "恐怖や不安があるうちは、安全とは言えない。",
          "translation": "只要有恐怖和不安，就不能说是安全的。",
          "correct": false,
          "error": "opposite",
          "explanation": "与文章的主旨完全相反，作者认为感受到恐怖和不安正是保障安全的重要机制。"
        }
      ]
    },
    {
      "id": "n2-short-2011-7-04",
      "questionNumber": 4,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "読みとろうと思えばどんなできごとからでも『自分にとって意味あること"
      ],
      "options": [
        {
          "number": 1,
          "text": "強い影響を与えるかどうかは、読み手の姿勢で決まるものであるから",
          "translation": "因为是否会带来强烈影响，取决于阅读者的态度。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文的核心结论：「学ぼうとする姿勢があれば何からでも価値あることが学びとれる」（只要有想要去学习的态度，无论从什么事物中都能学到有价值的东西）。"
        },
        {
          "number": 2,
          "text": "どのような作品でも、読めば読むほど強い影響を受けるものであるから",
          "translation": "因为无论什么样的作品，只要越读就越能受到强烈影响。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章表达的是“只要有态度，简短的话语也能影响人”，并没有说“越读就越能受到强烈影响”。"
        },
        {
          "number": 3,
          "text": "人々にどのような影響を与えるかは、書物によってそれぞれ異なるから",
          "translation": "因为会给人们带来什么样的影响，因书籍而异。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然书籍不同影响不同，但这并不是作者想表达的核心。作者强调的是「学ぼうとする姿勢」（学习的态度）。"
        },
        {
          "number": 4,
          "text": "書物だけでなく、世の中のできごとからもさまざまな影響を受けているから",
          "translation": "因为不仅是从书籍，从世间的事情中也会受到各种各样的影响。",
          "correct": false,
          "error": "relation-error",
          "explanation": "原文确实提到我们也会从世间的事情中解读和学习（「世の中のあらゆるできごとについても同じように…読んでいる」），但这只是说明影响的来源广泛，并非解释“为什么小篇幅作品也能产生大影响”的原因。原因在于人的“态度”。"
        }
      ]
    },
    {
      "id": "n2-short-2011-7-05",
      "questionNumber": 5,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "絵画とは目の前の自然を心のなかに消化し、それをもう一度吐きだす作業によって生まれるのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "目で見たものを想像力で補い美しく描き表したもの",
          "translation": "用想象力补充眼睛看到的东西，并将其美丽地描绘出来。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章提到的是「心のなかに消化し」（在内心中消化），并没有提到要用「想像力で補い」（用想象力去补充）。"
        },
        {
          "number": 2,
          "text": "目で見たものを心のなかに感じ取って描き表したもの",
          "translation": "将眼睛看到的东西在内心中感受并描绘出来。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「目の前の自然を心のなかに消化し、それをもう一度吐きだす」（将眼前的自然在内心中消化，然后再次表达出来）。"
        },
        {
          "number": 3,
          "text": "目の前に存在しないものを想像しながら描き表したもの",
          "translation": "一边想象着眼前不存在的东西一边描绘出来。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是「目の前の自然を」（眼前的自然），并非「目の前に存在しないもの」（眼前不存在的东西）。"
        },
        {
          "number": 4,
          "text": "目の前にあるものをできるだけ現実に近づけて描き表したもの",
          "translation": "尽可能逼真地将眼前的东西描绘出来。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章开头就否定了单纯的写实：「視覚にとらえたものをただ単に描いても、決して絵画にはならない」（如果只是单纯地描绘视觉捕捉到的东西，是无法成为绘画的）。"
        }
      ]
    }
  ],
  "2012.12": [
    {
      "id": "n2-short-2012-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "書かれている主張や根拠が本当に妥当だろうか、論理的に筋が通っているだろうか、別の考え方はないだろうかと考えて読むことが、とても大切です。こうして読むことによって…"
      ],
      "options": [
        {
          "number": 1,
          "text": "別の主張や意見が述べられていないか探しながら読むこと",
          "translation": "一边寻找是否陈述了其他的观点和意见一边阅读。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是去思考“是否还有其他思考方式（別の考え方はないだろうか）”，而不是一边寻找文章中是否陈述了其他的观点一边阅读（別の主張や意見が述べられていないか探しながら読むこと）。"
        },
        {
          "number": 2,
          "text": "内容の論理性や妥当性などを考えながら読むこと",
          "translation": "一边思考内容的逻辑性和妥当性等一边阅读。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了前文所述的一边思考“是否真的妥当（本当に妥当だろうか）”和“逻辑上是否说得通（論理的に筋が通っているだろうか）”一边阅读的内容。"
        },
        {
          "number": 3,
          "text": "理解を深めたり、見方を広げるように読むこと",
          "translation": "为了加深理解、拓宽视野去阅读。",
          "correct": false,
          "error": "relation-error",
          "explanation": "“加深理解、拓宽视野”是“这样阅读”之后带来的结果或目的，而不是“这样阅读”本身的方法。"
        },
        {
          "number": 4,
          "text": "理解が妥当かどうか確認しながら読むこと",
          "translation": "一边确认自己的理解是否妥当一边阅读。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到的是确认主张和根据是否妥当，而不是确认“自己的理解是否妥当（理解が妥当かどうか確認する）”。"
        }
      ]
    },
    {
      "id": "n2-short-2012-12-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "今年は、身の回りの環境への理解を深めていただくため、市民の皆様にもご参加いただきたいと考えております。"
      ],
      "options": [
        {
          "number": 1,
          "text": "水質調査方法を学び、周辺の川の汚染を調べてほしい。",
          "translation": "希望大家学习水质调查方法，调查周边河流的污染情况。",
          "correct": false,
          "error": "not-stated",
          "explanation": "选项说希望大家调查周边河流的污染情况，但通知只是说参与美安川的水质调查，并未提及调查“污染（汚染）”。"
        },
        {
          "number": 2,
          "text": "水質調査を見学し、市役所の活動への理解を深めてほしい。",
          "translation": "希望大家参观水质调查，加深对市政府活动的理解。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "通知是呼吁大家共同参与（「ご参加いただきたい」），而不是仅仅去参观（「見学し」）。此外，目的也不是加深对市政府活动的理解。"
        },
        {
          "number": 3,
          "text": "水質調査に参加し、身近な環境についてもっと知ってほしい。",
          "translation": "希望大家参与水质调查，更多地了解身边的环境。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文的「ご参加いただきたい」（参与）以及「身の回りの環境への理解を深めていただくため」（加深对周围环境的理解，即多了解身边的环境）。"
        },
        {
          "number": 4,
          "text": "水質調査結果について、ホームページで公開するので見てほしい。",
          "translation": "关于水质调查结果，将在主页上公开，希望大家去看。",
          "correct": false,
          "error": "relation-error",
          "explanation": "原文确实提到了会在主页上公开调查结果，但这只是活动的后续安排之一，并非这则通知「最も伝えたいこと」（最想传达的内容）。"
        }
      ]
    },
    {
      "id": "n2-short-2012-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "昼食時には本来の目的以外で席を利用している、私語が多く迷惑になっているなどといった、様々な苦情が総務課に寄せられています。社員皆が気持ちよく利用できるようご協力をお願いします。"
      ],
      "options": [
        {
          "number": 1,
          "text": "資料室の適切な利用を求める。",
          "translation": "要求恰当地使用资料室。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了针对「本来の目的以外で席を利用」（用于原本目的之外的用途）等不当行为，要求大家配合以便「気持ちよく利用できる」（愉快地使用），即要求恰当使用资料室。"
        },
        {
          "number": 2,
          "text": "資料室のいっそうの利用を求める。",
          "translation": "要求进一步多加利用资料室。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到使用者增加带来了问题，并不是为了呼吁大家「いっそうの利用」（进一步利用）。"
        },
        {
          "number": 3,
          "text": "資料室の利用時間の厳守を求める。",
          "translation": "要求严格遵守资料室的使用时间。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章指出的问题是用途不当和私自交谈，并没有提到「利用時間」（使用时间）的问题。"
        },
        {
          "number": 4,
          "text": "資料室の利用法について意見を求める。",
          "translation": "征求关于资料室使用方法的意见。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "总务课已经收到了投诉，发文是为了要求大家配合改善行为，而不是在「意見を求める」（征求意见）。"
        }
      ]
    },
    {
      "id": "n2-short-2012-12-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "私たちはふだん生活している中で、つまり太陽の光のもとで見たとき、イチゴがどんな色をしているのかを知っています。"
      ],
      "options": [
        {
          "number": 1,
          "text": "異なる照明のもとで見た色",
          "translation": "在不同的照明下看到的颜色",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到我们会将在变化了的照明下看到的颜色，贴近我们“已经知道的颜色”去感知，所以“已经知道的颜色”并不是在不同照明下看到的颜色。"
        },
        {
          "number": 2,
          "text": "太陽や蛍光灯のもとで見た色",
          "translation": "在太阳或荧光灯下看到的颜色",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章明确将“已经知道的颜色”等同于在“太阳光下看到的颜色”（「太陽の光のもとで見たとき…」），并未包含荧光灯。"
        },
        {
          "number": 3,
          "text": "蛍光灯のもとで見た色",
          "translation": "在荧光灯下看到的颜色",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "同理，根据文章，“已经知道的颜色”并不是在荧光灯下看到的颜色。"
        },
        {
          "number": 4,
          "text": "太陽のもとで見た色",
          "translation": "在太阳下看到的颜色",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「太陽の光のもとで見たとき、イチゴがどんな色をしているのかを知っています」（在太阳光下看到时，我们是知道草莓是什么颜色的）。"
        }
      ]
    },
    {
      "id": "n2-short-2012-12-05",
      "questionNumber": 5,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "他人に教えようとすることにより、逆に、自分の知識の不完全さに気づかせ、よく自分で考えなおしてみることを動機づけることになるだろう。",
        "これは、知識を安定したものにするのに役立つ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "他人におしえてもらうことで、学ぶ動機が高まる。",
          "translation": "通过让别人教自己，会提高学习的动机。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是“去教别人（他人に教える）”，而不是“让别人教自己（他人におしえてもらう）”。"
        },
        {
          "number": 2,
          "text": "他人におしえてもらうことは、効果的な学びにつながる。",
          "translation": "让别人教自己，能带来有效的学习。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "同样地，文章讨论的是“教别人”，而不是“让别人教自己”。"
        },
        {
          "number": 3,
          "text": "他人におしえることで、おしえるむずかしさを学ぶ。",
          "translation": "通过教别人，能学到教人的难处。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章确实提到了教人很难，但重点在于通过教别人可以发现自己的不足并巩固知识（「自分の知識の不完全さに気づかせ…知識を安定したものにするのに役立つ」），而不是为了学习“教人有多难”。"
        },
        {
          "number": 4,
          "text": "他人におしえることは、自分自身の学びにつながる。",
          "translation": "教别人，有助于自身的学习。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文的核心主旨，即教别人的过程能激发自己重新思考，对巩固自身知识有帮助（「自分自身の学びにつながる」）。"
        }
      ]
    }
  ],
  "2012.7": [
    {
      "id": "n2-short-2012-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "今までも人工知能は使われていたが、人のことばや動きから、意味を理解して動くロボットというのは世界で初めてだそうだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "「白い、皿、置く」と言いながら両手で実際に白い皿を置くこと",
          "translation": "一边说“白色的、盘子、放”，一边用双手实际去放白色的盘子。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这只是文章开头举的一个具体例子，并不能全面概括该机器人与以往机器人的本质区别。"
        },
        {
          "number": 2,
          "text": "人が言ったり、したりすることを理解して同じように動けること",
          "translation": "能够理解人所说的话和所做的事，并能做出同样的动作。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中「人のことばや動きから、意味を理解して動くロボットというのは世界で初めてだそうだ」所指出的首创之处。"
        },
        {
          "number": 3,
          "text": "世界で初めて人工知能が用いられたロボットであるということ",
          "translation": "是世界上首个应用了人工智能的机器人。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文明确提到「今までも人工知能は使われていた」（以前也使用过人工智能），因此它并不是首个使用人工智能的机器人。"
        },
        {
          "number": 4,
          "text": "単語や文法を覚えさせておけば外国語もできるようになること",
          "translation": "只要让它记住单词和语法，就能掌握外语。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文说的是「初めに単語や文法を教えておく必要はない」（不需要事先教授单词或语法），选项表述与原文描述相反。"
        }
      ]
    },
    {
      "id": "n2-short-2012-7-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "衣類・日用品・食料品・台所用品・食器・かばんなどを受け付けておりますが、いずれも未使用のものに限らせていただきます。また、勝手ながら家具・電気製品・おもちゃは受け付けておりませんので、ご遠慮ください。"
      ],
      "options": [
        {
          "number": 1,
          "text": "箱に入った未使用のヘアドライヤーと説明書",
          "translation": "装在盒子里未使用的电吹风和说明书。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "选项中的“电吹风”属于电器产品。根据原文「家具・電気製品・おもちゃは受け付けておりません」（我们不接收家具、电器产品、玩具），可知这是不能提供的物品。"
        },
        {
          "number": 2,
          "text": "電気ポットと一度だけ使用したコーヒーカップ",
          "translation": "电热水瓶和只使用过一次的咖啡杯。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "选项中包含“电热水瓶”和“使用过一次的咖啡杯”。原文明确说明「電気製品…は受け付けておりません」（不接收电器产品）且「未使用のものに限らせていただきます」（仅限于未使用的物品），因此均不符合条件。"
        },
        {
          "number": 3,
          "text": "一度しか使っていない新品同様のお皿のセット",
          "translation": "只使用过一次、像新的一样的餐具套装。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "选项中是“只使用过一次”的餐具套装。根据原文「未使用のものに限らせていただきます」（仅限于未使用的物品），使用过的物品是不能接收的。"
        },
        {
          "number": 4,
          "text": "バーゲンセールで買ったが一度も着なかった服",
          "translation": "在降价促销时买来但一次都没穿过的衣服。",
          "correct": true,
          "error": null,
          "explanation": "选项中是“买来后一次都没穿过的衣服”。这符合原文「衣類…を受け付けております」（接收服装）以及「未使用のものに限らせていただきます」（仅限于未使用的物品）这两个条件。"
        }
      ]
    },
    {
      "id": "n2-short-2012-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "何気なく口にした言葉であっても、その言葉はその人の心のメッセージであり、正直に本心をつたえているのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "相手の心につたわるもの",
          "translation": "传达到对方心中的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是表达自己的真心，而不是「相手の心につたわる」（传达到对方心中）。"
        },
        {
          "number": 2,
          "text": "相手の心を動かすもの",
          "translation": "打动对方内心的东西。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并没有提到要「相手の心を動かす」（打动对方的内心）。"
        },
        {
          "number": 3,
          "text": "本当の心を表すもの",
          "translation": "表达真实内心的东西。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「正直に本心をつたえている」（诚实地传达着真心）。"
        },
        {
          "number": 4,
          "text": "本当の心を秘するもの",
          "translation": "隐藏真实内心的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章开头确实提到这种话语「何か秘された重要な意味を持っている」（隐藏着某种重要的意义），但这说明它含有深意，而结论指出它实际上是在诚实地传达真心（「本心をつたえている」），并非为了隐藏真心。"
        }
      ]
    },
    {
      "id": "n2-short-2012-7-04",
      "questionNumber": 4,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "届く郵便物の量は、確かにその人の社会的な活動の広さと関係している。たとえ読まれることのないダイレクトメールであっても、それが届くということは、その人が世の中に存在している証拠である。"
      ],
      "options": [
        {
          "number": 1,
          "text": "父に届く郵便物が引退してから少なくなって、開封する楽しみが減ったから",
          "translation": "因为父亲收到的邮件在退休后变少了，拆信的乐趣减少了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章中并没有提到父亲是因为「開封する楽しみが減った」（拆信的乐趣减少了）而不高兴。"
        },
        {
          "number": 2,
          "text": "父に届く郵便物が私のより少なくて、存在感が薄れたと父が感じているから",
          "translation": "因为父亲收到的邮件比我的少，父亲感觉到自己的存在感变弱了。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文章中邮件数量代表「社会的な活動の広さ」（社会活动范围）和「世の中に存在している証拠」（存在于世的证据）的观点，邮件少即存在感变弱（存在感が薄れた）。"
        },
        {
          "number": 3,
          "text": "父に届く郵便物の中身を確認しないで私が勝手に捨ててしまったから",
          "translation": "因为我没有确认寄给父亲的邮件内容就擅自扔掉了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者不看就扔进垃圾桶的是寄给作者自己的直接邮递广告（「私宛の郵便物といっても…ゴミ箱行きになるものが多かった」），并不是扔了父亲的邮件。"
        },
        {
          "number": 4,
          "text": "父に届く郵便物のほとんどが役に立たないものばかりだったから",
          "translation": "因为寄给父亲的邮件几乎全都是没用的东西。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说寄给父亲的邮件没用，而是说寄给作者的大部分是没用的广告。"
        }
      ]
    },
    {
      "id": "n2-short-2012-7-05",
      "questionNumber": 5,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "人材の評価や選抜の方式は、社会の根本的な活力を規定する最も重要なファクターである。",
        "公正な評価が通らない組織は、長い目で見れば必ず衰退する。"
      ],
      "options": [
        {
          "number": 1,
          "text": "短期間で人材を育てられなくなる。",
          "translation": "无法在短时间内培养出人才。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章提到「人材の育成には時間がかかる」（培养人才需要花费时间），但并没有说不公正评价就会导致无法在短时间内培养人才。"
        },
        {
          "number": 2,
          "text": "優秀な人材を獲得できなくなる。",
          "translation": "无法获取优秀人才。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章说各个组织「優秀な人材の獲得に躍起になり」（拼命获取优秀人才），但这并不是不公正评价直接导致的后果，而是组织为了避免衰退所做的努力之一。"
        },
        {
          "number": 3,
          "text": "組織の活力を維持できなくなる。",
          "translation": "无法维持组织的活力。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文评价方式是「活力を規定する」（决定活力）的因素，以及不公正会导致组织「衰退する」（衰退）的逻辑。"
        },
        {
          "number": 4,
          "text": "組織への関心が薄くなる。",
          "translation": "对组织的关注度会变弱。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到的是组织对「いかに公正な評価のシステムを組み込むのかという点に強い関心を払ってきた」（如何引入公正的评价系统给予了高度关注），而不是人们对组织的关注度变弱。"
        }
      ]
    }
  ],
  "2013.12": [
    {
      "id": "n2-short-2013-12-01",
      "questionNumber": 1,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "辞書の編者は、新しい意味が、日本語の中に、きちんと定着するかどうかを見極めている。"
      ],
      "options": [
        {
          "number": 1,
          "text": "新しい意味が将来残るかを注意深く判断しているから",
          "translation": "因为在仔细判断新的含义将来是否会留存下来。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「きちんと定着するかどうかを見極めている」（充分观察并确认是否能稳定下来）的含义，即仔细判断是否能留存到将来。"
        },
        {
          "number": 2,
          "text": "新しい意味がどのように変化するかを考えているから",
          "translation": "因为在考虑新的含义会如何发生变化。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是确认新含义是否能稳定留存，而不是考虑它“会如何变化（どのように変化するか）”。"
        },
        {
          "number": 3,
          "text": "新しい意味をどう説明するかをじっくり考えているから",
          "translation": "因为在仔细斟酌该如何解释新的含义。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章提到编纂者是在观察新含义能否留存，并未提及他们在思考“该如何解释（どう説明するか）”。"
        },
        {
          "number": 4,
          "text": "新しい意味は時間がたつといずれ消えると思っているから",
          "translation": "因为认为新的含义随着时间推移迟早会消失。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章只是提出“如果新含义消失了会怎样”这种假设，并没有断定所有新含义“迟早会消失（いずれ消える）”。"
        }
      ]
    },
    {
      "id": "n2-short-2013-12-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "リサイクル可能な紙類の多くが、いまだに『燃えるごみ",
        "リサイクル"
      ],
      "options": [
        {
          "number": 1,
          "text": "リサイクル可能な紙類をきちんと分別してほしい。",
          "translation": "希望大家能将可回收的纸类好好分类。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文指出纸类被错扔的问题，并呼吁大家彻底分类（「分別の徹底」）的核心诉求。"
        },
        {
          "number": 2,
          "text": "リサイクル可能なものの種類を一つ一つ覚えてほしい。",
          "translation": "希望大家能把可回收物品的种类一个个记住。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到详细的分类方法张贴在箱子上方供大家丢弃前确认（「捨てる前に再度ご確認ください」），并没有要求大家一个个记住（「一つ一つ覚えてほしい」）。"
        },
        {
          "number": 3,
          "text": "ごみの分別方法を変更するので、間違いなく分別してほしい。",
          "translation": "因为要更改垃圾分类方法，希望大家准确无误地分类。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并没有提到要变更垃圾分类方法（「ごみの分別方法を変更する」）。"
        },
        {
          "number": 4,
          "text": "「燃えるごみ」を「リサイクル」のボックスに捨てないでほしい。",
          "translation": "希望大家不要把“可燃垃圾”扔进“可回收”箱中。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章指出的问题是把“可回收纸类”扔进了“可燃垃圾”箱，选项的表述刚好与原文相反。"
        }
      ]
    },
    {
      "id": "n2-short-2013-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "秋の夜にはライトアップが行われ、紅葉と滝が光の中に浮かんで見えて見事です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "１８００年代初めに多田家によって造られた。",
          "translation": "在19世纪初由多田家建造。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章中提到「１８００年代初めまで使用されていた伝統的な建物」（直到19世纪初仍被使用的传统建筑），并没有说是多田家在19世纪初建造了整个庭园。"
        },
        {
          "number": 2,
          "text": "庭園は建物を中心として造られている。",
          "translation": "庭园是以建筑为中心建造的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确提到「庭の中心には池があり」（庭园中心有池塘），而不是以建筑为中心。"
        },
        {
          "number": 3,
          "text": "年を通して多くの観光客が訪れる。",
          "translation": "全年都有许多游客造访。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章提到因为秋季夜晚的灯光效果，「この時期には多くの観光客が訪れます」（这个时期会有许多游客前来造访），并非「年を通して」（全年）都有许多游客。"
        },
        {
          "number": 4,
          "text": "秋の夜には紅葉と滝が美しく見える。",
          "translation": "秋天的夜晚红叶和瀑布看起来很美。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「秋の夜には……紅葉と滝が光の中に浮かんで見えて見事です」（秋天夜晚红叶和瀑布在灯光中浮现，非常壮观）的内容。"
        }
      ]
    },
    {
      "id": "n2-short-2013-12-04",
      "questionNumber": 4,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "保護者が嫌いなものは、子どもも好きになれない",
        "周囲の大人たちが『美味しいね"
      ],
      "options": [
        {
          "number": 1,
          "text": "大人は子どもの好き嫌いを気にしすぎないほうが良い。",
          "translation": "大人最好不要太在意孩子的挑食。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章重点讨论的是大人对食物的态度如何影响孩子，并没有建议大人“不要太在意（気にしすぎないほうが良い）”孩子的挑食。"
        },
        {
          "number": 2,
          "text": "大人の食べ物に対する態度が、子どもの好き嫌いに影響する。",
          "translation": "大人对食物的态度，会影响孩子的喜恶。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中所描述的大人的“讨厌（嫌い）”或“觉得好吃（美味しいね）”的态度，对孩子能否吃下食物产生的影响。"
        },
        {
          "number": 3,
          "text": "子どものころの好き嫌いは、大人になってからも変わらない。",
          "translation": "小时候的挑食，长大后也不会改变。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章并没有讨论小时候的喜好到了“长大后也不会改变（大人になってからも変わらない）”的问题。"
        },
        {
          "number": 4,
          "text": "子どもの好き嫌いをなくすより、食事を楽しむことのほうが大切だ。",
          "translation": "比起消除孩子的挑食，享受进餐更重要。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章结尾提到消除偏食的诀窍是“亲子一起享受（親子で一緒に楽しみながら）”，是为了“消除偏食（偏食をなくす）”提供的方法，而不是说“比起消除偏食，享受进餐更重要（好き嫌いをなくすより、食事を楽しむことのほうが大切）”。"
        }
      ]
    },
    {
      "id": "n2-short-2013-12-05",
      "questionNumber": 5,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "自分で考えることに積極的ではない",
        "自分に何か求められているかを突き詰めて、考えていないから"
      ],
      "options": [
        {
          "number": 1,
          "text": "やる気がなくて、進歩が遅い。",
          "translation": "没有干劲，进步慢。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "「進歩が遅い」（进步慢）是第一种人的特征，「やる気が湧いてこない」（激发不出干劲）是第二种人的特征，并非两者的共同点。"
        },
        {
          "number": 2,
          "text": "考えようとする姿勢が足りない。",
          "translation": "缺乏试图去思考的态度。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一种人「自分で考えることに積極的ではない」（在自己思考方面不够积极）和第二种人「考えていない」（没有思考）的共同特征，即缺乏思考的态度。"
        },
        {
          "number": 3,
          "text": "何が求められているかわからない。",
          "translation": "不知道被要求做什么。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是针对第二种人没有去思考「自分に何か求められているか」（对自己有什么要求）的描述，不适用于第一种人。"
        },
        {
          "number": 4,
          "text": "深く考えず、すぐにあきらめる。",
          "translation": "不深入思考，马上放弃。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "「あきらめが早い」（马上放弃）仅是文章中提及的第二种人的特征，并不适用于第一种人。"
        }
      ]
    }
  ],
  "2013.7": [
    {
      "id": "n2-short-2013-7-01",
      "questionNumber": 1,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "人はそれが本物でないことを知っていて、心の中にある本物のイメージと比べてみて、似ていることを確認する。似てはいるが本物ではなく『物まね",
        "そっくりだ"
      ],
      "options": [
        {
          "number": 1,
          "text": "「物まね」が本物でないと知っているから",
          "translation": "因为知道“模仿”并非真实事物。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文「本物でないことを知っていて」（知道那不是真的）以及「『物まね』であることを意識した時はじめて…」（只有在意识到是模仿时才…）的逻辑关系。"
        },
        {
          "number": 2,
          "text": "「物まね」と本物を比べたことがないから",
          "translation": "因为没有将“模仿”与真实事物进行过比较。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章明确提到人们会将其与心中的真实事物印象进行比较（「心の中にある本物のイメージと比べてみて」），选项表述与原文相反。"
        },
        {
          "number": 3,
          "text": "「物まね」を本物だと思い込んで聞くから",
          "translation": "因为把“模仿”当成了真实事物去听。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "根据原文「本物だと思って聞くので特別感心もしない」（当成真的去听，就不会特别感到钦佩了），把模仿当成真的去听是不会产生钦佩之情的。"
        },
        {
          "number": 4,
          "text": "「物まね」される本物のことを知らないから",
          "translation": "因为不了解被“模仿”的真实事物。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到人们心里有“真实事物的印象（本物のイメージ）”，说明人们是了解真实事物的，选项表述与原文不符。"
        }
      ]
    },
    {
      "id": "n2-short-2013-7-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "検討項目は添付ファイルの通りですので、ご確認ください。",
        "前回の会議での議論をもとに、全員改良案を作成のうえ、当日１０時までに原田までご提出ください。"
      ],
      "options": [
        {
          "number": 1,
          "text": "前回の会議の記録を確認することと、１１日１０時までにシューズ改良案を出すこと",
          "translation": "确认上次会议的记录，并在11日10点前提交跑鞋的改进方案。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "邮件要求基于上次会议的讨论来制定方案，并没有直接要求「前回の会議の記録を確認すること」（确认上次会议的记录）。"
        },
        {
          "number": 2,
          "text": "会議で検討する事柄を確認することと、１１日１０時までにシューズ改良案を出すこと",
          "translation": "确认会议上要讨论的事项，并在11日10点前提交跑鞋的改进方案。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了邮件中「検討項目の確認」（确认讨论项目）和「当日10時までの改良案提出」（当天10点前提交改进方案）的两项要求。"
        },
        {
          "number": 3,
          "text": "シューズの発売予定を確認することと、１１日１５時までに発売方法の改善案を出すこと",
          "translation": "确认跑鞋的预定发售情况，并在11日15点前提交发售方法的改善方案。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "提出的截止时间是「１０時まで」（10点前），并非「１５時まで」（15点前）。此外，提交的是跑鞋构造的「改良案」（改进方案），而不是「発売方法の改善案」（发售方法的改善方案）。"
        },
        {
          "number": 4,
          "text": "全員のシューズ改良案を確認することと、１１日１５時までに発売方法の改善案を出すこと",
          "translation": "确认所有人的跑鞋改进方案，并在11日15点前提交发售方法的改善方案。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "要求全员各自制定并提交改进方案，并没有要求去确认“所有人的改进方案（全員のシューズ改良案を確認する）”。提交截止时间和内容也不符合。"
        }
      ]
    },
    {
      "id": "n2-short-2013-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "しかし、事務作業を簡略化するため、８月より各課で直接注文していただくことになりました。管理も各課でお願いいたします。"
      ],
      "options": [
        {
          "number": 1,
          "text": "事務用品の注文先の会社の変更を伝える。",
          "translation": "传达办公用品订购公司的变更。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文中只提到了订购方式由总务课统一订购改为各科室直接订购，并没有提到要变更“配送服务公司（注文先の会社）”。"
        },
        {
          "number": 2,
          "text": "事務用品の注文方法の説明会の日時を知らせる。",
          "translation": "通知办公用品订购方法说明会的日期和时间。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文确实提到了计划召开说明会（「改めて説明会を行う予定です」），但这只是补充信息，并非写这份文件的“最主要目的”，且文中也尚未给出具体的日期和时间（日時）。"
        },
        {
          "number": 3,
          "text": "事務用品の注文、管理方法の問題点を伝える。",
          "translation": "传达办公用品订购、管理方法存在的问题点。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中提到变更是为了“简化办公作业（事務作業を簡略化するため）”，但这只是说明变更的理由，并没有具体传达现有方法存在什么问题点（問題点）。"
        },
        {
          "number": 4,
          "text": "事務用品の注文、管理方法の変更を知らせる。",
          "translation": "通知办公用品订购、管理方法的变更。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文的核心内容，即通知“直接订购（直接注文していただく）”和“各科室自行管理（管理も各課で）”这一订购和管理方式上的变更。"
        }
      ]
    },
    {
      "id": "n2-short-2013-7-04",
      "questionNumber": 4,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "数字上は売上ゼロ冊の本がこうして店の売上げに貢献していることを考慮せずに棚をつくっていけば、本屋は魅力のない空間になってしまう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "売れない本にも興味をもってもらえるよう工夫する。",
          "translation": "下工夫让大家对卖不出去的书也产生兴趣。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到顾客已经拥有那本书所以不买（「すでにもっているからもう買わない」），并非他们不感兴趣，也不需要书店下工夫让他们产生兴趣（「興味をもってもらえるよう工夫する」）。"
        },
        {
          "number": 2,
          "text": "売れない本も役割をもっていることを理解する。",
          "translation": "理解卖不出去的书也有着自己的作用。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文销量为零的书也在为营业额做贡献（「店の売上げに貢献している」），即卖不出去的书也有其作用（「役割をもっている」）。"
        },
        {
          "number": 3,
          "text": "売れない本がなくなるように客の好みを調べる。",
          "translation": "为了消除卖不出去的书去调查顾客的喜好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是要保留那些虽然卖不出去但顾客喜欢的书，而不是为了消除卖不出去的书去调查顾客的喜好（「売れない本がなくなるように客の好みを調べる」）。"
        },
        {
          "number": 4,
          "text": "売れない本はできるだけ置かないようにする。",
          "translation": "尽量不放卖不出去的书。",
          "correct": false,
          "error": "opposite",
          "explanation": "这与作者的观点完全相反。作者认为如果不考虑这些书的贡献就排书架，书店会失去魅力，即应该保留这些虽然卖不出去但有作用的书，而不是尽量不放（「できるだけ置かないようにする」）。"
        }
      ]
    },
    {
      "id": "n2-short-2013-7-05",
      "questionNumber": 5,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "食べ物に合った器が必要であり、……この点では住まいも同様である。住み手毎にその生活は異なっているから、住み手に合った住まいが必要であり……"
      ],
      "options": [
        {
          "number": 1,
          "text": "中に入るものは、「器」と同じ形になる。",
          "translation": "装在里面的东西，会变成和“容器”一样的形状。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章说的是容器会限制内容物，并未说内容物会变成和容器“同样的形状（同じ形になる）”。"
        },
        {
          "number": 2,
          "text": "中に入るものによって、必要な「器」は違う。",
          "translation": "根据装在里面的东西不同，所需的“容器”也不同。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“需要有与食物相匹配的容器（食べ物に合った器が必要）”以及“需要与居住者相匹配的住宅（住み手に合った住まいが必要）”的逻辑，即根据内容物不同，需要的容器也不同。"
        },
        {
          "number": 3,
          "text": "「器」の形によって、中に入らないものがある。",
          "translation": "根据“容器”的形状不同，有些东西是装不进去的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章确实提到了木碗里的牛排切不开（限制了内容物），但这并不是在说“装不进去（中に入らない）”。"
        },
        {
          "number": 4,
          "text": "「器」の価値は、中に入るものによって異なる。",
          "translation": "“容器”的价值，会根据装在里面的东西而有所不同。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章完全没有探讨容器的“价值（価値）”会如何变化。"
        }
      ]
    }
  ],
  "2014.12": [
    {
      "id": "n2-short-2014-12-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "しかし何よりも大切にしなければいけないのは、まずはしっかりと自分の気持ちと向き合うことだ。",
        "新しいアクションを起こすには、まずしっかりと自分の気持ちを確認しなければならない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "信頼できる人に意見を求める。",
          "translation": "向值得信赖的人寻求意见。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到向信赖的人寻求建议“并不是坏事（悪いことではない）”，但这并非“最需要重视的（何よりも大切にしなければいけない）”事情。"
        },
        {
          "number": 2,
          "text": "周りの人の意見をしっかり聞く。",
          "translation": "认真听取周围人的意见。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章第一段明确指出，最不该做的就是随波逐流听从周围的意见（「周りの意見に流されてしまうことだ」），这与选项的意思相悖。"
        },
        {
          "number": 3,
          "text": "自分の気持ちを正直に人に話す。",
          "translation": "坦诚地向别人诉说自己的心情。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章强调的是自己要去直面和确认自己的内心（「自分の気持ちと向き合う」「自分の気持ちを確認する」），并未提到要向别人坦诚诉说（「正直に人に話す」）。"
        },
        {
          "number": 4,
          "text": "自分の気持ちをしっかり見つめる。",
          "translation": "好好地审视自己的心情。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中最需要重视的事情，即“直面自己的内心（自分の気持ちと向き合う）”和“确认自己的心情（自分の気持ちを確認する）”。"
        }
      ]
    },
    {
      "id": "n2-short-2014-12-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "再開の期日につきまして、これまで１２月６日（土）とお伝えしておりましたが、店内工事の遅れのため、大変勝手ながら１２月９日（火）に延期させていただきます。"
      ],
      "options": [
        {
          "number": 1,
          "text": "「洋食レオナール」が一時休業し移転すること",
          "translation": "“西餐Leonard”将暂停营业并搬迁。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "关于休业和搬迁的事情，文章明确写道“正如10月1日的通知所述（１０月１日のお知せのとおり）”，这并非这篇新通知“最想传达”的新信息。"
        },
        {
          "number": 2,
          "text": "「洋食レオナール」の移転先が決まったこと",
          "translation": "“西餐Leonard”的搬迁地址已经确定。",
          "correct": false,
          "error": "relation-error",
          "explanation": "搬迁地址虽然写在文末作为补充信息，但这并不是发布这则“重要通知”的主要原因或目的。"
        },
        {
          "number": 3,
          "text": "「洋食レオナール」の営業再開日が遅れること",
          "translation": "“西餐Leonard”的重新开业日期将推迟。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“将日期推迟到12月9日（１２月９日（火）に延期させていただきます）”这一核心变更信息。"
        },
        {
          "number": 4,
          "text": "「洋食レオナール」の店内工事の日程が決まったこと",
          "translation": "“西餐Leonard”的店内施工日程已经确定。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中提到店内施工延误导致开业推迟，但并没有说发布通知是为了告知施工的“日程已经确定（日程が決まった）”。"
        }
      ]
    },
    {
      "id": "n2-short-2014-12-03",
      "questionNumber": 3,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "最も低い４０代女性でも半数を超えていた。"
      ],
      "options": [
        {
          "number": 1,
          "text": "すべての性別・年代で５０％以上である。",
          "translation": "所有性别、年龄段都在50%以上。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中“即便是比例最低的40代女性也超过了半数（最も低い４０代女性でも半数を超えていた）”的表述。"
        },
        {
          "number": 2,
          "text": "２０代と３０代では、男女とも７０％前後である。",
          "translation": "20代和30代中，男女都在70%左右。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确指出20代男性的比例是91%（２０代男性が９１％），并不是70%左右。"
        },
        {
          "number": 3,
          "text": "男女とも、３０代より４０代のほうが割合が高い。",
          "translation": "无论男女，40代的比例都比30代高。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到“比例最低的是40代女性（最も低い４０代女性）”，这意味着对于女性而言，40代的比例是低于30代的。"
        },
        {
          "number": 4,
          "text": "男女とも、年齢が低いほど割合が高い。",
          "translation": "无论男女，年龄越小比例越高。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "根据文章，男性的比例排名是20代最高，接着是40代，然后才是30代，因此并不符合“年龄越小比例越高（年齢が低いほど割合が高い）”的规律。"
        }
      ]
    },
    {
      "id": "n2-short-2014-12-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "集団から受ける束縛が小さく、個体の行動の自由度が大きいので、相互の個体関係を友好的につなぐために、挨拶行動が発達したのであろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "メンバーの数が少ない集団",
          "translation": "成员数量少的群体",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章中提到大猩猩建立的是“小群体（小集団）”，但它们的打招呼行为反而“少（少ない）”。"
        },
        {
          "number": 2,
          "text": "メンバーが集まって行動する集団",
          "translation": "成员聚集在一起行动的群体",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "聚集在一起行动是描述大猩猩“成员不会分散生活（メンバーが離れ離れになって生活することがない）”，而大猩猩的打招呼行为很少。"
        },
        {
          "number": 3,
          "text": "メンバー間の関係が友好的な集団",
          "translation": "成员间关系友好的群体",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章说打招呼是为了“友好地维系关系（関係を友好的につなぐため）”，而不是因为原本就是关系友好的群体。"
        },
        {
          "number": 4,
          "text": "メンバーの行動の制限が少ない集団",
          "translation": "成员行动限制少的群体",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中黑猩猩社会“受到群体的束缚较小（集団から受ける束縛が小さく）”，因此打招呼行为发达（挨拶行動が発達した）的内容。"
        }
      ]
    },
    {
      "id": "n2-short-2014-12-05",
      "questionNumber": 5,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "しかし、人間の精神の成長は、しばしば、飽きるという形で現れることがある。"
      ],
      "options": [
        {
          "number": 1,
          "text": "飽きることが精神の成長を示すこともある。",
          "translation": "厌倦有时也标志着精神的成长。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“人类精神的成长，往往会以厌倦的形式表现出来（人間の精神の成長は、しばしば、飽きるという形で現れることがある）”的观点。"
        },
        {
          "number": 2,
          "text": "飽きやすいということは幼さの現れである。",
          "translation": "容易厌倦是幼稚的表现。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者认为厌倦可能是成长的表现，而不是“幼稚的表现（幼さの現れ）”。"
        },
        {
          "number": 3,
          "text": "人間が成長するうえでは飽きることが必要だ。",
          "translation": "在人类成长的过程中，厌倦是必要的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章只是说精神的成长“有时会以厌倦的形式表现出来（現れることがある）”，并没有说成长就“需要（必要だ）”厌倦。"
        },
        {
          "number": 4,
          "text": "精神が成長を続けている間は飽きることはない。",
          "translation": "在精神持续成长的期间是不会感到厌倦的。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章指出精神的成长往往伴随着厌倦，选项所说的“不会感到厌倦（飽きることはない）”与作者观点相反。"
        }
      ]
    }
  ],
  "2014.7": [
    {
      "id": "n2-short-2014-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "人が動物とふれ合っていて、最も重要でありながら忘れがちなのは、可愛いという気持ちにつき動かされるあまり、こちらの方が積極的になり過ぎ、相手に表現させるのを忘れることだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "動物と純粋な気持ちでふれ合ったほうがいいこと",
          "translation": "最好以纯粹的心情与动物接触。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章中并没有提到要以“纯粹的心情（純粋な気持ち）”与动物接触。"
        },
        {
          "number": 2,
          "text": "動物に積極的に気持ちを伝えたほうがいいこと",
          "translation": "最好积极地向动物传达心情。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章反而指出，人们容易因为觉得可爱而“过于主动（積極的になり過ぎ）”，导致忘记让动物表达，选项2的意思与文章主旨相反。"
        },
        {
          "number": 3,
          "text": "動物とも人と同じように接したほうがいいこと",
          "translation": "最好能像对待人一样对待动物。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中并没有将对待动物与“对待人一样（人と同じように）”进行对比或提出这样的建议。"
        },
        {
          "number": 4,
          "text": "動物にも気持ちを表現させたほうがいいこと",
          "translation": "最好也能让动物去表达心情。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中作者意识到的“忘记了让对方去表达（相手に表現させるのを忘れることだ）”，以及动物也想传达心情的观点。"
        }
      ]
    },
    {
      "id": "n2-short-2014-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "来年度は秋中駅前の広場づくりに取り組む予定ですが、市民の皆様からご意見やご提案を広く伺い、計画に反映させたいと考えております。つきましては、別紙のアンケートにお答えいただき…"
      ],
      "options": [
        {
          "number": 1,
          "text": "町づくり事業のホームページに対する市民の意見",
          "translation": "市民对城市建设项目官网的意见。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "网站（ホームページ）只是用来查看城市建设项目详细信息的地方，并非问卷调查征求意见的对象。"
        },
        {
          "number": 2,
          "text": "町づくり事業に対する市民の評価",
          "translation": "市民对城市建设项目的评价。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章第一段提到去年的公园整修获得了大家的评价（評価をいただきました），但本次问卷是为了未来的广场建设征求意见，而不是调查评价。"
        },
        {
          "number": 3,
          "text": "広場づくりに対する市民の意見",
          "translation": "市民对广场建设的意见。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中针对「広場づくり」（广场建设）听取「ご意見やご提案」（意见和建议）的目的。"
        },
        {
          "number": 4,
          "text": "広場づくりに対する市民の評価",
          "translation": "市民对广场建设的评价。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "广场建设是“下年度计划着手进行（来年度取り組む予定）”的事情，目前还在计划阶段，因此是要听取“意见”以反映到计划中，而不是寻求“评价（評価）”。"
        }
      ]
    },
    {
      "id": "n2-short-2014-7-03",
      "questionNumber": 3,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "今回の遅れに関しましては、すでに貴社経理部長の内田様にお願いをし、２０日まで支払いを待ってくださるとのお返事をいただいております。"
      ],
      "options": [
        {
          "number": 1,
          "text": "支払いの遅れは内田様に了解してもらっている。",
          "translation": "内田先生已经谅解了支付延期一事。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“已经拜托了内田先生，并收到了同意宽限的回复（すでに…内田様にお願いをし、…お返事をいただいております）”。"
        },
        {
          "number": 2,
          "text": "支払いの遅れで迷惑をかけて申し訳ない。",
          "translation": "因支付延期给您添麻烦了，非常抱歉。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然邮件中有表达歉意的话语（お手数をおかけして申し訳ございません），但这只是商务礼仪上的客套，并非整封邮件“最想传达的事情（最も伝えたいこと）”。"
        },
        {
          "number": 3,
          "text": "支払いの期日を２０日まで延ばしてもらいたい。",
          "translation": "希望将支付日期宽限到20日。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "根据原文，宽限到20日的事情已经得到了内田先生的同意（お返事をいただいております），而不是现在才提出宽限的请求。"
        },
        {
          "number": 4,
          "text": "支払いの期日について内田様に確認を取りたい。",
          "translation": "想向内田先生确认支付日期。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文是请收件人（岛本）向内田先生确认（内田様にご確認くださいますよう），而不是发件人自己要去向内田先生确认。"
        }
      ]
    },
    {
      "id": "n2-short-2014-7-04",
      "questionNumber": 4,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "どの時点で『あっ、オレにはできない",
        "その成長過程の中で『やればできる"
      ],
      "options": [
        {
          "number": 1,
          "text": "成功体験によって自信がつき失敗しなくなっているから",
          "translation": "因为通过成功体验获得了自信，变得不再失败了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是他们有自信而不轻易放弃，并没有说他们“不再失败（失敗しなくなっている）”。"
        },
        {
          "number": 2,
          "text": "成功するにはどのような能力が必要かを知っているから",
          "translation": "因为知道想要成功需要什么样的能力。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章明确指出这“不是能力的差异（能力の差ではない）”，也没有提到他们知道需要什么能力。"
        },
        {
          "number": 3,
          "text": "成功によって裏づけられた確かな方法を身につけているから",
          "translation": "因为掌握了由成功所印证的确实可行的方法。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到的是掌握了“自信（自信が身についている）”，而不是掌握了“确实可行的方法（確かな方法）”。"
        },
        {
          "number": 4,
          "text": "成功したことでついた自信があり簡単にはあきらめないから",
          "translation": "因为有着因成功而建立的自信，不会轻易放弃。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段的不轻易“放弃（あきらめる）”和第二段中由于“过去的成功体验（過去の成功体験）”而培养出的“自信”。"
        }
      ]
    },
    {
      "id": "n2-short-2014-7-05",
      "questionNumber": 5,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "もしつらい恋愛で苦しんだ人が、ある恋愛ものを読んで慰められたとすると……そのような深い体験をもっていると……深く味わうことができる。そうやって人間の精神は大人になっていくんです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "つらい出来事を読書で慰められた経験",
          "translation": "痛苦的经历在阅读中得到安慰的经验。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中所说的“痛苦时读某部作品得到安慰”的这种“深刻体验（深い体験）”。"
        },
        {
          "number": 2,
          "text": "つらい恋愛をいつまでも忘れられない経験",
          "translation": "将痛苦的恋爱永远铭记于心的经验。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是记住了“被阅读安慰的经历（そのときのこと）”，而不是无法忘记“痛苦的恋爱（つらい恋愛）”本身。"
        },
        {
          "number": 3,
          "text": "苦しんでいる人を慰めた経験",
          "translation": "安慰了受苦之人的经验。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章讨论的是自己受苦时通过阅读“被安慰（慰められた）”，而不是去“安慰别人（慰めた）”。"
        },
        {
          "number": 4,
          "text": "古典作品をたくさん読んだ経験",
          "translation": "阅读了大量古典作品的经验。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是有了深刻体验后，去读古典作品能深层次品味，而不是说只要“读大量的古典作品（たくさん読んだ）”就能让精神成熟。"
        }
      ]
    }
  ],
  "2015.12": [
    {
      "id": "n2-short-2015-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "それでは疑問を解く過程で味わう楽しみや、何日もかかって答えにたどり着いた時の喜びを味わうことができない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "知識を得るための努力をしない。",
          "translation": "不为获得知识而努力。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章提到孩子们会去记住问题和答案来获取知识（知識を得たことで満足してしまっている），并未说他们不努力获取知识。"
        },
        {
          "number": 2,
          "text": "知識が豊富なので疑問を感じにくい。",
          "translation": "因为知识丰富，所以很难感到疑问。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是他们不去寻找疑问（疑問さえも見つけることをしなくなってしまった），而不是因为知识丰富才感觉不到疑问。"
        },
        {
          "number": 3,
          "text": "疑問を解く楽しみや喜びを知らない。",
          "translation": "不知道解答疑问的乐趣和喜悦。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“无法体会到在解答疑问的过程中所品味的乐趣，以及……终于找到答案时的喜悦（疑問を解く過程で味わう楽しみや……喜びを味わうことができない）”。"
        },
        {
          "number": 4,
          "text": "疑問があっても答えが見つけられない。",
          "translation": "即使有疑问也找不到答案。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章指出现在的孩子们连疑问都不去寻找了（疑問さえも見つけることをしなくなってしまった），而不是有疑问但找不到答案。"
        }
      ]
    },
    {
      "id": "n2-short-2015-12-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "１２月１７日（木）までに会社案内パンフレットの準備（２０部）"
      ],
      "options": [
        {
          "number": 1,
          "text": "１２月１０日に見学者の日本語レベルを確認する。",
          "translation": "在12月10日确认参观者的日语水平。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "日语水平是在12月11日的事前商谈中需要确认的事项（「１２月１１日…事前打ち合わせ…確認すること：・見学者の日本語レベル」）。"
        },
        {
          "number": 2,
          "text": "１２月１１日までに会議室Aを予約する。",
          "translation": "在12月11日前预约会议室A。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "会议室A的预约期限是12月10日前（「１２月１０日（木）までに…会議室Aの予約」）。"
        },
        {
          "number": 3,
          "text": "１２月１７日までに会社案内パンフレットを準備する。",
          "translation": "在12月17日前准备好公司介绍手册。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了指示中的“在12月17日前准备好公司介绍手册（１２月１７日（木）までに会社案内パンフレットの準備）”。"
        },
        {
          "number": 4,
          "text": "１２月１８日に会議室Bのテーブルやいすなどを準備する。",
          "translation": "在12月18日布置会议室B的桌椅等。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "12月18日需要布置的是会议室A（「１２月１８日（金）９時半までに会議室Aの準備」），而不是会议室B。"
        }
      ]
    },
    {
      "id": "n2-short-2015-12-03",
      "questionNumber": 3,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "ヒトは、辛い味、強烈なにおい、熱い、冷たいなど、あらゆる手段を使って、食欲を刺激する工夫をしてきたのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "常温の料理を好んで食べたこと",
          "translation": "喜欢吃常温的菜",
          "correct": false,
          "error": "opposite",
          "explanation": "文章明确说人类“不喜欢常温的菜（常温の料理を好みません）”，与选项内容相反。"
        },
        {
          "number": 2,
          "text": "食べたいと思えるように工夫をしてきたこと",
          "translation": "为了让人想吃而下了工夫",
          "correct": true,
          "error": null,
          "explanation": "准确对应了前文“人类……下工夫来刺激食欲（ヒトは、……食欲を刺激する工夫をしてきた）”的内容。"
        },
        {
          "number": 3,
          "text": "一人一人の好みに合わせて料理してきたこと",
          "translation": "迎合每个人的喜好来做菜",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章中并未提及“迎合每个人的喜好（一人一人の好みに合わせて）”。"
        },
        {
          "number": 4,
          "text": "ヒトと動物とのちがいを意識して料理してきたこと",
          "translation": "意识到人与动物的区别来做菜",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说这种下工夫刺激食欲的做法“强调了人与动物的区别（ヒトと動物のちがいを強調したもの）”，但并不是说人类是“意识到区别（ちがいを意識して）”才去这么做菜的。"
        }
      ]
    },
    {
      "id": "n2-short-2015-12-04",
      "questionNumber": 4,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "自分じゃ到底できないことも、『できるはずです",
        "『自分のことを棚に上げて、スタッフに要求すべきことは要求してください"
      ],
      "options": [
        {
          "number": 1,
          "text": "マネージャーの能力を超えている仕事もスタッフにさせるべきだ。",
          "translation": "超出了经理能力的工作也应该让员工去做。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“即便是自己绝对做不到的事情也要提出要求（自分じゃ到底できないことも……要求していかないと）”以及“不要管自己能不能做到去提要求（自分のことを棚に上げて……要求してください）”的逻辑。"
        },
        {
          "number": 2,
          "text": "マネージャーより能力の高いスタッフを集めるべきだ。",
          "translation": "应该招募能力比经理更高的员工。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章主要讨论的是“要求员工做什么”，并未提到要“招募能力比经理更高的员工（マネージャーより能力の高いスタッフを集めるべきだ）”。"
        },
        {
          "number": 3,
          "text": "スタッフの能力に合わせて達成できることを要求すべきだ。",
          "translation": "应该根据员工的能力提出能够达成的要求。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章强调的是要提出超出自身（即提出要求者）能力范围的要求，并未讨论是否要“根据员工的能力（スタッフの能力に合わせて）”来提要求。"
        },
        {
          "number": 4,
          "text": "スタッフの能力の限界まで仕事をさせるべきだ。",
          "translation": "应该让员工工作到其能力的极限。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章说的是要提出要求，但并未极端地表示要“让员工工作到其能力的极限（スタッフの能力の限界まで仕事をさせるべきだ）”。"
        }
      ]
    },
    {
      "id": "n2-short-2015-12-05",
      "questionNumber": 5,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "自分の不快な気持ちも伝えないで黙っていると、相手はあなたを理解するチャンスを失い、互いに自分らしくつきあうことができなくなるでしょう。",
        "誤解のうえに人間関係がつくられていくことになります。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人を不愉快にさせないような表現をするべきだ。",
          "translation": "应该使用不让人感到不快的表达方式。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到为了“不让别人不高兴（不愉快な気持ちにさせないように）”而沉默反而会导致无法互相理解，因此作者并不主张把“不让人不高兴”放在首位。"
        },
        {
          "number": 2,
          "text": "相手の気持ちを理解しなくてはならない。",
          "translation": "必须要理解对方的心情。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章讨论的是自己不说出想法会导致“对方（相手）”失去了解自己的机会，重点在于“传达自己的心情”，而不是要求去“理解对方的心情（相手の気持ちを理解する）”。"
        },
        {
          "number": 3,
          "text": "自分の気持ちをきちんと伝えるべきだ。",
          "translation": "应该好好传达自己的心情。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了作者的观点：一味忍耐沉默会引发误解，因此应该“好好传达自己的心情（自分の気持ちをきちんと伝える）”。"
        },
        {
          "number": 4,
          "text": "不満があっても我慢したほうがいい。",
          "translation": "即使有不满也最好忍耐。",
          "correct": false,
          "error": "opposite",
          "explanation": "选项主张“即使有不满也最好忍耐（我慢したほうがいい）”，这与作者认为“沉默会失去理解机会、造成误解”的观点完全相反。"
        }
      ]
    }
  ],
  "2015.7": [
    {
      "id": "n2-short-2015-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "本来教科書とはその対象である学習者のことをよく考えて、難しそうなところ、間違えそうなところをきちんと分かりやすく説明する必要があるのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "学習者が成果を実感できるものを作成するべきだ。",
          "translation": "应该制作能让学习者切实感受到成果的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到如果分析错误，其“成果（成果）”就是能做出很棒的教科书，而不是说要制作出让学习者感受到成果的教科书。"
        },
        {
          "number": 2,
          "text": "学習者が真剣に取り組めるように工夫をするべきだ。",
          "translation": "应该下功夫让学习者能认真对待。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章开头提到学习者已经在“认真地学习（真剣に取り組んでいる）”了，作者强调的是教科书要解释容易出错的地方，而不是下功夫让学习者认真。"
        },
        {
          "number": 3,
          "text": "学習者が間違えやすいところを丁寧に説明するべきだ。",
          "translation": "应该把学习者容易犯错的地方仔细解释清楚。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“有必要将……容易犯错的地方好好地、通俗易懂地解释清楚（間違えそうなところをきちんと分かりやすく説明する必要がある）”的观点。"
        },
        {
          "number": 4,
          "text": "学習者のやる気が出るようにすべての規則を説明するべきだ。",
          "translation": "为了让学习者有干劲，应该把所有的规则都解释清楚。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章提出要好好解释难点和易错点，但并没有说要解释“所有的规则（すべての規則）”。"
        }
      ]
    },
    {
      "id": "n2-short-2015-7-02",
      "questionNumber": 2,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "全種類のスタンプを押してから総合受付でアンケートにご協力いただいた方には、鉢植えの花もご用意しております。"
      ],
      "options": [
        {
          "number": 1,
          "text": "総合受付でアンケートに協力し、８種類の異なるスタンプを押してから再び総合受付へ行く。",
          "translation": "在综合接待处配合问卷调查，盖满8种不同的印章后再次前往综合接待处。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "问卷调查是在盖满8种印章之后在综合接待处进行的，而不是先在接待处做问卷再去盖章。"
        },
        {
          "number": 2,
          "text": "最初のスタンプ台のところでアンケートに協力し、５種類の異なるスタンプを押してから総合受付へ行く。",
          "translation": "在第一个盖章台配合问卷调查，盖满5种不同的印章后前往综合接待处。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "问卷调查是在“综合接待处（総合受付）”进行，而不是“第一个盖章台（最初のスタンプ台）”；且需要盖满“所有种类（全種類）”即8种印章，而不是5种。"
        },
        {
          "number": 3,
          "text": "５種類の異なるスタンプを押してから、最後のスタンプ台のところでアンケートに協力する。",
          "translation": "盖满5种不同的印章后，在最后一个盖章台配合问卷调查。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "问卷调查的地点是“综合接待处（総合受付）”，而不是“最后一个盖章台（最後のスタンプ台）”；印章数量要求是全种类8种，而非5种。"
        },
        {
          "number": 4,
          "text": "８種類の異なるスタンプを押してから、総合受付へ行ってアンケートに協力する。",
          "translation": "盖满8种不同的印章后，前往综合接待处配合问卷调查。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了“盖满所有种类的印章（全種類のスタンプを押してから）”即8种，以及在“综合接待处配合完成问卷调查（総合受付でアンケートにご協力いただいた）”。"
        }
      ]
    },
    {
      "id": "n2-short-2015-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "新しい木材を古い木材のように変化させる技術が開発された。",
        "この技術を利用することで、名器並みの優れた楽器が入手しやすくなるだろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "新しい技術で作られていて、名器よりも素晴らしい音が出せるもの",
          "translation": "用新技术制作，能发出比名器更美妙声音的乐器。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是“与名器同等（名器並み）”，并没有说能发出“比名器更美妙的声音（名器よりも素晴らしい音）”。"
        },
        {
          "number": 2,
          "text": "古い木材で作られていて、名器よりも素晴らしい音が出せるもの",
          "translation": "用老木材制作，能发出比名器更美妙声音的乐器。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这项技术是对“新木材（新しい木材）”进行加工，而不是用“老木材（古い木材）”制作；且同样没有说声音“比名器更美妙”。"
        },
        {
          "number": 3,
          "text": "長い年月をかけて作られていて、名器のような音が出せるもの",
          "translation": "经过漫长岁月制作，能发出像名器一样声音的乐器。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "这项技术是“在短时间内人工引发变化（短期間に人工的に起こさせる）”，而不是“花费漫长的岁月制作（長い年月をかけて作られていて）”。"
        },
        {
          "number": 4,
          "text": "新しい木材で作られていて、名器のような音が出せるもの",
          "translation": "用新木材制作，能发出像名器一样声音的乐器。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中使用“新木材（新しい木材）”并通过新技术使其发出“与名器同等（名器並み）”声音的描述。"
        }
      ]
    },
    {
      "id": "n2-short-2015-7-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "褒めるということは一つの価値判断であり、親が褒めるのは、より強化したい子どもの行為であり、子どもは親のその価値観を刷り込まれながら育っていきます。",
        "つまり、『褒める"
      ],
      "options": [
        {
          "number": 1,
          "text": "子どもに親自身の価値観を押しつけること",
          "translation": "把父母自身的价值观强加给孩子",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中父母让孩子灌输/养成（刷り込まれる/身につけさせられる）自己的价值观，并包含着“命令（命令）”的含义，即把自己的价值观强加给孩子（押しつけること）。"
        },
        {
          "number": 2,
          "text": "子どもにさまざまな価値観を示すこと",
          "translation": "向孩子展示各种各样的价值观",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是灌输“父母的价值观（親のその価値観）”，而不是向孩子展示“各种各样的价值观（さまざまな価値観）”。"
        },
        {
          "number": 3,
          "text": "子どもを常識的な価値観に従わせること",
          "translation": "让孩子顺从常识性的价值观",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到的是“父母的价值观”，并没有说这是“常识性的价值观（常識的な価値観）”。"
        },
        {
          "number": 4,
          "text": "子ども自身が持つ価値観を認めること",
          "translation": "认可孩子自身拥有的价值观",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章表明表扬是父母在输出自己的价值观，而不是去认可“孩子自身拥有的价值观（子ども自身が持つ価値観）”。"
        }
      ]
    },
    {
      "id": "n2-short-2015-7-05",
      "questionNumber": 5,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "それでも市場競争という仕組みを私たちが使っていくのは、市場競争のメリットがデメリットよりも大きいからである。より豊かになれること、誰にでも豊かになるチャンスがあることが大きなメリットである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "市場競争によって安心できる生活が保証される。",
          "translation": "通过市场竞争能保证安心的生活。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到人们“想要逃离竞争，过上安心的生活（競争から逃れて、安心できる生活をしたい）”，说明市场竞争本身并不能保证安心的生活。"
        },
        {
          "number": 2,
          "text": "市場競争によって豊かになる機会が与えられる。",
          "translation": "通过市场竞争能被赋予变富裕的机会。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文最后一句“任何人都拥有变富裕的机会（誰にでも豊かになるチャンスがある）”这一最大的优点。"
        },
        {
          "number": 3,
          "text": "市場競争がなければ豊かな生活は送れない。",
          "translation": "如果没有市场竞争就无法过上富裕的生活。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说市场竞争能带来变富裕的机会，但并没有说如果没有市场竞争就“无法（送れない）”过上富裕生活。"
        },
        {
          "number": 4,
          "text": "市場競争に参加しないで生きることはできない。",
          "translation": "不参加市场竞争就无法生存。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说“为了在市场中生存下去，必须服从市场竞争（市場で生き残るためには…従っていく必要がある）”，但选项中“不参加就无法生存（参加しないで生きることはできない）”的表述过度解读了原文。"
        }
      ]
    }
  ],
  "2016.12": [
    {
      "id": "n2-short-2016-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "楽しむためのモノであり、そのスポーツで楽しむ、ために『ルール"
      ],
      "options": [
        {
          "number": 1,
          "text": "ルールのないスポーツにも価値がある。",
          "translation": "没有规则的体育运动也有价值。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是“因为有规则才能在体育中享受乐趣并竞争胜负”，并没有说“没有规则的体育也有价值”。"
        },
        {
          "number": 2,
          "text": "ルールはスポーツで楽しむためのものだ。",
          "translation": "规则是为了在体育中享受乐趣而存在的。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“‘规则’的存在，就是为了能在那项体育运动中享受乐趣（そのスポーツで楽しむ、ために『ルール』があるのです）”。"
        },
        {
          "number": 3,
          "text": "スポーツはルールを理解してから始めるべきだ。",
          "translation": "体育运动应该在理解了规则之后再开始。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章解释了为什么会有规则，但并没有规定“应该在理解了规则之后再开始（ルールを理解してから始めるべきだ）”。"
        },
        {
          "number": 4,
          "text": "スポーツを通して、ルールの重要さが理解できる。",
          "translation": "通过体育运动，能够理解规则的重要性。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是在阐述规则对于体育的意义（为了享受乐趣），而不是说“通过体育能够理解规则的重要性”。"
        }
      ]
    },
    {
      "id": "n2-short-2016-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "節電のため、室内温度は２２度以下に設定するとともに、使用していない場所の暖房を切ること、退社時の切り忘れをなくすことなどを徹底してください。",
        "また、服装で調整するなど各自で工夫し、暖房に頼りすぎないようご協力をお願いいたします。"
      ],
      "options": [
        {
          "number": 1,
          "text": "暖房の使用を減らす工夫について意見を求める。",
          "translation": "征求关于减少暖气使用的巧妙方法的意见。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是要求大家去执行列出的节电措施，而不是向大家“征求意见（意見を求める）”。"
        },
        {
          "number": 2,
          "text": "暖房を使用せず、服装で調整することを求める。",
          "translation": "要求不使用暖气，而是通过着装来调节。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说“不要过度依赖暖气（暖房に頼りすぎないよう）”，并没有要求完全“不使用暖气（暖房を使用せず）”。"
        },
        {
          "number": 3,
          "text": "暖房を無駄に使用しないことを求める。",
          "translation": "要求不要无谓地（浪费地）使用暖气。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文章中为了节电而提出的各项防止浪费暖气措施的核心目的。"
        },
        {
          "number": 4,
          "text": "暖房の温度を変更しないことを求める。",
          "translation": "要求不要改变暖气的温度。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章要求“将室内温度设定在22度以下（室内温度は２２度以下に設定する）”，而不是要求“不要改变温度（温度を変更しない）”。"
        }
      ]
    },
    {
      "id": "n2-short-2016-12-03",
      "questionNumber": 3,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "それより『目の前のやりたいこと",
        "自分のやっていること"
      ],
      "options": [
        {
          "number": 1,
          "text": "「やりたいことをやる」には、大きな目標を立てることが大切だ。",
          "translation": "为了“做想做的事”，制定远大的目标很重要。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章说的是仅仅达成近期的目标就足够了，而不是制定远大的目标（大きな目標を立てることが大切だ）。"
        },
        {
          "number": 2,
          "text": "「自分の望んでいること」を知れば、今何をすべきかがわかるようになる。",
          "translation": "如果了解了“自己渴望的事”，就能知道现在该做什么了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章的意思是通过做眼前的事来接近自己渴望的事，而不是先了解自己渴望什么再决定现在该做什么。"
        },
        {
          "number": 3,
          "text": "「自分のやっていること」が「自分の望んでいること」だと気づくことが大切だ。",
          "translation": "意识到“自己正在做的事”就是“自己渴望的事”，这很重要。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是“正在做的事”会逐渐接近“渴望的事”，而不是说重点在于“意识到”两者是同一件事。"
        },
        {
          "number": 4,
          "text": "「目の前のやりたいこと」を続ければ、それが「自分の望んでいること」になり得る。",
          "translation": "如果持续做“眼前想做的事”，那它就有可能成为“自己渴望的事”。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“找到‘眼前想做的事’并专注于此……自然而然地接近‘自己所渴望的事’（『目の前のやりたいこと』を見つけ、それに集中……自然に『自分のやっていること』が『自分の望んでいること』に近づいていく）”的逻辑。"
        }
      ]
    },
    {
      "id": "n2-short-2016-12-04",
      "questionNumber": 4,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "定期購入をされているお客様には、この商品（＝冬の味わい）を１５％割引の特別価格でご提供いたします。購入を希望される方は、１０月中にお申し込みください。"
      ],
      "options": [
        {
          "number": 1,
          "text": "コーヒー豆を定期購入している人は、１０月中だけ「冬の味わい」を１０％割引で買うことができる。",
          "translation": "定期购买咖啡豆的人，只有在10月份能以10%的折扣购买“冬之味”。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "对于“冬之味”，定期购买的顾客享受的是15%的折扣，而不是10%（１０％割引）。"
        },
        {
          "number": 2,
          "text": "コーヒー豆を定期購入している人が１０月中に「冬の味わい」を予約すれば、１５％割引で買うことができる。",
          "translation": "定期购买咖啡豆的人如果在10月份内预约“冬之味”，就能以15%的折扣购买。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中针对定期购买顾客，在10月内预约新商品“冬之味”可享受15%折扣的说明。"
        },
        {
          "number": 3,
          "text": "「冬の味わい」を１０月中に予約すれば、その他の商品をすべて１５％割引で買うことができる。",
          "translation": "如果在10月份内预约了“冬之味”，就能以15%的折扣购买其他所有商品。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章第三段说明，其他所有商品是“随时10%折扣（いつでも１０％割引）”，而不是15%折扣。"
        },
        {
          "number": 4,
          "text": "「冬の味わい」を買った人は、１０月中だけその他の商品をすべて１０％割引で買うことができる。",
          "translation": "购买了“冬之味”的人，只有在10月份能以10%的折扣购买其他所有商品。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "其他所有商品10%折扣的条件是“定期购买的顾客（定期購入をされているお客様）”，并且是“随时（いつでも）”可享受，并非只限于买了“冬之味”的人或者只限10月份。"
        }
      ]
    },
    {
      "id": "n2-short-2016-12-05",
      "questionNumber": 5,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "そうなれば『いい一日",
        "いい一日"
      ],
      "options": [
        {
          "number": 1,
          "text": "毎日を「いい一日」にしようとするようになる。",
          "translation": "变得想要努力让每一天都成为“美好的一天”。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中为了让今天成为美好的一天而“开始主动地去行动（主体的に行動するようになるだろう）”的结论。"
        },
        {
          "number": 2,
          "text": "毎日が「いい一日」だと思えるようになる。",
          "translation": "变得觉得每一天都是“美好的一天”。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是通过主动行动去创造美好的一天，而不是说写了日记就会自然而然地觉得每天都是美好的一天。"
        },
        {
          "number": 3,
          "text": "「いい一日」が訪れるのを楽しみにするようになる。",
          "translation": "变得开始期待“美好的一天”的降临。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章明确写道“不会只是被动地等待偶然降临（たまたま訪れるのをただ待つのではなく）”，因此不是去“期待它的降临（訪れるのを楽しむ）”，而是主动去创造。"
        },
        {
          "number": 4,
          "text": "「いい一日」をいつまでも忘れないようになる。",
          "translation": "变得永远不会忘记“美好的一天”。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章中并没有提到坚持写日记是为了“永远不会忘记（いつまでも忘れない）”美好的一天。"
        }
      ]
    }
  ],
  "2016.7": [
    {
      "id": "n2-short-2016-7-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "そこで、一人でも多くの皆さんの回答を得るため、回答期間を６月３０日まで延長します。未回答の皆さんはぜひ積極的に回答してください。"
      ],
      "options": [
        {
          "number": 1,
          "text": "７月中旬に専用ウェブページで結果を公開するので、見てほしい。",
          "translation": "将于7月中旬在专用网页上公布结果，希望大家去看。",
          "correct": false,
          "error": "relation-error",
          "explanation": "虽然文章最后提到了会在7月中旬公布结果，但这只是附加说明，并不是发布这则通知“最想传达（最も伝えたいこと）”的核心目的。"
        },
        {
          "number": 2,
          "text": "締め切り日を延長したので、多くの人に回答してほしい。",
          "translation": "因为延长了截止日期，希望更多的人来回答。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文延长截止日期（「回答期間を６月３０日まで延長します」）并希望大家积极作答（「積極的に回答してください」）的核心诉求。"
        },
        {
          "number": 3,
          "text": "未回答の人は、６月２４日までに回答してほしい。",
          "translation": "未回答的人，希望在6月24日之前回答。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确表示截止日期已经从6月24日延长到了6月30日，因此选项中“在6月24日前回答”与事实不符。"
        },
        {
          "number": 4,
          "text": "すでに回答した人も、もう一度回答してほしい。",
          "translation": "已经回答过的人，也希望再回答一次。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章只是呼吁“尚未回答的同学（未回答の皆さん）”去回答，并没有要求已经回答过的人再回答一次。"
        }
      ]
    },
    {
      "id": "n2-short-2016-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "真のプロと呼ばれる人たちは、他者評価ではなく、自己評価の中に生きています。",
        "他人が認めなくても、自分が正しいと思えることに自信を持っています。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自己評価と他者評価が一致したときに自信を持つ。",
          "translation": "当自我评价和他人评价一致时会有自信。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是“即使别人不认可，只要自己认为是正确的，他们也会抱有自信（他人が認めなくても、自分が正しいと思えることに自信を持っています）”，并不需要评价“一致（一致したとき）”。"
        },
        {
          "number": 2,
          "text": "自己評価も他者評価と同じように重視している。",
          "translation": "把自我评价和他人评价看得同样重要。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章明确指出他们“不是活在他人评价中（他者評価ではなく）”，而是活在自我评价中，并非将两者“同样重视（同じように重視している）”。"
        },
        {
          "number": 3,
          "text": "自分で自分を認めることができれば自信が持てる。",
          "translation": "只要自己能认可自己就能有自信。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中“只要自己认为是正确的，他们也会抱有自信（自分が正しいと思えることに自信を持っています）”的观点。"
        },
        {
          "number": 4,
          "text": "他人に自分が認められればさらに自信がつく。",
          "translation": "如果自己被他人认可了，就会更有自信。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章最后一段指出，“如果处于随着他人评价而时喜时忧的状态，那就不能说是获得了真正意义上的自信（他者評価に一喜一憂している状態では、本当の意味で自信を獲得したとは言えない）”，因此“被他人认可会更有自信”是不符合文章观点的。"
        }
      ]
    },
    {
      "id": "n2-short-2016-7-03",
      "questionNumber": 3,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "４月２０日までに東京の本社に届けていただきたいのですが、今から注文しても間に合うでしょうか。"
      ],
      "options": [
        {
          "number": 1,
          "text": "蛍光ペン３色セットを１００個購入することができるか。",
          "translation": "能否购买100套三色荧光笔套装。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章中虽然提到想买100套，但咨询的核心不是能不能买，而是能不能在指定日期前送达。"
        },
        {
          "number": 2,
          "text": "蛍光ペン３色セット１００個を４月２０日までに東京に届けられるか。",
          "translation": "能否在4月20日之前将100套三色荧光笔套装送到东京。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“想在4月20日前送到东京，现在下单来得及吗（４月２０日までに東京の本社に届けていただきたいのですが、今から注文しても間に合うでしょうか）”的询问内容。"
        },
        {
          "number": 3,
          "text": "蛍光ペン３色セット１００個を４月２０日までに東京に届ける場合、送料はいくらか。",
          "translation": "如果要在4月20日之前将100套三色荧光笔套装送到东京，运费是多少。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章中写道“即使产生追加运费也没关系（追加送料がかかっても構いません）”，说明重点不在于询问运费金额，而是能否按时送达。"
        },
        {
          "number": 4,
          "text": "蛍光ペン３色セット以外に、４月２０日までに東京に届けられる商品はあるか。",
          "translation": "除了三色荧光笔套装以外，还有没有能在4月20日之前送到东京的商品。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章中是说“如果来不及的话，我将考虑是否更换为其他商品（間に合わないようでしたら、他の商品に変更するか検討いたします）”，这是自己后续的打算，而不是在邮件中让店方推荐其他商品。"
        }
      ]
    },
    {
      "id": "n2-short-2016-7-04",
      "questionNumber": 4,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "犬の順位が下になるように順位を明確にして安住させます。",
        "したがって、飼い主は常に犬より上位であることを犬に意識させて飼うことが必要で…"
      ],
      "options": [
        {
          "number": 1,
          "text": "家族の中で最も上位の人に犬が従うようにしつける。",
          "translation": "训练狗让它服从家庭中地位最高的人。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章说的是让狗的地位排在家庭所有成员的下方（「犬の順位が下になるように」），而不是仅仅让它服从“地位最高的人（最も上位の人）”。"
        },
        {
          "number": 2,
          "text": "犬が楽しく暮らせるように家族と同じように扱う。",
          "translation": "为了让狗愉快地生活，像对待家人一样对待它。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章强调要明确地位的高低顺序，并没有说要“像对待家人一样对待它（家族と同じように扱う）”。"
        },
        {
          "number": 3,
          "text": "犬が家族よりも下であることを家族に意識させる。",
          "translation": "让家人意识到狗比家人的地位低。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章指出是要“让狗意识到（犬に意識させて）”饲养者地位更高，而不是“让家人意识到（家族に意識させる）”。"
        },
        {
          "number": 4,
          "text": "犬が家族よりも下であることを犬にわからせる。",
          "translation": "让狗明白它比家人的地位低。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中要明确顺序让狗的地位在下方，并“让狗意识到（犬に意識させて）”这一点的论述。"
        }
      ]
    },
    {
      "id": "n2-short-2016-7-05",
      "questionNumber": 5,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "愛している気持ちは届くかもしれないが、同時にその幼稚さや、愛の浅さや、性格の悪さまでもが相手に届いてしまう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "書き手の意図しないことまで伝わってしまうもの",
          "translation": "连写信人没有意图表达的内容也会传达出去的东西",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中即使只是想表达爱意，但“幼稚、爱意的浅薄，甚至是性格的劣根性也会传递给对方（幼稚さや、愛の浅さや、性格の悪さまでもが相手に届いてしまう）”的论述，即连没打算传达的内容也传达出去了。"
        },
        {
          "number": 2,
          "text": "書き手の愛の深さだけが目立ってしまうもの",
          "translation": "只有写信人的爱之深会显得很突出的东西",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是“爱意的浅薄（愛の浅さ）”等也会传达，并没有说“只有爱之深（愛の深さだけが）”会引人注目。"
        },
        {
          "number": 3,
          "text": "書き手の伝えたいことが伝えられないもの",
          "translation": "写信人想传达的事情无法传达的东西",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到“爱意或许能传达（愛している気持ちは届くかもしれないが）”，说明想传达的内容是可以传达的，只是同时也会暴露出其他东西，并非“无法传达（伝えられない）”。"
        },
        {
          "number": 4,
          "text": "書き手の心を思いどおりに伝えられるもの",
          "translation": "能将写信人的内心如愿传达的东西",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "正是因为连不想传达的缺点都会暴露，无法“如愿地传达（思いどおりに伝えられる）”，作者才说这是信件“可怕的地方（恐ろしいところ）”。"
        }
      ]
    }
  ],
  "2017.12": [
    {
      "id": "n2-short-2017-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "途中、動物の姿に見える犬岩や猿岩、舞台のように大きく平らな岩もあり、おもしろい形の岩を探しながら登る楽しさがあります。"
      ],
      "options": [
        {
          "number": 1,
          "text": "高さ６００メートルの山の頂上に大きく平らな岩がある。",
          "translation": "在600米高的山顶上，有又大又平的岩石。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到又大又平的岩石是在“途中（途中）”，而不是在“山顶上（頂上に）”。"
        },
        {
          "number": 2,
          "text": "登山をしながら、いろいろな形の岩を見ることができる。",
          "translation": "可以一边登山，一边观赏各种形状的岩石。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中关于登山途中可以寻找各种有趣形状的岩石（「おもしろい形の岩を探しながら登る楽しさがあります」）的描述。"
        },
        {
          "number": 3,
          "text": "四季それぞれに異なる野鳥を観察することができる。",
          "translation": "可以在四季各自观察到不同的野鸟。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是“从春天到初夏（春から初夏にかけて）”可以观察野鸟，而不是“四季各自（四季それぞれに）”都能观察不同的野鸟。"
        },
        {
          "number": 4,
          "text": "登山道が緩やかなため、いつも多くの登山客が訪れている。",
          "translation": "因为登山道很平缓，所以总是（一直）有很多登山客来访。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章提到有很多登山客来访是因为“秋天的红叶格外特别（秋の紅葉は格別で…そのため、この時期には多くの登山客が）”，即秋季登山客多，而不是因为道路平缓导致“总是（いつも）”有很多登山客。"
        }
      ]
    },
    {
      "id": "n2-short-2017-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "なぜなら、マニュアルには、あなたにしか書けないことをすべて否定してしまうことにつながる可能性があるからです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "誰からも高い評価を得られやすくなる。",
          "translation": "变得容易得到任何人的高评价。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说“这样写就会得到好评的指南是大敌”，并不是说按照范本写就一定能得到高评价，且这也不是作者强调的负面后果。"
        },
        {
          "number": 2,
          "text": "文章の形式にこだわりすぎたものになる。",
          "translation": "变成过于拘泥于文章形式的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章中说“如果是文章形式上的事情暂且不谈（文章の形式的なことならばともかく）”，作者批判的是涉及到“内容”的指南，而不是说作文会变得过于拘泥于形式。"
        },
        {
          "number": 3,
          "text": "自分の視点や主張がわかりやすくなる。",
          "translation": "自己的观点和主张变得容易理解。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章鼓励坚持自己看到的与众不同的东西，按照范本写并不能让自己的观点更易懂，反而会否定掉自己的独特视角。"
        },
        {
          "number": 4,
          "text": "自分にしか書けないことが書けなくなる。",
          "translation": "变得写不出只有自己才能写出来的东西。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“有可能导致把只有你才能写出来的东西全部否定掉（あなたにしか書けないことをすべて否定してしまうことにつながる可能性がある）”。"
        }
      ]
    },
    {
      "id": "n2-short-2017-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "大型ごみを捨てる場合は、各自で市の清掃局へ収集の申し込みが必要です。収集日は清掃局から指定されますので、管理室にもお知らせください。なお、年内収集の申し込みは１８日（月）が締め切りとのことです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "１２月１８日までに清掃局に収集を申し込み、収集日を管理室に連絡する。",
          "translation": "在12月18日之前向环卫局申请收集，并将收集日期联系管理室。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中“在18日之前申请（１８日が締め切り）”、“各自向环卫局申请（各自で市の清掃局へ収集の申し込み）”以及“将收集日期通知管理室（収集日は…管理室にもお知らせください）”的要求。"
        },
        {
          "number": 2,
          "text": "１２月１８日までに管理室に連絡し、年内の収集が可能かどうか確認する。",
          "translation": "在12月18日之前联系管理室，确认是否可以在年内收集。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章指出申请是由学生“各自向环卫局申请（各自で市の清掃局へ収集の申し込み）”，而不是向管理室确认是否可以收集。"
        },
        {
          "number": 3,
          "text": "１２月２２日までに清掃局に収集を申し込み、収集日がいつか確認する。",
          "translation": "在12月22日之前向环卫局申请收集，并确认收集日期是哪天。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "年内收集的申请截止日期是“18日（１８日）”，而不是“22日（２２日）”；且还需要“通知管理室（管理室にもお知らせください）”，这一点选项中遗漏了。"
        },
        {
          "number": 4,
          "text": "１２月２２日までに管理室に連絡し、清掃局への収集申し込みを依頼する。",
          "translation": "在12月22日之前联系管理室，委托其向环卫局申请收集。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "申请需要“各自向市环卫局申请（各自で市の清掃局へ収集の申し込み）”，而不是“委托管理室申请（管理室に連絡し、……依頼する）”；且大型垃圾申请期限是18日，22日是针对“丢弃大量垃圾（多量のごみを出す場合）”的期限。"
        }
      ]
    },
    {
      "id": "n2-short-2017-12-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "経営の現場でより重要なのは、その失敗をいかにうまく処理できるかということである。あらかじめ失敗を想定しているからこそ、適切な処理も可能となる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "いいアイディアは、すぐに実行しないと失敗する。",
          "translation": "好点子如果不马上执行就会失败。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说作者一有好点子就会马上执行，但这并不代表“不马上执行就会失败”。"
        },
        {
          "number": 2,
          "text": "失敗は、予測できれば避けることが可能である。",
          "translation": "如果能预测到失败，就有可能避免。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确表示，有时失败会以“无论如何都无法避免的形式降临（どうしても避けられない形で失敗が訪れる）”，这说明即使预测到也未必能避免。"
        },
        {
          "number": 3,
          "text": "失敗の可能性を考えておけば、うまく対応できる。",
          "translation": "如果事先考虑到失败的可能性，就能很好地应对。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“正因为事先设想了失败，所以才可能进行恰当的处理（あらかじめ失敗を想定しているからこそ、適切な処理も可能となる）”的逻辑。"
        },
        {
          "number": 4,
          "text": "失敗を適切に処理するには、失敗の経験が役に立つ。",
          "translation": "为了恰当地处理失败，失败的经验会派上用场。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章强调的是“事先设想（あらかじめ想定）”失败的可能性，并没有提到“失败的经验（失敗の経験）”会派上用场。"
        }
      ]
    },
    {
      "id": "n2-short-2017-12-05",
      "questionNumber": 5,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "自動車で旅して歩くことを、鉄道の旅よりも良いと感じる所以は、いつ出発してもいいし、どこでどれだけ立ち止まってもいいということである。",
        "発見する風景は、自在に立ち止まり、そして一日でも眺めていることができる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人が行かない道を行って、誰も見たことのない風景を発見できる点",
          "translation": "走别人不走的路，能发现谁也没见过的风景这一点。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章只是说在无名的道路上发现风景，并没有说能发现“谁也没见过（誰も見たことのない）”的风景。"
        },
        {
          "number": 2,
          "text": "好きなときに好きなだけ立ち止まって風景を眺められる点",
          "translation": "可以在喜欢的时候停下来，想看多久风景就看多久这一点。",
          "correct": true,
          "error": null,
          "explanation": "完全对应原文中“在任何地方想停多久就停多久（どこでどれだけ立ち止まってもいい）”以及“可以自由地停下来（自在に立ち止まり）”的描述。"
        },
        {
          "number": 3,
          "text": "見たいと思っていた風景を遠回りせずに見に行ける点",
          "translation": "可以不绕远路去看一直想看的风景这一点。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到关于“不绕远路（遠回りせずに）”的内容。"
        },
        {
          "number": 4,
          "text": "窓の外に流れる美しい風景を眺められる点",
          "translation": "可以眺望窗外流逝的美丽风景这一点。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“眺望窗外流逝的美丽风景（窓の外に流れる美しい風景）”是铁路旅行的特征（被作者比作“幻影”），而不是汽车旅行的好处。"
        }
      ]
    }
  ],
  "2017.7": [
    {
      "id": "n2-short-2017-7-01",
      "questionNumber": 1,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "聞き手の反応によって、面白いところがくわしく語られ、退屈な部分は省かれ、物語としての形がととのってきます。だから面白いはずです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "話し手が面白いと思う部分だけが伝えられてきたから",
          "translation": "因为只有讲述者觉得有趣的部分被流传了下来。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确提到是根据“听众的反应（聞き手の反応）”来调整故事，而不是只传达“讲述者（話し手）”觉得有趣的部分。"
        },
        {
          "number": 2,
          "text": "話し手がつまらないと思う部分も面白く語られてきたから",
          "translation": "因为连讲述者觉得无聊的部分也被讲得很有趣。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是无聊的部分会“被省略（省かれ）”，而不是被“讲得很有趣（面白く語られてきた）”。"
        },
        {
          "number": 3,
          "text": "聞き手にとって面白い部分が残され伝えられてきたから",
          "translation": "因为对听众来说有趣的部分被保留并流传了下来。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中根据听众反应，有趣的地方被详细讲述（留下）的逻辑。"
        },
        {
          "number": 4,
          "text": "聞き手にとってためになる内容がうまく加えてあるから",
          "translation": "因为巧妙地添加了对听众有益的内容。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章最后一段指出，如果添加了教训或说教（即对听众有益的内容），反而会“变得无聊（つまらなくしてしまう）”。"
        }
      ]
    },
    {
      "id": "n2-short-2017-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "最近、大声で話しながら作業をしているグループが増えており、自分の調べものに集中できず困っています。"
      ],
      "options": [
        {
          "number": 1,
          "text": "利用者がグループで調べものをしていること",
          "translation": "读者以小组形式查阅资料。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "仅仅是以小组形式查阅资料并不是问题所在，真正的问题是他们“大声说话（大声で話しながら）”。"
        },
        {
          "number": 2,
          "text": "話しながら作業しているグループが多いこと",
          "translation": "边说话边进行学习（作业）的小组很多。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中“大声说话边进行学习（作业）的小组变多了（大声で話しながら作業をしているグループが増えており）”这一困扰她的问题。"
        },
        {
          "number": 3,
          "text": "グループ用の自習室を適切に使用していないこと",
          "translation": "没有恰当地使用小组专用自习室。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "邮件中是建议“另外设置一个供小组使用的自习室（グループ用の自習室を別に作る）”，目前并没有小组专用自习室被不当使用的问题。"
        },
        {
          "number": 4,
          "text": "図書館の資料を使わずに作業しているグループがあること",
          "translation": "有不使用图书馆资料进行学习（作业）的小组。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者提到那些小组“似乎也是在利用图书馆的资料进行查阅（図書館の資料を利用して調べものをしているようなので）”，这与选项描述的“不使用图书馆资料（資料を使わずに）”完全相反。"
        }
      ]
    },
    {
      "id": "n2-short-2017-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "全製品を回収し、交換を行うとの発表がありました。",
        "各課で『はさみＳＢ－Ａ"
      ],
      "options": [
        {
          "number": 1,
          "text": "欠陥があるものを、６月２１日までに会計課に渡す。",
          "translation": "在6月21日之前，将有缺陷的产品交给会计课。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "制造商是要“回收所有产品（全製品を回収）”，不仅仅是交出“有缺陷的（欠陥があるものを）”。"
        },
        {
          "number": 2,
          "text": "欠陥があるものを、６月２２日までに三村株式会社に発送する。",
          "translation": "在6月22日之前，将有缺陷的产品发送给三村株式会社。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "同样，回收对象不仅仅是“有缺陷的”。而且各课是把剪刀交给“会计课（会計課）”，由会计课在22日发送给制造商，而不是各课直接发给制造商。"
        },
        {
          "number": 3,
          "text": "すべてを、６月２１日までに会計課に渡す。",
          "translation": "在6月21日之前，将所有产品交给会计课。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了通知要求的：把“所有产品（全製品/すべて）”在“6月21日之前（６月２１日までに）”交给“会计课（会計課）”。"
        },
        {
          "number": 4,
          "text": "すべてを、６月２２日までに三村株式会社に発送する。",
          "translation": "在6月22日之前，将所有产品发送给三村株式会社。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "各课是被要求在21日之前交给“会计课”，而不是在22日前发给“三村株式会社”。发送给制造商是会计课的工作。"
        }
      ]
    },
    {
      "id": "n2-short-2017-7-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "一方、笑顔になると幸せだという気持ちがわいてくるということもわかっている。同じ漫画を、意図的に笑顔を作って読んだときと、厳しい顔をして読んだときとでは、笑顔で読んだときのほうが面白いという評価が高くなる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "作った笑顔であっても、幸せな気持ちになれる。",
          "translation": "即使是装出来的笑容，也能让人感到幸福。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中“一旦露出笑容就会涌现出幸福的心情”以及“刻意挤出笑容（意図的に笑顔を作って）”也能提高积极评价的论述。"
        },
        {
          "number": 2,
          "text": "幸せだと感じていなければ、笑顔にはなれない。",
          "translation": "如果不感到幸福，就无法露出笑容。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章说感到幸福会笑，但同时也说了“刻意挤出笑容”也能让人觉得有趣、产生幸福感，并未说“不感到幸福就无法露出笑容（幸せだと感じていなければ、笑顔にはなれない）”。"
        },
        {
          "number": 3,
          "text": "笑顔でいれば、周りの人にプラスの印象を与える。",
          "translation": "只要保持笑容，就能给周围的人留下积极的印象。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章讨论的是笑容对“自己”接收信息的影响，并未提及会给“周围的人（周りの人）”带来什么印象。"
        },
        {
          "number": 4,
          "text": "自然な笑顔は、作った笑顔よりも幸せな感情を伝える。",
          "translation": "自然的笑容比装出来的笑容更能传达幸福的情感。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未比较“自然的笑容”和“装出来的笑容”哪个更能传达感情，这属于无中生有。"
        }
      ]
    },
    {
      "id": "n2-short-2017-7-05",
      "questionNumber": 5,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "私たちは働くとき、何らかの社会的役割を担っていて、その役割に応じた結果が求められます。",
        "仕事の本質は得ることではなく、自分に求められているものを人に与える、すなわち『人の役に立つ"
      ],
      "options": [
        {
          "number": 1,
          "text": "社会から期待された役割を果たすこと",
          "translation": "去完成社会所期待的角色任务。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文章中“承担社会角色并给出符合要求的结果（社会的役割を担っていて、その役割に応じた結果が求められます）”以及“给予别人所要求的东西（求められているものを人に与える）”的论述。"
        },
        {
          "number": 2,
          "text": "仕事で得たものを人に与えること",
          "translation": "把在工作中获得的东西给予他人。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是在获得之前先给予别人被要求的东西（「得る」前に……「与える」），而不是把在工作中“获得的东西（得たもの）”给予他人。"
        },
        {
          "number": 3,
          "text": "自身の社会的役割を探すこと",
          "translation": "寻找自身的社会角色。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章强调的是去承担并完成既定的社会角色，并未提及去“寻找（探す）”社会角色。"
        },
        {
          "number": 4,
          "text": "自身の成長を求めること",
          "translation": "追求自身的成长。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章提到自身成长是回应期待后“获得的东西（得られるもの）”，也就是结果，而不是工作的本质或追求的目的。"
        }
      ]
    }
  ],
  "2018.12": [
    {
      "id": "n2-short-2018-12-01",
      "questionNumber": 1,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "情報化時代を生きるためには個々人が他者の提供する情報を評価し、比較検討し、その中から自分にとって、自分の目標にとって有益な情報を選別する能力と知識を持たなければならないのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "情報機器が提供してくれる情報を活用すべきだ。",
          "translation": "应该灵活运用信息设备提供的信息。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章第一段提到人们会“误以为（勘違いする）”信息设备提供的信息更可靠，作者并不是主张应该去活用它，而是主张要自己去评价和筛选。"
        },
        {
          "number": 2,
          "text": "自分にとって必要な情報を選び出す力が大切だ。",
          "translation": "挑选出对自己必要的信息的能力很重要。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中为了在信息化时代生存，必须具备从中筛选出对自己有益信息的能力（「有益な情報を選別する能力と知識を持たなければならない」）这一主张。"
        },
        {
          "number": 3,
          "text": "自分の目標に合った情報を多く集めたほうがいい",
          "translation": "收集多一些符合自己目标的信息比较好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是去“筛选（選別する）”信息的能力，而不是去“收集多一些（多く集めたほうがいい）”信息。"
        },
        {
          "number": 4,
          "text": "自分で選別した情報を他者の情報と比較検討すべきだ。",
          "translation": "应该把自己筛选出的信息与他人的信息进行比较探讨。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说要对“他人提供的信息（他者の提供する情報）”进行比较探讨然后筛选，而不是把自己选好的信息拿去跟别人的比较。"
        }
      ]
    },
    {
      "id": "n2-short-2018-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "再修理をお願いしたいのですが、現在は保証期間が過ぎています。前回は保証期間内だったので無料でしたが、今回は修理費を支払わなければなりませんか。"
      ],
      "options": [
        {
          "number": 1,
          "text": "再修理なので、修理費が安くなるかどうか教えてほしい",
          "translation": "因为是再次修理，希望能告诉我修理费是否会变便宜。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者是询问是否需要收费（是否免费），而不是问修理费能不能“变便宜（安くなるか）”。"
        },
        {
          "number": 2,
          "text": "無料でなくてもいいので、修理できるかどうか教えてほしい",
          "translation": "即使不免费也没关系，希望能告诉我是不是可以修理。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者关心的是费用问题（是不是没修好导致的，能否免修理费），而不是问“能不能修（修理できるかどうか）”。"
        },
        {
          "number": 3,
          "text": "保証期間内なので、無料で修理できるかどうか教えてほしい",
          "translation": "因为在保修期内，希望能告诉我是否能免费修理。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "邮件中明确说明现在“已经过了保修期（現在は保証期間が過ぎています）”，而不是在保修期内。"
        },
        {
          "number": 4,
          "text": "保証期間が過ぎているが、修理費が必要かどうか教えてほしい",
          "translation": "虽然过了保修期，但希望能告诉我是否需要修理费。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“现在已经过了保修期（現在は保証期間が過ぎています）”以及“这次必须要支付修理费吗？（今回は修理費を支払わなければなりませんか）”的核心疑问。"
        }
      ]
    },
    {
      "id": "n2-short-2018-12-03",
      "questionNumber": 3,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "文化項目の価値評価は人類共通のものではありません。ある国のある地域では優れているとされるものでも、他の国のある地域に行ったならば、それは妙な事物であったり… 同じことは時代というものに関しても言えることです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "地域や時代によって異なる。",
          "translation": "根据地区和时代而不同。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中价值评价在不同地区（「ある国のある地域では…他の国のある地域に…」）和不同时代（「同じことは時代というものに関しても…」）都不一样的论述。"
        },
        {
          "number": 2,
          "text": "地域や時代に関係なく変化する。",
          "translation": "与地区和时代无关地发生变化。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章明确说明了价值评价是因地区和时代的不同而改变的，而不是“与地区和时代无关（関係なく）”。"
        },
        {
          "number": 3,
          "text": "地域差より時代差のほうが大きい。",
          "translation": "相比地域差异，时代差异更大。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章只是分别指出了存在地区差异和时代差异，并没有比较两者哪个“更大（大きい）”。"
        },
        {
          "number": 4,
          "text": "同じ集団なら時代差はない。",
          "translation": "如果是同一个群体，就没有时代差异。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章最后一句举例说明了即使是“同一个群体（同じ集団の人々が）”，现在和一百年前的评价也可能截然不同，因此“没有时代差异（時代差はない）”是错误的。"
        }
      ]
    },
    {
      "id": "n2-short-2018-12-04",
      "questionNumber": 4,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "インターネットでの販売は１１月３０日までとし、しばらくの間中止させていただきます。",
        "なお、店での販売は１２月１日以降も続けてまいります。"
      ],
      "options": [
        {
          "number": 1,
          "text": "インターネット販売は１１月３０日で中止し、製造体制が整うまで店での販売のみ行う。",
          "translation": "网络销售在11月30日中止，在制造体制准备完善之前只进行实体店的销售。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了网络销售中止和实体店销售继续的情况。"
        },
        {
          "number": 2,
          "text": "インターネット販売は１１月３０日で中止し、１２月１日からは店での販売を始める。",
          "translation": "网络销售在11月30日中止，从12月1日开始进行实体店的销售。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "实体店销售是一直在进行的（「続けてまいります」），而不是从12月1日才“开始（始める）”。"
        },
        {
          "number": 3,
          "text": "インターネット販売も店での販売も１１月３０日で中止するが、製造体制が整ったらどちらも再開する。",
          "translation": "网络销售和实体店销售都在11月30日中止，但制造体制准备完善后两边都会重新开放。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "实体店销售并没有中止，只有网络销售中止了。"
        },
        {
          "number": 4,
          "text": "インターネット販売も店での販売も１１月３０日で中止するが、製造体制が整ったら店での販売のみ再開する。",
          "translation": "网络销售和实体店销售都在11月30日中止，但制造体制准备完善后只重新开放实体店的销售。",
          "correct": false,
          "error": "not-stated",
          "explanation": "同上，实体店销售并未中止。"
        }
      ]
    },
    {
      "id": "n2-short-2018-12-05",
      "questionNumber": 5,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "人生で起きた最悪の出来事も、その後の生き方によっては、自分の人生の転機になったと捉え直すときがあるからだ。",
        "現実に起きた事は変えられないが、物語はいくらでも変えられる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "過去に起きた出来事の意味を理解すれば、未来を変えられる。",
          "translation": "如果理解了过去发生的事件的意义，就能改变未来。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是可以通过改变故事来改变看过去和未来的眼光，而不是说“理解了过去事件的意义就能改变未来”。"
        },
        {
          "number": 2,
          "text": "現実に起きた出来事によって、人生という物語が決まる。",
          "translation": "人生这个故事，是由现实中发生的事件决定的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确表示“人类活在故事中，而不是现实中（人間は現実ではなく、物語を生きている）”且“故事可以随意改变（物語はいくらでも変えられる）”，并非由现实发生的事件决定故事。"
        },
        {
          "number": 3,
          "text": "同じ出来事でも、捉え方によってその意味が変えられる。",
          "translation": "即使是同样的事件，根据看待方式的不同，其意义也能被改变。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“过去发生的事件无法改变，但意义可以改变”以及“有时会重新将其看作是人生的转折点”的观点。"
        },
        {
          "number": 4,
          "text": "どんな出来事でも、肯定的に捉えたほうがいい。",
          "translation": "无论什么事件，最好都从肯定的角度去看待。",
          "correct": false,
          "error": "opposite",
          "explanation": "虽然文章举了把糟糕的事情看作转折点的例子，但并没有直接主张“无论什么事情都最好从肯定的角度去看待（肯定的に捉えたほうがいい）”。"
        }
      ]
    }
  ],
  "2018.7": [
    {
      "id": "n2-short-2018-7-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "出発日を８月２０日（月）に変更して、再度見積書を作成していただけないでしょうか。料金は今回の見積書の金額を超えないようにお願いいたします。ホテルは変更になってもかまいませんが、同じ１泊２日の日程でお願いいたします。"
      ],
      "options": [
        {
          "number": 1,
          "text": "料金が上がってもいいので、出発日を変更してほしい。",
          "translation": "费用上涨也没关系，希望能更改出发日期。",
          "correct": false,
          "error": "relation-error",
          "explanation": "邮件明确要求费用“不要超过本次估价单的金额（金額を超えないように）”，并非“费用上涨也没关系（上がってもいい）”。"
        },
        {
          "number": 2,
          "text": "料金を上げずに、出発日を変更してほしい。",
          "translation": "在不提高费用的情况下，希望能更改出发日期。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“更改出发日期（出発日を変更して）”并且“费用不超过原金额（金額を超えないように＝料金を上げずに）”的要求。"
        },
        {
          "number": 3,
          "text": "宿泊先は変わってもいいので、出発日と日数を変更してほしい。",
          "translation": "住宿地变了也没关系，希望能更改出发日期和天数。",
          "correct": false,
          "error": "not-stated",
          "explanation": "邮件要求维持“相同的两天一晚的日程（同じ１泊２日の日程で）”，并未要求更改“天数（日数）”。"
        },
        {
          "number": 4,
          "text": "宿泊先は変えずに、出発日と日数を変更してほしい。",
          "translation": "住宿地不改变，希望能更改出发日期和天数。",
          "correct": false,
          "error": "relation-error",
          "explanation": "邮件中写的是“酒店即使发生变更也没关系（ホテルは変更になってもかまいませんが）”，而不是“住宿地不改变（宿泊先は変えずに）”；且同样未要求更改天数。"
        }
      ]
    },
    {
      "id": "n2-short-2018-7-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "一方で、平坦なところから、則ち同一の目線で話しかけると、活発な意見交換が期待できる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "高い場所から話すと、聞き手の反応が見にくい。",
          "translation": "从高处说话，很难看清听众的反应。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章中说从高处说话“能惊人地将全场各个角落尽收眼底（ビックリするほど場の隅々まで見通せる）”，并非“难以看清（見にくい）”。"
        },
        {
          "number": 2,
          "text": "高い場所から話すと、聞き手が反対意見を言いやすくなる。",
          "translation": "从高处说话，听众变得容易提出反对意见。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说从高处说话“听众的反应会变得迟钝（聞き手からの反応は鈍くなる）”，也就是不容易发言，而不是变得“容易提出反对意见”。"
        },
        {
          "number": 3,
          "text": "同じ高さで話すと、聞き手が反応しにくい。",
          "translation": "在同一高度说话，听众很难做出反应。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说在同一高度说话“可以期待活跃的意见交换（活発な意見交換が期待できる）”，说明听众很容易做出反应，并非“难以反应（反応しにくい）”。"
        },
        {
          "number": 4,
          "text": "同じ高さで話すと、聞き手が発言しやすくなる。",
          "translation": "在同一高度说话，听众变得容易发言。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中在同一视线（高度）搭话时能期待“活跃的意见交换”这一积极效果。"
        }
      ]
    },
    {
      "id": "n2-short-2018-7-03",
      "questionNumber": 3,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "行動があなたの思考を止めることはない。むしろ思考を加速させ、改善させる効果があることを知ってほしい。",
        "行動し、変化する状況の中で考えつづけること（中略）そうすることで最速の思考が生み出されるのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "行動を止めずに考えつづけることで、思考はより加速する。",
          "translation": "通过不停下行动而持续思考，思考会进一步加速。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“行动反而具有加速思考的效果”以及“在行动中持续思考能产生最快的思考”的观点。"
        },
        {
          "number": 2,
          "text": "行動を止めて、深く思考することも必要だ。",
          "translation": "停下行动进行深入思考也是必要的。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章明确表示“要避免为了思考而停止行动（行動を止めてまでして考えるのは避けよう）”，此选项与文章主张完全相反。"
        },
        {
          "number": 3,
          "text": "変化する状況の中で、行動を加速することが大切だ。",
          "translation": "在变化的状况中，加速行动是很重要的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是在行动中加速“思考（思考を加速させ）”，而不是加速“行动（行動を加速する）”。"
        },
        {
          "number": 4,
          "text": "考えつづけていれば、さらに勇気が持てるようになる。",
          "translation": "只要持续思考，就会变得更有勇气。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说“在行动中持续思考需要相当大的勇气（考えつづけることを実践するのはかなり勇気が要る）”，而不是说持续思考会让人变得更有勇气。"
        }
      ]
    },
    {
      "id": "n2-short-2018-7-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "今年度より各自で指定の医療機関の中から選んで受診していただくことになりました。",
        "４月から翌年３月までの間で受診日を決め、直接医療機関に予約を入れて受診するようにしてください。"
      ],
      "options": [
        {
          "number": 1,
          "text": "アラキ医療センターに各自で予約を入れ、受診するようになった。",
          "translation": "变成了各自向荒木医疗中心预约并就诊。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是“从指定的医疗机构中自行选择”，而不是只能去“荒木医疗中心（アラキ医療センター）”。"
        },
        {
          "number": 2,
          "text": "アラキ医療センターで４月から翌年３月までの指定日に受診するようになった。",
          "translation": "变成了在4月到次年3月期间的指定日期，在荒木医疗中心就诊。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "不仅医疗机构不是固定的，就诊日期也是由自己决定（受診日を決め），而不是“指定日期（指定日）”。"
        },
        {
          "number": 3,
          "text": "各自で医療機関と日を決めて予約し、受診するようになった。",
          "translation": "变成了各自决定医疗机构和日期进行预约并就诊。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中各自选择医疗机构、自己决定日期并直接预约的变更内容。"
        },
        {
          "number": 4,
          "text": "各自で医療機関と日と検査項目を決めて予約し、受診するようになった。",
          "translation": "变成了各自决定医疗机构、日期和检查项目进行预约并就诊。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确说明“关于检查项目，与以往相同（検査項目につきましては、これまで通りです）”，并不是由各自决定。"
        }
      ]
    },
    {
      "id": "n2-short-2018-7-05",
      "questionNumber": 5,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "しかしながら、人のいいところを参考にして、自分なりの方法を工夫して努力していくのは、まともな人のすることである。そこには、単に真似るのではなく、先達から『学ぶ"
      ],
      "options": [
        {
          "number": 1,
          "text": "成功を目指して何も考えずに努力することが大切だ。",
          "translation": "为了成功，什么都不想地去努力是很重要的。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章说的是比起“不加思考地盲目努力（やみくもに努力する）”，遵循成功案例概率更高，此选项的说法与文章观点相反。"
        },
        {
          "number": 2,
          "text": "人の成功例は参考にしないほうがいい。",
          "translation": "别人的成功案例还是不要参考为好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者主张要“参考别人的长处（人のいいところを参考にして）”，也就是要参考成功案例去学习，选项说法错误。"
        },
        {
          "number": 3,
          "text": "人の真似を続けていけば、必ず成功できる。",
          "translation": "如果一直模仿别人，就一定能成功。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者认为全面“模仿（真似る）”会被责备，且“一定能成功（必ず成功できる）”的表述过于武断，不符合原文的论理。"
        },
        {
          "number": 4,
          "text": "人のいいところを見て工夫すれば、成功につながる。",
          "translation": "看到别人的长处并加以钻研，就会通向成功。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中关于参考他人长处、摸索出适合自己的方法并为之努力的积极态度。"
        }
      ]
    }
  ],
  "2019.12": [
    {
      "id": "n2-short-2019-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "一人で考えれば考えるほど、あなたは成長します。",
        "自分一人で考える時間がなければ、あなたはどんなに立派な話を聞いても、どんなに役立つ本を読んでも、その考えやアイデアは、あなたのものになりません。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分自身を知るには、一人で考える時間が必要だ。",
          "translation": "为了了解自己，需要一个人思考的时间。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章提到的是“成长（成長）”和将知识变成自己的，并没有提到为了“了解自己（自分自身を知る）”。"
        },
        {
          "number": 2,
          "text": "人として成長するには、自分一人で考える時間が必要だ。",
          "translation": "为了作为一个人获得成长，需要自己一个人思考的时间。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文章第一段中越是独自思考越能获得成长的主张。"
        },
        {
          "number": 3,
          "text": "自分一人で考える時間が長ければ、よいアイデアが浮かぶ。",
          "translation": "只要自己一个人思考的时间够长，就能想出好点子。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章说的是如果不独自思考，别人的点子就不会变成自己的，而不是说独自思考时间长就能“想出好点子（よいアイデアが浮かぶ）”。"
        },
        {
          "number": 4,
          "text": "本当の知識を得るには、役立つ本や立派な話に接するべきだ。",
          "translation": "为了获得真正的知识，应该接触有用的书和精彩的讲话。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章在第二段明确指出，如果没有独自思考的时间，就算接触了有用的书和精彩的话，也不会成为真正的知识。选项与文章逻辑相反。"
        }
      ]
    },
    {
      "id": "n2-short-2019-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "来年より４月に会費（４月から翌年３月の１年分）を納めていただくことになりました。",
        "来年１月から３月までの分の１，０００円は、１月の交流会で集めます。"
      ],
      "options": [
        {
          "number": 1,
          "text": "今年１２月に４，０００円払い、来年１月に１，０００円払う。",
          "translation": "今年12月支付4,000日元，明年1月支付1,000日元。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "邮件中说明以往是每年12月交，但今年因为规则变更，“明年1月到3月的份在1月交（来年１月から３月までの分…は、１月…で集めます）”，并没有要求今年12月交4,000日元。"
        },
        {
          "number": 2,
          "text": "来年１月に１，０００円と４，０００円を払う。",
          "translation": "明年1月支付1,000日元和4,000日元。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "明年1月只需要交1到3月份的1,000日元，新年度的4,000日元是在“4月（４月に）”缴纳。"
        },
        {
          "number": 3,
          "text": "来年１月に１，０００円払い、４月に４，０００円払う。",
          "translation": "明年1月支付1,000日元，4月支付4,000日元。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了邮件中“明年1月交1,000日元（过渡期）”和“4月交4,000日元（新年度）”的安排。"
        },
        {
          "number": 4,
          "text": "来年４月に１，０００円と４，０００円を払う。",
          "translation": "明年4月支付1,000日元和4,000日元。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "1,000日元是在“1月（１月）”收取的，不是在4月一起交。"
        }
      ]
    },
    {
      "id": "n2-short-2019-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "人間だと繰り返しの作業の中でどうしても思い込みが起こる。コンピュータが得意なのは常に一定の判断である。"
      ],
      "options": [
        {
          "number": 1,
          "text": "ヒトの単純なミスを予測できること",
          "translation": "能预测人的单纯失误。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到计算机能“指出（指摘できる）”人的失误，而不是“预测（予測できる）”。"
        },
        {
          "number": 2,
          "text": "ヒトの二倍の量の仕事ができること",
          "translation": "能做人两倍量的工作。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“两倍（二倍）”出现在说明“有两个相同的东西”时，并不是指计算机和人不同在于能做两倍的工作。"
        },
        {
          "number": 3,
          "text": "常に質の高い仕事ができること",
          "translation": "能始终做高质量的工作。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是计算机能始终保持“一定的判断（一定の判断）”，即相同的作业，而不是指“高质量（質の高い）”。"
        },
        {
          "number": 4,
          "text": "常に同じ作業ができること",
          "translation": "能始终做相同（一定）的作业。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中计算机擅长“始终保持一定的判断（常に一定の判断である）”这一有别于人类的特征。"
        }
      ]
    },
    {
      "id": "n2-short-2019-12-04",
      "questionNumber": 4,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "対象の製品をお持ちのお客様は現在不具合が起きていなくても無料で修理させていただきますので、お手数ですがお近くの販売店までお持ちくださいますようお願い申し上げます。"
      ],
      "options": [
        {
          "number": 1,
          "text": "「ＢＳ－ＺＧ１」の電源ボタンに不具合が起きていないかどうか、確認してほしい。",
          "translation": "希望确认“BS-ZG1”的电源按钮是否发生了故障。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "通知中是要求特定编号的客户直接把相机带来修理，而不是让他们自己去“确认是否发生故障（不具合が起きていないかどうか、確認してほしい）”。"
        },
        {
          "number": 2,
          "text": "すべての「ＢＳ－ＺＧ１」を無料で修理するので、販売店に持ってきてほしい。",
          "translation": "将免费修理所有的“BS-ZG1”，希望带到销售店来。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "通知中明确指出故障仅发生在特定制造编号的产品上（対象の製品），并非“所有的（すべての）”产品。"
        },
        {
          "number": 3,
          "text": "対象の製造番号の「ＢＳ－ＺＧ１」を無料で修理するので、販売店に持ってきてほしい。",
          "translation": "将免费修理对象制造编号的“BS-ZG1”，希望带到销售店来。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了通知中针对特定编号产品提供免费修理，并请求带到销售店的内容。"
        },
        {
          "number": 4,
          "text": "不具合が起きた「ＢＳ－ＺＧ１」の製造番号をホームページに載せたので、確認してほしい。",
          "translation": "发生故障的“BS-ZG1”的制造编号已经刊登在网站上，希望进行确认。",
          "correct": false,
          "error": "relation-error",
          "explanation": "网站上刊登的是“制造编号的确认方法（製造番号の確認方法）”，而不是发生故障的编号列表；且通知的最主要目的是为了让客户把相机拿来修理。"
        }
      ]
    },
    {
      "id": "n2-short-2019-12-05",
      "questionNumber": 5,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "ですが、その反面、他人にはすぐわかるのに、本人にはいっこうにわからないような一面が人間にはあります。作者と詩の場合もこれと同じです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "詩は、読者自身が意味を考えることに意義があるから",
          "translation": "因为诗歌的意义在于读者自己去思考。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并没有提到读者自己思考的意义，偏离了作者不赞同的核心理由。"
        },
        {
          "number": 2,
          "text": "詩の解釈は、正しいかどうかを考えても意味がないから",
          "translation": "因为思考诗歌的解释是否正确是没有意义的。",
          "correct": false,
          "error": "relation-error",
          "explanation": "探讨解释是否正确并不是作者不赞同的理由，理由在于作者自身的认知局限。"
        },
        {
          "number": 3,
          "text": "作者が自身の詩を他人よりわかっているとは限らないから",
          "translation": "因为作者未必比别人更了解自己的诗。",
          "correct": true,
          "error": null,
          "explanation": "符合文章中关于“别人一眼就能看出来，但本人却完全不明白”的逻辑。"
        },
        {
          "number": 4,
          "text": "作者の意図や創作過程を知ることは、あまり重要ではないから",
          "translation": "因为了解作者的意图和创作过程不太重要。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章指出创作意图会妨碍客观评价，并没有说了解它“不太重要（あまり重要ではない）”。"
        }
      ]
    }
  ],
  "2019.7": [
    {
      "id": "n2-short-2019-7-01",
      "questionNumber": 1,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "単なる錯覚ではないのか、グラフをみたことで先入観をもってしまったあとでは、検証がむずかしいでしょう。 だからこそ、まずは、特徴を見つけにくい表をながめてデータ分析をすることが、データ読解力を高めるうえでは大切です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "特徴がみつけやすいので、先に表をみるようにしたほうがいい。",
          "translation": "因为容易发现特征，所以先看表格比较好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是“图表（グラフ）”更容易发现特征，而不是“表格（表）”。"
        },
        {
          "number": 2,
          "text": "思い込みが避けられるので、先に表をみるようにしたほうがいい。",
          "translation": "因为可以避免先入为主，所以先看表格比较好。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“为了避免看了图表产生先入为主的观念（先入観をもってしまったあとでは、検証がむずかしい），所以应该先看表格（まずは、……表をながめてデータ分析をすることが……大切）”的逻辑。"
        },
        {
          "number": 3,
          "text": "思い込みに気づきやすいので、先にグラフをみるようにしたほうがいい。",
          "translation": "因为容易察觉到先入为主，所以先看图表比较好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章指出看了图表会“产生先入为主的观念（先入観をもってしまった）”且“难以验证（検証がむずかしい）”，因此不推荐先看图表。"
        },
        {
          "number": 4,
          "text": "意味のある特徴がみつけられるので、先にグラフをみるようにしたほうがいい。",
          "translation": "因为能发现有意义的特征，所以先看图表比较好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章对图表发现的特征是否“有意义（意味がある特徴か）”提出了质疑，并且因为容易产生错觉，所以作者主张先看表格，而不是先看图表。"
        }
      ]
    },
    {
      "id": "n2-short-2019-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "文化施設共通利用券（中略）市内の五つの博物館や美術館などの文化施設にそれぞれ１回ご入場できるチケットです。",
        "『特別展セット"
      ],
      "options": [
        {
          "number": 1,
          "text": "各施設に１回ずつ入場でき、さらに割引価格で特別展に１回ずつ入場できる。",
          "translation": "可以进入各设施各1次，并且能以折扣价进入每个特别展各1次。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "关于特别展的权益，通知中明确限定为“任意一个（一つに限り）”，而不是每个特别展都能进一次（特別展に１回ずつ）。"
        },
        {
          "number": 2,
          "text": "各施設に１回ずつ入場でき、さらに割引価格で特別展のうち一つに１回入場できる。",
          "translation": "可以进入各设施各1次，并且能以折扣价进入其中一个特别展1次。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了基础通票“各设施进1次”和附加折扣券“任意一个特别展进1次”的权益。"
        },
        {
          "number": 3,
          "text": "各施設に何回でも入場でき、さらに割引価格で特別展に１回ずつ入場できる。",
          "translation": "可以不限次数进入各设施，并且能以折扣价进入每个特别展各1次。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "基础通票只能“各进1次（それぞれ１回）”，而不是“不限次数（何回でも）”。且特别展也只能进其中一个。"
        },
        {
          "number": 4,
          "text": "各施設に何回でも入場でき、さらに割引価格で特別展のうち一つに１回入場できる。",
          "translation": "可以不限次数进入各设施，并且能以折扣价进入其中一个特别展1次。",
          "correct": false,
          "error": "opposite",
          "explanation": "基础通票并非“不限次数（何回でも）”，而是“各设施进1次”。"
        }
      ]
    },
    {
      "id": "n2-short-2019-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "むしろ、自分の身についた、ふだんはなにげなく使っているにすぎないような言葉を、いちいち、しっかりととらえなおし、その意味を自分にとってたしかな手応えのあるものにしてゆくということである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "多くの言葉を正確に使えるようにすること",
          "translation": "变得能够准确地使用许多词语。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是深入理解和把握自己平时用的词，而不是要求能够使用“许多词语（多くの言葉）”。"
        },
        {
          "number": 2,
          "text": "特別な言葉を日常的に使えるようにすること",
          "translation": "变得能够在日常生活中使用特别的词语。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确表示“未必意味着必须能够巧妙地运用某种特别的词语（特別な…言葉をうまく操れなければいけないということではない）”。"
        },
        {
          "number": 3,
          "text": "新しい言葉の意味をしっかりととらえること",
          "translation": "准确地把握新词语的意义。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是去重新把握“平时无意识中使用的词语（ふだんはなにげなく使っている…言葉）”，而不是“新词语（新しい言葉）”。"
        },
        {
          "number": 4,
          "text": "日常使っている言葉の意味をたしかめながら使うこと",
          "translation": "一边确认日常使用的词语的意义一边使用。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“重新把握平时使用的词语，使其意义成为有确信的东西（ふだんはなにげなく使っている…言葉を…とらえなおし、その意味を…たしかな手応えのあるものにしてゆく）”的意思。"
        }
      ]
    },
    {
      "id": "n2-short-2019-7-04",
      "questionNumber": 4,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "製造が追いついておりません。現在、海外の工場でも対応しておりますが、ご指定の期日（６月２８日）での納品は難しい状況です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "「８ＱＰＳＩ」の納品日が今月中旬になること",
          "translation": "“8QPSI”的交货日期将定在当月中旬。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "邮件提到“可交货的时间将在本月中旬另行通知（納品可能時期は今月中旬に改めてお知らせいたします）”，即中旬才会告知具体时间，而不是说中旬就能交货。"
        },
        {
          "number": 2,
          "text": "「８ＱＰＳＩ」の納品が可能かどうかを今月中旬に知らせること",
          "translation": "是否能够交付“8QPSI”，将在当月中旬告知。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "发件人并不是要中旬才告知“能不能交货（可能かどうか）”，订单是确立的，中旬是要告知“具体能交货的时间（納品可能時期）”。"
        },
        {
          "number": 3,
          "text": "「８ＱＰＳＩ」を指定の納品日に納品できないこと",
          "translation": "无法在指定的交货日期交付“8QPSI”。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了邮件的核心抱歉事由：“在您指定的日期（6月28日）交货是很困难的状况”。"
        },
        {
          "number": 4,
          "text": "「８ＱＰＳＩ」が予想以上に売れていて、注文を受けられないこと",
          "translation": "“8QPSI”的销量超出预期，无法接受订单。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "邮件是在感谢对方的订购后说明延期交货的事宜，并没有说“无法接受订单（注文を受けられない）”。"
        }
      ]
    },
    {
      "id": "n2-short-2019-7-05",
      "questionNumber": 5,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "うまくなるために自分自身と向き合っているとすれば、そこに周りは一切関係ありません。人のせい、物のせいにするのはラク、私から言わせれば、人のせい、物のせいにするのは、逃げていることと同じです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "うまくなるためには、周りのせいにしてはいけない。",
          "translation": "为了变强，不能怪罪于周围的环境或人。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中“和周围完全没有关系”、“怪罪别人等于逃避”的观点。"
        },
        {
          "number": 2,
          "text": "うまくなりたいなら、周りに合わせてはいけない。",
          "translation": "如果想变强，就不能迎合周围。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到不应该“怪罪周围”，而不是不应该“迎合周围（周りに合わせてはいけない）”。"
        },
        {
          "number": 3,
          "text": "周りから悪い評価を受けたら、認めなければならない。",
          "translation": "如果受到周围的差评，就必须承认。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章讨论的是不要找客观借口，而不是关于“必须承认周围的差评（悪い評価を受けたら、認めなければならない）”的内容。"
        },
        {
          "number": 4,
          "text": "頑張っていても、周りから認められないことがある。",
          "translation": "即使努力了，也有得不到周围认可的时候。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然这可能是事实，但作者在本文中的核心主张是要求选手正视自己，不要推卸责任，而不是感慨努力也可能得不到认可。"
        }
      ]
    }
  ],
  "2020.12": [
    {
      "id": "n2-short-2020-12-01",
      "questionNumber": 1,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "しかし現代の人間社会では、このような行動はほとんど必要なくなってしまいました。その結果、『犬がしたいこと",
        "飼い主がさせたいこと"
      ],
      "options": [
        {
          "number": 1,
          "text": "犬の生まれつき持っている性質が、人間社会に合わせて変化したから。",
          "translation": "因为狗与生俱来的性质，为了适应人类社会而发生了变化。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是现代社会不再需要狗的本能行为，并没有说狗与生俱来的性质已经“发生了变化（変化した）”。"
        },
        {
          "number": 2,
          "text": "犬がしたい行動は、現代の人間社会では必要ないことが多いから。",
          "translation": "因为狗想做的行动，在现代人类社会中大多是不需要的。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“このような行動（＝犬がしたい行動）はほとんど必要なくなってしまいました。その結果…ギャップが生じる”的逻辑关系。"
        },
        {
          "number": 3,
          "text": "犬が喜びを感じる行動が、飼い主にはわからなくなったから。",
          "translation": "因为饲主变得不明白狗感到喜悦的行动是什么了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并没有提到饲主“变得不明白（わからなくなった）”狗感到喜悦的行动。"
        },
        {
          "number": 4,
          "text": "飼い主がさせたい行動は、犬にはできないことが多いから。",
          "translation": "因为饲主想让狗做的行动，狗大多做不到。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是狗“想做”的行为在人类社会不需要，而不是狗“做不到（できない）”饲主想让它做的行为。"
        }
      ]
    },
    {
      "id": "n2-short-2020-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "実は人間が他の個体と関係を調整するための大変重要なエレメントだったのではないか、とぼくは考えています。",
        "壁によって隔てられれば、心理的な距離ができますから…会おうと思えば会えますし、会いたくなければ壁のうちにこもっていればいい。"
      ],
      "options": [
        {
          "number": 1,
          "text": "生きていくために必要な場所を確保する。",
          "translation": "确保生存所需的场所。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章说的是通过墙壁来调整人际关系，而不是说墙壁是为了“确保生存所需的场所（生きていくために必要な場所を確保する）”。"
        },
        {
          "number": 2,
          "text": "周りの人との心理的なつながりを切る。",
          "translation": "切断与周围人的心理联系。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到有了心理距离后“想见面的话就能见到（会おうと思えば会えますし）”，说明并非要“切断（切る）”与周围人的心理联系。"
        },
        {
          "number": 3,
          "text": "周りの人との適度な距離を保つ。",
          "translation": "保持与周围人的适度距离。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中墙壁作为调整关系的要素，产生心理距离，让人能自由选择见或不见的作用（即保持适度距离）。"
        },
        {
          "number": 4,
          "text": "人間の行動範囲を制限する。",
          "translation": "限制人类的行动范围。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章开头提到这是人们对墙壁常有的“负面印象（ネガティブなイメージ）”，但这并非作者认为的墙壁的真正作用。作者认为其真正作用是调整人际关系。"
        }
      ]
    },
    {
      "id": "n2-short-2020-12-03",
      "questionNumber": 3,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "添付の資料を各科でご確認のうえ、修正が必要な箇所があれば来週木曜（２２日）までに総務課にご連絡ください。",
        "必要分の挨拶状を配りますので、１０月３０日までにその数をお知らせください。"
      ],
      "options": [
        {
          "number": 1,
          "text": "総務課から送付して欲しい相手先のリストを作成し、２２日までに総務課に出す。",
          "translation": "制作希望由总务课发送的收件人名单，并在22日之前提交给总务课。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "名单已经由总务课做好了（リストを作成しました），各课只需要“确认（ご確認）”，不需要自己去“制作（作成し）”。"
        },
        {
          "number": 2,
          "text": "総務課から送付する相手先のリストを確認し、修正があれば２２日までに総務課に知らせる。",
          "translation": "确认由总务课发送的收件人名单，如果有修改，在22日之前通知总务课。",
          "correct": true,
          "error": null,
          "explanation": "完全符合原文“确认资料，如果有修改在22日之前联系总务课”的要求。"
        },
        {
          "number": 3,
          "text": "各課から直接送付する相手先のリストを作成し、３０日までに総務課に出す。",
          "translation": "制作由各课直接发送的收件人名单，并在30日之前提交给总务课。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "关于各课直接发送的部分，原文要求在30日之前“告知所需数量（その数をお知らせください）”，而不是“提交名单（リストを…出す）”。"
        },
        {
          "number": 4,
          "text": "各課から直接送付する相手先のリストを確認し、修正があれば３０日までに総務課に知らせる。",
          "translation": "确认由各课直接发送的收件人名单，如果有修改，在30日之前通知总务课。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文并未要求各课去“确认”直接发送的名单并“通知修改”。只要求告知贺卡的“数量”。"
        }
      ]
    },
    {
      "id": "n2-short-2020-12-04",
      "questionNumber": 4,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "だが、様々な考えを持った多様な研究者が多数研究に従事することで、誰かが大発見をする確率が高くなる。",
        "多くの研究者が、多様な考えに基づいて研究することはこのうえなく重要だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "研究者が増加し考え方も多様化すれば、科学はより進歩する。",
          "translation": "如果研究者增加且想法也多样化，科学就会进一步发展。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中关于研究者数量增加以及基于多样化想法进行研究能提高重大发现概率（促进科学进步）的论述。"
        },
        {
          "number": 2,
          "text": "科学が進歩すればするほど研究者人口が増え、研究は多様化する。",
          "translation": "科学越进步，研究者人数就越增加，研究也就越多维化。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章说的是研究者增加能使科学进步，而不是“科学越进步研究者就越增加（科学が進歩すればするほど研究者人口が増え）”，因果关系颠倒。"
        },
        {
          "number": 3,
          "text": "一人一人の研究者が研究の作業量を増やせば、科学はより進歩する。",
          "translation": "如果每个研究者都增加研究的工作量，科学就会进一步发展。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确表示，能否取得重要成果“并不与研究的工作量成正比（研究の作業量に比例するものではない）”，因此增加工作量不是重点。"
        },
        {
          "number": 4,
          "text": "多数の研究者が、ひとつの考え方に沿って研究することが大発見につながる。",
          "translation": "众多研究者沿着一种思路进行研究，这会带来重大发现。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章最后一句指出，众多研究者沿着一种思路进行研究“是没有未来的（未来はないだろう）”，此选项的说法与文章观点截然相反。"
        }
      ]
    },
    {
      "id": "n2-short-2020-12-05",
      "questionNumber": 5,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "人生でそういう経験をもっている人はやっぱり幸いだと、私は思います。何も恋愛に限らないけれど、そのような深い体験をもっていると、こんどは『源氏物語"
      ],
      "options": [
        {
          "number": 1,
          "text": "つらい出来事を読書で慰められた経験",
          "translation": "因痛苦的事情而通过读书得到安慰的经验。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了前文中通过读书得到安慰的经验（「読んで慰められた…そういう経験」），并顺理成章地引出“人类精神由此成熟”。"
        },
        {
          "number": 2,
          "text": "つらい恋愛をいつまでも忘れられない経験",
          "translation": "永远无法忘记痛苦恋爱的经验。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是通过阅读“得到安慰（慰められた）”的经验，而不是“永远无法忘记痛苦的恋爱（つらい恋愛をいつまでも忘れられない）”。"
        },
        {
          "number": 3,
          "text": "苦しんでいる人を慰めた経験",
          "translation": "安慰痛苦之人的经验。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章讲的是自己作为读者被安慰（「慰められた」），而不是主动去“安慰别人（慰めた）”。"
        },
        {
          "number": 4,
          "text": "古典作品をたくさん読んだ経験",
          "translation": "读过很多古典作品的经验。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说有了痛苦中被安慰的经验后，再去读古典作品就能深刻品味，而不是说单单靠“读很多古典作品（古典作品をたくさん読んだ）”就能让精神成熟。"
        }
      ]
    }
  ]
};
})();
