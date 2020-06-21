import express from 'express';
import http from 'http';
import socket from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socket(server, { origins: '*:*' });

// app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log(`Socket conectado: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`Socket conectado: ${socket.id}`)
  })
})



server.listen(3001);