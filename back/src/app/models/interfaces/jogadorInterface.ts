import personagem from '../../../enum/personagem';
import { Document } from 'mongoose';

export interface jogadorInterface extends Document {
  _id: string;
  nome: string;
  personagem: personagem;
  fezAcusacao: boolean;
}