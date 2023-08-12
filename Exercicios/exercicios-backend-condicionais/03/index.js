const ladoA = 1;
const ladoB = 1;
//seu código aqui
if ((typeof ladoA !== typeof 1 ) || (typeof ladoB !== typeof 1)){
    console.log('Por favor revise seu input.');
} else if (ladoA == ladoB){
    console.log('SIM');
}else {
    console.log('NAO');
}