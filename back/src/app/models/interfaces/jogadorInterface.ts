import personagem from '../../../enum/personagem';
import { Document } from 'mongoose';

export interface jogador {
  _id: string;
  nome: string;
  personagem: personagem;
  fezAcusacao: boolean;
}

export interface jogadorInterface extends Document {
  _id: string;
  nome: string;
  personagem: personagem;
  fezAcusacao: boolean;
}