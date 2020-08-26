chefe()

function chefe() {
    // vetor com escopo global -> porque vamos passá-lo como parâmetro nas funções 
    var vetor = []
    do {
        var opcao = Number(prompt(`Escolha \n [1]. Cadastrar \n [2]. Média dos salários \n [3]. Menor e maior idade \n [4]. Qtde de mulheres \n [5]. Sair do programa`))
        switch(opcao) {
            case 1: entrada(vetor)
                    break
            case 2: mediaSalario(vetor)
                    break
            case 3: menorMaiorIdade(vetor)
                    break
            case 4: qtdeMulheres(vetor)
                    break
            case 5: console.log(`Obrigado por ultilizar nosso programa`)  
                    break              
            default: console.log(`Opção Inválida`)
        }
    }
    while (opcao != 5) 
}

function entrada(vet) {
    var objeto = new Object() // criamos um objeto
    objeto.salario = Number(prompt(`Informe o salário`))
    objeto.nroFilhos = Number(prompt(`Informe nro de filhos`))
    objeto.sexo = prompt(`Informe o sexo (M/F)`).toUpperCase() // converte para maiúsculo
    objeto.idade = Number(prompt(`Informe a Idade`))
    // insere no vetor
    vet.push(objeto) // insere
}

function mediaSalario(vet) {
    if (vet.length == 0) { // vetor está vazio
        console.log(`Nenhum habitante cadastrado`)
    }
    else {
        var soma = 0
        for (var i = 0; i < vet.length; i++) { // percorre o vetor
            soma = soma + vet[i].salario // acumula
        }
        console.log(`A média é ${soma / vet.length}`) 
    }
}

function menorMaiorIdade(vet) {
    if (vet.length == 0) {
        console.log(`Nenhum habitante cadastrado`)
    }
    else {
        var menor = vet[0].idade // a idade do primeiro habitante é a menor
        var maior = vet[0].idade // a idade do primeiro habitante é a maior
        for (var i = 1; i < vet.length; i++) { // percorre o vetor
            if (vet[i].idade > maior) {
                maior = vet[i].idade
            }
            if (vet[i].idade < menor) {
                menor = vet[i].idade // atualiza menor
            }
        }
        console.log(`Maior: ${maior} e menor: ${menor}`) // faz a média
    }
}

function qtdeMulheres(vet) {
    if (vet.length == 0) {
        console.log(`Nenhum habitante cadastrado`)
    }
    else {
        var cont = 0
        for (var i = 0; i < vet.length; i++) {
            if (((vet[i].sexo == 'F') && (vet[i].filhos == 3) && (vet[i].salario <= 500))) {
            cont++
            }
        }
        console.log(`A quantidade de mulheres com 3 filhos que ganham ate R$ 500.00 é ${cont}`)
    }
}