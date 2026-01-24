'use strict';
(function () {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  document.querySelectorAll('.service-item,.tariff-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease,transform 0.6s ease';
    fadeInObserver.observe(el);
  });
  const elementToggleFunc = function (elem) {
    if (elem) elem.classList.toggle("active");
  }
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener("click", function () {
      elementToggleFunc(sidebar);
    });
  }
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");
  if (select) {
    select.addEventListener("click", function () {
      elementToggleFunc(this);
    });
  }
  const filterItems = document.querySelectorAll("[data-filter-item]");
  const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
      if (selectedValue === "all") {
        filterItems[i].classList.add("active");
      } else if (selectedValue === filterItems[i].dataset.category) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
  }
  if (selectItems.length > 0 && selectValue) {
    for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].addEventListener("click", function () {
        let selectedValue = this.getAttribute("data-filter-value");
        selectValue.innerText = this.innerText;
        if (select) elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    }
  }
  let lastClickedBtn = filterBtn[0];
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.getAttribute("data-filter-value");
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");
  if (form && formInputs.length > 0 && formBtn) {
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener("input", function () {
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      });
    }
  }
  // Динамический pageMapping - будет обновляться при смене языка
  let pageMapping = {
    "главная": "главная",
    "Главная": "главная",
    "басты": "басты",
    "Басты": "басты",
    "home": "home",
    "Home": "home",
    "кейсы": "кейсы",
    "Кейсы": "кейсы",
    "жобалар": "жобалар",
    "Жобалар": "жобалар",
    "cases": "cases",
    "Cases": "cases",
    "тарифы": "тарифы",
    "Тарифы": "тарифы",
    "тарифтер": "тарифтер",
    "Тарифтер": "тарифтер",
    "tariffs": "tariffs",
    "Tariffs": "tariffs",
    "заказать": "заказать & обсудить задачу",
    "Заказать": "заказать & обсудить задачу",
    "заказать & обсудить задачу": "заказать & обсудить задачу",
    "тапсырыс беру": "тапсырыс беру & тапсырманы талқылау",
    "Тапсырыс беру": "тапсырыс беру & тапсырманы талқылау",
    "тапсырыс беру & тапсырманы талқылау": "тапсырыс беру & тапсырманы талқылау",
    "order": "order & discuss task",
    "Order": "order & discuss task",
    "order & discuss task": "order & discuss task",
    "связаться": "связаться",
    "Связаться": "связаться",
    "байланысу": "байланысу",
    "Байланысу": "байланысу",
    "contact": "contact",
    "Contact": "contact",
    "Обсудить задачу": "заказать & обсудить задачу",
    "Тапсырманы талқылау": "тапсырыс беру & тапсырманы талқылау",
    "Discuss task": "order & discuss task"
  };

  // Функция для обновления маппинга при смене языка
  window.updatePageMapping = function (newMapping) {
    if (newMapping) {
      // Обновляем маппинг, добавляя варианты для всех языков
      Object.keys(newMapping).forEach(key => {
        pageMapping[key] = newMapping[key];
        pageMapping[key.charAt(0).toUpperCase() + key.slice(1)] = newMapping[key];
      });
    }
  };

  function switchPage(targetPageName) {
    if (!targetPageName) {
      console.error('switchPage called without targetPageName');
      return;
    }
    console.log('Switching to page:', targetPageName);

    // Получить свежие ссылки на элементы
    const allPages = document.querySelectorAll("[data-page]");
    const allNavLinks = document.querySelectorAll("[data-nav-link]");

    // Скрыть все страницы
    for (let j = 0; j < allPages.length; j++) {
      allPages[j].classList.remove("active");
      allPages[j].style.display = 'none';
      allPages[j].style.visibility = 'hidden';
      allPages[j].style.opacity = '0';
    }

    // Убрать активный класс со всех ссылок
    for (let j = 0; j < allNavLinks.length; j++) {
      allNavLinks[j].classList.remove("active");
    }

    // Найти и активировать нужную страницу
    let pageFound = false;
    for (let j = 0; j < allPages.length; j++) {
      const pageName = allPages[j].dataset.page;
      if (pageName === targetPageName) {
        allPages[j].classList.add("active");
        allPages[j].style.display = 'block';
        allPages[j].style.visibility = 'visible';
        allPages[j].style.opacity = '1';
        allPages[j].style.position = 'relative';
        allPages[j].style.zIndex = '1';
        pageFound = true;
        console.log('Page activated:', pageName, allPages[j]);
        break;
      }
    }

    if (!pageFound) {
      console.error('Page not found:', targetPageName);
      console.log('Available pages:', Array.from(allPages).map(p => p.dataset.page));
      return;
    }

    // Активировать соответствующую навигационную ссылку
    for (let j = 0; j < allNavLinks.length; j++) {
      const linkText = allNavLinks[j].textContent.trim();
      const mappedPage = pageMapping[linkText];
      if (mappedPage === targetPageName || linkText.toLowerCase() === targetPageName.toLowerCase()) {
        allNavLinks[j].classList.add("active");
        console.log('Link activated:', linkText);
        break;
      }
    }

    // Прокрутить вверх
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  // Делаем функцию доступной глобально
  window.switchPage = switchPage;
  console.log('switchPage function registered globally');

  // Функция инициализации навигации
  function initNavigation() {
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const pageElements = document.querySelectorAll("[data-page]");

    if (navLinks.length === 0 || pageElements.length === 0) {
      console.error('Navigation elements not found! Links:', navLinks.length, 'Pages:', pageElements.length);
      return;
    }

    console.log('Navigation initialized:', navLinks.length, 'links,', pageElements.length, 'pages');

    // Инициализация активной страницы
    const activePage = document.querySelector("article.active");
    if (activePage) {
      console.log('Active page on load:', activePage);
      activePage.style.setProperty('display', 'block', 'important');
      activePage.style.setProperty('visibility', 'visible', 'important');
      activePage.style.setProperty('opacity', '1', 'important');
      activePage.style.setProperty('position', 'relative', 'important');
      activePage.style.setProperty('z-index', '1', 'important');
      activePage.style.setProperty('min-height', '200px', 'important');
      activePage.classList.add('active');
    } else {
      console.log('No active page found, switching to главная');
      switchPage("главная");
    }

    // Добавление обработчиков событий для навигационных ссылок
    navLinks.forEach(function (link) {
      // Удаляем старый обработчик если есть
      const oldHandler = link._navClickHandler;
      if (oldHandler) {
        link.removeEventListener("click", oldHandler);
      }

      // Создаем новый обработчик
      const clickHandler = function (e) {
        e.preventDefault();
        e.stopPropagation();
        const linkText = this.textContent.trim();
        console.log('Navigation clicked:', linkText, this);

        // Получить target page из маппинга
        let targetPage = pageMapping[linkText];
        if (!targetPage) {
          // Если нет в маппинге, попробуем найти по тексту
          targetPage = linkText.toLowerCase();
        }

        console.log('Target page:', targetPage);
        if (targetPage && window.switchPage) {
          window.switchPage(targetPage);
        } else {
          console.error('Could not determine target page for:', linkText, 'or switchPage not available');
        }
      };

      // Сохраняем ссылку на обработчик
      link._navClickHandler = clickHandler;
      link.setAttribute('data-handler-attached', 'true');

      // Добавляем обработчик
      link.addEventListener("click", clickHandler);

      const linkTextForLog = link.textContent.trim();
      console.log('Handler attached to:', linkTextForLog);
    });

    console.log('Navigation handlers attached to', navLinks.length, 'links');
  }

  // Инициализация после загрузки DOM
  function initializeApp() {
    // Проверяем наличие необходимых элементов
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    if (navLinks.length === 0 || pages.length === 0) {
      console.warn('Navigation elements not ready yet, retrying...', {
        navLinks: navLinks.length,
        pages: pages.length,
        readyState: document.readyState
      });
      // Увеличиваем таймаут и количество попыток
      let attempts = (window._navInitAttempts || 0) + 1;
      window._navInitAttempts = attempts;

      if (attempts < 15) {
        setTimeout(initializeApp, 300);
      } else {
        console.error('Failed to initialize navigation after', attempts, 'attempts');
        // Последняя попытка с прямым доступом
        if (navLinks.length > 0 || pages.length > 0) {
          console.log('Attempting direct initialization with available elements');
          initNavigation();
        }
      }
      return;
    }

    console.log('Initializing navigation with', navLinks.length, 'links and', pages.length, 'pages');
    // Инициализируем навигацию
    initNavigation();
  }

  // Множественная инициализация для надежности
  function startInitialization() {
    initializeApp();
  }

  // Запускаем инициализацию в зависимости от состояния документа
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startInitialization);
  } else {
    // DOM уже загружен
    startInitialization();
  }

  // Дополнительная проверка при полной загрузке страницы
  window.addEventListener('load', function () {
    console.log('Window loaded, checking navigation...');
    const activePage = document.querySelector("article.active");
    if (activePage) {
      activePage.style.setProperty('display', 'block', 'important');
      activePage.style.setProperty('visibility', 'visible', 'important');
      activePage.style.setProperty('opacity', '1', 'important');
    }

    // Повторная инициализация на случай если первая не сработала
    const navLinks = document.querySelectorAll("[data-nav-link]");
    if (navLinks.length > 0) {
      // Проверяем, есть ли обработчики
      let hasHandlers = false;
      navLinks.forEach(function (link) {
        // Проверяем наличие обработчиков через внутренние свойства
        if (link.onclick || link.getAttribute('data-handler-attached')) {
          hasHandlers = true;
        }
      });

      if (!hasHandlers) {
        console.log('No handlers found, reinitializing navigation...');
        initializeApp();
      }
    }
  });

  // Финальная попытка через 1 секунду и еще через 2 секунды
  setTimeout(function () {
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");
    if (navLinks.length > 0 && pages.length > 0) {
      // Проверяем, инициализирована ли навигация
      let hasActivePage = document.querySelector("article.active");
      let handlersCount = 0;
      navLinks.forEach(function (link) {
        if (link.getAttribute('data-handler-attached') === 'true') {
          handlersCount++;
        }
      });

      if (!hasActivePage || handlersCount < navLinks.length) {
        console.log('Final initialization attempt...', {
          hasActivePage: !!hasActivePage,
          handlersCount: handlersCount,
          totalLinks: navLinks.length
        });
        initializeApp();
      }
    }
  }, 1000);

  // Еще одна попытка через 2 секунды для надежности
  setTimeout(function () {
    const navLinks = document.querySelectorAll("[data-nav-link]");
    if (navLinks.length > 0) {
      let handlersCount = 0;
      navLinks.forEach(function (link) {
        if (link.getAttribute('data-handler-attached') === 'true') {
          handlersCount++;
        }
      });

      if (handlersCount < navLinks.length) {
        console.log('Second final attempt, initializing navigation...');
        initNavigation();
      }
    }
  }, 2000);
  /* --- Multi-Channel Submission Logic --- */
  const orderForm = document.querySelector("[data-order-form]");
  const orderInputs = document.querySelectorAll("[data-order-input]");
  const orderBtnTrigger = document.querySelector("[data-submit-trigger]"); // Main button for dropdown
  const orderOptions = document.querySelector("[data-submit-options]");
  const dateSubmitMethods = document.querySelectorAll("[data-submit-method]");
  // We need to keep track if the form is valid to enable/disable the dropdown trigger
  if (orderForm && orderInputs.length > 0 && orderBtnTrigger) {

    // 1. Validation Logic
    const validateForm = () => {
      if (orderForm.checkValidity()) {
        orderBtnTrigger.removeAttribute("disabled");
        orderBtnTrigger.classList.add("active");
      } else {
        orderBtnTrigger.setAttribute("disabled", "");
        orderBtnTrigger.classList.remove("active");
        if (orderOptions) orderOptions.classList.remove("active"); // Hide dropdown if invalid
      }
    };

    // Attach validation listener
    for (let i = 0; i < orderInputs.length; i++) {
      orderInputs[i].addEventListener("input", validateForm);
    }

    // 2. Dropdown Interaction
    orderBtnTrigger.addEventListener("click", (e) => {
      // Only toggle if not disabled (though browser handles disabled click mostly)
      if (!orderBtnTrigger.hasAttribute("disabled")) {
        e.stopPropagation();
        orderOptions.classList.toggle("active");
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!orderBtnTrigger.contains(e.target) && !orderOptions.contains(e.target)) {
        orderOptions.classList.remove("active");
      }
    });

    // 3. Application State & Translations
    const getFormDataAndTranslations = () => {
      const formData = new FormData(orderForm);
      const orderType = formData.get("order-type");
      const tariff = formData.get("tariff");
      const fullname = formData.get("fullname");
      const phone = formData.get("phone");
      const company = formData.get("company"); // New field
      const description = formData.get("description");

      const currentLang = localStorage.getItem('siteLang') || document.documentElement.lang || 'ru';
      const t = (window.translations && window.translations[currentLang]) ? window.translations[currentLang] : window.translations['ru'];

      // Translations helper
      let orderTypeLabel = orderType;
      const typeKey = orderType.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      if (t.order.types && t.order.types[typeKey]) orderTypeLabel = t.order.types[typeKey];

      let tariffLabel = tariff;
      if (t.order.tariffs && t.order.tariffs[tariff]) tariffLabel = t.order.tariffs[tariff];

      return {
        t,
        data: { fullname, phone, company, description, orderTypeLabel, tariffLabel }
      };
    };

    // 4. Submission Handlers
    dateSubmitMethods.forEach(btn => {
      btn.addEventListener("click", () => {
        if (!orderForm.checkValidity()) {
          orderForm.reportValidity();
          return;
        }

        const method = btn.getAttribute("data-submit-method");
        const { t, data } = getFormDataAndTranslations();
        const { fullname, phone, company, description, orderTypeLabel, tariffLabel } = data;

        // Construct Full Message (for clipboard & email body)
        const fullMessage = `${t.whatsapp.title}\n\n` +
          `${t.whatsapp.type} ${orderTypeLabel}\n` +
          `${t.whatsapp.tariff} ${tariffLabel}\n` +
          `${t.whatsapp.company} ${company || '-'}\n` +
          `${t.whatsapp.name} ${fullname}\n` +
          `${t.whatsapp.phone} ${phone}\n\n` +
          `${t.whatsapp.desc}\n${description}`;

        // Truncate message for URL parameters (safe limit around 800-1000 chars)
        const truncatedDescription = description.length > 800 ? description.substring(0, 800) + "..." : description;
        const shortMessage = `${t.whatsapp.title}\n\n` +
          `${fullname} (${phone})\n` +
          `${orderTypeLabel} | ${tariffLabel}\n\n` +
          `${truncatedDescription}`;

        const encodedFullMessage = encodeURIComponent(fullMessage);
        const encodedShortMessage = encodeURIComponent(shortMessage);

        // --- Channel Logic ---
        let url = "";

        // Helper for robust copy
        const copyToClipboard = (text) => {
          const cleanText = text.replace(/\*/g, '');
          return navigator.clipboard.writeText(cleanText).catch(() => {
            const el = document.createElement('textarea');
            el.value = cleanText;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
          });
        };

        switch (method) {
          case "whatsapp":
            // WhatsApp handles long URLs better, but we still use slightly shorter for safety
            url = `https://wa.me/77002174701?text=${encodedFullMessage}`;
            break;

          case "telegram":
            // Copy full text to clipboard
            copyToClipboard(fullMessage);

            // For URL, use shorter message because Telegram has stricter limits on t.me redirections
            // Removing markdown for URL to improve parsing
            const plainShort = shortMessage.replace(/\*/g, '');
            url = `https://t.me/NURJAKS1?text=${encodeURIComponent(plainShort)}`;

            alert(t.order.copyMessage || "Order text copied! Paste it in Telegram chat.");
            break;

          case "email":
            const subject = encodeURIComponent(t.whatsapp.title.replace(/\*/g, ''));
            url = `mailto:info@zodtech.kz?subject=${subject}&body=${encodedFullMessage}`;
            break;

          case "linkedin":
            copyToClipboard(fullMessage);
            alert(t.order.copyMessage || "Order text copied! Paste it in LinkedIn chat.");
            url = "https://www.linkedin.com/in/nurbek-abildaev-b1b277345";
            break;
        }

        if (url) {
          window.open(url, "_blank");
        }

        // Reset and Success Message
        orderForm.reset();
        orderOptions.classList.remove("active");
        orderBtnTrigger.setAttribute("disabled", "");

        const successDiv = document.createElement("div");
        successDiv.className = 'form-success-message';
        successDiv.textContent = t.order.success;
        successDiv.style.cssText = 'background: var(--green-crayola);color: white;padding: 15px;border-radius: 10px;margin-top: 20px;text-align: center;font-weight: 500;';

        const existingMsg = orderForm.querySelector('.form-success-message');
        if (existingMsg) existingMsg.remove();

        orderForm.appendChild(successDiv);
        setTimeout(() => successDiv.remove(), 5000);
      });
    });

  }

  const tariffButtons = document.querySelectorAll(".btn-select-tariff");
  tariffButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const tariffId = this.getAttribute("data-tariff-id") || this.textContent.trim().toLowerCase().replace(/\s+/g, "-");
      selectTariff(tariffId);
    });
  });
})();

function selectTariff(tariffId) {
  if (window.switchPage) {
    window.switchPage("заказать & обсудить задачу");
  }
  const tariffSelect = document.getElementById("tariff");
  if (tariffSelect) {
    tariffSelect.value = tariffId;
  }
  const orderTypeSelect = document.getElementById("order-type");
  if (orderTypeSelect) {
    orderTypeSelect.value = "website";
  }

  function forceDisplayActiveArticle() {
    let activeArticle = document.querySelector('article.active');
    if (!activeArticle) {
      activeArticle = document.querySelector('article[data-page="главная"]');
      if (activeArticle) {
        activeArticle.classList.add('active');
        console.log('Activated главная article:', activeArticle);
      }
    }
    if (activeArticle) {
      activeArticle.classList.remove('hidden');
      activeArticle.style.cssText = 'display: block !important;visibility: visible !important;opacity: 1 !important;position: relative !important;z-index: 1 !important;min-height: 200px !important;padding-top: 20px !important;padding-bottom: 100px !important;';
      activeArticle.style.setProperty('display', 'block', 'important');
      activeArticle.style.setProperty('visibility', 'visible', 'important');
      activeArticle.style.setProperty('opacity', '1', 'important');
      activeArticle.style.setProperty('position', 'relative', 'important');
      activeArticle.style.setProperty('z-index', '1', 'important');
      activeArticle.style.setProperty('min-height', '200px', 'important');
      const computedStyle = window.getComputedStyle(activeArticle);
      const rect = activeArticle.getBoundingClientRect();
      console.log('Active article forced to display:', {
        element: activeArticle,
        offsetHeight: activeArticle.offsetHeight,
        computedDisplay: computedStyle.display,
        computedVisibility: computedStyle.visibility,
        computedOpacity: computedStyle.opacity,
        rect: rect,
        classList: activeArticle.classList.toString()
      });
      if (activeArticle.offsetHeight === 0) {
        console.warn('Article has 0 height,trying to fix...');
        activeArticle.style.setProperty('background', 'var(--eerie-black-2)', 'important');
        activeArticle.style.setProperty('min-height', '500px', 'important');
      }
    } else {
      console.error('No article found to display!');
    }
  }
  forceDisplayActiveArticle();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceDisplayActiveArticle);
  } else {
    forceDisplayActiveArticle();
  }
  setTimeout(forceDisplayActiveArticle, 10);
  setTimeout(forceDisplayActiveArticle, 50);
  setTimeout(forceDisplayActiveArticle, 100);
  setTimeout(forceDisplayActiveArticle, 200);
  setTimeout(forceDisplayActiveArticle, 500);
  setTimeout(forceDisplayActiveArticle, 1000);
}

// Mobile Menu Functionality
(function () {
  const mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const mobileMenuOverlay = document.querySelector('[data-mobile-menu-overlay]');
  const mobileMenuClose = document.querySelector('[data-mobile-menu-close]');
  const mobileMenuLinks = document.querySelectorAll('[data-mobile-menu-link]');
  const body = document.body;

  function openMobileMenu() {
    mobileMenuBtn.classList.add('active');
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    body.classList.add('mobile-menu-open');
  }

  function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    body.classList.remove('mobile-menu-open');
  }

  // Open menu on hamburger click
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  // Close menu on overlay click
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', function () {
      closeMobileMenu();
    });
  }

  // Close menu on close button click
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', function () {
      closeMobileMenu();
    });
  }

  // Close menu when clicking on a menu link
  mobileMenuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Update active state
      mobileMenuLinks.forEach(function (l) {
        l.classList.remove('active');
      });
      this.classList.add('active');

      // Close menu after a short delay to allow navigation
      setTimeout(function () {
        closeMobileMenu();
      }, 300);
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // Sync active state with main navigation
  function syncActiveState() {
    const mainNavLinks = document.querySelectorAll('.navbar-link');
    mobileMenuLinks.forEach(function (mobileLink) {
      const mobileText = mobileLink.textContent.trim();
      mainNavLinks.forEach(function (mainLink) {
        if (mainLink.textContent.trim() === mobileText) {
          if (mainLink.classList.contains('active')) {
            mobileLink.classList.add('active');
          } else {
            mobileLink.classList.remove('active');
          }
        }
      });
    });
  }

  // Watch for navigation changes
  const navLinks = document.querySelectorAll('[data-nav-link]');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      setTimeout(syncActiveState, 100);
    });
  });
})();