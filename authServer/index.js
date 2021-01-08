const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000
var cors = require('cors')

// usernames are keys and passwords are values
const users = {
  username: 'password',
}

const app = express()

app.use(bodyParser.json())

app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});


app.post('*', cors(), (req, res, next) => {

  const {username, password} = req.body

  if (!username || !password) return res.status(400).send('Missing username or password')
  // in practice, this is potentially revealing too much information.
  // an attacker can probe the server to find all of the usernames.
  if (!users[username]) return res.status(403).send('User does not exist')
  if (users[username] !== password) return res.status(403).send('Incorrect password')
  //return res.status(200).send()
  return res.json( {token: 'ndiofy8qy98r0it09grhgb9fd'})
})

// catch 404
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => res.status(err.status || 500).send(err.message || 'There was a problem'))

const server = app.listen(PORT)
console.log(`Listening at http://localhost:${PORT}`)
