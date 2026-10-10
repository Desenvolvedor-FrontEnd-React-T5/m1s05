const Cliente = require("./Cliente");

class Conta {
  constructor(titular) {
    this.titular = titular; //Cliente
    this.saldo = 0; //Number
  }

  depositar(valor) {
    this.saldo += valor;
    console.log("Depósito realizado com sucesso!");
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log("Saque realizado com sucesso!");
      return true;
    } else {
      console.log("Saque não realizado. Saldo insuficiente.");
      return false;
    }
  }

  transferirPara(contaDestino, valor) {
    if (this.sacar(valor)) {
      contaDestino.depositar(valor);
    } else {
      console.log("Transferência cancelada.");
    }
  }

  extrato() {
    console.log(
      `Titular: ${this.titular.nomeCompleto()} | Saldo: R$${this.saldo.toFixed(2)}.`,
    );
  }
}

module.exports = Conta;
