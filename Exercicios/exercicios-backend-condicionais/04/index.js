
const ladoA = 2;
const ladoB = 2;

const nomesBucha = ['Branco', 'Ás', 'Duque', 'Terno', 'Quadra', 'Quina', 'Sena'];
//seu código aqui
if ((typeof ladoA !== typeof 1 ) || (typeof ladoB !== typeof 1)){
    console.log('Por favor revise seu input.');
} else if (ladoA > 6 || ladoB > 6){
    console.log(`Não existe peça com o número ${ladoA}|${ladoB}`);
} else if (ladoA == ladoB){
    console.log(`Bucha de ${nomesBucha[ladoA]}`);
} else {
    console.log('Não é uma Bucha.');
}