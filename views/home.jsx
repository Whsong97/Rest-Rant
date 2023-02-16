const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/image/steamed-dumplings.jpg" alt="Steamed Dumplings" />
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@charlesdeluvio">Charles Deluvio</a> on <a href="https://unsplash.com/photos/wr8Ze_O-sjI"> Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home