// usamos as mesmas palavras reservadads do JS
let isRaining: boolean = false;

isRaining = true;

let age: number = 27;
let height: number = 1.95;

age = 28;

const nation: string = "japanese";

const person: string[] = ["macaco", "preto", "prego"];

const tech: Array<string> = ["solidity", "keras", "tensorflow"];

const notes: ReadonlyArray<number> = [10000, 234234, 34253425, 2342342];

// ------------------------------- TUPLAS --------------------------------------
const list: [name: string, $naConta: number, tairritado: boolean] = [
  "macaco",
  234234,
  true,
];
// ------------------------------- UNION TYPE ----------------------------------
let idadeMacaco: number | /* pipe para fazer  */ string = 25;
/* vai aceitar numérico e string */
idadeMacaco = "vinte e cinco";
idadeMacaco = 25;

/* aceita tudo || portanto precisa usar somente se necessário pois ele torna inútil o typescript se usado demais */
let apiData: any;
apiData = 10;
apiData = "macaco";
apiData = true;
apiData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
apiData = { nome: "macaco", idade: 25, altura: 1.95, peso: 100 };

// ------------------------------- TYPE ALIAS ----------------------------------
// conhece as tipagens e não precisa colocar explícitamente. no entanto é interessante para a leitura do código

let curso = "front-end";
// curso = 42;
