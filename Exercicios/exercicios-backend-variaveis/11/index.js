const { inputDados, closeInterface } = require('../utils.js');


const msg = 'Diâmetro da esfera: ';
(async () =>{
    const d = await inputDados(msg); 
    closeInterface();
    const r = d / 2;
    const v = (4/3) * ((r)**3);
   
    console.log(`O volume de uma esfera de raio ${r} é ${v} π`);
})();