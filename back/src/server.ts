import * as express from 'express';
import * as http from 'http';
import * as socket from 'socket.io';
import * as cors from 'cors';
import { connect } from './database/mongoose';
import jogador from './app/domain/jogador';
import jogo from './app/domain/jogo';
import personagem from './enum/personagem';

import JogoSchema from './app/models/jogo';
import JogoController from './app/controllers/jogoController';

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(cors());
connect();
const jogoController = new JogoController();
app.route('/').post(jogoController.criarJogo);

app.get('/leozera', async (req, res) => {
  const novoJogador = new jogador('Leozera', personagem.CelMustard);
  let jogoInterface = await JogoSchema.findOne({sala: 'thales', senha: '123456'});
  if (jogoInterface) {
    jogoInterface.jogadores.push(novoJogador);
    await JogoSchema.update(jogoInterface, this);
    return res.status(201).json(jogoInterface);
  } else {
    return res.status(400).json('jogo não encontrado');
  }
})

io.on('connection', async (socket) => {
  console.log(`Socket conectado: ${socket.id}`);

  socket.on('disconnect', () => {
    io.removeAllListeners();
    console.log(`Socket desconectado: ${socket.id}`)
  })
})

server.listen(3001);