const router = require('express').Router()

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

router.get('/', function(req, res){
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/image/green-curry.png'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/image/cat-cafe-coffee.jpg'
    }]
    router.get('/new', function(req, res){
        res.render('places/new')
    })
 
    res.render('places/index', { places })
})

module.exports = router