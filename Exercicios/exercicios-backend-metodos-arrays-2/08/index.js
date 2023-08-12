const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];
const nFrutas = [];
for (i of frutas) {
    let item = i.toLowerCase();
    item = item.replace(item[0],item[0].toUpperCase());
    nFrutas.push(`${frutas.indexOf(i)} - ${item}`);
}

console.log(nFrutas)