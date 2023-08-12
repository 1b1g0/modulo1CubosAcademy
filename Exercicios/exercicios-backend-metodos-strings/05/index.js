const numeroCartao = '1111222233334444';
function ocultarChar(numeroCartao){
// buscar formas mais fáceis de resolver
    const numeroFinal = [];
    for (char in numeroCartao){
        if (char < 3){
            numeroFinal.push(numeroCartao[char]);
        } else if (char > 3 && char < 12){
            numeroFinal.push('*');
        } else {
            numeroFinal.push(numeroCartao[char]);
        }
    }
    return numeroFinal.join('');
    
}
console.log(ocultarChar(numeroCartao))