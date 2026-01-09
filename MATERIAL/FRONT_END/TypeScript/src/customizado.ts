// cria um tipo customizado
type macacos = {
  nome: string;
  idade: number;
  especie: string[];
};

const macacos = [
  {
    nome: "João",
    idade: 18,
    especie: ["macaco-prego", "macaco louco"],
  },
  {
    nome: "Pedro",
    idade: 18,
    especie: ["mico leão"],
  },
  {
    nome: "João",
    idade: 18,
    especie: "macaco-preto",
  },
];

macacos.push({
  nome: "simba",
  idade: 18,
  especie: "macaco-prego",
});

const novoMacaco: macacos = {
  especie: ["macaco-aranha"],
  idade: 44,
  nome: "jumento novo",
};

function showMacaco(macacos: macacos) {
  console.log(macacos.nome);
}
