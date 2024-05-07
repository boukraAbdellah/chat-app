const Conversation = require("../models/conversatio.model");
const Message = require("../models/message.model");

const sendMessage = async (req, res) => {
  try {
    const {message} = req.body
    const { id:receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants : {$all: [senderId,receiverId]}
    })

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    })

    if (newMessage){ 
      conversation.messages.push(newMessage._id)
    }
    

    // SOCKET.IO FUNCTION

    // this will run in sequence
    // await newMessage.save()
    // await conversation.save()

    // this will run in parallel
    await Promise.all([newMessage.save(), conversation.save()])

    res.status(201).json(newMessage)


    
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
    console.log('error from messages controller ',error.message)
  }
}

const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants : {$all: [senderId,userToChatId]}
    }).populate("messages") // not reference but actual messages
    // instead of returning array of id it return array of messages(obj)

    if (!conversation)
      return res.status(200).json([])

    const messages = conversation.messages

    res.status(200).json(messages)
    
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
    console.log('error from getMessages controller ',error.message)
    
  }
}


module.exports = {
  sendMessage,
  getMessages
}