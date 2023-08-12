const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];
function maiorString(arrCidades){
    return arrCidades.reduce((acumulador,atual) => {
        //console.log(acumulador,' : ',atual)
        if (acumulador.length < atual.length){
            acumulador = atual;
        } 
        return acumulador;
    })
}
console.log(maiorString(cidades));