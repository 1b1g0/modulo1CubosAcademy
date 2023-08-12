const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarAtendimento(fila, nome){
    fila.push(nome);
    logFila(fila);
}

function atenderPaciente(fila){
    console.log(`Paciente atendido:`,fila.shift());
    logFila(fila);
}

function cancelarAtendimento(fila,nomeCancelar){
    const indiceNome = fila.indexOf(nomeCancelar);
    console.log(`Paciente a ser removido da fila: ${fila[indiceNome]}`)
    fila.splice(indiceNome, 1);
    logFila(fila); 
}
function logFila(fila){
    console.log(`Fila atua: ${fila.join(', ')}`)
}
agendarAtendimento(pacientes,'zé');
atenderPaciente(pacientes);
cancelarAtendimento(pacientes,'Ana')