document.addEventListener("DOMContentLoaded", () => {
  const togglerButtons = document.querySelectorAll(".toggler-btn");
  const projectGrids = document.querySelectorAll(".project-grid");

  togglerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Obtém o alvo do botão clicado (ex: 'frontend', 'backend')
      const targetId = button.dataset.target;

      // Remove a classe 'active' de todos os botões e a adiciona ao botão clicado
      togglerButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Esconde todas as grids de projetos
      projectGrids.forEach((grid) => {
        grid.classList.add("hidden");
      });

      // Mostra a grid de projeto correspondente
      const targetGrid = document.getElementById(targetId);
      if (targetGrid) {
        targetGrid.classList.remove("hidden");
      }
    });
  });
});
