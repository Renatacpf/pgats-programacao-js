/*
Calculadora de ração diária

Crie um script que receba o peso do dog em Kg + estoque atual de ração em gramas. Calcule a quantidade
diária de ração com base na seguinte fórmula: Gramas por dia = peso x 30

Exiba:
- Nome do dog
- Peso
- Quantidade de ração recomendada por dia
- Quantos dias o estoque atual vai durar
*/

function calcularRacao(nome, pesoKg, estoqueGramas) {
    const gramasPorDia = pesoKg * 30; // fórmula: peso x 30
    const diasDuracao = Math.floor(estoqueGramas / gramasPorDia); // arredonda pra baixo

    console.log("=== CALCULADORA DE RAÇÃO ===");
    console.log("Nome do dog: " + nome);
    console.log("Peso: " + pesoKg + " kg");
    console.log("Quantidade de ração recomendada por dia: " + gramasPorDia + " gramas");
    console.log("O estoque atual irá durar: " + diasDuracao + " dias");
    console.log("==============================");
}

// Exemplo de uso:
calcularRacao("Toby", 10, 5000);  // 10 kg de peso, 5kg de estoque (5000 gramas)
