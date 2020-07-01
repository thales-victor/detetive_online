import crime from "./crime";
import jogador from "./jogador";
import rodada from "./rodada";
import comodo, { obterComodos } from "../../enum/comodo";
import personagem, { obterPersonagens } from "../../enum/personagem";
import arma, { obterArmas } from "../../enum/arma";
import GerarNumeroAleatorio from "../utils/random";
import JogadorSchema from '../models/jogador';

export default class jogo {
  id: number;
  crime: crime;
  jogadores: jogador[];
  jogadas: rodada[];
  provas: (comodo | personagem | arma)[];
  vencedor?: jogador;

  constructor(jogador: jogador) {
    this.crime = new crime();
    this.jogadores = [];
    this.jogadas = [];
    this.provas = [];
    this.incluirJogador(jogador);
  }

  comecarPartida() {
    this._prepararProvas();
    this._distribuirProvas();
    this.novaJogada(new rodada(this._pegarPrimeiroJogador()));
  }

  terminarPartida(jogador: jogador) {
    this.vencedor = jogador;
  }

  incluirJogador(jogador: jogador) {
    if (this.jogadores.length < 6) {
      this.jogadores.push(jogador);
      this._salvarJogador(jogador);
      return true;
    }
    return false;
  }

  novaJogada(rodada: rodada) {
    this.jogadas.push(rodada);
  }

  _salvarJogador(jogador: jogador) {
    JogadorSchema.create(jogador);
  }

  _pegarPrimeiroJogador() {
    return this.jogadores.find(jogador => jogador.personagem == personagem.SrtaScarlet);
  }

  _prepararProvas() {
    const armasRestantes = obterArmas(this.crime.arma);
    const personagensRestantes = obterPersonagens(this.crime.personagem);
    const comodosRestantes = obterComodos(this.crime.comodo);

    armasRestantes.forEach(arma => this._incluirProva(arma));
    personagensRestantes.forEach(personagem => this._incluirProva(personagem));
    comodosRestantes.forEach(comodo => this._incluirProva(comodo));
  }

  _incluirProva(prova: comodo | personagem | arma) {
    this.provas.push(prova);
  }

  _distribuirProvas() {
    let provas = [...this.provas];

    for (let i = 0; i < this.provas.length; i++) {
      var prova = this._pegarProvaAleatoria(provas);

      this.jogadores[i % this.jogadores.length].receberProva(prova);
    }
  }

  _pegarProvaAleatoria(provas: (comodo | personagem | arma)[]) {
    let index = GerarNumeroAleatorio(0, provas.length - 1);
    let prova = provas[index];
    provas.slice(index, 1);
    return prova;
  }
}