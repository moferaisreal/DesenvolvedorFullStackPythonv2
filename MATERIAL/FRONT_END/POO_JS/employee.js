function Pessoa(nome) {
  this.nome = nome;
  this.dizOla = function () {
    console.log('Olá, meu nome é ' + this.nome);
  };
}

const pessoa1 = new Pessoa('Marcelo');

// console.log(pessoa1);

function Funcionario(nome, cargo, salario) {
  this.cargo = cargo;
  //   this.salario = salario; /* atributo públic */
  Pessoa.call(this, nome); /* herança */
  let _salario = salario; /* atributo privado precisa colocar o _ */
  this.getSalario = function () {
    /* getters */
    // return `o salário de ${this.nome} é $${_salario}`;
    return _salario;
  };
  this.setSalario = function (novoSalario) {
    /* setters */
    if (typeof novoSalario == 'number' && novoSalario > 0) {
      _salario = novoSalario;
    }
  };

  this.dizCargo = function () {
    console.log('Meu cargo é ' + this.cargo);
  };

  this.aumento = function () {
    // if(cargo === desenvolvedor) aumento de 20%
    const novoSalario = _salario * 1.2;
    _salario = novoSalario;
  };
}

function Gerente(nome) {
  Funcionario.call(this, nome, 'Gerente', 70000);

  this.aumento = function () {
    // if(cargo === Gerente) aumento de 30%
    const novoSalario = this.getSalario() * 1.3;
    this.setSalario(novoSalario);
  };
}

function Diretor(nome) {
  Funcionario.call(this, nome, 'Gerente', 100000);

  this.aumento = function () {
    // if(cargo === Gerente) aumento de 30%
    const novoSalario = this.getSalario() * 1.5;
    this.setSalario(novoSalario);
  };
}

const funcionario1 = new Funcionario('Marcelo', 'Desenvolvedor', 5000);
const pessoa2 = new Pessoa('Maria');
const funcionario2 = new Gerente('Marcelo II');
const funcionario3 = new Diretor('Ana');

// encapsulamento
// console.log(funcionario1);

funcionario1.setSalario(50000);
// funcionario1.trocarSalario('cinquentamil');

// console.log(funcionario1.getSalario());
// // console.log(funcionario1);
// // pessoa1.dizOla();
// funcionario1.dizOla();
// funcionario1.dizCargo();
// pessoa2.dizCargo();

// POLIMORFISMO
funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());

// console.log(`o Salário total de ${funcionario1.nome} é de $(${funcionario1.getSalario() + funcionario2.getSalario()}) `)
// PRECISO VERIFICAR ESSA LINHA ACIMA

console.log(typeof funcionario1);
