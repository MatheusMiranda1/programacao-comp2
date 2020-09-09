
chefe()

function chefe() {
    // criar matriz - 3 x 4 - 3 alunos e 4 notas
    let matriz = [] // uma matriz é um vetor
    matriz[0] = [] // linha 0
    matriz[1] = [] // linha 1
    matriz[2] = [] // linha 2
    cadastra(matriz)
    CalculaMedia(matriz)
}

function cadastra(mat) { // quando alteramos mat, alteramos matriz
    for (let i = 0; i < 3; i++) { // são 3 alunos
        alert(`Informe 4 notas para o aluno ${i + 1}`)
        for (let j = 0; j < 4; j++) { // são 4 notas
            mat[i][j] = Number(prompt(`Nota ${j + 1}`))
        }
    }
}

function CalculaMedia(mat) {
    // vamos usar um vetor auxiliar
    let vetor = [0,0,0] // qtde de alunos
    for (let i = 0; i < 3; i++) { // para cada aluno
        for (let j = 0; j < 4; j++) { // para cada nota
            vetor[i] = vetor[i] + mat[i][j] // observar a sintaxe
        }
        // quando acabarem as notas
        vetor[i] = vetor[i] / 4
    }
    console.log(`As médias são ${vetor}`)
}