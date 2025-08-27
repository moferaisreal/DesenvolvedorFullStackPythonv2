// ===================================================================
// TIMELINE FUNCTIONALITY
// ===================================================================

// Timeline data with additional detailed information
// Timeline data with additional detailed information
const timelineData = {
  "days-before": {
    title: "Dias Antes dos Dias",
    description:
      "Antes da criação do mundo, quando apenas Eru Ilúvatar existia no Vazio. O tempo ainda não havia começado e apenas a música da criação ecoava no infinito.",
    events: [
      "Eru Ilúvatar existe sozinho no Vazio",
      "A Música dos Ainur é concebida",
      "Criação da Visão do Mundo",
    ],
    figures: ["Eru Ilúvatar (O Único)", "Melkor (antes da corrupção)"],
    locations: ["O Vazio Atemporal", "As Salas Intemporais"],
    detailedInfo: {
      period: "Antes da Criação do Tempo",
      duration: "Eternidade",
      significance:
        "O período primordial onde apenas Eru Ilúvatar existia, antes de criar os Ainur e conceber o mundo através da Grande Música.",
      keyMoments: [
        "Eru Ilúvatar contempla a criação no Vazio infinito",
        "Nascimento do conceito da Música da Criação",
        "Primeiro vislumbre da visão de Eä (o Universo)",
        "Preparação para a criação dos Ainur",
      ],
      cosmology:
        "O Vazio Atemporal representa o estado anterior à existência de qualquer realidade material ou temporal. É o reino puro do pensamento divino.",
      influence:
        "Este período estabelece os fundamentos filosóficos e teológicos de toda a cosmologia tolkieniana.",
    },
  },
  "years-of-trees": {
    title: "Anos das Árvores",
    description:
      "Quando as Duas Árvores de Valinor iluminavam as Terras Imortais. Período de paz e crescimento, antes da chegada da lua e do sol.",
    events: [
      "Criação das Duas Árvores",
      "Chegada dos Valar",
      "Despertar dos Elfos",
      "Grande Jornada",
    ],
    figures: ["Manwë", "Varda", "Yavanna", "Aulë"],
    locations: ["Valinor", "Cuiviénen", "Eldamar", "Tirion"],
    detailedInfo: {
      period: "Antes da Primeira Era",
      duration: "Aproximadamente 20.000 anos Valorianos",
      significance:
        "Era de ouro de Valinor, marcada pela luz das Duas Árvores e o primeiro despertar dos Primogênitos.",
      keyMoments: [
        "Yavanna canta as Duas Árvores à existência",
        "Estabelecimento de Valinor como reino dos Valar",
        "Primeiro despertar dos Elfos em Cuiviénen",
        "A Grande Jornada dos Eldar para o Oeste",
      ],
      cosmology:
        "As Duas Árvores, Telperion (prateada) e Laurelin (dourada), forneciam a única luz do mundo, alternando em ciclos de 12 horas.",
      influence:
        "Este período estabeleceu a divisão entre as Terras Imortais e a Terra-média, definindo o destino dos Elfos.",
    },
  },
  "first-age": {
    title: "Primeira Era",
    description:
      "A Primeira Era marca o despertar dos Elfos e o início da longa luta contra as trevas. Morgoth forja os Silmarils e a guerra pelo destino da Terra-média começa.",
    events: [
      "Morgoth rouba os Silmarils",
      "Destruição das Árvores",
      "Juramento de Fëanor",
      "Guerra da Ira",
    ],
    figures: ["Fëanor", "Morgoth", "Gil-galad", "Beren e Lúthien"],
    locations: ["Beleriand", "Gondolin", "Doriath", "Angband"],
    detailedInfo: {
      period: "Primeira Era dos Filhos de Ilúvatar",
      duration: "590 anos dos Elfos",
      significance:
        "Era das grandes guerras contra Morgoth e dos feitos heroicos que moldaram a história da Terra-média.",
      keyMoments: [
        "Criação dos Silmarils por Fëanor",
        "Destruição das Duas Árvores por Ungoliant",
        "Fundação dos grandes reinos élficos de Beleriand",
        "A saga de Beren e Lúthien",
        "Queda de Gondolin",
        "Guerra da Ira e banimento de Morgoth",
      ],
      cosmology:
        "Beleriand era uma vasta terra no noroeste da Terra-média, protegida pelas Montanhas Azuis e banhada pelo Grande Mar.",
      influence:
        "Esta era estabeleceu os precedentes para todas as lutas futuras contra a Sombra e criou as linhagens heroicas.",
    },
  },
  "second-age": {
    title: "Segunda Era",
    description:
      "A era da ascensão de Númenor e da forja dos Anéis de Poder. Sauron engana os Elfos e forja secretamente o Um Anel em Mount Doom.",
    events: [
      "Fundação de Númenor",
      "Forja dos Anéis",
      "Criação do Um Anel",
      "Última Aliança",
    ],
    figures: ["Sauron", "Celebrimbor", "Elendil", "Isildur"],
    locations: ["Númenor", "Eregion", "Mordor", "Gondor"],
    detailedInfo: {
      period: "Segunda Era dos Homens e Elfos",
      duration: "3.441 anos",
      significance:
        "Era marcada pelo apogeu e queda de Númenor, a forja dos Anéis de Poder e o primeiro confronto direto com Sauron.",
      keyMoments: [
        "Ascensão da ilha de Númenor do mar",
        "Forja dos Anéis de Poder em Eregion",
        "Criação secreta do Um Anel por Sauron",
        "Guerra contra Sauron e cerco de Barad-dûr",
        "Corrupção e queda de Númenor",
        "Formação da Última Aliança",
      ],
      cosmology:
        "Númenor era uma grande ilha estrelada no mar, mais próxima de Valinor que da Terra-média, abençoada com longevidade.",
      influence:
        "Esta era definiu o poder dos Anéis e estabeleceu os reinos em exílio de Gondor e Arnor.",
    },
  },
  "third-age": {
    title: "Terceira Era",
    description:
      "A era dos Reis de Gondor e Arnor, da chegada dos Istari, e finalmente da Guerra do Anel. Frodo destrói o Um Anel e Sauron é derrotado.",
    events: [
      "Chegada dos Istari",
      "Descoberta do Anel",
      "Guerra do Anel",
      "Destruição do Anel",
    ],
    figures: ["Frodo", "Gandalf", "Aragorn", "Legolas"],
    locations: ["O Condado", "Rivendell", "Minas Tirith", "Monte da Perdição"],
    detailedInfo: {
      period: "Terceira Era da Terra-média",
      duration: "3.021 anos",
      significance:
        "Era final da luta contra Sauron, marcada pela diminuição dos Elfos e ascensão definitiva dos Homens.",
      keyMoments: [
        "Chegada dos cinco Istari (Magos)",
        "Descoberta do Um Anel por Bilbo",
        "Formação da Sociedade do Anel",
        "Batalha dos Campos do Pelennor",
        "Destruição do Um Anel no Monte da Perdição",
        "Coroação de Aragorn como Rei Elessar",
      ],
      cosmology:
        "A Terra-média entra em declínio mágico, com os Elfos partindo para as Terras Imortais e os Ents desaparecendo.",
      influence:
        "Esta era encerra o período mítico e inicia a Era dos Homens, estabelecendo as bases do mundo histórico.",
    },
  },
  "fourth-age": {
    title: "Quarta Era",
    description:
      "A Era dos Homens começa. Os Elfos partem para as Terras Imortais, e a Terra-média entra numa nova era de paz sob o reinado do Rei Elessar.",
    events: [
      "Coroação de Elessar",
      "Reconstrução de Gondor",
      "Partida dos Elfos",
      "Era de Paz",
    ],
    figures: ["Rei Elessar", "Rainha Arwen", "Faramir", "Éomer"],
    locations: ["Gondor Reunificado", "Rohan", "Valle", "Reino da Floresta"],
    detailedInfo: {
      period: "Quarta Era - Era dos Homens",
      duration: "Indefinida (continua)",
      significance:
        "Início da dominação completa dos Homens na Terra-média, com o fim da magia élfica e o estabelecimento da paz duradoura.",
      keyMoments: [
        "Reunificação dos reinos de Arnor e Gondor",
        "Casamento de Aragorn e Arwen",
        "Reconstrução de Minas Tirith",
        "Partida final de Gandalf, Elrond e Galadriel",
        "Estabelecimento de novas alianças comerciais",
      ],
      cosmology:
        "A Terra-média perde gradualmente sua magia, tornando-se mais semelhante ao nosso mundo histórico.",
      influence:
        "Esta era representa a transição do mítico para o histórico, onde os Homens assumem completamente o destino da Terra-média.",
    },
  },
  "dagor-dagorath": {
    title: "Dagor Dagorath",
    description:
      "A Batalha Final profetizada, quando Morgoth retornará e haverá uma última guerra. Depois disso, o mundo será refeito e renovado para sempre.",
    events: [
      "Retorno de Morgoth",
      "Batalha Final",
      "Destruição de Arda",
      "Renovação do Mundo",
    ],
    figures: ["Morgoth", "Manwë", "Tulkas", "Eru Ilúvatar"],
    locations: ["Campos de Valinor", "Arda Renovada", "Novo Mundo"],
    detailedInfo: {
      period: "Fim dos Tempos - Escatologia",
      duration: "Evento único no fim dos tempos",
      significance:
        "A batalha final entre o bem e o mal, resultando na renovação completa de toda a criação.",
      keyMoments: [
        "Retorno profetizado de Morgoth do Vazio",
        "Mobilização final de todas as forças do bem",
        "Participação direta de Eru Ilúvatar na batalha",
        "Destruição completa de Arda Marrada",
        "Criação de Arda Renovada (Arda Unmarred)",
      ],
      cosmology:
        "Representará o fim do atual universo físico e sua recriação em estado de perfeição absoluta.",
      influence:
        "Este evento representa a consumação final da Música da Criação, onde toda discordância será resolvida.",
    },
  },
};

// Função para criar sidebar
function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "timeline-sidebar";
  sidebar.className = "timeline-sidebar";
  sidebar.innerHTML = `
    <div class="timeline-sidebar__overlay"></div>
    <div class="timeline-sidebar__panel">
      <div class="timeline-sidebar__header">
        <h2 class="timeline-sidebar__title"></h2>
        <button class="timeline-sidebar__close" aria-label="Fechar sidebar">×</button>
      </div>
      <div class="timeline-sidebar__nav">
        <button class="timeline-sidebar__nav-btn timeline-sidebar__nav-btn--active" data-section="overview">Visão Geral</button>
        <button class="timeline-sidebar__nav-btn" data-section="details">Detalhes</button>
        <button class="timeline-sidebar__nav-btn" data-section="cosmology">Cosmologia</button>
        <button class="timeline-sidebar__nav-btn" data-section="influence">Influência</button>
      </div>
      <div class="timeline-sidebar__content">
        <div class="timeline-sidebar__section timeline-sidebar__section--active" data-section="overview">
          <div class="timeline-sidebar__overview"></div>
        </div>
        <div class="timeline-sidebar__section" data-section="details">
          <div class="timeline-sidebar__details"></div>
        </div>
        <div class="timeline-sidebar__section" data-section="cosmology">
          <div class="timeline-sidebar__cosmology"></div>
        </div>
        <div class="timeline-sidebar__section" data-section="influence">
          <div class="timeline-sidebar__influence"></div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(sidebar);
  return sidebar;
}

// Função para abrir sidebar
function openSidebar(eraKey) {
  const eraData = timelineData[eraKey];
  if (!eraData || !eraData.detailedInfo) return;

  let sidebar = document.getElementById("timeline-sidebar");
  if (!sidebar) {
    sidebar = createSidebar();
  }

  // Preencher conteúdo
  const title = sidebar.querySelector(".timeline-sidebar__title");
  const overview = sidebar.querySelector(".timeline-sidebar__overview");
  const details = sidebar.querySelector(".timeline-sidebar__details");
  const cosmology = sidebar.querySelector(".timeline-sidebar__cosmology");
  const influence = sidebar.querySelector(".timeline-sidebar__influence");

  const info = eraData.detailedInfo;

  title.textContent = eraData.title;

  // Overview section
  overview.innerHTML = `
    <div class="timeline-sidebar__field">
      <h4>Período</h4>
      <p>${info.period}</p>
    </div>
    <div class="timeline-sidebar__field">
      <h4>Duração</h4>
      <p>${info.duration}</p>
    </div>
    <div class="timeline-sidebar__field">
      <h4>Significado</h4>
      <p>${info.significance}</p>
    </div>
  `;

  // Details section
  details.innerHTML = `
    <div class="timeline-sidebar__field">
      <h4>Momentos-Chave</h4>
      <ul>
        ${info.keyMoments.map((moment) => `<li>${moment}</li>`).join("")}
      </ul>
    </div>
  `;

  // Cosmology section
  cosmology.innerHTML = `
    <div class="timeline-sidebar__field">
      <h4>Cosmologia</h4>
      <p>${info.cosmology}</p>
    </div>
  `;

  // Influence section
  influence.innerHTML = `
    <div class="timeline-sidebar__field">
      <h4>Influência</h4>
      <p>${info.influence}</p>
    </div>
  `;

  // Mostrar sidebar
  sidebar.classList.add("timeline-sidebar--active");
  document.body.classList.add("sidebar-open");

  // Setup navigation
  setupSidebarNavigation(sidebar);

  // Setup close handlers
  setupSidebarCloseHandlers(sidebar);
}

// Função para configurar navegação do sidebar
function setupSidebarNavigation(sidebar) {
  const navButtons = sidebar.querySelectorAll(".timeline-sidebar__nav-btn");
  const sections = sidebar.querySelectorAll(".timeline-sidebar__section");

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetSection = btn.dataset.section;

      // Remove active from all
      navButtons.forEach((b) =>
        b.classList.remove("timeline-sidebar__nav-btn--active")
      );
      sections.forEach((s) =>
        s.classList.remove("timeline-sidebar__section--active")
      );

      // Add active to clicked
      btn.classList.add("timeline-sidebar__nav-btn--active");
      sidebar
        .querySelector(`[data-section="${targetSection}"]`)
        .classList.add("timeline-sidebar__section--active");
    });
  });
}

// Função para configurar handlers de fechar
function setupSidebarCloseHandlers(sidebar) {
  const closeBtn = sidebar.querySelector(".timeline-sidebar__close");
  const overlay = sidebar.querySelector(".timeline-sidebar__overlay");

  const closeSidebar = () => {
    sidebar.classList.remove("timeline-sidebar--active");
    document.body.classList.remove("sidebar-open");
  };

  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  // Fechar com ESC
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      sidebar.classList.contains("timeline-sidebar--active")
    ) {
      closeSidebar();
    }
  });
}

// Função para criar UL LI
function createList(items, className = "timeline__content__description__list") {
  const ul = document.createElement("ul");
  ul.className = className;

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  return ul;
}

// Função para criar seção com título e lista
function createSection(
  title,
  items,
  className = "timeline__content__description__section"
) {
  const section = document.createElement("div");
  section.className = className;

  const h4 = document.createElement("h4");
  h4.textContent = title;

  const ul = createList(items);

  section.appendChild(h4);
  section.appendChild(ul);

  return section;
}

function initializeTimeline() {
  const buttons = document.querySelectorAll(
    ".timeline__content__navbar__button"
  );
  const descriptionContainer = document.getElementById("timeline-description");

  if (!descriptionContainer) return;

  const titleElement = descriptionContainer.querySelector(
    ".timeline__content__description__title"
  );
  const textElement = descriptionContainer.querySelector(
    ".timeline__content__description__text"
  );
  let listsContainer = descriptionContainer.querySelector(
    ".timeline__content__description__lists"
  );

  // Criar container para listas se não existir
  if (!listsContainer) {
    listsContainer = document.createElement("div");
    listsContainer.className = "timeline__content__description__lists";
    descriptionContainer.appendChild(listsContainer);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach((btn) =>
        btn.classList.remove("timeline__content__navbar__button--active")
      );

      // Add active class to clicked button
      button.classList.add("timeline__content__navbar__button--active");

      // Get the era data
      const era = button.getAttribute("data-era");
      const eraData = timelineData[era];

      if (eraData && titleElement && textElement) {
        // Add fade out effect
        descriptionContainer.style.opacity = "0";

        setTimeout(() => {
          // Update content
          titleElement.textContent = eraData.title;
          textElement.textContent = eraData.description;

          // Limpar container de listas
          listsContainer.innerHTML = "";

          // Criar seções com UL LI
          const eventsSection = createSection(
            "Eventos Principais",
            eraData.events
          );
          const figuresSection = createSection(
            "Figuras Importantes",
            eraData.figures
          );
          const locationsSection = createSection(
            "Localizações",
            eraData.locations
          );

          // Adicionar seções ao container
          listsContainer.appendChild(eventsSection);
          listsContainer.appendChild(figuresSection);
          listsContainer.appendChild(locationsSection);

          // Fade back in
          descriptionContainer.style.opacity = "1";
        }, 150);
      }
    });
  });

  // Carregar dados iniciais
  const activeButton = document.querySelector(
    ".timeline__content__navbar__button--active"
  );
  if (activeButton) {
    activeButton.click();
  }

  // CRIAR BOTÃO FIXO E CONFIGURAR VISIBILIDADE
  createTimelineDetailsButton();
}

// Timeline keyboard navigation
function initializeTimelineKeyboard() {
  document.addEventListener("keydown", (e) => {
    const buttons = document.querySelectorAll(
      ".timeline__content__navbar__button"
    );
    const activeButton = document.querySelector(
      ".timeline__content__navbar__button--active"
    );

    if (!activeButton) return;

    const currentIndex = Array.from(buttons).indexOf(activeButton);
    let newIndex = currentIndex;

    if (e.key === "ArrowLeft" && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (e.key === "ArrowRight" && currentIndex < buttons.length - 1) {
      newIndex = currentIndex + 1;
    }

    if (newIndex !== currentIndex) {
      buttons[newIndex].click();
      e.preventDefault();
    }
  });
}

// Sistema robusto de controle do botão baseado na visibilidade da timeline
let timelineVisibilityController = null;

function createTimelineDetailsButton() {
  // Verificar se timeline existe
  const timelineSection = document.getElementById("timeline");
  if (!timelineSection) {
    console.warn("Timeline section not found - button will not be created");
    return;
  }

  // Remover botão existente se houver
  const existingButton = document.querySelector(".timeline__details-btn");
  if (existingButton) {
    existingButton.remove();
  }

  // Criar novo botão
  const detailsButton = document.createElement("button");
  detailsButton.className = "timeline__details-btn";
  detailsButton.innerHTML =
    '<span>+ Detalhes</span><span class="timeline__details-btn-arrow">→</span>';

  // Event listener para abrir sidebar
  detailsButton.addEventListener("click", () => {
    const activeButton = document.querySelector(
      ".timeline__content__navbar__button--active"
    );
    if (activeButton) {
      const era = activeButton.getAttribute("data-era");
      openSidebar(era);
    }
  });

  // Adicionar ao body
  document.body.appendChild(detailsButton);

  // Configurar sistema de visibilidade
  setupTimelineVisibilityControl(timelineSection, detailsButton);
}

function setupTimelineVisibilityControl(timelineSection, button) {
  let isButtonVisible = false;
  let ticking = false;

  // Função para verificar visibilidade da timeline
  function checkTimelineVisibility() {
    const rect = timelineSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Timeline é considerada visível se qualquer parte estiver no viewport
    // Com margem de tolerância de 100px para melhor UX
    const isVisible = rect.top < windowHeight + 100 && rect.bottom > -100;

    // Só atualizar se o estado mudou (evita manipulações desnecessárias do DOM)
    if (isVisible !== isButtonVisible) {
      isButtonVisible = isVisible;

      if (isVisible) {
        button.classList.add("timeline__details-btn--visible");
      } else {
        button.classList.remove("timeline__details-btn--visible");
      }
    }
  }

  // Função throttled para performance
  function throttledCheck() {
    if (!ticking) {
      requestAnimationFrame(() => {
        checkTimelineVisibility();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Event listeners
  window.addEventListener("scroll", throttledCheck, { passive: true });
  window.addEventListener("resize", throttledCheck, { passive: true });

  // Verificação inicial após delay para garantir que layout esteja pronto
  setTimeout(() => {
    checkTimelineVisibility();
  }, 100);

  // Armazenar referência para cleanup se necessário
  timelineVisibilityController = {
    cleanup: () => {
      window.removeEventListener("scroll", throttledCheck);
      window.removeEventListener("resize", throttledCheck);
    },
  };
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeTimeline();
  initializeTimelineKeyboard();

  console.log("Timeline with conditional sidebar initialized");
});
// ===================================================================
// HEADER DYNAMIC BEHAVIOR
// ===================================================================

class HeaderController {
  constructor() {
    this.header = document.querySelector(".header");
    this.heroSection = document.querySelector(".hero");
    this.isIntersecting = true;
    this.scrollListener = null;

    this.init();
  }

  init() {
    if (!this.header || !this.heroSection) {
      console.warn("Header or Hero section not found");
      return;
    }

    // Set initial state - transparent when on hero
    this.header.classList.add("header--transparent");

    // Create intersection observer to detect when hero section is visible
    this.createObserver();

    // Add scroll listener for additional control
    this.addScrollListener();
  }

  createObserver() {
    const options = {
      root: null,
      rootMargin: "-50px 0px -50px 0px", // Trigger a bit before hero fully exits
      threshold: [0, 0.1, 0.5, 1],
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isIntersecting = entry.isIntersecting;
        this.updateHeader();
      });
    }, options);

    this.observer.observe(this.heroSection);
  }

  addScrollListener() {
    let ticking = false;

    this.scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition =
            window.pageYOffset || document.documentElement.scrollTop;

          // Additional check based on scroll position
          // If scrolled past 100px, ensure header is visible
          if (
            scrollPosition > 1368 &&
            this.header.classList.contains("header--transparent")
          ) {
            this.showHeader();
          } else if (scrollPosition <= 50 && this.isIntersecting) {
            this.hideHeader();
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", this.scrollListener, { passive: true });
  }

  updateHeader() {
    if (this.isIntersecting) {
      this.hideHeader();
    } else {
      this.showHeader();
    }
  }

  hideHeader() {
    // Transparent state - on hero section
    this.header.classList.remove("header--visible");
    this.header.classList.add("header--transparent");
  }

  showHeader() {
    // Visible state - past hero section
    this.header.classList.remove("header--transparent");
    this.header.classList.add("header--visible");
  }

  // Public method to manually control header
  toggleHeader(show) {
    if (show) {
      this.showHeader();
    } else {
      this.hideHeader();
    }
  }

  // Cleanup method if needed
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.scrollListener) {
      window.removeEventListener("scroll", this.scrollListener);
    }
  }
}

// ===================================================================
// SMOOTH SCROLLING NAVIGATION
// ===================================================================

function initializeSmoothScroll() {
  const navLinks = document.querySelectorAll('.header__links a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// ===================================================================
// UTILITY FUNCTIONS
// ===================================================================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Export for potential use in other scripts (if using modules)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    HeaderController,
    timelineData,
    initializeTimeline,
    initializeSmoothScroll,
  };
}

// ===================================================================
// INITIALIZATION
// ===================================================================

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize timeline functionality
  initializeTimeline();
  initializeTimelineKeyboard();

  // Initialize header dynamic behavior
  window.headerController = new HeaderController();

  // Initialize smooth scroll navigation
  initializeSmoothScroll();

  console.log("Lord of the Rings site initialized successfully!");
});
