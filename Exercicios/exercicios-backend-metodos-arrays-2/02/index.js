const palavras = ["livro", "canea", "sol", "carro", "orelh"]

function checarArray(arr){
    for (i in arr){
        if (arr[i].length > 5) {
            console.log(`existe palavra inválida`);
            break;
        } 
        else if (i == (arr.length - 1)) {
            console.log(`array validado`);
        }
    }
}
checarArray(palavras);