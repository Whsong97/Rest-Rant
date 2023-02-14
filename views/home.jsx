const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/image/steamed-dumplings.jpg" alt="Steamed Dumplings" width="400" height="300"/>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@charlesdeluvio">Charles Deluvio</a> on <a href="https://unsplash.com/photos/wr8Ze_O-sjI"> Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home