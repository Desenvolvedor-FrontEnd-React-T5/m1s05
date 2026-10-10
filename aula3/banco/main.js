const Conta = require("./Conta");
const ContaCorrente = require("./ContaCorrente");
const Cliente = require("./Cliente");

const titularConta1 = new Cliente(
  "João",
  "Oliveira",
  "25/02/1991",
  "4899999",
  "joao@senai.br",
  "Rua blablabla",
);

const conta1 = new Conta(titularConta1);
conta1.extrato();

conta1.sacar(10);
conta1.depositar(20);
conta1.extrato();

conta1.sacar(5);
conta1.extrato();

const titularContaCorrente = new Cliente(
  "Ana Beatriz",
  "de Souza",
  "25/02/1991",
  "4899999",
  "joao@senai.br",
  "Rua blablabla",
);

const cc = new ContaCorrente(titularContaCorrente, 500);
cc.extrato();
cc.sacar(100);

cc.extrato();

cc.transferirPara(conta1, 50);

cc.extrato();
conta1.extrato();

cc.sacar(300);
cc.extrato();
