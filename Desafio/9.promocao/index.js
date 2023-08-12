function solucao(precos) {
    //seu codigo aqui
      const quantidadeProdutos = precos.length;
      if (quantidadeProdutos > 2){
          // ordenando e selecionando o menor, shift pq ele REMOVE o item do array.
          let menorValor = precos.sort((a,b) => a-b).shift();
          let novoValor = menorValor * 0.5;
          // voltar o produto com o desconto aplicado
          precos.push(novoValor);
          //console.log(precos, menorValor)
      } 
      console.log(precos.reduce((acumulador,atual) => acumulador + atual));
  }