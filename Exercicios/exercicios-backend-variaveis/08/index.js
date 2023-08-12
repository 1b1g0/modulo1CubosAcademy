const { consClear, inputDados, closeInterface } = require('../utils.js');
const pi = 3.141592;

const msg = 'Informe o raio do círculo: ';

(async () => {
    const raio = await inputDados(msg);
    consClear(1);
    closeInterface();
    const comprimento = (2 * pi) * raio;
    const area = (pi * (raio**2));
    
    console.log(`Uma circunferência com raio ${raio} cm, possui comprimento de ${comprimento.toFixed(2)} e área de ${area.toFixed(2)}\n`);
})();

