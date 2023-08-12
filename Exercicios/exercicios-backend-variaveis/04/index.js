const { consClear, inputDados, closeInterface } = require('../utils.js');

//editar taxa de juros
const taxa = 12.5;
const i = taxa / 100;

(async () => {
    const C = await inputDados('Informe o capital inicial: R$ ');
    consClear(1);
    const t = await inputDados('Informe a duração do investimento em meses: ');
    consClear(1);
    closeInterface();

    const M = parseFloat(C) * ((1 + i)**t);

    console.log(`\nApós o período de ${t} meses, seu capital inicial crescerá de R$ ${C}, para um montante de: R$ ${M.toFixed(2)}.\n`);
})();
    /*
    mostrar Taxa definida ${taxa} e Duração do Investimento(meses) ${t}
    M = C (1 + i)^t
    */