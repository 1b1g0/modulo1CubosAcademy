const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function posicao(livro,livros){
    return (livros.indexOf(livro) + 1)
}
console.log(`O livro está na posição ${posicao(nomeDoLivro,livros)}`);