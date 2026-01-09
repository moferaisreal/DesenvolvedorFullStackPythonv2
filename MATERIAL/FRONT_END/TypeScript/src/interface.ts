class Conta {
  numConta: number;
  saldoConta: number = 0;
  constructor(numConta: number) {
    this.numConta = numConta;
  }
}

class ContaSalario extends Conta {
  depositarSalario(valor: number) {
    this.saldoConta += valor;
  }
}

interface ITransacao {
  transfer: (valor: number, correntista: Conta) => boolean;
  taxaTransacao: number;
}

interface IPessoaJuridica {
  cnpj: number;
}

interface IExemplo extends IPessoaJuridica {
  /* você pode aproveitar campos da interface anterior */ telefone: number;
}

class ContaCorrente extends Conta implements ITransacao {
  transfer(valor: number, correntista: Conta) {
    correntista.saldoConta += valor - this.taxaTransacao;
    return true;
  }
  taxaTransacao: number = 0;
}

const contaDoMacaco: ITransacao = {
  taxaTransacao: 10,
  transfer: (valor: number, correntista: Conta) => {
    correntista.saldoConta += valor - 10;
    return true;
  },
};
