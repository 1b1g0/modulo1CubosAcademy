const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesA = [];
nomes.forEach(nome => {
    if(nome.charAt(0) == 'a' || nome.charAt(0) == 'A'){
        nomesA.push(nome)
    } 
})
console.log(nomesA)