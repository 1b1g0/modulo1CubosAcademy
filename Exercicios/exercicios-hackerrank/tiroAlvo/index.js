
const tiros = [0,50,90,80, 100, 80, 40];
function solucao(disparos) {
	//seu codigo aqui
    let contadorD = 0;
    for (num of disparos){
        if (num > 69){
            contadorD++;
        }
    }
    contadorD >= 3 ? console.log(contadorD) : console.log('ELIMINADO');
}
solucao(tiros);