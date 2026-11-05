/* ===== WADDLE Planner + Notes =====
   Self-contained. I-load pagkatapos ng app.js.
   Naka-save sa localStorage (per browser). */
(function () {
  var K_EV = "waddle_events", K_NO = "waddle_notes";
  var START_H = 8, END_H = 18, ROW = 56; // 8:00 AM - 6:00 PM
  var DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var COLORS = { green: "Green", yellow: "Yellow", purple: "Purple", pink: "Pink", gray: "Gray" };

  function load(k) { try { return JSON.parse(localStorage.getItem(k)) || []; } catch (e) { return []; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function iso(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function mondayOf(date) {
    var d = new Date(date); d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return d;
  }
  function toMin(t) { var p = t.split(":"); return (+p[0]) * 60 + (+p[1]); }
  function fmt(t) {
    var p = t.split(":"), h = +p[0], ap = h >= 12 ? "PM" : "AM";
    return ((h + 11) % 12 + 1) + ":" + p[1] + " " + ap;
  }

  var events = load(K_EV), notes = load(K_NO), weekStart = mondayOf(new Date());

  /* ---------- build UI ---------- */
  function build() {
    var dash = document.getElementById("dashboard");
    var home = document.getElementById("homeArea");
    if (!dash || !home || document.getElementById("plannerArea")) return;

    var tabs = document.createElement("div");
    tabs.className = "dash-tabs"; tabs.id = "dashTabs";
    tabs.innerHTML =
      '<button data-t="home" class="active"> Home</button>' +
      '<button data-t="courses">Courses</button>' +
      '<button data-t="planner">Planner</button>' +
      '<button data-t="notes">Notes</button>';
    dash.insertBefore(tabs, home);

    var planner = document.createElement("section");
    planner.id = "plannerArea"; planner.className = "hidden";
    planner.innerHTML =
      '<div class="wp-card">' +
        '<div class="wp-head"><h2>This week</h2>' +
        '<div class="wp-nav"><button id="wpPrev">‹</button><span id="wpLabel"></span><button id="wpNext">›</button>' +
        '<button id="wpToday">Today</button></div>' +
        '<button class="wp-add" id="wpAdd">＋ New Schedule</button></div>' +
        '<div class="wp-scroll"><div class="wp-grid" id="wpGrid"></div></div>' +
      '</div>';

    var nots = document.createElement("section");
    nots.id = "notesArea"; nots.className = "hidden";
    nots.innerHTML =
      '<div class="wp-card">' +
        '<div class="wp-head"><h2>My Notes</h2><div class="wn-tools">' +
        '<input id="wnSearch" type="search" placeholder="Search notes..." />' +
        '<button class="wp-add" id="wnAdd">＋ New Note</button></div></div>' +
        '<div class="wn-grid" id="wnGrid"></div>' +
      '</div>';

    dash.appendChild(planner); dash.appendChild(nots);

    tabs.addEventListener("click", function (e) {
      var t = e.target.getAttribute && e.target.getAttribute("data-t"); if (!t) return;
      if (t === "home" && window.showHome) window.showHome();
      if (t === "courses" && window.showCourses) window.showCourses();
      if (t === "planner") showPlanner();
      if (t === "notes") showNotes();
      setActive(t);
    });
    document.getElementById("wpPrev").onclick = function () { weekStart.setDate(weekStart.getDate() - 7); renderWeek(); };
    document.getElementById("wpNext").onclick = function () { weekStart.setDate(weekStart.getDate() + 7); renderWeek(); };
    document.getElementById("wpToday").onclick = function () { weekStart = mondayOf(new Date()); renderWeek(); };
    document.getElementById("wpAdd").onclick = function () { eventModal(null, iso(new Date()), "09:00"); };
    document.getElementById("wnAdd").onclick = function () { noteModal(null); };
    document.getElementById("wnSearch").oninput = renderNotes;
  }

  function setActive(t) {
    var b = document.querySelectorAll("#dashTabs button");
    for (var i = 0; i < b.length; i++) b[i].classList.toggle("active", b[i].getAttribute("data-t") === t);
  }
  function hideBase() {
    ["homeArea", "coursesArea", "lessonPanel", "plannerArea", "notesArea"].forEach(function (id) {
      var el = document.getElementById(id); if (el) el.classList.add("hidden");
    });
  }
  function showPlanner() { hideBase(); document.getElementById("plannerArea").classList.remove("hidden"); renderWeek(); }
  function showNotes() { hideBase(); document.getElementById("notesArea").classList.remove("hidden"); renderNotes(); }
  window.showPlanner = showPlanner; window.showNotes = showNotes;

  // Kapag tinawag ang lumang showHome / showCourses, itago ang Planner at Notes
  ["showHome", "showCourses"].forEach(function (name) {
    var orig = window[name];
    if (typeof orig !== "function") return;
    window[name] = function () {
      var r = orig.apply(this, arguments);
      ["plannerArea", "notesArea"].forEach(function (id) {
        var el = document.getElementById(id); if (el) el.classList.add("hidden");
      });
      setActive(name === "showHome" ? "home" : "courses");
      return r;
    };
  });

  /* ---------- week view ---------- */
  function renderWeek() {
    var grid = document.getElementById("wpGrid"); if (!grid) return;
    var end = new Date(weekStart); end.setDate(end.getDate() + 6);
    var M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    document.getElementById("wpLabel").textContent =
      M[weekStart.getMonth()] + " " + weekStart.getDate() + " – " + M[end.getMonth()] + " " + end.getDate();

    var todayIso = iso(new Date()), html = '<div></div>', i, h;
    var dates = [];
    for (i = 0; i < 7; i++) {
      var d = new Date(weekStart); d.setDate(d.getDate() + i); dates.push(iso(d));
      html += '<div class="wp-dayhead ' + (iso(d) === todayIso ? "today" : "") + '"><span>' + DAYS[i] + '</span><small>' + d.getDate() + '</small></div>';
    }
    html += '<div class="wp-times">';
    for (h = START_H; h < END_H; h++) html += "<div>" + fmt(pad(h) + ":00") + "</div>";
    html += "</div>";

    for (i = 0; i < 7; i++) {
      html += '<div class="wp-col ' + (dates[i] === todayIso ? "today" : "") + '" data-date="' + dates[i] + '">';
      events.filter(function (ev) { return ev.date === dates[i]; }).forEach(function (ev) {
        var top = (toMin(ev.start) - START_H * 60) / 60 * ROW;
        var hgt = Math.max((toMin(ev.end) - toMin(ev.start)) / 60 * ROW, 28);
        html += '<div class="wp-event c-' + ev.color + '" data-id="' + ev.id + '" style="top:' + top + 'px;height:' + hgt + 'px">' +
          esc(ev.title) + "<small>" + fmt(ev.start) + " – " + fmt(ev.end) + "</small></div>";
      });
      html += "</div>";
    }
    grid.innerHTML = html;

    var cols = grid.querySelectorAll(".wp-col");
    for (i = 0; i < cols.length; i++) {
      cols[i].onclick = function (e) {
        var evEl = e.target.closest ? e.target.closest(".wp-event") : null;
        if (evEl) {
          var found = events.filter(function (x) { return x.id === evEl.getAttribute("data-id"); })[0];
          if (found) eventModal(found); return;
        }
        var y = e.clientY - this.getBoundingClientRect().top;
        var hr = Math.min(END_H - 1, START_H + Math.floor(y / ROW));
        eventModal(null, this.getAttribute("data-date"), pad(hr) + ":00");
      };
    }
  }

  /* ---------- modals ---------- */
  function openModal(inner) {
    closeModal();
    var bg = document.createElement("div");
    bg.className = "wp-modal-bg"; bg.id = "wpModal";
    bg.innerHTML = '<div class="wp-modal">' + inner + "</div>";
    bg.addEventListener("mousedown", function (e) { if (e.target === bg) closeModal(); });
    document.body.appendChild(bg);
    return bg;
  }
  function closeModal() { var m = document.getElementById("wpModal"); if (m) m.remove(); }
  function colorOptions(sel) {
    return Object.keys(COLORS).map(function (k) {
      return '<option value="' + k + '"' + (k === sel ? " selected" : "") + ">" + COLORS[k] + "</option>";
    }).join("");
  }

  function eventModal(ev, date, start) {
    var e = ev || { id: "", title: "", date: date, start: start, end: pad(Math.min(END_H, +start.slice(0, 2) + 1)) + ":00", color: "green" };
    var m = openModal(
      "<h3>" + (ev ? "Edit Schedule" : "New Schedule") + "</h3>" +
      '<label>Title</label><input id="evTitle" value="' + esc(e.title) + '" placeholder="e.g. Typing Practice" />' +
      '<label>Date</label><input id="evDate" type="date" value="' + e.date + '" />' +
      '<div class="wp-row"><div><label>Start</label><input id="evStart" type="time" value="' + e.start + '" /></div>' +
      '<div><label>End</label><input id="evEnd" type="time" value="' + e.end + '" /></div></div>' +
      '<label>Color</label><select id="evColor">' + colorOptions(e.color) + "</select>" +
      '<div class="wp-actions">' + (ev ? '<button class="del" id="evDel">Delete</button>' : "") +
      '<button id="evCancel">Cancel</button><button class="save" id="evSave">Save</button></div>'
    );
    m.querySelector("#evCancel").onclick = closeModal;
    if (ev) m.querySelector("#evDel").onclick = function () {
      events = events.filter(function (x) { return x.id !== ev.id; }); save(K_EV, events); closeModal(); renderWeek();
    };
    m.querySelector("#evSave").onclick = function () {
      var t = m.querySelector("#evTitle").value.trim(), d = m.querySelector("#evDate").value,
          s = m.querySelector("#evStart").value, en = m.querySelector("#evEnd").value,
          c = m.querySelector("#evColor").value;
      if (!t || !d || !s || !en) { alert("Pakilagyan ang title, date, at oras."); return; }
      if (toMin(en) <= toMin(s)) { alert("Dapat mas huli ang End time kaysa Start time."); return; }
      if (toMin(s) < START_H * 60 || toMin(en) > END_H * 60) { alert("Ang calendar ay 8:00 AM hanggang 6:00 PM lang."); return; }
      if (ev) { ev.title = t; ev.date = d; ev.start = s; ev.end = en; ev.color = c; }
      else events.push({ id: uid(), title: t, date: d, start: s, end: en, color: c });
      save(K_EV, events); closeModal();
      weekStart = mondayOf(new Date(d + "T00:00:00")); renderWeek();
    };
  }

  /* ---------- notes ---------- */
  function renderNotes() {
    var g = document.getElementById("wnGrid"); if (!g) return;
    var q = (document.getElementById("wnSearch").value || "").toLowerCase();
    var list = notes.filter(function (n) { return (n.title + " " + n.body).toLowerCase().indexOf(q) > -1; });
    if (!list.length) { g.innerHTML =  '<div class="wp-empty">No notes yet. Click “＋ New Note” to add one. 📝</div>'; return; }
    g.innerHTML = list.map(function (n) {
      return '<div class="wn-note c-' + n.color + '" data-id="' + n.id + '"><h3>' + esc(n.title || "Untitled") +
        "</h3><p>" + esc(n.body) + "</p><small>" + esc(n.updated || "") + "</small></div>";
    }).join("");
    var items = g.querySelectorAll(".wn-note");
    for (var i = 0; i < items.length; i++) items[i].onclick = function () {
      var id = this.getAttribute("data-id");
      noteModal(notes.filter(function (x) { return x.id === id; })[0]);
    };
  }

  function noteModal(n) {
    var cur = n || { title: "", body: "", color: "yellow" };
    var m = openModal(
      "<h3>" + (n ? "Edit Note" : "New Note") + "</h3>" +
      '<label>Title</label><input id="nTitle" value="' + esc(cur.title) + '" placeholder="Note title" />' +
      '<label>Note</label><textarea id="nBody" placeholder="Isulat dito...">' + esc(cur.body) + "</textarea>" +
      '<label>Color</label><select id="nColor">' + colorOptions(cur.color) + "</select>" +
      '<div class="wp-actions">' + (n ? '<button class="del" id="nDel">Delete</button>' : "") +
      '<button id="nCancel">Cancel</button><button class="save" id="nSave">Save</button></div>'
    );
    m.querySelector("#nCancel").onclick = closeModal;
    if (n) m.querySelector("#nDel").onclick = function () {
      notes = notes.filter(function (x) { return x.id !== n.id; }); save(K_NO, notes); closeModal(); renderNotes();
    };
    m.querySelector("#nSave").onclick = function () {
      var t = m.querySelector("#nTitle").value.trim(), b = m.querySelector("#nBody").value, c = m.querySelector("#nColor").value;
      if (!t && !b.trim()) { alert("Maglagay muna ng title o note."); return; }
      var stamp = new Date().toLocaleDateString();
      if (n) { n.title = t; n.body = b; n.color = c; n.updated = stamp; }
      else notes.unshift({ id: uid(), title: t, body: b, color: c, updated: stamp });
      save(K_NO, notes); closeModal(); renderNotes();
    };
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
