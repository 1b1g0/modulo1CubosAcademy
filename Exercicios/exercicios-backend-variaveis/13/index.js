const { inputDados, closeInterface } = require('../utils.js');

const msg1 = 'Informe o raio da base: ';
const msg2 = 'Informe a altura: ';

(async () =>{
    console.log('Calculadora de área cilíndrica');
    const r = await (inputDados(msg1));
    const h = await inputDados(msg2);
    closeInterface();

    const at = (parseInt(r) * 2 ) * (parseInt(r) + parseInt(h));
    console.log(`A área total do cilíndro é: ${at} π`)
})();