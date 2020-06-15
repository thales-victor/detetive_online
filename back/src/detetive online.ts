import comodo from './enum/comodo';
import personagem from './enum/personagem';
import arma from './enum/arma';

class jogo {
  id: number;
  crime: crime;
  jogadores: jogador[]
  jogadas: rodada[]
}

class crime {
  comodo: comodo;
  personagem: personagem;
  arma: arma;
}

class jogador {
  id: number;
  nome: string;
  fezAcusacao: boolean;
}

class rodada {
  id: number
  jogador: jogador;
  dado: number;
  comodo: comodo;
  personagem: personagem;
  arma: arma;
  prova: jogador;
}

class quadrante {
  linha: number;
  coluna: string;

  personagem?: personagem;

  ehComodo: boolean;
  entradas: quadrante[];
}