const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require("cookie-parser");

const authRouter = require('./routes/auth.routes')
const connectToMongoDb = require('./db/connectToMongo')
const MessagesRouter = require('./routes/message.routes');
const userRouter = require('./routes/user.routes');
const { app, server } = require('./socket/socket');


dotenv.config()
const PORT = process.env.PORT || 5000

app.use(express.json())// to parse the requests with json payloads (from req.body)
app.use(cookieParser());
app.use(cors())

app.use('/api/auth', authRouter)
app.use('/api/user',userRouter)
app.use('/api/messages', MessagesRouter)


server.listen(PORT, () => {
  connectToMongoDb()
  console.log('Server running on port ' + PORT)
})