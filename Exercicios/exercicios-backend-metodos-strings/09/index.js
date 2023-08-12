const nome = 'Guido Cerqueira';

function nickGenerator(n){
    let nick = n.toLowerCase().replace(' ','');
    if (nick.length > 13){
        nick = nick.slice(0,12);
    }
    nick = `@` + nick;
    console.log(nick);
}
nickGenerator(nome)