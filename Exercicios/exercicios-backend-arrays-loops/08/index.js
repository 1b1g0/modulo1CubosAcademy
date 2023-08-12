const numeros = [3, 24, 1, 8, 11, 7, 15];
let maior = 0;
numeros.forEach(num => {
    if (num > maior) {
        maior = num;
    }
})
console.log(maior);