function calcArea(base: number, altura: number) {
  return base * altura;
}

const calcArea2 = (base: number, altura: number): number => base * altura;

function sum(...numeros: number[]) {
  // numeros.reduce
  console.log(numeros);
}

function test(): string | number {
  if (10 > 5) {
    return "dez é maior que cinco";
  } else {
    return 5;
  }
}

const teste = test();
