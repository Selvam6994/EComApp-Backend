import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './Database/conectivity.js'
import productRouter from './Routers/createProduct.route.js'

dotenv.config()

const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

console.log(connectDB())

app.use('/api',productRouter)


app.listen(port,()=>{console.log(`app connected to ${port}`)})

