const { consClear, inputDados, closeInterface } = require('../utils.js');

(async () =>{
    const F = await inputDados("Graus em Fahrenheit:\n");
    closeInterface();
    consClear(2);
    let C = (F - 32) * (5/9);
    console.log(`\n${F}° Fahrenheit em Celsius é igual: ${C.toFixed(1)}°\n`);

})();