function solucao(jogadores) {
    //seu codigo aqui
    const jogadas1 = jogadores.filter(jogador => jogador.jogada);
    const jogadas0 = jogadores.filter(jogador => !jogador.jogada);
    
    if (jogadas1.length < 2){
        console.log(jogadas1[0].nome);
    } 
    else if (jogadas0.length < 2){
        console.log(jogadas0[0].nome)
    } else {
        console.log(`NINGUEM`);
    }
    
    //console.log(jogadas1,jogadas0)
    // tem que ler o exercicio direito -.-
    // vencedor = [] caso nao tenha vencedor, [] == truthy, == false compara primitivamente, transforma o [] em [''] atraves do toString(); 
    //vencedor != false && vencedor.length < 2 ? console.log(vencedor[0].nome) : console.log(`NINGUEM`);
}