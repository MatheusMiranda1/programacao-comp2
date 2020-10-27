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




// Atividade - classe aluno
var media

class Aluno {
    
    constructor(numeroAluno, nome, idade, p1, p2){
        this.numeroAluno = numeroAluno
        this.nome = nome
        this.idade = idade
        this.p1 = p1
        this.p2 = p2
    }

    notaFinal(){
        media = ((this.p1 + this.p2) / 2)
        console.log(`A media final do aluno(a) ${this.nome} é ${media}`)
    }

    mostra(){
        console.log(this)
    }

    passou(){
        if (media >= 6) {
            console.log(`O aluno(a) ${this.nome} passou!`)
        }
        else {
            console.log(`O aluno(a) ${this.nome} não passou!`)
        }
    }
}

let obj1 = new Aluno(1, "Ana", 18, 7, 8)
obj1.mostra()
obj1.notaFinal()
obj1.passou()

let obj2 = new Aluno(2, "Bob", 17, 6, 9)
obj2.mostra()
obj2.notaFinal()
obj2.passou()

let obj3 = new Aluno(3, "Carlos Carlos", 20, 5, 4)
obj3.mostra()
obj3.notaFinal()
obj3.passou()