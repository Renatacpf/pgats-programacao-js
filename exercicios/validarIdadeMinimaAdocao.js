/*
Validador de idade mínima para adoção

Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida,
por exemplo, 2 anos.

Use os operadores adequados e exiba:
- Nome do dog
- Idade
- Se está apto ou não para adoção

Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno
porte, pode ser adotado independente da idade.
*/

function verificarAdocao(nome, idade, pequenoPorte) {
    const idadeMinima = 2; // idade mínima padrão para adoção

    // Verifica se o dog pode ser adotado
    const podeAdotar = idade >= idadeMinima || pequenoPorte;

    // Exibe os resultados
    console.log("=== VALIDAÇÃO PARA ADOÇÃO ===");
    console.log("Nome do dog: " + nome);
    console.log("Idade: " + idade + " anos");
    console.log("Apto para adoção? " + (podeAdotar ? "Sim" : "Não"));
    console.log("==============================");
}

// Exemplo de uso:
verificarAdocao("Toby", 1, true);  // Pequeno porte -> pode adotar mesmo com 1 ano
verificarAdocao("Rex", 3, false);  // Grande porte e mais de 2 anos -> pode adotar
verificarAdocao("Brutus", 1, false);  // Grande porte e menos de 2 anos -> não pode adotar
