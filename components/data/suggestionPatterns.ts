import { SuggestionPattern, Language } from '../types';

// Comprehensive suggestion patterns for all supported languages
export const suggestionPatterns: Record<Language, SuggestionPattern> = {
  en: {
    templates: [
      "how to {query}",
      "what is {query}",
      "why {query}",
      "when to {query}",
      "where to {query}",
      "best {query}",
      "top {query}",
      "{query} tutorial",
      "{query} guide",
      "{query} tips",
      "{query} for beginners",
      "{query} examples",
      "{query} definition",
      "{query} benefits",
      "{query} problems",
      "{query} solutions",
      "{query} alternatives",
      "{query} comparison",
      "{query} reviews",
      "{query} cost",
      "{query} price",
      "{query} near me",
      "{query} online",
      "{query} free",
      "learn {query}",
      "{query} course",
      "{query} training",
      "{query} certification",
      "{query} tools",
      "{query} software",
      "{query} app"
    ],
    prefixes: [
      "best", "top", "cheap", "free", "online", "local", "professional", "expert",
      "beginner", "advanced", "easy", "quick", "fast", "safe", "reliable", "trusted",
      "popular", "trending", "new", "latest", "modern", "traditional", "classic",
      "premium", "budget", "affordable", "expensive", "luxury", "basic", "simple"
    ],
    suffixes: [
      "guide", "tutorial", "tips", "tricks", "hacks", "secrets", "strategies",
      "methods", "techniques", "approaches", "solutions", "ideas", "examples",
      "tools", "software", "apps", "services", "products", "resources", "courses",
      "training", "certification", "skills", "knowledge", "experience", "expert",
      "professional", "beginner", "advanced", "intermediate", "basics", "fundamentals"
    ],
    related: [
      "alternatives", "competitors", "similar", "related", "equivalent", "substitute",
      "replacement", "comparison", "vs", "versus", "difference", "pros and cons",
      "advantages", "disadvantages", "benefits", "drawbacks", "features", "specifications"
    ],
    questions: [
      "what is", "how to", "why", "when", "where", "who", "which", "how much",
      "how many", "what are", "how do", "can you", "should I", "is it", "are there",
      "what's the best", "how long", "what time", "how often", "what kind"
    ],
    comparisons: [
      "vs", "versus", "compared to", "difference between", "better than",
      "alternative to", "instead of", "rather than", "or", "which is better"
    ]
  },
  id: {
    templates: [
      "cara {query}",
      "apa itu {query}",
      "mengapa {query}",
      "kapan {query}",
      "dimana {query}",
      "terbaik {query}",
      "top {query}",
      "tutorial {query}",
      "panduan {query}",
      "tips {query}",
      "{query} untuk pemula",
      "contoh {query}",
      "definisi {query}",
      "manfaat {query}",
      "masalah {query}",
      "solusi {query}",
      "alternatif {query}",
      "perbandingan {query}",
      "review {query}",
      "harga {query}",
      "biaya {query}",
      "{query} terdekat",
      "{query} online",
      "{query} gratis",
      "belajar {query}",
      "kursus {query}",
      "pelatihan {query}",
      "sertifikasi {query}",
      "alat {query}",
      "software {query}",
      "aplikasi {query}"
    ],
    prefixes: [
      "terbaik", "teratas", "murah", "gratis", "online", "lokal", "profesional", "ahli",
      "pemula", "lanjutan", "mudah", "cepat", "aman", "terpercaya", "populer",
      "trending", "baru", "terbaru", "modern", "tradisional", "klasik", "premium",
      "budget", "terjangkau", "mahal", "mewah", "dasar", "sederhana"
    ],
    suffixes: [
      "panduan", "tutorial", "tips", "trik", "rahasia", "strategi", "metode",
      "teknik", "pendekatan", "solusi", "ide", "contoh", "alat", "software",
      "aplikasi", "layanan", "produk", "sumber", "kursus", "pelatihan",
      "sertifikasi", "keterampilan", "pengetahuan", "pengalaman", "ahli",
      "profesional", "pemula", "lanjutan", "menengah", "dasar", "fundamental"
    ],
    related: [
      "alternatif", "pesaing", "serupa", "terkait", "setara", "pengganti",
      "perbandingan", "vs", "versus", "perbedaan", "pro dan kontra",
      "keuntungan", "kerugian", "manfaat", "kekurangan", "fitur", "spesifikasi"
    ],
    questions: [
      "apa itu", "cara", "mengapa", "kapan", "dimana", "siapa", "mana", "berapa",
      "apa saja", "bagaimana", "bisakah", "haruskah", "apakah", "adakah",
      "apa yang terbaik", "berapa lama", "jam berapa", "seberapa sering", "jenis apa"
    ],
    comparisons: [
      "vs", "versus", "dibandingkan dengan", "perbedaan antara", "lebih baik dari",
      "alternatif untuk", "daripada", "ketimbang", "atau", "mana yang lebih baik"
    ]
  },
  ar: {
    templates: [
      "كيفية {query}",
      "ما هو {query}",
      "لماذا {query}",
      "متى {query}",
      "أين {query}",
      "أفضل {query}",
      "أعلى {query}",
      "درس {query}",
      "دليل {query}",
      "نصائح {query}",
      "{query} للمبتدئين",
      "أمثلة {query}",
      "تعريف {query}",
      "فوائد {query}",
      "مشاكل {query}",
      "حلول {query}",
      "بدائل {query}",
      "مقارنة {query}",
      "مراجعات {query}",
      "تكلفة {query}",
      "سعر {query}",
      "{query} قريب مني",
      "{query} عبر الإنترنت",
      "{query} مجاني",
      "تعلم {query}",
      "دورة {query}",
      "تدريب {query}",
      "شهادة {query}",
      "أدوات {query}",
      "برنامج {query}",
      "تطبيق {query}"
    ],
    prefixes: [
      "أفضل", "أعلى", "رخيص", "مجاني", "عبر الإنترنت", "محلي", "مهني", "خبير",
      "مبتدئ", "متقدم", "سهل", "سريع", "آمن", "موثوق", "شائع", "رائج", "جديد",
      "أحدث", "حديث", "تقليدي", "كلاسيكي", "مميز", "اقتصادي", "ميسور", "غالي",
      "فاخر", "أساسي", "بسيط"
    ],
    suffixes: [
      "دليل", "درس", "نصائح", "حيل", "أسرار", "استراتيجيات", "طرق", "تقنيات",
      "مناهج", "حلول", "أفكار", "أمثلة", "أدوات", "برامج", "تطبيقات", "خدمات",
      "منتجات", "موارد", "دورات", "تدريب", "شهادة", "مهارات", "معرفة", "خبرة",
      "خبير", "محترف", "مبتدئ", "متقدم", "متوسط", "أساسيات", "مبادئ"
    ],
    related: [
      "بدائل", "منافسين", "مشابه", "ذات صلة", "مكافئ", "بديل", "مقارنة", "مقابل",
      "ضد", "فرق", "إيجابيات وسلبيات", "مزايا", "عيوب", "فوائد", "نقائص", "ميزات", "مواصفات"
    ],
    questions: [
      "ما هو", "كيفية", "لماذا", "متى", "أين", "من", "أي", "كم", "ما هي",
      "كيف", "هل يمكن", "هل يجب", "هل هو", "هل هناك", "ما الأفضل", "كم من الوقت",
      "أي وقت", "كم مرة", "أي نوع"
    ],
    comparisons: [
      "مقابل", "ضد", "مقارنة مع", "فرق بين", "أفضل من", "بديل لـ", "بدلاً من",
      "أو", "أيهما أفضل"
    ]
  },
  zh: {
    templates: [
      "如何{query}",
      "什么是{query}",
      "为什么{query}",
      "何时{query}",
      "在哪里{query}",
      "最佳{query}",
      "顶级{query}",
      "{query}教程",
      "{query}指南",
      "{query}技巧",
      "{query}初学者",
      "{query}示例",
      "{query}定义",
      "{query}好处",
      "{query}问题",
      "{query}解决方案",
      "{query}替代品",
      "{query}比较",
      "{query}评论",
      "{query}成本",
      "{query}价格",
      "附近的{query}",
      "在线{query}",
      "免费{query}",
      "学习{query}",
      "{query}课程",
      "{query}培训",
      "{query}认证",
      "{query}工具",
      "{query}软件",
      "{query}应用"
    ],
    prefixes: [
      "最佳", "顶级", "便宜", "免费", "在线", "本地", "专业", "专家", "初学者",
      "高级", "简单", "快速", "安全", "可靠", "流行", "趋势", "新", "最新",
      "现代", "传统", "经典", "高级", "预算", "实惠", "昂贵", "豪华", "基本", "简单"
    ],
    suffixes: [
      "指南", "教程", "技巧", "诀窍", "秘密", "策略", "方法", "技术", "方法",
      "解决方案", "想法", "示例", "工具", "软件", "应用", "服务", "产品", "资源",
      "课程", "培训", "认证", "技能", "知识", "经验", "专家", "专业", "初学者",
      "高级", "中级", "基础", "基本原理"
    ],
    related: [
      "替代品", "竞争对手", "相似", "相关", "等效", "替代", "比较", "对比", "差异",
      "优缺点", "优势", "劣势", "好处", "缺点", "特点", "规格"
    ],
    questions: [
      "什么是", "如何", "为什么", "何时", "在哪里", "谁", "哪个", "多少",
      "有什么", "怎么做", "可以", "应该", "是否", "有没有", "什么最好",
      "多长时间", "什么时间", "多久一次", "什么类型"
    ],
    comparisons: [
      "对比", "与", "相比", "之间的差异", "比...更好", "的替代品", "而不是",
      "或者", "哪个更好"
    ]
  },
  ja: {
    templates: [
      "{query}の方法",
      "{query}とは",
      "なぜ{query}",
      "いつ{query}",
      "どこで{query}",
      "最高の{query}",
      "トップ{query}",
      "{query}チュートリアル",
      "{query}ガイド",
      "{query}のコツ",
      "初心者向け{query}",
      "{query}の例",
      "{query}の定義",
      "{query}のメリット",
      "{query}の問題",
      "{query}の解決策",
      "{query}の代替案",
      "{query}の比較",
      "{query}のレビュー",
      "{query}のコスト",
      "{query}の価格",
      "近くの{query}",
      "オンライン{query}",
      "無料{query}",
      "{query}を学ぶ",
      "{query}コース",
      "{query}トレーニング",
      "{query}認定",
      "{query}ツール",
      "{query}ソフトウェア",
      "{query}アプリ"
    ],
    prefixes: [
      "最高の", "トップ", "安い", "無料", "オンライン", "地元の", "プロの", "専門の",
      "初心者", "上級", "簡単", "速い", "安全", "信頼できる", "人気の", "トレンドの",
      "新しい", "最新の", "モダンな", "伝統的な", "クラシック", "プレミアム", "予算",
      "手頃な", "高価な", "豪華な", "基本的な", "シンプル"
    ],
    suffixes: [
      "ガイド", "チュートリアル", "コツ", "トリック", "秘密", "戦略", "方法",
      "技術", "アプローチ", "解決策", "アイデア", "例", "ツール", "ソフトウェア",
      "アプリ", "サービス", "製品", "リソース", "コース", "トレーニング", "認定",
      "スキル", "知識", "経験", "専門家", "プロ", "初心者", "上級", "中級", "基本", "基礎"
    ],
    related: [
      "代替案", "競合他社", "類似", "関連", "同等", "代替", "比較", "対", "違い",
      "長所と短所", "利点", "欠点", "メリット", "デメリット", "機能", "仕様"
    ],
    questions: [
      "とは", "方法", "なぜ", "いつ", "どこで", "誰", "どれ", "いくら", "何が",
      "どうやって", "できますか", "すべきか", "ですか", "ありますか", "最高の",
      "どのくらい", "何時", "どのくらいの頻度", "どんな種類"
    ],
    comparisons: [
      "対", "と比較して", "の違い", "より良い", "の代替", "の代わりに", "または", "どちらが良い"
    ]
  },
  ru: {
    templates: [
      "как {query}",
      "что такое {query}",
      "почему {query}",
      "когда {query}",
      "где {query}",
      "лучший {query}",
      "топ {query}",
      "урок {query}",
      "руководство {query}",
      "советы {query}",
      "{query} для начинающих",
      "примеры {query}",
      "определение {query}",
      "преимущества {query}",
      "проблемы {query}",
      "решения {query}",
      "альтернативы {query}",
      "сравнение {query}",
      "отзывы {query}",
      "стоимость {query}",
      "цена {query}",
      "{query} рядом",
      "{query} онлайн",
      "бесплатный {query}",
      "изучить {query}",
      "курс {query}",
      "обучение {query}",
      "сертификация {query}",
      "инструменты {query}",
      "программа {query}",
      "приложение {query}"
    ],
    prefixes: [
      "лучший", "топ", "дешевый", "бесплатный", "онлайн", "местный", "профессиональный",
      "экспертный", "начинающий", "продвинутый", "легкий", "быстрый", "безопасный",
      "надежный", "популярный", "трендовый", "новый", "последний", "современный",
      "традиционный", "классический", "премиум", "бюджетный", "доступный", "дорогой",
      "роскошный", "базовый", "простой"
    ],
    suffixes: [
      "руководство", "урок", "советы", "трюки", "секреты", "стратегии", "методы",
      "техники", "подходы", "решения", "идеи", "примеры", "инструменты", "программы",
      "приложения", "сервисы", "продукты", "ресурсы", "курсы", "обучение", "сертификация",
      "навыки", "знания", "опыт", "эксперт", "профессионал", "начинающий", "продвинутый",
      "средний", "основы", "основные принципы"
    ],
    related: [
      "альтернативы", "конкуренты", "похожий", "связанный", "эквивалентный", "замена",
      "сравнение", "против", "разница", "плюсы и минусы", "преимущества", "недостатки",
      "выгоды", "минусы", "функции", "характеристики"
    ],
    questions: [
      "что такое", "как", "почему", "когда", "где", "кто", "какой", "сколько",
      "что", "как делать", "можно ли", "следует ли", "является ли", "есть ли",
      "что лучше", "как долго", "во сколько", "как часто", "какой тип"
    ],
    comparisons: [
      "против", "по сравнению с", "разница между", "лучше чем", "альтернатива",
      "вместо", "или", "что лучше"
    ]
  },
  es: {
    templates: [
      "cómo {query}",
      "qué es {query}",
      "por qué {query}",
      "cuándo {query}",
      "dónde {query}",
      "mejor {query}",
      "top {query}",
      "tutorial {query}",
      "guía {query}",
      "consejos {query}",
      "{query} para principiantes",
      "ejemplos {query}",
      "definición {query}",
      "beneficios {query}",
      "problemas {query}",
      "soluciones {query}",
      "alternativas {query}",
      "comparación {query}",
      "reseñas {query}",
      "costo {query}",
      "precio {query}",
      "{query} cerca de mí",
      "{query} en línea",
      "{query} gratis",
      "aprender {query}",
      "curso {query}",
      "entrenamiento {query}",
      "certificación {query}",
      "herramientas {query}",
      "software {query}",
      "aplicación {query}"
    ],
    prefixes: [
      "mejor", "top", "barato", "gratis", "en línea", "local", "profesional", "experto",
      "principiante", "avanzado", "fácil", "rápido", "seguro", "confiable", "popular",
      "tendencia", "nuevo", "último", "moderno", "tradicional", "clásico", "premium",
      "presupuesto", "asequible", "caro", "lujo", "básico", "simple"
    ],
    suffixes: [
      "guía", "tutorial", "consejos", "trucos", "secretos", "estrategias", "métodos",
      "técnicas", "enfoques", "soluciones", "ideas", "ejemplos", "herramientas", "software",
      "aplicaciones", "servicios", "productos", "recursos", "cursos", "entrenamiento",
      "certificación", "habilidades", "conocimiento", "experiencia", "experto", "profesional",
      "principiante", "avanzado", "intermedio", "básicos", "fundamentos"
    ],
    related: [
      "alternativas", "competidores", "similar", "relacionado", "equivalente", "sustituto",
      "comparación", "vs", "versus", "diferencia", "pros y contras", "ventajas", "desventajas",
      "beneficios", "inconvenientes", "características", "especificaciones"
    ],
    questions: [
      "qué es", "cómo", "por qué", "cuándo", "dónde", "quién", "cuál", "cuánto",
      "qué son", "cómo hacer", "puedes", "debería", "es", "hay", "cuál es el mejor",
      "cuánto tiempo", "qué hora", "con qué frecuencia", "qué tipo"
    ],
    comparisons: [
      "vs", "versus", "comparado con", "diferencia entre", "mejor que", "alternativa a",
      "en lugar de", "o", "cuál es mejor"
    ]
  },
  fr: {
    templates: [
      "comment {query}",
      "qu'est-ce que {query}",
      "pourquoi {query}",
      "quand {query}",
      "où {query}",
      "meilleur {query}",
      "top {query}",
      "tutoriel {query}",
      "guide {query}",
      "conseils {query}",
      "{query} pour débutants",
      "exemples {query}",
      "définition {query}",
      "avantages {query}",
      "problèmes {query}",
      "solutions {query}",
      "alternatives {query}",
      "comparaison {query}",
      "avis {query}",
      "coût {query}",
      "prix {query}",
      "{query} près de moi",
      "{query} en ligne",
      "{query} gratuit",
      "apprendre {query}",
      "cours {query}",
      "formation {query}",
      "certification {query}",
      "outils {query}",
      "logiciel {query}",
      "application {query}"
    ],
    prefixes: [
      "meilleur", "top", "pas cher", "gratuit", "en ligne", "local", "professionnel",
      "expert", "débutant", "avancé", "facile", "rapide", "sûr", "fiable", "populaire",
      "tendance", "nouveau", "dernier", "moderne", "traditionnel", "classique", "premium",
      "budget", "abordable", "cher", "luxe", "basique", "simple"
    ],
    suffixes: [
      "guide", "tutoriel", "conseils", "astuces", "secrets", "stratégies", "méthodes",
      "techniques", "approches", "solutions", "idées", "exemples", "outils", "logiciels",
      "applications", "services", "produits", "ressources", "cours", "formation",
      "certification", "compétences", "connaissance", "expérience", "expert", "professionnel",
      "débutant", "avancé", "intermédiaire", "bases", "fondamentaux"
    ],
    related: [
      "alternatives", "concurrents", "similaire", "lié", "équivalent", "substitut",
      "comparaison", "vs", "versus", "différence", "pour et contre", "avantages",
      "inconvénients", "bénéfices", "défauts", "caractéristiques", "spécifications"
    ],
    questions: [
      "qu'est-ce que", "comment", "pourquoi", "quand", "où", "qui", "lequel", "combien",
      "que sont", "comment faire", "pouvez-vous", "devrais-je", "est-ce", "y a-t-il",
      "quel est le meilleur", "combien de temps", "quelle heure", "à quelle fréquence", "quel type"
    ],
    comparisons: [
      "vs", "versus", "comparé à", "différence entre", "mieux que", "alternative à",
      "au lieu de", "ou", "lequel est mieux"
    ]
  },
  de: {
    templates: [
      "wie {query}",
      "was ist {query}",
      "warum {query}",
      "wann {query}",
      "wo {query}",
      "beste {query}",
      "top {query}",
      "{query} tutorial",
      "{query} anleitung",
      "{query} tipps",
      "{query} für anfänger",
      "{query} beispiele",
      "{query} definition",
      "{query} vorteile",
      "{query} probleme",
      "{query} lösungen",
      "{query} alternativen",
      "{query} vergleich",
      "{query} bewertungen",
      "{query} kosten",
      "{query} preis",
      "{query} in der nähe",
      "{query} online",
      "{query} kostenlos",
      "{query} lernen",
      "{query} kurs",
      "{query} schulung",
      "{query} zertifizierung",
      "{query} tools",
      "{query} software",
      "{query} app"
    ],
    prefixes: [
      "beste", "top", "günstig", "kostenlos", "online", "lokal", "professionell", "experte",
      "anfänger", "fortgeschritten", "einfach", "schnell", "sicher", "zuverlässig", "beliebt",
      "trend", "neu", "neueste", "modern", "traditionell", "klassisch", "premium", "budget",
      "erschwinglich", "teuer", "luxus", "grundlegend", "einfach"
    ],
    suffixes: [
      "anleitung", "tutorial", "tipps", "tricks", "geheimnisse", "strategien", "methoden",
      "techniken", "ansätze", "lösungen", "ideen", "beispiele", "tools", "software",
      "anwendungen", "dienste", "produkte", "ressourcen", "kurse", "schulung", "zertifizierung",
      "fähigkeiten", "wissen", "erfahrung", "experte", "profi", "anfänger", "fortgeschritten",
      "mittelstufe", "grundlagen", "basics"
    ],
    related: [
      "alternativen", "konkurrenten", "ähnlich", "verwandt", "gleichwertig", "ersatz",
      "vergleich", "vs", "versus", "unterschied", "vor- und nachteile", "vorteile",
      "nachteile", "nutzen", "mängel", "eigenschaften", "spezifikationen"
    ],
    questions: [
      "was ist", "wie", "warum", "wann", "wo", "wer", "welche", "wie viel", "was sind",
      "wie macht man", "können sie", "sollte ich", "ist es", "gibt es", "was ist das beste",
      "wie lange", "welche zeit", "wie oft", "welche art"
    ],
    comparisons: [
      "vs", "versus", "verglichen mit", "unterschied zwischen", "besser als", "alternative zu",
      "anstatt", "oder", "was ist besser"
    ]
  },
  pt: {
    templates: [
      "como {query}",
      "o que é {query}",
      "por que {query}",
      "quando {query}",
      "onde {query}",
      "melhor {query}",
      "top {query}",
      "tutorial {query}",
      "guia {query}",
      "dicas {query}",
      "{query} para iniciantes",
      "exemplos {query}",
      "definição {query}",
      "benefícios {query}",
      "problemas {query}",
      "soluções {query}",
      "alternativas {query}",
      "comparação {query}",
      "avaliações {query}",
      "custo {query}",
      "preço {query}",
      "{query} perto de mim",
      "{query} online",
      "{query} grátis",
      "aprender {query}",
      "curso {query}",
      "treinamento {query}",
      "certificação {query}",
      "ferramentas {query}",
      "software {query}",
      "aplicativo {query}"
    ],
    prefixes: [
      "melhor", "top", "barato", "grátis", "online", "local", "profissional", "especialista",
      "iniciante", "avançado", "fácil", "rápido", "seguro", "confiável", "popular", "tendência",
      "novo", "último", "moderno", "tradicional", "clássico", "premium", "orçamento",
      "acessível", "caro", "luxo", "básico", "simples"
    ],
    suffixes: [
      "guia", "tutorial", "dicas", "truques", "segredos", "estratégias", "métodos", "técnicas",
      "abordagens", "soluções", "ideias", "exemplos", "ferramentas", "software", "aplicativos",
      "serviços", "produtos", "recursos", "cursos", "treinamento", "certificação", "habilidades",
      "conhecimento", "experiência", "especialista", "profissional", "iniciante", "avançado",
      "intermediário", "básicos", "fundamentos"
    ],
    related: [
      "alternativas", "concorrentes", "similar", "relacionado", "equivalente", "substituto",
      "comparação", "vs", "versus", "diferença", "prós e contras", "vantagens", "desvantagens",
      "benefícios", "desvantagens", "características", "especificações"
    ],
    questions: [
      "o que é", "como", "por que", "quando", "onde", "quem", "qual", "quanto", "o que são",
      "como fazer", "você pode", "devo", "é", "há", "qual é o melhor", "quanto tempo",
      "que horas", "com que frequência", "que tipo"
    ],
    comparisons: [
      "vs", "versus", "comparado com", "diferença entre", "melhor que", "alternativa para",
      "em vez de", "ou", "qual é melhor"
    ]
  },
  hi: {
    templates: [
      "कैसे {query}",
      "क्या है {query}",
      "क्यों {query}",
      "कब {query}",
      "कहाँ {query}",
      "सबसे अच्छा {query}",
      "टॉप {query}",
      "{query} ट्यूटोरियल",
      "{query} गाइड",
      "{query} टिप्स",
      "शुरुआती के लिए {query}",
      "{query} उदाहरण",
      "{query} परिभाषा",
      "{query} फायदे",
      "{query} समस्याएं",
      "{query} समाधान",
      "{query} विकल्प",
      "{query} तुलना",
      "{query} समीक्षा",
      "{query} लागत",
      "{query} कीमत",
      "मेरे पास {query}",
      "ऑनलाइन {query}",
      "मुफ्त {query}",
      "{query} सीखें",
      "{query} कोर्स",
      "{query} प्रशिक्षण",
      "{query} प्रमाणन",
      "{query} उपकरण",
      "{query} सॉफ्टवेयर",
      "{query} ऐप"
    ],
    prefixes: [
      "सबसे अच्छा", "टॉप", "सस्ता", "मुफ्त", "ऑनलाइन", "स्थानीय", "पेशेवर", "विशेषज्ञ",
      "शुरुआती", "उन्नत", "आसान", "तेज", "सुरक्षित", "विश्वसनीय", "लोकप्रिय", "ट्रेंडिंग",
      "नया", "नवीनतम", "आधुनिक", "पारंपरिक", "क्लासिक", "प्रीमियम", "बजट", "किफायती",
      "महंगा", "लक्जरी", "बुनियादी", "सरल"
    ],
    suffixes: [
      "गाइड", "ट्यूटोरियल", "टिप्स", "ट्रिक्स", "रहस्य", "रणनीति", "तरीके", "तकनीक",
      "दृष्टिकोण", "समाधान", "विचार", "उदाहरण", "उपकरण", "सॉफ्टवेयर", "ऐप्स", "सेवाएं",
      "उत्पाद", "संसाधन", "कोर्स", "प्रशिक्षण", "प्रमाणन", "कौशल", "ज्ञान", "अनुभव",
      "विशेषज्ञ", "पेशेवर", "शुरुआती", "उन्नत", "मध्यम", "बुनियादी बातें", "मूल बातें"
    ],
    related: [
      "विकल्प", "प्रतियोगी", "समान", "संबंधित", "समकक्ष", "प्रतिस्थापन", "तुलना", "बनाम",
      "अंतर", "फायदे और नुकसान", "लाभ", "नुकसान", "फायदे", "कमियां", "विशेषताएं", "विनिर्देशन"
    ],
    questions: [
      "क्या है", "कैसे", "क्यों", "कब", "कहाँ", "कौन", "कौन सा", "कितना", "क्या हैं",
      "कैसे करें", "क्या आप कर सकते हैं", "क्या मुझे चाहिए", "क्या यह है", "क्या कोई है",
      "सबसे अच्छा क्या है", "कितना समय", "कौन सा समय", "कितनी बार", "कौन सा प्रकार"
    ],
    comparisons: [
      "बनाम", "की तुलना में", "के बीच अंतर", "से बेहतर", "का विकल्प", "के बजाय", "या", "कौन सा बेहतर"
    ]
  },
  ko: {
    templates: [
      "어떻게 {query}",
      "{query}는 무엇인가",
      "왜 {query}",
      "언제 {query}",
      "어디서 {query}",
      "최고의 {query}",
      "탑 {query}",
      "{query} 튜토리얼",
      "{query} 가이드",
      "{query} 팁",
      "초보자를 위한 {query}",
      "{query} 예제",
      "{query} 정의",
      "{query} 장점",
      "{query} 문제",
      "{query} 해결책",
      "{query} 대안",
      "{query} 비교",
      "{query} 리뷰",
      "{query} 비용",
      "{query} 가격",
      "근처 {query}",
      "온라인 {query}",
      "무료 {query}",
      "{query} 배우기",
      "{query} 강좌",
      "{query} 교육",
      "{query} 인증",
      "{query} 도구",
      "{query} 소프트웨어",
      "{query} 앱"
    ],
    prefixes: [
      "최고의", "탑", "저렴한", "무료", "온라인", "지역", "전문", "전문가", "초보자",
      "고급", "쉬운", "빠른", "안전한", "신뢰할 수 있는", "인기있는", "트렌딩", "새로운",
      "최신", "현대적인", "전통적인", "클래식", "프리미엄", "예산", "저렴한", "비싼",
      "럭셔리", "기본", "간단한"
    ],
    suffixes: [
      "가이드", "튜토리얼", "팁", "트릭", "비밀", "전략", "방법", "기술", "접근법", "해결책",
      "아이디어", "예제", "도구", "소프트웨어", "앱", "서비스", "제품", "리소스", "강좌",
      "교육", "인증", "기술", "지식", "경험", "전문가", "전문가", "초보자", "고급", "중급",
      "기본", "기초"
    ],
    related: [
      "대안", "경쟁사", "유사한", "관련된", "동등한", "대체", "비교", "대", "차이", "장단점",
      "장점", "단점", "혜택", "단점", "기능", "사양"
    ],
    questions: [
      "무엇인가", "어떻게", "왜", "언제", "어디서", "누가", "어떤", "얼마나", "무엇들이",
      "어떻게 하나", "할 수 있나", "해야 하나", "인가", "있나", "가장 좋은 것은", "얼마나 오래",
      "몇 시", "얼마나 자주", "어떤 종류"
    ],
    comparisons: [
      "대", "와 비교하여", "사이의 차이", "보다 나은", "의 대안", "대신에", "또는", "어느 것이 더 나은"
    ]
  }
};