import * as dotenv from 'dotenv';

dotenv.config();

export default { mongoConnection: process.env.URL_MONGO }