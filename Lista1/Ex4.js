// Exercício 4

function chefe() {
    var raio = Number(prompt(`Informe o raio de sua esfera`))
    var volume = exe4(raio) 
    console.log(`O volume dessa esfera é ${(volume).toFixed(2)} cm³`)
}

function exe4(r) {
    return 4/3 * 3.14 * Math.pow(r, 3)
}

chefe()