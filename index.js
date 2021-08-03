require('dotenv').config();
const httpServer = require('./server/server');

const { PORT } = process.env;

httpServer.listen(PORT, (err, res) => {
    if (err){
        log.error(err);
        process.exit();
    }
    console.log(`Server listening on PORT: ${PORT}`);
});