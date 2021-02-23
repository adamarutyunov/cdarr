const express = require('express')
const bundle = require('./dist/bundle')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send(bundle)
})
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})