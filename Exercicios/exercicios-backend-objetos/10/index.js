// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }
// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

function adicionarItem(itemSelec, numeroDeItens){
    // caso não seja fornecido unidades, = 1
    if (numeroDeItens == undefined){
        numeroDeItens = 1;
    }

    itemCarrinho = {
        item : itemSelec
    }

    itemCarrinho.unidades = numeroDeItens;
    return itemCarrinho;
}

// a. Adicione uma tv, dois cabos usb e uma webcam para o José
jose.carrinho.push(adicionarItem(tv), adicionarItem(webcam), adicionarItem(caboUsb, 2));

// b. Adicione dois notebooks para o Carlos
carlos.carrinho.push(adicionarItem(notebook, 2));

// c. Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia
patricia.carrinho.push(adicionarItem(teclado), adicionarItem(carregador), adicionarItem(mouse), adicionarItem(monitor), adicionarItem(caboUsb, 2));

// d. Adicione cinco webcams para o Renato
renato.carrinho.push(adicionarItem(webcam, 5));

// e. Adicione uma webcam, dois cabos usb e um monitor para o Roberto
roberto.carrinho.push(adicionarItem(webcam), adicionarItem(caboUsb, 2), adicionarItem(monitor));


