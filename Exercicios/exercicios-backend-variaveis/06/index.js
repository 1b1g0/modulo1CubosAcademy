const { consClear, inputDados, closeInterface } = require('../utils.js');

const msg1 = 'Qual a distância percorrida? (Metros)\n';
// Minutos pq acho que vou usar esse algoritmo haha
const msg2 = 'E quanto tempo levou? (Minutos)\n';

(async () => {
    //dist em metros
    const distPercorrida = await inputDados(msg1);
    //tempo em segundos
    const tempo = await inputDados(msg2);
    consClear(4);
    const velocidadeMS = distPercorrida / (tempo * 60);
    const velocidadeKmH = (velocidadeMS * 3.6);
    console.log(`\nVocê percorreu ${distPercorrida} metros em ${tempo} minutos,\na uma velocidade média de: ${velocidadeKmH.toFixed(1)} Km/h\n`);

    closeInterface();
    process.exit();
})();
