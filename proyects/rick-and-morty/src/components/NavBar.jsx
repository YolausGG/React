import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='container-navBar'>
            <ul className='nav-list'>
                <Link to={'/characters'} className="nav-item"><li className='li-nav'>Personajes</li></Link>
                <Link to={'/locations'} className="nav-item"><li className='li-nav'>Ubicaciones</li></Link>
                <Link to={'/episodes'} className="nav-item"><li className='li-nav'>Episodios</li></Link>
            </ul>
        </nav>
    )
}

export default NavBar