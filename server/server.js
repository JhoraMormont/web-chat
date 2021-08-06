const app = require('express')();
const path = require('path');
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

io.on('connection', socket => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', msg => {
    console.log(msg);
    io.emit('message', msg);
  });
});

module.exports = httpServer;
