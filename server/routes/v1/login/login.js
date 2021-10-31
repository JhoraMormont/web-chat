const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {
  console.log('Get token...');
  res.send({ token: 'tokenTest' });
});

module.exports = router;
