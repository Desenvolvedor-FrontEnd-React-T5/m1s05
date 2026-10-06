class Pizza {
  constructor(sabor, tamanho, borda) {
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.borda = borda;
  }

  calcularPreco() {
    let preco = 0;

    if (this.tamanho === "P") {
      preco = 25;
    } else if (this.tamanho === "M") {
      preco = 35;
    } else if (this.tamanho === "G") {
      preco = 50;
    }

    if (this.borda) {
      preco += 8;
    }

    return preco;
  }

  resumo() {
    const precoFinal = this.calcularPreco();
    const textoBorda = this.borda ? "com" : "sem";

    console.log(
      `Pizza ${this.tamanho} de ${this.sabor} ${textoBorda} borda custará R$ ${precoFinal} reais.`,
    );
  }
}

const pizzaFrango = new Pizza("Frango com Catupiry", "M", true);
pizzaFrango.resumo();

const pizzaChampignon = new Pizza("Champignon", "P", false);
pizzaChampignon.resumo();
