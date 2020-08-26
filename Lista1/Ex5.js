// Exercício 5

function chefe() {
    var nro = Number(prompt(`Informe um número inteiro`))
    var result = exe5(nro)
    console.log(`O número digitado é ${result}`)
}

function exe5(n) {
    if (n >= 0) {
        return 'positivo'
    }
    else {
        return 'negativo'
    }
}

chefe()