

// ES 5
var soma5 = function(x, y){
    return x + y
}

console.log(`A soma de 2 números é ${soma5(3, 8)}`)

// ES 6 - arrow function - função com seta
var soma6 = (x, y) => (x + y)

console.log (`A soma de 2 números é ${soma6(3, 8)}`)

var vetor = [10, 20, 30, 40, 50]

var soma = 0
// estamos chamando a função forEach e passando uma outra função como parâmetro
// chamando e definindo a função ao mesmo tempo -> função anônima
vetor.forEach(
    (elemento) => soma = soma + elemento
)

console.log(`A soma dos elementos do vetor é ${soma}`)


// antes da seta vem os parâmetros da função anônima (sem nome)
// depois da seta vem a implementação da função anônima (sem nome)
// Questão 1
var numeros = [2, 4, 6, 2, 8, 4, 9]

var resultado = numeros.find( (elemento) => elemento == 2)

console.log(resultado) //

// Questão 2
var numeros = [2, 4, 6, 2, 8, 4, 9]

var resultado = numeros.filter( (elemento) => elemento == 2)

console.log(resultado) //

// mostra todos os elementos que estão na posição ímpar do vetor
var numeros = [2, 4, 6, 2, 8, 4, 9]
console.log(numeros.filter( (elemento, posicao) => posicao % 2 == 1))