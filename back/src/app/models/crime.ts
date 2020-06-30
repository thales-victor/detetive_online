import * as mongoose from 'mongoose';
import { crimeInterface } from './interfaces/crimeInteface';

const CrimeSchema = new mongoose.Schema({
  comodo: {
    type: Number,
    required: true
  },
  personagem: {
    type: Number,
    required: true
  },
  arma: {
    type: Number,
    required: true
  },
});

export default mongoose.model<crimeInterface>('Crime', CrimeSchema)