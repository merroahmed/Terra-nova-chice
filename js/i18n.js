/* Terra Nova — English / Français / العربية */
(function () {
  var DICT = {
    en: {
      "doc.title": "Terra Nova",
      "nav.login": "Login", "nav.signup": "Sign up", "nav.logout": "Log out",
      "scroll": "Scroll",
      "hero.title": "Discover Earth’s|Hidden Worlds.",
      "hero.text": "Explore extraordinary places on Earth that mirror the landscapes of the Moon and Mars. Uncover the similarities, discover their scientific significance, and experience the wonders of planetary exploration — right here on Earth.",
      "hero.cta": "Start exploring",
      "auth.welcome": "Welcome",
      "auth.login.title": "Login", "auth.signup.title": "Sign up",
      "auth.name": "Username", "auth.email": "Email", "auth.password": "Password",
      "auth.forgot": "Forgot password?",
      "auth.login.btn": "Login", "auth.signup.btn": "Create account",
      "auth.noacct": "Don’t have an account?", "auth.signuplink": "Sign up",
      "auth.haveacct": "Already have an account?", "auth.loginlink": "Login",
      "msg.email": "Enter a valid email address.",
      "msg.pass": "Password must be at least 6 characters.",
      "msg.name": "Enter your name.",
      "msg.exists": "An account with this email already exists. Try logging in.",
      "msg.wrong": "Email or password is incorrect.",
      "msg.created": "Account created. Welcome aboard!",
      "msg.loggedin": "Logged in. Welcome back!",
      "msg.reset": "If an account exists for this email, reset instructions will be sent.",
      "nav.home": "Home",
      "nav.language": "Language",
      "nav.profile": "Profile",
      "auth.guest": "Continue as guest",
      "auth.or": "or",
      "intro.skip": "Skip",
      "intro.scroll": "Scroll down",
      "intro.enter": "Enter the site",
      "earth.k": "Earth — The Beginning",
      "earth.t": "Can Earth Help Us Explore Other Worlds?",
      "earth.p": "Earth is full of unique landscapes that may hold clues to understanding other planets. What if the answers to space exploration are closer than we think?",
      "mars.k": "Mars — The Challenge",
      "mars.t": "How Can We Prepare for Mars?",
      "mars.p": "Mars is a challenging world to explore. But some places on Earth share similar geological features, helping scientists study its environment and prepare for future missions.",
      "moon.k": "Moon — The Connection",
      "moon.t": "What Can Earth Teach Us About the Moon?",
      "moon.p": "From impact craters to volcanic landscapes, Earth offers natural examples that help us understand the Moon and its surface.",
      "analog.k": "ANALOG — The Solution",
      "analog.t": "Different Worlds. Connected Through Earth.",
      "analog.p": "Discover real places on Earth that help us understand the Moon and Mars. Explore their similarities and uncover the science behind them.",
      "analog.tag": "Explore Earth. Understand Space.",
      "cmp.k": "Comparison",
      "cmp.title": "One Earth. Many Worlds.",
      "cmp.sub": "Drag to rotate, scroll to zoom, and explore places on Earth that echo the Moon and Mars.",
      "cmp.activate": "Click to explore the globe",
      "cmp.release": "Back to page scroll",
      "cmp.loading": "Loading the globe…",
      "cmp.error": "The globe could not be loaded.",
      "cmp.retry": "Try again",
      "cmp.slotA": "Earth ↔ Mars",
      "cmp.slotB": "Earth ↔ Moon",
      "cmp.soon": "Comparison tools and locations will appear here.",
      "profile.title": "Your profile",
      "profile.name": "Username",
      "profile.email": "Email",
      "profile.guest": "Guest",
      "profile.guesttext": "You’re exploring as a guest. Log in or sign up to have a profile.",
      "profile.login": "Login / Sign up",
      "profile.logout": "Log out",
      "nav.about": "About", "nav.map": "Map",
      "video.scroll": "Scroll to begin",
      "profile.photo": "Upload photo",
      "about.k": "About Terra Nova",
      "about.title": "Three Worlds. One Story.",
      "about.sub": "Terra Nova connects places on Earth with the landscapes of the Moon and Mars, so we can understand other worlds by studying our own.",
      "about.earth.t": "Earth", "about.earth.p": "Our home and the living laboratory. Deserts, volcanoes and craters here mirror terrain found on other worlds.",
      "about.mars.t": "Mars", "about.mars.p": "The red planet. Its dry valleys, dust and ancient riverbeds have close cousins on Earth that scientists use to prepare for missions.",
      "about.moon.t": "Moon", "about.moon.p": "Our nearest neighbour. Impact craters and volcanic plains can be studied on Earth to better understand its surface."
    },
    fr: {
      "doc.title": "Terra Nova",
      "nav.login": "Connexion", "nav.signup": "Inscription", "nav.logout": "Déconnexion",
      "scroll": "Défiler",
      "hero.title": "Découvrez les mondes|cachés de la Terre.",
      "hero.text": "Explorez des lieux extraordinaires sur Terre qui reflètent les paysages de la Lune et de Mars. Découvrez leurs similitudes, comprenez leur importance scientifique et vivez les merveilles de l’exploration planétaire, ici même sur Terre.",
      "hero.cta": "Commencer l’exploration",
      "auth.welcome": "Bienvenue",
      "auth.login.title": "Connexion", "auth.signup.title": "Inscription",
      "auth.name": "Nom d’utilisateur", "auth.email": "E-mail", "auth.password": "Mot de passe",
      "auth.forgot": "Mot de passe oublié ?",
      "auth.login.btn": "Se connecter", "auth.signup.btn": "Créer un compte",
      "auth.noacct": "Vous n’avez pas de compte ?", "auth.signuplink": "S’inscrire",
      "auth.haveacct": "Vous avez déjà un compte ?", "auth.loginlink": "Se connecter",
      "msg.email": "Saisissez une adresse e-mail valide.",
      "msg.pass": "Le mot de passe doit contenir au moins 6 caractères.",
      "msg.name": "Saisissez votre nom.",
      "msg.exists": "Un compte existe déjà avec cet e-mail. Essayez de vous connecter.",
      "msg.wrong": "E-mail ou mot de passe incorrect.",
      "msg.created": "Compte créé. Bienvenue à bord !",
      "msg.loggedin": "Connecté. Content de vous revoir !",
      "msg.reset": "Si un compte existe pour cet e-mail, les instructions de réinitialisation seront envoyées.",
      "nav.home": "Accueil",
      "nav.language": "Langue",
      "nav.profile": "Profil",
      "auth.guest": "Continuer en tant qu’invité",
      "auth.or": "ou",
      "intro.skip": "Passer",
      "intro.scroll": "Faites défiler",
      "intro.enter": "Entrer sur le site",
      "earth.k": "La Terre — Le commencement",
      "earth.t": "La Terre peut-elle nous aider à explorer d’autres mondes ?",
      "earth.p": "La Terre regorge de paysages uniques qui peuvent receler des indices pour comprendre les autres planètes. Et si les réponses à l’exploration spatiale étaient plus proches qu’on ne le pense ?",
      "mars.k": "Mars — Le défi",
      "mars.t": "Comment se préparer à Mars ?",
      "mars.p": "Mars est un monde difficile à explorer. Mais certains endroits sur Terre partagent des caractéristiques géologiques similaires, ce qui aide les scientifiques à étudier son environnement et à préparer les futures missions.",
      "moon.k": "La Lune — Le lien",
      "moon.t": "Que peut nous apprendre la Terre sur la Lune ?",
      "moon.p": "Des cratères d’impact aux paysages volcaniques, la Terre offre des exemples naturels qui nous aident à comprendre la Lune et sa surface.",
      "analog.k": "ANALOG — La solution",
      "analog.t": "Des mondes différents. Reliés par la Terre.",
      "analog.p": "Découvrez de vrais lieux sur Terre qui nous aident à comprendre la Lune et Mars. Explorez leurs similitudes et dévoilez la science qui se cache derrière.",
      "analog.tag": "Explorez la Terre. Comprenez l’espace.",
      "cmp.k": "Comparaison",
      "cmp.title": "Une Terre. Plusieurs mondes.",
      "cmp.sub": "Faites glisser pour tourner, utilisez la molette pour zoomer et explorez des lieux sur Terre qui évoquent la Lune et Mars.",
      "cmp.activate": "Cliquez pour explorer le globe",
      "cmp.release": "Retour au défilement",
      "cmp.loading": "Chargement du globe…",
      "cmp.error": "Le globe n’a pas pu être chargé.",
      "cmp.retry": "Réessayer",
      "cmp.slotA": "Terre ↔ Mars",
      "cmp.slotB": "Terre ↔ Lune",
      "cmp.soon": "Les outils de comparaison et les lieux apparaîtront ici.",
      "profile.title": "Votre profil",
      "profile.name": "Nom d’utilisateur",
      "profile.email": "E-mail",
      "profile.guest": "Invité",
      "profile.guesttext": "Vous explorez en tant qu’invité. Connectez-vous ou inscrivez-vous pour avoir un profil.",
      "profile.login": "Connexion / Inscription",
      "profile.logout": "Déconnexion",
      "nav.about": "À propos", "nav.map": "Carte",
      "video.scroll": "Faites défiler pour commencer",
      "profile.photo": "Ajouter une photo",
      "about.k": "À propos de Terra Nova",
      "about.title": "Trois mondes. Une seule histoire.",
      "about.sub": "Terra Nova relie des lieux de la Terre aux paysages de la Lune et de Mars, pour comprendre d’autres mondes en étudiant le nôtre.",
      "about.earth.t": "La Terre", "about.earth.p": "Notre foyer et notre laboratoire vivant. Déserts, volcans et cratères y ressemblent à des terrains d’autres mondes.",
      "about.mars.t": "Mars", "about.mars.p": "La planète rouge. Ses vallées sèches, sa poussière et ses anciens lits de rivières ont des cousins sur Terre qui aident à préparer les missions.",
      "about.moon.t": "La Lune", "about.moon.p": "Notre plus proche voisine. Cratères d’impact et plaines volcaniques peuvent être étudiés sur Terre pour mieux comprendre sa surface."
    },
    ar: {
      "doc.title": "تيرا نوفا",
      "nav.login": "تسجيل الدخول", "nav.signup": "إنشاء حساب", "nav.logout": "تسجيل الخروج",
      "scroll": "مرّر للأسفل",
      "hero.title": "اكتشف عوالم|الأرض الخفية.",
      "hero.text": "استكشف أماكن استثنائية على الأرض تحاكي تضاريس القمر والمريخ. اكتشف أوجه التشابه، وتعرّف على أهميتها العلمية، وعِش عجائب استكشاف الكواكب هنا على كوكب الأرض.",
      "hero.cta": "ابدأ الاستكشاف",
      "auth.welcome": "أهلاً بك",
      "auth.login.title": "تسجيل الدخول", "auth.signup.title": "إنشاء حساب",
      "auth.name": "اسم المستخدم", "auth.email": "البريد الإلكتروني", "auth.password": "كلمة المرور",
      "auth.forgot": "نسيت كلمة المرور؟",
      "auth.login.btn": "دخول", "auth.signup.btn": "إنشاء الحساب",
      "auth.noacct": "ليس لديك حساب؟", "auth.signuplink": "أنشئ حساباً",
      "auth.haveacct": "لديك حساب بالفعل؟", "auth.loginlink": "تسجيل الدخول",
      "msg.email": "أدخل بريداً إلكترونياً صحيحاً.",
      "msg.pass": "يجب ألا تقل كلمة المرور عن 6 أحرف.",
      "msg.name": "أدخل اسمك.",
      "msg.exists": "يوجد حساب بهذا البريد بالفعل. جرّب تسجيل الدخول.",
      "msg.wrong": "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
      "msg.created": "تم إنشاء الحساب. أهلاً بك!",
      "msg.loggedin": "تم تسجيل الدخول. مرحباً بعودتك!",
      "msg.reset": "إذا كان هناك حساب بهذا البريد، فستصلك تعليمات إعادة التعيين.",
      "nav.home": "الرئيسية",
      "nav.language": "اللغة",
      "nav.profile": "الملف الشخصي",
      "auth.guest": "المتابعة كزائر",
      "auth.or": "أو",
      "intro.skip": "تخطّي",
      "intro.scroll": "مرّر للأسفل",
      "intro.enter": "ادخل الموقع",
      "earth.k": "الأرض — البداية",
      "earth.t": "هل تستطيع الأرض مساعدتنا على استكشاف عوالم أخرى؟",
      "earth.p": "الأرض مليئة بتضاريس فريدة قد تحمل أدلة لفهم الكواكب الأخرى. ماذا لو كانت إجابات استكشاف الفضاء أقرب مما نظن؟",
      "mars.k": "المريخ — التحدي",
      "mars.t": "كيف نستعد للمريخ؟",
      "mars.p": "المريخ عالم صعب الاستكشاف. لكن بعض الأماكن على الأرض تشترك معه في سمات جيولوجية مشابهة، مما يساعد العلماء على دراسة بيئته والاستعداد للمهام المستقبلية.",
      "moon.k": "القمر — الصلة",
      "moon.t": "ماذا تعلّمنا الأرض عن القمر؟",
      "moon.p": "من فوهات الاصطدام إلى التضاريس البركانية، تقدّم الأرض أمثلة طبيعية تساعدنا على فهم القمر وسطحه.",
      "analog.k": "أنالوج — الحل",
      "analog.t": "عوالم مختلفة. تربطها الأرض.",
      "analog.p": "اكتشف أماكن حقيقية على الأرض تساعدنا على فهم القمر والمريخ. استكشف أوجه التشابه واكتشف العلم الكامن وراءها.",
      "analog.tag": "استكشف الأرض. افهم الفضاء.",
      "cmp.k": "المقارنة",
      "cmp.title": "أرض واحدة. عوالم كثيرة.",
      "cmp.sub": "اسحب للتدوير، وحرّك العجلة للتكبير، واستكشف أماكن على الأرض تحاكي القمر والمريخ.",
      "cmp.activate": "اضغط لاستكشاف الكرة الأرضية",
      "cmp.release": "العودة لتمرير الصفحة",
      "cmp.loading": "جارٍ تحميل الكرة الأرضية…",
      "cmp.error": "تعذّر تحميل الكرة الأرضية.",
      "cmp.retry": "إعادة المحاولة",
      "cmp.slotA": "الأرض ↔ المريخ",
      "cmp.slotB": "الأرض ↔ القمر",
      "cmp.soon": "ستظهر هنا أدوات المقارنة والمواقع.",
      "profile.title": "ملفك الشخصي",
      "profile.name": "اسم المستخدم",
      "profile.email": "البريد الإلكتروني",
      "profile.guest": "زائر",
      "profile.guesttext": "أنت تتصفح كزائر. سجّل الدخول أو أنشئ حساباً لتحصل على ملف شخصي.",
      "profile.login": "تسجيل الدخول / إنشاء حساب",
      "profile.logout": "تسجيل الخروج",
      "nav.about": "من نحن", "nav.map": "الخريطة",
      "video.scroll": "مرّر للأسفل للبدء",
      "profile.photo": "رفع صورة",
      "about.k": "عن تيرا نوفا",
      "about.title": "ثلاثة عوالم. قصة واحدة.",
      "about.sub": "تربط تيرا نوفا أماكن على الأرض بتضاريس القمر والمريخ، لنفهم العوالم الأخرى من خلال دراسة عالمنا.",
      "about.earth.t": "الأرض", "about.earth.p": "موطننا ومختبرنا الحي. الصحاري والبراكين والفوهات هنا تشبه تضاريس موجودة في عوالم أخرى.",
      "about.mars.t": "المريخ", "about.mars.p": "الكوكب الأحمر. لوديانه الجافة وغباره ومجاري أنهاره القديمة أقارب على الأرض يستخدمها العلماء للتحضير للمهمات.",
      "about.moon.t": "القمر", "about.moon.p": "أقرب جيراننا. يمكن دراسة فوهات الاصطدام والسهول البركانية على الأرض لفهم سطحه بشكل أفضل."
    }
  };
  var CODES = { en: "EN", fr: "FR", ar: "AR" };
  var current = "en";

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }

  function buildLines(el, text) {
    el.textContent = "";
    text.split("|").forEach(function (part, i, all) {
      var line = document.createElement("span");
      line.className = "line" + (i === all.length - 1 ? " line--accent" : "");
      var inner = document.createElement("span");
      inner.textContent = part;
      line.appendChild(inner);
      el.appendChild(line);
    });
  }

  function apply(lang) {
    if (!DICT[lang]) lang = "en";
    current = lang;
    var root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    var d = DICT[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) { var v = d[el.getAttribute("data-i18n")]; if (v) el.textContent = v; });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { var v = d[el.getAttribute("data-i18n-ph")]; if (v) { el.placeholder = v; el.setAttribute("aria-label", v); } });
    document.querySelectorAll("[data-i18n-lines]").forEach(function (el) { var v = d[el.getAttribute("data-i18n-lines")]; if (v) buildLines(el, v); });
    document.title = d["doc.title"];
    var code = document.getElementById("langCode"); if (code) code.textContent = CODES[lang];
    document.querySelectorAll("#langMenu [data-lang]").forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-lang") === lang ? "true" : "false"); });
    store("tn_lang", lang);
    document.dispatchEvent(new CustomEvent("tn:lang", { detail: lang }));
  }

  function initial() {
    var saved = store("tn_lang");
    if (saved && DICT[saved]) return saved;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return DICT[nav] ? nav : "en";
  }

  window.TN_I18N = {
    t: function (k) { return (DICT[current] && DICT[current][k]) || DICT.en[k] || k; },
    set: apply,
    get: function () { return current; },
    init: function () { apply(initial()); }
  };
})();
