const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];
const buscarProfissao = 'Programador';

function filtrarProfissoes(arr, profissao, idade) {
    return arr.filter(i => i.profissao == profissao && i.idade > idade);
}
console.log('Programadores maiores que 20 anos.\n',filtrarProfissoes(pessoas, buscarProfissao, 20));
console.log('Jornalistas maiores que 30 anos.\n',filtrarProfissoes(pessoas, 'Jornalista', 30));
console.log('\n', pessoas.filter( i => i.idade < 29 && (i.profissao == 'Jornalista' || i.profissao == 'Programador' )))