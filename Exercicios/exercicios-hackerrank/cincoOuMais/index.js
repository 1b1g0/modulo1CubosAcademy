const valorItens = [100,500,100,200,50];
function solucao(precos) {
    //seu codigo aqui
    let total = 0;
    let menor = precos[0];
    
    if (precos.length > 4){
        //preparando o array
        for (let i = 1; i < precos.length; i++){
            if (precos[i] <menor){
                menor = precos[i];
            }
        }
        const posMenor = precos.indexOf(menor);
        precos.splice(posMenor,1);
    }   
    
    //somando o total
    for (let i = 0; i < precos.length; i++){
        total = total + precos[i];
    }
    console.log(total);
}
solucao(valorItens);