const stringCorrompida = 'Felis) silvestris *catus&';
function solucao(str) {
	// seu codigo aqui
    const rx = /[!@#$%&*().]/g;
    console.log(str.replace(rx,''));
}
solucao(stringCorrompida);