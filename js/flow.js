/* Terra Nova — scroll-driven intro (Earth → Mars → Moon), home cloud reveal, CesiumJS comparison globe. */
(function () {
  var $ = function (s) { return document.querySelector(s); }, $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  var clamp = function (v) { return Math.min(1, Math.max(0, v)); };
  var ease = function (t) { return 1 - Math.pow(1 - t, 3); };
  var CFG = window.TN_CONFIG || {};
  var active = null, raf = 0;

  /* ---------- INTRO ---------- */
  var iTrack = $("#introTrack"), bgs = $$(".ibg"), pls = $$(".pl"), scenes = $$(".scene"), iCue = $("#introCue");
  var iCur = 0, boot = 0, bootStart = 0, introDone = false;
  function prog(track) { var r = track.getBoundingClientRect(), span = track.offsetHeight - window.innerHeight; return span > 0 ? clamp(-r.top / span) : 0; }

  function drawIntro(p) {
    var s = p * 3, bt = ease(boot);
    bgs.forEach(function (b, i) { if (i) b.style.opacity = clamp(s - (i - 1)).toFixed(3); });
    scenes.forEach(function (sc, i) {
      var w = clamp((0.7 - Math.abs(s - i)) / 0.35) * bt;
      sc.style.opacity = w > 0.01 ? 1 : 0; sc.style.visibility = w > 0.01 ? "visible" : "hidden";
      sc.style.pointerEvents = w > 0.6 ? "auto" : "none";
      for (var j = 0; j < sc.children.length; j++) {
        var t = ease(clamp(w * 1.5 - j * 0.18)), c = sc.children[j];
        c.style.opacity = t.toFixed(3); c.style.transform = "translateY(" + ((1 - t) * 34).toFixed(1) + "px)";
      }
      if (pls[i]) {
        pls[i].style.opacity = w.toFixed(3);
        pls[i].style.transform = "scale(" + (0.8 + 0.2 * w).toFixed(3) + ")";
        pls[i].firstElementChild.style.transform = "rotate(" + ((s - i) * 110).toFixed(1) + "deg)"; // planet spins as you scroll
      }
    });
    iCue.style.opacity = (1 - clamp(p / 0.04)).toFixed(3);
  }
  function tickIntro(now) {
    raf = 0; if (active !== "intro") return;
    boot = clamp((now - bootStart) / 1400);
    var tgt = prog(iTrack); iCur += (tgt - iCur) * 0.1; if (Math.abs(tgt - iCur) < 0.0004) iCur = tgt;
    drawIntro(iCur);
    if (!introDone && boot >= 1 && tgt >= 0.995 && iCur >= 0.99) { introDone = true; if (window.TN_FLOW.onIntroEnd) window.TN_FLOW.onIntroEnd(); return; }  // scroll finished → land on home
    if (iCur !== tgt || boot < 1) raf = requestAnimationFrame(tickIntro);
  }

  /* ---------- HOME (clouds tied to scroll) ---------- */
  var hTrack = $("#homeTrack"), hBg = $("#homeBg"), hCopy = $("#homeCopy"), cA = $("#cloudA"), cB = $("#cloudB"), hCue = $("#homeCue"), stage = $(".hstage");
  var hCur = 0;
  function drawHome(p) {
    var H = stage.clientHeight, a = cA.offsetHeight || 600;
    var ty = function (k, d) { return (0.55 * a - clamp(p * k + d) * (H + 0.9 * a)).toFixed(1); };
    cA.style.transform = "translate3d(0," + ty(1.05, 0) + "px,0)";
    cB.style.transform = "translate3d(0," + ty(1.18, 0.02) + "px,0) scaleX(-1)";
    hBg.style.transform = "translate3d(0," + (-p * 8).toFixed(2) + "%,0) scale(" + (1 + p * 0.1).toFixed(3) + ")";
    hBg.style.opacity = (1 - ease(clamp((p - 0.5) / 0.4))).toFixed(3);
    hCopy.style.opacity = (1 - clamp(p / 0.32)).toFixed(3);
    hCopy.style.transform = "translate3d(0," + (-p * 90).toFixed(1) + "px,0)";
    hCue.style.opacity = (1 - clamp(p / 0.05)).toFixed(3);
  }
  function tickHome() {
    raf = 0; if (active !== "site") return;
    var tgt = prog(hTrack); hCur += (tgt - hCur) * 0.14; if (Math.abs(tgt - hCur) < 0.0005) hCur = tgt;
    drawHome(hCur);
    if (hCur !== tgt) raf = requestAnimationFrame(tickHome);
  }
  function kick() {
    if (raf) return;
    raf = requestAnimationFrame(active === "intro" ? tickIntro : active === "site" ? tickHome : function () { raf = 0; });
  }
  window.addEventListener("scroll", kick, { passive: true });
  window.addEventListener("resize", kick);

  /* ---------- CESIUM ---------- */
  var wrap = $("#globeWrap"), gate = $("#globeGate"), rel = $("#globeRelease"), gState = $("#globeState"), gMsg = $("#globeMsg"), gRetry = $("#globeRetry");
  var viewer = null, loading = null, interacting = false;
  var BASE = "https://cdn.jsdelivr.net/npm/cesium@" + (CFG.CESIUM_VERSION || "1.132.0") + "/Build/Cesium/";

  function loadCesium() {
    if (window.Cesium) return Promise.resolve();
    if (loading) return loading;
    loading = new Promise(function (ok, bad) {
      window.CESIUM_BASE_URL = (CFG.CESIUM_BASE_URL || BASE);
      var l = document.createElement("link"); l.rel = "stylesheet"; l.href = window.CESIUM_BASE_URL + "Widgets/widgets.css"; document.head.appendChild(l);
      var s = document.createElement("script"); s.src = window.CESIUM_BASE_URL + "Cesium.js";
      s.onload = function () { window.Cesium ? ok() : bad(new Error("no Cesium")); }; s.onerror = function () { loading = null; s.remove(); bad(new Error("load")); };
      document.head.appendChild(s);
    });
    return loading;
  }
  function setState(key, err) {
    gState.classList.remove("is-done"); gMsg.setAttribute("data-i18n", key); gMsg.textContent = window.TN_I18N.t(key); gRetry.hidden = !err;
  }
  function setInteract(on) {
    interacting = on; gate.hidden = on || !viewer; rel.hidden = !on;
    if (viewer) viewer.scene.screenSpaceCameraController.enableInputs = on;
  }
  async function initGlobe() {
    if (viewer) return;
    setState("cmp.loading", false);
    try {
      await loadCesium();
      var C = window.Cesium, layer;
      if (CFG.CESIUM_ION_TOKEN) { C.Ion.defaultAccessToken = CFG.CESIUM_ION_TOKEN; layer = C.ImageryLayer.fromWorldImagery(); }
      else layer = new C.ImageryLayer(await C.TileMapServiceImageryProvider.fromUrl(C.buildModuleUrl("Assets/Textures/NaturalEarthII")));
      viewer = new C.Viewer("globe", {
        baseLayer: layer, baseLayerPicker: false, geocoder: false, homeButton: false, sceneModePicker: false, navigationHelpButton: false,
        animation: false, timeline: false, fullscreenButton: false, infoBox: false, selectionIndicator: false, requestRenderMode: true, maximumRenderTimeChange: Infinity
      });
      viewer.scene.skyAtmosphere.show = true; viewer.scene.globe.enableLighting = false;
      viewer.camera.setView({ destination: C.Cartesian3.fromDegrees(31, 26, 11500000) });
      viewer.scene.globe.tileLoadProgressEvent.addEventListener(function (n) { if (n === 0) gState.classList.add("is-done"); });
      setTimeout(function () { gState.classList.add("is-done"); }, 6000);
      setInteract(false);
    } catch (e) { viewer = null; setState("cmp.error", true); }
  }
  gate.addEventListener("click", function () { setInteract(true); });
  rel.addEventListener("click", function () { setInteract(false); });
  document.addEventListener("pointerdown", function (e) { if (interacting && !wrap.contains(e.target)) setInteract(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && interacting) setInteract(false); });
  gRetry.addEventListener("click", initGlobe);
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { io.disconnect(); initGlobe(); } }, { rootMargin: "600px" });
    io.observe(wrap);
  }
  document.addEventListener("tn:lang", function () { if (!gMsg.hidden && gMsg.getAttribute("data-i18n")) gMsg.textContent = window.TN_I18N.t(gMsg.getAttribute("data-i18n")); kick(); });

  /* animated scroll so the clouds visibly rise on the way to the map */
  function scrollToY(y, ms) {
    var y0 = window.pageYOffset, d = y - y0, t0 = performance.now();
    (function step(now) {
      var t = clamp((now - t0) / ms), e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      window.scrollTo(0, y0 + d * e); if (t < 1) requestAnimationFrame(step);
    })(t0);
  }

  window.TN_FLOW = {
    scrollToMap: function () { var el = $("#compare"); if (el) scrollToY(el.getBoundingClientRect().top + window.pageYOffset, 2400); },
    /* called whenever a screen is shown; intro always restarts from the beginning */
    activate: function (name) {
      active = name; if (raf) { cancelAnimationFrame(raf); raf = 0; }
      if (interacting) setInteract(false);
      if (name === "intro") { introDone = false; iCur = 0; boot = 0; bootStart = performance.now(); drawIntro(0); kick(); }
      if (name === "site") { hCur = 0; drawHome(0); kick(); }
    }
  };
})();
