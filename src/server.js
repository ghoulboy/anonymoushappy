const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sql = require('./db.js');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');


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

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: "https://gkatsaros.auth0.com/.well-known/jwks.json"
        }),
        // This is the identifier we set when we created the API
        audience: 'http://localhost:3001',
        issuer: "gkatsaros.auth0.com", // e.g., you.auth0.com
        algorithms: ['RS256']
    });

// app.get('/', authCheck, (req, res) => {
app.get('/', (req, res) => {
    // res.send({'res':'ohello World'})
    sql.query("SELECT * FROM cats", function (err, cats) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('cats : ', res);  
          res.send({'res': cats})
        }
    });
})

app.route('/api/cats').post((req, res) => {
    res.send(201, req.body)
})

app.get('/api/checkUser/:email', (req, res) => {
    sql.query(`SELECT * FROM users WHERE email = "${req.params.email}"`, function (err, cats) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          res.send({'res': cats})
        }
    });
})

app.post('/api/createUser', (req, res) => {
    var email = JSON.stringify(req.body.email)
    sql.query(`INSERT INTO users (email) VALUES ("${req.body.email}")`, function (err, cats) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          res.send({'res': cats})
        }
    });
})

app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204)
})