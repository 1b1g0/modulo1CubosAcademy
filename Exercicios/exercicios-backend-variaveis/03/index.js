const { consClear, inputDados, closeInterface } = require('../utils.js');

(async () => {
    const dinheiroTotal = await inputDados('Informe qual valor disponível: ');
    const valorProduto = await inputDados('Informe o valor do produto: ');
    consClear(4)
    closeInterface();

    let porcentagemDesc = ( 100 - (dinheiroTotal * 100) / valorProduto);
    console.log(`Com R$ ${dinheiroTotal} será necessário ${porcentagemDesc.toFixed(2)}% de desconto para comprar o produto, ou R$ ${(valorProduto - dinheiroTotal)}.`);
})();