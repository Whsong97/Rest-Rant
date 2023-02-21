const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div className="row"/>
                <div className="col-sm-6">
                    <br />
                <h1>{ data.place.name }</h1>
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
                    <h2>
                        Rating
                    </h2>
                
                    <br />
                </div>
                <h2>
                  Description
                </h2>
                <h3>
                  {data.place.show}
                </h3>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
                <br />
            </main>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                         Edit
                </a>
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                         Delete
                    </button>
                </form>
            
        </Def>
    )
}


module.exports = show