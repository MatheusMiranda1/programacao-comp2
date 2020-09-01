chefe()

function chefe() {
    var vendedores = []
    var vendas = []
    do {
        var opcao = Number(prompt(`[1]. Cadastrar vendedor [2]. Cadastrar Venda [3]. Sair`))
        switch(opcao) {
            case 1: cadastraVendedor(vendedores) // escopo global
                    break
                    // é necessario o vetor de vendas e também o vetor de vendedores
            case 2: cadastraVendas(vendas, vendedores) 
                    break
            case 3:
        }
    }
    while (opcao != 3)
}

function cadastraVendedor(vend){ // escopo local - vend faz referência para vendedores 
    var objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código`))
    objeto.nome = prompt(`Informe o nome`)
    // verifica se o código já existe
    for (var i = 0; i < vend.length; i++) {
        if (vend[i].codigo == objeto.codigo) {
            console.log(`Código já existente`)
            return 0 // sai da função
        }
    }
    // insere no vetor
    vend.push(objeto)
    console.log(`Vendedor cadastrado com sucesso`)
}

function cadastraVendas(vend, vendor) { // vend representa vendas e vendor representa vendedores 
    var objeto = new Object()
    objeto.codigo = Number(prompt(`Informe código da venda`))
    objeto.vendedor = Number(prompt(`Informe código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe o valor da venda`))

    // verifica o código do vendedor existe
    for (var i = 0; i < vendor.length; i++) {
        if(vendor[i].codigo == objeto.vendedor) { // vendedor existe
            for (var j = 0; j < vend.length; j++) { // verifica se vendedor já tem cadastro no mês
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