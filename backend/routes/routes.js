const express = require('express');
const router = express.Router();
const { register } = require('../controllers/registerController');
const { login, logOut } = require('../controllers/loginController');
const { authMiddlewareLogin, routeProtector } = require('../controllers/middleWare');

router.post('/register', authMiddlewareLogin, register);

router.post('/login', authMiddlewareLogin, login);

router.get('/logout', logOut);

module.exports = router;