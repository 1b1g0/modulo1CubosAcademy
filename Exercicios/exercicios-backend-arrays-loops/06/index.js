const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let soma = 0;
numeros.forEach(n => {
    if (n%2 == 0){
    soma = soma + n
    }
});
console.log(soma);

