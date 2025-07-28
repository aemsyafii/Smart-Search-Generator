import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Language type definition
export type Language = 'en' | 'id' | 'ar' | 'zh' | 'ja' | 'ru' | 'es' | 'fr' | 'de' | 'pt' | 'hi' | 'ko';

// Translation interface
export interface Translations {
  // App title and description
  appTitle: string;
  appDescription: string;
  
  // Search interface
  searchPlaceholder: string;
  settings: string;
  queries: string;
  engine: string;
  language: string;
  
  // Trending topics
  trendingTopics: string;
  searchSuggestions: string;
  showAll: string;
  
  // Instructions
  startTyping: string;
  configureSettings: string;
  clickShuffle: string;
  
  // Statistics
  explored: string;
  remaining: string;
  remainingInQueue: string;
  
  // Status messages
  allExplored: string;
  allExploredTrending: string;
  checkShowAll: string;
  noSuggestions: string;
  
  // Actions
  clickToSearch: string;
  clickedReplaced: string;
  alreadyExplored: string;
  notYetExplored: string;
  
  // Random button
  getTrendingTopics: string;
  loadingTrending: string;
  fetchingTrending: string;
  
  // Modal
  allSuggestions: string;
  viewAll: string;
  
  // Section headers
  sectionNotExplored: string;
  sectionExplored: string;
  clickToToggle: string;
  hideSection: string;
  showSection: string;
  
  // Search engines
  searchEngines: {
    google: string;
    bing: string;
    duckduckgo: string;
    yahoo: string;
  };
  
  // Languages
  languages: {
    en: string;
    id: string;
    ar: string;
    zh: string;
    ja: string;
    ru: string;
    es: string;
    fr: string;
    de: string;
    pt: string;
    hi: string;
    ko: string;
  };
}

// Translation data
const translations: Record<Language, Translations> = {
  en: {
    appTitle: "Smart Search Generator",
    appDescription: "Generate intelligent search variations and explore them instantly across multiple search engines. Customize query count and track your exploration progress.",
    searchPlaceholder: "Enter a keyword to generate search queries...",
    settings: "Settings",
    queries: "Queries:",
    engine: "Engine:",
    language: "Language:",
    trendingTopics: "Search Suggestions",
    searchSuggestions: "Search Suggestions",
    showAll: "Show All",
    startTyping: "Start typing to see search variations appear in real-time",
    configureSettings: "Configure the number of queries and search engine in settings",
    clickShuffle: "Click {icon} to get random search suggestions",
    explored: "explored",
    remaining: "remaining",
    remainingInQueue: "suggestions remaining in queue",
    allExplored: "All suggestions have been explored! Check \"Show All\" to see your search history.",
    allExploredTrending: "All trending topics have been explored! Check \"Show All\" to see your search history.",
    checkShowAll: "Check \"Show All\" to see your search history.",
    noSuggestions: "No suggestions found for",
    clickToSearch: "Click to search on",
    clickedReplaced: "Clicked suggestions will be replaced with new ones",
    alreadyExplored: "Already Explored",
    notYetExplored: "Not Yet Explored",
    getTrendingTopics: "trending topics from all search engines",
    loadingTrending: "Loading trending topics...",
    fetchingTrending: "Fetching trending topics from all search engines...",
    allSuggestions: "All Suggestions for",
    viewAll: "View all generated search suggestions. Click any suggestion to search on",
    sectionNotExplored: "Not Yet Explored",
    sectionExplored: "Already Explored",
    clickToToggle: "Click to toggle section",
    hideSection: "Hide section",
    showSection: "Show section",
    searchEngines: {
      google: "Google",
      bing: "Bing",
      duckduckgo: "DuckDuckGo",
      yahoo: "Yahoo"
    },
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      ar: "العربية",
      zh: "中文",
      ja: "日本語",
      ru: "Русский",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      hi: "हिन्दी",
      ko: "한국어"
    }
  },
  id: {
    appTitle: "Generator Pencarian Cerdas",
    appDescription: "Hasilkan variasi pencarian cerdas dan jelajahi secara instan di berbagai mesin pencari. Sesuaikan jumlah kueri dan lacak kemajuan eksplorasi Anda.",
    searchPlaceholder: "Masukkan kata kunci untuk menghasilkan kueri pencarian...",
    settings: "Pengaturan",
    queries: "Kueri:",
    engine: "Mesin:",
    language: "Bahasa:",
    trendingTopics: "Saran Pencarian",
    searchSuggestions: "Saran Pencarian",
    showAll: "Tampilkan Semua",
    startTyping: "Mulai mengetik untuk melihat variasi pencarian muncul secara real-time",
    configureSettings: "Konfigurasikan jumlah kueri dan mesin pencari di pengaturan",
    clickShuffle: "Klik {icon} untuk mendapatkan saran pencarian acak",
    explored: "dijelajahi",
    remaining: "tersisa",
    remainingInQueue: "saran tersisa dalam antrian",
    allExplored: "Semua saran telah dijelajahi! Periksa \"Tampilkan Semua\" untuk melihat riwayat pencarian Anda.",
    allExploredTrending: "Semua topik trending telah dijelajahi! Periksa \"Tampilkan Semua\" untuk melihat riwayat pencarian Anda.",
    checkShowAll: "Periksa \"Tampilkan Semua\" untuk melihat riwayat pencarian Anda.",
    noSuggestions: "Tidak ada saran yang ditemukan untuk",
    clickToSearch: "Klik untuk mencari di",
    clickedReplaced: "Saran yang diklik akan diganti dengan yang baru",
    alreadyExplored: "Sudah Dijelajahi",
    notYetExplored: "Belum Dijelajahi",
    getTrendingTopics: "topik trending dari semua mesin pencari",
    loadingTrending: "Memuat topik trending...",
    fetchingTrending: "Mengambil topik trending dari semua mesin pencari...",
    allSuggestions: "Semua Saran untuk",
    viewAll: "Lihat semua saran pencarian yang dihasilkan. Klik saran apa pun untuk mencari di",
    sectionNotExplored: "Belum Dijelajahi",
    sectionExplored: "Sudah Dijelajahi",
    clickToToggle: "Klik untuk toggle bagian",
    hideSection: "Sembunyikan bagian",
    showSection: "Tampilkan bagian",
    searchEngines: {
      google: "Google",
      bing: "Bing",
      duckduckgo: "DuckDuckGo",
      yahoo: "Yahoo"
    },
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      ar: "العربية",
      zh: "中文",
      ja: "日本語",
      ru: "Русский",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      hi: "हिन्दी",
      ko: "한국어"
    }
  },
  ar: {
    appTitle: "منشئ البحث الذكي",
    appDescription: "أنشئ تنويعات بحث ذكية واستكشفها فورياً عبر محركات بحث متعددة. خصص عدد الاستعلامات وتتبع تقدم استكشافك.",
    searchPlaceholder: "أدخل كلمة مفتاحية لإنشاء استعلامات البحث...",
    settings: "الإعدادات",
    queries: "الاستعلامات:",
    engine: "المحرك:",
    language: "اللغة:",
    trendingTopics: "اقتراحات البحث",
    searchSuggestions: "اقتراحات البحث",
    showAll: "إظهار الكل",
    startTyping: "ابدأ بالكتابة لرؤية تنويعات البحث تظهر في الوقت الفعلي",
    configureSettings: "قم بتكوين عدد الاستعلامات ومحرك البحث في الإعدادات",
    clickShuffle: "انقر على {icon} للحصول على اقتراحات بحث عشوائية",
    explored: "تم استكشافها",
    remaining: "متبقية",
    remainingInQueue: "اقتراحات متبقية في الطابور",
    allExplored: "تم استكشاف جميع الاقتراحات! تحقق من \"إظهار الكل\" لرؤية تاريخ البحث الخاص بك.",
    allExploredTrending: "تم استكشاف جميع الموضوعات الرائجة! تحقق من \"إظهار الكل\" لرؤية تاريخ البحث الخاص بك.",
    checkShowAll: "تحقق من \"إظهار الكل\" لرؤية تاريخ البحث الخاص بك.",
    noSuggestions: "لم يتم العثور على اقتراحات لـ",
    clickToSearch: "انقر للبحث في",
    clickedReplaced: "سيتم استبدال الاقتراحات المنقورة بأخرى جديدة",
    alreadyExplored: "تم استكشافها بالفعل",
    notYetExplored: "لم يتم استكشافها بعد",
    getTrendingTopics: "موضوعات رائجة من جميع محركات البحث",
    loadingTrending: "جاري تحميل الموضوعات الرائجة...",
    fetchingTrending: "جاري جلب الموضوعات الرائجة من جميع محركات البحث...",
    allSuggestions: "جميع الاقتراحات لـ",
    viewAll: "عرض جميع اقتراحات البحث المُنشأة. انقر على أي اقتراح للبحث في",
    sectionNotExplored: "لم يتم استكشافها بعد",
    sectionExplored: "تم استكشافها بالفعل",
    clickToToggle: "انقر لتبديل القسم",
    hideSection: "إخفاء القسم",
    showSection: "إظهار القسم",
    searchEngines: {
      google: "جوجل",
      bing: "بينج",
      duckduckgo: "دك دك جو",
      yahoo: "ياهو"
    },
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      ar: "العربية",
      zh: "中文",
      ja: "日本語",
      ru: "Русский",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      hi: "हिन्दी",
      ko: "한국어"
    }
  },
  zh: {
    appTitle: "智能搜索生成器",
    appDescription: "生成智能搜索变化并在多个搜索引擎中即时探索。自定义查询数量并跟踪您的探索进度。",
    searchPlaceholder: "输入关键词以生成搜索查询...",
    settings: "设置",
    queries: "查询:",
    engine: "引擎:",
    language: "语言:",
    trendingTopics: "搜索建议",
    searchSuggestions: "搜索建议",
    showAll: "显示全部",
    startTyping: "开始输入以实时查看搜索变化",
    configureSettings: "在设置中配置查询数量和搜索引擎",
    clickShuffle: "点击 {icon} 获取随机搜索建议",
    explored: "已探索",
    remaining: "剩余",
    remainingInQueue: "队列中剩余建议",
    allExplored: "所有建议都已探索！查看\"显示全部\"以查看您的搜索历史。",
    allExploredTrending: "所有热门话题都已探索！查看\"显示全部\"以查看您的搜索历史。",
    checkShowAll: "查看\"显示全部\"以查看您的搜索历史。",
    noSuggestions: "未找到建议",
    clickToSearch: "点击搜索",
    clickedReplaced: "点击的建议将被新的替换",
    alreadyExplored: "已探索",
    notYetExplored: "尚未探索",
    getTrendingTopics: "来自所有搜索引擎的热门话题",
    loadingTrending: "正在加载热门话题...",
    fetchingTrending: "正在从所有搜索引擎获取热门话题...",
    allSuggestions: "所有建议",
    viewAll: "查看所有生成的搜索建议。点击任何建议以搜索",
    sectionNotExplored: "尚未探索",
    sectionExplored: "已探索",
    clickToToggle: "点击切换部分",
    hideSection: "隐藏部分",
    showSection: "显示部分",
    searchEngines: {
      google: "谷歌",
      bing: "必应",
      duckduckgo: "DuckDuckGo",
      yahoo: "雅虎"
    },
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      ar: "العربية",
      zh: "中文",
      ja: "日本語",
      ru: "Русский",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      hi: "हिन्दी",
      ko: "한국어"
    }
  },
  ja: {
    appTitle: "スマート検索ジェネレーター",
    appDescription: "インテリジェントな検索バリエーションを生成し、複数の検索エンジンで即座に探索。クエリ数をカスタマイズし、探索の進捗を追跡。",
    searchPlaceholder: "検索クエリを生成するキーワードを入力してください...",
    settings: "設定",
    queries: "クエリ:",
    engine: "エンジン:",
    language: "言語:",
    trendingTopics: "検索候補",
    searchSuggestions: "検索候補",
    showAll: "すべて表示",
    startTyping: "入力を開始して、検索バリエーションをリアルタイムで表示",
    configureSettings: "設定でクエリ数と検索エンジンを設定",
    clickShuffle: "{icon} をクリックしてランダムな検索候補を取得",
    explored: "探索済み",
    remaining: "残り",
    remainingInQueue: "キュー内の残り候補",
    allExplored: "すべての候補が探索されました！「すべて表示」で検索履歴を確認してください。",
    allExploredTrending: "すべてのトレンディングトピックが探索されました！「すべて表示」で検索履歴を確認してください。",
    checkShowAll: "「すべて表示」で検索履歴を確認してください。",
    noSuggestions: "候補が見つかりませんでした",
    clickToSearch: "検索するにはクリック",
    clickedReplaced: "クリックされた候補は新しいものに置き換えられます",
    alreadyExplored: "探索済み",
    notYetExplored: "未探索",
    getTrendingTopics: "すべての検索エンジンからのトレンディングトピック",
    loadingTrending: "トレンディングトピックを読み込み中...",
    fetchingTrending: "すべての検索エンジンからトレンディングトピックを取得中...",
    allSuggestions: "すべての候補",
    viewAll: "生成されたすべての検索候補を表示。任意の候補をクリックして検索",
    sectionNotExplored: "未探索",
    sectionExplored: "探索済み",
    clickToToggle: "セクションを切り替えるにはクリック",
    hideSection: "セクションを隠す",
    showSection: "セクションを表示",
    searchEngines: {
      google: "Google",
      bing: "Bing",
      duckduckgo: "DuckDuckGo",
      yahoo: "Yahoo"
    },
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      ar: "العربية",
      zh: "中文",
      ja: "日本語",
      ru: "Русский",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      hi: "हिन्दी",
      ko: "한국어"
    }
  },
  ru: {
    appTitle: "Умный Генератор Поиска",
    appDescription: "Генерируйте умные вариации поиска и исследуйте их мгновенно в нескольких поисковых системах. Настройте количество запросов и отслеживайте прогресс исследования.",
    searchPlaceholder: "Введите ключевое слово для генерации поисковых запросов...",
    settings: "Настройки",
    queries: "Запросы:",
    engine: "Поисковик:",
    language: "Язык:",
    trendingTopics: "Поисковые предложения",
    searchSuggestions: "Поисковые предложения",
    showAll: "Показать все",
    startTyping: "Начните печатать, чтобы увидеть вариации поиска в реальном времени",
    configureSettings: "Настройте количество запросов и поисковую систему в настройках",
    clickShuffle: "Нажмите {icon} для получения случайных поисковых предложений",
    explored: "исследовано",
    remaining: "осталось",
    remainingInQueue: "предложений осталось в очереди",
    allExplored: "Все предложения исследованы! Проверьте \"Показать все\" для просмотра истории поиска.",
    allExploredTrending: "Все популярные темы исследованы! Проверьте \"Показать все\" для просмотра истории поиска.",
    checkShowAll: "Проверьте \"Показать все\" для просмотра истории поиска.",
    noSuggestions: "Предложения не найдены для",
    clickToSearch: "Нажмите для поиска в",
    clickedReplaced: "Нажатые предложения будут заменены новыми",
    alreadyExplored: "Уже исследовано",
    notYetExplored: "Еще не исследовано",
    getTrendingTopics: "популярные темы со всех поисковых систем",
    loadingTrending: "Загрузка популярных тем...",
    fetchingTrending: "Получение популярных тем со всех поисковых систем...",
    allSuggestions: "Все предложения для",
    viewAll: "Просмотреть все сгенерированные поисковые предложения. Нажмите любое предложение для поиска в",
    sectionNotExplored: "Еще не исследовано",
    sectionExplored: "Уже исследовано",
    clickToToggle: "Нажмите для переключения раздела",
    hideSection: "Скрыть раздел",
    showSection: "Показать раздел",
    searchEngines: {
      google: "Google",
      bing: "Bing",
      duckduckgo: "DuckDuckGo",
      yahoo: "Yahoo"
    },
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      ar: "العربية",
      zh: "中文",
      ja: "日本語",
      ru: "Русский",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      hi: "हिन्दी",
      ko: "한국어"
    }
  },
  es: {
    appTitle: "Generador de Búsqueda Inteligente",
    appDescription: "Genera variaciones de búsqueda inteligentes y explóralas instantáneamente en múltiples motores de búsqueda. Personaliza el número de consultas y rastrea tu progreso de exploración.",
    searchPlaceholder: "Ingrese una palabra clave para generar consultas de búsqueda...",
    settings: "Configuración",
    queries: "Consultas:",
    engine: "Motor:",
    language: "Idioma:",
    trendingTopics: "Sugerencias de Búsqueda",
    searchSuggestions: "Sugerencias de Búsqueda",
    showAll: "Mostrar Todo",
    startTyping: "Comience a escribir para ver variaciones de búsqueda en tiempo real",
    configureSettings: "Configure el número de consultas y el motor de búsqueda en configuración",
    clickShuffle: "Haga clic en {icon} para obtener sugerencias de búsqueda aleatorias",
    explored: "explorado",
    remaining: "restante",
    remainingInQueue: "sugerencias restantes en cola",
    allExplored: "¡Todas las sugerencias han sido exploradas! Verifique \"Mostrar Todo\" para ver su historial de búsqueda.",
    allExploredTrending: "¡Todos los temas populares han sido explorados! Verifique \"Mostrar Todo\" para ver su historial de búsqueda.",
    checkShowAll: "Verifique \"Mostrar Todo\" para ver su historial de búsqueda.",
    noSuggestions: "No se encontraron sugerencias para",
    clickToSearch: "Haga clic para buscar en",
    clickedReplaced: "Las sugerencias clickeadas serán reemplazadas por nuevas",
    alreadyExplored: "Ya Explorado",
    notYetExplored: "Aún No Explorado",
    getTrendingTopics: "temas populares de todos los motores de búsqueda",
    loadingTrending: "Cargando temas populares...",
    fetchingTrending: "Obteniendo temas populares de todos los motores de búsqueda...",
    allSuggestions: "Todas las Sugerencias para",
    viewAll: "Ver todas las sugerencias de búsqueda generadas. Haga clic en cualquier sugerencia para buscar en",
    sectionNotExplored: "Aún No Explorado",
    sectionExplored: "Ya Explorado",
    clickToToggle: "Haga clic para alternar sección",
    hideSection: "Ocultar sección",
    showSection: "Mostrar sección",
    searchEngines: {
      google: "Google",
      bing: "Bing",
      duckduckgo: "DuckDuckGo",
      yahoo: "Yahoo"
    },
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      ar: "العربية",
      zh: "中文",
      ja: "日本語",
      ru: "Русский",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      hi: "हिन्दी",
      ko: "한국어"
    }
  },
  fr: {
    appTitle: "Générateur de Recherche Intelligent",
    appDescription: "Générez des variations de recherche intelligentes et explorez-les instantanément sur plusieurs moteurs de recherche. Personnalisez le nombre de requêtes et suivez votre progression d'exploration.",
    searchPlaceholder: "Entrez un mot-clé pour générer des requêtes de recherche...",
    settings: "Paramètres",
    queries: "Requêtes:",
    engine: "Moteur:",
    language: "Langue:",
    trendingTopics: "Suggestions de Recherche",
    searchSuggestions: "Suggestions de Recherche",
    showAll: "Tout Afficher",
    startTyping: "Commencez à taper pour voir les variations de recherche en temps réel",
    configureSettings: "Configurez le nombre de requêtes et le moteur de recherche dans les paramètres",
    clickShuffle: "Cliquez sur {icon} pour obtenir des suggestions de recherche aléatoires",
    explored: "exploré",
    remaining: "restant",
    remainingInQueue: "suggestions restantes dans la file",
    allExplored: "Toutes les suggestions ont été explorées! Vérifiez \"Tout Afficher\" pour voir votre historique de recherche.",
    allExploredTrending: "Tous les sujets tendances ont été explorés! Vérifiez \"Tout Afficher\" pour voir votre historique de recherche.",
    checkShowAll: "Vérifiez \"Tout Afficher\" pour voir votre historique de recherche.",
    noSuggestions: "Aucune suggestion trouvée pour",
    clickToSearch: "Cliquez pour rechercher sur",
    clickedReplaced: "Les suggestions cliquées seront remplacées par de nouvelles",
    alreadyExplored: "Déjà Exploré",
    notYetExplored: "Pas Encore Exploré",
    getTrendingTopics: "sujets tendances de tous les moteurs de recherche",
    loadingTrending: "Chargement des sujets tendances...",
    fetchingTrending: "Récupération des sujets tendances de tous les moteurs de recherche...",
    allSuggestions: "Toutes les Suggestions pour",
    viewAll: "Voir toutes les suggestions de recherche générées. Cliquez sur n'importe quelle suggestion pour rechercher sur",
    sectionNotExplored: "Pas Encore Exploré",
    sectionExplored: "Déjà Exploré",
    clickToToggle: "Cliquez pour basculer la section",
    hideSection: "Masquer la section",
    showSection: "Afficher la section",
    searchEngines: {
      google: "Google",
      bing: "Bing",
      duckduckgo: "DuckDuckGo",
      yahoo: "Yahoo"
    },
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      ar: "العربية",
      zh: "中文",
      ja: "日本語",
      ru: "Русский",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      hi: "हिन्दी",
      ko: "한국어"
    }
  },
  de: {
    appTitle: "Intelligenter Suchgenerator",
    appDescription: "Generieren Sie intelligente Suchvariationen und erkunden Sie sie sofort über mehrere Suchmaschinen. Passen Sie die Anzahl der Abfragen an und verfolgen Sie Ihren Erkundungsfortschritt.",
    searchPlaceholder: "Geben Sie ein Stichwort ein, um Suchanfragen zu generieren...",
    settings: "Einstellungen",
    queries: "Abfragen:",
    engine: "Suchmaschine:",
    language: "Sprache:",
    trendingTopics: "Suchvorschläge",
    searchSuggestions: "Suchvorschläge",
    showAll: "Alle Anzeigen",
    startTyping: "Beginnen Sie mit der Eingabe, um Suchvariationen in Echtzeit zu sehen",
    configureSettings: "Konfigurieren Sie die Anzahl der Abfragen und die Suchmaschine in den Einstellungen",
    clickShuffle: "Klicken Sie auf {icon} um zufällige Suchvorschläge zu erhalten",
    explored: "erkundet",
    remaining: "verbleibend",
    remainingInQueue: "verbleibende Vorschläge in der Warteschlange",
    allExplored: "Alle Vorschläge wurden erkundet! Überprüfen Sie \"Alle Anzeigen\" für Ihren Suchverlauf.",
    allExploredTrending: "Alle Trend-Themen wurden erkundet! Überprüfen Sie \"Alle Anzeigen\" für Ihren Suchverlauf.",
    checkShowAll: "Überprüfen Sie \"Alle Anzeigen\" für Ihren Suchverlauf.",
    noSuggestions: "Keine Vorschläge gefunden für",
    clickToSearch: "Klicken Sie, um zu suchen auf",
    clickedReplaced: "Angeklickte Vorschläge werden durch neue ersetzt",
    alreadyExplored: "Bereits Erkundet",
    notYetExplored: "Noch Nicht Erkundet",
    getTrendingTopics: "Trend-Themen von allen Suchmaschinen",
    loadingTrending: "Trend-Themen werden geladen...",
    fetchingTrending: "Trend-Themen von allen Suchmaschinen werden abgerufen...",
    allSuggestions: "Alle Vorschläge für",
    viewAll: "Alle generierten Suchvorschläge anzeigen. Klicken Sie auf einen Vorschlag, um zu suchen auf",
    sectionNotExplored: "Noch Nicht Erkundet",
    sectionExplored: "Bereits Erkundet",
    clickToToggle: "Klicken Sie, um den Abschnitt umzuschalten",
    hideSection: "Abschnitt ausblenden",
    showSection: "Abschnitt anzeigen",
    searchEngines: {
      google: "Google",
      bing: "Bing",
      duckduckgo: "DuckDuckGo",
      yahoo: "Yahoo"
    },
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      ar: "العربية",
      zh: "中文",
      ja: "日本語",
      ru: "Русский",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      hi: "हिन्दी",
      ko: "한국어"
    }
  },
  pt: {
    appTitle: "Gerador de Busca Inteligente",
    appDescription: "Gere variações de busca inteligentes e explore-as instantaneamente em múltiplos motores de busca. Personalize o número de consultas e acompanhe seu progresso de exploração.",
    searchPlaceholder: "Digite uma palavra-chave para gerar consultas de pesquisa...",
    settings: "Configurações",
    queries: "Consultas:",
    engine: "Motor:",
    language: "Idioma:",
    trendingTopics: "Sugestões de Pesquisa",
    searchSuggestions: "Sugestões de Pesquisa",
    showAll: "Mostrar Tudo",
    startTyping: "Comece a digitar para ver variações de busca em tempo real",
    configureSettings: "Configure o número de consultas e o motor de busca nas configurações",
    clickShuffle: "Clique em {icon} para obter sugestões de busca aleatórias",
    explored: "explorado",
    remaining: "restante",
    remainingInQueue: "sugestões restantes na fila",
    allExplored: "Todas as sugestões foram exploradas! Verifique \"Mostrar Tudo\" para ver seu histórico de pesquisa.",
    allExploredTrending: "Todos os tópicos em tendência foram explorados! Verifique \"Mostrar Tudo\" para ver seu histórico de pesquisa.",
    checkShowAll: "Verifique \"Mostrar Tudo\" para ver seu histórico de pesquisa.",
    noSuggestions: "Nenhuma sugestão encontrada para",
    clickToSearch: "Clique para pesquisar no",
    clickedReplaced: "Sugestões clicadas serão substituídas por novas",
    alreadyExplored: "Já Explorado",
    notYetExplored: "Ainda Não Explorado",
    getTrendingTopics: "tópicos em tendência de todos os motores de busca",
    loadingTrending: "Carregando tópicos em tendência...",
    fetchingTrending: "Buscando tópicos em tendência de todos os motores de busca...",
    allSuggestions: "Todas as Sugestões para",
    viewAll: "Ver todas as sugestões de pesquisa geradas. Clique em qualquer sugestão para pesquisar no",
    sectionNotExplored: "Ainda Não Explorado",
    sectionExplored: "Já Explorado",
    clickToToggle: "Clique para alternar seção",
    hideSection: "Ocultar seção",
    showSection: "Mostrar seção",
    searchEngines: {
      google: "Google",
      bing: "Bing",
      duckduckgo: "DuckDuckGo",
      yahoo: "Yahoo"
    },
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      ar: "العربية",
      zh: "中文",
      ja: "日本語",
      ru: "Русский",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      hi: "हिन्दी",
      ko: "한국어"
    }
  },
  hi: {
    appTitle: "स्मार्ट खोज जेनरेटर",
    appDescription: "बुद्धिमान खोज विविधताएं उत्पन्न करें और उन्हें कई खोज इंजनों पर तुरंत एक्सप्लोर करें। क्वेरी संख्या को कस्टमाइज़ करें और अपनी एक्सप्लोरेशन प्रगति को ट्रैक करें।",
    searchPlaceholder: "खोज क्वेरी उत्पन्न करने के लिए एक मुख्यशब्द दर्ज करें...",
    settings: "सेटिंग्स",
    queries: "क्वेरी:",
    engine: "इंजन:",
    language: "भाषा:",
    trendingTopics: "खोज सुझाव",
    searchSuggestions: "खोज सुझाव",
    showAll: "सभी दिखाएं",
    startTyping: "रीयल-टाइम में खोज विविधताएं देखने के लिए टाइप करना शुरू करें",
    configureSettings: "सेटिंग्स में क्वेरी संख्या और खोज इंजन कॉन्फ़िगर करें",
    clickShuffle: "यादृच्छिक खोज सुझाव प्राप्त करने के लिए {icon} पर क्लिक करें",
    explored: "खोजा गया",
    remaining: "शेष",
    remainingInQueue: "कतार में शेष सुझाव",
    allExplored: "सभी सुझाव खोजे गए हैं! अपना खोज इतिहास देखने के लिए \"सभी दिखाएं\" की जांच करें।",
    allExploredTrending: "सभी ट्रेंडिंग टॉपिक्स खोजे गए हैं! अपना खोज इतिहास देखने के लिए \"सभी दिखाएं\" की जांच करें।",
    checkShowAll: "अपना खोज इतिहास देखने के लिए \"सभी दिखाएं\" की जांच करें।",
    noSuggestions: "के लिए कोई सुझाव नहीं मिला",
    clickToSearch: "में खोजने के लिए क्लिक करें",
    clickedReplaced: "क्लिक किए गए सुझाव नए से बदल दिए जाएंगे",
    alreadyExplored: "पहले से खोजा गया",
    notYetExplored: "अभी तक नहीं खोजा गया",
    getTrendingTopics: "सभी खोज इंजन से ट्रेंडिंग टॉपिक्स",
    loadingTrending: "ट्रेंडिंग टॉपिक्स लोड हो रहे हैं...",
    fetchingTrending: "सभी खोज इंजन से ट्रेंडिंग टॉपिक्स प्राप्त कर रहे हैं...",
    allSuggestions: "के लिए सभी सुझाव",
    viewAll: "सभी उत्पन्न खोज सुझाव देखें। में खोजने के लिए किसी भी सुझाव पर क्लिक करें",
    sectionNotExplored: "अभी तक नहीं खोजा गया",
    sectionExplored: "पहले से खोजा गया",
    clickToToggle: "सेक्शन टॉगल करने के लिए क्लिक करें",
    hideSection: "सेक्शन छुपाएं",
    showSection: "सेक्शन दिखाएं",
    searchEngines: {
      google: "Google",
      bing: "Bing",
      duckduckgo: "DuckDuckGo",
      yahoo: "Yahoo"
    },
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      ar: "العربية",
      zh: "中文",
      ja: "日本語",
      ru: "Русский",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      hi: "हिन्दी",
      ko: "한국어"
    }
  },
  ko: {
    appTitle: "스마트 검색 생성기",
    appDescription: "지능적인 검색 변형을 생성하고 여러 검색 엔진에서 즉시 탐색하세요. 쿼리 수를 사용자 정의하고 탐색 진행 상황을 추적하세요.",
    searchPlaceholder: "검색 쿼리를 생성할 키워드를 입력하세요...",
    settings: "설정",
    queries: "쿼리:",
    engine: "엔진:",
    language: "언어:",
    trendingTopics: "검색 제안",
    searchSuggestions: "검색 제안",
    showAll: "모두 보기",
    startTyping: "실시간으로 검색 변형을 보려면 입력을 시작하세요",
    configureSettings: "설정에서 쿼리 수와 검색 엔진을 구성하세요",
    clickShuffle: "{icon}을 클릭하여 무작위 검색 제안을 받으세요",
    explored: "탐색됨",
    remaining: "남은",
    remainingInQueue: "대기열에 남은 제안",
    allExplored: "모든 제안이 탐색되었습니다! 검색 기록을 보려면 \"모두 보기\"를 확인하세요.",
    allExploredTrending: "모든 트렌딩 토픽이 탐색되었습니다! 검색 기록을 보려면 \"모두 보기\"를 확인하세요.",
    checkShowAll: "검색 기록을 보려면 \"모두 보기\"를 확인하세요.",
    noSuggestions: "에 대한 제안이 없습니다",
    clickToSearch: "에서 검색하려면 클릭하세요",
    clickedReplaced: "클릭된 제안은 새로운 것으로 대체됩니다",
    alreadyExplored: "이미 탐색됨",
    notYetExplored: "아직 탐색되지 않음",
    getTrendingTopics: "모든 검색 엔진의 트렌딩 토픽",
    loadingTrending: "트렌딩 토픽 로딩 중...",
    fetchingTrending: "모든 검색 엔진에서 트렌딩 토픽을 가져오는 중...",
    allSuggestions: "모든 제안",
    viewAll: "생성된 모든 검색 제안을 봅니다. 에서 검색하려면 제안을 클릭하세요",
    sectionNotExplored: "아직 탐색되지 않음",
    sectionExplored: "이미 탐색됨",
    clickToToggle: "섹션을 토글하려면 클릭하세요",
    hideSection: "섹션 숨기기",
    showSection: "섹션 보기",
    searchEngines: {
      google: "Google",
      bing: "Bing",
      duckduckgo: "DuckDuckGo",
      yahoo: "Yahoo"
    },
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      ar: "العربية",
      zh: "中文",
      ja: "日本語",
      ru: "Русский",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      pt: "Português",
      hi: "हिन्दी",
      ko: "한국어"
    }
  }
};

// Language context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('preferred-language', language);
    
    // Set document direction for RTL languages
    const isRTL = language === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];
  const isRTL = language === 'ar';

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isRTL
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};