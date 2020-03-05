function calculadora (num1,sinal, num2){
    switch(sinal){
        case '+':
            console.log(`${num1 + num2}`)
            break
        case '-':
            console.log(`${num1 - num2}`)
            break
        case '/':
            console.log(`${num1 / num2}`)
            break
        case '*':
            console.log(`${num1 * num2}`)
            break
        default:
            console.log('Operação invalida!')

    }
}

calculadora(2,'+',3)
calculadora(2,'-',3)
calculadora(2,'/',3)
calculadora(2,'*',3)
calculadora(2,'%',3)