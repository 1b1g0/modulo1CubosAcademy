/*
const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"]; 
*/

const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

//console.log(filaDeDentro.length);
while (filaDeDentro.length < 5) {
    filaDeDentro.push(filaDeFora[0]);
    filaDeFora.splice(0,1);
}
console.log(`Fila dentro:\n${filaDeDentro}\nFila Fora:\n${filaDeFora}`);