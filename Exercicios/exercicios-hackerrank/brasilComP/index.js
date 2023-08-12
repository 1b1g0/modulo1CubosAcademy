const letra1 = 'a';
const letra2 = 'v';
const pArr = ["aveia","manha","ave"]

function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
    const novasP = [];
    for (palavra of palavras){
        if (palavra[0] == primeiraLetra && palavra[1] == segundaLetra){
            novasP.push(palavra);
        }
    }       
    if (novasP.length < 1){
        console.log('NENHUMA');
    } else {
        for (p in novasP){
            console.log(`${novasP[p]}`);
        }
    }
}
solucao(letra1,letra2,pArr);