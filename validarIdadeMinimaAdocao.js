function verificarAdocao(nome, idade, pequenoPorte) {
    const idadeMinima = 2; // idade mínima padrão para adoção

    // Verifica se o dog pode ser adotado
    const podeAdotar = idade >= idadeMinima || pequenoPorte;

    // Exibe os resultados
    console.log("=== VALIDAÇÃO PARA ADOÇÃO ===");
    console.log("Nome do dog: " + nome);
    console.log("Idade: " + idade + " anos");
    console.log("Pequeno porte: " + (pequenoPorte ? "Sim" : "Não"));
    console.log("Apto para adoção? " + (podeAdotar ? "Sim" : "Não"));
    console.log("==============================");
}

// Exemplo de uso:
verificarAdocao("Toby", 1, true);  // Pequeno porte -> pode adotar mesmo com 1 ano
verificarAdocao("Rex", 3, false);  // Grande porte e mais de 2 anos -> pode adotar
verificarAdocao("Brutus", 1, false);  // Grande porte e menos de 2 anos -> não pode adotar
