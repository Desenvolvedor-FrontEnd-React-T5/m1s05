class Pizza {
  constructor(sabor, tamanho, borda) {
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.borda = borda;
  }

  calcularPreco() {
    let preco;

    if (this.tamanho === "P") {
      preco = 25;
    } else if (this.tamanho === "M") {
      preco = 35;
    } else if (this.tamanho === "G") {
      preco = 50;
    } else {
      preco = 0;
    }

    if (this.borda) {
      preco += 8;
    }

    return preco;
  }

  resumo() {
    const valor = this.calcularPreco();
    const tipoBorda = this.borda ? "com" : "sem";

    console.log(
      `Pizza ${this.tamanho} ${tipoBorda} borda custará R$ ${valor.toFixed(2)} reais`,
    );
  }
}

const pizza1 = new Pizza("Calabresa", "M", true);

pizza1.resumo();
