import comodo from "../../../enum/comodo";
import personagem from "../../../enum/personagem";
import arma from "../../../enum/arma";
import { jogador } from "./jogadorInterface";


export interface rodadaInterface extends Document {
  _id: number
  jogador: jogador;
  dado: number;
  comodo: comodo;
  personagem: personagem;
  arma: arma;
  prova: jogador;
}