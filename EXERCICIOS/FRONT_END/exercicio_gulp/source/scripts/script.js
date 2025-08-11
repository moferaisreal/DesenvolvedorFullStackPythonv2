function somar(a, b) {
  return a + b;
}
function subtrair(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
}
function calcular(operacao, a, b) {
  switch (operacao) {
    case "soma":
      return somar(a, b);
    case "subtracao":
      return subtrair(a, b);
    case "multiplicacao":
      return multiplicar(a, b);
    case "divisao":
      return dividir(a, b);
    default:
      throw new Error("Operação inválida.");
  }
}
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  calcular,
};
