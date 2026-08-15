(function () {
    'use strict';
    const root = window.ReadingAnalysisData = window.ReadingAnalysisData || {};
    root.N1 = root.N1 || {};
    root.N1.integrated = {
  "2012.12": [
    {
      "id": "n1-integrated-2012-12-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "わからないことばを瞬時に検索できる電子辞書は…",
        "電子辞書を用いた学生は単語にたどり着く時間は早い…"
      ],
      "options": [
        {
          "number": 1,
          "text": "軽くて簡単に持ち運ぶことができる。",
          "translation": "轻便且容易携带。",
          "correct": false,
          "error": "not-stated",
          "explanation": "“容易携带（持ち歩ける）”只在 A 篇中被提及，B 篇并未论述这一点。"
        },
        {
          "number": 2,
          "text": "大量のデータを小さくまとめて収納できる。",
          "translation": "能将大量数据压缩收纳。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“收纳大量数据（膨大な情報を…）”同样只在 A 篇中提到，不属于两篇的共同点。"
        },
        {
          "number": 3,
          "text": "インターネットを介して多くの人が利用できる。",
          "translation": "很多人可以通过互联网使用。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "两篇文章都没有把“通过互联网使用”作为电子词典的核心优点来讨论。"
        },
        {
          "number": 4,
          "text": "知りたいことばを速く探し出すことができる。",
          "translation": "能快速查找到想知道的词汇。",
          "correct": true,
          "error": null,
          "explanation": "准确契合了 A 篇的“瞬间检索”以及 B 篇的“查到单词时间快”。"
        }
      ]
    },
    {
      "id": "n1-integrated-2012-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "辞書は単にことばを調べるだけでなく、読み物としてもじゅうぶんに楽しめます。",
        "アンダーラインを引いたり、使いこなすにしたがってカスタマイズできる印刷辞書の魅力を語っていた。"
      ],
      "options": [
        {
          "number": 1,
          "text": "Aは紙の本ならではのよさがあると述べ、Bは電子辞書とは違う使い方で学生も使用していると述べている。",
          "translation": "A认为有纸质书独有的好处，B认为学生们也正在以不同于电子词典的方式使用它。",
          "correct": true,
          "error": null,
          "explanation": "A篇提出可以像读物一样享受（纸质书特有），B篇指出学生会用它来划线和定制（不同于电子词典的用法）。对应准确。"
        },
        {
          "number": 2,
          "text": "Aはデジタル化が避けられないと述べ、Bは学生は電子辞書よりも魅力を感じていると述べている。",
          "translation": "A认为数字化是不可避免的，B认为学生觉得它比电子词典更有魅力。",
          "correct": false,
          "error": "not-stated",
          "explanation": "B篇是说学生区分使用这两种词典，并未绝对地说“比电子词典更有魅力（電子辞書よりも魅力を感じている）”。"
        },
        {
          "number": 3,
          "text": "Aは辞書としての使われ方はされなくなると述べ、Bは電子辞書と共存していくと述べている。",
          "translation": "A认为它将不再作为词典被使用，B认为它将与电子词典共存。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇说“不仅仅是用来查词的”，并不是说“不再作为词典使用（使われ方はされなくなる）”。"
        },
        {
          "number": 4,
          "text": "Aは本のように楽しんで読めると述べ、Bは電子辞書と使い分けるべきだと述べている。",
          "translation": "A认为可以像书一样享受阅读，B认为应该与电子词典区分使用。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "前半句符合 A 篇，但 B 篇是陈述学生“正在区分使用（使い分けている）”这一客观事实，而非作者主张“应该去区分使用（使い分けるべきだ）”。"
        }
      ]
    }
  ],
  "2012.7": [
    {
      "id": "n1-integrated-2012-7-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "生態系を構成するすべての生物を等しく扱うことはできない。",
        "個別の種をそれぞれ保護することは非常に困難である。"
      ],
      "options": [
        {
          "number": 1,
          "text": "多様な生物を含む自然全体を保護することが重要である。",
          "translation": "保护包含多种生物的整个自然环境是很重要的。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“保护包含多种生物的整个自然环境”是 B 篇的主张（自然をそのまま保全する），A 篇认为只能保护对人类有益的生态系统。"
        },
        {
          "number": 2,
          "text": "多様な生物種を一様に保護していくことは非常に難しい。",
          "translation": "要将多种生物物种一视同仁地进行保护是非常困难的。",
          "correct": true,
          "error": null,
          "explanation": "准确契合了 A 篇的“无法将所有生物平等对待”以及 B 篇的“分别保护个别物种非常困难”。"
        },
        {
          "number": 3,
          "text": "生物種を分類して保護することは生物間の差別につながる。",
          "translation": "将生物物种分类进行保护会导致生物间的歧视。",
          "correct": false,
          "error": "not-stated",
          "explanation": "两篇文章都没有提到分类保护会“导致生物间的歧视（差別につながる）”，属于无中生有。"
        },
        {
          "number": 4,
          "text": "人類に利益を与える生物を保護するべきである。",
          "translation": "应当保护给人类带来利益的生物。",
          "correct": false,
          "error": "not-stated",
          "explanation": "“保护给人类带来利益的生物”仅符合 A 篇的核心主张，B 篇并没有提到人类利益优先的观点。"
        }
      ]
    },
    {
      "id": "n1-integrated-2012-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "人類に利益を与えてくれる生態系を保全すべきなのである。",
        "多様な生物の相互関係を含む自然をそのまま保全することが重要になってくる。つまり、生態系を保全することで…"
      ],
      "options": [
        {
          "number": 1,
          "text": "Aは地球生態系を、Bは遺伝的多様性のある種を保護すべきだと考えている。",
          "translation": "A认为应该保护地球生态系统，B认为应该保护具备遗传多样性的物种。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A 篇明确限制了要保护“对人类有益的”，而非宽泛的地球生态系统。B 篇也明确指出保护遗传多样性的物种很困难，进而提出要保护整个生态系统。"
        },
        {
          "number": 2,
          "text": "Aは生態系の全生物を、Bは希少価値のある生物を保護すべきだと考えている。",
          "translation": "A认为应该保护生态系统的全生物，B认为应该保护具有稀缺价值的生物。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A 篇认为无法平等对待全生物，B 篇也认为只保护稀有物种是有局限的，两者的观点都被说反了。"
        },
        {
          "number": 3,
          "text": "Aは人類に利益を与える生物種を、Bは個別の種を保護すべきだと考えている。",
          "translation": "A认为应该保护给人类带来利益的生物物种，B认为应该保护个别的物种。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A 篇认为应该保护的是“生态系统”，而 B 篇认为保护“个别的物种”非常困难，两者的对应完全错误。"
        },
        {
          "number": 4,
          "text": "Aは人類のためになる生態系を、Bは生態系全体を保護すべきだと考えている。",
          "translation": "A认为应该保护对人类有益的生态系统，B认为应该保护整个生态系统。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇“保护对人类有益的生态系统（人類に利益を与えてくれる生態系）”以及 B 篇“保护包含多种生物的生态系统整体（自然をそのまま保全＝生態系全体）”。"
        }
      ]
    }
  ],
  "2013.12": [
    {
      "id": "n1-integrated-2013-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "以前より安全性は向上していると言える。しかし残念ながら、まだ消費者の安心感には結びついていない。",
        "適切な対策がとられ、科学的に安全が証明された後も、いつまでもその食品の消費回復が見られないということはよくある。消費者が納得しないのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "食品の安全対策に消費者の意見が反映されていない。",
          "translation": "食品的安全对策中没有反映出消费者的意见。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章讨论的是有了安全对策后如何获得安心感，并未提到对策中“没有反映出消费者的意见（消費者の意見が反映されていない）”。"
        },
        {
          "number": 2,
          "text": "食品問題への対策は安全性を考えるだけでは十分ではない。",
          "translation": "关于食品问题的对策，仅仅考虑安全性是不够的。",
          "correct": true,
          "error": null,
          "explanation": "准确契合了 A 篇“安全性提高但未能与安心感挂钩”以及 B 篇“证明了安全消费仍未恢复”的观点，说明仅考虑安全性不够。"
        },
        {
          "number": 3,
          "text": "食品の安全性に関して科学的な証明が重視されていない。",
          "translation": "关于食品的安全性，科学证明并未受到重视。",
          "correct": false,
          "error": "opposite",
          "explanation": "A篇和B篇都肯定了目前在科学证明/评价上的努力（设置评价机构、科学证明安全），并非“未受到重视（重視されていない）”。"
        },
        {
          "number": 4,
          "text": "食品は絶対に安全だと言えなければ消費者は納得しない。",
          "translation": "如果不能说食品是绝对安全的，消费者就不会接受。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇明确提到“就算不可能有绝对的安全（絶対安全ということはありえないにしても）”，表明这不是消费者不接受的核心原因。"
        }
      ]
    },
    {
      "id": "n1-integrated-2013-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "そのためには、提供する側のわかりやすい説明とともに、消費者側もそれを理解するための科学的知識を備える必要があるだろう。",
        "消費者と生産者あるいは、政府の間に信頼関係が構築されていれば安全証明がほぼ同時に安心へと繋がる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、消費者自身が食の安全により関心を持つことで得られると述べている。",
          "translation": "A和B都认为，通过消费者自身对食品安全更加关心就可以获得。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A 篇和 B 篇都没有把获得安心感归结为单纯让消费者“更加关心（より関心を持つ）”。"
        },
        {
          "number": 2,
          "text": "AもBも、消費者が信頼できる説明を生産者側がすることで得られると述べている。",
          "translation": "A和B都认为，通过生产者一方进行让消费者能够信赖的说明就可以获得。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“提供信赖的说明”仅仅接近 A 篇前半部分的观点，而 B 篇强调的是双方之间的“信赖关系（信頼関係）”，不仅仅是说明。"
        },
        {
          "number": 3,
          "text": "Aは消費者が安全性を理解することで得られると述べ、Bは消費者と生産者側が信頼関係を築くことで得られると述べている。",
          "translation": "A认为通过消费者理解安全性就可以获得，B认为通过消费者和生产者之间构筑信赖关系就可以获得。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇主张的“消费者去理解它（それを理解するため…）”以及 B 篇主张的“构筑信赖关系（信頼関係が構築されていれば）”。"
        },
        {
          "number": 4,
          "text": "Aは消費者が科学的知識を身に付けることで得られると述べ、Bは生産者側がより精度の高い安全証明をすることで得られると述べている。",
          "translation": "A认为通过消费者掌握科学知识就可以获得，B认为通过生产者提供精度更高的安全证明就可以获得。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "前半部分符合 A 篇，但后半部分错误。B 篇认为是主观信赖关系决定安心，而非生产者单方面提供“精度更高的安全证明（より精度の高い安全証明をする）”。"
        }
      ]
    }
  ],
  "2013.7": [
    {
      "id": "n1-integrated-2013-7-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "いろいろなバリエーションを楽しみたいという客の要望に応えられるように、あらゆるタイプの商品が置かれている。",
        "店には多種多様な商品があり、…"
      ],
      "options": [
        {
          "number": 1,
          "text": "商品が見やすく並べられていること",
          "translation": "商品摆放得一目了然。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇提到了商品挂满墙壁一目了然，但A篇并没有强调商品陈列“一目了然（見やすく）”。"
        },
        {
          "number": 2,
          "text": "様々な商品がそろえられていること",
          "translation": "备有种类丰富的各式商品。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇的“所有类型的商品”以及 B 篇的“多种多样的商品”，体现了双方都有丰富的品类。"
        },
        {
          "number": 3,
          "text": "時間を気にせずに買い物できること",
          "translation": "可以不用在意时间地尽情购物。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇提到服务耗时长，B篇提到不浪费时间就能买完，但两篇并没有把“不在意时间（時間を気にせずに）”作为共同的特征或优点。"
        },
        {
          "number": 4,
          "text": "客の要望を品ぞろえに反映していること",
          "translation": "在商品种类上反映了顾客的需求。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇提到了反映顾客对款式的需求，但B篇并没有明确提到品类是“反映顾客需求（要望を反映している）”的结果。"
        }
      ]
    },
    {
      "id": "n1-integrated-2013-7-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "一対一で接客することを基本としているため…悩んでいる客には一時間以上対応することもある。",
        "客は、一目で欲しいものが見つけ出せるので、無駄な時間を費やすことなく買い物を済ませられる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "Aの店は客への対応を重視し、Bの店は客の買い物の効率を重視している。",
          "translation": "A店重视对顾客的服务，B店重视顾客购物的效率。",
          "correct": true,
          "error": null,
          "explanation": "A店的“一对一、长时间接待”体现了对“客への対応（顾客服务）”的重视；B店的“宽敞、不浪费时间”体现了对“買い物の効率（购物效率）”的重视。匹配准确。"
        },
        {
          "number": 2,
          "text": "Aの店は固定客の確保を重視し、Bの店は新規の客の増加を重視している。",
          "translation": "A店重视留住老顾客，B店重视增加新顾客。",
          "correct": false,
          "error": "not-stated",
          "explanation": "A篇确实提到了顾客会变成回头客（固定客），但B篇并没有提到重视“新顾客的增加（新規の客の増加）”，建新店只是为了缓解拥挤。"
        },
        {
          "number": 3,
          "text": "Aの店は商品の価格設定を重視し、Bの店は顧客満足度を重視している。",
          "translation": "A店重视商品的定价，B店重视顾客满意度。",
          "correct": false,
          "error": "not-stated",
          "explanation": "两篇文章都没有提到关于“商品定价（価格設定）”的经营方针。"
        },
        {
          "number": 4,
          "text": "Aの店は商品のデザイン性を重視し、Bの店は商品の実用性を重視している。",
          "translation": "A店重视商品的设计感，B店重视商品的实用性。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇确实提到了店员设计服装（设计感），但B篇并没有论述该店注重商品的“实用性（実用性）”。"
        }
      ]
    }
  ],
  "2014.12": [
    {
      "id": "n1-integrated-2014-12-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "『地元では観光振興に結びつくのを期待している",
        "パッケージ・ツアーが数多く組まれ、観光産業と深く結び付く。"
      ],
      "options": [
        {
          "number": 1,
          "text": "世界遺産の報道のしかたが過剰になってきている。",
          "translation": "世界遗产的报道方式变得过剩了。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇提到了媒体报道机会增加，但并没有说是“过剩（過剰）”，B篇更是没有探讨媒体报道是否过剩的问题。"
        },
        {
          "number": 2,
          "text": "世界遺産への登録をめざす動きが過熱している。",
          "translation": "争取登录世界遗产的活动过热了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "争取登录的活动“活跃化”在A篇被提及，但并未定性为“过热（過熱）”，且B篇完全没有谈到申请登录的活动。"
        },
        {
          "number": 3,
          "text": "世界遺産への登録で登録以前より価値が上がる。",
          "translation": "因为登录了世界遗产，价值会比登录前有所提升。",
          "correct": false,
          "error": "opposite",
          "explanation": "B篇明确否定了这一点，指出“就算被认定为世界遗产，建筑的价值也不会像股票一样上涨（価値が上昇するわけではない）”。"
        },
        {
          "number": 4,
          "text": "世界遺産は観光振興と密接に関係している。",
          "translation": "世界遗产与旅游振兴之间有着密切的关系。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇提及的“期待与旅游振兴挂钩”和 B 篇指出的“与旅游产业深度捆绑”。"
        }
      ]
    },
    {
      "id": "n1-integrated-2014-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "遺産の保護という基本理念が、あまりにも置き去りにされてしまってはいないだろうか。",
        "世界遺産であろうとなかろうと、建築の価値は個別に判断すればいい。"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、世界遺産への登録による経済効果は期待すべきではないと述べている。",
          "translation": "A和B都认为，不应该期待通过登录世界遗产来获得经济效益。",
          "correct": false,
          "error": "opposite",
          "explanation": "A篇明确表示“并不否定经济效益的扩大（拡大を否定はしない）”，B篇也承认其会“带来巨额财富（巨額の富をもたらす）”。双方都没有说“不应该期待”。"
        },
        {
          "number": 2,
          "text": "AもBも、認定にかかわらず文化財として価値のあるものは保護すべきだと述べている。",
          "translation": "A和B都认为，无论是否被认定，作为文化财产有价值的东西都应该被保护。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇提到了不要因为特殊化世界遗产而轻视其他建筑的保护，但A篇的核心主张是“回归保护世界遗产本身的基本理念”，并没有在“是否被认定”这一点上做探讨。"
        },
        {
          "number": 3,
          "text": "Aは保護という本来の目的に立ち戻るべきだと述べ、Bは認定に惑わされずもの自体の価値を見定めるべきだと述べている。",
          "translation": "A认为应该回归到“保护”这一原本的目的，B认为不应该被认定名头所迷惑，应该看清事物本身的价值。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了 A 篇“呼吁回归保护理念”的态度，以及 B 篇“不被头衔迷惑，看清事物本身价值”的立场。"
        },
        {
          "number": 4,
          "text": "Aは世界遺産に値するか冷静に再検討すべきだと述べ、Bは世界遺産だけを特別視せず他にも目を向けるべきだと述べている。",
          "translation": "A认为应该冷静地重新探讨是否配得上世界遗产，B认为不应只将世界遗产特殊看待，也应该把目光转向其他事物。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇的主张是“勿忘保护理念”，而不是去“重新探讨它是否配得上世界遗产（値するか再検討する）”，属于无中生有。"
        }
      ]
    }
  ],
  "2014.7": [
    {
      "id": "n1-integrated-2014-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "気軽に手にしたマンガをきっかけに、知的好奇心が刺激されたりする",
        "見方や特性を教えなくてはならないし、そのことを通して適切な学習資料を適切な場面で活用するようになる"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、子どもにとって魅力的なメディアだと述べている。",
          "translation": "A和B都认为，对孩子来说这是充满魅力的媒体。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“漫画是有魅力的媒体”主要是 A 篇的观点，B 篇并没有强调漫画本身的“魅力”。"
        },
        {
          "number": 2,
          "text": "AもBも、子どもの学習の妨げになるという考えは間違いだと述べている。",
          "translation": "A和B都认为，认为它会妨碍孩子学习的想法是错误的。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B 篇确实主张打破“放漫画就不学习”的神话，但 A 篇并没有直接探讨这是否会“妨碍学习”的问题。"
        },
        {
          "number": 3,
          "text": "Aは子どもの知識を深めるのに役立つと述べ、Bは学習資料などとして活用できると述べている。",
          "translation": "A认为它有助于加深孩子知识，B认为它可以作为学习资料来活用。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A 篇认为漫画能“激发求知欲/兴趣”，而不是直接“加深知识（知識を深める）”，概念上有微妙的偏差。"
        },
        {
          "number": 4,
          "text": "Aは子どもの関心を広げるきっかけになると述べ、Bは見方や特性を教えれば子どものためになると述べている。",
          "translation": "A认为它是拓宽孩子兴趣的契机，B认为只要教导其观看方式和特性就能对孩子有益。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇“拓宽兴趣契机”的主张以及 B 篇“教导特性即可有益”的态度。"
        }
      ]
    },
    {
      "id": "n1-integrated-2014-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "選書のアンテナはマンガにもはっておいてほしい",
        "マンガを他の本と区別して考える方向は間違っているといえる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、他の本と同じように選択肢に含めたほうがよいと述べている。",
          "translation": "A和B都认为，应该像对待其他书籍一样，将其包含在选书的选项内。",
          "correct": true,
          "error": null,
          "explanation": "A 篇希望“把选书的天线也对准漫画”，B 篇主张“不应将漫画与其他书区别对待”，共同指向了“将其作为选书选项”的观点。"
        },
        {
          "number": 2,
          "text": "AもBも、図書館が魅力的な場所になるのでよいと述べている。",
          "translation": "A和B都认为，这样能让图书馆成为有魅力的地方，所以很好。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "让图书馆成为“有魅力的地方”仅仅是 A 篇提出的观点。"
        },
        {
          "number": 3,
          "text": "Aは図書館の活性化につながるのでよいと述べ、Bは直接学習に役立つものならよいと述べている。",
          "translation": "A认为能激活图书馆所以很好，B认为只要是对学习有直接帮助的就好。",
          "correct": false,
          "error": "opposite",
          "explanation": "B 篇明确主张不仅要买“有直接帮助（直接学習に役立つ）”的书，还要有购买长远有益图书的余地，选项对 B 篇的概括完全相反。"
        },
        {
          "number": 4,
          "text": "Aは図書の選択は慎重にならざるをえないと述べ、Bは長期的な視点で検討すべきだと述べている。",
          "translation": "A认为选书不得不慎重，B认为应该用长远的眼光来探讨。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A 篇提到的是“即便限制很多（制約は多くても）”也应考虑漫画，并没有将“慎重选书”作为主要论点来强调。"
        }
      ]
    }
  ],
  "2015.12": [
    {
      "id": "n1-integrated-2015-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "彼らは、単なるものだけではなく、人とのつながりや体験を共有するためにお金を使うのだ。",
        "バブル期の若者が欲していたものへの興味関心が相対的に薄れているのだろう。つまり、…欲するものが変わってきている。"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、消費の対象が変化していると述べている。",
          "translation": "A和B都认为，消费的对象正在发生变化。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇的“把钱花在体验和连接上”以及 B 篇的“渴望的东西变了”，说明两者都认为消费的“对象”变化了。"
        },
        {
          "number": 2,
          "text": "AもBも、ものそのものに対する興味関心が低くなったと述べている。",
          "translation": "A和B都认为，对物品本身的兴趣和关注度变低了。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“对物品本身的兴趣降低”仅在 A 篇明确提出（ものそのものに対する欲求が低い），而 B 篇提到的是对“车和高级名牌（特定物品）”的兴趣变淡，并不是指对所有物品本身失去兴趣。"
        },
        {
          "number": 3,
          "text": "Aはものを買わなくなったと述べ、Bは品質にこだわらなくなったと述べている。",
          "translation": "A认为变得不再买东西了，B认为变得不再讲究品质了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "A篇明确说“并非完全不消费（全く消費をしないわけではない）”；B篇更是提到有“廉价且高品质的商品”，并未说年轻人不讲究品质。"
        },
        {
          "number": 4,
          "text": "Aは消費の対象がものではなくなったと述べ、Bは自身のために消費するようになったと述べている。",
          "translation": "A认为消费的对象不再是物品了，B认为变得开始为自己而消费了。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇并没有论述年轻人“开始为自己而消费（自身のために消費する）”，而是说他们享受多样化的服务。"
        }
      ]
    },
    {
      "id": "n1-integrated-2015-12-02",
      "questionNumber": 2,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "生まれたときから多くのものに囲まれて育ったおかげで、ものそのものに対する欲求が低い",
        "バブル期の若者よりもお金をかけずに多様な商品・サービスを楽しめる環境にある。安価で高品質な商品・サービスがあふれ…"
      ],
      "options": [
        {
          "number": 1,
          "text": "若者の購買力が下がったこと",
          "translation": "年轻人的购买力下降了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "A篇提到了收入少（購買力が下がった），但B篇强调的是用更少的钱享受更多服务，并未将购买力下降作为核心要因。"
        },
        {
          "number": 2,
          "text": "若者が節約を好むようになったこと",
          "translation": "年轻人变得喜欢节约了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "A篇确实提到了“倾向于节约的年轻人增加”，但这在B篇中并未作为消费变化的要因被论述。"
        },
        {
          "number": 3,
          "text": "若者がものに恵まれた環境にあること",
          "translation": "年轻人身处物质充裕的环境中。",
          "correct": true,
          "error": null,
          "explanation": "A篇说“被大量物品围绕”，B篇说“充斥着廉价高质的商品服务”，共同指出了“物质充裕的环境”这一背景要因。"
        },
        {
          "number": 4,
          "text": "若者にとって魅力的なものが少ないこと",
          "translation": "对年轻人来说有魅力的事物变少了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "两篇文章都没有提到“有魅力的东西变少”，而是讨论年轻人需求的转变。"
        }
      ]
    }
  ],
  "2015.7": [
    {
      "id": "n1-integrated-2015-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1",
        ".target-q2"
      ],
      "evidenceTexts": [
        "昆虫採集をより有意義な体験にするには…昆虫の体や生態を見て知る姿勢を教え…",
        "彼らの学びは、もうすでに始まっているのだ。(…) 実感を伴った理解が行われるかということを抜きにして…"
      ],
      "options": [
        {
          "number": 1,
          "text": "Aは観察する姿勢を身につけさせれば有益になると考え、Bは実感を伴った自然の理解に役立つと考えている。",
          "translation": "A认为如果能让他们掌握观察的姿态就会有益，B认为这有助于伴随着真实感受去理解自然。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇的“教导观察的姿态使其有益”，以及 B 篇的“这种活动有助于伴随着真实感受去理解自然”。"
        },
        {
          "number": 2,
          "text": "Aは子どもの興味に任せるだけでは十分ではないと考え、Bは興味を持った子どもには積極的に勧めたほうがいいと考えている。",
          "translation": "A认为仅任由孩子凭兴趣去做是不够的，B认为应该积极鼓励产生兴趣的孩子去做。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇认为活动本身就已经蕴含了孩子的可能性和学习，并没有主张大人应该去“积极推荐（積極的に勧める）”。"
        },
        {
          "number": 3,
          "text": "Aは自然を知るきっかけにはならないと考え、Bは子どものよさや可能性を伸ばすきっかけになると考えている。",
          "translation": "A认为这不能成为了解自然的契机，B认为这能成为拓展孩子优点和可能性的契机。",
          "correct": false,
          "error": "opposite",
          "explanation": "A篇明确指出这是形成自然观的需要，虽然需要引导，但并未全盘否定它不能成为“了解自然的契机”。"
        },
        {
          "number": 4,
          "text": "Aは種の多様性を知る上で重要だと考え、Bは成長過程において欠かせない経験だと考えている。",
          "translation": "A认为这在了解物种多样性方面很重要，B认为这是成长过程中不可或缺的经验。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇认为这有助于深化自然观，但并没有把它上升到绝对“不可或缺的经验（欠かせない経験）”的程度。"
        }
      ]
    },
    {
      "id": "n1-integrated-2015-7-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q1",
        ".target-q2"
      ],
      "evidenceTexts": [
        "確かに幼少期の自然体験は自然観の形成に必要ではあるが…大人からの働きかけが必要だ。",
        "学びを通して、自然に対し自分なりの意味を構築していく中で『生命観"
      ],
      "options": [
        {
          "number": 1,
          "text": "子どもの成長過程で、自然保護に対する心情が深められていく。",
          "translation": "在孩子的成长过程中，对保护自然的心情会不断加深。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "虽然 B 篇提到了对保护自然心情的加深，但这并不是 A 篇论述的重点内容。"
        },
        {
          "number": 2,
          "text": "子ども時代の自然との触れ合いを通した学びが自然観の基礎になる。",
          "translation": "儿童时代通过接触自然所学到的东西，会成为自然观的基础。",
          "correct": true,
          "error": null,
          "explanation": "A篇认可幼年期的自然体验对形成自然观是必要的；B篇认为通过这类自然学习能让自然观进化。两者都将自然体验视为建立自然观的基础。"
        },
        {
          "number": 3,
          "text": "子どもの自発的な体験や学びだけでは自然観の形成には十分ではない。",
          "translation": "仅靠孩子的自发体验和学习，并不足以形成自然观。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇确实认为仅靠自发体验不够，需要大人引导；但 B 篇认为孩子自发的沉迷本身就已经是在学习并构建意义了，并没有说“不够”。"
        },
        {
          "number": 4,
          "text": "自然体験が多い子どものほうが、自然保護の精神が強くなるわけではない。",
          "translation": "自然体验多的孩子，其保护自然的意志并不一定就更强。",
          "correct": false,
          "error": "relation-error",
          "explanation": "两篇文章都没有探讨“体验多”与“保护精神强”之间的反向逻辑关系。"
        }
      ]
    }
  ],
  "2016.12": [
    {
      "id": "n1-integrated-2016-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "自分がそれまで見落としていたことがあることに気がつくこともある。",
        "気楽な気持ちのとき、人は本音を話すものだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "Aはお互いの考えを認め合えると述べ、Bは相手の人間性が見えてくると述べている。",
          "translation": "A认为能互相认可彼此的想法，B认为能看清对方的人品。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇提到要试着接受无论多愚蠢的意见，而不是“互相认可彼此的想法（認め合える）”。"
        },
        {
          "number": 2,
          "text": "Aは相手と意見交換ができると述べ、Bはバカらしい話をしても受け入れてもらえると述べている。",
          "translation": "A认为能和对方交换意见，B认为即使说蠢话也能被接受。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇提到了可能有些很蠢的话题，但并没有说它的优点是“就算说蠢话也能被接受”。"
        },
        {
          "number": 3,
          "text": "Aは自分が気づいていなかったことに気づけると述べ、Bは相手の本音を知ることができると述べている。",
          "translation": "A认为能意识到自己没注意到的事情，B认为能了解对方的真心话。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇的“意识到没注意到的事”以及 B 篇的“能够了解对方的真心话”。"
        },
        {
          "number": 4,
          "text": "Aは誰もが自由に意見を発言できると述べ、Bは相手と自分との共通点を見つけることができると述べている。",
          "translation": "A认为谁都可以自由发表意见，B认为能找到对方和自己的共同点。",
          "correct": false,
          "error": "not-stated",
          "explanation": "B篇并没有提到可以通过闲聊去寻找“自己和对方的共同点”，属于无中生有。"
        }
      ]
    },
    {
      "id": "n1-integrated-2016-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "雑談では『いかに発言するか",
        "いかに聞くか"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、相手の話をよく聞くことが大切だと述べている。",
          "translation": "A和B都认为认真倾听对方说话很重要。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“认真倾听对方的话”只是 A 篇的主张，B 篇并没有强调倾听，而是强调自己先抛出话题。"
        },
        {
          "number": 2,
          "text": "AもBも、相手と自分が同じぐらいの割合で話すようにしようと述べている。",
          "translation": "A和B都认为要尽量和对方以相等的比例进行交谈。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "两篇文章都没有探讨过交谈时的“比例（同じぐらいの割合で話す）”问题。"
        },
        {
          "number": 3,
          "text": "Aは相手の話を聞くことが大切だと述べ、Bは自分から話すようにしようと述べている。",
          "translation": "A认为倾听对方的话很重要，B认为应该自己主动去说。",
          "correct": true,
          "error": null,
          "explanation": "A 篇认为倾听很重要（いかに聞くかが大切），B 篇认为应该自己主动去说（自分から話そう），准确对应。"
        },
        {
          "number": 4,
          "text": "Aは相手の発言の意図を考えることが大切だと述べ、Bはまずは相手に話をさせることが大切だと述べている。",
          "translation": "A认为思考对方发言的意图很重要，B认为首先让对方说话很重要。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇明确主张是自己先开口讲个小故事，而非选项中所述的“首先让对方说话（相手に話をさせる）”。"
        }
      ]
    }
  ],
  "2016.7": [
    {
      "id": "n1-integrated-2016-7-01",
      "questionNumber": 1,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "会議の場になると(中略)まったく発言が出なかったり、話が平行線のまますり合わない",
        "役職や人間関係を気にしすぎて積極的な議論にならず、生産性がない"
      ],
      "options": [
        {
          "number": 1,
          "text": "社内の人間関係が悪いこと",
          "translation": "公司内部人际关系恶劣。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章虽然提到了因为上下级、职务、人际关系的顾虑导致不发言，但并未直接判定这是“人际关系恶劣（人間関係が悪い）”。"
        },
        {
          "number": 2,
          "text": "社内で無駄な会議が多すぎること",
          "translation": "公司里无用的会议太多。",
          "correct": false,
          "error": "not-stated",
          "explanation": "B篇提到了“再三开会”，但并未说会议本身是“多余/无用的（無駄な会議が多すぎる）”，而是说这些会议缺乏积极的讨论。"
        },
        {
          "number": 3,
          "text": "社内会議で活発な議論が行われないこと",
          "translation": "公司内部会议上没有进行活跃的讨论。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇的“完全不发言”以及 B 篇的“无法展开积极的讨论”。两者都把会议上缺乏活跃的讨论视为核心问题。"
        },
        {
          "number": 4,
          "text": "社内会議の結論が業績向上に結びつかないこと",
          "translation": "公司内部会议的结论未能与业绩提升挂钩。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "两篇文章都没有把会议讨论与“业绩提升（業績向上）”联系起来讨论，属于过度推断。"
        }
      ]
    },
    {
      "id": "n1-integrated-2016-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "メンバーの内側にあるものを引き出すことが重要であり、そのきっかけを与えるのが『質問",
        "リーダーが自身の明確なビジョンをメンバーに提示し、それについて広く意見を求めることが大切だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、メンバーから出た意見をうまく調整することが重要だと述べている。",
          "translation": "A和B都认为妥善协调成员提出的意见很重要。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "虽然 B 篇提到了避免意见无法归结，但“妥善协调（うまく調整する）”并不是两篇文章的核心主张，A 篇更强调“引出想法”。"
        },
        {
          "number": 2,
          "text": "AもBも、自身の意見は控えて、質問でメンバーの意見を引き出すことが重要だと述べている。",
          "translation": "A和B都认为领导应该克制表达自己的意见，通过提问来引出成员的想法很重要。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇确实主张领导要克制表达自己的意见，通过提问来引出成员想法；但这并非 B 篇的观点，B 篇反而主张领导要“先展示自身的愿景”。"
        },
        {
          "number": 3,
          "text": "Aはメンバー同士で話し合うことが重要だと述べ、Bは自身の考えを示してメンバーも意見を求めるべきだと述べている。",
          "translation": "A认为成员之间的相互讨论很重要，B认为领导应该展示自己的想法并征求成员意见。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇主张的是“领导向成员提问（リーダーからメンバーへ質問）”，而不是“成员之间互相讨论（メンバー同士で話し合う）”。"
        },
        {
          "number": 4,
          "text": "Aは質問をしてメンバーの意見を集めるべきだと述べ、Bは目標を明確に示して議論を進めることが重要だと述べている。",
          "translation": "A认为应该通过提问来收集成员的意见，B认为明确指出目标并推进讨论很重要。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇的“提问收集意见（質問をして…）”以及 B 篇的“明确目标推进讨论（目標を明確に示して…）”。"
        }
      ]
    }
  ],
  "2017.12": [
    {
      "id": "n1-integrated-2017-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "今までの仕事をだいたいこなせるようになったなと思ったら、すかさず彼にとっては未経験の仕事を与え",
        "十分に情報を与え全体像をつかませた上で、新しい仕事に取り組ませることが効果的だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、仕事上の判断や行動を学べるので多くさせたほうがいいと述べている。",
          "translation": "A和B都认为，因为能学到工作上的判断和行动，所以让他们多做比较好。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“学习工作上的判断和行动”只有 A 篇第一段提到了，B 篇并没有把它作为让下属多做的理由。"
        },
        {
          "number": 2,
          "text": "AもBも、与えられた仕事ができるようになったらさせたほうがいいと述べている。",
          "translation": "A和B都认为，应当在他们能够完成被赋予的工作之后，再让他们去做。",
          "correct": false,
          "error": "not-stated",
          "explanation": "“在能完成被赋予的工作之后才让做”虽然在 A 篇中有所体现（能处理现有工作后就给新任务），但 B 篇并没有提到这个前提条件。"
        },
        {
          "number": 3,
          "text": "Aは自力でやりとげられそうな仕事ならさせたほうがいいと述べ、Bはイメージがつかめる仕事ならさせたほうがいいと述べている。",
          "translation": "A认为如果是靠自己的力量似乎能完成的工作就可以让他们去做，B认为如果是能把握轮廓的工作就可以让他们做。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A 篇明确提到要提供“后援支持（バックアップ）”促使他们完成，而不是看“似乎能靠自己完成”才给任务；B 篇强调的是上司主动去给情报，而不是只给容易把握轮廓的任务。"
        },
        {
          "number": 4,
          "text": "Aは積極的に経験させたほうがいいと述べ、Bは十分な情報を与えてからさせたほうがいいと述べている。",
          "translation": "A认为应该积极地让他们去经历，B认为在给予充分的情报之后再让他们做比较好。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇主张的“积极地让其经历（すかさず与え）”以及 B 篇主张的“给足情报之后再做（十分に情報を与えた上で）”。"
        }
      ]
    },
    {
      "id": "n1-integrated-2017-12-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "自分で新しい問題を買って出るようになる。(…) さらに未経験の課題に取り組む…",
        "自ら新しいことに取り組もうという姿勢を持つようになるだろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "会社で必要な新しい行動スタイルを身につけること",
          "translation": "掌握在公司中所必须的全新的行为风格。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇提到了理解下属的“行为风格（行動のスタイル）”，但并没有说要让他们去掌握“公司必须的全新风格”。"
        },
        {
          "number": 2,
          "text": "新しいことに挑戦しようという気持ちを持つこと",
          "translation": "拥有主动去挑战新事物的心情。",
          "correct": true,
          "error": null,
          "explanation": "从 A 篇的「買って出る」（主动承担）和 B 篇的「取り組もう」（动词意志形：想要去挑战）中能够看出，两者都期待下属拥有主动挑战新事物的干劲与意愿。"
        },
        {
          "number": 3,
          "text": "自力で多くの問題を克服できるようになること",
          "translation": "变得能够依靠自己的力量去克服众多的问题。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A 篇确实提到了“克服”，但 A 篇也说上司要提供“后援支持（バックアップ）”，并非完全指望他们“靠自己的力量（自力で）”解决一切；B 篇则没有强调克服问题这一点。"
        },
        {
          "number": 4,
          "text": "自身がしている仕事に自信を持つこと",
          "translation": "对自身正在做的工作抱有自信。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“对工作产生自信”在 A 篇中被提及，但 B 篇的最终落脚点是“主动挑战新事物的姿态”，而非停留在对现有工作的自信上。"
        }
      ]
    }
  ],
  "2017.7": [
    {
      "id": "n1-integrated-2017-7-01",
      "questionNumber": 1,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "新しい概念やニュアンスの提示など、外来語・外国語を使用せざるを得ない面があり",
        "既存の日本語で置き換えにくい新しい概念や事象を表す上で、外来語・外国語を使うのは仕方がないことだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "外来語・外国語の方が日本語で表現しにくい概念を表すこともできること",
          "translation": "外来语・外语能够表达出一些用日语难以表达的概念。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇的“提示新概念”以及 B 篇的“表达难以用日语替换的新概念或事物”。"
        },
        {
          "number": 2,
          "text": "外来語・外国語がすでに定着して一般的になっていること",
          "translation": "外来语・外语已经深入人心并变得普遍。",
          "correct": false,
          "error": "relation-error",
          "explanation": "“外来语已经深入人心变得普遍”或许是现状，但并不是两篇文章论述的“不得不使用它”的根本原因。"
        },
        {
          "number": 3,
          "text": "外来語・外国語を使用しないと外国人が理解できないと考えられていること",
          "translation": "人们认为如果不使用外来语・外语，外国人就无法理解。",
          "correct": false,
          "error": "not-stated",
          "explanation": "两篇文章探讨的都是外来语对日本国内（特别是年长者）的沟通障碍，并未提及“为了让外国人理解”这一观点。"
        },
        {
          "number": 4,
          "text": "外来語・外国語を使用する方が現代的であると考えられていること",
          "translation": "人们认为使用外来语・外语显得更有现代感。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中并没有将使用外来语和“显得有现代感”挂钩，属于无中生有。"
        }
      ]
    },
    {
      "id": "n1-integrated-2017-7-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "広く国民一般を対象にしている官公庁、新聞・放送等では、(中略) 安易に使わないようにすべきである。",
        "外来語・外国語を使用する際には、相手が理解できるかどうかを考えることも大切だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、若い世代であってもできるだけ使用すべきではないと述べている。",
          "translation": "A和B都认为，即使是年轻一代也应该尽可能避免使用。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇确实提到了年轻世代使用率高，但并没有主张“就算是年轻世代也尽可能不要用”，这属于过度推断。"
        },
        {
          "number": 2,
          "text": "AもBも、対象となる世代によって使用するかどうかを考えるべきだと述べている。",
          "translation": "A和B都认为，应该根据面对的世代来考虑是否使用。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "虽然 B 篇提到了世代差异，但 A 篇主张的是“面向国民一般（广泛大众）”，并没有细化到根据“世代”来区分。"
        },
        {
          "number": 3,
          "text": "Aは安易に使用しないようにすべきだと述べ、Bは意味をよく理解した上で使用すべきだと述べている。",
          "translation": "A认为不应该轻易使用，B认为应该在充分理解其意思的基础上使用。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "前半句对，但 B 篇强调的是“考虑对方能否理解”，而不是选项中说的“自己充分理解其意思之后再使用（意味をよく理解した上で）”。"
        },
        {
          "number": 4,
          "text": "Aは国民一般を対象に使用する場合はよく考えるべきだと述べ、Bは相手に応じて使用した方がいいと述べている。",
          "translation": "A认为在面向普通大众使用时应该多加考量，B认为根据对话对象来使用会比较好。",
          "correct": true,
          "error": null,
          "explanation": "A篇提出面向大众时要仔细考量（不轻易使用），B篇提出要根据对话对象（是否能理解）来使用。匹配准确。"
        }
      ]
    }
  ],
  "2018.12": [
    {
      "id": "n1-integrated-2018-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "そう考えれば、できないことを無理に克服する必要はないと考えてもいいのではないでしょうか。",
        "克服できないからといってコンプレックスを抱え続けるよりも、得意なことを生かすことを考えてみてはどうだろうか。"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、必要だと述べている。",
          "translation": "A和B都认为这是必要的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "将两者的观点完全说反了，A和B都不认为死磕弱项是绝对必要的。"
        },
        {
          "number": 2,
          "text": "AもBも、必ずしも必要ではないと述べている。",
          "translation": "A和B都认为这不一定必要。",
          "correct": true,
          "error": null,
          "explanation": "A篇认为“没有必要勉强克服”，B篇认为“与其为了无法克服的缺点自卑，不如发挥长处”，两者均认为克服弱项并不一定必要。"
        },
        {
          "number": 3,
          "text": "Aは必要だと述べ、Bは必ずしも必要ではないと述べている。",
          "translation": "A认为必要，B认为不一定必要。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇明确表示“没必要勉强克服”（無理に克服する必要はない），选项说A认为必要，与原文相悖。"
        },
        {
          "number": 4,
          "text": "Aは必ずしも必要ではないと述べ、Bは必要だと述べている。",
          "translation": "A认为不一定必要，B认为必要。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇并没有认为这是必须的，而是建议把精力放在发挥长处上（得意なことを生かすことを考えてみてはどうだろうか）。"
        }
      ]
    },
    {
      "id": "n1-integrated-2018-12-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "自分の弱みを知っていたからこそ、エジソンはそれを埋め合わせる方法を考え…",
        "もちろん、自身の欠点や弱点はすなおに認めて謙虚にならなければならない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "困難を避けるために、さまざまな試行錯誤を行うのがよい。",
          "translation": "为了避开困难，最好进行各种各样的试错。",
          "correct": false,
          "error": "not-stated",
          "explanation": "“进行反复试错来避开困难”仅在A篇末尾作为正面战略被提及，B篇并未论述此观点，不属于共同点。"
        },
        {
          "number": 2,
          "text": "失敗に備えて、事前に適切な対処を考えておくべきだ。",
          "translation": "为了防备失败，应该事先想好妥当的应对措施。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“提前思考妥当的应对措施”仅在A篇中提到（事前に適切な対処をする），B篇未涉及此内容。"
        },
        {
          "number": 3,
          "text": "自身の長所を生かせる場を見付けるべきだ。",
          "translation": "应该寻找能够发挥自身长处的场所。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“寻找能发挥长处的场所”仅在B篇第二段提到（得意なことを生かせる環境を見付ける），A篇说的是“找擅长的人帮忙”，并非去寻找发挥自己长处的场所。"
        },
        {
          "number": 4,
          "text": "自身の弱いところを自覚することは大切だ。",
          "translation": "认清自身的弱点是很重要的。",
          "correct": true,
          "error": null,
          "explanation": "A篇提到“了解自己的弱点”（自分の弱みを知る）才能想出对策，B篇强调应当“坦率地承认弱点并保持谦虚”（弱点はすなおに認めて），两者都认同意识到自身弱点的重要性。"
        }
      ]
    }
  ],
  "2018.7": [
    {
      "id": "n1-integrated-2018-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "絵は正確さを要求されるものではない。自分の馬、自分のりんごを描けばいい。",
        "描く対象をしっかり観察して、考えながら描くことも大切だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、描くことと写すことの違いを知ることが大切だと述べている。",
          "translation": "A和B都认为，了解“画”和“临摹”的区别很重要。",
          "correct": false,
          "error": "not-stated",
          "explanation": "“了解画画和临摹的区别”只有A篇提及（本物らしく描くことは…写すこと），B篇没有提到这点，不属于共同点。"
        },
        {
          "number": 2,
          "text": "AもBも、途中であきらめないで、最後まで描くことが大切だと述べている。",
          "translation": "A和B都认为，中途不要放弃、坚持画到最后很重要。",
          "correct": false,
          "error": "not-stated",
          "explanation": "“不要半途而废，坚持画到最后”仅在B篇第一段被强调（途中であきらめてしまう…最後まで真剣に描き上げる），A篇并未涉及。"
        },
        {
          "number": 3,
          "text": "Aは正確さにこだわりすぎないほうがいいと述べ、Bは対象をよく見て考えながら描くことが大切だと述べている。",
          "translation": "A认为不要过于拘泥于准确度，B认为仔细观察对象边思考边画很重要。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了A篇的“不要过于拘泥于精准（正確さを要求されるものではない）”和B篇的“观察对象边想边画（対象をしっかり観察して…）”。"
        },
        {
          "number": 4,
          "text": "Aは自身が描きたいように描けばいいと述べ、Bは多くの絵を描くより一つ一つを丁寧に描いたほうがいいと述べている。",
          "translation": "A认为按自己想画的去画就好，B认为比起画得多，不如认认真真地画好每一幅。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇第一段开篇就强调“画得多很重要”（多くの絵を描く経験が大切だ），而选项说“比起画得多，不如认真画好每一幅”，直接与B篇主张相悖。"
        }
      ]
    },
    {
      "id": "n1-integrated-2018-7-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "それらしく描く技術よりも喜んで描く気持ちが大切であり…",
        "実はこの描くことを楽しむ気持ちが最も重要なのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "個性が感じられる絵が優れた絵だといえる。",
          "translation": "能让人感受到个性的画，才称得上是优秀的画。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章强调的是自己独特的表达方式和享受的心情，并未去界定“什么样的画才是优秀的画（優れた絵だといえる）”。"
        },
        {
          "number": 2,
          "text": "自身だけでなく周りも楽しめる絵を描くべきだ。",
          "translation": "不仅是自己，应该画能让周围人也乐在其中的画。",
          "correct": false,
          "error": "not-stated",
          "explanation": "无论是A篇还是B篇，都没有提到要“让周围的人也乐在其中（周りも楽しめる）”，画画是个人的享受。"
        },
        {
          "number": 3,
          "text": "誰でも絵が上手に描けるようになる。",
          "translation": "任何人都能够学会把画画好。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇主张“任何人都能画，都能享受”，并没有说“任何人都能画得很好（上手に描けるようになる）”。"
        },
        {
          "number": 4,
          "text": "楽しむ気持ちを持って絵を描くべきだ。",
          "translation": "应该带着享受的心情去画画。",
          "correct": true,
          "error": null,
          "explanation": "A篇的「喜んで描く気持ちが大切」(喜悦的心情) 和 B篇的「楽しむ気持ちが最も重要」(享受的心情) 完美呼应，都强调了享受过程。"
        }
      ]
    }
  ],
  "2019.12": [
    {
      "id": "n1-integrated-2019-12-01",
      "questionNumber": 1,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "逆に褒められることが目的になりかねない。",
        "上司に褒められることを目的にがんばるという状態になってしまう恐れがある。"
      ],
      "options": [
        {
          "number": 1,
          "text": "部下同士の人間関係が悪くなること",
          "translation": "下属之间的人际关系会变差。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "「部下同士の人間関係が悪くなる」(下属人际关系变差) 仅在 B 篇的举例中提到（只夸特定的人会导致关系恶化），并非 A 篇的内容，不属于共同点。"
        },
        {
          "number": 2,
          "text": "部下が上司に不信感を持ち、やる気をなくすこと",
          "translation": "下属会对上司产生不信任感，从而丧失干劲。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "「不信感を持ち、やる気をなくす」(产生不信任感丧失干劲) 仅对应 B 篇说的“如果夸不到点子上会让人产生不信任感”，同样不属于两篇文章的共同论述。"
        },
        {
          "number": 3,
          "text": "部下が褒められるために仕事をするようになること",
          "translation": "下属会变得为了被夸奖而去工作。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了 A 篇的「褒められることが目的になりかねない」以及 B 篇的「上司に褒められることを目的にがんばる」。两者都把“将夸奖当成目的”作为核心问题点。"
        },
        {
          "number": 4,
          "text": "部下が仕事で成果を上げることを目標にすること",
          "translation": "下属会把在工作中取得成果作为目标。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文探讨的是为了“被夸奖”而努力，而不是把“取得成果”作为目标，属于偷换概念。"
        }
      ]
    },
    {
      "id": "n1-integrated-2019-12-02",
      "questionNumber": 2,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "要は褒めるところと叱るところ、リーダーはいつも人を見てバランスを考えなくてはなりません。",
        "部下が良い仕事をしたら、タイミングを逃さずその場で褒めることが効果的だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "Aは状況に応じて褒めたり叱ったりすることが必要だと述べ、Bは良い点をすぐに褒めることが大切だと述べている。",
          "translation": "A认为需要根据情况进行夸奖或批评，B认为立刻表扬好的地方很重要。",
          "correct": true,
          "error": null,
          "explanation": "A 的主张是“平衡好夸奖和批评 (バランスを考える)”，对应「状況に応じて褒めたり叱ったりする」；B 的主张是“当场表扬 (その場で褒める)”，对应「すぐに褒める」。匹配完美。"
        },
        {
          "number": 2,
          "text": "Aは叱った後には褒めるようにしたほうがいいと述べ、Bは適切なタイミングで褒めることが大切だと述べている。",
          "translation": "A认为批评之后最好再夸奖一下，B认为在适当的时机进行夸奖很重要。",
          "correct": false,
          "error": "not-stated",
          "explanation": "A 篇虽然提到了夸奖和批评的平衡，但并没有提出「叱った後には褒める」(批评之后最好再夸奖) 的先后顺序建议，无中生有。"
        },
        {
          "number": 3,
          "text": "Aはできるだけ叱るのをやめるべきだと述べ、Bは良いと思った点を率直に表現したほうがいいと述べている。",
          "translation": "A认为应该尽可能避免批评，B认为最好坦率地表达出自己觉得好的地方。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A 篇明确主张要把握批评和夸奖的平衡，并非选项所说的「できるだけ叱るのをやめるべき」(应尽可能避免批评)。"
        },
        {
          "number": 4,
          "text": "Aは分かりやすい言葉で褒めることが大切だと述べ、Bは仕事の過程の中で良かった点を褒めたほうがいいと述べている。",
          "translation": "A认为用通俗易懂的语言夸奖很重要，B认为最好表扬工作过程中做得好的地方。",
          "correct": false,
          "error": "not-stated",
          "explanation": "A 篇并没有提到「分かりやすい言葉で」(用通俗易懂的语言) 来夸奖，偏离了原文意图。"
        }
      ]
    }
  ],
  "2019.7": [
    {
      "id": "n1-integrated-2019-7-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "潔くパッと決める人は…軽率な判断で最悪の結果を招いたのでは決める力があるとはいえません。また…ただ迷っているだけでは良い結果が得られないでしょう。",
        "時間をかけすぎるよりも、失敗を恐れず迅速に決断していく人のほうが『決める力"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、時間を十分にかけて慎重に判断すると述べている。",
          "translation": "A和B都认为要花费充分的时间去慎重判断。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇明确反对花费太多时间（時間をかけすぎるよりも…），认为应该迅速决断。这与选项中“花费充分时间慎重判断”完全相悖。"
        },
        {
          "number": 2,
          "text": "AもBも、どのような場面でも失敗を恐れないと述べている。",
          "translation": "A和B都认为无论什么场合都不应该惧怕失败。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "“不惧怕失败”只是B篇的论点（失敗を恐れず），A篇并没有主张无论何时都不怕失败。"
        },
        {
          "number": 3,
          "text": "Aは迷いすぎることなく適切に判断できると述べ、Bは素早く決断できると述べている。",
          "translation": "A认为能够不过度迷茫并做出妥当的判断，B认为能够迅速地做出决定。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了A篇“不能过于轻率也不能单纯迷茫（不过度迷茫并妥当判断）”的观点，以及B篇“迅速决断”的观点。"
        },
        {
          "number": 4,
          "text": "Aは決断が早すぎたり遅すぎたりしないと述べ、Bはリスクを回避することができると述べている。",
          "translation": "A认为做决定既不能过快也不能过慢，B认为要能够规避风险。",
          "correct": false,
          "error": "not-stated",
          "explanation": "B篇认为要能够快速做出客观判断，并没有提到要有“规避风险”的能力。原意是在了解风险的基础上迅速决断。"
        }
      ]
    },
    {
      "id": "n1-integrated-2019-7-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "専門性や価値観の違うたくさんの人の意見を集約して整理します。",
        "瞬時に自身とは違う見方を検討し…日頃からさまざまな価値観に触れ、多角的に物事をとらえられるようになることが必要だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "他人の意見に惑わされてはいけない。",
          "translation": "不能被他人的意见所迷惑。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇确实提到要把朋友的意见当作一半参考，但同时也强调要汇总很多人的意见，并非完全“不能被他人意见迷惑”。"
        },
        {
          "number": 2,
          "text": "複数の視点から問題を検討することが大切だ。",
          "translation": "从多个视角来探讨问题是很重要的。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了A篇“汇总众多不同价值观的意见”和B篇“接触各种价值观、多角度看待事物”的共同核心——重视多个视角的探讨。"
        },
        {
          "number": 3,
          "text": "いつも最善の結果を得ようとするべきではない。",
          "translation": "不应该总是试图去获得最好的结果。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇认为有决断力的人能预测出“最善”（最好）的结果。选项与原文的积极态度相悖。"
        },
        {
          "number": 4,
          "text": "情報を頼りにせず、自身の意見に自信を持つべきだ。",
          "translation": "不应该依赖情报，要对自己的意见保持自信。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章均认为“情报”是必须的（A篇提到要合理利用大量情报，B篇也明确说情报是土台/基础）。因此“不依赖情报”是错误的。"
        }
      ]
    }
  ],
  "2020.12": [
    {
      "id": "n1-integrated-2020-12-01",
      "questionNumber": 1,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-q1"
      ],
      "evidenceTexts": [
        "ただ情報をかき集めることではなく…",
        "現代は、どれだけ多くの情報を手にしているかで決まるといっても過言ではない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "AもBも、重要だと述べている",
          "translation": "A和B都认为收集情报很重要。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇明确指出「ただ情報をかき集めることではなく」(绝非仅仅是搜刮情报)，说明A认为仅仅收集是不够的，而非单纯认为它重要。"
        },
        {
          "number": 2,
          "text": "AもBも、それだけでは十分ではないと述べている",
          "translation": "A和B都认为单靠收集情报是不够的。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "B篇明确表示「どれだけ多くの情報を手にしているかで決まる」(取决于你手里掌握了多少情报)，这说明B认为其十分重要，并没有说“单靠这点不够”。"
        },
        {
          "number": 3,
          "text": "Aは重要だと述べ、Bはそれだけでは十分ではないと述べている",
          "translation": "A认为重要，B认为光靠收集情报是不够的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "将A和B的态度完全说反了。"
        },
        {
          "number": 4,
          "text": "Aはそれだけでは十分ではないと述べ、Bは重要だと述べている",
          "translation": "A认为光靠收集情报是不够的，而B认为它十分重要。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了A的“单靠收集不够”与B的“情报决定一切(重要)”的立场。"
        }
      ]
    },
    {
      "id": "n1-integrated-2020-12-02",
      "questionNumber": 2,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-q2"
      ],
      "evidenceTexts": [
        "いかに新しく、人とは違う発想で、おもしろいことを考えつくか",
        "独自の視点を持って既存のものやアイデアを組み合わせていくこと"
      ],
      "options": [
        {
          "number": 1,
          "text": "情報機器を活用して、新しいものを作り出すこと",
          "translation": "充分利用信息设备，创造出全新的事物。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "无论是A篇还是B篇，都没有具体提到要去充分利用「情報機器」(信息设备)。"
        },
        {
          "number": 2,
          "text": "自分にとって、有用な情報を見極めること",
          "translation": "准确辨别出哪些是对自己有用的情报。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "两篇文章的重点都在于基于情报去产生“自己的独到见解”，而不是停留在「有用な情報を見極めること」(辨别有用情报)上。"
        },
        {
          "number": 3,
          "text": "世の中の変化を正確に予測すること",
          "translation": "准确预测整个世界的变化趋势。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "A篇明确指出「世の中が予想もしない形で変わる」(世界会以出乎意料的方式剧变)，认为准确预测未来是很难的，该选项与A篇主张直接对立。"
        },
        {
          "number": 4,
          "text": "独創的なアイデアを持つこと",
          "translation": "拥有属于自己独创性的创意与构想。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了A篇的「人とは違う発想」(不同于常人的构想)和B篇的「独自の視点」(独到的眼光/视角)。"
        }
      ]
    }
  ]
};
})();
