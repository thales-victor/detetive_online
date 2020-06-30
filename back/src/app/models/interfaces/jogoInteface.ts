
import { jogador } from './jogadorInterface';
import { rodada } from './rodadaInteface';
import { crime } from './crimeInteface';
import { Document } from 'mongoose';

export interface jogo {
  _id: number;
  crime: crime;
  jogadores: jogador[]
  jogadas: rodada[]
}

export interface jogoInterface extends Document {
  _id: number;
  crime: crime;
  jogadores: jogador[]
  jogadas: rodada[]
}