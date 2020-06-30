export interface quadrante {
  linha: string;
  coluna: string;

  personagem?: number; //enumPersonagem

  ehComodo: boolean;
  entradas: quadrante[];
}