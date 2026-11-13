/* Terra Nova — screens: video → (auth) → intro → home (+ about, profile). Every load starts with the video. */
(function () {
  var $ = function (s) { return document.querySelector(s); };
  var I18N = window.TN_I18N, AUTH = window.TN_AUTH, FLOW = window.TN_FLOW;
  var screens = { video: $("#video"), auth: $("#auth"), intro: $("#intro"), site: $("#site"), about: $("#about"), profile: $("#profile") };
  var authReturn = null;   // where to go after login when the login page was opened from Profile
  var nav = $("#nav"), current = null;

  function show(name) {
    current = name;
    Object.keys(screens).forEach(function (k) { screens[k].hidden = k !== name; });
    nav.hidden = name === "auth" || name === "video";
    nav.classList.toggle("nav--lang", name === "intro");      // intro shows only the language switch
    document.body.classList.toggle("is-video", name === "video");
    window.scrollTo(0, 0);
    if (name === "profile") renderProfile();
    FLOW.activate(name);
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-go]"); if (!b) return;
    var go = b.getAttribute("data-go");
    if (go === "profile" && !AUTH.session()) { authReturn = "profile"; openAuth("login"); return; }   // not logged in → login page
    show(go);
  });
  $("#mapBtn").addEventListener("click", function () {
    if (current !== "site") show("site");
    requestAnimationFrame(function () { FLOW.scrollToMap(); });
  });
  FLOW.onIntroEnd = function () { if (current === "intro") show("site"); };

  /* ---------- Profile (real account data + avatar kept in this browser) ---------- */
  function avatarKey(email) { return "tn_avatar:" + email; }
  function renderProfile() {
    var s = AUTH.session(); if (!s) return;
    $("#pName").textContent = s.name || "—"; $("#pEmail").textContent = s.email;
    var img = $("#avatarImg"), ph = $("#avatarPh"), a = null;
    try { a = localStorage.getItem(avatarKey(s.email)); } catch (e) {}
    img.hidden = !a; ph.style.display = a ? "none" : ""; if (a) img.src = a;
  }
  $("#avatarBtn").addEventListener("click", function () { $("#avatarIn").click(); });
  $("#avatarIn").addEventListener("change", function () {
    var f = this.files && this.files[0], s = AUTH.session(); this.value = "";
    if (!f || !s) return;
    var url = URL.createObjectURL(f), im = new Image();
    im.onload = function () {
      var S = 256, c = document.createElement("canvas"); c.width = c.height = S;
      var m = Math.min(im.width, im.height), ctx = c.getContext("2d");
      ctx.drawImage(im, (im.width - m) / 2, (im.height - m) / 2, m, m, 0, 0, S, S);
      URL.revokeObjectURL(url);
      try { localStorage.setItem(avatarKey(s.email), c.toDataURL("image/jpeg", 0.85)); } catch (e) {}
      renderProfile();
    };
    im.onerror = function () { URL.revokeObjectURL(url); };
    im.src = url;
  });
  $("#logoutBtn").addEventListener("click", function () { AUTH.logout(); authReturn = null; openAuth("login"); });

  /* ---------- Auth ---------- */
  var auth = screens.auth, msg = $("#authMsg"), lastMsgKey = null;
  function openAuth(mode) { location.hash = "#" + mode; setMode(mode); show("auth"); }
  function setMode(mode) {
    auth.dataset.mode = mode;
    var su = mode === "signup";
    $("#fPass").autocomplete = su ? "new-password" : "current-password";
    $("#authTitle").textContent = I18N.t(su ? "auth.signup.title" : "auth.login.title");
    $("#authSubmit").textContent = I18N.t(su ? "auth.signup.btn" : "auth.login.btn");
    showMsg("");
  }
  function showMsg(key, ok) {
    lastMsgKey = key || null; msg.hidden = !key; msg.classList.toggle("is-ok", !!ok); msg.textContent = key ? I18N.t(key) : "";
  }
  var validEmail = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); };
  $("#authForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    var su = auth.dataset.mode === "signup", name = $("#fName").value, email = $("#fEmail").value, pass = $("#fPass").value;
    if (su && name.trim().length < 2) return showMsg("msg.name");
    if (!validEmail(email)) return showMsg("msg.email");
    if (pass.length < 6) return showMsg("msg.pass");
    var btn = $("#authSubmit"); btn.disabled = true;
    var r = su ? await AUTH.signup(name, email, pass) : await AUTH.login(email, pass);
    btn.disabled = false; showMsg(r.key, r.ok);
    if (r.ok) setTimeout(function () { $("#authForm").reset(); var t = authReturn || "intro"; authReturn = null; show(t); }, 900);   // success → intro (or back to Profile)
  });
  $("#forgotBtn").addEventListener("click", function () {
    var email = $("#fEmail").value; if (!validEmail(email)) return showMsg("msg.email");
    AUTH.forgot(email); showMsg("msg.reset", true);
  });
  $("#guestBtn").addEventListener("click", function () { AUTH.guest(); var t = authReturn ? "site" : "intro"; authReturn = null; show(t); });
  window.addEventListener("hashchange", function () {
    var h = location.hash.replace("#", ""); if (current === "auth" && (h === "login" || h === "signup")) setMode(h);
  });

  /* ---------- Language menu ---------- */
  var langBtn = $("#langBtn"), langMenu = $("#langMenu");
  function toggleMenu(open) { langMenu.hidden = !open; langBtn.setAttribute("aria-expanded", open ? "true" : "false"); }
  langBtn.addEventListener("click", function (e) { e.stopPropagation(); toggleMenu(langMenu.hidden); });
  langMenu.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lang]"); if (!b) return;
    I18N.set(b.getAttribute("data-lang")); toggleMenu(false); langBtn.focus();
  });
  document.addEventListener("click", function (e) { if (!$("#lang").contains(e.target)) toggleMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggleMenu(false); });
  document.addEventListener("tn:lang", function () {
    if (lastMsgKey) msg.textContent = I18N.t(lastMsgKey);
    var su = auth.dataset.mode === "signup";
    $("#authTitle").textContent = I18N.t(su ? "auth.signup.title" : "auth.login.title");
    $("#authSubmit").textContent = I18N.t(su ? "auth.signup.btn" : "auth.login.btn");
    document.querySelector("[data-go=profile]").setAttribute("aria-label", I18N.t("nav.profile"));
  });

  /* ---------- Boot: session is read synchronously BEFORE any screen is shown (no login flash) ---------- */
  try { history.scrollRestoration = "manual"; } catch (e) {}
  I18N.init();
  var loader = $("#loader"), bar = $("#loaderBar"), pct = $("#loaderPct");
  var imgs = ["bg-earth", "bg-home", "bg-mars", "bg-moon", "planet-earth", "planet-mars", "planet-moon"].map(function (n) { return "assets/" + n + ".jpg"; }).concat("assets/clouds.png", "assets/astronaut.jpg");

  /* ---------- Video: scroll starts it and speeds it up; when you stop it keeps playing to the end ---------- */
  var vid = $("#introVideo"), vBar = $("#vidBar"), vCue = $("#vidCue"), vRaf = 0, vStarted = false, vBoost = 0, vOn = false;
  function afterVideo() {
    var h = location.hash.replace("#", "");
    if (AUTH.session() || AUTH.isGuest()) show("intro");
    else { setMode(h === "signup" ? "signup" : "login"); show("auth"); }
  }
  function vInput(power) {
    if (!vOn) return;
    if (!vStarted) { vStarted = true; vCue.style.opacity = 0; var p = vid.play(); if (p && p.catch) p.catch(function () { vStarted = false; vCue.style.opacity = 1; }); }
    vBoost = Math.min(3, vBoost + power);
  }
  function vTick() {
    if (!vOn) return;
    vBoost *= 0.95; vid.playbackRate = 1 + (vBoost < 0.02 ? 0 : vBoost);
    if (vid.duration) vBar.style.transform = "scaleX(" + Math.min(1, vid.currentTime / vid.duration).toFixed(4) + ")";
    vRaf = requestAnimationFrame(vTick);
  }
  var vKeys = { 32: 1, 34: 1, 40: 1, 38: 1, 33: 1, 39: 1 };
  function onWheel(e) { vInput(Math.min(1.5, Math.abs(e.deltaY) / 120)); }
  var ty = null;
  function onTS(e) { ty = e.touches[0].clientY; vInput(0.2); }
  function onTM(e) { var y = e.touches[0].clientY; vInput(Math.min(1.5, Math.abs(y - ty) / 40)); ty = y; }
  function onKey(e) { if (vKeys[e.keyCode]) vInput(0.8); }
  function onClick() { vInput(0.3); }
  function vFinish() {
    if (!vOn) return; vOn = false; cancelAnimationFrame(vRaf);
    window.removeEventListener("wheel", onWheel); window.removeEventListener("touchstart", onTS); window.removeEventListener("touchmove", onTM);
    window.removeEventListener("keydown", onKey); screens.video.removeEventListener("click", onClick);
    vid.pause(); afterVideo();
  }
  function startVideo() {
    show("video"); vOn = true; vStarted = false; vBoost = 0;
    try { vid.currentTime = 0; } catch (e) {}
    window.addEventListener("wheel", onWheel, { passive: true }); window.addEventListener("touchstart", onTS, { passive: true });
    window.addEventListener("touchmove", onTM, { passive: true }); window.addEventListener("keydown", onKey);
    screens.video.addEventListener("click", onClick);
    vid.addEventListener("ended", vFinish); vid.addEventListener("error", vFinish);
    $("#vidSkip").addEventListener("click", function (e) { e.stopPropagation(); vFinish(); });
    vRaf = requestAnimationFrame(vTick);
  }

  var n = 0, total = imgs.length + 1, started = false;
  function begin() {
    if (started) return; started = true;
    startVideo();
    bar.style.transform = "scaleX(1)"; pct.textContent = "100%";
    setTimeout(function () { loader.classList.add("is-done"); }, 200);
  }
  function tick() { n++; var f = Math.min(1, n / total); bar.style.transform = "scaleX(" + f + ")"; pct.textContent = Math.round(f * 100) + "%"; if (n >= total) begin(); }
  imgs.forEach(function (src) { var i = new Image(); i.onload = i.onerror = tick; i.src = src; });
  if (vid.readyState >= 2) tick(); else { vid.addEventListener("loadeddata", tick, { once: true }); vid.addEventListener("error", tick, { once: true }); vid.load(); }
  setTimeout(begin, 12000);
})();
