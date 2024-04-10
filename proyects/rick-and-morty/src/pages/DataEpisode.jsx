import { useEffect, useState } from "react"

import { useParams } from 'react-router-dom'
import CardCharacter from "../components/CardCharacter"

function DataEpisode() {

    const [episode, setEpisode] = useState({
        espisode: ''
    })
    const [characters, setCharacters] = useState([])
    const [TP, setTP] = useState({
        temporada: '',
        episodio: ''
    })
    const params = useParams()

    useEffect(() => {

        fetch(`https://rickandmortyapi.com/api/episode/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setEpisode(data)
                console.log(data);
                var temporada = data.episode.charAt(1) + data.episode.charAt(2)
                var episodio = data.episode.charAt(4) + data.episode.charAt(5)
                setTP({ temporada, episodio })
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
            console.log(responses);

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
                <p>Temporada: {TP.temporada.replace('0', '')} Ep. {TP.episodio.replace('0', '')}</p>

                <p><span className='tipo-info'>Publicación:</span> {episode.air_date}</p>
            </div>
            <h3 className='subtitulo-participantes'>Participantes</h3>
            <section className='container-cards-characters'>
                {characters?.map(char => (
                    <CardCharacter key={char.id} character={char} />
                ))}
            </section>
        </div>
    )
}

export default DataEpisode