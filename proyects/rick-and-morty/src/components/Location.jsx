import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Location({ ubi }) {

    console.log(ubi);
   
    return (
        <article className='location-container'>
            <div className='data-location-container'>

                <Link className='style-link' to={`/location/${ubi.id}`}><strong>{ubi.name}</strong></Link>
                
                <label>{ubi.dimension == 'unknown' ? 'Desconocido' : ubi.dimension}</label>
                <label>{ubi.type}</label>
                <label>Cantidad de Habitantes: {ubi.residents.length}</label>
                <label>{ubi.created.substring(0, 10)}</label>
            </div>
        </article>
    )
}

Location.propTypes = {
    ubi: PropTypes.object.isRequired
}

export default Location