import { TrendingTopic, Language } from '../types';

// Culturally relevant trending topics for each supported language
export const trendingTopics: Record<Language, TrendingTopic[]> = {
  en: [
    {
      category: "Technology",
      topics: [
        "artificial intelligence trends 2024",
        "best programming languages to learn",
        "cybersecurity best practices",
        "cloud computing solutions",
        "machine learning tutorials",
        "blockchain technology explained",
        "quantum computing basics",
        "5G network implementation",
        "IoT devices security",
        "virtual reality applications"
      ]
    },
    {
      category: "Health & Wellness",
      topics: [
        "mental health awareness",
        "healthy eating habits",
        "workout routines for beginners",
        "meditation techniques",
        "sleep quality improvement",
        "stress management tips",
        "yoga for flexibility",
        "nutrition facts guide",
        "mindfulness practices",
        "immune system boosting"
      ]
    },
    {
      category: "Business & Finance",
      topics: [
        "cryptocurrency investment guide",
        "passive income strategies",
        "small business marketing",
        "stock market analysis",
        "digital transformation",
        "e-commerce trends",
        "financial planning tips",
        "startup funding options",
        "remote work productivity",
        "personal budgeting"
      ]
    },
    {
      category: "Education & Skills",
      topics: [
        "online learning platforms",
        "skill development courses",
        "career change guide",
        "interview preparation tips",
        "public speaking skills",
        "time management techniques",
        "critical thinking exercises",
        "language learning apps",
        "certification programs",
        "professional networking"
      ]
    },
    {
      category: "Lifestyle & Hobbies",
      topics: [
        "sustainable living tips",
        "home gardening basics",
        "travel planning guide",
        "cooking recipes healthy",
        "DIY home projects",
        "photography techniques",
        "book recommendations",
        "music streaming services",
        "pet care tips",
        "fashion trends 2024"
      ]
    }
  ],
  id: [
    {
      category: "Teknologi",
      topics: [
        "tren kecerdasan buatan 2024",
        "bahasa pemrograman terbaik",
        "keamanan siber Indonesia",
        "solusi cloud computing",
        "tutorial machine learning",
        "teknologi blockchain dijelaskan",
        "dasar-dasar quantum computing",
        "implementasi jaringan 5G",
        "keamanan perangkat IoT",
        "aplikasi virtual reality"
      ]
    },
    {
      category: "Kesehatan & Kebugaran",
      topics: [
        "kesadaran kesehatan mental",
        "kebiasaan makan sehat",
        "rutina olahraga pemula",
        "teknik meditasi",
        "meningkatkan kualitas tidur",
        "tips manajemen stres",
        "yoga untuk fleksibilitas",
        "panduan fakta nutrisi",
        "praktik mindfulness",
        "meningkatkan sistem imun"
      ]
    },
    {
      category: "Bisnis & Keuangan",
      topics: [
        "panduan investasi cryptocurrency",
        "strategi passive income",
        "marketing usaha kecil",
        "analisis pasar saham",
        "transformasi digital",
        "tren e-commerce Indonesia",
        "tips perencanaan keuangan",
        "opsi funding startup",
        "produktivitas kerja remote",
        "budgeting personal"
      ]
    },
    {
      category: "Pendidikan & Keterampilan",
      topics: [
        "platform pembelajaran online",
        "kursus pengembangan skill",
        "panduan ganti karir",
        "tips persiapan interview",
        "keterampilan public speaking",
        "teknik manajemen waktu",
        "latihan critical thinking",
        "aplikasi belajar bahasa",
        "program sertifikasi",
        "networking profesional"
      ]
    },
    {
      category: "Gaya Hidup & Hobi",
      topics: [
        "tips hidup berkelanjutan",
        "dasar-dasar berkebun rumah",
        "panduan perencanaan travel",
        "resep masakan sehat",
        "proyek DIY rumah",
        "teknik fotografi",
        "rekomendasi buku",
        "layanan streaming musik",
        "tips perawatan hewan",
        "tren fashion 2024"
      ]
    }
  ],
  ar: [
    {
      category: "التكنولوجيا",
      topics: [
        "اتجاهات الذكاء الاصطناعي 2024",
        "أفضل لغات البرمجة",
        "أمن المعلومات السيبراني",
        "حلول الحوسبة السحابية",
        "دروس تعلم الآلة",
        "تقنية البلوك تشين",
        "أساسيات الحوسبة الكمية",
        "تطبيق شبكات 5G",
        "أمان أجهزة إنترنت الأشياء",
        "تطبيقات الواقع الافتراضي"
      ]
    },
    {
      category: "الصحة واللياقة",
      topics: [
        "الوعي بالصحة النفسية",
        "عادات الأكل الصحي",
        "روتين تمارين للمبتدئين",
        "تقنيات التأمل",
        "تحسين جودة النوم",
        "نصائح إدارة التوتر",
        "اليوغا للمرونة",
        "دليل حقائق التغذية",
        "ممارسات اليقظة الذهنية",
        "تعزيز جهاز المناعة"
      ]
    },
    {
      category: "الأعمال والمالية",
      topics: [
        "دليل استثمار العملات المشفرة",
        "استراتيجيات الدخل السلبي",
        "تسويق الأعمال الصغيرة",
        "تحليل سوق الأسهم",
        "التحول الرقمي",
        "اتجاهات التجارة الإلكترونية",
        "نصائح التخطيط المالي",
        "خيارات تمويل الشركات الناشئة",
        "إنتاجية العمل عن بُعد",
        "الميزانية الشخصية"
      ]
    },
    {
      category: "التعليم والمهارات",
      topics: [
        "منصات التعلم الإلكتروني",
        "دورات تطوير المهارات",
        "دليل تغيير المسار المهني",
        "نصائح التحضير للمقابلات",
        "مهارات التحدث أمام الجمهور",
        "تقنيات إدارة الوقت",
        "تمارين التفكير النقدي",
        "تطبيقات تعلم اللغات",
        "برامج الشهادات",
        "التشبيك المهني"
      ]
    },
    {
      category: "نمط الحياة والهوايات",
      topics: [
        "نصائح المعيشة المستدامة",
        "أساسيات البستنة المنزلية",
        "دليل تخطيط السفر",
        "وصفات طبخ صحية",
        "مشاريع DIY منزلية",
        "تقنيات التصوير",
        "توصيات الكتب",
        "خدمات تدفق الموسيقى",
        "نصائح رعاية الحيوانات الأليفة",
        "اتجاهات الموضة 2024"
      ]
    }
  ],
  zh: [
    {
      category: "科技",
      topics: [
        "2024年人工智能趋势",
        "最佳编程语言学习",
        "网络安全最佳实践",
        "云计算解决方案",
        "机器学习教程",
        "区块链技术解释",
        "量子计算基础",
        "5G网络实施",
        "物联网设备安全",
        "虚拟现实应用"
      ]
    },
    {
      category: "健康与保健",
      topics: [
        "心理健康意识",
        "健康饮食习惯",
        "初学者锻炼常规",
        "冥想技巧",
        "睡眠质量改善",
        "压力管理技巧",
        "柔韧性瑜伽",
        "营养事实指南",
        "正念练习",
        "免疫系统增强"
      ]
    },
    {
      category: "商业与金融",
      topics: [
        "加密货币投资指南",
        "被动收入策略",
        "小企业营销",
        "股市分析",
        "数字化转型",
        "电子商务趋势",
        "财务规划技巧",
        "创业资金选择",
        "远程工作生产力",
        "个人预算"
      ]
    },
    {
      category: "教育与技能",
      topics: [
        "在线学习平台",
        "技能发展课程",
        "职业转换指南",
        "面试准备技巧",
        "公众演讲技能",
        "时间管理技巧",
        "批判性思维练习",
        "语言学习应用",
        "认证计划",
        "专业网络"
      ]
    },
    {
      category: "生活方式与爱好",
      topics: [
        "可持续生活技巧",
        "家庭园艺基础",
        "旅行规划指南",
        "健康烹饪食谱",
        "DIY家居项目",
        "摄影技巧",
        "书籍推荐",
        "音乐流媒体服务",
        "宠物护理技巧",
        "2024年时尚趋势"
      ]
    }
  ],
  ja: [
    {
      category: "テクノロジー",
      topics: [
        "2024年AI人工知能トレンド",
        "最高のプログラミング言語",
        "サイバーセキュリティのベストプラクティス",
        "クラウドコンピューティングソリューション",
        "機械学習チュートリアル",
        "ブロックチェーン技術の説明",
        "量子コンピューティングの基礎",
        "5Gネットワーク実装",
        "IoTデバイスのセキュリティ",
        "バーチャルリアリティアプリケーション"
      ]
    },
    {
      category: "健康とウェルネス",
      topics: [
        "メンタルヘルスの意識",
        "健康的な食習慣",
        "初心者向けワークアウトルーチン",
        "瞑想テクニック",
        "睡眠の質の向上",
        "ストレス管理のコツ",
        "柔軟性のためのヨガ",
        "栄養事実ガイド",
        "マインドフルネス実践",
        "免疫システムの向上"
      ]
    },
    {
      category: "ビジネスと金融",
      topics: [
        "暗号通貨投資ガイド",
        "パッシブインカム戦略",
        "中小企業マーケティング",
        "株式市場分析",
        "デジタル変革",
        "eコマーストレンド",
        "財務計画のコツ",
        "スタートアップ資金調達オプション",
        "リモートワーク生産性",
        "個人予算管理"
      ]
    },
    {
      category: "教育とスキル",
      topics: [
        "オンライン学習プラットフォーム",
        "スキル開発コース",
        "キャリアチェンジガイド",
        "面接準備のコツ",
        "パブリックスピーキングスキル",
        "時間管理テクニック",
        "批判的思考演習",
        "言語学習アプリ",
        "認定プログラム",
        "プロフェッショナルネットワーキング"
      ]
    },
    {
      category: "ライフスタイルと趣味",
      topics: [
        "持続可能な生活のコツ",
        "家庭園芸の基礎",
        "旅行計画ガイド",
        "健康的な料理レシピ",
        "DIY家庭プロジェクト",
        "写真技術",
        "本の推薦",
        "音楽ストリーミングサービス",
        "ペットケアのコツ",
        "2024年ファッショントレンド"
      ]
    }
  ],
  ru: [
    {
      category: "Технологии",
      topics: [
        "тренды искусственного интеллекта 2024",
        "лучшие языки программирования",
        "лучшие практики кибербезопасности",
        "решения облачных вычислений",
        "уроки машинного обучения",
        "объяснение технологии блокчейн",
        "основы квантовых вычислений",
        "внедрение сетей 5G",
        "безопасность устройств IoT",
        "приложения виртуальной реальности"
      ]
    },
    {
      category: "Здоровье и Благополучие",
      topics: [
        "осведомленность о психическом здоровье",
        "здоровые пищевые привычки",
        "тренировки для начинающих",
        "техники медитации",
        "улучшение качества сна",
        "советы по управлению стрессом",
        "йога для гибкости",
        "руководство по питанию",
        "практики осознанности",
        "укрепление иммунной системы"
      ]
    },
    {
      category: "Бизнес и Финансы",
      topics: [
        "руководство по инвестициям в криптовалюту",
        "стратегии пассивного дохода",
        "маркетинг малого бизнеса",
        "анализ фондового рынка",
        "цифровая трансформация",
        "тренды электронной коммерции",
        "советы по финансовому планированию",
        "варианты финансирования стартапов",
        "продуктивность удаленной работы",
        "личное бюджетирование"
      ]
    },
    {
      category: "Образование и Навыки",
      topics: [
        "платформы онлайн обучения",
        "курсы развития навыков",
        "руководство по смене карьеры",
        "советы по подготовке к собеседованию",
        "навыки публичных выступлений",
        "техники управления временем",
        "упражнения критического мышления",
        "приложения для изучения языков",
        "программы сертификации",
        "профессиональные сети"
      ]
    },
    {
      category: "Образ Жизни и Хобби",
      topics: [
        "советы по устойчивому образу жизни",
        "основы домашнего садоводства",
        "руководство по планированию путешествий",
        "рецепты здоровой кулинарии",
        "проекты DIY дома",
        "техники фотографии",
        "рекомендации книг",
        "музыкальные стриминговые сервисы",
        "советы по уходу за домашними животными",
        "модные тренды 2024"
      ]
    }
  ],
  es: [
    {
      category: "Tecnología",
      topics: [
        "tendencias de inteligencia artificial 2024",
        "mejores lenguajes de programación",
        "mejores prácticas de ciberseguridad",
        "soluciones de computación en la nube",
        "tutoriales de aprendizaje automático",
        "tecnología blockchain explicada",
        "fundamentos de computación cuántica",
        "implementación de redes 5G",
        "seguridad de dispositivos IoT",
        "aplicaciones de realidad virtual"
      ]
    },
    {
      category: "Salud y Bienestar",
      topics: [
        "conciencia de salud mental",
        "hábitos alimenticios saludables",
        "rutinas de ejercicio para principiantes",
        "técnicas de meditación",
        "mejora de la calidad del sueño",
        "consejos de manejo del estrés",
        "yoga para flexibilidad",
        "guía de datos nutricionales",
        "prácticas de atención plena",
        "fortalecimiento del sistema inmunológico"
      ]
    },
    {
      category: "Negocios y Finanzas",
      topics: [
        "guía de inversión en criptomonedas",
        "estrategias de ingresos pasivos",
        "marketing para pequeñas empresas",
        "análisis del mercado de valores",
        "transformación digital",
        "tendencias del comercio electrónico",
        "consejos de planificación financiera",
        "opciones de financiamiento para startups",
        "productividad del trabajo remoto",
        "presupuesto personal"
      ]
    },
    {
      category: "Educación y Habilidades",
      topics: [
        "plataformas de aprendizaje en línea",
        "cursos de desarrollo de habilidades",
        "guía de cambio de carrera",
        "consejos de preparación para entrevistas",
        "habilidades de hablar en público",
        "técnicas de gestión del tiempo",
        "ejercicios de pensamiento crítico",
        "aplicaciones de aprendizaje de idiomas",
        "programas de certificación",
        "redes profesionales"
      ]
    },
    {
      category: "Estilo de Vida y Pasatiempos",
      topics: [
        "consejos de vida sostenible",
        "fundamentos de jardinería doméstica",
        "guía de planificación de viajes",
        "recetas de cocina saludable",
        "proyectos DIY para el hogar",
        "técnicas de fotografía",
        "recomendaciones de libros",
        "servicios de streaming de música",
        "consejos de cuidado de mascotas",
        "tendencias de moda 2024"
      ]
    }
  ],
  fr: [
    {
      category: "Technologie",
      topics: [
        "tendances intelligence artificielle 2024",
        "meilleurs langages de programmation",
        "meilleures pratiques cybersécurité",
        "solutions informatique en nuage",
        "tutoriels apprentissage automatique",
        "technologie blockchain expliquée",
        "bases informatique quantique",
        "implémentation réseaux 5G",
        "sécurité appareils IoT",
        "applications réalité virtuelle"
      ]
    },
    {
      category: "Santé et Bien-être",
      topics: [
        "sensibilisation santé mentale",
        "habitudes alimentaires saines",
        "routines exercice débutants",
        "techniques méditation",
        "amélioration qualité sommeil",
        "conseils gestion stress",
        "yoga pour flexibilité",
        "guide faits nutritionnels",
        "pratiques pleine conscience",
        "renforcement système immunitaire"
      ]
    },
    {
      category: "Affaires et Finance",
      topics: [
        "guide investissement cryptomonnaie",
        "stratégies revenus passifs",
        "marketing petites entreprises",
        "analyse marché boursier",
        "transformation numérique",
        "tendances commerce électronique",
        "conseils planification financière",
        "options financement startups",
        "productivité travail à distance",
        "budget personnel"
      ]
    },
    {
      category: "Éducation et Compétences",
      topics: [
        "plateformes apprentissage en ligne",
        "cours développement compétences",
        "guide changement carrière",
        "conseils préparation entretiens",
        "compétences prise de parole publique",
        "techniques gestion temps",
        "exercices pensée critique",
        "applications apprentissage langues",
        "programmes certification",
        "réseautage professionnel"
      ]
    },
    {
      category: "Style de Vie et Loisirs",
      topics: [
        "conseils vie durable",
        "bases jardinage domestique",
        "guide planification voyages",
        "recettes cuisine saine",
        "projets bricolage maison",
        "techniques photographie",
        "recommandations livres",
        "services streaming musique",
        "conseils soins animaux domestiques",
        "tendances mode 2024"
      ]
    }
  ],
  de: [
    {
      category: "Technologie",
      topics: [
        "KI-Trends 2024",
        "beste Programmiersprachen lernen",
        "Cybersicherheit bewährte Praktiken",
        "Cloud-Computing-Lösungen",
        "maschinelles Lernen Tutorials",
        "Blockchain-Technologie erklärt",
        "Quantencomputing Grundlagen",
        "5G-Netzwerk Implementierung",
        "IoT-Geräte Sicherheit",
        "Virtual Reality Anwendungen"
      ]
    },
    {
      category: "Gesundheit und Wohlbefinden",
      topics: [
        "psychische Gesundheit Bewusstsein",
        "gesunde Essgewohnheiten",
        "Workout-Routinen für Anfänger",
        "Meditationstechniken",
        "Schlafqualität verbessern",
        "Stressmanagement-Tipps",
        "Yoga für Flexibilität",
        "Ernährungsfakten Leitfaden",
        "Achtsamkeitspraktiken",
        "Immunsystem stärken"
      ]
    },
    {
      category: "Geschäft und Finanzen",
      topics: [
        "Kryptowährung Investitionsleitfaden",
        "passive Einkommensstrategien",
        "Kleinunternehmen Marketing",
        "Aktienmarkt Analyse",
        "digitale Transformation",
        "E-Commerce Trends",
        "Finanzplanungs-Tipps",
        "Startup-Finanzierungsoptionen",
        "Remote-Arbeit Produktivität",
        "persönliche Budgetierung"
      ]
    },
    {
      category: "Bildung und Fähigkeiten",
      topics: [
        "Online-Lernplattformen",
        "Fähigkeitsentwicklungskurse",
        "Karrierewechsel Leitfaden",
        "Vorstellungsgespräch Vorbereitungstipps",
        "öffentliche Redefertigkeiten",
        "Zeitmanagement-Techniken",
        "kritisches Denken Übungen",
        "Sprachlern-Apps",
        "Zertifizierungsprogramme",
        "professionelles Networking"
      ]
    },
    {
      category: "Lebensstil und Hobbys",
      topics: [
        "nachhaltige Lebenstipps",
        "Hausgarten Grundlagen",
        "Reiseplanungs-Leitfaden",
        "gesunde Koch-Rezepte",
        "DIY-Heimwerkerprojekte",
        "Fotografie-Techniken",
        "Buchempfehlungen",
        "Musik-Streaming-Dienste",
        "Haustierpflege-Tipps",
        "Mode-Trends 2024"
      ]
    }
  ],
  pt: [
    {
      category: "Tecnologia",
      topics: [
        "tendências inteligência artificial 2024",
        "melhores linguagens programação",
        "melhores práticas cibersegurança",
        "soluções computação nuvem",
        "tutoriais aprendizado máquina",
        "tecnologia blockchain explicada",
        "fundamentos computação quântica",
        "implementação redes 5G",
        "segurança dispositivos IoT",
        "aplicações realidade virtual"
      ]
    },
    {
      category: "Saúde e Bem-estar",
      topics: [
        "consciência saúde mental",
        "hábitos alimentares saudáveis",
        "rotinas exercício iniciantes",
        "técnicas meditação",
        "melhoria qualidade sono",
        "dicas gerenciamento estresse",
        "yoga para flexibilidade",
        "guia fatos nutricionais",
        "práticas atenção plena",
        "fortalecimento sistema imunológico"
      ]
    },
    {
      category: "Negócios e Finanças",
      topics: [
        "guia investimento criptomoeda",
        "estratégias renda passiva",
        "marketing pequenas empresas",
        "análise mercado ações",
        "transformação digital",
        "tendências comércio eletrônico",
        "dicas planejamento financeiro",
        "opções financiamento startups",
        "produtividade trabalho remoto",
        "orçamento pessoal"
      ]
    },
    {
      category: "Educação e Habilidades",
      topics: [
        "plataformas aprendizado online",
        "cursos desenvolvimento habilidades",
        "guia mudança carreira",
        "dicas preparação entrevistas",
        "habilidades falar público",
        "técnicas gerenciamento tempo",
        "exercícios pensamento crítico",
        "aplicativos aprendizado idiomas",
        "programas certificação",
        "networking profissional"
      ]
    },
    {
      category: "Estilo de Vida e Hobbies",
      topics: [
        "dicas vida sustentável",
        "fundamentos jardinagem doméstica",
        "guia planejamento viagens",
        "receitas culinária saudável",
        "projetos DIY casa",
        "técnicas fotografia",
        "recomendações livros",
        "serviços streaming música",
        "dicas cuidado animais estimação",
        "tendências moda 2024"
      ]
    }
  ],
  hi: [
    {
      category: "प्रौद्योगिकी",
      topics: [
        "कृत्रिम बुद्धिमत्ता रुझान 2024",
        "सर्वश्रेष्ठ प्रोग्रामिंग भाषाएं",
        "साइबर सुरक्षा सर्वोत्तम प्रथाएं",
        "क्लाउड कंप्यूटिंग समाधान",
        "मशीन लर्निंग ट्यूटोरियल",
        "ब्लॉकचेन तकनीक समझाया",
        "क्वांटम कंप्यूटिंग मूल बातें",
        "5G नेटवर्क कार्यान्वयन",
        "IoT उपकरण सुरक्षा",
        "आभासी वास्तविकता अनुप्रयोग"
      ]
    },
    {
      category: "स्वास्थ्य और कल्याण",
      topics: [
        "मानसिक स्वास्थ्य जागरूकता",
        "स्वस्थ भोजन की आदतें",
        "शुरुआती लोगों के लिए वर्कआउट",
        "ध्यान तकनीकें",
        "नींद की गुणवत्ता सुधार",
        "तनाव प्रबंधन सुझाव",
        "लचीलेपन के लिए योग",
        "पोषण तथ्य गाइड",
        "माइंडफुलनेस अभ्यास",
        "प्रतिरक्षा प्रणाली बूस्टिंग"
      ]
    },
    {
      category: "व्यापार और वित्त",
      topics: [
        "क्रिप्टोकरेंसी निवेश गाइड",
        "निष्क्रिय आय रणनीतियां",
        "छोटे व्यापार मार्केटिंग",
        "शेयर बाजार विश्लेषण",
        "डिजिटल परिवर्तन",
        "ई-कॉमर्स रुझान",
        "वित्तीय योजना सुझाव",
        "स्टार्टअप फंडिंग विकल्प",
        "रिमोट वर्क उत्पादकता",
        "व्यक्तिगत बजटिंग"
      ]
    },
    {
      category: "शिक्षा और कौशल",
      topics: [
        "ऑनलाइन शिक्षा प्लेटफॉर्म",
        "कौशल विकास पाठ्यक्रम",
        "करियर बदलने गाइड",
        "साक्षात्कार तैयारी सुझाव",
        "सार्वजनिक बोलने के कौशल",
        "समय प्रबंधन तकनीकें",
        "आलोचनात्मक सोच अभ्यास",
        "भाषा सीखने के ऐप्स",
        "प्रमाणन कार्यक्रम",
        "पेशेवर नेटवर्किंग"
      ]
    },
    {
      category: "जीवनशैली और शौक",
      topics: [
        "टिकाऊ जीवन सुझाव",
        "घरेलू बागवानी मूल बातें",
        "यात्रा योजना गाइड",
        "स्वस्थ खाना पकाने व्यंजन",
        "DIY घर परियोजनाएं",
        "फोटोग्राफी तकनीकें",
        "पुस्तक सिफारिशें",
        "संगीत स्ट्रीमिंग सेवाएं",
        "पालतू जानवर देखभाल सुझाव",
        "फैशन रुझान 2024"
      ]
    }
  ],
  ko: [
    {
      category: "기술",
      topics: [
        "인공지능 트렌드 2024",
        "최고의 프로그래밍 언어",
        "사이버 보안 모범 사례",
        "클라우드 컴퓨팅 솔루션",
        "머신러닝 튜토리얼",
        "블록체인 기술 설명",
        "양자 컴퓨팅 기초",
        "5G 네트워크 구현",
        "IoT 장치 보안",
        "가상현실 애플리케이션"
      ]
    },
    {
      category: "건강과 웰빙",
      topics: [
        "정신 건강 인식",
        "건강한 식습관",
        "초보자를 위한 운동 루틴",
        "명상 기법",
        "수면 질 개선",
        "스트레스 관리 팁",
        "유연성을 위한 요가",
        "영양 정보 가이드",
        "마음챙김 실천",
        "면역 체계 강화"
      ]
    },
    {
      category: "비즈니스와 금융",
      topics: [
        "암호화폐 투자 가이드",
        "수동 소득 전략",
        "소기업 마케팅",
        "주식 시장 분석",
        "디지털 변환",
        "전자상거래 트렌드",
        "재정 계획 팁",
        "스타트업 자금 조달 옵션",
        "원격 근무 생산성",
        "개인 예산 관리"
      ]
    },
    {
      category: "교육과 기술",
      topics: [
        "온라인 학습 플랫폼",
        "기술 개발 과정",
        "경력 변경 가이드",
        "면접 준비 팁",
        "대중 연설 기술",
        "시간 관리 기법",
        "비판적 사고 연습",
        "언어 학습 앱",
        "인증 프로그램",
        "전문 네트워킹"
      ]
    },
    {
      category: "라이프스타일과 취미",
      topics: [
        "지속 가능한 생활 팁",
        "가정 원예 기초",
        "여행 계획 가이드",
        "건강한 요리 레시피",
        "DIY 홈 프로젝트",
        "사진 기법",
        "도서 추천",
        "음악 스트리밍 서비스",
        "반려동물 관리 팁",
        "패션 트렌드 2024"
      ]
    }
  ]
};