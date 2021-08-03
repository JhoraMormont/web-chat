const app = require('express')();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
  })
  
io.on("connection", socket => {
    console.log(`User connected`)
});

module.exports = httpServer;