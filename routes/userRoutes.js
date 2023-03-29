import express from 'express'
import { login, register } from '../controllers/userController.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ msg: 'User Route Running' })
})

router.post('/register', register)
router.post('/login', login)

export default router
