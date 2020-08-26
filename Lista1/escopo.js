
// se n for 3: soma de 1 + 2 + 3 -> 6
// se n for 8: soma de 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 -> 36
// variáveis com escopo local
function exe1(n) {
    var soma = 0
    for (var i = 1; i <= n; i++) {
        soma = soma + i
    }
    return soma
}
// variáveis com escopo local
function chefe() {
    var nro = Number(prompt(`Informe um número`))
    var result = exe1(nro)
    console.log(`A soma dos números é ${result}`)
}

chefe()



// variáveis com escopo global
// podem ter escopo global vetores e objetos

// variáveis com escopo global - vet
function entrada(vet) {
    vet.push(8)
    vet.push(6)
    vet.push(7)
}
// variáveis com escopo global - vet
function soma10(vet) {
    for (var i = 0; i < vet.length; i++) {
        vet[i] = vet[i] + 10
    }
}

// exemplo com vetor
function chefe() {
    var vetor = []
    entrada(vetor)
    console.log(vetor) // qual o valor do vetor aqui
    soma10(vetor)
    console.log(`Valor final do vetor ${vetor}`) // qual o valor do vetor
}

chefe()


function chefe() {
    var carro = new Object()
    compra(carro)
    console.log(carro) // qual o valor do carro aqui
}

function compra(obj) {
    obj.modelo = 'Renegade'
    obj.marca = 'Jeep'
    obj.ano = 2019
}

chefe()

function cadastra(vet) {
    // cria o objeto
    var objeto = new Object
    objeto.codigo = Number(prompt(`Informe código`))
    objeto.qtde = Number(prompt(`Informe código`))
    objeto.preco = Number(prompt(`Informe código`))
    objeto.nome = prompt(`Informe código`)
    // insere objeto no vetor
    vet.push(objeto)
}

function mostra(vet) {
    for (var i = 0; i < vet.length; i++) {
        console.log(vet[i])
    }
}

function chefe() {
    var vetor = []
    do {
        var opcao = Number(prompt("Digite uma opção \n [1]. Cadastra \n [2]. Consultar \n [3]. Sair"))
        switch(opcao) {
            case 1: cadastra(vetor)
            break
            case 2: mostra(vetor)
            break
            case 3: console.log(`Até logo`)
            break
            default: console.log(`Opção Inválida`)
        }
    }
    while (opcao != 3)
}

chefe()