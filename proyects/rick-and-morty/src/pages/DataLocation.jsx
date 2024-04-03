import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { Link, useParams } from 'react-router-dom'

function DataLocation() {

    const [location, setLocation] = useState({
        residents: []
    })

    const [residents, setResidents] = useState()

    const params = useParams()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/${params.id}`)
            .then(
                response => response.json())
            .then(data => {
                setLocation(data)
                //setCharacters(data.results)
                console.log(data)
                loadResidents(data.residents)
            })
            .catch(function (error) {
                console.log("Hubo un problema con la petición Fetch:" + error.message);
            })
        

    }, [params.id])

    const loadResidents = async (pResidents) => {
        try {
            const responses = await Promise.allSettled(
                pResidents.map(async (item) => {
                    return fetch(item)
                        .then(response => response.json())
                })
            )

            var residentsCorrectos = responses.map(item => (item.status == 'fulfilled' ? item.value : null))
            
            console.log(residentsCorrectos);
            setResidents(residentsCorrectos)

        } catch (err) {
            console.log("Error: ", err);
        }
    };
    /*   

   location.residents.map(res => {
           fetch(res)
               .then(response => response.json())
               .then(data => {
                   residents.push(data)
                   console.log(data);
               })
               .catch(function (error) {
                   console.log("Hubo un problema con la petición Fetch:" + error.message);
               })
       })
   */

    return (
        <div>
            <h2>{location.name}</h2>
            <div>
                <label>{location.type}</label>
                <label>{location.dimension}</label>
            </div>
            <ul>
                {residents?.map(res => (
                    <li className='li-residents' key={res.id}>{res.name}</li>
                ))}
            </ul>
        </div>
    )
}


export default DataLocation