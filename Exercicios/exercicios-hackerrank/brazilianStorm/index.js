const notasAr = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
function solucao(notas) {
	//seu codigo aqui
    notas.sort((a,b)=>a-b);
    notas.pop();
    notas.splice(0,1);
    let notaF = 0;

    for (n of notas){
       notaF += n;
    }
    let media = notaF / (notas.length);
    console.log(media);
}
solucao(notasAr);