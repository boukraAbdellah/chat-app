const express = require('express');
const { logout, signup, login } = require('../controllers/auth.controller');

const authRouter = express.Router();

authRouter.post('/login',login);

authRouter.post("/signup", signup);

authRouter.post('/logout', logout)


module.exports = authRouter ;