class Carro {

    // método construtor
    // inicializa as variaveis da classe
    constructor(marca, modelo, ano, velocidade, motor){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.velocidade = velocidade
        this.motor = motor // motor pode ser true (ligado) ou false (desligado)
    }   

    mostrar(){
        console.log(this)
    }

    // faça uma função para aumentar a velocidade do carro em x unidades
    aumentaVelocidade(x){
        if (!this.motor){ // caso não esteja ligado
            this.motor = true
        }
        this.velocidade = this.velocidade + x
    }
    diminuirVelocidade(x){
        if (!this.motor){ // caso não esteja ligado
            this.motor = true
        }
        this.velocidade = this.velocidade - x
    }
}
// vamos instanciar o objeto da classe
// chama o construtor - this representa o obj1
let obj1 = new Carro("GM", "Onyx", 2019, 0, false)
obj1.mostrar() // this representa obj1

// chama o construtor - this representa o obj2
let obj2 = new Carro("Fiat", "Palio", 2020, 0, false)
obj2.mostrar() // this representa obj2

let x
x = Number(prompt(`Quer aumentar a velocidade de obj1 de quanto?`))
// aumenta a velocidade de obj1
obj1.aumentaVelocidade(x)
x = Number(prompt(`Quer diminuir a velocidade de obj1 de quanto?`))
// diminui a velocidade de obj1
obj1.diminuirVelocidade(x)
x = Number(prompt(`Quer aumentar a velocidade de obj2 de quanto?`))
// aumenta a velocidade de obj2
obj2.aumentaVelocidade(x)
x = Number(prompt(`Quer diminuir a velocidade de obj2 de quanto?`))
// diminui a velocidade de obj2
obj2.diminuirVelocidade(x)

obj1.mostrar()
obj2.mostrar()