const { consClear, inputDados, closeInterface } = require('../utils.js');
const spec = /[, ]/;
(async () => {
    const P = await inputDados("Qual é o seu peso?\n");
    let A = await inputDados("E sua altura?\n");
    closeInterface();
    consClear(4);
    // caso o input da altura use outro separador de decimal se não o '.'
    A = A.replace(spec, '\.'); 
    //console.log(A)
    const I = parseInt(P) / (A**2);
    console.log(`\nSeu IMC é: ${I.toFixed(2)}\nVocê pode checar alguma tabela de IMC para ver seu estado corporal!\n`);
})();