const prompt = require("prompt-sync")();

class Pizza {
  constructor(sabor, tamanho, borda, preco) {
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.borda = borda;
    this.preco = preco;
  }

  calcularPreco() {
    // TODO: implementar calculo
  }

  resumo() {
    // TODO: implementar resumo
  }
}

const sabor = () => {
  return prompt("Digite o sabor da pizza: ");
};
const tamanho = () => {
  return prompt(
    "Digite o tamanho da pizza (P -pequena, M -média, G -grande): ",
  );
};

const borda = () => {
  return prompt("Digite o tipo da borda (com ou sem): ");
};

const preco = (tamanho, borda) => {
  let preco = 0;
  if (tamanho === "P") {
    preco = 25;
  } else if (tamanho === "M") {
    preco = 35;
  } else if (tamanho === "G") {
    preco = 50;
  }
  if (borda === "com") {
    preco += 8;
  }
  return preco;
};

const resumo = () => {
  console.log(
    `Resumo do pedido: \nSabor: ${this.sabor} \nTamanho: ${this.tamanho} \nBorda: ${this.borda} \nPreço: R$${this.preco}`,
  );
};
