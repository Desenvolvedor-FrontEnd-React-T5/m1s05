class Usuario {
  constructor(nome, nomeUsuario, senha) {
    this.nome = nome;
    this.nomeUsuario = nomeUsuario;
    this.senha = senha;
  }

  login() {
    console.log("usuário está logado!");
  }

  exibePapel() {
    console.log(`Usuário(a) ${this.nome} é usuário(a).`);
  }
}

module.exports = Usuario;
