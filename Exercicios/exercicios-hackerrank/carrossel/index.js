const seq = '>>><>';
function solucao(sequencia) {
	//seu codigo aqui
    
    let passo = 0;
    for (let i = 0; i < sequencia.length; i++){
        if (sequencia[i] === '>' && passo == 6){
            passo = 0;
        } else if (sequencia[i] === '<' && passo == 0){
            passo = 6;
        } else if (sequencia[i] === '>'){
            passo = passo + 1;
        } else if (sequencia[i] === '<'){
            passo = passo - 1;
        }
    }
    console.log(passo);
}
solucao(seq);