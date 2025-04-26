/*
Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings. 
*/

function removerStrings(lista) {
    return lista.filter(item => typeof item === 'number');
  }
  
  // Exemplo de uso:
  const listaMista = [1, 'cachorro', 5, 'gato', 8, 'banana'];
  const listaSemStrings = removerStrings(listaMista);
  
  console.log(listaSemStrings); // Saída: [1, 5, 8]
  