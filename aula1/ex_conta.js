const Conta = require("./conta.js");

const conta1 = new Conta("João");
const conta2 = new Conta("Davi");

console.log(conta1);
console.log(conta2);

conta1.depositar(10);

conta2.depositar(25);

console.log(conta1.checarSaldo());
console.log(conta2.checarSaldo());
