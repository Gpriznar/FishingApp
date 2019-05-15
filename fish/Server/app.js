const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const models = require('./models')
const PORT = 8080
const bcrypt = require('bcrypt')
const saltRounds = 10

app.use(bodyParser.json())
app.use(cors())


//Auth Function

function authenticate(req,res, next) {
  console.log("hello")

  let headers = req.headers["authorization"]
  let token = headers.split(' ')[1]

  jwt.verify(token,'secret',(err, decoded) => {
    if(decoded) {
      if(decoded.username) {
        next()
      } else {
        res.status(401).json({message: 'Token invalid'})
      }
    } else {
      res.status(401).json({message: 'Token invalid'})
    }
  })

}
//Login Post

app.post('/login', (req,res) => {

  let username = req.body.username
  let password = req.body.password

  models.User.findOne({
    where: {
      name: username
    }
  })
  .then((user) => {

    bcrypt.compare(password, user.password).then(function(result) {
      if(result) {
        jwt.sign({name: user.name}, 'secret', function(err, token) {
          if(token) {
          res.json({token: token, id: user.dataValues.id})
          } else {
            res.status(500).json({message: 'Unable to generate token'})
           }
         })
       }
    })
  })
})

//Registration Post

app.post('/registration', (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function(err,hash) {

    let username = req.body.username
    let email = req.body.email
    let password = hash

    let newUser = models.User.build({
      name: username,
      email: email,
      password: password
    })
    models.User.findOne({
      where: {name : req.body.email}
    }).then(function (result) {
      if (null !=result) {
        console.log('Email already exists:', result.email);
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

  //need to pass userID - End of day Tuesday


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



//Delete Post

app.post('/delete', (req, res) => {
  models.FishData.destroy({
    where: {
      id: req.body.entryKey
    }
  })
})

//Port

app.listen(PORT, () => {
  console.log('Server is running...')
})
