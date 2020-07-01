import personagem from "../../enum/personagem";
import comodo from "../../enum/comodo";
import arma from "../../enum/arma";

export default class jogador {
  _id: string;
  nome: string;
  personagem: personagem;
  provas: (comodo | personagem | arma)[];
  fezAcusacao: boolean;

  constructor(nome: string, personagem: personagem) {
    this.nome = nome;
    this.personagem = personagem;
    this.fezAcusacao = false;
  }

  fazerAcusacao() {
    this.fezAcusacao = true;
  }

  receberProva(prova: comodo | personagem | arma) {
    this.provas.push(prova);
  }
}