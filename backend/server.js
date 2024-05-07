const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require("cookie-parser");

const authRouter = require('./routes/auth.routes')
const connectToMongoDb = require('./db/connectToMongo')
const MessagesRouter = require('./routes/message.routes');
const userRouter = require('./routes/user.routes');

const app = express()

dotenv.config()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser());// to parse the requests with json payloads (from req.body)

app.use('/api/auth', authRouter)
app.use('/api/user',userRouter)
app.use('/api/messages', MessagesRouter)


app.listen(PORT, () => {
  connectToMongoDb()
  console.log('Server running on port ' + PORT)
})