const express = require('express')
const app = express()
const port = 3001

app.post('/sign-up', (req, res, next) => {
  // TO DO
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})