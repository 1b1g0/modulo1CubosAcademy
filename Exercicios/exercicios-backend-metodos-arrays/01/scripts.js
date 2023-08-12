const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
const frutasInverso = [];

frutas.pop();
frutas.shift();
frutas.push('Melão');

// iterando o array de forma decrescente p montar array inverso.
for (i = frutas.length -1;i >= 0;i--){
    frutasInverso.push(frutas[i]);
}
console.log(frutas.join(', '));
