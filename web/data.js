/*
 * News-based reading lessons (Tech / AI / Business), grounded in real 2026 news.
 * English is rewritten for learners (paraphrased, not copied); each item links to
 * a real source. app.js rotates one story per day and pairs it with a daily word.
 * 以真實新聞為題材的每日短文；英文為學習者程度改寫，並附原始新聞連結。
 */
const NEWS = [
  {
    category: "Business",
    source_title: "CNBC — Alphabet Q2 2026 earnings",
    source_url: "https://www.cnbc.com/2026/07/22/google-earnings-q2-goog-live-updates.html",
    title: "Google Cloud Grows Fast", title_zh: "Google 雲端高速成長",
    phrase: { en: "year over year", zh: "與去年同期相比", usage: "Sales rose 20% year over year." },
    en: "Google Cloud reported revenue of about $24.8 billion in the second quarter of 2026, up roughly 82% from a year earlier. Strong demand for AI services made it one of the fastest-growing parts of the company. Cloud now makes up a larger share of Alphabet's total business than it did two years ago.",
    zh: "Google 雲端在 2026 年第二季營收約 248 億美元，較去年同期成長約 82%。市場對 AI 服務的強勁需求，使它成為公司成長最快的部門之一。雲端在 Alphabet 整體業務中的占比，也比兩年前更高了。",
    vocab: [["revenue", "營收"], ["quarter", "季度"], ["demand", "需求"], ["share", "占比"]],
    quiz: [
      { q: "How much did Google Cloud revenue grow year over year?", q_zh: "Google 雲端營收年增約多少？",
        options: ["約 82%", "約 8%", "約 24%", "下滑"], answer: 0, explain: "報導指出年增約 82%。" },
      { q: "What drove the strong growth?", q_zh: "成長主要來自什麼？",
        options: ["對 AI 服務的需求", "廣告下滑", "裁員", "利率"], answer: 0, explain: "文中說是 AI 服務的強勁需求。" }
    ]
  },
  {
    category: "Business",
    source_title: "Fortune — Big Tech earnings & AI spending",
    source_url: "https://fortune.com/2026/07/26/big-tech-earnings-meta-microsoft-apple-amazon-market-revolt-ai-spending/",
    title: "The Cost of the AI Race", title_zh: "AI 競賽的代價",
    phrase: { en: "double down on", zh: "加碼投入、更加專注於", usage: "The firm doubled down on AI research." },
    en: "The largest technology companies are spending huge amounts to build AI. After investing hundreds of billions of dollars from 2023 to 2025, they are on track to spend even more in 2026 alone. Some investors worry that this heavy spending, called capital expenditure, may hurt profits before it pays off.",
    zh: "最大的幾家科技公司正投入巨資打造 AI。在 2023 到 2025 年砸下數千億美元後，光是 2026 年就可能花得更多。有些投資人擔心，這種被稱為「資本支出」的龐大投資，可能在回收之前先壓縮了獲利。",
    vocab: [["invest", "投資"], ["capital expenditure", "資本支出"], ["profit", "利潤"], ["pay off", "獲得回報"]],
    quiz: [
      { q: "What is “capital expenditure”?", q_zh: "「capital expenditure」是什麼？",
        options: ["資本支出", "薪水", "股利", "稅"], answer: 0, explain: "capital expenditure = 資本支出（capex）。" },
      { q: "Why are some investors worried?", q_zh: "投資人為何擔心？",
        options: ["高支出可能先壓縮獲利", "公司太小", "沒有需求", "AI 被禁止"], answer: 0, explain: "擔心龐大支出在回收前壓縮利潤。" }
    ]
  },
  {
    category: "AI",
    source_title: "Crescendo AI — Latest AI news",
    source_url: "https://www.crescendo.ai/news/latest-ai-news-and-updates",
    title: "From Answering to Doing", title_zh: "從回答問題到完成工作",
    phrase: { en: "shift from A to B", zh: "從 A 轉向 B", usage: "The market shifted from desktop to mobile." },
    en: "In 2026, AI is moving from simply answering questions to actually completing tasks. New “agent” systems can be trusted with narrow, well-defined jobs, such as booking a meeting or filing a report. Businesses are testing these agents carefully, giving them clear limits so they stay reliable.",
    zh: "2026 年，AI 正從單純回答問題，走向真正完成任務。新的「代理（agent）」系統可以被託付範圍明確的工作，例如安排會議或提交報告。企業正謹慎測試這些代理，並給予清楚的限制，好讓它們維持可靠。",
    vocab: [["agent", "AI 代理程式"], ["task", "任務"], ["reliable", "可靠的"], ["limit", "限制"]],
    quiz: [
      { q: "What can AI “agents” do?", q_zh: "AI「代理」能做什麼？",
        options: ["完成明確定義的任務", "只會聊天氣", "製造晶片", "取代電力"], answer: 0, explain: "代理能被託付範圍明確的工作。" },
      { q: "How do businesses keep agents reliable?", q_zh: "企業如何讓代理維持可靠？",
        options: ["給予清楚的限制", "完全放手", "關掉網路", "不測試"], answer: 0, explain: "文中說給予清楚限制。" }
    ]
  },
  {
    category: "AI",
    source_title: "MarketingProfs — AI Update",
    source_url: "https://www.marketingprofs.com/opinions/2026/55247/ai-update-july-10-2026-ai-news-and-views-from-the-past-week",
    title: "Bigger Context, Deeper Thinking", title_zh: "更大的上下文，更深的思考",
    phrase: { en: "general availability", zh: "正式全面開放使用", usage: "The tool reached general availability in July." },
    en: "Several new AI models were released in July 2026. One reached general availability with a very large context window, meaning it can read and remember far more text at once. It also offers a “deep think” mode that spends more time reasoning through hard problems before giving an answer.",
    zh: "2026 年 7 月有多款新 AI 模型發表。其中一款正式全面開放，擁有非常大的「上下文視窗」，代表它能一次讀取並記住更多文字。它還提供「深度思考」模式，在回答難題前，會花更多時間推理。",
    vocab: [["release", "發表"], ["context window", "上下文視窗"], ["reason", "推理"], ["mode", "模式"]],
    quiz: [
      { q: "A large “context window” lets a model…", q_zh: "大的「上下文視窗」讓模型能？",
        options: ["一次記住更多文字", "跑更快", "更便宜", "上網"], answer: 0, explain: "context window 越大，一次能處理的文字越多。" },
      { q: "What does “deep think” mode do?", q_zh: "「深度思考」模式做什麼？",
        options: ["花更多時間推理", "隨機回答", "關機", "翻譯"], answer: 0, explain: "在回答前花更多時間推理。" }
    ]
  },
  {
    category: "Tech",
    source_title: "Tech-Insider — Cloud & chips 2026",
    source_url: "https://tech-insider.org/google-cloud-82-percent-growth-aws-earnings-2026/",
    title: "Custom Chips for AI", title_zh: "為 AI 打造的自研晶片",
    phrase: { en: "in-house", zh: "自家研發的、內部的", usage: "They built the tool in-house." },
    en: "To run AI cheaply and quickly, big cloud providers are designing their own chips in-house instead of buying them all from outside. These custom processors are made for specific AI tasks, which can lower cost and improve speed. Controlling the hardware also reduces reliance on a single supplier.",
    zh: "為了又便宜又快地運行 AI，大型雲端業者正自行設計晶片，而不再全部向外採購。這些客製化處理器專為特定 AI 任務打造，能降低成本、提升速度。掌握硬體也能減少對單一供應商的依賴。",
    vocab: [["chip", "晶片"], ["processor", "處理器"], ["supplier", "供應商"], ["reliance", "依賴"]],
    quiz: [
      { q: "Why design chips “in-house”?", q_zh: "為何要「自家」設計晶片？",
        options: ["降低成本並減少對供應商的依賴", "為了好看", "因為便宜的手機", "政府要求"], answer: 0, explain: "可降成本、提速並減少對單一供應商依賴。" },
      { q: "“In-house” means…", q_zh: "「in-house」意思是？",
        options: ["自家研發的", "在戶外", "免費的", "二手的"], answer: 0, explain: "in-house = 內部、自家完成。" }
    ]
  },
  {
    category: "Business",
    source_title: "CNBC — Meta sells AI compute",
    source_url: "https://www.cnbc.com/2026/07/01/meta-stock-cloud-ai-compute.html",
    title: "Renting Out Spare Power", title_zh: "把多餘的算力租出去",
    phrase: { en: "excess capacity", zh: "過剩的產能／容量", usage: "They sold their excess capacity to other firms." },
    en: "One large tech company decided to rent out its spare AI computing power to other businesses. After building more capacity than it needed, selling the excess turns an unused resource into a new revenue stream. Investors welcomed the move, and the company's stock rose.",
    zh: "一家大型科技公司決定把多餘的 AI 運算算力出租給其他企業。在建置了超出自身所需的容量後，把過剩的部分賣出，等於把閒置資源變成新的收入來源。投資人樂見此舉，公司股價因此上漲。",
    vocab: [["capacity", "容量"], ["excess", "過剩"], ["revenue stream", "收入來源"], ["stock", "股價"]],
    quiz: [
      { q: "What did the company do with spare compute?", q_zh: "公司如何處理多餘的算力？",
        options: ["出租給其他企業", "全部關閉", "捐給學校", "刪除"], answer: 0, explain: "把過剩算力出租，變成收入來源。" },
      { q: "“Excess capacity” means…", q_zh: "「excess capacity」意思是？",
        options: ["過剩的容量", "不夠用", "壞掉的機器", "免費電力"], answer: 0, explain: "excess capacity = 超出需求的產能/容量。" }
    ]
  },
  {
    category: "Tech",
    source_title: "MarketingProfs — AI Update (EU rules)",
    source_url: "https://www.marketingprofs.com/opinions/2026/55247/ai-update-july-10-2026-ai-news-and-views-from-the-past-week",
    title: "Cars That Watch for Tired Drivers", title_zh: "會偵測疲勞駕駛的汽車",
    phrase: { en: "come into effect", zh: "（法規）開始生效", usage: "The new rule came into effect in July." },
    en: "Since July 2026, all newly registered cars in the European Union must include a system that detects driver distraction. Using sensors and software, the car can tell when a driver is not paying attention and give a warning. The goal is to make roads safer as technology becomes part of everyday driving.",
    zh: "自 2026 年 7 月起，歐盟所有新登記的汽車都必須配備偵測「駕駛分心」的系統。透過感測器與軟體，車輛能判斷駕駛是否分神並發出警示。目的是在科技融入日常駕駛的同時，讓道路更安全。",
    vocab: [["register", "登記"], ["detect", "偵測"], ["distraction", "分心"], ["warning", "警示"]],
    quiz: [
      { q: "What must new EU cars now include?", q_zh: "歐盟新車現在必須配備什麼？",
        options: ["駕駛分心偵測系統", "免費 Wi-Fi", "太陽能板", "AI 司機"], answer: 0, explain: "須配備駕駛分心偵測系統。" },
      { q: "“Come into effect” means…", q_zh: "「come into effect」意思是？",
        options: ["開始生效", "被取消", "延後", "失效"], answer: 0, explain: "come into effect = 開始生效。" }
    ]
  },
  {
    category: "Business",
    source_title: "MarketingProfs — Korea AI investment",
    source_url: "https://www.marketingprofs.com/opinions/2026/55247/ai-update-july-10-2026-ai-news-and-views-from-the-past-week",
    title: "A Nation Bets on Chips", title_zh: "舉國押注晶片",
    phrase: { en: "invest in", zh: "投資於", usage: "The country invests heavily in education." },
    en: "South Korea announced a large, ten-year plan to invest in semiconductors, AI infrastructure, and robotics. Major companies are expected to commit huge sums to build new chip factories. Governments and firms increasingly see advanced chips as key to future economic growth.",
    zh: "南韓宣布一項為期十年的龐大計畫，投資於半導體、AI 基礎設施與機器人。大型企業預計將投入巨額資金興建新晶圓廠。各國政府與企業愈來愈把先進晶片視為未來經濟成長的關鍵。",
    vocab: [["announce", "宣布"], ["semiconductor", "半導體"], ["infrastructure", "基礎設施"], ["commit", "投入承諾"]],
    quiz: [
      { q: "What is South Korea investing in?", q_zh: "南韓投資於什麼？",
        options: ["半導體、AI、機器人", "只有農業", "電影", "旅遊"], answer: 0, explain: "半導體、AI 基礎設施與機器人。" },
      { q: "Advanced chips are seen as key to…", q_zh: "先進晶片被視為什麼的關鍵？",
        options: ["未來經濟成長", "便宜的食物", "更短工時", "太空旅行"], answer: 0, explain: "被視為未來經濟成長的關鍵。" }
    ]
  },
  {
    category: "AI",
    source_title: "Crescendo AI — AI safety index",
    source_url: "https://www.crescendo.ai/news/latest-ai-news-and-updates",
    title: "Grading AI Safety", title_zh: "為 AI 安全打分數",
    phrase: { en: "fall short of", zh: "未達到、不及", usage: "The results fell short of expectations." },
    en: "A new safety report gave grades to leading AI developers. It warned that some companies had weakened earlier promises to slow down if their systems became too risky. Even the top-rated company received only a modest grade, showing that safety practices still fall short of what many experts want.",
    zh: "一份新的安全報告為領先的 AI 開發者評分。報告警告，有些公司削弱了先前的承諾——原本答應若系統風險過高就會放慢腳步。即使評分最高的公司也只拿到普通的分數，顯示安全做法仍未達到許多專家期望的標準。",
    vocab: [["grade", "評分"], ["weaken", "削弱"], ["risky", "有風險的"], ["expert", "專家"]],
    quiz: [
      { q: "What did the report warn about?", q_zh: "報告警告什麼？",
        options: ["有公司削弱了安全承諾", "AI 太慢", "晶片太貴", "沒有使用者"], answer: 0, explain: "警告部分公司削弱了放慢的承諾。" },
      { q: "“Fall short of” means…", q_zh: "「fall short of」意思是？",
        options: ["未達到", "超越", "剛好符合", "放棄"], answer: 0, explain: "fall short of = 未達到、不及。" }
    ]
  },
  {
    category: "Tech",
    source_title: "IG — Alphabet TPUs / neo-cloud",
    source_url: "https://www.ig.com/en-ch/news-and-trade-ideas/alphabet-q2-2026-earnings-preview-260716",
    title: "Selling AI Power to Others", title_zh: "把 AI 算力賣給別人",
    phrase: { en: "roll out", zh: "推出、逐步推行", usage: "The company will roll out the service next year." },
    en: "A major tech firm plans to rent its custom AI chips directly to other AI labs and companies. Instead of keeping all that computing power for itself, it will roll out a service that lets outside customers pay to use it. This could open a profitable new market built on its own hardware.",
    zh: "一家大型科技公司計畫把自研的 AI 晶片直接租給其他 AI 實驗室與企業。它不再把所有算力留給自己，而是推出一項服務，讓外部客戶付費使用。這可能開創一個以自家硬體為基礎、具獲利潛力的新市場。",
    vocab: [["rent", "出租"], ["custom", "客製化的"], ["customer", "客戶"], ["profitable", "有獲利的"]],
    quiz: [
      { q: "What will the firm rent to others?", q_zh: "公司要把什麼租給別人？",
        options: ["自研的 AI 晶片算力", "辦公室", "員工", "資料"], answer: 0, explain: "把自研 AI 晶片算力租給外部客戶。" },
      { q: "“Roll out” means…", q_zh: "「roll out」意思是？",
        options: ["推出", "收回", "隱藏", "退款"], answer: 0, explain: "roll out = 推出、逐步推行。" }
    ]
  },
  {
    category: "AI",
    source_title: "BuildFastWithAI — AI news",
    source_url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-6-2026",
    title: "Open Models Gain Ground", title_zh: "開放模型逐漸崛起",
    phrase: { en: "gain ground", zh: "取得進展、逐漸普及", usage: "Electric cars are gaining ground worldwide." },
    en: "Alongside closed, paid systems, several powerful open models were released in 2026. Because their code is openly available, developers can study, change, and run them freely. Supporters say open models speed up innovation, while critics warn they are harder to control.",
    zh: "在封閉、付費的系統之外，2026 年也發表了多款強大的開放模型。由於程式碼公開可取得，開發者能自由研究、修改並運行它們。支持者認為開放模型能加速創新，批評者則警告它們較難被控管。",
    vocab: [["open model", "開放模型"], ["available", "可取得的"], ["developer", "開發者"], ["innovation", "創新"]],
    quiz: [
      { q: "Why can developers change open models?", q_zh: "開發者為何能修改開放模型？",
        options: ["程式碼公開可取得", "它們免費保固", "政府提供", "沒有理由"], answer: 0, explain: "因為程式碼開放、可自由取用。" },
      { q: "What do critics warn?", q_zh: "批評者警告什麼？",
        options: ["較難被控管", "太慢", "太貴", "沒有人用"], answer: 0, explain: "批評者擔心開放模型較難控管。" }
    ]
  },
  {
    category: "Business",
    source_title: "Yahoo Finance — Cloud demand 2026",
    source_url: "https://finance.yahoo.com/technology/articles/5-cloud-computing-stocks-buy-115400804.html",
    title: "Why Cloud Demand Keeps Rising", title_zh: "雲端需求為何持續攀升",
    phrase: { en: "in the long run", zh: "長遠來看", usage: "In the long run, saving pays off." },
    en: "Demand for cloud computing keeps rising as more companies move their software and data online. Running AI tools requires huge amounts of computing power, and renting it from the cloud is often cheaper than building your own data center. In the long run, analysts expect this trend to continue.",
    zh: "隨著越來越多公司把軟體與資料搬上網路，雲端運算的需求持續攀升。運行 AI 工具需要龐大的運算能力，而向雲端租用，往往比自建資料中心更便宜。分析師預期，長遠來看這股趨勢會延續下去。",
    vocab: [["demand", "需求"], ["computing power", "運算能力"], ["data center", "資料中心"], ["trend", "趨勢"]],
    quiz: [
      { q: "Why do companies rent cloud power?", q_zh: "公司為何向雲端租用算力？",
        options: ["常比自建資料中心便宜", "比較好看", "政府免費", "沒有其他選擇"], answer: 0, explain: "租用往往比自建資料中心便宜。" },
      { q: "“In the long run” means…", q_zh: "「in the long run」意思是？",
        options: ["長遠來看", "馬上", "從不", "昨天"], answer: 0, explain: "in the long run = 長遠來看。" }
    ]
  }
];
