const celular = 12999188888;
function formatarCel(nCel){
    let pt1 = '', pt2 = '',pt3 = '',pt4 = '';
    if (nCel.length < 10) {
        //sem ddd
        for (n in nCel){
            if (n < 1){
                pt1 += nCel[n];
            } 
            else if (n > 0 && n < 5){
                pt2 += nCel[n];    
            }
            else {
                pt3 += nCel[n]
            }
        }
        return `${pt1} ${pt2}-${pt3}`; 
    } else if (nCel.length == 11) {
        for (n in nCel){
            if (n < 2){
                pt1 += nCel[n];
            } 
            else if (n > 1 && n < 3){
                pt2 += nCel[n];    
            }
            else if (n > 2 && n < 7){
                pt3 += nCel[n]
            } else {
                pt4 += nCel[n]
            }
        }
        return `(${pt1}) ${pt2} ${pt3}-${pt4}`;
    } else {
        return `Input inválido`;
    }
}
console.log(formatarCel(celular.toString()));