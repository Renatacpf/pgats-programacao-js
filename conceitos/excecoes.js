/* 
tentar {
    // conexao com banco (exemplo)
}
    pegar (erro/excecao) {
    // salvar a excecao em algum lugar...
    // exibir
}

lançar = throw

*/

try {
    console.log(`Tentando alimentar o Pet...`)
    // throw new Error('Pet não encontrado')

    // TENTAR CONECTAR NO BANCO DE DADOS
    // EXECUTAR UMA QUERY
} catch (excecao) {
    console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)

    // CAPTURA A EXCECAO
    
} finally {
    console.log(`Finalizando o processo de alimentação`)

    // GARANTE QUE A CONEXAO SEJA FECHADA
}