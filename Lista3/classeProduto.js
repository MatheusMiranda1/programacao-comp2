// Atividade - classe produto

// cria a classe
class Produto {

    constructor(id, descricao, qtde, preco){
        this.id = id
        this.descricao = descricao
        this.qtde = qtde
        this.preco = preco
    }

    comprar = (x) => {
        this.qtde = this.qtde + x
    }

    vender = (x) => {
        if ((this.qtde - x) >= 0){
            this.qtde = this.qtde - x
        }
        else{
            console.log(`não foi possivel vender`)
        }
    }

    subir = (x) => {
        this.preco = this.preco + x
    }

    descer = (x) => {
        if ((this.preco - x) >= 0){
            this.preco = this.preco - x
        }
        else{
            console.log(`Não foi possivel diminuir o preço`)
        }
    }

    // mostra o produto
    mostra = () => {
        console.log(`Id: ${this.id} Descrição: ${this.descricao} Qtde: ${this.qtde} Preço: ${this.preco}`)
    }
}
// objetos

let produto1 = new Produto(10, "Shampoo", 2, 30)
produto1.comprar(10)
produto1.subir(10)
produto1.mostra()

let produto2 = new Produto(20, "condicionador", 50, 3)
produto2.vender(5)
produto2.descer(45)
produto2.mostra()