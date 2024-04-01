import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


function Character({ character }) {

    const alive = '🟢';
    const dead = '🔴';
    const unknown = '🔘';

    console.log(character);

    return (
        <article className='character-container'>

            <img className='img-character' src={character.image} alt={`imagen de ${character.name}`} />

            <div className='data-character-container'>
                <div>
                    <Link className='character-name' to={`/character/${character.id}`}><strong >{character.name}</strong></Link>
                    <label>{character.status == 'Alive' ? alive + ' Vivo' : character.status == 'Dead' ? dead + ' Muerto' : unknown + ' Desconocido'} {' - ' + character.species} </label>
                </div>
                <div>
                    <span>Origen:</span>
                    <p>
                        {character.origin.name == 'unknown' ? 'Desconocido' : <Link className='style-link' to={`/location/${character.origin.url.slice(-1)}`}>{character.origin.name}</Link>}
                    </p>
                </div>
                <div>
                    <span>Última ubicación conocida:</span>

                    <p>
                        {character.location.name == 'unknown' ? 'Desconocido' : <Link className='style-link' to={`/location/${character.location.url.slice(-1)}`}>{character.location.name}</Link>}
                    </p>
                </div>
            </div>

        </article>
    )
}

Character.propTypes = {
    character: PropTypes.object.isRequired
}

export default Character



