const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function dividirEmGrupos(pessoas, pessoasPorGrupo){
    for (i in pessoas){
        i = parseInt(i);
        let grp = i + 1;
        // forma não tão legível porém, acredito funcionar com diferentes inputs.
        console.log(`Grupo ${grp}: ${pessoas.slice(i, pessoasPorGrupo + i).join(', ')}.`)
        pessoas.splice(i,pessoasPorGrupo - 1);
    }
}
dividirEmGrupos(nomes,tamanhoDoGrupo)