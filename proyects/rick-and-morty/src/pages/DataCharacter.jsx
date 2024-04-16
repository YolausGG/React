import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DataCharacter() {
    const params = useParams()

    const alive = '🟢';
    const dead = '🔴';
    const unknown = '🔘';

    const [character, setCharacter] = useState({})
    const [episodes, setEpisodes] = useState([])

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
                setIdLastLocation(idLastLocation[idLastLocation.length - 1])
                setIdOrigin(idOrigin[idOrigin.length - 1])
                loadEpisodes(data.episode)
            })
            .catch(function (error) {
                console.log("Hubo un problema con la petición Fetch:" + error.message);
            })
    }, [params.id])

    const loadEpisodes = async (pEpisodes) => {
        try {
            const responses = await Promise.allSettled(
                pEpisodes.map(async epi => {
                    return fetch(epi)
                        .then(response => response.json())
                })
            )
            const episodesFilter = responses.map(res => (res.status == 'fulfilled' ? res.value : null))
            setEpisodes(episodesFilter)
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const obtenerId = (pString) => {
        const arrayLink = pString.split('/')
        return arrayLink[arrayLink.length - 1]
    }

    return (
        <div className='main-container'>
            <div className='container-data'>
                <img className='img-data-character' src={character.image} alt={`Imagne de ${character.name}`} title={`image of ${character.name}`}/>
                <div className='container-info-data-character'>
                    <div className='name-satus-data-character'>
                        <h2>{character.name}</h2>
                        {character.status == 'Alive' ? alive : character.status == 'Dead' ? dead : unknown}
                    </div>
                    <label>Specie: {character.species == 'unknown' ? 'Unknown': character.species} {character?.type == '' ? null : ` - ` + character?.type}</label>
                    <label>Gender: {character.gender == 'unknown' ? 'Unknown' :  character?.gender}</label>
                    <label>Origin: {character.origin?.name != 'unknown' ? <Link className='style-link-character' to={`/location/${idOrigin}`}>{character.origin?.name}</Link> : 'Unknown'}</label>
                    <label>Last known location: <Link className='style-link-character' to={`/location/${idLastLocation}`}>{character.location?.name}</Link></label>

                </div>
            </div>
            <h3 className='subtitulo-episodes'>Episodes</h3>
            <section className='container-episodes-character'>                
                {
                    episodes.map(epi => {
                        var temporada = epi.episode.charAt(1).replace('0', '') + epi.episode.charAt(2)
                        var episodio = epi.episode.charAt(4).replace('0', '') + epi.episode.charAt(5)
                        return (
                            <Link key={epi.id} className='style-link link-scale' to={`/episode/${obtenerId(epi.url)}`}>
                                <article className='episode-container'>
                                    <strong className='name-card'>{epi.name}</strong>
                                    <p>Season: {temporada} Ep. {episodio}</p>

                                    <p><span className='tipo-info'>Publication:</span> {epi.air_date}</p>

                                    <p><span className='tipo-info'>Number of participants:</span> {epi.characters.length}</p>
                                </article>
                            </Link>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default DataCharacter

DataCharacter.propTypes = {
    character: PropTypes.object
}