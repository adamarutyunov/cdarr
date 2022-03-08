const express = require('express')
const reload = require('reload')
const http = require('http')
const app = express()
const DEBUG = (process.argv[2] == "-D")

var config = require("./config.json")
const port = config.port

const static = require('./src/js/static.js')

app.set('views', './src/pug')
app.set('view engine', 'pug');
app.use('/static', express.static('static'));


app.get('/', (req, res) => {
    res.render('index', {title: "Я"});
})

app.get('/metro', (req, res) => {
    res.render('metro/index', {title: "Метро"});
})

app.get('/trip', (req, res) => {
    res.render('trip', {title: "Трипы"});
})

let projects = static.projects.code

for (let key in projects) {
	let project = projects[key]

	app.get('/' + project.url, (req, res) => {
		res.render(project.url, {
			project: project, 
			next_project: projects[(parseInt(key) + 1) % projects.length],
			title: project.title,
		})
	})
}

app.get('/kfssr', (req, res) => {
    res.send('Слава Карелии!')
})


for (station in static.stations) {
    if (station.visited) {
        app.get(station.url, (req, res) => {
            res.render(station.url, {title: station.name})
        })
    }
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


