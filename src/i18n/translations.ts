export type Locale = 'ru' | 'kz' | 'en'

export interface Translations {
  // Nav
  nav: {
    links: {
      why: string
      journey: string
      projects: string
      aura: string
      stack: string
      about: string
    }
    contact: string
    writeTelegram: string
    whatsapp: string
  }

  // Hero
  hero: {
    openToWork: string
    subtitle: string
    lead: string
    telegramBtn: string
    stats: {
      agents: string
      products: string
      years: string
      clients: string
    }
  }

  // WhyMe
  whyMe: {
    sectionLabel: string
    title: string
    subtitle: string
    cards: {
      aiMultiplier: { title: string; description: string }
      marketingDna: { title: string; description: string }
      fullVision: { title: string; description: string }
      abThinking: { title: string; description: string }
    }
  }

  // Journey
  journey: {
    sectionLabel: string
    titleWord: string
    subtitle: string
    steps: {
      graphicDesign: { title: string; desc: string }
      motionDesign: { title: string; desc: string }
      targeting: { title: string; desc: string }
      googleAds: { title: string; desc: string }
      vibeCoding: { title: string; desc: string }
      aiArchitecture: { title: string; desc: string }
    }
  }

  // Projects
  projects: {
    sectionLabel: string
    title: string
    subtitle: string
    items: {
      elfin: { description: string }
      instrumental: { description: string }
      mycheck: { description: string }
      aura: { description: string }
    }
  }

  // AuraSystem
  aura: {
    sectionLabel: string
    title: string
    descriptionLine1Before: string
    descriptionLine1Accent: string
    descriptionLine1After: string
    descriptionLine2: string
    agentCount: string
    agentsLabel: string
  }

  // TechStack
  techStack: {
    sectionLabel: string
    title: string
    subtitle: string
  }

  // Clients
  clients: {
    sectionLabel: string
    title: string
    subtitle: string
    stats: {
      clients: string
      niches: string
      cities: string
    }
    whatDone: string
    result: string
    alsoWorkedWith: string
    bottomText: string
    clientDetails: {
      eliteFinance: { niche: string; work: string; result: string }
      profbuh: { niche: string; work: string; result: string }
      manara: { niche: string; work: string; result: string }
    }
    otherNiches: string[]
  }

  // About
  about: {
    sectionLabel: string
    title: string
    dataLabel: string
    languagesLabel: string
    approachLabel: string
    details: {
      age: { label: string; value: string }
      location: { label: string; value: string }
      education: { label: string; value: string; sub: string }
    }
    languages: {
      russian: { name: string; level: string }
      kazakh: { name: string; level: string }
      english: { name: string; level: string }
    }
    philosophy: {
      marketerWhoCode: { title: string; text: string }
      aiMultiplier: { title: string; text: string }
      qualityDefault: { title: string; text: string }
      buildInPublic: { title: string; text: string }
      oneVsTeam: { title: string; text: string }
    }
  }

  // Comparison
  comparison: {
    sectionLabel: string
    title: string
    subtitle: string
    columns: { criterion: string; agency: string; freelancer: string; me: string }
    rows: { criterion: string; agency: string; freelancer: string; me: string }[]
  }

  // FAQ
  faq: {
    sectionLabel: string
    title: string
    subtitle: string
    items: { question: string; answer: string }[]
  }

  // Footer
  footer: {
    heading1: string
    heading2: string
    subtitle: string
    telegramBtn: string
    badge: string
    trustBadges: string[]
  }

  // App boot
  app: {
    systemBoot: string
  }
}

const ru: Translations = {
  nav: {
    links: {
      why: 'Почему я',
      journey: 'Путь',
      projects: 'Проекты',
      aura: 'AURA',
      stack: 'Стек',
      about: 'Обо мне',
    },
    contact: 'КОНТАКТ',
    writeTelegram: 'НАПИСАТЬ В TELEGRAM',
    whatsapp: 'WHATSAPP',
  },

  hero: {
    openToWork: 'OPEN TO WORK',
    subtitle: '4 года в маркетинге. От графического дизайна до AI-системы из 30+ агентов.',
    lead: 'Один человек. AI-система. Результат целой команды.',
    telegramBtn: 'НАПИСАТЬ В TELEGRAM',
    stats: {
      agents: 'AI-агент',
      products: 'продуктов',
      years: 'года опыта',
      clients: 'клиентов',
    },
  },

  whyMe: {
    sectionLabel: 'Идеальный матч',
    title: 'Почему я',
    subtitle: 'Не просто кодер. Маркетолог, который научился строить — и построил систему, которая строит за него.',
    cards: {
      aiMultiplier: {
        title: 'AI КАК МУЛЬТИПЛИКАТОР',
        description: 'Я не делаю больше — я делаю глубже. 30+ специализированных AI-агентов берут на себя исследование, аналитику и производство. Я фокусируюсь на стратегии и контроле качества.',
      },
      marketingDna: {
        title: 'МАРКЕТИНГ В ДНК',
        description: '4 года опыта: таргет, Google Ads, аналитика. Я не просто верстаю — я понимаю что конвертит.',
      },
      fullVision: {
        title: 'ВИЖУ ПРОДУКТ ЦЕЛИКОМ',
        description: 'Не нужно объяснять что такое CPA или зачем нужна schema.org. Я уже знаю. Работаю с продуктом как маркетолог и строю как инженер — оба взгляда в одном человеке.',
      },
      abThinking: {
        title: 'A/B МЫШЛЕНИЕ',
        description: 'Бывший таргетолог. Знаю какие элементы тестировать и почему одна версия бьёт другую.',
      },
    },
  },

  journey: {
    sectionLabel: 'Путь',
    titleWord: 'Эволюция',
    subtitle: 'От пикселей до AI-систем. Каждый этап — фундамент для следующего.',
    steps: {
      graphicDesign: {
        title: 'Графический дизайн',
        desc: 'Начал с визуала. Figma, Photoshop, брендинг.',
      },
      motionDesign: {
        title: 'Моушн дизайн',
        desc: 'After Effects, анимация, видео-контент для брендов.',
      },
      targeting: {
        title: 'Таргетированная реклама',
        desc: 'Facebook Ads, Instagram Ads. Первые бюджеты, первые результаты.',
      },
      googleAds: {
        title: 'Google Ads + Аналитика',
        desc: 'Performance маркетинг. GA4, отслеживание конверсий, оптимизация.',
      },
      vibeCoding: {
        title: 'Vibe Coding',
        desc: 'Next.js, React, TypeScript. От идеи до production за дни, не месяцы.',
      },
      aiArchitecture: {
        title: 'AI Architecture',
        desc: '30+ AI-агентов. Система AURA. Оркестрация dev, marketing, sales.',
      },
    },
  },

  projects: {
    sectionLabel: 'Портфолио',
    title: 'Что я построил',
    subtitle: 'Реальные продукты в production. Не учебные проекты — рабочий бизнес.',
    items: {
      elfin: {
        description: 'CRM + лендинг для финтех-брокера. Full-stack: FastAPI + Next.js + Telegram bot + PostgreSQL.',
      },
      instrumental: {
        description: 'Каталог аренды инструментов. Next.js SSG. 70+ позиций. SEO optimized. Schema.org.',
      },
      mycheck: {
        description: 'Финтех лендинг. Premium dark UI. React + Vite + Supabase. Revolut-level дизайн.',
      },
      aura: {
        description: 'Аналитическая платформа. Next.js 16 + Supabase + Windsor.ai. Dashboard для рекламных данных.',
      },
    },
  },

  aura: {
    sectionLabel: 'Секретное оружие',
    title: 'AURA System',
    descriptionLine1Before: 'Я построил AI-систему из ',
    descriptionLine1Accent: '30+ специализированных агентов',
    descriptionLine1After: '. Она оркестрирует разработку, маркетинг, продажи и операции.',
    descriptionLine2: 'Не замена людей. Расширение одного человека до целой команды.',
    agentCount: '30+',
    agentsLabel: 'агентов работают как единая система',
  },

  techStack: {
    sectionLabel: 'Инструменты',
    title: 'Tech Stack',
    subtitle: 'Полный стек от дизайна до деплоя. Маркетинг + разработка + AI в одном человеке.',
  },

  clients: {
    sectionLabel: 'Клиенты',
    title: 'Реальные клиенты, реальные результаты',
    subtitle: 'Казахстанский бизнес. Реальные задачи. Реальный production.',
    stats: {
      clients: 'клиентов',
      niches: 'ниш',
      cities: 'города KZ',
    },
    whatDone: 'Что сделал',
    result: 'Результат',
    alsoWorkedWith: 'Также работал с:',
    bottomText: 'Каждый проект — от стратегии до результата. Без шаблонов.',
    clientDetails: {
      eliteFinance: {
        niche: 'Финтех',
        work: 'CRM-система + лендинг для сбора заявок на кредит',
        result: 'Full-stack продукт с нуля. CRM + лендинг + Telegram бот. В production.',
      },
      profbuh: {
        niche: 'Бухгалтерия',
        work: 'SMM + Reels-контент',
        result: 'Контент-стратегия + 15 Reels/мес + SMM ведение',
      },
      manara: {
        niche: 'Дизайн интерьера',
        work: 'Контент-стратегия + Reels-сценарии',
        result: '10 Reels-сценариев, уникальное позиционирование с нуля',
      },
    },
    otherNiches: [
      'E-commerce',
      'Стоматология',
      'Аренда техники',
      'Образование',
      'HoReCa',
      'Строительство',
      'Недвижимость',
      'Юридические услуги',
      'Авто',
    ],
  },

  about: {
    sectionLabel: 'Обо мне',
    title: 'Человек за системой',
    dataLabel: 'ДАННЫЕ',
    languagesLabel: 'ЯЗЫКИ',
    approachLabel: 'ПОДХОД',
    details: {
      age: { label: 'Возраст', value: '29 лет' },
      location: { label: 'Локация', value: 'Казахстан' },
      education: { label: 'Образование', value: 'Менеджмент', sub: 'высшее' },
    },
    languages: {
      russian: { name: 'Русский', level: 'Носитель' },
      kazakh: { name: 'Казахский', level: 'Носитель' },
      english: { name: 'Английский', level: 'Intermediate' },
    },
    philosophy: {
      marketerWhoCode: {
        title: 'Маркетолог который кодит',
        text: 'Не просто кодер — маркетолог с 4-летним опытом. Понимаю воронки, конверсии, A/B тесты. Каждый лендинг строю с точки зрения результата, не красоты ради красоты.',
      },
      aiMultiplier: {
        title: 'AI как мультипликатор',
        text: 'Не использую AI как костыль. Построил целую систему оркестрации из 30+ агентов. Каждый агент — специалист в своей области. Вместе — непобедимая команда.',
      },
      qualityDefault: {
        title: 'Качество по умолчанию',
        text: 'TypeScript strict, SEO, Schema.org, аналитика — это не опции. Это мой стандарт на каждом проекте, независимо от бюджета. Каждый сайт готов к работе с первого деплоя.',
      },
      buildInPublic: {
        title: 'Build in public',
        text: 'Открытый GitHub. Реальные продукты. Не пустые слова — код который можно посмотреть.',
      },
      oneVsTeam: {
        title: 'Один вместо штата',
        text: 'Не агентство с менеджерами и координаторами. Один человек с AI-системой из 31 агента. Это не просто слова — это реальные проекты в production и отработанная на деле система.',
      },
    },
  },

  comparison: {
    sectionLabel: 'Сравнение',
    title: 'Агентство vs Фрилансер vs Я',
    subtitle: 'Честное сравнение без маркетинговых обещаний.',
    columns: { criterion: 'Критерий', agency: 'Агентство', freelancer: 'Фрилансер', me: 'Я + AURA' },
    rows: [
      { criterion: 'Сроки', agency: '2-4 недели', freelancer: '1-3 недели', me: '7-10 дней' },
      { criterion: 'Стоимость', agency: 'от 500к ₸', freelancer: 'от 150к ₸', me: 'от 180к ₸' },
      { criterion: 'Маркетинговая экспертиза', agency: 'Есть, но шаблонно', freelancer: 'Редко', me: 'Маркетолог + инженер' },
      { criterion: 'Техническое качество', agency: 'Зависит от команды', freelancer: '50/50', me: 'TypeScript strict, code review' },
      { criterion: 'Коммуникация', agency: 'Через менеджера', freelancer: 'Напрямую', me: 'Напрямую, без посредников' },
      { criterion: 'Поддержка', agency: 'По контракту', freelancer: 'Как повезёт', me: '1 мес включён' },
      { criterion: 'Масштабируемость', agency: 'Дорого', freelancer: 'Один человек', me: 'AI-система из 30+ агентов' },
      { criterion: 'AI-интеграции', agency: 'Нет', freelancer: 'Нет', me: 'Встроены в каждый проект' },
    ],
  },

  faq: {
    sectionLabel: 'Вопросы',
    title: 'Часто задают',
    subtitle: 'Отвечаю честно. Без уклонений.',
    items: [
      {
        question: 'Качество не страдает, когда AI делает половину работы?',
        answer: 'AI берёт на себя рутину — исследование, шаблоны, аналитику. Стратегия и контроль качества — я. TypeScript strict, code review на каждом проекте. Результат не отличается от команды из 5 человек.',
      },
      {
        question: 'Один человек — это не риск?',
        answer: 'Всё задокументировано. Код на GitHub. Три проекта в production прямо сейчас. Если что-то случится — любой разработчик подхватит за день. Это система, а не зависимость от одного человека.',
      },
      {
        question: 'Сколько стоит?',
        answer: 'Лендинг — от 180 000 ₸, 7-10 дней. CRM-система — от 400 000 ₸, 3-6 недель. Точная цена после созвона — зависит от задачи. Без скрытых платежей.',
      },
      {
        question: 'Чем лучше агентства?',
        answer: 'Без менеджеров, координаторов и трёх уровней согласования. Напрямую с человеком, который и маркетолог, и инженер. Быстрее, дешевле, и знаю что конвертит.',
      },
      {
        question: 'Поддержка после запуска?',
        answer: '1 месяц поддержки включён в каждый проект. Дальше — по договору. Баги фиксю бесплатно. Код ваш, хостинг ваш — без привязки.',
      },
      {
        question: 'Как выглядит процесс работы?',
        answer: 'Созвон 30 мин → понимаю задачу → макет за 3-5 дней → согласование → разработка → запуск. Без сюрпризов. Каждый этап — с вашим подтверждением.',
      },
      {
        question: 'Работаешь только по Казахстану?',
        answer: 'Основа — Казахстан. Но работаю удалённо с любой локацией. Часовой пояс UTC+5. Отвечаю в течение часа в рабочее время.',
      },
    ],
  },

  footer: {
    heading1: 'Есть идея продукта?',
    heading2: 'Через 10 дней у тебя будет лендинг.',
    subtitle: 'Расскажи задачу — отвечу честно, без обязательств.',
    telegramBtn: 'TELEGRAM',
    badge: 'Этот сайт — живой кейс. Построен на том же стеке, что и продукты для клиентов.',
    trustBadges: ['Без предоплаты до макета', 'Созвон бесплатно', '3 проекта в production', 'Отвечу в течение часа'],
  },

  app: {
    systemBoot: 'SYSTEM BOOT...',
  },
}

const en: Translations = {
  nav: {
    links: {
      why: 'Why Me',
      journey: 'Journey',
      projects: 'Projects',
      aura: 'AURA',
      stack: 'Stack',
      about: 'About',
    },
    contact: 'CONTACT',
    writeTelegram: 'MESSAGE ON TELEGRAM',
    whatsapp: 'WHATSAPP',
  },

  hero: {
    openToWork: 'OPEN TO WORK',
    subtitle: '4 years in marketing. From graphic design to an AI system of 30+ agents.',
    lead: 'One person. AI system. A whole team\'s output.',
    telegramBtn: 'MESSAGE ON TELEGRAM',
    stats: {
      agents: 'AI agents',
      products: 'products',
      years: 'years exp',
      clients: 'clients',
    },
  },

  whyMe: {
    sectionLabel: 'Perfect match',
    title: 'Why Me',
    subtitle: 'Not just a coder. A marketer who learned to build — and built a system that builds for him.',
    cards: {
      aiMultiplier: {
        title: 'AI AS MULTIPLIER',
        description: 'I don\'t do more — I go deeper. 30+ specialized AI agents handle research, analytics, and production. I focus on strategy and quality control.',
      },
      marketingDna: {
        title: 'MARKETING IN DNA',
        description: '4 years of experience: targeting, Google Ads, analytics. I don\'t just code — I understand what converts.',
      },
      fullVision: {
        title: 'FULL PRODUCT VISION',
        description: 'No need to explain CPA or schema.org. I already know. I work with the product as a marketer and build it as an engineer — both perspectives in one person.',
      },
      abThinking: {
        title: 'A/B THINKING',
        description: 'Former targeting specialist. I know which elements to test and why one version beats another.',
      },
    },
  },

  journey: {
    sectionLabel: 'Journey',
    titleWord: 'Evolution',
    subtitle: 'From pixels to AI systems. Each stage is the foundation for the next.',
    steps: {
      graphicDesign: {
        title: 'Graphic Design',
        desc: 'Started with visuals. Figma, Photoshop, branding.',
      },
      motionDesign: {
        title: 'Motion Design',
        desc: 'After Effects, animation, video content for brands.',
      },
      targeting: {
        title: 'Targeted Advertising',
        desc: 'Facebook Ads, Instagram Ads. First budgets, first results.',
      },
      googleAds: {
        title: 'Google Ads + Analytics',
        desc: 'Performance marketing. GA4, conversion tracking, optimization.',
      },
      vibeCoding: {
        title: 'Vibe Coding',
        desc: 'Next.js, React, TypeScript. From idea to production in days, not months.',
      },
      aiArchitecture: {
        title: 'AI Architecture',
        desc: '30+ AI agents. AURA system. Orchestrating dev, marketing, sales.',
      },
    },
  },

  projects: {
    sectionLabel: 'Portfolio',
    title: 'What I Built',
    subtitle: 'Real products in production. Not training projects — working businesses.',
    items: {
      elfin: {
        description: 'CRM + landing for a fintech broker. Full-stack: FastAPI + Next.js + Telegram bot + PostgreSQL.',
      },
      instrumental: {
        description: 'Tool rental catalog. Next.js SSG. 70+ items. SEO optimized. Schema.org.',
      },
      mycheck: {
        description: 'Fintech landing. Premium dark UI. React + Vite + Supabase. Revolut-level design.',
      },
      aura: {
        description: 'Analytics platform. Next.js 16 + Supabase + Windsor.ai. Dashboard for ad data.',
      },
    },
  },

  aura: {
    sectionLabel: 'Secret weapon',
    title: 'AURA System',
    descriptionLine1Before: 'I built an AI system of ',
    descriptionLine1Accent: '30+ specialized agents',
    descriptionLine1After: '. It orchestrates development, marketing, sales, and operations.',
    descriptionLine2: 'Not a replacement for people. Expanding one person to a whole team.',
    agentCount: '30+',
    agentsLabel: 'agents working as a unified system',
  },

  techStack: {
    sectionLabel: 'Tools',
    title: 'Tech Stack',
    subtitle: 'Full stack from design to deploy. Marketing + development + AI in one person.',
  },

  clients: {
    sectionLabel: 'Clients',
    title: 'Real clients, real results',
    subtitle: 'Kazakhstani businesses. Real tasks. Real production.',
    stats: {
      clients: 'clients',
      niches: 'niches',
      cities: 'KZ cities',
    },
    whatDone: 'What I did',
    result: 'Result',
    alsoWorkedWith: 'Also worked with:',
    bottomText: 'Every project — from strategy to result. No templates.',
    clientDetails: {
      eliteFinance: {
        niche: 'Fintech',
        work: 'CRM system + landing for loan applications',
        result: 'Full-stack product from scratch. CRM + landing + Telegram bot. In production.',
      },
      profbuh: {
        niche: 'Accounting',
        work: 'SMM + Reels content',
        result: 'Content strategy + 15 Reels/month + SMM management',
      },
      manara: {
        niche: 'Interior Design',
        work: 'Content strategy + Reels scripts',
        result: '10 Reels scripts, unique positioning from scratch',
      },
    },
    otherNiches: [
      'E-commerce',
      'Dentistry',
      'Equipment rental',
      'Education',
      'HoReCa',
      'Construction',
      'Real estate',
      'Legal services',
      'Auto',
    ],
  },

  about: {
    sectionLabel: 'About',
    title: 'The person behind the system',
    dataLabel: 'DATA',
    languagesLabel: 'LANGUAGES',
    approachLabel: 'APPROACH',
    details: {
      age: { label: 'Age', value: '29 years' },
      location: { label: 'Location', value: 'Kazakhstan' },
      education: { label: 'Education', value: 'Management', sub: "bachelor's" },
    },
    languages: {
      russian: { name: 'Russian', level: 'Native' },
      kazakh: { name: 'Kazakh', level: 'Native' },
      english: { name: 'English', level: 'Intermediate' },
    },
    philosophy: {
      marketerWhoCode: {
        title: 'Marketer who codes',
        text: 'Not just a coder — a marketer with 4 years of experience. I understand funnels, conversions, A/B tests. Every landing I build from the perspective of results, not beauty for its own sake.',
      },
      aiMultiplier: {
        title: 'AI as multiplier',
        text: 'I don\'t use AI as a crutch. I built an entire orchestration system of 30+ agents. Each agent is a specialist in their domain. Together — an unbeatable team.',
      },
      qualityDefault: {
        title: 'Quality by default',
        text: 'TypeScript strict, SEO, Schema.org, analytics — these are not options. This is my standard on every project, regardless of budget. Every site is production-ready from first deploy.',
      },
      buildInPublic: {
        title: 'Build in public',
        text: 'Open GitHub. Real products. Not empty words — code you can actually look at.',
      },
      oneVsTeam: {
        title: 'One person, whole team',
        text: 'Not an agency with managers and coordinators. One person with an AI system of 31 agents. Not just words — real projects in production and a battle-tested system.',
      },
    },
  },

  comparison: {
    sectionLabel: 'Comparison',
    title: 'Agency vs Freelancer vs Me',
    subtitle: 'An honest comparison without marketing promises.',
    columns: { criterion: 'Criterion', agency: 'Agency', freelancer: 'Freelancer', me: 'Me + AURA' },
    rows: [
      { criterion: 'Timeline', agency: '2-4 weeks', freelancer: '1-3 weeks', me: '7-10 days' },
      { criterion: 'Cost', agency: 'from 500k ₸', freelancer: 'from 150k ₸', me: 'from 180k ₸' },
      { criterion: 'Marketing expertise', agency: 'Yes, but templated', freelancer: 'Rarely', me: 'Marketer + engineer' },
      { criterion: 'Technical quality', agency: 'Depends on team', freelancer: '50/50', me: 'TypeScript strict, code review' },
      { criterion: 'Communication', agency: 'Through manager', freelancer: 'Direct', me: 'Direct, no middlemen' },
      { criterion: 'Support', agency: 'By contract', freelancer: 'Hit or miss', me: '1 month included' },
      { criterion: 'Scalability', agency: 'Expensive', freelancer: 'One person', me: 'AI system of 30+ agents' },
      { criterion: 'AI integrations', agency: 'No', freelancer: 'No', me: 'Built into every project' },
    ],
  },

  faq: {
    sectionLabel: 'FAQ',
    title: 'Frequently Asked',
    subtitle: 'Honest answers. No dodging.',
    items: [
      {
        question: "Doesn't quality suffer when AI does half the work?",
        answer: 'AI handles routine — research, templates, analytics. Strategy and quality control is me. TypeScript strict, code review on every project. The result is indistinguishable from a team of 5.',
      },
      {
        question: "One person — isn't that a risk?",
        answer: 'Everything is documented. Code on GitHub. Three projects in production right now. If something happens — any developer picks it up in a day. It\'s a system, not a dependency on one person.',
      },
      {
        question: 'How much does it cost?',
        answer: 'Landing page — from 180,000 ₸, 7-10 days. CRM system — from 400,000 ₸, 3-6 weeks. Exact price after a call — depends on the task. No hidden fees.',
      },
      {
        question: 'Why better than an agency?',
        answer: "No managers, coordinators, or three levels of approval. Direct with the person who's both marketer and engineer. Faster, cheaper, and I know what converts.",
      },
      {
        question: 'Support after launch?',
        answer: '1 month of support included in every project. After that — by agreement. Bugs fixed for free. Code is yours, hosting is yours — no lock-in.',
      },
      {
        question: 'What does the process look like?',
        answer: '30 min call → understand the task → mockup in 3-5 days → approval → development → launch. No surprises. Every stage — with your confirmation.',
      },
      {
        question: 'Do you only work in Kazakhstan?',
        answer: 'Base — Kazakhstan. But I work remotely with any location. UTC+5 timezone. I respond within an hour during business hours.',
      },
    ],
  },

  footer: {
    heading1: 'Have a product idea?',
    heading2: "In 10 days you'll have a landing page.",
    subtitle: "Tell me the task — I'll answer honestly, no obligations.",
    telegramBtn: 'TELEGRAM',
    badge: 'This site is a live case study. Built on the same stack as client products.',
    trustBadges: ['No prepayment before mockup', 'Free consultation call', '3 projects in production', 'Response within an hour'],
  },

  app: {
    systemBoot: 'SYSTEM BOOT...',
  },
}

const kz: Translations = {
  nav: {
    links: {
      why: 'Неге мен',
      journey: 'Жол',
      projects: 'Жобалар',
      aura: 'AURA',
      stack: 'Стек',
      about: 'Мен туралы',
    },
    contact: 'БАЙЛАНЫС',
    writeTelegram: 'TELEGRAM-ГА ЖАЗУ',
    whatsapp: 'WHATSAPP',
  },

  hero: {
    openToWork: 'ЖҰМЫСҚА ДАЙЫН',
    subtitle: 'Маркетингте 4 жыл. Графикалық дизайннан 30+ агенттен тұратын AI-жүйеге дейін.',
    lead: 'Бір адам. AI-жүйе. Бүкіл команданың нәтижесі.',
    telegramBtn: 'TELEGRAM-ГА ЖАЗУ',
    stats: {
      agents: 'AI-агент',
      products: 'өнім',
      years: 'жыл тәжірибе',
      clients: 'клиент',
    },
  },

  whyMe: {
    sectionLabel: 'Тамаша таңдау',
    title: 'Неге мен',
    subtitle: 'Жай кодер емес. Маркетолог — үйренді, жасады, жасайтын жүйе құрды.',
    cards: {
      aiMultiplier: {
        title: 'AI — КҮШЕЙТКІШ',
        description: 'Мен көбірек жасамаймын — тереңірек жасаймын. 30+ мамандандырылған AI-агент зерттеу, аналитика және өндірісті өз мойнына алады. Мен стратегия мен сапаны бақылауға назар аударамын.',
      },
      marketingDna: {
        title: 'МАРКЕТИНГ ДНҚ-да',
        description: '4 жыл тәжірибе: таргет, Google Ads, аналитика. Мен тек верстамаймын — нені конверттейтінін түсінемін.',
      },
      fullVision: {
        title: 'ӨНІМДІ ТҰТАСТАЙ КӨРЕМІН',
        description: 'CPA дегеніміз не немесе schema.org не үшін керек екенін түсіндіруге болмайды. Мен бұрыннан білемін. Өніммен маркетолог ретінде жұмыс жасаймын және инженер ретінде құрамын — екі көзқарас бір адамда.',
      },
      abThinking: {
        title: 'A/B ОЙЛАУ',
        description: 'Бұрынғы таргетолог. Қандай элементтерді тестілеу керек екенін және бір нұсқа неге екіншісінен жақсы екенін білемін.',
      },
    },
  },

  journey: {
    sectionLabel: 'Жол',
    titleWord: 'Эволюция',
    subtitle: 'Пиксельдерден AI-жүйелерге дейін. Әр кезең — келесісінің негізі.',
    steps: {
      graphicDesign: {
        title: 'Графикалық дизайн',
        desc: 'Визуалдан бастадым. Figma, Photoshop, брендинг.',
      },
      motionDesign: {
        title: 'Моушн дизайн',
        desc: 'After Effects, анимация, брендтер үшін бейне-контент.',
      },
      targeting: {
        title: 'Таргеттік жарнама',
        desc: 'Facebook Ads, Instagram Ads. Алғашқы бюджеттер, алғашқы нәтижелер.',
      },
      googleAds: {
        title: 'Google Ads + Аналитика',
        desc: 'Performance маркетинг. GA4, конверсияларды қадағалау, оңтайландыру.',
      },
      vibeCoding: {
        title: 'Vibe Coding',
        desc: 'Next.js, React, TypeScript. Идеядан production-ға айлар емес, күндерде.',
      },
      aiArchitecture: {
        title: 'AI Architecture',
        desc: '30+ AI-агент. AURA жүйесі. Dev, marketing, sales оркестрациясы.',
      },
    },
  },

  projects: {
    sectionLabel: 'Портфолио',
    title: 'Мен не жасадым',
    subtitle: 'Production-дағы нақты өнімдер. Оқу жобалары емес — жұмыс істейтін бизнес.',
    items: {
      elfin: {
        description: 'Финтех-брокер үшін CRM + лендинг. Full-stack: FastAPI + Next.js + Telegram bot + PostgreSQL.',
      },
      instrumental: {
        description: 'Құрал жалдау каталогы. Next.js SSG. 70+ позиция. SEO оңтайландырылған. Schema.org.',
      },
      mycheck: {
        description: 'Финтех лендинг. Premium dark UI. React + Vite + Supabase. Revolut деңгейіндегі дизайн.',
      },
      aura: {
        description: 'Аналитикалық платформа. Next.js 16 + Supabase + Windsor.ai. Жарнамалық деректер үшін dashboard.',
      },
    },
  },

  aura: {
    sectionLabel: 'Құпия қару',
    title: 'AURA System',
    descriptionLine1Before: 'Мен ',
    descriptionLine1Accent: '30+ мамандандырылған агенттен',
    descriptionLine1After: ' тұратын AI-жүйе жасадым. Ол әзірлеуді, маркетингті, сатуды және операцияларды оркестрлейді.',
    descriptionLine2: 'Адамдардың орны емес. Бір адамды бүкіл командаға дейін кеңейту.',
    agentCount: '30+',
    agentsLabel: 'агент бірыңғай жүйе ретінде жұмыс жасайды',
  },

  techStack: {
    sectionLabel: 'Құралдар',
    title: 'Tech Stack',
    subtitle: 'Дизайннан деплойға дейін толық стек. Маркетинг + әзірлеу + AI бір адамда.',
  },

  clients: {
    sectionLabel: 'Клиенттер',
    title: 'Нақты клиенттер, нақты нәтижелер',
    subtitle: 'Қазақстандық бизнес. Нақты тапсырмалар. Нақты production.',
    stats: {
      clients: 'клиент',
      niches: 'ниша',
      cities: 'ҚЗ қаласы',
    },
    whatDone: 'Не жасадым',
    result: 'Нәтиже',
    alsoWorkedWith: 'Сондай-ақ жұмыс жасадым:',
    bottomText: 'Әр жоба — стратегиядан нәтижеге дейін. Шаблондарсыз.',
    clientDetails: {
      eliteFinance: {
        niche: 'Финтех',
        work: 'CRM-жүйе + несие өтінімдерін жинауға арналған лендинг',
        result: 'Нөлден full-stack өнім. CRM + лендинг + Telegram бот. Production-да.',
      },
      profbuh: {
        niche: 'Бухгалтерия',
        work: 'SMM + Reels-контент',
        result: 'Контент-стратегия + айына 15 Reels + SMM жүргізу',
      },
      manara: {
        niche: 'Интерьер дизайны',
        work: 'Контент-стратегия + Reels-сценарийлер',
        result: '10 Reels-сценарий, нөлден бірегей позициялау',
      },
    },
    otherNiches: [
      'E-commerce',
      'Стоматология',
      'Техника жалдау',
      'Білім беру',
      'HoReCa',
      'Құрылыс',
      'Жылжымайтын мүлік',
      'Заң қызметтері',
      'Авто',
    ],
  },

  about: {
    sectionLabel: 'Мен туралы',
    title: 'Жүйенің артындағы адам',
    dataLabel: 'ДЕРЕКТЕР',
    languagesLabel: 'ТІЛДЕР',
    approachLabel: 'ТӘСІЛ',
    details: {
      age: { label: 'Жас', value: '29 жас' },
      location: { label: 'Орналасуы', value: 'Қазақстан' },
      education: { label: 'Білімі', value: 'Менеджмент', sub: 'жоғары' },
    },
    languages: {
      russian: { name: 'Орыс тілі', level: 'Ана тілі' },
      kazakh: { name: 'Қазақ тілі', level: 'Ана тілі' },
      english: { name: 'Ағылшын тілі', level: 'Intermediate' },
    },
    philosophy: {
      marketerWhoCode: {
        title: 'Код жазатын маркетолог',
        text: 'Жай кодер емес — 4 жылдық тәжірибесі бар маркетолог. Воронкаларды, конверсияларды, A/B тесттерді түсінемін. Әр лендингті сұлулық үшін емес, нәтиже тұрғысынан жасаймын.',
      },
      aiMultiplier: {
        title: 'AI — күшейткіш',
        text: 'AI-ды таяқша ретінде пайдаланбаймын. 30+ агенттен тұратын оркестрация жүйесін жасадым. Әр агент өз саласының маманы. Бірге — жеңілмейтін команда.',
      },
      qualityDefault: {
        title: 'Сапа әдепкі бойынша',
        text: 'TypeScript strict, SEO, Schema.org, аналитика — бұлар опциялар емес. Бюджетке қарамастан әр жобадағы менің стандартым. Әр сайт бірінші deploy-дан бастап жұмысқа дайын.',
      },
      buildInPublic: {
        title: 'Build in public',
        text: 'Ашық GitHub. Нақты өнімдер. Бос сөздер емес — қарауға болатын код.',
      },
      oneVsTeam: {
        title: 'Штат орнына бір адам',
        text: 'Менеджерлері мен координаторлары бар агенттік емес. 31 агенттен тұратын AI-жүйесімен бір адам. Бұл жай сөздер емес — production-дағы нақты жобалар мен тексерілген жүйе.',
      },
    },
  },

  comparison: {
    sectionLabel: 'Салыстыру',
    title: 'Агенттік vs Фрилансер vs Мен',
    subtitle: 'Маркетинг уәдесіз адал салыстыру.',
    columns: { criterion: 'Критерий', agency: 'Агенттік', freelancer: 'Фрилансер', me: 'Мен + AURA' },
    rows: [
      { criterion: 'Мерзімдер', agency: '2-4 апта', freelancer: '1-3 апта', me: '7-10 күн' },
      { criterion: 'Құны', agency: '500к ₸-ден', freelancer: '150к ₸-ден', me: '180к ₸-ден' },
      { criterion: 'Маркетинг тәжірибесі', agency: 'Бар, бірақ шаблонды', freelancer: 'Сирек', me: 'Маркетолог + инженер' },
      { criterion: 'Техникалық сапа', agency: 'Командаға байланысты', freelancer: '50/50', me: 'TypeScript strict, code review' },
      { criterion: 'Коммуникация', agency: 'Менеджер арқылы', freelancer: 'Тікелей', me: 'Тікелей, делдалсыз' },
      { criterion: 'Қолдау', agency: 'Келісімшарт бойынша', freelancer: 'Қалай болса солай', me: '1 ай кіреді' },
      { criterion: 'Масштабтау', agency: 'Қымбат', freelancer: 'Бір адам', me: '30+ агенттен тұратын AI-жүйе' },
      { criterion: 'AI-интеграциялар', agency: 'Жоқ', freelancer: 'Жоқ', me: 'Әр жобаға енгізілген' },
    ],
  },

  faq: {
    sectionLabel: 'Сұрақтар',
    title: 'Жиі сұралады',
    subtitle: 'Адал жауап. Жалтарусыз.',
    items: [
      {
        question: 'AI жұмыстың жартысын жасағанда сапа нашарламай ма?',
        answer: 'AI рутинді алады — зерттеу, шаблондар, аналитика. Стратегия мен сапаны бақылау — мен. TypeScript strict, әр жобада code review. Нәтиже 5 адамнан тұратын командадан ерекшеленбейді.',
      },
      {
        question: 'Бір адам — бұл тәуекел емес пе?',
        answer: 'Бәрі құжатталған. Код GitHub-та. Қазір production-да үш жоба. Бірдеңе болса — кез келген әзірлеуші бір күнде қабылдайды. Бұл жүйе, бір адамға тәуелділік емес.',
      },
      {
        question: 'Қанша тұрады?',
        answer: 'Лендинг — 180 000 ₸-ден, 7-10 күн. CRM-жүйе — 400 000 ₸-ден, 3-6 апта. Нақты баға қоңыраудан кейін — тапсырмаға байланысты. Жасырын төлемдер жоқ.',
      },
      {
        question: 'Агенттіктен неге жақсы?',
        answer: 'Менеджерлер, координаторлар және үш деңгейлі келісу жоқ. Маркетолог та, инженер де бір адаммен тікелей. Жылдамырақ, арзанырақ, және нені конверттейтінін білемін.',
      },
      {
        question: 'Іске қосылғаннан кейін қолдау?',
        answer: 'Әр жобаға 1 ай қолдау кіреді. Одан кейін — келісім бойынша. Қателерді тегін түзетемін. Код сіздікі, хостинг сіздікі — байланыстырмай.',
      },
      {
        question: 'Жұмыс процесі қандай?',
        answer: '30 мин қоңырау → тапсырманы түсінемін → 3-5 күнде макет → келісу → әзірлеу → іске қосу. Тосынсыйларсыз. Әр кезең — сіздің растауыңызбен.',
      },
      {
        question: 'Тек Қазақстан бойынша жұмыс жасайсың ба?',
        answer: 'Негізгі — Қазақстан. Бірақ кез келген орынмен қашықтан жұмыс жасаймын. UTC+5 уақыт белдеуі. Жұмыс уақытында бір сағат ішінде жауап беремін.',
      },
    ],
  },

  footer: {
    heading1: 'Өнім идеясы бар ма?',
    heading2: '10 күнде лендингің дайын болады.',
    subtitle: 'Тапсырманы айтыңыз — шынайы жауап беремін, міндеттемесіз.',
    telegramBtn: 'TELEGRAM',
    badge: 'Бұл сайт — тірі кейс. Клиент өнімдерімен бірдей стекте жасалған.',
    trustBadges: ['Макетке дейін алдын ала төлемсіз', 'Кеңес қоңырауы тегін', 'Production-да 3 жоба', 'Бір сағат ішінде жауап'],
  },

  app: {
    systemBoot: 'SYSTEM BOOT...',
  },
}

export const translations: Record<Locale, Translations> = { ru, en, kz }
