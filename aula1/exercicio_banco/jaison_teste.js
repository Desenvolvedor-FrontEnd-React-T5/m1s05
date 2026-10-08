//import ContaBancaria from "./jaison.js";
const ContaBancaria = require("./jaison.js");

const minhaConta = new ContaBancaria("Jaison");

minhaConta.depositar(500);

minhaConta.sacar(200);

minhaConta.extrato();

// Teste extra:
minhaConta.sacar(400);
