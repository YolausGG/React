import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CardCharacter({ character }) {
    return (
        <Link className='style-link link-scale' to={`/character/${character.id}`}>
            <article className='card-character-contanier' >
                <img className='img-card-character' src={character.image} alt={`Image of ${character.name}`} title={`image of ${character.name}`} />

                <h4>{character.name}</h4>

            </article>
        </Link>
    )
}

export default CardCharacter

CardCharacter.propTypes = {
    character: PropTypes.object.isRequired
}