const prompt = require("prompt-sync")();

class ContaBancaria {
  titular = "";
  saldo = 0;
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }
  
  extrato() {
    console.log(`Titular: ${this.titular} | Saldo: R$ ${this.saldo}`);
  }
}

const conta1 = new ContaBancaria("Joana", 1000);
conta1.depositar(500);
conta1.sacar(200);
conta1.extrato();

const conta2 = new ContaBancaria("Carlos", 200);
conta2.depositar(300);
conta2.sacar(600);
conta2.extrato();
