class Conta {
  titular = "";
  saldo = 0;

  constructor(titular) {
    this.titular = titular;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(
      `Depósito de R$${valor.toFixed(2)} na conta de ${this.titular} realizado com sucesso!`,
    );
  }

  checarSaldo() {
    return this.saldo;
  }
}

module.exports = Conta;
