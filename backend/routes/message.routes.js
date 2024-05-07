const express = require('express');
const  protectRoute  = require('../middleware/protectRoute');
const { sendMessage, getMessages } = require('../controllers/message.controller');

const MessagesRouter = express.Router();

MessagesRouter.post('/send/:id', protectRoute, sendMessage);
MessagesRouter.get('/:id',protectRoute,getMessages);

module.exports = MessagesRouter;

