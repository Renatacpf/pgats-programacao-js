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

// parse
console.log(11 / 2) // 5.5
console.log(parseInt(11 / 2)) // 5.5 -> 5

// arredondamento
console.log(Math.floor(5.8)) // arredonda para baixo
console.log(Math.ceil(5.2)) //  arredonda para cima
console.log(Math.round(5.8)) // arredonda para o mais próximo
console.log(Math.round(5.4)) // arredonda para o mais próximo

// exibição de quantidade de digitos depois do ponto
const valorDecimal = 2.123123
console.log(valorDecimal.toFixed(3))
