function revenda (carro){
    switch(carro){
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            console.log('Tem certeza que não prefere esse modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}


revenda('hatch')
revenda('sedans')
revenda('motocicletas')
revenda('caminhonetes')
revenda('onibus')