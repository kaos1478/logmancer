import mongoose from 'mongoose'

const { DATABASE_URL } = process.env

export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))
  console.log('Mongoose Connection Established')

  const LogSchema = new mongoose.Schema({
    userId: Number,
    details: [String]
  })

  LogSchema.set('timestamps', true)

  const Log = mongoose.models.Log || mongoose.model('Log', LogSchema)

  return { conn, Log }
}
