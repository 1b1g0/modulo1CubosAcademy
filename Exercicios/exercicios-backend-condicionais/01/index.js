const jogada1 = "pedra"
const jogada2 = "tesoura"
const arrJogadas = ['pedra','papel','tesoura'];

//seu código aqui
if (jogada1 == jogada2)
    console.log('Empate');

//pedra
if ((jogada1 == arrJogadas[0] ) && ( jogada2 == arrJogadas[1]))
    console.log(arrJogadas[1]);

    else if ((jogada1 == arrJogadas[0]) && (jogada2 == arrJogadas[2]))
        console.log(arrJogadas[0]);

//papel
if ((jogada1 == arrJogadas[1]) && (jogada2 == arrJogadas[0]))
    console.log(arrJogadas[1]);

    else if ((jogada1 == arrJogadas[1]) && (jogada2 == arrJogadas[2]))
        console.log(arrJogadas[2]);

//tesoura
if ((jogada1 == arrJogadas[2]) && (jogada2 == arrJogadas[0]))
    console.log(arrJogadas[0]);
    
    else if ((jogada1 == arrJogadas[2]) && (jogada2 == arrJogadas[1]))
        console.log(arrJogadas[2]);