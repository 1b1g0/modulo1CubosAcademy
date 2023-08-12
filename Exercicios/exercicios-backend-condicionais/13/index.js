//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
const porcentagemDesconto = [5, 3, 10];
let i;

switch (tipoDePagamento) {
    case "credito" : 
        i = 0;
        break;

    case "cheque" :
        i = 1;
        break;
        
    default :
    i = 2 
}

const valorFinal = (valorDoProduto - (valorDoProduto * (porcentagemDesconto[i] / 100))) / 100;
console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)
