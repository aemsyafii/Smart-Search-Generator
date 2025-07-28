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
  copyMode: string;
  sameTab: string;
  
  // Trending topics
  searchSuggestions: string;
  showAll: string;
  
  // Instructions
  startTyping: string;
  configureSettings: string;
  clickShuffle: string;
  
  // Statistics
  explored: string;
  remaining: string;
  
  // Status messages
  allExplored: string;
  checkShowAll: string;
  noSuggestions: string;
  
  // Actions
  clickToSearch: string;
  clickToCopy: string;
  clickedReplaced: string;
  alreadyExplored: string;
  notYetExplored: string;
  
  // Copy feature
  copySuccess: string;
  copyFailed: string;
  selectText: string;
  
  // Shuffle button
  generateSuggestions: string;
  loadingSuggestions: string;
  
  // Modal
  allSuggestions: string;
  
  // Section headers
  sectionNotExplored: string;
  sectionExplored: string;
  clickToToggle: string;
  
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
    copyMode: "Copy Mode",
    sameTab: "Same Tab",
    searchSuggestions: "Search Suggestions",
    showAll: "Show All",
    startTyping: "Start typing to see search variations appear in real-time",
    configureSettings: "Configure the number of queries and search engine in settings",
    clickShuffle: "Click {icon} to generate random search suggestions",
    explored: "explored",
    remaining: "remaining",
    allExplored: "All suggestions have been explored! Check \"Show All\" to see your search history.",
    checkShowAll: "Check \"Show All\" to see your search history.",
    noSuggestions: "No suggestions found for",
    clickToSearch: "Click to search on",
    clickToCopy: "Click to copy text",
    clickedReplaced: "Clicked suggestions will be replaced with new ones",
    alreadyExplored: "Already Explored",
    notYetExplored: "Not Yet Explored",
    copySuccess: "Text copied to clipboard",
    copyFailed: "Copy failed - Browser restrictions detected",
    selectText: "Select Text",
    generateSuggestions: "Generate random search suggestions",
    loadingSuggestions: "Loading suggestions...",
    allSuggestions: "All Suggestions for",
    sectionNotExplored: "Not Yet Explored",
    sectionExplored: "Already Explored",
    clickToToggle: "Click to toggle section",
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
    copyMode: "Mode Salin",
    sameTab: "Tab Sama",
    searchSuggestions: "Saran Pencarian",
    showAll: "Tampilkan Semua",
    startTyping: "Mulai mengetik untuk melihat variasi pencarian muncul secara real-time",
    configureSettings: "Konfigurasikan jumlah kueri dan mesin pencari di pengaturan",
    clickShuffle: "Klik {icon} untuk menghasilkan saran pencarian acak",
    explored: "dijelajahi",
    remaining: "tersisa",
    allExplored: "Semua saran telah dijelajahi! Periksa \"Tampilkan Semua\" untuk melihat riwayat pencarian Anda.",
    checkShowAll: "Periksa \"Tampilkan Semua\" untuk melihat riwayat pencarian Anda.",
    noSuggestions: "Tidak ada saran yang ditemukan untuk",
    clickToSearch: "Klik untuk mencari di",
    clickToCopy: "Klik untuk menyalin teks",
    clickedReplaced: "Saran yang diklik akan diganti dengan yang baru",
    alreadyExplored: "Sudah Dijelajahi",
    notYetExplored: "Belum Dijelajahi",
    copySuccess: "Teks tersalin ke clipboard",
    copyFailed: "Salin gagal - Browser memblokir akses clipboard",
    selectText: "Pilih Teks",
    generateSuggestions: "Hasilkan saran pencarian acak",
    loadingSuggestions: "Memuat saran...",
    allSuggestions: "Semua Saran untuk",
    sectionNotExplored: "Belum Dijelajahi",
    sectionExplored: "Sudah Dijelajahi",
    clickToToggle: "Klik untuk toggle bagian",
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
    copyMode: "وضع النسخ",
    sameTab: "نفس التبويب",
    searchSuggestions: "اقتراحات البحث",
    showAll: "إظهار الكل",
    startTyping: "ابدأ بالكتابة لرؤية تنويعات البحث تظهر في الوقت الفعلي",
    configureSettings: "قم بتكوين عدد الاستعلامات ومحرك البحث في الإعدادات",
    clickShuffle: "انقر على {icon} لإنشاء اقتراحات بحث عشوائية",
    explored: "تم استكشافها",
    remaining: "متبقية",
    allExplored: "تم استكشاف جميع الاقتراحات! تحقق من \"إظهار الكل\" لرؤية تاريخ البحث الخاص بك.",
    checkShowAll: "تحقق من \"إظهار الكل\" لرؤية تاريخ البحث الخاص بك.",
    noSuggestions: "لم يتم العثور على اقتراحات لـ",
    clickToSearch: "انقر للبحث في",
    clickToCopy: "انقر لنسخ النص",
    clickedReplaced: "سيتم استبدال الاقتراحات المنقورة بأخرى جديدة",
    alreadyExplored: "تم استكشافها بالفعل",
    notYetExplored: "لم يتم استكشافها بعد",
    copySuccess: "تم نسخ النص إلى الحافظة",
    copyFailed: "فشل النسخ - المتصفح يحظر الوصول للحافظة",
    selectText: "تحديد النص",
    generateSuggestions: "إنشاء اقتراحات بحث عشوائية",
    loadingSuggestions: "جاري تحميل الاقتراحات...",
    allSuggestions: "جميع الاقتراحات لـ",
    sectionNotExplored: "لم يتم استكشافها بعد",
    sectionExplored: "تم استكشافها بالفعل",
    clickToToggle: "انقر لتبديل القسم",
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
    copyMode: "复制模式",
    sameTab: "同一标签页",
    searchSuggestions: "搜索建议",
    showAll: "显示全部",
    startTyping: "开始输入以实时查看搜索变化",
    configureSettings: "在设置中配置查询数量和搜索引擎",
    clickShuffle: "点击 {icon} 生成随机搜索建议",
    explored: "已探索",
    remaining: "剩余",
    allExplored: "所有建议都已探索！查看\"显示全部\"以查看您的搜索历史。",
    checkShowAll: "查看\"显示全部\"以查看您的搜索历史。",
    noSuggestions: "未找到建议",
    clickToSearch: "点击搜索",
    clickToCopy: "点击复制文本",
    clickedReplaced: "点击的建议将被新的替换",
    alreadyExplored: "已探索",
    notYetExplored: "尚未探索",
    copySuccess: "文本已复制到剪贴板",
    copyFailed: "复制失败 - 浏览器限制剪贴板访问",
    selectText: "选择文本",
    generateSuggestions: "生成随机搜索建议",
    loadingSuggestions: "正在加载建议...",
    allSuggestions: "所有建议",
    sectionNotExplored: "尚未探索",
    sectionExplored: "已探索",
    clickToToggle: "点击切换部分",
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
    copyMode: "コピーモード",
    sameTab: "同じタブ",
    searchSuggestions: "検索候補",
    showAll: "すべて表示",
    startTyping: "入力を開始して、検索バリエーションをリアルタイムで表示",
    configureSettings: "設定でクエリ数と検索エンジンを設定",
    clickShuffle: "{icon} をクリックしてランダムな検索候補を生成",
    explored: "探索済み",
    remaining: "残り",
    allExplored: "すべての候補が探索されました！「すべて表示」で検索履歴を確認してください。",
    checkShowAll: "「すべて表示」で検索履歴を確認してください。",
    noSuggestions: "候補が見つかりませんでした",
    clickToSearch: "検索するにはクリック",
    clickToCopy: "テキストをコピーするにはクリック",
    clickedReplaced: "クリックされた候補は新しいものに置き換えられます",
    alreadyExplored: "探索済み",
    notYetExplored: "未探索",
    copySuccess: "テキストがクリップボードにコピーされました",
    copyFailed: "コピー失敗 - ブラウザがクリップボードアクセスを制限",
    selectText: "テキストを選択",
    generateSuggestions: "ランダムな検索候補を生成",
    loadingSuggestions: "候補を読み込み中...",
    allSuggestions: "すべての候補",
    sectionNotExplored: "未探索",
    sectionExplored: "探索済み",
    clickToToggle: "セクションを切り替えるにはクリック",
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
    copyMode: "Режим копирования",
    sameTab: "Та же вкладка",
    searchSuggestions: "Поисковые предложения",
    showAll: "Показать все",
    startTyping: "Начните печатать, чтобы увидеть вариации поиска в реальном времени",
    configureSettings: "Настройте количество запросов и поисковую систему в настройках",
    clickShuffle: "Нажмите {icon} для генерации случайных поисковых предложений",
    explored: "исследовано",
    remaining: "осталось",
    allExplored: "Все предложения исследованы! Проверьте \"Показать все\" для просмотра истории поиска.",
    checkShowAll: "Проверьте \"Показать все\" для просмотра истории поиска.",
    noSuggestions: "Предложения не найдены для",
    clickToSearch: "Нажмите для поиска в",
    clickToCopy: "Нажмите для копирования текста",
    clickedReplaced: "Нажатые предложения будут заменены новыми",
    alreadyExplored: "Уже исследовано",
    notYetExplored: "Еще не исследовано",
    copySuccess: "Текст скопирован в буфер обмена",
    copyFailed: "Копирование не удалось - браузер ограничивает доступ к буферу",
    selectText: "Выделить текст",
    generateSuggestions: "Генерировать случайные поисковые предложения",
    loadingSuggestions: "Загрузка предложений...",
    allSuggestions: "Все предложения для",
    sectionNotExplored: "Еще не исследовано",
    sectionExplored: "Уже исследовано",
    clickToToggle: "Нажмите для переключения раздела",
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
    copyMode: "Modo Copia",
    sameTab: "Misma Pestaña",
    searchSuggestions: "Sugerencias de Búsqueda",
    showAll: "Mostrar Todo",
    startTyping: "Comience a escribir para ver variaciones de búsqueda en tiempo real",
    configureSettings: "Configure el número de consultas y el motor de búsqueda en configuración",
    clickShuffle: "Haga clic en {icon} para generar sugerencias de búsqueda aleatorias",
    explored: "explorado",
    remaining: "restante",
    allExplored: "¡Todas las sugerencias han sido exploradas! Verifique \"Mostrar Todo\" para ver su historial de búsqueda.",
    checkShowAll: "Verifique \"Mostrar Todo\" para ver su historial de búsqueda.",
    noSuggestions: "No se encontraron sugerencias para",
    clickToSearch: "Haga clic para buscar en",
    clickToCopy: "Haga clic para copiar texto",
    clickedReplaced: "Las sugerencias clickeadas serán reemplazadas por nuevas",
    alreadyExplored: "Ya Explorado",
    notYetExplored: "Aún No Explorado",
    copySuccess: "Texto copiado al portapapeles",
    copyFailed: "Copia falló - El navegador restringe el acceso al portapapeles",
    selectText: "Seleccionar Texto",
    generateSuggestions: "Generar sugerencias de búsqueda aleatorias",
    loadingSuggestions: "Cargando sugerencias...",
    allSuggestions: "Todas las Sugerencias para",
    sectionNotExplored: "Aún No Explorado",
    sectionExplored: "Ya Explorado",
    clickToToggle: "Haga clic para alternar sección",
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
    copyMode: "Mode Copie",
    sameTab: "Même Onglet",
    searchSuggestions: "Suggestions de Recherche",
    showAll: "Tout Afficher",
    startTyping: "Commencez à taper pour voir les variations de recherche en temps réel",
    configureSettings: "Configurez le nombre de requêtes et le moteur de recherche dans les paramètres",
    clickShuffle: "Cliquez sur {icon} pour générer des suggestions de recherche aléatoires",
    explored: "exploré",
    remaining: "restant",
    allExplored: "Toutes les suggestions ont été explorées! Vérifiez \"Tout Afficher\" pour voir votre historique de recherche.",
    checkShowAll: "Vérifiez \"Tout Afficher\" pour voir votre historique de recherche.",
    noSuggestions: "Aucune suggestion trouvée pour",
    clickToSearch: "Cliquez pour rechercher sur",
    clickToCopy: "Cliquez pour copier le texte",
    clickedReplaced: "Les suggestions cliquées seront remplacées par de nouvelles",
    alreadyExplored: "Déjà Exploré",
    notYetExplored: "Pas Encore Exploré",
    copySuccess: "Texte copié dans le presse-papiers",
    copyFailed: "Copie échouée - Le navigateur restreint l'accès au presse-papiers",
    selectText: "Sélectionner le Texte",
    generateSuggestions: "Générer des suggestions de recherche aléatoires",
    loadingSuggestions: "Chargement des suggestions...",
    allSuggestions: "Toutes les Suggestions pour",
    sectionNotExplored: "Pas Encore Exploré",
    sectionExplored: "Déjà Exploré",
    clickToToggle: "Cliquez pour basculer la section",
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
    copyMode: "Kopiermodus",
    sameTab: "Gleicher Tab",
    searchSuggestions: "Suchvorschläge",
    showAll: "Alle Anzeigen",
    startTyping: "Beginnen Sie mit der Eingabe, um Suchvariationen in Echtzeit zu sehen",
    configureSettings: "Konfigurieren Sie die Anzahl der Abfragen und die Suchmaschine in den Einstellungen",
    clickShuffle: "Klicken Sie auf {icon} um zufällige Suchvorschläge zu generieren",
    explored: "erkundet",
    remaining: "verbleibend",
    allExplored: "Alle Vorschläge wurden erkundet! Überprüfen Sie \"Alle Anzeigen\" für Ihren Suchverlauf.",
    checkShowAll: "Überprüfen Sie \"Alle Anzeigen\" für Ihren Suchverlauf.",
    noSuggestions: "Keine Vorschläge gefunden für",
    clickToSearch: "Klicken Sie, um zu suchen auf",
    clickToCopy: "Klicken Sie, um Text zu kopieren",
    clickedReplaced: "Angeklickte Vorschläge werden durch neue ersetzt",
    alreadyExplored: "Bereits Erkundet",
    notYetExplored: "Noch Nicht Erkundet",
    copySuccess: "Text in die Zwischenablage kopiert",
    copyFailed: "Kopieren fehlgeschlagen - Browser beschränkt Zwischenablage-Zugriff",
    selectText: "Text auswählen",
    generateSuggestions: "Zufällige Suchvorschläge generieren",
    loadingSuggestions: "Lade Vorschläge...",
    allSuggestions: "Alle Vorschläge für",
    sectionNotExplored: "Noch Nicht Erkundet",
    sectionExplored: "Bereits Erkundet",
    clickToToggle: "Klicken Sie, um den Abschnitt umzuschalten",
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
    copyMode: "Modo Cópia",
    sameTab: "Mesma Aba",
    searchSuggestions: "Sugestões de Pesquisa",
    showAll: "Mostrar Tudo",
    startTyping: "Comece a digitar para ver variações de busca em tempo real",
    configureSettings: "Configure o número de consultas e o motor de busca nas configurações",
    clickShuffle: "Clique em {icon} para gerar sugerências de busca aleatórias",
    explored: "explorado",
    remaining: "restante",
    allExplored: "Todas as sugestões foram exploradas! Verifique \"Mostrar Tudo\" para ver seu histórico de pesquisa.",
    checkShowAll: "Verifique \"Mostrar Tudo\" para ver seu histórico de pesquisa.",
    noSuggestions: "Nenhuma sugestão encontrada para",
    clickToSearch: "Clique para pesquisar no",
    clickToCopy: "Clique para copiar texto",
    clickedReplaced: "Sugestões clicadas serão substituídas por novas",
    alreadyExplored: "Já Explorado",
    notYetExplored: "Ainda Não Explorado",
    copySuccess: "Texto copiado para a área de transferência",
    copyFailed: "Cópia falhou - Navegador restringe acesso à área de transferência",
    selectText: "Selecionar Texto",
    generateSuggestions: "Gerar sugerências de busca aleatórias",
    loadingSuggestions: "Carregando sugerências...",
    allSuggestions: "Todas as Sugestões para",
    sectionNotExplored: "Ainda Não Explorado",
    sectionExplored: "Já Explorado",
    clickToToggle: "Clique para alternar seção",
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
    copyMode: "कॉपी मोड",
    sameTab: "समान टैब",
    searchSuggestions: "खोज सुझाव",
    showAll: "सभी दिखाएं",
    startTyping: "रीयल-टाइम में खोज विविधताएं देखने के लिए टाइप करना शुरू करें",
    configureSettings: "सेटिंग्स में क्वेरी संख्या और खोज इंजन कॉन्फ़िगर करें",
    clickShuffle: "यादृच्छिक खोज सुझाव उत्पन्न करने के लिए {icon} पर क्लिक करें",
    explored: "खोजा गया",
    remaining: "शेष",
    allExplored: "सभी सुझाव खोजे गए हैं! अपना खोज इतिहास देखने के लिए \"सभी दिखाएं\" की जांच करें।",
    checkShowAll: "अपना खोज इतिहास देखने के लिए \"सभी दिखाएं\" की जांच करें।",
    noSuggestions: "के लिए कोई सुझाव नहीं मिला",
    clickToSearch: "में खोजने के लिए क्लिक करें",
    clickToCopy: "टेक्स्ट कॉपी करने के लिए क्लिक करें",
    clickedReplaced: "क्लिक किए गए सुझाव नए से बदल दिए जाएंगे",
    alreadyExplored: "पहले से खोजा गया",
    notYetExplored: "अभी तक नहीं खोजा गया",
    copySuccess: "टेक्स्ट क्लिपबोर्ड में कॉपी हो गया",
    copyFailed: "कॉपी असफल - ब्राउज़र क्लिपबोर्ड एक्सेस प्रतिबंधित करता है",
    selectText: "टेक्स्ट चुनें",
    generateSuggestions: "यादृच्छिक खोज सुझाव उत्पन्न करें",
    loadingSuggestions: "सुझाव लोड हो रहे हैं...",
    allSuggestions: "के लिए सभी सुझाव",
    sectionNotExplored: "अभी तक नहीं खोजा गया",
    sectionExplored: "पहले से खोजा गया",
    clickToToggle: "सेक्शन टॉगल करने के लिए क्लिक करें",
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
    copyMode: "복사 모드",
    sameTab: "같은 탭",
    searchSuggestions: "검색 제안",
    showAll: "모두 보기",
    startTyping: "실시간으로 검색 변형을 보려면 입력을 시작하세요",
    configureSettings: "설정에서 쿼리 수와 검색 엔진을 구성하세요",
    clickShuffle: "{icon}을 클릭하여 무작위 검색 제안을 생성하세요",
    explored: "탐색됨",
    remaining: "남은",
    allExplored: "모든 제안이 탐색되었습니다! 검색 기록을 보려면 \"모두 보기\"를 확인하세요.",
    checkShowAll: "검색 기록을 보려면 \"모두 보기\"를 확인하세요.",
    noSuggestions: "에 대한 제안이 없습니다",
    clickToSearch: "에서 검색하려면 클릭하세요",
    clickToCopy: "텍스트를 복사하려면 클릭하세요",
    clickedReplaced: "클릭된 제안은 새로운 것으로 대체됩니다",
    alreadyExplored: "이미 탐색됨",
    notYetExplored: "아직 탐색되지 않음",
    copySuccess: "텍스트가 클립보드에 복사되었습니다",
    copyFailed: "복사 실패 - 브라우저가 클립보드 접근을 제한합니다",
    selectText: "텍스트 선택",
    generateSuggestions: "무작위 검색 제안 생성",
    loadingSuggestions: "제안 로딩 중...",
    allSuggestions: "모든 제안",
    sectionNotExplored: "아직 탐색되지 않음",
    sectionExplored: "이미 탐색됨",
    clickToToggle: "섹션을 토글하려면 클릭하세요",
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