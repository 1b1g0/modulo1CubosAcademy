const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

curso.aulas.push({identificador: 1, nomeDaAula:'Introdução a programação'});
curso.aulas.push({identificador: 2, nomeDaAula:'Variáveis'}); 
curso.aulas.push({identificador: 3, nomeDaAula:'Condicionais'});
curso.aulas.push({identificador: 4, nomeDaAula:'Arrays'});

console.log(curso);