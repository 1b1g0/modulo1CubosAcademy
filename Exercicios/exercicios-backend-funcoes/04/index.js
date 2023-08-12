const { type } = require("os");

const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    salvarHistorico(acao,quantidade){
        const log = {
            tipo: acao,
            valor: quantidade
        }
        this.historicos.push(log);
    },
    depositar (valor){
        const tipoAcao = `Depósito`;
        const msgRetorno  = `${tipoAcao} de R$${(valor / 100).toFixed(2)} realizado para: ${this.nome}`;
        
        //caso decimal, transformar em int e ( *100) - centavos
        if (valor % 1 != 0){
            valor = parseInt(valor * 100);
            //console.log((valor));
        }
        this.saldo += valor;
        // metodo para salvar log
        this.salvarHistorico(tipoAcao,valor)
        console.log(msgRetorno)
    },
    sacar(valor){
        const tipoAcao = `Saque`;
        const msgSaldoInsuficiente = `Saldo insuficiente para o saque de: ${this.nome}`;
        const msgSucesso = `Saque de R$${(valor / 100).toFixed(2)} realizado para: ${this.nome}`;

        //caso decimal, transformar em int e ( *100) - centavos
        if (valor % 1 !== 0){
            valor = parseInt(valor * 100);
            //console.log((valor));
        }

        if (valor > this.saldo){
            console.log(msgSaldoInsuficiente);
        } else {
            this.saldo -= valor
            this.salvarHistorico(tipoAcao,valor);
            console.log(msgSucesso);
        }
    },
    extrato(){    
        const headerExtrato = `\nExtrato de ${this.nome} - Saldo: R$${(this.saldo / 100).toFixed(2)}\nHistórico:`
        console.log(headerExtrato);
        this.historicos.forEach(i => {
            console.log(`${i.tipo} de R$${((i.valor)/100).toFixed(2)}`);
        });

    }

}
contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();