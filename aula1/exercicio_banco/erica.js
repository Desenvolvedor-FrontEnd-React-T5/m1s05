class ContaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  extrato() {
    console.log(`Titular ${this.titular} | Saldo: R$ ${this.saldo}`);
  }
}

export default ContaBancaria;

const conta = new ContaBancaria("Erica");

conta.sacar(10);
conta.depositar(20);
conta.sacar(10);

conta.extrato();
