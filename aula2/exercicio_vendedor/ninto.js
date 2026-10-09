class vendedor2 {
  constructor(nome, sobrenome, salarioBase, valorVendidoNoMes) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.salarioBase = salarioBase;
    this.valorVendidoNoMes = valorVendidoNoMes;
  }
}

class VendedorComissionado2 extends vendedor2 {
  constructor(nome, sobrenome, salarioBase, valorVendidoNoMes, comissao) {
    super(nome, sobrenome, salarioBase, valorVendidoNoMes);
    this.comissao = comissao;

    if (comissao < 0 || comissao > 1) {
      throw new Error("A comissão deve estar entre 0.0 e 1.0");
    }
  }

  taxaComissao() {
    return this.comissao;
  }

  getSalario() {
    return this.salarioBase + this.comissao * this.valorVendidoNoMes;
  }
}

const vendedor = new VendedorComissionado2("ARTUR", "Silva", 2500, 50000, 1.2);

console.log("Nome:", vendedor.nome, vendedor.sobrenome);
console.log("Salário base:", vendedor.salarioBase);
console.log("Comissão:", vendedor.taxaComissao());
console.log("Valor vendido no mês:", vendedor.valorVendidoNoMes);
console.log("Salário total:", vendedor.getSalario());
