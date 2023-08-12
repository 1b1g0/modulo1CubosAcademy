const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const at = 'atender', ag = 'agendar';
function atendimento(fila, operacao, nomePaciente){
    //agendar = colocar paciente na fila
    if (operacao == 'agendar' && nomePaciente){
        fila.push(nomePaciente);
        console.log(`Paciente: ${nomePaciente} - Agendamento\nFila: ${fila.join(', ')}`);
    } else if (operacao == 'atender'){
        console.log(`Paciente: ${fila.shift()} - Atendimento\nFila: ${fila.join(', ')}`);
    } else {
        console.log(`Para`)
    }
}atendimento(pacientes,at);