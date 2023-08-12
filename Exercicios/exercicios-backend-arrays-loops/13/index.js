// const disjuntores = [false, false, true, false, false, true, false, false];
const disjuntores = [false,true,true,false,false,true,false,false,true,true,];
console.log(`\nDisjuntores ligados:`);
for (let i = 0; i < disjuntores.length ; i++){
    if (disjuntores[i]){
        console.log(`| ${i}`)
    }
}