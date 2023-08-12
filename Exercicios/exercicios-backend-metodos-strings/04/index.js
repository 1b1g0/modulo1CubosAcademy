let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";


// corrigir ID pra 6 dígitos.
function corrigirId(id) {
    if(id.length < 6){
        for (;id.length < 6;) {
            id = '0' + id
            //console.log(identificador);
        }
    }
    return id;
}

// definitivamente tem forma mais fácil de fazer isso.
function corrigirNome(nome){
    const nomeCap = [];
    const nomesSep = nome.split(' ');
    nomesSep.forEach(nome => {
        if (nome[0] == nome[0].toUpperCase()){
            /* se o nome já estiver com letra maiuscula,
            add no arr de nomes novos. */
            console.log('maiuscula')
            nomeCap.push(nome);
        } 
        else {
            // separando a primeira letra do nome para depois remontar o nome = i
            let primeiraMaiuscula = nome.charAt(0).toUpperCase();
            let restante = nome.slice(1);
            // remontando o nome
            let nomeCorreto = primeiraMaiuscula + restante;
            //add o nome correto no array
            nomeCap.push(nomeCorreto);
            console.log(nomeCap)
        }
    })
    return nomeCap.join(' ');
}

function corrigirEmail(email){
    const rex = /\s/g;
    let nMail = email.replace(rex, '');
    return nMail
}

/* ------------------------------------------ */
console.log(corrigirId(identificador), corrigirNome(nome), `\nEmail:`,corrigirEmail(email));