const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

apelido ? console.log(apelido) :
    sobrenome ? console.log(`${primeiroNome} ${sobrenome}`) :
        console.log(primeiroNome);