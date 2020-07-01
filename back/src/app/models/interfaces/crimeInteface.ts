import comodo from '../../../enum/comodo';
import personagem from '../../../enum/personagem';
import arma from '../../../enum/arma';
import { Document } from 'mongoose';

export interface crimeInterface extends Document {
  comodo: comodo;
  personagem: personagem;
  arma: arma;
}
