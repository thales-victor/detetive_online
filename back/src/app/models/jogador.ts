import * as mongoose from 'mongoose';
import { jogadorInterface } from './interfaces/jogadorInterface';

const JogadorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  personagem: {
    type: Number,
    required: true
  },
  fezAcusacao: {
    type: Boolean,
    required: true,
    default: false
  }
});

export default mongoose.model<jogadorInterface>('Jogador', JogadorSchema)