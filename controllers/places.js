const router = require('express').Router()
const places = require('../models/places')

router.post('/', (req, res) => {
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'https://j4y2v5w8.stackpathcdn.com/wp-content/uploads/2017/03/Generic-vs.-Brand-Name.jpg'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

router.get('/', function(req, res){
   
    router.get('/new', function(req, res){
        res.render('places/new')
    })
 
    res.render('places/index', { places })
})

module.exports = router