import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import CardCharacter from "../components/CardCharacter"

function DataEpisode() {
    const [episode, setEpisode] = useState({})
    const [characters, setCharacters] = useState([])
    const [SE, setSE] = useState({
        season: '',
        episode: ''
    })
    const params = useParams()

    useEffect(() => {

        fetch(`https://rickandmortyapi.com/api/episode/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setEpisode(data)
                var season = data.episode.charAt(1).replace('0', '') + data.episode.charAt(2)
                var episode = data.episode.charAt(4).replace('0', '') + data.episode.charAt(5)
                setSE({ season, episode })
                loadCharacters(data.characters)
            })
            .catch(function (error) {
                console.log("Hubo un problema con la petición Fetch:" + error.message);
            })
    }, [params.id])

    const loadCharacters = async (pCharacters) => {
        try {
            const responses = await Promise.allSettled(
                pCharacters.map(async char => {
                    return fetch(char)
                        .then(response => response.json())
                })
            )
            const charactersFilter = responses.map(res => (res.status == 'fulfilled' ? res.value : null))
            setCharacters(charactersFilter)
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    return (
        <div className='container-data-episode main-container'>
            <div className='container-info-episode'>
                <h2>{episode.name}</h2>
                <p>Season: {SE.season} Ep. {SE.episode}</p>
                <p><span className='tipo-info'>Publication:</span> {episode.air_date}</p>
            </div>
            <h3 className='subtitulo-participantes'>Characters</h3>
            <section className='container-cards-characters'>
                {characters?.map(char => (
                    <CardCharacter key={char.id} character={char} />
                ))}
            </section>
        </div>
    )
}

export default DataEpisode