
enum arma {
  faca,
  castical,
  revolver,
  corda,
  canoDeChumbo,
  chaveInglesa
}

const obterArmas = (value?: arma) => {
  let list = [
    arma.faca,
    arma.castical,
    arma.revolver,
    arma.corda,
    arma.canoDeChumbo,
    arma.chaveInglesa,
  ]
  if (value) {
    list.slice(value, 1);
  }
  return list;
}

export default arma;
export { obterArmas };