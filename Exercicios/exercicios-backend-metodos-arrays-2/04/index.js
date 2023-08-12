const numeros = [0, 122, 4, 6, 16, 8, 44];
function testarAr(ar){
    ar.every(i => i%2==0) ? console.log(`array válido`) : console.log(`array inválido`)
}
testarAr(numeros)