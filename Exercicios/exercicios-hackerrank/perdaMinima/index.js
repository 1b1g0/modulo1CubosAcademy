//precos = [5, 10, 3];
precos = [30,10,54,76,1,4,35];
function solucao(precos) {
    // seu codigo aqui
    const tamAr = precos.length - 1;
    let menor = Infinity;
    
    for (let i = 0; i <= tamAr; i++){
        for (let x = (i+1); x <= tamAr; x++){
            //console.log(`${precos[i]} - primeiro for | ${precos[x]} - segundo for\n sub = ${precos[x]} - ${precos[i]} = ${precos[x] - precos[i]}`)
            if ((precos[i] - precos[x]) < menor && (precos[i] - precos[x]) > 0){
                menor = (precos [i] - precos[x]);
            }
        } 
    }
      return menor;
  }
console.log(solucao(precos));