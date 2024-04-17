const express = require('express')
const reload = require('reload')
const http = require('http')
const app = express()
const DEBUG = (process.argv[2] == "-D")

var config = require("./config.json")
const port = config.port

const static = require('./static/script/static.js')

app.set('views', './src/pug')
app.set('view engine', 'pug');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/static', express.static('static'));


app.get('/', (req, res) => {
    res.render('index');
})

let projects = static.projects.code

for (let project of projects) {
	app.get('/' + project.url, (req, res) => {
		res.render(project.url, { projects })
	})
}


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


