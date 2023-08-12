const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

function filtrarPares(arr){
    return arr.filter(i => i%2 == 0);
}

console.log(filtrarPares(numeros));