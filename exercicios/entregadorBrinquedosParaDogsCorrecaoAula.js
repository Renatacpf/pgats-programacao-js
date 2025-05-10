/* 
Entregador de brinquedos para os dogs

Dado que você tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino
Crie um script que passe pela lista de brinquedos e entregue um por vez.
Exiba o nome de cada brinquedo que for entregue.

Use a estrutura de repetição forEach.

Extra: transforme a lógica em uma função (da forma que conseguir)
*/

const brinquedos = ["Bola", "Osso", "Corda", "Sino"]

brinquedos.forEach(brinquedo => {
    console.log(`Entregando o brinquedo: ${brinquedo}`)
})

console.log("Todos os brinquedos foram entregues!")
console.log(`---------------------`)

// Exemplo aluno

const brinquedosEntregues = []
const brinquedos2 = ["Bola", "Osso", "Corda", "Sino"]

brinquedos2.forEach(brinquedo => {
    console.log(`Entregando o brinquedo: ${brinquedo}`)
    brinquedosEntregues.push(brinquedo)
})

console.log(`Todos os brinquedos foram entregues! - ${brinquedosEntregues.join(', ')}`)
console.log(`---------------------`)

//Exemplo de aluno

const brinquedosComNomeECor = [
    { nome: "Bola", cor: "vermelha" },
    { nome: "Osso", cor: "azul" },
    { nome: "Corda", cor: "verde" },
    { nome: "Sino", cor: "amarelo" }
]

brinquedosComNomeECor.forEach(brinquedo => {
    console.log(`Entregando o brinquedo: ${brinquedo.nome} - ${brinquedo.cor}`)
})

console.log(`---------------------`)

//Exemplo de aluno - extra

function entregarBrinquedos(brinquedos) {
    brinquedos.forEach((brinquedo, i) => {
        console.log(`Entregando brinquedo ${i + 1}: ${brinquedo}`);
    });
}