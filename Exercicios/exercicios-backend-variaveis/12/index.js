const { consClear,inputDados, closeInterface } = require('../utils.js');
const msg1 = 'Insira o montante pago: ';
const msg2 = 'Insira o capital inicial: ';
const msg3 = `Insira o tempo decorrido do financiamento (meses): `;
(async () => {
    const m = await inputDados(msg1);
    const c = await inputDados(msg2);
    const n = await inputDados(msg3);
    
    closeInterface();
    consClear(3);
    const i = ((((m/c)**(1/n)) - 1) * 100).toFixed(3) ;
    console.log(`\nO seu financiamento de ${c} reais teve uma taxa de juros de ${i}%, pois após 24 meses você teve que pagar ${m} reais.\n`)

})();
