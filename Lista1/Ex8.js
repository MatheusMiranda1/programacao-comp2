// Exercício 8

function chefe() {
    var nro = Number(prompt(`Informe um número`))
    var result = exe8(nro)
    console.log(`O fatorial desse número é ${result}`)
}

function exe8(N) {
    var fatorial = 1
    for (var i = 1; i <= N; i++) {
        fatorial = fatorial * i
    }
    return fatorial
}

chefe()