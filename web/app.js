/* Daily English — app logic
 * Picks today's lesson from LESSONS by date, renders it, and runs the quiz.
 * 依日期挑選當天課程、渲染內容並處理測驗。
 */
(function () {
  "use strict";

  var MS_PER_DAY = 24 * 60 * 60 * 1000;
  var total = LESSONS.length;
  var offset = 0; // 0 = today; -1 = yesterday; +1 = tomorrow ...

  // --- date helpers ---------------------------------------------------------
  function startOfDay(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }
  function dayNumber(date) {
    // whole days since the Unix epoch, in local time
    return Math.floor(startOfDay(date).getTime() / MS_PER_DAY);
  }
  function lessonIndexFor(date) {
    var n = dayNumber(date);
    return ((n % total) + total) % total;
  }
  function shownDate() {
    return new Date(startOfDay(new Date()).getTime() + offset * MS_PER_DAY);
  }

  var WEEK_ZH = ["日", "一", "二", "三", "四", "五", "六"];
  function formatDate(d) {
    var g = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() +
            " (週" + WEEK_ZH[d.getDay()] + ")";
    var en = d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
    return g + " · " + en;
  }

  // --- rendering ------------------------------------------------------------
  function $(id) { return document.getElementById(id); }
  function setText(id, txt) { var el = $(id); if (el) el.textContent = txt; }

  function renderLesson() {
    var date = shownDate();
    var idx = lessonIndexFor(date);
    var L = LESSONS[idx];

    setText("date-line", formatDate(date));
    setText("lesson-line", "第 " + (idx + 1) + " / " + total + " 課　Lesson " + (idx + 1));

    // word
    setText("word-term", L.word.term);
    setText("word-phonetic", L.word.phonetic);
    setText("word-pos", L.word.pos);
    setText("word-zh", L.word.zh);
    setText("word-def", L.word.def);
    setText("word-example", L.word.example);
    setText("word-example-zh", L.word.example_zh);

    // phrase
    setText("phrase-en", L.phrase.en);
    setText("phrase-zh", L.phrase.zh);
    setText("phrase-usage", L.phrase.usage);

    // reading
    setText("reading-title", L.reading.title);
    setText("reading-title-zh", L.reading.title_zh);
    setText("reading-en", L.reading.en);
    setText("reading-zh", L.reading.zh);
    var vlist = $("reading-vocab");
    vlist.innerHTML = "";
    L.reading.vocab.forEach(function (pair) {
      var li = document.createElement("li");
      li.innerHTML = "<b>" + pair[0] + "</b> " + pair[1];
      vlist.appendChild(li);
    });

    renderQuiz(L.quiz);
    updateNavButtons();
  }

  // --- quiz -----------------------------------------------------------------
  var currentQuiz = [];
  function renderQuiz(quiz) {
    currentQuiz = quiz;
    var form = $("quiz-form");
    form.innerHTML = "";
    quiz.forEach(function (item, qi) {
      var fieldset = document.createElement("fieldset");
      fieldset.className = "quiz-q";
      var legend = document.createElement("legend");
      legend.innerHTML = (qi + 1) + ". " + escapeHtml(item.q) +
        '<span class="q-zh">' + escapeHtml(item.q_zh) + "</span>";
      fieldset.appendChild(legend);
      item.options.forEach(function (opt, oi) {
        var id = "q" + qi + "o" + oi;
        var label = document.createElement("label");
        label.className = "opt";
        label.setAttribute("for", id);
        label.innerHTML =
          '<input type="radio" name="q' + qi + '" id="' + id + '" value="' + oi + '">' +
          "<span>" + escapeHtml(opt) + "</span>";
        fieldset.appendChild(label);
      });
      var fb = document.createElement("p");
      fb.className = "q-feedback";
      fb.id = "fb" + qi;
      fb.hidden = true;
      fieldset.appendChild(fb);
      form.appendChild(fieldset);
    });
    var res = $("quiz-result");
    res.hidden = true;
    res.className = "quiz-result";
  }

  function gradeQuiz() {
    var correct = 0;
    var answeredAll = true;
    currentQuiz.forEach(function (item, qi) {
      var chosen = document.querySelector('input[name="q' + qi + '"]:checked');
      var fb = $("fb" + qi);
      if (!chosen) { answeredAll = false; }
      // clear previous option styling
      document.querySelectorAll('input[name="q' + qi + '"]').forEach(function (inp) {
        inp.parentElement.classList.remove("correct", "wrong");
      });
      if (chosen) {
        var val = parseInt(chosen.value, 10);
        var right = val === item.answer;
        if (right) correct++;
        chosen.parentElement.classList.add(right ? "correct" : "wrong");
        // always highlight the correct one
        var correctInput = document.getElementById("q" + qi + "o" + item.answer);
        if (correctInput) correctInput.parentElement.classList.add("correct");
        fb.hidden = false;
        fb.className = "q-feedback " + (right ? "ok" : "no");
        fb.textContent = (right ? "✔ 答對了！" : "✘ 正解：" +
          item.options[item.answer]) + "　" + item.explain;
      }
    });
    var res = $("quiz-result");
    res.hidden = false;
    var msg = "得分 Score：" + correct + " / " + currentQuiz.length;
    if (!answeredAll) msg += "（尚有題目未作答）";
    res.textContent = msg;
    res.className = "quiz-result " +
      (correct === currentQuiz.length ? "all-correct" : "partial");

    if (answeredAll && offset === 0) markCompletedToday();
  }

  // --- streak (localStorage) ------------------------------------------------
  var STREAK_KEY = "daily-english-streak";
  function loadStreak() {
    try { return JSON.parse(localStorage.getItem(STREAK_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveStreak(s) {
    try { localStorage.setItem(STREAK_KEY, JSON.stringify(s)); } catch (e) {}
  }
  function refreshStreakDisplay() {
    var s = loadStreak();
    var today = dayNumber(new Date());
    var count = s.count || 0;
    // streak is only "alive" if last done was today or yesterday
    if (s.last !== today && s.last !== today - 1) count = 0;
    setText("streak", "🔥 " + count);
  }
  function markCompletedToday() {
    var s = loadStreak();
    var today = dayNumber(new Date());
    if (s.last === today) return; // already counted today
    if (s.last === today - 1) s.count = (s.count || 0) + 1;
    else s.count = 1;
    s.last = today;
    saveStreak(s);
    refreshStreakDisplay();
  }

  // --- pronunciation --------------------------------------------------------
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  // --- misc -----------------------------------------------------------------
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function updateNavButtons() {
    $("today-btn").hidden = offset === 0;
  }
  function applyZhVisibility(show) {
    document.body.classList.toggle("hide-zh", !show);
  }

  // --- theme ----------------------------------------------------------------
  var THEME_KEY = "daily-english-theme";
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    $("theme-toggle").textContent = t === "dark" ? "☀️" : "🌙";
  }

  // --- init -----------------------------------------------------------------
  function init() {
    setText("total-lessons", String(total));

    // theme
    var savedTheme = null;
    try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (!savedTheme) {
      savedTheme = window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    applyTheme(savedTheme);
    $("theme-toggle").addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });

    // nav
    $("prev-day").addEventListener("click", function () { offset -= 1; renderLesson(); });
    $("next-day").addEventListener("click", function () { offset += 1; renderLesson(); });
    $("today-btn").addEventListener("click", function () { offset = 0; renderLesson(); });

    // zh toggle
    $("zh-toggle").addEventListener("change", function (e) { applyZhVisibility(e.target.checked); });
    applyZhVisibility($("zh-toggle").checked);

    // quiz
    $("quiz-submit").addEventListener("click", gradeQuiz);
    $("quiz-reset").addEventListener("click", function () { renderQuiz(currentQuiz); });

    // pronunciation
    $("speak-word").addEventListener("click", function () {
      speak($("word-term").textContent);
    });
    $("speak-phrase").addEventListener("click", function () {
      speak($("phrase-en").textContent);
    });

    refreshStreakDisplay();
    renderLesson();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
