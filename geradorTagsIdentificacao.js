function gerarTagIdentificacao(nome, idade, peso, raca, adotado) {
    // Nome em letras maiúsculas
    const nomeDog = nome.toUpperCase();
  
    // Raça com a primeira letra maiúscula
    const racaDog = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase();
  
    // Informação de adoção
    const statusAdocao = adotado ? "Adotado - Sim" : "Adotado - Não";
  
    // Exibe a tag formatada
    console.log("=== TAG DE IDENTIFICAÇÃO ===");
    console.log(`Nome: ${nomeDog}`);
    console.log(`Raça: ${racaDog}`);
    console.log(`Peso: ${peso} kg`);
    console.log("============================");
  }
  
  // Testando
  gerarTagIdentificacao("luna", 3, 12.5, "vira-lata", true);
  gerarTagIdentificacao("pingo", 12, 8.5, "labrador", false);
  