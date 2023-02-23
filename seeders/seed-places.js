const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/image/green-curry.png',
    founded: 1990
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state:'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/image/cat-cafe-coffee.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
