const pontuacao = ["V", "E", "V", "E"];
function solucao(resultados) {
	//seu codigo aqui
    let pontos = 0;
    for (res of resultados){
        switch(res){
            case "V" :
                pontos += 3;
                break;
            case "E" :
                pontos++;
                break;
            case "D" :
                break;
            default:
                console.log('Caractere invalido.');
        }
    }
    console.log(pontos);
}

solucao(pontuacao);