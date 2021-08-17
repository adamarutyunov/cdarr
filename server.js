const express = require('express')
const reload = require('reload')
const http = require('http')
const app = express()
const DEBUG = (process.argv[2] == "-D")

var config = require("./config.json")
const port = config.port

app.set('views', './src/pug')
app.set('view engine', 'pug');
app.use('/static', express.static('static'));


app.get('/', (req, res) => {
    res.render('index', {title: "Я"});
})

app.get('/pycon', (req, res) => {
    res.render('pycon', {title: "Pycon"});
})

app.get('/chekker', (req, res) => {
    res.render('chekker', {title: "Chekker"});
})

app.get('/chatile', (req, res) => {
    res.render('chatile', {title: "Chatile"});
})

app.get('/qladmin', (req, res) => {
    res.render('qladmin', {title: "QLAdmin"});
})

app.get('/untitled', (req, res) => {
    res.render('untitled', {title: "Untitled"});
})

app.get('/university', (req, res) => {
    res.render('pages/university', {title: "Объявление"});
})

app.get('/kfssr', (req, res) => {
    res.send('Слава Карелии!')
})


if (DEBUG) {
    var server = http.createServer(app)

    reload(app).then(function (reloadReturned) {
        server.listen(port, function () {
        console.log('Debug server listening on port ' + port)
        })
    })
} else {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}


