class ContaBancaria {
  titular = "";
  saldo = 0;

  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(
      `Depósito de R$${valor.toFixed(2)} na conta de ${this.titular} realizado com sucesso!`,
    );
  }

  sacar(valor) {
    this.saldo -= valor;
  }

  checarSaldo() {
    return this.saldo;
  }

  extrato() {
    return `titular: ${this.titular} | saldo: R$ ${this.saldo}`;
  }
}

const titular = new ContaBancaria("Gelso", 0);
titular.depositar(500);
titular.sacar(200);
console.log(titular.checarSaldo());
console.log(titular.extrato());
