require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const connect_to_db = require('./database/database');
const path = require("path")
const bodyParser = require('body-parser');
const sign_up = require('./controllers/sign-up');

// Middlware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Database
connect_to_db();

// Views
app.use(express.static(path.join(__dirname, "../front-end", "build")));
app.use(express.static("public"));

// Routes
app.use(sign_up);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../front-end", "build", "index.html"));
});

// Listening
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
