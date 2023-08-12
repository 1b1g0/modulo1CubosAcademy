const { NOMEM } = require("dns");

function a(){
    const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
    return numeros.sort((a,b) => a - b);
}
function b(){
    const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
    return numeros.sort((a,b) => a + b)
}
function c(){
    //retorno com base nos valores UNICODE.
    const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
    return numeros.sort()
}
function d(){
    const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
    // comparar em UPPER 
    return frutas.sort((a,b)=> {
        const strA = a.toUpperCase();
        const strB = b.toUpperCase();
        if (strA < strB){
            return -1;
        }
        if (strA > strB){
            return 1;
        }
        return 0;
    })
}
function e(){
    const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
    // comparar em UPPER 
    return frutas.sort((a,b)=> {
        const strA = a.toUpperCase();
        const strB = b.toUpperCase();
        if (strA < strB){
            return -1;
        }
        if (strA > strB){
            return 1;
        }
        return 0;
    }).reverse();
}
function f(){
    const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
    return frutas.sort((a,b) => {
        return a.length - b.length
    })
}
console.log('Resolução a:\n',`${a().join(', ')}`,
'\nResolução b:\n',`${b().join(', ')}`,
'\nResolução c:\n', `${c().join(', ')}`,
'\nResolução d:', `${d().join(', ')}`,
'\nResolução e:', `${e().join(', ')}`,
'\nResolução f:', `${f().join(', ')}`)

