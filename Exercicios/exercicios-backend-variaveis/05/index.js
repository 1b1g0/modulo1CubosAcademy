const { consClear, inputDados, closeInterface } = require('../utils.js');

// variavel separador englobando possíveis caracteres de separação.
const separador = /[/,. ;]/;
(async () => {
    const coord1 = await inputDados('\nDefina x1 e y1: '); 
    consClear(1);
    const coord2  = await inputDados('Agora, defina x2 e y2: ');
    consClear(1);
    closeInterface();

    // tratando input 1
    const arr1 = coord1.split(separador);
    x1 = parseInt(arr1[0]);
    y1 = parseInt(arr1[1]);
    console.log(`As coordenadas inseridas são:\nx1 = ${x1} | y1 = ${y1}\n`);
    // tratando input 2
    const arr2 = coord2.split(separador);
    x2 = parseInt(arr2[0]);
    y2 = parseInt(arr2[1]);
    console.log(`As coordenadas inseridas são:\nx2 = ${x2} | y2 = ${y2}\n`);

    const d = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    console.log(`A distância entre os pontos é: ${d.toFixed(1)}`);

})();

