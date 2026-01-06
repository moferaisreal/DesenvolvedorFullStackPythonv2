const arrowFunction = () => "This is an arrow function";

const returnAVehicle = () => ({
  model: "Impreza",
  brand: "Subaru",
});

console.log(arrowFunction());
console.log(returnAVehicle());

const vechicle = {
  speed: 40,
  acelerate: function () {
    this.speed += 10;
    console.log(this);
  },
  brake: function () {
    console.log(this);
    this.speed -= 10;
  },
};

vechicle.acelerate();
console.log(vechicle.speed);
vechicle.acelerate();
console.log(vechicle.speed);
vechicle.acelerate();
console.log(vechicle.speed);
vechicle.brake();
console.log(vechicle.speed);

// -------------------------------------- USAR ARROW EM CHAMADAS MAIS SIMPLES --
