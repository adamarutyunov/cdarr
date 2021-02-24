const express = require('express')
const reload = require('reload')
const http = require('http')
const app = express()
const port = 80
const DEBUG = (process.argv[2] == "-D")


app.set('views', './src/pug')
app.set('view engine', 'pug');
app.use('/static', express.static('static'));


app.get('/', (req, res) => {
    res.render('index', {title: "Я — Адам Арутюнов"});
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


