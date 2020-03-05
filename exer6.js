function Juros_simples(capital, juros, tempo){
    return capital + capital*juros*tempo
}

function Juros_compostos(capital, juros, tempo){
    return capital* (1 + juros) ** tempo
}

console.log(Juros_simples(1,0.15, 20))
console.log(Juros_compostos(1,0.15,20))