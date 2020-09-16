chefe ()

function chefe() {
    let matriz = []
    let vetor = []
    cadastra(matriz, vetor)
    calculaMedia(matriz, vetor)
    calculaTimeMaisPontos(matriz, vetor)
}

function cadastra(mat, vet) {
    for (let i = 0; i < 4; i++) {
        let obj = new Object ()
        obj.nome = prompt(`Informe o nome do time`)
        obj.cidade = prompt(`Informe a cidade do time`)
        obj.media = 0
        vet.push(obj)
        alert(`Informe os pontos que este time ganhou nas 4 rodadas`)
        mat[i] = []
        for (let j = 0; j < 3; j++) {
            mat[i][j] = Number(prompt(`Qts pontos na rodada ${j+1}`))
        }
    }
}

function calculaMedia(mat, vet) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            vet[i].media = vet[i].media + mat[i][j]
        }
        vet[i].media = vet[i].media / 3
    }
    console.log(vet)
}

function calculaTimeMaisPontos(mat, vet) {
    for (let j = 0; j < 3; j++) {
        let maiorPontuacao = mat[0][j]
        let timeMaiorPontuacao = vet[0].nome
        for (let i = 0; i < 4; j++) {
            if (mat[i][j] > maiorPontuacao) {
                maiorPontuacao = mat[i][j]
                timeMaiorPontuacao = vet[i].nome
            }
        }
        console.log(`A maior pontuação da rodada ${j+1} é de ${maiorPontuacao} e pertence ao time ${timeMaiorPontuacao}`)
    }
}