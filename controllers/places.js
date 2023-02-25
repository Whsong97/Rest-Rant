const router = require('express').Router()
const db = require('../models/index')

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    if (!req.body.pic) req.body.pic = undefined
    if (!req.body.city) req.body.city = undefined
    if (!req.body.state) req.body.state = undefined
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
        res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/places')
    })
        .catch(err => {
            console.log('err', err)
                res.render('error404')
    })
})

router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
        res.render('error404')
  })
})

router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
    if (req.body.rant) {
        req.body.rant = true
    }
    else {
        req.body.rant = false
    }
    res.send('GET /places/:id/comment stub')
})


module.exports = router
