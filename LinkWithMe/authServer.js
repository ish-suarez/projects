require('dotenv').config()
const authPort = process.env.AUTHPORT || 9000
const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())
app.use(morgan('dev'));



app.listen(authPort, () => console.log(`Auth server is listening on port ${authPort}`))