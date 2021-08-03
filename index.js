require('dotenv').config({ debug: process.env.DEBUG })
const app = require('express')();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

const { PORT } = process.env;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
  })
  
io.on("connection", socket => {
    console.log(`User connected`)
});

httpServer.listen(PORT, (err, res) => {
    if (err){
        log.error(err);
        process.exit();
    }
    console.log(`Server listening on PORT: ${PORT}`);
});
