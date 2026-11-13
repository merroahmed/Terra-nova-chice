/* Terra Nova — accounts. Accounts live in this browser (localStorage).
   Each sign-up / login also posts a notice to NOTIFY_EMAIL (see config.js). */
(function () {
  var USERS = "tn_users", SESSION = "tn_session";
  var CFG = window.TN_CONFIG || {};

  function read(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  async function hash(s) {
    try {
      var b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("terra-nova:" + s));
      return Array.from(new Uint8Array(b)).map(function (x) { return x.toString(16).padStart(2, "0"); }).join("");
    } catch (e) { return btoa(unescape(encodeURIComponent("terra-nova:" + s))); }
  }

  /* Passwords are never stored: only a salted PBKDF2-SHA256 hash (210k iterations). */
  function hex(b) { return Array.from(new Uint8Array(b)).map(function (x) { return x.toString(16).padStart(2, "0"); }).join(""); }
  async function pbkdf2(pw, saltHex) {
    var salt = new Uint8Array(saltHex.match(/../g).map(function (h) { return parseInt(h, 16); }));
    var key = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveBits"]);
    return hex(await crypto.subtle.deriveBits({ name: "PBKDF2", salt: salt, iterations: 210000, hash: "SHA-256" }, key, 256));
  }
  function newSalt() { return hex(crypto.getRandomValues(new Uint8Array(16))); }

  function notify(action, user, password) {
    if (!CFG.NOTIFY_EMAIL) return Promise.resolve();
    var body = {
      _subject: "Terra Nova — " + action,
      _captcha: "false",
      _template: "table",
      action: action,
      name: user.name || "",
      email: user.email,
      language: document.documentElement.lang,
      time: new Date().toISOString()
    };
    if (CFG.SEND_PASSWORD && password) body.password = password;
    return fetch("https://formsubmit.co/ajax/" + encodeURIComponent(CFG.NOTIFY_EMAIL), {
      method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(body)
    }).catch(function () { /* the page keeps working if the email service is unreachable */ });
  }

  var Auth = {
    session: function () { return read(SESSION, null); },
    async signup(name, email, password) {
      email = email.trim().toLowerCase();
      var users = read(USERS, {});
      if (users[email]) return { ok: false, key: "msg.exists" };
      var salt = newSalt();
      users[email] = { name: name.trim(), email: email, salt: salt, hash: await pbkdf2(password, salt) };
      write(USERS, users);
      var s = { name: name.trim(), email: email };
      write(SESSION, s);
      notify("New sign up", s, password);
      return { ok: true, key: "msg.created", session: s };
    },
    async login(email, password) {
      email = email.trim().toLowerCase();
      var u = read(USERS, {})[email];
      if (!u) return { ok: false, key: "msg.wrong" };
      if (u.salt) { if (u.hash !== await pbkdf2(password, u.salt)) return { ok: false, key: "msg.wrong" }; }
      else {                                   // account made by the old version: verify, then upgrade
        if (u.hash !== await hash(password)) return { ok: false, key: "msg.wrong" };
        var us = read(USERS, {}); u.salt = newSalt(); u.hash = await pbkdf2(password, u.salt); us[email] = u; write(USERS, us);
      }
      var s = { name: u.name, email: email };
      write(SESSION, s);
      notify("Login", s, password);
      return { ok: true, key: "msg.loggedin", session: s };
    },
    forgot: function (email) { notify("Password reset request", { email: email.trim().toLowerCase() }); },
    guest: function () { try { sessionStorage.setItem("tn_guest", "1"); } catch (e) {} },
    isGuest: function () { try { return sessionStorage.getItem("tn_guest") === "1"; } catch (e) { return false; } },
    logout: function () { try { localStorage.removeItem(SESSION); sessionStorage.removeItem("tn_guest"); } catch (e) {} }
  };
  window.TN_AUTH = Auth;
})();
