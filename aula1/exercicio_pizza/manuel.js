class Pizza {
  constructor(tamanho, sabor, borda) {
    this.tamanho = tamanho;
    this.sabor = sabor;
    this.borda = borda;
  }

  calcularPreco() {
    let precoBase = 0;

    if (this.tamanho === "P") {
      precoBase = 25;
    } else if (this.tamanho === "M") {
      precoBase = 35;
    } else if (this.tamanho === "G") {
      precoBase = 50;
    }

    if (this.borda) {
      precoBase += 8;
    }

    return precoBase;
  }

  resumo() {
    const valor = this.calcularPreco();
    const comBordaRecheada = this.borda
      ? "Com borda recheada"
      : "Sem borda recheada";

    console.log(
      `Tipo de pizza ${this.tamanho}, ${this.sabor}, ${comBordaRecheada} por: R$ ${valor}`,
    );
  }
}

const miPizza = new Pizza("M", "Calabresa", true);
miPizza.resumo();
