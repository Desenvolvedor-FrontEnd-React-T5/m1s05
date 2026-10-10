const Usuario = require("./Usuario");

class Professor extends Usuario {
  exibePapel() {
    console.log(`Usuário(a) ${this.nome} é professor(a).`);
  }
}

module.exports = Professor;
