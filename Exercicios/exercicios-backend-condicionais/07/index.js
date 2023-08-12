const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
aposentada || portadoraDeDoenca ? console.log('ISENTA')
: totalDeRendimentos < 2855970 ?  console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE')
: console.log('PEGA LEAO');