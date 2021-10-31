const router = require('express').Router();
const login = require('./login');

router.use('/v1', login);

module.exports = router;
