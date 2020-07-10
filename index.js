import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDatabase from './src/configs/db.config'
import router from './src/routes/router'
const rfs = require('rotating-file-stream')
import path from 'path'

dotenv.config()
connectDatabase()

const port = process.env.PORT || 3333
const isProduction = process.env.NODE_ENV === 'production'

const app = express()

app.use(helmet())

const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, 'log')
})
app.use(isProduction ? morgan('combined', { stream: accessLogStream }) : morgan('dev'))

app.use(cors())
app.use(express.json())

app.get('/api', router.default)
app.get('/', (req, res) => {
  res.json({
    message: 'hello'
  })
})

app.listen(port, () => {
  console.log(port, 'Port')
})