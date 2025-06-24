$(document).ready(function () {
  $("#slider").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    arrows: false,
  });

  $(".menuHamburguer").click(function () {
    $("nav").slideToggle();
  });

  $("#phone").mask("(00) 00000-0000", { placeholder: "(00) 00000-0000" });

  $("form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      message: {
        required: true,
      },
      veiculo: {
        required: false,
      },
    },
    messages: {
      name: "Por favor, insira seu nome",
      email: "Por favor, insira seu email",
      phone: "Por favor, insira seu telefone",
      mensagem: "Por favor, insira sua mensagem",
    },
    SubmitHandler: function (form) {
      form.submit();
    },
    invalidHandler: function (event, validator) {
      let incorrectFields = validator.numberOfInvalids();
      if (incorrectFields) {
        alert(`Existem ${incorrectFields} campos incorretos`);
      }
    },
  });
  $(".listaVeiculos button").click(function () {
    const destino = $("#contato");
    const nomeVeiculo = $(this).parent().find("h3").text();
    $("#veiculo").val(nomeVeiculo);
    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
