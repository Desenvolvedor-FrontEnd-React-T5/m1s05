// Definição da classe Pizza
class Pizza {
  // Método construtor: recebe os valores ao criar a pizza
  constructor(sabor, tamanho, borda) {
    this.sabor = sabor;
    this.tamanho = tamanho.toUpperCase(); // Garante letra maiúscula
    this.borda = borda;
  }

  // Calcula o preço base + adicional de borda
  calcularPreco() {
    let precoBase;

    switch (this.tamanho) {
      case "P":
        precoBase = 25.0;
        break;
      case "M":
        precoBase = 35.0;
        break;
      case "G":
        precoBase = 50.0;
        break;
      default:
        precoBase = 0; // Tamanho inválido
    }

    // Adiciona R$ 8,00 se tiver borda recheada
    if (this.borda) {
      precoBase += 8.0;
    }

    return precoBase;
  }

  // Exibe todos os dados e o preço final
  resumo() {
    const valorFinal = this.calcularPreco();
    const temBorda = this.borda ? "COM" : "SEM";

    console.log("————————————————————————————");
    console.log(`Sabor: ${this.sabor}`);
    console.log(`Tamanho: ${this.tamanho}`);
    console.log(`Borda recheada: ${temBorda}`);
    console.log(
      `Pizza ${this.tamanho} ${temBorda.toLowerCase()} borda custará R$ ${valorFinal.toFixed(2)} reais`,
    );
    console.log("————————————————————————————");
  }
}

// Criando uma pizza
const minhaPizza = new Pizza('Mussarela', 'M', true);

// Mostra os dados e o preço
minhaPizza.resumo();

// Outro exemplo
const pizza2 = new Pizza('Frango com Catupiry', 'G', false);
pizza2.resumo();
