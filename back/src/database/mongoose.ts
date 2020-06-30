import * as mongoose from 'mongoose';
import Connection from '../config/config';
import { resolve } from 'path';

const urlMongoDb = Connection.mongoConnection;

export function connect() {
  return new Promise(() => {
    mongoose.connect(urlMongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then((result) => {
      resolve();
    }).catch((error) => {
      return error;
    })
  })
}

export function close() {
  return mongoose.disconnect();
}