// Exercício 9

function chefe() {
    var nro = Number(prompt(`Informe um número (esse número deve ser inteiro e positivo)`))
    var result = exe9(nro)
    console.log(`O resultado da soma dos divisores desse número é ${result}`)
}

function exe9(n) {
    var soma = 0
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            soma = soma + i
        }
    }
    return soma
}

chefe()