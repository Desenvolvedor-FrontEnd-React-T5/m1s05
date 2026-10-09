const AnimalDomestico = require("./animal_domestico");

class Cachorro extends AnimalDomestico {
  constructor(nome, idade, raca, somLatido, corPredominante) {
    super(nome, idade, raca, corPredominante);
    this.somLatido = somLatido;
  }

  emitirSom() {
    console.log(this.somLatido);
  }
}

const cao = new Cachorro("Rex", 6, "SRD", "AUAUAUAU");

cao.comer();
cao.emitirSom();
cao.fazerCarinho();
