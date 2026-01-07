class Aluno {
  constructor(nome, sobrenome, nota) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nota = Number(nota);
  }
}
const alunos = [
  new Aluno("João", "Freire", 10),
  new Aluno("Maria", "Antonieta", 8),
  new Aluno("José", "Silva", 5),
  new Aluno("Carlos", "Almeida", 7),
  new Aluno("Pedro", "Santos", 6),
  new Aluno("Joaquim", "Pereira", 4),
  new Aluno("Alexandre", "O Grande", 10),
  new Aluno("Ghengis", "Khan", 5),
];

function alunosAprovados(arrayAlunos) {
  return arrayAlunos.filter((aluno) => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);

aprovados.forEach((aluno) => {
  console.log(
    `Aluno:${aluno.nome} ${aluno.sobrenome} Aprovado com ${aluno.nota}`
  );
});

function alunosReprovados(arrayAlunos) {
  return arrayAlunos.filter((aluno) => aluno.nota < 6);
}

const reprovados = alunosReprovados(alunos);
reprovados.forEach((aluno) => {
  console.log(
    `Aluno:${aluno.nome} ${aluno.sobrenome} Reprovado com ${aluno.nota}`
  );
});
