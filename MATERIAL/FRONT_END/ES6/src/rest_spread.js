function sum(/* a, b, c, d */) {
  //   arguments;
  //   console.log(arguments);
  //   return a + b;
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}
console.log("Usando Arguments:", sum(30, 40, 50, 10, 245, 345, 345, 45));

// -------------------------------------- REST -------------------------------
function sumWRest(
  ...args /* só pode usar esse argumento, precisa ser o último */
) {
  const soma = args.reduce((total, actual) => {
    total += actual;
    return total;
  }, 0);
  return soma;
}

console.log("Usando Rest:", sumWRest(30, 40, 50, 10, 245, 345, 345, 45));

// -------------------------------------- SPREAD ------------------------------
const nums = [10, 20, 30, 40, 50];
console.log(...nums);

const japaCars = [
  "Supra MK4",
  "Skyline R32",
  "3000GT",
  "NSX Type R",
  "Subaru WRX STI",
];

const americanCars = [
  "Mustang",
  "Camaro",
  "Challenger",
  "Corvette",
  "Dodge Viper",
];

const allCars = [
  "Carros Japoneses:",
  ...japaCars,
  "Carros Americanos:",
  ...americanCars,
];
console.log("Usando Spread:", allCars);

const marceloVehicles = {
  model: "Supra MK4",
  color: "Black",
  year: 2003,
  price: 500000,
};

const mulumVehicles = {
  model: "Skyline R32",
  color: "Black",
  year: 1992,
  price: 500000,
};

const allMarceloVechicle = {
  ...mulumVehicles,
  owner: "Marcelo Mofera",
};

console.log("Usando Spread:", allMarceloVechicle);
/* SPREAD PODE ATUALIZAR OS DADOS E SUBSCREVER */

// DESESTRUTURAÇÃO
// const yearMarcelo = marceloVehicles.year;
const { year: manuYearMarcelo } = marceloVehicles;
const { year: manuYearMulum } = mulumVehicles;

console.log("Usando Desestruturação:", manuYearMarcelo, manuYearMulum);

const [item1, item2, item3, ...otherVehicles] = japaCars;

console.log("Usando Desestruturação:", item1, item2, item3, otherVehicles);
