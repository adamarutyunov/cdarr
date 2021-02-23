const express = require('express')
const app = express()
const port = 80

app.set('views', './src/pug')
app.set('view engine', 'pug');
app.use('/static', express.static('static'));


app.get('/', (req, res) => {
    res.render('index', {title: "Я — Адам Арутюнов"});
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})