const prompt = require("prompt-sync")();

class Vendedor {
  constructor(nome, sobrenome, valorVendidoNoMes, salarioBase) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.valorVendidoNoMes = valorVendidoNoMes;
    this.salarioBase = salarioBase;
  }
}

class VendedorComissionado extends Vendedor {
  constructor(nome, sobrenome, valorVendidoNoMes, salarioBase, taxaComissao) {
    super(nome, sobrenome, valorVendidoNoMes, salarioBase);
    this.taxaComissao = taxaComissao;
  }

  getSalario() {
    const comissao = this.taxaComissao * this.valorVendidoNoMes;
    const salarioFinal = this.salarioBase + comissao;
    console.log(
      `\n----- Dados do vendedor: ${this.nome} ${this.sobrenome}! -----\n`,
    );
    console.log(
      `Salário: R$${this.salarioBase} \nValor vendido no mês: R$${this.valorVendidoNoMes} \nTaxa de comissão: ${this.taxaComissao * 100}% \nComissão total: R$${comissao} \n\nSalário final: R$${salarioFinal}`,
    );
    return salarioFinal;
  }
}

//salário base
//valor vendido no mês
let salarioBase = Number(prompt("Quanto é o salário base do funcionário? R$"));
while (Number.isNaN(salarioBase) || salarioBase < 0) {
  if (Number.isNaN(salarioBase)) {
    salarioBase = Number(
      prompt("Oops, o valor não parece um número. Tente novamente: R$"),
    );
  } else {
    salarioBase = Number(
      prompt("Oops, o valor não pode ser negativo. Tente novamente: R$"),
    );
  }
}

//taxa de comissão
let taxaComissao = Number(
  prompt("Qual é o valor da taxa de comissão (de 0.0 a 1.0)? "),
);
while (taxaComissao < 0 || taxaComissao > 1 || Number.isNaN(taxaComissao)) {
  if (taxaComissao < 0) {
    taxaComissao = Number(
      prompt(
        "Oops, o valor não pode ser menor que 0.0. Tente novamente (de 0.0 a 1.0): ",
      ),
    );
  } else if (taxaComissao > 1) {
    taxaComissao = Number(
      prompt(
        "Oops, o valor não pode ser maior que 1.0. Tente novamente (de 0.0 a 1.0): ",
      ),
    );
  } else {
    taxaComissao = Number(
      prompt(
        "Oops, o valor não parece ser um número. Tente novamente (de 0.0 a 1.0): ",
      ),
    );
  }
}

//valor vendido no mês
let valorVendidoNoMes = Number(
  prompt("Quanto o funcionário vendeu no mês? R$"),
);
while (Number.isNaN(valorVendidoNoMes) || valorVendidoNoMes < 0) {
  if (Number.isNaN(valorVendidoNoMes)) {
    valorVendidoNoMes = Number(
      prompt("Oops, o valor não parece ser um número. Tente novamente: R$"),
    );
  } else {
    valorVendidoNoMes = Number(
      prompt("Oops, o valor não pode ser negativo. Tente novamente: R$"),
    );
  }
}

const vendedor1 = new VendedorComissionado(
  "Samantha",
  "Ferri",
  valorVendidoNoMes,
  salarioBase,
  taxaComissao,
);
vendedor1.getSalario();
