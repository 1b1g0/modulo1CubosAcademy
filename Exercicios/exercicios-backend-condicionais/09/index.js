const nota = 8.5;
const msg = 'O estudante obteve conceito ';

const conceito = nota < 4.0 ? 'E' :
                nota <= 5.9 ? 'D' :
                nota <= 7.9 ? 'C' :
                nota <= 8.9 ? 'B' :
                nota <= 10.0 ? 'A' :
                'Revise o valor da nota.';
console.log(msg + conceito);