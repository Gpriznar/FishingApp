const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const models = require('./models')
const PORT = 8080
const bcrypt = require('bcrypt')
const saltRounds = 10

app.use(cors())
app.use(bodyParser.json())

//Auth Function

function authenticate(req,res, next) {

  let headers = req.headers['authorization']
  let token = headers.split('')[1]

  jwt.verify(token, 'secret', (err, decoded)=> {
    if(decoded) {
      if(decoded.userId) {
        userId = decoded.userId
        next()
      } else {
        res.status(401).json({messsage: 'Token Invalid'})
      }
    } else {
      res.status(401).json({message: 'Token Invalid'})
    }
  })
}

//Login Post

app.post('/login', (req,res) => {

  let username = req.body.username
  let password = req.body.password
  let email = req.body.email

  models.User.findAll({
    where: {
      username: username,
      password: password
    }
  })
  .then((user) => {
    console.log(user)
  if(user) {

    jwt.sign({userId: user}, 'secret', function(err, token) {
      console.log(user)
      if(token) {
        res.json({token: token})
      } else {
        res.status(500).json({message: 'Unable to generate token'})
       }
     })
    }
  })
})

//Registration Post

app.post('/registration', (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function(err,hash) {

    let username = req.body.username
    let email = req.body.email
    let password = hash

    console.log(password)

    let newUser = models.User.build({
      name: username,
      email: email,
      password: password
    })
    models.User.findOne({
      where: {name : req.body.email}
    }).then(function (result) {
      if (null !=result) {
        console.log('EMAIL ALREADY EXISTS:', result.email);
      }
      else {
        newUser.save().then(function(newUser){

        })
      }
    })
  })
})

//AddNewFish Post

app.post('/api/AddNewFish', (req,res) => {
  let latitude = req.body.latitude
  let longitude = req.body.longitude
  let fishname = req.body.fishname
  let fishsize = req.body.fishsize
  let lurebait = req.body.lurebait
  let linestrength = req.body.linestrength
  let rod = req.body.rod
  let reel = req.body.reel
  let weather = req.body.weather


  let addData = models.FishData.build({
    latitude: latitude,
    longitude: longitude,
    fishname: fishname,
    fishsize: fishsize,
    lurebait: lurebait,
    linestrength: linestrength,
    rod: rod,
    reel: reel,
    weather: weather

  })
  addData.save()
  .then((newCatch) => {
    res.json({success: true, message:'Your catch has been added!'})
  }).catch(error => res.json({success: false, message: 'ERROR: Catch not saved!'}))
})

//PreviousFishList Get

app.get('/previousfishlist', async (req,res) => {
  let previousCatches = await models.FishData.findAll()
  res.json(previousLocations)
})

//Port

app.listen(PORT, () => {
  console.log('Server is running...')
})
