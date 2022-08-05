import mongoose from 'mongoose'

const dbConnection = async () => {
  try {
    await mongoose.connect(<string>process.env.MONGO_URI)
    console.log('⚡MongoDB connected!!⚡')
  } catch (error) {
    console.log(error)
    throw new Error('error connecting to database :' + error)
  }
}

export default dbConnection
