const AnimalDomestico = require("./animal_domestico");

class Gato extends AnimalDomestico {
  constructor(nome, idade, raca, corPredominante) {
    super(nome, idade, raca, corPredominante);
  }

  emitirSom() {
    console.log("miau");
  }
}

const gato = new Gato("Sr. Bigodes", 7, "Angorá");

gato.comer();
gato.emitirSom();
