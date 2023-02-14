const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/image/coffee-splash.jpg" alt="Coffee Splash" />
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@tangerinenewt">Kura Tregenza</a> on <a href="https://unsplash.com/photos/OgQFqvpRHB4"> Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404