function VenderFruta(fruta){
    switch(fruta){
        case 'maca':
            console.log('Não vendemos essa fruta!')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('erro no console')
    }
}

VenderFruta('maca')
VenderFruta('kiwi')
VenderFruta('melancia')
VenderFruta('abacaxi')
