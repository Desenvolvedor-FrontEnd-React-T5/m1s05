class ContaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0; // inicia com saldo zero
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`✅ Depósito de R$ ${valor.toFixed(2)} realizado`);
    } else {
      console.log("⚠️ Valor de depósito inválido");
    }
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("❌ Saldo insuficiente");
      return false;
    }
    if (valor <= 0) {
      console.log("⚠️ Valor de saque inválido");
      return false;
    }
    this.saldo -= valor;
    console.log(`✅ Saque de R$ ${valor.toFixed(2)} realizado`);
    return true;
  }

  extrato() {
    console.log(
      `Titular: ${this.titular} | Saldo: R$ ${this.saldo.toFixed(2)}`,
    );
  }
}

// === TESTE ===
const minhaConta = new ContaBancaria("João Victor");
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.extrato();

// Teste de saque maior que o saldo
minhaConta.sacar(400);
