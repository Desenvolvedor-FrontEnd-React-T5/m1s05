const Conta = require("./Conta");
const Cliente = require("./Cliente");

class ContaCorrente extends Conta {
  constructor(titular, limite) {
    super(titular); // Cliente
    this.limite = limite; // Number
  }

  sacar(valor) {
    if (valor <= this.saldo + this.limite) {
      this.saldo -= valor;
      console.log("Saque realizado com sucesso!");
      return true;
    } else {
      console.log("Saque não realizado. Saldo insuficiente.");
      return false;
    }
  }
}

module.exports = ContaCorrente;
