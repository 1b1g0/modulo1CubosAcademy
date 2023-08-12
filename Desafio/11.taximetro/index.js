function solucao(min, km) {
    //seu codigo aqui
    // inicialmente, 50 centavos por minuto de viagem e mais 70 centavos por cada quilomtro de viagem realizado.
    // Caso a viagem tenha mais de 10km, cada km adicional (acima de 10) fica mais barato, passando a custar apenas 50 centavos por km.
    // Caso a viagem dure mais de 20min, cada min adicional (acima de 20) fica mais barato, passando a custar apenas 30 cetavos por minuto.
    
    let totalMin = 0, totalKm = 0;
    const precoInicialMin = 50, precoAdicionalMin = 30, precoInicialKm = 70, precoAdicionalKm = 50;
    const limiteKm = 10, limiteMin = 20;
    
    // refatorar pra adicionar no github, funcoes separadas que fazem o adicional.
    if (min > limiteMin && km > limiteKm ) {
        // adicional de minutos e km
        totalMin += (min - limiteMin) * precoAdicionalMin;
        totalMin += limiteMin * precoInicialMin;
        
        totalKm += (km - limiteKm) * precoAdicionalKm;
        totalKm += limiteKm * precoInicialKm;
    } 
    else if (min <= limiteMin && km > limiteKm){ 
        // sem adicional em minutos
        totalKm += (km - limiteKm) * precoAdicionalKm;
        totalKm += limiteKm * precoInicialKm;
        
        totalMin += min * precoInicialMin;
    }
    else if (km <= limiteKm && min > limiteMin){ 
        // sem adicional em km.
        totalMin += (min - limiteMin) * precoAdicionalMin;
        totalMin += limiteMin * precoInicialMin;
        
        totalKm += km * precoInicialKm;
    } else {
        // sem adicionais
        totalKm += km * precoInicialKm;
        totalMin += min * precoInicialMin;
    }
    const total = totalMin + totalKm;
    console.log(total)
}