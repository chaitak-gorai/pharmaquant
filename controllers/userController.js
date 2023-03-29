import expressAsyncHandler from 'express-async-handler'
import colors from 'colors'
import User from '../models/userModel.js'
const register = expressAsyncHandler(async (req, res) => {
  try {
    console.log('Registering User..'.green.inverse)

    const { name, email, userName, password } = req.body
    const existingUser = await User.findOne({ email: email })
    if (existingUser) {
      return res.status(400).json({ msg: 'User Already Exists' })
    }
    const user = {
      name,
      email,
      userName,
      password,
    }
    const newUser = await User.create(user)
    if (newUser) {
      res.status(200).json({ msg: 'User Created' })
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', err })
  }
})

const login = expressAsyncHandler(async (req, res) => {
  try {
    console.log('Logging User..'.green.inverse)
    const { email, password } = req.body
    console.log(req.body)
    const user = await User.findOne({ email: email })
    if (user) {
      console.log(user)
      if (password == user.password) {
        res.status(200).json({ msg: 'User Logged In' })
      } else {
        res.status(401).json({ msg: 'Invalid Credentials' })
      }
    }
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', err })
  }
})
export { register, login }
