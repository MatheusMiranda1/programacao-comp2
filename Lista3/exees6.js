
// 1.	Adiciona uma bicicleta no vetor

// 2.   Busca por uma bicicleta no vetor a partir de um código informado pelo usuario
var codigo = Number(prompt(`Informe código`))
console.log(vet.filter((objeto) => (objeto.codigo == codigo))) // faz o for

// 3.   Calcula a soma dos valores das bicicletas em estoque
var soma = 0
console.log(vet.forEach((objeto) => (soma = soma + objeto.valor)))

// 4.	Mostra todas as bicicletas de uma marca informada pelo usuário
var marca = prompt(`Informe a marca`)
console.log(vet.filter((objeto) => (objeto.marca == marca)))

// 5.	Soma o valor 3 em todas os aros das bicicletas cadastradas
console.log(vet.map((objeto) => (objeto.aro = objeto.aro + 3)))

// 6.	Mostra a bicicleta mais velha
var maior = vet[0].ano // bike mais velha é a primeira
