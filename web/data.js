/*
 * Daily English learning content.
 * Each entry = one lesson. app.js picks "today's" lesson by the date,
 * so the content rotates automatically every day.
 * 每日英文學習內容；app.js 會依日期自動挑選當天的一課。
 */
const LESSONS = [
  {
    word: {
      term: "resilient", phonetic: "/rɪˈzɪliənt/", pos: "adj.",
      zh: "有韌性的；能快速恢復的",
      def: "able to recover quickly from difficulties",
      example: "She is resilient and bounced back after the setback.",
      example_zh: "她很有韌性，在挫折後迅速振作起來。"
    },
    phrase: {
      en: "bounce back", zh: "重新振作、恢復",
      usage: "After failing the exam, he bounced back and tried again."
    },
    reading: {
      title: "Falling and Rising", title_zh: "跌倒與站起",
      en: "Everyone fails sometimes. What matters is not the fall, but how quickly you stand up again. Resilient people treat mistakes as lessons, not endings.",
      zh: "每個人都會有失敗的時候。重要的不是跌倒，而是你能多快再站起來。有韌性的人把錯誤當成教訓，而不是終點。",
      vocab: [["setback", "挫折"], ["recover", "恢復"], ["lesson", "教訓"]]
    },
    quiz: [
      { q: "What does “resilient” mean?", q_zh: "「resilient」是什麼意思？",
        options: ["能快速恢復的", "懶惰的", "昂貴的", "安靜的"], answer: 0,
        explain: "resilient = 有韌性的、能快速恢復的。" },
      { q: "Choose the sentence that uses “bounce back” correctly.", q_zh: "哪一句正確使用「bounce back」？",
        options: ["He bounced back after the loss.", "He bounced back the door.", "He bounced back a coffee.", "He is a bounce back."], answer: 0,
        explain: "bounce back 指從困境中重新振作。" },
      { q: "According to the passage, what matters most?", q_zh: "根據短文，最重要的是什麼？",
        options: ["How fast you rise again", "How much you earn", "How tall you are", "Never failing"], answer: 0,
        explain: "文章重點是「能多快再站起來」。" }
    ]
  },
  {
    word: {
      term: "ambiguous", phonetic: "/æmˈbɪɡjuəs/", pos: "adj.",
      zh: "模稜兩可的；含糊不清的",
      def: "having more than one possible meaning",
      example: "His answer was ambiguous, so no one knew his real opinion.",
      example_zh: "他的回答模稜兩可，沒人知道他真正的想法。"
    },
    phrase: {
      en: "on the fence", zh: "猶豫不決、拿不定主意",
      usage: "I'm still on the fence about which job to take."
    },
    reading: {
      title: "Say What You Mean", title_zh: "把話說清楚",
      en: "Clear words save time. When a message is ambiguous, people guess — and often guess wrong. Good communicators choose simple, exact language.",
      zh: "清楚的用字能節省時間。當訊息模稜兩可時，人們只能猜測，而且常常猜錯。善於溝通的人會選擇簡單、精確的語言。",
      vocab: [["message", "訊息"], ["guess", "猜測"], ["exact", "精確的"]]
    },
    quiz: [
      { q: "“Ambiguous” is closest to…", q_zh: "「ambiguous」最接近？",
        options: ["含糊不清的", "美麗的", "危險的", "免費的"], answer: 0,
        explain: "ambiguous = 模稜兩可、含糊不清。" },
      { q: "“On the fence” means you are…", q_zh: "「on the fence」表示你？",
        options: ["猶豫不決", "非常生氣", "睡著了", "很有錢"], answer: 0,
        explain: "on the fence 指還沒下定決心。" },
      { q: "What do good communicators choose?", q_zh: "善於溝通的人會選擇？",
        options: ["Simple, exact language", "Long, difficult words", "Silence", "Ambiguous messages"], answer: 0,
        explain: "文章說要選簡單而精確的語言。" }
    ]
  },
  {
    word: {
      term: "diligent", phonetic: "/ˈdɪlɪdʒənt/", pos: "adj.",
      zh: "勤勉的；用功的",
      def: "showing careful and steady effort in work",
      example: "A diligent student reviews notes every day.",
      example_zh: "勤勉的學生每天複習筆記。"
    },
    phrase: {
      en: "keep at it", zh: "持續努力、堅持下去",
      usage: "Learning English is hard, but keep at it and you'll improve."
    },
    reading: {
      title: "Small Steps, Every Day", title_zh: "每天一小步",
      en: "Progress is rarely sudden. A diligent learner studies a little each day. Over months, those small steps add up to a big change.",
      zh: "進步很少是突然發生的。勤勉的學習者每天讀一點。幾個月後，這些小步累積成巨大的改變。",
      vocab: [["progress", "進步"], ["add up", "累積"], ["change", "改變"]]
    },
    quiz: [
      { q: "A “diligent” person is…", q_zh: "「diligent」的人是？",
        options: ["用功的", "遲到的", "害羞的", "幸運的"], answer: 0,
        explain: "diligent = 勤勉、用功。" },
      { q: "“Keep at it” encourages you to…", q_zh: "「keep at it」是在鼓勵你？",
        options: ["繼續努力", "放棄", "睡覺", "生氣"], answer: 0,
        explain: "keep at it = 堅持下去。" },
      { q: "How does the learner in the passage study?", q_zh: "短文中的學習者怎麼讀書？",
        options: ["A little each day", "Only before exams", "Never", "All night once"], answer: 0,
        explain: "文中強調每天讀一點、日積月累。" }
    ]
  },
  {
    word: {
      term: "inevitable", phonetic: "/ɪnˈevɪtəbl/", pos: "adj.",
      zh: "不可避免的；必然的",
      def: "certain to happen and impossible to avoid",
      example: "Change is inevitable, so it's better to prepare for it.",
      example_zh: "改變是不可避免的，所以最好先做好準備。"
    },
    phrase: {
      en: "sooner or later", zh: "遲早、早晚",
      usage: "Sooner or later, everyone makes a mistake."
    },
    reading: {
      title: "Embracing Change", title_zh: "擁抱改變",
      en: "Some things are inevitable: seasons change, and so do we. Fighting change wastes energy. Accepting it lets us focus on what we can control.",
      zh: "有些事是不可避免的：季節會變，我們也會變。抗拒改變只是浪費力氣。接受它，才能專注在我們能掌控的事情上。",
      vocab: [["season", "季節"], ["accept", "接受"], ["control", "掌控"]]
    },
    quiz: [
      { q: "“Inevitable” means…", q_zh: "「inevitable」意思是？",
        options: ["不可避免的", "可選的", "便宜的", "危險的"], answer: 0,
        explain: "inevitable = 必然、不可避免。" },
      { q: "“Sooner or later” means…", q_zh: "「sooner or later」意思是？",
        options: ["遲早", "從不", "馬上", "也許不會"], answer: 0,
        explain: "sooner or later = 遲早、早晚。" },
      { q: "The passage suggests we should…", q_zh: "短文建議我們？",
        options: ["Accept change", "Fight everything", "Do nothing", "Stop seasons"], answer: 0,
        explain: "文章主張接受改變、專注可掌控之事。" }
    ]
  },
  {
    word: {
      term: "curiosity", phonetic: "/ˌkjʊəriˈɒsəti/", pos: "n.",
      zh: "好奇心",
      def: "a strong desire to learn or know something",
      example: "Her curiosity led her to read about many subjects.",
      example_zh: "她的好奇心讓她閱讀許多不同的主題。"
    },
    phrase: {
      en: "think outside the box", zh: "跳脫框架思考、有創意地思考",
      usage: "To solve this problem, we need to think outside the box."
    },
    reading: {
      title: "The Power of Questions", title_zh: "問題的力量",
      en: "Curiosity is the engine of learning. People who ask “why” and “what if” discover more than those who simply accept answers. Never stop asking questions.",
      zh: "好奇心是學習的引擎。會問「為什麼」和「如果……會怎樣」的人，比只接受答案的人發現得更多。永遠不要停止發問。",
      vocab: [["engine", "引擎"], ["discover", "發現"], ["accept", "接受"]]
    },
    quiz: [
      { q: "“Curiosity” is…", q_zh: "「curiosity」是？",
        options: ["好奇心", "恐懼", "疲倦", "財富"], answer: 0,
        explain: "curiosity = 好奇心。" },
      { q: "“Think outside the box” means to be…", q_zh: "「think outside the box」是指？",
        options: ["有創意的", "守規矩的", "安靜的", "疲累的"], answer: 0,
        explain: "跳脫框架、有創意地思考。" },
      { q: "What is called “the engine of learning”?", q_zh: "什麼被稱為「學習的引擎」？",
        options: ["Curiosity", "Money", "Sleep", "Fear"], answer: 0,
        explain: "文章說好奇心是學習的引擎。" }
    ]
  },
  {
    word: {
      term: "genuine", phonetic: "/ˈdʒenjuɪn/", pos: "adj.",
      zh: "真誠的；真正的",
      def: "real and sincere; not fake",
      example: "He gave a genuine smile when he saw his old friend.",
      example_zh: "看到老朋友時，他露出真誠的微笑。"
    },
    phrase: {
      en: "mean it", zh: "是認真的、真心的",
      usage: "When I say thank you, I really mean it."
    },
    reading: {
      title: "Being Real", title_zh: "做真實的自己",
      en: "People can feel the difference between a polite reply and a genuine one. Honesty builds trust. When you speak, mean what you say.",
      zh: "人們能感受到禮貌性回應與真誠回應之間的差別。誠實建立信任。當你說話時，要說到做到、真心以對。",
      vocab: [["polite", "禮貌的"], ["honesty", "誠實"], ["trust", "信任"]]
    },
    quiz: [
      { q: "“Genuine” means…", q_zh: "「genuine」意思是？",
        options: ["真誠的", "假的", "昂貴的", "困難的"], answer: 0,
        explain: "genuine = 真誠、真正的。" },
      { q: "“I mean it” shows you are…", q_zh: "「I mean it」表示你？",
        options: ["認真的", "開玩笑的", "生氣的", "困惑的"], answer: 0,
        explain: "mean it = 是認真、真心的。" },
      { q: "According to the passage, honesty builds…", q_zh: "根據短文，誠實能建立？",
        options: ["Trust", "Money", "Fear", "Noise"], answer: 0,
        explain: "文章說誠實建立信任。" }
    ]
  },
  {
    word: {
      term: "overcome", phonetic: "/ˌoʊvərˈkʌm/", pos: "v.",
      zh: "克服；戰勝",
      def: "to successfully deal with a problem or difficulty",
      example: "She worked hard to overcome her fear of speaking English.",
      example_zh: "她努力克服說英文的恐懼。"
    },
    phrase: {
      en: "get over", zh: "克服、走出（困境或情緒）",
      usage: "It took him a week to get over the disappointment."
    },
    reading: {
      title: "One Fear at a Time", title_zh: "一次克服一個恐懼",
      en: "To overcome a fear, face it in small steps. Speak one sentence, then two. Confidence grows each time you try.",
      zh: "要克服恐懼，就用小步驟面對它。先說一句，再說兩句。每一次嘗試，自信都會增長。",
      vocab: [["face", "面對"], ["confidence", "自信"], ["grow", "增長"]]
    },
    quiz: [
      { q: "“Overcome” means to…", q_zh: "「overcome」意思是？",
        options: ["克服", "忘記", "購買", "打開"], answer: 0,
        explain: "overcome = 克服、戰勝。" },
      { q: "“Get over” something means to…", q_zh: "「get over」某事是指？",
        options: ["走出來、克服", "喜歡上", "忘了買", "重複做"], answer: 0,
        explain: "get over = 克服、走出困境或情緒。" },
      { q: "How does confidence grow, per the passage?", q_zh: "根據短文，自信如何增長？",
        options: ["Each time you try", "By waiting", "By sleeping", "It never grows"], answer: 0,
        explain: "文章說每次嘗試自信都會增長。" }
    ]
  },
  {
    word: {
      term: "perspective", phonetic: "/pərˈspektɪv/", pos: "n.",
      zh: "觀點；看待事情的角度",
      def: "a particular way of thinking about something",
      example: "Traveling gave her a new perspective on life.",
      example_zh: "旅行讓她對人生有了新的觀點。"
    },
    phrase: {
      en: "put yourself in someone's shoes", zh: "換位思考、設身處地",
      usage: "Before you judge, put yourself in their shoes."
    },
    reading: {
      title: "Another Point of View", title_zh: "換個角度看",
      en: "The same event can look very different from another perspective. When you put yourself in someone's shoes, arguments often turn into understanding.",
      zh: "同一件事，從另一個角度看可能截然不同。當你設身處地為對方著想，爭執往往就會化為理解。",
      vocab: [["event", "事件"], ["argument", "爭執"], ["understanding", "理解"]]
    },
    quiz: [
      { q: "“Perspective” means…", q_zh: "「perspective」意思是？",
        options: ["觀點、角度", "禮物", "距離", "價格"], answer: 0,
        explain: "perspective = 觀點、看事情的角度。" },
      { q: "“Put yourself in someone's shoes” means…", q_zh: "「put yourself in someone's shoes」意思是？",
        options: ["設身處地", "穿別人的鞋", "逃跑", "換工作"], answer: 0,
        explain: "此片語意為換位思考、設身處地。" },
      { q: "What can arguments turn into?", q_zh: "爭執可以化為什麼？",
        options: ["Understanding", "Money", "Noise", "Shoes"], answer: 0,
        explain: "文章說設身處地能把爭執化為理解。" }
    ]
  },
  {
    word: {
      term: "abundant", phonetic: "/əˈbʌndənt/", pos: "adj.",
      zh: "豐富的；大量的",
      def: "existing in large quantities; more than enough",
      example: "The region has abundant natural resources.",
      example_zh: "這個地區有豐富的天然資源。"
    },
    phrase: {
      en: "more than enough", zh: "綽綽有餘、多得很",
      usage: "We have more than enough food for everyone."
    },
    reading: {
      title: "A World of Plenty", title_zh: "豐足的世界",
      en: "Opportunities to learn are abundant today. With a phone and curiosity, you have more than enough tools to grow. The only limit is effort.",
      zh: "如今學習的機會非常豐富。只要有一支手機和好奇心，你就有綽綽有餘的工具去成長。唯一的限制是努力。",
      vocab: [["opportunity", "機會"], ["tool", "工具"], ["limit", "限制"]]
    },
    quiz: [
      { q: "“Abundant” means…", q_zh: "「abundant」意思是？",
        options: ["豐富的", "稀少的", "破舊的", "危險的"], answer: 0,
        explain: "abundant = 豐富、大量。" },
      { q: "“More than enough” means…", q_zh: "「more than enough」意思是？",
        options: ["綽綽有餘", "不太夠", "剛剛好", "完全沒有"], answer: 0,
        explain: "more than enough = 綽綽有餘。" },
      { q: "According to the passage, the only limit is…", q_zh: "根據短文，唯一的限制是？",
        options: ["Effort", "Money", "Age", "Weather"], answer: 0,
        explain: "文章說唯一的限制是努力。" }
    ]
  },
  {
    word: {
      term: "efficient", phonetic: "/ɪˈfɪʃnt/", pos: "adj.",
      zh: "有效率的",
      def: "working well without wasting time or energy",
      example: "This app is an efficient way to review vocabulary.",
      example_zh: "這個 App 是複習單字的高效方法。"
    },
    phrase: {
      en: "save time", zh: "節省時間",
      usage: "Planning ahead can save you a lot of time."
    },
    reading: {
      title: "Work Smart", title_zh: "聰明地工作",
      en: "Being efficient is not about doing more; it is about doing the right things. A short, focused session often beats hours of distracted study.",
      zh: "有效率不是做得更多，而是做對的事。一段短而專注的學習，往往勝過好幾個小時分心的讀書。",
      vocab: [["focused", "專注的"], ["session", "時段"], ["distracted", "分心的"]]
    },
    quiz: [
      { q: "“Efficient” means…", q_zh: "「efficient」意思是？",
        options: ["有效率的", "昂貴的", "緩慢的", "吵鬧的"], answer: 0,
        explain: "efficient = 有效率的。" },
      { q: "“Save time” means to…", q_zh: "「save time」意思是？",
        options: ["節省時間", "浪費時間", "遲到", "加班"], answer: 0,
        explain: "save time = 節省時間。" },
      { q: "What beats hours of distracted study?", q_zh: "什麼勝過好幾個小時分心的讀書？",
        options: ["A short, focused session", "Sleeping", "Doing nothing", "More distractions"], answer: 0,
        explain: "文章說短而專注的學習更有效。" }
    ]
  },
  {
    word: {
      term: "gratitude", phonetic: "/ˈɡrætɪtuːd/", pos: "n.",
      zh: "感激；感恩",
      def: "the feeling of being thankful",
      example: "She expressed her gratitude with a handwritten note.",
      example_zh: "她用一張手寫卡片表達感激之情。"
    },
    phrase: {
      en: "count your blessings", zh: "知足感恩、細數自己擁有的",
      usage: "When things get hard, count your blessings."
    },
    reading: {
      title: "A Thankful Heart", title_zh: "感恩的心",
      en: "Gratitude changes how we see the world. When you count your blessings, small joys become visible again. Thankful people are often happier.",
      zh: "感恩會改變我們看世界的方式。當你細數自己擁有的，微小的快樂便會再次被看見。懂得感恩的人往往更快樂。",
      vocab: [["thankful", "感激的"], ["joy", "快樂"], ["visible", "看得見的"]]
    },
    quiz: [
      { q: "“Gratitude” means…", q_zh: "「gratitude」意思是？",
        options: ["感激", "憤怒", "無聊", "飢餓"], answer: 0,
        explain: "gratitude = 感激、感恩。" },
      { q: "“Count your blessings” means to…", q_zh: "「count your blessings」意思是？",
        options: ["知足感恩", "計算金錢", "抱怨", "數羊"], answer: 0,
        explain: "此片語指珍惜、感恩自己所擁有的。" },
      { q: "Thankful people are often…", q_zh: "懂得感恩的人往往？",
        options: ["Happier", "Angrier", "Richer", "Taller"], answer: 0,
        explain: "文章說懂得感恩的人往往更快樂。" }
    ]
  },
  {
    word: {
      term: "confident", phonetic: "/ˈkɒnfɪdənt/", pos: "adj.",
      zh: "有自信的",
      def: "sure of yourself and your abilities",
      example: "After lots of practice, she felt confident speaking English.",
      example_zh: "經過大量練習後，她說英文時感到很有自信。"
    },
    phrase: {
      en: "believe in yourself", zh: "相信自己",
      usage: "Believe in yourself, even when others doubt you."
    },
    reading: {
      title: "Trust Your Steps", title_zh: "相信自己的每一步",
      en: "Confidence comes from practice, not luck. Every sentence you speak makes the next one easier. Believe in yourself and keep going.",
      zh: "自信來自練習，而非運氣。你說出的每一句話，都讓下一句變得更容易。相信自己，繼續前進。",
      vocab: [["practice", "練習"], ["luck", "運氣"], ["easier", "更容易的"]]
    },
    quiz: [
      { q: "“Confident” means…", q_zh: "「confident」意思是？",
        options: ["有自信的", "疲累的", "害怕的", "生病的"], answer: 0,
        explain: "confident = 有自信的。" },
      { q: "“Believe in yourself” encourages…", q_zh: "「believe in yourself」是在鼓勵？",
        options: ["自信", "放棄", "說謊", "偷懶"], answer: 0,
        explain: "believe in yourself = 相信自己。" },
      { q: "Confidence comes from…", q_zh: "自信來自？",
        options: ["Practice", "Luck", "Money", "Sleep"], answer: 0,
        explain: "文章說自信來自練習而非運氣。" }
    ]
  }
];
