const cpf = "011.022.033-44";
const rxPontuacao = /[.-/]/g;
function removerPontuacao(str){
    const correto = str.replace(rxPontuacao, '');
    return correto
}
console.log(removerPontuacao(cpf))