const email = "alun.o@cubos.academy";

// solução com regex pra exercitar.

// [^] = negar; a-zA-Z0-9 = todos os char normais; $ = final
const rxEspeciaisFinal = /[^a-zA-Z0-9]$/;
// [^] = negar; a-zA-Z0-9 = todos os char normais; ^ = inicio
const rxEspeciaisInicio = /^[^a-zA-Z0-9]/;
// ^ = começo; .* = qlqr char; @ = @; \. = .; $ = final
const rxFormato = /^.*@.*\..*$/;

function validarEmail(eml){
    // se estiver no formato correto + se não possui caractere especial no final e inicio.
    if (eml.match(rxFormato) && !eml.match(rxEspeciaisFinal) && !eml.match(rxEspeciaisInicio)){
        console.log(`E-mail válido`);
    } else {
        console.log(`E-mail inválido`);
    }
}
validarEmail(email);