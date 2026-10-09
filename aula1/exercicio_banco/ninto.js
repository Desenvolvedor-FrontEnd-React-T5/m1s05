export class ContaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
    this.agencia = "0001";
    this.numeroConta = "00001-0";
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
    console.log(
      `Titular: ${this.titular} | Agência: ${this.agencia} | Conta: ${this.numeroConta} | Saldo atual: R$ ${this.saldo.toFixed(2)}`,
    );
  }
}


/* const conta = new ContaBancaria("Ninto");

conta.sacar(10);
conta.depositar(20);
conta.sacar(10);

conta.extrato(); */
