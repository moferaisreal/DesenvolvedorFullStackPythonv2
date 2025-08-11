const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$(document).ready(function () {
  // Initialize Bootstrap Tooltips
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  // --- jQuery Form Validation ---
  $("#contactForm").validate({
    // Rules for each form field
    rules: {
      floatingName: {
        required: true,
      },
      floatingDate: {
        required: true,
      },
      floatingTime: {
        required: true,
      },
      floatingCav: {
        required: true,
        min: 1,
      },
      floatingSpace: {
        required: true,
      },
      floatingEmail: {
        required: true,
        email: true,
      },
      floatingTel: {
        required: true,
      },
      floatingTextarea: {
        required: false, // Example: making the message optional
      },
    },
    // Custom error messages in Portuguese
    messages: {
      floatingName: "Por favor, diga-nos o seu nome.",
      floatingDate: "Precisamos saber a data da sua visita.",
      floatingTime: "A que horas devemos esperá-lo?",
      floatingCav: "Precisa ter pelo menos 1 cavaleiro.",
      floatingSpace: "Por favor, escolha um espaço.",
      floatingEmail: {
        required: "Precisamos do seu email para contato.",
        email: "Por favor, insira um endereço de email válido.",
      },
      floatingTel: "Por favor, insira um número de telefone.",
    },
    // This part ensures error messages integrate with Bootstrap's styling
    errorElement: "div",
    errorClass: "invalid-feedback",
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass("is-invalid");
    },
  });
});
