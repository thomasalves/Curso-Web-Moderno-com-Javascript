function semana (dia){
    switch (dia % 7){
        case 1:
            console.log('domingo')
            break
        case 2:
            console.log('segunda')
            break
        case 3:
            console.log('terça')
            break
        case 4:
            console.log('quarta')
            break
        case 5:
            console.log('quinta')
            break
        case 6:
            console.log('sexta')
            break
        case 7:
            console.log('sabado')
            break
    }
    
}

semana(3)
semana(2)
semana(21)
semana(54)
semana(15)
semana(4)