import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DataLocation() {

    const [location, setLocation] = useState({

    })

    const params = useParams()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/${params.id}`)
            .then(
                response => response.json())
            .then(data => {
                setLocation(data)
                //setCharacters(data.results)
                console.log(data)

            })
            .catch(function (error) {
                console.log("Hubo un problema con la petición Fetch:" + error.message);
            })

    }, [params.id])

    return (
        <div>
            <h2>{location.name}</h2>
            <div>
                <label>{location.type}</label>
                <label>{location.dimension}</label>
            </div>
        </div>
    )
}

export default DataLocation