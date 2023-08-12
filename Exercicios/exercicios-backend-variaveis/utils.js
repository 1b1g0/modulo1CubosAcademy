   // Charme de limpar as linhas de prompt
const consClear = (i) => {
     for (;i > 0;i--){
    // \x1B[1A -> sobe o cursor do terminal 1 linha
    // \x1B[2K -> apaga a linha atual do cursor
    // (scape sequence) começa com \ 
    process.stdout.write(`\x1B[1A\x1B[2K`);
    }
}
exports.consClear = consClear

//tentativa de modularizar o readline e simplificar as interações com o console nos exercícios.
const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
exports.inputDados = (perguntaConsole) => {
   return new Promise((resolve)=>{
      rl.question(perguntaConsole, (valor) =>{
         resolve(valor);
      });
   });
};
exports.closeInterface = () => {
   rl.close();
};