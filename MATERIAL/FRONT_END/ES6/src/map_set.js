// -------------------------------------- MAP ----------------------------------

let stMap = new Map();

stMap.set("nome", "Macaco");
stMap.set("sobrenome", "Laranja, Azul, Roxo");
console.log(stMap);

const nome = stMap.get("nome");
console.log(nome);

console.log(stMap.size);

console.log(stMap.has("nome"));
console.log(stMap.has("surname"));

// stMap.clear();

console.log(stMap.size);

for (let chave of stMap.keys()) {
  console.log(chave);
}
for (let valor of stMap.values()) {
  console.log(valor);
}
for (let entries of stMap.entries()) {
  console.log(entries);
}
for (let [entries, valor] of stMap.entries()) {
  console.log(`${entries}: ${valor}`);
}

stMap.delete("nome");

console.log(stMap);

// -------------------------------------- SET ----------------------------------

const cpfs = new Set();
cpfs.add("07071261008");
cpfs.add("32410929095");
cpfs.add("19304458064");

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());
console.log(cpfs.entries());

cpfs.forEach((valor) => {
  console.log(valor);
});

/* Remover itens duplicados usando SET */
const array = [
  "Marcelo Rocha",
  "Pedro Paulo",
  "Macaco Preto",
  "Pedro Paulo",
  "Macaco Preto",
];
const arrayAsSet = new Set([...array]);

console.log(arrayAsSet);

/* Converter SET em ARRAY */
const arraySemDuplicados = [...arrayAsSet];

console.log(arraySemDuplicados);
