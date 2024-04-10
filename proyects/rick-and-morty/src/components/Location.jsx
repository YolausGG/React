import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Location({ ubi }) {

    console.log(ubi);

    return (
        <Link className='style-link link-scale' to={`/location/${ubi.id}`}>
            <article className='location-container'>
                <strong className='name-card'>{ubi.name}</strong>

                <p><span className='tipo-info'>Tipo:</span> {ubi.type}</p>

                <p><span className='tipo-info'>Dimensión:</span> {ubi.dimension == 'unknown' ? 'Desconocida' : ubi.dimension}</p>

                <p><span className='tipo-info'>Cantidad de habitantes:</span> {ubi.residents.length}</p>

            </article>
        </Link >
    )
}

export default Location

Location.propTypes = {
    ubi: PropTypes.object.isRequired
}
