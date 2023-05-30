const fs = require('fs')
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

  dataBase.get('SELECT * FROM userAccounts WHERE email = ?', [newUserData.email], (error, data) =>{
    if(error){
      res.sendStatus(500);
      return;
    }

    if(!data){
      //make new user
      dataBase.run('INSERT INTO userAccounts (email, password, firstName, lastName) VALUES (?,?,?,?)', [newUserData.email, newUserData.password, newUserData.firstName, newUserData.lastName], function(error){
        if(error){
          res.sendStatus(500);
          return
        }

        //here we will store file submissions
        fs.mkdir(path.join(__dirname, 'userFiles/'+newUserData.email), (makeDirError)=>{ 
          if(makeDirError){
            res.sendStatus(500);
            return;
          }
        });

      });      

      res.sendStatus(200)
    }else//Cant make more than one account with the same email
      res.status(400).send('Email is already taken');
  });
  
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})