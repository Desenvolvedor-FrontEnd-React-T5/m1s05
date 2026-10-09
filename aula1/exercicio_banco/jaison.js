class ContaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
      return;
    }
    this.saldo -= valor;
  }

  extrato() {
    console.log(
      `Titular: ${this.titular} | Saldo: R$ ${this.saldo.toFixed(2)}`,
    );
  }
}

module.exports = ContaBancaria;
