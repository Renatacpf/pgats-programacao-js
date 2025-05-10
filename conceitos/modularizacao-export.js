/* 
Sintaxe CommonJS
 module.exports = {} / require('')

 ESM - ECMAScript Standard Modules
   export {} / import

 */

// const nomePet = 'Rex';
// console.log(`O nome do pet é ${nomePet}`);

function exibirNomePet(paramNomePet) {
  console.log(`O nome do pet é ${paramNomePet}`);
}

function exibirIdade(paramIdadePet) {
  console.log(`A idade do pet é ${paramIdadePet}`);
}

// exibirNomePet(`Pipoca`)
// exibirNomePet(`Pantera`)
// exibirNomePet(`Rex`)

// export {} / import
export {
    exibirNomePet,
    exibirIdade
}