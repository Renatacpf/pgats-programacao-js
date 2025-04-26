/**
 * Esse exercício é sobre padronizar e validar nomes para as tags dos cachorros. Vamos criar um script em JavaScript que:
1. Mostra o nome original
2. Mostra o nome formatado corretamente
3. (Extra) Valida se o nome contém apenas uma palavra
 */

function validarNome(nomeOriginal) {
    // Remove espaços extras no começo e fim
    let nomeLimpo = nomeOriginal.trim();

    // Remove caracteres especiais (deixa apenas letras e espaços)
    nomeLimpo = nomeLimpo.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
  
    // Formata o nome: primeira letra maiúscula e o resto minúsculo
    const nomeFormatado = nomeLimpo.charAt(0).toUpperCase() + nomeLimpo.slice(1).toLowerCase();
  
    // Valida se o nome contém apenas uma palavra (sem espaços no meio)
    const valido = !nomeLimpo.includes(" ");
  
    // Exibe os resultados
    console.log("=== VALIDAÇÃO DE NOME ===");
    console.log("Nome original: " + nomeOriginal);
    console.log("Nome formatado: " + nomeFormatado);
    console.log("Nome válido? " + (valido ? "Sim" : "Não"));
    console.log("==========================");
  }
  
  // Exemplos de teste
  validarNome("  rEx ");
  validarNome("  PantERa");
  validarNome("bella");
  validarNome("max power");
  validarNome("  Pa!ntERa ne@Gra   ");
  