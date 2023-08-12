const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];
const maiorNum = numeros.reduce((a,b) => {
   if(a < b){
    a = b
    } 
    return a 
})
console.log(maiorNum)