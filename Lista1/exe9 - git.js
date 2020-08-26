function main(){

    //declaração de variaveis
    var nro
    var soma = 0

    //entrada de dados
    nro = Number(prompt(`Informe um numero inteiro e positivo`))

    //operando os dados
    for (var i = 1; i<=nro; i++){
        if(nro % i == 0){
            soma = soma + i
            console.log(i)
        }
    }
    console.log(`A soma dos divisores é:${soma}`)
}

main()