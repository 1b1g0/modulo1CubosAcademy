function solucao(numero, limiteInferior, limiteSuperior) {
    const retorno = numero >= limiteInferior && numero <= limiteSuperior ? `PERTENCE` : `NAO PERTENCE`;
    console.log(retorno);
}