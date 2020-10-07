var conteudo = ""

chefe ()

function chefe() {

    var vetor = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    vetor.forEach(opera) // forEach() é executado para cada elemento do vetor

}

function opera(elemento) {

    conteudo = conteudo + " - " + elemento

}



chefe() 

function chefe() {
    var vetor = [1,2,3,4,5,6,7,8,9,10]
    let novoVetor = vetor.map(potencia)
    console.log(novoVetor)
}

function potencia(elemento, posicao) {
    if (posicao % 2 == 0) {
        return Math.pow(elemento, 2)
    }
    else {
        return elemento
    }
}



// criar variaveis do tipo função

let b = function(x, y) {
    return x + y
}

console.log(b(10, 20))



// li = limite inferior
// ls = limite superior
let intervalo = function(li, ls) {
    let soma = 0
    for (let i = li; i <= ls; i++) {
        soma = soma + i
    }
    return soma
}

console.log(intervalo(10,20))




function chefe() {

    // vamos ultilizar a função forEach()

    var vetor = [1,2,3,4,5,6,7,8,9,10]

    // exemplo de forEach
    vetor.forEach(exe1)

    // exemplo de map
    var novo = vetor.map(exe2)
    console.log(novo)

    // exemplo de filter
    var novo2 = vetor.filter(exe3)
    console.log(novo2)

    // exemplo de filter
    var novo3 = vetor.filter(exe4)
    console.log(novo3)

    // exemplo de reduce
    var soma = vetor.reduce(exe5)
    console.log(`Total da soma ${soma}`)

    // exemplo de reduce
    var vetor2 = [3,2,4]
    var soma2 = vetor2.reduce(exe6)
    console.log(`Total da soma ${soma2}`)

}

function exe1(elemento, posicao) {
    if (posicao % 2 == 1) {
        console.log(`${elemento} esta em posição impar`)
    }
}

function exe2(elemento) {
    return elemento + 10
}

function exe3(elemento) {
    return elemento >= 5
}

function exe4(elemento, posicao) {
    return (elemento <= 3) && (posicao <= 3)
}

// exe5(1, 2)
// exe5(3, 3)
// exe5(6, 4)
// exe5(10, 5)
// exe5(15, 6)
// exe5(21, 7)
// exe5(28, 8)
// exe5(36, 9)
// exe5(45, 10) -> retorna 55

function exe5(total, elemento) {
    console.log(`Valores parciais do total ${total}`)
    return total + elemento
}

// [3,2,4]
// exe6(3, 2, 1) => (4 * 3) - (3*2) = 6
// exe6(6, 4, 2) => (6 - (5 * 4)) = -14

function exe6(total, elemento, posicao) { // a posição é do elemento e não do total
    if(posicao == 1) { // se for o primeiro elemento
        return ((total + 1) * total) - ((elemento + 1) * elemento)
    }
    return total - ((elemento + 1) * elemento)
}