const Usuario = require("./Usuario");

class Admin extends Usuario {
  exibePapel() {
    console.log(`Usuário(a) ${this.nome} é admin.`);
  }
}

module.exports = Admin;
