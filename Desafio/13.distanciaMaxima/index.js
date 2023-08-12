function processData(input) {
    // rever a posicao atual e determinar qual e a maior distancia que precisa ser andada para uma pessoa chegar na mesa do colega
    // a distancia e sempre uma linha reta entre dois pontos.
    // maior distancia entre pontos, entao testar todos
    
    // tratamento de input
    const dados = input.split('\n');
    dados.pop();
    const funcionarios = parseInt(dados.shift());
    let maiorD = 0;
    
    for (pos = 0; pos < funcionarios - 1 ; pos++){
       // console.log(typeof dados[pos],'oi')
       // pos = 0, i = 1 
        
        for (i = pos + 1; i < funcionarios; i++){
            let posA = dados[pos].split(' ').map(x => parseFloat(x));
            let posB = dados[i].split(' ').map(x => parseFloat(x));
            const D = Math.sqrt(((posB[0] - posA[0])**2) + ((posB[1] - posA[1])**2));
            
            if (D > maiorD){ 
                maiorD = D;
            }
          // console.log(D, pos, i); pra debuga legal xD
        }
    }
    console.log(maiorD);
} 