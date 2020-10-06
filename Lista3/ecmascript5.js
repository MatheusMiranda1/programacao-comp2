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