
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DataCharacter() {

    const params = useParams()

    const alive = '🟢';
    const dead = '🔴';
    const unknown = '🔘';

    const [character, setCharacter] = useState({
    })

    const [idLastLocation, setIdLastLocation] = useState()
    const [idOrigin, setIdOrigin] = useState()
    

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
            .then(
                response => response.json())
            .then(data => {
                setCharacter(data)

                const idLastLocation = data.location.url.split('/')
                const idOrigin = data.origin.url.split('/')
                setIdLastLocation(idLastLocation[idLastLocation.length-1])
                setIdOrigin(idOrigin[idOrigin.length-1])
                console.log(data)

            })
            .catch(function (error) {
                console.log("Hubo un problema con la petición Fetch:" + error.message);
            })

    }, [params.id])

    return (
        <div className='main-container'>

            <div className='container-data'>

                <img className='img-data-character' src={character.image} alt={`Imagne de ${character.name}`} />
                <div className='container-info-data-character'>
                    <div className='name-satus-data-character'>
                        <h2>{character.name}</h2>
                        {character.status == 'Alive' ? alive : character.status == 'Dead' ? dead : unknown}
                    </div>
                    <label>{character.species} {character?.type == '' ? null : ` - ` + character?.type}</label>

                    <label>Origen: {character.origin?.name != 'unknown' ? <Link className='style-link-character' to={`/location/${idOrigin}`}>{character.origin?.name}</Link> : 'Unknown'}</label>
                    <label>Ubicación: <Link className='style-link-character' to={`/location/${idLastLocation}`}>{character.location?.name}</Link></label>

                </div>
            </div>
        </div>
    )
}

export default DataCharacter

DataCharacter.propTypes = {
    character: PropTypes.object
}