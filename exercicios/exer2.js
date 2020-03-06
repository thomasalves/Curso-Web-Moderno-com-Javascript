function triangulo (lado1, lado2, lado3){
    if (lado1 === lado2 && lado2 === lado3 && lado1 == lado3){
        console.log('Esse triângulo é equilatero')

    }else if( lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3){
        console.log('Esse triângulo é Escaleno')

    }else{
        console.log('Esse triângulo é Isoceles')
    }
}

triangulo(1,2,3)
triangulo(1,1,3)
triangulo(2,2,2)
triangulo(1,3,1)
triangulo(1,2,2)
triangulo(1,1.2,1.1)