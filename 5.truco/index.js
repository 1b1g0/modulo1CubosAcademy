function solucao(carta) {
    //seu codigo aqui
    const baralho = ['Q', 'J', 'K', 'A', '2', '3'];
    const indiceCarta = baralho.indexOf(carta);
    let manilha = baralho[indiceCarta];
    manilha == '3' ? manilha = baralho[0] : manilha = baralho[indiceCarta + 1];
    
    console.log(manilha)
}