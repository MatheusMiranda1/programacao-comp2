
// Busca por uma bicicleta no vetor a partir de um código informado pelo usuario
var codigo = Number(prompt(`Informe código`))
console.log(vet.filter((objeto) => (objeto.codigo == codigo))) // faz o for


// 3. Calcula a soma dos valores das bicicletas em estoque
let soma = function(vet){
    // inicializa a soma com 0
    let result = vet.reduce(soma2, 0) // executando um for ou while
    console.log(`A soma é ${result}`)
}

// soma2(0, 10)
// soma2(10, 20) -> 30
function soma2(acumulador, objeto){
    return acumulador + objeto.valor
}

soma(vetor)

var marca
// 4.	Mostra todas as bicicletas de uma marca informada pelo usuário
let mostra = function(vet){
    marca = prompt(`Informe a marca`)
    let novos = vet.filter(mostra2) // retorna os que dão certo
    console.log(novos)
}

function mostra2(objeto){
    return objeto.marca == marca
}

mostra(vetor)

// 5.	Soma o valor 3 em todas os aros das bicicletas cadastradas

let soma3 = function(vet){
    let novos = vet.map(soma32) // faz o for ou o while
    console.log(novos)
}

function soma32(objeto){
    objeto.aro = objeto.aro + 3
    return objeto
}

soma3(vetor)

// 6.	Mostra a bicicleta mais velha

let vetor = []

// nova forma de criarmos uma função -> variavel e uma função
// função para cadastro
let cadastra = function(vet){
    var objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código`))
    objeto.aro = Number(prompt(`Informe o aro`))
    objeto.modelo = prompt(`Informe o modelo`)
    objeto.marca = prompt(`Informe a marca`)
    objeto.valor = Number(prompt(`Informe o valor`))
    objeto.ano = Number(prompt(`Informe o ano`))
    // insere no vetor
    vet.push(objeto)
    console.log(`Bicicleta inserida com sucesso`)
}
cadastra(vetor)
cadastra(vetor)
cadastra(vetor)

var maior = vetor[0].ano // bike mais velha é a primeira

let maisVelha = function(vet){
    let idosa = vet.forEach(maisVelha2)
    console.log(`A bicicleta mais velha é ${maior}`)
}

function maisVelha2(objeto){
    if(objeto.ano < maior){
        maior = objeto.ano
    }
}

maisVelha(vetor)