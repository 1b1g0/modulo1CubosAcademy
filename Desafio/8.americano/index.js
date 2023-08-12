function solucao(numeros) {
    // seu codigo aqui
   const jogadoresNoTime = numeros.length;
   const soma = numeros.reduce((acumulado, atual) => acumulado + atual);
   //console.log(soma)
   // vai de 0 ate jogadoresNoTime
   let iterador = 0;
   
   // iterando pelos jogadores numero de vezes = a soma dos numeros escolhidos
     for (let i = 0; i <= soma; i++){
         // se for a ultima iteracao
         if (i == soma){
             console.log(iterador);
           } // se nao for a ultima iteracao: 
         else { 
           // se for o ultimo jogador(valor do ar), voltar para o primeiro
           if (iterador == jogadoresNoTime){
               iterador = 1;
               } else if (iterador < jogadoresNoTime) { //nao eh o ultimo jogado iterado + 1
                   iterador++;
               }
           }
       }
}