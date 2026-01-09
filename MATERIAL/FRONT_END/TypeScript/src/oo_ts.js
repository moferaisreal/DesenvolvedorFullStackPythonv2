"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Macaco {
    nome;
    nConta;
    constructor(nome, nConta) {
        this.nome = nome;
        this.nConta = nConta;
    }
    dizuAA() {
        return `${this.nome} disse UA AA`;
    }
}
// console.log(new Macaco("Macaco", 100).dizuAA());
class ContaMacaco {
    /* private */ saldo = 0;
    numeroConta;
    constructor(numeroConta) {
        this.numeroConta = numeroConta;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Saldo insuficiente");
        }
    }
    getSaldo() {
        return this.saldo;
    }
    static returnNbanco() {
        return "001";
    }
}
const macacoMarcelo = new Macaco("Macaco", 10000);
const contaMarcelo = new ContaMacaco(122);
contaMarcelo.numeroConta;
contaMarcelo.depositar(1000000);
contaMarcelo.depositar(1000000);
contaMarcelo.depositar(1000000);
contaMarcelo.depositar(1000000);
console.log(contaMarcelo.getSaldo());
contaMarcelo.sacar(220000);
console.log(contaMarcelo.getSaldo(), contaMarcelo.numeroConta);
class ContaPF extends ContaMacaco {
    depositar(valor) {
        // this.saldo * POR SE TRATAR DE UMA PROPRIEDADE PRIVADA NÃO PODE SER ACESSADA*
        // CASO MODIFICAR PARA PROTECTED PODE SER ACESSADO POR HERANÇA
        // CASO MODIFICAR PARA PUBLIC PODE SER ACESSADO
        // CASO MODIFICAR PARA PRIVATE NÃO PODE SER ACESSADO
        this.saldo += valor;
    }
}
const contaPFMacacoMarcelo = new ContaPF(1234);
contaPFMacacoMarcelo.depositar(12000000);
console.log(contaPFMacacoMarcelo.getSaldo());
//# sourceMappingURL=oo_ts.js.map