/*
Classificador de porte automático

Muitos tutores não fazem ideia do porte de seu Dog.
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:

- Até 10kg -> Pequeno; acima disso -> Médio

Use o operador ternário para determinar o porte. Exiba:
- Nome
- Peso
- Porte classificado

Extra: transforme a lógica em uma função (da forma que conseguir)
*/

function classificarPorte(nome, peso) {
    const porte = peso <= 10 ? "Pequeno" : "Médio";

    console.log("=== CLASSIFICAÇÃO DO PORTE ===");
    console.log("Nome do dog:", nome);
    console.log("Peso:", peso + "kg");
    console.log("Porte classificado:", porte);
    console.log("================================");
}

// Exemplo de chamada
classificarPorte("Rex", 8);
classificarPorte("Thor", 15);
