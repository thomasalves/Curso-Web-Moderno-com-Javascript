function Bissexto (ano){
    if(ano % 4 == 0 || ano % 400 == 0){
        console.log(true)
    }else{
        console.log(false)
    }
}

Bissexto(1290)
Bissexto(2020)
Bissexto(1510)
Bissexto(120)
Bissexto(2016)

