/*
enquanto (pet não estiver cansado); faca {
dar uma volta na quadra
}

*/
let voltarAteFicarCansada = 5
let quantidadeVoltasAtual = 0

while (quantidadeVoltasAtual < voltarAteFicarCansada) {
    console.log(`Dar uma volta na quadra`)
    quantidadeVoltasAtual++
    console.log(`Quantidade de voltas: ${quantidadeVoltasAtual}`)
    if (quantidadeVoltasAtual === voltarAteFicarCansada) {
        console.log(`Pet cansou`)
    }
}