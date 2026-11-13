/* Terra Nova — Analog Explorer (additive module; the original scripts are untouched).
   - fills the two comparison side panels with the Moon / Mars analog sites
   - drops markers on the existing Cesium globe, flies to a site, draws a line between two compared sites
   - builds the detail / head-to-head / feature-matrix section under the globe
   - pre-loads CesiumJS while the visitor is still on the home screen, so the map never freezes the page mid-scroll */
(function () {
  var D = window.TN_ANALOGS; if (!D) return;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var CFG = window.TN_CONFIG || {};
  var BASE = CFG.CESIUM_BASE_URL || ("https://cdn.jsdelivr.net/npm/cesium@" + (CFG.CESIUM_VERSION || "1.132.0") + "/Build/Cesium/");
  var LI = function () { var l = document.documentElement.lang; return l === "ar" ? 1 : l === "fr" ? 2 : 0; };
  var tx = function (a) { return Array.isArray(a) ? a[LI()] : a; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  var UI = {
    k: ["Analog Explorer", "مستكشف المحاكيات", "Explorateur d’analogues"],
    title: ["Eleven places. Two worlds.", "أحد عشر موقعاً. عالمان.", "Onze lieux. Deux mondes."],
    sub: ["Pick a site to see it on the globe, read what makes it a Moon or Mars analog, and compare any two side by side.", "اختر موقعاً لتراه على الكرة الأرضية وتعرف ما يجعله محاكياً للقمر أو المريخ، وقارن بين أي موقعين جنباً إلى جنب.", "Choisissez un site pour le voir sur le globe, comprendre pourquoi il ressemble à la Lune ou à Mars, et comparer deux sites côte à côte."],
    moon: ["Moon", "القمر", "Lune"], mars: ["Mars", "المريخ", "Mars"], both: ["Moon + Mars", "القمر + المريخ", "Lune + Mars"],
    natural: ["Natural site", "موقع طبيعي", "Site naturel"], built: ["Engineered site", "موقع مُصنَّع", "Site construit"],
    details: ["Details ↓", "التفاصيل ↓", "Détails ↓"], onglobe: ["Show on globe", "اعرضه على الكرة", "Voir sur le globe"],
    desc: ["Description", "الوصف", "Description"], why: ["Why it is an analog", "لماذا هو محاكٍ", "Pourquoi un analogue"],
    geo: ["Location & geography", "الموقع والجغرافيا", "Localisation & géographie"], water: ["Reaction with water", "التفاعل مع الماء", "Réaction avec l’eau"],
    other: ["Other important points", "نقاط مهمة أخرى", "Autres points importants"], src: ["Official sources", "المصادر الرسمية", "Sources officielles"],
    elev: ["Elevation", "الارتفاع", "Altitude"], size: ["Size", "الحجم", "Taille"], when: ["Key date / fact", "تاريخ / معلومة", "Date / fait clé"], rock: ["Main rocks", "الصخور الرئيسية", "Roches principales"],
    coords: ["Coordinates", "الإحداثيات", "Coordonnées"], type: ["Type", "النوع", "Type"], worlds: ["Analog of", "محاكٍ لـ", "Analogue de"],
    feat: ["Shared features", "الخصائص المشتركة", "Caractéristiques communes"], dist: ["Distance apart", "المسافة بينهما", "Distance"],
    credit: ["Image", "الصورة", "Image"], docimg: ["supplied project document", "من وثيقة المشروع", "document du projet"],
    nasa: ["NASA", "ناسا", "NASA"],
    profT: ["What defines a Moon vs a Mars analog", "ما الذي يميّز محاكي القمر عن محاكي المريخ", "Ce qui distingue un analogue lunaire d’un analogue martien"],
    profS: ["Share of sites showing each feature (from the 11 sites above).", "نسبة المواقع التي تمتلك كل خاصية (من المواقع الأحد عشر أعلاه).", "Part des sites présentant chaque caractéristique (parmi les 11 ci-dessus)."],
    h2h: ["Head-to-head", "مقارنة مباشرة", "Face-à-face"], matrix: ["Feature matrix", "مصفوفة الخصائص", "Matrice des caractéristiques"],
    vs: ["vs", "مقابل", "contre"], swap: ["Swap", "تبديل", "Inverser"], showpair: ["Show both on the globe", "اعرض الاثنين على الكرة", "Afficher les deux sur le globe"],
    site: ["Site", "الموقع", "Site"], none: ["none in common", "لا شيء مشترك", "aucune en commun"], km: ["km", "كم", "km"],
    legend: ["Moon analog", "محاكٍ للقمر", "Analogue lunaire"], legend2: ["Mars analog", "محاكٍ للمريخ", "Analogue martien"], legend3: ["Both", "كلاهما", "Les deux"],
    tap: ["Tap a site to fly there", "اضغط موقعاً للانتقال إليه", "Touchez un site pour y aller"],
    open: ["Open ↗", "افتح ↗", "Ouvrir ↗"]
  };
  var u = function (k) { return UI[k][LI()]; };
  var byId = {}; D.sites.forEach(function (s) { byId[s.id] = s; });
  var worldKey = function (s) { return s.worlds.length > 1 ? "both" : s.worlds[0]; };
  var COLORS = { moon: "#b9c7f2", mars: "#ff8a5c", both: "#e3a6ff" };
  var state = { cur: "lavabeds", sel: null, a: "lavabeds", b: "mcmurdo" };

  function fmtCoord(s) {
    var l = LI(), N = ["N", "ش", "N"][l], S = ["S", "ج", "S"][l], E = ["E", "ق", "E"][l], W = ["W", "غ", "O"][l];
    if (l === 0) W = "W";
    return Math.abs(s.lat).toFixed(2) + "° " + (s.lat >= 0 ? N : S) + ", " + Math.abs(s.lon).toFixed(2) + "° " + (s.lon >= 0 ? E : W);
  }
  function km(a, b) {
    var R = 6371, r = Math.PI / 180, dLa = (b.lat - a.lat) * r, dLo = (b.lon - a.lon) * r;
    var h = Math.sin(dLa / 2) * Math.sin(dLa / 2) + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLo / 2) * Math.sin(dLo / 2);
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function midpoint(a, b) {
    var r = Math.PI / 180, la1 = a.lat * r, lo1 = a.lon * r, la2 = b.lat * r, dLo = (b.lon - a.lon) * r;
    var bx = Math.cos(la2) * Math.cos(dLo), by = Math.cos(la2) * Math.sin(dLo);
    var la3 = Math.atan2(Math.sin(la1) + Math.sin(la2), Math.sqrt((Math.cos(la1) + bx) * (Math.cos(la1) + bx) + by * by));
    return { lat: la3 / r, lon: (lo1 + Math.atan2(by, Math.cos(la1) + bx)) / r };
  }
  var fmtNum = function (n) { return Math.round(n).toLocaleString("en-US"); };

  /* ───────────────────────── CESIUM: early load + viewer hook ───────────────────────── */
  var viewer = null, CS = null, ents = {}, lineEnts = [], pendingPair = null;
  /* window.Cesium is handed out through a thin Proxy so that "new Cesium.Viewer(...)" (made by the original globe code) also reports the viewer to this module. Everything else passes straight through. */
  var _real = null, _proxy = null, _V = null;
  function viewerCtor() {
    var Orig = _real.Viewer; if (!Orig || Orig.__tn) return Orig;
    if (_V && _V.__orig === Orig) return _V;
    _V = function (a, b) { var inst = new Orig(a, b); try { onViewer(inst, _real); } catch (e) {} return inst; };
    _V.prototype = Orig.prototype; _V.__tn = true; _V.__orig = Orig;
    Object.keys(Orig).forEach(function (k) { try { _V[k] = Orig[k]; } catch (e) {} });
    return _V;
  }
  try {
    Object.defineProperty(window, "Cesium", { configurable: true, enumerable: true,
      get: function () {
        if (!_real) return undefined;
        if (!_proxy && typeof Proxy === "function") _proxy = new Proxy(_real, { get: function (t, k) { return k === "Viewer" ? viewerCtor() : t[k]; } });
        return _proxy || _real;
      },
      set: function (v) { _real = v; _proxy = null; } });
  } catch (e) {}

  var warmed = false;
  function warm() {
    if (warmed || window.Cesium) return; warmed = true;
    window.CESIUM_BASE_URL = BASE;
    var l = document.createElement("link"); l.rel = "stylesheet"; l.href = BASE + "Widgets/widgets.css"; document.head.appendChild(l);
    var s = document.createElement("script"); s.src = BASE + "Cesium.js"; s.async = true; s.onerror = function () { warmed = false; s.remove(); };
    document.head.appendChild(s);
  }
  (function watchSite() {
    var site = $("#site"); if (!site) return;
    var go = function () {
      if (site.hidden) return;
      var run = function () { setTimeout(warm, 600); };
      ("requestIdleCallback" in window) ? requestIdleCallback(run, { timeout: 4000 }) : run();
    };
    new MutationObserver(go).observe(site, { attributes: true, attributeFilter: ["hidden"] }); go();
  })();

  function pinImage(color, sel) {
    var c = document.createElement("canvas"), W = 56, H = 76; c.width = W; c.height = H; var g = c.getContext("2d");
    g.shadowColor = "rgba(0,0,0,.55)"; g.shadowBlur = 6; g.shadowOffsetY = 2;
    g.beginPath(); g.moveTo(W / 2, H - 6); g.bezierCurveTo(W / 2 - 26, 34, 4, 28, 4, 22); g.arc(W / 2, 22, W / 2 - 4, Math.PI, 0); g.bezierCurveTo(W - 4, 28, W / 2 + 26, 34, W / 2, H - 6); g.closePath();
    g.fillStyle = color; g.fill(); g.shadowColor = "transparent"; g.lineWidth = sel ? 4 : 2.5; g.strokeStyle = sel ? "#fff" : "rgba(5,6,20,.85)"; g.stroke();
    g.beginPath(); g.arc(W / 2, 22, 8, 0, 6.3); g.fillStyle = "rgba(5,6,20,.88)"; g.fill();
    return c.toDataURL();
  }
  var pins = {};
  function pinFor(k, sel) {
    var key = k + (sel ? "s" : ""); if (pins[key]) return pins[key];
    var col = COLORS[k]; return (pins[key] = pinImage(col, sel));
  }
  function onViewer(v, ns) {
    viewer = v; CS = ns;
    D.sites.forEach(function (s) {
      ents[s.id] = v.entities.add({
        id: "tn:" + s.id, position: ns.Cartesian3.fromDegrees(s.lon, s.lat, 0),
        billboard: { image: pinFor(worldKey(s), false), verticalOrigin: ns.VerticalOrigin.BOTTOM, scale: 0.62, scaleByDistance: new ns.NearFarScalar(1.5e6, 1.0, 2.2e7, 0.55) },
        label: { text: tx(s.name), font: "600 14px Manrope, sans-serif", fillColor: ns.Color.WHITE, outlineColor: ns.Color.fromCssColorString("#05060f"), outlineWidth: 4, style: ns.LabelStyle.FILL_AND_OUTLINE,
                 verticalOrigin: ns.VerticalOrigin.TOP, pixelOffset: new ns.Cartesian2(0, 6), distanceDisplayCondition: new ns.DistanceDisplayCondition(0, 6.5e6) }
      });
    });
    var h = new ns.ScreenSpaceEventHandler(v.scene.canvas);
    h.setInputAction(function (m) {
      var p = v.scene.pick(m.position);
      if (p && p.id && p.id.id && String(p.id.id).indexOf("tn:") === 0 && String(p.id.id).length > 6) select(String(p.id.id).slice(3), {});
    }, ns.ScreenSpaceEventType.LEFT_CLICK);
    /* keep the WebGL render loop alive only while the globe is actually on screen — no GPU work while reading the rest of the page */
    if ("IntersectionObserver" in window) {
      var wrap = $("#globeWrap");
      if (wrap) new IntersectionObserver(function (en) {
        var on = en[0].isIntersecting; v.useDefaultRenderLoop = on; if (on) v.scene.requestRender();
      }, { rootMargin: "80px" }).observe(wrap);
    }
    paintMarkers();
    if (pendingPair) { drawPair(pendingPair[0], pendingPair[1], true); pendingPair = null; }
    else if (state.sel) fly(byId[state.sel], 0.1);
  }
  function paintMarkers() {
    if (!viewer) return;
    D.sites.forEach(function (s) {
      var e = ents[s.id]; if (!e) return; var on = state.sel === s.id || (lineEnts.length && (state.a === s.id || state.b === s.id));
      e.billboard.image = pinFor(worldKey(s), on); e.billboard.scale = on ? 0.85 : 0.62; e.label.text = tx(s.name);
    });
    viewer.scene.requestRender();
  }
  function fly(s, dur) {
    if (!viewer || !s) return;
    viewer.camera.flyTo({ destination: CS.Cartesian3.fromDegrees(s.lon, s.lat, s.alt || 2e6), duration: dur === undefined ? 2.4 : dur });
    viewer.scene.requestRender();
  }
  function clearLine() {
    if (!viewer) return; lineEnts.forEach(function (e) { viewer.entities.remove(e); }); lineEnts = [];
  }
  function drawPair(ia, ib, quick) {
    var a = byId[ia], b = byId[ib]; if (!a || !b) return;
    if (!viewer) { pendingPair = [ia, ib]; return; }
    clearLine();
    var m = midpoint(a, b), d = km(a, b);
    lineEnts.push(viewer.entities.add({ polyline: { positions: CS.Cartesian3.fromDegreesArray([a.lon, a.lat, b.lon, b.lat]), width: 3, arcType: CS.ArcType.GEODESIC,
      material: new CS.PolylineDashMaterialProperty({ color: CS.Color.WHITE, dashLength: 18 }) } }));
    lineEnts.push(viewer.entities.add({ position: CS.Cartesian3.fromDegrees(m.lon, m.lat, 0),
      label: { text: fmtNum(d) + " " + u("km"), font: "700 15px Manrope, sans-serif", fillColor: CS.Color.WHITE, outlineColor: CS.Color.fromCssColorString("#05060f"), outlineWidth: 5,
               style: CS.LabelStyle.FILL_AND_OUTLINE, showBackground: false, verticalOrigin: CS.VerticalOrigin.BOTTOM } }));
    state.sel = null; paintMarkers(); renderPin();
    viewer.camera.flyTo({ destination: CS.Cartesian3.fromDegrees(m.lon, m.lat, Math.min(2.4e7, Math.max(2.8e6, d * 1000 * 1.7))), duration: quick ? 0.1 : 2.6 });
    viewer.scene.requestRender();
  }

  /* ───────────────────────── side panels (the two "slots") ───────────────────────── */
  function listHTML(world) {
    return D.sites.filter(function (s) { return s.worlds.indexOf(world) > -1; }).map(function (s) {
      var k = worldKey(s);
      return '<button type="button" class="tn-li' + (state.sel === s.id ? " is-on" : "") + '" data-pick="' + s.id + '" style="--c:' + COLORS[k] + '">' +
        '<img src="' + s.img.local + '" alt="" width="44" height="44" loading="lazy" decoding="async">' +
        '<span class="tn-li__t"><b>' + esc(tx(s.name)) + '</b><small>' + esc(tx(s.place)) + '</small></span><i class="tn-dot" aria-hidden="true"></i></button>';
    }).join("");
  }
  var slots = [];
  function mountSlots() {
    var asides = $$("#compare .slot"); if (asides.length < 2) return;
    [["mars", asides[0]], ["moon", asides[1]]].forEach(function (p) {
      var el = p[1]; el.classList.add("slot--live"); el.dataset.world = p[0];
      var soon = $("[data-i18n='cmp.soon']", el); if (soon) soon.remove();
      var box = document.createElement("div"); box.className = "tn-list"; el.appendChild(box); slots.push({ w: p[0], box: box });
    });
  }
  function renderSlots() { slots.forEach(function (s) { s.box.innerHTML = listHTML(s.w); }); }

  /* map overlay: legend + selected-site card */
  var pinEl, legEl;
  function mountOverlay() {
    var wrap = $("#globeWrap"); if (!wrap) return;
    legEl = document.createElement("div"); legEl.className = "tn-legend"; wrap.appendChild(legEl);
    pinEl = document.createElement("div"); pinEl.className = "tn-pin"; pinEl.hidden = true; wrap.appendChild(pinEl);
  }
  function renderLegend() {
    if (!legEl) return;
    legEl.innerHTML = ["moon", "mars", "both"].map(function (k) { return '<span><i style="background:' + COLORS[k] + '"></i>' + u(k === "moon" ? "legend" : k === "mars" ? "legend2" : "legend3") + '</span>'; }).join("");
  }
  function renderPin() {
    if (!pinEl) return; var s = byId[state.sel];
    if (!s) { pinEl.hidden = true; return; }
    pinEl.hidden = false;
    pinEl.innerHTML = '<img src="' + s.img.local + '" alt="" width="64" height="64"><div><b>' + esc(tx(s.name)) + '</b><small>' + esc(tx(s.place)) + ' · ' + esc(fmtCoord(s)) + '</small>' +
      '<button type="button" data-more="' + s.id + '">' + u("details") + '</button></div>';
  }

  /* ───────────────────────── explorer section ───────────────────────── */
  var root;
  function chip(k) { return '<span class="tn-chip tn-chip--' + k + '">' + u(k) + '</span>'; }
  function worldChips(s) { return s.worlds.map(function (w) { return chip(w); }).join(""); }
  function tagChips(ids, hi) { return ids.map(function (t) { return '<span class="tn-tag' + (hi && hi.indexOf(t) > -1 ? " is-shared" : "") + '">' + esc(tx(D.tags[t])) + '</span>'; }).join(""); }
  function fv(v) { return v === "—" || v == null ? "—" : esc(tx(v)); }

  function chooserHTML() {
    return D.sites.map(function (s) { return '<button type="button" class="tn-pick' + (state.cur === s.id ? " is-on" : "") + '" data-cur="' + s.id + '" style="--c:' + COLORS[worldKey(s)] + '"><i class="tn-dot"></i>' + esc(tx(s.name)) + '</button>'; }).join("");
  }
  function detailHTML(s) {
    var facts = [["elev", s.facts.elev], ["size", s.facts.size], ["when", s.facts.when], ["rock", s.rock]].map(function (f) { return '<div><dt>' + u(f[0]) + '</dt><dd>' + fv(f[1]) + '</dd></div>'; }).join("");
    var links = s.links.map(function (l) {
      return '<a class="tn-link tn-link--' + l.kind + '" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer"><b>' + (l.kind === "nasa" ? u("nasa") : "●") + '</b><span>' + esc(tx(l.t)) + '</span><em>↗</em></a>';
    }).join("");
    return '<div class="tn-det__media"><img id="tnImg" src="' + esc(s.img.src) + '" data-local="' + s.img.local + '" alt="' + esc(tx(s.name)) + '" referrerpolicy="no-referrer" loading="lazy" decoding="async">' +
      '<small id="tnCredit">' + u("credit") + ': ' + esc(s.img.credit) + '</small></div>' +
      '<div class="tn-det__head"><div class="tn-badges">' + worldChips(s) + '<span class="tn-chip">' + u(s.type) + '</span></div>' +
      '<h3>' + esc(tx(s.name)) + '</h3><p class="tn-det__place">' + esc(tx(s.place)) + ' · ' + esc(fmtCoord(s)) + '</p>' +
      '<p>' + esc(tx(s.desc)) + '</p><dl class="tn-facts">' + facts + '</dl>' +
      '<button type="button" class="btn btn--solid" data-globe="' + s.id + '">' + u("onglobe") + '</button></div>' +
      '<div class="tn-det__cols">' +
      '<section><h4>' + u("why") + '</h4><p>' + esc(tx(s.why)) + '</p></section>' +
      '<section><h4>' + u("geo") + '</h4><p>' + esc(tx(s.setting)) + '</p></section>' +
      '<section><h4>' + u("water") + '</h4><p>' + esc(tx(s.water)) + '</p></section>' +
      '<section><h4>' + u("other") + '</h4><ul>' + s.notes.map(function (n) { return '<li>' + esc(tx(n)) + '</li>'; }).join("") + '</ul></section></div>' +
      '<div class="tn-det__foot"><div class="tn-tags">' + tagChips(s.tags) + '</div><h4>' + u("src") + '</h4><div class="tn-links">' + links + '</div></div>';
  }
  function profileHTML() {
    var moon = D.sites.filter(function (s) { return s.worlds.indexOf("moon") > -1; }), mars = D.sites.filter(function (s) { return s.worlds.indexOf("mars") > -1; });
    var rows = Object.keys(D.tags).map(function (t) {
      var a = moon.filter(function (s) { return s.tags.indexOf(t) > -1; }).length, b = mars.filter(function (s) { return s.tags.indexOf(t) > -1; }).length;
      return { t: t, a: a, b: b, pa: a / moon.length, pb: b / mars.length };
    }).sort(function (x, y) { return (y.pa - y.pb) - (x.pa - x.pb); });
    return '<div class="tn-prof__head"><span class="m">' + u("moon") + ' <small>(' + moon.length + ')</small></span><span></span><span class="mars">' + u("mars") + ' <small>(' + mars.length + ')</small></span></div>' +
      rows.map(function (r) {
        return '<div class="tn-prof__row"><div class="l"><i style="width:' + (r.pa * 100).toFixed(0) + '%"></i><em>' + r.a + '/' + moon.length + '</em></div><div class="c">' + esc(tx(D.tags[r.t])) + '</div><div class="r"><i style="width:' + (r.pb * 100).toFixed(0) + '%"></i><em>' + r.b + '/' + mars.length + '</em></div></div>';
      }).join("");
  }
  function opts(sel) { return D.sites.map(function (s) { return '<option value="' + s.id + '"' + (s.id === sel ? " selected" : "") + '>' + esc(tx(s.name)) + '</option>'; }).join(""); }
  function h2hHTML() {
    var a = byId[state.a], b = byId[state.b], shared = a.tags.filter(function (t) { return b.tags.indexOf(t) > -1; });
    function row(label, fa, fb, cls) { return '<tr' + (cls ? ' class="' + cls + '"' : "") + '><th scope="row">' + label + '</th><td>' + fa + '</td><td>' + fb + '</td></tr>'; }
    return '<div class="tn-h2h__pick"><label><span class="tn-dotl" style="--c:' + COLORS[worldKey(a)] + '"></span><select data-sel="a" aria-label="A">' + opts(state.a) + '</select></label>' +
      '<button type="button" class="tn-swap" data-swap title="' + u("swap") + '" aria-label="' + u("swap") + '">⇄</button>' +
      '<label><span class="tn-dotl" style="--c:' + COLORS[worldKey(b)] + '"></span><select data-sel="b" aria-label="B">' + opts(state.b) + '</select></label></div>' +
      '<div class="tn-h2h__bar"><span>' + u("dist") + ': <b>' + fmtNum(km(a, b)) + ' ' + u("km") + '</b></span><button type="button" class="btn btn--solid" data-pair>' + u("showpair") + '</button></div>' +
      '<div class="tn-scroll"><table class="tn-table"><thead><tr><th></th><th scope="col">' + esc(tx(a.name)) + '</th><th scope="col">' + esc(tx(b.name)) + '</th></tr></thead><tbody>' +
      row(u("worlds"), worldChips(a), worldChips(b)) + row(u("type"), u(a.type), u(b.type)) +
      row(u("geo"), esc(tx(a.place)) + "<br><small>" + esc(fmtCoord(a)) + "</small>", esc(tx(b.place)) + "<br><small>" + esc(fmtCoord(b)) + "</small>") +
      row(u("elev"), fv(a.facts.elev), fv(b.facts.elev)) + row(u("size"), fv(a.facts.size), fv(b.facts.size)) + row(u("when"), fv(a.facts.when), fv(b.facts.when)) +
      row(u("rock"), esc(tx(a.rock)), esc(tx(b.rock))) + row(u("why"), esc(tx(a.why)), esc(tx(b.why))) + row(u("water"), esc(tx(a.water)), esc(tx(b.water))) +
      row("", tagChips(a.tags, shared), tagChips(b.tags, shared)) +
      '</tbody></table></div><p class="tn-shared"><b>' + u("feat") + ':</b> ' + (shared.length ? tagChips(shared, shared) : u("none")) + '</p>';
  }
  function matrixHTML() {
    var tags = Object.keys(D.tags);
    return '<div class="tn-scroll"><table class="tn-table tn-matrix"><thead><tr><th scope="col">' + u("site") + '</th>' + tags.map(function (t) { return '<th scope="col"><span>' + esc(tx(D.tags[t])) + '</span></th>'; }).join("") + '</tr></thead><tbody>' +
      D.sites.map(function (s) {
        return '<tr data-cur="' + s.id + '"><th scope="row"><i class="tn-dot" style="--c:' + COLORS[worldKey(s)] + '"></i>' + esc(tx(s.name)) + '</th>' + tags.map(function (t) { return '<td>' + (s.tags.indexOf(t) > -1 ? '<b class="tn-yes" style="--c:' + COLORS[worldKey(s)] + '">●</b>' : '<span class="tn-no">·</span>') + '</td>'; }).join("") + '</tr>';
      }).join("") + '</tbody></table></div>';
  }
  function mountSection() {
    var host = $("#site"); if (!host) return;
    root = document.createElement("section"); root.id = "tnx"; root.className = "tnx stars";
    root.innerHTML = '<header class="tnx__head"><p class="k" id="tnxK"></p><h2 id="tnxT"></h2><p id="tnxS"></p></header>' +
      '<div class="tnx__pick" id="tnxPick" role="group"></div><article class="tn-det" id="tnxDetail"></article>' +
      '<div class="tnx__blk"><h3 id="tnxPT"></h3><p class="tnx__sub" id="tnxPS"></p><div class="tn-prof" id="tnxProf"></div></div>' +
      '<div class="tnx__blk"><h3 id="tnxHT"></h3><div id="tnxH2H"></div></div>' +
      '<div class="tnx__blk"><h3 id="tnxMT"></h3><div id="tnxMat"></div></div>';
    host.appendChild(root);
  }
  function renderSection() {
    if (!root) return;
    $("#tnxK").textContent = u("k"); $("#tnxT").textContent = u("title"); $("#tnxS").textContent = u("sub");
    $("#tnxPick").innerHTML = chooserHTML(); $("#tnxDetail").innerHTML = detailHTML(byId[state.cur]);
    $("#tnxPT").textContent = u("profT"); $("#tnxPS").textContent = u("profS"); $("#tnxProf").innerHTML = profileHTML();
    $("#tnxHT").textContent = u("h2h"); $("#tnxH2H").innerHTML = h2hHTML();
    $("#tnxMT").textContent = u("matrix"); $("#tnxMat").innerHTML = matrixHTML();
  }
  function renderDetailOnly() { $("#tnxPick").innerHTML = chooserHTML(); $("#tnxDetail").innerHTML = detailHTML(byId[state.cur]); $$("#tnxMat tr[data-cur]").forEach(function (r) { r.classList.toggle("is-on", r.dataset.cur === state.cur); }); }

  function select(id, o) {
    o = o || {}; if (!byId[id]) return;
    state.sel = id; state.cur = id; clearLine();
    renderSlots(); renderPin(); renderDetailOnly(); paintMarkers();
    if (o.fly !== false) fly(byId[id]);
  }

  /* events */
  function onClick(e) {
    var t = e.target.closest("[data-pick],[data-cur],[data-more],[data-globe],[data-swap],[data-pair]"); if (!t) return;
    if (t.dataset.pick) { select(t.dataset.pick); var sp = $(".tn-pin"); }
    else if (t.dataset.more) { state.cur = t.dataset.more; renderDetailOnly(); root.querySelector("#tnxDetail").scrollIntoView({ behavior: "smooth", block: "start" }); }
    else if (t.dataset.globe) { var f = window.TN_FLOW; state.cur = t.dataset.globe; select(t.dataset.globe, { fly: false }); if (f && f.scrollToMap) f.scrollToMap(); setTimeout(function () { fly(byId[t.dataset.globe]); }, 900); }
    else if (t.dataset.cur) { state.cur = t.dataset.cur; renderDetailOnly(); if (t.tagName === "TR") root.querySelector("#tnxDetail").scrollIntoView({ behavior: "smooth", block: "start" }); }
    else if (t.hasAttribute("data-swap")) { var x = state.a; state.a = state.b; state.b = x; $("#tnxH2H").innerHTML = h2hHTML(); }
    else if (t.hasAttribute("data-pair")) { var f2 = window.TN_FLOW; state.sel = null; renderSlots(); if (f2 && f2.scrollToMap) f2.scrollToMap(); setTimeout(function () { drawPair(state.a, state.b); }, 900); }
  }
  document.addEventListener("click", function (e) { if ($("#site") && $("#site").contains(e.target)) onClick(e); });
  document.addEventListener("change", function (e) {
    var s = e.target.closest && e.target.closest("[data-sel]"); if (!s) return; state[s.dataset.sel] = s.value;
    if (state.a === state.b) { var o = D.sites.filter(function (x) { return x.id !== state.a; })[0]; state[s.dataset.sel === "a" ? "b" : "a"] = o.id; }
    $("#tnxH2H").innerHTML = h2hHTML();
  });
  document.addEventListener("error", function (e) {
    var im = e.target; if (!im || im.tagName !== "IMG" || !im.dataset || !im.dataset.local || im.dataset.fell) return;
    im.dataset.fell = "1"; im.src = im.dataset.local; var c = $("#tnCredit"); if (c) c.textContent = u("credit") + ": " + u("docimg");
  }, true);
  document.addEventListener("tn:lang", function () { renderSlots(); renderLegend(); renderPin(); renderSection(); paintMarkers(); });

  function init() { mountSlots(); mountOverlay(); mountSection(); renderSlots(); renderLegend(); renderSection(); }
  init();
})();
