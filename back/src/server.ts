import * as express from 'express';
import * as http from 'http';
import * as socket from 'socket.io';
import * as cors from 'cors';
import { connect } from './database/mongoose';
import { jogador } from './app/models/interfaces/jogadorInterface';
import JogadorSchema from './app/models/jogador';

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(cors());
connect();

async function createNewGame(nome: string, personagem: number) {
  let result: jogador;

  result = await JogadorSchema.findOne({nome: nome});
  
  if (!result) {
    console.log('cria um novo ai');
    const novoJogador = {
      _id: null,
      nome: nome,
      personagem: personagem,
      fezAcusacao: false
    };
    result = await JogadorSchema.create(novoJogador);
  }

  return result;
}

app.get('/', (req, res) => {
  const novoJogador = createNewGame('thales', 1);

  return res.status(201).json(novoJogador);
})

io.on('connection', async (socket) => {
  console.log(`Socket conectado: ${socket.id}`);
  
  const novoJogador = await createNewGame('thales', 1);

  socket.emit('novoJogador', novoJogador);

  socket.on('disconnect', () => {
    io.removeAllListeners();
    console.log(`Socket desconectado: ${socket.id}`)
  })
})

server.listen(3001);