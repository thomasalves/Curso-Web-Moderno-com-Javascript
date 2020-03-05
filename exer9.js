function SistemaDeNotas(nota){
    let notaCorrigida = ArredondarNota(nota)
    if(notaCorrigida >= 40){
        console.log('Aluno Aprovado!')
    }else{
        console.log('Aluno reprovado')
    }
}

function ArredondarNota (nota){
    if( nota % 5 > 2){
        return nota + ( 5- (nota % 5))
    } else {
        return nota
    }
}

SistemaDeNotas(100)
SistemaDeNotas(30)
SistemaDeNotas(38)
SistemaDeNotas(88)
SistemaDeNotas(62)
SistemaDeNotas(34)