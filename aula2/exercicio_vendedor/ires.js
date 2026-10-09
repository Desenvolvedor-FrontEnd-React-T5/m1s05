// ==============================================
//  Classe PAI: Vendedor
// ==============================================
class Vendedor {
  // Método construtor: define os atributos do vendedor
  constructor(nome, sobrenome, valorVendidoNoMes, salarioBase) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.valorVendidoNoMes = valorVendidoNoMes;
    this.salarioBase = salarioBase;
  }

  // Método para mostrar os dados básicos
  mostrarDados() {
    console.log(`Nome: ${this.nome} ${this.sobrenome}`);
    console.log(`Salário Base: R$ ${this.salarioBase.toFixed(2)}`);
    console.log(
      `Valor Vendido no Mês: R$ ${this.valorVendidoNoMes.toFixed(2)}`,
    );
  }
}

// ==============================================
//  Subclasse: VendedorComissionado
// Herda TUDO da classe Vendedor
// ==============================================
class VendedorComissionado extends Vendedor {
  constructor(nome, sobrenome, valorVendidoNoMes, salarioBase, taxaComissao) {
    //  Chama o construtor da classe PAI
    super(nome, sobrenome, valorVendidoNoMes, salarioBase);

    //  Validação da taxa de comissão
    if (taxaComissao >= 0.0 && taxaComissao <= 1.0) {
      this.taxaComissao = taxaComissao;
    } else {
      console.log(" Erro: A taxa de comissão deve estar entre 0.0 e 1.0!");
      this.taxaComissao = 0; // Valor padrão se inválido
    }
  }

  //  Método que calcula e retorna o salário final
  getSalario() {
    const comissao = this.taxaComissao * this.valorVendidoNoMes;
    const salarioFinal = this.salarioBase + comissao;
    return salarioFinal;
  }

  // Método para exibir resumo completo
  mostrarDados() {
    super.mostrarDados();
    console.log(`Taxa de Comissão: ${(this.taxaComissao * 100).toFixed(0)}%`);
    console.log(`Salário Final: R$ ${this.getSalario().toFixed(2)}`);
    console.log("------------------------------------");
  }
}

// ==============================================
//  Testando o Código
// ==============================================

// Exemplo 1: Vendedor comissionado válido
const vendedor1 = new VendedorComissionado(
  "Ana",
  "Silva",
  15000.0, // valor vendido no mês
  2500.0, // salário base
  0.05, // 5% de comissão
);
vendedor1.mostrarDados();

// Exemplo 2: Outro vendedor
const vendedor2 = new VendedorComissionado(
  "João",
  "Pereira",
  8000.0,
  2000.0,
  0.1, // 10% de comissão
);
vendedor2.mostrarDados();

// Exemplo 3: Teste com taxa INVÁLIDA
const vendedor3 = new VendedorComissionado(
  "Carlos",
  "Souza",
  10000.0,
  2200.0,
  1.5, //  Maior que 1.0 → inválido!
);
vendedor3.mostrarDados();

const vend4 = new Vendedor("Maria", "Santos", 1500, 3000);
vend4.mostrarDados();
