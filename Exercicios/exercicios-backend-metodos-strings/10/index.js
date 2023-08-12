const nomeArquivo = 'Foto da Familia.pdf';
function validarExtencao(arq){
    // | = ou;
    const rx = /.jpg|.jpeg|.gif|.png/;
    arq.match(rx) ? console.log(`Arquivo válido`) : console.log(`Arquivo inválido`);
}
validarExtencao(nomeArquivo)