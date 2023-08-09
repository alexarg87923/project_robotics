require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001
const connect_to_db = require('./database/database');
var cors = require('cors')
const bodyParser = require('body-parser');
const sign_up = require('./controllers/sign-up');

// Middlware
app.use(cors);
app.use(bodyParser);
app.use(express.json());

// Database
connect_to_db();

// Routes
app.use(sign_up);

// Listening
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
