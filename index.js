import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import productRouter from './Routers/createProduct.route.js'
import { client } from './Database/conectivity.js'


dotenv.config()

const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
await client.connect();


app.use('/api',productRouter)

app.listen(port,()=>{console.log(`app connected to ${port}`)})
