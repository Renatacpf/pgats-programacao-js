// Distribuidor de petiscos para cães
function distribuirPetiscos(listaDeCaes) {
  listaDeCaes.forEach(cao => {
    console.log(`Entregando petisco para ${cao}`);
  });
}

export {
    distribuirPetiscos
}