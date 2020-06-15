const express = require('express');
const path = require('path');
const http = require('http')
const socket = require('socket.io');
const ejs = require('ejs');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`)
})

server.listen(3001);