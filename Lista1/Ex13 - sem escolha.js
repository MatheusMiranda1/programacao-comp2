function chefe() {
    var habitantes = []
    pesquisa(habitantes)
    var media = mediaSalario(habitantes)
    console.log(`A média dos salários é R$ ${media.toFixed(2)}`)
    var idadeMenor = menorIdade(habitantes)
    var idadeMaior = maiorIdade(habitantes)
    console.log(`A menor idade é ${idadeMenor} e a maior é ${idadeMaior}`)
    var qtde = qtdeMulheres(habitantes)
    console.log(`A quantidade de mulheres com 3 filhos que ganham ate R$ 500.00 é ${qtde} `)
}

function pesquisa(vet) {
    for (var i = 0; i < 15; i++) {
        var habitante = new Object()
        habitante.idade = Number(prompt(`Informe uma Idade`))
        habitante.sexo = prompt(`Informe um sexo`)
        habitante.salario = Number(prompt(`Informe uma salário`))
        habitante.filhos = Number(prompt(`Informe a quantidade de filhos`))
        vet.push(habitante)
    }
}

function mediaSalario(vet) {
    var soma = 0
    for (var i = 0; i < 15; i++) {
        soma = soma + vet[i].salario
    }
    return soma / vet.length
}

function menorIdade(vet) {
    var Imenor = vet[0].idade
    for (var i = 1; i < 15; i++) {
        if (vet[i].idade < Imenor) {
            Imenor = vet[i].idade
        }
    }
    return Imenor
}

function maiorIdade(vet) {
    var Imaior = vet[0].idade
    for (var i = 1; i < 15; i++) {
        if (vet[i].idade > Imaior) {
            Imaior = vet[i].idade
        }
    }
    return Imaior
}

function qtdeMulheres(vet) {
    var cont = 0
    for (var i = 0; i < 15; i++) {
        if (((vet[i].sexo == 'F') && (vet[i].filhos == 3) && (vet[i].salario <= 500))) {
            cont++
        }
    }
    return cont
}

chefe()