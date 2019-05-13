const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcrypt')
const saltRounds = 10
const PORT = 8080
const jwt = require('jsonwebtoken')
// const models = require('./models')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log('Server is running...')
})
