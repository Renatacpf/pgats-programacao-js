/* 
Plano de atividades para o Pet

Crie um script que defina o plano de atividades para os dogs durante a estadia. O script vai receber o porte (pequeno, médio ou grande) e o tempo disponível para a atividade representado em minutos. Exemplo:

Pantera - Médio - 45

Use uma condicional para decidir o tipo de atividade com base no porte:
- pequeno -> brincar dentro de casa
- médio -> caminhada no quarteirão
- grande -> correr no parque
- qualquer outro -> porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o tempo:
- menor que 15 -> "atividade rápida: [atividade]"
- de 15 a 30 -> "tempo ideal: [atividade]"
- acima de 30 -> "hora da diversão: [atividade]"
*/

function planoAtividades(nomeDog, porte, tempo) {
    let atividade;

    // Definindo atividade com base no porte usando switch
    switch (porte.toLowerCase()) {
        case "pequeno":
            atividade = "brincar dentro de casa";
            break;
        case "médio":
            atividade = "caminhada no quarteirão";
            break;
        case "grande":
            atividade = "correr no parque";
            break;
        default:
            atividade = "porte inválido";
    }

    // Ajustando mensagem conforme tempo disponível
    let mensagemTempo;
    if (tempo < 15) {
        mensagemTempo = `atividade rápida: ${atividade}`;
    } else if (tempo >= 15 && tempo <= 30) {
        mensagemTempo = `tempo ideal: ${atividade}`;
    } else {
        mensagemTempo = `hora da diversão: ${atividade}`;
    }

    // Exibindo as informações
    console.log("=== PLANO DE ATIVIDADES ===");
    console.log("Nome do dog:", nomeDog);
    console.log("Porte:", porte);
    console.log("Tempo disponível:", tempo + " minutos");
    console.log("Plano de atividade ->", mensagemTempo);
    console.log("============================");
}

// Exemplo de chamada:
planoAtividades("Pantera", "Médio", 45);
planoAtividades("Fofinho", "Pequeno", 10);
planoAtividades("Thor", "Grande", 25);
