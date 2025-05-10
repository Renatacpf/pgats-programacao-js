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

function contadorDePasseio() {
  let voltas = 0;

  while (voltas < 5) {
    voltas++;
    console.log(`Volta ${voltas} concluída.`);
  }

  console.log("O dog está satisfeito após 5 voltas! 🐶🎉");
}

// Executando a função
contadorDePasseio();