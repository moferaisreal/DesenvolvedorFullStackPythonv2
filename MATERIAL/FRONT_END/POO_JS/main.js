const carro = {
  modelo: '3000 GT',
  fabricante: 'Mitsubishi',
  ano: 1995,
  cor: 'Vermelho',
  acelerar: function () {
    console.log('Acelerando o carro');
  },
};

const carroDoMacaco = {
  modelo: 'Impreza WRX STI',
  fabricante: 'Subaru',
  ano: 2020,
  cor: 'Azul',
  acelerar: function () {
    console.log('Acelerando o carro do macaco');
  },
};

// FUNÇÃO CONSTRUTORA
function Carro(modelo, fabricante, ano, cor) {
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.ano = ano;
  this.cor = cor;
  this.acelerar = function () {
    console.log('Acelerando o carro');
  };
}

// INSTÂNCIAS
const carroDoJoao = new Carro('Gol', 'Volkswagen', 1998, 'Prata');
const carroDaMaria = new Carro('Civic SI', 'Honda', 2010, 'Preto');

console.log(carroDoJoao);
console.log(carroDaMaria);

const nome = 'Macaco';
const age = 30;
const maiorIdade = true;
const habilidades = ['JavaScript', 'React', 'Node.js'];

const pessoa = {
  nome: nome,
  age: age,
  maiorIdade: maiorIdade,
  habilidades: habilidades,
};
// retorna string, number, boolean, object, function, undefined
console.log(typeof nome);
console.log(typeof age);
console.log(typeof maiorIdade);
console.log(typeof habilidades);
console.log(typeof pessoa);
console.log(typeof carroDoJoao);
// retorna true ou false
console.log(carroDoJoao instanceof Carro);
console.log(carroDaMaria instanceof Carro);
console.log(habilidades instanceof Carro);
console.log(carroDoMacaco instanceof Carro);
// Acessando propriedades e métodos do objeto
console.log(carro.modelo);
console.log(carro['fabricante']);

function exibirAtributo(nomeAtributo) {
  console.log(carro[nomeAtributo]);
}
exibirAtributo('ano');
exibirAtributo('cor');
exibirAtributo('modelo');

// Adicionando novas propriedades ao objeto
carro['anoFabricacao'] = 1995;
// Verificando se a propriedade existe antes de acessar
if (carro['anoFabricacao']) {
  console.log('exibindo ano de fabricação:', carro['anoFabricacao']);
}

if ('anoFabricacao' in carro) {
  console.log('exibindo ano de fabricação:', carro.anoFabricacao);
}

Object.freeze(carro);

carro.nome = 'Carro do Macaco';
// This will not change the name property because the object is frozen

// mostrar as chaves do objeto
console.log(Object.keys(carro));
console.log(Object.keys(carro).length);
console.log(Object.values(carro));
