// Atividade - classe aluno
var media

// cria a classe
class Aluno {
    
    constructor(numeroAluno, nome, idade, p1, p2){
        // this representa o objeto sendo criado
        this.numeroAluno = numeroAluno
        this.nome = nome
        this.idade = idade
        this.p1 = p1
        this.p2 = p2
    }
    // média final do aluno 
    notaFinal = () => {
        media = ((this.p1 + this.p2) / 2)
        return media
    }
    // mostra os dados do aluno
    mostra = () => {
        console.log(`Número: ${this.numeroAluno} Nome: ${this.nome} Idade: ${this.idade} Média: ${this.notaFinal()}`)
    }
    // verifica se o aluno passou
    passou = () => {
        if (this.notaFinal() >= 6) {
            console.log(`O aluno(a) ${this.nome} passou!`)
        }
        else {
            console.log(`O aluno(a) ${this.nome} não passou!`)
        }
    }
}
// criar os objetos -> instanciá-los
let obj1 = new Aluno(1, "Ana", 18, 7, 8) // this representa o 1o aluno
obj1.mostra()
obj1.passou()

let obj2 = new Aluno(2, "Bob", 17, 6, 9) // this representa o 2o aluno
obj2.mostra()
obj2.passou()

let obj3 = new Aluno(3, "Carlos Carlos", 20, 5, 4) // this representa o 3o aluno
obj3.mostra()
obj3.passou()