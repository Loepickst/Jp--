(function () {
    'use strict';
    const root = window.ReadingAnalysisData = window.ReadingAnalysisData || {};
    root.N2 = root.N2 || {};
    root.N2.long = {
  "2010.12": [
    {
      "id": "n2-long-2010-12-01",
      "questionNumber": 1,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "実は、○○と関係があるのですよ。それに思いついて出来たのです。",
        "俺にもできたはずなのに…"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分が記憶した方法がその問題の解決に合うものではなかったから",
          "translation": "因为自己记忆的方法并不适合解决该问题。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并没有提及自己之前“记忆的方法（記憶した方法）”不适合，核心问题是未能将知识关联起来。"
        },
        {
          "number": 2,
          "text": "自分の今までの経験や知識をその問題と関連付けられなかったから",
          "translation": "因为未能将自己至今为止的经验或知识与该问题关联起来。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了文中别人能解开是因为想到了“关联（関係）”，而作者没能将自己丰富的经验和知识关联起来的原因。"
        },
        {
          "number": 3,
          "text": "自分の方が経験や知識があると思っていたが実際はそうではなかったから",
          "translation": "因为以为自己更有经验或知识，但实际上并非如此。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者明确写到“明明自己经验更丰富知识更多”，这是一个事实前提，并非他误以为自己知识多而实际上不是。"
        },
        {
          "number": 4,
          "text": "自分では記憶したつもりでいたことが情報として蓄積されていなかったから",
          "translation": "因为自以为记住的事情并没有作为信息被积蓄下来。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中没有说自以为记住的事情没有作为信息被积蓄下来，而是说没能“提取（引き出す）”和关联。"
        }
      ]
    },
    {
      "id": "n2-long-2010-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "コンピュータがいくら豊富な知識を内蔵（注１）していても、人間自身がそうして検索した知識を、覚え、関連付け、再び引き出すという訓練をしていなければ、宝の持ち腐れ（注２）である。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人間ひとりひとりが持つ情報量はコンピュータの持つ情報量を到底超えることができない。",
          "translation": "人类每个人拥有的信息量终究无法超越计算机拥有的信息量。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章举计算机的例子是为了说明光有庞大信息是不够的，并非为了强调人类信息量无法超越计算机。"
        },
        {
          "number": 2,
          "text": "人間ひとりひとりが持つ記憶力は情報量の豊富なコンピュータを利用することでさらに生かせる。",
          "translation": "人类每个人拥有的记忆力，通过利用信息量丰富的计算机能够得到进一步发挥。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章认为单单利用计算机检索出的知识如果不经过人脑记忆和关联就没用，并非鼓励人类单向去利用计算机发挥记忆力。"
        },
        {
          "number": 3,
          "text": "人間が問題を解決する過程は、コンピュータが膨大なデータから必要な情報を引き出す過程と同じだ。",
          "translation": "人类解决问题的过程，与计算机从庞大体量数据中提取必要信息的过程是相同的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中明确指出了人类解决问题的过程与计算机单单持有信息不同，人类需要记忆并建立关联。"
        },
        {
          "number": 4,
          "text": "人間が問題を解決するにはコンピュータのように知識や情報を持っているだけでは不十分である。",
          "translation": "人类要解决问题，仅仅像计算机那样持有知识或信息是不充分的。",
          "correct": true,
          "error": null,
          "explanation": "客观贴合了文中“如果不进行记忆、关联和提取的训练就是暴殄天物”，即单单持有信息（像计算机一样）是不充分的。"
        }
      ]
    },
    {
      "id": "n2-long-2010-12-03",
      "questionNumber": 3,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "が、まず、覚える時に、理解して覚えることである。（中略）次に、どんなことを読んだり聞いたりしても、自分の知っていること、経験したこととの関連を思い浮かべることだ。",
        "が、まず、覚える時に、理解して覚えることである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "新しい知識を理解して覚え、自分が知っていることと関連させる。",
          "translation": "在理解的基础上记住新知识，并将其与自己已知的事物关联起来。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中强调的两点：理解着去记（第八段）以及与自己已知的事情相关联（第九段）。"
        },
        {
          "number": 2,
          "text": "自分がこれまでに経験したことや膨大な情報をしっかり理解する。",
          "translation": "好好理解自己至今为止经历过的事情以及庞大的信息。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中说的是将新知识与已知经验关联，而不是去“好好理解这庞大的信息”。"
        },
        {
          "number": 3,
          "text": "新しい問題を繰り返し解いて、自分の理解を確認しながら定着させる。",
          "translation": "反复解答新问题，一边确认自己的理解一边将其巩固。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中提到解题时顺畅是因为以前理解了类似问题，并非建议通过“反复解答新问题（繰り返し解いて）”来巩固。"
        },
        {
          "number": 4,
          "text": "自分が考え付いたアイデアを情報として蓄え、必要な時に引き出す。",
          "translation": "把自己的主意作为信息储备起来，在必要时提取出来。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章探讨的是如何将外来知识记忆并提取从而产生主意，而非将自己想出来的主意当成信息储备起来。"
        }
      ]
    }
  ],
  "2010.7": [
    {
      "id": "n2-long-2010-7-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "そして、努力を客観視するための測定方法が『時間",
        "そして、努力を客観視するための測定方法が「時間」なのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "努力する姿は、隠すことに価値がある",
          "translation": "努力的样子，将其隐藏起来是有价值的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章主张将努力积极融入生活并客观化，而不是藏起来。"
        },
        {
          "number": 2,
          "text": "努力すれば、他人からの評価は変わる",
          "translation": "只要努力，来自他人的评价就会改变。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章指出过于在意他人评价才导致人们隐藏努力，并非主张努力是为了改变他人评价。"
        },
        {
          "number": 3,
          "text": "努力は、かけた時間によって測定できる",
          "translation": "努力，可以通过花费的时间来测量。",
          "correct": true,
          "error": null,
          "explanation": "客观契合了文章后半段关于“努力的测量方法是时间”的论述。"
        },
        {
          "number": 4,
          "text": "努力すれば、時間管理も上手になる",
          "translation": "只要努力，时间管理也会变得拿手。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章是说用时间来测量努力，而不是说努力了就会擅长时间管理。"
        }
      ]
    },
    {
      "id": "n2-long-2010-7-02",
      "questionNumber": 2,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "その心境は複雑です。まず結果が出なかったとき『あいつ、あれだけやってダメだった",
        "あれだけ準備すれば当然だ"
      ],
      "options": [
        {
          "number": 1,
          "text": "努力していると感じるのは自分の主観であり、他の人には理解できないから",
          "translation": "因为觉得自己正在努力是自己的主观感受，其他人是无法理解的。",
          "correct": false,
          "error": "opposite",
          "explanation": "虽然后文提到努力与否是主观的，但这并非人们故意否定自己努力的原因。"
        },
        {
          "number": 2,
          "text": "自分の努力の結果に対し、他人にいろいろ言われたり思われたりしたくないから",
          "translation": "因为不想对于自己努力的结果，被他人说三道四或产生各种想法。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了第三段中“害怕被嘲笑、害怕评价降低（在意他人评价）”的心理动机。"
        },
        {
          "number": 3,
          "text": "他の人に比べると自分の努力は不十分で、もっと努力が必要だと思っているから",
          "translation": "因为和别人相比自己的努力还不充分，认为需要更多的努力。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未提到是因为觉得自己努力不足。"
        },
        {
          "number": 4,
          "text": "自分の努力している姿を見せると、他人から謙虚な人だと思ってもらえないから",
          "translation": "因为一旦展现出自己努力的样子，别人就不会认为自己是个谦虚的人。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中说隐藏努力看起来像是“谦虚应对”，但这是一种危险的做法，并非为了让人觉得谦虚才去隐藏。"
        }
      ]
    },
    {
      "id": "n2-long-2010-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "そのためには『努力",
        "そのためには「努力」という言葉を生活に積極的に取り入れ、そのプロセスを楽しむ仕組みをつくらなければなりません。"
      ],
      "options": [
        {
          "number": 1,
          "text": "努力は主観的なものなので、どこまで努力するか自分で決めればよい。",
          "translation": "努力是主观的东西，所以努力到什么程度自己决定就好。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "作者认为主观的努力需要通过“时间”这一客观方法来测量和管理。"
        },
        {
          "number": 2,
          "text": "社会人になったら、努力している姿は他人にあまり見せないほうがよい。",
          "translation": "成为社会人之后，努力的样子最好不要过多地展现给他人看。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是文章中指出的危险做法（谦虚地隐藏努力的应对），并非作者的主张。"
        },
        {
          "number": 3,
          "text": "よい結果を出すためには他人に自分の努力している姿を見せることが大切だ。",
          "translation": "为了取得好结果，把自身努力的样子展现给他人看是很重要的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章主张的是客观把握自身的努力并享受过程，而不是强调“让别人看到努力的样子”。"
        },
        {
          "number": 4,
          "text": "何をどれだけ努力したかを確認しながら、努力自体を楽しむことが大切だ。",
          "translation": "一边确认在什么事上努力了多少，一边享受努力本身是很重要的。",
          "correct": true,
          "error": null,
          "explanation": "客观契合了文中“通过时间管理努力的份量”以及“建立享受过程的机制”的论述。"
        }
      ]
    }
  ],
  "2011.12": [
    {
      "id": "n2-long-2011-12-01",
      "questionNumber": 1,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "科学者や技術者であるなら、発見につながるあらゆる可能性にアンテナを伸ばすべきで、そのためには、好き嫌いがあってはいけないように思う。研究の幅や、発見につながる可能性を大きく狭めて（注１）しまう。",
        "好き嫌いがあってはいけないように思う。研究の幅や、発見につながる可能性を大きく狭めて（注１）しまう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "どんな研究であっても、役に立つ新しい発見につなげられるから",
          "translation": "因为无论什么样的研究，都能将其与有用的新发现联系起来。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“无论什么研究都能联系上新发现”表达过于绝对，原文只说“一定会学到东西”。"
        },
        {
          "number": 2,
          "text": "どんなことでも、自分の研究に役立つものがあるかもしれないから",
          "translation": "因为无论什么事物，都可能有对自己的研究有帮助的东西。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“应该向所有可能性伸出触角（あらゆる可能性にアンテナを伸ばすべき）”的逻辑，即任何事物都有可能派上用场。"
        },
        {
          "number": 3,
          "text": "好き嫌いで判断することによって、悪い面に気づきにくくなるから",
          "translation": "因为通过喜恶来判断，会变得难以注意到坏的一面。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中第一段提到“人既有坏的一面也有好的一面”，但这并不是讨论不要有喜恶的核心原因（核心在于不要缩小研究可能性）。"
        },
        {
          "number": 4,
          "text": "嫌いなことには、自分が気づかない重要なことが隠されているから",
          "translation": "因为在讨厌的事物中，隐藏着自己没有察觉到的重要东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中并没有说重要的东西“隐藏”在讨厌的事物中，只是强调不要因为讨厌而错过任何可能性。"
        }
      ]
    },
    {
      "id": "n2-long-2011-12-02",
      "questionNumber": 2,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "自分の研究分野は、理系であることには違いない。しかし自分でも、理由があって理系の道を選んだとは思えない。単なる偶然の積み重なりの結果なのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "文系が得意ではなかったから",
          "translation": "因为不擅长文科。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中只举例说如果失败了会后悔“为什么没选文科（なぜ文系の道を選ばなかったのか）”，但这并不是当初选择理科的原因。"
        },
        {
          "number": 2,
          "text": "自分の気持ちに従ったから",
          "translation": "因为听从了自己的心意。",
          "correct": false,
          "error": "relation-error",
          "explanation": "作者明确否认了是因为有意识的理由（比如遵从心情）而选择的。"
        },
        {
          "number": 3,
          "text": "特に嫌いではなかったから",
          "translation": "因为并没有特别讨厌。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未探讨作者对理科有没有“特别讨厌（特に嫌いではなかった）”的情感。"
        },
        {
          "number": 4,
          "text": "たまたまそうなったから",
          "translation": "因为碰巧就变成了那样。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“单纯是偶然积累的结果（単なる偶然の積み重なりの結果）”这一事实。"
        }
      ]
    },
    {
      "id": "n2-long-2011-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "好き嫌いや感情というものは、偶然の積み重なりで進んでいく人生を自分なりに納得するためにあるようなものと言えるのではないか。（中略）人間は、十分な理由がないまま行った自らの行動を、納得し、正当化する（注５）ためにも、感情や好き嫌いを用いる。",
        "好き嫌いや感情というものは、偶然の積み重なりで進んでいく人生を自分なりに納得するためにあるようなものと言えるのではないか。好き嫌いや感情は、無意識のうちに、自分を守るために、自分を納得させるために、都合よく持つものなのだろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分がこれからとる行動を決める時のきっかけになるもの",
          "translation": "能够成为自己决定今后采取行动时契机的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中指出喜恶是“事后（あとから）”为了正当化行动才使用的，而不是用来“决定今后行动的契机（これからとる行動を決める時のきっかけ）”。"
        },
        {
          "number": 2,
          "text": "自分が前向きに生きていくために意識的に利用しているもの",
          "translation": "为了自己能积极向前生活而有意识地利用的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "第六段提到喜恶是在“无意识中（無意識のうちに）”带有的东西，而非“有意识地利用（意識的に利用している）”。"
        },
        {
          "number": 3,
          "text": "自分の研究や仕事がうまくいくように普段は抑えているもの",
          "translation": "为了让自己的研究和工作顺利，平时一直压抑着的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "第一、二段虽然提到研究时最好不要有喜恶，但这只是工作态度，并不是作者对人类“喜恶本质”的最终定性。"
        },
        {
          "number": 4,
          "text": "自分の行動や選択が間違っていなかったと思うために用いるもの",
          "translation": "为了认为自己的行动和选择没有错而使用的东西。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第七段中“为了让自己的行动正当化（觉得没做错）而使用”的主张。"
        }
      ]
    }
  ],
  "2011.7": [
    {
      "id": "n2-long-2011-7-01",
      "questionNumber": 1,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "科学者や技術者であるなら、発見につながるあらゆる可能性にアンテナを伸ばすべきで、そのためには、好き嫌いがあってはいけないように思う。研究の幅や、発見につながる可能性を大きく狭めて（注１）しまう。",
        "好き嫌いがあってはいけないように思う。研究の幅や、発見につながる可能性を大きく狭めて（注１）しまう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "どんな研究であっても、役に立つ新しい発見につなげられるから",
          "translation": "因为无论什么样的研究，都能将其与有用的新发现联系起来。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“无论什么研究都能联系上新发现”表达过于绝对，原文只说“一定会学到东西”。"
        },
        {
          "number": 2,
          "text": "どんなことでも、自分の研究に役立つものがあるかもしれないから",
          "translation": "因为无论什么事物，都可能有对自己的研究有帮助的东西。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“应该向所有可能性伸出触角（あらゆる可能性にアンテナを伸ばすべき）”的逻辑，即任何事物都有可能派上用场。"
        },
        {
          "number": 3,
          "text": "好き嫌いで判断することによって、悪い面に気づきにくくなるから",
          "translation": "因为通过喜恶来判断，会变得难以注意到坏的一面。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中第一段提到“人既有坏的一面也有好的一面”，但这并不是讨论不要有喜恶的核心原因（核心在于不要缩小研究可能性）。"
        },
        {
          "number": 4,
          "text": "嫌いなことには、自分が気づかない重要なことが隠されているから",
          "translation": "因为在讨厌的事物中，隐藏着自己没有察觉到的重要东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中并没有说重要的东西“隐藏”在讨厌的事物中，只是强调不要因为讨厌而错过任何可能性。"
        }
      ]
    },
    {
      "id": "n2-long-2011-7-02",
      "questionNumber": 2,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "自分の研究分野は、理系であることには違いない。しかし自分でも、理由があって理系の道を選んだとは思えない。単なる偶然の積み重なりの結果なのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "文系が得意ではなかったから",
          "translation": "因为不擅长文科。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中只举例说如果失败了会后悔“为什么没选文科（なぜ文系の道を選ばなかったのか）”，但这并不是当初选择理科的原因。"
        },
        {
          "number": 2,
          "text": "自分の気持ちに従ったから",
          "translation": "因为听从了自己的心意。",
          "correct": false,
          "error": "relation-error",
          "explanation": "作者明确否认了是因为有意识的理由（比如遵从心情）而选择的。"
        },
        {
          "number": 3,
          "text": "特に嫌いではなかったから",
          "translation": "因为并没有特别讨厌。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未探讨作者对理科有没有“特别讨厌（特に嫌いではなかった）”的情感。"
        },
        {
          "number": 4,
          "text": "たまたまそうなったから",
          "translation": "因为碰巧就变成了那样。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“单纯是偶然积累的结果（単なる偶然の積み重なりの結果）”这一事实。"
        }
      ]
    },
    {
      "id": "n2-long-2011-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "好き嫌いや感情というものは、偶然の積み重なりで進んでいく人生を自分なりに納得するためにあるようなものと言えるのではないか。（中略）人間は、十分な理由がないまま行った自らの行動を、納得し、正当化する（注５）ためにも、感情や好き嫌いを用いる。",
        "好き嫌いや感情というものは、偶然の積み重なりで進んでいく人生を自分なりに納得するためにあるようなものと言えるのではないか。好き嫌いや感情は、無意識のうちに、自分を守るために、自分を納得させるために、都合よく持つものなのだろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分がこれからとる行動を決める時のきっかけになるもの",
          "translation": "能够成为自己决定今后采取行动时契机的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中指出喜恶是“事后（あとから）”为了正当化行动才使用的，而不是用来“决定今后行动的契机（これからとる行動を決める時のきっかけ）”。"
        },
        {
          "number": 2,
          "text": "自分が前向きに生きていくために意識的に利用しているもの",
          "translation": "为了自己能积极向前生活而有意识地利用的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "第六段提到喜恶是在“无意识中（無意識のうちに）”带有的东西，而非“有意识地利用（意識的に利用している）”。"
        },
        {
          "number": 3,
          "text": "自分の研究や仕事がうまくいくように普段は抑えているもの",
          "translation": "为了让自己的研究和工作顺利，平时一直压抑着的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "第一、二段虽然提到研究时最好不要有喜恶，但这只是工作态度，并不是作者对人类“喜恶本质”的最终定性。"
        },
        {
          "number": 4,
          "text": "自分の行動や選択が間違っていなかったと思うために用いるもの",
          "translation": "为了认为自己的行动和选择没有错而使用的东西。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第七段中“为了让自己的行动正当化（觉得没做错）而使用”的主张。"
        }
      ]
    }
  ],
  "2012.12": [
    {
      "id": "n2-long-2012-12-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "ものづくりでも『悩み",
        "ものづくりでも「悩み」はとても重要で、悩みをどう解決するか、どう昇華(注1)させるかが、作った成果、物の存在感や主張に直結する。"
      ],
      "options": [
        {
          "number": 1,
          "text": "悩み",
          "translation": "烦恼",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中强调的“烦恼很重要”以及第二段中“舍弃了重要东西（即烦恼）”的前后逻辑。"
        },
        {
          "number": 2,
          "text": "思い込み",
          "translation": "错觉/深信",
          "correct": false,
          "error": "relation-error",
          "explanation": "“错觉/深信（思い込み）”是指把简单等同于元素少，这是导致舍弃行为的原因，并非被舍弃的“重要之物”。"
        },
        {
          "number": 3,
          "text": "シンプルさ",
          "translation": "简单",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章主张真正的简单是洗练的结果，而现代人盲目追求表面的“简单（シンプルさ）”，这并不是文中指代的被丢弃的重要之物。"
        },
        {
          "number": 4,
          "text": "強いあこがれ",
          "translation": "强烈的憧憬",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“强烈的憧憬”是对“简单”的向往，同样不是被丢弃的客体。"
        }
      ]
    },
    {
      "id": "n2-long-2012-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "日本文化にはいろいろな相反(注3)する要素が複雑に絡みあって、それらを生かしたまま歴史の中で洗練された結果、一見シンプルに見えているだけなのだ。",
        "日本人は「シンプル」に強いあこがれを持っているが、いつの頃からか「要素が少なくて単純なことがシンプルだ」という誤った思い込みを抱いてしまっている。だから重要なものを切り捨ててしまって平気なのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "単純に見えて実は複雑なもの",
          "translation": "看似单纯，实际上复杂的东西。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第四段中“各种对立元素复杂交织”且“乍一看显得简单”的论述。"
        },
        {
          "number": 2,
          "text": "単純であるが飽きが来ないもの",
          "translation": "虽然单纯却不会让人厌倦的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中指出真正的日本文化内在是“复杂”的，并非“单纯（単純）”。"
        },
        {
          "number": 3,
          "text": "要素が少なくシンプルなもの",
          "translation": "元素很少、简单的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是作者明确批判的现代日本人的误解，即认为“元素少就是简单”。"
        },
        {
          "number": 4,
          "text": "洗練されていないが深い味があるもの",
          "translation": "未经过洗练，却有着深厚味道的东西。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中明确提到日本文化是在历史中“经过洗练（洗練された）”的，与选项中“未经过洗练”的表述相反。"
        }
      ]
    },
    {
      "id": "n2-long-2012-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "ものづくりでも『悩み",
        "ものづくりでも「悩み」はとても重要で、悩みをどう解決するか、どう昇華(注1)させるかが、作った成果、物の存在感や主張に直結する。"
      ],
      "options": [
        {
          "number": 1,
          "text": "できるだけ作り方を複雑にしていくこと",
          "translation": "尽可能地使制作方法变得复杂。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者赞赏的是内在包含复杂性且经过洗练最终“看起来简单”的设计，而非一味去“使制作方法变得复杂（複雑にしていく）”。"
        },
        {
          "number": 2,
          "text": "あまり悩まずにシンプルさを求めていくこと",
          "translation": "不太过烦恼，去追求简单。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这正是作者在第二段和第三段中所批判的做法，即“不烦恼直接舍弃”的表面简单。"
        },
        {
          "number": 3,
          "text": "深く考えながら対立する要素をうまく合わせていくこと",
          "translation": "一边深入思考，一边将对立的元素巧妙地结合在一起。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了第一段“烦恼/思考很重要”以及第四、五段“让对立元素巧妙契合”的主张。"
        },
        {
          "number": 4,
          "text": "迷いながらも複雑に絡みあった要素をうまく切り捨てていくこと",
          "translation": "在迷茫中，也将复杂交织在一起的元素巧妙地舍弃掉。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者在第二、四段反复强调“舍弃（切り捨て）”是错误的做法，应当是“洗练”与“契合”。"
        }
      ]
    }
  ],
  "2012.7": [
    {
      "id": "n2-long-2012-7-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "ものづくりでも『悩み",
        "ものづくりでも「悩み」はとても重要で、悩みをどう解決するか、どう昇華(注1)させるかが、作った成果、物の存在感や主張に直結する。"
      ],
      "options": [
        {
          "number": 1,
          "text": "悩み",
          "translation": "烦恼",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中强调的“烦恼很重要”以及第二段中“舍弃了重要东西（即烦恼）”的前后逻辑。"
        },
        {
          "number": 2,
          "text": "思い込み",
          "translation": "错觉/深信",
          "correct": false,
          "error": "relation-error",
          "explanation": "“错觉/深信（思い込み）”是指把简单等同于元素少，这是导致舍弃行为的原因，并非被舍弃的“重要之物”。"
        },
        {
          "number": 3,
          "text": "シンプルさ",
          "translation": "简单",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章主张真正的简单是洗练的结果，而现代人盲目追求表面的“简单（シンプルさ）”，这并不是文中指代的被丢弃的重要之物。"
        },
        {
          "number": 4,
          "text": "強いあこがれ",
          "translation": "强烈的憧憬",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“强烈的憧憬”是对“简单”的向往，同样不是被丢弃的客体。"
        }
      ]
    },
    {
      "id": "n2-long-2012-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "日本文化にはいろいろな相反(注3)する要素が複雑に絡みあって、それらを生かしたまま歴史の中で洗練された結果、一見シンプルに見えているだけなのだ。",
        "日本人は「シンプル」に強いあこがれを持っているが、いつの頃からか「要素が少なくて単純なことがシンプルだ」という誤った思い込みを抱いてしまっている。だから重要なものを切り捨ててしまって平気なのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "単純に見えて実は複雑なもの",
          "translation": "看似单纯，实际上复杂的东西。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第四段中“各种对立元素复杂交织”且“乍一看显得简单”的论述。"
        },
        {
          "number": 2,
          "text": "単純であるが飽きが来ないもの",
          "translation": "虽然单纯却不会让人厌倦的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中指出真正的日本文化内在是“复杂”的，并非“单纯（単純）”。"
        },
        {
          "number": 3,
          "text": "要素が少なくシンプルなもの",
          "translation": "元素很少、简单的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是作者明确批判的现代日本人的误解，即认为“元素少就是简单”。"
        },
        {
          "number": 4,
          "text": "洗練されていないが深い味があるもの",
          "translation": "未经过洗练，却有着深厚味道的东西。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中明确提到日本文化是在历史中“经过洗练（洗練された）”的，与选项中“未经过洗练”的表述相反。"
        }
      ]
    },
    {
      "id": "n2-long-2012-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "ものづくりでも『悩み",
        "ものづくりでも「悩み」はとても重要で、悩みをどう解決するか、どう昇華(注1)させるかが、作った成果、物の存在感や主張に直結する。"
      ],
      "options": [
        {
          "number": 1,
          "text": "できるだけ作り方を複雑にしていくこと",
          "translation": "尽可能地使制作方法变得复杂。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者赞赏的是内在包含复杂性且经过洗练最终“看起来简单”的设计，而非一味去“使制作方法变得复杂（複雑にしていく）”。"
        },
        {
          "number": 2,
          "text": "あまり悩まずにシンプルさを求めていくこと",
          "translation": "不太过烦恼，去追求简单。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这正是作者在第二段和第三段中所批判的做法，即“不烦恼直接舍弃”的表面简单。"
        },
        {
          "number": 3,
          "text": "深く考えながら対立する要素をうまく合わせていくこと",
          "translation": "一边深入思考，一边将对立的元素巧妙地结合在一起。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了第一段“烦恼/思考很重要”以及第四、五段“让对立元素巧妙契合”的主张。"
        },
        {
          "number": 4,
          "text": "迷いながらも複雑に絡みあった要素をうまく切り捨てていくこと",
          "translation": "在迷茫中，也将复杂交织在一起的元素巧妙地舍弃掉。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者在第二、四段反复强调“舍弃（切り捨て）”是错误的做法，应当是“洗练”与“契合”。"
        }
      ]
    }
  ],
  "2013.12": [
    {
      "id": "n2-long-2013-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "親が決めたレールや、こうあるべきだという社会通念（注２）は、極端に少なくなり、どんな生き方も肯定される、そんな時代になったと思います。各人が自分の責任において、自分の生き方を選ぶことができるようになったのです。",
        "①この状況"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の生き方を自分で決められる。",
          "translation": "能够自己决定自己的生活方式。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第三段末尾“各人可以选择自己的生活方式（自分の生き方を選ぶことができる）”的内容。"
        },
        {
          "number": 2,
          "text": "自分らしい生き方が高く評価される。",
          "translation": "活出自我会得到很高的评价。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中提到了各种生活方式都会被肯定，但并未说活出自我会得到“很高的评价（高く評価される）”。"
        },
        {
          "number": 3,
          "text": "親に決められた生き方を信じられる。",
          "translation": "能够相信父母决定的生活方式。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中说父母决定的轨道变得“极少（極端に少なくなり）”，与选项中“去相信父母决定的生活方式”恰好相反。"
        },
        {
          "number": 4,
          "text": "限られた選択肢の中で生き方を選べる。",
          "translation": "能在有限的选项中选择生活方式。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中第一段明确指出人生的选项是飞跃性“增加（増え）”了，而不是“有限的（限られた）选项”。"
        }
      ]
    },
    {
      "id": "n2-long-2013-12-02",
      "questionNumber": 2,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "生き方なんてこれしかないと言われたほうが、実はラクなのかもしれません。その中で、精一杯生きれば良いからです。でも、生き方はいくらでもあると言われたら、迷うのは当然のことだと思います。",
        "②生き方なんてこれしかないと言われたほうが、実はラクなのかもしれません。その中で、精一杯生きれば良いからです。でも、生き方はいくらでもあると言われたら、迷うのは当然のことだと思います。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の生き方で迷わなくて済むから",
          "translation": "因为不用再为自己的生活方式迷茫了。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第七段后半部分“如果选项多就会迷茫”，反推只有一种的话就能免于“迷茫（迷わなくて済む）”的逻辑。"
        },
        {
          "number": 2,
          "text": "自分の生き方が正しいと常に感じられるから",
          "translation": "因为能一直觉得自己的生活方式是正确的。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未探讨只有一种生活方式时，自己是否会觉得它是“正确的（正しい）”。"
        },
        {
          "number": 3,
          "text": "人生の意味について考えなくて済むから",
          "translation": "因为不用去思考人生的意义了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中只说在其中拼命活就好，没说可以不用去“思考人生的意义（人生の意味について考えなくて済む）”。"
        },
        {
          "number": 4,
          "text": "人生に失敗してもあきらめがつくから",
          "translation": "因为即使人生失败了也能死心。",
          "correct": false,
          "error": "not-stated",
          "explanation": "选项中“人生失败了也能死心”这种对失败的退路心态，在文中并未提及。"
        }
      ]
    },
    {
      "id": "n2-long-2013-12-03",
      "questionNumber": 3,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "でも大事なことはやはり、何をするかではなく、どう生きるかなのではないでしょうか。（中略）大切なのは、何をしているのかではなく、どう生きているかなのですから。",
        "でも大事なことはやはり、何をするかではなく、どう生きるかなのではないでしょうか。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人生において、社会に通用する生き方を探すことが大切だ。",
          "translation": "在人生中，寻找能在社会中行得通的生活方式是很重要的。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未提倡要去寻找在社会上“行得通（通用する）”的生活方式。"
        },
        {
          "number": 2,
          "text": "他の人と比べずに、自分らしい人生を選んだほうがいい。",
          "translation": "最好不要和他人比较，选择属于自己的人生。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然第六段提到了不要和他人比较，但这不是作者全文“最想”表达的核心思想。"
        },
        {
          "number": 3,
          "text": "どんな人生を選ぶかより、選んだ人生をどう生きるかが大切だ。",
          "translation": "比起选择什么样的人生，如何去过好选择的人生更为重要。",
          "correct": true,
          "error": null,
          "explanation": "完全对应了第八段和第十段中反复强调的“比起做什么（选择什么人生），怎么生活更重要”。"
        },
        {
          "number": 4,
          "text": "人生の選択を間違えたと思ったら、柔軟に生き方を変えたほうがいい。",
          "translation": "如果觉得人生的选择选错了，最好灵活地改变生活方式。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者在最后一段说怎么生活马上就能改变，重点是生活态度，而不是主张选错了就去“改变生活方式（生き方を変えたほうがいい）”。"
        }
      ]
    }
  ],
  "2013.7": [
    {
      "id": "n2-long-2013-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "親が決めたレールや、こうあるべきだという社会通念（注２）は、極端に少なくなり、どんな生き方も肯定される、そんな時代になったと思います。各人が自分の責任において、自分の生き方を選ぶことができるようになったのです。",
        "①この状況"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の生き方を自分で決められる。",
          "translation": "能够自己决定自己的生活方式。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第三段末尾“各人可以选择自己的生活方式（自分の生き方を選ぶことができる）”的内容。"
        },
        {
          "number": 2,
          "text": "自分らしい生き方が高く評価される。",
          "translation": "活出自我会得到很高的评价。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中提到了各种生活方式都会被肯定，但并未说活出自我会得到“很高的评价（高く評価される）”。"
        },
        {
          "number": 3,
          "text": "親に決められた生き方を信じられる。",
          "translation": "能够相信父母决定的生活方式。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中说父母决定的轨道变得“极少（極端に少なくなり）”，与选项中“去相信父母决定的生活方式”恰好相反。"
        },
        {
          "number": 4,
          "text": "限られた選択肢の中で生き方を選べる。",
          "translation": "能在有限的选项中选择生活方式。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中第一段明确指出人生的选项是飞跃性“增加（増え）”了，而不是“有限的（限られた）选项”。"
        }
      ]
    },
    {
      "id": "n2-long-2013-7-02",
      "questionNumber": 2,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "生き方なんてこれしかないと言われたほうが、実はラクなのかもしれません。その中で、精一杯生きれば良いからです。でも、生き方はいくらでもあると言われたら、迷うのは当然のことだと思います。",
        "②生き方なんてこれしかないと言われたほうが、実はラクなのかもしれません。その中で、精一杯生きれば良いからです。でも、生き方はいくらでもあると言われたら、迷うのは当然のことだと思います。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の生き方で迷わなくて済むから",
          "translation": "因为不用再为自己的生活方式迷茫了。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第七段后半部分“如果选项多就会迷茫”，反推只有一种的话就能免于“迷茫（迷わなくて済む）”的逻辑。"
        },
        {
          "number": 2,
          "text": "自分の生き方が正しいと常に感じられるから",
          "translation": "因为能一直觉得自己的生活方式是正确的。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未探讨只有一种生活方式时，自己是否会觉得它是“正确的（正しい）”。"
        },
        {
          "number": 3,
          "text": "人生の意味について考えなくて済むから",
          "translation": "因为不用去思考人生的意义了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中只说在其中拼命活就好，没说可以不用去“思考人生的意义（人生の意味について考えなくて済む）”。"
        },
        {
          "number": 4,
          "text": "人生に失敗してもあきらめがつくから",
          "translation": "因为即使人生失败了也能死心。",
          "correct": false,
          "error": "not-stated",
          "explanation": "选项中“人生失败了也能死心”这种对失败的退路心态，在文中并未提及。"
        }
      ]
    },
    {
      "id": "n2-long-2013-7-03",
      "questionNumber": 3,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "でも大事なことはやはり、何をするかではなく、どう生きるかなのではないでしょうか。（中略）大切なのは、何をしているのかではなく、どう生きているかなのですから。",
        "でも大事なことはやはり、何をするかではなく、どう生きるかなのではないでしょうか。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人生において、社会に通用する生き方を探すことが大切だ。",
          "translation": "在人生中，寻找能在社会中行得通的生活方式是很重要的。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未提倡要去寻找在社会上“行得通（通用する）”的生活方式。"
        },
        {
          "number": 2,
          "text": "他の人と比べずに、自分らしい人生を選んだほうがいい。",
          "translation": "最好不要和他人比较，选择属于自己的人生。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然第六段提到了不要和他人比较，但这不是作者全文“最想”表达的核心思想。"
        },
        {
          "number": 3,
          "text": "どんな人生を選ぶかより、選んだ人生をどう生きるかが大切だ。",
          "translation": "比起选择什么样的人生，如何去过好选择的人生更为重要。",
          "correct": true,
          "error": null,
          "explanation": "完全对应了第八段和第十段中反复强调的“比起做什么（选择什么人生），怎么生活更重要”。"
        },
        {
          "number": 4,
          "text": "人生の選択を間違えたと思ったら、柔軟に生き方を変えたほうがいい。",
          "translation": "如果觉得人生的选择选错了，最好灵活地改变生活方式。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者在最后一段说怎么生活马上就能改变，重点是生活态度，而不是主张选错了就去“改变生活方式（生き方を変えたほうがいい）”。"
        }
      ]
    }
  ],
  "2014.12": [
    {
      "id": "n2-long-2014-12-01",
      "questionNumber": 71,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "どれだけ手間がかかるのかがわかる",
        "天候不順…作物ができないこともある"
      ],
      "options": [
        {
          "number": 1,
          "text": "生産者の農作物に対する愛情がわかるから",
          "translation": "因为能够理解生产者对农作物的爱。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章虽然能让人感到生产者不容易，但没有直接说“生産者の愛情がわかる”。重点是手間和自然影响。"
        },
        {
          "number": 2,
          "text": "自然の影響の大きさや手間がかかることがわかるから",
          "translation": "因为能够明白自然影响很大，且需要花费很多工夫。",
          "correct": true,
          "error": null,
          "explanation": "原文「手間がかかる」「天候不順」「自動的・安定的に生産できるものではなく」正好对应自然影响大、需要大量工夫。"
        },
        {
          "number": 3,
          "text": "農作物を作るには費用も時間もかかることがわかるから",
          "translation": "因为能够明白生产农作物既花钱又花时间。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中没有重点说费用问题。它谈的是手间、天气、自然条件和人的劳动。"
        },
        {
          "number": 4,
          "text": "工場で作られる製品と同様に手間の多いことがわかるから",
          "translation": "因为能够明白它和工厂产品一样需要很多工夫。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文是说农作物不像工厂产品那样能自动、稳定生产，不是说“和工厂产品同样手间多”。"
        }
      ]
    },
    {
      "id": "n2-long-2014-12-02",
      "questionNumber": 72,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "他店と安値競争をするつもりはまったくない",
        "基本的には生産者に価格を決めてもらい、そのうえで販売価格を決める"
      ],
      "options": [
        {
          "number": 1,
          "text": "他店の価格と比較せずにつけること",
          "translation": "不和其他店的价格比较来定价。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说「相場というものがあるので、それを参考にしている」，说明并不是完全不比较或不参考其他价格。"
        },
        {
          "number": 2,
          "text": "作り手の希望どおりに高くつけること",
          "translation": "按照生产者希望，把价格定得高。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章说尊重生产者定价，但没有说“希望どおりに高くつける”。作者也提到要向顾客说明价格理由。"
        },
        {
          "number": 3,
          "text": "作り手の希望を尊重してつけること",
          "translation": "尊重生产者的想法来定价。",
          "correct": true,
          "error": null,
          "explanation": "原文「生産者に価格を決めてもらい」说明价格决定首先尊重生产者，再决定販売価格。"
        },
        {
          "number": 4,
          "text": "農作物自体の品質に基づいてつけること",
          "translation": "根据农作物本身的品质来定价。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中确实会向顾客说明味道、农药等品质信息，但价格决定的核心句不是“基于品质”，而是让生产者决定价格。"
        }
      ]
    },
    {
      "id": "n2-long-2014-12-03",
      "questionNumber": 73,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "小売りは生産者との信頼関係を築き、その信頼を消費者に伝えていく。一方で…消費者の声や、商品の評価を生産者に伝えていく"
      ],
      "options": [
        {
          "number": 1,
          "text": "生産者と協力して、消費者に農業の大変さを伝えること",
          "translation": "和生产者合作，向消费者传达农业的辛苦。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "传达农业的辛苦只是可能的一部分，原文更强调双向传达信赖、消费者声音和商品评价，不只是“农业大変さ”。"
        },
        {
          "number": 2,
          "text": "生産者が作った農作物を、適切な価格で消費者に届けること",
          "translation": "把生产者种出的农作物以合适的价格送到消费者手中。",
          "correct": false,
          "error": "opposite",
          "explanation": "适当价格和销售当然重要，但题目问的是文章最后强调的小売り应有作用，核心不是“以合适价格送达”，而是生産者与消費者之间的信息和信赖的桥梁。"
        },
        {
          "number": 3,
          "text": "生産者と消費者の対話の機会を作り、信頼関係を築くこと",
          "translation": "创造生产者和消费者对话的机会，并建立信赖关系。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说要创造直接对话的机会，而是说小売り把双方的信息分别传达给对方。"
        },
        {
          "number": 4,
          "text": "生産者と消費者の声をそれぞれに伝え、相互理解を深めること",
          "translation": "分别传递生产者和消费者的声音，加深相互理解。",
          "correct": true,
          "error": null,
          "explanation": "该选项概括了原文的双向功能：把生产者的信赖传给消费者，也把消费者的声音和评价传给生产者，从而加深理解。"
        }
      ]
    }
  ],
  "2014.7": [
    {
      "id": "n2-long-2014-7-01",
      "questionNumber": 71,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "必要でないと感じられることはどんどん忘れていってしまう",
        "通常はそんなことはしない。それを思い返したところで、先へとつながるものだとは思えない"
      ],
      "options": [
        {
          "number": 1,
          "text": "思い返して次につなげる。",
          "translation": "回想过去，并将其连接到下一步。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文明确说「それを思い返したところで、先へとつながるものだとは思えない」。所以作者不是通过回想过去来连接下一步。"
        },
        {
          "number": 2,
          "text": "負けた対戦は思い返さない。",
          "translation": "不回想输掉的对局。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者不是只不回想输掉的对局，而是胜负双方都「どちらもあまり覚えていない」。"
        },
        {
          "number": 3,
          "text": "役に立つ対戦だけを思い返す。",
          "translation": "只回想有用的对局。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说“只回想有用的对局”。它说如果有需要说明某局棋，才会想起来；通常不会主动回想。"
        },
        {
          "number": 4,
          "text": "必要がなければ思い返さない。",
          "translation": "如果没有必要，就不回想。",
          "correct": true,
          "error": null,
          "explanation": "原文「必要でない」「通常はそんなことはしない」说明没有必要时，作者不会特意回想过去对局。"
        }
      ]
    },
    {
      "id": "n2-long-2014-7-02",
      "questionNumber": 72,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "ゴールまであと200キロある",
        "あと1キロだけ"
      ],
      "options": [
        {
          "number": 1,
          "text": "走ることが楽しく感じられるから。",
          "translation": "因为会觉得跑步很快乐。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说这样会让跑步本身变得快乐。重点是避免被遥远目标压垮，从而继续跑下去。"
        },
        {
          "number": 2,
          "text": "ゴールまで走り続けやすくなるから。",
          "translation": "因为会更容易一直跑到终点。",
          "correct": true,
          "error": null,
          "explanation": "原文「あと1キロだけ…と思えば続けられる」说明小目标能帮助人持续前进，最终接近甚至到达终点。"
        },
        {
          "number": 3,
          "text": "走っているときの不安がなくなるから。",
          "translation": "因为跑步时的不安会消失。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有提到跑步时的不安会消失。这里的问题是“厌烦、想放弃”，不是“不安”。"
        },
        {
          "number": 4,
          "text": "同じペースで走り続けることができるから。",
          "translation": "因为能够一直保持相同的速度跑下去。",
          "correct": false,
          "error": "relation-error",
          "explanation": "前文确实有「同じようにラップを刻む」，但这一题所问的划线句理由，主要由后文“200公里会放弃，1公里能继续”来说明，不是单纯保持同一速度。"
        }
      ]
    },
    {
      "id": "n2-long-2014-7-03",
      "questionNumber": 73,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "前に進んでいくこと",
        "歩みを刻む"
      ],
      "options": [
        {
          "number": 1,
          "text": "できる範囲のことを続け、前に進んでいくことが大切だ。",
          "translation": "持续做自己能做到的范围内的事，并不断向前，这很重要。",
          "correct": true,
          "error": null,
          "explanation": "原文「前に進んでいく」「歩みを刻む」「無理をしない」「自然にできることを続けていく」都指向这一主旨。"
        },
        {
          "number": 2,
          "text": "できないことでも、必死に頑張ればいつか達成できる。",
          "translation": "即使是做不到的事，只要拼命努力，总有一天也能达成。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者反而说如果走都走不了，那跑是做不到的；也说不要无理。并不是“做不到也拼命就能达成”。"
        },
        {
          "number": 3,
          "text": "目標は小さくても、それを見つけることで前進できる。",
          "translation": "即使目标很小，只要找到目标，就能前进。",
          "correct": false,
          "error": "relation-error",
          "explanation": "小目标是手段之一，但全文还强调持续、节奏、不勉强等。选项3只抓住一部分，概括不够完整。"
        },
        {
          "number": 4,
          "text": "目標を立てる前に、自身の能力を知ることが重要だ。",
          "translation": "在设定目标之前，了解自己的能力很重要。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文中确实提到先走一走，判断是否能走，但这不是全文最想说的重点。重点是按能做到的范围持续前进。"
        }
      ]
    }
  ],
  "2015.12": [
    {
      "id": "n2-long-2015-12-01",
      "questionNumber": 71,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "それを読んで参考にしている人がたくさんいる",
        "みんなが狙っている方向で、自分もやってみるというのでは、目立つこともない"
      ],
      "options": [
        {
          "number": 1,
          "text": "話題作は次々と変わるので、共通の特徴がつかめないから",
          "translation": "因为话题作品不断变化，抓不住共同特征。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说话题作变化快、抓不住共同特征。问题在于太多人参考同一方向。"
        },
        {
          "number": 2,
          "text": "話題作となる理由はさまざまなので、参考にならないから",
          "translation": "因为成为话题作品的理由各种各样，无法参考。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者承认畅销作品「何かいいところがあって売れている」，并不是说完全不能参考。"
        },
        {
          "number": 3,
          "text": "話題作を参考にしても、他者と似た作品にしかならないから",
          "translation": "因为即使参考话题作品，也只会写出和别人相似的作品。",
          "correct": true,
          "error": null,
          "explanation": "原文「参考にしている人がたくさんいる」「目立つこともない」说明参考话题作容易和他人相似。"
        },
        {
          "number": 4,
          "text": "話題作ばかり読んでも、作品の本当のよさがわからないから",
          "translation": "因为只读话题作品，也无法理解作品真正的好处。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说读话题作会看不出作品真正的好处。重点是“很多人都参考，所以不突出”。"
        }
      ]
    },
    {
      "id": "n2-long-2015-12-02",
      "questionNumber": 72,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "ひとりの作家…の全小説",
        "その作家の『小説作法"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の好きな多くの作家の小説作法",
          "translation": "自己喜欢的许多作家的小说写法。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文强调的是「ひとりの作家」の全小説，不是很多作家。"
        },
        {
          "number": 2,
          "text": "自分の好きなひとりの作家の小説作法",
          "translation": "自己喜欢的一位作家的小说写法。",
          "correct": true,
          "error": null,
          "explanation": "「ひとりの作家」「その作家の『小説作法』」直接对应一位喜欢作家的小说写法。"
        },
        {
          "number": 3,
          "text": "話題作を書いたいろいろな作家の小説作法",
          "translation": "写出话题作品的各种作家的小说写法。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是作者反对的“追话题作”的方向，不是②指代的内容。"
        },
        {
          "number": 4,
          "text": "話題作をたくさん書いたひとりの作家の小説作法",
          "translation": "写了很多话题作品的一位作家的小说写法。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说“写了很多话题作的一位作家”，而是说对自己来说合拍、喜欢的一位作家。"
        }
      ]
    },
    {
      "id": "n2-long-2015-12-03",
      "questionNumber": 73,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "いきなり自分らしさを出したいと考えるのではなく、まずは世間が振り向いてくれるレベルのものが書けるよう、上達する必要がある"
      ],
      "options": [
        {
          "number": 1,
          "text": "自己表現欲に従って、完成度の高いものを書くこと",
          "translation": "按照自我表达欲，写出完成度高的作品。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者说自我表达欲确实存在，但不能一开始就只凭它写；要先提升写作水平。"
        },
        {
          "number": 2,
          "text": "自分が書いた作品に自信を持って、世に発表すること",
          "translation": "对自己写的作品有信心，并发表到世上。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文批评“我的作品有价值，所以世人必须关注”的想法，认为这样很难被读者阅读。"
        },
        {
          "number": 3,
          "text": "自分らしさが伝えられるようにうまく書くこと",
          "translation": "为了传达自我风格而把作品写好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者说「いきなり自分らしさを出したい」と考えるのではなく，先要上達，所以“传达自我风格”不是首先目标。"
        },
        {
          "number": 4,
          "text": "世の中の人に読んでもらえる段階まで上達すること",
          "translation": "提升到能让世人愿意阅读的阶段。",
          "correct": true,
          "error": null,
          "explanation": "原文「世間が振り向いてくれるレベル」「上達する必要がある」正好对应“提升到能让世人愿意阅读的阶段”。"
        }
      ]
    }
  ],
  "2015.7": [
    {
      "id": "n2-long-2015-7-01",
      "questionNumber": 71,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "クラスをヨソモノの視点から観察",
        "誰が権力者なのか"
      ],
      "options": [
        {
          "number": 1,
          "text": "仲間になれるように努力すること",
          "translation": "努力让自己成为伙伴。",
          "correct": false,
          "error": "relation-error",
          "explanation": "作者确实想进入班级，但①「同じこと」具体对应的是观察和读取人际关系，不是单纯努力成为伙伴。"
        },
        {
          "number": 2,
          "text": "仲間に入らないようにすること",
          "translation": "避免进入伙伴圈。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说作者避免进入群体，而是为了进入群体，必须观察自己的立ち位置。"
        },
        {
          "number": 3,
          "text": "自分と合う人を見つけ出すこと",
          "translation": "找出和自己合得来的人。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "作者观察的不只是和自己合得来的人，还包括谁有权力、谁和谁关系好、谁的意见受重视等整体人际关系。"
        },
        {
          "number": 4,
          "text": "人間関係を観察すること",
          "translation": "观察人际关系。",
          "correct": true,
          "error": null,
          "explanation": "原文「観察する」「読み取ろうとしている」直接说明①指观察集体内部的人际关系。"
        }
      ]
    },
    {
      "id": "n2-long-2015-7-02",
      "questionNumber": 72,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "どこも4年間しか住んでいないので、出身地は適当に決めるしかない",
        "ふるさと"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分のふるさとの記憶はあいまいだから",
          "translation": "因为自己对故乡的记忆很模糊。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者不是说“自己的故乡记忆暧昧”，而是说很难决定哪里是出身地；出生地也没有记忆。关键在于没有可称作ふるさと的地方。"
        },
        {
          "number": 2,
          "text": "自分のふるさとには嫌な思い出しかないから",
          "translation": "因为自己对故乡只有不好的回忆。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文没有说自己的故乡有讨厌回忆。作者不是讨厌故乡，而是缺少故乡。"
        },
        {
          "number": 3,
          "text": "自分にはふるさとと呼べる場所がないから",
          "translation": "因为自己没有可以称为故乡的地方。",
          "correct": true,
          "error": null,
          "explanation": "原文「どこも4年間しか住んでいない」「出身地は適当に決めるしかない」说明作者没有能明确称为故乡的地方。"
        },
        {
          "number": 4,
          "text": "自分にはふるさとの良さがわからないから",
          "translation": "因为自己不懂故乡的好处。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者并非不懂ふるさと的好，恰恰因为憧憬ふるさと，才会希望它是いい場所。"
        }
      ]
    },
    {
      "id": "n2-long-2015-7-03",
      "questionNumber": 73,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "ふるさとはいい場所で、あって欲しい",
        "少しでもふるさとがいい状態になるように努力したい"
      ],
      "options": [
        {
          "number": 1,
          "text": "誰にとってもふるさとだと思えるような理想の場所をつくりたい。",
          "translation": "想创造一个对任何人来说都能称为故乡的理想之地。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者不是要创造“对任何人都是故乡”的理想场所，而是希望每个地方对当地人来说能成为好的故乡。"
        },
        {
          "number": 2,
          "text": "みんなが自分自身のふるさとをいい場所だと思えるようにしたい。",
          "translation": "想让每个人都能觉得自己的故乡是一个好地方。",
          "correct": true,
          "error": null,
          "explanation": "原文「ふるさとはいい場所で、あって欲しい」「どの場所も…ふるさとであり続ける」正好对应“让大家认为自己的故乡是好地方”。"
        },
        {
          "number": 3,
          "text": "ヨソモノであっても、受け入れてくれるようなふるさとをつくりたい。",
          "translation": "想创造即便是外来者也能被接纳的故乡。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者承认自己到哪里都是ヨソモノ，但文章重点不是让ヨソモノ被接纳，而是帮助ふるさと变好。"
        },
        {
          "number": 4,
          "text": "ふるさとのない人にも、ふるさとというものの良さを伝えられるようにしたい。",
          "translation": "想把故乡的好处传达给没有故乡的人。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者不是要向没有故乡的人传达故乡的好，而是想帮助已有故乡的人拥有更好的故乡。"
        }
      ]
    }
  ],
  "2016.12": [
    {
      "id": "n2-long-2016-12-01",
      "questionNumber": 71,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "感動したことを現代に持ち帰ってくる",
        "過去の中で感動したことをコピーして、それをデザインしている"
      ],
      "options": [
        {
          "number": 1,
          "text": "感動したシーンを人に語る。",
          "translation": "把感动过的场景讲给别人听。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说把感动场景讲给别人听，而是说把感动复制并设计化。"
        },
        {
          "number": 2,
          "text": "感動した記憶をデザインに生かす。",
          "translation": "把感动过的记忆运用到设计中。",
          "correct": true,
          "error": null,
          "explanation": "「過去の中で感動したことをコピーして、それをデザインしている」直接对应“把感动记忆用于设计”。"
        },
        {
          "number": 3,
          "text": "過去に流行したデザインをコピーする。",
          "translation": "复制过去流行过的设计。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说复制的是过去感动过的事，不是过去流行过的设计。"
        },
        {
          "number": 4,
          "text": "人が感動したことからデザインのヒントをもらう。",
          "translation": "从别人感动过的事情中获得设计提示。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是作者自己过去感动过的事情，不是从别人感动的事情中得到提示。"
        }
      ]
    },
    {
      "id": "n2-long-2016-12-02",
      "questionNumber": 72,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "感動したときのシーンはよく覚えています",
        "鮮明に刻み込まれて"
      ],
      "options": [
        {
          "number": 1,
          "text": "感動は周囲の力でしかつくられない。",
          "translation": "感动只能由周围的力量创造。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文说感动不仅靠自己，也可能由父母、朋友、周围的人创造，不是“只能”由周围力量创造。"
        },
        {
          "number": 2,
          "text": "感動したことは年を取るにつれて思い出せなくなる。",
          "translation": "感动过的事情会随着年龄增长而想不起来。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者反而说自己常常清楚记得感动时的场景，没有说年纪越大越想不起来。"
        },
        {
          "number": 3,
          "text": "周囲の力でつくられた感動は記憶に残りやすい。",
          "translation": "由周围力量创造的感动更容易留在记忆中。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说周围力量也会创造感动，但没有说“由周围力量创造的感动更容易记住”。"
        },
        {
          "number": 4,
          "text": "心の底から感動したことは鮮明な思い出となる。",
          "translation": "从心底感动过的事情会成为鲜明的回忆。",
          "correct": true,
          "error": null,
          "explanation": "原文「心の底から感動」「鮮明に刻み込まれています」说明真正的感动会留下鲜明回忆。"
        }
      ]
    },
    {
      "id": "n2-long-2016-12-03",
      "questionNumber": 73,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "いい思い出がたくさんあるかどうか、いい人に会ったかどうか、美味しいものを食べたかどうか",
        "思い出の引き出し"
      ],
      "options": [
        {
          "number": 1,
          "text": "記憶が強いほど、アイディアが生まれやすくなる。",
          "translation": "记忆越强烈，越容易产生创意。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是单纯说“记忆越强越好”，而是强调关于人、事、物的美好感动回忆的丰富程度。"
        },
        {
          "number": 2,
          "text": "他人の力を上手に利用することで、アイディアが商品につながる。",
          "translation": "通过巧妙利用他人的力量，创意会转化为商品。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说感动可能由他人力量创造，但没有说“利用他人的力量”能把创意变成商品。"
        },
        {
          "number": 3,
          "text": "感動した思い出が豊富であるほど、多くのアイディアが生まれる。",
          "translation": "感动过的回忆越丰富，就会产生越多创意。",
          "correct": true,
          "error": null,
          "explanation": "原文「思い出の引き出しをどれだけ持っているか」「アイディアの湧き出る量は変わる」直接对应“感动回忆越丰富，创意越多”。"
        },
        {
          "number": 4,
          "text": "感動をヒト・コト・モノに分けて考えると、いいアイディアが生まれる。",
          "translation": "把感动分成人、事、物来思考，就会产生好创意。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文列举「ヒト・コト・モノ」是说明好回忆的来源，并不是说要把感动分类思考才能产生好创意。"
        }
      ]
    }
  ],
  "2016.7": [
    {
      "id": "n2-long-2016-7-01",
      "questionNumber": 71,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "人間の欲望というのは無限に続くものであるから、幸福感まではなかなか到達しないのではないか"
      ],
      "options": [
        {
          "number": 1,
          "text": "今まで何をしても幸福感に到達することができなかったから",
          "translation": "因为至今无论做什么都无法到达幸福感。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说这个年轻人“至今做什么都得不到幸福感”。它说的是他从“人間の欲望は無限に続く”这一点推想，幸福感难以到达。"
        },
        {
          "number": 2,
          "text": "幸福についての考えにはいろいろあり、何が幸福かわからなくなったから",
          "translation": "因为关于幸福的看法有很多，已经不知道什么是幸福了。",
          "correct": false,
          "error": "relation-error",
          "explanation": "关于幸福的看法因人而异，是作者后面提出的观点，不是年轻人发问的原因。"
        },
        {
          "number": 3,
          "text": "人間の欲はなくならないので、いつまでも幸福感が得られないと考えたから",
          "translation": "因为认为人的欲望不会消失，所以永远无法获得幸福感。",
          "correct": true,
          "error": null,
          "explanation": "原文「欲望…無限に続く」「幸福感まではなかなか到達しない」直接对应“欲望不消失，所以难以获得幸福感”。"
        },
        {
          "number": 4,
          "text": "人間の欲はそれぞれ異なるので、幸福についての考え方も異なると考えたから",
          "translation": "因为认为人的欲望各不相同，所以对幸福的看法也不同。",
          "correct": false,
          "error": "relation-error",
          "explanation": "人们对幸福看法不同，是作者以趣味为例说明幸福多样性，不是年轻人的疑问原因。"
        }
      ]
    },
    {
      "id": "n2-long-2016-7-02",
      "questionNumber": 72,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "他人になんといわれようと、その人はそれで結構幸福なのだ",
        "人間は自分のために生きるのだから、他人に迷惑さえかけなければこれでもいい"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分が幸福だと思えることをすればいい。",
          "translation": "做自己认为幸福的事情就可以。",
          "correct": true,
          "error": null,
          "explanation": "原文「その人はそれで結構幸福」「他人に迷惑さえかけなければこれでもいい」说明起步阶段按自己认为幸福的方式生活即可。"
        },
        {
          "number": 2,
          "text": "他人と同じ程度の幸福を目指せばいい。",
          "translation": "以和他人同等程度的幸福为目标就可以。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调幸福观因人而异，没有说要追求和别人同等程度的幸福。"
        },
        {
          "number": 3,
          "text": "社会的に評価されることをすればいい。",
          "translation": "做社会上受到评价的事情就可以。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者并没有主张一开始就追求社会评价；社会地位只是幸福观的一种例子。"
        },
        {
          "number": 4,
          "text": "「心の豊かな人」になることを目指せばいい。",
          "translation": "以成为“内心丰富的人”为目标就可以。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "「心の豊かな人」也只是有人会持有的一种幸福观，作者没有把它规定为起步阶段的目标。"
        }
      ]
    },
    {
      "id": "n2-long-2016-7-03",
      "questionNumber": 73,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "会社での仕事も楽しく、家庭での生活も楽しい、つまり一日二十四時間を楽しく過ごすこと",
        "他人の目にも楽しく、心も楽しませる"
      ],
      "options": [
        {
          "number": 1,
          "text": "会社や家庭よりも、社会全体を優先する。",
          "translation": "比起公司和家庭，更优先社会整体。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说要把社会整体放在公司和家庭之上。作者谈的是公司、家庭和周围人的快乐。"
        },
        {
          "number": 2,
          "text": "一日二十四時間を、自分や家族のために大切に使う。",
          "translation": "把一天二十四小时都珍惜地用于自己和家人。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说把时间用于自己和家人，而是说公司工作和家庭生活都快乐，而且还希望让他人也快乐。"
        },
        {
          "number": 3,
          "text": "常に楽しい生活を送り、その生き方を周りの人に認めてもらう。",
          "translation": "始终过快乐的生活，并让周围的人认可这种生活方式。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者不是要周围人“认可”自己的生活方式，而是希望自己的幸福状态能让别人看着也快乐、心里也快乐。"
        },
        {
          "number": 4,
          "text": "会社でも家庭でも楽しく過ごし、その姿が周りの人も楽しませる。",
          "translation": "在公司和家庭都快乐地度过，并让这种状态也使周围的人感到快乐。",
          "correct": true,
          "error": null,
          "explanation": "选项同时对应「会社での仕事も楽しく、家庭での生活も楽しい」和「他人の目にも楽しく、心も楽しませる」。"
        }
      ]
    }
  ],
  "2017.12": [
    {
      "id": "n2-long-2017-12-01",
      "questionNumber": 71,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "短期間ならこういう境遇もわるくないかもしれません",
        "来る日も来る日もそうだったとしたら"
      ],
      "options": [
        {
          "number": 1,
          "text": "短期間であっても、生活に飽きてしまうだろう。",
          "translation": "即使是短时间，也会厌倦生活吧。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文说短期间「わるくないかもしれません」，并没有说短时间也会厌倦。"
        },
        {
          "number": 2,
          "text": "短期間であれば、嫌なことも嫌でなくなるだろう。",
          "translation": "如果只是短时间，讨厌的事情也会变得不讨厌吧。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说短期间讨厌的事会变得不讨厌，而是假设讨厌的事根本不用做。"
        },
        {
          "number": 3,
          "text": "長く続くと、退屈な生活に耐えられなくなるだろう。",
          "translation": "如果长期持续，就会无法忍受无聊的生活吧。",
          "correct": true,
          "error": null,
          "explanation": "原文「来る日も来る日も」「退屈」「耐えられなくなる」直接对应长期持续后无法忍受无聊生活。"
        },
        {
          "number": 4,
          "text": "長く続くと、欲しいものが何なのかわからなくなるだろう。",
          "translation": "如果长期持续，就会不知道自己想要什么吧。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说长期持续后会不知道想要什么，而是说会因没有能力发挥机会而无聊。"
        }
      ]
    },
    {
      "id": "n2-long-2017-12-02",
      "questionNumber": 72,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "私たちが能力を発揮できるのは、困難（問題）に出会ったとき",
        "そのときはじめて、能力を発揮する機会が与えられる"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の能力を生かす機会になる。",
          "translation": "它会成为发挥自己能力的机会。",
          "correct": true,
          "error": null,
          "explanation": "「能力を発揮できる」「機会が与えられる」正好说明困难会成为发挥能力的机会。"
        },
        {
          "number": 2,
          "text": "自分の能力を試すために必要だ。",
          "translation": "为了测试自己的能力，困难是必要的。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文重点不是“试すため”，不是为了测试能力，而是让能力有发挥的机会。"
        },
        {
          "number": 3,
          "text": "自分の能力で乗り越えられないことはない。",
          "translation": "没有什么困难是凭自己的能力无法克服的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者说“能够克服时”会感到喜悦，并没有说没有任何困难不能被克服。"
        },
        {
          "number": 4,
          "text": "自分の能力だけで乗り越えようとしなくてもいい。",
          "translation": "不一定非要只靠自己的能力去克服。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调「自分の能力で困難を乗り越える」所带来的喜悦，不是说不必靠自己的能力。"
        }
      ]
    },
    {
      "id": "n2-long-2017-12-03",
      "questionNumber": 73,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "持続的幸せは、困難にぶつかりながら、自分の能力で何とかそれを乗り越えようと努力しながら生きていくことによって得られる"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の能力に自信がなくても、主体的に生きていく。",
          "translation": "即使对自己的能力没有自信，也要主体性地生活。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到「自分にはやればできる力がある」的自己效能感，是克服困难后产生的感觉，不是说没有自信也可以。"
        },
        {
          "number": 2,
          "text": "困難を経験し、克服しようとしながら生きていく。",
          "translation": "经历困难，并一边努力克服它们一边生活。",
          "correct": true,
          "error": null,
          "explanation": "原文「困難にぶつかりながら」「乗り越えようと努力しながら生きていく」直接对应选项。"
        },
        {
          "number": 3,
          "text": "困難にぶつかっても、困難だと思わずに生きていく。",
          "translation": "即使遇到困难，也不把它当作困难来生活。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者没有说不要把困难看作困难，而是明确说要遇到困难并努力克服。"
        },
        {
          "number": 4,
          "text": "あらゆることに面白さやよろこびを見付けながら生きていく。",
          "translation": "在所有事情中寻找有趣和喜悦来生活。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章中的面白さ和喜悦来自克服困难，不是从任何事中随便寻找出来的。"
        }
      ]
    }
  ],
  "2017.7": [
    {
      "id": "n2-long-2017-7-01",
      "questionNumber": 71,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "暗闇の中を歩くのが不安で仕方がない",
        "迷ってしまった時の恐怖を想像したくない"
      ],
      "options": [
        {
          "number": 1,
          "text": "人間として自然な姿だから",
          "translation": "因为这是作为人类的自然状态。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说没有地图走人生才是人类自然的姿态，不是“想要地图”是自然姿态。"
        },
        {
          "number": 2,
          "text": "希望通りの人生を送りたいから",
          "translation": "因为想过上符合希望的人生。",
          "correct": false,
          "error": "relation-error",
          "explanation": "人确实会在地图上写下自己的希望，但作者说明“想要地图”的原因是害怕迷路，而不是单纯想按希望生活。"
        },
        {
          "number": 3,
          "text": "行くべき道がわからないと不安だから",
          "translation": "因为如果不知道该走哪条路，就会不安。",
          "correct": true,
          "error": null,
          "explanation": "原文「暗闇の中を歩くのが不安」「迷ってしまった時の恐怖」说明人想要地图是因为不知道路会不安。"
        },
        {
          "number": 4,
          "text": "早く目標に到達しないと不安になるから",
          "translation": "因为如果不能尽快到达目标，就会不安。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说因为不能尽快到目标而不安。它谈的是没有地图、迷路的恐惧。"
        }
      ]
    },
    {
      "id": "n2-long-2017-7-02",
      "questionNumber": 72,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "人生の地図に描かれた道を、その通りに歩むこと",
        "一度も脇道にそれずに、ただまっすぐに歩く"
      ],
      "options": [
        {
          "number": 1,
          "text": "地図に頼らずにまっすぐに歩む人生",
          "translation": "不依赖地图而笔直前进的人生。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说的是按照地图走，而不是不依赖地图。"
        },
        {
          "number": 2,
          "text": "地図通りの道を歩む人生",
          "translation": "按照地图上的道路前进的人生。",
          "correct": true,
          "error": null,
          "explanation": "「地図に描かれた道を、その通りに歩む」直接对应“地図通りの道を歩む人生”。"
        },
        {
          "number": 3,
          "text": "他人と同じような道を歩む人生",
          "translation": "走和别人相同道路的人生。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说和他人走相同的路，而是说被地图规定好的道路。"
        },
        {
          "number": 4,
          "text": "道に迷いながら歩んでいく人生",
          "translation": "一边迷路一边前进的人生。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这里指的是不迷路、一直按地图走的人生，不是迷路的人生。"
        }
      ]
    },
    {
      "id": "n2-long-2017-7-03",
      "questionNumber": 73,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "常に現在地を確認しながら、どんどん地図を書き変えていく",
        "今いる場所さえしっかりと認識できていれば、人はどんな道だって歩いていくことができる"
      ],
      "options": [
        {
          "number": 1,
          "text": "たくさんの地図を用意しておけば、人生で道に迷う心配がない。",
          "translation": "如果准备很多地图，人生就不用担心迷路。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者不是说准备很多地图就不会迷路，而是说要不断确认当前位置、改写地图。"
        },
        {
          "number": 2,
          "text": "人生は現在地さえわかっていれば、新たな道を進むことができる。",
          "translation": "人生只要知道当前位置，就能走上新的道路。",
          "correct": true,
          "error": null,
          "explanation": "原文「今いる場所さえしっかりと認識できていれば、人はどんな道だって歩いていくことができる」正好对应选项。"
        },
        {
          "number": 3,
          "text": "人生は行き先を決めれば、道に迷わずに自身の力で歩んでいける。",
          "translation": "人生只要决定目的地，就能不迷路地靠自己的力量前进。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者反而说目标道路并不是唯一的，不能只执着于预先决定的路线。"
        },
        {
          "number": 4,
          "text": "人生の可能性を広げるには、地図にない道を進むべきだ。",
          "translation": "为了拓展人生可能性，应该走地图上没有的路。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章不是主张一定要走地图上没有的路，而是即使进入岔路，也要确认当前位置并继续前进。"
        }
      ]
    }
  ],
  "2018.12": [
    {
      "id": "n2-long-2018-12-01",
      "questionNumber": 69,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "人間は、食物の栽培や物資の生産を始めた",
        "その生産（農業生産や工業生産）の拡大によって…人口を拡大していった"
      ],
      "options": [
        {
          "number": 1,
          "text": "自然界の食物を限界まで消費し、人口を増やしていった。",
          "translation": "把自然界的食物消费到极限，并增加人口。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说把自然界现有食物消耗到极限，而是说人类开始栽培和生产。"
        },
        {
          "number": 2,
          "text": "自然災害を乗り越えることによって、人口を増やしていった。",
          "translation": "通过克服自然灾害来增加人口。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中没有说通过克服自然灾害来增加人口。"
        },
        {
          "number": 3,
          "text": "食物を求めて他の動物と争いながら、人口を増やしていった。",
          "translation": "一边为了食物和其他动物争斗，一边增加人口。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说为了食物和其他动物争斗而增加人口，重点是生产扩大的作用。"
        },
        {
          "number": 4,
          "text": "食物や生活物資を作り出すことによって、人口を増やしていった。",
          "translation": "通过生产食物和生活物资来增加人口。",
          "correct": true,
          "error": null,
          "explanation": "「食物の栽培」「物資の生産」「生産の拡大によって…人口を拡大」直接对应选项。"
        }
      ]
    },
    {
      "id": "n2-long-2018-12-02",
      "questionNumber": 70,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "100人、200人を超える大集団",
        "そのような大集団をなんとか維持する個体間関係を保つことが可能"
      ],
      "options": [
        {
          "number": 1,
          "text": "大集団同士が学び合って、関係を維持していった点",
          "translation": "大群体之间互相学习，并维持关系这一点。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说孩子在大集団中学习，但不是“大集団同士”互相学习。"
        },
        {
          "number": 2,
          "text": "個体間関係を保ちながら、大集団を維持していった点",
          "translation": "一边维持个体间关系，一边维持大群体这一点。",
          "correct": true,
          "error": null,
          "explanation": "原文「大集団を…維持する個体間関係を保つ」直接对应此选项。"
        },
        {
          "number": 3,
          "text": "武器を作って身を守りながら、大集団を作っていった点",
          "translation": "制造武器保护自己，并形成大群体这一点。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说人类是「体に武器というものを持たない動物」，不是制造武器。"
        },
        {
          "number": 4,
          "text": "武器を持たないため、大集団同士の戦いを避けて生きていた点",
          "translation": "因为没有武器，所以避免大群体之间战斗而生存这一点。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说人类为了避免大集団同士の戦い而生活，重点是维持大集団的个体关系。"
        }
      ]
    },
    {
      "id": "n2-long-2018-12-03",
      "questionNumber": 71,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "人間が自然というものをもっとよく知り、環境とは何か、それぞれの生きものにとっての環世界というものは何かをもっと深く知る"
      ],
      "options": [
        {
          "number": 1,
          "text": "他の生きものに対しての人間の役割をもっと考える。",
          "translation": "更多思考人类对于其他生物的作用。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说要思考人类对其他生物的角色，而是说要理解自然和各个生物的環世界。"
        },
        {
          "number": 2,
          "text": "人間が自然を支配して生きていくという姿勢を改める。",
          "translation": "改变人类支配自然而生活的姿态。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者明确说「今さら変えることは無理だろう」，因此不是要改变人类支配自然的姿态。"
        },
        {
          "number": 3,
          "text": "自然や個々の生きものにとっての環境をよく理解する。",
          "translation": "充分理解自然以及对每种生物来说的环境。",
          "correct": true,
          "error": null,
          "explanation": "选项直接概括了原文最后一句「自然」「環境」「それぞれの生きものにとっての環世界」。"
        },
        {
          "number": 4,
          "text": "環境の限界を理解して、人間の生きかたを変える努力をする。",
          "translation": "理解环境限度，努力改变人类的生活方式。",
          "correct": false,
          "error": "opposite",
          "explanation": "虽然文中提到地球环境限界，但结论不是“改变人类生活方式”，而是更深入理解自然与环境。"
        }
      ]
    }
  ],
  "2018.7": [
    {
      "id": "n2-long-2018-7-01",
      "questionNumber": 71,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "落ちたのは自分に問題があるから"
      ],
      "options": [
        {
          "number": 1,
          "text": "不採用になった理由を、何度説明しても納得しない人",
          "translation": "无论被解释多少次，都不接受落选理由的人。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说这些人无论解释多少次都不接受，而是说他们容易把原因想成自己有问题。"
        },
        {
          "number": 2,
          "text": "不採用になった理由を、自分自身で深く考えようとしない人",
          "translation": "不愿自己深入思考落选理由的人。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中说他们会「考え込んでしまう」，不是不深入思考，而是思考方向只局限于自己和公司的关系。"
        },
        {
          "number": 3,
          "text": "不採用になったのは、評価の仕方がよくないからだと考える人",
          "translation": "认为自己落选是因为评价方式不好的人。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章没有说他们认为评价方式不好。恰恰相反，他们把问题归到自己身上。"
        },
        {
          "number": 4,
          "text": "不採用になったのは、自分自身に悪い点があるからだと考える人",
          "translation": "认为自己落选是因为自己有缺点的人。",
          "correct": true,
          "error": null,
          "explanation": "原文「落ちたのは自分に問題があるから」直接对应“认为自己有坏处/问题”。"
        }
      ]
    },
    {
      "id": "n2-long-2018-7-02",
      "questionNumber": 72,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "より大きな成果を出した人がいれば、自分の評価が相対的に下がるのは当たり前。大事なのは他者との比較"
      ],
      "options": [
        {
          "number": 1,
          "text": "一定以上の成果を出さなければ、会社では評価されないこと",
          "translation": "如果没有取得一定以上的成果，就不会在公司被评价。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说没有一定成果就完全不评价，而是说即使有一定成果，也不一定高评价。"
        },
        {
          "number": 2,
          "text": "会社の評価は厳しいので、高い評価はめったに得られないこと",
          "translation": "因为公司的评价很严格，所以很少能获得高评价。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有强调公司评价很严苛，而是强调评价是相对比较。"
        },
        {
          "number": 3,
          "text": "自分より成果を出した人がいれば、自分の評価は下がること",
          "translation": "如果有人取得比自己更大的成果，自己的评价就会下降。",
          "correct": true,
          "error": null,
          "explanation": "原文「より大きな成果を出した人がいれば、自分の評価が相対的に下がる」直接对应选项。"
        },
        {
          "number": 4,
          "text": "自分の出した成果に満足していると、すぐに他者に追い抜かれること",
          "translation": "如果满足于自己取得的成果，很快就会被他人超过。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中没有说一满足就会被追过。重点是当已经有他人比你成果更大时，评价会相对下降。"
        }
      ]
    },
    {
      "id": "n2-long-2018-7-03",
      "questionNumber": 73,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "同僚と自分を積極的に比較しましょう",
        "上司の視点で自分と比べてみる"
      ],
      "options": [
        {
          "number": 1,
          "text": "評価の高い同僚をよく観察し、その行動をまねる。",
          "translation": "仔细观察评价高的同事，并模仿他的行动。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说模仿评价高同事的行动，而是说要比较并思考自己缺什么、该做什么。"
        },
        {
          "number": 2,
          "text": "評価の高い同僚と比べて、自分がすべきことを考える。",
          "translation": "和评价高的同事比较，思考自己应该做什么。",
          "correct": true,
          "error": null,
          "explanation": "选项中的「評価の高い同僚と比べて」「自分がすべきことを考える」完整对应原文的建议。"
        },
        {
          "number": 3,
          "text": "同僚とは比べず、自分の得意分野で高い成果を出す。",
          "translation": "不和同事比较，在自己的擅长领域取得高成果。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文恰恰说要积极和同僚比较，而不是不比较。"
        },
        {
          "number": 4,
          "text": "同僚と比べて自分に何が足りないのかを上司から教えてもらう。",
          "translation": "让上司告诉自己，与同事相比还缺少什么。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说站在上司视点自己比较，并没有说让上司直接告诉自己。"
        }
      ]
    }
  ],
  "2019.12": [
    {
      "id": "n2-long-2019-12-01",
      "questionNumber": 68,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "最初から自分に合った仕事に就けるとは限らない",
        "それがすぐに見つかるとも限らない"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分に合った仕事や好きな仕事は、すぐに見つからない場合がある。",
          "translation": "适合自己的工作或喜欢的工作，有时并不会马上找到。",
          "correct": true,
          "error": null,
          "explanation": "原文「すぐに見つかるとも限らない」「時間がかかる」直接对应“不会马上找到”。"
        },
        {
          "number": 2,
          "text": "自分に合った仕事や好きな仕事が見つかるかどうかは、能力次第だ。",
          "translation": "能否找到适合自己的工作或喜欢的工作，取决于能力。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说是否找到取决于能力，而是说需要时间，可能要绕远路。"
        },
        {
          "number": 3,
          "text": "自分に合った仕事や好きな仕事に就けなくても、幸福になれる。",
          "translation": "即使不能从事适合自己的工作或喜欢的工作，也能幸福。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说找不到适合的工作也能幸福；反而说这样的工作占据幸福很大部分。"
        },
        {
          "number": 4,
          "text": "自分に合った仕事や好きな仕事が、いい仕事だとは限らない。",
          "translation": "适合自己的工作或喜欢的工作，不一定是好工作。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文没有否定适合自己的工作或喜欢的工作是好工作。"
        }
      ]
    },
    {
      "id": "n2-long-2019-12-02",
      "questionNumber": 69,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "夢や目標などは時期がくれば自然に抱くようになるもの",
        "夢をもたなきゃ"
      ],
      "options": [
        {
          "number": 1,
          "text": "夢を実現できるかどうか分からないと考えているから",
          "translation": "因为他认为不知道梦想能否实现。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有讨论梦想能不能实现，而是讨论梦想是否需要勉强拥有。"
        },
        {
          "number": 2,
          "text": "夢は大人になると自然に変わるものだと考えているから",
          "translation": "因为他认为梦想长大后自然会改变。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说梦想长大后会自然改变，而是说时机到了自然会怀抱梦想。"
        },
        {
          "number": 3,
          "text": "夢は大人になってからもつべきだと考えているから",
          "translation": "因为他认为梦想应该等到长大后再拥有。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者没有说必须成年后才有梦想，只是说不必过早被迫拥有。"
        },
        {
          "number": 4,
          "text": "夢は自然にもつようになるものだと考えているから",
          "translation": "因为他认为梦想是自然会拥有的东西。",
          "correct": true,
          "error": null,
          "explanation": "原文「時期がくれば自然に抱くようになる」直接说明梦想会自然产生。"
        }
      ]
    },
    {
      "id": "n2-long-2019-12-03",
      "questionNumber": 70,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "多少の回り道を覚悟すべき",
        "じっくり腰を据えて探してみる"
      ],
      "options": [
        {
          "number": 1,
          "text": "将来の可能性を広げるには、あまり大きな夢を持たないほうがいい。",
          "translation": "为了拓展将来的可能性，最好不要拥有太大的梦想。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者不是反对大梦想，而是反对过早、勉强地要求自己有梦想。"
        },
        {
          "number": 2,
          "text": "自分に合ったやりたいことを探すには、遠回りをしてもいい。",
          "translation": "为了寻找适合自己的、想做的事，即使绕远路也没关系。",
          "correct": true,
          "error": null,
          "explanation": "原文多次出现「回り道」「じっくり探す」「育てる」，说明寻找适合自己的事时，绕远路也可以。"
        },
        {
          "number": 3,
          "text": "若いうちは、自分の個性に合ったことをしたほうがいい。",
          "translation": "年轻时最好做适合自己个性的事。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章没有说年轻时要做符合个性的事；作者反而说个性不是主张就能获得，而是自然流露。"
        },
        {
          "number": 4,
          "text": "多くの経験を積むことによって、将来夢が実現できる。",
          "translation": "通过积累许多经验，将来就能实现梦想。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "经验会成为养分，但作者没有说“积累很多经验就一定实现梦想”。"
        }
      ]
    }
  ],
  "2019.7": [
    {
      "id": "n2-long-2019-7-01",
      "questionNumber": 69,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "部下の実力よりも少し上のレベルの仕事",
        "部下が何とか自分の力で判断・実行することができ"
      ],
      "options": [
        {
          "number": 1,
          "text": "上司の助けがあれば、大きな失敗をしないような仕事",
          "translation": "只要有上司帮助，就不会发生大失败的工作。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文强调部下要「自分の力で判断・実行」，不是靠上司帮助避免失败。"
        },
        {
          "number": 2,
          "text": "部下が自身の力で問題なくできるような仕事",
          "translation": "部下能靠自己的力量毫无问题地完成的工作。",
          "correct": false,
          "error": "opposite",
          "explanation": "该工作不是“問題なくできる”程度，而是略高于实力、可能有小失败的工作。"
        },
        {
          "number": 3,
          "text": "失敗する可能性があっても、部下自身がしたいと思うような仕事",
          "translation": "即使可能失败，部下自己也想做的工作。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说这是部下自己想做的工作，重点是成长所需的适度难度。"
        },
        {
          "number": 4,
          "text": "実力を超えているが、部下自身で最後までできるような仕事",
          "translation": "超过部下实力，但部下自己能做到最后的工作。",
          "correct": true,
          "error": null,
          "explanation": "选项中的「実力を超えている」对应「実力よりも少し上」，「部下自身で最後までできる」对应「自分の力で判断・実行」。"
        }
      ]
    },
    {
      "id": "n2-long-2019-7-02",
      "questionNumber": 70,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "この資料は、こういう目的で…使用するものだ",
        "見本を見せて、あとは部下の創意工夫に任せ"
      ],
      "options": [
        {
          "number": 1,
          "text": "事前に見本を見せて、部下のわからない部分を教えること",
          "translation": "事先给部下看样本，并教他不懂的部分。",
          "correct": false,
          "error": "opposite",
          "explanation": "虽然原文说要给见本，但不是为了逐一教不懂的部分，而是在说明整体图像后让部下自主发挥。"
        },
        {
          "number": 2,
          "text": "事前に全体像を示したら、あとは部下に任せること",
          "translation": "事先展示整体图像后，剩下的交给部下。",
          "correct": true,
          "error": null,
          "explanation": "该选项概括了「全体像を事前に明確に説明」和「部下の創意工夫に任せる」。"
        },
        {
          "number": 3,
          "text": "部下のアイデアを取り入れた上で、最善の方法を指示すること",
          "translation": "采纳部下的想法后，指示最佳方法。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是上司指示最善方法，而是让部下自己思考并形成自己的做法。"
        },
        {
          "number": 4,
          "text": "最初から完成まで何も言わず、自分のやり方でさせること",
          "translation": "从一开始到完成什么都不说，让部下按自己的方式做。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者不是说从一开始什么都不说，而是必须先明确说明整体图像。"
        }
      ]
    },
    {
      "id": "n2-long-2019-7-03",
      "questionNumber": 71,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "部下を育てるのは『仕事",
        "場を与える"
      ],
      "options": [
        {
          "number": 1,
          "text": "部下が仕事を通して成長できるような状況をつくること",
          "translation": "创造让部下能够通过工作成长的状况。",
          "correct": true,
          "error": null,
          "explanation": "原文「仕事をするための場を与える」对应“创造部下通过工作成长的状况”。"
        },
        {
          "number": 2,
          "text": "部下が最終的に自分の力で仕事ができるように教育すること",
          "translation": "教育部下，使其最终能靠自己的力量工作。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确说「部下を教育するのが上司の役目」というのは間違っている。"
        },
        {
          "number": 3,
          "text": "部下が上司を追い越せるようなレベルになるまで育てること",
          "translation": "培养部下，直到他达到能超越上司的水平。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然文中提到将来部下可能做出上司想不到的高水平资料，但这不是上司职责的直接定义。"
        },
        {
          "number": 4,
          "text": "部下が上司の仕事のやり方を学べるような環境を整えること",
          "translation": "整理环境，让部下学习上司的工作方式。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者不是让部下学习上司的做法，而是让部下通过工作确立自己的やり方。"
        }
      ]
    }
  ],
  "2020.12": [
    {
      "id": "n2-long-2020-12-01",
      "questionNumber": 68,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "相談者は、答をすぐに出してほしいのではなく、まずはじっくり話を聞いてほしいのだ。語りたいのだ"
      ],
      "options": [
        {
          "number": 1,
          "text": "時間をかけて、ただ話を聞いてくれること。",
          "translation": "花时间只是听自己说话。",
          "correct": true,
          "error": null,
          "explanation": "原文「じっくり話を聞いてほしい」「語りたい」直接对应“花时间听自己说”。"
        },
        {
          "number": 2,
          "text": "悩むような難問ではないと言ってくれること。",
          "translation": "告诉自己这并不是值得烦恼的难题。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说咨询者希望别人告诉自己“这不是难题”。"
        },
        {
          "number": 3,
          "text": "話しやすい雰囲気を作ってくれること。",
          "translation": "营造容易说话的氛围。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "营造气氛不是原文重点。原文强调的是听者要耐心听。"
        },
        {
          "number": 4,
          "text": "話を聞いて、解決策を一緒に考えてくれること。",
          "translation": "听完话后，一起思考解决方案。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说咨询者并不希望对方马上给答案，也没有说一开始就要求一起考虑解决方案。"
        }
      ]
    },
    {
      "id": "n2-long-2020-12-02",
      "questionNumber": 69,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "聞き手に理解してもらうにはどう説明するのがよいかを工夫しながら話すことになる"
      ],
      "options": [
        {
          "number": 1,
          "text": "聞き手が関心を持つように、工夫しながら話す。",
          "translation": "为了让听者产生兴趣，一边想办法一边说。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说为了让听者感兴趣，而是为了让听者理解。"
        },
        {
          "number": 2,
          "text": "聞き手が知りたいと思っていることを中心に話す。",
          "translation": "以听者想知道的事情为中心来说。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说以听者想知道的内容为中心，而是说讲述者说明自己的事情和烦恼。"
        },
        {
          "number": 3,
          "text": "聞き手がわかるように、事情や悩みをできるだけ詳しく話す。",
          "translation": "为了让听者明白，尽可能详细地讲述情况和烦恼。",
          "correct": false,
          "error": "opposite",
          "explanation": "虽然要说明情况和烦恼，但重点不是“尽可能详细”，而是“怎样说明才能让听者理解”。"
        },
        {
          "number": 4,
          "text": "聞き手が理解できるように、説明のしかたを考えながら話す。",
          "translation": "为了让听者能够理解，一边思考说明方式一边说。",
          "correct": true,
          "error": null,
          "explanation": "选项中的「理解できるように」「説明のしかたを考えながら」正好对应原文。"
        }
      ]
    },
    {
      "id": "n2-long-2020-12-03",
      "questionNumber": 70,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "自分の理解の枠組みと聞き手の理解の枠組みが交錯しつつ融合し、そこに自分ひとりで考えていたときとは違った視点がもたらされる"
      ],
      "options": [
        {
          "number": 1,
          "text": "語り合いによって、それまで気づかなかった視点が得られる。",
          "translation": "通过交谈，可以获得此前没有注意到的视角。",
          "correct": true,
          "error": null,
          "explanation": "原文「自分ひとりで考えていたときとは違った視点がもたらされる」说明交谈能带来此前没有的视点。"
        },
        {
          "number": 2,
          "text": "語り合っているうちに、聞き手の視点で考えられるようになる。",
          "translation": "交谈过程中，会变得能够从听者的视角思考。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说变成从听者视角思考，而是自己的框架和听者的框架交错融合，产生新的视角。"
        },
        {
          "number": 3,
          "text": "違う経験をした人に相談すれば、現実の見え方も変わる。",
          "translation": "如果向有不同经验的人咨询，看待现实的方式也会改变。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有强调“有不同经验的人”，而是强调有听者参与的语り合い本身。"
        },
        {
          "number": 4,
          "text": "自分の視点を大切にして語ることで、悩みの解決につながる。",
          "translation": "重视自己的视角并讲述，会有助于解决烦恼。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说只重视自己的视点，而是说自己的理解框架与听者的理解框架相互作用。"
        }
      ]
    }
  ],
  "2021.12": [
    {
      "id": "n2-long-2021-12-01",
      "questionNumber": 67,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "オフラインの状態はいわば日常生活で、あまり新しいことを取り入れることはありません"
      ],
      "options": [
        {
          "number": 1,
          "text": "他人と交流したいと思わない。",
          "translation": "不想和别人交流。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说离线状态是不想和别人交流，而是说不太吸收新东西。"
        },
        {
          "number": 2,
          "text": "コンピュータをあまり使わない。",
          "translation": "不怎么使用电脑。",
          "correct": false,
          "error": "opposite",
          "explanation": "这里不是问电脑使用量，而是用电脑状态比喻人的生活状态。"
        },
        {
          "number": 3,
          "text": "新しいことをすることは少ない。",
          "translation": "很少做新的事情。",
          "correct": true,
          "error": null,
          "explanation": "原文「あまり新しいことを取り入れることはありません」对应“很少做/吸收新的事情”。"
        },
        {
          "number": 4,
          "text": "日常生活の中でしか新しいことを探さない。",
          "translation": "只在日常生活中寻找新事物。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说只在日常中寻找新事物，反而说日常生活中不太吸收新东西。"
        }
      ]
    },
    {
      "id": "n2-long-2021-12-02",
      "questionNumber": 68,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "自分がいままであたりまえにやっていたことに疑問を抱く",
        "別なやり方があることに気づく"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分とは違うやり方があることに気づく。",
          "translation": "会注意到存在和自己不同的做法。",
          "correct": true,
          "error": null,
          "explanation": "原文「別なやり方があることに気づく」直接对应选项。"
        },
        {
          "number": 2,
          "text": "自分とは違うことをしている人を批判する。",
          "translation": "会批判做法和自己不同的人。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文强调不是简单地觉得对方奇怪或批判，而是思考其中是否有道理。"
        },
        {
          "number": 3,
          "text": "自分のやり方が自分に合っているとわかる。",
          "translation": "会明白自己的做法适合自己。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者说旅行会让人重新思考自己的做法，并不是确认自己的做法最适合。"
        },
        {
          "number": 4,
          "text": "毎日の生活で感じた疑問を解決できる。",
          "translation": "能解决日常生活中感到的疑问。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章不是说解决日常疑问，而是说旅行会让人产生疑问并重新思考人生。"
        }
      ]
    },
    {
      "id": "n2-long-2021-12-03",
      "questionNumber": 69,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "普段の環境にあって自分の人生を考え直したり、おさらいしたりしようと思っても、それは難しい",
        "ちょっと離れて自分のことを考えるための旅に出る"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の知識を広げるためには、旅をするといい。",
          "translation": "为了拓展自己的知识，旅行是好的。",
          "correct": false,
          "error": "opposite",
          "explanation": "旅行确实会带来新信息，但作者核心不是扩展知识，而是借此重新审视自己的做法和人生。"
        },
        {
          "number": 2,
          "text": "忙しい日常生活を忘れるために、旅は必要だ。",
          "translation": "为了忘记忙碌的日常生活，旅行是必要的。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说旅行是为了忘记忙碌日常，而是为了稍微离开日常，思考自己。"
        },
        {
          "number": 3,
          "text": "旅によって、自分の人生を見つめ直すことができる。",
          "translation": "能够通过旅行重新审视自己的人生。",
          "correct": true,
          "error": null,
          "explanation": "原文「自分の人生を考え直したり」「自分のことを考えるための旅」直接对应“重新审视人生”。"
        },
        {
          "number": 4,
          "text": "旅をたくさんすれば、自分の人生を変えることができる。",
          "translation": "只要多多旅行，就能改变自己的人生。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说旅行能让人离开日常、重新思考人生，但没有说“旅をたくさんすれば”就能改变人生。选项把“重新审视”夸大成了“改变人生”。"
        }
      ]
    }
  ],
  "2021.7": [
    {
      "id": "n2-long-2021-7-01",
      "questionNumber": 68,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "人生50年",
        "何をするのにも…時間がかかってしまいました"
      ],
      "options": [
        {
          "number": 1,
          "text": "漬物を漬ける季節はその準備がとても忙しかったので、退屈するような暇はなかったということ。",
          "translation": "腌菜的季节准备非常忙，所以没有无聊的闲暇。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "漬物只是举例说明过去做事需要很长时间，不是说腌菜季节忙所以无聊。"
        },
        {
          "number": 2,
          "text": "自動車や飛行機がなかった頃に比べると、今は退屈する前に目的地につくことができるということ。",
          "translation": "和没有汽车、飞机的时代相比，现在能在无聊之前到达目的地。",
          "correct": false,
          "error": "relation-error",
          "explanation": "选项说的是现在很快到达目的地，但①是在说明过去“退屈する前に時間は過ぎた”。"
        },
        {
          "number": 3,
          "text": "100年前は何をするにも非常に長い時間が必要だったので、人生で退屈する時間はなかったということ。",
          "translation": "一百年前无论做什么都需要很长时间，所以人生中没有无聊的时间。",
          "correct": true,
          "error": null,
          "explanation": "原文「100年前」「何をするのにも…時間がかかった」「人生は短かった」说明过去没有多余的无聊时间。"
        },
        {
          "number": 4,
          "text": "かつて人々は時間のかかることをあえてしていたから、退屈するのは当たり前のことだったということ。",
          "translation": "过去人们明知花时间也要做事，所以无聊是理所当然的。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说过去无聊理所当然，而是说还没无聊时间就过去了。"
        }
      ]
    },
    {
      "id": "n2-long-2021-7-02",
      "questionNumber": 69,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "便利になって、時間がどんどん節約されてきた",
        "一生の時間の方はどんどんと長くなった"
      ],
      "options": [
        {
          "number": 1,
          "text": "物事が便利になり、寿命も延びて、使い方がわからない時間が増えるから。",
          "translation": "因为事物变得便利，寿命也延长，不知道如何使用的时间增加了。",
          "correct": true,
          "error": null,
          "explanation": "该选项同时包含便利化、寿命延长、以及不知道如何使用的时间增加。"
        },
        {
          "number": 2,
          "text": "若いうちから30年も40年も先の人生の過ごし方を考えなければならないから。",
          "translation": "因为年轻时就必须思考三十年、四十年以后的人生该怎么过。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章开头提到今后要考虑80年人生，但②的直接理由是便利节省时间与寿命延长带来的“空白时间增加”。"
        },
        {
          "number": 3,
          "text": "時間のかかることをあえてすることで、結果としてあわただしい人生になるから。",
          "translation": "因为特意去做花时间的事，结果人生变得忙乱。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "那是过去的情况，不是现在时间成为负担的原因。"
        },
        {
          "number": 4,
          "text": "ひとつのことを済ませるのに時間がかからなくなった分、することが増えるから。",
          "translation": "因为完成一件事所需时间减少，相应地要做的事情增加了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说因为做事快所以要做的事增加，而是说不知道做什么的时间增加。"
        }
      ]
    },
    {
      "id": "n2-long-2021-7-03",
      "questionNumber": 70,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "ますます重要になってくるのが…読書",
        "途方もない長さの時間"
      ],
      "options": [
        {
          "number": 1,
          "text": "昔と比べて現在は何をするにも時間がかからなくなり、人生の時間が余って人々の負担になっている。",
          "translation": "和过去相比，现在做什么都不花时间，人生时间剩余，成为人们的负担。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这只是前半部分的问题说明，不是作者最终主张。作者重点在后文提出读书的重要性。"
        },
        {
          "number": 2,
          "text": "現在は人生そのものも長くなり、物事をするのにかかる時間も節約されている。これは素晴らしいことだ。",
          "translation": "现在人生本身变长，做事花的时间也节省了。这是很棒的事。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者并不是单纯赞美人生变长和时间节约，而是说它们可能成为负担。"
        },
        {
          "number": 3,
          "text": "現代の長い人生を過ごす上で読書の果たす役割は大きく、本だけがそのような長い時間に耐えられる。",
          "translation": "在度过现代漫长人生方面，读书发挥的作用很大，只有书能承受这样的漫长时间。",
          "correct": true,
          "error": null,
          "explanation": "原文「ますます重要になってくるのが…読書」「本しかない」正是全文主张。"
        },
        {
          "number": 4,
          "text": "科学の進歩も素晴らしいが、そんなに急いで物事をしても、人生において何の意味もないのではないか。",
          "translation": "科学进步固然很好，但那么匆忙地做事，在人生中也许没有任何意义。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章没有主张科学进步没有意义，重点也不是批评急着做事本身，而是说明读书能支撑漫长人生。"
        }
      ]
    }
  ]
};
})();
