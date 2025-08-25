// Timeline interactivity for Lord of the Rings timeline
const timelineData = {
  "days-before": {
    title: "Dias Antes dos Dias",
    description:
      "Antes da criação do mundo, quando apenas Eru Ilúvatar existia no Vazio. O tempo ainda não havia começado e apenas a música da criação ecoava no infinito.",
  },
  "years-of-trees": {
    title: "Anos das Árvores",
    description:
      "Quando as Duas Árvores de Valinor iluminavam as Terras Imortais. Período de paz e crescimento, antes da chegada da lua e do sol.",
  },
  "first-age": {
    title: "Primeira Era",
    description:
      "A Primeira Era marca o despertar dos Elfos e o início da longa luta contra as trevas. Morgoth forja os Silmarils e a guerra pelo destino da Terra-média começa.",
  },
  "second-age": {
    title: "Segunda Era",
    description:
      "A era da ascensão de Númenor e da forja dos Anéis de Poder. Sauron engana os Elfos e forja secretamente o Um Anel em Mount Doom.",
  },
  "third-age": {
    title: "Terceira Era",
    description:
      "A era dos Reis de Gondor e Arnor, da chegada dos Istari, e finalmente da Guerra do Anel. Frodo destrói o Um Anel e Sauron é derrotado.",
  },
  "fourth-age": {
    title: "Quarta Era",
    description:
      "A Era dos Homens começa. Os Elfos partem para as Terras Imortais, e a Terra-média entra numa nova era de paz sob o reinado do Rei Elessar.",
  },
  "dagor-dagorath": {
    title: "Dagor Dagorath",
    description:
      "A Batalha Final profetizada, quando Morgoth retornará e haverá uma última guerra. Depois disso, o mundo será refeito e renovado para sempre.",
  },
};

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

          // Fade back in
          descriptionContainer.style.opacity = "1";
        }, 150);
      }
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeTimeline);

// Optional: Add keyboard navigation
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
