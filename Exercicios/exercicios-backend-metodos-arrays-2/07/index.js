const endereços = [
    { cep: `00111222`, rua: "Rua dos Artistas" },
    { cep: `00111333`, rua: "Rua Augusta" },
    { cep: `00222444`, rua: "Avenida Paralela" },
    { cep: `11222333`, rua: "Rua Carlos Gomes" },
  ];
const cepBusca = `00222444`;

function buscaCep(listaEnd, cep){
    return listaEnd.find(i => i.cep == cep)
}
console.log(buscaCep(endereços,cepBusca).rua)