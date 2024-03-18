import PropTypes from 'prop-types'

function Character({ character }) {

    const alive = '🟢';
    const dead = '🔴';
    const unknown = '🔘';    

    console.log(character);
    return (
        <div className='character-container'>

            <img className='img-character' src={character.image} alt={`imagen de ${character.name}`} />

            <div className='data-character-container'>
                <div>
                    <strong className='character-name'>{character.name}</strong>
                    <label>{character.status == 'Alive' ? alive + ' Vivo' : character.status == 'Dead' ? dead + ' Muerto' : unknown + ' Desconocido'} {' - ' + character.species} </label>
                </div>
                <div>
                    <span>Origen:</span>
                    <p>
                        {character.origin.name == 'unknown' ? 'Desconocido' : character.origin.name}
                    </p>
                </div>
                <div>
                    <span>Última ubicación conocida:</span>
                    <p>
                        {` `}{character.location.name}
                    </p>
                </div>
            </div>

        </div>
    )
}

Character.propTypes = {
    character: PropTypes.object.isRequired
}

export default Character



