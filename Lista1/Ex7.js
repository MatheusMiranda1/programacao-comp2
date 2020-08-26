// Exercício 7

function chefe() {
    var soma = 0
    var cont = 0
    do {
        var nro = Number(prompt(`Informe um número`))
        soma = soma + nro
        cont++
        var resp = prompt(`Deseja digitar outro número?`)
    }
    while (resp != 'n')
    var media = exe7(soma, cont)
    console.log(`A média arimétrica desses valores é ${media}`)
}

function exe7(s, i) {
    return s / i
}

chefe()