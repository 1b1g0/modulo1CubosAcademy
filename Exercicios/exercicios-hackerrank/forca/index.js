const letra = "a";
const p = "abelha";

function solucao(palpite, palavra) {
	// seu codigo aqui
    let contador = 0;
    for (char of palavra){
        if (char == palpite){
            contador++;
        }
    }
    console.log(contador);
}
solucao(letra,p);