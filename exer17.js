function Aumento(salario, plano){
    switch(plano){
        case 'A':
        console.log(`salario novo ${salario+(salario*0.1)}`)
        break  
        case 'B':
            console.log(`salario novo ${salario+(salario*0.15)}`)
            break 
        case 'C':
            console.log(`salario novo ${salario+(salario*0.2)}`)
            break 
        default:
            console.log('Plano invalido')
    }
}

Aumento(1000,'A')
Aumento(1000,'B')
Aumento(1000,'C')
Aumento(1000,'D')