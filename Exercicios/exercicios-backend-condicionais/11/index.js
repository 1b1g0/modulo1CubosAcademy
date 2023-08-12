//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

const custoDoCurso = 180000;
const valorParcela = 0.18 * rendaMensalEmCentavos;

const parcela0 = 'O valor da parcela desse mês é R$ 0 reais.';

const msgValorParcela = `O valor da parcela desse mês é R$ ${(valorParcela / 100).toFixed(2)} reais.`;
const msg60Meses =  parcela0 + '\nNenhum valor é devido pois já se passaram 60 mesese de contrato.';
const msgRenda = parcela0 + '\nNenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000,00 reais.';
const msgPago = parcela0 + '\nNenhum valor é devido pois o valor devido já foi quitado!'

mesesDecorridos == 60 ? console.log(msg60Meses) :
    rendaMensalEmCentavos < 200000 ? console.log(msgRenda) :
        totalJaPagoPeloAluno  < custoDoCurso ? console.log(msgPago) :
        console.log(msgValorParcela);
