const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

function retornarPositivos(arr){
    return arr.filter(i => i > 0);
}
console.log(retornarPositivos(numeros));