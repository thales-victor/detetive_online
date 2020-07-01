
enum personagem {
  CelMustard,
  ProfPlum,
  RevGreen,
  SraPeacock,
  SrtaScarlet,
  SraWhite
}

const obterPersonagens = (value?: personagem) => {
  let list: personagem[] = [
    personagem.CelMustard,
    personagem.ProfPlum,
    personagem.RevGreen,
    personagem.SraPeacock,
    personagem.SrtaScarlet,
    personagem.SraWhite
  ]
  if (value) {
    list.slice(value, 1);
  }
  return list;
}

export default personagem;
export { obterPersonagens };