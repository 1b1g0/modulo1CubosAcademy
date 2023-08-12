const { consClear, inputDados, closeInterface } = require('../utils.js');
const msg = 'Qual número de lados do polígono? ';
(async () => {
    const ladosP = await inputDados(msg);
    closeInterface();
    consClear();
    const S = (ladosP - 2) * 180;
    const a = S / ladosP;
    
    console.log(`Polígono: ${ladosP} lados.\nSoma dos ângulos internos: ${S}°.\nAngulatura da vertíce: ${a}°.`);

})();
