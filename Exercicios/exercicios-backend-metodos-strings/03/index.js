const texto = "Aprenda programar do zero na Cubos Academy";
function montarURL(txt){
    let nTxt = '';
    nTxt = txt.toLowerCase();
    // regex \s = espaço em branco. g = global
    return nTxt.replace(/\s/g, `-`)
}
console.log(montarURL(texto));