chefe()

function chefe () {
    let cadastroPessoa = []
    let cadastroImovel = []

    do {
        let opcao = Number(prompt(`Escolha uma das seguintes opções:
        [1]. Cadastrar 1 pessoa
        [2]. Cadastrar 1 imóvel
        [3]. Calcular o valor total em imóvel
        [4]. Calcular o cpf da pessoa que tem o imóvel mais caro
        [5]. Sair`))

        switch(opcao) {
            case 1: cadastraPessoa(cadastroPessoa)
                    break
            case 2: cadastraImovel(cadastroPessoa, cadastroImovel)
                    break
            case 3: calculaValorEmImovel(cadastroPessoa, cadastroImovel)
                    break
            case 4: calculaCPFMaisCaro(cadastroPessoa, cadastroImovel)
                    break
            case 5: console.log(`Saindo...`)
                    break
            default: console.log(`Opção Inválida!`)
        }
    }
    while (opcao != 5)
}

function cadastraPessoa(vetP) {
    let objetoPessoa = new Object()
    objetoPessoa.rg = prompt(`Informe o seu RG`)
    objetoPessoa.cpf = prompt(`Informe o seu CPF`)
    objetoPessoa.nome = prompt(`Informe o seu nome`)
    vetP.push(objetoPessoa)
    console.log(`Pessoa cadastrada com sucesso`)
}

function cadastraImovel(vetP, vetI) {
    let achou = false
    let objetoImovel = new Object ()
    objetoImovel.rg = prompt(`Informe o RG do dono`)
    for (let i = 0; i < vetP.length; i++) {
        if (objetoImovel.rg == vetP[i].rg) {
            achou = true
            break
        }
    }
    if (achou = true) {
        objetoImovel.codigo = Number(prompt(`Informe o código do imóvel`))
        objetoImovel.endereco = prompt(`Informe o endereço do dono`)
        objetoImovel.tamanho = Number(prompt(`Informe o tamanho do imóvel`))
        objetoImovel.tipo = prompt(`Informe o tipo de imóvel que é`)
        objetoImovel.valor = Number(prompt(`Informe o valor do imóvel`))
        vetI.push(objetoImovel)
        console.log(`Imóvel cadastrado com sucesso`)
    }
    else {
        console.log(`Dono do imóvel não está cadastrado!`)
    }
}

function calculaValorEmImovel(vetP, vetI) {
    if (vetP.length = 0) {
        console.log(`Nenhuma pessoa foi cadastrada!`)
    }
    else {
        let achouNome = false
        let RG = prompt(`Informe um RG`)
        let nome = vetP[0].nome
        let valorTotal = 0
        for (let i = 0; i < vetP.length; i++) {
            if (vetP[i].rg == RG) {
                nome = vetP[i].nome
                achouNome = true
                break
            }
        }
        if (achouNome = false) {
            console.log(`RG não cadastrado`)
        }
        else {
            for (let i = 0; i < vetI.length; i++) {
                if (vetI[i].rg == RG) {
                    valorTotal = valorTotal + vetI[i].valor
                }
            }
            console.log(`O nome da pessoa é ${nome} e o seu valor total em imóvel é ${valorTotal}`)
        }
    }
}

function calculaCPFMaisCaro(vetP, vetI) {
    if (vetP.length = 0) {
        console.log(`Nenhuma pessoa foi cadastrada!`)
    }
    else {
        let valorMaisCaro = vetI[0].valor
        let RGMaisCaro = vetI[0].rg
        let CPFMaisCaro = vetP[0].cpf
        for (let i = 1; i < vetI.length; i++) {
            if (vetI[i].valor > valorMaisCaro) {
                valorMaisCaro = vetI[i].valor
                RGMaisCaro = vetI[i].rg
                for (let i = 0; i < vetP.length; i++) {
                    if (vetP[i].rg == RGMaisCaro) {
                        CPFMaisCaro = vetP[i].cpf
                    }
                }
            }
        }
        console.log(`O cpf da pessoa com o imóvel mais caro é ${CPFMaisCaro}`)
    }
}