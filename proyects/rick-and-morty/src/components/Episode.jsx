import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Episode({ episode }) {
    var temporada = episode.episode.charAt(1).replace('0', '') + episode.episode.charAt(2)
    var episodio = episode.episode.charAt(4).replace('0', '') + episode.episode.charAt(5)

    return (
        <Link className='style-link link-scale' to={`/episode/${episode.id}`}>
            <article className='episode-container'>
                <strong className='name-card'>{episode.name}</strong>
                <p>Season: {temporada} Ep. {episodio}</p>

                <p><span className='tipo-info'>Publication:</span> {episode.air_date}</p>

                <p><span className='tipo-info'>Number of participants:</span> {episode.characters.length}</p>
            </article>
        </Link>
    )
}

Episode.propTypes = {
    episode: PropTypes.object.isRequired
}

export default Episode


