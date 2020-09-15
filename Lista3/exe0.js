
chefe()

function chefe() {
    // criar matriz - 3 x 4 - 3 alunos e 4 notas
    let matriz = [] // uma matriz de alunos
    let vetor = [] // vetor de alunos
    cadastra(matriz, vetor) // passamos a matriz de notas e vetor de alunos
    CalculaMedia(matriz, vetor)
    CalculaMaiorNotaProva(matriz, vetor)
    CalculaMenorNotaProva(matriz, vetor)
}

function CalculaMenorNotaProva(mat, vet) {
    
    for (let i = 0; i < 3; i++) { // para cada aluno
        let menorNota = mat[i][0] // menor nota é a primeira
        for (let j = 0; j < 4; j++) { // para cada nota
            if (mat[i][j] < menorNota) {
                menorNota = mat[i][j]
            } // observar a sintaxe
        }
        // quando acabarem as notas
        console.log(`O aluno ${vet[i].nome} tem menor nota ${menorNota}`)
    }

}

function CalculaMaiorNotaProva(mat, vet) {
    for (let j = 0; j < 4; j++) { // para cada prova
        let maiorNota = mat[0][j] // assumimos que o primeiro aluno tem a maior nota
        let nomeMaior = vet[0].nome // assumimos que o primeiro aluno tem a maior nota
        for (let i = 0; i < 3; i++) { // para cada aluno
            if (mat[i][j] > maiorNota) {
                maiorNota = mat[i][j] // atualiza nota maior
                nomeMaior = vet[i].nome
            }
        }
        console.log(`Aluno com a maior nota na prova ${j} foi ${nomeMaior} com nota ${maiorNota}`)
    }
}

function cadastra(mat, vet) { // quando alteramos mat, alteramos matriz
    for (let i = 0; i < 3; i++) { // são 3 alunos
        // informar os dados do aluno
        let obj = new Object()
        obj.nome = prompt(`Informe o nome do aluno`)
        obj.codigo = Number(prompt(`Informe o código do aluno`))
        obj.media = 0
        // insere o aluno no vetor
        vet.push(obj)
        alert(`Informe 4 notas para o aluno ${i + 1}`)
        // criamos um vetor dentro da matriz
        mat[i] = []
        for (let j = 0; j < 4; j++) { // são 4 notas
            mat[i][j] = Number(prompt(`Nota ${j + 1}`))
        }
    }
}

function CalculaMedia(mat, vet) {
    // vamos usar um vetor auxiliar
    for (let i = 0; i < 3; i++) { // para cada aluno
        for (let j = 0; j < 4; j++) { // para cada nota
            vet[i].media = vet[i].media + mat[i][j] // observar a sintaxe
        }
        // quando acabarem as notas
        vet[i].media = vet[i].media / 4
    }
    console.log(vet)
}


