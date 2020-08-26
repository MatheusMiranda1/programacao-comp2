// Exercício 6

function chefe() {
    var altura = Number(prompt(`Informe a sua altura`))
    var sexo = prompt(`Informe o seu sexo (M/F)`).toUpperCase()
    var pesoIdeal = exe6(altura, sexo)
    if (pesoIdeal == 'erro') {
        console.log(`sexo inválido`)
    }
    else {
    console.log(`O seu peso ideal é ${(pesoIdeal).toFixed(2)} kg`)
    }
}

function exe6(alt, sex) {
    if (sex == 'M') {
        return (72.7 * alt) - 58 
    }
    else if (sex == 'F') {
        return (62.1 * alt) - 44.7
    }
    else {
        return 'erro'
    }
}

chefe()