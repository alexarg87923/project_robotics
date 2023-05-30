const express = require('express')
const sqlite3 = require('sqlite3');
const app = express()
const path = require('path');
const dataBase = new sqlite3.Database(path.join(__dirname, 'userData.db')); //kept crashing without this idk
const port = 3001

app.use(express.json());

app.post('/api/v1/sign-up', (req, res, next) => {
  const newUserData = req.body;
  console.log(newUserData)

  


  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})