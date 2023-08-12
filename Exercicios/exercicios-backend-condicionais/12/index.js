const diaDaSemana = 1;
const nomeDias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

diaDaSemana > 7 || diaDaSemana < 1 ? console.log('O dia da semana informado não é válido.') :
console.log(nomeDias[diaDaSemana - 1] + '-feira');