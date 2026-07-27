/* Daily English — app logic
 * - Picks today's word (from WORDBANK, ~1 year) and today's news story (from NEWS).
 * - Tap any word -> instant meaning (local glossary first, else online dictionary).
 * - Select any sentence/paragraph -> "Translate" button -> Chinese translation.
 * - "Your Own Reader": paste any article and learn with the same tools.
 * 依日期挑選當天單字與新聞短文；點字查意思、選句子翻譯、可貼上自己的文章。
 */
(function () {
  "use strict";

  var MS_PER_DAY = 24 * 60 * 60 * 1000;
  var offset = 0; // 0 = today

  // ---- date helpers --------------------------------------------------------
  function startOfDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function dayNumber(date) { return Math.floor(startOfDay(date).getTime() / MS_PER_DAY); }
  function mod(n, m) { return ((n % m) + m) % m; }
  function shownDate() { return new Date(startOfDay(new Date()).getTime() + offset * MS_PER_DAY); }

  var WEEK_ZH = ["日", "一", "二", "三", "四", "五", "六"];
  function formatDate(d) {
    return d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() +
      " (週" + WEEK_ZH[d.getDay()] + ") · " +
      d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
  }

  // ---- glossary (local, instant) ------------------------------------------
  var GLOSSARY = {};
  function addGloss(term, zh, pos) {
    var k = term.toLowerCase();
    if (!GLOSSARY[k]) GLOSSARY[k] = { zh: zh, pos: pos || "" };
  }
  function buildGlossary() {
    if (typeof WORDBANK !== "undefined") {
      WORDBANK.forEach(function (w) { addGloss(w.term, w.zh, w.pos); });
    }
    if (typeof NEWS !== "undefined") {
      NEWS.forEach(function (s) {
        (s.vocab || []).forEach(function (p) { addGloss(p[0], p[1]); });
        if (s.phrase) addGloss(s.phrase.en, s.phrase.zh);
      });
    }
  }

  // ---- DOM helpers ---------------------------------------------------------
  function $(id) { return document.getElementById(id); }
  function setText(id, t) { var el = $(id); if (el) el.textContent = t; }

  // ---- daily content -------------------------------------------------------
  function renderDay() {
    var date = shownDate();
    var n = dayNumber(date);
    var word = WORDBANK[mod(n, WORDBANK.length)];
    var story = NEWS[mod(n, NEWS.length)];

    setText("date-line", formatDate(date));
    setText("lesson-line", "今日單字 #" + (mod(n, WORDBANK.length) + 1) + " / " + WORDBANK.length +
      "　·　新聞 #" + (mod(n, NEWS.length) + 1) + " / " + NEWS.length);

    // word
    setText("word-term", word.term);
    setText("word-pos", word.pos);
    setText("word-zh", word.zh);
    setText("word-cat", catLabel(word.cat));
    $("word-cat").className = "badge " + catClass(word.cat);
    setText("word-example", makeExample(word));

    // story
    setText("reading-cat", catLabel(story.category));
    $("reading-cat").className = "badge " + catClass(story.category);
    setText("reading-title", story.title);
    setText("reading-title-zh", story.title_zh);
    setText("reading-en", story.en);
    setText("reading-zh", story.zh);
    var vlist = $("reading-vocab");
    vlist.innerHTML = "";
    story.vocab.forEach(function (p) {
      var li = document.createElement("li");
      li.innerHTML = "<b>" + esc(p[0]) + "</b> " + esc(p[1]);
      vlist.appendChild(li);
    });
    var src = $("reading-source");
    src.textContent = story.source_title;
    src.href = story.source_url;

    // phrase
    setText("phrase-en", story.phrase.en);
    setText("phrase-zh", story.phrase.zh);
    setText("phrase-usage", story.phrase.usage);

    // quiz = 1 auto word question + story quiz
    renderQuiz([wordQuestion(word)].concat(story.quiz));

    $("today-btn").hidden = offset === 0;
  }

  function catLabel(c) {
    return { AI: "AI", Tech: "科技 Tech", Business: "商務 Business", General: "通用 General" }[c] || c;
  }
  function catClass(c) { return "cat-" + String(c).toLowerCase(); }

  // simple, domain-appropriate example sentence for a bank word
  var TPL = {
    "n.": [
      "Many companies now depend on %s to stay competitive.",
      "Understanding %s is important in today's tech and business world.",
      "The report explained how %s affects the whole industry."
    ],
    "v.": [
      "Good teams work hard to %s their products every quarter.",
      "Leaders must %s carefully when the market changes.",
      "Startups often need to %s quickly to survive."
    ],
    "adj.": [
      "This is a highly %s approach in the modern market.",
      "Investors look for a %s and well-run business.",
      "The company took a %s step to grow faster."
    ],
    "adv.": ["The plan was carried out %s.", "They responded %s to the change."]
  };
  function makeExample(w) {
    var list = TPL[w.pos] || TPL["n."];
    var i = mod(hash(w.term), list.length);
    return list[i].replace("%s", w.term);
  }
  function hash(s) { var h = 0, i; for (i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; }

  function wordQuestion(w) {
    // build 3 distractors from other bank words with different meanings
    var opts = [w.zh];
    var guard = 0;
    while (opts.length < 4 && guard < 200) {
      guard++;
      var cand = WORDBANK[mod(hash(w.term) + guard * 7, WORDBANK.length)].zh;
      if (opts.indexOf(cand) === -1) opts.push(cand);
    }
    // shuffle deterministically
    var order = opts.map(function (o, i) { return [o, (hash(o) + i) & 0xffff]; })
                    .sort(function (a, b) { return a[1] - b[1]; })
                    .map(function (x) { return x[0]; });
    return {
      q: "What does “" + w.term + "” mean?",
      q_zh: "「" + w.term + "」是什麼意思？",
      options: order,
      answer: order.indexOf(w.zh),
      explain: w.term + " = " + w.zh + "（" + w.pos + "）"
    };
  }

  // ---- quiz ----------------------------------------------------------------
  var currentQuiz = [];
  function renderQuiz(quiz) {
    currentQuiz = quiz;
    var form = $("quiz-form");
    form.innerHTML = "";
    quiz.forEach(function (item, qi) {
      var fs = document.createElement("fieldset");
      fs.className = "quiz-q";
      var lg = document.createElement("legend");
      lg.innerHTML = (qi + 1) + ". " + esc(item.q) + '<span class="q-zh">' + esc(item.q_zh) + "</span>";
      fs.appendChild(lg);
      item.options.forEach(function (opt, oi) {
        var id = "q" + qi + "o" + oi;
        var lab = document.createElement("label");
        lab.className = "opt";
        lab.htmlFor = id;
        lab.innerHTML = '<input type="radio" name="q' + qi + '" id="' + id + '" value="' + oi + '"><span>' + esc(opt) + "</span>";
        fs.appendChild(lab);
      });
      var fb = document.createElement("p");
      fb.className = "q-feedback"; fb.id = "fb" + qi; fb.hidden = true;
      fs.appendChild(fb);
      form.appendChild(fs);
    });
    var res = $("quiz-result"); res.hidden = true; res.className = "quiz-result";
  }
  function gradeQuiz() {
    var correct = 0, answeredAll = true;
    currentQuiz.forEach(function (item, qi) {
      var chosen = document.querySelector('input[name="q' + qi + '"]:checked');
      var fb = $("fb" + qi);
      document.querySelectorAll('input[name="q' + qi + '"]').forEach(function (inp) {
        inp.parentElement.classList.remove("correct", "wrong");
      });
      if (!chosen) { answeredAll = false; return; }
      var val = parseInt(chosen.value, 10);
      var right = val === item.answer;
      if (right) correct++;
      chosen.parentElement.classList.add(right ? "correct" : "wrong");
      var ci = $("q" + qi + "o" + item.answer);
      if (ci) ci.parentElement.classList.add("correct");
      fb.hidden = false;
      fb.className = "q-feedback " + (right ? "ok" : "no");
      fb.textContent = (right ? "✔ 答對了！" : "✘ 正解：" + item.options[item.answer]) + "　" + item.explain;
    });
    var res = $("quiz-result");
    res.hidden = false;
    res.textContent = "得分 Score：" + correct + " / " + currentQuiz.length +
      (answeredAll ? "" : "（尚有題目未作答）");
    res.className = "quiz-result " + (correct === currentQuiz.length ? "all-correct" : "partial");
    if (answeredAll && offset === 0) markCompletedToday();
  }

  // ---- streak --------------------------------------------------------------
  var STREAK_KEY = "daily-english-streak";
  function loadStreak() { try { return JSON.parse(localStorage.getItem(STREAK_KEY)) || {}; } catch (e) { return {}; } }
  function saveStreak(s) { try { localStorage.setItem(STREAK_KEY, JSON.stringify(s)); } catch (e) {} }
  function refreshStreak() {
    var s = loadStreak(), today = dayNumber(new Date()), c = s.count || 0;
    if (s.last !== today && s.last !== today - 1) c = 0;
    setText("streak", "🔥 " + c);
  }
  function markCompletedToday() {
    var s = loadStreak(), today = dayNumber(new Date());
    if (s.last === today) return;
    s.count = (s.last === today - 1) ? (s.count || 0) + 1 : 1;
    s.last = today; saveStreak(s); refreshStreak();
  }

  // ---- pronunciation -------------------------------------------------------
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = 0.95;
    window.speechSynthesis.cancel(); window.speechSynthesis.speak(u);
  }

  // ---- tap a word -> meaning ----------------------------------------------
  var pop = null, popBody = null;
  function wrapWords(el) {
    // turn plain text into tappable word spans (keep punctuation outside)
    if (!el || el.dataset.wrapped === "1") return;
    var text = el.textContent;
    el.textContent = "";
    var re = /([A-Za-z][A-Za-z''-]*)|([^A-Za-z]+)/g, m;
    while ((m = re.exec(text)) !== null) {
      if (m[1]) {
        var s = document.createElement("span");
        s.className = "w"; s.textContent = m[1];
        el.appendChild(s);
      } else {
        el.appendChild(document.createTextNode(m[2]));
      }
    }
    el.dataset.wrapped = "1";
  }
  function wrapAll() {
    document.querySelectorAll(".taps").forEach(wrapWords);
  }
  function cleanWord(w) { return w.toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g, ""); }

  function showPop(x, y, html) {
    popBody.innerHTML = html;
    pop.hidden = false;
    // position within viewport
    var pw = 300;
    var left = Math.min(Math.max(8, x - pw / 2), window.innerWidth - pw - 8);
    pop.style.left = (left + window.scrollX) + "px";
    pop.style.top = (y + 22 + window.scrollY) + "px";
  }
  function hidePop() { pop.hidden = true; }

  function lookupWord(raw, x, y) {
    var word = cleanWord(raw);
    if (!word) return;
    var local = GLOSSARY[word];
    if (local) {
      showPop(x, y,
        '<div class="dp-word">' + esc(raw) + ' <button class="dp-say" data-say="' + esc(word) + '">🔊</button></div>' +
        '<div class="dp-zh">' + esc(local.zh) + (local.pos ? ' <span class="dp-pos">' + esc(local.pos) + '</span>' : '') + '</div>' +
        '<div class="dp-note">內建詞庫 · 立即顯示</div>');
      return;
    }
    // fallback: online dictionary + translation
    showPop(x, y,
      '<div class="dp-word">' + esc(raw) + ' <button class="dp-say" data-say="' + esc(word) + '">🔊</button></div>' +
      '<div class="dp-zh" id="dp-live">查詢中… Looking up…</div>');
    fetchDefinition(word);
  }

  function fetchDefinition(word) {
    // English definition from dictionaryapi.dev, Chinese from MyMemory (both free, CORS-friendly)
    var live = document.getElementById("dp-live");
    var enDef = "";
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(word))
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        try {
          var mean = data[0].meanings[0];
          enDef = "(" + (mean.partOfSpeech || "") + ") " + mean.definitions[0].definition;
        } catch (e) {}
      })
      .catch(function () {})
      .finally(function () { translate(word, function (zh) {
        var el = document.getElementById("dp-live");
        if (!el) return;
        el.innerHTML = (zh ? '<b>' + esc(zh) + '</b><br>' : '') +
          (enDef ? '<span class="dp-en">' + esc(enDef) + '</span>' : (zh ? '' : '查無此字，可點下方連結')) +
          '<div class="dp-note">線上字典 · <a href="https://www.google.com/search?q=' +
          encodeURIComponent(word + ' 中文') + '" target="_blank" rel="noopener">更多</a></div>';
      }); });
  }

  function translate(text, cb) {
    fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(text) + "&langpair=en|zh-TW")
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { cb(d && d.responseData ? d.responseData.translatedText : ""); })
      .catch(function () { cb(""); });
  }

  // ---- select text -> translate -------------------------------------------
  var tbtn = null, lastSel = "";
  function onSelectionChange() {
    var sel = window.getSelection ? window.getSelection() : null;
    var text = sel ? String(sel).trim() : "";
    if (text.length >= 2 && /[A-Za-z]/.test(text)) {
      lastSel = text;
      var rect = sel.getRangeAt(0).getBoundingClientRect();
      tbtn.style.left = (Math.max(8, rect.left) + window.scrollX) + "px";
      tbtn.style.top = (rect.top - 40 + window.scrollY) + "px";
      tbtn.hidden = false;
    } else {
      tbtn.hidden = true;
    }
  }

  // ---- reader (paste your own) --------------------------------------------
  function runReader() {
    var txt = $("reader-input").value.trim();
    var out = $("reader-output");
    if (!txt) { out.hidden = true; return; }
    out.textContent = txt;
    out.dataset.wrapped = "";
    wrapWords(out);
    out.hidden = false;
  }

  // ---- misc ----------------------------------------------------------------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function applyZh(show) { document.body.classList.toggle("hide-zh", !show); }

  // ---- theme ---------------------------------------------------------------
  var THEME_KEY = "daily-english-theme";
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    $("theme-toggle").textContent = t === "dark" ? "☀️" : "🌙";
  }

  // ---- init ----------------------------------------------------------------
  function init() {
    buildGlossary();
    setText("total-words", String(WORDBANK.length));
    setText("total-news", String(NEWS.length));
    pop = $("def-pop"); popBody = $("def-body"); tbtn = $("translate-btn");

    // theme
    var t = null; try { t = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (!t) t = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    applyTheme(t);
    $("theme-toggle").addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next); try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });

    // navigation
    $("prev-day").addEventListener("click", function () { offset -= 1; renderDay(); wrapAll(); });
    $("next-day").addEventListener("click", function () { offset += 1; renderDay(); wrapAll(); });
    $("today-btn").addEventListener("click", function () { offset = 0; renderDay(); wrapAll(); });

    // zh toggle
    $("zh-toggle").addEventListener("change", function (e) { applyZh(e.target.checked); });
    applyZh($("zh-toggle").checked);

    // quiz
    $("quiz-submit").addEventListener("click", gradeQuiz);
    $("quiz-reset").addEventListener("click", function () { renderQuiz(currentQuiz); });

    // pronunciation
    $("speak-word").addEventListener("click", function () { speak($("word-term").textContent); });
    $("speak-phrase").addEventListener("click", function () { speak($("phrase-en").textContent); });

    // tap-to-define (event delegation on word spans)
    document.body.addEventListener("click", function (e) {
      var say = e.target.closest && e.target.closest(".dp-say");
      if (say) { speak(say.getAttribute("data-say")); return; }
      if (pop && !pop.hidden && !pop.contains(e.target) && !e.target.classList.contains("w")) hidePop();
      var wspan = e.target.classList && e.target.classList.contains("w") ? e.target : null;
      if (wspan) {
        var r = wspan.getBoundingClientRect();
        lookupWord(wspan.textContent, r.left + r.width / 2, r.bottom);
      }
    });
    $("def-close").addEventListener("click", hidePop);

    // select-to-translate
    document.addEventListener("selectionchange", onSelectionChange);
    tbtn.addEventListener("click", function () {
      var text = lastSel;
      showPop(parseFloat(tbtn.style.left) - window.scrollX + 40,
              parseFloat(tbtn.style.top) - window.scrollY + 10,
              '<div class="dp-zh" id="dp-live">翻譯中… Translating…</div>');
      tbtn.hidden = true;
      translate(text, function (zh) {
        var el = document.getElementById("dp-live");
        if (el) el.innerHTML = zh ? '<b>' + esc(zh) + '</b>' : '翻譯失敗，請稍後再試';
      });
    });

    // reader
    $("reader-go").addEventListener("click", runReader);
    $("reader-clear").addEventListener("click", function () {
      $("reader-input").value = ""; $("reader-output").hidden = true;
    });

    refreshStreak();
    renderDay();
    wrapAll();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
