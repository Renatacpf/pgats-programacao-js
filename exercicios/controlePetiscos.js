/* 
Controle de petiscos

Crie um scrip que receba uma quantidade de petiscos e dê 1 por vez até o dog estiver satisfeito.

Use a estrutura de repetição for contado.

Exiba:
- Cada vez que um petisco for entregue
- Quando o dog estiver satisfeito

Extra: transforme a lógica em uma função (da forma que conseguir)
*/

function controleDePetiscos(quantidadeDePetiscos) {
  for (let i = 1; i <= quantidadeDePetiscos; i++) {
    console.log(`🍖 Petisco ${i} entregue.`);
  }

  console.log("🐶 O dog está satisfeito! Todos os petiscos acabaram.");
}

// Exemplo de uso
controleDePetiscos(5);