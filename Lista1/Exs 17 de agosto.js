// exercício 3 - vamos esperar 2 cadeias de caracteres passadas como parâmetro
function chefe() {
    var cad1 = prompt(`Informe a cadeia 1`)
    var cad2 = prompt(`Informe a cadeia 2`)
    var result = exe3(cad1, cad2)
    console.log(`O resultado é ${result}`)
    
}
 
function exe3(cadeia1, cadeia2) {
    if (cadeia1 == cadeia2) {
        return 0 // as duas cadeias são iguais
    }
    else {
        if (cadeia2.length > cadeia1.length) {
            return cadeia1.length + 1
        }
        // percorrer a cadeia1 e compara posição por posição com cadeia2
        for (var i = 0; i < cadeia1.length; i++) {
            if (cadeia1[i] != cadeia2[i]) { // é diferente
                return i+1 // retorna posição e sai da função
            }
        }
    }
}

chefe()


// ===================


function cadastra(vet) {
    // cria o objeto
    var objeto = new Object
    objeto.codigo = Number(prompt(`Informe código`))
    objeto.qtde = Number(prompt(`Informe código`))
    objeto.preco = Number(prompt(`Informe código`))
    objeto.nome = prompt(`Informe código`)
    // insere objeto no vetor
    vet.push(objeto)
}

function mostra(vet) {
    for (var i = 0; i < vet.length; i++) {
        console.log(vet[i])
    }
}

function chefe() {
    var vetor = []
    do {
        var opcao = Number(prompt("Digite uma opção \n [1]. Cadastra \n [2]. Consultar \n [3]. Sair"))
        switch(opcao) {
            case 1: cadastra(vetor)
            break
            case 2: mostra(vetor)
            break
            case 3: console.log(`Até logo`)
            break
            default: console.log(`Opção Inválida`)
        }
    }
    while (opcao != 3)
}

chefe()