class computador {

    constructor(nomeDono, marca, modelo, ram, hd){
        this.nomeDono = nomeDono
        this.marca = marca
        this.modelo = modelo
        this.ram = ram
        this.hd = hd
    }

    mostrar = () => {
        console.log(`Nome do dono: ${this.nomeDono} Marca: ${this.marca} Modelo: ${this.modelo} RAM : ${this.ram} HD: ${this.hd}`)
    }

    upgradeRam = (x) => {
        this.ram = this.ram + x
    }

    downgradeRam = (x) => {
        if ((this.ram - x) < 0) {
            console.log(`Não foi possivel fazer downgrade da memória ram`)
        }
        else {
            this.ram = this.ram - x
        }
    }

    upgradeHD = (x) => {
        this.hd = this.hd + x
    }

    downgradeHD = (x) => {
        if ((this.hd - x) < 0) {
            console.log(`Não foi possivel fazer downgrade do HD`)
        }
        else {
            this.hd = this.hd - x
        }
    }
}

let comp1 = new computador("Matheus Miranda", "Lenovo", "sistema de produção", 4, 300)
let comp2 = new computador("Matheus Miranda", "Apple", "função recursiva", 8, 350)
comp1.mostrar()
comp2.mostrar()

let x
x = Number(prompt(`Informe o quanto deseja fazer upgrade do ram do 1o computador`))
comp1.upgradeRam(x)
x = Number(prompt(`Informe o quanto deseja fazer upgrade do ram do 2o computador`))
comp2.upgradeRam(x)
x = Number(prompt(`Informe o quanto deseja fazer downgrade do ram do 1o computador`))
comp1.downgradeRam(x)
x = Number(prompt(`Informe o quanto deseja fazer downgrade do ram do 2o computador`))
comp2.downgradeRam(x)
x = Number(prompt(`Informe o quanto deseja fazer upgrade do HD do 1o computador`))
comp1.upgradeHD(x)
x = Number(prompt(`Informe o quanto deseja fazer upgrade do HD do 2o computador`))
comp2.upgradeHD(x)
x = Number(prompt(`Informe o quanto deseja fazer downgrade do HD do 1o computador`))
comp1.downgradeHD(x)
x = Number(prompt(`Informe o quanto deseja fazer downgrade do HD do 2o computador`))
comp2.downgradeHD(x)

comp1.mostrar()
comp2.mostrar()



let vetor = [2,4,6,9,10]
// Acha todos os números que quando multiplicados por si mesmos são multiplos de 3
let potenciaMultipla3 = vetor.filter( (elemento) => {
    return (elemento * elemento) % 3 == 0
})
// Acha o 1o número multiplo de 4 no vetor
let primeiroMultiplo4 = vetor.find( (elemento) => {
    return elemento % 4 == 0
})
console.log(potenciaMultipla3)
console.log(primeiroMultiplo4)



let vetor = [1,4,7,8,12]
// multiplica cada elemento do vetor pela sua posição
let novoVetor = vetor.map( (elemento, posicao) => {
    return elemento * posicao
})
console.log(novoVetor)
// multiplica um elemento do vetor com a multiplicação deste mesmo elemento com o próximo
let Multvetor = vetor.reduce( (elemento, proximoElemento) => {
    return elemento * (elemento * proximoElemento)
})
console.log(Multvetor)