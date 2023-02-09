const require = ('express')

const app = express()

app.get('/', function (req, res) {
    res.send('')
})

const PORT = 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))