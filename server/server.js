const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const httpServer = http.createServer(app);
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
