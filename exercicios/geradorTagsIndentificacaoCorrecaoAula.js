const nome = "Dogo", raca = "vira-lata"
let idade = 1, peso = 1.2, adotado = false

let nameUpperCase = nome.toUpperCase()
// let racaFirsletter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()
let racaFirsletter = raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase()

const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirsletter
}]

console.log(animal)