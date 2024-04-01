
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DataCharacter() {

    const alive = '🟢';
    const dead = '🔴';
    const unknown = '🔘';

    const [character, setCharacter] = useState({
        id: 0,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin: {
            name: "",
            url: ""
        },
        location: {
            name: "",
            url: ""
        },
        image: "",
        episode: [],
        url: "",
        created: ""
    })

    const params = useParams()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
            .then(
                response => response.json())
            .then(data => {
                setCharacter(data)
                //setCharacters(data.results)
                console.log(data)

            })
            .catch(function (error) {
                console.log("Hubo un problema con la petición Fetch:" + error.message);
            })

    }, [params.id])

    return (
        <div className='container-data-character'>
            <h2>{character.name}</h2>
            <div className='container-data'>
                <img className='img-data-character' src={character.image} alt={`Imagne de ${character.name}`} />
                <div className='container-info-data-character'>
                    <label>{character.status == 'Alive' ? ' Vivo ' + alive : character.status == 'Dead' ? ' Muerto ' + dead : ' Desconocido ' + unknown}</label>
                    <label>{character.species}</label>
                    <label>{character?.type}</label>
                    <label>Origen:<Link className='style-link' to={`/location/${character.origin.url.slice(-1)}`}> {character.origin.name}</Link> </label>
                    <label>Ubicación:<Link className='style-link' to={`/location/${character.location.url.slice(-1)}`}> {character.location.name}</Link> </label>
                    <label>{character?.created.substring(0,10)}</label>
                </div>

            </div>

        </div>
    )
}

export default DataCharacter

DataCharacter.propTypes = {
    character: PropTypes.object
}