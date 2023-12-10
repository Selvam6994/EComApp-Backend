import express from 'express'
import { pageAuth } from '../Controllers/token.controller.js'



 const authRouter = express.Router()

authRouter.get('/',pageAuth)

export default authRouter