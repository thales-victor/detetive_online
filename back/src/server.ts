import * as express from 'express';
import * as http from 'http';
import * as socket from 'socket.io';
import * as cors from 'cors';
import { connect } from './database/mongoose';
import jogador from './app/domain/jogador';
import jogo from './app/domain/jogo';
import personagem from './enum/personagem';

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(cors());
connect();

app.get('/', (req, res) => {
  const novoJogador = new jogador('Thales', personagem.SrtaScarlet);
  var novoJogo = new jogo(novoJogador);

  return res.status(201).json(novoJogo);
})

io.on('connection', async (socket) => {
  console.log(`Socket conectado: ${socket.id}`);
  
  socket.on('disconnect', () => {
    io.removeAllListeners();
    console.log(`Socket desconectado: ${socket.id}`)
  })
})

server.listen(3001);