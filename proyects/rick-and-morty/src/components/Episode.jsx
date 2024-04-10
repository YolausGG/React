import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Episode({ episode }) {

    console.log(episode);

    var temporada = episode.episode.charAt(1) + episode.episode.charAt(2)
    var episodio = episode.episode.charAt(4) + episode.episode.charAt(5)
    //replace('0','')

    return (

        <Link className='style-link link-scale' to={`/episode/${episode.id}`}>
            <article className='episode-container'>
                <strong className='name-card'>{episode.name}</strong>
                <p>Temporada: {temporada.replace('0', '')} Ep. {episodio.replace('0', '')}</p>

                <p><span className='tipo-info'>Publicación:</span> {episode.air_date}</p>

                <p><span className='tipo-info'>Cantidad de Personajes:</span> {episode.characters.length}</p>
            </article>
        </Link>
    )
}

Episode.propTypes = {
    episode: PropTypes.object.isRequired
}

export default Episode


