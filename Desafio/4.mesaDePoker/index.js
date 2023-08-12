function solucao(min, max, valores) {
    //seu codigo aqui
    const jogadoresPermitidos = valores.filter(valor => valor <= max && valor >= min);
    console.log(jogadoresPermitidos);
  }