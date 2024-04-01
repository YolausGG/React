import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DataLocation() {

    const [location, setLocation] = useState({
        residents: []
    })

    const [residents, setResidents] = useState([])

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
        loadResidents()
    }, [params.id])

    const loadResidents = () => {

        var resis = []
        location.residents.map(res => {
            fetch(res)
                .then(response => response.json())
                .then(data => {
                    resis.push(data)
                    console.log(data);
                })
                .catch(function (error) {
                    console.log("Hubo un problema con la petición Fetch:" + error.message);
                })
        })
        setResidents(resis)
    }

    return (
        <div>
            <h2>{location.name}</h2>
            <div>
                <label>{location.type}</label>
                <label>{location.dimension}</label>
            </div>

            <ul>
                {residents.map(res => (
                    <li key={res.id}>{res.name}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default DataLocation