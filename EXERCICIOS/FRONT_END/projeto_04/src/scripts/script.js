document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");
  const heroSection = document.querySelector(".hero");
  const heroAltura = heroSection.clientHeight;

  //scroll suave para link interno
  window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;
    if (posicaoAtual > heroAltura) {
      ocultarElementosHeader();
    } else {
      exibirElementosHeader();
    }
  });

  //abas atrações
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      esconderTodasAbas();
      aba.classList.add("shows__list--is-active");
      removerBotaoAtivo();
      botao.target.classList.add("shows__tabs__button--is-active");
    });
  }
  //faq accordion
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", abrirOuFecharResposta);
  }
});

function abrirOuFecharResposta(elemento) {
  const classe = "faq__questions__item--is-open";
  const elementoPai = elemento.target.parentNode;
  elementoPai.classList.toggle(classe);
}

function removerBotaoAtivo() {
  const buttons = document.querySelectorAll("[data-tab-button]");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function esconderTodasAbas() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");
  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}

function ocultarElementosHeader() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}

function exibirElementosHeader() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}
