const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

const msgNegativa =`Sou`;
const msgP = ``;

for (usr of usuarios){
    usr.pets == 0 ? console.log(`Sou ${usr.nome} e não tenho pets.`) :
        // check pra corrigir caso de plural na msgOut + mostrar o nome do pet.
        usr.pets.length === 1 ? console.log(`Sou ${usr.nome} e tenho ${usr.pets.length} pet, seu nome é ${usr.pets[0]}.`) :
            console.log(`Sou ${usr.nome} e tenho ${usr.pets.length} pets.`);
}