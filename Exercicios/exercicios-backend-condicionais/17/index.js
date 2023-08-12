//valor do produto comprado. centavos
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorParcela = (valorDoProduto / 100) / quantidadeDoParcelamento;
const parcelasRestantes = quantidadeDoParcelamento - (valorPago / valorParcela);

//const parcelasRestantes = ;
const msg = `Restam ${parcelasRestantes} parcelas de R$${valorParcela} reais, totalizando R$${parcelasRestantes * valorParcela} reais do total de R$${valorDoProduto/100} reais devidos.`;
console.log(msg);