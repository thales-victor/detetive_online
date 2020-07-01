import * as mongoose from 'mongoose';
import { jogoInterface } from './interfaces/jogoInteface';

const JogoSchema = new mongoose.Schema({
  crime: {
    type: Object,
    required: true
  },
  jogadores: {
    type: Array,
    required: true
  },
  jogadas: {
    type: Array,
    required: true
  },
  provas: {
    type: Array,
    required: true
  },
  vencedor: {
    type: Object,
    required: false
  }
});

export default mongoose.model<jogoInterface>('Jogo', JogoSchema)