const mongoose = require('mongoose')

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectToMongoDb;