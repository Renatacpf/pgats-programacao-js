/* 
Contador de Satisfação do Passeio

Crie um scrip que avise quando o Dog já passeou o suficiente. Para saber, vamos considerar que
ele se sentira satisfeito somente a partir de 5 voltas na quadra.

Use a estrutura de repetição while.

Exiba:
- Qual o número da volta atual
- Quando o dog estiver satisfeito

Extra: transforme a lógica em uma função (da forma que conseguir)
*/

let voltasParaDogFicarSatisfeito = 5
let volta = 0

while (volta <= voltasParaDogFicarSatisfeito) {
    console.log(`Volta de nº ${volta} com o Pitoco.`)
    console.log(`O Pitoco não está satisfeito.`)  
    volta++
}

console.log(`Acabooooou o passeio, Pitoco!`)