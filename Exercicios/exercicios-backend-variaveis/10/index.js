const { consClear, inputDados, closeInterface } = require('../utils.js');
const msg = 'Informe o valor de ';
let delta = 0;

(async () => {
    const a = await inputDados(msg + 'A: ');
    consClear(1);
    const b = await inputDados(msg + 'B: ');
    consClear(1);
    const c = await inputDados(msg + 'C: ');
    consClear(1);
    closeInterface();

    delta = (b**2) - 4 * (a*c);
    console.log(`${a}x² + ${b}x + ${c} = 0\nO valor de delta é: ${delta}`);
})();


