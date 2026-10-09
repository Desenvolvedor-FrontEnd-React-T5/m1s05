class Jogador {
  nome = "";
  pontuacao = 0;

  constructor(nome) {
    this.nome = nome;
  }

  exibirPontuacao() {
    console.log(`Pontuação de ${this.nome} é: ${this.pontuacao}`);
  }
  
  pontuar() {
    //console.log(++this.pontuacao);
    this.pontuacao++;
  }
}

module.exports = Jogador;
