// Atividade - Classe rio

class Rio {

    constructor(nome, nivel, poluido){
        this.nome = nome
        this.nivel = nivel
        this.poluido = poluido
    }

    mostrar = () => {
        console.log(`Nome: ${this.nome} Nível: ${this.nivel} Se está poluído: ${this.poluido}`)
    }

    chover = (x) => {
        this.nivel = this.nivel + x
    }

    ensolarar = (x) => {
        if ((this.nivel - x) >= 0){
            this.nivel = this.nivel - x
        }
        else{
            console.log(`Não foi possivel diminuir o nivel do rio`)
        }
    }

    limpar = () => {
        this.poluido = false
    }

    sujar = () => {
        this.poluido = true
    }
}

let rio1 = new Rio("Arnaldo", 5, false)
rio1.chover(10)
rio1.sujar()
rio1.mostrar()

let rio2 = new Rio("Tito", 10, true)
rio2.ensolarar(5)
rio2.limpar()
rio2.mostrar()