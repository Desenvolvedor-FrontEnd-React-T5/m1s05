const Admin = require("./Admin");
const Professor = require("./Professor");
const Aluno = require("./Aluno");

const admin = new Admin("Gelso", "gelso.campos", "pass123");
const prof = new Professor("Angelo", "angelo.heavy", "senha456");
const aluno = new Aluno("Sara", "sr", "senha789");

const usuarios = [admin, prof, aluno];

usuarios.forEach((usuario) => {
  usuario.exibePapel();
});
