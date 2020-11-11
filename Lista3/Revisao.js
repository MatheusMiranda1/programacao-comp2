// exemplo do map
let vetor = [1, 2, 4]
// o map devemos utilizar o return para alterar o vetor
let novo = vetor.map( (elemento) => {
    return elemento + 10
})
console.log(novo)


// exemplo do forEach
let vetor = [1, 2, 4]
// para percorrer o vetor
vetor.forEach( (elemento) => {
    if (elemento % 2 == 0){
        console.log(`Elemento ${elemento} é par `)
    } 
})
console.log(novo)

// Qual a diferença entre filter() e find()
// find() => mostra o primeiro valor que segue a regra, filter() => mostra todos os valores que seguem essa regra
let vetor = [1, 3, 4, 9]
let impares = vetor.filter( (elemento) => {
    return elemento % 2 == 1
})
console.log(impares)

let vetor = [1, 3, 4, 9]
let impares = vetor.find( (elemento) => {
    return elemento % 2 == 1
})
console.log(impares)

// exemplo do reduce() -> reduz o vetor a um único valor
let vetor = [1, 4, 2, 6, 9]
let soma = vetor.reduce( (total, elemento) => {
    return total + elemento
})

console.log(soma)

//(1, 4)
//(5, 2)
//(7, 6)
//(13, 9) // 22


let objeto = new Object()
    objeto.nome = "Sesi Franca"
    objeto.esporte = "basquete"

let vetor = []
vetor.push(objeto)

objeto = new Object()
objeto.nome = "Timão melhor de todos"
objeto.esporte = "futebol"

vetor.push(objeto)

vetor.forEach( (objeto) => {
    if (objeto.esporte == "basquete"){
        console.log(`Esporte da paixão do francano`)
    }
})