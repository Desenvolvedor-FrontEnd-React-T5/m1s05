class ContaBancaria {
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
      console.log("saldo insuficiente");
    }
  }
  extrato() {
    console.log(`titular ${this.titular} possui saldo de R$ ${this.saldo}`);
  }
}
const conta1 = new ContaBancaria("Davi", 1000);
conta1.depositar(500);
conta1.sacar(200);
conta1.extrato();
