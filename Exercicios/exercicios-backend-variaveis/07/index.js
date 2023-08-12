const { consClear, inputDados, closeInterface } = require('../utils.js');
const msg1 = 'Informe a população inicial de infectados: ';
const msg2 = 'Para quantas pessoas cada paciente pode transmitir a doença? ';
const msg3 = 'Tempo percorrido em dias: ';

(async () => {
    const Po = await inputDados(msg1);
    const X = await inputDados(msg2);
    const t = await inputDados(msg3);
    closeInterface();

    const P = Po * (X**(t/7));
    console.log(`\nO total de pessoas infectadas inicial era ${Po}.\nApós ${t} dias, o número de infectados será de ${P}\n`);
})();