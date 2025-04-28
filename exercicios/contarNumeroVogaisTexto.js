/* 
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para 
este Kata. O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas 
não fazem parte desse desafio.
*/

const contarVogais = (texto) => {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    return texto.split('').filter(letra => vogais.includes(letra)).length
  }
  
  // Exemplo de uso
  const texto = "hoje o dia esta muito bonito e tranquilo"
  const quantidadeDeVogais = contarVogais(texto)
  
  console.log("=== RESULTADO DA CONTAGEM ===")
  console.log(`Texto analisado: "${texto}"`)
  console.log(`Quantidade de vogais encontradas: ${quantidadeDeVogais}`)
  console.log("=============================")
  