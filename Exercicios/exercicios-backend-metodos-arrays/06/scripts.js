const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
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


function encontrarPet(usr, nomeDoPet){
    for (item in usr) {
        //console.log(usr[item]);
        if(usr[item].pets.includes(nomeDoPet)) {
            log(nomeDoPet,usr[item].nome)
        } 
        else if (item == usr.length - 1){
            log(nomeDoPet)
        }
    }
}
function log(nomeDoPet, dono) {
    dono ? console.log(`O dono(a) do(a) ${nomeDoPet} é o(a) ${dono}`)
    : console.log(`Que pena ${nomeDoPet}, não encontramos seu dono(a)`);
}
encontrarPet(usuarios, 'Naninha');