const cors = require('cors');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const v1 = require('./routes/v1');

const app = express();
app.use(cors());

app.use('/', v1);

const httpServer = http.createServer(app);
// Encapsulate this into socket listener module, just pass httpServer.
const io = socketIo(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

io.on('connection', socket => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', msg => {
    io.emit('message', msg);
  });
});

module.exports = httpServer;
