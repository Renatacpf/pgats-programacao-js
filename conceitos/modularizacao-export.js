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

exibirNomePet(`Pipoca`)
exibirNomePet(`Pantera`)
exibirNomePet(`Rex`)

// export {} / import
export {
    exibirNomePet
}