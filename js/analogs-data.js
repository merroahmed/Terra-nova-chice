/* Terra Nova — analog sites data (from the two PDFs: "Earth's locations that analog the Moon / Mars").
   Every text is [English, العربية, Français]. Links and images are real, taken from the official pages
   (NASA, USGS, NPS, ESA, DLR, UNESCO, Mars Society, Vatnajökull National Park). */
(function () {
  function L(kind, url, en, ar, fr) { return { kind: kind, url: url, t: [en, ar, fr] }; }
  var NASA_ALSJ = "https://www.nasa.gov/wp-content/uploads/static/history/alsj/AstronautGeologyTraining.pdf";
  var NASA_ANALOGS = "https://science.nasa.gov/solar-system/planetary-analogs/";

  window.TN_ANALOGS = {
    tags: {
      basalt:  ["Basalt / volcanic rock", "بازلت / صخور بركانية", "Basalte / roche volcanique"],
      tubes:   ["Lava tubes & caves", "أنابيب حمم وكهوف", "Tunnels de lave & grottes"],
      craters: ["Craters & calderas", "فوهات وكالديرات", "Cratères & caldeiras"],
      regolith:["Loose regolith / cinders", "ريغوليث / رماد مفكك", "Régolithe / cendres meubles"],
      ice:     ["Ice, snow & permafrost", "جليد وتربة دائمة التجمّد", "Glace, neige & pergélisol"],
      hydro:   ["Water–heat interaction", "تفاعل الماء مع الحرارة", "Interaction eau–chaleur"],
      red:     ["Iron-oxide red terrain", "تضاريس حمراء (أكاسيد الحديد)", "Terrain rouge (oxydes de fer)"],
      salts:   ["Salts, sulfates & clays", "أملاح وكبريتات وطين", "Sels, sulfates & argiles"],
      arid:    ["Extreme dryness", "جفاف شديد", "Aridité extrême"],
      layers:  ["Layered sedimentary rock", "صخور رسوبية متطبّقة", "Roches sédimentaires stratifiées"],
      built:   ["Engineered / simulated", "بيئة مُصنَّعة / محاكاة", "Environnement construit / simulé"]
    },

    sites: [
      /* ───────────── MOON ───────────── */
      {
        id: "lavabeds", worlds: ["moon"], lat: 41.71, lon: -121.51, alt: 1800000, type: "natural",
        img: { src: "https://science.nasa.gov/wp-content/uploads/2023/11/lavabedsnikkiwhelley.jpg?w=1000", local: "assets/analogs/lavabeds.jpg",
               credit: "NASA/UMD/Nikki Whelley" },
        name: ["Lava Beds National Monument", "نصب لافا بيدز الوطني", "Monument national de Lava Beds"],
        place: ["California, USA", "كاليفورنيا، الولايات المتحدة", "Californie, États-Unis"],
        desc: ["A rugged volcanic landscape on the northern slopes of Medicine Lake Volcano, one of the largest shield volcanoes in its range. Sharp black-and-grey basalt fields, volcanic vents and cinder cones sit above the largest concentration of lava tubes in North America.",
               "منظر بركاني وعر على المنحدرات الشمالية لبركان ميديسين ليك، أحد أكبر البراكين الدرعية في سلسلته. حقول بازلت سوداء ورمادية حادّة وفوهات بركانية ومخاريط ركامية، وتحتها أكبر تجمّع لأنابيب الحمم في أمريكا الشمالية.",
               "Un paysage volcanique accidenté sur les flancs nord du volcan Medicine Lake, l’un des plus grands volcans boucliers de sa chaîne. Champs de basalte noir et gris, évents et cônes de cendres surplombent la plus grande concentration de tunnels de lave d’Amérique du Nord."],
        why: ["Its basalt is the same type of rock that forms the dark lunar maria, the fragmented volcanic soil mimics lunar dust, and its caves and tunnels formed through the same processes that created the tunnels hidden beneath the Moon’s surface.",
              "صخوره البازلتية من النوع نفسه الذي يكوّن «البحار» القمرية المظلمة، وتربته البركانية المفتّتة تحاكي غبار القمر، وكهوفه وأنفاقه تشكّلت بالعمليات نفسها التي أنشأت الأنفاق المخبّأة تحت سطح القمر.",
              "Son basalte est le même type de roche que celui des mers lunaires sombres, son sol volcanique fragmenté imite la poussière lunaire, et ses grottes se sont formées par les mêmes processus que les tunnels cachés sous la surface de la Lune."],
        rock: ["Basalt, basaltic andesite and some andesite", "بازلت وأنديزيت بازلتي وبعض الأنديزيت", "Basalte, andésite basaltique et un peu d’andésite"],
        setting: ["North-eastern California, ~50 km (31 mi) south of Klamath Falls, Oregon. Recent, well-preserved volcanic terrain; most flows came from spatter and cinder cones.",
                  "شمال شرق كاليفورنيا، على بعد نحو 50 كم (31 ميلاً) جنوب كلاماث فولز في أوريغون. تضاريس بركانية حديثة ومحفوظة جيداً؛ معظم التدفقات خرجت من مخاريط الرذاذ والركام.",
                  "Nord-est de la Californie, à ~50 km (31 mi) au sud de Klamath Falls (Oregon). Terrain volcanique récent et bien conservé ; la plupart des coulées proviennent de cônes de scories et de cendres."],
        facts: { elev: "1,200–1,600 m", size: ["Mammoth Crater Basalt Unit ≈ 250 km² · ≈ 5 km³", "وحدة بازلت فوهة ماموث ≈ 250 كم² · ≈ 5 كم³", "Unité basaltique de Mammoth Crater ≈ 250 km² · ≈ 5 km³"],
                 when: ["Established 1925", "تأسّس عام 1925", "Créé en 1925"] },
        water: ["Where Mammoth Crater lava met the shallow waters of ancient Tule Lake it formed pillow lavas. Lava tubes that emptied straight into the water built littoral cones at Hospital Rock, and much older pillow lavas at Gillem Bluff record an earlier, perhaps deeper, version of the lake.",
                "حين التقت حمم فوهة ماموث بمياه بحيرة تول القديمة الضحلة تشكّلت الحمم الوسادية. وأنابيب الحمم التي صبّت في الماء مباشرةً بنت مخاريط شاطئية عند هوسبيتال روك، بينما تسجّل حمم وسادية أقدم بكثير عند جيليم بلاف نسخة أسبق، وربما أعمق، من البحيرة.",
                "Lorsque la lave de Mammoth Crater a rencontré les eaux peu profondes de l’ancien lac Tule, elle a formé des laves en coussins. Des tunnels se vidant directement dans l’eau ont bâti des cônes littoraux à Hospital Rock, et des laves en coussins bien plus anciennes à Gillem Bluff témoignent d’un lac antérieur, peut-être plus profond."],
        notes: [
          ["Mammoth Crater Basalt Unit: the monument’s largest — ≈ 5 km³ over ≈ 250 km², reaching up to 25 km from its source and fed by ≈ 12 lava tubes.", "وحدة بازلت فوهة ماموث: الأكبر في النصب — نحو 5 كم³ على مساحة 250 كم²، تمتد حتى 25 كم من مصدرها وتغذّيها نحو 12 أنبوب حمم.", "Unité basaltique de Mammoth Crater : la plus vaste du monument — ≈ 5 km³ sur ≈ 250 km², jusqu’à 25 km de sa source, alimentée par ≈ 12 tunnels de lave."],
          ["Erupted in under 100 years (based on consistent paleomagnetic orientation) from several vents, including Mammoth and Modoc craters.", "ثارت خلال أقل من 100 عام (استناداً إلى اتجاه مغناطيسي قديم متّسق) من عدة فوهات منها ماموث ومودوك.", "Mise en place en moins de 100 ans (orientation paléomagnétique constante) depuis plusieurs évents, dont Mammoth et Modoc."],
          ["Hundreds of lava-tube caves, plus cinder/spatter cones, pillow lavas, littoral cones and cliffs.", "مئات من كهوف أنابيب الحمم، إضافةً إلى مخاريط الركام والرذاذ وحمم وسادية ومخاريط شاطئية ومنحدرات.", "Des centaines de grottes de tunnels de lave, des cônes de cendres et de scories, des laves en coussins, des cônes littoraux et des falaises."],
          ["NASA teams map its lava tubes and have driven a cave rover into Valentine Cave here as a Moon/Mars analog test.", "تقوم فرق ناسا برسم خرائط أنابيب الحمم هنا، وقد أدخلت مركبة كهوف إلى كهف فالنتاين كاختبار محاكاة للقمر والمريخ.", "Des équipes de la NASA y cartographient les tunnels de lave et ont testé un rover de grotte dans Valentine Cave comme analogue Lune/Mars."]
        ],
        tags: ["basalt", "tubes", "hydro"],
        links: [
          L("nasa", NASA_ANALOGS, "NASA — Planetary Analogs", "ناسا — المحاكيات الكوكبية", "NASA — Analogues planétaires"),
          L("nasa", "https://www.nasa.gov/universe/using-a-cave-rover-nasa-learns-to-search-for-life-underground/", "NASA — cave rover in Valentine Cave", "ناسا — مركبة الكهوف في كهف فالنتاين", "NASA — rover de grotte à Valentine Cave"),
          L("official", "https://www.nps.gov/labe/learn/nature/geology.htm", "NPS — Lava Beds geology", "هيئة المتنزهات — جيولوجيا لافا بيدز", "NPS — géologie de Lava Beds"),
          L("official", "https://www.usgs.gov/volcanoes/medicine-lake/lava-tubes-lava-beds-national-monument", "USGS — Lava tubes of Lava Beds", "هيئة المسح الجيولوجي — أنابيب الحمم", "USGS — tunnels de lave")
        ]
      },
      {
        id: "cinder", worlds: ["moon"], lat: 35.32, lon: -111.52, alt: 1500000, type: "built",
        img: { src: "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/media/images/Cinder%20Lake%20Crater%20Field%202.jpg?itok=IsBgOKVF", local: "assets/analogs/cinderlake.jpg",
               credit: "USGS Astrogeology Science Center (public domain)" },
        name: ["Cinder Lake Crater Field", "حقل فوهات سيندر ليك", "Champ de cratères de Cinder Lake"],
        place: ["Arizona, USA", "أريزونا، الولايات المتحدة", "Arizona, États-Unis"],
        desc: ["An artificial lunar analog north-east of Flagstaff, in the Cinder Hills off-highway-vehicle area of Coconino National Forest. The USGS built its crater fields here to train Apollo astronauts.",
               "موقع محاكاة قمرية مُصطنع شمال شرق فلاغستاف، ضمن منطقة سيندر هيلز للمركبات الطرقية في غابة كوكونينو الوطنية. بنت هيئة المسح الجيولوجي الأمريكية حقول فوهاته لتدريب رواد أبولو.",
               "Un analogue lunaire artificiel au nord-est de Flagstaff, dans la zone de véhicules tout-terrain des Cinder Hills (forêt nationale de Coconino). L’USGS y a construit des champs de cratères pour entraîner les astronautes d’Apollo."],
        why: ["Artificial impact craters on dusty, rocky, cinder-covered ground reproduce the cratered lunar surface — the first field modelled Mare Tranquillitatis, where Apollo 11 landed.",
              "فوهات اصطدام اصطناعية على أرض ترابية صخرية مغطاة بالرماد البركاني تعيد إنتاج السطح القمري المليء بالفوهات — وقد حاكى الحقل الأول بحر الهدوء حيث هبطت أبولو 11.",
              "Des cratères d’impact artificiels sur un sol poussiéreux, rocheux et couvert de cendres reproduisent la surface cratérisée de la Lune — le premier champ imitait la mer de la Tranquillité, où Apollo 11 s’est posé."],
        rock: ["Loose volcanic cinders, ash and alluvium over basalt ≈ 9 m (30 ft) down — not assumed to be the Mammoth Crater unit",
               "رماد وخبث بركاني مفكك ورواسب غرينية فوق بازلت على عمق نحو 9 م (30 قدماً) — دون افتراض أنه وحدة فوهة ماموث",
               "Cendres et scories volcaniques meubles et alluvions sur du basalte à ≈ 9 m (30 ft) — sans supposer qu’il s’agit de l’unité de Mammoth Crater"],
        setting: ["Flat volcanic plain in the San Francisco volcanic field near Flagstaff, ≈ 2,010 m (6,600 ft) above sea level, near Sunset Crater.",
                  "سهل بركاني مسطّح في حقل سان فرانسيسكو البركاني قرب فلاغستاف، على ارتفاع نحو 2,010 م (6,600 قدم) قرب فوهة صنست.",
                  "Plaine volcanique plate du champ volcanique de San Francisco, près de Flagstaff, à ≈ 2 010 m (6 600 ft), près de Sunset Crater."],
        facts: { elev: "≈ 2,010 m", size: ["2 crater fields · 1st: 47 craters in 500 × 500 ft", "حقلان من الفوهات · الأول: 47 فوهة في 500 × 500 قدم", "2 champs · 1er : 47 cratères sur 500 × 500 ft"],
                 when: ["Built from 1967", "بُني منذ 1967", "Construit dès 1967"] },
        water: ["Loose cinders and ash let water seep through the gaps between particles, while fine sediments can locally reduce permeability. Solid basalt resists fast reaction with water, but fractures let it in. A USGS study estimates ≈ 43% average porosity in the upper 30 ft. Unlike the Moon, Earth’s liquid water, air and erosion slowly wear the craters away.",
                "تسمح الرمادات والخبث المفكك بتسرّب الماء عبر الفراغات بين الجسيمات، بينما قد تقلّل الرواسب الناعمة النفاذية محلياً. البازلت الصلب يقاوم التفاعل السريع مع الماء لكن الشقوق تُدخله. تقدّر دراسة للمسح الجيولوجي متوسط مسامية ≈ 43% في أعلى 30 قدماً. وعلى عكس القمر، فإن مياه الأرض السائلة وهواءها وتعريتها تمحو الفوهات تدريجياً.",
                "Cendres et scories laissent l’eau s’infiltrer entre les particules, tandis que les sédiments fins peuvent réduire localement la perméabilité. Le basalte massif résiste à une réaction rapide, mais ses fractures laissent entrer l’eau. Une étude de l’USGS estime une porosité moyenne ≈ 43 % dans les 30 premiers pieds. Contrairement à la Lune, l’eau liquide, l’air et l’érosion terrestres effacent peu à peu les cratères."],
        notes: [
          ["The USGS began constructing the fields in 1967 to simulate Mare Tranquillitatis; NASA and USGS trained astronauts in geological mapping, crater identification, navigation and sample collection. The craters were blasted with dynamite, not meteorites.", "بدأت هيئة المسح الجيولوجي بناء الحقول عام 1967 لمحاكاة بحر الهدوء؛ ودرّبت ناسا والهيئة الرواد على الرسم الجيولوجي وتحديد الفوهات والملاحة وجمع العيّنات. صُنعت الفوهات بالديناميت لا بالنيازك.", "L’USGS a commencé à construire les champs en 1967 pour simuler la mer de la Tranquillité ; NASA et USGS y ont formé les astronautes à la cartographie géologique, à l’identification des cratères, à la navigation et au prélèvement d’échantillons. Les cratères ont été creusés à la dynamite."],
          ["Drone imagery from 2023–2024 supports high-resolution elevation models for terrain analysis and mission simulations.", "تدعم صور الطائرات المسيّرة في 2023–2024 نماذج ارتفاع عالية الدقة لتحليل التضاريس ومحاكاة المهام.", "Les images de drone de 2023–2024 permettent des modèles d’élévation haute résolution pour l’analyse du terrain et les simulations de mission."],
          ["It reproduces crater patterns and terrain features, but not the Moon’s low gravity, airless environment or surface conditions.", "يعيد إنتاج أنماط الفوهات وملامح التضاريس، لكنه لا يحاكي جاذبية القمر المنخفضة ولا انعدام الغلاف الجوي ولا ظروف سطحه.", "Il reproduit les motifs de cratères et le relief, mais pas la faible gravité, l’absence d’atmosphère ni les conditions de surface de la Lune."]
        ],
        tags: ["craters", "regolith", "built"],
        links: [
          L("nasa", "https://science.nasa.gov/earth/arizonas-lunar-craters/", "NASA — Arizona’s lunar craters", "ناسا — فوهات أريزونا القمرية", "NASA — Les cratères lunaires de l’Arizona"),
          L("nasa", NASA_ALSJ, "NASA — Apollo astronaut geology training log", "ناسا — سجل التدريب الجيولوجي لرواد أبولو", "NASA — Journal de formation géologique Apollo"),
          L("official", "https://www.usgs.gov/news/interesting-photo-astro-recalls-preliminary-work-apollo-13", "USGS — the 1967 crater field", "هيئة المسح — حقل فوهات 1967", "USGS — le champ de cratères de 1967"),
          L("official", "https://www.usgs.gov/news/walk-footsteps-apollo-astronauts", "USGS — Walk in the Apollo astronauts’ footsteps", "هيئة المسح — على خطى رواد أبولو", "USGS — Sur les pas des astronautes d’Apollo")
        ]
      },
      {
        id: "askja", worlds: ["moon"], lat: 65.03, lon: -16.78, alt: 1400000, type: "natural",
        img: { src: "https://images.prismic.io/vatnajokulsthjodgardur/74b7a2ce-4ef6-4ff5-a2eb-e9c6c3cb47b2_Askja%20og%20%C3%96skjuvatn_22_HH%20(3).jpg?w=1200", local: "assets/analogs/askja.jpg",
               credit: "Vatnajökull National Park" },
        name: ["Askja Caldera", "كالديرا أسكيا", "Caldeira d’Askja"],
        place: ["Central Highlands, Iceland", "المرتفعات الوسطى، آيسلندا", "Hautes Terres centrales, Islande"],
        desc: ["A large volcanic depression in the Dyngjufjöll mountains, inside Vatnajökull National Park. Famous for overlapping calderas, dark basaltic lava fields and two striking lakes: deep Öskjuvatn and Víti, a small crater holding geothermal water.",
               "منخفض بركاني ضخم في جبال دينغيوفيول داخل متنزه فاتناجوكول الوطني. يشتهر بكالديرات متداخلة وحقول حمم بازلتية داكنة وبحيرتين لافتتين: أوسكيوفاتن العميقة وفيتي، فوهة صغيرة تحوي مياهاً حرارية.",
               "Une vaste dépression volcanique des monts Dyngjufjöll, dans le parc national du Vatnajökull. Célèbre pour ses caldeiras emboîtées, ses champs de lave basaltique sombres et deux lacs saisissants : l’Öskjuvatn, profond, et le Víti, petit cratère rempli d’eau géothermique."],
        why: ["Dark basaltic lava fields, loose volcanic ash and exposed layers let researchers compare lava flows and volcanic landforms — NASA’s field-trip log records Apollo astronaut geology training in central Iceland near Askja (1965). Its flows also help interpret Martian lava shapes.",
              "حقول الحمم البازلتية الداكنة والرماد البركاني المفكك والطبقات المكشوفة تتيح مقارنة التدفقات والتضاريس البركانية — ويسجّل سجل رحلات ناسا تدريباً جيولوجياً لرواد أبولو في وسط آيسلندا قرب أسكيا (1965). كما تساعد تدفقاتها على تفسير أشكال الحمم على المريخ.",
              "Champs de lave basaltique sombres, cendres meubles et strates affleurantes permettent de comparer coulées et reliefs volcaniques — le journal des sorties de la NASA mentionne un entraînement géologique des astronautes d’Apollo en Islande centrale, près d’Askja (1965). Ses coulées aident aussi à interpréter les laves martiennes."],
        rock: ["Basalt and picrite-basalt, some rhyolite; lava, ash, pumice, scoria and hyaloclastite", "بازلت وبازلت بيكريتي وبعض الريوليت؛ حمم ورماد وخفاف وخبث وهيالوكلاستيت", "Basalte et picrite-basalte, un peu de rhyolite ; lave, cendres, ponce, scories et hyaloclastite"],
        setting: ["≈ 65.03° N, 16.78° W — remote, high-altitude volcanic desert: cold, windy, snow and ice for much of the year, little vegetation.",
                  "≈ 65.03° شمالاً، 16.78° غرباً — صحراء بركانية نائية مرتفعة: باردة وعاصفة، وثلج وجليد معظم العام، ونباتات شحيحة.",
                  "≈ 65,03° N, 16,78° O — désert volcanique isolé et élevé : froid, venteux, neige et glace une grande partie de l’année, peu de végétation."],
        facts: { elev: ["Floor ≈ 1,100 m · rim 1,300–1,500 m", "القاع ≈ 1,100 م · الحافة 1,300–1,500 م", "Fond ≈ 1 100 m · bord 1 300–1 500 m"],
                 size: ["Main caldera ≈ 8 km wide · complex ≈ 45–50 km²", "الكالديرا الرئيسية ≈ 8 كم عرضاً · المجمّع ≈ 45–50 كم²", "Caldeira principale ≈ 8 km · complexe ≈ 45–50 km²"],
                 when: ["Big eruption 1875 · last 1961", "ثوران كبير 1875 · آخر ثوران 1961", "Grande éruption 1875 · dernière 1961"] },
        water: ["Rain and meltwater enter basalt cracks and slowly alter its minerals, while freezing water widens fractures. Geothermal heat turns water to steam, and magma–water contact can fragment rock explosively — Víti formed during the 1875 eruption. Öskjuvatn is ≈ 220 m deep; Víti’s water averages ≈ 30 °C.",
                "يتسرّب المطر وماء الذوبان إلى شقوق البازلت فيغيّر معادنه ببطء، ويوسّع التجمّد الشقوق. تحوّل الحرارة الجوفية الماء إلى بخار، وقد يفتّت تلامس الصهارة بالماء الصخر انفجارياً — فقد تكوّنت فيتي خلال ثوران 1875. عمق أوسكيوفاتن ≈ 220 م، ومتوسط حرارة مياه فيتي ≈ 30 °م.",
                "La pluie et l’eau de fonte s’infiltrent dans les fissures du basalte et altèrent lentement ses minéraux, tandis que le gel élargit les fractures. La chaleur géothermique transforme l’eau en vapeur et le contact magma–eau peut fragmenter la roche de façon explosive — le Víti s’est formé lors de l’éruption de 1875. L’Öskjuvatn atteint ≈ 220 m de profondeur ; l’eau du Víti avoisine ≈ 30 °C."],
        notes: [
          ["1875: a major explosive eruption spread ash widely and helped form the younger caldera that Öskjuvatn now fills.", "1875: ثوران انفجاري كبير نشر الرماد على نطاق واسع وأسهم في تكوين الكالديرا الأحدث التي تملؤها أوسكيوفاتن.", "1875 : une éruption explosive majeure a dispersé des cendres et contribué à former la caldeira récente que remplit l’Öskjuvatn."],
          ["1961: the last known eruption, mainly effusive — a new basaltic lava field extending ≈ 9.5 km east of its source.", "1961: آخر ثوران معروف، تدفقي في معظمه — حقل حمم بازلتية جديد يمتد ≈ 9.5 كم شرق مصدره.", "1961 : dernière éruption connue, surtout effusive — un champ de lave basaltique s’étendant sur ≈ 9,5 km vers l’est."],
          ["Monitored with seismic, ground-deformation and gas measurements; in August 2026 the Icelandic Met Office reported that the uplift that began in 2021 had ceased, with slight subsidence (aviation colour code green).", "تُرصد بقياسات زلزالية وتشوّه الأرض والغازات؛ وفي أغسطس 2026 أفاد مكتب الأرصاد الآيسلندي بتوقف الانتفاخ الذي بدأ عام 2021 مع هبوط طفيف (رمز الطيران أخضر).", "Surveillée par mesures sismiques, de déformation du sol et de gaz ; en août 2026, l’Office météorologique islandais a signalé la fin du soulèvement commencé en 2021, avec un léger affaissement (code aviation vert)."],
          ["Note: Öskjuvatn is a lake, not a rock unit — a specific named basalt unit needs a geological map.", "ملاحظة: أوسكيوفاتن بحيرة وليست وحدة صخرية — تحديد وحدة بازلت مسمّاة يتطلب خريطة جيولوجية.", "À noter : l’Öskjuvatn est un lac, pas une unité rocheuse — une unité basaltique nommée exige une carte géologique."]
        ],
        tags: ["basalt", "craters", "hydro", "ice"],
        links: [
          L("official", "https://www.vatnajokulsthjodgardur.is/en/areas/eastern-caldera/askja", "Vatnajökull National Park — Askja", "متنزه فاتناجوكول — أسكيا", "Parc national du Vatnajökull — Askja"),
          L("nasa", NASA_ALSJ, "NASA — Apollo astronaut geology training log", "ناسا — سجل التدريب الجيولوجي لرواد أبولو", "NASA — Journal de formation géologique Apollo"),
          L("nasa", "https://www.nasa.gov/centers/ames/earthscience/news/PSTAR_Field_Work_In_Iceland", "NASA Ames — Field work in Iceland", "ناسا إيمز — عمل ميداني في آيسلندا", "NASA Ames — Travaux de terrain en Islande")
        ]
      },
      /* ───────────── BOTH ───────────── */
      {
        id: "haughton", worlds: ["moon", "mars"], lat: 75.38, lon: -89.67, alt: 2600000, type: "natural",
        img: { src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia03/pia03714/PIA03714.jpg", local: "assets/analogs/haughton.jpg",
               credit: "NASA/GSFC/LaRC/JPL, MISR Team — Devon Island" },
        name: ["Haughton Impact Crater", "فوهة هوتون الارتطامية", "Cratère d’impact de Haughton"],
        place: ["Devon Island, Nunavut, Canada", "جزيرة ديفون، نونافوت، كندا", "Île Devon, Nunavut, Canada"],
        desc: ["A highly prominent, complex meteorite-impact structure on Devon Island in the far north of Canada — about 23 km across and 23–24 million years old, on a large island with no permanent population.",
               "بنية ارتطام نيزكي معقّدة وبارزة جداً في جزيرة ديفون أقصى شمال كندا — قطرها نحو 23 كم وعمرها 23–24 مليون سنة، على جزيرة كبيرة بلا سكان دائمين.",
               "Une structure d’impact météoritique complexe et très marquée sur l’île Devon, dans l’extrême nord du Canada — environ 23 km de diamètre et 23–24 millions d’années, sur une grande île sans habitants permanents."],
        why: ["Impact cratering, shock deformation and melting seen here are processes that shaped the Moon and Mars. Its cold, dry polar-desert climate, permafrost, sparse vegetation and exposed rock make it a prime analog for impact, permafrost and water-related alteration.",
              "التحوّل الصدمي والانصهار الناتجان عن الارتطام هنا هما العمليتان اللتان شكّلتا القمر والمريخ. ومناخها القطبي الجاف البارد وتربتها المتجمّدة ونباتاتها الشحيحة وصخورها المكشوفة تجعلها محاكياً مثالياً للارتطام والتجمّد والتحوّل المرتبط بالماء.",
              "Le cratérisme d’impact, la déformation par choc et la fusion observés ici façonnent aussi la Lune et Mars. Son climat de désert polaire froid et sec, son pergélisol, sa végétation clairsemée et ses roches affleurantes en font un analogue de choix pour l’impact, le pergélisol et l’altération liée à l’eau."],
        rock: ["Impact melt breccia (carbonate- and silicate-rich) over Paleozoic limestone, dolostone, shale and sandstone with gypsum/anhydrite, on gneiss and granite basement",
               "بريشيا انصهار الارتطام (غنية بالكربونات والسيليكات) فوق حجر جيري ودولوستون وطفل ورملي من الباليوزوي مع الجبس والأنهيدريت، على قاعدة من النيس والغرانيت",
               "Brèche de fusion d’impact (riche en carbonates et silicates) sur calcaire, dolomie, schiste et grès paléozoïques avec gypse/anhydrite, sur socle de gneiss et granite"],
        setting: ["≈ 75°22′ N, 89°41′ W — polar desert: very low precipitation, extreme cold, permafrost, seasonal snow and ice, with local lakes and ponds.",
                  "≈ 75°22′ شمالاً، 89°41′ غرباً — صحراء قطبية: أمطار شحيحة جداً وبرد قارس وتربة متجمّدة وثلج وجليد موسميان، مع بحيرات وبرك محلية.",
                  "≈ 75°22′ N, 89°41′ O — désert polaire : très peu de précipitations, froid extrême, pergélisol, neige et glace saisonnières, lacs et mares locaux."],
        facts: { elev: "—", size: ["≈ 23 km across (final rim ≈ 16 km in some models)", "≈ 23 كم عرضاً (الحافة النهائية ≈ 16 كم في بعض النماذج)", "≈ 23 km (bord final ≈ 16 km selon certains modèles)"],
                 when: ["≈ 23–24 million years old", "عمرها ≈ 23–24 مليون سنة", "≈ 23–24 millions d’années"] },
        water: ["Right after the impact, hot partly-molten rock heated groundwater and set up an impact-induced hydrothermal system. Circulating fluids dissolved, transported and re-deposited minerals — gypsum (CaSO₄·2H₂O, including clear selenite), calcite, quartz, iron oxyhydroxides and sulfides. Models suggest parts stayed ≈ 50–120 °C for over 50,000 years (a model-based estimate).",
                "بعد الارتطام مباشرةً سخّنت الصخور الساخنة شبه المنصهرة المياه الجوفية وأنشأت نظاماً حرارياً مائياً ناتجاً عن الارتطام. أذابت السوائل المتدفقة المعادن ونقلتها وأعادت ترسيبها — الجبس (CaSO₄·2H₂O ومنه السيلينيت الشفاف) والكالسيت والكوارتز وأكسيد هيدروكسيدات الحديد والكبريتيدات. وتقترح النماذج أن أجزاءً منه بقيت بين ≈ 50 و120 °م لأكثر من 50 ألف سنة (تقدير نموذجي).",
                "Juste après l’impact, la roche chaude en partie fondue a chauffé les eaux souterraines et créé un système hydrothermal induit. Les fluides ont dissous, transporté puis redéposé des minéraux — gypse (CaSO₄·2H₂O, dont la sélénite transparente), calcite, quartz, oxyhydroxydes de fer et sulfures. Les modèles suggèrent que certaines parties sont restées à ≈ 50–120 °C pendant plus de 50 000 ans (estimation issue de modèles)."],
        notes: [
          ["Hydrothermal minerals and ancient-lake sediments show that water shaped its history — useful for studying possible habitats on Mars.", "المعادن الحرارية المائية ورواسب البحيرات القديمة تُظهر أن الماء شكّل تاريخها — وهذا مفيد لدراسة موائل محتملة على المريخ.", "Minéraux hydrothermaux et sédiments de lacs anciens montrent le rôle de l’eau — utile pour étudier d’éventuels habitats sur Mars."],
          ["Microbes such as cyanobacteria live in exposed rocks here, showing how life can survive cold, dry conditions — not proof of life at the time of impact.", "تعيش ميكروبات مثل البكتيريا الزرقاء في الصخور المكشوفة هنا، ما يبيّن كيف تصمد الحياة في البرد والجفاف — وليس دليلاً على وجود حياة وقت الارتطام.", "Des microbes comme les cyanobactéries vivent dans les roches affleurantes, montrant comment la vie survit au froid et à la sécheresse — sans prouver une vie lors de l’impact."],
          ["It is the site of the Haughton–Mars Project (NASA Ames / Mars Institute). It is a comparative environment, not an exact replica of Mars.", "هي موقع مشروع هوتون–المريخ (ناسا إيمز / معهد المريخ). وهي بيئة للمقارنة وليست نسخة طبق الأصل من المريخ.", "Site du projet Haughton–Mars (NASA Ames / Mars Institute). Un environnement de comparaison, pas une réplique exacte de Mars."],
          ["Note: no thick, continuous basaltic unit is documented here — the Mammoth Crater Basalt Unit could not be verified at Haughton.", "ملاحظة: لا توجد وحدة بازلتية سميكة متصلة موثّقة هنا — ولم يمكن التحقق من وحدة بازلت فوهة ماموث في هوتون.", "À noter : aucune unité basaltique épaisse et continue n’est documentée ici — l’unité de Mammoth Crater n’a pas pu être vérifiée à Haughton."]
        ],
        tags: ["craters", "ice", "hydro", "salts", "arid"],
        links: [
          L("nasa", "https://science.nasa.gov/photojournal/mars-researchers-rendezvous-on-remote-arctic-island/", "NASA Photojournal — Devon Island", "ناسا فوتوجورنال — جزيرة ديفون", "NASA Photojournal — Île Devon"),
          L("official", "https://www.esa.int/ESA_Multimedia/Images/2001/07/Haughton_Crater2", "ESA — Haughton Crater", "وكالة الفضاء الأوروبية — فوهة هوتون", "ESA — Cratère de Haughton"),
          L("official", "https://www.marsinstitute.no/hmp", "Mars Institute — Haughton–Mars Project", "معهد المريخ — مشروع هوتون–المريخ", "Mars Institute — Projet Haughton–Mars")
        ]
      },
      {
        id: "luna", worlds: ["moon"], lat: 50.86, lon: 7.12, alt: 1300000, type: "built",
        img: { src: "https://www.dlr.de/en/latest/news/2024/training-facility-for-astronautical-and-robotic-missions-to-the-moon/the-goal-in-sight-the-luna-facility-under-the-moonlight/@@images/image-2500-ac10d556a33a45d9e77d9aa71878861b.jpeg", local: "assets/analogs/luna.jpg",
               credit: "DLR/ESA" },
        name: ["LUNA Simulation Facility", "منشأة لونا للمحاكاة", "Installation de simulation LUNA"],
        place: ["Cologne, Germany", "كولونيا، ألمانيا", "Cologne, Allemagne"],
        desc: ["A cutting-edge space-simulation centre — Europe’s “Moon on Earth” — on the German Aerospace Center (DLR) campus in Cologne, next to ESA’s European Astronaut Centre. A joint DLR–ESA project, inaugurated on 25 September 2024.",
               "مركز محاكاة فضائية متطوّر — «قمر أوروبا على الأرض» — في حرم المركز الألماني للفضاء (DLR) بكولونيا، بجوار مركز رواد الفضاء الأوروبي. مشروع مشترك بين DLR ووكالة الفضاء الأوروبية، افتُتح في 25 سبتمبر 2024.",
               "Un centre de simulation spatiale de pointe — la « Lune sur Terre » de l’Europe — sur le campus du Centre aérospatial allemand (DLR) à Cologne, près du Centre européen des astronautes de l’ESA. Projet conjoint DLR–ESA, inauguré le 25 septembre 2024."],
        why: ["Unlike a natural landscape, LUNA is a built environment: ≈ 900 tonnes of lunar-regolith simulant shaped into hills, craters, rocks and slopes, so teams can test rovers, instruments and astronaut equipment under lunar-like surface conditions.",
              "على عكس المناظر الطبيعية، لونا بيئة مُصنَّعة: نحو 900 طن من محاكي الريغوليث القمري مشكّلة في تلال وفوهات وصخور ومنحدرات، ليختبر الفرق المركبات والأجهزة ومعدات الرواد في ظروف سطحية شبيهة بالقمرية.",
              "À la différence d’un paysage naturel, LUNA est un environnement construit : ≈ 900 tonnes de simulant de régolithe lunaire façonnées en collines, cratères, rochers et pentes, pour tester rovers, instruments et équipements d’astronautes dans des conditions de surface lunaires."],
        rock: ["EAC-1A: basalt-based regolith simulant from a quarry in the Rhine-Sieg district — plagioclase feldspar, pyroxene, sometimes olivine",
               "EAC-1A: محاكٍ للريغوليث مصنوع من بازلت محجر في منطقة راين-زيغ — فلدسبار بلاجيوكلاز وبيروكسين وأحياناً أوليفين",
               "EAC-1A : simulant de régolithe à base de basalte d’une carrière du district Rhin-Sieg — plagioclase, pyroxène, parfois olivine"],
        setting: ["Simulation hall ≈ 700 m² and ≈ 9 m high. Main regolith field ≈ 33 × 20 m, ≈ 60 cm deep; the “Deep Floor” reaches ≈ 3 m. Includes a technology centre with labs and control rooms.",
                  "قاعة المحاكاة ≈ 700 م² وارتفاعها ≈ 9 م. حقل الريغوليث الرئيسي ≈ 33 × 20 م وعمقه ≈ 60 سم؛ و«الأرضية العميقة» تبلغ ≈ 3 م. ويضم مركزاً تقنياً بمختبرات وغرف تحكم.",
                  "Hall ≈ 700 m², ≈ 9 m de haut. Champ de régolithe ≈ 33 × 20 m, ≈ 60 cm de profondeur ; la « Deep Floor » atteint ≈ 3 m. Avec un centre technologique (laboratoires, salles de contrôle)."],
        facts: { elev: "—", size: ["≈ 700 m² hall · ≈ 900 t simulant", "قاعة ≈ 700 م² · ≈ 900 طن من المحاكي", "Hall ≈ 700 m² · ≈ 900 t de simulant"],
                 when: ["Opened 25 Sep 2024", "افتُتحت 25 سبتمبر 2024", "Inaugurée le 25 sept. 2024"] },
        water: ["LUNA does not reproduce a natural hydrothermal system; it simulates the mechanical behaviour of lunar soil. Its water-related work targets lunar ice: water trapped between regolith grains at the poles, frozen-soil simulation, and drilling tests in the 3 m Deep Floor. Water matters for life support and, via electrolysis, for oxygen.",
                "لا تحاكي لونا نظاماً حرارياً مائياً طبيعياً؛ بل تحاكي السلوك الميكانيكي للتربة القمرية. وتتركّز أبحاثها المائية على جليد القمر: الماء المحبوس بين حبيبات الريغوليث في القطبين، ومحاكاة التربة المتجمّدة، واختبارات الحفر في «الأرضية العميقة» بعمق 3 م. الماء مهم للدعم الحيوي وللأكسجين عبر التحليل الكهربائي.",
                "LUNA ne reproduit pas un système hydrothermal naturel ; elle simule le comportement mécanique du sol lunaire. Ses travaux sur l’eau visent la glace lunaire : eau piégée entre les grains de régolithe aux pôles, simulation de sol gelé et essais de forage dans la Deep Floor de 3 m. L’eau sert au maintien de la vie et, par électrolyse, à l’oxygène."],
        notes: [
          ["A solar simulator reproduces the Moon’s sharp contrast between bright surfaces and deep shadow, and the low-angle sunlight of the lunar poles.", "يحاكي مُحاكي شمسي التباين الحاد على القمر بين الأسطح المضيئة والظلال العميقة، وضوء الشمس المنخفض الزاوية عند قطبيه.", "Un simulateur solaire reproduit le fort contraste lumière/ombre de la Lune et la lumière rasante des pôles lunaires."],
          ["Tests rovers, drills, sensors and subsurface detection; FLEXhab, a simulated lunar habitat, hosts up to four astronauts.", "تُختبر فيها المركبات والمثاقب والمستشعرات والكشف تحت السطح؛ وتستضيف FLEXhab، وهي موئل قمري محاكى، حتى أربعة رواد.", "On y teste rovers, forets, capteurs et détection du sous-sol ; FLEXhab, habitat lunaire simulé, accueille jusqu’à quatre astronautes."],
          ["Supports preparation for future missions, including activities relevant to NASA’s Artemis programme — geology, geotechnics, robotics and ISRU.", "تدعم الاستعداد للمهام المقبلة، ومنها أنشطة ذات صلة ببرنامج أرتميس التابع لناسا — الجيولوجيا والجيوتقنية والروبوتات واستغلال الموارد في الموقع.", "Soutient la préparation des missions futures, dont des activités liées au programme Artemis de la NASA — géologie, géotechnique, robotique et ISRU."],
          ["EAC-1A is a simulant, not real lunar material — it can’t reproduce every property of the Moon.", "EAC-1A محاكٍ وليس مادة قمرية حقيقية — فلا يعيد إنتاج كل خصائص القمر.", "L’EAC-1A est un simulant, pas de la matière lunaire réelle — il ne reproduit pas toutes les propriétés de la Lune."]
        ],
        tags: ["basalt", "regolith", "craters", "built"],
        links: [
          L("official", "https://www.dlr.de/en/latest/news/2024/training-facility-for-astronautical-and-robotic-missions-to-the-moon", "DLR — LUNA opening (press release)", "DLR — افتتاح لونا (بيان صحفي)", "DLR — Ouverture de LUNA (communiqué)"),
          L("official", "https://www.esa.int/Newsroom/Press_Releases/ESA-DLR_lunar_analogue_facility_inaugurated", "ESA — lunar analogue facility inaugurated", "وكالة الفضاء الأوروبية — افتتاح المنشأة القمرية", "ESA — Inauguration de l’installation lunaire"),
          L("official", "https://www.dlr.de/en/fm/research-and-transfer/research-infrastructure/luna", "DLR — LUNA research infrastructure", "DLR — البنية البحثية للونا", "DLR — Infrastructure de recherche LUNA")
        ]
      },

      /* ───────────── MARS ───────────── */
      {
        id: "mcmurdo", worlds: ["mars"], lat: -77.5, lon: 162.0, alt: 3000000, type: "natural",
        img: { src: "https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA12461.jpg", local: "assets/analogs/mcmurdo.jpg",
               credit: "NASA/GSFC/METI/ERSDAC/JAROS, U.S./Japan ASTER Science Team" },
        name: ["McMurdo Dry Valleys", "وديان ماكموردو الجافة", "Vallées sèches de McMurdo"],
        place: ["Victoria Land, Antarctica", "فيكتوريا لاند، القارة القطبية الجنوبية", "Terre Victoria, Antarctique"],
        desc: ["A series of snow-free, arid valleys in Victoria Land near McMurdo Sound — the largest ice-free region of Antarctica (≈ 4,500–4,800 km²), walled in by the Transantarctic Mountains.",
               "سلسلة وديان جافة خالية من الثلوج في فيكتوريا لاند قرب مضيق ماكموردو — أكبر منطقة خالية من الجليد في القارة القطبية الجنوبية (≈ 4,500–4,800 كم²)، تحيط بها الجبال العابرة للقطب.",
               "Une série de vallées arides sans neige en Terre Victoria, près du détroit de McMurdo — la plus grande région libre de glace de l’Antarctique (≈ 4 500–4 800 km²), encadrée par les monts Transantarctiques."],
        why: ["Cold, hyper-dry and wind-sculpted, with continuous permafrost, ice-covered saline lakes and brief meltwater streams, it is one of the closest terrestrial matches to the surface of Mars.",
              "باردة وشديدة الجفاف ومنحوتة بالرياح، بتربة دائمة التجمّد وبحيرات مالحة مغطاة بالجليد وجداول ذوبان قصيرة، وهي من أقرب المواقع الأرضية شبهاً بسطح المريخ.",
              "Froide, hyper-sèche et sculptée par le vent, avec pergélisol continu, lacs salés sous glace et brefs ruisseaux de fonte, elle est l’un des meilleurs analogues terrestres de la surface de Mars."],
        rock: ["Ancient metamorphic rocks and granites (Ross Orogeny, ≈ 500 Myr) intruded by Ferrar Dolerite; Beacon Supergroup sandstones and shales",
               "صخور متحوّلة قديمة وغرانيت (حركة روس الجبلية ≈ 500 مليون سنة) اخترقتها فيرار دوليريت؛ وأحجار رملية وطفل من مجموعة بيكون",
               "Roches métamorphiques anciennes et granites (orogenèse de Ross, ≈ 500 Ma) recoupés par la dolérite de Ferrar ; grès et schistes du Beacon Supergroup"],
        setting: ["≈ 77–78° S, 162° E. Three main valleys — Taylor, Wright and Victoria — plus Barwick, Miers and Garwood. Rain-shadow desert: ≈ −20 °C on average, −50 to −60 °C in winter, 0–4 °C in summer; humidity from ≈ 55–74% on the coast to ≈ 0% inland.",
                  "≈ 77–78° جنوباً، 162° شرقاً. ثلاثة وديان رئيسية — تايلور ورايت وفيكتوريا — إضافةً إلى بارويك وميرز وغاروود. صحراء ظل مطري: متوسط ≈ −20 °م، من −50 إلى −60 °م شتاءً، و0–4 °م صيفاً؛ الرطوبة من ≈ 55–74% قرب الساحل حتى ≈ 0% في الداخل.",
                  "≈ 77–78° S, 162° E. Trois vallées principales — Taylor, Wright et Victoria — plus Barwick, Miers et Garwood. Désert d’ombre pluviométrique : ≈ −20 °C en moyenne, −50 à −60 °C l’hiver, 0–4 °C l’été ; humidité de ≈ 55–74 % sur la côte à ≈ 0 % à l’intérieur."],
        facts: { elev: "—", size: ["≈ 4,500–4,800 km²", "≈ 4,500–4,800 كم²", "≈ 4 500–4 800 km²"],
                 when: ["Summer melt only 6–12 weeks/yr", "ذوبان صيفي 6–12 أسبوعاً فقط سنوياً", "Fonte estivale seulement 6–12 sem./an"] },
        water: ["Liquid water is almost absent, so iron-bearing minerals in Ferrar Dolerite slowly rust through anhydrous (water-free) oxidation, forming red-orange rinds over millions of years. In the brief 6–12-week austral summer, glacier meltwater streams rapidly dissolve aluminosilicates (releasing silica and potassium) and calcite, yet keep a remarkably stable chemistry (chemostasis).",
                "الماء السائل شبه معدوم، لذلك تصدأ المعادن الحاملة للحديد في فيرار دوليريت ببطء عبر أكسدة لا مائية، مكوّنةً قشورا حمراء برتقالية على مدى ملايين السنين. وفي الصيف القصير (6–12 أسبوعاً) تذيب جداول ماء الأنهار الجليدية بسرعة السيليكات الألومينية (فتطلق السيليكا والبوتاسيوم) والكالسيت، مع الحفاظ على كيمياء مستقرة بشكل لافت.",
                "L’eau liquide est presque absente : les minéraux ferrifères de la dolérite de Ferrar rouillent lentement par oxydation anhydre, formant des croûtes rouge-orangé en des millions d’années. Durant le bref été austral (6–12 semaines), les eaux de fonte glaciaire dissolvent rapidement les aluminosilicates (libérant silice et potassium) et la calcite, tout en gardant une chimie remarquablement stable (chimiostase)."],
        notes: [
          ["Katabatic winds roar down from the Antarctic plateau, sculpting ventifacts and boosting evaporation and sublimation.", "تهبط رياح كاتاباتية قوية من هضبة القارة القطبية الجنوبية فتنحت صخور «فنتيفاكت» وتزيد التبخر والتسامي.", "Des vents catabatiques dévalent du plateau antarctique, sculptant des ventifacts et accentuant évaporation et sublimation."],
          ["Continuous permafrost and freeze–thaw cycles crack the ground into geometric patterned ground.", "التربة الدائمة التجمّد ودورات التجمّد والذوبان تشقّق الأرض إلى أنماط هندسية.", "Pergélisol continu et cycles gel–dégel fissurent le sol en motifs géométriques."],
          ["Permanently ice-covered lakes stay liquid beneath thanks to hypersalinity and geothermal gradients — a unique hydrological network.", "بحيرات مغطاة بالجليد دائماً تبقى سائلة تحته بفضل شدة الملوحة والتدرجات الحرارية الأرضية — شبكة مائية فريدة.", "Des lacs couverts de glace en permanence restent liquides dessous grâce à l’hypersalinité et aux gradients géothermiques — un réseau hydrologique unique."]
        ],
        tags: ["ice", "arid", "red", "salts"],
        links: [
          L("nasa", "https://science.nasa.gov/earth/earth-observatory/martian-landscape-antarctica-4420/", "NASA Earth Observatory — Martian landscape, Antarctica", "مرصد الأرض — منظر مريخي في أنتاركتيكا", "NASA Earth Observatory — Paysage martien en Antarctique"),
          L("nasa", "https://www.jpl.nasa.gov/images/pia12461-dry-valleys-antarctica/", "NASA JPL — Dry Valleys (ASTER)", "ناسا JPL — الوديان الجافة (أستر)", "NASA JPL — Vallées sèches (ASTER)"),
          L("official", "https://usap.gov/news/4570", "US Antarctic Program — Mars-like Dry Valleys", "برنامج الولايات المتحدة للقطب الجنوبي — الوديان الشبيهة بالمريخ", "Programme antarctique américain — Vallées « martiennes »")
        ]
      },
      {
        id: "mdrs", worlds: ["mars"], lat: 38.4065, lon: -110.7919, alt: 1500000, type: "natural",
        img: { src: "https://www.marssociety.org/wp-content/uploads/2024/09/Crew-261-MDRS-campus-scaled.jpg", local: "assets/analogs/mdrs.jpg",
               credit: "The Mars Society" },
        name: ["Mars Desert Research Station (MDRS)", "محطة أبحاث صحراء المريخ (MDRS)", "Station de recherche du désert martien (MDRS)"],
        place: ["Hanksville, Utah, USA", "هانكسفيل، يوتا، الولايات المتحدة", "Hanksville, Utah, États-Unis"],
        desc: ["Hanksville is a small desert town in southern Utah, surrounded by colourful sedimentary formations, bentonite hills, sand dunes and eroded rock. It hosts the Mars Society’s Mars Desert Research Station, where crews simulate Mars exploration.",
               "هانكسفيل بلدة صحراوية صغيرة في جنوب يوتا تحيط بها تكوينات رسوبية ملوّنة وتلال بنتونيت وكثبان وصخور متآكلة. تستضيف محطة أبحاث صحراء المريخ التابعة لجمعية المريخ، حيث تحاكي الطواقم استكشاف المريخ.",
               "Hanksville est une petite ville du désert du sud de l’Utah, entourée de formations sédimentaires colorées, de collines de bentonite, de dunes et de roches érodées. Elle accueille la Mars Desert Research Station de la Mars Society, où des équipages simulent l’exploration de Mars."],
        why: ["Reddish, sparsely vegetated, dry terrain with exposed layers of ancient rivers, deserts and lakes closely resembles the Martian surface and gives crews a natural setting to test equipment and study geology relevant to Mars.",
              "تضاريس مائلة للحمرة وجافة وقليلة النبات مع طبقات مكشوفة من أنهار وصحارى وبحيرات قديمة تشبه سطح المريخ كثيراً، وتمنح الطواقم بيئة طبيعية لاختبار المعدات ودراسة جيولوجيا ذات صلة بالمريخ.",
              "Un terrain rougeâtre, sec et peu végétalisé, aux strates d’anciennes rivières, déserts et lacs, ressemble beaucoup à la surface martienne et offre aux équipages un cadre naturel pour tester du matériel et étudier une géologie pertinente pour Mars."],
        rock: ["Sandstone, shale, mudstone, conglomerate — Wingate, Navajo, Mancos, Morrison and Chinle formations; bentonite clay hills",
               "أحجار رملية وطفل وحجر طيني وتكتلات — تكوينات وينغيت ونافاخو ومانكوس وموريسون وتشينلي؛ وتلال طين البنتونيت",
               "Grès, schiste, mudstone, conglomérat — formations Wingate, Navajo, Mancos, Morrison et Chinle ; collines d’argile de bentonite"],
        setting: ["Wayne County, south-eastern Utah, on the Colorado Plateau near the Fremont River, close to the Henry Mountains, San Rafael Swell and Waterpocket Fold. Semi-arid, with sparse vegetation.",
                  "مقاطعة واين، جنوب شرق يوتا، على هضبة كولورادو قرب نهر فريمونت، بالقرب من جبال هنري وسان رافائيل سويل وواترپوكت فولد. شبه جاف ونباتات شحيحة.",
                  "Comté de Wayne, sud-est de l’Utah, sur le plateau du Colorado près de la rivière Fremont, à proximité des Henry Mountains, du San Rafael Swell et du Waterpocket Fold. Semi-aride, végétation clairsemée."],
        facts: { elev: "—", size: "—", when: ["Mars-simulation crews", "طواقم محاكاة المريخ", "Équipages de simulation martienne"] },
        water: ["Sandstone reacts little with water but absorbs and transmits it through its pores. Bentonite clay absorbs water, swells and turns soft and plastic; shale and mudstone soften and break into smaller particles with repeated wetting and drying; limestone, where present, dissolves slowly in slightly acidic water. Overall: weathering, erosion and unstable sediments.",
                "الحجر الرملي قليل التفاعل مع الماء لكنه يمتصه وينقله عبر مساميه. أما طين البنتونيت فيمتص الماء وينتفخ ويصبح ليّناً؛ والطفل والحجر الطيني يلينان ويتفتتان مع تكرار البلل والجفاف؛ والحجر الجيري، حيثما وُجد، يذوب ببطء في الماء الحمضي قليلاً. الحصيلة: تجوية وتعرية ورواسب غير مستقرة.",
                "Le grès réagit peu mais absorbe et transmet l’eau par ses pores. La bentonite absorbe l’eau, gonfle et devient molle ; schistes et mudstones se ramollissent et se fragmentent sous l’effet des cycles humidification/séchage ; le calcaire, s’il est présent, se dissout lentement dans une eau légèrement acide. Bilan : altération, érosion et instabilité des sédiments."],
        notes: [
          ["Operated by the Mars Society as a Mars-simulation research station; it provides a natural environment for testing equipment.", "تُشغَّلها جمعية المريخ كمحطة بحثية لمحاكاة المريخ، وتوفّر بيئة طبيعية لاختبار المعدات.", "Exploitée par la Mars Society comme station de recherche de simulation martienne ; un environnement naturel pour tester du matériel."],
          ["Exposed layers preserve evidence of ancient rivers, deserts and lakes; wind and occasional rain keep reshaping the colourful bentonite hills.", "تحفظ الطبقات المكشوفة آثار أنهار وصحارى وبحيرات قديمة؛ وتواصل الرياح والأمطار العابرة إعادة تشكيل تلال البنتونيت الملوّنة.", "Les strates affleurantes conservent des traces d’anciennes rivières, déserts et lacs ; vent et pluies occasionnelles remodèlent les collines de bentonite colorées."],
          ["Its Mars-like landscapes appeared in films including Galaxy Quest (1999) and John Carter (2012).", "ظهرت مناظرها الشبيهة بالمريخ في أفلام منها Galaxy Quest (1999) وJohn Carter (2012).", "Ses paysages martiens sont apparus dans des films dont Galaxy Quest (1999) et John Carter (2012)."]
        ],
        tags: ["red", "layers", "salts", "arid"],
        links: [
          L("official", "https://reports.marssociety.org/research/", "Mars Society — MDRS research", "جمعية المريخ — أبحاث MDRS", "Mars Society — Recherche MDRS"),
          L("official", "https://www.marssociety.org/news/2025/03/21/mars-society-launches-global-campaign-to-support-mars-desert-research-station/", "Mars Society — MDRS campaign", "جمعية المريخ — حملة دعم MDRS", "Mars Society — Campagne MDRS"),
          L("nasa", NASA_ANALOGS, "NASA — Planetary Analogs (Mars analog science)", "ناسا — المحاكيات الكوكبية", "NASA — Analogues planétaires")
        ]
      },
      {
        id: "mojave", worlds: ["mars"], lat: 35.11, lon: -115.52, alt: 1900000, type: "natural",
        img: { src: "https://www.nasa.gov/wp-content/uploads/2018/02/mojave-desert.jpg", local: "assets/analogs/mojave.jpg",
               credit: "NASA" },
        name: ["Mojave Desert", "صحراء موهافي", "Désert des Mojaves"],
        place: ["California · Nevada · Arizona · Utah, USA", "كاليفورنيا · نيفادا · أريزونا · يوتا، الولايات المتحدة", "Californie · Nevada · Arizona · Utah, États-Unis"],
        desc: ["The driest desert in North America — roughly 47,877 sq mi (≈ 124,000 km²) — lying in the rain shadow of the southern Sierra Nevada. A land of dramatic elevation extremes: rugged ranges, broad basins, dunes, dry lakebeds and Death Valley.",
               "أكثر صحارى أمريكا الشمالية جفافاً — نحو 47,877 ميلاً مربعاً (≈ 124,000 كم²) — تقع في الظل المطري لجبال سييرا نيفادا الجنوبية. أرض ذات فوارق ارتفاع هائلة: سلاسل وعرة وأحواض واسعة وكثبان وقيعان بحيرات جافة ووادي الموت.",
               "Le désert le plus sec d’Amérique du Nord — environ 47 877 sq mi (≈ 124 000 km²) — dans l’ombre pluviométrique de la Sierra Nevada méridionale. Un pays de contrastes d’altitude : chaînes abruptes, vastes bassins, dunes, lacs asséchés et Vallée de la Mort."],
        why: ["Its dry climate, rocky terrain and exposed geology make parts of the Mojave useful for testing planetary-exploration equipment; NASA has tested Mars-drone software on Death Valley’s dunes.",
              "مناخها الجاف وتضاريسها الصخرية وجيولوجيتها المكشوفة تجعل أجزاءً من موهافي مفيدة لاختبار معدات استكشاف الكواكب؛ وقد اختبرت ناسا برمجيات طائرات مسيّرة للمريخ على كثبان وادي الموت.",
              "Son climat sec, son relief rocheux et sa géologie affleurante rendent certaines zones utiles pour tester du matériel d’exploration planétaire ; la NASA y a testé des logiciels de drone martien sur les dunes de la Vallée de la Mort."],
        rock: ["Ancient granite, gneiss and schist ranges; alluvial sand, gravel and clay; some basalt and other volcanic rocks; salt deposits",
               "سلاسل جبلية من الغرانيت والنيس والشيست القديمة؛ ورمال وحصى وطين غرينية؛ وبعض البازلت وصخور بركانية أخرى؛ ورواسب ملحية",
               "Chaînes de granite, gneiss et schiste anciens ; sable, gravier et argile alluviaux ; un peu de basalte et d’autres roches volcaniques ; dépôts de sel"],
        setting: ["South-western USA, between the Great Basin Desert (north) and the Sonoran Desert (south). Extremely dry, hot summers, cool-to-cold winters; active faults and earthquakes.",
                  "جنوب غرب الولايات المتحدة، بين صحراء الحوض العظيم (شمالاً) والصحراء السونورية (جنوباً). جافة جداً وصيف حار وشتاء بارد؛ فيها صدوع نشطة وزلازل.",
                  "Sud-ouest des États-Unis, entre le désert du Grand Bassin (nord) et le désert de Sonora (sud). Extrêmement sec, étés chauds, hivers frais à froids ; failles actives et séismes."],
        facts: { elev: ["Below sea level (Death Valley) to 3,000+ m", "تحت مستوى البحر (وادي الموت) إلى أكثر من 3,000 م", "Sous le niveau de la mer (Vallée de la Mort) à 3 000+ m"], size: "≈ 124,000 km²", when: ["Driest desert in North America", "أجفّ صحراء في أمريكا الشمالية", "Désert le plus sec d’Amérique du Nord"] },
        water: ["Granite weathers slowly as feldspar alters; basalt reacts slowly with water; sand and gravel let it infiltrate easily; clays absorb water, soften and may expand; some salts dissolve readily and change soil chemistry. Rare flash floods do the heavy work — erosion, sediment transport and mineral alteration.",
                "يتجوّى الغرانيت ببطء مع تغيّر الفلدسبار؛ ويتفاعل البازلت ببطء مع الماء؛ وتسمح الرمال والحصى بتسرّبه بسهولة؛ وتمتص الطين الماء وتلين وقد تتمدّد؛ وتذوب بعض الأملاح بسهولة فتغيّر كيمياء التربة. أما السيول المفاجئة النادرة فتقوم بالعمل الأكبر — تعرية ونقل رواسب وتحوّل معدني.",
                "Le granite s’altère lentement (feldspath) ; le basalte réagit lentement ; sables et graviers laissent l’eau s’infiltrer ; les argiles absorbent l’eau, se ramollissent et peuvent gonfler ; certains sels se dissolvent et modifient la chimie du sol. Les rares crues éclair font le gros du travail — érosion, transport de sédiments et altération minérale."],
        notes: [
          ["Home to the Joshua tree and desert-adapted shrubs, reptiles and other organisms.", "موطن شجرة جوشوا والشجيرات والزواحف وكائنات أخرى متكيّفة مع الصحراء.", "Terre de l’arbre de Josué, d’arbustes, de reptiles et d’autres organismes adaptés à l’aridité."],
          ["Death Valley holds some of the lowest and hottest places in North America.", "يضم وادي الموت بعضاً من أخفض وأحرّ المواقع في أمريكا الشمالية.", "La Vallée de la Mort abrite certains des lieux les plus bas et les plus chauds d’Amérique du Nord."],
          ["Dunes, dry lakebeds (playas), alluvial fans and rocky mountains give a varied set of landforms to compare with Mars.", "كثبان وقيعان بحيرات جافة ومراوح غرينية وجبال صخرية تمنح تنوعاً في التضاريس للمقارنة مع المريخ.", "Dunes, playas, cônes alluviaux et montagnes rocheuses offrent des reliefs variés à comparer avec Mars."]
        ],
        tags: ["arid", "basalt", "salts"],
        links: [
          L("nasa", "https://www.nasa.gov/?p=139699", "NASA — Mojave Desert", "ناسا — صحراء موهافي", "NASA — Désert des Mojaves"),
          L("nasa", NASA_ANALOGS, "NASA — Planetary Analogs (Death Valley drone test)", "ناسا — المحاكيات الكوكبية (اختبار مسيّرة وادي الموت)", "NASA — Analogues planétaires (drone, Vallée de la Mort)"),
          L("official", "https://home.nps.gov/moja", "NPS — Mojave National Preserve", "هيئة المتنزهات — محمية موهافي الوطنية", "NPS — Réserve nationale de Mojave")
        ]
      },
      {
        id: "iceland", worlds: ["mars"], lat: 63.98, lon: -19.07, alt: 1400000, type: "natural",
        img: { src: "https://www.nasa.gov/wp-content/uploads/2018/11/glacier-geothermal-site.jpg", local: "assets/analogs/iceland.jpg",
               credit: "Molly Wasser / NASA Goddard" },
        name: ["Volcanic Highlands of Iceland", "المرتفعات البركانية في آيسلندا", "Hautes Terres volcaniques d’Islande"],
        place: ["Interior Iceland", "داخل آيسلندا", "Intérieur de l’Islande"],
        desc: ["A vast uninhabited wilderness of fire and ice covering roughly 40% of Iceland’s interior — multicoloured rhyolite mountains, pitch-black ash deserts and steaming geothermal valleys such as Landmannalaugar and Kerlingarfjöll.",
               "برية شاسعة غير مأهولة من النار والجليد تغطي نحو 40% من داخل آيسلندا — جبال ريوليت متعددة الألوان وصحارى رماد شديدة السواد ووديان حرارية أرضية متصاعدة البخار مثل لاندمانالاوغار وكيرلينغارفيول.",
               "Une immense étendue inhabitée de feu et de glace couvrant ≈ 40 % de l’intérieur de l’Islande — montagnes de rhyolite multicolores, déserts de cendres noires et vallées géothermiques fumantes comme Landmannalaugar et Kerlingarfjöll."],
        why: ["Basaltic volcanism, subglacial volcanoes and “fire-and-ice” processes echo ancient Mars; NASA teams do field work in Iceland to test instruments and interpret volcanic terrain on other worlds.",
              "البراكين البازلتية والبراكين تحت الجليدية وعمليات «النار والجليد» تُحاكي مريخ الماضي؛ وتجري فرق ناسا عملاً ميدانياً في آيسلندا لاختبار الأجهزة وتفسير التضاريس البركانية في عوالم أخرى.",
              "Volcanisme basaltique, volcans sous-glaciaires et processus « feu et glace » évoquent le Mars ancien ; des équipes de la NASA y font du terrain pour tester des instruments et interpréter des terrains volcaniques d’autres mondes."],
        rock: ["Basalt lava fields, colourful rhyolite mountains, volcanic ash and pumice; flat-topped subglacial volcanoes (tuyas)",
               "حقول حمم بازلتية وجبال ريوليت ملوّنة ورماد بركاني وخفاف؛ وبراكين مسطّحة القمة تحت جليدية (توياس)",
               "Champs de lave basaltique, montagnes de rhyolite colorées, cendres et ponce ; volcans sous-glaciaires à sommet plat (tuyas)"],
        setting: ["Sits on the Mid-Atlantic Ridge, where the North American and Eurasian plates pull apart, above a mantle-plume hotspot. Plateau 400–800 m above sea level, away from coastal towns and the Ring Road.",
                  "تقع على سلسلة وسط الأطلسي حيث تتباعد صفيحتا أمريكا الشمالية وأوراسيا، فوق بقعة ساخنة لعمود وشاحي. هضبة على ارتفاع 400–800 م، بعيداً عن مدن الساحل والطريق الدائري.",
                  "Sur la dorsale médio-atlantique, où les plaques nord-américaine et eurasienne s’écartent, au-dessus d’un point chaud de panache mantellique. Plateau à 400–800 m, loin des villes côtières et de la route circulaire."],
        facts: { elev: "400–800 m", size: ["≈ 40% of Iceland’s interior", "≈ 40% من داخل آيسلندا", "≈ 40 % de l’intérieur de l’Islande"], when: ["Active rift & hotspot volcanism", "بركانية الصدع والبقعة الساخنة النشطة", "Volcanisme actif de rift et de point chaud"] },
        water: ["Fire meets ice: eruptions under glaciers flash ice to steam and shatter magma into volcanic glass and ash, building flat-topped tuyas. Melting ice can burst out as catastrophic jökulhlaups, and rainwater heated to ≈ 200 °C deep underground (liquid under pressure) dissolves minerals that feed hot springs and geysers.",
                "حين تلتقي النار بالجليد: تحوّل الثورانات تحت الأنهار الجليدية الجليد إلى بخار فجأةً وتحطّم الصهارة إلى زجاج بركاني ورماد، فتُبنى توياس مسطّحة القمة. وقد ينفجر الجليد الذائب في سيول كارثية (يوكولهلاوب)، ويذيب ماء المطر المسخّن إلى ≈ 200 °م في العمق (سائل تحت الضغط) المعادن التي تغذّي الينابيع الحارة والسخّانات.",
                "Le feu rencontre la glace : des éruptions sous glaciaires vaporisent la glace et fragmentent le magma en verre volcanique et cendres, bâtissant des tuyas à sommet plat. La fonte peut déclencher des jökulhlaups catastrophiques, et l’eau de pluie chauffée à ≈ 200 °C en profondeur (liquide sous pression) dissout des minéraux qui alimentent sources chaudes et geysers."],
        notes: [
          ["Acidic geothermal alteration: magmatic gases acidify groundwater, dissolving bedrock into colourful clays and bright yellow sulfur deposits at Kerlingarfjöll.", "التحوّل الحراري الحمضي: تحمّض الغازات الصهارية المياه الجوفية فتذيب الصخر مكوّنةً طيناً ملوّناً ورواسب كبريت صفراء زاهية في كيرلينغارفيول.", "Altération géothermique acide : les gaz magmatiques acidifient l’eau et dissolvent la roche en argiles colorées et dépôts de soufre jaune à Kerlingarfjöll."],
          ["Steam-driven (phreatic) explosions blow out craters such as the milky-blue Víti in Askja.", "تحفر الانفجارات البخارية (الفريّاتية) فوهات مثل فيتي الزرقاء اللبنية في أسكيا.", "Des explosions phréatiques creusent des cratères comme le Víti, bleu laiteux, à Askja."],
          ["Lava cooled by water or floods cracks into hexagonal basalt columns (e.g., Stuðlagil), and water carves deep canyons in loose ash such as Sigöldugljúfur far faster than in hard rock.", "تتشقق الحمم المبرَّدة بالماء أو السيول إلى أعمدة بازلت سداسية (مثل ستودلاغيل)، ويحفر الماء أخاديد عميقة في الرماد المفكك مثل سيغولدوغليوفور أسرع بكثير من الصخر الصلب.", "La lave refroidie par l’eau ou les crues se fissure en colonnes de basalte hexagonales (p. ex. Stuðlagil), et l’eau creuse des canyons dans les cendres meubles comme Sigöldugljúfur bien plus vite que dans la roche dure."]
        ],
        tags: ["basalt", "hydro", "ice", "craters", "salts"],
        links: [
          L("nasa", "https://www.nasa.gov/centers/ames/earthscience/news/PSTAR_Field_Work_In_Iceland", "NASA Ames — Field work in Iceland (basalt analog)", "ناسا إيمز — عمل ميداني في آيسلندا (محاكي بازلتي)", "NASA Ames — Travaux de terrain en Islande (analogue basaltique)"),
          L("nasa", "https://www.nasa.gov/missions/how-earth-volcanoes-offer-a-window-into-the-evolution-of-life-and-the-solar-system", "NASA — Earth’s volcanoes as a window to the solar system", "ناسا — براكين الأرض نافذة على المجموعة الشمسية", "NASA — Les volcans terrestres, fenêtre sur le système solaire"),
          L("official", "https://www.vatnajokulsthjodgardur.is/en", "Vatnajökull National Park", "متنزه فاتناجوكول الوطني", "Parc national du Vatnajökull")
        ]
      },
      {
        id: "wadirum", worlds: ["mars"], lat: 29.64, lon: 35.43, alt: 1500000, type: "natural",
        img: { src: "https://assets.science.nasa.gov/content/dam/science/esd/eo/images/imagerecords/148000/148764/wadirum_oli_2021223_lrg.jpg", local: "assets/analogs/wadirum.jpg",
               credit: "NASA Earth Observatory / Lauren Dauphin (Landsat, USGS)" },
        name: ["Wadi Rum", "وادي رم", "Wadi Rum"],
        place: ["Aqaba Governorate, Jordan", "محافظة العقبة، الأردن", "Gouvernorat d’Aqaba, Jordanie"],
        desc: ["A UNESCO World Heritage site of 74,000 hectares of red-rock wilderness in southern Jordan — monumental sandstone mountains, narrow gorges, natural arches and dramatic desert plains in iron-oxide colours.",
               "موقع تراث عالمي لليونسكو بمساحة 74,000 هكتار من البرية الحمراء في جنوب الأردن — جبال رملية ضخمة وأخاديد ضيقة وأقواس طبيعية وسهول صحراوية مدهشة بألوان أكاسيد الحديد.",
               "Site du patrimoine mondial de l’UNESCO de 74 000 hectares de nature rouge dans le sud de la Jordanie — montagnes de grès monumentales, gorges étroites, arches naturelles et plaines désertiques aux couleurs d’oxydes de fer."],
        why: ["Iron-oxide minerals “rust” the landscape in deep crimson, ochre and orange, giving it a Martian look — it doubled for Mars in The Martian and Dune. Its layered stratigraphy records ancient rivers and seas.",
              "تجعل أكاسيد الحديد المنظر «صدئاً» بالقرمزي والمغرة والبرتقالي، فيبدو مريخياً — وقد ظهرت كالمريخ في فيلمي The Martian وDune. وتسجّل طبقاتها المتتابعة أنهاراً وبحاراً قديمة.",
              "Les oxydes de fer « rouillent » le paysage en cramoisi, ocre et orange, lui donnant un air martien — il a doublé Mars dans The Martian et Dune. Sa stratigraphie enregistre d’anciennes rivières et mers."],
        rock: ["≈ 600 Myr Precambrian granite basement under ≈ 1,500 m of Paleozoic sandstone (Salib, Umm Ishrin and Disi formations)",
               "قاعدة غرانيتية من ما قبل الكامبري عمرها ≈ 600 مليون سنة تعلوها ≈ 1,500 م من الحجر الرملي الباليوزوي (تكوينات سالب وأم عشرين وديسي)",
               "Socle granitique précambrien de ≈ 600 Ma sous ≈ 1 500 m de grès paléozoïque (formations Salib, Umm Ishrin et Disi)"],
        setting: ["≈ 60 km east of Aqaba and ≈ 300 km south of Amman, near the Saudi border; desert floor ≈ 1,000 m; Jabal Umm ad Dami 1,854 m (Jordan’s highest) and Jabal Ram 1,734 m. Hyper-arid.",
                  "≈ 60 كم شرق العقبة و≈ 300 كم جنوب عمّان قرب الحدود السعودية؛ أرض الصحراء ≈ 1,000 م؛ جبل أم الدامي 1,854 م (أعلى قمة في الأردن) وجبل رم 1,734 م. شديدة الجفاف.",
                  "≈ 60 km à l’est d’Aqaba et ≈ 300 km au sud d’Amman, près de la frontière saoudienne ; plaine ≈ 1 000 m ; Jabal Umm ad Dami 1 854 m (plus haut sommet de Jordanie) et Jabal Ram 1 734 m. Hyper-aride."],
        facts: { elev: ["≈ 1,000 m (peaks to 1,854 m)", "≈ 1,000 م (قمم حتى 1,854 م)", "≈ 1 000 m (sommets jusqu’à 1 854 m)"], size: ["74,000 ha (≈ 740 km²)", "74,000 هكتار (≈ 740 كم²)", "74 000 ha (≈ 740 km²)"], when: ["Protected area since 1998", "محمية منذ 1998", "Aire protégée depuis 1998"] },
        water: ["Groundwater sapping: brief desert rainstorms soak straight through porous sandstone, hit the impermeable granite and flow sideways until they emerge as springs (e.g., Lawrence’s Spring). This chemically weakens the lower sandstone, slabs above collapse, and the cliffs stay vertical. Salt crystal growth also honeycombs rock into caves and “mushroom rocks”.",
                "نحت المياه الجوفية: تتغلغل أمطار الصحراء القصيرة عبر الحجر الرملي المسامي فتصطدم بالغرانيت غير النفّاذ وتجري أفقياً حتى تخرج ينابيع (مثل نبع لورانس). يضعف هذا الحجر الرملي السفلي كيميائياً فتنهار الألواح العليا وتبقى الجروف عمودية. كما يحوّل نمو بلورات الملح الصخر إلى كهوف مثقبة و«صخور فطرية».",
                "Sapement des eaux souterraines : de brèves pluies désertiques traversent le grès poreux, butent sur le granite imperméable et coulent latéralement jusqu’à émerger en sources (p. ex. la source de Lawrence). Cela affaiblit chimiquement le grès inférieur, les dalles supérieures s’effondrent et les falaises restent verticales. La croissance de cristaux de sel creuse aussi des cavités et des « rochers-champignons »."],
        notes: [
          ["Over 25,000 rock carvings track 12,000 years of history and the evolution of the Arabic alphabet; managed with local Bedouin tribes, whose hospitality UNESCO recognises.", "أكثر من 25,000 نقش صخري تتبّع 12,000 عام من التاريخ وتطوّر الأبجدية العربية؛ وتُدار بالشراكة مع قبائل البدو المحلية التي تقدّر اليونسكو كرم ضيافتها.", "Plus de 25 000 gravures rupestres retracent 12 000 ans d’histoire et l’évolution de l’alphabet arabe ; gérée avec les tribus bédouines locales, dont l’hospitalité est reconnue par l’UNESCO."],
          ["Parallel wadis follow fault lines opened by the tectonics of the Great Rift / Dead Sea Transform; the region is still rising ≈ 70 mm per 1,000 years.", "تتبع الوديان المتوازية خطوط صدوع فتحتها تكتونيات الأخدود العظيم/صدع البحر الميت؛ ولا تزال المنطقة ترتفع ≈ 70 ملم كل 1,000 عام.", "Des wadis parallèles suivent des failles ouvertes par la tectonique du Grand Rift / Transformante de la mer Morte ; la région s’élève encore de ≈ 70 mm par millénaire."],
          ["Erosional features include natural rock bridges (Burdah, Um Frouth), mushroom rocks and narrow canyons such as Khazali and Burrah that shelter ancient freshwater springs.", "من معالم التعرية جسور صخرية طبيعية (البردة وأم فروث) وصخور فطرية وأخاديد ضيقة مثل الخزالي وبرّاح تحمي ينابيع مياه عذبة قديمة.", "Parmi les formes d’érosion : ponts naturels (Burdah, Um Frouth), rochers-champignons et canyons étroits (Khazali, Burrah) abritant d’anciennes sources d’eau douce."]
        ],
        tags: ["red", "arid", "layers"],
        links: [
          L("nasa", "https://science.nasa.gov/earth/earth-observatory/movie-mars-on-earth-148764/", "NASA Earth Observatory — Movie Mars on Earth", "مرصد الأرض — «المريخ على الأرض» في السينما", "NASA Earth Observatory — Mars sur Terre au cinéma"),
          L("nasa", "https://science.nasa.gov/earth/earth-observatory/wadi-rum-jordan-49945/", "NASA Earth Observatory — Wadi Rum, Jordan", "مرصد الأرض — وادي رم، الأردن", "NASA Earth Observatory — Wadi Rum, Jordanie"),
          L("official", "https://whc.unesco.org/en/list/1377", "UNESCO World Heritage — Wadi Rum", "اليونسكو — وادي رم", "UNESCO — Wadi Rum"),
          L("official", "https://international.visitjordan.com/wheretogo/wadi-rum/", "Jordan Tourism Board — Wadi Rum", "هيئة تنشيط السياحة الأردنية — وادي رم", "Office du tourisme jordanien — Wadi Rum")
        ]
      },
      {
        id: "atacama", worlds: ["mars"], lat: -24.07, lon: -69.98, alt: 2200000, type: "natural",
        img: { src: "https://www.nasa.gov/wp-content/uploads/2023/03/arads18_mg_9688.jpg", local: "assets/analogs/atacama.jpg",
               credit: "NASA/CampoAlto/Victor Robles" },
        name: ["Atacama Desert", "صحراء أتاكاما", "Désert d’Atacama"],
        place: ["Northern Chile", "شمال تشيلي", "Nord du Chili"],
        desc: ["The driest non-polar desert on Earth: a hyper-arid, high-altitude plateau famous for Mars-like rock formations, vast salt flats and crystal-clear night skies that make it the world’s premier hub for astronomy.",
               "أجفّ صحراء غير قطبية على الأرض: هضبة شديدة الجفاف عالية الارتفاع تشتهر بتكوينات صخرية شبيهة بالمريخ وسباخ ملحية شاسعة وسماء ليلية صافية تجعلها المركز الأول عالمياً لعلم الفلك.",
               "Le désert non polaire le plus sec de la Terre : un plateau hyper-aride et élevé, célèbre pour ses formations rocheuses martiennes, ses vastes salars et ses ciels nocturnes limpides qui en font le premier site mondial d’astronomie."],
        why: ["Extreme dryness, salt crusts and UV-blasted soils make it a natural lab for testing how to search for life; NASA has trialled a life-detection drill and rover here (ARADS) as a Mars analog.",
              "الجفاف الشديد وقشور الملح والتربة المشبعة بالأشعة فوق البنفسجية تجعلها مختبراً طبيعياً لاختبار كيفية البحث عن الحياة؛ وقد جرّبت ناسا هنا مثقباً ومركبة للكشف عن الحياة (ARADS) كمحاكٍ للمريخ.",
              "Aridité extrême, croûtes de sel et sols exposés aux UV en font un laboratoire naturel pour tester la recherche de vie ; la NASA y a essayé un foret et un rover de détection de vie (ARADS) comme analogue martien."],
        rock: ["Salt flats (halite, gypsum), clays and sand with Andean volcanoes; rich copper, lithium, iodine and nitrate deposits",
               "سباخ ملحية (هاليت وجبس) وطين ورمال مع براكين الأنديز؛ ورواسب غنية بالنحاس والليثيوم واليود والنترات",
               "Salars (halite, gypse), argiles et sable avec volcans andins ; riches gisements de cuivre, lithium, iode et nitrates"],
        setting: ["A 1,600 km (1,000 mi) strip between the Pacific and the Andes; plateau ≈ 105,000 km². Double rain shadow from the Coast Range and the high Andes; active Nazca–South American plate boundary and El Tatio geysers.",
                  "شريط بطول 1,600 كم (1,000 ميل) بين المحيط الهادئ والأنديز؛ هضبة ≈ 105,000 كم². ظل مطري مزدوج من سلسلة الساحل والأنديز العالية؛ حدّ صفيحتي نازكا وأمريكا الجنوبية النشط وسخّانات إل تاتيو.",
                  "Bande de 1 600 km (1 000 mi) entre le Pacifique et les Andes ; plateau ≈ 105 000 km². Double ombre pluviométrique (cordillère côtière et hautes Andes) ; limite active des plaques Nazca–Amérique du Sud et geysers d’El Tatio."],
        facts: { elev: "—", size: ["≈ 105,000 km² plateau · 1,600 km long", "هضبة ≈ 105,000 كم² · بطول 1,600 كم", "Plateau ≈ 105 000 km² · 1 600 km de long"], when: ["Arid for ≈ 150 million years", "جافة منذ ≈ 150 مليون سنة", "Aride depuis ≈ 150 millions d’années"] },
        water: ["Rain is a shock here: sudden moisture can burst microbes adapted to zero water (up to ≈ 85% of the local population), and instantly dissolves nitrates, sulfates and halite, reshaping crusts, opening sinkholes in salt flats and mobilising toxic elements like arsenic. On the softer fringes, rare heavy rain triggers the “Desierto Florido” (flowering desert).",
                "المطر صدمة هنا: قد تؤدي الرطوبة المفاجئة إلى انفجار الميكروبات المتكيّفة مع انعدام الماء (حتى ≈ 85% من التعداد المحلي)، وتذيب فوراً النترات والكبريتات والهاليت فتعيد تشكيل القشور وتفتح حفراً غائرة في السباخ وتحرّر عناصر سامة كالزرنيخ. وفي الأطراف الألين يطلق المطر الغزير النادر «الصحراء المزهرة».",
                "La pluie est un choc : l’humidité soudaine peut faire éclater des microbes adaptés à l’absence d’eau (jusqu’à ≈ 85 % de la population locale) et dissout instantanément nitrates, sulfates et halite, remodelant les croûtes, ouvrant des dolines dans les salars et mobilisant des éléments toxiques comme l’arsenic. Sur les marges plus douces, de rares fortes pluies déclenchent le « Desierto Florido »."],
        notes: [
          ["Wind is the main erosion force, carving the Valle de la Luna and the jagged Cordillera de la Sal; salt flats like Salar de Atacama hold halite and gypsum crusts.", "الرياح هي القوة التعروية الرئيسية، وقد نحتت وادي القمر وسلسلة الملح المسننة؛ وتحمل السباخ مثل سالار دي أتاكاما قشور هاليت وجبس.", "Le vent est le principal agent d’érosion, sculptant la Vallée de la Lune et la Cordillère du Sel ; les salars comme le Salar d’Atacama portent des croûtes de halite et de gypse."],
          ["“Fog catchers” (camanchaca nets) condense coastal fog into hundreds of litres of fresh water daily for drinking and agriculture.", "«صيّادو الضباب» (شباك كامانتشاكا) تكثّف ضباب الساحل إلى مئات اللترات من الماء العذب يومياً للشرب والزراعة.", "Les « capteurs de brouillard » (filets camanchaca) condensent le brouillard côtier en des centaines de litres d’eau douce par jour."],
          ["Over 5,000 geoglyphs, including the 119 m Atacama Giant; extremophile microbes in its UV-blasted soils are studied for new antibiotics and cancer therapies.", "أكثر من 5,000 رسم أرضي ضخم، منها «عملاق أتاكاما» بطول 119 م؛ وتُدرس ميكروبات المتطرّفات في تربتها المشبعة بالأشعة لاستخراج مضادات حيوية وعلاجات للسرطان.", "Plus de 5 000 géoglyphes, dont le Géant d’Atacama (119 m) ; les microbes extrêmophiles de ses sols sont étudiés pour de nouveaux antibiotiques et traitements anticancéreux."],
          ["Near Alto Hospicio, unsold clothing from around the world has piled up into a textile dump visible from space.", "قرب ألتو هوسبيسيو تراكمت ملابس غير مباعة من أنحاء العالم في مكبّ نسيجي ضخم يُرى من الفضاء.", "Près d’Alto Hospicio, des vêtements invendus du monde entier forment une décharge textile visible depuis l’espace."]
        ],
        tags: ["arid", "salts"],
        links: [
          L("nasa", "https://astrobiology.nasa.gov/news/nasa-tests-life-detection-drill-in-the-atacama-desert/", "NASA Astrobiology — life-detection drill test", "ناسا لعلم الأحياء الفلكي — اختبار مثقب كشف الحياة", "NASA Astrobiology — test d’un foret de détection de vie"),
          L("nasa", "https://www.nasa.gov/image-article/tire-tracks-mars-atacama-rover-astrobiology-drilling-studies", "NASA — Tire tracks on “Mars” in the Atacama", "ناسا — آثار إطارات على «المريخ» في أتاكاما", "NASA — Traces de pneus sur « Mars » dans l’Atacama"),
          L("nasa", "https://www.nasa.gov/?p=227688", "NASA — Camping on Mars (Atacama)", "ناسا — التخييم على المريخ (أتاكاما)", "NASA — Camper sur Mars (Atacama)")
        ]
      }
    ]
  };
})();
