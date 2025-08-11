document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("sorteioForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let numeroMaximo = document.getElementById("numeroMaximo").value;
      numeroMaximo = parseInt(numeroMaximo);

      let numeroAleatorio = Math.random() * numeroMaximo;
      numeroAleatorio = Math.floor(Math.ceil(numeroAleatorio));
      document.getElementById("numeroSorteado").innerText = numeroAleatorio;
      document.querySelector(".resultado").style.display = "block";
    });
});
