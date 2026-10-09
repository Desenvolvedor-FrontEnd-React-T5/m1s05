class Animal {
  constructor(nome, idade, raca, corPredominante) {
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;
    this.cor = corPredominante;
  }

  emitirSom() {
    console.log("Grrr");
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }
}

module.exports = Animal;
