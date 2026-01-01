/* document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btn_buscar_cep")
    .addEventListener("click", function () {
      const xhttp = new XMLHttpRequest();
      const cep = document.getElementById("cep").value;
      const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

      xhttp.open("GET", endpoint);
      xhttp.send();
    });
}); */

$(document).ready(function () {
  $('#cep').mask('00000-000');

  $('#btn_buscar_cep')
    .click(function () {
      const cep = $('#cep').val();
      const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
      const botao = $(this);
      $(botao).find('i').addClass('d-none');
      $(botao).find('span').removeClass('d-none');

      // AJAX;
      // $.ajax(endpoint).done(function (conteudo) {
      //   const logradouro = conteudo.logradouro;
      //   const bairro = conteudo.bairro;
      //   const cidade = conteudo.localidade;
      //   const estado = conteudo.uf;
      //   const enderecoCompleto = `${logradouro}, ${bairro}, ${cidade} - ${estado}`;
      //   $('#endereco').val(enderecoCompleto);
      //   setTimeout(function () {
      //     $(botao).find('span').addClass('d-none');
      //     $(botao).find('i').removeClass('d-none');
      //   }, 4000);
      // });

      // FIM DO AJAX

      //   Fetch API
      fetch(endpoint)
        .then(function (conteudo) {
          return conteudo.json();
        })
        .then(function (json) {
          const logradouro = json.logradouro;
          const bairro = json.bairro;
          const cidade = json.localidade;
          const estado = json.uf;
          const enderecoCompleto = `${logradouro}, ${bairro}, ${cidade} - ${estado}`;
          $('#endereco').val(enderecoCompleto);
        });
    })
    .catch(function (error) {
      alert('ocorreu um erro ao buscar o endereço');
    })
    .finally(function () {
      setTimeout(function () {
        $(botao).find('span').addClass('d-none');
        $(botao).find('i').removeClass('d-none');
      }, 1000);
    });
});

$('#form_pedido').submit(function (event) {
  event.preventDefault();
  if ($('#nome').val().length === 0) {
    throw new Error('Digite o nome');
  } else if ($('#email').val().length === 0) {
    throw new Error('Digite o email');
  } else if ($('#sobrenoome').val().length === 0) {
    throw new Error('Digite o sobrenome');
  }
});
