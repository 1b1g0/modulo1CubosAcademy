
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo(){
        let total = 0;
        let quantidadeT = 0;
        for (valor of this.produtos){
            //console.log(valor);
            total += (valor.precoUnit * valor.qtd);
            quantidadeT += valor.qtd;
        }
        //console.log(carrinho);
        console.log(`Cliente: ${carrinho.nomeDoCliente}\nTotal de itens: ${quantidadeT} itens\nTotal a pagar: R$${(total / 100).toFixed(2)}`)
    },
    imprimirDetalhes(){
        const total =(this.produtos.forEach(i => {
            i.precoUnit
        })); 

    },
    addProduto(item){
        //percorrer o array de produtos para checar se o produto já existe no carrinho.
        for (i in this.produtos){
            console.log(i)
            // índice(i)
            if (this.produtos[i].id === item.id){
                this.produtos[i].qtd += item.qtd;
                break;
            // após a última iteração, adicionar item.
            } else if (i == (this.produtos.length - 1)){
                this.produtos.push(item);
            } 
        }
    }
    
}
carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
console.log("\n", carrinho.produtos)