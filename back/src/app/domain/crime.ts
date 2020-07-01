import comodo from "../../enum/comodo";
import personagem from "../../enum/personagem";
import arma from "../../enum/arma";
import GerarNumeroAleatorio from "../utils/random";

export default class crime {
  comodo: comodo;
  personagem: personagem;
  arma: arma;

  constructor() {
    this.comodo = GerarNumeroAleatorio(0, 8);
    this.personagem = GerarNumeroAleatorio(0, 5);
    this.arma = GerarNumeroAleatorio(0, 5);
  }
}