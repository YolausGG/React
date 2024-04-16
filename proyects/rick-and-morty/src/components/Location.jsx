import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Location({ ubi }) {
    return (
        <Link className='style-link link-scale' to={`/location/${ubi.id}`}>
            <article className='location-container'>
                <strong className='name-card'>{ubi.name}</strong>

                <p><span className='tipo-info'>Type:</span> {ubi.type}</p>

                <p><span className='tipo-info'>Dimension:</span> {ubi.dimension == 'unknown' ? 'Unknown' : ubi.dimension}</p>

                <p><span className='tipo-info'>Number of residents:</span> {ubi.residents.length}</p>

            </article>
        </Link >
    )
}

export default Location

Location.propTypes = {
    ubi: PropTypes.object.isRequired
}
