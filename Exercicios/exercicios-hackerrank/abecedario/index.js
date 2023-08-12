const arrPalavras = ["mamao","maca","melao","melancia","laranja"];
const letra = "m";

function solucao(letra, palavras) {
	//seu codigo aqui
    let i = 0;
    palavras.forEach(p => {
      if(p[0] !== letra){
          i++
      }    
    })
    console.log(i);
}

