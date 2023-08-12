const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];
function some(lista){
    if (lista.includes('cerveja') || lista.includes('vodka')){
        console.log(`revise sua lista, joão. possui bebida com venda proibida!`);
    } else {
        console.log(`tudo certo, vamos as compras!`);
    }
}
some(palavras)