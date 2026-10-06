class Pizza {
  constructor(sabor, tamanho, borda) {
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.borda = borda;
  }

  calcularPreco() {
    let precoFinal = 0;

    switch (this.tamanho) {
      case "P":
        precoFinal = this.borda ? 33 : 25;
        break;
      case "M":
        precoFinal = this.borda ? 43 : 35;
        break;
      case "G":
        precoFinal = this.borda ? 58 : 50;
        break;
      default:
        console.log("Tamanho inválido");
    }

    return precoFinal;
  }

  resumo() {
    let valor = this.calcularPreco();
    let textoBorda = this.borda
      ? "com aquela borda recheada caprichada"
      : "sem borda na massa";

    console.log(
      `🍕 [PEDIDO CONFIRMADO] ➜  Pizza de ${this.sabor} | Tamanho: ${this.tamanho} | ${textoBorda} | Valor Final: R$ ${valor},00`,
    );
  }
}

const pizzaCamaraoCreamCheese = new Pizza(
  "Camarão ao Cream Cheese com Alho Poró",
  "G",
  true,
);
const pizzaDoceLeiteAmendoim = new Pizza(
  "Doce de Leite Viçosa com Amendoim Tostado",
  "M",
  false,
);

pizzaCamaraoCreamCheese.resumo();
pizzaDoceLeiteAmendoim.resumo();
