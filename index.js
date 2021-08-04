require('dotenv').config();
const httpServer = require('./server/server');

const { PORT } = process.env;

httpServer.listen(PORT, (err, res) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server listening on PORT: ${PORT}`);
});
