const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova){
    let acertos = 0;
   
    for(q of prova.questoes){
        if(q.resposta == q.correta){
            acertos++;
        } 
    }
    const nota = acertos * 2;
    console.log(`O alunx ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`);
    
}
corrigirProva(prova)