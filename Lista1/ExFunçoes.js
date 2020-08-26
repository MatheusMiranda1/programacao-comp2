function principal(){
    var nro1 = Number(prompt(`Informe um número`))
    var nro2 = Number(prompt(`Informe outro número`))
    var result = soma(nro1, nro2)
    console.log(`A soma é ${result}`)
}

function soma(x, y){
    return x + y
}