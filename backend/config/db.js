import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose
    .connect('Your MongoDB URL')
    .then(() => {
      console.log('DB connected')
    })
}
