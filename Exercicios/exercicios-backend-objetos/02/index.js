const carros = [{
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2022,
    cor: "vermelho",
    quantidade_portas: 4,
    automatico: true
},
{
    marca: "Volkswagen",
    modelo: "Golf",
    ano: 2021,
    cor: "vermelho",
    quantidade_portas: 2,
    automatico: false
},
{
    marca: "Land Rover",
    modelo: "Defender",
    ano: 2019,
    cor: "cinza",
    quantidade_portas: 4,
    automatico: false
}
];
console.log(`Os modelos são: ${carros[0].modelo} e ${carros[1].modelo} da ${carros[0].marca} e ${carros[2].marca} ${carros[2].modelo} `);