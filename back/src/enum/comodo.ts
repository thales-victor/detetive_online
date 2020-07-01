
enum comodo {
  entrada = 0,
  salaDeEstar = 1,
  salaDeJantar = 2,
  cozinha = 3,
  salaDeMusica = 4,
  jardimDeInverno = 5,
  salaoDeJogos = 6,
  biblioteca = 7,
  escritorio = 8
}

const obterComodos = (value?: comodo) => {
  let list = [
    comodo.entrada,
    comodo.salaDeEstar,
    comodo.salaDeJantar,
    comodo.cozinha,
    comodo.salaDeMusica,
    comodo.jardimDeInverno,
    comodo.salaoDeJogos,
    comodo.biblioteca,
    comodo.escritorio
  ]
  if (value) {
    list.slice(value, 1);
  }
  return list;
}

export default comodo;
export { obterComodos };