//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

const msgAlto = 'Risco Alto - Você está ingerindo pouquissima água, beba mais água!';
const msgModerado = 'Risco Moderado - Você está ingerindo pouca água, beba mais!';
const msgBaixo = 'Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!';

quantidadeDeAguaIngerida < 1.5 ? console.log(msgAlto)
    : quantidadeDeAguaIngerida < 3 ? console.log(msgModerado)
    : console.log(msgBaixo);
