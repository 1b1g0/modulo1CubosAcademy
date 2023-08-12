const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;
const selecionados = nomes.slice(posicao,posicao + 3);
console.log(`${selecionados.join(' - ')}`);
