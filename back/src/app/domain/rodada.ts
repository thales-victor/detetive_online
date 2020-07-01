import jogador from "./jogador";
import comodo from "../../enum/comodo";
import personagem from "../../enum/personagem";
import arma from "../../enum/arma";
import GerarNumeroAleatorio from "../utils/random";

export default class rodada {
  _id: number
  jogador: jogador;
  dado?: number;
  comodo?: comodo;
  personagem?: personagem;
  arma?: arma;
  prova?: jogador;

  constructor(jogador: jogador) {
    this.jogador = jogador;
  }

  jogarDados () {
    this.dado = GerarNumeroAleatorio(2,12);
  }

  criarSuspeita(comodo: comodo, personagem: personagem, arma: arma) {
    this.comodo = comodo;
    this.personagem = personagem;
    this.arma = arma;
  }

  apresentarProva(jogador: jogador) {
    this.prova = jogador;
  }
}