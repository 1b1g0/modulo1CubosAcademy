function processData(input) {
    // Por exemplo, se a senha for cubos e for digitado cuggbyos, o cofre ira abrir.
    /* 
    primeira linha estara a senha correta, de ate S caracteres 
    segunda linha estara a palavra digitada pela pessoa, de ate N caracteres
    S <= 10**3
    N <= 10**5
    */
    const abre = 'SIM';
    const n = 'NAO';
    
    const senha = input.split('\n').slice(0,1).toString();
    const tentativa = input.split('\n').slice(1,2).toString()
    let itSenha = 0;    
    let leitura = [];

    //console.log(senha, tentativa)
    for (char in tentativa){
        if (tentativa[char] == senha[itSenha]) {
            itSenha++;
            leitura.push(tentativa[char]);
        }
    }
    leitura.join('') == senha ? console.log(abre) : console.log(n);
    //console.log(leitura.join(''))
} 