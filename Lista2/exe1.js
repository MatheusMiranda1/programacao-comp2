chefe()

function chefe() {
    let vendedores = [] // Alteramos var por let por ser uma variavel com escopo local e não global
    let vendas = [] // Alteramos var por let por ser uma variavel com escopo local e não global
    do {
        let opcao = Number(prompt(`Escolha:
        [1]. Cadastrar vendedor
        [2]. Cadastrar Venda 
        [3]. Consultar Vendas
        [4]. Consulta Vendas Func
        [5]. Consulta Maior venda Mês
        [6]. Fazer
        [7]. Sair`))
        switch(opcao) {
            case 1: cadastraVendedor(vendedores) // passando a referência de vendedores
                    break
                    // é necessario o vetor de vendas e também o vetor de vendedores
            case 2: cadastraVendas(vendas, vendedores) 
                    break
            case 3: consultaVendasFuncionarioMes(vendas)
                    break
            case 4: consultaVendasFuncionario(vendas)
                    break
            case 5: consultaMaiorVendedor(vendas)
                    break
            case 6: consultaMesMaisVendas(vendas)
                    break
            case 7: console.log(`Saindo ...`)
                    break
        }
    }
    while (opcao != 7)
}

function consultaMesMaisVendas(vend) {
    // vamos criar um vetor que vai conter total de vendas
    let meses = [0,0,0,0,0,0,0,0,0,0,0,0]
    // percorre vetor de vendas
    for (let i = 0; i < vend.length; i++) {
        let posicao = vend[i].mes - 1
        meses[posicao] = meses[posicao] + vend[i].valor
    }
    // descobrir o maior valor no vetor
    let maiorValor = meses[0]
    for (let i = 1; i < vend.length; i++) {
        if (vend[i].valor > maiorValor) { // achei um valor maior
            maiorValor = vend[i].valor // atualiza
        }
    }
    let posicao = vend.indexOf(maiorValor) // posição no vetor contendo o maior valor
    console.log(`Mês com mais vendas ${posicao + 1} e o valor é ${maiorValor}`)
}

function cadastraVendedor(vendor){ // escopo local - vendor faz referência para vendedores 
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código`))
    objeto.nome = prompt(`Informe o nome`)
    // verifica se o código já existe
    for (let i = 0; i < vendor.length; i++) {
        if (vendor[i].codigo == objeto.codigo) {
            console.log(`Código já existente`)
            return 0 // sai da função
        }
    }
    // insere no vetor
    vendor.push(objeto)
    console.log(`Vendedor cadastrado com sucesso`)
}

function cadastraVendas(vend, vendor) { // vend representa vendas e vendor representa vendedores 
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe código da venda`))
    objeto.vendedor = Number(prompt(`Informe código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe o valor da venda`))

    // verifica o código do vendedor existe
    for (let i = 0; i < vendor.length; i++) {
        if(vendor[i].codigo == objeto.vendedor) { // vendedor existe
            for (let j = 0; j < vend.length; j++) { // verifica se vendedor já tem cadastro no mês
                if ((vend[j].vendedor == objeto.vendedor) && (vend[j].mes == objeto.mes)) {
                    console.log(`Venda já cadastrada neste mês para o vendedor`)
                    return 0 // sai da função
                }
            }
            // insere no vetor de vendas
            vend.push(objeto)
            console.log(objeto)
            return 0 // sai da função
        }
    }
    console.log(`Vendedor não existe`)
}

function consultaVendasFuncionarioMes(vend) {
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let mes = Number(prompt(`Informe o mês da venda`))
    for (let i = 0; i < vend.length; i++) {
        if ((vend[i].vendedor == vendedor) && (vend[i].mes == mes)) {
            console.log(`Valor da venda ${vend[i].valor}`)
            return 0 // sai da função
        }
    }
    console.log(`Vendedor ou mês sem venda`)
}

function consultaVendasFuncionario(vend) {
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let total = 0 // não achei o funcionário
    for (let i = 0; i < vend.length; i++) {
        if (vend[i].vendedor == vendedor){
            total = total + vend[i].valor
        }
    }
    if (total == 0) {
        console.log(`Vendedor ou mês sem venda`)
    }
    else {
        console.log(`O total das vendas é ${total}`)
    }
}

function consultaMaiorVendedor(vend) {
    let mes = Number(prompt(`Informe o mês da venda`))
    let codigoVendedor // codigo do vendedor que mais vendeu
    let maiorVenda = 0 // maior venda

    for (let i = 0; i < vend.length; i++) { // percorre o vetor de vendas
        if (vend[i].mes == mes){ // verifica se é um mês de interesse
            if (vend[i].valor > maiorVenda) { // achei maior venda
                // atualizar os valores maiores
                maiorVenda = vend[i].valor
                codigoVendedor = vend[i].vendedor
            }
        }
    }
    console.log(`A maior venda é de ${maiorVenda} feita pelo vendedor ${codigoVendedor}`)
} 