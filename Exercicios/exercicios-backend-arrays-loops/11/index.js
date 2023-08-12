const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];
//entre 10 e 20 || maiores q 100
const novo = [];
original.forEach(n =>{
    if ((n >= 10 && n <= 20) || n >= 100){
        novo.push(n);
    }
});
console.log(novo);
