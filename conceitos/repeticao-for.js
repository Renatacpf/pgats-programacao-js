/* 
para , faca
contador; condicao; manipulacao do contador (incremento ou decremento)

quantidadeDePetiscos; quantidadeDePetiscos < quantidadeCalculada; quantidadeDePetiscos++
*/

const quantidadeCalculada = 3
const gatos = ['Lessie', 'Mimi', 'Lili']

for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
    // acao de dar o petisco
    console.log(`Dando o petisco de nº: ${quantidadeDePetiscos}`)

    for (let indice = 0; indice < gatos.length; indice++) {
        console.log(`Dando o petisco para ${gatos[indice]}`)
    }

}



