'use strict';

const translations = {
  kz: {
    nav: {
      home: 'Басты',
      cases: 'Жобалар',
      tariffs: 'Тарифтер',
      order: 'Тапсырыс беру',
      contact: 'Байланысу',
      lang: 'Тіл'
    },
    gallery: {
      back: '← Кейстерге оралу',
      title: 'Marketly',
      subtitle: 'Толық функционалды интернет-дүкен'
    },
    pages: {
      home: 'Басты',
      cases: 'Жобалар',
      tariffs: 'Тарифтер',
      order: 'Тапсырыс беру & Тапсырманы талқылау',
      contact: 'Байланысу'
    },
    hero: {
      title: 'Жұмыс істейтін цифрлық шешімдер жасаймыз',
      subtitle: 'Идеядан іске қосуға дейін. Бизнестің өсуі үшін веб-сайттар, қосымшалар және цифрлық өнімдерді әзірлейміз. <br />Біздің бағыт — нақты нәтиже: сатудың өсуі, процестерді автоматтандыру және клиенттерге ыңғайлылық.',
      badge1: '✓ Сапа кепілі',
      badge2: '✓ Мерзімдерді сақтау',
      badge3: '✓ Қолдау 24/7'
    },
    whatsapp: {
      title: '🎯*Сайттан жаңа тапсырыс*',
      type: '📋*Тапсырыс түрі:*',
      tariff: '💰*Тариф:*',
      company: '🏢*Компания:*',
      name: '👤*Аты:*',
      phone: '📱*Телефон:*',
      desc: '📝*Жоба сипаттамасы:*',
      time: '⏰*Уақыты:*'
    },
    services: {
      title: 'Біздің қызметтер',
      website: {
        title: 'Веб-сайттарды жасау',
        text: 'Бизнестің міндеттеріне сәйкес сайттарды әзірлейміз — лендингтерден бастап ыңғайлы басқарумен және масштабтаумен күрделі веб-платформаларға дейін.'
      },
      automation: {
        title: 'Бизнес-процестерді автоматтандыру',
        text: 'Бизнесте жеке тапсырмалар мен процестерді автоматтандыруға арналған жеке шешімдерді әзірлейміз, ағымдағы қажеттіліктерге сәйкес оңтайлы форматты таңдаймыз.'
      },
      mvp: {
        title: 'MVP және өнімдерді іске қосу',
        text: 'Идеяны жұмыс істейтін өнімге айналдыруға көмектесеміз: жобалаймыз, MVP әзірлейміз және алғашқы іске қосуға дайындаймыз.'
      },
      support: {
        title: 'Жобаларды қолдау және дамыту',
        text: 'Іске қосқаннан кейін жобаларды сүйемелдейміз: қателерді түзетеміз, функционалды дамытамыз және бизнестің өсуіне сәйкес өнімді дамытамыз.'
      },
      games: {
        title: 'Ойындарды жасау',
        text: 'Әртүрлі платформаларға арналған ойындық және интерактивті жобаларды әзірлейміз, механика мен іске асыру сапасына назар аударамыз.'
      },
      science: {
        title: 'Ғылыми жобаларды жасау',
        text: 'Зерттеу және ғылыми жобаларды әзірлейміз, талдау, тәжірибелер және білім беру міндеттері үшін цифрлық шешімдер жасаймыз.'
      },
      testing: {
        title: 'Тестілеу және аудит',
        text: 'Веб-сайттар мен веб-қосымшаларды қателер, ақаулар және қауіпсіздік мәселелері бойынша тексереміз, тұрақтылық пен сенімділікті арттырамыз.'
      },
      chatbot: {
        title: 'AI Чат-боттар',
        text: 'Клиенттерді қолдау, сату және ішкі процестерді автоматтандыру үшін ЖИ-ға негізделген ақылды боттарды әзірлейміз.'
      }
    },
    cta: {

      text: 'Бүгін бізбен байланысыңыз және жобаңыз бойынша тегін консультация алыңыз',
      button: 'Тапсырманы талқылау'
    },
    filters: {
      all: 'Барлығы',
      webDesign: 'Веб-дизайн',
      apps: 'Қосымшалар',
      webDev: 'Веб-дамыту',
      select: 'Категория таңдаңыз'
    },
    projects: {
      categories: {
        webDev: 'Веб-дамыту'
      },
      finance: {
        category: 'Веб-дамыту',
        description: 'Шығындар мен табыстарды талдауға арналған қаржылық басқару панелі.'
      },
      digitalStudio: {
        category: 'Веб-дамыту',
        description: 'Цифрлық агентство үшін көп бетті сайт. Адаптивті дизайн мен интерактивті элементтері бар беттерді қамтиды.'
      },
      medicine: {
        category: 'Веб-дамыту',
        description: 'Медициналық немесе заңды орталық үшін корпоративті сайт қызметтері, мамандар және онлайн жазба жүйесімен.'
      },
      autoMarket: {
        category: 'Веб-дамыту',
        description: 'Автокөліктер каталогымен, сүзгілеумен және жеке ұсыныстар беттерімен автосалон үшін көп бетті сайт.'
      },
      lms: {
        category: 'Веб-дамыту',
        description: 'Курстар каталогымен, оқыту беттерімен және жеке кабинетпен білім беру платформасының демонстрациялық жобасы.'
      },
      marketly: {
        category: 'Веб-дамыту',
        description: 'Тауарлар каталогымен, себетпен, авторизация және төлем жүйесімен интернет-дүкен.'
      },
      summary: {
        category: 'Веб-дамыту',
        description: 'Басқару және шешім қабылдауға арналған негізгі көрсеткіштер, графиктер мен есептері бар веб-аналитика панелі.'
      },
      taskManager: {
        category: 'Қосымшалар',
        description: 'Тапсырмалар мен жобаларды басқаруға арналған қосымша: жоспарлау, мерзімдерді бақылау, прогресс және командалық жұмыс.'
      },
      arrival: {
        category: 'Веб-дамыту',
        description: 'Интерактивті интерфейс, деректерді визуализациялау және жоғары өнімділігі бар заманауи веб-сервис.'
      }
    },
    tariffs: {
      title: 'Тарифтер',
      quickStart: {
        name: 'Жылдам іске қосу',
        price: 'от 25 000 ₸',
        features: ['Тапсырмаға лендинг', '5 бетке дейін', 'SEO-оптимизация', 'Қолдау 1 ай']
      },
      solution: {
        name: 'Тапсырмаға шешім',
        price: 'от 50 000 ₸',
        features: ['Көп бетті сайт', '20 бетке дейін', 'Жақсартылған SEO-оптимизация', 'Қолдау 3 ай']
      },
      gameDev: {
        name: 'Ойындарды дамыту',
        price: 'от 120 000 ₸',
        features: ['Орташа күрделілікті ойын жобасы', 'PC және Mobile', 'Негізгі геймплей мен визуал', 'Қолдау 1 ай']
      },
      chatbot: {
        name: 'Чат-бот',
        price: 'от 25 000 ₸',
        features: ['Тапсырмаға бот әзірлеу', 'Telegram / WhatsApp / Web', 'Негізгі логика мен сценарийлер', 'API-ға қосылу', 'Қолдау 1 ай']
      },
      crm: {
        name: 'CRM / автоматтандыру',
        price: 'от 70 000 ₸',
        features: ['CRM орнату және баптау', '20 бетке дейінгі сайт + CMS интеграциясы', 'Мессенджерлермен және сервистермен интеграция', 'Қарапайым тапсырмаларды автоматтандыру', 'SEO-оңтайландыру', '3 ай қолдау']
      },
      aiAssistant: {
        name: 'ЖИ көмекшісі',
        price: 'от 70 000 ₸',
        features: ['Тапсырмаға AI-көмекші әзірлеу 24/7', 'Сайт, CRM, Telegram, WhatsApp-пен интеграция', 'Сіздің білім базаңызда оқыту', 'Базалық оқыту / баптау', '3 ай қолдау']
      },
      testing: {
        name: 'Тестілеу және аудит',
        price: 'от 15 000 ₸',
        features: ['Сайтты ақауларға тексеру', 'Қателер мен багтарды іздеу', 'Логика мен тұрақтылықты талдау', 'Жақсарту бойынша ұсыныстар']
      },
      mvp: {
        name: 'MVP / өнімді іске қосу',
        price: 'Тапсырманы талқылағаннан кейін құнды бағалау',
        features: ['Идея мен талаптарды талдау', 'Прототиптеу және дизайн', 'Негізгі функционалды әзірлеу', 'Іске қосуға дайындау']
      },
      support: {
        name: 'Қолдау және дамыту',
        price: 'Келісім бойынша',
        features: ['Техникалық сүйемелдеу', 'Дәйекті жаңартулар', 'Тұрақтылықты мониторинг', 'Консультациялар']
      },
      select: 'Таңдау',
      footer: {
        text: 'Әртүрлі ауқымдағы тапсырмалармен жұмыс істейміз. Тапсырманы талқылап, оңтайлы баға ұсынамын',
        button: 'Тапсырманы талқылау'
      }
    },
    order: {
      title: 'Тапсырыс беру & Тапсырманы талқылау',
      intro: 'Төмендегі форманы толтырыңыз, және біз сіздің жобаңызды талқылау үшін 24 сағат ішінде сізбен байланысамыз',
      type: 'Тапсырыс түрі:',
      typePlaceholder: 'Тапсырыс түрін таңдаңыз',
      types: {
        gameDev: 'Ойындарды дамыту',
        chatbot: 'Чат-бот',
        aiAssistant: 'ЖИ көмекшісі',
        crm: 'CRM-жүйесі',
        website: 'Веб-сайт',
        mvp: 'MVP / Өнімді іске қосу',
        support: 'Қолдау және дамыту',
        testing: 'Тестілеу',
        other: 'Басқа'
      },
      tariff: 'Сайт тарифі:',
      tariffPlaceholder: 'Тариф таңдаңыз',
      tariffs: {
        basic: 'Негізгі',
        standard: 'Стандартты',
        premium: 'Премиум',
        custom: 'Жеке'
      },
      fullname: 'Сіздің атыңыз:',
      fullnamePlaceholder: 'Сіздің атыңыз',
      phone: 'Сіздің телефон:',
      phonePlaceholder: 'Сіздің телефоныңыз',
      company: 'Компания (міндетті емес):',
      companyPlaceholder: 'Компания атауы',
      description: 'Жоба сипаттамасы:',
      descriptionPlaceholder: 'Жобаңызды толығырақ сипаттаңыз...',
      submit: 'Тапсырыс беру',
      sendVia: 'Жіберу',
      sending: 'Жіберілуде...',
      copyMessage: 'Тапсырыс мәтіні көшірілді! Оны Telegram/LinkedIn чатына қойыңыз.',
      channels: {
        whatsapp: 'WhatsApp',
        telegram: 'Telegram (қолмен)',
        email: 'Email',
        linkedin: 'LinkedIn'
      },
      success: '✅ Рахмет! Сіздің өтінішіңіз жіберілді. Біз сізбен жақын арада байланысамыз.'
    },
    contact: {
      title: 'Байланысу',
      linkedin: {
        desc: 'Кәсіби профиль және бизнестік қарым-қатынас.'
      },
      instagram: {
        desc: 'Байланыс пен жобаны талқылаудың жылдам тәсілі.'
      },
      facebook: {
        desc: 'Әлеуметтік желідегі жаңалықтар мен жаңартуларды бақылаңыз.'
      },
      email: 'EMAIL',
      phone: 'ТЕЛЕФОН'
    },
    meta: {
      title: 'Жаса. Дамыт. Бизнесті өсір. | Zodtech',
      description: 'Бизнеске арналған жоғары жүктелген сайттар, мобильді қосымшалар және AI-агенттерді әзірлеу. Толық цикл: MVP-ден масштабтауға дейін. Консультацияға тапсырыс беріңіз!'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      cases: 'Кейсы',
      tariffs: 'Тарифы',
      order: 'Заказать',
      contact: 'Связаться',
      lang: 'Язык'
    },
    gallery: {
      back: '← Назад к кейсам',
      title: 'Marketly',
      subtitle: 'Интернет-магазин с полным функционалом'
    },
    pages: {
      home: 'Главная',
      cases: 'Кейсы',
      tariffs: 'Тарифы',
      order: 'Заказать & Обсудить задачу',
      contact: 'связаться'
    },
    hero: {
      title: 'Создаем цифровые решения, которые работают',
      subtitle: 'От идеи до запуска. Разрабатываем сайты, приложения и цифровые продукты для роста бизнеса. <br />Наш фокус — реальный результат: рост продаж, автоматизация процессов и удобство для клиентов.',
      badge1: '✓ Гарантия качества',
      badge2: '✓ Соблюдение сроков',
      badge3: '✓ Поддержка 24/7'
    },
    whatsapp: {
      title: '🎯*Новый заказ с сайта*',
      type: '📋*Тип заказа:*',
      tariff: '💰*Тариф:*',
      company: '🏢*Компания:*',
      name: '👤*Имя:*',
      phone: '📱*Телефон:*',
      desc: '📝*Описание проекта:*',
      time: '⏰*Время заявки:*'
    },
    services: {
      title: 'Наши услуги',
      website: {
        title: 'Создание сайтов',
        text: 'Разрабатываем сайты под задачи бизнеса — от лендингов до сложных веб-платформ с удобным управлением и масштабированием.'
      },
      automation: {
        title: 'Автоматизация бизнес-процессов',
        text: 'Разрабатываем индивидуальные решения для автоматизации отдельных задач и процессов в бизнесе, подбирая оптимальный формат под текущие потребности.'
      },
      mvp: {
        title: 'MVP и запуск продуктов',
        text: 'Помогаем превратить идею в работающий продукт: проектируем, разрабатываем MVP и подготавливаем к первому запуску.'
      },
      support: {
        title: 'Поддержка и развитие проектов',
        text: 'Сопровождаем проекты после запуска: исправляем ошибки, дорабатываем функционал и развиваем продукт по мере роста бизнеса.'
      },
      games: {
        title: 'Создание игр',
        text: 'Разрабатываем игровые и интерактивные проекты для различных платформ с акцентом на механику и качество реализации.'
      },
      science: {
        title: 'Создание научных проектов',
        text: 'Разрабатываем исследовательские и научные проекты, создавая цифровые решения для анализа, экспериментов и образовательных задач.'
      },
      testing: {
        title: 'Тестирование и аудит',
        text: 'Проверяем сайты и веб-приложения на ошибки, уязвимости и проблемы безопасности, повышая стабильность и доверие.'
      },
      chatbot: {
        title: 'AI Чат-боты',
        text: 'Разрабатываем умных ботов на базе ИИ для автоматизации поддержки клиентов, продаж и внутренних процессов.'
      }
    },
    cta: {

      text: 'Свяжитесь с нами сегодня и получите бесплатную консультацию по вашему проекту',
      button: 'Обсудить задачу'
    },
    filters: {
      all: 'Все',
      webDesign: 'Веб-дизайн',
      apps: 'Приложения',
      webDev: 'Веб-разработка',
      select: 'Выберите категорию'
    },
    projects: {
      categories: {
        webDev: 'Веб-разработка'
      },
      finance: {
        category: 'Веб-разработка',
        description: 'Финансовая панель управления для анализа расходов и доходов.'
      },
      digitalStudio: {
        category: 'Веб-разработка',
        description: 'Многостраничный сайт для цифрового агентства. Включает страницы с адаптивным дизайном и интерактивными элементами.'
      },
      medicine: {
        category: 'Веб-разработка',
        description: 'Корпоративный сайт для медицинского или юридического центра с услугами, специалистами и системой онлайн-записи.'
      },
      autoMarket: {
        category: 'Веб-разработка',
        description: 'Многостраничный сайт для автосалона с каталогом автомобилей, фильтрацией и страницами отдельных предложений.'
      },
      lms: {
        category: 'Веб-разработка',
        description: 'Демонстрационный проект образовательной платформы с каталогом курсов, страницами обучения и личным кабинетом.'
      },
      marketly: {
        category: 'Веб-разработка',
        description: 'Интернет-магазин с каталогом товаров, корзиной, системой авторизации и оплаты.'
      },
      summary: {
        category: 'Веб-разработка',
        description: 'Веб-панель аналитики с ключевыми показателями, графиками и отчетами для контроля и принятия решений.'
      },
      taskManager: {
        category: 'Приложения',
        description: 'Приложение для управления задачами и проектами: планирование, контроль сроков, прогресс и командная работа.'
      },
      arrival: {
        category: 'Веб-разработка',
        description: 'Современный веб-сервис с интерактивным интерфейсом, визуализацией данных и высокой производительностью.'
      }
    },
    tariffs: {
      title: 'Тарифы',
      quickStart: {
        name: 'Быстрый запуск',
        price: 'от 25 000 ₸',
        features: ['Лендинг под задачу', 'До 5 страниц', 'SEO-оптимизация', 'Поддержка 1 месяц']
      },
      solution: {
        name: 'Решение под задачу',
        price: 'от 50 000 ₸',
        features: ['Многостраничный сайт', 'До 20 страниц', 'Улучшенная SEO-оптимизация', 'Поддержка 3 месяца']
      },
      gameDev: {
        name: 'Разработка игр',
        price: 'от 120 000 ₸',
        features: ['Игровой проект средней сложности', 'PC и Mobile', 'Основной геймплей и визуал', 'Поддержка 1 месяц']
      },
      chatbot: {
        name: 'Чат-бот',
        price: 'от 25 000 ₸',
        features: ['Разработка бота под задачу', 'Telegram / WhatsApp / Web', 'Базовая логика и сценарии', 'Подключение к API', 'Поддержка 1 месяц']
      },
      crm: {
        name: 'CRM / автоматизация',
        price: 'от 70 000 ₸',
        features: ['Установка и настройка CRM', 'Cайт до 20 страниц + Интеграция CMS', 'Интеграция с мессенджерами и сервисами', 'Автоматизация простых задач', 'SEO-оптимизация', 'Поддержка 3 месяца']
      },
      aiAssistant: {
        name: 'ИИ ассистент',
        price: 'от 70 000 ₸',
        features: ['Разработка AI-ассистента под задачу 24/7', 'Интеграция с сайтом, CRM, Telegram, WhatsApp', 'Обучение на вашей базе знаний', 'Базовое обучение / настройка', 'Поддержка 3 месяцев']
      },
      testing: {
        name: 'Тестирование и аудит',
        price: 'от 15 000 ₸',
        features: ['Проверка сайта на уязвимости', 'Поиск ошибок и багов', 'Анализ логики и стабильности', 'Рекомендации по улучшению']
      },
      mvp: {
        name: 'MVP / запуск продукта',
        price: 'Оценка стоимости после обсуждения задачи',
        features: ['Анализ идеи и требований', 'Прототипирование и дизайн', 'Разработка основного функционала', 'Подготовка к запуску']
      },
      support: {
        name: 'Поддержка и развитие',
        price: 'по договорённости',
        features: ['Техническое сопровождение', 'Регулярные обновления', 'Мониторинг стабильности', 'Консультации']
      },
      select: 'Выбрать',
      footer: {
        text: 'Работаем с задачами разного масштаба. Обсудим задачу и предложу оптимальную цену',
        button: 'Обсудить задачу'
      }
    },
    order: {
      title: 'Заказать & Обсудить задачу',
      intro: 'Заполните форму ниже, и мы свяжемся с вами в течение 24 часов для обсуждения вашего проекта',
      type: 'Тип заказа:',
      typePlaceholder: 'Выберите тип заказа',
      types: {
        gameDev: 'Разработка игр',
        chatbot: 'Чат-бот',
        aiAssistant: 'ИИ ассистент',
        crm: 'CRM-система',
        website: 'Веб-сайт',
        mvp: 'MVP / Запуск продукта',
        support: 'Поддержка и развитие',
        testing: 'Тестирование',
        other: 'Другое'
      },
      tariff: 'Тариф для сайта:',
      tariffPlaceholder: 'Выберите тариф',
      tariffs: {
        basic: 'Базовый',
        standard: 'Стандартный',
        premium: 'Премиум',
        custom: 'Индивидуальный'
      },
      fullname: 'Ваше имя:',
      fullnamePlaceholder: 'Ваше имя',
      phone: 'Ваш телефон:',
      phonePlaceholder: 'Ваш телефон',
      company: 'Компания (опционально):',
      companyPlaceholder: 'Название компании',
      description: 'Описание проекта:',
      descriptionPlaceholder: 'Опишите ваш проект подробно. Чем больше деталей, тем точнее мы сможем оценить задачу и предложить решение...',
      submit: 'Отправить заказ',
      sending: 'Отправка...',
      sendVia: 'Отправить через',
      copyMessage: 'Текст заказа скопирован! Вставьте его в чат Telegram/LinkedIn.',
      channels: {
        whatsapp: 'WhatsApp',
        telegram: 'Telegram (ручной)',
        email: 'Email',
        linkedin: 'LinkedIn'
      },
      success: '✅ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.'
    },
    contact: {
      title: 'связаться',
      linkedin: {
        desc: 'Профессиональный профиль и деловое общение.'
      },
      instagram: {
        desc: 'Быстрый способ связи и обсуждения проекта.'
      },
      facebook: {
        desc: 'Следите за новостями и обновлениями в социальной сети.'
      },
      email: 'EMAIL',
      phone: 'ТЕЛЕФОН'
    },
    meta: {
      title: 'Создавай. Масштабируй. Развивай бизнес. | Zodtech',
      description: 'Разработка высоконагруженных сайтов, мобильных приложений и AI-агентов для бизнеса. Полный цикл: от MVP до масштабирования. Закажите консультацию!'
    }
  },
  en: {
    nav: {
      home: 'Home',
      cases: 'Cases',
      tariffs: 'Tariffs',
      order: 'Order',
      contact: 'Contact',
      lang: 'Language'
    },
    gallery: {
      back: '← Back to cases',
      title: 'Marketly',
      subtitle: 'Online store with full functionality'
    },
    pages: {
      home: 'Home',
      cases: 'Cases',
      tariffs: 'Tariffs',
      order: 'Order & Discuss Task',
      contact: 'Contact'
    },
    hero: {
      title: 'Creating digital solutions that work',
      subtitle: 'From idea to launch. We develop websites, applications and digital products for business growth. <br />Our focus is real results: sales growth, process automation and convenience for clients.',
      badge1: '✓ Quality guarantee',
      badge2: '✓ Meeting deadlines',
      badge3: '✓ Support 24/7'
    },
    whatsapp: {
      title: '🎯*New Order from Site*',
      type: '📋*Order Type:*',
      tariff: '💰*Tariff:*',
      company: '🏢*Company:*',
      name: '👤*Name:*',
      phone: '📱*Phone:*',
      desc: '📝*Project Description:*',
      time: '⏰*Time:*'
    },
    services: {
      title: 'Our services',
      website: {
        title: 'Website creation',
        text: 'We develop websites for business needs — from landing pages to complex web platforms with convenient management and scaling.'
      },
      automation: {
        title: 'Business process automation',
        text: 'We develop custom solutions for automating individual tasks and processes in business, selecting the optimal format for current needs.'
      },
      mvp: {
        title: 'MVP and product launch',
        text: 'We help turn an idea into a working product: we design, develop MVP and prepare for the first launch.'
      },
      support: {
        title: 'Project support and development',
        text: 'We support projects after launch: fix errors, improve functionality and develop the product as the business grows.'
      },
      games: {
        title: 'Game development',
        text: 'We develop gaming and interactive projects for various platforms with a focus on mechanics and implementation quality.'
      },
      science: {
        title: 'Scientific project creation',
        text: 'We develop research and scientific projects, creating digital solutions for analysis, experiments and educational tasks.'
      },
      testing: {
        title: 'Testing and audit',
        text: 'We check websites and web applications for errors, vulnerabilities and security issues, increasing stability and trust.'
      },
      chatbot: {
        title: 'AI Chatbots',
        text: 'We develop smart bots based on AI to automate customer support, sales and internal processes.'
      }
    },
    cta: {

      text: 'Contact us today and get a free consultation on your project',
      button: 'Discuss task'
    },
    filters: {
      all: 'All',
      webDesign: 'Web Design',
      apps: 'Applications',
      webDev: 'Web Development',
      select: 'Select category'
    },
    projects: {
      categories: {
        webDev: 'Web Development'
      },
      finance: {
        category: 'Web Development',
        description: 'Financial management panel for analyzing expenses and income.'
      },
      digitalStudio: {
        category: 'Web Development',
        description: 'Multi-page website for a digital agency. Includes pages with responsive design and interactive elements.'
      },
      medicine: {
        category: 'Web Development',
        description: 'Corporate website for a medical or legal center with services, specialists and an online appointment system.'
      },
      autoMarket: {
        category: 'Web Development',
        description: 'Multi-page website for a car dealership with a catalog of cars, filtering and pages of individual offers.'
      },
      lms: {
        category: 'Web Development',
        description: 'Demonstration project of an educational platform with a course catalog, learning pages and personal account.'
      },
      marketly: {
        category: 'Web Development',
        description: 'Online store with product catalog, shopping cart, authorization and payment system.'
      },
      summary: {
        category: 'Web Development',
        description: 'Web analytics panel with key indicators, charts and reports for monitoring and decision-making.'
      },
      taskManager: {
        category: 'Applications',
        description: 'Application for managing tasks and projects: planning, deadline control, progress and teamwork.'
      },
      arrival: {
        category: 'Web Development',
        description: 'Modern web service with interactive interface, data visualization and high performance.'
      }
    },
    tariffs: {
      title: 'Tariffs',
      quickStart: {
        name: 'Quick launch',
        price: 'from 25 000 ₸',
        features: ['Landing page for task', 'Up to 5 pages', 'SEO optimization', 'Support 1 month']
      },
      solution: {
        name: 'Solution for task',
        price: 'from 50 000 ₸',
        features: ['Multi-page website', 'Up to 20 pages', 'Enhanced SEO optimization', 'Support 3 months']
      },
      gameDev: {
        name: 'Game development',
        price: 'from 120 000 ₸',
        features: ['Medium complexity game project', 'PC and Mobile', 'Core gameplay and visuals', 'Support 1 month']
      },
      chatbot: {
        name: 'Chatbot',
        price: 'from 25 000 ₸',
        features: ['Bot development for task', 'Telegram / WhatsApp / Web', 'Basic logic and scenarios', 'API integration', 'Support 1 month']
      },
      crm: {
        name: 'CRM / automation',
        price: 'from 70 000 ₸',
        features: ['CRM installation and setup', 'Website up to 20 pages + CMS Integration', 'Integration with messengers and services', 'Automation of simple tasks', 'SEO optimization', 'Support 3 months']
      },
      aiAssistant: {
        name: 'AI Assistant',
        price: 'from 70 000 ₸',
        features: ['AI assistant development for task 24/7', 'Integration with website, CRM, Telegram, WhatsApp', 'Training on your knowledge base', 'Basic training / setup', 'Support 3 months']
      },
      testing: {
        name: 'Testing and audit',
        price: 'from 15 000 ₸',
        features: ['Website vulnerability check', 'Finding errors and bugs', 'Logic and stability analysis', 'Improvement recommendations']
      },
      mvp: {
        name: 'MVP / product launch',
        price: 'Cost estimate after task discussion',
        features: ['Idea and requirements analysis', 'Prototyping and design', 'Core functionality development', 'Launch preparation']
      },
      support: {
        name: 'Support and development',
        price: 'By agreement',
        features: ['Technical support', 'Regular updates', 'Stability monitoring', 'Consultations']
      },
      select: 'Select',
      footer: {
        text: 'We work with tasks of different scales. We will discuss the task and offer the optimal price',
        button: 'Discuss task'
      }
    },
    order: {
      title: 'Order & Discuss Task',
      intro: 'Fill out the form below and we will contact you within 24 hours to discuss your project',
      type: 'Order type:',
      typePlaceholder: 'Select order type',
      types: {
        gameDev: 'Game development',
        chatbot: 'Chatbot',
        aiAssistant: 'AI assistant',
        crm: 'CRM system',
        website: 'Website',
        mvp: 'MVP / Product launch',
        support: 'Support and development',
        testing: 'Testing',
        other: 'Other'
      },
      tariff: 'Website tariff:',
      tariffPlaceholder: 'Select tariff',
      tariffs: {
        basic: 'Basic',
        standard: 'Standard',
        premium: 'Premium',
        custom: 'Custom'
      },
      fullname: 'Your name:',
      fullnamePlaceholder: 'Your name',
      phone: 'Your phone:',
      phonePlaceholder: 'Your phone',
      company: 'Company (optional):',
      companyPlaceholder: 'your company',
      description: 'Project description:',
      descriptionPlaceholder: 'Describe your project in detail. The more details, the more accurately we can assess the task and offer a solution...',
      submit: 'Send order',
      sending: 'Sending...',
      sendVia: 'Send via',
      copyMessage: 'Order text copied! Paste it in Telegram/LinkedIn chat.',
      channels: {
        whatsapp: 'WhatsApp',
        telegram: 'Telegram (manual)',
        email: 'Email',
        linkedin: 'LinkedIn'
      },
      success: '✅ Thank you! Your request has been sent. We will contact you soon.'
    },
    contact: {
      title: 'Contact',
      linkedin: {
        desc: 'Professional profile and business communication.'
      },
      instagram: {
        desc: 'Quick way to contact and discuss the project.'
      },
      facebook: {
        desc: 'Follow news and updates on social network.'
      },
      email: 'EMAIL',
      phone: 'PHONE'
    },
    meta: {
      title: 'Build. Scale. Drive. | Zodtech',
      description: 'Developing high-load websites, mobile applications, and AI agents for business. Full cycle: from MVP to scaling. Book a consultation!'
    }
  }
};

const LanguageManager = {
  currentLang: 'ru',

  init() {
    // 1. Determine Browser Language
    const browserLangFull = navigator.language.toLowerCase();
    const browserLang = browserLangFull.split('-')[0];

    // 2. Localized Titles Map (Native Language Titles)
    const localizedTitles = {
      'ru': 'Создавай. Масштабируй. Развивай бизнес. | Zodtech',
      'kz': 'Жаса. Дамыт. Бизнесті өсір. | Zodtech',
      'kk': 'Жаса. Дамыт. Бизнесті өсір. | Zodtech',
      'en': 'Build. Scale. Drive. | Zodtech',
      'us': 'Build. Scale. Drive. | Zodtech',
      'gb': 'Build. Scale. Drive. | Zodtech',
      'uz': 'Yarat. Kengayt. Rivojlantir. | Zodtech',
      'ky': 'Жарат. Кеңейт. Өнүктүр. | Zodtech',
      'kg': 'Жарат. Кеңейт. Өнүктүр. | Zodtech',
      'ko': '구축. 확장. 성장. | Zodtech', // Korean
      'ar': 'ابنِ. توسع. انطلق. | Zodtech', // Arabic
    };

    // 3. Logic: Saved Lang vs Auto-Detect
    const savedLang = localStorage.getItem('siteLang');

    if (savedLang && translations[savedLang]) {
      // CASE A: User previously selected a language -> Respect it fully
      this.currentLang = savedLang;
      this.applyLanguage(this.currentLang);
    } else {
      // CASE B: First visit (or no saved lang) -> Smart Auto-Detect

      // B1. Determine Content Language Fallback
      // Default to 'en'
      let contentLang = 'en';

      // If browser is RU/KZ/EN -> use that
      if (['ru', 'kz', 'en'].includes(browserLang)) {
        contentLang = browserLang;
      }
      // Specific CIS fallbacks to RU (common preference)
      else if (['uz', 'ky', 'kg', 'be', 'uk'].includes(browserLang)) {
        contentLang = 'ru';
      }

      this.currentLang = contentLang;
      this.applyLanguage(this.currentLang);

      // B2. Apply "Native Title" if available (Visual sugar)
      // Even if content is 'en' or 'ru', if we have a title in the user's exact native language, show it.
      // This creates a personalized feeling ("Build. Scale. Drive." in their language)
      if (localizedTitles[browserLang]) {
        document.title = localizedTitles[browserLang];
      }
    }

    this.initSwitchers();
  },

  initSwitchers() {
    const switcher = document.querySelector('[data-lang-switcher]');
    const mobileSwitcher = document.querySelector('[data-lang-switcher-mobile]');

    if (switcher) {
      switcher.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.cycleLanguage();
      });
    }

    if (mobileSwitcher) {
      mobileSwitcher.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.cycleLanguage();
        // Закрываем мобильное меню после переключения
        const mobileMenu = document.querySelector('[data-mobile-menu]');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          document.querySelector('[data-mobile-menu-btn]')?.click();
        }
      });
    }
  },

  cycleLanguage() {
    const languages = ['ru', 'kz', 'en'];
    const currentIndex = languages.indexOf(this.currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    this.setLanguage(languages[nextIndex]);
  },

  setLanguage(lang) {
    if (!['kz', 'ru', 'en'].includes(lang)) return;

    this.currentLang = lang;
    localStorage.setItem('siteLang', lang);
    document.documentElement.lang = lang;

    this.applyLanguage(lang);
    this.updateLangCodes();
  },

  updateLangCodes() {
    const langCodes = document.querySelectorAll('[data-current-lang], [data-current-lang-mobile]');
    const langMap = { kz: 'KZ', ru: 'RU', en: 'EN' };
    langCodes.forEach(el => {
      el.textContent = langMap[this.currentLang];
    });
  },

  applyLanguage(lang) {
    if (!translations[lang]) return;

    const t = translations[lang];

    // Навигация
    document.querySelectorAll('[data-translate="nav.home"]').forEach(el => el.textContent = t.nav.home);
    document.querySelectorAll('[data-translate="nav.cases"]').forEach(el => el.textContent = t.nav.cases);
    document.querySelectorAll('[data-translate="nav.tariffs"]').forEach(el => el.textContent = t.nav.tariffs);
    document.querySelectorAll('[data-translate="nav.order"]').forEach(el => el.textContent = t.nav.order);
    document.querySelectorAll('[data-translate="nav.contact"]').forEach(el => el.textContent = t.nav.contact);
    document.querySelectorAll('[data-translate="nav.lang"]').forEach(el => el.textContent = t.nav.lang);

    // Галерея
    if (t.gallery) {
      document.querySelectorAll('[data-translate="gallery.back"]').forEach(el => el.textContent = t.gallery.back);
      document.querySelectorAll('[data-translate="gallery.title"]').forEach(el => el.textContent = t.gallery.title);
      document.querySelectorAll('[data-translate="gallery.subtitle"]').forEach(el => el.textContent = t.gallery.subtitle);
    }

    // Заголовки страниц - обновляем все article-title
    document.querySelectorAll('article .article-title').forEach(titleEl => {
      const article = titleEl.closest('article');
      if (!article) return;

      const pageAttr = article.getAttribute('data-page') || '';
      const pageLower = pageAttr.toLowerCase();

      // Маппинг для определения страницы
      if (pageLower.includes('главная') || pageLower.includes('басты') || pageLower === 'home') {
        titleEl.textContent = t.pages.home;
      } else if (pageLower.includes('кейсы') || pageLower.includes('жобалар') || pageLower === 'cases') {
        titleEl.textContent = t.pages.cases;
      } else if (pageLower.includes('тарифы') || pageLower.includes('тарифтер') || pageLower === 'tariffs') {
        titleEl.textContent = t.pages.tariffs;
      } else if (pageLower.includes('заказать') || pageLower.includes('тапсырыс') || pageLower.includes('order')) {
        titleEl.textContent = t.pages.order;
      } else if (pageLower.includes('связаться') || pageLower.includes('байланысу') || pageLower === 'contact') {
        titleEl.textContent = t.pages.contact;
      }
    });



    // НЕ обновляем data-page атрибуты статей, они должны оставаться статичными
    // document.querySelectorAll('article[data-page]').forEach(...) - REMOVED

    // Обновляем pageMapping в script.js если он там используется
    // Обновляем pageMapping в script.js
    // Маппинг: [Локализованное название ссылки] -> [Статический ID страницы (на русском)]
    const navMapping = {
      'ru': {
        'Главная': 'главная',
        'Кейсы': 'кейсы',
        'Тарифы': 'тарифы',
        'Заказать': 'заказать & обсудить задачу',
        'Связаться': 'связаться',
        'Обсудить задачу': 'заказать & обсудить задачу'
      },
      'kz': {
        'Басты': 'главная',
        'Жобалар': 'кейсы',
        'Тарифтер': 'тарифы',
        'Тапсырыс беру': 'заказать & обсудить задачу',
        'Байланысу': 'связаться',
        'Тапсырманы талқылау': 'заказать & обсудить задачу'
      },
      'en': {
        'Home': 'главная',
        'Cases': 'кейсы',
        'Tariffs': 'тарифы',
        'Order': 'заказать & обсудить задачу',
        'Contact': 'связаться',
        'Discuss task': 'заказать & обсудить задачу'
      }
    };

    if (window.updatePageMapping) {
      window.updatePageMapping(navMapping[lang]);
    }

    this.translateElements(t);
    this.updateOrderForm(t);
    this.updateLangCodes();
  },

  updateOrderForm(t) {
    const form = document.querySelector('[data-order-form]');
    if (!form) return;

    // Translate labels
    const typeLabel = form.querySelector('label[for="order-type"]');
    if (typeLabel) typeLabel.textContent = t.order.type;

    const tariffLabel = form.querySelector('label[for="tariff"]');
    if (tariffLabel) tariffLabel.textContent = t.order.tariff;

    const nameLabel = form.querySelector('label[for="fullname"]');
    if (nameLabel) nameLabel.textContent = t.order.fullname;

    const phoneLabel = form.querySelector('label[for="phone"]');
    if (phoneLabel) phoneLabel.textContent = t.order.phone;

    const companyLabel = form.querySelector('label[for="company"]');
    if (companyLabel) companyLabel.textContent = t.order.company;

    const descLabel = form.querySelector('label[for="description"]');
    if (descLabel) descLabel.textContent = t.order.description;

    // Translate placeholders
    const nameInput = form.querySelector('#fullname');
    if (nameInput) nameInput.placeholder = t.order.fullnamePlaceholder;

    const phoneInput = form.querySelector('#phone');
    if (phoneInput) phoneInput.placeholder = t.order.phonePlaceholder;

    const companyInput = form.querySelector('#company');
    if (companyInput) companyInput.placeholder = t.order.companyPlaceholder;

    const descInput = form.querySelector('#description');
    if (descInput) descInput.placeholder = t.order.descriptionPlaceholder;

    // Translate select options
    const typeSelect = form.querySelector('#order-type');
    if (typeSelect) {
      // Update default option
      const defaultOption = typeSelect.querySelector('option[value=""]');
      if (defaultOption) defaultOption.textContent = t.order.typePlaceholder;

      // Update other options
      Array.from(typeSelect.options).forEach(option => {
        if (!option.value) return; // Skip default

        // Convert kebab-case (game-dev) to camelCase (gameDev) for key lookup
        const key = option.value.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

        if (t.order.types[key]) {
          option.textContent = t.order.types[key];
        }
      });
    }

    const tariffSelect = form.querySelector('#tariff');
    if (tariffSelect) {
      // Update default option
      const defaultOption = tariffSelect.querySelector('option[value=""]');
      if (defaultOption) defaultOption.textContent = t.order.tariffPlaceholder;

      // Update other options
      Array.from(tariffSelect.options).forEach(option => {
        if (!option.value) return;

        // values are simple (basic, standard...), match keys directly
        if (t.order.tariffs[option.value]) {
          option.textContent = t.order.tariffs[option.value];
        }
      });
    }

    // Translate submit button
    const submitBtn = form.querySelector('[data-submit-trigger] span');
    if (submitBtn) submitBtn.textContent = t.order.submit;

    // Translate channel buttons
    const channelBtns = form.querySelectorAll('.submit-option-btn');
    channelBtns.forEach(btn => {
      const method = btn.getAttribute('data-submit-method');
      const span = btn.querySelector('span');
      if (span && t.order.channels && t.order.channels[method]) {
        span.textContent = t.order.channels[method];
      }
    });
  },

  translateElements(t) {
    // Hero секция
    const heroTitle = document.querySelector('.hero-title-main');
    if (heroTitle) heroTitle.textContent = t.hero.title;

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.innerHTML = t.hero.subtitle;

    const badges = document.querySelectorAll('.badge-item');
    if (badges.length >= 3) {
      badges[0].textContent = t.hero.badge1;
      badges[1].textContent = t.hero.badge2;
      badges[2].textContent = t.hero.badge3;
    }

    // Services
    const serviceTitle = document.querySelector('.service-title');
    if (serviceTitle) serviceTitle.textContent = t.services.title;

    // CTA


    const ctaText = document.querySelector('.cta-content-main p');
    if (ctaText) ctaText.textContent = t.cta.text;

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) ctaButton.textContent = t.cta.button;

    // Meta update logic
    if (t.meta) {
      document.title = t.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      const metaOgTitle = document.querySelector('meta[property="og:title"]');
      const metaOgDesc = document.querySelector('meta[property="og:description"]');
      const metaTwitterTitle = document.querySelector('meta[property="twitter:title"]');
      const metaTwitterDesc = document.querySelector('meta[property="twitter:description"]');

      if (metaDesc) metaDesc.setAttribute('content', t.meta.description);
      if (metaOgTitle) metaOgTitle.setAttribute('content', t.meta.title);
      if (metaOgDesc) metaOgDesc.setAttribute('content', t.meta.description);
      if (metaTwitterTitle) metaTwitterTitle.setAttribute('content', t.meta.title);
      if (metaTwitterDesc) metaTwitterDesc.setAttribute('content', t.meta.description);
    }

    // Filters
    const filterBtns = document.querySelectorAll('[data-filter-btn]');
    const filterSelect = document.querySelector('[data-selecct-value]');

    if (filterBtns.length >= 4) {
      filterBtns[0].textContent = t.filters.all;
      filterBtns[1].textContent = t.filters.webDesign;
      filterBtns[2].textContent = t.filters.apps;
      filterBtns[3].textContent = t.filters.webDev;
    }

    if (filterSelect) filterSelect.textContent = t.filters.select;

    const selectItems = document.querySelectorAll('[data-select-item]');
    if (selectItems.length >= 4) {
      selectItems[0].textContent = t.filters.all;
      selectItems[1].textContent = t.filters.webDesign;
      selectItems[2].textContent = t.filters.apps;
      selectItems[3].textContent = t.filters.webDev;
    }

    // Tariffs
    const tariffTitle = document.querySelector('.tariffs .article-title');
    if (tariffTitle) tariffTitle.textContent = t.tariffs.title;

    // Order form
    const orderTitle = document.querySelector('.order .article-title');
    if (orderTitle) orderTitle.textContent = t.order.title;

    const formIntro = document.querySelector('.form-intro p');
    if (formIntro) formIntro.textContent = t.order.intro;

    // Contact
    const contactTitle = document.querySelector('.contact .article-title');
    if (contactTitle) contactTitle.textContent = t.contact.title;

    // Применяем переводы к сервисам, тарифам и другим элементам
    this.translateServices(t);
    this.translateTariffs(t);
    this.translateOrderForm(t);
    this.translateProjects(t);
    this.translateContact(t);
  },

  translateServices(t) {
    const services = [
      'website', 'automation', 'mvp', 'support',
      'games', 'science', 'testing', 'chatbot'
    ];

    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
      const key = services[index];
      if (key && t.services[key]) {
        const title = item.querySelector('.service-item-title');
        const text = item.querySelector('.service-item-text');

        if (title) title.textContent = t.services[key].title;
        if (text) text.textContent = t.services[key].text;
      }
    });
  },

  translateTariffs(t) {
    const tariffKeys = [
      'quickStart', 'solution', 'gameDev', 'chatbot',
      'crm', 'aiAssistant', 'testing', 'mvp', 'support'
    ];

    const tariffItems = document.querySelectorAll('.tariff-item');

    tariffItems.forEach((item, index) => {
      const key = tariffKeys[index];
      const data = t.tariffs[key];

      if (key && data) {
        // Name
        const nameEl = item.querySelector('.tariff-name');
        if (nameEl) nameEl.textContent = data.name;

        // Price
        const priceEl = item.querySelector('.tariff-price');
        if (priceEl && data.price) {
          priceEl.textContent = data.price;
        }

        // Features
        const featureEls = item.querySelectorAll('.tariff-features li');
        if (data.features && Array.isArray(data.features)) {
          featureEls.forEach((el, featureIndex) => {
            if (data.features[featureIndex]) {
              el.textContent = data.features[featureIndex];
            }
          });
        }

        // Button
        const btnEl = item.querySelector('.btn-select-tariff');
        if (btnEl) btnEl.textContent = t.tariffs.select;
      }
    });

    // Footer
    const footerText = document.querySelector('.tariffs-footer-text');
    if (footerText) {
      const arrow = footerText.querySelector('.arrow-animation');
      const text = t.tariffs.footer.text;
      if (arrow) {
        footerText.innerHTML = text + ' <span class="arrow-animation">→</span>';
      } else {
        footerText.textContent = text;
      }
    }

    const footerBtn = document.querySelector('.tariffs-footer-btn');
    if (footerBtn) footerBtn.textContent = t.tariffs.footer.button;
  },

  translateOrderForm(t) {
    // Labels
    const typeLabel = document.querySelector('label[for="order-type"]');
    if (typeLabel) typeLabel.textContent = t.order.type;

    const tariffLabel = document.querySelector('label[for="tariff"]');
    if (tariffLabel) tariffLabel.textContent = t.order.tariff;

    const fullnameLabel = document.querySelector('label[for="fullname"]');
    if (fullnameLabel) fullnameLabel.textContent = t.order.fullname;

    const phoneLabel = document.querySelector('label[for="phone"]');
    if (phoneLabel) phoneLabel.textContent = t.order.phone;

    const descLabel = document.querySelector('label[for="description"]');
    if (descLabel) descLabel.textContent = t.order.description;

    // Select options
    const orderTypeSelect = document.getElementById('order-type');
    if (orderTypeSelect) {
      const options = orderTypeSelect.querySelectorAll('option');
      if (options[0]) options[0].textContent = t.order.typePlaceholder;
      const typeMap = ['', 'game-dev', 'chatbot', 'ai-assistant', 'crm', 'website', 'mvp', 'support', 'testing', 'other'];
      typeMap.forEach((value, i) => {
        if (options[i] && value && t.order.types[value]) {
          options[i].textContent = t.order.types[value];
        }
      });
    }

    const tariffSelect = document.getElementById('tariff');
    if (tariffSelect) {
      const options = tariffSelect.querySelectorAll('option');
      if (options[0]) options[0].textContent = t.order.tariffPlaceholder;
      const tariffMap = ['', 'basic', 'standard', 'premium', 'custom'];
      tariffMap.forEach((value, i) => {
        if (options[i] && value && t.order.tariffs[value]) {
          options[i].textContent = t.order.tariffs[value];
        }
      });
    }

    // Placeholders
    const fullnameInput = document.getElementById('fullname');
    if (fullnameInput) fullnameInput.placeholder = t.order.fullnamePlaceholder;

    const phoneInput = document.getElementById('phone');
    if (phoneInput) phoneInput.placeholder = t.order.phonePlaceholder;

    const descTextarea = document.getElementById('description');
    if (descTextarea) descTextarea.placeholder = t.order.descriptionPlaceholder;

    // Submit button
    const submitBtn = document.querySelector('[data-order-btn]');
    if (submitBtn) {
      const icon = submitBtn.querySelector('ion-icon');
      const span = submitBtn.querySelector('span');
      if (span) span.textContent = t.order.submit;
    }
  },

  translateProjects(t) {
    // Project categories
    document.querySelectorAll('.project-category').forEach(el => {
      if (el.textContent.includes('Веб-разработка') || el.textContent.includes('Веб-дамыту') || el.textContent.includes('Web Development')) {
        el.textContent = t.projects.categories.webDev;
      } else if (el.textContent.includes('Приложения') || el.textContent.includes('Қосымшалар') || el.textContent.includes('Applications')) {
        el.textContent = t.projects.categories.apps || t.filters.apps;
      }
    });

    // Project descriptions - используем индексы
    const descriptions = [
      t.projects.finance.description,
      t.projects.digitalStudio.description,
      t.projects.medicine.description,
      t.projects.autoMarket.description,
      t.projects.lms.description,
      t.projects.marketly.description,
      t.projects.summary.description,
      t.projects.taskManager.description,
      t.projects.arrival.description
    ];

    document.querySelectorAll('.project-description').forEach((el, idx) => {
      if (descriptions[idx]) el.textContent = descriptions[idx];
    });
  },

  translateContact(t) {
    const linkDescs = document.querySelectorAll('.link-desc');
    if (linkDescs.length >= 3) {
      linkDescs[0].textContent = t.contact.linkedin.desc;
      linkDescs[1].textContent = t.contact.instagram.desc;
      linkDescs[2].textContent = t.contact.facebook.desc;
    }

    const contactLabels = document.querySelectorAll('.contact-label');
    contactLabels.forEach(label => {
      if (label.textContent.includes('EMAIL')) label.textContent = t.contact.email;
      if (label.textContent.includes('ТЕЛЕФОН') || label.textContent.includes('PHONE')) label.textContent = t.contact.phone;
    });
  }
};

// Экспортируем для использования в других скриптах
if (typeof window !== 'undefined') {
  window.LanguageManager = LanguageManager;
  window.translations = translations;
}

