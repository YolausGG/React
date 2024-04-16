import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Character({ character }) {
    const alive = '🟢';
    const dead = '🔴';
    const unknown = '🔘';

    const idLastLocation = character.location.url.split('/')
    const idOrigin = character.origin.url.split('/')

    return (
        <article className='character-container'>
            <Link className='link-img' to={`/character/${character.id}`}>
                <img className='img-character' src={character.image} alt={`image of ${character.name}`} title={`image of ${character.name}`} />
            </Link>
            <div className='data-character-container'>
                <div>
                    <Link className='character-name' to={`/character/${character.id}`}><strong>{character.name}</strong></Link>
                    <label>{character.status == 'Alive' ? alive + ' Alive' : character.status == 'Dead' ? dead + ' Dead' : unknown + ' Unknown'} {' - ' + character.species} </label>
                </div>
                <div>
                    <span>Origin:</span>
                    <p>
                        {character.origin.name == 'unknown' ? 'Unknown' : <Link className='style-link-character' to={`/location/${idOrigin[idOrigin.length - 1]}`}>{character.origin.name}</Link>}
                    </p>
                </div>
                <div>
                    <span>Last known location:</span>
                    <p>
                        {character.location.name == 'unknown' ? 'Unknown' : <Link className='style-link-character' to={`/location/${idLastLocation[idLastLocation.length - 1]}`}>{character.location.name}</Link>}
                    </p>
                </div>
                {character.type != '' ? <div>
                    <span>Type:</span>
                    <p>
                        {character.type}
                    </p>
                </div> : null}
            </div>
        </article >
    )
}

Character.propTypes = {
    character: PropTypes.object.isRequired
}

export default Character