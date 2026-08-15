(function () {
    'use strict';
    const root = window.ReadingAnalysisData = window.ReadingAnalysisData || {};
    root.N2 = root.N2 || {};
    root.N2.middle = {
  "2010.12": [
    {
      "id": "n2-middle-2010-12-01",
      "questionNumber": 60,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "何事にも『早く、早く",
        "忙しさに追われている"
      ],
      "options": [
        {
          "number": 1,
          "text": "しなければならないことが多くて時間が短く感じられる。",
          "translation": "必须做的事情很多，所以感觉时间变短了。",
          "correct": true,
          "error": null,
          "explanation": "原文「何事にも『早く、早く』とせかされ」「忙しさに追われている」说明要做的事、被催促的事很多，所以觉得时间短。"
        },
        {
          "number": 2,
          "text": "何かに夢中になっていると一日の時間が短く感じられる。",
          "translation": "沉迷于某事时，会觉得一天的时间很短。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说因为沉迷某事而觉得时间短。这里的“时间变短”来自被忙碌追赶，而不是专注带来的时间感变化。"
        },
        {
          "number": 3,
          "text": "作業能率が上がって一日の仕事の時間が短くなっている。",
          "translation": "工作效率提高，一天中工作的时间变短了。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文后面虽然提到能率化，但不是说“一天工作时间缩短”。相反，作者强调的是忙碌感和被追赶感。"
        },
        {
          "number": 4,
          "text": "技術の進歩によって仕事にかかる時間が短くなっている。",
          "translation": "由于技术进步，工作所需时间变短了。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "技术进步、便利化是后文分析社会原因的一部分，但①本身解释的是人们被催促、觉得时间间隔变短的状态。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-12-02",
      "questionNumber": 61,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "より早く仕事を仕上げることがより優れていると評価される",
        "人より早くしなければ負けてしまうという恐れ"
      ],
      "options": [
        {
          "number": 1,
          "text": "何もしないと心が貧しくなってしまうと感じること",
          "translation": "觉得什么都不做的话心灵会变得贫乏。",
          "correct": false,
          "error": "relation-error",
          "explanation": "「心が貧しくなってしまいそう」是作者对这种生活方式的批评结果，不是造成“静不下心”的原因。"
        },
        {
          "number": 2,
          "text": "早く何かを仕上げないとほかの人に勝てないと思うこと",
          "translation": "认为如果不尽快完成某件事，就赢不了别人。",
          "correct": true,
          "error": null,
          "explanation": "原文「より早く仕事を仕上げる」「人より早くしなければ負けてしまう」直接对应“如果不快点完成，就赢不了别人”。"
        },
        {
          "number": 3,
          "text": "失った時間を取り戻さないと競争に負けてしまうと思うこと",
          "translation": "认为如果不夺回失去的时间，就会在竞争中输掉。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文说要「時間を取り戻し」是作者最后提出的建议，不是现代人不安的原因；而且不是“夺回失去的时间来赢竞争”。"
        },
        {
          "number": 4,
          "text": "奪われた時間を取り戻さないと人生を楽しめないと感じること",
          "translation": "觉得如果不夺回被夺走的时间，就无法享受人生。",
          "correct": false,
          "error": "relation-error",
          "explanation": "这个选项接近文章最后的价值判断，但题目问原因。作者说原因是效率评价和竞争恐惧，不是“害怕无法享受人生”。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-12-03",
      "questionNumber": 62,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "ゆっくり歩むからこそ…花に気づいたり、きれいな夕日を楽しむ",
        "もっとゆったりした時間を生きる必要"
      ],
      "options": [
        {
          "number": 1,
          "text": "時間は貴重なので、休む時にも能率的に過ごした方が良い",
          "translation": "时间很宝贵，所以休息时也最好高效度过。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "作者反对把时间都当成效率和金钱来使用，并没有主张连休息都要高效。"
        },
        {
          "number": 2,
          "text": "忙しい中にも、のんびり過ごす時間をできるだけ持った方が良い",
          "translation": "即使忙碌，也最好尽量拥有悠闲度过的时间。",
          "correct": true,
          "error": null,
          "explanation": "原文「もっとゆったりした時間を生きる必要」说明即使在忙碌社会中，也应该尽量拥有悠闲、从容的时间。"
        },
        {
          "number": 3,
          "text": "人生を楽しむためには、ひたすらゆっくり時間を過ごした方が良い",
          "translation": "为了享受人生，最好只是一味慢慢度过时间。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者强调需要ゆったりした時間，但不是“一味地、只要慢慢过”就好。选项的「ひたすら」过于极端。"
        },
        {
          "number": 4,
          "text": "人との競争に勝つためには、時間をもっと有効に使うようにした方が良い",
          "translation": "为了赢得与他人的竞争，最好更有效地利用时间。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文把“为了竞争而高效使用时间”视为现代人被追赶的原因之一，而不是作者赞成的做法。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-12-04",
      "questionNumber": 63,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "この書き方でいいのかな",
        "これ、ひどく下手な書き方じゃないだろうか"
      ],
      "options": [
        {
          "number": 1,
          "text": "このまま最後まで書きあげられるか不安だという気持ち",
          "translation": "担心能不能就这样写到最后的不安。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说担心“最后まで書きあげられるか”。作者担心的是写法、表达是否合适、读者是否能理解。"
        },
        {
          "number": 2,
          "text": "読む人が期待する書き方をしているかという気持ち",
          "translation": "担心自己是否写出了读者所期待的写法。",
          "correct": true,
          "error": null,
          "explanation": "原文「これでわかるかな」和「うまく書いてくれ、と要求してくる」都说明压力来自读者会期待、要求文章写得好、能传达清楚。"
        },
        {
          "number": 3,
          "text": "自分は字を書くのが下手だからいやだという気持ち",
          "translation": "觉得自己字写得不好，所以讨厌写的心情。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文中「下手な書き方」指文章写法可能不好，不是“字を書くのが下手”。这里不是书写字迹的问题。"
        },
        {
          "number": 4,
          "text": "書きたいことがうまく書けているかという気持ち",
          "translation": "担心想写的内容是否写得好、是否表达出来的心情。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这个选项只说“自己想写的内容是否写得好”，缺少文章作为沟通工具、读者是否理解这一核心。原文压力来自读者侧的要求。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-12-05",
      "questionNumber": 64,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "さまざまな障害をかわしながら、次々に問題を解決していって、何とかクリアしていく",
        "不安を抱えながら、何とか書いていくってことを楽しむ"
      ],
      "options": [
        {
          "number": 1,
          "text": "さまざまな障害をクリアしていくことがむずかしい。",
          "translation": "清除各种障碍是很困难的。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文确实说障碍不容易攻略，但①的重点不是“困难”本身，而是困难中不断解决问题、最终完成的乐趣。"
        },
        {
          "number": 2,
          "text": "プレッシャーを忘れ、いろいろ考えるのが楽しい。",
          "translation": "忘记压力，思考各种事情是有趣的。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说忘记压力。相反，作者说「プレッシャーを感じながら」「不安を抱えながら」去写，并从中获得乐趣。"
        },
        {
          "number": 3,
          "text": "苦労して問題を片づけ、課題を仕上げるのが楽しい。",
          "translation": "辛苦地解决问题、完成课题是有趣的。",
          "correct": true,
          "error": null,
          "explanation": "该选项中的「問題を片づけ、課題を仕上げるのが楽しい」对应原文「諸問題をクリアして」「一応のものを書き上げる」以及游戏比喻中的「次々に問題を解決」。"
        },
        {
          "number": 4,
          "text": "不安を抱えたままでは問題を解決するのが難しい。",
          "translation": "如果一直抱着不安，就很难解决问题。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说要抱着不安继续写，并享受这个过程，不是说有不安就难以解决问题。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-12-06",
      "questionNumber": 65,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "文章とは人と人とのコミュニケーションの道具",
        "読む人間がいて完成される"
      ],
      "options": [
        {
          "number": 1,
          "text": "文章の価値を決めるのは読み手の存在だ。",
          "translation": "决定文章价值的是读者的存在。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说“文章价值由读者决定”。读者重要，是因为文章是沟通工具，需要读者来接收和理解。"
        },
        {
          "number": 2,
          "text": "文章が成立するには読み手の存在が必要だ。",
          "translation": "文章要成立，需要读者的存在。",
          "correct": true,
          "error": null,
          "explanation": "原文「書く人間のほかに、読む人間がいて完成される」直接说明文章的成立需要读者。"
        },
        {
          "number": 3,
          "text": "文章は人に読まれることでより良いものになる。",
          "translation": "文章通过被人阅读会变得更好。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说文章被人读了会变得更好，而是说有读者并能被理解，文章才完成、才发挥作用。"
        },
        {
          "number": 4,
          "text": "文章は読み手の要求にこたえることで出来上がる。",
          "translation": "文章通过回应读者的要求而完成。",
          "correct": false,
          "error": "opposite",
          "explanation": "前文提到文章会要求写作者「うまく書いてくれ」，但②的核心不是迎合读者要求，而是“有读者存在并理解内容”这一沟通关系。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-12-07",
      "questionNumber": 66,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "代金の一部が寄付金となって…子供たちの食生活を支援する",
        "体調管理につながるだけでなく、人を助けることができ"
      ],
      "options": [
        {
          "number": 1,
          "text": "社員の健康が守られ、社会の役に立つことにもなる。",
          "translation": "既能守护员工健康，也能对社会有所帮助。",
          "correct": true,
          "error": null,
          "explanation": "原文「体調管理につながる」「人を助けることができ」分别对应员工健康和社会贡献。"
        },
        {
          "number": 2,
          "text": "社員に定食代の一部が返金され、寄付をする余裕ができる。",
          "translation": "员工会收到部分餐费返还，从而有余力捐款。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说餐费的一部分变成寄付金，不是返还给员工，也不是让员工有余钱再去捐款。"
        },
        {
          "number": 3,
          "text": "会社で寄付が日常のことになり、食生活に対する意識も高まる。",
          "translation": "在公司里捐款会成为日常，员工对饮食生活的意识也会提高。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中没有说捐款成为公司日常，也没有重点说员工食生活意识提高。重点是健康管理和支援他人。"
        },
        {
          "number": 4,
          "text": "会社は社会の役に立つことができ、食堂の経費の節約にもなる。",
          "translation": "公司能对社会有所帮助，也能节省食堂经费。",
          "correct": false,
          "error": "not-stated",
          "explanation": "公司确实能进行社会贡献，但原文没有说食堂经费会节约。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-12-08",
      "questionNumber": 67,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "募金の場所へ足を運んだり、銀行からお金を振り込んだりしなければならないものが多く",
        "寄付をするのは面倒"
      ],
      "options": [
        {
          "number": 1,
          "text": "寄付をする方法があまり知られていない。",
          "translation": "捐款方法不太为人所知。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说捐款方法不为人所知，而是说知道也觉得「面倒」，难以实际行动。"
        },
        {
          "number": 2,
          "text": "寄付をすることが社会的に評価されにくい。",
          "translation": "捐款行为不容易受到社会评价。",
          "correct": false,
          "error": "opposite",
          "explanation": "文中没有说捐款不被社会评价。问题不是评价低，而是行动成本高。"
        },
        {
          "number": 3,
          "text": "寄付をするのに手間がかかるシステムである。",
          "translation": "捐款制度需要花费时间和精力。",
          "correct": true,
          "error": null,
          "explanation": "原文「足を運んだり」「振り込んだり」「面倒」直接说明以往捐款需要花费手续和精力。"
        },
        {
          "number": 4,
          "text": "寄付をするためには経済的に余裕がなければならない。",
          "translation": "必须有经济余力才能捐款。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章开头说有些人会从「わずかながらもお遣い」中捐款，所以问题不是必须经济宽裕，而是捐款方式麻烦。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-12-09",
      "questionNumber": 68,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "手軽に寄付ができるようになり",
        "企業にとっても…メリットの多い取り組み"
      ],
      "options": [
        {
          "number": 1,
          "text": "企業が社員や消費者の意思にかかわりなく積極的に行うもの",
          "translation": "企业不管员工或消费者意愿而积极进行的捐款。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说消费者欢迎“买商品同时能捐款”的轻松方式，不是企业无视员工或消费者意愿强行进行。"
        },
        {
          "number": 2,
          "text": "企業が慈善事業のためではなく利益を上げるために行うもの",
          "translation": "企业不是为了慈善事业，而是为了提高利润进行的捐款。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章说不只是为了慈善，也对捐赠一方有益；但并不是说企业“不是为了慈善，只为利润”。选项过于片面。"
        },
        {
          "number": 3,
          "text": "社員や消費者が手軽に寄付ができて企業側に利点があるもの",
          "translation": "员工和消费者可以轻松捐款，同时企业方面也有好处。",
          "correct": true,
          "error": null,
          "explanation": "原文「手軽に寄付ができる」「企業にとっても…メリット」完整概括了新捐款的特点。"
        },
        {
          "number": 4,
          "text": "社員や消費者が気がつかないうちに社会貢献に参加できるもの",
          "translation": "员工和消费者在没有察觉的情况下参与社会贡献。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "员工和消费者是通过低卡路里套餐、寄付つき商品参与捐款，不是完全“気がつかないうちに”。文章强调的是“手軽さ”，不是无意识参与。"
        }
      ]
    }
  ],
  "2010.7": [
    {
      "id": "n2-middle-2010-7-01",
      "questionNumber": 60,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "高速道路に加速しないで進入してくる車",
        "他の車と速度を同じくして会話に加わる"
      ],
      "options": [
        {
          "number": 1,
          "text": "運転で他の車に注意が払える人は会話でも他者に敬意が払えるところ",
          "translation": "开车时能注意其他车辆的人，在会话中也能尊重他人。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章后面确实提到要对不发言的人有敬意，但①处的驾驶比喻重点不是“注意其他车的人也能尊重别人”，而是加入会话时要调整速度。"
        },
        {
          "number": 2,
          "text": "会話も車の運転も技術が高ければ仲間と楽しい時間を過ごせるところ",
          "translation": "无论会话还是开车，只要技术高，就能和伙伴度过愉快时光。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说技术高就能和伙伴开心相处。它强调的是若不配合会话流れ，就会像车流中突然插入一样发生“クラッシュ”。"
        },
        {
          "number": 3,
          "text": "会話も車の運転のように他者とペースを合わせることが求められるところ",
          "translation": "会话也像开车一样，需要和他人配合速度、节奏。",
          "correct": true,
          "error": null,
          "explanation": "原文「他の車と速度を同じくして会話に加わる」直接说明会话和驾驶一样，需要和他人配合节奏。"
        },
        {
          "number": 4,
          "text": "車の運転で事故を起こさない人は会話も同じように慎重に進められるところ",
          "translation": "开车不会出事故的人，在会话中也能同样谨慎地推进。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章说开车发呆可能出事故，但没有把“不出事故的人”和“会话谨慎”对应起来。核心不是谨慎性格，而是节奏配合。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-7-02",
      "questionNumber": 61,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "グループに加わりたいときは、まず黙って話を聞くこと",
        "他の車と速度を同じくして会話に加わる"
      ],
      "options": [
        {
          "number": 1,
          "text": "人の話に軽く返事をしながら車のエンジンを温めること",
          "translation": "一边轻轻回应别人的话，一边让车的发动机暖起来。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这里的「エンジンを温め」是比喻，不是真的温め车的发动机。"
        },
        {
          "number": 2,
          "text": "自分の話を聞いてもらいながらグループの話も聞くこと",
          "translation": "一边让别人听自己的话，一边也听群体的话。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说「まず黙って話を聞く」，不是一边让别人听自己的话，一边听别人说话。"
        },
        {
          "number": 3,
          "text": "まずは人の話を聞きながら会話に加わる準備をすること",
          "translation": "首先听别人说话，同时为加入会话做准备。",
          "correct": true,
          "error": null,
          "explanation": "原文「まず黙って話を聞く」对应“先听别人说话”，「会話に加わる」对应“准备加入会话”。"
        },
        {
          "number": 4,
          "text": "静かに自分の話しをしながら次の話題に移るのを待つこと",
          "translation": "安静地说自己的话，同时等待进入下一个话题。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说“静かに自分の話をする”，而是先不说自己的话，先听，等节奏一致后再加入。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-7-03",
      "questionNumber": 62,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "自分がどれだけ話をしたのか、常に意識していること",
        "発言しない人により多くの意識を配って"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の発言量を意識しながら、おとなしい人にも話してもらうようにすること",
          "translation": "注意自己的发言量，同时也让安静的人有机会说话。",
          "correct": true,
          "error": null,
          "explanation": "选项同时包含原文两点：「自分がどれだけ話をしたのか」和「発言しない人」「話を振る」。"
        },
        {
          "number": 2,
          "text": "発言が少ない人やおとなしい人の話をよく聞き、それに答えるようにすること",
          "translation": "认真听发言少的人或安静的人的话，并回应他们。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文重点不是“听安静的人说并回答”，而是因为他们容易被忽视，所以要主动给他们发言机会。"
        },
        {
          "number": 3,
          "text": "ふだん発言しない人も、みんなの話をよく聞いて会話に参加するようにすること",
          "translation": "平时不发言的人也要认真听大家说话，并参与会话。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文的要求主要是对正在说话、参与会话的人提出的：要关注不发言者，不是要求不发言者自己主动参与。"
        },
        {
          "number": 4,
          "text": "おとなしい人も、大勢で話すときは意識して他の人に話しかけるようにすること",
          "translation": "安静的人在多人谈话时，也要有意识地主动和别人说话。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说要给おとなしい人话题，并不是要求おとなしい人主动对别人说话。主语反了。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-7-04",
      "questionNumber": 63,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "高齢者人口の増加が原因でしょう",
        "老眼鏡を必要とする人の割合が増えた"
      ],
      "options": [
        {
          "number": 1,
          "text": "文字を大きくすることで要点がわかりやすくなること",
          "translation": "通过把文字变大，使要点更容易理解。",
          "correct": false,
          "error": "relation-error",
          "explanation": "要点更容易理解是后面“字体变大后字数减少，所以文章要简化”的说明，不是字体变大的原因。"
        },
        {
          "number": 2,
          "text": "小さい文字が読みにくい高齢の読者が多くなったこと",
          "translation": "觉得小字难读的高龄读者增多了。",
          "correct": true,
          "error": null,
          "explanation": "原文「老眼鏡を必要とする人の割合が増えた」正好对应“小さい文字が読みにくい高齢の読者が多くなった”。"
        },
        {
          "number": 3,
          "text": "紙面に余裕ができるように記事の表現を簡略化したこと",
          "translation": "为了让版面更有余裕而简化报道表达。",
          "correct": false,
          "error": "relation-error",
          "explanation": "简化报道表达是字体变大后的版面处理方式，不是文字变大的原因。"
        },
        {
          "number": 4,
          "text": "高齢者から情報を絞ったほうがよいという意見があったこと",
          "translation": "有人认为面向高龄者应该筛选信息。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说高龄者要求筛选信息。文中只说为了满足读者“看得清”的需求。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-7-05",
      "questionNumber": 64,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "文字が大きくなった分、文字数を減らさねばなりません。そこで、記事は要点をおさえ簡略化して適切化をはかる"
      ],
      "options": [
        {
          "number": 1,
          "text": "以前の紙面は活字の大きさを内容ほど重視していなかった。",
          "translation": "以前的版面不像重视内容那样重视字体大小。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文的反问不是在比较“字体大小和内容哪个更重要”，而是在针对「要点をおさえ簡略化」这一说明。"
        },
        {
          "number": 2,
          "text": "以前の紙面は高齢の読者のニーズに十分こたえていなかった。",
          "translation": "以前的版面没有充分满足高龄读者的需求。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然全文背景是高龄读者需求，但①紧接的是文章简化、要点整理的说明，不是高龄读者需求本身。"
        },
        {
          "number": 3,
          "text": "以前の紙面は重要な情報が簡潔にまとめて書かれていなかった。",
          "translation": "以前的版面没有把重要信息简洁地归纳出来。",
          "correct": true,
          "error": null,
          "explanation": "原文「要点をおさえ簡略化」说明现在要把重要内容简洁整理；作者反问“以前不是这样吗”，即以前是否没有这样做。"
        },
        {
          "number": 4,
          "text": "以前の紙面は読者が納得できるほど詳しく説明していなかった。",
          "translation": "以前的版面没有详细说明到足以让读者信服。",
          "correct": false,
          "error": "opposite",
          "explanation": "①不是在说以前解释得不够详细。相反，前文强调的是简略化、抓要点，而不是详しく説明。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-7-06",
      "questionNumber": 65,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "サイズが大きくなった分、大きく重いという欠点もありますが、その快適さに換えられないという人には…"
      ],
      "options": [
        {
          "number": 1,
          "text": "本を軽くするために活字が小さくなったこと",
          "translation": "为了让书变轻而把字体变小。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说为了让书变轻而把字体变小。这里讨论的是字体变大后书变大变重。"
        },
        {
          "number": 2,
          "text": "老眼鏡を持っていないと少し読みにくいこと",
          "translation": "没有老花镜的话会有点难读。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "大字版辞典的优点正是「老眼鏡なしでも利用できる」，不是没有老花镜会读不清。"
        },
        {
          "number": 3,
          "text": "活字が大きくなって情報が少しだけ減ったこと",
          "translation": "字体变大导致信息稍微减少。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "信息减少是前面报纸版面的问题，不是这里“大字版辞典”的问题。"
        },
        {
          "number": 4,
          "text": "文字が拡大されて辞書が以前より重くなったこと",
          "translation": "文字被放大，辞典比以前更重了。",
          "correct": true,
          "error": null,
          "explanation": "原文「大きく重いという欠点」对应“辞書が以前より重くなったこと”。对重视舒适性的人来说，这个缺点不成问题。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-7-07",
      "questionNumber": 66,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "いまの仕事に大きな不満はないが、そうかといって格別面白いというわけでもない"
      ],
      "options": [
        {
          "number": 1,
          "text": "いまの仕事が嫌なわけではないこと",
          "translation": "并不是讨厌现在的工作。",
          "correct": true,
          "error": null,
          "explanation": "原文「大きな不満はない」说明作者并不讨厌现在的工作，所以转职只是想象，不是非常认真。"
        },
        {
          "number": 2,
          "text": "いまから転職をするのは難しいこと",
          "translation": "现在开始转职很困难。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说“现在转职很难”。它说工作不像衣服那样可以试穿，但这不是①本気ではない的直接理由。"
        },
        {
          "number": 3,
          "text": "いまの仕事がとても充実していること",
          "translation": "现在的工作非常充实。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说现在的工作不是「格別面白い」，也没有说“とても充実している”。"
        },
        {
          "number": 4,
          "text": "いままで別の仕事をしたことがないこと",
          "translation": "至今没有做过别的工作。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说明作者是否做过别的工作，因此不能作为理由。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-7-08",
      "questionNumber": 67,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "自分にピッタリの洋服",
        "自分にピッタリの仕事を探せばよい"
      ],
      "options": [
        {
          "number": 1,
          "text": "特別な才能が必要な仕事",
          "translation": "需要特殊才能的工作。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "后文说「たとえ平凡な才能でも」，说明并不一定是需要特别才能的工作。"
        },
        {
          "number": 2,
          "text": "他人がうらやましがる仕事",
          "translation": "会让别人羡慕的工作。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章开头说“隣の芝生はよく見える”只是用来说明别人工作看起来好，不是作者要找的“自己的工作”。"
        },
        {
          "number": 3,
          "text": "自分に最も合っている仕事",
          "translation": "最适合自己的工作。",
          "correct": true,
          "error": null,
          "explanation": "「ピッタリの洋服」「自分にピッタリの仕事」都说明②指最适合自己的工作。"
        },
        {
          "number": 4,
          "text": "子供の頃から憧れていた仕事",
          "translation": "从小时候开始憧憬的工作。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者提到野球選手、映画監督等憧れ的职业，但马上说「そんな憧れの世界ではない」，所以不是小时候憧憬的工作。"
        }
      ]
    },
    {
      "id": "n2-middle-2010-7-09",
      "questionNumber": 68,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "誰しも、自由な職業選択における自分だけの“必然”を求めている"
      ],
      "options": [
        {
          "number": 1,
          "text": "職業の選択が自由になり、昔よりも自分に合った仕事を探しやすくなった。",
          "translation": "职业选择变得自由，因此比过去更容易寻找适合自己的工作。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章确实说职业选择范围扩大，但并没有说因此更容易找到适合自己的工作。相反，作者说能自信说“这是自己的工作”的人并不多。"
        },
        {
          "number": 2,
          "text": "自由に仕事を選べるので、仕事の本質を理解したいと考える人が増えている。",
          "translation": "因为可以自由选择工作，所以想理解工作本质的人增多了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中说“仕事の本質はわからないだろう”，但没有说想理解工作本质的人增多。"
        },
        {
          "number": 3,
          "text": "自由に仕事を選べる環境で、だれもが自分に適した仕事をしたいと考えている。",
          "translation": "在能够自由选择工作的环境中，谁都想做适合自己的工作。",
          "correct": true,
          "error": null,
          "explanation": "原文「誰しも」「自分だけの“必然”を求めている」说明每个人都希望在自由选择中找到适合自己的工作。"
        },
        {
          "number": 4,
          "text": "職業の選択の幅が拡がったため、いまではだれでも自由に転職できるようになった。",
          "translation": "由于职业选择范围扩大，现在谁都可以自由转职了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章只说职业选择幅度比过去扩大，不是说现在人人都能自由转职。"
        }
      ]
    }
  ],
  "2011.12": [
    {
      "id": "n2-middle-2011-12-01",
      "questionNumber": 60,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "『完成したときの喜び"
      ],
      "options": [
        {
          "number": 1,
          "text": "ものを作る過程は本当に楽しいということ",
          "translation": "制作东西的过程真的很有趣。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文第一句确实说「ものを作る過程は、本当に楽しい」，但①「それ」紧接在「完成したときの喜び」后面，指代的是后者，不是第一句的“过程很快乐”。"
        },
        {
          "number": 2,
          "text": "ものが出来上がったときはうれしいということ",
          "translation": "东西完成的时候会感到高兴。",
          "correct": true,
          "error": null,
          "explanation": "原文「『完成したときの喜び』とよく表現されるけれど、①それは違う」中，「それ」直接承接「完成したときの喜び」，也就是“完成时很高兴”。"
        },
        {
          "number": 3,
          "text": "もの作りを頼まれたときは喜びを感じるということ",
          "translation": "被人委托制作东西时会感到喜悦。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "后文提到「誰かに頼まれて作っているもの」时会有解放感和成就感，但这不是①之前的指代内容。①只回指紧前面的「完成したときの喜び」。"
        },
        {
          "number": 4,
          "text": "ものを作るときも完成したときもうれしいということ",
          "translation": "制作时和完成时都会感到高兴。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文没有说“制作时和完成时都高兴”。作者正是在区分“过程的快乐”和“完成时的喜悦”，并否定把快乐归结为完成瞬间。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-12-02",
      "questionNumber": 61,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "要求された水準を満たしているだろう、という境界線が…設定されているから、そこが『完成"
      ],
      "options": [
        {
          "number": 1,
          "text": "相手に引き渡す期限が設定されている場合",
          "translation": "设定了交付给对方的期限时。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文有「引き渡せる」，但重点不是“期限が設定されている”，而是「要求された水準」を満たしているか。文章没有说因为有交付期限，所以知道完成。"
        },
        {
          "number": 2,
          "text": "相手によってレベルが設定されている場合",
          "translation": "由对方设定了应达到的水准时。",
          "correct": true,
          "error": null,
          "explanation": "原文「要求された水準」「境界線が…設定されている」说明完成的判断来自对方要求的标准或水准。"
        },
        {
          "number": 3,
          "text": "自分が納得するレベルを設定した場合",
          "translation": "自己设定了能够接受的水准时。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文说的是「誰かに頼まれて」「要求された水準」，也就是外部委托方的标准，不是自己设定自己满意的标准。"
        },
        {
          "number": 4,
          "text": "自分が決めたルールに従って仕事を終えた場合",
          "translation": "按照自己决定的规则完成工作时。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中确实用レース作比喻，说规则预先设定，但这是说明“外部设定的终点”。选项说「自分が決めたルール」与原文不一致。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-12-03",
      "questionNumber": 62,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "自分が…欲求で作り始めたもの",
        "ゴールがはっきりとしていない"
      ],
      "options": [
        {
          "number": 1,
          "text": "依頼されたものを作るときは、完成までの時間が楽しい。",
          "translation": "制作受人委托的东西时，到完成为止的时间很快乐。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "受委托的东西在原文中对应的是「労働から解放される喜び」和「達成感」，不是说“完成前的过程很快乐”。这个选项把作者用于“自己想做的东西”的过程快乐，套到了委托工作上。"
        },
        {
          "number": 2,
          "text": "ものを作るということは、完成後に振り返る時間が楽しい。",
          "translation": "所谓制作东西，是完成后回顾的时间很快乐。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文最后说回头看时只能看到「一段落」，但快乐并不在“完成后回顾的时间”。作者明确说「こつこつと進む過程」が「わくわくして楽しい」。"
        },
        {
          "number": 3,
          "text": "どんなものを作る時でも、完成があるから過程が楽しい。",
          "translation": "无论制作什么，因为有完成这一刻，所以过程才快乐。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文正好否定“因为有完成所以过程快乐”。对于自己想做的东西，作者说「ゴールなんてどこにもない」，没有明确完成点。"
        },
        {
          "number": 4,
          "text": "自分が作りたいものを作るときは、完成ではなく過程が楽しい。",
          "translation": "制作自己想做的东西时，快乐的不是完成，而是过程本身。",
          "correct": true,
          "error": null,
          "explanation": "原文「自分が自分の欲求で作り始めたもの」は「ゴールがはっきりとしていない」，同时「こつこつと進む過程」は「わくわくして楽しい」。所以重点是“不是完成，而是过程快乐”。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-12-04",
      "questionNumber": 63,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "集団行動の経験もなく、家でも甘やかされて育ってイヌは…挨拶をしないように見えます"
      ],
      "options": [
        {
          "number": 1,
          "text": "子イヌと成犬を区別できないイヌ",
          "translation": "不能区分小狗和成犬的狗。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文后半说挨拶犬会「子イヌと成犬とを区別」后判断是否打招呼，但题目问的是“不打招呼的狗是什么样的狗”，不是是否能区分小狗和成犬。"
        },
        {
          "number": 2,
          "text": "挨拶をしない親イヌに育てられた子イヌ",
          "translation": "由不打招呼的成年狗养大的小狗。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说“由不打招呼的亲狗养大的小狗”会不打招呼。文章讨论的是集体行动经验和主人教育，不是亲狗是否打招呼。"
        },
        {
          "number": 3,
          "text": "他のイヌと一緒に生活をしたことがあるイヌ",
          "translation": "曾和其他狗一起生活过的狗。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文说「集団行動を経験したことがあるイヌ」は会在靠近其他狗时做类似打招呼的行为，因此这类狗不是“不打招呼/不会打招呼”的对象。"
        },
        {
          "number": 4,
          "text": "イヌ社会の経験も飼い主による教育もないイヌ",
          "translation": "既没有狗社会经验，也没有接受过主人教育的狗。",
          "correct": true,
          "error": null,
          "explanation": "原文「集団行動の経験もなく、家でも甘やかされて育って」对应没有狗社会经验，也没有通过主人教育形成等级意识，所以看起来不打招呼。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-12-05",
      "questionNumber": 64,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "挨拶をするイヌが、ほかの挨拶なしのイヌに対して威嚇する"
      ],
      "options": [
        {
          "number": 1,
          "text": "挨拶できるイヌが挨拶しない成犬に",
          "translation": "会打招呼的狗对不打招呼的成犬。",
          "correct": true,
          "error": null,
          "explanation": "原文先说「挨拶をするイヌ」が「挨拶なしのイヌ」に威吓，又排除了子犬的情况，因此对应“会打招呼的狗 → 不打招呼的成犬”。"
        },
        {
          "number": 2,
          "text": "挨拶できるイヌが挨拶しない子イヌに",
          "translation": "会打招呼的狗对不打招呼的小狗。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文特意说「子イヌが挨拶をできなくても威嚇をしないことが多い」，所以“不打招呼的小狗”通常不是被威吓的对象。"
        },
        {
          "number": 3,
          "text": "挨拶できないイヌが挨拶する成犬に",
          "translation": "不会打招呼的狗对会打招呼的成犬。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文中发出威吓的是「挨拶をするイヌ」，不是“不会打招呼的狗”。主语反了。"
        },
        {
          "number": 4,
          "text": "挨拶できないイヌが挨拶する子イヌに",
          "translation": "不会打招呼的狗对会打招呼的小狗。",
          "correct": false,
          "error": "not-stated",
          "explanation": "这个选项同时把主语和对象都说错了。原文没有说不会打招呼的狗会威吓会打招呼的小狗。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-12-06",
      "questionNumber": 65,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "イヌ社会での経験がなくてもある程度の挨拶行動ができる",
        "集団生活があったほうがよい"
      ],
      "options": [
        {
          "number": 1,
          "text": "イヌ社会での経験より飼い主の教育があったほうが、スムーズにできる。",
          "translation": "比起狗社会中的经验，有主人的教育会更顺利地做到。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有比较“主人教育”和“狗社会经验”哪个更重要。它只说主人教育可以让狗能感受順位制，而更仪式性的挨拶要顺畅进行，则最好有集体生活经验。"
        },
        {
          "number": 2,
          "text": "イヌ社会での経験は必ずしも必要ではないが、あればスムーズにできる。",
          "translation": "狗社会中的经验并非绝对必要，但如果有的话会更顺利。",
          "correct": true,
          "error": null,
          "explanation": "原文「経験がなくてもある程度の挨拶行動ができる」对应“不是必需”，「集団生活があったほうがよい」对应“有的话更顺畅”。"
        },
        {
          "number": 3,
          "text": "イヌ社会での集団生活と飼い主の教育によって初めて習得できるものだ。",
          "translation": "只有通过狗社会中的集体生活和主人的教育，才能习得。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说没有狗社会经验也能做到一定程度的挨拶，因此不能说必须通过集体生活和主人教育才“初めて”习得。"
        },
        {
          "number": 4,
          "text": "イヌ社会での集団生活を経験することによって始めて習得できるものだ。",
          "translation": "只有经历狗社会中的集体生活，才能开始习得。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文明确说「イヌ社会での経験がなくても」也能有一定程度的挨拶行動，所以不能说只有经历集体生活才能开始习得。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-12-07",
      "questionNumber": 66,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "自然の風景や名所旧跡は静的である",
        "いつ出かけても、おなじ景色にめぐりあえる"
      ],
      "options": [
        {
          "number": 1,
          "text": "筆者は、勤務先の環境がよく、美しい風景を見なれているから",
          "translation": "因为作者工作地点环境很好，已经看惯了美丽的风景。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文提到作者的工作地点在巨大公园里、别人觉得羡慕，但这只是举例说明“走惯的路会无聊”。真正解释名胜风景让感动难以持续的句子是「静的」「おなじ景色」「あまり変化しない」。"
        },
        {
          "number": 2,
          "text": "筆者は、街中の風景が好きで、古いものや自然に興味がないから",
          "translation": "因为作者喜欢街上的风景，对古老事物和自然没有兴趣。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者确实说比起自然，更喜欢走在「街なかの雑踏」，但并没有说自己“对古いものや自然に興味がない”。他开头还说遇到名胜风景时也会「感激する」。"
        },
        {
          "number": 3,
          "text": "すばらしい風景や名所などは、いつもおなじで変化が感じられないから",
          "translation": "因为美丽风景和名胜等总是差不多，感受不到变化。",
          "correct": true,
          "error": null,
          "explanation": "原文「いつ出かけても、おなじ景色にめぐりあえる」「風景の主人公はあまり変化しない」正好说明这些景色缺少变化，所以感动难以持久。"
        },
        {
          "number": 4,
          "text": "すばらしい風景や名所などは、すでに絵はがきになっていて珍しくないから",
          "translation": "因为美丽风景和名胜等已经被做成明信片，并不稀奇。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章说风景和美术品明信片产生，是为了向没去过的人传达感动；并没有说因为已经变成明信片所以“不珍しい”。因果关系不对。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-12-08",
      "questionNumber": 67,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "ときどき、ながめたり、人に見せたりして、旅の追体験をし、イメージを固定化する"
      ],
      "options": [
        {
          "number": 1,
          "text": "実際に見て感動した景色などを、そこに行っていない人に送るため",
          "translation": "为了把亲眼看到并感动过的景色等寄给没去过那里的人。",
          "correct": false,
          "error": "relation-error",
          "explanation": "原文前面说，明信片最初作为「自分の感動を伝える手段」产生，可以给没去过的人看；但题目问的是「個人的コレクションとして」收集的目的，而作者马上用「しかし、投函するためではなく」排除了寄送目的。"
        },
        {
          "number": 2,
          "text": "自分が訪れた場所の季節の変化を、イメージできるようにするため",
          "translation": "为了能够想象自己去过的地方在季节中的变化。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文说自然背景会随季节变化，但明信片收藏的目的不是想象季节变化，而是「旅の追体験」「イメージを固定化」。"
        },
        {
          "number": 3,
          "text": "訪れた場所の風景や名所などを振り返り、はっきりと記憶に残すため",
          "translation": "为了回顾去过的地方的风景和名胜，并清楚地留在记忆中。",
          "correct": true,
          "error": null,
          "explanation": "「ながめたり、人に見せたり」是回顾手段，「旅の追体験」「イメージを固定化する」就是把去过地方的风景和名胜固定在记忆中。"
        },
        {
          "number": 4,
          "text": "旅先で集めたものを保存しておいて、多くの人たちと情報を交換するため",
          "translation": "为了保存旅行中收集的东西，并和许多人交换信息。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说要和许多人交换信息。明信片收藏是个人性的回顾和固定印象，不是信息交换。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-12-09",
      "questionNumber": 68,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "売り手と買い手の駆け引き",
        "人びとのふるまい"
      ],
      "options": [
        {
          "number": 1,
          "text": "市場で人びとの生き生きとした様子を観察するため",
          "translation": "为了在市场观察人们生动鲜活的样子。",
          "correct": true,
          "error": null,
          "explanation": "原文「売り手と買い手の駆け引き」「人びとのふるまい」「生活のショーウィンドー」说明市场吸引人的核心在于观察活生生的人和生活状态。"
        },
        {
          "number": 2,
          "text": "市場で実際に売られている食物の記録をとるため",
          "translation": "为了记录市场上实际出售的食物。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文确实说市场是「生きた食物図鑑」，但这是作者作为食文化研究者的职业角度；选项只说记录食物，范围过窄，也没有抓住市场型人的一般兴趣。"
        },
        {
          "number": 3,
          "text": "見知らぬ街の市場で珍しいものを見つけるため",
          "translation": "为了在陌生城市的市场里发现稀奇的东西。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有说去市场是为了找“珍しいもの”。作者强调的是市场中的人和生活动态，而不是猎奇。"
        },
        {
          "number": 4,
          "text": "絵はがきのような市場の風景を自分の目で見るため",
          "translation": "为了亲眼看到像明信片一样的市场风景。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章把“絵はがき型”和“市場型”对比，市场型并不是去看像明信片一样静态的风景，而是去看动态的生活场景。"
        }
      ]
    }
  ],
  "2011.7": [
    {
      "id": "n2-middle-2011-7-01",
      "questionNumber": 60,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "第2には、わずかな傷も許さないなど見た目へのこだわり",
        "消費者は後者のこだわりを捨てつつある"
      ],
      "options": [
        {
          "number": 1,
          "text": "商品の機能や味を重視しなくなった。",
          "translation": "不再重视商品的功能和味道了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文说消费者放下的是「後者のこだわり」，也就是外观上的讲究；「機能や味」是第一个意思，文章没有说不再重视它们。"
        },
        {
          "number": 2,
          "text": "商品の機能や味を重視するようになった。",
          "translation": "开始重视商品的功能和味道了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章开头确实提到消费者对「機能や味」要求水准高，但题目问的是“变化”。原文指出的变化是对外观的讲究在减弱，不是开始重视功能和味道。"
        },
        {
          "number": 3,
          "text": "商品の傷などの見た目を気にしなくなった。",
          "translation": "不再那么在意商品划痕等外观问题了。",
          "correct": true,
          "error": null,
          "explanation": "「わずかな傷も許さないなど見た目へのこだわり」是后者，而「後者のこだわりを捨てつつある」说明消费者不再那么在意商品伤痕等外观问题。"
        },
        {
          "number": 4,
          "text": "商品の傷などの見た目を気にするようになった。",
          "translation": "开始在意商品划痕等外观问题了。",
          "correct": false,
          "error": "opposite",
          "explanation": "选项内容正好和原文相反。原文不是说更在意外观，而是说正在放下对外观的讲究。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-7-02",
      "questionNumber": 61,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "商品の傷も前の使用者のぬくもりとプラスにとらえる",
        "不ぞろいな野菜は、むしろ手作り品を思わせる長所"
      ],
      "options": [
        {
          "number": 1,
          "text": "少しぐらい質が下がっても、安いほうがいいと考えるようになった。",
          "translation": "开始认为即使质量稍微下降一点，便宜也更好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文虽然提到「安く使い」，但作者强调的是「エコロジーと節約を両立」和「前向きの価値」，不是“质量下降也便宜就好”。"
        },
        {
          "number": 2,
          "text": "ものに対する要求水準が下がって、どの商品にも価値を認めるようになった。",
          "translation": "对物品的要求水准降低，开始承认任何商品都有价值。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说消费者的要求水准整体下降，也没有说任何商品都有价值。后文还提醒粗悪品、不良品可能增加，消费者要有「厳しい目」。"
        },
        {
          "number": 3,
          "text": "多少問題があっても、環境のために我慢するほうがいいと思うようになった。",
          "translation": "开始认为即使多少有些问题，为了环境也最好忍耐。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文说「必ずしもそうではない」，否定了消费者是在“我慢して買っている”。消费者不是为了环境忍耐，而是在其中发现了新的价值。"
        },
        {
          "number": 4,
          "text": "今まで問題があると思われたものにも、違った価値があると思うようになった。",
          "translation": "开始认为过去被看作有问题的东西，也有不同的价值。",
          "correct": true,
          "error": null,
          "explanation": "「傷」被理解为「ぬくもり」，「不ぞろいな野菜」被看作「長所」，这些都说明过去的问题点被重新理解成另一种价值。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-7-03",
      "questionNumber": 62,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "消費者の新たな価値観に、企業がようやく追いついてきた"
      ],
      "options": [
        {
          "number": 1,
          "text": "見た目にこだわらなくなった。",
          "translation": "不再讲究外观了。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说企业自己“不再讲究外观”，而是说企业开始跟上消费者对“外观瑕疵也可有价值”的新看法。主语和重点都不够准确。"
        },
        {
          "number": 2,
          "text": "環境への責任の重さを感じ始めた。",
          "translation": "开始感受到对环境的重大责任。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中提到再利用和生态，但「追いついてきた」直接连接的是「消費者の新たな価値観」，不是企业开始感到环境责任。"
        },
        {
          "number": 3,
          "text": "消費者の厳しい目を意識するようになった。",
          "translation": "开始意识到消费者严格的眼光。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章最后确实说消费者也需要有「厳しい目」，但那是对市场扩大后风险的提醒，不是「追いついてきた」的意思。"
        },
        {
          "number": 4,
          "text": "消費者の意識の変化をくみ取るようになった。",
          "translation": "开始理解并把握消费者意识的变化。",
          "correct": true,
          "error": null,
          "explanation": "原文「消費者の新たな価値観に、企業がようやく追いついてきた」说明企业开始把握消费者意识变化，并据此行动。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-7-04",
      "questionNumber": 63,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "契約が結べなかった日",
        "あの社長と一時間も話せるところまできた"
      ],
      "options": [
        {
          "number": 1,
          "text": "ピアノの先生には何も言われなかったけれども、自分ではうまくひけなかったので次はもっと頑張りたいと思う。",
          "translation": "虽然钢琴老师什么也没说，但自己觉得弹得不好，所以下次想更努力。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这个选项只停留在“自己觉得没弹好，所以下次更努力”，没有像原文那样从失败中找出已经做到的成果并评价。"
        },
        {
          "number": 2,
          "text": "パーティーの準備をするのが大変だったけれども、みんなが喜んでくれたのでまたぜひ開きたいと思う。",
          "translation": "虽然准备派对很辛苦，但大家都很开心，所以还想再举办。",
          "correct": false,
          "error": "relation-error",
          "explanation": "这里大家都很高兴，结果本身已经成功了；而原文例子是「契約が結べなかった日」，重点是在未达成目标时也找到小的积极成果。"
        },
        {
          "number": 3,
          "text": "強いチームが相手で試合に勝てなかったけれども、得点を入れることができたのでよかったと考える。",
          "translation": "对手是强队，虽然没赢比赛，但自己能得分，所以觉得还不错。",
          "correct": true,
          "error": null,
          "explanation": "原文「契約が結べなかった」对应“比赛没赢”，「一時間も話せるところまできた」对应“能得分”。都是在未达成最终目标的情况下，发现并肯定小成果。"
        },
        {
          "number": 4,
          "text": "何かを買おうと思っていたわけではないけれども、ちょうど気に入った服が見つかったのでよかったと考える。",
          "translation": "本来并没有想买什么，但正好找到了喜欢的衣服，所以觉得很好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这个选项是偶然买到喜欢的衣服，并不是在困难或失败中降低幸福感标准、寻找成果。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-7-05",
      "questionNumber": 64,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "仕事はお金をもらうのだから、楽しくないことがあっても当たり前"
      ],
      "options": [
        {
          "number": 1,
          "text": "仕事には苦労があるものだということ",
          "translation": "工作本来就会有辛苦的事。",
          "correct": true,
          "error": null,
          "explanation": "原文「楽しくないことがあっても当たり前」说明工作中有苦劳、不开心的事情是自然的，这正是②「そこ」的内容。"
        },
        {
          "number": 2,
          "text": "仕事をすれば何かいいことがあるということ",
          "translation": "只要工作就会有好事发生。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文后面确实说有好事时幸福感会倍增，但②指代的是前面的基准，不是“工作就一定有好事”。"
        },
        {
          "number": 3,
          "text": "仕事ではお金をもらうのが当然だということ",
          "translation": "工作中拿钱是理所当然的。",
          "correct": false,
          "error": "relation-error",
          "explanation": "句中出现「お金をもらう」是理由，用来说明为什么不开心也正常；②「そこ」不是单纯指“工作会拿钱”。"
        },
        {
          "number": 4,
          "text": "仕事はうまくいかなくて当たり前だということ",
          "translation": "工作不顺利是理所当然的。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文说的是「楽しくないことがあっても当たり前」，并不是“工作不顺利是当然的”。范围过窄，且把“有不愉快”变成了“总是不顺利”。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-7-06",
      "questionNumber": 65,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "小さなことでも楽しめるようになることも…あなどれないポイント",
        "幸せ感のハードルを低くする"
      ],
      "options": [
        {
          "number": 1,
          "text": "仕事も精一杯頑張ればそれだけ充実感を得ることができる。",
          "translation": "工作只要拼命努力，就能相应获得充实感。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说“只要拼命努力就能获得充实感”。作者强调的是调整看待工作的标准，从小事中感到快乐，而不是单纯努力。"
        },
        {
          "number": 2,
          "text": "仕事もまず表情を意識することで楽しい気持ちが湧いてくる。",
          "translation": "工作中也要先注意表情，快乐心情就会涌现出来。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中提到“先做出笑容会产生快乐心情”的研究结果，但这是用来引出观点的类比，不是全文主旨。主旨落在「小さなことでも楽しめるようになる」。"
        },
        {
          "number": 3,
          "text": "自分が本当に好きな仕事であれば笑顔で楽しむことができる。",
          "translation": "如果是自己真正喜欢的工作，就能带着笑容享受它。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说「楽しめる仕事を探すのも大事だが」，但后面用「小さなことでも楽しめるようになることも」强调即使不是完全喜欢的工作，也能通过小事找到快乐。"
        },
        {
          "number": 4,
          "text": "小さいことに喜びを持つことで楽しく仕事ができるようになる。",
          "translation": "通过从小事中获得喜悦，就能逐渐快乐地工作。",
          "correct": true,
          "error": null,
          "explanation": "结尾「小さなことでも楽しめるようになる」直接对应选项“小さいことに喜びを持つ”。这也是“幸せ感のハードルを低くする”的具体实践。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-7-07",
      "questionNumber": 66,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "普段慣れている動作ほど、その動作に対する神経支配がしっかりとできあがっている",
        "神経回路を組みかえることになるので、そう簡単にはいかない"
      ],
      "options": [
        {
          "number": 1,
          "text": "走るフォームは一度固定されると変えられないから",
          "translation": "因为跑步姿势一旦固定就无法改变。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说的是「そう簡単にはいかない」，意思是“不容易”，并不是“一旦固定就完全不能改变”。选项把难以改变说成不能改变，过于绝对。"
        },
        {
          "number": 2,
          "text": "走るフォームを指導する方法があまり改善されていないから",
          "translation": "因为指导跑步姿势的方法没有太大改进。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说指导方法没有改善。原文提到教练会指导摆臂、膝盖、前倾等，但问题不在指导方法，而在动作背后的神经回路难以重组。"
        },
        {
          "number": 3,
          "text": "走るための神経の仕組みはすでにできていて変えにくいから",
          "translation": "因为用于跑步的神经机制已经形成，很难改变。",
          "correct": true,
          "error": null,
          "explanation": "原文「神経支配がしっかりとできあがっている」「神経回路を組みかえる」说明跑步动作的神经机制已经形成，因此改变起来困难。"
        },
        {
          "number": 4,
          "text": "走るための神経の仕組みは他の動作とは違う特殊なものだから",
          "translation": "因为用于跑步的神经机制不同于其他动作，是特殊的机制。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说这是“普段慣れている動作ほど”都会出现的现象，不是跑步的神经机制特殊于其他动作。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-7-08",
      "questionNumber": 67,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "トレーニングの効果が上がらない人は、『運動神経"
      ],
      "options": [
        {
          "number": 1,
          "text": "練習に十分な時間が取れない場合",
          "translation": "无法取得充分练习时间的情况。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文确实说动作修正需要「多くの時間と繰り返し」，但②前面强调的是「効果が上がらない」的情况，不是没有时间练习。"
        },
        {
          "number": 2,
          "text": "練習の効果がうまく現れない場合",
          "translation": "练习效果不能顺利显现的情况。",
          "correct": true,
          "error": null,
          "explanation": "②前紧接着的内容是「トレーニングの効果が上がらない人」。所以「この場合」就是训练效果不明显、不顺利的情况。"
        },
        {
          "number": 3,
          "text": "走り方の改善に集中できない場合",
          "translation": "无法集中精力改善跑法的情况。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说跑者会「体の動きの修正に意識を向けて」训练，并没有说问题在于无法集中。"
        },
        {
          "number": 4,
          "text": "コーチの指導が理解できない場合",
          "translation": "无法理解教练指导的情况。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说跑者不能理解教练指导。问题是即使接受指导并训练，动作修正效果也未必上来。"
        }
      ]
    },
    {
      "id": "n2-middle-2011-7-09",
      "questionNumber": 68,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "『動作をイメージし、それに体感する"
      ],
      "options": [
        {
          "number": 1,
          "text": "速く走る動きを頭に描いてその感覚を体で感じるようにする。",
          "translation": "在脑中描绘快速奔跑的动作，并努力用身体感受这种感觉。",
          "correct": true,
          "error": null,
          "explanation": "选项中的「頭に描いて」对应原文「動作をイメージし」，「感覚を体で感じる」对应「それに体感する」。"
        },
        {
          "number": 2,
          "text": "神経の仕組みに直接刺激を与えるためにいろいろな走り方を試す。",
          "translation": "为了直接刺激神经机制，尝试各种跑法。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文确实说需要给神经回路直接刺激的训练工夫，但具体有效方法不是“尝试各种跑法”，而是「動作をイメージし、それに体感する」。"
        },
        {
          "number": 3,
          "text": "頭で考えるよりも、何度も練習を重ねて体で覚えるようにする。",
          "translation": "比起用头脑思考，更要反复练习，让身体记住。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章不是反对用头脑想象。相反，作者明确说要「動作をイメージ」；单纯反复练习并不是本文提出的关键方法。"
        },
        {
          "number": 4,
          "text": "コーチの指導を受けながら走り方の修正に全神経を集中させて走る。",
          "translation": "一边接受教练指导，一边把全部神经集中在修正跑法上奔跑。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "前文说通常会接受教练指导、集中于动作修正，但这种做法往往需要很多时间且效果不一定好。作者提出的解决方向是刺激神经回路，而不是继续只靠教练指导和集中修正。"
        }
      ]
    }
  ],
  "2012.12": [
    {
      "id": "n2-middle-2012-12-01",
      "questionNumber": 60,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "コピー代が安くすめば、もう少し余裕のある学生生活が送れるかもしれない。このような事情を実感していた大学生たちが5人集まって、無料でコピーがとれるコピー機を大学に設置する会社を始め……",
        "日本の大学生はコピーをとる機会が多い。コピー代は大抵1枚10円で、決して高くはない。けれども、枚数が多いため、大学生にとってはそれなりの負担になる。コピー代が安くすめば、もう少し余裕のある学生生活が送れるかもしれない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "大学生向けの情報をコピーを使って提供すること",
          "translation": "利用复印提供面向大学生的信息",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是在纸上印企业广告，而不是提供面向大学生的信息。"
        },
        {
          "number": 2,
          "text": "大学生にコピー代の節約を意識してもらうこと",
          "translation": "让大学生意识到节约复印费",
          "correct": false,
          "error": "relation-error",
          "explanation": "目的是直接提供免费复印以减轻负担，而不是让他们“意识到（意識してもらう）”节约。"
        },
        {
          "number": 3,
          "text": "大学生が多くコピーをとれるようにすること",
          "translation": "让大学生能复印很多",
          "correct": false,
          "error": "relation-error",
          "explanation": "目的是减轻现有复印量带来的经济负担，而不是为了让他们能复印得“更多（多く）”。"
        },
        {
          "number": 4,
          "text": "大学生のコピー代の負担を少なくすること",
          "translation": "减轻大学生的复印费负担",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文希望复印费变便宜（安くすめば）、减轻负担（負担になる）的初衷。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-12-02",
      "questionNumber": 61,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "この会社は、このようにして得た広告掲載料を、無料コピー機の経費にあてているのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "学生が払うべきコピー代を、広告費として後から企業に請求できるから",
          "translation": "因为学生该付的复印费，事后可以作为广告费向企业请求支付",
          "correct": false,
          "error": "opposite",
          "explanation": "不是事后向企业请求学生该付的复印费，而是事先按广告位收取广告费。"
        },
        {
          "number": 2,
          "text": "広告が掲載されたコピー用紙を、企業から提供してもらえるから",
          "translation": "因为能从企业那里获得印有广告的复印纸",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "复印纸是公司印好广告后放进去的，不是企业直接提供的复印纸。"
        },
        {
          "number": 3,
          "text": "企業から受け取る広告掲載料を、コピー機の経費として使えるから",
          "translation": "因为能把从企业收取的广告刊登费作为复印机的经费使用",
          "correct": true,
          "error": null,
          "explanation": "完美对应原文“把广告刊登费，充当免费复印机的经费（広告掲載料を、無料コピー機の経費にあてている）”。"
        },
        {
          "number": 4,
          "text": "企業の広告が描かれたコピー機を、企業から借りられるから",
          "translation": "因为能从企业借来画着企业广告的复印机",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "复印机是公司自己设置的，不是从企业借来的。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-12-03",
      "questionNumber": 62,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "学生向けの広告を、学生に対してのみ効果的に出せるのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "大学生を通して、他の人にも広告商品を宣伝できる。",
          "translation": "能通过大学生向其他人宣传广告商品。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "优点在于“仅针对学生（学生に対してのみ）”，而不是通过他们向“其他人（他の人）”宣传。"
        },
        {
          "number": 2,
          "text": "対象を大学生に絞しぼり込めるので、効果的に広告を出せる。",
          "translation": "因为能把对象锁定在大学生，所以能有效地投放广告。",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文“能够仅针对学生，有效地投放面向学生的广告”。"
        },
        {
          "number": 3,
          "text": "広告に対する学生の反応を、今後の商品開発に生かせる。",
          "translation": "能将学生对广告的反应应用在今后的商品开发中。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章说的是提升广告投放的效果，并未提及利用学生的反应进行“商品开发（商品開発）”。"
        },
        {
          "number": 4,
          "text": "ちらしより捨てられにくいので、広告を出す回数が減らせる。",
          "translation": "因为比传单更不容易被扔掉，所以能减少出广告的次数。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章说复印纸不易被扔掉，所以学生看到广告的可能性高，但并未说这能“减少出广告的次数（広告を出す回数が減らせる）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-12-04",
      "questionNumber": 63,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "その結果、計算や暗記などの作業効率は、午前１０時と午後３時くらいがピークでした。午前８時の成績を１００とすると、同１０時に１６０まで上昇。その後、午後１時に９８まで下がり、同３時には１０３に上がるという曲線を描いたそうです。",
        "その結果、計算や暗記などの作業効率は、午前１０時と午後３時くらいがピークでした。"
      ],
      "options": [
        {
          "number": 1,
          "text": "時間帯が早ければ早いほど成績が上がる。",
          "translation": "时间段越早成绩越好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "成绩是起伏的，上午8点（100）就不如10点（160），并不是越早越好。"
        },
        {
          "number": 2,
          "text": "時間帯が遅ければ遅いほど成績が上がる。",
          "translation": "时间段越晚成绩越好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "成绩是起伏的，并非越晚越好。"
        },
        {
          "number": 3,
          "text": "午後３時ごろのほうが午前１０時ごろより成績が良い。",
          "translation": "下午3点左右比上午10点左右成绩好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "数据表明下午3点（103）低于上午10点（160）。"
        },
        {
          "number": 4,
          "text": "午前１０時ごろのほうが午後３時ごろより成績が良い。",
          "translation": "上午10点左右比下午3点左右成绩好。",
          "correct": true,
          "error": null,
          "explanation": "准确对比了原文数据，160 > 103。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-12-05",
      "questionNumber": 64,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "絶好調の時間帯に２倍のノルマを課し、それ以外は軽く流す。タイミングをとらえた勉強法が、記憶力を高めるのです。",
        "絶好調の（注6）時間帯に２倍のノルマ（注7）を課し、それ以外は軽く流す。タイミングをとらえた勉強法が、記憶力を高めるのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "毎日勉強することを習慣づける。",
          "translation": "养成每天学习的习惯。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章重点讨论的是“时间段（时间点）”，而不是每天学习的习惯。"
        },
        {
          "number": 2,
          "text": "勉強の量と時間を毎日一定にする。",
          "translation": "每天保持一定的学习量和时间。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章建议在状态好的时间段加倍任务，状态不好时轻松带过，即因时而异，并非“保持一定（一定にする）”。"
        },
        {
          "number": 3,
          "text": "調子の良い日に集中して勉強する。",
          "translation": "在状态好的日子里集中学习。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章讨论的是一天内大脑活跃的“时间段（時間帯）”，而不是状态好的“日子（日）”。"
        },
        {
          "number": 4,
          "text": "頭の働きが良くなる時間に勉強する。",
          "translation": "在大脑运转良好的时间段学习。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了原文“在效率上升/状态绝佳的时间段集中学习”的建议。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-12-06",
      "questionNumber": 65,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "自分が勉強する時間帯に、最も頭の働きが良くなるよう習慣づけられればベスト……タイミングを待つだけではなく、自分から作り出す“攻めの姿勢”が求められるのです。",
        "自分が勉強する時間帯に、最も頭の働きが良くなるよう習慣づけられればベスト」と内藤さん。タイミングを待つだけではなく、自分から作り出す“攻めの姿勢”が求められるのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "能率のピークをできるだけ長く保てるようにする。",
          "translation": "尽可能长地保持效率峰值。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章说的是调节效率峰值出现的“时间点”，而不是延长峰值的“持续时间”。"
        },
        {
          "number": 2,
          "text": "能率のピークに活動できるように生活の時間を調節する。",
          "translation": "调节生活时间以便在效率峰值时能够活动。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "这依然是被动适应：把生活时间调整到迎合自然出现的效率峰值。而“主动出击”是反过来，让效率峰值出现在你想学习的时候。"
        },
        {
          "number": 3,
          "text": "能率を上げたい時間帯に能率のピークが来るようにする。",
          "translation": "让效率的峰值出现在想要提高效率的时间段。",
          "correct": true,
          "error": null,
          "explanation": "完美对应原文“在自己学习的时间段里让大脑运转得最好（自分が勉強する時間帯に、最も頭の働きが良くなるよう）”，即主动控制峰值出现的时间。"
        },
        {
          "number": 4,
          "text": "日中に能率のピークが来るように自分の生活を変える。",
          "translation": "改变自己的生活，让效率峰值出现在白天。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未限定必须在“白天（日中）”，而是指任何“自己想学习的时间段”。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-12-07",
      "questionNumber": 66,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "『子どもの興味を尊重し、……好きにやらせることが、個性の重視である",
        "好きなことしかやりたがらない子どもをつくってしまった"
      ],
      "options": [
        {
          "number": 1,
          "text": "個性の重視ということが間違って解釈されている点",
          "translation": "在于重视个性这件事被错误解释了",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中“因为把重视个性解释为让孩子随心所欲，所以导致了负面结果”的逻辑关系。"
        },
        {
          "number": 2,
          "text": "個性の重視ということが注目されている点",
          "translation": "在于重视个性这件事正受到关注",
          "correct": false,
          "error": "relation-error",
          "explanation": "原因不在于“受关注”本身，而在于“解释错误”。"
        },
        {
          "number": 3,
          "text": "個性の意味についての解釈が定まっていない点",
          "translation": "在于关于个性意义的解释尚未确定",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是一种错误的解释“传播开来了（広がりました）”，并不是解释“尚未确定（定まっていない）”。"
        },
        {
          "number": 4,
          "text": "教師が社会生活上のルールを教えていない点",
          "translation": "在于教师没有教授社会生活上的规则",
          "correct": false,
          "error": "relation-error",
          "explanation": "教师没有教规矩是错误解释导致的“结果/烦恼”，并不是最初的“原因”。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-12-08",
      "questionNumber": 67,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-67"
      ],
      "evidenceTexts": [
        "個性の重視とは、『二人と同じ人間はいない、つまり人は一人ひとり異なる存在である。だから、一人ひとりが異なった興味や価値観を持つのは当然である",
        "個性の重視とは、「二人と同じ人間はいない、つまり人は一人ひとり異なる存在である。だから、一人ひとりが異なった興味や価値観を持つのは当然である」という考え方を肯定する人間観を意味しているのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "それぞれの望むことを自由にさせる。",
          "translation": "让他们自由地做各自想做的事。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是文章第一句提到的社会上“错误的解释”，是作者所批判的。"
        },
        {
          "number": 2,
          "text": "それぞれの興味や価値観を尊重する。",
          "translation": "尊重各自的兴趣和价值观。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文作者给出的定义：肯定每个人拥有“不同的兴趣和价值观（異なった興味や価値観）”。"
        },
        {
          "number": 3,
          "text": "他人より優れた点を高く評価する。",
          "translation": "对优于他人的地方给予高度评价。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并没有提到要去评价谁比谁更优秀（優れた点）。"
        },
        {
          "number": 4,
          "text": "他人との違いが大きいほうがよいとする。",
          "translation": "认为与他人的差异越大越好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章认为有差异是理所当然的，但并没有说差异“越大越好（大きいほうがよい）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-12-09",
      "questionNumber": 68,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-68"
      ],
      "evidenceTexts": [
        "さまざまなものに興味を持つのを待つばかりでなく、興味が持てるように、さまざまな体験ができるようにすることが大切です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "子どもの興味や関心は変わりやすいので、注意深く観察することが必要だ。",
          "translation": "因为孩子的兴趣和关心容易改变，所以有必要仔细观察。",
          "correct": false,
          "error": "opposite",
          "explanation": "虽然文章提到孩子的兴趣会变化，但这并不是为了说明要“仔细观察”，而是说明需要提供体验的机会。"
        },
        {
          "number": 2,
          "text": "子どもの興味や関心が広がるように、多様な体験の機会を与えることが重要だ。",
          "translation": "为了扩展孩子的兴趣和关心，给予多样的体验机会很重要。",
          "correct": true,
          "error": null,
          "explanation": "精准对应了最后一句“为了让他们能产生兴趣，让他们能够进行各种各样的体验是很重要的（さまざまな体験ができるようにすることが大切です）”。"
        },
        {
          "number": 3,
          "text": "子どもの自主性を尊重し、自身で新しい興味や関心を見つけ出すのを待つべきだ。",
          "translation": "应当尊重孩子的自主性，等待他们自己去发现新的兴趣和关心。",
          "correct": false,
          "error": "opposite",
          "explanation": "与原文主旨完全相反，原文明确说“不仅仅是等待他们对各种事物产生兴趣（待つばかりでなく）”。"
        },
        {
          "number": 4,
          "text": "子ども自身が見つけた興味や関心に注目し、それを集中して経験させたほうがよい。",
          "translation": "最好关注孩子自己发现的兴趣和关心，并让他们集中去体验那些。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是要给予“各种各样（さまざま）”的体验来培养兴趣，而不是只“集中（集中して）”在已经发现的兴趣上。"
        }
      ]
    }
  ],
  "2012.7": [
    {
      "id": "n2-middle-2012-7-01",
      "questionNumber": 60,
      "type": "reference-meaning",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "友達は作るものじゃない",
        "友達は作るものではなく、自然に出来るもの"
      ],
      "options": [
        {
          "number": 1,
          "text": "本当の友達は、決して意図的に作るものではない。",
          "translation": "真正的朋友，绝不是有意制造出来的。",
          "correct": true,
          "error": null,
          "explanation": "原文直接说「友達は作るものじゃない」，后面又换一种说法强调「自然に出来るもの」。所以「意図的に作るものではない」正是对作者观点的概括。"
        },
        {
          "number": 2,
          "text": "新しく友達を作らなくても、すでに友達は十分にいる。",
          "translation": "即使不再交新朋友，自己也已经有足够多的朋友了。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章开头虽然说作者有很多喜欢的朋友，但①所在段落讨论的不是“朋友数量够不够”，而是老师父母说的「友達を作る」这种想法对不对。原文没有“已经足够，所以不用新交”的逻辑。"
        },
        {
          "number": 3,
          "text": "いい友達を作ることは、それほど簡単なことではない。",
          "translation": "交到好朋友，并不是那么容易的事。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有从“容易/不容易”的角度谈交朋友。作者说「友達を作るなんて…失礼」「偽物のよう」，重点是“刻意做出来”本身不自然，而不是“好朋友很难交”。"
        },
        {
          "number": 4,
          "text": "互いに友達だと思えなければ、本当の友達とは言えない。",
          "translation": "如果彼此都不能把对方当作朋友，就不能算真正的朋友。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章第一段说「向こうは僕のことをどう思っていたのかは分からないが、構わなかった」，说明作者并不要求双方互相确认“我们是朋友”。这个选项和作者的态度相反。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-7-02",
      "questionNumber": 61,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "僕には素晴らしい仲間たちが大勢いた"
      ],
      "options": [
        {
          "number": 1,
          "text": "学校にいた頃に出会った友達",
          "translation": "上学时遇到的朋友。",
          "correct": true,
          "error": null,
          "explanation": "原文先说「学校を失ってしまった」，再说回头看自己曾有「素晴らしい仲間たち」。这里的「彼ら」就是这些学校时代自然相处过的朋友。"
        },
        {
          "number": 2,
          "text": "学校や仕事で繋がっている友達",
          "translation": "在学校或工作中有所联系的朋友。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "选项把「仕事」也放进来了，但原文明确说「社会にでてから今日まで、僕は孤独に仕事をしてきた」。所以“工作中联系的朋友”不是②的指代对象。"
        },
        {
          "number": 3,
          "text": "一緒に仕事をしてきた人たち",
          "translation": "一直以来一起工作的人们。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章没有说作者和这些人一起工作；相反，工作部分强调的是「孤独に仕事をしてきた」。因此不能把②解释成共同工作的人。"
        },
        {
          "number": 4,
          "text": "人生で出会ったすべての人たち",
          "translation": "人生中遇到过的所有人。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "「人生で出会ったすべての人」范围过大。原文限定在「素晴らしい仲間たち」，也就是对作者人生有重要影响的那一批朋友。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-7-03",
      "questionNumber": 62,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "大いなる大地",
        "そこから…伸びる一本の木"
      ],
      "options": [
        {
          "number": 1,
          "text": "そばにいて見守ってくれている。",
          "translation": "一直在身边守护着自己。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文没有「そばにいて」这样的现实陪伴。最后说的是根与大地相连，强调精神层面的支撑，不是朋友现在在身边守护。"
        },
        {
          "number": 2,
          "text": "今でも心の支えになってくれている。",
          "translation": "直到现在，仍然是自己内心的支撑。",
          "correct": true,
          "error": null,
          "explanation": "原文「大地」「根っこは彼らと繋がり」说明朋友不是消失的过去，而是现在仍支撑作者继续成长的基础，因此可概括为「心の支え」。"
        },
        {
          "number": 3,
          "text": "孤独になったときこそ思い出される。",
          "translation": "正是在感到孤独的时候，才会被想起来。",
          "correct": false,
          "error": "opposite",
          "explanation": "虽然前文有「孤独に仕事をしてきた」，但作者不是说“孤独时才想起朋友”，而是说正因为过去有那些仲间，自己才能一直努力工作。"
        },
        {
          "number": 4,
          "text": "今も一緒にいて多くの経験を共にしている。",
          "translation": "现在仍和自己在一起，共同经历着许多事情。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说「学校はもうない」「孤独に仕事をしてきた」，所以不是“现在还一起经历很多事”。选项把过去的连接误读成了现在的共同生活。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-7-04",
      "questionNumber": 63,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "食べ物をつかむ",
        "前にとび出して"
      ],
      "options": [
        {
          "number": 1,
          "text": "口は顔の中で一番固いが、人間と同じように進化して引っ込んできた。",
          "translation": "嘴是脸部最坚硬的部分，但像人类一样在进化中逐渐收了进去。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文的确说普通动物的嘴「固い」，但后半句“像人类一样进化后缩进去”没有依据。文章说「引っ込んできた」的是人类的嘴，不是人类以外的哺乳类。"
        },
        {
          "number": 2,
          "text": "相手を噛んだり食べ物をつかんだりするため、口は固く前に出ている。",
          "translation": "为了咬住对方、抓取食物，嘴部坚硬并向前突出。",
          "correct": true,
          "error": null,
          "explanation": "原文有「食べ物をつかむ」和「相手に噛みついて攻撃する」，并说明为此嘴要「一番前にとび出ていて」「固い」。选项把这几处信息完整对应起来。"
        },
        {
          "number": 3,
          "text": "食べ物を他の動物より早く口に入れるため、口が一番前に出ている。",
          "translation": "为了比其他动物更快地把食物放入口中，所以嘴突出在最前方。",
          "correct": false,
          "error": "relation-error",
          "explanation": "原文说嘴在前面是为了“抓取食物”，不是为了“比其他动物更快把食物放入口中”。「早く」这个比较关系在文章中没有出现。"
        },
        {
          "number": 4,
          "text": "進化の過程で口が必ずしも相手を攻撃する道具ではなくなってきた。",
          "translation": "在进化过程中，嘴逐渐不一定再是攻击对方的工具。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "这说的是人类后来因为能用手攻击，嘴的攻击功能减弱；题目问的是“人間以外の哺乳類”，所以对象错了。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-7-05",
      "questionNumber": 64,
      "type": "fact-comparison",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "食べ物を手でつかんで口のところまでもってくる",
        "口が…だんだん引っ込んできた"
      ],
      "options": [
        {
          "number": 1,
          "text": "一番前にとび出していなくてもよくなりました",
          "translation": "即使不突出在最前方也可以了。",
          "correct": true,
          "error": null,
          "explanation": "原文前半句的条件是「手でつかんで口のところまで持ってくる」，由此推出嘴「一番前にとび出していなくても」可以。后面的「引っ込んできた」也与此完全衔接。"
        },
        {
          "number": 2,
          "text": "固くて引っ込んでいなくてもよくなりました",
          "translation": "即使不坚硬、不向里收也可以了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "空格处所在段落主要讲“抓食物”导致嘴不必前突，不是在讲“固い”。而且「引っ込んでいなくても」与后文「引っ込んできた」方向不一致。"
        },
        {
          "number": 3,
          "text": "相手を攻撃するためのものではなくなりました",
          "translation": "不再是用来攻击对方的东西了。",
          "correct": false,
          "error": "relation-error",
          "explanation": "攻击功能是在下一段才展开说明的内容。空格所在句前后都在谈“吃东西时是否还需要嘴在最前方”，所以不能填攻击相关内容。"
        },
        {
          "number": 4,
          "text": "食べるためだけに使うものではなくなりました",
          "translation": "不再只是用来吃东西的东西了。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章并没有说嘴“不只是吃饭用”。相反，空格处讨论的是吃东西这个功能转移给了手，导致嘴不必突出。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-7-06",
      "questionNumber": 65,
      "type": "reason-logic",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "食べ物をつかむ",
        "相手への攻撃"
      ],
      "options": [
        {
          "number": 1,
          "text": "人間の口の周りは動物と比べて柔らかく、攻撃の道具にならなかったから",
          "translation": "因为人类嘴周围比动物柔软，不能成为攻击工具。",
          "correct": false,
          "error": "opposite",
          "explanation": "原文不是说“因为人类嘴周围柔软，所以不能攻击”。顺序正好相反：因为攻击功能逐渐不需要嘴承担，所以「口の周りがどんどん柔らかくなっていった」。"
        },
        {
          "number": 2,
          "text": "直立歩行で手や足を使って相手を攻撃することができるようになったから",
          "translation": "因为直立行走后，人类能够用手和脚攻击对方了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文说「手を使って」攻击，没有说用脚。选项中的「足」不是文章内容，属于加入了原文没有的信息。"
        },
        {
          "number": 3,
          "text": "哺乳類は手を使って食べるようになり、口でつかむ必要がなくなったから",
          "translation": "因为哺乳类动物开始用手吃东西，不再需要用嘴抓取食物。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "主语错。文章讨论的是「人間では、直立歩行をするようになって」，不是哺乳类整体都用手吃东西。"
        },
        {
          "number": 4,
          "text": "食べ物をつかんだり相手を攻撃したりするとき手を使うようになったから",
          "translation": "因为人类在抓取食物、攻击对方时开始使用双手。",
          "correct": true,
          "error": null,
          "explanation": "原文一处说吃东西可以「手でできる」，另一处说攻击也可以「手を使ってできる」。这正是嘴不必前突、不必坚硬，最后变柔软的原因。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-7-07",
      "questionNumber": 66,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "要件を育児全体に広げ、社員の子育てを後押しする",
        "負担を軽減"
      ],
      "options": [
        {
          "number": 1,
          "text": "社員の子育てを支援することで、日本の人口減少をくい止めること",
          "translation": "通过支持员工育儿，阻止日本人口减少。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有出现「人口減少」或少子化对策的说法。虽然育儿制度可能和社会问题有关，但本文给出的目的只是「社員の子育てを後押しする」。"
        },
        {
          "number": 2,
          "text": "子供が未就学児のうちから親が教育に関心を持つようにすること",
          "translation": "让父母从孩子还是学龄前儿童时就开始关注教育。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中提到入学式、PTA，是作为可以请假的“育儿相关事由”，不是为了让父母更早关注教育。这个选项把例子误读成了目的。"
        },
        {
          "number": 3,
          "text": "無給でも育児休暇を取る社員を増やし、生産の能率を上げること",
          "translation": "增加即使无薪也取得育儿休假的员工，提高生产效率。",
          "correct": false,
          "error": "relation-error",
          "explanation": "原文虽然说3岁以上是无薪、也提到男性取得率低，但没有说要“增加无薪休假的员工”或“提高生产效率”。这些不是本文目的。"
        },
        {
          "number": 4,
          "text": "条件をゆるくし、社員がもっと子育てしやすいように助けること",
          "translation": "放宽条件，帮助员工更容易兼顾育儿。",
          "correct": true,
          "error": null,
          "explanation": "原文「要件を育児全体に広げ」对应“条件放宽”，「社員の子育てを後押しする」对应“帮助员工育儿”。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-7-08",
      "questionNumber": 67,
      "type": "method-condition",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "中学校入学前の子供を持つ社員が対象"
      ],
      "options": [
        {
          "number": 1,
          "text": "夫婦ともにこの会社に勤めている社員",
          "translation": "夫妻双方都在这家公司工作的员工。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文只要求员工本人有中学入学前的孩子，没有说夫妻双方都必须在这家公司工作。"
        },
        {
          "number": 2,
          "text": "中学校入学前の子供がいる男性社員",
          "translation": "有尚未升入初中的孩子的男性员工。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章后面确实说制度也想促进男性员工参与育儿，但制度对象不是“男性社員”限定，而是有相应年龄孩子的社員。"
        },
        {
          "number": 3,
          "text": "小学生の子供が二人以上いる社員",
          "translation": "有两个及以上小学生孩子的员工。",
          "correct": false,
          "error": "relation-error",
          "explanation": "原文说孩子一人年5日、二人以上年10日，孩子数量影响休假天数，不是取得制度的必要条件。"
        },
        {
          "number": 4,
          "text": "小学生までの子供がいる社員",
          "translation": "有小学阶段及以下孩子的员工。",
          "correct": true,
          "error": null,
          "explanation": "「中学校入学前」就是还没有进入初中，因此包括“小学生まで”的孩子。这个选项与原文条件一致。"
        }
      ]
    },
    {
      "id": "n2-middle-2012-7-09",
      "questionNumber": 68,
      "type": "viewpoint-main",
      "evidenceSelectors": [],
      "evidenceTexts": [
        "新制度は申請するだけで利用できる",
        "これまでは…証拠として提出する必要があったが"
      ],
      "options": [
        {
          "number": 1,
          "text": "休暇の理由を証明する診断書などを添えて申請する。",
          "translation": "附上能够证明休假理由的诊断书等材料进行申请。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "诊断书等材料是「これまでは」需要的证明，不是新制度的手续。文章用「が」转折，明确说明新制度已经改为只需申请。"
        },
        {
          "number": 2,
          "text": "学校の行事等の通知文書のコピーを添えて申請する。",
          "translation": "附上学校活动等通知文件的复印件进行申请。",
          "correct": false,
          "error": "not-stated",
          "explanation": "学校活动、PTA可以作为请假理由，但原文没有说要附上学校通知复印件。选项把“理由范围”误读成了“提交材料”。"
        },
        {
          "number": 3,
          "text": "提出する証明書などは不要で、申請すればよい。",
          "translation": "不需要提交证明文件等，只要申请即可。",
          "correct": true,
          "error": null,
          "explanation": "原文「申請するだけで利用できる」直接说明不需要证明书等材料，只要申请即可。"
        },
        {
          "number": 4,
          "text": "子供の年齢の証明書を添えて、申請すればよい。",
          "translation": "附上孩子年龄的证明书进行申请即可。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章的确规定了孩子年龄范围，但没有说申请时要提交年龄证明书。这个手续在原文中没有出现。"
        }
      ]
    }
  ],
  "2013.12": [
    {
      "id": "n2-middle-2013-12-01",
      "questionNumber": 60,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "面接の準備をする作業は自分自身を見つめ直すいいきっかけになると私は思います。自分って要するになんなんだろう？何が人と違って、どこが優れているんだろう？",
        "①面接の準備をする作業は自分自身を見つめ直すいいきっかけになると私は思います。自分って要するになんなんだろう？何が人と違って、どこが優れているんだろう？"
      ],
      "options": [
        {
          "number": 1,
          "text": "人とは違う優れた能力を発見することにつながる。",
          "translation": "能带来发现不同于他人的优秀能力。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "思考自己哪里优秀是为了了解自己，而不是为了去新发现某些“不同的优秀能力（優れた能力を発見する）”。"
        },
        {
          "number": 2,
          "text": "自分の本当にしたいことが見えてくるようになる。",
          "translation": "能变得看清自己真正想做的事。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到通过面试准备能看清自己“真正想做的事（本当にしたいこと）”。"
        },
        {
          "number": 3,
          "text": "自分のことをありのままに語れるようになる。",
          "translation": "能变得如实地讲述自己的事情。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调要用简短准确的话来概括自己，而不是毫无保留地“如实讲述（ありのままに語れる）”。"
        },
        {
          "number": 4,
          "text": "自分のことをよりよく知ることにつながる。",
          "translation": "能带来更好地了解自己的事情。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“重新审视自己（自分自身を見つめ直す）”的意义，即更好地了解自己。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-12-02",
      "questionNumber": 61,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "面接に臨むためには、自分で自分を的確に語れるようになっていなくてはダメです。それも短い的確な言葉に絞り込まなければなりません。",
        "そこで記者が膨大な事実の中からニュースと判断されるものを探し出し、たった一言でまとめてしまう、それがニュースであり、大見出しなのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "できるだけ多くのことを正確に伝えなければならない。",
          "translation": "需要尽可能准确地传达更多的事情。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "新闻和面试都要求精简，不可能传达“尽可能多的事情（できるだけ多くのこと）”。"
        },
        {
          "number": 2,
          "text": "相手が何を知りたいかを考えて伝えなければならない。",
          "translation": "需要考虑对方想知道什么来传达。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然需要考虑对方感受，但这不是文章中对比新闻和面试所强调的核心共同点。"
        },
        {
          "number": 3,
          "text": "伝えたいことを選んで簡潔に伝えなければならない。",
          "translation": "需要挑选想传达的事情并简洁地传达。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了两者的核心特征：挑选信息（絞り込む/探し出し）和简洁传达（短い的確な言葉/一言でまとめてしまう）。"
        },
        {
          "number": 4,
          "text": "実際にあったことだけを伝えなければならない。",
          "translation": "需要只传达实际发生过的事情。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "新闻确实是事实，但面试的核心是表达自己的人生经验和感想，并不只是传达“实际发生的事（実際にあったこと）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-12-03",
      "questionNumber": 62,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "面接で自分を語るということは自分自身を見出しにするということです。自分の人生という長く膨大な時の流れと経験の数々、その都度、心に去来したありとあらゆる思い、それをたったヒトコトで表現するのです。",
        "自分の人生という長く膨大な時の流れと経験の数々、その都度（注3）、心に去来した（注4）ありとあらゆる（注5）思い、それをたったヒトコト（注6）で表現するのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "これまで生きてきた自分について短く的確に語る。",
          "translation": "关于至今为止生活过来的自己，简短准确地讲述。",
          "correct": true,
          "error": null,
          "explanation": "“至今为止生活过来的自己”对应人生经验和思绪，“简短准确地讲述”对应“用一句话表达（ヒトコトで表現する）”。"
        },
        {
          "number": 2,
          "text": "これまでの人生で感動したことを印象的に伝える。",
          "translation": "将在至今为止的人生中感动的事情令人印象深刻地传达。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章说的是表达所有的思绪和经验，并没有限定只传达“感动的事情（感動したこと）”。"
        },
        {
          "number": 3,
          "text": "自身にとっての大きな出来事をまとめて説明する。",
          "translation": "对自身而言的重大事件进行总结说明。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "不仅是“重大事件（大きな出来事）”，而是要把人生的方方面面浓缩成一句话。"
        },
        {
          "number": 4,
          "text": "自身の経験を時の流れに沿って分かりやすく説明する。",
          "translation": "顺着时间流逝将自身的经验易懂地进行说明。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章强调的是概括成“一句话（ヒトコト）”，而不是“顺着时间流逝去易懂地说明（時の流れに沿って分かりやすく説明する）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-12-04",
      "questionNumber": 63,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "優れた作品は作者の意図を軽々と超えて、観客の心のなかで多様な気づきを生み出していく。多様な解釈ができることは、優れた美術作品の条件だと言ってもいい。"
      ],
      "options": [
        {
          "number": 1,
          "text": "観る人が自由に解釈できる作品",
          "translation": "观众可以自由解读的作品",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文“能够产生多样的解读（多様な解釈ができること）”。"
        },
        {
          "number": 2,
          "text": "観る人が共通の解釈を持てる作品",
          "translation": "观众能有共同解读的作品",
          "correct": false,
          "error": "opposite",
          "explanation": "与文章主旨相反，作者认为不需要有唯一、共同的解答。"
        },
        {
          "number": 3,
          "text": "作者の意図が観る人の解釈を超える作品",
          "translation": "作者的意图超越观众解读的作品",
          "correct": false,
          "error": "relation-error",
          "explanation": "逻辑反了。原文是“作品超越作者的意图（作者の意図を超えて）”，而不是“作者的意图超越观众的解读”。"
        },
        {
          "number": 4,
          "text": "作者の意図が明確で素直に解釈できる作品",
          "translation": "作者意图明确、能直接解读的作品",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者认为优秀作品不应局限于作者明确的意图，而是能让观众有自己的感悟。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-12-05",
      "questionNumber": 64,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "日本人は、この『答えがない",
        "美術が難しい"
      ],
      "options": [
        {
          "number": 1,
          "text": "決まった見方があるのに自由に観ようとするから",
          "translation": "因为明明有固定的欣赏方式却想要自由地看",
          "correct": false,
          "error": "opposite",
          "explanation": "他们并不是想自由地看，而是因为找不到固定的答案而感到困惑。"
        },
        {
          "number": 2,
          "text": "見方に正しい答えがあるはずだと思っているから",
          "translation": "因为认为欣赏方式应该有正确的答案",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“认为存在‘正确答案’（『正解』があると思っている）”的描述。"
        },
        {
          "number": 3,
          "text": "誰も正しい見方を教えてくれないから",
          "translation": "因为谁也不教正确的欣赏方式",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说本来就没有正确答案，而不是因为没人教。"
        },
        {
          "number": 4,
          "text": "見方がいろいろあって選べないから",
          "translation": "因为欣赏方式太多无法选择",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "他们是因为认为“只有唯一答案”才觉得难，而不是因为选项太多选不出来。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-12-06",
      "questionNumber": 65,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "面白いと思えばハマる。思わなければ忘れてしまう。子供たちと美術の最初の出会いはそれでいいのだと思う。",
        "面白いと思えばハマる（注3）。思わなければ忘れてしまう。子供たちと美術の最初の出会いはそれでいいのだと思う。"
      ],
      "options": [
        {
          "number": 1,
          "text": "絵がわからなくても大丈夫だ。",
          "translation": "即使看不懂画也没关系。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章说小孩子根本不会去说“看不懂”，这种评价标准是大人的，所以并不是说“即使看不懂也没关系”，而是他们根本没有“懂不懂”的概念。"
        },
        {
          "number": 2,
          "text": "絵がわかったという実感が大切だ。",
          "translation": "看懂画的真实感受很重要。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这也是成人的思维，孩子们并不追求“看懂了”的真实感受。"
        },
        {
          "number": 3,
          "text": "優れた作品に多く触れたほうがいい。",
          "translation": "多接触优秀作品比较好。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未建议多接触优秀作品，而是顺其自然。"
        },
        {
          "number": 4,
          "text": "興味を持ったものを観ればいい。",
          "translation": "看自己感兴趣的东西就好。",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文“觉得有趣就会沉迷其中（面白いと思えばハマる）”，即顺从兴趣去欣赏。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-12-07",
      "questionNumber": 66,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "通常でも半分しか働いていないのに、冷房を多用するなどして汗を出さないでいると、さらに休む汗腺が増えていく。",
        "①良いことではない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "汗腺の数が減ってしまうから。",
          "translation": "因为汗腺的数量会减少。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "汗腺的总数并没有减少，只是休息的汗腺增加了。"
        },
        {
          "number": 2,
          "text": "汗腺が汗を作れなくなるから。",
          "translation": "因为汗腺变得无法制造汗液。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "汗腺并没有完全丧失制造汗液的功能，只是不工作了。"
        },
        {
          "number": 3,
          "text": "働くべき汗腺が働かなくなるから。",
          "translation": "因为本该工作的汗腺变得不工作了。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“休息的汗腺就会进一步增加（さらに休む汗腺が増えていく）”，即本该工作的汗腺罢工了。"
        },
        {
          "number": 4,
          "text": "一つ一つの汗腺の働きが弱まるから。",
          "translation": "因为每一个汗腺的作用都变弱了。",
          "correct": false,
          "error": "opposite",
          "explanation": "不是每一个汗腺的作用变弱，而是工作的汗腺数量减少了。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-12-08",
      "questionNumber": 67,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-67"
      ],
      "evidenceTexts": [
        "そうなると、処理が間に合わず、塩分などの体内に吸収されるべき成分を含んだままの汗が体外に出てしまうことになる。このような汗はべたべたしており、蒸発しにくく、『蒸発することで体温調節をする",
        "②汗腺が５０か所しか働かなくなれば、一か所当たり１ｃｃの処理のはずが、２倍の２ｃｃの処理になる。そうなると、処理が間に合わず、塩分などの体内に吸収されるべき成分を含んだままの汗が体外に出てしまうことになる。このような汗はべたべたしており、蒸発しにくく、「蒸発することで体温調節をする」という汗の役割をうまく果たせない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "汗の中の塩分などが増えて体温調節がしにくくなる。",
          "translation": "汗液中的盐分等增加，变得难以调节体温。",
          "correct": true,
          "error": null,
          "explanation": "精准对应了原文“含有本该吸收的盐分（塩分などの成分を含んだまま）”排出，导致“无法很好调节体温（体温調節をする役割を果たせない）”。"
        },
        {
          "number": 2,
          "text": "汗の中の塩分などが減って蒸発しにくくなる。",
          "translation": "汗液中的盐分等减少，变得难以蒸发。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说的是盐分增加（排出体外），而不是减少。"
        },
        {
          "number": 3,
          "text": "汗の量が増えて蒸発しにくくなる。",
          "translation": "汗量增加，变得难以蒸发。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "汗的总量还是100cc，并没有增加，只是每个汗腺的负担增加了。"
        },
        {
          "number": 4,
          "text": "汗の量が減って体温調節がしにくくなる。",
          "translation": "汗量减少，变得难以调节体温。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "汗的总量并没有减少。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-12-09",
      "questionNumber": 68,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-ks-68"
      ],
      "evidenceTexts": [
        "休む汗腺を増やさないためには、日ごろから汗が出る時にはそのまま出すという生活をしたほうがいい。"
      ],
      "options": [
        {
          "number": 1,
          "text": "日ごろから水分を多く取り、汗が出やすい状態にする。",
          "translation": "平时多摄取水分，使其处于容易出汗的状态。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章并没有说要多喝水让自己处于容易出汗的状态。"
        },
        {
          "number": 2,
          "text": "汗をたくさん出して、働いている汗腺の機能を高める。",
          "translation": "大量出汗，提高正在工作的汗腺的机能。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有建议要“大量出汗（たくさん出して）”来提高机能，只是说自然出汗就好。"
        },
        {
          "number": 3,
          "text": "汗が出る時には、できるだけ止めないようにする。",
          "translation": "在出汗的时候，尽量不去阻止它。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“出汗时就让它出（汗が出る時にはそのまま出す）”的主张。"
        },
        {
          "number": 4,
          "text": "脳を刺激し、汗腺への命令の伝わりをよくする。",
          "translation": "刺激大脑，使传达给汗腺的命令更好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到吃冷饮会刺激大脑停止出汗，这是负面例子，并没有建议去刺激大脑。"
        }
      ]
    }
  ],
  "2013.7": [
    {
      "id": "n2-middle-2013-7-01",
      "questionNumber": 60,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "コピー代が安くすめば、もう少し余裕のある学生生活が送れるかもしれない。このような事情を実感していた大学生たちが5人集まって、無料でコピーがとれるコピー機を大学に設置する会社を始め……",
        "日本の大学生はコピーをとる機会が多い。コピー代は大抵1枚10円で、決して高くはない。けれども、枚数が多いため、大学生にとってはそれなりの負担になる。コピー代が安くすめば、もう少し余裕のある学生生活が送れるかもしれない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "大学生向けの情報をコピーを使って提供すること",
          "translation": "利用复印提供面向大学生的信息",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是在纸上印企业广告，而不是提供面向大学生的信息。"
        },
        {
          "number": 2,
          "text": "大学生にコピー代の節約を意識してもらうこと",
          "translation": "让大学生意识到节约复印费",
          "correct": false,
          "error": "relation-error",
          "explanation": "目的是直接提供免费复印以减轻负担，而不是让他们“意识到（意識してもらう）”节约。"
        },
        {
          "number": 3,
          "text": "大学生が多くコピーをとれるようにすること",
          "translation": "让大学生能复印很多",
          "correct": false,
          "error": "relation-error",
          "explanation": "目的是减轻现有复印量带来的经济负担，而不是为了让他们能复印得“更多（多く）”。"
        },
        {
          "number": 4,
          "text": "大学生のコピー代の負担を少なくすること",
          "translation": "减轻大学生的复印费负担",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文希望复印费变便宜（安くすめば）、减轻负担（負担になる）的初衷。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-7-02",
      "questionNumber": 61,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "この会社は、このようにして得た広告掲載料を、無料コピー機の経費にあてているのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "学生が払うべきコピー代を、広告費として後から企業に請求できるから",
          "translation": "因为学生该付的复印费，事后可以作为广告费向企业请求支付",
          "correct": false,
          "error": "opposite",
          "explanation": "不是事后向企业请求学生该付的复印费，而是事先按广告位收取广告费。"
        },
        {
          "number": 2,
          "text": "広告が掲載されたコピー用紙を、企業から提供してもらえるから",
          "translation": "因为能从企业那里获得印有广告的复印纸",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "复印纸是公司印好广告后放进去的，不是企业直接提供的复印纸。"
        },
        {
          "number": 3,
          "text": "企業から受け取る広告掲載料を、コピー機の経費として使えるから",
          "translation": "因为能把从企业收取的广告刊登费作为复印机的经费使用",
          "correct": true,
          "error": null,
          "explanation": "完美对应原文“把广告刊登费，充当免费复印机的经费（広告掲載料を、無料コピー機の経費にあてている）”。"
        },
        {
          "number": 4,
          "text": "企業の広告が描かれたコピー機を、企業から借りられるから",
          "translation": "因为能从企业借来画着企业广告的复印机",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "复印机是公司自己设置的，不是从企业借来的。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-7-03",
      "questionNumber": 62,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "学生向けの広告を、学生に対してのみ効果的に出せるのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "大学生を通して、他の人にも広告商品を宣伝できる。",
          "translation": "能通过大学生向其他人宣传广告商品。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "优点在于“仅针对学生（学生に対してのみ）”，而不是通过他们向“其他人（他の人）”宣传。"
        },
        {
          "number": 2,
          "text": "対象を大学生に絞しぼり込めるので、効果的に広告を出せる。",
          "translation": "因为能把对象锁定在大学生，所以能有效地投放广告。",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文“能够仅针对学生，有效地投放面向学生的广告”。"
        },
        {
          "number": 3,
          "text": "広告に対する学生の反応を、今後の商品開発に生かせる。",
          "translation": "能将学生对广告的反应应用在今后的商品开发中。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章说的是提升广告投放的效果，并未提及利用学生的反应进行“商品开发（商品開発）”。"
        },
        {
          "number": 4,
          "text": "ちらしより捨てられにくいので、広告を出す回数が減らせる。",
          "translation": "因为比传单更不容易被扔掉，所以能减少出广告的次数。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章说复印纸不易被扔掉，所以学生看到广告的可能性高，但并未说这能“减少出广告的次数（広告を出す回数が減らせる）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-7-04",
      "questionNumber": 63,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "その結果、計算や暗記などの作業効率は、午前１０時と午後３時くらいがピークでした。午前８時の成績を１００とすると、同１０時に１６０まで上昇。その後、午後１時に９８まで下がり、同３時には１０３に上がるという曲線を描いたそうです。",
        "その結果、計算や暗記などの作業効率は、午前１０時と午後３時くらいがピークでした。"
      ],
      "options": [
        {
          "number": 1,
          "text": "時間帯が早ければ早いほど成績が上がる。",
          "translation": "时间段越早成绩越好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "成绩是起伏的，上午8点（100）就不如10点（160），并不是越早越好。"
        },
        {
          "number": 2,
          "text": "時間帯が遅ければ遅いほど成績が上がる。",
          "translation": "时间段越晚成绩越好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "成绩是起伏的，并非越晚越好。"
        },
        {
          "number": 3,
          "text": "午後３時ごろのほうが午前１０時ごろより成績が良い。",
          "translation": "下午3点左右比上午10点左右成绩好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "数据表明下午3点（103）低于上午10点（160）。"
        },
        {
          "number": 4,
          "text": "午前１０時ごろのほうが午後３時ごろより成績が良い。",
          "translation": "上午10点左右比下午3点左右成绩好。",
          "correct": true,
          "error": null,
          "explanation": "准确对比了原文数据，160 > 103。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-7-05",
      "questionNumber": 64,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "絶好調の時間帯に２倍のノルマを課し、それ以外は軽く流す。タイミングをとらえた勉強法が、記憶力を高めるのです。",
        "絶好調の（注6）時間帯に２倍のノルマ（注7）を課し、それ以外は軽く流す。タイミングをとらえた勉強法が、記憶力を高めるのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "毎日勉強することを習慣づける。",
          "translation": "养成每天学习的习惯。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章重点讨论的是“时间段（时间点）”，而不是每天学习的习惯。"
        },
        {
          "number": 2,
          "text": "勉強の量と時間を毎日一定にする。",
          "translation": "每天保持一定的学习量和时间。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章建议在状态好的时间段加倍任务，状态不好时轻松带过，即因时而异，并非“保持一定（一定にする）”。"
        },
        {
          "number": 3,
          "text": "調子の良い日に集中して勉強する。",
          "translation": "在状态好的日子里集中学习。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章讨论的是一天内大脑活跃的“时间段（時間帯）”，而不是状态好的“日子（日）”。"
        },
        {
          "number": 4,
          "text": "頭の働きが良くなる時間に勉強する。",
          "translation": "在大脑运转良好的时间段学习。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了原文“在效率上升/状态绝佳的时间段集中学习”的建议。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-7-06",
      "questionNumber": 65,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "自分が勉強する時間帯に、最も頭の働きが良くなるよう習慣づけられればベスト……タイミングを待つだけではなく、自分から作り出す“攻めの姿勢”が求められるのです。",
        "自分が勉強する時間帯に、最も頭の働きが良くなるよう習慣づけられればベスト」と内藤さん。タイミングを待つだけではなく、自分から作り出す“攻めの姿勢”が求められるのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "能率のピークをできるだけ長く保てるようにする。",
          "translation": "尽可能长地保持效率峰值。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章说的是调节效率峰值出现的“时间点”，而不是延长峰值的“持续时间”。"
        },
        {
          "number": 2,
          "text": "能率のピークに活動できるように生活の時間を調節する。",
          "translation": "调节生活时间以便在效率峰值时能够活动。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "这依然是被动适应：把生活时间调整到迎合自然出现的效率峰值。而“主动出击”是反过来，让效率峰值出现在你想学习的时候。"
        },
        {
          "number": 3,
          "text": "能率を上げたい時間帯に能率のピークが来るようにする。",
          "translation": "让效率的峰值出现在想要提高效率的时间段。",
          "correct": true,
          "error": null,
          "explanation": "完美对应原文“在自己学习的时间段里让大脑运转得最好（自分が勉強する時間帯に、最も頭の働きが良くなるよう）”，即主动控制峰值出现的时间。"
        },
        {
          "number": 4,
          "text": "日中に能率のピークが来るように自分の生活を変える。",
          "translation": "改变自己的生活，让效率峰值出现在白天。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未限定必须在“白天（日中）”，而是指任何“自己想学习的时间段”。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-7-07",
      "questionNumber": 66,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "『子どもの興味を尊重し、……好きにやらせることが、個性の重視である",
        "好きなことしかやりたがらない子どもをつくってしまった"
      ],
      "options": [
        {
          "number": 1,
          "text": "個性の重視ということが間違って解釈されている点",
          "translation": "在于重视个性这件事被错误解释了",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中“因为把重视个性解释为让孩子随心所欲，所以导致了负面结果”的逻辑关系。"
        },
        {
          "number": 2,
          "text": "個性の重視ということが注目されている点",
          "translation": "在于重视个性这件事正受到关注",
          "correct": false,
          "error": "relation-error",
          "explanation": "原因不在于“受关注”本身，而在于“解释错误”。"
        },
        {
          "number": 3,
          "text": "個性の意味についての解釈が定まっていない点",
          "translation": "在于关于个性意义的解释尚未确定",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是一种错误的解释“传播开来了（広がりました）”，并不是解释“尚未确定（定まっていない）”。"
        },
        {
          "number": 4,
          "text": "教師が社会生活上のルールを教えていない点",
          "translation": "在于教师没有教授社会生活上的规则",
          "correct": false,
          "error": "relation-error",
          "explanation": "教师没有教规矩是错误解释导致的“结果/烦恼”，并不是最初的“原因”。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-7-08",
      "questionNumber": 67,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-67"
      ],
      "evidenceTexts": [
        "個性の重視とは、『二人と同じ人間はいない、つまり人は一人ひとり異なる存在である。だから、一人ひとりが異なった興味や価値観を持つのは当然である",
        "個性の重視とは、「二人と同じ人間はいない、つまり人は一人ひとり異なる存在である。だから、一人ひとりが異なった興味や価値観を持つのは当然である」という考え方を肯定する人間観を意味しているのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "それぞれの望むことを自由にさせる。",
          "translation": "让他们自由地做各自想做的事。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是文章第一句提到的社会上“错误的解释”，是作者所批判的。"
        },
        {
          "number": 2,
          "text": "それぞれの興味や価値観を尊重する。",
          "translation": "尊重各自的兴趣和价值观。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文作者给出的定义：肯定每个人拥有“不同的兴趣和价值观（異なった興味や価値観）”。"
        },
        {
          "number": 3,
          "text": "他人より優れた点を高く評価する。",
          "translation": "对优于他人的地方给予高度评价。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并没有提到要去评价谁比谁更优秀（優れた点）。"
        },
        {
          "number": 4,
          "text": "他人との違いが大きいほうがよいとする。",
          "translation": "认为与他人的差异越大越好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章认为有差异是理所当然的，但并没有说差异“越大越好（大きいほうがよい）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2013-7-09",
      "questionNumber": 68,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-68"
      ],
      "evidenceTexts": [
        "さまざまなものに興味を持つのを待つばかりでなく、興味が持てるように、さまざまな体験ができるようにすることが大切です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "子どもの興味や関心は変わりやすいので、注意深く観察することが必要だ。",
          "translation": "因为孩子的兴趣和关心容易改变，所以有必要仔细观察。",
          "correct": false,
          "error": "opposite",
          "explanation": "虽然文章提到孩子的兴趣会变化，但这并不是为了说明要“仔细观察”，而是说明需要提供体验的机会。"
        },
        {
          "number": 2,
          "text": "子どもの興味や関心が広がるように、多様な体験の機会を与えることが重要だ。",
          "translation": "为了扩展孩子的兴趣和关心，给予多样的体验机会很重要。",
          "correct": true,
          "error": null,
          "explanation": "精准对应了最后一句“为了让他们能产生兴趣，让他们能够进行各种各样的体验是很重要的（さまざまな体験ができるようにすることが大切です）”。"
        },
        {
          "number": 3,
          "text": "子どもの自主性を尊重し、自身で新しい興味や関心を見つけ出すのを待つべきだ。",
          "translation": "应当尊重孩子的自主性，等待他们自己去发现新的兴趣和关心。",
          "correct": false,
          "error": "opposite",
          "explanation": "与原文主旨完全相反，原文明确说“不仅仅是等待他们对各种事物产生兴趣（待つばかりでなく）”。"
        },
        {
          "number": 4,
          "text": "子ども自身が見つけた興味や関心に注目し、それを集中して経験させたほうがよい。",
          "translation": "最好关注孩子自己发现的兴趣和关心，并让他们集中去体验那些。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是要给予“各种各样（さまざま）”的体验来培养兴趣，而不是只“集中（集中して）”在已经发现的兴趣上。"
        }
      ]
    }
  ],
  "2014.12": [
    {
      "id": "n2-middle-2014-12-01",
      "questionNumber": 60,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "いまは人びとの『好き",
        "いまは人びとの「好き」が多様化しつつある時代です。食べ物の好みや服の好みだけではありません。細かいライフスタイルのちがいに人びとが価値を見いだす（注2）ような時代です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人びとがこれまで好きではなかったものにも価値を感じるようになっている。",
          "translation": "人们开始对以前不喜欢的东西也感到有价值。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是对细微的差异感到有价值，而不是说对以前不喜欢的东西感到有价值。"
        },
        {
          "number": 2,
          "text": "人びとが自身の価値観に合ったものを探し求めるようになっている。",
          "translation": "人们开始寻找符合自身价值观的东西。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文人们追求“细微的生活方式差异”和“目录上没有的更不一样的商品”，即寻找符合自身价值观的东西。"
        },
        {
          "number": 3,
          "text": "人びとのライフスタイルのちがいがわかりやすくなっている。",
          "translation": "人们生活方式的差异变得容易理解了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说人们在生活方式差异中“寻找价值（価値を見いだす）”，而不是说差异变得“容易理解（わかりやすくなっている）”。"
        },
        {
          "number": 4,
          "text": "人びとがお金で買えないものを欲しがるようになっている。",
          "translation": "人们变得想要用钱买不到的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章举的例子是人们想要不同于常规的“商品（商品）”和“服务（サービス）”，这些都是可以用钱买到的，并非买不到的东西。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-12-02",
      "questionNumber": 61,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "こうしたニッチに気づくことができるのは、何かが『好き",
        "こうしたニッチに気づくことができるのは、何かが「好き」な人です。自分の好みを突き進めていくと、そこに何かの不足を感じる。その不足がじつはほかの人も欲しがっていた何かかもしれない、というわけです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "ほかの人より先に時代の変化を感じ取れる可能性があるから。",
          "translation": "因为有可能比别人更早感受到时代的变化。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到他们能比别人更早感受到时代变化。"
        },
        {
          "number": 2,
          "text": "ほかの人から自身が知らないことを教えてもらえる可能性があるから。",
          "translation": "因为有可能从别人那里学到自己不知道的事情。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说自己感受到的不足恰好也是别人的需求，而不是从别人那里学到知识。"
        },
        {
          "number": 3,
          "text": "自身の持つ情報が、ほかの人に不足している情報かもしれないから。",
          "translation": "因为自身拥有的信息，或许正是别人所缺乏的信息。",
          "correct": false,
          "error": "opposite",
          "explanation": "不是“自身拥有的信息”别人缺乏，而是“自身感受到的不足”恰好也是别人的痛点。"
        },
        {
          "number": 4,
          "text": "自身の感じる不足が、ほかの人が感じる不足であるかもしれないから。",
          "translation": "因为自身感受到的不足，或许正是别人所感受到的不足。",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文“那种不足，或许实际上正是其他人也想要的东西（その不足がじつはほかの人も欲しがっていた何かかもしれない）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-12-03",
      "questionNumber": 62,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "でもじつは自分の『好き",
        "何かを好きな人ほど、何かに不足を感じている人ほど、それを仕事に変えていくことのできる可能性があります。"
      ],
      "options": [
        {
          "number": 1,
          "text": "好みが多様化しているのでいろいろな仕事ができる。",
          "translation": "因为喜好多样化，所以能做各种各样的工作。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说深入追求自己的喜好能发现新的工作机会，而不是说因为喜好多样化就能随便做各种工作。"
        },
        {
          "number": 2,
          "text": "ほかの人が思いつかない仕事を探すほうがいい。",
          "translation": "最好去寻找别人想不到的工作。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章鼓励的是追求“自己的喜欢”，而不是单纯为了找别人想不到的工作。"
        },
        {
          "number": 3,
          "text": "好きではない仕事でもいつか好きになる。",
          "translation": "即使是不喜欢的工作，总有一天也会喜欢上。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这与文章主旨完全无关。"
        },
        {
          "number": 4,
          "text": "好きなことでも仕事に結びつく。",
          "translation": "即使是喜欢的事情也能和工作联系起来。",
          "correct": true,
          "error": null,
          "explanation": "精准概括了作者反驳“喜欢的事情赚不到钱”，主张“喜欢的事情也能转化为工作”的核心观点。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-12-04",
      "questionNumber": 63,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "『１０億円あったら…",
        "しかし、じっと考えていると、心の奥底にしまっていた“①本当にやりたいこと”が見えてくるはずだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "１０億円よりも想像しやすい金額から夢を考え始める。",
          "translation": "从比10亿日元更容易想象的金额开始考虑梦想。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有建议从更容易想象的金额开始考虑。"
        },
        {
          "number": 2,
          "text": "１０億円を使い切るには、どうすればいいかを考える。",
          "translation": "思考为了花光10亿日元该怎么做。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章提到花光10亿很难，但浮现梦想的条件是思考有10亿能做什么，而不是单纯思考怎么花光它。"
        },
        {
          "number": 3,
          "text": "１０億円あれば実現できることを常に考える。",
          "translation": "总是思考如果有10亿日元能实现的事情。",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文“一边总是想着‘如果有10亿日元的话……’（『１０億円あったら…』といつも考えながら）”。"
        },
        {
          "number": 4,
          "text": "１０億円を稼いだ自分の姿を想像し続ける。",
          "translation": "持续想象自己赚到10亿日元的样子。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确说想象自己赚到10亿是很难的，这也不是浮现梦想的方法。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-12-05",
      "questionNumber": 64,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "②１０億円の夢を描けば、１０億円を手にすることは可能なのだ。それは、あなたの夢に賛同する人があらわれるからだ。夢に向かっていくあなたの真摯な姿勢に賛同して『お金を出そう",
        "一緒にやろう"
      ],
      "options": [
        {
          "number": 1,
          "text": "１０億円の稼ぎ方を教えてくれる人があらわれるかもしれないから。",
          "translation": "因为也许会出现教你如何赚10亿日元的人。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是别人出钱或出力，不是教你赚钱的方法。"
        },
        {
          "number": 2,
          "text": "１０億円を稼ぐための具体的な行動を起こせるかもしれないから。",
          "translation": "因为也许能采取为了赚10亿日元的具体行动。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是他人的帮助，而不是自己能采取具体赚钱行动。"
        },
        {
          "number": 3,
          "text": "夢を実現するうえで、誰が必要かわかるようになるかもしれないから。",
          "translation": "因为在实现梦想的过程中，也许会变得明白需要谁。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "重点在于别人主动出现提供帮助，而不是自己变得明白需要谁。"
        },
        {
          "number": 4,
          "text": "夢の実現を助けてくれる人があらわれるかもしれないから。",
          "translation": "因为也许会出现帮助你实现梦想的人。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了原文“出现赞同梦想的人（提供资金或合作）”的意思。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-12-06",
      "questionNumber": 65,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "大切なのは、１０億円を稼ぐ人間になることではなく、１０億円分の夢を描くこと。そしてその大きい夢に見合うだけの大きい人間になっておくことである。",
        "大切なのは、１０億円を稼ぐ人間になることではなく、１０億円分の夢を描くこと。そしてその大きい夢に見合う（注6）だけの大きい人間になっておくことである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "大きい夢を描いて、その夢にふさわしい人間になることが大切だ。",
          "translation": "描绘巨大的梦想，成为配得上那个梦想的人很重要。",
          "correct": true,
          "error": null,
          "explanation": "精准对应最后一段的两点总结：描绘巨大的梦想、成为配得上梦想的人。"
        },
        {
          "number": 2,
          "text": "大きい夢を描いて、努力によってその夢を実現することが大切だ。",
          "translation": "描绘巨大的梦想，通过努力实现那个梦想很重要。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章后半段强调的是吸引他人赞同，以及提升自己去配得上梦想，而不是单凭自己的“努力（努力によって）”去实现。"
        },
        {
          "number": 3,
          "text": "大きい人間になることで、大きい夢を描くことができるようになる。",
          "translation": "通过成为伟大的人，就能够描绘巨大的梦想。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "因果关系倒置，原文是先描绘大梦想，然后再去成为配得上它的大人物。"
        },
        {
          "number": 4,
          "text": "大きい人間になれるかどうかは、大きい夢が描けるかどうかで決まる。",
          "translation": "能否成为伟大的人，取决于能否描绘巨大的梦想。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章并没有说能否成为伟大的人是由能否描绘大梦想“决定（決まる）”的，而是呼吁大家去努力让自己配得上梦想。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-12-07",
      "questionNumber": 66,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "人を利口にし、快く酔わせるよりも、それを読んで本当によかったと思わせる文章を書こう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "読んだ後に満足感が得られるもの",
          "translation": "读后能获得满足感的文章",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“让人觉得读了真好（読んで本当によかったと思わせる）”，即内心获得了满足感。"
        },
        {
          "number": 2,
          "text": "読んだ後に利口になった気分になるもの",
          "translation": "读后能感到自己变聪明了的文章",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确表示“比起让人变聪明……（人を利口にし……よりも）”，说明这不是作者追求的首要目标。"
        },
        {
          "number": 3,
          "text": "時間をつくってでも読みたくなるもの",
          "translation": "即使挤出时间也想读的文章",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有提到要写让人“挤出时间也想读”的文章。"
        },
        {
          "number": 4,
          "text": "表現が凝っていて読みごたえがあるもの",
          "translation": "表达很讲究且有阅读价值的文章",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章指出内容更重要，过于讲究的表达如果内容无聊也没价值，且第一段也说“技巧也没有必要使人开心”。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-12-08",
      "questionNumber": 67,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-67"
      ],
      "evidenceTexts": [
        "自己を取り巻いて果てしなく広がる世界のどこをどう切り取るか、それをどこまでよく見、よく考え、よく味わうか、そういうほとんどその人間の生き方とも言えるものがそこにかかわっているからである。豊かな内容は深く生きることをとおして自然に湧き出るのだろう。",
        "豊かな内容は深く生きることをとおして自然に湧き出る（注6）のだろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "さまざまな人間の生き方を知ることで",
          "translation": "通过了解各种各样人的生活方式",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说要从身边世界去观察思考，体现自己的生活方式，而不是去“了解各种各样人的生活方式”。"
        },
        {
          "number": 2,
          "text": "世界中のことを広く知ることで",
          "translation": "通过广泛了解世界上的事情",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说如何截取身边的世界，并非强调要“广泛了解世界上的事情”。"
        },
        {
          "number": 3,
          "text": "人生を深く生きることで",
          "translation": "通过深刻地生活",
          "correct": true,
          "error": null,
          "explanation": "直接对应了原文“经过深刻的生活自然而然涌现出来（深く生きることをとおして自然に湧き出る）”。"
        },
        {
          "number": 4,
          "text": "深い知識を得ることで",
          "translation": "通过获得深刻的知识",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "第一段指出“知识没有必要取悦于人”，所以获取深刻知识并非好内容产生的核心。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-12-09",
      "questionNumber": 68,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-68"
      ],
      "evidenceTexts": [
        "というよりも、言語の形をとることによって、それがすぐれた思考であることがはじめて確認できるのである。……逆に言えば、すぐれたことばの姿をとおしてしか、すぐれた内容というものの存在を知ることはできないのである。",
        "というよりも、言語の形をとることによって、それがすぐれた思考であることがはじめて確認できるのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "いい表現であれば、どのような内容でも人の心を打つ。",
          "translation": "只要是好表达，无论什么内容都能打动人心。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章第二段明确说，如果内在的内容很无聊（内容がつまらなければ），整体价值就很低。好表达不能掩盖烂内容。"
        },
        {
          "number": 2,
          "text": "いい表現の形をとることで、いい内容が人に伝わる。",
          "translation": "通过采取好表达的形式，好内容才能传达给人。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一段“只有通过优秀语言的姿态，才能知晓所谓优秀内容的存在”的论点。"
        },
        {
          "number": 3,
          "text": "いい表現を創造することで、さらにいい内容になる。",
          "translation": "通过创造好表达，内容会变得更好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "好的表达是将好内容呈现出来的形式，而不是说创造好表达就能让内容“变得更好（さらにいい内容になる）”。"
        },
        {
          "number": 4,
          "text": "いい表現は、すぐれた内容であれば自然に生まれる。",
          "translation": "好表达在内容优秀的情况下就会自然产生。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说好表达一半是发现一半是创造，需要去“给模糊的主意赋予明确语言的过程”，并非有好的内容就会自动自然产生好的表达。"
        }
      ]
    }
  ],
  "2014.7": [
    {
      "id": "n2-middle-2014-7-01",
      "questionNumber": 60,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "疑問に感じる事の幅の広さ、疑問の大きさの違いだ。……しかし実際には、その広がり、対象範囲が人によってまったく異なるのだ。",
        "以前、高校の教え子たちと話していて①ふと気づいたことがある。疑問に感じる事の幅の広さ、疑問の大きさの違いだ。「どうして？」「なぜ？」という問いは、人間にとって、だれもが持ち合わせるごく当たり前の心のはたらきだと思っていた。しかし実際には、その広がり、対象範囲が人によってまったく異なるのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "どんなことにも疑問を持たない高校生が増えている。",
          "translation": "对任何事情都不抱疑问的高中生在增加。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章说的是疑问的广度和对象因人而异，并未说对任何事都不抱疑问的高中生在增加。"
        },
        {
          "number": 2,
          "text": "高校生の疑問の範囲が狭くなっている。",
          "translation": "高中生疑问的范围变窄了。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章说的是“因人而异”，并未说高中生的疑问范围集体变窄了。"
        },
        {
          "number": 3,
          "text": "疑問の対象は世代によって異なる。",
          "translation": "疑问的对象因世代而异。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是“因人而异（人によって）”，而不是“因世代而异（世代によって）”。"
        },
        {
          "number": 4,
          "text": "疑問の範囲は人によって異なる。",
          "translation": "疑问的范围因人而异。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中“疑问的广度、对象范围因人而异，截然不同（対象範囲が人によってまったく異なるのだ）”的论述。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-7-02",
      "questionNumber": 61,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "というのは、『なんで？",
        "②それではダメだ。というのは、「なんで？」だけで終わってしまうと、その後に「反抗」「反感」の感情が心に渦巻いて（注6）しまうだけだからである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "反発する気持ちを表現しなくなるから。",
          "translation": "因为会变得不再表达反抗的心情。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说心里会翻腾着反抗的情绪，并没有说“变得不再表达”。"
        },
        {
          "number": 2,
          "text": "反発する気持ちが生まれるだけだから。",
          "translation": "因为只会产生反抗的心情。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“之后心里就只会翻腾着反抗、反感的感情（『反抗』『反感』の感情が心に渦巻いてしまうだけ）”。"
        },
        {
          "number": 3,
          "text": "疑問が大きくなってしまうだけだから。",
          "translation": "因为只会让疑问变大。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是会产生负面情绪，并没有说会让“疑问变大”。"
        },
        {
          "number": 4,
          "text": "疑問を持たなくなってしまうから。",
          "translation": "因为会变得不再持有疑问。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是在已经有“为什么”这个疑问的前提下，如果就此止步会怎样，而不是说变得不再有疑问。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-7-03",
      "questionNumber": 62,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "『なんで？",
        "どうしてそうなるの？"
      ],
      "options": [
        {
          "number": 1,
          "text": "疑問に感じたことを深く考えることが成長につながる。",
          "translation": "对感到疑问的事情进行深入思考能带来成长。",
          "correct": true,
          "error": null,
          "explanation": "精准对应了最后一段中“彻底思考的过程是很重要的，那里才有着成长的关键（考えを極めていく作業が大切であり、そこに成長の鍵がある）”的主旨。"
        },
        {
          "number": 2,
          "text": "あらゆることに疑問を持つことが考えを広げる。",
          "translation": "对所有事情抱有疑问能扩展思路。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说对任何事抱有疑问是“可以的”，但这只是第一步，作者最想强调的是要有“后续的深入思考”。"
        },
        {
          "number": 3,
          "text": "疑問を探し続けることが成長の鍵である。",
          "translation": "不断寻找疑问是成长的关键。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "成长的关键在于“深入思考”已经产生的疑问，而不是“不断寻找（探し続ける）”新的疑问。"
        },
        {
          "number": 4,
          "text": "疑問を持つことは「興味の現れ」である。",
          "translation": "抱有疑问是“兴趣的体现”。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这只是文章第二段提到的一个定义，并非作者在全篇最想强调的最终主张。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-7-04",
      "questionNumber": 63,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "私たちの感覚は同じ刺激を受け続けていると、その強さ、性質、明瞭性などはしだいに弱まります。著しい場合には刺激の感覚が消失することもあり、①こうしたことを感覚の順応といいます。",
        "①こうしたこと"
      ],
      "options": [
        {
          "number": 1,
          "text": "与えられる刺激が弱まると、その感じ方も弱まること",
          "translation": "随着给予的刺激变弱，那种感受方式也随之变弱",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章讨论的是因为“刺激持续相同”而导致感觉变弱，而不是“给予的刺激本身变弱”。"
        },
        {
          "number": 2,
          "text": "刺激を受ける回数が減ると、その刺激に反応しなくなること",
          "translation": "随着受到刺激的次数减少，对那种刺激变得不再反应",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是持续接受刺激（接受次数很多），而不是“受到刺激的次数减少（回数が減る）”。"
        },
        {
          "number": 3,
          "text": "同一の刺激を受けていると、その刺激を感じにくくなること",
          "translation": "如果持续受到同一刺激，就会变得难以感受到那种刺激",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中“持续接受相同的刺激，强度等就会逐渐减弱（同じ刺激を受け続けていると……しだいに弱まります）”的论述。"
        },
        {
          "number": 4,
          "text": "強弱の違う刺激を受けていると、その違いを感じなくなること",
          "translation": "如果受到强弱不同的刺激，就会感受不到那种差异",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到“强弱不同的刺激”。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-7-05",
      "questionNumber": 64,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "そこで人は新たな刺激、つまり日常に存在しない感覚や感動を求めるのです。そのために新しい刺激をもたらす（注４）ための『変化",
        "よく言えば慣れてくる、悪く言えば飽きてくるのです。そこで人は新たな刺激、つまり日常に存在しない感覚や感動を求めるのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "日常生活の中に「変化」を取り入れたいから",
          "translation": "因为想在日常生活中引入“变化”",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确表示，如果在日常生活中引入变化，那变化只是一小部分。真正的观光是要“远离日常（日常と離れた場所へ移動する）”。"
        },
        {
          "number": 2,
          "text": "日常生活では感じられない「変化」を求めるから",
          "translation": "因为追求日常生活中感受不到的“变化”",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文追求“日常中不存在的感觉和感动（日常に存在しない感覚や感動を求める）”的核心观点。"
        },
        {
          "number": 3,
          "text": "新しい自分に生まれ変わるために「変化」が必要だから",
          "translation": "因为为了脱胎换骨成为全新的自己，需要“变化”",
          "correct": false,
          "error": "not-stated",
          "explanation": "追求变化是为了获得新的刺激，文章并没有提到是为了“脱胎换骨成为全新的自己（新しい自分に生まれ変わるため）”。"
        },
        {
          "number": 4,
          "text": "日常生活の良さを再確認するために「変化」がほしいから",
          "translation": "因为为了重新确认日常生活的好处，渴望“变化”",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "人们是为了寻求新鲜刺激，而不是为了“重新确认日常生活的好处（日常生活の良さを再確認するため）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-7-06",
      "questionNumber": 65,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "外国で異文化に接するとき、この『変化",
        "外国で異文化に接するとき、この「変化」は最大になり、自分自身を除く周囲のすべてが「変化」した状態となるのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "文化の異なる国へ、知人と旅行したとき",
          "translation": "和熟人一起去文化不同的国家旅行时",
          "correct": false,
          "error": "not-stated",
          "explanation": "如果和熟人（知人）一起，熟人就代表了日常的延续，并未达到“除了自己本身以外周围的一切都改变”的最大化。"
        },
        {
          "number": 2,
          "text": "文化の異なる国へ、一人で初めて旅行したとき",
          "translation": "一个人第一次去文化不同的国家旅行时",
          "correct": true,
          "error": null,
          "explanation": "“一个人（一人で）”排除了日常中的他人，且“第一次去异文化国家（異文化に接するとき）”完美满足了文章描述的变化最大化的条件。"
        },
        {
          "number": 3,
          "text": "文化の異なる国へ旅行してから、日常へ戻ってきたとき",
          "translation": "去文化不同的国家旅行后，回到日常中时",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "回到日常中，变化就消失了。"
        },
        {
          "number": 4,
          "text": "文化の異なる国へ旅行することが、自身の日常になったとき",
          "translation": "去文化不同的国家旅行成为了自身的日常时",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "如果变成了自身的日常，那就失去了“非日常的新刺激”，变化也就不复存在了。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-7-07",
      "questionNumber": 66,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "『自分を出せない",
        "①こういう人が強く惹かれる（注1）のが、「ありのままの自分」という言葉である。"
      ],
      "options": [
        {
          "number": 1,
          "text": "個性的な表現ができないことが不満な人",
          "translation": "对无法表现个性感到不满的人",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是想说的话说不出来，而不是无法表现“个性（個性的）”。"
        },
        {
          "number": 2,
          "text": "言いたいことを伝えられないことが不満な人",
          "translation": "对无法传达想说的话感到不满的人",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中“无法说出口、无法表达出来（それを口に出せない、表現できない）”的状态。"
        },
        {
          "number": 3,
          "text": "言いたいことを理解してもらえないことが不満な人",
          "translation": "对想说的话得不到理解感到不满的人",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "问题在于自己“无法表达”，而不是别人“不理解（理解してもらえない）”。"
        },
        {
          "number": 4,
          "text": "思いを表現しなければならないことが不満な人",
          "translation": "对必须表达想法感到不满的人",
          "correct": false,
          "error": "opposite",
          "explanation": "并不是觉得“必须（しなければならない）”表达而不满，而是“想表达却表达不出来”而不满。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-7-08",
      "questionNumber": 67,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-67"
      ],
      "evidenceTexts": [
        "私たちは小さい頃から②『社会的な自己",
        "私たちは小さい頃から②「社会的な自己」というものを形成していく。こういう場面ではこのようにふるまわなければならない、といったことを学習させられる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分より他人の人を思い尊重する自分",
          "translation": "比起自己更能体谅并尊重他人的自己",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章举的例子是看场合行事，重点在于适应社会规范，而不是单纯为了“尊重他人”。"
        },
        {
          "number": 2,
          "text": "社会のために役立つことができる自分",
          "translation": "能对社会有用的自己",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章讲的是社会交往中的角色和礼仪，并未提到要“对社会有用（役立つ）”。"
        },
        {
          "number": 3,
          "text": "どんな場面でも自分らしさが出せる自分",
          "translation": "在任何场合都能展现自我的自己",
          "correct": false,
          "error": "opposite",
          "explanation": "这与“社会的自我”完全相反，在任何场合都展现自我是“真实的自己（ありのままの自分）”。"
        },
        {
          "number": 4,
          "text": "場面に応じて適切な態度をとれる自分",
          "translation": "能根据场合采取适当态度的自己",
          "correct": true,
          "error": null,
          "explanation": "准确概括了原文“在这样的场合下必须这样行动（こういう場面ではこのようにふるまわなければならない）”的意思。"
        }
      ]
    },
    {
      "id": "n2-middle-2014-7-09",
      "questionNumber": 68,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-68"
      ],
      "evidenceTexts": [
        "このようなことを学習していないと、つまり『ありのまま",
        "このようなことを学習していないと、つまり「ありのまま」でいると、社会に適応（注7）できない仕組みになっているのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "嘘の自分を演じるよりは「ありのままの自分」でいたほうがいい。",
          "translation": "与其扮演虚假的自己，不如保持“真实的自己”。",
          "correct": false,
          "error": "opposite",
          "explanation": "这是作者反对的观点，作者认为在各种场合展现不同的自己并不是虚假的，而是社会角色的体现。"
        },
        {
          "number": 2,
          "text": "人との関係を保てるなら、「ありのままの自分」でいることが許される。",
          "translation": "只要能保持与人的关系，保持“真实的自己”就是被允许的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确表示，只要活在社会里，不能“做真实的自己”而受到限制是无可奈何的事情（制限されるのはやむを得ない）。"
        },
        {
          "number": 3,
          "text": "「ありのままの自分」でいては、社会の中で役割を果たすことができない。",
          "translation": "如果保持“真实的自己”，就无法在社会中履行角色。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“保持真实状态就会无法适应社会”，必须“学习并活出角色”的观点。"
        },
        {
          "number": 4,
          "text": "「ありのままの自分」を知らなければ、社会の中での自分の役割も分からない。",
          "translation": "如果不了解“真实的自己”，也就不知道自己在社会中的角色。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未说要先了解真实的自己才能懂社会角色，而是强调要学习并履行社会角色。"
        }
      ]
    }
  ],
  "2015.12": [
    {
      "id": "n2-middle-2015-12-01",
      "questionNumber": 60,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "人間というのは、自分でわかっていることに関しては手早くポイントだけを取り出して相手に教えて、たくさんの説明をつい省略してしまいがちだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分がわかっていることは相手にすべて教える。",
          "translation": "把自己明白的事情全部教给对方。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章说的是会省略许多说明，而不是全部教给对方。"
        },
        {
          "number": 2,
          "text": "自分がわかっていることは簡単な説明で済ませる。",
          "translation": "对于自己明白的事情，用简单的说明就打发了。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“迅速提取要点教给对方，省略许多说明（手早くポイントだけを取り出して……たくさんの説明をつい省略してしまいがちだ）”。"
        },
        {
          "number": 3,
          "text": "自分がよく理解していないことは説明を省略する。",
          "translation": "对于自己不太理解的事情省略说明。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说对于“自己已经明白的事情（自分でわかっていること）”会省略说明，而不是对于不理解的事情。"
        },
        {
          "number": 4,
          "text": "自分が理解したのと同じやり方で相手に理解させる。",
          "translation": "用和自己理解时相同的方法让对方理解。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章指出应该回到自己理解的时间点去传达，但这是理想的做法，而不是教导方“经常会做的事（よくしてしまうこと）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-12-02",
      "questionNumber": 61,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "また、すべてを教えるのではなく大部分を伝え、最後の部分は自分で考えて理解させるようにするのが、理想的な教え方ではないかと考えている。"
      ],
      "options": [
        {
          "number": 1,
          "text": "教わる側に質問をして、理解できたかを確認すること",
          "translation": "向接受教导的一方提问，确认是否理解",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "提问是第二段提到的重要过程，但并非作者定义的“理想教导方式（理想的な教え方）”。"
        },
        {
          "number": 2,
          "text": "教わる側と一緒に考えながら、理解させるようにすること",
          "translation": "边和接受教导的一方一起思考，边让其理解",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说让对方“自己去思考（自分で考えて）”，而不是和对方一起思考。"
        },
        {
          "number": 3,
          "text": "最後にそれまでの内容をまとめて説明し、理解を深めさせること",
          "translation": "最后将之前的内容总结说明，加深其理解",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "反复说明加深理解是第二段的内容，不是作者在第四段提出的理想教导方式。"
        },
        {
          "number": 4,
          "text": "最後の部分は、教わる側に自分で考えて理解させるようにすること",
          "translation": "最后的部分，让接受教导的一方自己去思考并理解",
          "correct": true,
          "error": null,
          "explanation": "直接对应原文“最后的部分让对方自己去思考并理解（最後の部分は自分で考えて理解させるようにする）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-12-03",
      "questionNumber": 62,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "相手のレベルに合わせて、相手が必要としていることを教えなければ意味はない。それは、非常に微妙な調整を必要とする、ある種の職人技だ。",
        "それは、非常に微妙な調整を必要とする、ある種の職人技だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "相手が覚えるまで繰り返し教えられること",
          "translation": "能够反复教导直到对方记住",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "反复教导虽然在第二段提到过，但并不是这里所说的“需要进行微妙调整”的工匠技艺。"
        },
        {
          "number": 2,
          "text": "相手のレベルを超えた内容も教えられること",
          "translation": "能够教导超出对方水平的内容",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是要“根据对方的水平（相手のレベルに合わせて）”，而不是教超出水平的内容。"
        },
        {
          "number": 3,
          "text": "内容や教え方を相手に応じて変えられること",
          "translation": "能够根据对方改变内容和教导方式",
          "correct": true,
          "error": null,
          "explanation": "准确概括了“根据对方水平去教需要的东西，进行微妙调整”的含义。"
        },
        {
          "number": 4,
          "text": "誰でも理解できるような知識だけを選べること",
          "translation": "能够只挑选出谁都能理解的知识",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "如果只教谁都能理解的知识，就不需要“微妙的调整”和“配合对方水平”了。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-12-04",
      "questionNumber": 63,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "買ってもらいたかったのにという思いを忘れられず、今でもおもちゃに思いを寄せる大人は意外と多い。おもちゃメーカーはそこに注目した。",
        "そこに注目した"
      ],
      "options": [
        {
          "number": 1,
          "text": "子供の時にあまりおもちゃで遊ばなかった大人が多くいること",
          "translation": "有很多小时候没怎么玩过玩具的大人",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章没说大人小时候“没玩过（遊ばなかった）”玩具，而是说没能买到所有想要的玩具。"
        },
        {
          "number": 2,
          "text": "子供の時に遊んでいたおもちゃを大人が欲しがっていること",
          "translation": "大人想要小时候玩过的玩具",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说大人是对没买到的玩具有情感，而不是想要小时候“玩过的（遊んでいた）”玩具。"
        },
        {
          "number": 3,
          "text": "おもちゃへの思いを持ち続けている大人が多くいること",
          "translation": "有很多一直对玩具抱有情感的大人",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文“至今仍然对玩具寄予情感（今でもおもちゃに思いを寄せる）”。"
        },
        {
          "number": 4,
          "text": "おもちゃの中には大人でも楽しめるものがあること",
          "translation": "玩具中有大人也能享受的东西",
          "correct": false,
          "error": "opposite",
          "explanation": "这不是制造商“关注（注目）”的起因，而是后续他们开发的巧思。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-12-05",
      "questionNumber": 64,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "このように、大人向けのおもちゃには単におもちゃとして遊ぶだけではない他の魅力がある。",
        "大人向けのおもちゃには、大人が買いたくなる工夫が必要だ。例えば、鉄道模型には特殊な素材を使用し、完成後にインテリアとして飾ることができる。組み立て式のミニギターは組み立て後に本格的な演奏も楽しめるし、色使いが落ち着いたカードのゲームは気持ちをリラックスさせる。このように、大人向けのおもちゃには単におもちゃとして遊ぶだけではない他の魅力がある。"
      ],
      "options": [
        {
          "number": 1,
          "text": "遊ぶ目的以外の違ったよさが感じられるようにしてある。",
          "translation": "让人能感受到游玩目的之外的优点。",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文“不仅具有单纯作为玩具游玩的属性，还有其他的魅力（遊ぶだけではない他の魅力がある）”。"
        },
        {
          "number": 2,
          "text": "大人に合わせた高度な遊びができるようにしてある。",
          "translation": "让人能进行适合大人的高级游玩。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "举例中的装饰、放松等并非“高级的游玩（高度な遊び）”。"
        },
        {
          "number": 3,
          "text": "二つ以上の遊び方ができるようにしてある。",
          "translation": "让人能有两种以上的玩法。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章举例是说明附加了演奏、装饰等功能，并不是说一种玩具有多种“玩法”。"
        },
        {
          "number": 4,
          "text": "何度でも飽きずに遊べるようにしてある。",
          "translation": "让人能玩多少次都不会腻。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提及“玩多少次都不会腻（何度でも飽きずに）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-12-06",
      "questionNumber": 65,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "一般的にメーカーは商品価格をあまり高く設定できないものだが、大人向けのおもちゃならできる。おもちゃメーカーにとっては魅力的なマーケットである。",
        "また、大人向けのおもちゃは高いものが多い。高くしたほうが価値があると考えられて人気が出ることさえある。一般的にメーカーは商品価格をあまり高く設定できないものだが、大人向けのおもちゃならできる。おもちゃメーカーにとっては魅力的なマーケットである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "子供向けのおもちゃと同様に多く売れる点",
          "translation": "和面向孩子的玩具一样能卖出很多",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未将销量与面向孩子的玩具进行对比。"
        },
        {
          "number": 2,
          "text": "昔と同じおもちゃを作れば売れる点",
          "translation": "只要制作和过去一样的玩具就能卖出去",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调需要加入适合大人的巧思，而不是做和过去一样的玩具。"
        },
        {
          "number": 3,
          "text": "工夫が多ければ多いほど売れる点",
          "translation": "巧思越多就越能卖出去",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未说巧思越多越好卖。"
        },
        {
          "number": 4,
          "text": "価格を高くしても売れる点",
          "translation": "即使价格定得高也能卖出去",
          "correct": true,
          "error": null,
          "explanation": "准确对应最后一段“可以定高价（高く設定できる）”和“越贵越受欢迎（高くしたほうが価値があると考えられて人気が出る）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-12-07",
      "questionNumber": 66,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "学生時代の勉強は、いやでも復習がカリキュラムの中に織り込まれている（注１）ので、知識が定着しやすくなっている。",
        "これに対して、大人になって自分で勉強するときには、意識して復習の機会をつくらないと、一回本を読んだだけで「もうわかった。大丈夫」と思い込んでしまいがちになるのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "大人より記憶力が優れているから",
          "translation": "因为记忆力比大人优秀",
          "correct": false,
          "error": "opposite",
          "explanation": "文章最后一段指出，记不住并不是因为老化（记忆力衰退），而是因为没复习，并没有说学生记忆力比大人优秀。"
        },
        {
          "number": 2,
          "text": "大人と比べて「わかった」という思い込みをしないから",
          "translation": "因为和大人相比，不会产生“懂了”的错觉",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章提到大人不复习容易产生错觉，但并没有以此作为学生时代知识容易巩固的直接原因。"
        },
        {
          "number": 3,
          "text": "学校では一度学んだことを繰り返し勉強するから",
          "translation": "因为在学校会把学过的东西反复学习",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中“复习被编入了课程（復習がカリキュラムの中に織り込まれている）”的含义。"
        },
        {
          "number": 4,
          "text": "学校では覚えたほうがいい知識だけが教えられているから",
          "translation": "因为在学校只教那些记下来比较好的知识",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并没有提到学校只教需要记住的知识。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-12-08",
      "questionNumber": 67,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-ks-67"
      ],
      "evidenceTexts": [
        "一カ月の間で最低二回繰り返して頭に入れることで、『必要な情報",
        "この間隔は一カ月と言われており、すなわち、一カ月の間で最低二回繰り返して頭に入れることで、「必要な情報」だと脳が認識し（注4）、知識が定着していくのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "得た情報をすでに持っている情報と関連づける。",
          "translation": "把获得的信息和已经拥有的信息联系起来。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到与已有信息“联系起来（関連づける）”。"
        },
        {
          "number": 2,
          "text": "得た情報をもう一度思い出して整理する。",
          "translation": "把获得的信息再次回想起来并整理。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是重新输入大脑（頭に入れる），而不是单单在脑子里“回想整理（思い出して整理する）”。"
        },
        {
          "number": 3,
          "text": "得た情報と関係のある情報を繰り返し頭に入れる。",
          "translation": "把和获得的信息相关的信息反复输入大脑。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章说的是“相同的信息（同じ情報）”，而不是“相关的信息（関係のある情報）”。"
        },
        {
          "number": 4,
          "text": "得た情報と同じ情報をもう一度頭に入れる。",
          "translation": "把和获得的信息相同的信息再次输入大脑。",
          "correct": true,
          "error": null,
          "explanation": "精准对应了原文“相同的信息反复进入（同じ情報が繰り返し入ってくる）”和“重复输入大脑（繰り返して頭に入れる）”的条件。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-12-09",
      "questionNumber": 68,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-68"
      ],
      "evidenceTexts": [
        "これに対して、大人になって自分で勉強するときには、意識して復習の機会をつくらないと、一回本を読んだだけで『もうわかった。大丈夫",
        "実際には老化のせいでも何でもなく、単に復習をしていないだけだということが多いのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "大人が勉強する場合には、意識して復習を取り入れることが大切だ。",
          "translation": "成年人学习时，有意识地加入复习是很重要的。",
          "correct": true,
          "error": null,
          "explanation": "准确总结了全文的核心论点，即大人学习时“有意识地加入复习是很重要的（意識して復習を取り入れることが大切だ）”。"
        },
        {
          "number": 2,
          "text": "大人が知識を習得するには、学生時代より多く復習しなければならない。",
          "translation": "成年人想要掌握知识，必须比学生时代复习得更多。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章只是说要复习，并没有说要复习得“比学生时代更多（学生時代より多く）”。"
        },
        {
          "number": 3,
          "text": "復習を習慣にすれば、老化による記憶力の衰えを防ぐことができる。",
          "translation": "如果把复习养成习惯，就能防止因老化导致的记忆力衰退。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说记不住不是因为老化，而不是说复习能“防止（防ぐ）”记忆力因老化而衰退。"
        },
        {
          "number": 4,
          "text": "一度忘れてしまった知識でも、復習すれば思い出すことができる。",
          "translation": "即使是忘记过一次的知识，只要复习就能想起来。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是在探讨如何防止忘记（巩固知识），并没有说忘了之后再去复习就能想起来。"
        }
      ]
    }
  ],
  "2015.7": [
    {
      "id": "n2-middle-2015-7-01",
      "questionNumber": 60,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "書くという行為は、話すのと違って自分のペースで、行きつもどりつしながら、考えを進めていくことができる表現方法なのです。",
        "①書くという表現の場合には、たいていはひとりで、じっくり時間をかけて、ノートやパソコンなどを使って、考えたことを文字にしていったり、あるいは考えながら文字にしていくことが多いはずです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "時間をかけるほどうまく書くことができる。",
          "translation": "越花时间就能写得越好。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章提到书写会“花上充足的时间（じっくり時間をかけて）”，但并未说越花时间写得越好。"
        },
        {
          "number": 2,
          "text": "読み手の反応を想像しながら書くことができる。",
          "translation": "能够一边想象阅读者的反应一边写。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到要一边想象阅读者的反应一边写。"
        },
        {
          "number": 3,
          "text": "道具を利用するので考えを早くまとめることができる。",
          "translation": "因为利用工具所以能更快地整理想法。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章说书写是“花上充足的时间”，而不是利用工具来“更快地（早く）”整理想法。"
        },
        {
          "number": 4,
          "text": "何度もやり直しをしながら考えを進めることができる。",
          "translation": "能够一边多次重做一边推进思考。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中“来来回回地（行きつもどりつしながら）推进思考”的特征。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-7-02",
      "questionNumber": 61,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "それに対して、書き言葉の場合には、その『何となく",
        "それに対して、書き言葉の場合には、その②「何となく」はまったく伝わらない場合が多いのです。身振りも手振りも使えません。顔の表情だって、読み手には伝わりません。"
      ],
      "options": [
        {
          "number": 1,
          "text": "読み手とのやり取りがないから",
          "translation": "因为和阅读者没有互动",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章强调的是缺乏非语言表达手段，而不是缺乏互动（やり取り）。"
        },
        {
          "number": 2,
          "text": "読み手によって受け取り方が変わるから",
          "translation": "因为接收方式因阅读者而异",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到接收方式因人而异。"
        },
        {
          "number": 3,
          "text": "微妙な感覚を表現する言葉が少ないから",
          "translation": "因为表达微妙感觉的语言很少",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章的原因在于不能用动作和表情来辅助传达“大概”的感觉，而不是因为表达微妙感觉的语言很少。"
        },
        {
          "number": 4,
          "text": "文字以外に表現手段がないから",
          "translation": "因为文字以外没有表达手段",
          "correct": true,
          "error": null,
          "explanation": "完美概括了原文“不能使用身体动作、手势和面部表情”的核心原因，即只能靠文字。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-7-03",
      "questionNumber": 62,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "そのような意味で、書くという行為は、もやもやしたアイデアに明確なことばを与えていくことであり、だからこそ、書くことで考える力もついていくのです。",
        "そのような意味で、書くという行為は、もやもやした（注5）アイデアに明確なことばを与えていくことであり、だからこそ、書くことで考える力もついていくのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "話すより書くほうが、自分の考えを人に伝えられる。",
          "translation": "比起说，写更能把自己的想法传达给人。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未说书写在传达想法上一定比说话更好，只是说书写更能培养思考力。"
        },
        {
          "number": 2,
          "text": "自分の考えを書いて表現することで、思考力が向上する。",
          "translation": "通过把自己的想法写下来表达，思考能力会提升。",
          "correct": true,
          "error": null,
          "explanation": "精准对应了文章末尾“通过书写也能培养思考的能力（書くことで考える力もついていくのです）”的主旨结论。"
        },
        {
          "number": 3,
          "text": "時間をかけて何度も書き直せば、わかりやすい文章が書ける。",
          "translation": "只要花时间多次重写，就能写出易懂的文章。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章确实提到了重写，但最终目的是“培养思考能力”，而不是单纯为了“写出易懂的文章”。"
        },
        {
          "number": 4,
          "text": "思考力をつけるためには、あいまいな考えは書かないほうがいい。",
          "translation": "为了培养思考能力，最好不要写模糊的想法。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说书写是把模糊的想法明确化的过程，而不是说“最好不要写模糊的想法”。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-7-04",
      "questionNumber": 63,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "あるメーカーが、仕事中に飲んでもらうことをねらって緑茶の新製品を開発した。仕事中によく飲まれているコーヒーの代わりになるように……",
        "①ねらいどおりに好調な売れ行きを見せている"
      ],
      "options": [
        {
          "number": 1,
          "text": "仕事中にコーヒーを飲んでいた人たち",
          "translation": "在工作中喝咖啡的人们",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“为了能够代替工作中经常饮用的咖啡”这一目标定位。"
        },
        {
          "number": 2,
          "text": "高級なコーヒーをよく飲んでいた人たち",
          "translation": "经常喝高级咖啡的人们",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到包装有高级感，但目标人群是在工作中喝普通咖啡的人，并非特指喝高级咖啡的人。"
        },
        {
          "number": 3,
          "text": "他とは違う緑茶製品を求めていた人たち",
          "translation": "在寻找与众不同的绿茶产品的人们",
          "correct": false,
          "error": "opposite",
          "explanation": "目标人群并不是原本就在寻找不同绿茶的人，而是喝咖啡的人。"
        },
        {
          "number": 4,
          "text": "緑茶の香りを楽しみたいと思っていた人たち",
          "translation": "想要享受绿茶香气的人们",
          "correct": false,
          "error": "relation-error",
          "explanation": "加宽瓶口是为了享受香气，但这只是手段，不是他们锁定的目标人群。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-7-05",
      "questionNumber": 64,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "金属製ボトルに対して、６０歳未満の人は高級感を感じ好印象を持っているが、６０歳以上の人は抵抗を感じ、ペットボトルのほうを好むことがわかった。",
        "②ある消費者調査の結果"
      ],
      "options": [
        {
          "number": 1,
          "text": "金属製ボトルに対する抵抗感には男女差がある。",
          "translation": "对金属瓶的抗拒感存在男女差异。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "金属瓶的抗拒感是根据年龄（60岁）来划分的，而不是男女差异。"
        },
        {
          "number": 2,
          "text": "金属製ボトルに対しては、６０歳を境に好みが分かれる。",
          "translation": "对于金属瓶，喜好以60岁为分界线产生分歧。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了原文“60岁以下有好印象，60岁以上感到抗拒”的结果。"
        },
        {
          "number": 3,
          "text": "目新しい形や色のペットボトルは、性別を問わず好まれる。",
          "translation": "新奇形状和颜色的塑料瓶，无论性别都受人喜欢。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "新奇的塑料瓶是60岁以上“女性”喜欢的，男性则评价不高，说明受性别影响。"
        },
        {
          "number": 4,
          "text": "６０歳以上の人は、男女ともに見慣れた形や色のペットボトルを好む。",
          "translation": "60岁以上的人，不论男女都喜欢见惯了的形状和颜色的塑料瓶。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "60岁以上女性对见惯了的塑料瓶评价不高，她们更喜欢新奇的。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-7-06",
      "questionNumber": 65,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "これらの中から消費者に自社の製品を選択してもらうため、メーカーは味はもちろん、ボトルにもこだわっている。……年代や性別によってこのように好みが分かれる以上、店に多様な商品が並ぶことになるのはもっともなことだろう。",
        "年代や性別によってこのように好みが分かれる以上、店に多様な商品が並ぶことになるのはもっともなことだろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "味だけでなく容器にも消費者の好みを反映させている。",
          "translation": "不仅在味道上，在容器上也反映了消费者的喜好。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了文章首尾呼应的主题：制造商不仅注重味道，还在瓶子（容器）的设计上反映各个人群的喜好。"
        },
        {
          "number": 2,
          "text": "味より見た目を重視するようになってきている。",
          "translation": "变得比味道更重视外观。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章说“不仅在味道上，在瓶子上也讲究（味はもちろん、ボトルにもこだわっている）”，并没有说外观比味道更重要。"
        },
        {
          "number": 3,
          "text": "メーカーに対する消費者の印象を良くしようとしている。",
          "translation": "试图改善消费者对制造商的印象。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "制造商是为了让消费者选择自家的产品，而不是为了改善对制造商本身的印象。"
        },
        {
          "number": 4,
          "text": "年代や性別の違いを超えて売れる商品を開発している。",
          "translation": "在开发能够超越年龄和性别差异而畅销的商品。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "正是因为年代和性别导致喜好不同，所以才推出“多样”的商品，而不是开发“一种”能超越年龄性别差异的商品。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-7-07",
      "questionNumber": 66,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "学生時代の勉強は、いやでも復習がカリキュラムの中に織り込まれている（注１）ので、知識が定着しやすくなっている。",
        "これに対して、大人になって自分で勉強するときには、意識して復習の機会をつくらないと、一回本を読んだだけで「もうわかった。大丈夫」と思い込んでしまいがちになるのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "大人より記憶力が優れているから",
          "translation": "因为记忆力比大人优秀",
          "correct": false,
          "error": "opposite",
          "explanation": "文章最后一段指出，记不住并不是因为老化（记忆力衰退），而是因为没复习，并没有说学生记忆力比大人优秀。"
        },
        {
          "number": 2,
          "text": "大人と比べて「わかった」という思い込みをしないから",
          "translation": "因为和大人相比，不会产生“懂了”的错觉",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章提到大人不复习容易产生错觉，但并没有以此作为学生时代知识容易巩固的直接原因。"
        },
        {
          "number": 3,
          "text": "学校では一度学んだことを繰り返し勉強するから",
          "translation": "因为在学校会把学过的东西反复学习",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中“复习被编入了课程（復習がカリキュラムの中に織り込まれている）”的含义。"
        },
        {
          "number": 4,
          "text": "学校では覚えたほうがいい知識だけが教えられているから",
          "translation": "因为在学校只教那些记下来比较好的知识",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并没有提到学校只教需要记住的知识。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-7-08",
      "questionNumber": 67,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-ks-67"
      ],
      "evidenceTexts": [
        "一カ月の間で最低二回繰り返して頭に入れることで、『必要な情報",
        "この間隔は一カ月と言われており、すなわち、一カ月の間で最低二回繰り返して頭に入れることで、「必要な情報」だと脳が認識し（注4）、知識が定着していくのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "得た情報をすでに持っている情報と関連づける。",
          "translation": "把获得的信息和已经拥有的信息联系起来。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到与已有信息“联系起来（関連づける）”。"
        },
        {
          "number": 2,
          "text": "得た情報をもう一度思い出して整理する。",
          "translation": "把获得的信息再次回想起来并整理。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是重新输入大脑（頭に入れる），而不是单单在脑子里“回想整理（思い出して整理する）”。"
        },
        {
          "number": 3,
          "text": "得た情報と関係のある情報を繰り返し頭に入れる。",
          "translation": "把和获得的信息相关的信息反复输入大脑。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章说的是“相同的信息（同じ情報）”，而不是“相关的信息（関係のある情報）”。"
        },
        {
          "number": 4,
          "text": "得た情報と同じ情報をもう一度頭に入れる。",
          "translation": "把和获得的信息相同的信息再次输入大脑。",
          "correct": true,
          "error": null,
          "explanation": "精准对应了原文“相同的信息反复进入（同じ情報が繰り返し入ってくる）”和“重复输入大脑（繰り返して頭に入れる）”的条件。"
        }
      ]
    },
    {
      "id": "n2-middle-2015-7-09",
      "questionNumber": 68,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-68"
      ],
      "evidenceTexts": [
        "これに対して、大人になって自分で勉強するときには、意識して復習の機会をつくらないと、一回本を読んだだけで『もうわかった。大丈夫",
        "実際には老化のせいでも何でもなく、単に復習をしていないだけだということが多いのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "大人が勉強する場合には、意識して復習を取り入れることが大切だ。",
          "translation": "成年人学习时，有意识地加入复习是很重要的。",
          "correct": true,
          "error": null,
          "explanation": "准确总结了全文的核心论点，即大人学习时“有意识地加入复习是很重要的（意識して復習を取り入れることが大切だ）”。"
        },
        {
          "number": 2,
          "text": "大人が知識を習得するには、学生時代より多く復習しなければならない。",
          "translation": "成年人想要掌握知识，必须比学生时代复习得更多。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章只是说要复习，并没有说要复习得“比学生时代更多（学生時代より多く）”。"
        },
        {
          "number": 3,
          "text": "復習を習慣にすれば、老化による記憶力の衰えを防ぐことができる。",
          "translation": "如果把复习养成习惯，就能防止因老化导致的记忆力衰退。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说记不住不是因为老化，而不是说复习能“防止（防ぐ）”记忆力因老化而衰退。"
        },
        {
          "number": 4,
          "text": "一度忘れてしまった知識でも、復習すれば思い出すことができる。",
          "translation": "即使是忘记过一次的知识，只要复习就能想起来。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是在探讨如何防止忘记（巩固知识），并没有说忘了之后再去复习就能想起来。"
        }
      ]
    }
  ],
  "2016.12": [
    {
      "id": "n2-middle-2016-12-01",
      "questionNumber": 60,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "日本ではよく、『若者はもっと個性を発揮するべきだ",
        "個性を磨くべきだ"
      ],
      "options": [
        {
          "number": 1,
          "text": "本来の意味とは違う使い方がされている。",
          "translation": "使用了与原本含义不同的用法。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了作者认为大家把“个性”错当成“比别人显眼的外观”这种违背原意的用法。"
        },
        {
          "number": 2,
          "text": "意味がないと思っている人が多い。",
          "translation": "很多人认为这没有意义。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "是作者自己认为那些口号没有意义，而不是说“很多人认为没有意义”。"
        },
        {
          "number": 3,
          "text": "主に若者に対して使われている。",
          "translation": "主要用于年轻人。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章提到要求年轻人发挥个性，但并未说这个词“主要（主に）”只对年轻人使用。文章强调的是它主要被用于“人的外观（人の外観）”。"
        },
        {
          "number": 4,
          "text": "人によって使い方がさまざまだ。",
          "translation": "因人而异有着各种各样的用法。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是很多人都统一地把个性错当成“显眼”，而不是说大家的用法各不相同（さまざまだ）。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-12-02",
      "questionNumber": 61,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "でも、根本的なことを言ってしまえば、この世に生まれた人間は一人残らず全員、それぞれの個性を持っています。だから、誰かに『磨きなさい",
        "誰かに「磨きなさい」と命令されて、義務のように磨く必要などないのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "他人には理解できないものである。",
          "translation": "是他人无法理解的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章并没有说个性是别人无法理解的东西。"
        },
        {
          "number": 2,
          "text": "人より目立つことで発揮できるものである。",
          "translation": "是通过比别人显眼来发挥的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是作者所批判的错误观念（把个性等同于比别人显眼）。"
        },
        {
          "number": 3,
          "text": "人間なら誰でも持っているものである。",
          "translation": "只要是人类谁都会拥有的东西。",
          "correct": true,
          "error": null,
          "explanation": "直接对应原文第五段“降生到这个世界上的人，无一例外全都拥有各自的个性（この世に生まれた人間は一人残らず全員、それぞれの個性を持っています）”。"
        },
        {
          "number": 4,
          "text": "ファッションを通して主張できるものである。",
          "translation": "是通过时尚穿搭可以主张的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "通过时尚来主张个性，也是作者在第二段中感到不对劲的表面现象。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-12-03",
      "questionNumber": 62,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "あなた自身が『楽しい、面白い、不思議だ、ワクワクする、ドキドキする",
        "個性を磨く"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の心に従って、関心があることを追い求めること",
          "translation": "遵从自己的内心，去追求自己感兴趣的事情",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一段中“遵从内心所求（心から求めているものを優先する）”和“追求感兴趣的事物（興味があることに気持ちが向かっていく）”的核心主张。"
        },
        {
          "number": 2,
          "text": "自分が好きかどうかより、個性的に見られるかどうかを優先すること",
          "translation": "比起自己是否喜欢，优先考虑是否被看作有个性",
          "correct": false,
          "error": "opposite",
          "explanation": "这与作者的观点完全相反，作者认为不需要去在意是否发挥了表现出了个性。"
        },
        {
          "number": 3,
          "text": "周囲の意見を参考に、無理なく自分の世界を広げること",
          "translation": "参考周围的意见，毫不勉强地扩展自己的世界",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有提到要“参考周围的意见（周囲の意見を参考に）”。"
        },
        {
          "number": 4,
          "text": "どんな物事にも、楽しさや面白さを見つける努力をすること",
          "translation": "对于任何事物，都去努力发现其中的快乐和趣味",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说去做自己真正喜欢和感兴趣的事，而不是勉强自己去在“任何事物（どんな物事にも）”中寻找乐趣。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-12-04",
      "questionNumber": 63,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "『話し言葉",
        "「話し言葉」の最も重要な特徴は、声を使うところにあるのではなく、聞き手が目の前にいるというところにあります。話し手と聞き手は、親しい関係の場合もあれば、初対面の人、行きずり（注1）の人の場合もありますが、少なくとも両者は、そこがどんな場所で、どんな状況であるかについて、一定の共通認識（注2）を持っています。"
      ],
      "options": [
        {
          "number": 1,
          "text": "話し手と聞き手が声を使って情報を共有するところ",
          "translation": "说话者和听者使用声音共享信息的地方",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确说最重要的特征“并不在于使用声音（声を使うところにあるのではなく）”。"
        },
        {
          "number": 2,
          "text": "話し手と聞き手の関係が多様であるところ",
          "translation": "说话者和听者的关系多种多样的地方",
          "correct": false,
          "error": "relation-error",
          "explanation": "双方关系多样只是一个现象，并非作者强调的“最重要的特征”。"
        },
        {
          "number": 3,
          "text": "話し手が聞き手との親しさによって表現を使い分けるところ",
          "translation": "说话者根据与听者的亲密程度区分使用表达的地方",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到要根据亲密程度区分使用表达。"
        },
        {
          "number": 4,
          "text": "話し手が聞き手と場面を共有するところ",
          "translation": "说话者和听者共享场景的地方",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中双方对地点和状况有“一定的共识（一定の共通認識）”，即共享着场景。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-12-05",
      "questionNumber": 64,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "説明するというのは、『自分には言葉にしなくてもわかっていること",
        "説明するというのは、「自分には言葉にしなくてもわかっていること」を、わざわざ言葉にする作業ですから、とてもやっかいです。でも、そこがきちんとできていないと、誤解が生じて取り返しのつかない（注4）結果になることもありえます。"
      ],
      "options": [
        {
          "number": 1,
          "text": "読み手に必要な情報を十分に説明していない時",
          "translation": "对阅读者所需的信息没有进行充分说明时",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“说明（特意用语言表达）没有做好”就会产生误解的逻辑。"
        },
        {
          "number": 2,
          "text": "読み手が理解していることを再び説明してしまった時",
          "translation": "对阅读者已经理解的事情再次进行了说明时",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章是说要特意去说明，并未说再次说明对方已理解的事情会引发误解。"
        },
        {
          "number": 3,
          "text": "自分のために書いたものを相手に送ってしまった時",
          "translation": "把为了自己写的东西发送给对方时",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到给自己写的备忘录也需要说明，但这并不是说把备忘录发给别人会引发误解。"
        },
        {
          "number": 4,
          "text": "気を悪くした相手にきちんと謝らなかった時",
          "translation": "没有向不高兴的对方好好道歉时",
          "correct": false,
          "error": "relation-error",
          "explanation": "不道歉是产生误解后关系断绝的后果，而不是引发误解的原因。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-12-06",
      "questionNumber": 65,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "ですから、『書き言葉",
        "ですから、「書き言葉」においては、文字の読み書きという知識に加えて、自分が書いたものを読む相手がどんな情報を必要としているかを推測する（注6）力、そして、その情報を、どんな言い方、どんな順序で提供すれば、わかってもらいやすく、誤解が生じにくいかを考える力が、いかに（注7）大きな意味を持つかが分かっていただけると思います。"
      ],
      "options": [
        {
          "number": 1,
          "text": "相手がどのような情報を必要としているのかを調べることが大切だ。",
          "translation": "去调查对方需要什么样的信息是很重要的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是去“推测/想象（推測する）”对方需要的信息，而不是去“调查（調べる）”。"
        },
        {
          "number": 2,
          "text": "何をどのように書けば相手が理解できるかを考えることが大切だ。",
          "translation": "去思考写什么、怎么写才能让对方理解是很重要的。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了最后一段中关于推测对方需求、思考表达方式和顺序（何をどのように書けば）以促成理解的论述。"
        },
        {
          "number": 3,
          "text": "言い方や順序よりも文字と言葉の正確さを優先させたほうがいい。",
          "translation": "比起说法和顺序，优先文字语言的准确性比较好。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章强调了思考说法和顺序（どんな言い方、どんな順序）的重要性，并没有说要优先文字语言的准确性。"
        },
        {
          "number": 4,
          "text": "読み書きの知識よりも書く内容を重視したほうがいい。",
          "translation": "比起读写的知识，更重视写的内容比较好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说“除了文字读写的知识之外（文字の読み書きという知識に加えて）”还需要思考表达的能力，并没有轻视读写知识或单纯重内容轻知识。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-12-07",
      "questionNumber": 66,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "自分の行ったことがないところに行きたい、見たことがないものを見たい、食べたことのないものを食べたいというのが主なニーズであったし……",
        "従来（注1）、旅行業にとって顧客（注2）を喜ばせることは難しくなかった。自分の行ったことがないところに行きたい、見たことがないものを見たい、食べたことのないものを食べたいというのが主なニーズであったし、長い休みの存在自体が旅行の動機になり得たからだ。だから参加者の多くは、そこに行って、そこそこ（注3）の観光ができれば、十分に満足した。"
      ],
      "options": [
        {
          "number": 1,
          "text": "高くても遠い場所でのんびり過ごせればよかった。",
          "translation": "即使贵，只要能在遥远的地方悠闲度过就好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到控制价格（価格を抑える），并不是说贵也可以。"
        },
        {
          "number": 2,
          "text": "経験したことのないことができればよかった。",
          "translation": "只要能做没有经历过的事情就好。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中人们追求没去过、没看过、没吃过的东西（未经历之事）的需求。"
        },
        {
          "number": 3,
          "text": "気に入った場所に繰り返し行ければよかった。",
          "translation": "只要能反复去喜欢的地方就好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是去“没去过的地方（行ったことがないところ）”，而不是反复去喜欢的地方。"
        },
        {
          "number": 4,
          "text": "近くて安い場所に短期間に行ければよかった。",
          "translation": "只要能在短时间内去近且便宜的地方就好。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提及“去近的地方”和“短时间”。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-12-08",
      "questionNumber": 67,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-67"
      ],
      "evidenceTexts": [
        "目的が必要になる。行ってどうするのか、何ができるのかという目的が重要になる。",
        "しかし、そうして多くの人がさまざまな場所に出掛けるようになると、今度はただ行くだけでは満足しなくなる。目的が必要になる。行ってどうするのか、何ができるのかという目的が重要になる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "一回の旅行でさまざまな場所へ行けるかどうか",
          "translation": "一次旅行能否去各种各样的地方",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说以前的人去了各种地方后发生变化，并不是现在重视一次去各种地方。"
        },
        {
          "number": 2,
          "text": "観光するだけで満足できるかどうか",
          "translation": "能否仅仅通过观光就感到满足",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "过去是只要观光就满足，现在“仅仅是去已经不满足了（ただ行くだけでは満足しなくなる）”。"
        },
        {
          "number": 3,
          "text": "行ってしたいことができるかどうか",
          "translation": "能否去做想做的事情",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文第二段“目的变得重要。去了要做什么，能做什么（行ってどうするのか、何ができるのか）”。"
        },
        {
          "number": 4,
          "text": "新しい場所へ行けるかどうか",
          "translation": "能否去新的地方",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "去新地方是以前（これまで）的主要需求。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-12-09",
      "questionNumber": 68,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-68"
      ],
      "evidenceTexts": [
        "個々の目的を一つに束ねてマスの企画にすることが難しいのだ。",
        "ただ、残念ながらそういうことをマス（注5）としてとらえることが、価値観の多様化のなかで難しくなってきている。個々の目的を一つに束ねてマスの企画にすることが難しいのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "個々のニーズに合った団体旅行を考え出すこと",
          "translation": "想出符合个体需求的团体旅行",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一段中“很难把个体的目的捆绑成团体策划（個々の目的を一つに束ねてマスの企画にすることが難しい）”的论述。"
        },
        {
          "number": 2,
          "text": "魅力を感じてもらえる場所を探し続けること",
          "translation": "持续寻找能让人感受到魅力的地方",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到以前反复宣传地方魅力就可以，但这并不是现在的难点所在。"
        },
        {
          "number": 3,
          "text": "旅行に行こうという気持ちにさせること",
          "translation": "让人产生想去旅行的心情",
          "correct": false,
          "error": "opposite",
          "explanation": "现在难的不是让他们想去旅行，而是难以把多样的目的做成统一的团体策划。"
        },
        {
          "number": 4,
          "text": "価格を抑えた団体旅行を企画すること",
          "translation": "策划控制价格的团体旅行",
          "correct": false,
          "error": "relation-error",
          "explanation": "控制价格是以前旅行社的做法，现在的难点在于整合多样的目的。"
        }
      ]
    }
  ],
  "2016.7": [
    {
      "id": "n2-middle-2016-7-01",
      "questionNumber": 60,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "字にたよらず絵だけ見ることは、わたしたちの心を、必然的に、単純で具体的な考え方のレベルにとどめてくれますし、当然のことながら、絵の中に意味をさぐろうとする心の働きを強めてくれます。",
        "字にたよらず絵だけ見ることは、わたしたちの心を、必然的に（注1）、単純で具体的な考え方のレベルにとどめて（注2）くれますし、当然のことながら、絵の中に意味をさぐろうとする心の働きを強めてくれます。"
      ],
      "options": [
        {
          "number": 1,
          "text": "字を読むより感動できる。",
          "translation": "比读文字更受感动。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到比读文字更受感动。"
        },
        {
          "number": 2,
          "text": "字を読むより物語がよくわかる。",
          "translation": "比读文字更能理解故事。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说这样做能让很多事情变得明白，但并没有直接说“比读文字更能理解故事”。"
        },
        {
          "number": 3,
          "text": "絵を見て自由に物語を作ろうとする。",
          "translation": "试图看图自由创作故事。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是去寻找意义，而不是自由创作故事。"
        },
        {
          "number": 4,
          "text": "絵の中から意味を見つけようとする。",
          "translation": "试图从图画中寻找意义。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“试图在图画中探寻意义（絵の中に意味をさぐろうとする）”的表述。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-7-02",
      "questionNumber": 61,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "そうして見ていくと、絵それ自体が何かを語りかけてくれる場合と、文を読んでからでなければ何の意味ももたない、いわば装飾的な働きしかしていない場合とが、実にはっきりしてきます。絵が何かを語りかけてくれないものは、ほんとうの意味では絵本とはいえないので……",
        "そうして見ていくと、絵それ自体が何かを語りかけてくれる場合と、文を読んでからでなければ何の意味ももたない、いわば装飾的な（注3）働きしかしていない場合とが、実にはっきりしてきます。絵が何かを語りかけてくれないものは、ほんとうの意味では絵本とはいえないので、こうして見ていくと、体裁（注4）は絵本でも、①絵本とは呼べないものが少なくないことがわかってきます。"
      ],
      "options": [
        {
          "number": 1,
          "text": "絵だけでは何も伝わってこないもの",
          "translation": "光靠图画什么也传达不出来的东西",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“图画本身不诉说些什么（絵が何かを語りかけてくれないもの）”，即光靠图画什么也传达不出来。"
        },
        {
          "number": 2,
          "text": "絵がないと、文の意味がわからないもの",
          "translation": "没有图画就不懂文字意思的东西",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是不读文字图画就没意义，而不是没有图就不懂文字意思。"
        },
        {
          "number": 3,
          "text": "絵と文の意味が合っていないもの",
          "translation": "图文意思不合的东西",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "图文意思不合是第三段讨论的“巨大的缺点”，并非这里定义的“不能称之为绘本的东西”。"
        },
        {
          "number": 4,
          "text": "絵と文を一緒に見ても、面白くないもの",
          "translation": "图文一起看也没意思的东西",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章探讨的是图画本身的传达能力，并没有提到图文一起看是否有意思。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-7-03",
      "questionNumber": 62,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "登場人物の服装とか、背景とかの具体的な事実が、文と絵で違っていることがいけないのはもちろんですが、絵全体の調子やムードが、物語のそれと合わないのは、絵本としては、②大きな欠点です。",
        "登場人物の服装とか、背景（注7）とかの具体的な事実が、文と絵で違っていることがいけないのはもちろんですが、絵全体の調子やムードが、物語のそれと合わないのは、絵本としては、②大きな欠点です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "絵の雰囲気や調子がつかみにくいこと",
          "translation": "难以把握图画氛围和基调",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说氛围和基调不合，而不是难以把握。"
        },
        {
          "number": 2,
          "text": "絵の具体的な部分が、絵全体と合っていないこと",
          "translation": "图画具体部分与图画整体不符",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章对比的是图画和故事（文），而不是图画具体部分与图画整体。"
        },
        {
          "number": 3,
          "text": "絵と物語の、雰囲気や調子が異なること",
          "translation": "图画与故事的氛围和基调不同",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文“整幅画的基调或气氛与故事（的基调或气氛）不相符”。"
        },
        {
          "number": 4,
          "text": "物語としてあまり感動を与えられないこと",
          "translation": "作为故事不能给予太多感动",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到作为故事能不能带来感动。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-7-04",
      "questionNumber": 63,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "私はこれまで、このしわは単に皮膚が水分を吸収し膨らんでできたもので、何の役割もないと思っていた。ところが、①そうではないという記事を読んだ。滑り止めの役割を果たしているというのだ。",
        "①そうではないという記事を読んだ。滑り止めの役割を果たしているというのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "「しわ」は長い間水の中にいるとできるわけではない。",
          "translation": "皱纹并非长时间在水里就会产生。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章开头承认了长时间在水里会产生皱纹，这不是作者原先以为错误的部分。"
        },
        {
          "number": 2,
          "text": "「しわ」はすべての人にできるというわけではない。",
          "translation": "皱纹并非所有人都会产生。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说“应该没有人没见过”，说明大家都会产生，这不是转折的内容。"
        },
        {
          "number": 3,
          "text": "「しわ」には滑り止めの役割があるわけではない。",
          "translation": "皱纹并非有防滑的作用。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章明确说读到的报道认为它“有（果たしている）”防滑作用，选项说没有防滑作用，意思相反。"
        },
        {
          "number": 4,
          "text": "「しわ」に役割がないわけではない。",
          "translation": "皱纹并非没有作用。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了转折前“以为没有任何作用（何の役割もないと思っていた）”的反面，即“并非没有作用”。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-7-05",
      "questionNumber": 64,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "まず水の有無について見てみると、水入りの容器から移し替えるより、水なしの容器から移し替えるほうが速い。……しかし、水入りの場合、しわがあるほうが速い。",
        "②実験は次のように行われた。ひとつの容器に小さなガラス玉を入れ、それを指でつかんで別の容器に移し替えるのにかかる時間を計る。ガラス玉が入っている容器には、水入りのものと水なしのものが準備された。また、手はしわがある状態とない状態で、それぞれのかかる時間が計測された。"
      ],
      "options": [
        {
          "number": 1,
          "text": "容器に水があり、「しわ」がある場合",
          "translation": "容器有水，有皱纹",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "有水且有皱纹的情况，比有水无皱纹的情况要快。"
        },
        {
          "number": 2,
          "text": "容器に水があり、「しわ」がない場合",
          "translation": "容器有水，无皱纹",
          "correct": true,
          "error": null,
          "explanation": "有水比无水慢，且有水时无皱纹比有皱纹慢，因此它是最慢（花费时间最长）的。"
        },
        {
          "number": 3,
          "text": "容器に水がなく、「しわ」がある場合",
          "translation": "容器无水，有皱纹",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "无水的情况总体比有水的情况快，所以不是花费时间最长的。"
        },
        {
          "number": 4,
          "text": "容器に水がなく、「しわ」がない場合",
          "translation": "容器无水，无皱纹",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "无水的情况总体比有水的情况快，且无水时有无皱纹差别不大。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-7-06",
      "questionNumber": 65,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "しかし、どうなのだろうか。滑り止めのためであれば、水に入れたらすぐにしわができないとおかしいのではないだろうか。しわの役割を知るためには、新たな実験を待たなければならない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "「しわ」ができるまでに時間がかかるので、滑り止めだと決めるにはまだ早い。",
          "translation": "因为产生皱纹需要花费时间，所以断定是用来防滑还为时过早。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一段中作者基于“没马上起皱”的质疑，认为还需要新实验（下结论为时尚早）的态度。"
        },
        {
          "number": 2,
          "text": "「しわ」ができるまでに時間がかかるが、滑り止めである可能性が高いだろう。",
          "translation": "虽然产生皱纹需要花费时间，但作为防滑的可能性很高。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者对此表示质疑（おかしいのではないだろうか），并没有认为可能性很高。"
        },
        {
          "number": 3,
          "text": "「しわ」があっても滑るので、滑り止めだと決めるにはまだ早い。",
          "translation": "因为即使有皱纹也会滑，所以断定是用来防滑还为时过早。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "作者的质疑点在于“起皱需要时间（すぐにできない）”，而不是“有皱纹也会滑”。"
        },
        {
          "number": 4,
          "text": "「しわ」があると滑りにくいので、滑り止めである可能性が高いだろう。",
          "translation": "因为有皱纹就不容易滑，所以作为防滑的可能性很高。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者并没有认同可能性很高，而是持保留态度，认为需要新实验。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-7-07",
      "questionNumber": 66,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "①そういうやり方が間違っていると思うのは、たとえそれで社員の労働力を物理的に１００パーセント引き出すことができたとしても、そのかわり精神面での労働力を捨てることになるからだ。精神面での労働力というのは、たとえば創意工夫する能力だ。強制的に仕事をさせるやり方では、人の創意工夫の能力を引き出すことはできないのだ。",
        "①そういうやり方が間違っていると思うのは、たとえそれで社員の労働力を物理的に１００パーセント引き出すことができたとしても、そのかわり精神面での労働力を捨てることになるからだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "社員からアイデアが生まれなくなるから",
          "translation": "因为员工不会再产生点子了",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“会舍弃掉精神层面的劳动力（精神面での労働力を捨てることになるからだ）”，即无法激发创新的能力（点子）。"
        },
        {
          "number": 2,
          "text": "社員のアイデアが採用されなくなるから",
          "translation": "因为员工的点子不会再被采纳了",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说员工“无法产生点子”，而不是点子“不被采纳（採用されなくなる）”。"
        },
        {
          "number": 3,
          "text": "社員の物理的な労働力が無駄になるから",
          "translation": "因为员工的物理劳动力会被浪费",
          "correct": false,
          "error": "opposite",
          "explanation": "文章说这种做法能百分百榨取“物理劳动力”，所以浪费的不是物理劳动力，而是“精神层面的劳动力”。"
        },
        {
          "number": 4,
          "text": "社員が会社を辞めたいと思うようになるから",
          "translation": "因为员工会变得想要辞职",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到员工会变得想要辞职。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-7-08",
      "questionNumber": 67,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-67"
      ],
      "evidenceTexts": [
        "どうすれば不良品を減らせるか、どうすれば作業効率を上げられるか。たとえばＱＣ活動（Quality Control：品質管理のこと）を通して、作業する人が自分たちで②そういうことを積極的に考えるようになるシステムを創り上げたからこそ……",
        "どうすれば不良品を減らせるか、どうすれば作業効率（注5）を上げられるか。たとえばＱＣ活動（Quality Control：品質管理のこと）を通して、作業する人が自分たちで②そういうことを積極的に考えるようになるシステムを創り上げたからこそ、日本の製造業は世界一になれたのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "仕事の楽しみ方",
          "translation": "享受工作的方法",
          "correct": false,
          "error": "opposite",
          "explanation": "前面提到的不是享受工作，而是提高效率、减少不良品。"
        },
        {
          "number": 2,
          "text": "よりよい仕事の仕方",
          "translation": "更好的工作方法",
          "correct": true,
          "error": null,
          "explanation": "准确概括了前文所述的“减少不良品、提高作业效率”等“更好的工作方法”。"
        },
        {
          "number": 3,
          "text": "単純な作業を減らす方法",
          "translation": "减少单纯作业的方法",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章并没有说要减少单纯作业，而是说即使是单纯作业也要去思考如何做好。"
        },
        {
          "number": 4,
          "text": "世界一の会社になる方法",
          "translation": "成为世界第一公司的方法",
          "correct": false,
          "error": "relation-error",
          "explanation": "成为世界第一公司是系统带来的“结果”，而不是作业人员自己思考的具体“事情”。"
        }
      ]
    },
    {
      "id": "n2-middle-2016-7-09",
      "questionNumber": 68,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-68"
      ],
      "evidenceTexts": [
        "そしてそういう能力を引き出すためには、従業員にとって、そこで働くことが本当の意味で自分のためになるという環境を作ることが欠かせない。本人の幸せと会社の業績が一致すれば、愛社精神なんてものは自然に育つ。",
        "そしてそういう能力を引き出すためには、従業員にとって、そこで働くことが本当の意味で自分のためになるという環境を作ることが欠かせない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "社員に自分の能力を高める方法を教えること",
          "translation": "教导员工提高自身能力的方法",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说要营造让员工自己去思考的环境，而不是由经营者去“教导（教えること）”。"
        },
        {
          "number": 2,
          "text": "社員に仕事に対してプライドを持つ大切さを教えること",
          "translation": "教导员工对工作抱有自豪感的重要性",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说有了好的环境，员工自然会有自豪感，而不是去“教导”他们自豪感的重要性。"
        },
        {
          "number": 3,
          "text": "社員が集中して仕事に取り組める環境を作ること",
          "translation": "营造一个员工能集中精力投入工作的环境",
          "correct": false,
          "error": "opposite",
          "explanation": "文章强调的不是“集中精力（集中して）”，而是让员工觉得工作是“为了自己（自分のためになる）”。"
        },
        {
          "number": 4,
          "text": "社員自身が働き続けたいと思える環境にすること",
          "translation": "营造一个员工自身想要继续工作（觉得是为了自己）的环境",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“营造一个在那里工作在真正意义上是为了自己的环境（そこで働くことが本当の意味で自分のためになるという環境を作る）”。"
        }
      ]
    }
  ],
  "2017.12": [
    {
      "id": "n2-middle-2017-12-01",
      "questionNumber": 60,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "大学の講義の多くは、聞いていれば済むし、たまに意見を求める教員がいても、受講する前に勉強してこなかったからと責める教員はいませんから、やりすごしさえすれば終わりです。",
        "大学の講義の多くは、聞いていれば済むし、たまに意見を求める教員がいても、受講する前に勉強してこなかったからと責める教員はいませんから、やりすごし（注1）さえすれば終わりです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "出席しなくても責められない。",
          "translation": "即使不出席也不会被责备。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到“不会因为你上课前没复习就责备你”，而不是“不出席也不会被责备”。"
        },
        {
          "number": 2,
          "text": "聞いていれば済む講義もある。",
          "translation": "有些讲义只要听着就行了。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中“大学的讲义大多只要听着就行了（聞いていれば済む）”的描述。"
        },
        {
          "number": 3,
          "text": "高校の授業のほうが充実している。",
          "translation": "高中的课程更充实。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到“有时会有人觉得”高中课程更充实，但这并非作者认为的客观事实或普遍情况，作者只是在解释为什么会有人产生这种感觉（因为光听讲义收获有限）。"
        },
        {
          "number": 4,
          "text": "講義で意見を求められることはない。",
          "translation": "讲义中不会被征求意见。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确提到“即使偶尔有征求意见的教师（たまに意見を求める教員がいても）”，所以并不是完全没有。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-12-02",
      "questionNumber": 61,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "だから、講義で興味を抱いたり疑問を感じたことがあれば、教員の研究室を訪ねて質問すると、驚くほど豊富な話をしてもらえます。学生らしい大学生活を送るには、こうした『講義からはみだす時間",
        "だから、講義で興味を抱いたり疑問を感じたことがあれば、教員の研究室を訪ねて質問すると、驚くほど豊富な話をしてもらえます。"
      ],
      "options": [
        {
          "number": 1,
          "text": "教員に将来について相談に乗ってもらう。",
          "translation": "让教师帮忙商谈将来的事情。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到去找老师商谈将来的事情。"
        },
        {
          "number": 2,
          "text": "教員に質問をして講義内容の理解を深める。",
          "translation": "向教师提问以加深对讲义内容的理解。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了划线部分前一句所说的“有了疑问去拜访教师提问听取更丰富的内容”。"
        },
        {
          "number": 3,
          "text": "教員と講義以外のことについての会話を楽しむ。",
          "translation": "享受与教师关于讲义以外内容的对话。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "去提问是因为对讲义内容有了兴趣或疑问，而不是去聊讲义以外的事。"
        },
        {
          "number": 4,
          "text": "教員から講義内容の基本的なことを教えてもらう。",
          "translation": "让教师教讲义内容中基本的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章指出老师在讲义上讲的才是基本内容，去研究室能听到的是更高深、更丰富的知识，而不是去让老师教基本的内容。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-12-03",
      "questionNumber": 62,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "大学で『よく学び、よく遊ぶ",
        "これらを計画的に組み立てれば、無駄も省け、時間的にも気持ちのうえでも「ゆとり（注6）」が生まれます。"
      ],
      "options": [
        {
          "number": 1,
          "text": "講義より自分のやりたいことに時間を使ったほうがいい。",
          "translation": "比起讲义，把时间用在自己想做的事情上更好。",
          "correct": false,
          "error": "not-stated",
          "explanation": "作者并未建议要重此薄彼，而是建议要有计划地安排各项活动。"
        },
        {
          "number": 2,
          "text": "時間を計画的に使って、就職活動に備えたほうがいい。",
          "translation": "有计划地使用时间，为求职活动做准备更好。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "为求职做准备只是有计划使用时间的一部分，并非文章的最终主旨，最终主旨是产生整体的“余裕”。"
        },
        {
          "number": 3,
          "text": "講義にしっかり出て、学生らしい大学生活を送ることが大切だ。",
          "translation": "好好去听讲义，度过像学生一样的大学生活是很重要的。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章也提到光好好听讲义是不够的，还需要课外的时间。"
        },
        {
          "number": 4,
          "text": "大学生活を充実させるには、時間を計画的に使うことが大切だ。",
          "translation": "为了充实大学生活，有计划地使用时间是很重要的。",
          "correct": true,
          "error": null,
          "explanation": "准确抓住了文章开头“时间的使用方法很重要”和结尾“有计划安排能产生宽裕”的核心逻辑。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-12-04",
      "questionNumber": 63,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "嫌い、もしくは考え方が合わない人は、自分とは違う発想をしているわけで、じっくり話を聞いてみると、面白い見方、魅力ある発見を教えてくれることがある。",
        "嫌い、もしくは（注1）考え方が合わない人は、自分とは違う発想をしているわけで、じっくり話を聞いてみると、面白い見方、魅力ある発見を教えてくれることがある。"
      ],
      "options": [
        {
          "number": 1,
          "text": "話してみると、自身とは違う見方や発見を得られる。",
          "translation": "试着交流的话，能获得与自己不同的视角和发现。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“有时能告诉我们有趣的视角和充满魅力的发现（面白い見方、魅力ある発見を教えてくれる）”。"
        },
        {
          "number": 2,
          "text": "話す機会が増えるにつれて、だんだん考え方が似てくる。",
          "translation": "随着交流机会的增加，想法会渐渐变得相似。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是能获得新发现，并没有说想法会变得相似（考え方が似てくる）。"
        },
        {
          "number": 3,
          "text": "好き嫌いの感情を持つのは当然なので、積極的に話す必要はない。",
          "translation": "产生喜欢或讨厌的感情是理所当然的，没必要积极去交流。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章鼓励去听他们说话，而不是认为没必要交流。"
        },
        {
          "number": 4,
          "text": "自身の考え方の間違いを指摘してくれるので、話したほうがいい。",
          "translation": "因为能指出自己想法的错误，所以去交流比较好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到他们会带来有趣的视角，而不是说对方能“指出自己想法的错误（間違いを指摘してくれる）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-12-05",
      "questionNumber": 64,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "私自身、取材をしていて、最初は『感じ悪いな、こいつは",
        "なるほど"
      ],
      "options": [
        {
          "number": 1,
          "text": "話を聞くうちに、どんな相手もいい人だと思えるようになる。",
          "translation": "在听人说话的过程中，会变得觉得任何对方都是好人。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说“有时”会改变判断，并没有说会觉得“任何对方（どんな相手も）”都是好人，过于绝对。"
        },
        {
          "number": 2,
          "text": "いい人だと思って話せば、相手から役立つ情報が得られる。",
          "translation": "如果把对方当成好人去交流，就能从对方那里获得有用的信息。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者一开始并没有把对方当好人，而是觉得“这家伙感觉真差”，是交流后才改观的。"
        },
        {
          "number": 3,
          "text": "相手に対する好き嫌いの感情は人それぞれだ。",
          "translation": "对他人的喜欢或讨厌的感情是因人而异的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然好恶因人而异是事实，但这段体验重点强调的是“感情的随便与易变”，而非因人而异。"
        },
        {
          "number": 4,
          "text": "相手に対する好き嫌いの感情は変わることがある。",
          "translation": "对他人喜欢或讨厌的感情有时是会改变的。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中对同一个人从“感觉差”转变为“好人”的感情变化过程。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-12-06",
      "questionNumber": 65,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "初めての人に会ったときは好き嫌いの感情を抜きにすること。素直に人を見て、話を聞いて……そういった人間になってしまえば、他人からも信頼されるし親しまれるだろう。",
        "初めての人に会ったときは好き嫌いの感情を抜きにすること。"
      ],
      "options": [
        {
          "number": 1,
          "text": "謙虚な態度でつきあっていれば、相手から尊敬されるようになる。",
          "translation": "如果以谦虚的态度交往，就会变得受对方尊敬。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说听了有用的话自己变得谦虚，从而尊敬对方，而不是受对方尊敬（相手から尊敬される）。"
        },
        {
          "number": 2,
          "text": "相手から信頼されるには好き嫌いの感情を素直に表すことが必要だ。",
          "translation": "为了受到对方信赖，有必要坦率地表达喜欢和讨厌的感情。",
          "correct": false,
          "error": "opposite",
          "explanation": "这与作者的观点完全相反。作者主张抛开（抜きにする）好恶感情，而不是坦率表达（表す）好恶感情。"
        },
        {
          "number": 3,
          "text": "初対面のときは相手に好き嫌いの感情を持たないほうがいい。",
          "translation": "初次见面时最好不对对方抱有喜欢和讨厌的感情。",
          "correct": true,
          "error": null,
          "explanation": "完美对应最后一段第一句的核心主张“第一次见别人时要抛开喜欢和讨厌的感情（好き嫌いの感情を抜きにすること）”。"
        },
        {
          "number": 4,
          "text": "初対面のときの感情を大切にしなければ、相手といい関係を築けない。",
          "translation": "如果不珍惜初次见面的感情，就无法和对方建立良好的关系。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者主张“抛开”初见时的感情，而不是“珍惜（大切にしなければ）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-12-07",
      "questionNumber": 66,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "小学校の写生大会で、画用紙に鉛筆で下書きをし、水性絵の具で色をぬった後、下書きを消しゴムで消そうとしたのに消えなかったときに思ったことだ。不思議だと思うと同時に、絵が思ったように仕上げられずがっかりした。",
        "絵が思ったように仕上げられずがっかりした。"
      ],
      "options": [
        {
          "number": 1,
          "text": "不思議だと思ったことの理由がわからなかったから",
          "translation": "因为不懂觉得不可思议的理由",
          "correct": false,
          "error": "relation-error",
          "explanation": "作者确实觉得不可思议，但这是并列的情绪，真正的失望原因是画没达到预期（因为草稿没擦掉）。"
        },
        {
          "number": 2,
          "text": "水性絵の具で思ったように色がぬれなかったから",
          "translation": "因为水性颜料没能如预期上色",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是草稿擦不掉，并没有说水性颜料没能如预期上色。"
        },
        {
          "number": 3,
          "text": "鉛筆で絵が上手にかげなかったから",
          "translation": "因为铅笔画没画好",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是草稿无法擦除影响了完成效果，而不是说铅笔画得不好。"
        },
        {
          "number": 4,
          "text": "鉛筆の下書きが消せなかったから",
          "translation": "因为铅笔的草稿擦不掉",
          "correct": true,
          "error": null,
          "explanation": "准确对应了“想用橡皮擦掉草稿却擦不掉（下書きを消しゴムで消そうとしたのに消えなかった）”导致画没完成好的直接原因。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-12-08",
      "questionNumber": 67,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-67"
      ],
      "evidenceTexts": [
        "前者は細かくくだかれた黒鉛が紙の表面にくっついている状態であり……したがって、表面にくっついているだけの黒鉛は、消しゴムでこすることで、紙から引き離すことができる。",
        "前者は細かくくだかれた黒鉛が紙の表面にくっついている状態であり"
      ],
      "options": [
        {
          "number": 1,
          "text": "紙の表面にくっついた黒鉛を、紙から引き離す。",
          "translation": "把附着在纸张表面的石墨从纸上分离。",
          "correct": true,
          "error": null,
          "explanation": "精准对应了原文“仅仅附着在表面的石墨……可以从纸上分离下来（紙から引き離すことができる）”。"
        },
        {
          "number": 2,
          "text": "紙の表面にくっついた黒鉛を、細かくくだいて見えなくする。",
          "translation": "把附着在表面的石墨弄碎变看不见。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是从纸上分离下来，而不是进一步弄碎变看不见。"
        },
        {
          "number": 3,
          "text": "紙の中にしみ込んだ黒鉛を、紙から引き離す。",
          "translation": "把渗入纸里的石墨从纸上分离。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "普通铅笔的石墨是附着在表面的，只有彩色铅笔的颜料才会和油分一起“渗入（しみ込んでいる）”纸内部。"
        },
        {
          "number": 4,
          "text": "紙の中にしみ込んだ黒鉛を、さらにしみ込ませて見えなくする。",
          "translation": "让渗入纸里的石墨进一步渗入变看不见。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这同样混淆了铅笔和彩色铅笔的原理，且橡皮擦并非让其进一步渗入。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-12-09",
      "questionNumber": 68,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-68"
      ],
      "evidenceTexts": [
        "鉛筆の下書きが消せないのは、水性絵の具を溶かすのに使う水のせいだそうだ。この水が、色鉛筆の芯の油分と同じ役割を果たすという。水も油も紙にしみ込みやすいのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "黒鉛が細かくくだかれていて取り除けないから",
          "translation": "因为石墨被弄得太碎无法去除",
          "correct": false,
          "error": "relation-error",
          "explanation": "石墨太碎是铅笔正常书写的状态，这并不是上色后擦不掉的原因。"
        },
        {
          "number": 2,
          "text": "絵の具で黒鉛が紙の表面にくっついたから",
          "translation": "因为颜料让石墨附着在纸张表面",
          "correct": false,
          "error": "opposite",
          "explanation": "颜料上色后石墨不是附着在表面，而是因为水的作用渗进去了。"
        },
        {
          "number": 3,
          "text": "水によって黒鉛が紙にしみ込んだから",
          "translation": "因为水让石墨渗入了纸张中",
          "correct": true,
          "error": null,
          "explanation": "准确推断出“水”起到了“油”的作用，即让石墨“渗入（しみ込む）”了纸里，导致无法分离。"
        },
        {
          "number": 4,
          "text": "黒鉛が油分と同じ働きをしていたから",
          "translation": "因为石墨起到了和油分相同的作用",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "起到和油分相同作用的是“水”，而不是“石墨（黒鉛）”。"
        }
      ]
    }
  ],
  "2017.7": [
    {
      "id": "n2-middle-2017-7-01",
      "questionNumber": 60,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "クラスのみんなで、クラスの問題点を洗い出し、どうすれば解決できるのか。そして、それを解決するため、また、再発させないためにはどのようなルールが必要か、ということを話し合い、みんなで民主的にルールを作っていくこともまさに法教育の一つの姿です。",
        "クラスのみんなで、クラスの問題点を洗い出し、どうすれば解決できるのか。そして、それを解決するため、また、再発させないためにはどのようなルールが必要か、ということを話し合い、みんなで民主的に（注3）ルールを作っていくこともまさに法教育の一つの姿です。"
      ],
      "options": [
        {
          "number": 1,
          "text": "学校のルールがなぜ作られたかを調べること",
          "translation": "调查为什么制定了学校的规则",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是在班级里“制定”规则，而不是调查学校规则为什么制定。"
        },
        {
          "number": 2,
          "text": "身近な法律を取り上げて、易しい言葉で教えること",
          "translation": "挑选身边的法律，用简单的语言来教授",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章明确表示法治教育不仅仅是教法律，而是通过制定规则来体验。"
        },
        {
          "number": 3,
          "text": "法律が必要かどうかについてクラスで話し合うこと",
          "translation": "在班级里讨论是否需要法律",
          "correct": false,
          "error": "opposite",
          "explanation": "讨论的不是“是否需要法律”，而是为了解决班级问题需要制定什么规则。"
        },
        {
          "number": 4,
          "text": "クラスの問題について話し合い、必要なルールを決めること",
          "translation": "讨论班级的问题，并决定必要的规则",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第二段中“讨论班级的问题点，并决定必要的规则（クラスの問題点を洗い出し……ルールを作っていく）”的描述。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-7-02",
      "questionNumber": 61,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "自分自身のことと考えることができるかどうかは、理解のスピードに大きな差を生みますが、具体的な『今",
        "自分自身のことと考えることができるかどうかは、理解のスピードに大きな差を生みますが、具体的な「今」問題となっている事例は、その点、すぐれた教材となります。"
      ],
      "options": [
        {
          "number": 1,
          "text": "問題点が簡潔にまとめられていて、早く理解できるから",
          "translation": "因为问题点被简洁地总结了出来，能很快理解",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到报纸将问题点简洁地总结了出来。"
        },
        {
          "number": 2,
          "text": "身近な問題だけでなく、社会全体の問題も扱っているから",
          "translation": "因为不仅涉及身边的问题，还涉及整个社会的问题",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是报纸提供的是“当下（今）”的鲜活案例，而不是区分身边问题和社会问题。"
        },
        {
          "number": 3,
          "text": "憲法などの法の基本的なことが多く取り上げられているから",
          "translation": "因为其中很多涉及宪法等法律的基本常识",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "单纯讲宪法等基本常识被作者认为是无趣的，这恰恰是不使用报纸时的状态。"
        },
        {
          "number": 4,
          "text": "今問題となっていることは、自分のこととして考えやすいから",
          "translation": "因为当下正成为问题的事情，容易当成与自己相关的事情来思考",
          "correct": true,
          "error": null,
          "explanation": "准确抓住了原文“能否将其视为与自己相关的事情……具体的‘当下’正成为问题的案例，在这一点上是很优秀的教材”的核心逻辑。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-7-03",
      "questionNumber": 62,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "すべての法律を小さいころから学習していくことは不可能なことですが、法的な考え方（リーガルマインド）を身につけることで、自分で考え・調べ、自分で解決する能力は格段に高まります。",
        "すべての法律を小さいころから学習していくことは不可能なことですが、法的な考え方（リーガルマインド）を身につけることで、自分で考え・調べ、自分で解決する能力は格段に（注1）高まります。"
      ],
      "options": [
        {
          "number": 1,
          "text": "法を守る人間に育つ。",
          "translation": "会培养成遵守法律的人。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章中并未提及把孩子培养成遵守法律的人。"
        },
        {
          "number": 2,
          "text": "法律に興味を持つようになる。",
          "translation": "会对法律产生兴趣。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章重点强调的是培养能力，而不是培养对法律的兴趣本身。"
        },
        {
          "number": 3,
          "text": "問題を解決する能力が身につけられる。",
          "translation": "能掌握解决问题的能力。",
          "correct": true,
          "error": null,
          "explanation": "完美对应了第一段中“自己解决的能力会极大提高（自分で解決する能力は格段に高まります）”的观点。"
        },
        {
          "number": 4,
          "text": "勉強の内容を理解するスピードが速くなる。",
          "translation": "理解学习内容的速度会变快。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到如果能当成自己的事，理解的“速度”会产生差异，但这指的是对法治教育内容的理解，而不是说一般性的“学习内容的理解速度变快”。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-7-04",
      "questionNumber": 63,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "外の世界に触れずにいると、人はそれまで与えられてきたひとつの価値観を持ち、そこから脱出しようとしないことが多い。……少なくとも、自分の狭い体験のみによって価値観を築いていく。",
        "外の世界に触れずにいると、人はそれまで与えられてきたひとつの価値観を持ち、そこから脱出しようとしないことが多い。固定した価値観を持ってしまう。少なくとも、自分の狭い体験のみによって価値観を築いていく。"
      ],
      "options": [
        {
          "number": 1,
          "text": "他の人の価値観を否定するようになる。",
          "translation": "会变得去否定别人的价值观。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章说的是持有固定的单一价值观，并没有说会去否定别人的价值观。"
        },
        {
          "number": 2,
          "text": "新しい価値観をそのまま受け入れるようになる。",
          "translation": "会变得全盘接受新的价值观。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是不接触外部世界，因此不会接受新的价值观，而是固守原有的价值观。"
        },
        {
          "number": 3,
          "text": "自分の価値観が正しいかどうか判断できなくなる。",
          "translation": "会变得无法判断自己的价值观是否正确。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到“不知道该相信什么才好”是在开始读书接触新价值观的时期（第三段），而不是不接触外部世界时。"
        },
        {
          "number": 4,
          "text": "自分の経験だけに基づいた価値観でものを見るようになる。",
          "translation": "会变得仅凭基于自身经验的价值观来看待事物。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中“仅凭自己狭隘的体验来构建价值观”的描述。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-7-05",
      "questionNumber": 64,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "確かに、初めのうち、新たに本を読むたびに新しい価値観に触れ、自分の価値観がぐらついてくることがあるだろう。読んだ本のすべてに感心し、自分の考えが曖昧になってくるわけだ。あれこれと知識が増えてしまって、何を信じればよいのかわからなくなってくる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "知識が増えることで、自分の考えに確信が持てなくなる時期",
          "translation": "随着知识增加，对自己的想法失去确信的时期",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第三段中“知识增加了，反而不知道该相信什么才好（何を信じればよいのかわからなくなってくる）”的状态。"
        },
        {
          "number": 2,
          "text": "知識が増えるにつれ、読んだ本に影えい響きょうされなくなる時期",
          "translation": "随着知识增加，不再受读过的书影响的时期",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说在那段时期会对“读过的书全都感到钦佩（読んだ本のすべてに感心し）”，说明深受影响，而不是不受影响。"
        },
        {
          "number": 3,
          "text": "知識が増え、さらに新しい体験をしようとする時期",
          "translation": "知识增加后，想要去进行新体验的时期",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章说的是读书获取知识，并没有提到去尝试“新的体验（新しい体験）”。"
        },
        {
          "number": 4,
          "text": "多くの本を読んで、さらに新しい知識を得ようとする時期",
          "translation": "读了很多书，想获得更多新知识的时期",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "那段时期的特征是思想动摇和迷茫，而不是积极地想获取更多新知识的态度。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-7-06",
      "questionNumber": 65,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "そうなると、本を読む前の固定的な価値観とは異なってくる。狭い自分の体験だけから判断するのではなく、反対意見も踏まえ、別の考え方も知ったうえで自分の考えが明確にできるようになってくる。",
        "そうなると、本を読む前の固定的な価値観とは異なってくる。狭い自分の体験だけから判断するのではなく、反対意見も踏まえ（注4）、別の考え方も知ったうえで自分の考えが明確にできるようになってくる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の経験に基づいた考えに自信が持てるようになる。",
          "translation": "能对基于自身经验的想法产生自信。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "读书的目的是为了超越仅凭个人经验判断的局限，而不是对基于自己经验的想法产生自信。"
        },
        {
          "number": 2,
          "text": "多様な考えを知ることで、自分の考えがはっきりしてくる。",
          "translation": "通过了解多样的想法，使自己的想法变得清晰。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一段中“在了解了其他想法的基础上，能够让自己的想法变得明确（別の考え方も知ったうえで自分の考えが明確にできるようになってくる）”的结论。"
        },
        {
          "number": 3,
          "text": "多様な考え方の中から、一番いい考え方が選べるようになる。",
          "translation": "能够从多样的想法中，挑选出最好的想法。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是让“自己的想法（自分の考え）”变得明确，而不是从多样的想法中去“挑选一个最好的（一番いい考え方が選べる）”。"
        },
        {
          "number": 4,
          "text": "他人の考えに影えい響きょうを受けたり、反発を感じたりしなくなってくる。",
          "translation": "变得既不会受他人想法的影响，也不会感到反感。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章第四段明确提到会“受到特定书籍的影响（感化される）”以及“对对立的书籍感到反感（反発を感じる）”，说明是会受到影响和产生反感的。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-7-07",
      "questionNumber": 66,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "自己イメージと他者からの自分に対するイメージに乖離（注1）が大きいと、人間関係に障害が生じます。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自己イメージと他者からのイメージは、人間関係の長さによって変化する。",
          "translation": "自我印象和他人印象会根据人际关系的长短而变化。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章说的是持续的关系会让印象固定，而不是随着时间长短而变化。"
        },
        {
          "number": 2,
          "text": "自己イメージと他者からのイメージが離れていると、人間関係に問題が起こる。",
          "translation": "自我印象和他人印象偏离的话，人际关系就会出现问题。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中“偏差很大，人际关系就会产生障碍（乖離が大きいと、人間関係に障害が生じます）”的论述。"
        },
        {
          "number": 3,
          "text": "自己イメージは、他者からのイメージとは異なるものだ。",
          "translation": "自我印象和来自他人的印象是不同的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说它们之间存在偏差时会产生误解，并不是说它们注定是不同的东西。"
        },
        {
          "number": 4,
          "text": "自己イメージは、他者からのイメージの影えい響きょうを受けて変化する。",
          "translation": "自我印象会受他人印象的影响而发生变化。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到自我印象会受他人印象影响而变化。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-7-08",
      "questionNumber": 67,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-67"
      ],
      "evidenceTexts": [
        "誤解はどうして生じるかというと、自分の方は自分の心の持ち方で判断しているのに対して、他者はその人の行動から判断しているからです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自身の行動を他人の判断基準に合わせようとするから",
          "translation": "因为试图让自身行为去迎合他人的判断基准",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是自身行为没有传达出真实想法，而不是去迎合他人的判断基准。"
        },
        {
          "number": 2,
          "text": "自身の思いをそのまま行動に移してしまうから",
          "translation": "因为把自身的想法原原本本地付诸行动了",
          "correct": false,
          "error": "opposite",
          "explanation": "这与原文相反，原文说产生误解是因为“没能把想法原原本本地付诸行动（思いをそのまま行動に移せていない）”。"
        },
        {
          "number": 3,
          "text": "自身と他人の思いは反対の場合があるから",
          "translation": "因为自己和他人的想法有时是相反的",
          "correct": false,
          "error": "opposite",
          "explanation": "文章指出的是想法和行为的偏差，而不是“自己和他人的想法”相反。"
        },
        {
          "number": 4,
          "text": "自身と他人では判断基準が違うから",
          "translation": "因为自己和他人判断的基准不同",
          "correct": true,
          "error": null,
          "explanation": "精准对应了原文“自己用心态判断，他人用行为判断”所揭示的判断基准不同的事实。"
        }
      ]
    },
    {
      "id": "n2-middle-2017-7-09",
      "questionNumber": 68,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-68"
      ],
      "evidenceTexts": [
        "思いが行動に移せていないときは、誤解されるだけでなく、ストレスが溜まります。……自己イメージと他者からのイメージの乖離を解消するには、自分の心に一致した行動を取るか……",
        "思いが行動に移せていないときは、誤解されるだけでなく、ストレスが溜まります。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自身の思いと行動を一致させれば、ストレスが溜たまらない。",
          "translation": "如果将自身的想法和行动保持一致，就不会积累压力。",
          "correct": true,
          "error": null,
          "explanation": "从最后一段反推可知，既然“想法没付诸行动会积累压力”，且消除偏差的办法是“采取与内心一致的行动”，那么行动与想法一致就不会积累压力。"
        },
        {
          "number": 2,
          "text": "自身の思いより行動を大切にする方が、ストレスが溜たまらない。",
          "translation": "比起想法更看重行动的话，就不会积累压力。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章并没有比较想法和行动哪个更重要。"
        },
        {
          "number": 3,
          "text": "自身の思いと反対の行動をしたときに、ストレスが最大になる。",
          "translation": "当做出与自身想法相反的行动时，压力会达到最大。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章提到有时会做出相反的行动，但没有说此时压力会“达到最大（最大になる）”。"
        },
        {
          "number": 4,
          "text": "自身の思いを行動に移そうとすると、ストレスが溜たまる。",
          "translation": "如果想把自身想法付诸行动的话，就会积累压力。",
          "correct": false,
          "error": "opposite",
          "explanation": "这与原文完全相反。原文说“没能付诸行动（移せていない）”才会积累压力。"
        }
      ]
    }
  ],
  "2018.12": [
    {
      "id": "n2-middle-2018-12-01",
      "questionNumber": 58,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-58"
      ],
      "evidenceTexts": [
        "叱ることで子どもがどんな行動を起こすか",
        "「叱る」とは、叱ることで子どもがどのような反応を起こすか、すべて計算されていると、つまり「叱ることで子どもがどんな行動を起こすか」が、予想できていなければならない、ということです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "なぜ叱るのかを子どもに伝えること",
          "translation": "向孩子传达为什么批评他",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这不是文章强调的核心要求。"
        },
        {
          "number": 2,
          "text": "次にとるべき行動を子どもに説明できること",
          "translation": "能向孩子说明下一步该采取的行动",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章提到批评的目的是让孩子明白下一步行动，但并没有说这是指导员需要去说明的，而是指导员需要预测孩子的反应。"
        },
        {
          "number": 3,
          "text": "叱った後の子どもの行動が予測できていること",
          "translation": "能预测出批评后孩子的行动",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文“需要预想到‘批评会让孩子采取什么行动’（どんな行動を起こすかが、予想できていなければならない）”。"
        },
        {
          "number": 4,
          "text": "子どもが自信をなくさないように強く叱らないこと",
          "translation": "为了不让孩子失去自信而不严厉批评",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章提到不能让孩子失去自信，但并未说因此就不能严厉批评。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-12-02",
      "questionNumber": 59,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-ks-59"
      ],
      "evidenceTexts": [
        "さらには『君自身を否定しているわけではないのだよ、君のしたことを叱っているのだ",
        "これに対し、「怒る」は感情的な行為です。ときには怒りや憎しみを伴います。また、子ども自身を否定することにもなりかねません。指導者は「叱る」「怒る」の違いを常に自問自答（注2）することが大切です。さらには「君自身を否定しているわけではないのだよ、君のしたことを叱っているのだ」と伝えましょう。つまり、人格（注3）を含めてすべてを頭ごなしに（注4）叱るのではなく、ポイントで叱るのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "肯定的な言葉だけを使って叱る",
          "translation": "只使用肯定的话语来批评",
          "correct": false,
          "error": "opposite",
          "explanation": "文章并未建议只用肯定的话语来批评。"
        },
        {
          "number": 2,
          "text": "間違った行動を取り上げて叱る。",
          "translation": "挑出错误的行为来批评。",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文中“并不是否定你本身，而是在批评你做的事”以及“针对行为本身进行批评（ポイントで叱る）”的观点。"
        },
        {
          "number": 3,
          "text": "子どもの成長に合った叱り方をする。",
          "translation": "采用适合孩子成长阶段的批评方式。",
          "correct": false,
          "error": "not-stated",
          "explanation": "虽然批评的目的是孩子的成长，但文章没有提到要根据成长阶段改变批评方式。"
        },
        {
          "number": 4,
          "text": "怒りや憎しみを隠して叱る。",
          "translation": "隐藏起愤怒和憎恨来批评。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说发怒会伴随愤怒和憎恨，应该避免情绪化的发怒，而不是把愤怒隐藏起来批评。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-12-03",
      "questionNumber": 60,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "叱ることによって、得られる効果が半減しないためにも、指導者は日頃から注意深く、また意思を持って、みずからと向き合う必要があるのです。",
        "ここで、「叱る」うえでの注意点を一つ、叱ることが何度も続くと、叱られることに対する慣れが生じ、「いつものことか」と子どもが感じとり、指導者の本当にいいたいことが伝わらないということがあります。叱ることによって、得られる効果が半減しないためにも、指導者は日頃から注意深く、また意思を持って、みずからと向き合う必要があるのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "叱る効果を高めるには、日頃から子どもと向き合う必要がある。",
          "translation": "为了提高批评的效果，平时就有必要多去面对孩子。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文是要求指导员面对自我（みずからと向き合う），而不是多去面对孩子（子どもと向き合う）。"
        },
        {
          "number": 2,
          "text": "本当にいいたいことを伝えるには、あきらめずに何度も叱ることが大切だ。",
          "translation": "为了传达真正想说的话，不放弃地多次批评是很重要的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文明确指出多次批评会导致孩子习惯化、效果减半。"
        },
        {
          "number": 3,
          "text": "効果的に叱るには、叱ることに慣れることが大切だ。",
          "translation": "为了有效地批评，习惯去批评是很重要的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文认为孩子对批评产生“习惯（慣れ）”是负面的，会导致无法传达真正意图。"
        },
        {
          "number": 4,
          "text": "効果的に叱るには、伝えたいことをしっかり考えておく必要がある。",
          "translation": "为了有效地批评，有必要把想传达的内容好好考虑清楚。",
          "correct": true,
          "error": null,
          "explanation": "合理引申了最后一段中指导员需要“带着意图去面对自我（意思を持って、みずからと向き合う）”以防效果减弱的主旨。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-12-04",
      "questionNumber": 61,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "これ（※性格に欠点を持つ人間だったが…尊敬に値する人物であったという話）をどう受け取ったのかわからないが、アンケートの一つに、『人の欠点について話すことに憤慨を覚える",
        "驚いた"
      ],
      "options": [
        {
          "number": 1,
          "text": "仕事について話したのに、性格について話したと勘違いされたから。",
          "translation": "明明讲的是关于工作的事，却被误以为是在讲性格。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章并没有说学生误以为他在讲性格，而是学生对他谈论别人的缺点本身感到愤怒。"
        },
        {
          "number": 2,
          "text": "仕事仲間について話すのはよくないことだと言われたから。",
          "translation": "因为被说谈论工作伙伴是不好的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "学生气愤的是“谈论别人的缺点”，而不是“谈论工作伙伴”这件事本身。"
        },
        {
          "number": 3,
          "text": "友人のいいところを話したのに、それを欠点だと思われたから。",
          "translation": "明明讲了朋友的优点，却被认为是缺点。",
          "correct": false,
          "error": "opposite",
          "explanation": "作者确实讲了同事的优点，也讲了缺点，学生并不是把优点当成了缺点，而是反感他讲缺点这一行为。"
        },
        {
          "number": 4,
          "text": "他人の欠点を話すのはよくないことだと指摘されたから。",
          "translation": "因为被指出谈论他人的缺点是不好的。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了问卷上写的“对谈论别人的缺点感到气愤”，也就是被指责讲别人缺点不好。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-12-05",
      "questionNumber": 62,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "しかし、私にとってはどちら（※いい個性も悪い個性も）も大切にすべき個性であるし、そもそもこうしたいいも悪いもないのである。……それこそが彼の個性であって、成功の一因になったということだ。",
        "しかし、私にとってはどちらも大切にすべき個性であるし、そもそも（注6）こうしたいいも悪いもないのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "欠点も個性だと言える。",
          "translation": "缺点也可以说是个性。",
          "correct": true,
          "error": null,
          "explanation": "完美对应了原文中作者认为无论是好还是坏，都是应该珍惜的个性（どちらも大切にすべき個性である）的观点。"
        },
        {
          "number": 2,
          "text": "欠点を個性とするのはよくない。",
          "translation": "把缺点当作个性是不好的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这正是作者反对的观点，作者认为缺点本身也是个性。"
        },
        {
          "number": 3,
          "text": "直せる欠点は直したほうがいい。",
          "translation": "能改正的缺点还是改正比较好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者说“坏的个性要改正”是一般的看法，他自己并不这么认为。"
        },
        {
          "number": 4,
          "text": "いい点よりも欠点のほうが成功に役立つ。",
          "translation": "相比优点，缺点对成功更有帮助。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说缺点可能成为成功的一因，但没有说缺点比优点“更有帮助（役立つ）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-12-06",
      "questionNumber": 63,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "そうなると、今言われている個性とは、一般的にいいとされる個性というものがすでにいくつかあって、それをどう獲得するかを考えなければならないということになる。しかし、そんなものは個性ではないし、結局は人と同じになってしまうのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "褒められる個性でなければ、直したほうがいい。",
          "translation": "如果不是值得表扬的个性，还是改正比较好。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "这是常识的想法，是作者在最后一段批判的对象。"
        },
        {
          "number": 2,
          "text": "いいとされる個性をどう獲得するかを考えることが重要。",
          "translation": "思考如何获得被认为是好的个性是很重要的。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这也是作者所批判的现象：大家都在思考如何获得好的个性。"
        },
        {
          "number": 3,
          "text": "いいとされる個性を獲得しても、それは個性とは言えない。",
          "translation": "即使获得了被认为是好的个性，那也不能称之为个性。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一句“那种东西根本不是个性（そんなものは個性ではない）”。"
        },
        {
          "number": 4,
          "text": "どのような個性であっても、成功と結び付けて考えないほうがいい。",
          "translation": "无论怎样的个性，还是不要和成功联系起来考虑比较好。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章举例说同事的缺点成为成功的一因，并没有说不要把个性与成功联系起来。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-12-07",
      "questionNumber": 64,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "そこに文字として書かれているものは、すべて自分の外側にあるものであり、それにアクセスできなくなったとたん――早話が本が全部焼けてしまうとか、停電になるとかしたとたん――そのほとんどが自分とは無縁のものになってしまうのである。",
        "そのほとんど"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分自身の知識のほとんど",
          "translation": "自身知识的大部分",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说这些外部信息并不是自身的知识（自分自身の知識が増えたわけではない），所以断电失去的不是自身知识的大部分。"
        },
        {
          "number": 2,
          "text": "調べればわかることのほとんど",
          "translation": "查一下就能知道的事情的大部分",
          "correct": true,
          "error": null,
          "explanation": "准确对应了存在于自身之外、依靠网络或书本“查一下就能知道的事情（調べればわかること）”。"
        },
        {
          "number": 3,
          "text": "検索するための手段のほとんど",
          "translation": "搜索手段的大部分",
          "correct": false,
          "error": "relation-error",
          "explanation": "失去的是搜索得来的“信息”，而不是“搜索手段（検索するための手段）”本身。"
        },
        {
          "number": 4,
          "text": "文字によって覚えたことのほとんど",
          "translation": "通过文字记住的事情的大部分",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "如果是已经“记住的事情（覚えたこと）”，那就属于自身的记忆，不会因为断电或书被烧而消失。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-12-08",
      "questionNumber": 65,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "しかし、そういう文化の中で育っていない人たちにとっては、その瞬間を逃したらそれまでであって、同じ人から同じ話を聞く機会はもう二度とないと考える。そのような気持ちで人のことばを聞くことによって培われた力が、記憶する力となっているのであろう。",
        "しかし、そういう文化の中で育っていない人たちにとっては、その瞬間を逃したらそれまでであって、同じ人から同じ話を聞く機会はもう二度とないと考える。そのような気持ちで人のことばを聞くことによって培われた（注5）力が、記憶する力となっているのであろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の覚えたい話ししか興味を持って聞かない",
          "translation": "只对自己想记住的话有兴趣听",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说他们只对自己想记住的话感兴趣，而是说他们珍惜每一次倾听的机会。"
        },
        {
          "number": 2,
          "text": "同じ話を二度と聞けないと考えて、集中して聞く",
          "translation": "认为同样的话无法听第二遍，从而集中精力去听",
          "correct": true,
          "error": null,
          "explanation": "准确概括了原文中“认为再也没有机会听第二遍（二度とないと考える）”而认真倾听的态度。"
        },
        {
          "number": 3,
          "text": "話を記憶できなければ、もう一度聞き直す",
          "translation": "如果记不住话，就再听一遍",
          "correct": false,
          "error": "opposite",
          "explanation": "文章强调他们认为“无法再听一遍（もう二度とない）”，选项中的“再听一遍（聞き直す）”与原文矛盾。"
        },
        {
          "number": 4,
          "text": "話は何度も聞けないので、忘れてしまいがちである",
          "translation": "因为话不能听很多遍，所以很容易忘记",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "由于无法重听，他们反而锻炼出了强大的记忆力，选项中的“容易忘记（忘れてしまいがち）”是习惯了重听的现代人的特征。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-12-09",
      "questionNumber": 66,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "自分が記憶していないものは、存在していないのと同じ。",
        "文字を学び、書かれたものを読む能力は、人間の取得可能な知識の範囲を格段に広げたことは事実である。しかし、それは取得した知識が増えたことを、なんら意味してはいない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "記憶していなければ、知識を得たとはいえない。",
          "translation": "如果没有记住，就不能说是获得了知识。",
          "correct": true,
          "error": null,
          "explanation": "完美对应了作者“没有记住的东西等同于不存在”、“借助外部文字不等于知识增加”的核心思想。"
        },
        {
          "number": 2,
          "text": "知識が増えるにしたがって、記憶する力も伸びる。",
          "translation": "随着知识的增加，记忆的能力也会提升。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到知识增加会带动记忆力提升的因果关系。"
        },
        {
          "number": 3,
          "text": "文字を学ばなければ、知識は増えない。",
          "translation": "如果不学习文字，知识就不会增加。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章认为不依靠文字（靠记忆）的人也拥有知识和记忆力，选项说法错误。"
        },
        {
          "number": 4,
          "text": "文字の使用の有無にかかわらず、記憶する力は変わらない。",
          "translation": "无论是否使用文字，记忆的能力都不会改变。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确指出，不使用文字的民族因为只能听一次，其记忆力反而被锻炼得更强，即记忆力是有改变的。"
        }
      ]
    }
  ],
  "2018.7": [
    {
      "id": "n2-middle-2018-7-01",
      "questionNumber": 60,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "私たちはどうしても先入観を持ってしまうため、それが誤解を生む原因になるのだ。",
        "これは政治家、警察官、医者などにも当てはまることであり、私たちはどうしても先入観（注2）を持ってしまうため、それが誤解を生む原因になるのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "職業の一般的なイメージは実態と合っている。",
          "translation": "职业的一般形象与实际相符。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章说确实有接近这种形象的人，但也有很多不是这样的人，并未说职业形象与实际相符。"
        },
        {
          "number": 2,
          "text": "周囲と違うイメージを持つと誤解が生まれる。",
          "translation": "带有与周围不同的形象就会产生误解。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是“带有先入为主的观念（思い込み）”会产生误解，而不是“带有与周围不同的形象”。"
        },
        {
          "number": 3,
          "text": "思い込みから誤解が生まれる。",
          "translation": "误解源于先入为主的成见。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段末尾“我们难免带有先入为主的观念，所以这成了产生误解的原因”的核心观点。"
        },
        {
          "number": 4,
          "text": "誰でも誤解をしてしまうことがある。",
          "translation": "任何人都有可能产生误解。",
          "correct": false,
          "error": "relation-error",
          "explanation": "选项表达本身没错，但并非作者举这个例子的直接目的，作者的重点在于说明产生误解的“原因”是成见。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-7-02",
      "questionNumber": 61,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "そうなると相手は自分の意図とは異なる形で補うために誤解につながっていくのだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "聞いた人の思い込みが強くなりすぎるから",
          "translation": "因为听者的成见变得过强",
          "correct": false,
          "error": "relation-error",
          "explanation": "这是第一段提到的产生误解的原因之一，而不是“说话时省略”引发误解的直接原因。"
        },
        {
          "number": 2,
          "text": "聞いた人が省略された内容を補おうとしないから",
          "translation": "因为听者不去试图补充被省略的内容",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说对方会去“补充（補う）”，而不是“不去试图补充”。"
        },
        {
          "number": 3,
          "text": "聞いた人が省略された内容があることに気が付かないから",
          "translation": "因为听者没有察觉到有被省略的内容",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章并没有说听者没有察觉到省略，而是说他们补充了不同于说话者意图的内容。"
        },
        {
          "number": 4,
          "text": "聞いた人が省略された内容とは違うことを補って理解するから",
          "translation": "因为听者补充了与被省略内容不同的东西来理解",
          "correct": true,
          "error": null,
          "explanation": "精准对应了原文“以不同于自己意图的形式去脑补（自分の意図とは異なる形で補う）”的描述。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-7-03",
      "questionNumber": 62,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "それは誤解によって人々の考えに自然に多様性が生まれるということだ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "いろいろな考えが生まれることになる。",
          "translation": "会产生各种各样的想法。",
          "correct": true,
          "error": null,
          "explanation": "完美对应了原文中“产生多样性（多様性が生まれる）”和“拥有各种各样的意见（様々な意見がある）”的观点。"
        },
        {
          "number": 2,
          "text": "自分の考えの誤りに気付くことができる。",
          "translation": "能够察觉到自己想法的错误。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章中并未提及误解能让人察觉到自己想法的错误。"
        },
        {
          "number": 3,
          "text": "人に対する間違った見方が変えられる。",
          "translation": "对人的错误看法可以被改变。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说误解能改变对人的错误看法。"
        },
        {
          "number": 4,
          "text": "多様な考えを自然に受け入れられるようになる。",
          "translation": "变得能够自然地接受多样的想法。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文是说“产生多样性（多様性が生まれる）”，而选项4是说“变得能够接受多样性”，两者意思不同。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-7-04",
      "questionNumber": 63,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "昔の小中学生は、遠足や修学旅行のとき、車窓の風景を真剣に眺めていたものだ。",
        "ところが、最近の小中学生は、乗り物の窓の外を眺めようとはせず、バスの中ではマイクをにぎって歌に夢中になっているらしい。"
      ],
      "options": [
        {
          "number": 1,
          "text": "昔も今も、歌やゲームを楽しんでいる。",
          "translation": "过去和现在都沉浸在唱歌和游戏中。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "以前的学生是看风景，不是沉浸在唱歌和游戏中。"
        },
        {
          "number": 2,
          "text": "昔も今も、窓の外の風景に興味を示す。",
          "translation": "过去和现在都对窗外的风景展现出兴趣。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "现在的学生不看窗外的风景了。"
        },
        {
          "number": 3,
          "text": "昔は歌やゲームを楽しんだが、今は楽しもうとしない。",
          "translation": "过去沉浸在唱歌和游戏中，但现在不去享受了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "选项说反了，过去是看风景，现在才是唱歌玩游戏。"
        },
        {
          "number": 4,
          "text": "昔は窓の外の風景に興味を持ったが、今は興味を示さない。",
          "translation": "过去对窗外风景有兴趣，但现在不表现出兴趣了。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“过去对窗外风景有兴趣（昔…車窓の風景を真剣に眺めていた），而现在不表现出兴趣了（最近…窓の外を眺めようとはせず）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-7-05",
      "questionNumber": 64,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "最近の人々の考えでは、旅は目的地に着いてからはじまる。目的地に到着するまでの移動の時間は、どうも無駄な時間に感じられている。",
        "わたしは、それを「目的地主義」と名づけようと思う。最近の人々の考えでは、旅は目的地に着いてからはじまる。目的地に到着するまでの移動の時間は、どうも無駄な時間に感じられている。"
      ],
      "options": [
        {
          "number": 1,
          "text": "旅は早く目的地に着くことが大事だと考える。",
          "translation": "认为旅行早点到达目的地很重要。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文强调的是认为过程是浪费时间、到达才算开始，并不是强调“快点到达（早く着く）”的重要性。"
        },
        {
          "number": 2,
          "text": "目的地に着いてからの時間が旅だと考える。",
          "translation": "认为到达目的地之后的时间才是旅行。",
          "correct": true,
          "error": null,
          "explanation": "准确对应原文“旅行是从到达目的地后才开始的（旅は目的地に着いてからはじまる）”。"
        },
        {
          "number": 3,
          "text": "目的地に着くまでの旅の時間を楽しもうと考える。",
          "translation": "认为要享受到达目的地之前的旅行时间。",
          "correct": false,
          "error": "opposite",
          "explanation": "这与“目的地主义”相反，目的地主义者认为这段时间是无聊的、浪费的。"
        },
        {
          "number": 4,
          "text": "目的地を決めることから旅ははじまると考える。",
          "translation": "认为旅行是从决定目的地开始的。",
          "correct": false,
          "error": "relation-error",
          "explanation": "原文说的是“到达（着いてから）”目的地，而不是从“决定（決める）”目的地开始。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-7-06",
      "questionNumber": 65,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "恐ろしいのは、わたしたちの人生に対する態度が、目的地主義になってはいないかという心配である。人生は『道中",
        "恐ろしいのは、わたしたちの人生に対する態度が、目的地主義になってはいないかという心配である。人生は「道中」が大事だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人生は目標に至る過程を大切にしなければいけない。",
          "translation": "人生应当珍惜达到目标的过程。",
          "correct": true,
          "error": null,
          "explanation": "准确传达了最后一段中呼吁人们“重视途中的过程（人生は「道中」が大事だ）”的核心主旨。"
        },
        {
          "number": 2,
          "text": "人生は目標を達成した後に、どうするかが大事だ。",
          "translation": "人生重要的是在达成目标之后该怎么做。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者强调的是达成目标“之前”的过程，而不是达成目标“之后”该怎么做。"
        },
        {
          "number": 3,
          "text": "人生は目標を持たずに、今ここで何をするかが大事だ。",
          "translation": "人生重要的是不抱目标、关注现在当下正在做什么。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者并不反对有目标（如考大学、当部长），反对的是为了目标而轻视过程，而非“不抱目标（目標を持たずに）”。"
        },
        {
          "number": 4,
          "text": "人生は目標を明確に決めてしまうと寂しいものになる。",
          "translation": "人生如果明确设定了目标，就会变得很寂寥。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是“轻视过程（道中を軽視する）”会变得寂寥，而不是设定了明确目标就会寂寥。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-7-07",
      "questionNumber": 66,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "人工物は人間がある意図のもとにつくり出されたものであるのにも関わらず、その社会に与える影響は設計者の予想を越える場合があり……たとえばコンピュータは……",
        "たとえばコンピュータは「計算機」という日本語が示すように、当初は計算を行う機器として製作されてきたが、現在ではデータベース（注2）やコミュニケーションなど、さまざまな用途に用いられ、生活環境を大きく変えてきている。"
      ],
      "options": [
        {
          "number": 1,
          "text": "人工物が設計者の意図に反した使われ方をされている。",
          "translation": "人造物被违背设计者意图地使用。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有说人造物被违背设计者意图地使用，而是说影响超出了预想。"
        },
        {
          "number": 2,
          "text": "人工物が設計者の予想以上に社会に影響を与えている。",
          "translation": "人造物对社会产生的影响超出了设计者的预想。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中“对社会产生的影响有时会超出设计者的预想（社会に与える影響は設計者の予想を越える場合があり）”。"
        },
        {
          "number": 3,
          "text": "人工物が人間を補助することで社会が成り立っている。",
          "translation": "社会依靠人造物辅助人类而成立。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到人造物主导社会，但没说社会“依靠辅助人类而成立（人間を補助することで社会が成り立っている）”。"
        },
        {
          "number": 4,
          "text": "人工物の製作に社会が大きな影響を与えている。",
          "translation": "社会对人造物的制作产生了巨大的影响。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "选项主客颠倒，文章说的是人造物对社会产生巨大影响，而不是社会对人造物的制作产生巨大影响。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-7-08",
      "questionNumber": 67,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-67"
      ],
      "evidenceTexts": [
        "これからの科学技術、そしてモノ作りにとって何より必要なのは、いったい、これからわたしたち一人一人がどんな生活を送り、どのような社会を作り上げたいのかというビジョンであり……人工物にその価値観をもたせることが必要だと思われる。",
        "これからの科学技術、そしてモノ作りにとって何より必要なのは、いったい、これからわたしたち一人一人がどんな生活を送り、どのような社会を作り上げたいのかというビジョン（世界観・価値観）であり、設計者は常にこのビジョンがどのようなものであるか考え、人工物にその価値観をもたせることが必要だと思われる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "将来の生活や社会に望むことを人工物に反映させること",
          "translation": "把对未来生活和社会的期望反映到人造物中",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第二段中“思考想建立怎样的社会（愿景），并把这种价值观赋予人造物”的论述。"
        },
        {
          "number": 2,
          "text": "人々の価値観を変えるような人工物を考えること",
          "translation": "去思考能改变人们价值观的人造物",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是把设计者对未来社会的愿景反映到产品上，而不是去设计“改变人们价值观（価値観を変えるような）”的东西。"
        },
        {
          "number": 3,
          "text": "一つの人工物にさまざまな用途をもたせること",
          "translation": "让一个人造物具有各种各样的用途",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章在举计算机例子时提到了多种用途，但这并不是设计者在设计时最需要考虑的事情。"
        },
        {
          "number": 4,
          "text": "現代の最も進んだ科学技術を取り入れること",
          "translation": "引入现代最先进的科学技术",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章未提及要引入“现代最先进的科学技术（現代の最も進んだ科学技術）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2018-7-09",
      "questionNumber": 68,
      "type": "method-condition",
      "evidenceSelectors": [
        ".target-ks-68"
      ],
      "evidenceTexts": [
        "こうした場合に設計者が自分の価値観をマーケットニーズとうまく調和させるために、設計者の価値観が購買者の価値観となんらかの共通性をもつ必要がある。そのために設計者は……人々の価値観を調査したうえで、設計者としてのビジョンをもつことが求められるだろう。",
        "こうした事態に設計者が自分の価値観をマーケットニーズとうまく調和させる（注3）ために、設計者の価値観が購買者（注4）の価値観となんらかの共通性をもつ必要がある。そのために設計者は社会の状勢（注5）をよく理解し、将来の社会についての予測をたて、人々の価値観を調査したうえで、設計者としてのビジョンをもつことが求められるだろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自身の価値観を捨てて、消費者に共通する価値観を優先する。",
          "translation": "舍弃自身的价值观，优先考虑消费者共通的价值观。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说要将自身价值观与市场需求“协调（調和させる）”，而不是要“舍弃（捨てて）”自身的价值观。"
        },
        {
          "number": 2,
          "text": "社会の状況を調べて、自身の価値観が正しいことを確認する。",
          "translation": "调查社会的状况，确认自身的价值观是正确的。",
          "correct": false,
          "error": "relation-error",
          "explanation": "调查的目的是为了让双方价值观产生共通性，而不是为了确认自身的价值观“是正确的（正しいことを確認する）”。"
        },
        {
          "number": 3,
          "text": "消費者のニーズを調べて、消費者と自身の価値観に共通性をもたせる。",
          "translation": "调查消费者的需求，使消费者与自身的价值观具有共通性。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了最后一段“在调查人们价值观的基础上，寻找与购买者价值观的共通性并确立愿景”的做法。"
        },
        {
          "number": 4,
          "text": "マーケットニーズの変化を考慮しながらも、自身の価値観を優先させる。",
          "translation": "在考虑市场需求变化的同时，也要优先自身的价值观。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是协调与共通，而不是“优先自身的价值观（自身の価値観を優先させる）”。"
        }
      ]
    }
  ],
  "2019.12": [
    {
      "id": "n2-middle-2019-12-01",
      "questionNumber": 58,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-58"
      ],
      "evidenceTexts": [
        "豊かな時代に育った若い人たちは、子供時代から学生を卒業するまで、『情の世界",
        "感じない"
      ],
      "options": [
        {
          "number": 1,
          "text": "物事を感性で判断する。",
          "translation": "用感性来判断事物。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第一段中用“喜欢、讨厌等感性尺度（情の世界の物差し）”观察社会的描述。"
        },
        {
          "number": 2,
          "text": "世の中のことを見ようとしない。",
          "translation": "不愿意去观察社会。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中只说他们用情感的尺度去“看世界（世の中を見る）”，并没有说“不去看世界”。"
        },
        {
          "number": 3,
          "text": "感情的に行動することは少ない。",
          "translation": "很少感情用事地采取行动。",
          "correct": false,
          "error": "opposite",
          "explanation": "与文章意思相反，他们正是用“喜欢/讨厌”等感情色彩去判断并行动的。"
        },
        {
          "number": 4,
          "text": "「好き」「嫌い」の基準が明確だ。",
          "translation": "“喜欢”和“讨厌”的标准很明确。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中是说他们“依据”喜欢和讨厌作为尺度来判断，并没有提及这些基准是否“明确（明確）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-12-02",
      "questionNumber": 59,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-59"
      ],
      "evidenceTexts": [
        "なぜなら『論理の世界",
        "なぜなら「論理の世界」では、その規則や約束をきちんと守っていかなければ、仕事が先に進まない。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分以外の人の感情を尊敬する。",
          "translation": "去尊敬他人（除了自己以外的人）的感情。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中没有提到要尊敬他人的感情。"
        },
        {
          "number": 2,
          "text": "規則や約束を守ることを優先する。",
          "translation": "优先遵守规则和约定。",
          "correct": true,
          "error": null,
          "explanation": "对应第二段的“好好遵守规则和约定（規則や約束をきちんと守っていかなければ）”以及“逻辑在先（优先规则）”。"
        },
        {
          "number": 3,
          "text": "優先するべきことを自分で考える。",
          "translation": "自己去思考应该优先处理什么。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文中并没有要求自己去思考该优先什么，而是明确指出了要优先“逻辑（规则/约定）”。"
        },
        {
          "number": 4,
          "text": "感情を捨てて会社や組織のために働く。",
          "translation": "舍弃感情去为了公司或组织工作。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章说的是“逻辑在先，情感在后”，并没有要求完全“舍弃感情（感情を捨てて）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-12-03",
      "questionNumber": 60,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "一方で理性を働かせ、『正しい",
        "正しくない"
      ],
      "options": [
        {
          "number": 1,
          "text": "人間的な向上を目指すには、正しいことだけをしていけばいい。",
          "translation": "为了实现人格提升，只要做正确的事就可以了。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是在努力去做正确之事的“过程”中实现提升，选项中“只要做正确的事就行（だけをしていけばいい）”过于绝对化，不符合原文语境。"
        },
        {
          "number": 2,
          "text": "自身の感情を抑えられるようになれば、人間的に向上したといえる。",
          "translation": "如果能抑制自身的感情，就可以说是实现了人格的提升。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文中提到要运用理性，但没有说只要“抑制自身感情（感情を抑えられる）”就能实现人格提升。"
        },
        {
          "number": 3,
          "text": "正しさを基準に行動しようとしていくことが、人間的な向上につながる。",
          "translation": "以正确为基准并努力付诸行动，能带来人格上的提升。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了最后一段中“以正确为基准去努力的过程能带来自我提升”的论述。"
        },
        {
          "number": 4,
          "text": "「好き」「嫌い」「感じる」「感じない」という感性は、人間的な向上を妨げる。",
          "translation": "“喜欢、讨厌、有感觉、没感觉”这种感性，会妨碍人格的提升。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中说单靠感性尺度无法提升人格，但并未直接断言感性会“妨碍（妨げる）”人格提升。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-12-04",
      "questionNumber": 61,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "それまでは養育者の意図に従って行動していたのに対して、自我が芽生えて自分のやりたいことが生じ、養育者の意図とは異なる自分の意思を養育者に表明することで起こる。",
        "それまでは養育者の意図に従って行動していたのに対して、自我が芽生え（注4）て自分のやりたいことが生じ、養育者の意図とは異なる自分の意思を養育者に表明する（注5）ことで起こる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "相手とは異なる自分の意思を持ち、それを伝えようとするから",
          "translation": "拥有与对方不同的自己的意志，并试图传达出来",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“自我意识萌发……向抚养者表达与抚养者意图不同的自己的意志（自分の意思を養育者に表明する）”。"
        },
        {
          "number": 2,
          "text": "相手の意図はすべて受け入れたくないと思うから",
          "translation": "不想接受对方所有的意图",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章只是说表达自己不同的意志，并没有说“不想接受对方所有的意图（すべて受け入れたくない）”。"
        },
        {
          "number": 3,
          "text": "自分のやりたいことがあるのに、それを伝えられないから",
          "translation": "虽然有自己想做的事，但却无法传达",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确提到幼儿是在向抚养者“表达（表明する）”自己的意志，而不是“无法传达（伝えられない）”。"
        },
        {
          "number": 4,
          "text": "自分とは異なる相手の意図が理解できないから",
          "translation": "无法理解对方与自己不同的意图",
          "correct": false,
          "error": "relation-error",
          "explanation": "反抗的原因是有自己的意志并表达出来，并非“无法理解对方的意图（理解できない）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-12-05",
      "questionNumber": 62,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "このころの幼児は、他者の立場に立ってものごとを考えることが難しく、自分の考えと相手の考えが同じであるととらえている。このとらえ方を自己中心的思考とよぶ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "相手が自分の気持ちに合わせるべきだと思う。",
          "translation": "认为对方应该迎合自己的心情。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是认为对方和自己想法一样，而不是主张“对方应该迎合自己的心情（合わせるべきだ）”。"
        },
        {
          "number": 2,
          "text": "相手も自分と同じ考えだと思う。",
          "translation": "认为对方和自己的想法是一样的。",
          "correct": true,
          "error": null,
          "explanation": "精准对应了原文“认为自己的想法和对方的想法是一样的（自分の考えと相手の考えが同じであるととらえている）”。"
        },
        {
          "number": 3,
          "text": "自分といえば相手はいつも楽しいと感じると思う。",
          "translation": "认为只要一提到自己，对方就总是感到开心。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章举的例子是自己开心时觉得对方也开心，但选项3的“只要提到自己对方就总是感到开心”曲解了原文的举例。"
        },
        {
          "number": 4,
          "text": "自分はあらゆるものごとを知っていると思う。",
          "translation": "认为自己无所不知。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并没有提到幼儿认为自己无所不知（あらゆるものごとを知っている）。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-12-06",
      "questionNumber": 63,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "しかし、幼児期になり、象徴的思考ができるようになると、目の前に母親がいなくても、母親がこの世からいなくなったわけではないと考えられるようになるため不安を訴えて泣くことはなくなる。",
        "しかし、幼児期になり、象徴的思考ができるようになると、目の前に母親がいなくても、母親がこの世（注7）からいなくなったわけではないと考えられるようになるため不安を訴えて泣くことはなくなる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "目の前に存在していなくても、存在していると分かる。",
          "translation": "即使不在眼前，也能明白它是存在的。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了原文“即使母亲不在眼前，也能认为母亲并没有从这个世界上消失”的逻辑，即不在眼前也知道其存在。"
        },
        {
          "number": 2,
          "text": "目の前にないものは、存在しないと考えるようになる。",
          "translation": "会认为眼前没有的东西就是不存在的。",
          "correct": false,
          "error": "opposite",
          "explanation": "这是婴儿期（乳児期）缺乏象征性思维时的想法，与题目问的幼儿期相反。"
        },
        {
          "number": 3,
          "text": "母親以外の存在も理解できるようになる。",
          "translation": "变得也能理解母亲以外的存在。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章以母亲为例说明象征性思维的作用，并未提及变得能理解“母亲以外的存在”。"
        },
        {
          "number": 4,
          "text": "ものごとに不安を感じることがなくなる。",
          "translation": "对任何事物都不会感到不安了。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "文章只是说不再因为看不见母亲而感到不安哭泣，选项说“对任何事物都不会感到不安（ものごとに不安を感じることがなくなる）”夸大了范围。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-12-07",
      "questionNumber": 64,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "しかし、それでは強い組織は出来上がらない。",
        "能力の高い特定の人間だけを重用し…"
      ],
      "options": [
        {
          "number": 1,
          "text": "能力の低い部下にも責任のある仕事を任せること",
          "translation": "给能力低的下属也安排有责任的工作",
          "correct": false,
          "error": "opposite",
          "explanation": "与前文描述的上司做法相反，前文是说那些上司不想给低能力下属机会。"
        },
        {
          "number": 2,
          "text": "能力の低い部下には能力に合った仕事を与えること",
          "translation": "给能力低的下属安排符合其能力的工作",
          "correct": false,
          "error": "not-stated",
          "explanation": "前文并未提及给低能力下属安排适合的工作，而是说想把他们调走。"
        },
        {
          "number": 3,
          "text": "能力の高い部下にも細かい指示を出すこと",
          "translation": "给能力高的下属也下达详细的指示",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "前文提到是对“能力低的下属”下达详细指示，而非能力高的下属。"
        },
        {
          "number": 4,
          "text": "能力が高い部下だけを使って成果を上げようとすること",
          "translation": "只使用能力高的下属来提升成果",
          "correct": true,
          "error": null,
          "explanation": "准确指代了第一、二段中“只重用能力高的特定人员以求自己轻松”的做法。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-12-08",
      "questionNumber": 65,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "上司が重点的に気をかけなければいけないのは、少し遅れ気味の部下、外れ者の部下、苦労している部下である。そういう部下は、手間はかかるかもしれないが、少し手を差し伸べれば、2～3割は容易に伸びる。そうすることで組織を構成するメンバー全体の力を伸ばし、組織の底上げができる。",
        "上司が重点的に気をかけなければいけないのは、少し遅れ気味の部下、外れ者の部下、苦労している部下である。そういう部下は、手間はかかるかもしれないが、少し手を差し伸べれば、2～3割は容易に伸びる。そうすることで組織を構成するメンバー全体の力を伸ばし、組織の底上げ（注6）ができる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "目標を高く設定し、メンバー全体で協力させる。",
          "translation": "设定高目标，让全体成员合作。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并没有提到“设定高目标（目標を高く設定し）”。"
        },
        {
          "number": 2,
          "text": "能力の低い部下に適切に指導し、組織全体の力を伸ばす。",
          "translation": "对能力低的下属进行适当的指导，提升组织整体的实力。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了第四段“重点关注并帮助落后下属，从而提升全体成员实力（組織の底上げができる）”的核心观点。"
        },
        {
          "number": 3,
          "text": "部下がまだ仕事がよくわからないときでも、まずは仕事をやらせてみる。",
          "translation": "在下属还不懂工作时，也先让他们去试着做做看。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "最后一段指出要在下属还不懂工作时给予准确的指导，而不是不管三七二十一“先让他们去试着做做看（まずは仕事をやらせてみる）”。"
        },
        {
          "number": 4,
          "text": "仕事ができる部下にもそうでもない部下にも、能力を伸ばすように指導する。",
          "translation": "不管是对能干的下属还是干不好的下属，都指导他们提升能力。",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "第四段强调上司应当“重点关注”并指导能力较弱的下属，因为高能力员工提升空间不大，而非对所有人无差别指导。"
        }
      ]
    }
  ],
  "2019.7": [
    {
      "id": "n2-middle-2019-7-01",
      "questionNumber": 58,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-58"
      ],
      "evidenceTexts": [
        "本を読むことは、かつて生きた優れた人の言葉を聞くということ、読むとは、基本的に人の話を聞くことです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "書かれていることを、現実の話として読む。",
          "translation": "把写着的内容当作现实的故事来读。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说的是让人感觉阅读变得更加真实（リアルになる），而不是把书里的内容当作现实发生的故事来读。"
        },
        {
          "number": 2,
          "text": "書かれていることを、作者と同じ気持ちになって読む。",
          "translation": "和作者带着同样的心情去读写着的内容。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到的是把作者当成活人倾听他们的声音，而不是去体会和作者一样的心情。"
        },
        {
          "number": 3,
          "text": "書かれていることを、前に聞いた話と比べながら読む。",
          "translation": "边和以前听到的话比较边去读写着的内容。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有提到要和以前听到的话进行比较。"
        },
        {
          "number": 4,
          "text": "書かれていることを、話を聞いているような気持ちで読む。",
          "translation": "带着像在听人讲话一样的心情去读写着的内容。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了把读书视为“倾听别人的话语（人の話を聞くこと）”的核心观点。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-7-02",
      "questionNumber": 59,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-59"
      ],
      "evidenceTexts": [
        "逆に、聞く構えがないと、相手から成長がない人と見られてしまいます。言い換えれば、『聞く気がない",
        "この人は見込みがない"
      ],
      "options": [
        {
          "number": 1,
          "text": "人の話を聞いてもすぐに忘れてしまう人だと思われる。",
          "translation": "会被认为是听了别人的话也马上忘记的人。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章未提及“听后马上忘记”。"
        },
        {
          "number": 2,
          "text": "人の話を聞いて学ぼうという気がない人だと思われる。",
          "translation": "会被认为是缺乏听取别人话语并学习意愿的人。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文中被理解为“没有倾听的意愿（聞く気がない）”和缺乏成长心态的论述。"
        },
        {
          "number": 3,
          "text": "会社や学校での評価を気にしない人だと思われる。",
          "translation": "会被认为是不在意公司或学校评价的人。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章是说这类人会在公司和学校得到不好的评价，而不是说他们自己不在意评价。"
        },
        {
          "number": 4,
          "text": "聞いたことを間違って理解する人だと思われる。",
          "translation": "会被认为是将听到的内容理解错误的人。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章未提及“将听到的内容理解错误”。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-7-03",
      "questionNumber": 60,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "そして、本や人の話の中から具体的なアドバイスを得て、自分の生活の中にある種の学びの習慣をつくっていく。だからこそ、読書を学びの基本にするとよいのです。"
      ],
      "options": [
        {
          "number": 1,
          "text": "読書によって、学びの習慣を身につけていくことが大切だ。",
          "translation": "通过读书来养成学习的习惯是很重要的。",
          "correct": true,
          "error": null,
          "explanation": "完美对应了原文“在生活中养成某种学习的习惯。正因为如此，把读书作为学习的基础是很好的”。"
        },
        {
          "number": 2,
          "text": "優れた人の本を読むことで、その人に近づくことができる。",
          "translation": "通过阅读优秀之人的书，能够接近那个人。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文提到的是对优秀之人抱有憧憬，借由他们看清自己的目标，并没有说为了接近那个人。"
        },
        {
          "number": 3,
          "text": "新たな目標が見つかったら、その目標に合った本を読むのがいい。",
          "translation": "如果找到了新的目标，最好阅读符合该目标的书。",
          "correct": false,
          "error": "relation-error",
          "explanation": "因果关系倒置，原文是说通过倾听优秀的人（读书）来发现新目标，而不是有了目标再去找书读。"
        },
        {
          "number": 4,
          "text": "歩むべき方向性を決めるには、具体的なアドバイスの本を読むのがいい。",
          "translation": "为了决定应当迈进的方向，最好阅读提供具体建议的书。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文是说获得具体建议来养成学习习惯，并不是说为了决定方向而去专门读提供建议的书。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-7-04",
      "questionNumber": 61,
      "type": "fact-comparison",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "和紙は、主に楮、三椏、雁皮という木の、皮の部分を使用する。……和紙には丈夫で強く、さらに劣化しにくいので長期間保存ができるという利点もある。",
        "和紙には丈夫で強く、さらに劣化（注2）しにくいので長期間保存ができるという利点もある。"
      ],
      "options": [
        {
          "number": 1,
          "text": "木の皮を取り除いた幹の部分を原料とし、丈夫で破れにくい。",
          "translation": "以去皮的树干部分为原料，结实不易破损。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“去皮的树干部分”是洋纸的原料，而非和纸的。"
        },
        {
          "number": 2,
          "text": "木の皮を取り除いた幹の部分を原料とし、価格が高い。",
          "translation": "以去皮的树干部分为原料，价格昂贵。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "“去皮的树干部分”是洋纸的原料。"
        },
        {
          "number": 3,
          "text": "木の皮の部分を原料とし、印刷に適している。",
          "translation": "以树皮部分为原料，适合印刷。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章明确说和纸表面不光滑，“不适合印刷（印刷には向かない）”。"
        },
        {
          "number": 4,
          "text": "木の皮の部分を原料とし、長く保存できる。",
          "translation": "以树皮部分为原料，能长期保存。",
          "correct": true,
          "error": null,
          "explanation": "准确抓住了和纸“以树皮为原料”和“能长期保存”的两大特征。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-7-05",
      "questionNumber": 62,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "手作業で製造されていた和紙に対し、洋紙は早くから製造過程が機械化され、大量生産による安価で安定した供給が可能であったためである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "和紙は大量に生産することができなかったから",
          "translation": "因为和纸无法大量生产",
          "correct": true,
          "error": null,
          "explanation": "对应原文中洋纸机械化后能“大量生产（大量生産による）”，而和纸当时还是“手工制造（手作業で製造されていた）”，即和纸无法大量生产。"
        },
        {
          "number": 2,
          "text": "和紙は日本国内であまり利用されていなかったから",
          "translation": "因为和纸在日本国内不太被利用",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说和纸从六世纪起就在日本国内被使用，并非不被利用。"
        },
        {
          "number": 3,
          "text": "和紙より洋紙のほうが品質がよかったから",
          "translation": "因为比起和纸，洋纸的质量更好",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章提到了和纸有结实能长期保存的优点，并未说洋纸质量更好。"
        },
        {
          "number": 4,
          "text": "和紙より洋紙のほうが珍しくて人気があったから",
          "translation": "因为比起和纸，洋纸更罕见且受欢迎",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章未提及洋纸更“罕见（珍しくて）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-7-06",
      "questionNumber": 63,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "現在日本国内で広く用いられているのは洋紙だが、和紙は和紙でなければならない分野で活用されている。……（洋紙にはない利点の説明）……今後も残していきたい伝統文化である。",
        "今後も残していきたい伝統文化である。"
      ],
      "options": [
        {
          "number": 1,
          "text": "和紙の特徴を生かせるような、新しい利用方法を考えていきたい。",
          "translation": "想要去思考能发挥和纸特征的新使用方法。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章列举了和纸现在的利用方法，并没有说要去“思考新的使用方法（新しい利用方法を考えていきたい）”。"
        },
        {
          "number": 2,
          "text": "海外でも、和紙の価値が認められるようにしていきたい。",
          "translation": "想要让和纸的价值在海外也能得到认可。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到和纸在海外“已经得到了认可（認められている）”，而不是作者的期待或努力方向。"
        },
        {
          "number": 3,
          "text": "洋紙のよさを取り入れて、和紙をよりよいものにしたい。",
          "translation": "想要引进洋纸的优点，把和纸做得更好。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章没有提到要“引进洋纸的优点（洋紙のよさを取り入れて）”来改良和纸。"
        },
        {
          "number": 4,
          "text": "洋紙にはない和紙のよさがあるから、守っていきたい。",
          "translation": "因为和纸有洋纸所没有的优点，所以想要保护传承下去。",
          "correct": true,
          "error": null,
          "explanation": "完美对应了最后一段中作者强调和纸具有洋纸不可替代的优点，并呼吁“传承/保留下去（残していきたい）”的态度。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-7-07",
      "questionNumber": 64,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "だから、そういうものが自分にやってこないと、相手が悪い、周囲が悪い、社会が悪い、国が悪い、経済が悪い、運が悪い、時代が悪いということになってしまう。①そのような分析もけっこうだが……",
        "①そのような分析もけっこうだが、たとえそれらしい原因を見つけても、解決の方法を見出す（注1）ことはできないだろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分の期待どおりにならないのは自分以外が原因だと考える。",
          "translation": "认为事情没如自己期待的那样发展，原因在于自己之外的因素。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了前文所述的将不顺利的原因归咎于外部因素（自己以外的东西）的态度。"
        },
        {
          "number": 2,
          "text": "自分の努力では周囲を変えることはできないと考える。",
          "translation": "认为靠自己的努力是无法改变周围环境的。",
          "correct": false,
          "error": "opposite",
          "explanation": "文章提到无法靠努力改变周围，但这并不是“这种分析”所指代的内容，而是作者自己对这种分析局限性的评判。"
        },
        {
          "number": 3,
          "text": "自分が持っていないものは人から与えてもらえると考える。",
          "translation": "认为自己没有的东西别人能给予自己。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这是年轻人期待的前提（认为别人会给予自己），而不是“这种分析（归咎于他人）”的内容。"
        },
        {
          "number": 4,
          "text": "周囲や社会で悪いことが起こっても自分とは関係ないと考える。",
          "translation": "认为周围或社会发生不好的事情也与自己无关。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并没有提到他们认为周围发生坏事与自己无关。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-7-08",
      "questionNumber": 65,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "必死になってネットを検索するのも、また、友達の話や、たまたま耳にしたことを簡単に信じてしまうのも、『知る",
        "②「検索」する。"
      ],
      "options": [
        {
          "number": 1,
          "text": "自分で考えた解決策が正しいか確認できると思っているから。",
          "translation": "因为认为能确认自己想出的对策是否正确。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到搜索是为了确认自己想出的对策是否正确。"
        },
        {
          "number": 2,
          "text": "さまざまな情報を使って解決策を生み出すことができるから。",
          "translation": "因为能够使用各种各样的信息创造出解决对策。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说搜索只能找到过去的信息，解决办法是需要自己“创造”出来的。"
        },
        {
          "number": 3,
          "text": "情報を知れば、問題が解決できると思っているから。",
          "translation": "因为认为只要知道了信息，问题就能解决。",
          "correct": true,
          "error": null,
          "explanation": "精准对应了原文“因为相信只要‘知道’就能解决问题”的解释。"
        },
        {
          "number": 4,
          "text": "友達の話より信頼できる情報が得られるから。",
          "translation": "因为能得到比朋友的话更值得信赖的信息。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章中将“搜索网络”和“轻易相信朋友的话”并列作为试图去“知道”的手段，并没有比较两者哪个更可靠。"
        }
      ]
    },
    {
      "id": "n2-middle-2019-7-09",
      "questionNumber": 66,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-66"
      ],
      "evidenceTexts": [
        "しかし、自分の問題を解決する方法は、自分で考え、模索し、新たに編み出さなければならないものなのである。自分の生き方に関する問題は、どこかに解決策が書かれているはずがない。",
        "しかし、自分の問題を解決する方法は、自分で考え、模索し（注4）、新たに編み出さなければならない（注5）ものなのである。"
      ],
      "options": [
        {
          "number": 1,
          "text": "検索した情報に頼らずに人とは違う生き方を見つけるべきだ。",
          "translation": "不应依赖搜索到的信息，而应找到与他人不同的生存方式。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章鼓励自己寻找生存方式，但没有说一定要去寻找“和别人不一样的生存方式（人とは違う生き方）”。"
        },
        {
          "number": 2,
          "text": "周りの人の言葉や情報を生かして自分の問題を解決すべきだ。",
          "translation": "应灵活运用周围人的话语和信息来解决自己的问题。",
          "correct": false,
          "error": "opposite",
          "explanation": "这与作者观点相反。作者认为他人的话语未必完全适用，单纯依赖信息是无法解决根本问题的。"
        },
        {
          "number": 3,
          "text": "自分の問題を解決する方法は自分で考え出すべきだ。",
          "translation": "解决自己问题的方法应当由自己想出来。",
          "correct": true,
          "error": null,
          "explanation": "准确传达了最后两段的核心观点，即自己的问题要靠自己去思考并想出解决办法。"
        },
        {
          "number": 4,
          "text": "自分に必要な情報を探して問題を解決すべきだ。",
          "translation": "应当寻找对自己必要的信息来解决问题。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "这也是作者反对的做法。作者认为只靠寻找信息是无法解决人生问题的。"
        }
      ]
    }
  ],
  "2020.12": [
    {
      "id": "n2-middle-2020-12-01",
      "questionNumber": 57,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-57"
      ],
      "evidenceTexts": [
        "しかし、ブロッコリーやほうれん草でも摂れる栄養素であることから、『嫌いなピーマンを無理に食べさせる必要はない",
        "しかし、ブロッコリーやほうれん草でも摂れる栄養素であることから、「嫌いなピーマンを無理に食べさせる必要はない」と考える人もいる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "幼児期の子供の食事は栄養にこだわる必要はないから。",
          "translation": "幼儿期孩子的饮食没必要讲究营养。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章说营养学上没有必要执着于青椒，并没有说幼儿期的饮食不需要讲究营养。"
        },
        {
          "number": 2,
          "text": "無理に食べさせると将来食事に関心を持てなくなるから。",
          "translation": "强迫吃的话将来会对饮食失去兴趣。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章并未提到强迫吃会导致将来对饮食失去兴趣。"
        },
        {
          "number": 3,
          "text": "人にはそれぞれ好き嫌いがあるのは当たり前だから。",
          "translation": "每个人都有好恶是理所当然的。",
          "correct": false,
          "error": "relation-error",
          "explanation": "每个人都有好恶是常理，但这并非文章中提出不勉强吃青椒的理由。"
        },
        {
          "number": 4,
          "text": "他の野菜でも同じ栄養を摂ることができるから。",
          "translation": "通过其他蔬菜也能摄取相同的营养。",
          "correct": true,
          "error": null,
          "explanation": "准确对应了原文“西兰花和菠菜也能摄取该营养素”的意思。"
        }
      ]
    },
    {
      "id": "n2-middle-2020-12-02",
      "questionNumber": 58,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-58"
      ],
      "evidenceTexts": [
        "それでも、幼児期はいろいろな生活環境に心や体を適応させる意味で重要な時期であることから、多様な食材を食べる経験を積む必要があると考える。",
        "それでも、幼児期はいろいろな生活環境に心や体を適応させる（注2）意味で重要な時期であることから、多様な食材を食べる経験を積む必要があると考える。"
      ],
      "options": [
        {
          "number": 1,
          "text": "いろいろなものを食べる経験をさせる。",
          "translation": "让他们积累吃各种各样东西的经验。",
          "correct": true,
          "error": null,
          "explanation": "准确概括了原文“积累吃各种各样食材的经验”的观点。"
        },
        {
          "number": 2,
          "text": "栄養のあるものをたくさん食べさせる。",
          "translation": "让他们吃很多有营养的东西。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是吃的“多样性”，而不是“吃很多（たくさん）”营养食物。"
        },
        {
          "number": 3,
          "text": "子供自身の好き嫌いに任せる。",
          "translation": "任由孩子自己的好恶来决定。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者认为不应完全任由孩子的好恶，而是要下功夫鼓励他们尝试吃各种食物。"
        },
        {
          "number": 4,
          "text": "食事のときに話しかける。",
          "translation": "吃饭的时候和他们搭话。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到了鼓励和表扬孩子，但并没有把“吃饭时搭话”作为核心主张。"
        }
      ]
    },
    {
      "id": "n2-middle-2020-12-03",
      "questionNumber": 59,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-59"
      ],
      "evidenceTexts": [
        "嫌いな食材を食べられたという達成感は、褒められることでさらに強められ、自信が生まれる。その自信がやる気に繋がり、物事に前向きに取り組めるようになるであろう。",
        "嫌いな食材を食べられたという達成感は、褒められることでさらに強められ、自信が生まれる。その自信がやる気に繋がり、物事に前向きに（注5）取り組めるようになるであろう。"
      ],
      "options": [
        {
          "number": 1,
          "text": "物事に積極的になり、周囲にいる人たちに認められるようになる。",
          "translation": "变得对事物积极，能得到周围人的认可。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章提到能变得积极应对事物，但并没有提到“得到周围人的认可（周囲にいる人たちに認められる）”。"
        },
        {
          "number": 2,
          "text": "苦手意識がなくなり、気が合わないと感じる人もいなくなる。",
          "translation": "克服了为难情绪，会觉得没有合不来的人。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章提到社会中也会有合不来的人，需要接纳和相处，并没有说“没有合不来的人（気が合わないと感じる人もいなくなる）”。"
        },
        {
          "number": 3,
          "text": "自信が生まれ、物事に積極的に取り組めるようになる。",
          "translation": "产生自信，变得能够积极地应对事物。",
          "correct": true,
          "error": null,
          "explanation": "完美对应了“产生自信（自信が生まれる）”和“积极应对事物（物事に前向きに取り組めるようになる）”。"
        },
        {
          "number": 4,
          "text": "自信を持てるようになり、どんなことでも好きになる。",
          "translation": "变得有自信，无论什么事情都能喜欢上。",
          "correct": false,
          "error": "relation-error",
          "explanation": "文章说的是接纳他人个性建立良好人际关系，并没有夸张到“无论什么事情都能喜欢上（どんなことでも好きになる）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2020-12-04",
      "questionNumber": 60,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-60"
      ],
      "evidenceTexts": [
        "逆に何もストレスを感じないでのんびりしている状態を想像してほしい。そのような状態では仕事や勉強が先に進まなくなる。",
        "そのような状態では仕事や勉強が先に進まなくなる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "ストレスを感じすぎている状態",
          "translation": "感受到了太多压力的状态",
          "correct": false,
          "error": "opposite",
          "explanation": "与原文“毫无压力（何もストレスを感じない）”相反。"
        },
        {
          "number": 2,
          "text": "よいストレスしか感じていない状態",
          "translation": "只感受到好压力的状态",
          "correct": false,
          "error": "not-stated",
          "explanation": "原文并未提及只感受好的压力，而是什么压力都没有。"
        },
        {
          "number": 3,
          "text": "どんなストレスも感じていない状態",
          "translation": "什么压力都没感受到的状态",
          "correct": true,
          "error": null,
          "explanation": "准确指代了前文“毫无压力”的状态。"
        },
        {
          "number": 4,
          "text": "いろいろなストレスを感じている状態",
          "translation": "感受到各种压力的状态",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "与原文描述的“毫无压力”的状态不符。"
        }
      ]
    },
    {
      "id": "n2-middle-2020-12-05",
      "questionNumber": 61,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-61"
      ],
      "evidenceTexts": [
        "私たちは、ほどほどにストレスを感じるからこそ、いろいろなことができる。心配になるから準備をするし、緊張するから集中することができる。",
        "私たちは、ほどほどに（注2）ストレスを感じるからこそ、いろいろなことができる。心配になるから準備をするし、緊張するから集中することができる。"
      ],
      "options": [
        {
          "number": 1,
          "text": "のんびりすることのよさがわかる。",
          "translation": "能体会到放松的好处。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章提到放松过度会导致无心工作、事后后悔，并未说压力的好处是体会放松的好处。"
        },
        {
          "number": 2,
          "text": "するべきことをする気になる。",
          "translation": "会让人产生去做该做的事情的干劲。",
          "correct": true,
          "error": null,
          "explanation": "对应原文中因为压力而“去准备”、“能集中注意力”，即让人产生了做事的干劲。"
        },
        {
          "number": 3,
          "text": "緊張感を楽しめるようになる。",
          "translation": "变得能享受紧张感。",
          "correct": false,
          "error": "not-stated",
          "explanation": "文章说因为紧张所以能集中注意力，并未说让人去“享受”紧张感。"
        },
        {
          "number": 4,
          "text": "いろいろなことが気にならなくなる。",
          "translation": "变得对各种事情都不在意了。",
          "correct": false,
          "error": "opposite",
          "explanation": "这与原文意思相反，缺乏压力才会让人连想做点什么的精力都消失。"
        }
      ]
    },
    {
      "id": "n2-middle-2020-12-06",
      "questionNumber": 62,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-62"
      ],
      "evidenceTexts": [
        "これは、こころだけではない。体にとっても、運動や規則的な生活など、ほどほどのストレスは大切だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "よいストレスはこころと体にとって大切だ。",
          "translation": "好的压力对身心来说很重要。",
          "correct": true,
          "error": null,
          "explanation": "完美对应了原文中适度压力对心理（こころ）和身体（体）都很重要的论述。"
        },
        {
          "number": 2,
          "text": "よいストレスは緊張をなくすのに役立つ。",
          "translation": "好的压力有助于消除紧张。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "原文说压力让人紧张从而能集中，并没有说压力有助于消除紧张。"
        },
        {
          "number": 3,
          "text": "ストレスはできるだけ避けたほうがいい。",
          "translation": "最好尽量避免压力。",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "作者认为适度的压力是人生的调味料，非常重要，而非建议尽量避免。"
        },
        {
          "number": 4,
          "text": "ストレスは仕事や勉強には必ずあるものだ。",
          "translation": "压力在工作和学习中是往往伴随存在的。",
          "correct": false,
          "error": "not-stated",
          "explanation": "作者重点强调的是适度压力的重要性和积极作用，并未陈述压力在工作学习中往往伴随存在。"
        }
      ]
    },
    {
      "id": "n2-middle-2020-12-07",
      "questionNumber": 63,
      "type": "reference-meaning",
      "evidenceSelectors": [
        ".target-ks-63"
      ],
      "evidenceTexts": [
        "人の顔には個性が表れている。よく『写真家はその人の内面に迫らなくてはいけない",
        "①そこにあるもの"
      ],
      "options": [
        {
          "number": 1,
          "text": "撮る人の個性",
          "translation": "拍摄者的个性",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章讨论的是被拍摄者的个性被记录下来，而不是拍摄者的个性。"
        },
        {
          "number": 2,
          "text": "撮る人の正直な気持ち",
          "translation": "拍摄者的真实心情",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "与拍摄者的心情无关。"
        },
        {
          "number": 3,
          "text": "撮られる人の個性",
          "translation": "被拍摄者的个性",
          "correct": true,
          "error": null,
          "explanation": "准确指代了被摄者的内在个性和为人。"
        },
        {
          "number": 4,
          "text": "撮られる人の外見",
          "translation": "被拍摄者的外表",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然外表被记录，但文章前句强调的是透过外表表现出的内在“个性”和后句的“为人”。"
        }
      ]
    },
    {
      "id": "n2-middle-2020-12-08",
      "questionNumber": 64,
      "type": "reason-logic",
      "evidenceSelectors": [
        ".target-ks-64"
      ],
      "evidenceTexts": [
        "②写真は二度撮られるという。シャッターを切るときと選ぶときの２度だ。",
        "②写真は二度撮られるという。シャッターを切る（注3）ときと選ぶときの２度だ。"
      ],
      "options": [
        {
          "number": 1,
          "text": "二度写真を撮れば、重要な一枚を選びやすくなるから",
          "translation": "拍两次照片的话，更容易选出重要的一张",
          "correct": false,
          "error": "opposite",
          "explanation": "这里并不是真的按下两次快门，而是把挑选过程比作第二次“拍摄”。"
        },
        {
          "number": 2,
          "text": "写真を撮る前に撮るものを選ぶことも重要だから",
          "translation": "拍照前挑选拍摄对象也很重要",
          "correct": false,
          "error": "object-scope-error",
          "explanation": "原文说的是拍完后的挑选（セレクト），而不是拍摄前挑选对象。"
        },
        {
          "number": 3,
          "text": "写真を選ぶことも写真を撮ることと同じくらい重要だから",
          "translation": "挑选照片和拍摄照片一样重要",
          "correct": true,
          "error": null,
          "explanation": "准确点明了把“挑选照片”视作与拍摄同等重要的创作过程。"
        },
        {
          "number": 4,
          "text": "写真家の気づいたことも気づいていないことも写っているから",
          "translation": "摄影师注意到的和没注意到的都会被拍进去",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "虽然这是照片的一个特性，但并不能直接回答“为什么说被拍了两次（即拍摄与挑选）”。"
        }
      ]
    },
    {
      "id": "n2-middle-2020-12-09",
      "questionNumber": 65,
      "type": "viewpoint-main",
      "evidenceSelectors": [
        ".target-ks-65"
      ],
      "evidenceTexts": [
        "そしていい写真家ならその発見を生かして、現場でもっとこういうことをやっておけばよかったというフィードバックを得て次の撮影に向かう。",
        "そしていい写真家ならその発見を生かして、現場でもっとこういうことをやっておけばよかったというフィードバック（注6）を得て次の撮影に向かう。そしてまた撮れた写真でまた新しいことに気づき、それを生かしていく。"
      ],
      "options": [
        {
          "number": 1,
          "text": "どう撮れば成功作になるか、事前に知ろうとする人",
          "translation": "事先想要了解怎么拍才会成为成功之作的人",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章最后一句明确指出摄影师“并非提前知晓一切的人（前もってすべてを知っている人ではない）”。"
        },
        {
          "number": 2,
          "text": "撮るたびに、撮られる人の新しい一面を発見できる人",
          "translation": "每次拍摄都能发现被摄者新的一面的人",
          "correct": false,
          "error": "concept-focus-error",
          "explanation": "文章强调的是摄影师能利用以往发现改进下一次拍摄，而不是单纯说每次都能发现新一面。"
        },
        {
          "number": 3,
          "text": "うまく撮れなくても、あきらめないで写真を撮り続ける人",
          "translation": "即使拍不好也不放弃，继续拍照的人",
          "correct": false,
          "error": "not-stated",
          "explanation": "文中并没有提到“即使拍不好也不放弃”。"
        },
        {
          "number": 4,
          "text": "自分が撮った写真から得た発見を、次の撮影に役立てていける人",
          "translation": "能够把从自己拍的照片中获得的发现，应用到下次拍摄中的人",
          "correct": true,
          "error": null,
          "explanation": "完美概括了“利用发现获得反馈，并投入到下一次拍摄中”的含义。"
        }
      ]
    }
  ]
};
})();
