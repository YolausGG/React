import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardCharacter from '../components/CardCharacter'

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
            setResidents(residentsCorrectos)
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    return (
        <div className='container-data-location'>
            <div className='container-info-location'>
                <h2>{location.name}</h2>
                <p><span className='tipo-info'>Type:</span> {location.type == 'unknown' ? 'Unknown' : location.type}</p>
                <p><span className='tipo-info'>Dimension:</span> {location.dimension == 'unknown' ? 'Unknown' : location.dimension}</p>
            </div>
            <h3 className='subtitulo-habitantes'>Residents</h3>
            <section className='container-cards-characters'>
                {residents?.map(res => (
                    <CardCharacter key={res.id} character={res} />
                ))}
            </section>
        </div>
    )
}

export default DataLocation