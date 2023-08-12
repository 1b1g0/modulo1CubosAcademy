const idade = 18;
const altura = 180;

const possuiPatologia = false;
const ehEstudante = false;

const n = 'ACESSO NEGADO';

if (possuiPatologia || idade < 12 || idade > 65 ){
    console.log(n);
} else if (ehEstudante || idade < 18){
    console.log('10 reais');
} else {
    console.log('20 reais');
}
 