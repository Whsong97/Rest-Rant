// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

//Middlewares
app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', function (req, res) {
    res.render('home')
})

app.get('*', function (req, res) {
    res.render('error404')
})

//Listening for Connections
app.listen(process.env.PORT)