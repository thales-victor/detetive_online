import comodo from "../enum/comodo";
import personagem from "../enum/personagem";
import arma from "../enum/arma";
import jogador from "./jogador";


export default class rodada {
  id: number
  jogador: jogador;
  dado: number;
  comodo: comodo;
  personagem: personagem;
  arma: arma;
  prova: jogador;
}