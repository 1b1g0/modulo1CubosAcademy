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
// add propriedade: maiorIdade em cada obj da lista;
for (usr of usuarios){
    usr.idade >= 18 ? usr.maiorIdade = true : usr.maiorIdade = false;
}
console.log(usuarios)