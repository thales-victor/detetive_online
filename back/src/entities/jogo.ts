import crime from './crime';
import jogador from './jogador';
import rodada from './rodada';

export default class jogo {
  id: number;
  crime: crime;
  jogadores: jogador[]
  jogadas: rodada[]
}