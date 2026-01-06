function heavyLoad() {
  let exec = 0;
  let i = 0;
  while (i < 10000000000) {
    i++;
    exec++;
  }
  return exec;
}

console.log("Start heavy load");
heavyLoad();
console.log("End heavy load");

// ---------------------- PROMISE ----------------------------------------------

const heavyLoadPromise = new Promise((resolve, reject) => {
  try {
    let exec = 0;
    for (let i = 0; i < 10000000000; i++) {
      exec++;
    }
    resolve(exec);
  } catch (error) {
    reject("Erro de execução");
  }
});
console.log("Start heavy load");
heavyLoadPromise
  .then((resultado) => console.log(resultado))
  .catch((erro) =>
    console.log(error)
  ); /* envia o erro de maneira bonita ao user */
console.log("End heavy load");

async function heavyLoadAsync() {
  console.log("Start heavy load");
  //   await heavyLoadPromise
  //     .then((resultado) => console.log(resultado))
  //     .catch((erro) =>
  //       console.log(error)
  //     ); /* envia o erro de maneira bonita ao user */
  //   console.log("End heavy load");

  // OUTRA MANEIRA DE USAR AWAIT

  console.log("End heavy load");

  try {
    const resultado = await heavyLoadPromise;
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}
heavyLoadAsync();

// ------------------------ PROMISE COM PARÃMETROS -----------------------------
const paramPromise = (login, senha) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`logado com sucesso: ${login}`);
    }, 3000);
  });
};

paramPromise("marcelo", "123").then((resultado) => console.log(resultado));
