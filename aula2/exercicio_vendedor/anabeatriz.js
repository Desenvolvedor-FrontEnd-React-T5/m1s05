class Vendedor {
  constructor(nome, sobrenome, salarioBase, vendasMensal) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.salarioBase = salarioBase;
    this.vendasMensal = vendasMensal;
  }

  getSalario() {
    return this.salarioBase;
  }
}

class VendedorComissionado extends Vendedor {
  constructor(nome, sobrenome, salarioBase, vendasMensal, taxaComissao) {
    super(nome, sobrenome, salarioBase, vendasMensal);

    if (taxaComissao < 0.0 || taxaComissao > 1.0) {
      console.warn("Taxa inválida! Usando 0.0 como padrão.");
      this.taxaComissao = 0.0;
    } else {
      this.taxaComissao = taxaComissao;
    }
  }

  getSalario() {
    return super.getSalario() + this.taxaComissao * this.vendasMensal;
  }
}

const vendedor = new VendedorComissionado("Ana", "Souza", 1500, 500, 1.2);
console.log(
  `Salário total do vendedor ${vendedor.nome} ${vendedor.sobrenome}: R$ ${vendedor.getSalario().toFixed(2)}`,
);

const vendedor2 = new VendedorComissionado("Joao", "Silva", 2000, 1000, 0.15);
console.log(
  `Salário total do vendedor ${vendedor2.nome} ${vendedor2.sobrenome}: R$ ${vendedor2.getSalario().toFixed(2)}`,
);
