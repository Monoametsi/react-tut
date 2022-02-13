const express = require('express');
const router = express.Router();
const { register } = require('../controllers/registerController');
const { login, logOut } = require('../controllers/loginController');

router.post('/register', register);

router.post('/login', login);

router.get('/logout', logOut);

module.exports = router;