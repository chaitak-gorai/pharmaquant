import express, { json } from 'express'
import colors from 'colors'
const app = express()
import userRoutes from './routes/userRoutes.js'
import connectDB from './db.js'
import dotenv from 'dotenv'
app.use(json())
dotenv.config()
connectDB()
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Server is running' })
})
app.use('/user', userRoutes)
app.listen(3000, () => {
  console.log('Server is running'.yellow.bold)
})
