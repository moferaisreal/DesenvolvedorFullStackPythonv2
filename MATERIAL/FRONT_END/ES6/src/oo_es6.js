// function Vehicle(nome, fabricante) {
//   this.nome = nome;
//   this.fabricante = fabricante;
// }

// const wrx = new Vehicle("WRX STI", "Subaru");
// const civic = new Vehicle("Civic", "Honda");
// const corolla = new Vehicle("GR-Corolla", "Toyota");
// const gt3000 = new Vehicle("3000GT", "Mitsubishi");

class Vehicle {
  constructor(nomeVehicle, fabricanteVehicle, horsePower) {
    this.nome = nomeVehicle;
    this.fabricante = fabricanteVehicle;
    this.hp = Number(horsePower);
  }
  action(actionName) {
    console.log(`${this.nome} está ${actionName}`);
  }
  fezStage() {
    this.hp += this.hp * 0.25;
  }
}
// const wrx = new Vehicle();
// wrx.nome = "WRX STI";
// wrx.fabricante = "Subaru";
// const civic = new Vehicle();
// civic.nome = "Civic";
// civic.fabricante = "Honda";
// const corolla = new Vehicle();
// corolla.nome = "GR-Corolla";
// corolla.fabricante = "Toyota";
// const gt3000 = new Vehicle();
// gt3000.nome = "3000GT";
// gt3000.fabricante = "Mitsubishi";
// ACIMA SEM A FUNÇÃO CONSTRUTORA constructor(nomeVehicle, fabricanteVehicle) {
// this.nome = nomeVehicle;
// this.fabricante = fabricanteVehicle;
const wrx = new Vehicle("WRX STI", "Subaru", "290");
const civic = new Vehicle("Civic SI", "Honda", "245");
wrx.fezStage();
wrx.action("cortando giro");
wrx.action("acelerando");

// console.log(wrx);
// console.log(civic);

class GrCorolla extends Vehicle {
  constructor() {
    super("GR-Corolla", "Toyota", "400");
  }
}
class Gt3000 extends Vehicle {
  constructor() {
    super("3000GT", "Mitsubishi", "320");
  }
}

const Gt3000Marcelo = new Gt3000();
const GrCorollaMarcelo = new GrCorolla();

GrCorollaMarcelo.fezStage();
GrCorollaMarcelo.action("acelerando");
Gt3000Marcelo.fezStage();
Gt3000Marcelo.fezStage();

console.log(GrCorollaMarcelo instanceof Vehicle);
console.log(GrCorollaMarcelo instanceof GrCorolla);
console.log(GrCorollaMarcelo);
console.log(wrx);
console.log(Gt3000Marcelo);
