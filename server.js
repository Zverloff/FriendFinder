var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

var PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.express.urlencoded({ extended: true }))
app.use(bodyParser.express.json())

require('.app/routing/apiRoutes.js')
require('.app/routing/htmlRoutes.js')

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'home.html'))
})

app.get('/survey', function(req, res){
    res.sendFile(path.resolve(__dirname, 'survey.html'))
})

app.get('/api/friends', function(req, res) {
    return res.json(friends)
})

app.post('/api/friends', function(req, res) {
    var newFriend = req.body
    res.json(newFriend)
})


app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT)
})