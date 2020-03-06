let pontos = "10, 20, 26, 5, 25, 3, 0, 3, 1, 21"
 
function avaliapontuacao(pontos){
    let pontuacoes = pontos.split(", ")
    let quebraDeRecorde = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]
    let vetor = pontuacoes.length
    //console.log (vetor)
    for (let i= 1; i < vetor; i++) {

        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            //console.log(pontuacoes[i])
            quebraDeRecorde++
        }
        else if (pontuacoes[i]< menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo =i+1;
        }else{
            continue
        }
    }
    return [quebraDeRecorde, piorJogo ]
}

console.log(avaliapontuacao(pontos))
//console.log(pontos)

