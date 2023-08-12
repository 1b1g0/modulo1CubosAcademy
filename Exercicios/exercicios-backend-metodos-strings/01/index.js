const comentario = "Esse CovId é muito perigoso!";
//
const rx = /(\bcovid\b)|(\bpandemia\b)/ig;
function checarComentario(comentario){
    if (rx.test(comentario)){
        console.log(`Comentário bloqueado por conter palavras proibidas`);
    } else {
        console.log(`Comentário autorizado`);
    }
}
checarComentario(comentario);