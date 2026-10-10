const Usuario = require("./Usuario");

class Aluno extends Usuario {
  exibePapel() {
    console.log(`Usuário(a) ${this.nome} é aluno(a).`);
  }
}

module.exports = Aluno;
