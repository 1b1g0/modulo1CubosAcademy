function solucao(lista) {
    //seu codigo aqui
  const total = lista.reduce((acumulador, atual) => acumulador + atual);
  const numeroDeDias = lista.length;
  const media = total / numeroDeDias;
  console.log(media)
}