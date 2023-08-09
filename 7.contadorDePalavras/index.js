function solucao(texto) {
    // Seu codigo aqui   
    const palavras = texto.split(/\s+/g);
    const totalDePalavras = palavras.filter(p => p != '' && p != ' ').length;
    console.log(totalDePalavras);
}