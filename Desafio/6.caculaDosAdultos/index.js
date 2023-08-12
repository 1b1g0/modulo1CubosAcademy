function solucao(lista) {
      const menores = 'CRESCA E APARECA';
      // mais nova dentre os que podem participar, >= 18
      const listaOrd = lista.sort((a,b) => a - b);
      const maisNovo = lista.find(idade => idade >= 18);
      maisNovo ? console.log(maisNovo) : console.log(menores);
  }