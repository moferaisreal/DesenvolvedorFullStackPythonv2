$(document).ready(function () {
  // Máscara para o telefone
  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(00) 00000-0000",
  });

  // Validação do formulário
  $("#form-contato").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome",
      email: "Por favor, insira um e-mail válido",
      mensagem: "Por favor, escreva sua mensagem",
    },
    submitHandler: function (form) {
      // Lógica para quando o formulário for enviado com sucesso
      alert("Formulário enviado com sucesso!");
      form.submit();
    },
    invalidHandler: function (event, validator) {
      // Lógica para quando o formulário for inválido
      alert("Por favor, preencha todos os campos obrigatórios.");
    },
  });
});
