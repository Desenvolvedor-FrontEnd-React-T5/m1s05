import { ContaBancaria } from "./ninto.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

const conta = new ContaBancaria("GELSO CAMPOS");

conta.depositar(500);
console.log(
  "olá! " +
    " " +
    conta.titular +
    ", seu saldo inicial é: R$ " +
    conta.saldo.toFixed(2),
);

// informação a receber no prompt do usuário, neste caso, o valor a ser depositado na conta bancária.
let saldoADepositar = Number(
  prompt("Digite o valor que deseja depositar: R$ "),
);

conta.depositar(saldoADepositar);

console.log(
  "Olá, " + conta.titular + "! Seu saldo atual é: R$ " + conta.saldo.toFixed(2),
);

let valorSaque = Number(prompt("Digite o valor que deseja sacar: R$ "));

conta.sacar(valorSaque);

console.log(
  "Olá, " + conta.titular + "! Seu saldo restante é: R$ " + " " + conta.saldo,
);
conta.extrato();
