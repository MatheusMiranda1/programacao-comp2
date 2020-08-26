
chefe()

function chefe() {
    var vetor = [] // escopo global - ele que iremos passar nos parâmetros da função

    do {
        var opcao = Number(prompt(`Digite [1]. req1 [2]. req2 [3]. req3 [4]. req4 [5]. req5 [6]. Sair`))
        switch(opcao) {
            case 1: requisito1(vetor)
                    break
            case 2: requisito2(vetor)
                    break
            case 3: requisito3(vetor)
                    break
            case 4: requisito4(vetor)
                    break
            case 5: requisito5(vetor)
                    break
            case 6: console.log(`Programa vai ser encerrado`)
                    break
            default: console.log(`Opção Inválida`)
        }
    }
    while(opcao != 6)
    
}
function requisito1(vet) { // vet aponta para vetor

}
function requisito2(vet) { // vet aponta para vetor

}
function requisito3(vet) { // vet aponta para vetor

}
function requisito4(vet) { // vet aponta para vetor

}
function requisito5(vet) { // vet aponta para vetor

}
