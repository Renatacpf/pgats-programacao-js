/* 
    >   - maior que
    >=  - maior ou igual que
    <   - menor que
    <=  - menor ou igual que
    ==  - igualdade somente de valores
    !=  - diferença somente de valores
    === - igualdade de valores e tipo de dado
*/

// maior que
console.log(`10 > 5 = ${ 10 > 5}`) // verdadadeiro = true
console.log(`10 > 20 = ${ 10 > 20}`) // falso = false

// maior ou igual
console.log(`10 >= 10 = ${ 10 >= 10}`) // verdadadeiro = true
console.log(`10 >= 9 = ${ 10 >= 9}`) // verdadadeiro = true

// menor que
console.log(`10 < 5 = ${ 10 < 5}`) // falso = false
console.log(`10 < 20 = ${ 10 < 20}`) // verdadadeiro = true

// menor ou igual
console.log(`10 <= 10 = ${ 10 <= 10}`) // verdadadeiro = true
console.log(`10 <= 9 = ${ 10 <= 9}`) // falso = false

// igualdade somente valores
console.log(`1 == '1' = ${ 1 == '1'}`) // verdadadeiro = true
console.log(`1 == '2' = ${ 1 == '2'}`) // falso = false
console.log(`true == 1 = ${true == 1}`) // verdadadeiro = true
console.log(`false == 1 = ${false == 1}`) // falso = false
console.log(`null == undefined = ${null == undefined}`) // verdadadeiro = true
console.log(`'' == 0 = ${'' == 0}`) // verdadadeiro = true

// igualdade de valores e tipo de dado
console.log(`1 === '1' = ${ 1 === '1'}`) // falso = false
console.log(`1 === 1 = ${ 1 === 1}`) // verdadadeiro = true
console.log(`true === 1 = ${true === 1}`) // falso = false
console.log(`false === 1 = ${false === 1}`) // falso = false

// diferença somente de valores
console.log(`1 != '1' = ${ 1 != '1'}`) // falso = false
console.log(`1 != '2' = ${ 1 != '2'}`) // verdadadeiro = true
console.log(`1 != 2 = ${ 1 != 2}`) // verdadadeiro = true

// diferença de valores e tipo de dado
console.log(`1 !== 1 = ${ 1 !== 1}`) // falso = false
console.log(`1 !== '1' = ${ 1 !== '1'}`) // verdadadeiro = true
console.log(`1 !== 2 = ${ 1 !== 2}`) // verdadadeiro = true