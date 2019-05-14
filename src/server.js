const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }

const app = express()

app.listen(8000, () => {
    console.log('Server started!')
})

app.use(bodyParser.json())
app.use(cors(corsOptions))

app.route('/').get((req, res) => {
    res.send({'res':'ohello World'})
})

app.route('/api/cats').post((req, res) => {
    res.send(201, req.body)
})

app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body)
})

app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204)
})