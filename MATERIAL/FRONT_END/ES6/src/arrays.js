// -------------------------------------- FOREACH ------------------------------
const redesSociais = ["Facebook", "Instagram", "X - ex Twitter", "LinkedIn"];

for (let i = 0; i < redesSociais.length; i++) {
  console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function (item, index) {
  console.log(`#${index} Eu tenho perfil na rede social: ${item}`);
});

const alunos = ["João", "Juliana", "Ana", "Caio", "Mariana"];

const alunosComNotas = alunos.map(function (nomeDoAluno) {
  nomeDoAluno = {
    nome: nomeDoAluno,
    curso: "Full Stack Developer",
  };

  return nomeDoAluno;
});

console.log(alunosComNotas);
// -------------------------------------- MAP ----------------------------------
const notas = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const notasDobradas = notas.map(function (notaD) {
  notaD = notaD * 2;
  return notaD;
});
console.log(notasDobradas);
alunosComNotas.push({ nome: "Pedro", curso: "UX Designer" });
// -------------------------------------- FIND ---------------------------------
const joao = alunosComNotas.find(function (aluno) {
  return aluno.nome === "João";
});

console.log(joao);
const indexJoao = alunosComNotas.findIndex(function (aluno) {
  return aluno.nome === "João";
});
console.log(indexJoao);
// -------------------------------------- EVERY --------------------------------
const todosAlunosSaoFullStack = alunosComNotas.every(function (aluno) {
  return aluno.curso === "Full Stack Developer";
});
console.log(todosAlunosSaoFullStack);

// -------------------------------------- SOME ---------------------------------
const alunosDeUX = alunosComNotas.some(function (aluno) {
  return (
    aluno.curso === "UX Designer" && aluno.curso === "Full Stack Developer"
  );
});
console.log(alunosDeUX);
// -------------------------------------- ARROW FUNCTION -----------------------
const alunosFiltradosArrow = (alunosComNotas) =>
  alunosComNotas.curso === "UX Designer";
console.log(alunosFiltradosArrow);

// -------------------------------------- FILTER -------------------------------
function filtrarAlunosDeUX(aluno) {
  return aluno.curso === "UX Designer";
}

const alunosFiltrados = alunosComNotas.filter(filtrarAlunosDeUX);

// -------------------------------------- REDUCE -------------------------------
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const somaDosNumeros = numeros.reduce(function (acumulador, valorAtual) {
  acumulador += valorAtual;
  return acumulador;
}, 0);

console.log(somaDosNumeros);

let somaComFor = 0;
for (let i = 0; i < numeros.length; i++) {
  somaComFor += numeros[i];
}
console.log(somaComFor);

const nomesDosAlunos = alunosComNotas.reduce(function (acumulador, aluno) {
  acumulador += aluno.nome + " ";
  return acumulador;
}, "");
console.log(nomesDosAlunos);
