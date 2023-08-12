const jovens = [];
const adultos = [];
const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
for(usr of usuarios){
    usr.idade > 17 ? adultos.push(usr) : jovens.push(usr);
}
console.log(`Os usuários jovens são:`);
jovens.forEach(i => {console.log(`${i.nome} tem ${i.idade}`)});
console.log(`\nAdultos são:`)
adultos.forEach(i => {console.log(`${i.nome} tem ${i.idade}`)});