import personagem from "../enum/personagem";

export default class quadrante {
  linha: string;
  coluna: string;

  personagem?: personagem;

  ehComodo: boolean;
  entradas: quadrante[];
}