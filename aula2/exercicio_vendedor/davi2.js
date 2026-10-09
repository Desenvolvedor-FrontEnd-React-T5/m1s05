import { Vendedor } from "./davi1.js";

class VendedorComissionado extends Vendedor {
  constructor(nome, sobrenome, valorVendidoNoMes, salarioBase, taxaComissao) {
    super(nome, sobrenome, valorVendidoNoMes, salarioBase);

    if (taxaComissao >= 0.0 && taxaComissao <= 1.0) {
      this.taxaComissao = taxaComissao;
    } else {
      console.log("Taxa de comissão inválida! Definida como 0.0 por padrão.");
      this.taxaComissao = 0.0;
    }
  }

  getSalario() {
    return this.salarioBase + this.taxaComissao * this.valorVendidoNoMes;
  }
}

const vendedor1 = new VendedorComissionado("Davi", "Silva", 20000, 2000, 0.1);

console.log(`Vendedor: ${vendedor1.nome} ${vendedor1.sobrenome}`);
console.log(`Salário Base: R$ ${vendedor1.salarioBase}`);
console.log(`Vendas no Mês: R$ ${vendedor1.valorVendidoNoMes}`);
console.log(`Salário Total: R$ ${vendedor1.getSalario()}`);
