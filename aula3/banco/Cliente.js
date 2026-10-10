class Cliente {
  constructor(nome, sobrenome, dataNascimento, telefone, email, endereco) {
    this.nome = nome; // String
    this.sobrenome = sobrenome; // String
    this.dataNascimento = dataNascimento; // String
    this.telefone = telefone; // String
    this.email = email; // String
    this.endereco = endereco; // String
  }

  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }
}

module.exports = Cliente;
