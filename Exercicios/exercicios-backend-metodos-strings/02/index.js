const cpf = "12345678900";
const cnpj = "12345678000199";
const idCPF = 'CPF';
const idCNPJ = 'CNPJ';

function formatarDisplay(str) {
    let pt1 = '',pt2 = '',pt3 = '',pt4 = '',pt5 = '';
    if (str.length === 11){
        // montar as vars com as respectivas partes.
        for (n in str) {
            if (n <= 2 ){
                pt1 += str[n];
            } else if (n <= 5 && n > 2) {
                pt2 += str[n];
            } else if (n <= 8 && n > 5) {
                pt3 += str[n];
            } else {
                pt4 += str[n];
            }
        }
        // formatar
        return `${pt1}.${pt2}.${pt3}-${pt4}`;
    }
    else if (str.length === 14){
        // montar as vars com as respectivas partes.
        for (n in str) {
            if (n <= 1 ){
                pt1 += str[n];
            } else if (n <= 4 && n > 1) {
                pt2 += str[n];
            } else if (n <= 7 && n > 4) {
                pt3 += str[n];
            } else if (n <= 11 && n > 7){
                pt4 += str[n];
            } else {
                pt5 += str[n];
            }
        }
        // formatar
        return `${pt1}.${pt2}.${pt3}/${pt4}-${pt5}`;
    }
}

function validar(str,tipo){
    // cpf
    if (str.length === 11 && tipo === 'CPF'){
        console.log(formatarDisplay(str));
    } else if (str.length === 14 && tipo === 'CNPJ') {
        console.log(formatarDisplay(str));
    } else if (tipo == 'CPF') {
        console.log('CPF Inválido');
    } else {
        console.log('CNPJ Inválido');
    }
}
// o log reside na função de validar.
validar(cpf, idCNPJ);