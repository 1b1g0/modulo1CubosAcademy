//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 17;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

const negado = 'Não é possível fazer a rematrícula';
const aceito = 'Rematrícula realizada com sucesso';
idadeDoAluno > 17 ? console.log(aceito) : 
    possuiResponsavel ? console.log(aceito) : console.log(negado);