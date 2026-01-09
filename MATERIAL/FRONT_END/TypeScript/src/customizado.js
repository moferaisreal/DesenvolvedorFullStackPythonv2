"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const novoMacaco = {
    especie: ["macaco-aranha"],
    idade: 44,
    nome: "jumento novo",
};
function showMacaco(macacos) {
    console.log(macacos.nome);
}
//# sourceMappingURL=customizado.js.map