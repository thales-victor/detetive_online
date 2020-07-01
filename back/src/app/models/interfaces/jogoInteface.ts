
import { Document } from 'mongoose';
import crime from '../../domain/crime';
import jogador from '../../domain/jogador';
import rodada from '../../domain/rodada';
import comodo from '../../../enum/comodo';
import personagem from '../../../enum/personagem';
import arma from '../../../enum/arma';


export interface jogoInterface extends Document {
  id: number;
  crime: crime;
  jogadores: jogador[];
  jogadas: rodada[];
  provas: (comodo | personagem | arma)[];
  vencedor?: jogador;
}