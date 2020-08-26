function revisao() {
    // criação do vetor
    var bikes = []
    do{
        // Cria uma bike
        var bike = new Object()
        bike.modelo = prompt(`Informe modelo da bike`)
        bike.marca = prompt(`Informe marca da bike`)
        bike.aro = Number(prompt(`Informe aro da bike`))
        bike.roda = Number(prompt(`Informe roda da bike`))
        var data = prompt(`Informe a data de fabricação da bike`).split('/')
        bike.fabricacao = new Date(data[2], data[1]-1, data[0])
        // insere bike em bikes
        bikes.push(bike)
        // quer continuar
        var resposta = prompt(`Quer cadastrar uma nova bike (s/n)?`)
    }
    while (resposta != 'n')
 
    // calcula a média dos tamanhos dos aros da bicicleta
    var soma = 0
    for(var i = 0; i < bikes.length; i++) {
        soma = soma + bikes[i].aro
    }
    console.log(`A média dos aros é ${soma/bikes.length}`)

    // calcula a marca da bike com a maior roda
    var maiorRoda = bikes[0].roda
    var maiorMarca = bikes[0].marca
    for(var i = 0; i < bikes.length; i++) {
        if(bikes[i].roda > maiorRoda) {
            maiorRoda = bikes[i].roda
            maiorMarca = bikes[i].marca
        }
    }
    console.log(`A marca da bike com a maior roda é ${maiorMarca}`)

    // calcula as bikes que estão em um intervalo de data de fabricação
    var di = prompt(`Informe a data inicial`).split('/')
    var datai = new Date(di[2], di[1]-1, di[0])

    var df = prompt(`Informe a data final`).split('/')
    var dataf = new Date(df[2], df[1]-1, df[0])

    for(var i = 0; i < bikes.length; i++) {
        if(bikes[i].fabricacao >= datai && bikes[i].fabricacao <= dataf) {
            console.log(bikes[i])
        }
    }
}