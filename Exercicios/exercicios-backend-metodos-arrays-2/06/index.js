const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];
const maxCaracteres = 8;
function filtrarPorCaractere(arr,qntidadeCaractere){
    return arr.filter(item => item.length <= qntidadeCaractere).join(', ')
}
console.log(filtrarPorCaractere(cidades,maxCaracteres));
