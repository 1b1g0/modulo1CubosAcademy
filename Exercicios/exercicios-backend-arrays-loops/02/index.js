const letras = ["A", "a", "B", "C", "E", "e"];

const msgNegativa = `Nenhuma letra "E" ou "e" foi encontrada.`;
let letrasE = 0;
let letrasEmin = 0;

letras.forEach(i => {
    if (i == 'e' || i == 'E') {
        letrasE = letrasE + 1;
    }
});

letrasE > 0 ? console.log(`Foram encontradas ${letrasE} letras "E" ou "e".`) :
    console.log(msgNegativa);




