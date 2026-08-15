(function () {
    'use strict';
    const root = window.ReadingAnalysisData = window.ReadingAnalysisData || {};
    root.N1 = root.N1 || {};
    root.N1.long = {
  "2010.12": [
    {
      "id": "n1-long-2010-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "行動主義心理学と呼ばれるこの流派では、サルやネズミなどにレバー押しなどの行動を訓練し、その行動から動物の心を探っていく。",
        "その行動から動物の心を探っていく。"
      ],
      "options": [
        {
          "number": 1,
          "text": "サルを訓練して、人間の意図を読み取れるようにすること",
          "translation": "训练猴子，使其能够读懂人类的意图。",
          "correct": false,
          "error": "relation-error",
          "explanation": "目的是探寻猴子的心智，而不是让猴子去读懂人类的意图。"
        },
        {
          "number": 2,
          "text": "サルを訓練して、動物だけが持つ見えない能力を開発すること",
          "translation": "训练猴子，开发只有动物才拥有的看不见的能力。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并没有提到要开发动物“看不见的能力（見えない能力を開発する）”。"
        },
        {
          "number": 3,
          "text": "サルの行動を通して、動物に対する人間の心の動きを探ること",
          "translation": "通过猴子的行为，探寻人类面对动物时的心理活动。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "探寻的是“动物”的心智，而不是“人类”面对动物时的心理活动。"
        },
        {
          "number": 4,
          "text": "サルの行動を通して、目に見えない動物の心や意識を研究すること",
          "translation": "通过猴子的行为，研究肉眼看不见的动物的心智或意识。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第二段中“从这些行为中去探寻动物的心智”的描述。"
        }
      ]
    },
    {
      "id": "n1-long-2010-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "サルが少しでもチラッとレバーを見たとする。そこですかさずエサを与える。（中略）ここが我慢のしどころ。試行錯誤の中、サルの手がレバーに伸びるのをじっと待つ。",
        "ここが我慢のしどころ。試行錯誤の中、サルの手がレバーに伸びるのをじっと待つ。そして手が少しでも伸びれば、すかさずエサを与える。"
      ],
      "options": [
        {
          "number": 1,
          "text": "サルをレバーの近くに連れて行き、目標の行動をしたらすぐにエサをやる。",
          "translation": "把猴子带到控制杆附近，一旦它做出了目标行为就立刻喂食。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到不能直接拜托动物按控制杆，第一次来的猴子也注意不到，需要一步步引导，而不是直接带到附近。"
        },
        {
          "number": 2,
          "text": "サルがレバーを押したらエサを指し示し、目標の行動をするまでじっと待つ。",
          "translation": "当猴子按下控制杆时向它指示食物，然后静静等待直到它做出目标行为。",
          "correct": false,
          "error": "relation-error",
          "explanation": "并不是等猴子按了控制杆才指示食物，顺序与原文不符。"
        },
        {
          "number": 3,
          "text": "サルにレバーを指し示し、人間が期待する次の行動をしたらすぐエサをやる。",
          "translation": "向猴子指示控制杆，一旦它做出了人类期待的下一步行为就立刻喂食。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中没有“向猴子指示控制杆”这个动作，因为猴子一开始根本注意不到。"
        },
        {
          "number": 4,
          "text": "サルがレバーを見たらエサをやり、人間が期待する次の行動をするまでじっと待つ。",
          "translation": "猴子看到控制杆就喂食，然后静静等待直到它做出人类期待的下一步行为。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第三段中“看了就给食物”和“静待其做出下一步行动”的两个核心步骤。"
        }
      ]
    },
    {
      "id": "n1-long-2010-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "心は行動からしかつかめない。しかしそれがつかめたとき、手の中にサルの心があるように思えてくる。そのとき私は…",
        "そのとき"
      ],
      "options": [
        {
          "number": 1,
          "text": "「エサやり」というメッセージを繰り返し送ることで人間とサルの行動の違いがわかったとき",
          "translation": "通过反复发送“喂食”信号，明白了人类和猴子行为差异的时候。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "并不是指弄清楚了人类和猴子行为的差异。"
        },
        {
          "number": 2,
          "text": "「エサやり」というメッセージを送る過程を通して、サルの心がつかめたと感じたとき",
          "translation": "在发送“喂食”信号的过程中，感觉自己把握住了猴子心智的时候。",
          "correct": true,
          "error": null,
          "explanation": "完全对应了前文“把握住了猴子的心智（それがつかめたとき）”的状态。"
        },
        {
          "number": 3,
          "text": "レバー押しの訓練が進むにつれて、サルが筆者の心をわかってくれたと感じたとき",
          "translation": "随着按压控制杆训练的推进，感觉到猴子理解了作者心意的时候。",
          "correct": false,
          "error": "opposite",
          "explanation": "并不是猴子理解了作者的心意，而是作者把握住了猴子的心智。"
        },
        {
          "number": 4,
          "text": "レバー押しの訓練によって教科書には書かれていないサルの行動が解明されたとき",
          "translation": "通过按压控制杆的训练，查明了教科书上没有写过的猴子行为的时候。",
          "correct": false,
          "error": "opposite",
          "explanation": "查明的重点并不是猴子的“行为”，而是透过行为把握到了肉眼看不见的“心智”。"
        }
      ]
    },
    {
      "id": "n1-long-2010-12-04",
      "questionNumber": 4,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "実際にやってみると、それは衝撃の体験だった。（中略）うまく訓練するにはサルの心がつかめていなければならないのだ。（中略）学問の本当に大事なことは、教科書には書いていないことを知ったのだった。",
        "実際にやってみると、それは衝撃の体験だった。"
      ],
      "options": [
        {
          "number": 1,
          "text": "動物を目標に近づける訓練では、「エサやり」を通して動物が人間に慣れることが大切だ。",
          "translation": "在让动物接近目标的训练中，通过“喂食”让动物习惯人类是很重要的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“让动物习惯人类”并不是本文作者想要表达的最终结论。"
        },
        {
          "number": 2,
          "text": "動物を訓練するためには気持ちをつかむことが重要であり、それは自分で体験して初めてわかる。",
          "translation": "为了训练动物，把握它们的心情是很重要的，而这只有自己亲自体验过才能明白。",
          "correct": true,
          "error": null,
          "explanation": "综合了“把握心情很重要”以及“需要亲自体验才能明白（即教科书上没写）”这两个核心感想。"
        },
        {
          "number": 3,
          "text": "動物の心理を探るためには、まず教科書に書いてあるとおりのことを実践することが大事だ。",
          "translation": "为了探寻动物的心理，首先实践教科书上写的东西是很重要的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者的落脚点是“教科书外”的亲自体验所带来的冲击，而不是在强调“首先实践教科书很重要”。"
        },
        {
          "number": 4,
          "text": "動物の心をつかむには目に見える行動だけに注目することが大切だが、そのことは教科書に書いていない。",
          "translation": "要想把握动物的心智，关注肉眼可见的行为是很重要的，但这一点教科书上并没有写。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是“心智只能从行为中去把握”，并没有说“只关注可见行为很重要”，且“只关注可见行为”也不是教科书没写的内容，把握心智的震撼体验才是。"
        }
      ]
    }
  ],
  "2010.7": [
    {
      "id": "n1-long-2010-7-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "実は肝心の感情(情動)についてはまだよくわかっていないのです。えっ、感情こそ心理学が得意とするところではないのですか、と不思議に思われるかもしれません。",
        "えっ、感情こそ心理学が得意とするところではないのですか、と①不思議に思われるかもしれません。"
      ],
      "options": [
        {
          "number": 1,
          "text": "心理学では感情機能についてまだ十分わかっていないこと",
          "translation": "心理学对于感情机能还未充分了解这件事。",
          "correct": true,
          "error": null,
          "explanation": "准确符合了前文中“其实对感情还不太了解（まだよくわかっていない）”这一让人们感到不可思议的事实。"
        },
        {
          "number": 2,
          "text": "心理学では認知と感情の関係がまだ解明されていないこと",
          "translation": "心理学中认知与感情的关系还未被解明这件事。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中提到了认知和感情，但并没有将“两者的关系还未被解明”作为让人们感到不可思议的原因。"
        },
        {
          "number": 3,
          "text": "心理学は感情の働きを研究するのが得意だということ",
          "translation": "心理学擅长研究感情的作用这件事。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是人们普遍存在的一种“误解”或“刻板印象”，人们感到不可思议的是这个印象被打破了，而不是对这个印象本身感到不可思议。"
        },
        {
          "number": 4,
          "text": "心理学が昔から心について研究してきたということ",
          "translation": "心理学从过去就开始研究心智这件事。",
          "correct": false,
          "error": "opposite",
          "explanation": "这是第一段首句陈述的已知事实，并不是引发疑问的矛盾点。"
        }
      ]
    },
    {
      "id": "n1-long-2010-7-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "現代の心理学が得意としているのは、（中略）感覚や知覚の働きであり、（中略）認知と呼ばれる働きについてです。そうした働きと感情を一体化した心のプロセスが、私たちの全体的な『生",
        "そうした働きと感情を一体化した心のプロセスが、私たちの②全体的な「生」の体験なのかもしれません。"
      ],
      "options": [
        {
          "number": 1,
          "text": "心で感じとったことを、そのまま行動に移すような体験",
          "translation": "将在心里感受到的东西直接转化为行动的体验。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "缺少了对于周围世界的认知和思考的过程，只提到了感觉和行动的转化。"
        },
        {
          "number": 2,
          "text": "身の回りの世界を目や耳で認識して考え、心で感じる体験",
          "translation": "用眼和耳去认知周围的世界进行思考，并用心去感受的体验。",
          "correct": true,
          "error": null,
          "explanation": "“目や耳で認識（感觉/知觉）”、“考え（认知）”、“心で感じる（感情）”，充分对应了原文对整合过程的描述。"
        },
        {
          "number": 3,
          "text": "どのように周囲を見たり聴いたりして考えるかという体験",
          "translation": "关于如何去看和听周围事物并进行思考的体验。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "只包含了感觉和认知的部分，遗漏了画线句中强调的将其与“感情（一体化）”结合这一关键要素。"
        },
        {
          "number": 4,
          "text": "感覚や知覚で周囲の世界のものごとをとらえようとする体験",
          "translation": "试图用感觉或知觉去捕捉周围世界事物的体验。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "同上，只描述了感觉或知觉捕捉事物的过程，没有包含感情融合的层面。"
        }
      ]
    },
    {
      "id": "n1-long-2010-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "ロボットもうれしそうな表情などをしてみせることはできます。（中略）しかし、それらは表面的な動作をしているだけで、感情の働きがそうさせているわけではありません。複雑な心の働きの中でも特に感情機能を解明するのは難しく、それをうまく再現できないからです。",
        "複雑な心の働きの中でも特に感情機能を解明するのは難しく、それをうまく再現できないから"
      ],
      "options": [
        {
          "number": 1,
          "text": "ロボットの感情のメカニズムの複雑さ",
          "translation": "机器人感情机制的复杂性。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章讨论的是人类感情机制的复杂性导致机器人无法拥有感情，而不是机器人本身的感情机制复杂（机器人目前根本没有真实感情）。"
        },
        {
          "number": 2,
          "text": "最近のロボット工学の進歩のめざましさ",
          "translation": "最近机器人工程学进步的显著性。",
          "correct": false,
          "error": "relation-error",
          "explanation": "虽然提到了机器人工程学有进展，但这只是铺垫，并非作者举这个例子的最终目的。"
        },
        {
          "number": 3,
          "text": "人間の動作や表情を再現することの難しさ",
          "translation": "重现人类动作和表情的困难度。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文明确提到“ロボットもうれしそうな表情などをしてみせることはできます”，说明重现表面动作和表情是可以做到的，困难的在于感情机能。"
        },
        {
          "number": 4,
          "text": "人間の感情の働きを解明することの難しさ",
          "translation": "解明人类感情作用的困难度。",
          "correct": true,
          "error": null,
          "explanation": "准确抓住了本段最后一句的落脚点：因为难解明感情机能，所以连精巧的机器人也无法重现它。"
        }
      ]
    },
    {
      "id": "n1-long-2010-7-04",
      "questionNumber": 4,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "感情は私たちの体験を豊かに裏打ちして、なにかを選んだり、しようとしたりする行動を駆り立てる動因にもなります。（中略）感情は私たちの思考や行動の土台になっていると考えることができそうです。",
        "感情は私たちの体験を豊かに裏打ちして、なにかを選んだり、しようとしたりする行動を駆り立てる動因にもなります。"
      ],
      "options": [
        {
          "number": 1,
          "text": "何かをしたいと思い行動を起こす",
          "translation": "产生想要做某事的想法并付诸行动。",
          "correct": true,
          "error": null,
          "explanation": "对应了原文“なにかを選んだり、しようとしたりする行動を駆り立てる動因（驱使我们试图做某事的行为动因）”的论述。"
        },
        {
          "number": 2,
          "text": "ものごとを感覚でとらえようとする",
          "translation": "试图用感觉去捕捉事物。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "用感觉去捕捉事物是第一段提到的“感觉/知觉的作用”，而不是第三段探讨的感情促发行动的层面。"
        },
        {
          "number": 3,
          "text": "相手の心を分析して理解しようとする",
          "translation": "试图分析并理解对方的心。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章的第三段主要讨论自身的感情如何驱使自身行动，并没有探讨分析对方的心智。"
        },
        {
          "number": 4,
          "text": "好き嫌いを論理的に考え判断する",
          "translation": "在逻辑上思考并判断喜欢或讨厌。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文特意举例说明“好き嫌いを理屈(論理)で説明することは難しいはず（用逻辑去解释喜欢或讨厌应该很困难）”，这与选项描述的用逻辑判断正好相反。"
        }
      ]
    }
  ],
  "2011.12": [
    {
      "id": "n1-long-2011-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "科学的知は、対象を突き放して、第三者的立場で、自分に関わりのない客観的事象として眺め、しかも、必ずそのつど、特定の観点からだけ対象を扱い、自分が関心を持つ側面だけを取り上げ、それ以外の局面を捨象し、けっして対象の全体を見ようとはしないのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "現在の事象の一部だけを取り上げて客観的な立場で検証する。",
          "translation": "只截取当前事象的一部分，站在客观的立场上进行验证。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中科学只取关心侧面（不看整体）并在客观立场验证当前的特质。"
        },
        {
          "number": 2,
          "text": "関心のある対象だけを客観的な立場で検証し未来を予測する。",
          "translation": "只对关心的对象站在客观的立场上进行验证并预测未来。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中指出决定怎么活才需要将“尚未到来的未来”纳入视野，而科学只针对当前的客观事实进行验证，无法预测未来。"
        },
        {
          "number": 3,
          "text": "過去の経験をもとにして客観的な立場で現在の状況を扱う。",
          "translation": "以过去的经验为基础，站在客观的立场上处理当前的状况。",
          "correct": false,
          "error": "not-stated",
          "explanation": "过去和未来一样，是“没有的东西（もはや無い過去）”，这是行为者（人）决断时才需要的视野，不是科学的特质。"
        },
        {
          "number": 4,
          "text": "人間的知の全体を客観的な立場からだけとらえる。",
          "translation": "仅从客观的立场去把握人类知识的整体。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章第一段明确指出，掌握“人类知识的整体”是哲学的立场，而不是科学。"
        }
      ]
    },
    {
      "id": "n1-long-2011-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "だから、科学が進むと、細分化が必至となり、隣の研究室でやっていることが、お互いにはまったく分からなくなる。専門化と特殊化が、科学の運命であり、いかに学際化が叫ばれても、根本的には①この傾向には歯止めが利かない。",
        "この傾向"
      ],
      "options": [
        {
          "number": 1,
          "text": "近代的な研究を行う部門がさらに増えてきた。",
          "translation": "进行近代研究的部门进一步增加了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "重点在于领域的“细分（細かく分かれる）”，而不是近代部门的“增加（増えてきた）”。"
        },
        {
          "number": 2,
          "text": "特殊な研究対象が排除されるようになってきた。",
          "translation": "特殊的研究对象变得被排除了。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章提到科学是专业化和“特殊化”的，并没有说特殊的研究对象会被“排除（排除される）”。"
        },
        {
          "number": 3,
          "text": "研究対象をより実践的にとらえるようになってきた。",
          "translation": "变得更加实践性地去把握研究对象了。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“实践性”是第三段探讨的主体行为，与这里的细分化倾向无关。"
        },
        {
          "number": 4,
          "text": "専門分野が以前より細かく分かれるようになってきた。",
          "translation": "专业领域变得比以前划分得更细了。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了前文中科学不可避免走向“细分化”、“专业化”和“特殊化”的倾向。"
        }
      ]
    },
    {
      "id": "n1-long-2011-12-03",
      "questionNumber": 3,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "知覚的に有る現在の事実に検証されることによってのみ確実性を得ようとする科学の実証性とは、まったく別個の事柄だからである。客観的な事実確認のみを大事と考える科学の次元と、人生の岐路に立って、右すべきか左すべきかに思い悩む行為者の立場とは、別個の事柄である。",
        "知覚的に有る現在の事実に検証されることによってのみ確実性を得ようとする科学の実証性"
      ],
      "options": [
        {
          "number": 1,
          "text": "客観的な事実確認を重視するものだから",
          "translation": "因为它是重视客观事实确认的。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“认为只有客观的事实确认才重要的科学维度”导致其无法处理主观生活问题的因果关系。"
        },
        {
          "number": 2,
          "text": "現在の行為だけを主体的に扱うものだから",
          "translation": "因为它只主体性地处理当前的行为。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "科学是“客观”看待事物的，而选项中提到的“主体性地（主体的）”对待，是人的特质，科学恰恰做不到这一点。"
        },
        {
          "number": 3,
          "text": "人間全体を解明することができないから",
          "translation": "因为它无法阐明人类的整体。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "无法阐明人类整体对应的是第二段科学“细分化”的界限一，而不是第三段探讨“如何生活”的界限二。"
        },
        {
          "number": 4,
          "text": "人間の考えや行為の多くをまだ実証できないから",
          "translation": "因为人类的想法和行为有许多还无法被实证。",
          "correct": false,
          "error": "opposite",
          "explanation": "无法验证人类想法并不等于文中探讨的核心矛盾，核心矛盾在于科学只看重客观验证本身，排斥主观的情感与决断。"
        }
      ]
    },
    {
      "id": "n1-long-2011-12-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "人間はいかに生きるべきであるのかという、人間の主体的な行為の根本を考究して、人生観の知を形成するところに、哲学的な知の本質的な成立根拠があることになる。",
        "人間はいかに生きるべきであるのかという、人間の主体的な行為の根本を考究して、人生観の知を形成する"
      ],
      "options": [
        {
          "number": 1,
          "text": "人間の生き方の根本を扱えること",
          "translation": "能够处理人类生活方式的根本。",
          "correct": true,
          "error": null,
          "explanation": "完全贴合了最后一段中关于探究人类应该如何生活的主体行为根本的论述。"
        },
        {
          "number": 2,
          "text": "主体的に考える方法を示せること",
          "translation": "能够展示进行主体思考的方法。",
          "correct": false,
          "error": "not-stated",
          "explanation": "哲学的重点在于探究生存根本并形成人生观，文中并未强调它会去展示“如何思考的方法（考える方法）”。"
        },
        {
          "number": 3,
          "text": "科学的な世界を視野に入れられること",
          "translation": "能够把科学的世界纳入视野。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "科学的世界只是哲学审视的一部分，哲学的核心重要性还是落脚于构建“人生观和世界观的根本性知识”。"
        },
        {
          "number": 4,
          "text": "世界のあり方を客観的にとらえられること",
          "translation": "能够客观地把握世界存在的状态。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“客观（客観的）”是科学看待世界的方式，哲学探讨的是“主体性（主体的）”的生存行为。"
        }
      ]
    }
  ],
  "2011.7": [
    {
      "id": "n1-long-2011-7-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "言葉の風呂敷はいくらでも広げられるから、そうやっているうちに自分は世界的に考えている、そのなかに世界のすべてを包める、①そんな錯覚に捕らえられる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分は何でも知っていて世界を相手にできると思う。",
          "translation": "认为自己什么都知道，能够应对整个世界。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“认为自己可以包容世界的一切”的夸大错觉。"
        },
        {
          "number": 2,
          "text": "言葉でどんなことでも伝えられるような気になる。",
          "translation": "感觉用语言可以传达任何事情。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章虽然提到“语言的包袱可以无限展开”，但重点是人们借此产生的“能应对世界”的心态错觉，而不是“认为能用语言传达任何事”。"
        },
        {
          "number": 3,
          "text": "学問から得られることには限界がないと感じてしまう。",
          "translation": "感觉从学问中获得的东西是没有界限的。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "错觉的内容是高估了自己当前的认知和思考范围，而不是在探讨学问本身的界限。"
        },
        {
          "number": 4,
          "text": "人間が世界から学べることはいかに大きいことかと思う。",
          "translation": "认为人类从世界上能学到的东西是多么巨大。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "选项表达的是对人类学习潜力的感叹，属于正向的情感，与文中带有批判色彩的“错觉”不符。"
        }
      ]
    },
    {
      "id": "n1-long-2011-7-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "我が身ひとつの能力でできることを知り抜いている。学問をすること、書物に学ぶことは、ほんとうは②これと少しも変わりはない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分にできることを把握したうえで仕事をすること",
          "translation": "在把握自己能力所及之事的上开展工作。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了前文木匠和农夫“彻底了解自己能力所及之事”的脚踏实地的工作态度。"
        },
        {
          "number": 2,
          "text": "自分が世界のために何ができるかを考えて仕事に励むこと",
          "translation": "思考自己能为世界做什么并在工作上努力。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中明确指出农夫和木匠无法进行世界性的动作，选项中的“思考能为世界做什么”与原文逻辑相反。"
        },
        {
          "number": 3,
          "text": "できる限り多くの知識を得て自分の仕事に役立たせること",
          "translation": "尽可能多地获取知识以对自己的工作起到作用。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章的重点在于把握自身的边界，而不是尽可能多地获取大量知识。"
        },
        {
          "number": 4,
          "text": "人のためにできることは何かを考えたうえで仕事すること",
          "translation": "在思考能为他人做什么的基础上去工作。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中强调的是基于自身能力的踏实工作，并未提及“考虑能为他人做什么”。"
        }
      ]
    },
    {
      "id": "n1-long-2011-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "与えられたこの土を耕し、水を引き、苗を植える。（中略）学問や思想もまた、人の気質に植えられた苗のように育つしかないのではないか。",
        "与えられたこの土を耕し、水を引き、苗を植える。苗がみずから育つのを、毎日助ける。苗とともに、自分のなかで何かが育つのを感じながら。学問や思想もまた、人の気質に植えられた苗のように育つしかないのではないか。"
      ],
      "options": [
        {
          "number": 1,
          "text": "与えられた土を耕し、よい苗を選んで植える。",
          "translation": "耕耘被赋予的土壤，挑选好的幼苗种下。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中的重点在于“耕耘和培育幼苗”，并没有提到“挑选好苗（よい苗を選んで）”。"
        },
        {
          "number": 2,
          "text": "与えられた土を耕し、よい作物になるように苗を育てる。",
          "translation": "耕耘被赋予的土壤，培育幼苗使其成为好的作物。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一段中“耕耘土壤”以及“培育出终将结出的精神作物”的论述。"
        },
        {
          "number": 3,
          "text": "与えられた土壌を改善するために耕し続ける。",
          "translation": "为了改善被赋予的土壤而持续耕耘。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "选项只提到了改善土壤，遗漏了种植和培育幼苗（即做学问吸收知识）这一核心过程。"
        },
        {
          "number": 4,
          "text": "与えられた土壌を改善しながら世界標準の作物を育てる。",
          "translation": "一边改善被赋予的土壤，一边培育世界标准的作物。",
          "correct": false,
          "error": "opposite",
          "explanation": "第二段明确提到农夫“无法培育世界标准的稻子”，该选项与原文事实相反。"
        }
      ]
    },
    {
      "id": "n1-long-2011-7-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "子供が勉強をするのは、自分の気質という土壌から、やがて実る精神の作物を育てるためである。『教養",
        "子供が勉強をするのは、自分の気質という土壌から、やがて実る精神の作物を育てるためである。「教養」とは、元来この作物を指して言う"
      ],
      "options": [
        {
          "number": 1,
          "text": "新たな気質を見いだすことができる学問や思想",
          "translation": "能够发现新气质的学问或思想。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说气质是生来背负的土壤，需要去耕耘它，而不是去“发现新的气质（新たな気質を見いだす）”。"
        },
        {
          "number": 2,
          "text": "人それぞれの気質の中で育まれた学問や思想",
          "translation": "在每个人各自的气质中孕育出的学问或思想。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“从自己气质这块土壤中培育出精神的作物”这一核心观点。"
        },
        {
          "number": 3,
          "text": "生きていくうえで必要な専門的な知識",
          "translation": "生存所必需的专业知识。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有将教养定义为“生存所需的专业知识”。"
        },
        {
          "number": 4,
          "text": "書物や学問から得られた多くの知識",
          "translation": "从书本或学问中获得的大量知识。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章最后一句明确否定了教养是指“百事通们夸大其词的东西”，教养重在内化培育，而非获取许多知识的表面现象。"
        }
      ]
    }
  ],
  "2012.12": [
    {
      "id": "n1-long-2012-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "その『ふさわしさ",
        "その「ふさわしさ」は、大きく二つに分けられるだろう。一つは、働いて食べていけるために必要な能力、つまり農民なら農民としての、漁民ならば漁民としての、技能や知識。もう一つは、他の人びとのあいだでふさわしいふるまいができること――基本的なルールを守り、他の人びとと協力する態勢をとれること、自分に与えられた役割を果たし、その責任をとれること等々、つまり、他者との関係能力である。"
      ],
      "options": [
        {
          "number": 1,
          "text": "子供を養い、社会において責任あるふるまいができること",
          "translation": "能够抚养孩子，在社会上做出有责任感的行为。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到“抚养孩子（子供を養い）”是作为社会成员合适的存在方式。"
        },
        {
          "number": 2,
          "text": "自立するために必要な能力を身につけ、自由に生きていけること",
          "translation": "掌握自立所需的能力，能够自由地生活下去。",
          "correct": false,
          "error": "relation-error",
          "explanation": "选项中的“自由地生活下去（自由に生きていけること）”与文中强调的“与他人合作、遵守规则”的关系能力不符。"
        },
        {
          "number": 3,
          "text": "いつの時代にも通用する技能や知識を備え、他者に尊敬されること",
          "translation": "具备无论什么时代都通用的技能和知识，受到他人尊敬。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并没有提及要具备“无论什么时代都通用的技能（いつの時代にも通用する技能）”或是“受他人尊敬（他者に尊敬される）”。"
        },
        {
          "number": 4,
          "text": "技能や知識を身につけ、他者とのあいだでうまく生きていけること",
          "translation": "掌握技能和知识，在他人之间能够顺利地生活下去。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中提到的两大能力：工作所需的能力（技能知识）以及他者间的关系能力。"
        }
      ]
    },
    {
      "id": "n1-long-2012-12-02",
      "questionNumber": 2,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "そこには、社会のあり方と人間の生き方をどのようなものとして思い描くか、つまりは、異なった社会観・人間観がさまざまに入り込み、衝突してくるからだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "社会や人間について色々な考え方がありぶつかり合うから",
          "translation": "因为关于社会和人类有各种各样的看法，并且会互相碰撞。",
          "correct": true,
          "error": null,
          "explanation": "准确贴合了文中“不同的社会观和人类观发生冲突”的原因叙述。"
        },
        {
          "number": 2,
          "text": "教育者と一般社会の人びとが思い描く大人らしさは違うから",
          "translation": "因为教育者和一般社会人士构想的大人形象是不同的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章探讨的是各种不同的社会观冲突，并没有特指“教育者”与“一般社会人士”之间的差异。"
        },
        {
          "number": 3,
          "text": "子どもの主体性について一致した見解が得られないから",
          "translation": "因为在关于孩子主体性方面无法获得一致的见解。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "孩子的主体性（主体的）是下一段提出的某个具体分歧点，并不是第三段中概括出的导致“共有”困难的根本原因。"
        },
        {
          "number": 4,
          "text": "社会のあり方や人びとの価値観が変化してきているから",
          "translation": "因为社会的状态和人们的价值观正在发生变化。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文中强调的是不同观念同时存在的“冲突（衝突）”，而不是观念随着时间“正在发生变化（変化してきている）”。"
        }
      ]
    },
    {
      "id": "n1-long-2012-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "これもまた、社会の側が子どもたちに寄せる『期待",
        "これもまた、社会の側が子どもたちに寄せる「期待」の一種だと言わざるをえない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "大人の期待を実現しようとするという点では筆者の考えと同じだ。",
          "translation": "在试图实现大人的期望这一点上，与作者的想法是一样的。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了第五段中作者的看法：反对者的意见本质上也是在实现大人的“期待”。"
        },
        {
          "number": 2,
          "text": "大人の期待を押し付けようとすることは教育理念にそぐわないものだ。",
          "translation": "试图强加大人的期望，是不符合教育理念的。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者并不认为强加期待不符合教育理念，相反，作者在最后一段明确表示教育无法免于这种“期待/强制”。"
        },
        {
          "number": 3,
          "text": "子どもの主体的な判断力がみずから育つと考えることは思い込みでしかない。",
          "translation": "认为孩子的主体判断力会自动生长，只不过是一种臆断。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "虽然文中提到“如果放任不管，不可能自动变成具有主体性的人”，但作者对反对意见的核心看法是“这也是一种期待”，而非批判他们是“臆断（思い込み）”。"
        },
        {
          "number": 4,
          "text": "子どもの主体的な判断力を育てようとする点では筆者の考えと変わらない。",
          "translation": "在试图培养孩子的主体判断力这一点上，与作者的想法没有区别。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "作者在第一段就给出了自己的看法（培养符合社会成员的存在），并非是在“培养孩子主体判断力”上与反对者想法相同。"
        }
      ]
    },
    {
      "id": "n1-long-2012-12-04",
      "questionNumber": 4,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "いずれにせよ、教育というものは、（中略）ある種の強制から自由ではない、とぼくは考える。重要なことは、「この社会の一員、つまり大人として生きていくうえで何が必要な条件なのか",
        "いずれにせよ、教育というものは、社会（大人）の側が子供に寄せる期待、もっと強い言い方をすれば、ある種の強制から自由ではない、とぼくは考える。重要なことは、「この社会の一員、つまり大人として生きていくうえで何が必要な条件なのか」ということをきちんと見定め共有したうえでの強制であるかどうか、という点なのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "教育は社会の秩序に縛られない主体的な判断力を養うものだ。",
          "translation": "教育是培养不被社会秩序束缚的主体判断力的事物。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是第四段中反对者的意见，并非作者本人的主张。"
        },
        {
          "number": 2,
          "text": "教育は社会のあり方を批判的に検討できる能力を育てるものだ。",
          "translation": "教育是培养能够批判性探讨社会状态能力的事物。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“批判性探讨社会状态”是第五段中提及的近代人类观的一部分，同样不是概括作者教育观的核心结论。"
        },
        {
          "number": 3,
          "text": "教育は強制から逃れられず、その強制は教育理念の共有が前提となる。",
          "translation": "教育无法逃脱强制，而这种强制以教育理念的共有为前提。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一段中“教育无法免于强制”以及“这种强制建立在共有条件基础之上”的核心主旨。"
        },
        {
          "number": 4,
          "text": "教育は強制から自由ではなく、社会の有力な教育観を受け入れざるをえない。",
          "translation": "教育不是免于强制自由的，不得不接受社会上有力的教育观。",
          "correct": false,
          "error": "not-stated",
          "explanation": "前半句正确，但后半句“不得不接受有力的教育观（有力な教育観を受け入れざるをえない）”文中并未提及，文中的重点是“认清并共有生存条件”。"
        }
      ]
    }
  ],
  "2012.7": [
    {
      "id": "n1-long-2012-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "もし著者と読者のあいだで、その文章を媒体として記述されていること以上の事柄が発見できれば、読者にとって最高の満足感となる。言い換えると、読者が新しい知識を発見する喜びを支援する、あるいはそのきっかけとなる文章こそが、100点以上の評価となる。それは著者と読者の①シナジー効果"
      ],
      "options": [
        {
          "number": 1,
          "text": "記述されている内容から、求めていた以上のことが得られる。",
          "translation": "从记述的内容中，获得超出预期的事物。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了文中“发现超出描述内容之外的事物”的含义。"
        },
        {
          "number": 2,
          "text": "著者が伝えようとしている事柄を理解し、知識を増やす。",
          "translation": "理解作者想传达的事物，从而增加知识。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "仅停留在“理解作者想传达的事物”，未能体现出“获得超出原有内容（以上の事柄）”的协同效应本质。"
        },
        {
          "number": 3,
          "text": "読むことを通して事実を知り、不十分な点を自覚する。",
          "translation": "通过阅读了解事实，并自觉到不充分的缺点。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中并没有说让读者自觉到“不充分的缺点”。"
        },
        {
          "number": 4,
          "text": "文章から足りない知識を補い、疑問を解消する。",
          "translation": "从文章中补足欠缺的知识，并解答疑问。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "补足欠缺知识和解答疑问属于第一段提及的基础满足感（100分），而协同效应强调的是超越这个基础（100分以上）。"
        }
      ]
    },
    {
      "id": "n1-long-2012-7-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "いくら素晴らしい内容が書かれていても、読者が読む気のしない文章は目的を果たすことができない。学生のレポートで、②それが一番よくわかる。",
        "いくら素晴らしい内容が書かれていても、読者が読む気のしない文章は目的を果たすことができない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "読み手に満足感を与えるのは難しいということ",
          "translation": "给读者带来满足感是很困难的事。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然给读者带来满足感不易，但划线句针对的具体现象是“没有阅读兴致就不会被读完”。"
        },
        {
          "number": 2,
          "text": "素晴らしい内容でなければ読んでもらえないこと",
          "translation": "如果没有精彩的内容就不会被阅读。",
          "correct": false,
          "error": "opposite",
          "explanation": "与原文逻辑相反，第三段恰恰说明了“即使内容精彩，若无阅读兴致也不会被阅读”。"
        },
        {
          "number": 3,
          "text": "読む気がしないものは終わりまで読んでもらえないこと",
          "translation": "没有阅读兴致的东西是不会被读到最后的。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了前文“没有阅读兴致的文章无法达成让读者读到最后这一目的”的论述。"
        },
        {
          "number": 4,
          "text": "読んですべてを理解してもらうことは不可能だということ",
          "translation": "让人去阅读并理解全部是不可能的。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "第四段提到不可能全部阅读并理解，但这只是解释为什么“阅读兴致”很重要的背景，并非划线代词所指代的核心观点。"
        }
      ]
    },
    {
      "id": "n1-long-2012-7-03",
      "questionNumber": 3,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "真実に迫ろうという書き手の気持ちが読者に通じるのである。仕事の文章や理系の文章は、一般にはこういう行間の意味は不要と考えられているが、それでは無味乾燥の教科書文章となり、人の心に届かない。いくら人の③脳に届いても、心に届かないものは読む気がしなくなり…",
        "真実に迫ろうという書き手の気持ちが読者に通じるのである。仕事の文章や理系の文章は、一般にはこういう行間の意味は不要と考えられているが、それでは(注3)無味乾燥の教科書文章となり、人の心に届かない。いくら人の③脳に届いても、心に届かない"
      ],
      "options": [
        {
          "number": 1,
          "text": "技巧には感心しても、内容には共感できない。",
          "translation": "虽然佩服其技巧，但无法对内容产生共鸣。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章主张不卖弄技巧（技巧を弄さず），因此选项中的“佩服其技巧”与文意相悖。"
        },
        {
          "number": 2,
          "text": "行間の意味は理解できても、内容には感動できない。",
          "translation": "虽然能理解字里行间的意味，但无法被内容感动。",
          "correct": false,
          "error": "relation-error",
          "explanation": "如果理解了“字里行间的意味”，就说明已经触及了内心，选项描述与原文逻辑不符。"
        },
        {
          "number": 3,
          "text": "書き手の姿勢は理解できても、気迫までは感じられない。",
          "translation": "虽然能理解写作者的态度，却感受不到那种气魄。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "既然已经理解了“写作者的态度”，那么情感上就已经有所传达，并非“未能传达到内心”。"
        },
        {
          "number": 4,
          "text": "内容は理解できても、書き手の気持ちは伝わってこない。",
          "translation": "虽然能理解内容，但无法感受到写作者的感情。",
          "correct": true,
          "error": null,
          "explanation": "准确剖析了“大脑=理解内容”与“内心=接收写作者感情”之间的对应关系。"
        }
      ]
    },
    {
      "id": "n1-long-2012-7-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "むしろ、自分の思考過程を深く分析し、読者と一緒に考えようという姿勢を持つことが最も重要である。読者に与える完全な解答はなくても、解答に向かうひたむきな姿勢を示すことができれば良いのだということである。言い換えれば、ごまかしがなく、技巧を弄さず(注2)、大げさにいえば著者の人生観を示すことで、真実に迫ろうという書き手の気持ちが読者に通じるのである。",
        "むしろ、自分の思考過程を深く分析し、読者と一緒に考えようという姿勢を持つことが最も重要である。読者に与える完全な解答はなくても、解答に向かうひたむきな姿勢を示すことができれば良いのだということである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "読者の読む目的を分析し、読者に過不足のない情報を与えようとする。",
          "translation": "分析读者阅读的目的，试图给予读者恰到好处的信息。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "给予“恰到好处的信息（過不足のない情報）”只是第一段中提及的基础及格线（100点），并非作者最终提倡的进阶态度。"
        },
        {
          "number": 2,
          "text": "読者を意識しつつ、真摯に解答を求めてその気持ちを伝えようとする。",
          "translation": "一边意识到读者，一边真诚探求解答并试图传达那种感情。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一段中强调的“真诚探求解答并传达感情”的态度。"
        },
        {
          "number": 3,
          "text": "読者に満足感を与えるよう、妥協せずに完全な解答を提供しようとする。",
          "translation": "为了给读者带来满足感，试图毫不妥协地提供完整的解答。",
          "correct": false,
          "error": "relation-error",
          "explanation": "原文明确提到“即使没有给读者完整的解答也没关系（完全な解答はなくても…良い）”，选项与此相悖。"
        },
        {
          "number": 4,
          "text": "読者の読む気を最後まで誘うよう、読者の思考過程を深く分析しようとする。",
          "translation": "为了诱发读者阅读到最后，试图深入分析读者的思考过程。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说的是深入分析“自己”的思考过程（自分の思考過程を深く分析し），而非选项中说的分析“读者”的思考过程。"
        }
      ]
    }
  ],
  "2013.12": [
    {
      "id": "n1-long-2013-12-01",
      "questionNumber": 1,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "芸術、文化などの名で呼ばれるものはどうしても、現実の政治経済や社会生活に関わる事がらとは切り離されたものと考えられることが多く（中略）われわれはしばしば、『この世知辛い世の中で、そんなことをやっていられるというのはうらやましいことです",
        "音楽に限ったことではないが、芸術、文化などの名で呼ばれるものはどうしても、現実の政治経済や社会生活に関わる事がらとは切り離されたものと考えられることが多く、また、そうであるがゆえに価値を持つものとされてきたと言ったほうが、よいだろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "芸術や文化の価値が現実生活で高く評価されないから。",
          "translation": "因为艺术和文化的价值在现实生活中没有得到高度评价。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中并不是指责外界没有给出高评价，而是探讨外界对艺术“脱离现实”的固有印象带来的偏见。"
        },
        {
          "number": 2,
          "text": "芸術や文化と社会生活との関係が希薄になっていくから。",
          "translation": "因为艺术、文化与社会生活之间的关系变得日益淡薄。",
          "correct": false,
          "error": "relation-error",
          "explanation": "关系日益淡薄并不是作者心境复杂的原因，核心原因在于“外界普遍这样误认为”。"
        },
        {
          "number": 3,
          "text": "芸術や文化の研究が現実生活に役立たないと思われているから。",
          "translation": "因为人们认为对艺术和文化的研究对现实生活没有用处。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "这仅仅是外界印象带来的一个结果，不如选项4直接点出的“被认为与社会生活脱节（懸け離れている）”契合原文核心定调。"
        },
        {
          "number": 4,
          "text": "芸術や文化が社会生活とは懸け離れていると思われているから。",
          "translation": "因为人们认为艺术和文化与社会生活是脱节的。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“被认为与社会生活相关的事情是分离开来的（切り離されたものと考えられる）”的论述。"
        }
      ]
    },
    {
      "id": "n1-long-2013-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "政治や社会の話と切り離して文化が論じられるなどということが幻想である、というより、そのような幻想自体、すでに一定の政治的社会的イデオロギーの刻印を帯びたものにほかならなかったということが明らかにされてきた。いまや、音楽研究者の中にも、政治や社会から切り離された純粋な『音楽そのもの",
        "政治や社会の話と切り離して文化が論じられるなどということが幻想である、というより、そのような幻想自体、すでに一定の政治的社会的イデオロギーの刻印を帯びた(注4)ものにほかならなかったということが明らかにされてきた。いまや、音楽研究者の中にも、政治や社会から切り離された純粋な「音楽そのもの」がどこかに宙(注5)に浮いたような形で存在しているなどと素朴に信じているような人は、誰もいないだろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "社会の状況が悪化したときに最も必要とされる。",
          "translation": "在社会状况恶化时是最被需要的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这属于第一段提到的外界可能赋予艺术的一项意义（如作为绿洲），并非近年研究者的核心学术认知。"
        },
        {
          "number": 2,
          "text": "ほかの芸術や文化と同等には論じられない。",
          "translation": "不能与其他艺术和文化同等讨论。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未将音乐与其他艺术文化进行高低比较。"
        },
        {
          "number": 3,
          "text": "現実生活と切り離した純粋なものである。",
          "translation": "是与现实生活相分离的纯粹的事物。",
          "correct": false,
          "error": "opposite",
          "explanation": "这正是近年研究者所不再相信的“幻想（幻想）”，与原文意思截然相反。"
        },
        {
          "number": 4,
          "text": "政治や社会に深く関わっている。",
          "translation": "与政治和社会有着很深的关联。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了第二段中“没有研究者相信音乐脱离了政治社会”的反面论述，即认为其深切相关。"
        }
      ]
    },
    {
      "id": "n1-long-2013-12-03",
      "questionNumber": 3,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "音楽研究の世界の外側にいる人のほうが、音楽を『純粋",
        "音楽研究の世界の外側にいる人のほうが、音楽を「純粋」な形で囲い込みたがっているように思われるのは②皮肉なことだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "音楽研究者以外の人のほうが、音楽について、最先端の議論を従っていること",
          "translation": "音乐研究者以外的人，在关于音乐的探讨上反而遵循着最前沿的讨论。",
          "correct": false,
          "error": "not-stated",
          "explanation": "第三段后文明确提到外行人用的是“30年前古典的数据和图式”，并未遵循最前沿的讨论。"
        },
        {
          "number": 2,
          "text": "音楽研究者以外の人のほうが、音楽を特別なものとしたがっていること",
          "translation": "音乐研究者以外的人，反而更想把音乐视作一种特殊的事物。",
          "correct": true,
          "error": null,
          "explanation": "贴合了文中外行人更想把音乐圈在一种脱离社会的纯粹（即特殊）形式中的论述。"
        },
        {
          "number": 3,
          "text": "音楽研究者以外の人のほうが、音楽を純粋に楽しんでいること",
          "translation": "音乐研究者以外的人，反而能更加纯粹地享受音乐。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中讨论的是外行人对音乐学术性质的认知态度，而非他们在不在“纯粹地享受”音乐。"
        },
        {
          "number": 4,
          "text": "音楽研究者以外の人のほうが、音楽をよくわかっていること",
          "translation": "音乐研究者以外的人，反而更加了解音乐。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "外行人停留在旧观念中，并非比研究者更了解音乐。"
        }
      ]
    },
    {
      "id": "n1-long-2013-12-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "われわれの発信が不足しているために、その面白さを十分に伝え切れていない。そんな気がするのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "音楽の持つ普遍的な価値を社会によりわかりやすく伝えることが課題だ。",
          "translation": "以通俗易懂的方式向社会传达音乐具有的普遍价值是一大课题。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者强调的是传达近年音乐研究发生改变后的“新趣味”，而非传达音乐一直以来具有的“普遍价值”。"
        },
        {
          "number": 2,
          "text": "音楽研究の成果をこれまで以上に発信することが求められている。",
          "translation": "要求他们比以往更多地去发布、传递音乐研究的成果。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中结尾“由于我们的信息输出不足（発信が不足しているために）没能充分传达”的反向诉求。"
        },
        {
          "number": 3,
          "text": "最先端の音楽研究について議論していくことが重要である。",
          "translation": "就最前沿的音乐研究进行讨论是很重要的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者认为研究者内部其实已经在进行新进展了，问题在于没有向外传达，而不是在于缺少内部讨论。"
        },
        {
          "number": 4,
          "text": "音楽に対する意識を変えて新たな研究に取り組むべきだ。",
          "translation": "应当改变对音乐的意识，致力于新的研究。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "第二、三段提到研究者的意识“已经发生了改变（意識も変わり）”，他们需要做的是发声，而非刚刚要去转变观念重新研究。"
        }
      ]
    }
  ],
  "2013.7": [
    {
      "id": "n1-long-2013-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "Aなる害虫を除去する目的で、ある薬剤が使用されたとしよう。その目的はたっせられて、Bなる作物が虫害をまぬかれた。しかしその結果、おなじくAによって食い殺されていたCやDの種属が、抑制因子をとりのけられて爆発的に増加し、あらたな害虫となってBにおそいかかる。",
        "Aなる(注2)害虫を除去する目的で、ある薬剤が使用されたとしよう。その目的はたっせられて、Bなる作物が虫害をまぬかれた。しかしその結果、おなじくAによって食い殺されていたCやDの種属が、抑制因子をとりのけられて爆発的に増加し、あらたな害虫となってBにおそいかかる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "BをおそうAを除去した結果、あらたな強いAが発生してCやDをおそうようになる。",
          "translation": "除去了袭击B的A，结果产生了新的强大的A，开始袭击C和D。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文明明写着A被除去了，并没有说会产生“新的强大的A”。"
        },
        {
          "number": 2,
          "text": "BをおそうAを除去した結果、Aに食い殺されていたCやDがBをおそうようになる。",
          "translation": "除去了袭击B的A，结果原本被A吃掉的C和D开始袭击B。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了文中“除去A”导致“原本被A吃掉的C和D失去天敌而反扑B”的连锁反应逻辑。"
        },
        {
          "number": 3,
          "text": "BをおそうCやDを除去した結果、あらたなAが増加してBをおそうようになる。",
          "translation": "除去了袭击B的C和D，结果新的A增加了，开始袭击B。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中被除去的是A，而不是C和D。"
        },
        {
          "number": 4,
          "text": "BをおそうCやDを除去した結果、CやDに食い殺されていたAがBをおそうようになる。",
          "translation": "除去了袭击B的C和D，结果原本被C和D吃掉的A开始袭击B。",
          "correct": false,
          "error": "relation-error",
          "explanation": "原文中吃与被吃的关系是“A吃C和D”，选项表述反了。"
        }
      ]
    },
    {
      "id": "n1-long-2013-7-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "人間は文字どおりなりふりかまわず、ひたすらそれへの依存度を増し、つまり量質ともに強大化する方向へつっぱしった。なぜそのようにしなければならなかったのか。最近の日本では、②このことをもいわゆる公害の一種にふくめ…",
        "ひたすらそれへの依存度を増し、つまり量質ともに強大化する方向へつっぱしった。"
      ],
      "options": [
        {
          "number": 1,
          "text": "化学薬品の開発",
          "translation": "化学药品的开发",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“化学药品的开发”是前文背景，并不是“このこと”紧接指代的“依赖度增加、暴走”的具体行为。"
        },
        {
          "number": 2,
          "text": "化学薬品の有用性",
          "translation": "化学药品的有用性",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "有用性并不是被当作公害（公害の一種にふくめ）的指责焦点。"
        },
        {
          "number": 3,
          "text": "化学薬品の有害性",
          "translation": "化学药品的有害性",
          "correct": false,
          "error": "relation-error",
          "explanation": "虽然化学药品有害，但指代词在语法逻辑上指代的是前一句的具体动作，即“量与质的强大化”，而非笼统的有害性。"
        },
        {
          "number": 4,
          "text": "化学薬品の量と質の強大化",
          "translation": "化学药品的数量与质量的强大化",
          "correct": true,
          "error": null,
          "explanation": "准确对应了前一句中明确提到的“量质同时强大化（量質ともに強大化する）”。"
        }
      ]
    },
    {
      "id": "n1-long-2013-7-03",
      "questionNumber": 3,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "すでに③最初の出発点からして、人間の文明それ自体のなかに、かくなるざるをえない必然性がやどされていた。人間が今日のごとく高度文明をきずきえたのは、採集経済から脱して、牧畜さらに農耕という生産手段を発明したからである。それは換言すると、ある特定の土地を、牧場あるいは田畑として使用することである。",
        "人間が今日のごとく高度文明をきずきえたのは、採集経済から脱して、牧畜さらに農耕という生産手段を発明したからである。それは換言すると、ある特定の土地を、牧場あるいは田畑として使用することである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人間が採集活動によって生活を営みはじめたころ",
          "translation": "人类开始通过采集活动来营生的时候。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说是“摆脱了采集经济（採集経済から脱して）”，因此采集经济时期并不是最初的出发点。"
        },
        {
          "number": 2,
          "text": "人間が土地を牧場や田畑として使用しはじめたころ",
          "translation": "人类开始把土地作为牧场或田地使用的时候。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第三段中指出的“发明畜牧农耕（将土地作为牧场田地使用）”这一文明起源的时刻。"
        },
        {
          "number": 3,
          "text": "企業に資本が集まり、産業が発展しはじめたころ",
          "translation": "企业聚集起资本，产业开始发展的时候。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章第二段明确指出“要归结于一个企业的责任，悲剧根源太深了”，因此资本和产业发展并非真正的“最初”出发点。"
        },
        {
          "number": 4,
          "text": "文明が高度化し、工業が盛んになりはじめたころ",
          "translation": "文明走向高度化，工业开始繁盛的时候。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章末尾指出公害的起源“并不是伴随工业一起发生的（工業とともにおきたのではなく）”。"
        }
      ]
    },
    {
      "id": "n1-long-2013-7-04",
      "questionNumber": 4,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "ほんらいならばそこの土地には、家畜・作物いがいの各種生物が、当然のこととして棲息していた。人間はそれらの生物群にたいし、害獣・害鳥・害虫あるいは雑草といった汚名を一方的にかぶせ、強引に排除する手段にでた。こうして自然界のバランスがくずれた。",
        "ほんらいならばそこの土地には、家畜・作物いがいの各種生物が、当然のこととして棲息(注7)していた。人間はそれらの生物群にたいし、害獣・害鳥・害虫あるいは雑草といった汚名を一方的にかぶせ、強引に排除する手段にでた。こうして自然界のバランスがくずれた。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人間が生産手段を発明したこと",
          "translation": "人类发明了生产手段。",
          "correct": false,
          "error": "relation-error",
          "explanation": "发明生产手段是建立高度文明的原因，真正导致平衡崩溃的直接原因是对其他生物的“强行排除”。"
        },
        {
          "number": 2,
          "text": "人間が薬剤開発のために各種生物群を利用してきたこと",
          "translation": "人类为了开发药剂而利用各种生物群。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中只提到了使用药剂来除去害虫，并未说“为了开发药剂而利用生物”。"
        },
        {
          "number": 3,
          "text": "人間が人間に利用価値のない生物群を排除してきたこと",
          "translation": "人类排除了对人类没有利用价值的生物群。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“将家畜和作物以外的生物排除（排除する手段にでた）”导致平衡崩溃的论述。"
        },
        {
          "number": 4,
          "text": "人間が人間いがいの生物群の存在を無視してきたこと",
          "translation": "人类无视了人类以外生物群的存在。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "人类并没有“无视（無視）”其他生物的存在，反而是给它们扣上恶名并主动去“排除”了它们。"
        }
      ]
    }
  ],
  "2014.12": [
    {
      "id": "n1-long-2014-12-01",
      "questionNumber": 1,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "子供は描きたがる。形、色にして確かめる。だが問題は自分のなかにあるものを外に突き出す、投げ出すという行為自体であって、決して出来上がりの効果ではない。だから子供は描きおわってしまったものはふり向きもしない。",
        "だから子供は描きたがる。形、色にして確かめる。だが問題は自分のなかにあるものを外に突き出す、投げ出すという行為自体であって、決して出来上がりの効果ではない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "いつでも描きたいものが描けるから。",
          "translation": "因为随时都能画想画的东西。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到是因为“随时都能画”才不在乎的。"
        },
        {
          "number": 2,
          "text": "描きたいものが描けて納得したから。",
          "translation": "因为画出了想画的东西并感到信服了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "重点在于“向外抛出的行为本身”，而不是“画出了想画的东西并感到信服”。"
        },
        {
          "number": 3,
          "text": "描きたいという欲求が満たされたから。",
          "translation": "因为想要画画的欲望得到了满足。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中指出的画画在于“行为本身”，行为完成了，画画的欲望也就满足了，因此不再关心画作本身。"
        },
        {
          "number": 4,
          "text": "最後まで描けたことに満足しているから。",
          "translation": "因为对画到了最后感到满足。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中强调的是“过程（行为）”而非“画到了最后”的完成度满足感。"
        }
      ]
    },
    {
      "id": "n1-long-2014-12-02",
      "questionNumber": 2,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "大人のは見せる芸であり、商品である。はじめから観賞すること、してもらうことを目的とし、結果を予測しながら作り上げたものなのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "大人ほどの表現力や情熱をもって描かれていないから。",
          "translation": "因为没有带着像大人那样的表现力和热情来画。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "第一段提到孩子“灵魂的冲动也是很强烈的”，并非没有热情。"
        },
        {
          "number": 2,
          "text": "観賞されることを目的として描かれていないから。",
          "translation": "因为不是以被观赏为目的画出来的。",
          "correct": true,
          "error": null,
          "explanation": "通过反推大人作品“从一开始就以供人观赏为目的”这一特征得出，孩子的画正是因为没有这个目的所以不是作品。"
        },
        {
          "number": 3,
          "text": "評価に値する出来上がりになっていないから。",
          "translation": "因为并没有完成到值得评价的程度。",
          "correct": false,
          "error": "relation-error",
          "explanation": "这是大人的评价标准，并非判断是否是作品的本质原因。"
        },
        {
          "number": 4,
          "text": "描いた本人が価値を認めていないから。",
          "translation": "因为画画的本人没有认可其价值。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "孩子本人不在乎价值是因为欲望已在行为中满足，而不是因为“不认可价值”才导致它不是作品。"
        }
      ]
    },
    {
      "id": "n1-long-2014-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "評判をとり、買手がついてくれなければ食ってゆけないし、社会が許さない。生活はきびしいのだ。無償の行為というわけにはいかない。明らかに『作品",
        "評判をとり、買手がついてくれなければ食ってゆけないし、社会が許さない。生活はきびしいのだ。無償の行為というわけにはいかない。明らかに「作品」つまり「商品」を作っているのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "かんぺきな出来ばえを求めている。",
          "translation": "在追求完美的完成度。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中提到了他们神经作用于“结果”，但核心是为了卖钱，而非单纯追求完美。"
        },
        {
          "number": 2,
          "text": "いつも同じような描き方をしている。",
          "translation": "总是用同一种画法画画。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中提到他们能“计算效果”，但未说他们“总是用同一种画法”。"
        },
        {
          "number": 3,
          "text": "買手の要望どおりに描いている。",
          "translation": "完全按照买家的要求来画。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "他们是“配合着观众的反馈来推进工作”，并不等同于“完全按照买家的要求画（定制）”。"
        },
        {
          "number": 4,
          "text": "買ってもらえるように描いている。",
          "translation": "为了能卖出去而画画。",
          "correct": true,
          "error": null,
          "explanation": "贴合了文中“如果没有买家就活不下去”“制作商品”的论述逻辑。"
        }
      ]
    },
    {
      "id": "n1-long-2014-12-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "大人の作品だって、本質的には生命力こそ肝要なのだ。自分の存在を純粋に外に投げ出す、突き出すアクションの質、強さによって、猛烈な魅力になる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人を引きつける魅力的なもの",
          "translation": "吸引人的有魅力的事物。",
          "correct": false,
          "error": "relation-error",
          "explanation": "魅力是生命力抛出后的结果，而艺术的本质驱动力在于抛出存在的这个动作。"
        },
        {
          "number": 2,
          "text": "情熱に突き動かされて作るもの",
          "translation": "被热情驱使着去创作的事物。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中强调的“生命力才是关键”、“灵魂的冲动”、“纯粹地向外抛出”的艺术本质。"
        },
        {
          "number": 3,
          "text": "他人には理解できないようなもの",
          "translation": "他人无法理解的事物。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者只是说不想做让人易懂的“画”，并尽可能无视他人评价，并非刻意追求“他人无法理解”。"
        },
        {
          "number": 4,
          "text": "人間の生命力を巧みに表現するもの",
          "translation": "巧妙地表现人类生命力的事物。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“巧妙地（巧みに）”带有技巧和算计的意味，与作者主张的“纯粹地向外抛出（純粋に外に投げ出す）”相悖。"
        }
      ]
    }
  ],
  "2014.7": [
    {
      "id": "n1-long-2014-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "自然の色彩が非常にやわらかいことに毎回あらためて気づかされて、そうして、①帰ってきたなあと実感する。",
        "①帰ってきたなあと実感する"
      ],
      "options": [
        {
          "number": 1,
          "text": "都心に向かう列車のなかで静けさを感じたとき",
          "translation": "在开往市中心的列车中感受到安静的时候。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“感到安静（静けさを感じた）”是作者对列车氛围的描述，但并没有直接引出“回来了”的实感。"
        },
        {
          "number": 2,
          "text": "日本の自然の色合いをあらためて意識したとき",
          "translation": "再次意识到日本自然色彩的时候。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“再次意识到自然色彩非常柔和（自然の色彩が非常にやわらかいことに毎回あらためて気づかされて）”的描述。"
        },
        {
          "number": 3,
          "text": "日本には緑が多いことにあらためて気づいたとき",
          "translation": "再次意识到日本有很多绿色的时候。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中提到的是自然“色彩的柔和”，而不是发现“绿色多（緑が多い）”。"
        },
        {
          "number": 4,
          "text": "四季の変化が感じられるような色に気づいたとき",
          "translation": "注意到能让人感受到四季变化色彩的时候。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然提到了冬日和初夏，但作者注意到的核心是其色彩的“柔和（やわらかい）”，而不是四季的变化本身。"
        }
      ]
    },
    {
      "id": "n1-long-2014-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "見慣れた田んぼとそっくりな光景を見ることもある。葉の落ちた木々が針のような枝を空に突き刺す景色に見とれることもある。（中略）その色彩について特別何も思わない。 帰ってきて、車窓から景色をみて思うのだ。この国の色彩は本当にやわらかい、と。",
        "アジアにもヨーロッパにもそれ以外のどこにでも、豊かだったりそうではなかったりする自然がある。田舎を旅すればむせかえるような(注2)緑のなかを歩くことになる。見慣れた田んぼとそっくりな光景を見ることもある。葉の落ちた木々が針のような枝を空に突き刺す景色に見とれることもある。緑の多い町だとか、水墨画(注3)みたいだとか、その程度の感想は抱くが、その色彩について特別何も思わない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "色彩の多様さに驚くことはあるが、特別よいとは感じない。",
          "translation": "虽然有时会惊讶于色彩的多样性，但并不觉得特别好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者在国外时并没有“惊讶于色彩的多样性（色彩の多様さに驚く）”。"
        },
        {
          "number": 2,
          "text": "色彩が強烈だと思うことはあるが、見とれることはあまりない。",
          "translation": "虽然有时会觉得色彩很强烈，但很少会看入迷。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中明确提到“看景色看得入迷（見とれることもある）”，选项表述相反。"
        },
        {
          "number": 3,
          "text": "景色にひかれることはあるが、色彩に特別な印象は持たない。",
          "translation": "虽然有时会被景色吸引，但对色彩没有特别的印象。",
          "correct": true,
          "error": null,
          "explanation": "贴合了文中“看景色入迷（景色にひかれる）”但“对色彩没有特别想法（色彩について特別何も思わない）”的论述。"
        },
        {
          "number": 4,
          "text": "懐かしい景色だと思うことはあるが、色彩がやわらかいとは思わない。",
          "translation": "虽然有时会觉得景色很怀念，但不认为其色彩柔和。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "在国外时作者并不觉得色彩柔和，直到回国才觉得本国色彩柔和。"
        }
      ]
    },
    {
      "id": "n1-long-2014-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "都心の、空の狭い、ごたついた(注5)風景をきれいだと思ったことは一度もないけれど、でも、帰ってくると毎回近しく(注6)思う。好きとか嫌いではなくて、私に含まれているかのような近しさを覚えるのだ。",
        "窓の外に緑が少なくなって、次第に家やビルが増えてくる。都心が近づくにつれ、どんどん建物や看板が増えてくる。さっきより「ああ、帰ってきた」がもう少しふくらむ。都心の、空の狭い、ごたついた(注5)風景をきれいだと思ったことは一度もないけれど、でも、帰ってくると毎回近しく(注6)思う。好きとか嫌いではなくて、私に含まれているかのような近しさを覚えるのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の一部であるような親しみを感じる。",
          "translation": "感到一种仿佛是自己一部分般的亲近感。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“仿佛包含在我自身之中（私に含まれているかのような）”的亲近感描述。"
        },
        {
          "number": 2,
          "text": "自分を受け入れてくれる優しさを感じる。",
          "translation": "感受到了能够接纳自己的温柔。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未提到城市“接纳自己的温柔（受け入れてくれる優しさ）”。"
        },
        {
          "number": 3,
          "text": "自分の好みに合っている場所だと感じる。",
          "translation": "觉得这是一个符合自己喜好的地方。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者明确说了“我一次都不觉得漂亮（きれいだと思ったことは一度もない）”且“无关乎喜欢讨厌（好きとか嫌いではなくて）”，因此并非符合喜好。"
        },
        {
          "number": 4,
          "text": "自分のふだんの生活に戻ったように感じる。",
          "translation": "感觉像是回到了自己平时的生活。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "这仅仅是对表象的陈述，没有抓住文中“包含在我自身之中”那层深刻的情感。"
        }
      ]
    },
    {
      "id": "n1-long-2014-7-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "旅から帰って見る景色とぜんぜん違う。退屈な、見るべきところもない田園風景が広がっているのである。そうか、旅のあとじゃないと、ただの日常の光景なのか。（中略）旅というのは、空港に着いたときに終わるのではなくて、周囲の景色が、わざわざ目を凝らすこともない日常に戻ったときに終わるのだと知った。",
        "旅から帰って見る景色とぜんぜん違う。退屈な、見るべきところもない田園風景が広がっているのである。そうか、旅のあとじゃないと、ただの日常の光景なのか。"
      ],
      "options": [
        {
          "number": 1,
          "text": "旅は、慣れ親しんだ景色のよさを再確認させてくれる。",
          "translation": "旅行能让人再次确认早已习惯的景色的美好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者在日常中看到的是“无聊的、毫无看点的田园风景（退屈な、見るべきところもない）”，并非重新确认景色的“美好（よさ）”。"
        },
        {
          "number": 2,
          "text": "旅は、見慣れた風景に新しい何かを発見することを可能にする。",
          "translation": "旅行使得在看惯的风景中发现新的事物成为可能。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "旅行带来的非日常感会让人用不同的眼光看世界，但这会随着回到日常而结束，文章的落脚点是“旅行何时结束”，而非长久的“发现新事物”。"
        },
        {
          "number": 3,
          "text": "旅は、旅先と慣れ親しんだ景色の違いに気づいたとき終わる。",
          "translation": "旅行，在察觉到旅行地与早已习惯的景色的不同时结束。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "当察觉到不同的时候，旅行的感觉还在继续（也就是刚下飞机那段时间）。"
        },
        {
          "number": 4,
          "text": "旅は、見慣れた風景が再びありふれた日常になるまで続いている。",
          "translation": "旅行，一直持续到看惯的风景再次变为司空见惯的日常时。",
          "correct": true,
          "error": null,
          "explanation": "贴合了结尾关于“当周围景色回到不再需要凝视的日常时，旅行才算结束”的结论。"
        }
      ]
    }
  ],
  "2015.12": [
    {
      "id": "n1-long-2015-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "これは、物理や化学といった自然科学の世界で新理論を展開する場合に、その論拠、論理を他の学者にも検証可能な形で提示しなければならないことと同様です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "研究の価値は新説を示すことで認められること",
          "translation": "研究的价值是通过展示新学说来被认可的。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中指出提出新理论时需要依据，但并未说研究的价值是通过展示新说来被“认可”的。"
        },
        {
          "number": 2,
          "text": "新説の展開には、学者同士の相互批判が欠かせないこと",
          "translation": "在展开新学说时，学者之间的相互批判是不可或缺的。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中提到历史学者的历史观是可以“相互批判”的，但并未说这是自然科学在展开新说时不可或缺的共通点，共通点落在“验证可能”上。"
        },
        {
          "number": 3,
          "text": "新説の根拠を検証可能な形で示すのは容易ではないこと",
          "translation": "以可验证的形式展示新学说的根据并不容易。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未探讨展示根据是否“容易（容易ではない）”。"
        },
        {
          "number": 4,
          "text": "他の学者が検証できるように、新説の根拠を示す必要があること",
          "translation": "为了让其他学者能够验证，有必要展示新学说的根据。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“必须以其他学者也能验证的形式出示论据”的论述。"
        }
      ]
    },
    {
      "id": "n1-long-2015-12-02",
      "questionNumber": 2,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "天文学の先端では、彗星などの発見よりは、大きな電波望遠鏡を使って、（中略）宇宙の大きさを推測したり、宇宙の成り立ちを究明したりしているのです",
        "「天文学の先端では、彗星などの発見よりは、大きな電波望遠鏡を使って、ある一定の方向から地球に届く宇宙からの電波情報を継続的に受け取り、その数値の分析によって宇宙の大きさを推測したり、宇宙の成り立ちを究明したりしているのです」"
      ],
      "options": [
        {
          "number": 1,
          "text": "専門研究者は、新天体の発見には価値がないと考えているから",
          "translation": "因为专门研究者认为发现新天体没有价值。",
          "correct": false,
          "error": "not-stated",
          "explanation": "天文学老师只说比起发现彗星他们更关注探明宇宙起源，并未说发现新天体“没有价值（価値がない）”。"
        },
        {
          "number": 2,
          "text": "専門研究者は、新天体の発見より宇宙そのものの探究を目的としているから",
          "translation": "因为专门研究者比起发现新天体，更以探究宇宙本身为目的。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了文中“比起发现彗星等，更是……推测宇宙大小、探明宇宙起源”的研究目的转移。"
        },
        {
          "number": 3,
          "text": "専門研究者は、アマチュアの天文家との役割分担を意識しているから",
          "translation": "因为专门研究者意识到了与业余天文家之间的角色分工。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未提到专门研究者“意识到了角色分工（役割分担を意識している）”。"
        },
        {
          "number": 4,
          "text": "専門研究者は、アマチュアの天文家の発見を集約して宇宙全体を研究しているから",
          "translation": "因为专门研究者汇集了业余天文家的发现来研究宇宙全体。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中并没有说专家会去“汇集（集約して）”业余天文家的发现来进行研究。"
        }
      ]
    },
    {
      "id": "n1-long-2015-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "歴史小説では、誰もがよく知っている人物や事件をとりあげて小説にすることが多いようですが",
        "歴史小説では、誰もがよく知っている人物や事件をとりあげて小説にすることが多いようです"
      ],
      "options": [
        {
          "number": 1,
          "text": "制度的な政治システムを題材としている。",
          "translation": "以制度性的政治系统为题材。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "以“制度性的政治系统”为题材是历史研究（历史学者）的主流，并非历史小说家。"
        },
        {
          "number": 2,
          "text": "誰も知らない史実を面白く物語にしている。",
          "translation": "将谁都不知道的史实写成有趣的物语。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“谁都不知道的史实”是历史学者的研究入口，历史小说家写的是“谁都熟知”的内容。"
        },
        {
          "number": 3,
          "text": "有名な人物や出来事などを題材としている。",
          "translation": "以有名的人物或事件等为题材。",
          "correct": true,
          "error": null,
          "explanation": "贴合了文中“选取谁都熟知的人物或事件（誰もがよく知っている人物や事件をとりあげて）”的描述。"
        },
        {
          "number": 4,
          "text": "歴史学者が気づかないような視点で書いている。",
          "translation": "以历史学者注意不到的视角在书写。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中并没有比较历史小说家的视角是否是历史学者注意不到的。"
        }
      ]
    },
    {
      "id": "n1-long-2015-12-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "一見地味な事例研究を積み重ねることによって、それまでの通説を修正する新しい視点が見いだされていくことを、研究者は知っているのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "通説を覆すために、新しい史実を発見しようとしている。",
          "translation": "为了推翻通说，试图去发现新的史实。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章最后一句明确指出，试图“一口气推翻通说（一足飛びに通説を覆そうとして）”的做法是绝对禁止的。"
        },
        {
          "number": 2,
          "text": "通説に惑わされず、特定の視点から歴史をとらえようとしている。",
          "translation": "不被通说迷惑，试图从特定视角去把握历史。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章最后一句警告，从“特定视角（特定の視点）”去解读史料的做法是绝对禁止的，这与选项表述相反。"
        },
        {
          "number": 3,
          "text": "個々の事例研究を踏まえて、史実を明らかにしようとしている。",
          "translation": "立足于一个个案例研究，试图探明史实。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一段中“通过积累乍看不起眼的案例研究（事例研究を積み重ねる）”来探明史实的观点。"
        },
        {
          "number": 4,
          "text": "知られていない史実をとりあげ、人々の歴史認識を改めようとしている。",
          "translation": "选取不为人知的史实，试图改变人们的历史认知。",
          "correct": false,
          "error": "relation-error",
          "explanation": "虽然历史学者从不知名史实切入，但他们的首要目的是“探明史实”，而非去“改变人们的历史认知（人々の歴史認識を改めようとしている）”，且第九段提到他们提出能让大众惊讶的新说属于“罕见之事（稀なこと）”。"
        }
      ]
    }
  ],
  "2015.7": [
    {
      "id": "n1-long-2015-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "作曲するときの私は、単に、感覚に頼って、直観的に『これが好い",
        "これがよい"
      ],
      "options": [
        {
          "number": 1,
          "text": "曲全体の出来上がりをイメージしながら作った。",
          "translation": "一边想象整首曲子完成后的样子一边作出来的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中明确说作者并不了解自己的作曲，也没有系统的方法论，并非“一边想象整体完成的样子（全体の出来上がりをイメージしながら）”。"
        },
        {
          "number": 2,
          "text": "曲の終わりを意識して納得できる音を探しながら作った。",
          "translation": "意识到曲子的结尾，一边寻找能让人信服的音符一边作出来的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者是凭感觉寻找音符，最终感觉到结尾才算完成，而不是一开始就“意识到结尾（終わりを意識して）”去找。"
        },
        {
          "number": 3,
          "text": "美しいとされている音の連なりを組み合わせて作った。",
          "translation": "组合被认为是优美的音符串作出来的。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中只说是找自己直觉认为好的音符串，并未提及“被认为是优美的（美しいとされている）”。"
        },
        {
          "number": 4,
          "text": "音の連なりを理屈ではなく感覚的に選んで作った。",
          "translation": "并非凭借道理，而是凭借感觉选择音符串作出来的。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“依靠感觉（感覚に頼って）”以及“判断的根据无法解释（判断の根拠は説明できない）”等放弃条理、纯凭感觉的做法。"
        }
      ]
    },
    {
      "id": "n1-long-2015-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "そもそも、どうやって何を作るかということを全く知らずに物を作ることは、不可能である。（中略）同様に、作曲の場合にも、素材である音と、その音の構成の仕方について知らなければ、（中略）曲を作ることなどできない。",
        "そもそも、どうやって何を作るかということを全く知らずに物を作ることは、不可能である。例えば、もし、ガラスのことも、そして、花瓶というものがどのようなものかも知らなければ、ガラスの花瓶を作ることはできない。同様に、作曲の場合にも、素材である音と、その音の構成の仕方について知らなければ、そしてさらに、音楽というものがどのようなものなのかを知らなければ、曲を作ることなどできない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "音楽の素材として適している音があること",
          "translation": "存在适合作为音乐素材的音符。",
          "correct": false,
          "error": "opposite",
          "explanation": "举例的重点并不是探讨哪些音“适合作为素材（適している音がある）”，而是强调必须拥有“关于素材的知识”。"
        },
        {
          "number": 2,
          "text": "作曲家はどのような仕事をしなければならないかということ",
          "translation": "作曲家必须进行什么样的工作。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "论证的核心在于创作前的“前提知识”，并非解释作曲家“必须进行什么样的工作（どのような仕事をしなければならないか）”。"
        },
        {
          "number": 3,
          "text": "作曲家は何の知識もなく曲を作ることはできないこと",
          "translation": "作曲家如果没有任何知识是无法作曲的。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“如果不了解……就无法作曲”的因果关系，说明基础知识是不可或缺的。"
        },
        {
          "number": 4,
          "text": "自身の作曲について知らなければいい曲はできないこと",
          "translation": "如果不了解自己的作曲就作不出好曲子。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者在第一段已经说过“对自己作曲也不是很清楚”，这里的知识是指对“音乐本身”的知识，而非对“自身作曲（自身の作曲）”的了解。"
        }
      ]
    },
    {
      "id": "n1-long-2015-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "新たな音楽の可能性を求める作曲家達は、自らが出発点とした伝統における『基本的な",
        "新たな音楽の可能性を求める作曲家達は、自らが出発点とした伝統における「基本的な」知識の外に踏み出そうとする。そして、この伝統からの踏み出し――あるいは、「逸脱」と言うべきかもしれない――は、常に、実験的な性質を帯びる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "伝統的なイメージから離れた実験的な音楽",
          "translation": "偏离了传统形象的实验性音乐。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“跳出传统基本知识之外（伝統からの踏み出し）”以及“带有实验性质（実験的な性質を帯びる）”的描述。"
        },
        {
          "number": 2,
          "text": "「基本的な」知識を知らずに作った未知の音楽",
          "translation": "在不知道“基本”知识的情况下作出的未知音乐。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中说他们是把基本知识作为“出发点”然后跳出去，并非“在不知道（知らずに）”的情况下作出来的。"
        },
        {
          "number": 3,
          "text": "「基本的な」知識を元にして作った新しい音楽",
          "translation": "以“基本”知识为基础作出的新音乐。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "这部分人是试图“跳出”基本知识之外（外に踏み出そうとする），仅仅说“以其为基础”偏向了保守派的做法，不够准确。"
        },
        {
          "number": 4,
          "text": "非伝統的だが「保守的な」イメージを失わない音楽",
          "translation": "非传统但又未失去“保守”形象的音乐。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中说他们会产生脱离传统形象的未知之物，因此不可能“不失去保守形象（保守的なイメージを失わない）”。"
        }
      ]
    },
    {
      "id": "n1-long-2015-7-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "私が、自分自身の作曲について語り得ることは、（中略）自らが行った実験的な試みの結果として産み出された音楽についての吟味であり、言い換えれば、自分が行ったこととその結果についての自分自身による解釈なのである。",
        "私が、自分自身の作曲について語り得ることは、まさにこのこと、つまり、自らが行った実験的な試みの結果として産み出された音楽についての吟味であり、言い換えれば、自分が行ったこととその結果についての自分自身による解釈なのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自身の曲の意義と価値",
          "translation": "自身曲子的意义和价值。",
          "correct": false,
          "error": "relation-error",
          "explanation": "虽然第四段提到不知道未知音乐的意义和价值，需要品味，但最后一段落脚点在对“尝试与结果”的解释，不能直接等同于他在谈论固定的“意义和价值”。"
        },
        {
          "number": 2,
          "text": "自身の方法論についての解釈",
          "translation": "关于自身方法论的解释。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者在第一段就明确表示自己“没有系统的方法论（組織的な方法論はない）”。"
        },
        {
          "number": 3,
          "text": "自身の試みと、曲についての解釈",
          "translation": "对自身尝试以及曲子的解释。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“对自己所做的事情（尝试）及其结果（曲子）的自我解释（解釈なのである）”。"
        },
        {
          "number": 4,
          "text": "自身の作曲過程と、実験的音楽の可能性",
          "translation": "自身作曲过程以及实验性音乐的可能性。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者的作曲过程是凭直觉的、无法说明的，因此无法去谈论“作曲过程”。"
        }
      ]
    }
  ],
  "2016.12": [
    {
      "id": "n1-long-2016-12-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "なんとも寂しく、無味乾燥な、あるいは何か病気を連想させるようなイメージのまちになってしまうのではないでしょうか。（中略）うるおいややすらぎのないまちのようにも見えます。",
        "なんとも寂しく、無味乾燥な、あるいは何か病気を連想させるようなイメージのまちになってしまうのではないでしょうか。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人々に木が身近な存在であることを意識させる。",
          "translation": "让人们意识到树木是近在身边的存在。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未提及要让人意识到它在身边。"
        },
        {
          "number": 2,
          "text": "人々に未来都市的なイメージを与える。",
          "translation": "给人们带来未来都市的印象。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中指出不种树的城市“乍一看有未来都市的印象”，但这伴随着负面评价（没有安宁），并非树木的作用。"
        },
        {
          "number": 3,
          "text": "人々を現実の煩わしさから逃れさせる。",
          "translation": "让人们从现实的烦扰中逃脱出来。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中未提及“逃离现实的烦恼”。"
        },
        {
          "number": 4,
          "text": "人々を落ち着いた気持ちにさせる。",
          "translation": "让人们的心情平静下来。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中反面论证推导出的“提供滋润和安宁（やすらぎ）”的核心作用。"
        }
      ]
    },
    {
      "id": "n1-long-2016-12-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "その土地の植生(注1)を踏まえ、その上に歴史性や未来性を重ね合わせる。季節の移ろいの中で、人々がその木をどのように眺めながら暮らしていくのか。そんな積み重ねの上にはじめて「ここにはこの木を植えよう",
        "その土地の植生を踏まえ、その上に歴史性や未来性を重ね合わせる。季節の移ろいの中で、人々がその木をどのように眺めながら暮らしていくのか。そんな積み重ねの上にはじめて「ここにはこの木を植えよう」ということになる。①それがその木がその場所に存在する意義です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "その土地に暮らす人々の好みに合わせた樹木を植えること",
          "translation": "种植迎合居住在该土地上人们喜好的树木。",
          "correct": false,
          "error": "opposite",
          "explanation": "第三段指出“不能仅仅凭自己的喜好”，这与选项表述相反。"
        },
        {
          "number": 2,
          "text": "その土地の特性と人々の暮らしを考慮し、樹木を植えること",
          "translation": "考虑到该土地的特性与人们的生活，去种植树木。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了前文“立足植被特性”和“考虑人们如何生活”的叠加逻辑。"
        },
        {
          "number": 3,
          "text": "その土地の歴史的な樹木を大切にし、保存すること",
          "translation": "珍视并保存该土地上历史性的树木。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中探讨的是种植新树木的考量，并非保护历史树木。"
        },
        {
          "number": 4,
          "text": "その土地の季節の移ろいを感じさせる樹木を大切にすること",
          "translation": "珍视能让人感受到该土地季节变迁的树木。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "感受季节变迁只是人们生活状态的一环，而非指代的核心行为。"
        }
      ]
    },
    {
      "id": "n1-long-2016-12-03",
      "questionNumber": 3,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "単に自分の好みばかりでなく、その木が住宅街の小路をどのように演出するのか、まわりとの調和はどうなのか。そんなことを考えていくのがまちづくりの中の『木",
        "単に自分の好みばかりでなく、その木が住宅街の小路をどのように演出するのか、まわりとの調和はどうなのか。そんなことを考えていくのがまちづくりの中の「木」です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の好みだけでなく、まち全体との調和も考えてほしい。",
          "translation": "希望不要仅凭自己的喜好，也能考虑与城市整体的协调。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了段落开头“不能仅凭自己喜好、要考虑与周围协调”以及段尾“打造美丽的城市”的呼吁。"
        },
        {
          "number": 2,
          "text": "ガーデニングをする人達同士で、もっと情報交流をしてほしい。",
          "translation": "希望做园艺的人们之间能进行更多的信息交流。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中提到信息交流很活跃，但这并不是作者呼吁“贪心”去做的事。"
        },
        {
          "number": 3,
          "text": "個々の庭の花や木が、さらに美しく育つようにしてほしい。",
          "translation": "希望能让各个庭院的花草树木培育得更加美丽。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "仅仅让自家庭院的花木更美，违背了作者“向外扩展”的初衷。"
        },
        {
          "number": 4,
          "text": "個々の庭よりも、まちの共有の部分のほうに力を入れてほしい。",
          "translation": "比起各个庭院，希望能把精力更多地放在城市共有的部分上。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者强调的是个体和共有部分“都要美丽”，而非放弃个体庭院只看重共有部分。"
        }
      ]
    },
    {
      "id": "n1-long-2016-12-04",
      "questionNumber": 4,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "これが『愛でる",
        "これが「愛でる」ということだと思うのです。その愛でる心と愛でられる木々があってはじめてよいまちとなるのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人々がまちの木々を愛でることで、子供達が自然に関心を持つようになる。",
          "translation": "通过人们赏爱城市的树木，孩子们就会变得对自然产生兴趣。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中只是说对树木寄托孩子的未来，并未说能让孩子对自然产生兴趣。"
        },
        {
          "number": 2,
          "text": "人々がまちの木々を愛でることが、よいまちづくりにつながる。",
          "translation": "人们赏爱城市的树木，这能与美好的城市建设相挂钩。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一句“存在赏爱的心和树木，才能成为美好的城市”的结论。"
        },
        {
          "number": 3,
          "text": "人々がまちの木々の手入れを怠らなければ、よいまちになる。",
          "translation": "只要人们不懈怠对城市树木的照料，就会变成美好的城市。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "重点在于倾注情感的“赏爱之心（愛でる心）”，而非单纯的“不懈怠照料（手入れを怠らなければ）”。"
        },
        {
          "number": 4,
          "text": "人々が季節による木々の変化に関心を持つことで、愛でる心が生まれる。",
          "translation": "通过人们对季节导致的树木变化产生兴趣，就会萌生出赏爱之心。",
          "correct": false,
          "error": "relation-error",
          "explanation": "因果关系颠倒，文中强调倾注对生活的思考和期待去照料才是“赏爱”，并非单纯关心季节变化就能产生这种心。"
        }
      ]
    }
  ],
  "2016.7": [
    {
      "id": "n1-long-2016-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "視覚や聴覚などの情報処理においては、脳の働きの個人差は比較的少ない。（中略）その一方で、ある事象に対する感情の反応においては、個人によるばらつきが大きくなるのが通例である。",
        "視覚や聴覚などの情報処理においては、脳の働きの個人差は比較的少ない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "いずれも大きな個人差が見られる。",
          "translation": "两者都能看到巨大的个体差异。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "知觉的信息处理个体差异较小，并非两者都大。"
        },
        {
          "number": 2,
          "text": "いずれも個人差はあまり見られない。",
          "translation": "两者都很少看到个体差异。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "感情反应的个体差异较大，并非两者都小。"
        },
        {
          "number": 3,
          "text": "知覚の情報処理のほうが大きな個人差が見られる。",
          "translation": "知觉的信息处理个体差异更大。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中指出感情反应的个体差异较大，选项表述颠倒了。"
        },
        {
          "number": 4,
          "text": "感情の反応のほうが大きな個人差が見られる。",
          "translation": "感情的反应个体差异更大。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段和第二段的核心对比逻辑。"
        }
      ]
    },
    {
      "id": "n1-long-2016-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "理性では割り切れない、結果がどうなるかわからないような生の状況において、それでも判断し、決断することを支えるための情報処理のメカニズムとして、感情は存在していると考えられるに至ったのである。",
        "理性では割り切れない、結果がどうなるかわからないような生の状況において、それでも判断し、決断することを支えるための情報処理のメカニズムとして、感情は存在している"
      ],
      "options": [
        {
          "number": 1,
          "text": "避けられない状況を受け入れるためのもの",
          "translation": "为了接受无法避免的状况的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中说是为了应对不确定性做出判断，而不是为了“接受（受け入れる）”状况。"
        },
        {
          "number": 2,
          "text": "避けられない状況において、理性を保つためのもの",
          "translation": "在无法避免的状况下，为了保持理性的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中说是在理性无法解释的状况下，而非为了“保持理性（理性を保つ）”。"
        },
        {
          "number": 3,
          "text": "不確実な状況において、判断して決断するためのもの",
          "translation": "在不确定的状况下，为了进行判断和决断的东西。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第四段中“在不确定的状况下支撑判断和决断（判断し、決断することを支える）”的论述。"
        },
        {
          "number": 4,
          "text": "不確実な状況において、正解を求めるためのもの",
          "translation": "在不确定的状况下，为了寻求正解的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "第六段明确指出在不确定的状况下，选择的“正解”并不唯一，因此不是为了“寻求正解（正解を求める）”。"
        }
      ]
    },
    {
      "id": "n1-long-2016-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "さまざまな人々が異なる戦略をとり、全体としてバラエティが増したほうが、人間という生物種全体としては、むしろ適応的である。（中略）別の選択をした人が生きのびれば生物種としては存続できるからである。",
        "別の選択をした人が生きのびれば生物種としては存続できるからである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人間という生物種の存続",
          "translation": "人类这一生物种群的存续。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第七段中“作为生物种群能够存续（生物種としては存続できる）”的核心论点。"
        },
        {
          "number": 2,
          "text": "人間と他の生物種との共存",
          "translation": "人类与其他生物种群的共存。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章探讨的是人类内部的多样性，未提及“与其他生物种群的共存（他の生物種との共存）”。"
        },
        {
          "number": 3,
          "text": "生死にかかわるような事態の減少",
          "translation": "攸关生死这类事态的减少。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "多样性是为了应对生死攸关的事态，并不是说能“减少（減少）”这种事态的发生。"
        },
        {
          "number": 4,
          "text": "環境の変化に対応できる生物種の増加",
          "translation": "能够应对环境变化的生物种群的增加。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是人类这一个生物种群内部多样性的适应意义，而不是“增加能适应环境的生物种群数量”。"
        }
      ]
    },
    {
      "id": "n1-long-2016-7-04",
      "questionNumber": 4,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "他人が異なる感情の反応を見せることを許容することの倫理的基礎は、まさにこの点にある。（中略）自他の差異に対して許容的であることが、すぐれて生命哲学上の原理にかなっているのである。",
        "自他の差異に対して許容的であることが、すぐれて生命哲学上の原理にかなっているのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人々が生きていくためには、感情の個人差を敏感に察知すべきだ。",
          "translation": "为了生活下去，人们应该敏感地察觉感情的个体差异。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者主张的是去宽容和接受差异，而非强调“敏感地察觉（敏感に察知すべき）”。"
        },
        {
          "number": 2,
          "text": "人々が生きていく上では、感情の反応の個人差を受け入れたほうがいい。",
          "translation": "人们在生活上，最好接受感情反应的个体差异。",
          "correct": true,
          "error": null,
          "explanation": "客观贴合了最后一段中关于“允许他人展现不同感情（許容する）”和“对差异保持宽容（許容的であること）”的论述。"
        },
        {
          "number": 3,
          "text": "感情の反応に個人差があることこそが、人間であることのあかしである。",
          "translation": "感情反应存在个体差异，这正是身为人类的证明。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "个体差异是为了适应不确定性，文中未将其上升到“证明是人类（人間であることのあかし）”的高度。"
        },
        {
          "number": 4,
          "text": "感情の反応に個人差があることは、人間を取り巻く環境の変化によるものである。",
          "translation": "感情反应存在个体差异，是由于围绕着人类的环境变化所导致的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中提到多样性是为了“应对”环境变化，而不是“由于”环境变化而产生的。"
        }
      ]
    }
  ],
  "2017.12": [
    {
      "id": "n1-long-2017-12-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "弱いサルは、見つめられたら決して見返してはいけない。挑戦したとみなされて攻撃を受ける羽目になるからだ。（中略）競合する場面では、弱いサルが強いサルに譲るように誰もが期待しているからだ。それがサル社会のルールである。",
        "競合する場面では、弱いサルが強いサルに譲るように誰もが期待しているからだ。それがサル社会のルールである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "強いサルも弱いサルも、挑戦されれば相手を攻撃する。",
          "translation": "无论是强猴还是弱猴，受到挑战就会攻击对方。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中指出弱猴被盯着时不敢回看，更别说去攻击对方了。"
        },
        {
          "number": 2,
          "text": "強いサルは、弱いサルを威嚇（いかく）することはない。",
          "translation": "强猴不会去威吓弱猴。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中第一句就明确表示，对于猴子来说死死盯着对方就是一种“轻度的威吓（軽い威嚇）”，强猴也会威吓弱猴。"
        },
        {
          "number": 3,
          "text": "弱いサルは、強いサルに挑戦するようなことはしない。",
          "translation": "弱猴不会去做挑战强猴的事。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“被视为挑战会遭到攻击”，因此弱猴会避免挑战强猴的事实逻辑。"
        },
        {
          "number": 4,
          "text": "弱いサルは、強いサルの関心を引こうとする。",
          "translation": "弱猴试图引起强猴的关注。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "如果碰了可能会引起强猴注意的食物，弱猴最好马上退开，它们并不试图去“引起关注”。"
        }
      ]
    },
    {
      "id": "n1-long-2017-12-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "見つめるという行為はふつう威嚇にはつながらない。むしろ、相手に積極的な関心を向けたり、許容や忠告、愛の表現であったりする。視線の向け方にも作法があり、（中略）多種多様である。",
        "サルとは違ったこと"
      ],
      "options": [
        {
          "number": 1,
          "text": "視線以外の手段を使って気持ちを表現すること",
          "translation": "使用视线以外的手段来表达心情。",
          "correct": false,
          "error": "relation-error",
          "explanation": "画线句后面探讨的依然是“注视（見つめる）”即视线本身的作用，并非使用“视线以外的手段”。"
        },
        {
          "number": 2,
          "text": "視線の向け方が場面によって決められること",
          "translation": "投向视线的方式由场合决定。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中说视线的规矩因文化、性别、年龄等不同而有差异，并非由“场合”决定。"
        },
        {
          "number": 3,
          "text": "視線を向け続ければ威嚇（いかく）につながること",
          "translation": "持续投向视线就会与威吓联系在一起。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中明确说人类的注视行为“通常不会与威吓联系在一起（ふつう威嚇にはつながらない）”。"
        },
        {
          "number": 4,
          "text": "視線を様々な意味に使い分けること",
          "translation": "根据各种不同的意义来灵活使用视线。",
          "correct": true,
          "error": null,
          "explanation": "客观贴合了文中关于视线可以是“宽容、忠告、爱的表达”且“多种多样”的论述。"
        }
      ]
    },
    {
      "id": "n1-long-2017-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "言葉は視線のコミュニケーションを代替できない。言葉は意味を、視線は感情を伝える。むしろ意味があいまいであるからこそ、視線は暖かくも冷たくもなりうるし、そこで受けた印象を後で変えることもできるのである。",
        "言葉は意味を、視線は感情を伝える。むしろ意味があいまいであるからこそ、視線は暖かくも冷たくもなりうるし、そこで受けた印象を後で変えることもできるのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "お互いの感情をうまく伝え合うために必要なもの",
          "translation": "为了更好地互相传达感情所必需的东西。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中强调的“视线传达感情”这一核心功能。"
        },
        {
          "number": 2,
          "text": "言葉によるコミュニケーションの替わりになるもの",
          "translation": "能够替代语言沟通的东西。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中明确表示“语言无法代替视线的沟通”，二者职能不同，并非替代关系。"
        },
        {
          "number": 3,
          "text": "相手にいやな感情を伝えないようにするためのもの",
          "translation": "为了不向对方传达厌恶感情的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "视线传达的感情既可以是温暖的，也可以是“冰冷的（冷たくもなりうる）”，并非为了避免传达厌恶感情。"
        },
        {
          "number": 4,
          "text": "性別や年齢、身分や服装に惑わされないように使うもの",
          "translation": "为了不被性别、年龄、身份或服装迷惑而使用的东西。",
          "correct": false,
          "error": "relation-error",
          "explanation": "性别、年龄等是导致视线规矩差异的原因，并非使用视线是为了不被它们迷惑。"
        }
      ]
    },
    {
      "id": "n1-long-2017-12-04",
      "questionNumber": 4,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "人々は毎日インターネットやメールをのぞくために多くの時間を使っている。（中略）その結果、多様な視線の作法を忘れ、他人と視線を合わせることが億劫（おっくう）となっているのではないだろうか。（中略）だがそのおかげで、私たちは豊かな心を育んできた視線による対面の世界を忘れようとしている。",
        "人々は毎日インターネットやメールをのぞくために多くの時間を使っている。家族や親しい仲間とじっくり顔を合わせて、対話や協同作業を楽しむ時間を失いつつある。"
      ],
      "options": [
        {
          "number": 1,
          "text": "情報機器を使用せずに感情を伝え合うことは難しくなってきている。",
          "translation": "在不使用信息设备的情况下互相传达感情已经变得困难了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章探讨的是因为使用了信息设备导致面对面视线交流减少，并非不使用设备就难以传达感情。"
        },
        {
          "number": 2,
          "text": "情報機器によるよりも対面のほうが、意味を伝え合うには効果的である。",
          "translation": "比起使用信息设备，面对面在互相传达意义上更为有效。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "面对面的视线交流主要用来传达“感情（感情を伝える）”，而传达“意义（意味を伝える）”是语言的功能。"
        },
        {
          "number": 3,
          "text": "情報機器の使用も視線を交わすことも、コミュニケーションに不可欠である。",
          "translation": "无论是使用信息设备还是交汇视线，对于沟通都是不可或缺的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者在最后一段对信息设备导致人们忘记视线交流感到“不安（不安に思っている）”，并不认为它不可或缺。"
        },
        {
          "number": 4,
          "text": "情報機器の発達で、視線がコミュニケーションに果たす役割が見失われつつある。",
          "translation": "由于信息设备的发展，视线在沟通中所起的作用正在迷失。",
          "correct": true,
          "error": null,
          "explanation": "准确归纳了文中关于信息设备导致人们逐渐忘记视线沟通作用的担忧。"
        }
      ]
    }
  ],
  "2017.7": [
    {
      "id": "n1-long-2017-7-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "毎日どんどん売れる商売じゃないだろうけど、それにしても客が入っているのを見たことないよね",
        "①不思議がっていた。"
      ],
      "options": [
        {
          "number": 1,
          "text": "宅配便の荷物が梱包されたまま置かれていること",
          "translation": "快递的包裹就那样打包着放着。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "快递包裹是为了推测它可能是网店的依据，而非感到不可思议的直接焦点。"
        },
        {
          "number": 2,
          "text": "十年経っても店の様子が何も変わらないこと",
          "translation": "经过了十年店里的样子也完全没变。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中说搬来有十年左右，但并未说十年间样子不变是感到不可思议的原因。"
        },
        {
          "number": 3,
          "text": "店なのに客がいるのを見たことがないこと",
          "translation": "明明是家店却从没见过有客人。",
          "correct": true,
          "error": null,
          "explanation": "客观契合了文中丈夫说的“没见过有客人进去”以及店里静悄悄的描述。"
        },
        {
          "number": 4,
          "text": "店主を一度も見たことがないこと",
          "translation": "一次都没见过店主。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中明确写了“像是店主的人只是一直坐在店的深处”，并非没见过。"
        }
      ]
    },
    {
      "id": "n1-long-2017-7-02",
      "questionNumber": 2,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "思いがけない近所にそんな専門の工房(注3)があったとは。新鮮な驚きとともに、②ひと筋の光が射し込んで来る思いがした。我が家にも欠けたからといって捨てられず、破片をそっと薄紙に包んだままにしているものがある。（中略）これらをもとの形にもどすことができたら、どんなに心和むことだろう。",
        "新鮮な驚きとともに、②ひと筋の光が射し込んで来る思いがした。我が家にも欠けたからといって捨てられず、破片をそっと薄紙に包んだままにしているものがある。祖母が求め、そして壊してしまった十客揃いの小鉢(注4)のひとつ。義父が好んで使っていたという杯。これらをもとの形にもどすことができたら、どんなに心和むことだろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "同世代の女性が自分と同じ思いを抱いていることがわかったから",
          "translation": "因为知道同世代的女性怀有和自己一样的想法。",
          "correct": false,
          "error": "relation-error",
          "explanation": "看到同世代女性的博客是得知这家店的契机，并非感到一缕光的原因。"
        },
        {
          "number": 2,
          "text": "割れてしまった思い出深い陶器を直せそうだとわかったから",
          "translation": "因为知道碎掉的、充满回忆的陶器似乎能修好了。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中联想到家里损坏的珍贵器皿并希望能够修复的情境。"
        },
        {
          "number": 3,
          "text": "不思議に思っていた店がどのような店かわかったから",
          "translation": "因为知道了一直觉得不可思议的店到底是家什么店。",
          "correct": false,
          "error": "relation-error",
          "explanation": "知道店的性质只是表层原因，深层原因在于这与自己家里损坏的陶器产生了连接。"
        },
        {
          "number": 4,
          "text": "専門的な技術を近所で見られることがわかったから",
          "translation": "因为知道在近处就能看到专门的技术了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“能就近看到专门技术”偏离了作者想要修复自己器皿的本质诉求。"
        }
      ]
    },
    {
      "id": "n1-long-2017-7-03",
      "questionNumber": 3,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "さっそく店を訪ねてみると、『やあ、いらっしゃい",
        "だから近所に住んでいる人のことはなんとなくわかるんです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "店主も自分のことを知っていて、親しく接してくれたから",
          "translation": "因为店主也知道自己，并且很亲切地接待了。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中店主像熟客一样迎接且表示“知道住在附近的人”的描述。"
        },
        {
          "number": 2,
          "text": "店主は話しづらい人だと思ったが、そうではなかったから",
          "translation": "虽然原本以为店主是个难以搭话的人，但其实并非如此。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并没有提及作者事先认为店主“难以搭话（話しづらい）”。"
        },
        {
          "number": 3,
          "text": "店主が仕事の手を休めて話しかけてくれたから",
          "translation": "因为店主停下了工作来跟我搭话。",
          "correct": false,
          "error": "relation-error",
          "explanation": "店主休息时看外面是他认识附近人的原因，而不是他“特意停下手来找作者搭话”。"
        },
        {
          "number": 4,
          "text": "店主が以前と同じように接してくれたから",
          "translation": "因为店主像以前一样接待了我。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是作者第一次进店，不存在“和以前一样（以前と同じように）”对待的说法。"
        }
      ]
    },
    {
      "id": "n1-long-2017-7-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "金継ぎはそんな心の痛手までやさしくいたわってくれる伝統の技術だ。もしもの時に助けてくれる人がいると思うと心底有り難い。けれど、だからこそ指先には神経を使ってぞんざいな扱いはすまいと、見事に修復された器を手に思っている。"
      ],
      "options": [
        {
          "number": 1,
          "text": "形あるものは壊れるからこそ、愛情を持って使いたい。",
          "translation": "正因为有形的东西会坏，所以才想带着爱意去使用。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "缺少了对“修复技术”的感激这一核心要素。"
        },
        {
          "number": 2,
          "text": "壊れるものには美しさがあり、作り手への感謝の念を忘れてはならない。",
          "translation": "容易坏的东西有其美丽之处，不能忘记对制作者的感谢之情。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "感谢的对象是“修复器物的人/技术”，而不是“制作者（作り手）”。"
        },
        {
          "number": 3,
          "text": "壊れたものは修復できても、壊れたときの心の痛手はなくならない。",
          "translation": "即使坏了的东西能修复，损坏时的内心伤痛也不会消失。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中最后一段开头说金缮“能温柔抚慰内心的伤痛（心の痛手までやさしくいたわってくれる）”，选项表述与原文相悖。"
        },
        {
          "number": 4,
          "text": "壊れたものを直す技術があることに感謝しながら、大事に使いたい。",
          "translation": "在感谢拥有能修好损坏之物的技术的同时，想要珍惜地使用。",
          "correct": true,
          "error": null,
          "explanation": "客观契合了最后一段中感激有修复技术（心底有り難い）同时想要珍视使用（ぞんざいな扱いはすまい）的感悟。"
        }
      ]
    }
  ],
  "2018.12": [
    {
      "id": "n1-long-2018-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "この時代、日本列島は現在の状態よりも生物の生息環境として単純なものであったはずで、そこに生息する生物の多様性は現在よりも低かったのではないかと私は考えています。"
      ],
      "options": [
        {
          "number": 1,
          "text": "生息環境が単純で生物が生息しやすかった。",
          "translation": "生存环境单纯，生物容易生存。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中提到环境单纯，并未提到“生物容易生存（生息しやすかった）”。"
        },
        {
          "number": 2,
          "text": "生物が環境の影響を受けることが現在より少なかった。",
          "translation": "生物受到环境影响比现在少。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中没有关于生物受环境影响多少的比较。"
        },
        {
          "number": 3,
          "text": "生物もその生息環境も現在ほど多様ではなかった。",
          "translation": "生物及其生存环境都没有现在这样多样。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中环境单纯、生物多样性比现在低的论述。"
        },
        {
          "number": 4,
          "text": "生物もその生息環境も自然の作用により多様化しつつあった。",
          "translation": "生物及其生存环境随着自然作用在不断多样化。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中只探讨了有无人参与造成的多样性差异，并未提到在那时正随自然作用“不断多样化（多様化しつつあった）”。"
        }
      ]
    },
    {
      "id": "n1-long-2018-12-02",
      "questionNumber": 2,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "人間の介入は土壌の奥深くまで及んでいます。植生の回復に比べて、土壌の回復には長い時間がかかるので、まずは土壌が回復しない状態で、その上に植生が成立することになります。",
        "そのまま放っておけば、人間がいなかった時代の自然に戻るかというと、そう簡単ではありません。"
      ],
      "options": [
        {
          "number": 1,
          "text": "植生と土壌の回復には、人間が介入したのと同じ時間が必要だから",
          "translation": "因为植被和土壤的恢复，需要与人类介入时相同的时间。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未探讨恢复所需时间是否与“人类介入的时间”相同。"
        },
        {
          "number": 2,
          "text": "人間が介入した土壌には、植生が成立しにくいから",
          "translation": "因为在人类介入过的土壤上，难以形成植被。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中说“在其上会形成植被（上に植生が成立することになります）”，说明植被能够形成，并非“难以形成”。"
        },
        {
          "number": 3,
          "text": "人間が介入した土壌の回復は、植生の回復より時間がかかるから",
          "translation": "因为人类介入过的土壤的恢复，比植被的恢复更花时间。",
          "correct": true,
          "error": null,
          "explanation": "贴合了文中“与植被的恢复相比，土壤的恢复需要漫长的时间”的原因说明。"
        },
        {
          "number": 4,
          "text": "人間が介入した植生と土壌は、自然に回復することはないから",
          "translation": "因为人类介入过的植被和土壤，不会自然恢复。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中提到土壤恢复需要长时间，但并未说它们“不会自然恢复（自然に回復することはない）”。"
        }
      ]
    },
    {
      "id": "n1-long-2018-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "その介入は、決して生物多様性のためではなく、人間が生きていくために燃料、木材、その他を収奪する(注4)ためだったのです。もし現在の状態が生物多様性が高い状態だとすれば、それはあくまで副産物として得られたものなのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人間が自然の恩恵を受けようとして生み出したもの",
          "translation": "人类为了接受自然恩惠而产生的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "获取资源是为了“生存”，而非单纯为了“接受自然恩惠（自然の恩恵を受けようとして）”。"
        },
        {
          "number": 2,
          "text": "人間が生存するために行った介入によって生じたもの",
          "translation": "由于人类为了生存而进行的介入产生的东西。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了由于人类为了生存进行干预，作为副产物才带来了生物多样性的逻辑。"
        },
        {
          "number": 3,
          "text": "人間が生物多様性を目指して介入した結果生まれたもの",
          "translation": "人类以生物多样性为目标介入后诞生的东西。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中明确说“绝不是为了生物多样性（決して生物多様性のためではなく）”，与选项相反。"
        },
        {
          "number": 4,
          "text": "人間の介入が行われなかった土壌で自然に生じたもの",
          "translation": "在没有人类介入的土壤上自然产生的东西。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中说现在的多样性是“人类长期持续介入自然的结果（介入の結果としてもたらされた）”，而非在没有介入的土壤上自然产生。"
        }
      ]
    },
    {
      "id": "n1-long-2018-12-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "その手間に見合う利益が、人間にもたらされるのか、また、放置して自然の作用に任せておくことが、人間や生物にどのような損失をもたらすのか、正確に理解することが求められています。",
        "自然が、自然の作用によって変化していくのに逆らって、人間が作業をしようとすると、膨大な手間と時間がかかります。その手間に見合う利益が、人間にもたらされるのか、また、放置して自然の作用に任せておくことが、人間や生物にどのような損失をもたらすのか、正確に理解することが求められています。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自然の作用による変化を見守り続けるのがよい",
          "translation": "最好持续关注自然作用带来的变化。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者要求人们去准确理解干预或不干预的利弊，并没有给出单纯“持续关注就好”的结论。"
        },
        {
          "number": 2,
          "text": "自然への介入の有無による利害を十分見極める必要がある",
          "translation": "有必要充分看清是否介入自然所带来的利弊。",
          "correct": true,
          "error": null,
          "explanation": "客观反映了最后一段呼吁人们准确理解干预带来的利益与不干预带来的损失的论点。"
        },
        {
          "number": 3,
          "text": "生物の損失より人間の損失が少ない場合は、自然に介入すべきだ",
          "translation": "当人类的损失少于生物的损失时，应该介入自然。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中只是让大家去理解会带来怎样的损失，并未给出“哪方损失小就该介入”的具体标准。"
        },
        {
          "number": 4,
          "text": "人間が介入した自然をもとに戻すために、資金を投じて対策をすべきだ",
          "translation": "为了恢复人类介入过的自然，应该投入资金制定对策。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "第四段提到是否投入公共资金维持生物多样性“最好深思熟虑”，并非建议直接投钱去恢复原状。"
        }
      ]
    }
  ],
  "2018.7": [
    {
      "id": "n1-long-2018-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "これまでマスメディアに私生活を暴露され憤慨してきた彼らが、自らの結婚や離婚、病気などについて、自分からファクスでマスメディアに連絡する。（中略）一方でプライバシー保護を訴えておきながら、都合のいいときだけ私生活をさらけ出そうとする、というわけだ。",
        "タレントがその私生活を自分からマスメディアに公表することは、いまではまったく珍しくなくなった。これまでマスメディアに私生活を暴露され憤慨してきた彼らが、自らの結婚や離婚、病気などについて、自分からファクスでマスメディアに連絡する。"
      ],
      "options": [
        {
          "number": 1,
          "text": "プライバシーに対する姿勢が一貫していない",
          "translation": "对隐私的态度不一贯。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“一边诉求保护隐私，一边又自己暴露私生活”的矛盾态度。"
        },
        {
          "number": 2,
          "text": "プライバシー保護の流れに逆行していて好ましくない",
          "translation": "逆隐私保护的潮流而动，不令人喜欢。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中指出艺人也在诉求保护隐私，并没有逆保护隐私的潮流而动，一般人反感的是其矛盾的做法。"
        },
        {
          "number": 3,
          "text": "マスメディアに都合よく利用されているだけだ",
          "translation": "只不过是被大众传媒为了方便而利用了而已。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文中说到艺人是为了自己的宣传，并非“仅仅是被大众传媒利用”。"
        },
        {
          "number": 4,
          "text": "マスメディアを利用した情報は信じることができない",
          "translation": "利用大众传媒的信息是不可信的。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未探讨一般人对大众传媒上信息的“信任度（信じることができない）”问题。"
        }
      ]
    },
    {
      "id": "n1-long-2018-7-02",
      "questionNumber": 2,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "彼らは先手(注2)を打とうとしているのだ。マスメディアに勝手に詮索(注3)され、おもしろおかしく記事にされる前に、自分の方から情報公開してその出ばな(注4)をくじこうという、いわば他人による勝手な物語化に対する予防措置である。"
      ],
      "options": [
        {
          "number": 1,
          "text": "多くの情報を公表することで世間にさらに注目されたいから",
          "translation": "因为想通过公开许多信息来受到世间更多的关注。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "想受到世间关注是第一段中“一般人”的看法（自己宣伝や売名行為），并非作者在第二段提出的观点。"
        },
        {
          "number": 2,
          "text": "プライバシーを守っても自分の宣伝にならないと考えたから",
          "translation": "因为认为即使保护了隐私也起不到自我宣传的作用。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章的重点在于防止形象被乱造，而非探讨保护隐私是否有助于自我宣传。"
        },
        {
          "number": 3,
          "text": "他人に勝手なイメージを作られるのを未然に防ぎたいから",
          "translation": "因为想防患于未然，防止被他人随意塑造形象。",
          "correct": true,
          "error": null,
          "explanation": "客观对应了文中“防止被他人随意故事化的预防措施（他人による勝手な物語化に対する予防措置）”的论述。"
        },
        {
          "number": 4,
          "text": "自分のすべてを公表すれば自分を正しく理解してもらえると考えたから",
          "translation": "因为认为如果把自己的全部都公开，就能被正确理解。",
          "correct": false,
          "error": "not-stated",
          "explanation": "艺人是为了控制自己的信息流出，文中并未提到是为了“被正确理解（正しく理解してもらえる）”。"
        }
      ]
    },
    {
      "id": "n1-long-2018-7-03",
      "questionNumber": 3,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "昨今、人びとはマスメディアに対抗する強力な情報発信ツールを手に入れた。（中略）だがイメージづくりのイニシアティブをマスメディアに握られていた人びとにとって、自力で公に情報発信する有力な手段を手に入れたことに変わりはないだろう。",
        "強力な情報発信ツール"
      ],
      "options": [
        {
          "number": 1,
          "text": "自身の伝えたいイメージが確実に伝わっていくから",
          "translation": "因为自身想要传达的形象确实能够传达出去。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "第五段中间明确提到“虽然不知道实际效果到底有多少（実際の効果がどの程度かはわからない）”，因此“确实能传达出去”与原文相悖。"
        },
        {
          "number": 2,
          "text": "自身についての情報を自力で世の中に発信できるから",
          "translation": "因为能够靠自己的力量将关于自身的信息发布到世间。",
          "correct": true,
          "error": null,
          "explanation": "准确契合了文中“获得了一种能够靠自己的力量公开发布信息的有力手段”的论点。"
        },
        {
          "number": 3,
          "text": "マスメディアより多くの人びとに情報を発信できるから",
          "translation": "因为能够向比大众传媒还要多的人发布信息。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未比较互联网和大众传媒受众人数的多少。"
        },
        {
          "number": 4,
          "text": "マスメディアによる自身のよくないイメージを消せるから",
          "translation": "因为能够消除大众传媒造成的自身不良形象。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "拥有工具是为了抢占塑造形象的主导权，并不是为了去“消除（消せる）”已有的不良形象。"
        }
      ]
    },
    {
      "id": "n1-long-2018-7-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "自分自身がどのような人間になるか、そしてどのように生きるかは、その人自身の主体的な意思や選択にゆだねられる。（中略）だがこの権利が奪われ、他人が勝手に個人の自己＝＜私＞をつくろうとし始めるとき、私たちはプライバシー侵害を訴える。そして何とか＜私づくり＞のイニシアティブを自らのもとに引き戻そうとする。",
        "だがこの権利が奪われ、他人が勝手に個人の自己＝＜私＞をつくろうとし始めるとき、私たちはプライバシー侵害を訴える。そして何とか＜私づくり＞のイニシアティブを自らのもとに引き戻そうとする。"
      ],
      "options": [
        {
          "number": 1,
          "text": "＜私づくり＞において、人は主体的であろうとする",
          "translation": "在“塑造自我”方面，人试图保持主体性。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一段中人们将选择交由“主体意志”并努力“夺回主导权”的动态过程。"
        },
        {
          "number": 2,
          "text": "＜私づくり＞において、個人の人権が守られるようになった",
          "translation": "在“塑造自我”方面，个人的人权变得得到了保护。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中探讨的是人权的争取过程，并未宣布人权已经“变得得到了保护（守られるようになった）”。"
        },
        {
          "number": 3,
          "text": "＜私づくり＞の主導権が他人に奪われてしまっている",
          "translation": "“塑造自我”的主导权已经被他人夺走了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中说的是“当他人开始试图（つくろうとし始めるとき）”，并未说主导权已经彻底被夺走，且人们还在努力反抗。"
        },
        {
          "number": 4,
          "text": "＜私づくり＞の主導権を自身のもとに引き戻すことはできない",
          "translation": "无法将“塑造自我”的主导权夺回自己手中。",
          "correct": false,
          "error": "not-stated",
          "explanation": "最后一句明确提到人们“想方设法地试图夺回（何とか……引き戻そうとする）”，并未断言“无法夺回”。"
        }
      ]
    }
  ],
  "2019.12": [
    {
      "id": "n1-long-2019-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "そのせいで、脳機能を理解する前に現象だけが先走って人々の間に広がっていくことも多い学問です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "他の学問より早いスピードで進歩している。",
          "translation": "正以比其他学问更快的速度在进步。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中说的是传播速度（伝搬のスピード）比其他学问快，而非“进步（進歩）”速度快。"
        },
        {
          "number": 2,
          "text": "人々の脳機能を高めることに貢献している。",
          "translation": "正为提高人们的大脑机能做着贡献。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章探讨的是脑科学现象的传播，未提及有助于“提高（高める）”人们的脑机能。"
        },
        {
          "number": 3,
          "text": "身近な疑問を扱っており、多くの人々に理解されている。",
          "translation": "因为处理的是身边的疑问，所以被许多人理解了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中明确指出是在“理解脑机能之前（理解する前に）”，即并没有被大众深入理解。"
        },
        {
          "number": 4,
          "text": "脳の働きが理解されないまま、人々の興味だけが先行している。",
          "translation": "大脑的作用还未被理解，仅仅是人们的兴趣走在了前面。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“理解脑机能前现象就先传播开来（現象だけが先走って）”的逻辑。"
        }
      ]
    },
    {
      "id": "n1-long-2019-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "そこではできるだけ面白く人々の興味をひきつけるストーリーを作りがちになります。本当はそういう色気は基礎科学に馴染まないのですが、メディアからの要請があると、僕たちはなんとかそれに応えようとして、浅薄な脚色をして本当の面白さをゆがめてしまいがちになります。",
        "本当はそういう色気は基礎科学に馴染まないのですが、メディアからの要請があると、僕たちはなんとかそれに応えようとして、浅薄な脚色をして本当の面白さをゆがめてしまいがちになります。"
      ],
      "options": [
        {
          "number": 1,
          "text": "科学者が科学本来の面白さを前面に出そうとすること",
          "translation": "科学家试图将科学原本的趣味推到前面。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者指出迎合媒体反而会“歪曲真正的趣味（本当の面白さをゆがめてしまい）”，并非将原本的趣味推到前面。"
        },
        {
          "number": 2,
          "text": "科学者が事実を実際より面白くして伝えようとすること",
          "translation": "科学家试图把事实变得比实际更有趣来传达。",
          "correct": true,
          "error": null,
          "explanation": "客观贴合了文中“为了吸引兴趣而编造故事（脚色をして）”，即把事实变得比实际更有趣来传达。"
        },
        {
          "number": 3,
          "text": "科学者が一般の人々に分かりやすく科学を説明しようとすること",
          "translation": "科学家试图向一般大众通俗易懂地说明科学。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中描述的是为了趣味性而进行的“肤浅的添枝加叶（浅薄な脚色）”，并不是纯粹的通俗易懂的说明。"
        },
        {
          "number": 4,
          "text": "科学者が新聞に掲載されるような興味深い研究をしようとすること",
          "translation": "科学家试图去做那种能被登载在报纸上的令人感兴趣的研究。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "科学家是为了写新闻稿而编造有趣的故事，而不是本身去“做那种令人感兴趣的研究”。"
        }
      ]
    },
    {
      "id": "n1-long-2019-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "昨今の過剰なメディアの脳科学の取り上げ方は、科学者の説明責任を遥かに逸脱したレベルであるように思えるのです。そういうメディアの要求に、誠実に対応しようとすればするほど、科学者は自分をすり減らすことになるでしょうし、だんだんと科学の現場から乖離せざるを得なくなるでしょう。",
        "昨今の過剰なメディアの脳科学の取り上げ方は、科学者の説明責任を遥かに逸脱したレベルであるように思えるのです。そういうメディアの要求に、誠実に対応しようとすればするほど、科学者は自分をすり減らすことになるでしょうし、だんだんと科学の現場から乖離せざるを得なくなるでしょう。それは、優秀な科学者を潰すことになります。"
      ],
      "options": [
        {
          "number": 1,
          "text": "メディアが、研究内容に介入するようになってきている。",
          "translation": "媒体变得开始介入研究内容了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "媒体要求的是科学家提供有趣的故事说明，并没有去“介入（介入する）”科学家的研究内容本身。"
        },
        {
          "number": 2,
          "text": "メディアの過剰な要求のため、研究の現場に負担がかかっている。",
          "translation": "由于媒体过剩的要求，给研究现场造成了负担。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“越是诚实回应要求，科学家越会消耗自己并脱离现场”所带来的负担。"
        },
        {
          "number": 3,
          "text": "脳科学に関する情報提供の機会が、メディアに奪われている。",
          "translation": "关于脑科学提供信息的机会，被媒体夺走了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "现在是通过新闻稿大量提供信息，机会并未被媒体“夺走（奪われている）”。"
        },
        {
          "number": 4,
          "text": "脳科学本来の面白さが、メディアに取り上げられなくなっている。",
          "translation": "脑科学原本的趣味，变得不再被媒体报道了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "媒体依然在大量报道脑科学，只是报道的方式歪曲了真正的趣味，而非“不再被报道（取り上げられなくなっている）”。"
        }
      ]
    },
    {
      "id": "n1-long-2019-12-04",
      "questionNumber": 4,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "科学者の価値は、何よりも科学の現場に居続けることにあります。（中略）常に研究の現場に自分をつなぎ止め、足を杭で打ち付けてでも科学の現実から離れないようにすること。そういう決意をもってメディアに対応するのであれば、フワフワと遠くに行ってしまうことはないでしょう。",
        "科学者の価値は、何よりも科学の現場に居続けることにあります。科学的知見に裏打ちされない(注7)空論を弄ぶのではなく、常に研究の現場に自分をつなぎ止め、足を杭で打ち付けてでも科学の現実から離れないようにすること。そういう決意をもってメディアに対応するのであれば、フワフワと遠くに行ってしまうことはないでしょう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "メディアを自身の研究のために活用するべきだ。",
          "translation": "应该为了自身的研究去活用媒体。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未提倡为了研究去“活用（活用する）”媒体。"
        },
        {
          "number": 2,
          "text": "メディアを通じて研究の現場から情報を発信するべきだ。",
          "translation": "应该通过媒体从研究现场发布信息。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者强调的是“留在现场”，而不是强调“通过媒体从现场发信息”。"
        },
        {
          "number": 3,
          "text": "メディアへの対応よりも、研究を優先するべきだ。",
          "translation": "比起应对媒体，应该把研究放在优先位置。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了文中“科学家的价值比什么都在于留在科学现场（优先研究）”，并带着这种决意应对媒体的观点。"
        },
        {
          "number": 4,
          "text": "メディアの要求には対応せず、研究の現場を大切にするべきだ。",
          "translation": "不应该应对媒体的要求，而应珍视研究现场。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中作者允许“带着决意去应对媒体（メディアに対応するのであれば）”，并非选项中说的“不应对（対応せず）”。"
        }
      ]
    }
  ],
  "2019.7": [
    {
      "id": "n1-long-2019-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "今の急速な環境変化には、多くの生物種が適応できずに絶滅する可能性が高いかもしれない。そのため、人間は①大きな問題を起こしているのだ"
      ],
      "options": [
        {
          "number": 1,
          "text": "特定の生物種だけが影響を受けるような環境変化を起こしていること",
          "translation": "引发了只有特定生物种群受到影响的那种环境变化。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中明确说“许多生物物种（多くの生物種）”可能会灭绝，而非只有“特定的（特定の）”物种受影响。"
        },
        {
          "number": 2,
          "text": "大きな環境変化を起こして、多くの生物種を絶滅させてしまったこと",
          "translation": "引发了巨大的环境变化，已经导致了许多生物种群的灭绝。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说的是由于急速的环境变化，生物“有可能”灭绝（絶滅する可能性が高いかもしれない），而非“已经导致了灭绝（絶滅させてしまった）”。"
        },
        {
          "number": 3,
          "text": "急速な環境変化を起こして、多くの生物種を絶滅させかねないこと",
          "translation": "引发了急剧的环境变化，可能导致许多生物种群灭绝。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“引发急剧变化，许多物种可能会无法适应而灭绝”的逻辑。"
        },
        {
          "number": 4,
          "text": "影響が広範囲に及ぶような大きな環境変化を起こしたこと",
          "translation": "引发了影响波及广范围的那种巨大环境变化。",
          "correct": false,
          "error": "relation-error",
          "explanation": "选项缺少了“导致物种可能灭绝”这一核心的负面结果，描述不充分。"
        }
      ]
    },
    {
      "id": "n1-long-2019-7-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "ところが、これほど急激で大きな生態系の攪乱に直面しても、生き残ったものがいた。 ②このことを考えると、生物というものはとてもタフで、打たれ強いものであることがわかる。",
        "ところが、これほど急激で大きな生態系の攪乱に直面しても、生き残ったものがいた。"
      ],
      "options": [
        {
          "number": 1,
          "text": "多くの生物が滅びる事態が起きても、耐えうる生物種がいたこと",
          "translation": "即使发生许多生物灭绝的事态，也有能够承受的生物种群存在。",
          "correct": true,
          "error": null,
          "explanation": "准确贴合了第二段末尾“即使面临巨大生态扰乱，仍有幸存生物”的论述。"
        },
        {
          "number": 2,
          "text": "どんな生物にも新たな環境に適応する力があったこと",
          "translation": "无论哪种生物都有适应新环境的力量。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文是说“有幸存者（生き残ったものがいた）”，并非“无论哪种生物都有适应力（どんな生物にも…力があった）”。"
        },
        {
          "number": 3,
          "text": "生態系が乱れた結果、個々の生物がさらに強くなったこと",
          "translation": "由于生态系统遭到破坏，使得各个生物变得更强了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并没有提到每个生物个体由于生态被破坏而“变得更强（強くなった）”。"
        },
        {
          "number": 4,
          "text": "生態系が壊れても、すぐに元のように修復されたこと",
          "translation": "即使生态系统被破坏，也立刻修复成了原来的样子。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到生物构建了“多样的生态系统”，但并没有说“立刻修复回原样（すぐに元のようにも修復された）”。"
        }
      ]
    },
    {
      "id": "n1-long-2019-7-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "今、人類が強い力で地球環境を変えて生態系を大きく攪乱しても、人類は滅びるかもしれないが、その急激に変化する環境をうまく生き抜き、新たにつくられた環境の中で繁栄する生物種が必ず出てくるに違いない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "環境を自ら変えることで生き残る生物種が現れる。",
          "translation": "会出现通过自主改变环境来生存的生物物种。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并未提到是新物种“自主改变环境（自ら変えることで）”而存活下来的。"
        },
        {
          "number": 2,
          "text": "人類が繁栄していた以前の生態系に戻る。",
          "translation": "会回到人类繁荣之前的生态系统。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "第二段明确指出生物们是“构建出了多样的生态系统”，而非回到人类繁荣之前的系统。"
        },
        {
          "number": 3,
          "text": "新たな環境変化が起きず安定する。",
          "translation": "不会再发生新的环境变化，变得安定。",
          "correct": false,
          "error": "relation-error",
          "explanation": "环境总是会变化，选项中“不再发生新的环境变化（新たな環境変化が起きず）”不符合文章逻辑。"
        },
        {
          "number": 4,
          "text": "新たに繁栄する生物種が現れる。",
          "translation": "会出现重新繁荣的生物种群。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中“必定会出现……在新创造的环境中繁荣的物种”的论述。"
        }
      ]
    },
    {
      "id": "n1-long-2019-7-04",
      "questionNumber": 4,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q4"
      ],
      "evidenceTexts": [
        "このように考えると、生態系の善し悪しを考えるときには、誰を中心にするか、いつを基準とするのかによって評価が大きく変わることがわかる。したがって、議論をするときには、その基準を決めなければならないだろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人間中心の見方とは別の視点で評価することもできる。",
          "translation": "也可以从与人类中心视角不同的其他视角来进行评价。",
          "correct": true,
          "error": null,
          "explanation": "准确贴合了最后一段中关于“根据以谁为中心，评价会大不同”的论述，意味着存在除人类以外视角的可能性。"
        },
        {
          "number": 2,
          "text": "人間以外を基準にして議論するべきである。",
          "translation": "应当以人类以外为基准来进行讨论。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者主张的是讨论前要“确定基准（基準を決めなければならない）”，而非主张“应当以人类以外为基准”。"
        },
        {
          "number": 3,
          "text": "生態系の善し悪しは環境を基準にして考えるべきである。",
          "translation": "生态系统的好坏应当以环境为基准来考量。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文末强调基准是“人（谁）”或“时间（何时）”，而非“环境（環境）”。"
        },
        {
          "number": 4,
          "text": "生態系の評価は時代とともに変わっていくものだ。",
          "translation": "生态系统的评价是随着时代而不断改变的东西。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文末所说的是评价依据“基准（谁或何时）”而不同，而非笼统地说随时代“改变（変わっていくものだ）”。"
        }
      ]
    }
  ],
  "2020.12": [
    {
      "id": "n1-long-2020-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "地球の長い歴史の中で生物は進化と分化し、生物種の数は基本的には増える傾向にある。（中略）過去五回、生物種の数が急激に減少する「大絶滅の時代",
        "地球の長い歴史の中で生物は進化と分化し、生物種の数は基本的には増える傾向にある。地球上の生物の種類が急激に増えたのが、カンブリア紀と呼ばれる約五億年前のことで、生物種の「ビッグバン」と呼ばれることもある。だが、その後生物の歴史の中では、過去五回、生物種の数が急激に減少する「大絶滅の時代」があった"
      ],
      "options": [
        {
          "number": 1,
          "text": "約五億年前をピークとして、その後急激に減少してきた。",
          "translation": "以约五亿年前为巅峰，之后急剧减少。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "五亿年前并不是巅峰并一路减少，文中明确说了“基本上呈增加趋势”。"
        },
        {
          "number": 2,
          "text": "約五億年前に急増した後、五回の急激な減少を経験したが、増加してきた。",
          "translation": "在约五亿年前急增之后，经历了五次急剧减少，但总体呈增加趋势。",
          "correct": true,
          "error": null,
          "explanation": "准确契合了文中“整体呈增加趋势”以及“五亿年前急增”、“经历了五次大灭绝”的事实脉络。"
        },
        {
          "number": 3,
          "text": "約五億年前に一度増加したが、その後は五回の急激な減少を含めて減り続けてきた。",
          "translation": "在约五亿年前增加过一次，但之后包括五次急剧减少在内，一直在持续减少。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "并非“一直在持续减少（減り続けてきた）”，这违背了首句基本增加趋势的设定。"
        },
        {
          "number": 4,
          "text": "増加し続けてきたが、約五億年前に急激に減少し、その後再び増加してきた。",
          "translation": "一直持续增加，但在约五亿年前急剧减少，之后再次增加。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "急剧减少不是发生在五亿年前，五亿年前是“急剧增加（ビッグバン）”。"
        }
      ]
    },
    {
      "id": "n1-long-2020-12-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "六回目の大絶滅時代は、過去の五回と多くの点で違う。一つは生物が絶滅する速度が非常に速いということだ。（中略）今回の大絶滅が、ほとんどが人間活動が原因で起こっているという点も過去と大きく異なる。",
        "一つは生物が絶滅する速度が非常に速いということだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "絶滅の速度は速くなっているが、生息地を広げて増加する種もあること",
          "translation": "灭绝的速度变快了，但也有扩大栖息地而增加的物种。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "过去的大灭绝后会有生物扩大栖息地（第四段内容），但在本次大灭绝中因为速度太快生物可能跟不上变化（第五段内容），并非选项所述。"
        },
        {
          "number": 2,
          "text": "絶滅の速度が非常に速くなるとともに、原因も分からなくなっていること",
          "translation": "灭绝的速度变得非常快，同时原因也变得不明确了。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中明确指出了原因在于“人类活动（人間活動）”，并非“原因不明（原因も分からなくなっている）”。"
        },
        {
          "number": 3,
          "text": "人間の行動パターンが変化することで、生物種の数は増加していること",
          "translation": "由于人类行动模式发生变化，生物物种的数量正在增加。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "现在是“大灭绝”时代，生物物种数量是在急剧减少的，并非“正在增加（増加している）”。"
        },
        {
          "number": 4,
          "text": "人間の行動によって、自然界での絶滅の速度が非常に速くなっていること",
          "translation": "由于人类的行动，自然界中灭绝的速度变得非常快。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文中指出的两大不同点：绝灭速度快、人类活动是原因。"
        }
      ]
    },
    {
      "id": "n1-long-2020-12-03",
      "questionNumber": 3,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q3"
      ],
      "evidenceTexts": [
        "新たな生物が生まれる『ゆりかご",
        "新たな生物が生まれる「ゆりかご」(注)となるような湿地や熱帯林、浅い海などの場所は、人間の開発行為によって破壊され、汚染されている。大絶滅からの復活につながる生物進化の力も、人間が奪っている可能性が高い。今この地球上で起こっている「第六の大絶滅」は、過去の五回とは質的に大きく異なり、地球の生態系にとって取り返しがつかないものとなる可能性が否定できない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人間が開発のペースを落とせば、生物種の絶滅は食い止められる。",
          "translation": "如果人类放慢开发的速度，生物物种的灭绝就能被阻止。",
          "correct": false,
          "error": "not-stated",
          "explanation": "第三段说人类“改变行动（行動を改めれば）”或许能阻止灭绝，但并未具体说单纯“放慢开发速度（ペースを落とせば）”就一定能阻止。"
        },
        {
          "number": 2,
          "text": "人間が開発行為を続ければ、地球の生態系はさらに破壊されるだろう。",
          "translation": "如果人类继续开发行为，地球的生态系统将会被进一步破坏吧。",
          "correct": true,
          "error": null,
          "explanation": "贴合了第六段中“如果以现在的速度继续破坏……今后也会急剧进展”的警告。"
        },
        {
          "number": 3,
          "text": "人間が開発行為をやめて、破壊された自然を元に戻さなければならない。",
          "translation": "人类必须停止开发行为，将遭到破坏的自然恢复原状。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中只提出了警告，并未明确给出“必须恢复原状（元に戻さなければならない）”这一强制性解决方案。"
        },
        {
          "number": 4,
          "text": "人間が開発行為をやめても、生物多様性の減少は避けられない可能性が高い。",
          "translation": "即使人类停止开发行为，生物多样性的减少也很有可能是无法避免的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "第三段明确提到“如果人类改变行动，或许就能够阻止灭绝（絶滅を食い止めることができるかもしれない）”，并非说“即使停止也无法避免”。"
        }
      ]
    }
  ]
};
})();
