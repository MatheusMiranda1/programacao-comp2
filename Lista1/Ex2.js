// Exercício 2

function chefe() {
    var horas = Number(prompt(`Informe as horas`))
    var minutos = Number(prompt(`Informe os minutos`))
    var segundos = Number(prompt(`Informe os segundos`))
    var result = exe2(horas, minutos, segundos)
    console.log(`O resultado em segundos é: ${result} segundos`)
}

function exe2(h, m, s) {
    return (h * 3600) + (m * 60) + s
}

chefe()