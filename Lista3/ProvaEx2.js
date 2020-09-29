chefe()

function chefe () {
    let cadastroCarro = []
    let nota = []

    do {
        let opcao = Number(prompt(`Escolha uma das seguintes opções:
        [1]. Cadastrar 4 carros e suas 5 avaliações
        [2]. Calcular a média de notas de cada carro
        [3]. Calcular o modelo do carro com menor nota em cada avaliação
        [4]. Sair`))

        switch(opcao) {
            case 1: cadastraCarro(cadastroCarro, nota)
                    break
            case 2: calculaMedia(cadastroCarro, nota)
                    break
            case 3: calculaModeloMenorNota(cadastroCarro, nota)
                    break
            case 4: console.log(`Saindo...`)
                    break
            default: console.log(`Opção Inválida!`)
        }
    }
    while (opcao != 4)
}

function cadastraCarro(vetC, matN) {
    for (let i = 0; i < 4; i++) {
        let objetoCarro = new Object()
        objetoCarro.marca = prompt(`Informe a marca do carro`)
        objetoCarro.modelo = prompt(`Informe o modelo do carro`)
        objetoCarro.ano = Number(prompt(`Informe o ano`))
        objetoCarro.valor = Number(prompt(`Informe o valor do carro`))
        objetoCarro.media = 0
        vetC.push(objetoCarro)
        alert(`Informe a nota desse carro para as 5 avaliações que ele recebe da empresa Guia Quatro Rodas da Editora Abril.`)
        matN[i] = []
        for (let j = 0; j < 5; j++) {
            matN[i][j] = Number(prompt(`Nota da ${j + 1}a avaliação`))
        }
    }
}

function calculaMedia (vetC, matN) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            vetC[i].media = vetC[i].media + matN[i][j]
        }
        vetC[i].media = vetC[i].media / 5
        console.log(`A média das notas do ${i + 1}o carro é ${vetC[i].media}`)
        console.log(`A marca deste carro é ${vetC[i].marca} e o seu modelo é ${vetC[i].modelo}`)
    }
}

function calculaModeloMenorNota(vetC, matN) {
    for (let j = 0; j < 5; j++) {
        let menorNota = matN[0][j]
        let modeloMenorNota = vetC[0].modelo
        for (let i = 0; i < 4; j++) {
            if (matN[i][j] < menorNota) {
                menorNota = matN[i][j]
                modeloMenorNota = vetC[i].modelo
            }
        }
        console.log(`O modelo do carro com a menor nota na ${j + 1}a avaliação é ${modeloMenorNota}`)
    }
}