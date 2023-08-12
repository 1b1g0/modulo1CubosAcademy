const numeros = [8, 11, 4, 1];
let dif = 0;
let maior = 0;
let menor = Infinity;
numeros.forEach(n => {
    if (n > maior) {
        maior = n;
    } else if (n < menor) {
        menor = n;
    }
});
console.log(`${maior} - ${menor} = ${maior - menor}`);