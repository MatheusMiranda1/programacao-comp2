
chefe()

function chefe() {
    exe7()
}

// função testada
function exe7() {

    var soma = 0
    var conta = 0
    var numero = Number(prompt(`Informe um número`))
    do {

        conta++ // soma 1
        soma = soma + numero // acumulador
        numero = Number(prompt(`Informe outro número. Digite um número negativo para encerrar`))

    }
    while(numero >= 0)

    console.log(`A média dos números informados é ${soma / conta}`)

}