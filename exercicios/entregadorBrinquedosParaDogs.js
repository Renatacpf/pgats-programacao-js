/* 
Entregador de brinquedos para os dogs

Dado que você tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino
Crie um script que passe pela lista de brinquedos e entregue um por vez.
Exiba o nome de cada brinquedo que for entregue.

Use a estrutura de repetição forEach.

Extra: transforme a lógica em uma função (da forma que conseguir)
*/

function entregarBrinquedosParaDog(brinquedos) {
  console.log("🐶 Iniciando a entrega de brinquedos...");

  brinquedos.forEach((brinquedo, index) => {
    console.log(`🎁 Entregando brinquedo ${index + 1}: ${brinquedo}`);
  });

  console.log("✅ Todos os brinquedos foram entregues ao dog! 🐾");
}

// Exemplo de uso:
const listaDeBrinquedos = ['Bola', 'Osso', 'Corda', 'Sino'];
entregarBrinquedosParaDog(listaDeBrinquedos);