function baskara (a,b,c){
    let resultado = []
    delta = b**2 - (4*a*c)
    if( delta< 0){
        return "Delta negativo"
    }
    let x1 = (-b + Math.sqrt(delta))/ 2 * a

    let x2 = (-b - Math.sqrt(delta))/ 2 * a
    resultado.push(x1)
    resultado.push(x2)
return resultado
}
console.log(baskara(1,4,2))
console.log(baskara(2,1,4))
console.log(baskara(1,3,6))
console.log(baskara(3,1,2))
console.log(baskara(1,3,2))