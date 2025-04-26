/* 
    +   adição
    -   subtração
    *   multiplicação
    /   divisão
    %   resto
    **  exponencial
*/

// +   adição
console.log( 1 + 1) // 2

// -   subtração
console.log( 10 - 7) // 3

// *   multiplicação
console.log( 2 * 2) // 4

// /   divisão
console.log( 11 / 2) // 5.5

// %   resto
console.log( 11 % 2) // 1

// **  exponencial
console.log( 4 ** 4) // 256

// precedencia - ordem de execução / prioridade
console.log( 1 + 1 * 2) // 3 - multiplicação, adição
console.log((1 + 1) * 2) // 4 - adição, multiplicação ( dentro do parenteses, depois o que está fora)

console.log(+"5" * 2) // 10

console.log(11 / 2) // 5.5
console.log(parseInt(11 / 2)) // 5.5 -> 5
