class Vendedor {
  constructor(nome, sobrenome, salarioBase) {
    //vendedor sem comissão, apenas com salário base
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.salarioBase = salarioBase;
    this.vendasRegistradas = 0;
  }

  registrarVenda(valor) {
    this.vendasRegistradas += valor;
    return "Venda registrada no valor de: " + valor;
  }
}

class VendedorComissionado extends Vendedor {
  constructor(nome, sobrenome, salarioBase, taxaComissao) {
    super(nome, sobrenome, salarioBase);

    if (taxaComissao < 0.0 || taxaComissao > 1.0) {
      console.log(
        "Taxa de comissão inválida. Deve ser um valor entre 0.0 e 1.0.",
      );
      this.taxaComissao = 0.0;
      //throw new Error é um constructor de erro verificar como usar: (busquei exemplo abaixo na internet)
      //throw new Error(`Taxa de comissão (${taxaComissao}) inválida para ${nome}. Deve ser entre 0.0 e 1.0.`)
    } else {
      this.taxaComissao = taxaComissao;
    }
  }

  getSalario() {
    // não tem necessidade de validar a taxa aqui,
    // pois na validação do construtor já define como 0.0 
    // caso seja inválida
    /* if (this.taxaComissao < 0.0 || this.taxaComissao > 1.0) {
      console.log(
        "Taxa de comissão inválida. Deve ser um valor entre 0.0 e 1.0.",
      );
      return this.salarioBase; // Retorna apenas o salário base se a taxa de comissão for inválida
    } */
    return this.salarioBase + this.taxaComissao * this.vendasRegistradas;
  }
}

const vendedor1 = new VendedorComissionado("João", "Silva", 2500, 0.5);
console.log(vendedor1.registrarVenda(1000));
console.log("Salário do vendedor 1: " + vendedor1.getSalario());

const vendedor2 = new VendedorComissionado("Maria", "Souza", 3000, 1.2); // Deve exibir mensagem de erro para taxa de comissão inválida
console.log(vendedor2.registrarVenda(200));
console.log("Salário do vendedor 2: " + vendedor2.getSalario());
