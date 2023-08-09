function processData(input) {
    // Enter your code here 
    const primeiraLetra = input.slice(0,1);
    const restantePalavra = input.slice(1,input.length);
    
    if (primeiraLetra == primeiraLetra.toLowerCase() && restantePalavra == restantePalavra.toUpperCase()){
        console.log(primeiraLetra.toUpperCase() + restantePalavra.toLowerCase());
    } 
    else if (input == input.toUpperCase()){
        console.log(input.toLowerCase());
    } 
    else {
        console.log(input)    
    }
    
    
    //console.log(primeiraLetra + restantePalavra)
} 
