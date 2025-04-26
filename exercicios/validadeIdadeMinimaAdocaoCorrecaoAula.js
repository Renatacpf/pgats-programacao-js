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

    const idadeMinima = 2
    const nomeDog = "Toby"
    const idadeDog = 10
    const pequenoPorte = "M"

    const podeAdotar = idadeDog >= idadeMinima || pequenoPorte === "P";

    console.log("=== VALIDAÇÃO PARA ADOÇÃO ===");
    console.log("Nome do dog: " + nomeDog);
    console.log("Idade: " + idadeDog + " anos");
    console.log("Apto para adoção? " + (podeAdotar ? "Sim" : "Não"));
    console.log("==============================");
