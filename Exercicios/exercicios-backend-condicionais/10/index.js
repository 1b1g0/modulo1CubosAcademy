const caractere = 'E';

const vogais = ['A','E','I','O','U','a','e','i','o','u'];
const nums = ['1','2','3','4','5','6','7','8','9','0']

function maiuscula(letra) {
    return letra === letra.toUpperCase();
}

if (vogais.includes(caractere)) {
        maiuscula(caractere) ? console.log('Vogal Maiúscula') :
        console.log('Vogal Minúscula');

} else if (nums.includes(caractere)) {
    console.log('Número');

} else {
    maiuscula(caractere) ? console.log('Consoante Maiúscula') :
    console.log('Consoant Minúscula');
}