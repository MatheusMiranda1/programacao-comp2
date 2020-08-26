// Exercício 1

function chefe() {
    var nro = Number(prompt(`Informe um número`))
    var result = exe1(nro)
    console.log(`A soma dos números é ${result}`)
}

function exe1(n) {
    var soma = 0
    for (var i = 1; i <= n; i++) {
        soma = soma + i
    }
    return soma
}

chefe()