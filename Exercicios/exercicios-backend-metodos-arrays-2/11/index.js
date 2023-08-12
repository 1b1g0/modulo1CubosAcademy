const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda"
  ];

function filtrarPorPrimeiraLetra(arr, primeiraLetra){
    return arr.filter(i => i[0] == primeiraLetra || i[0] == primeiraLetra.toUpperCase())
}
console.log(filtrarPorPrimeiraLetra(nomes, 'a'));