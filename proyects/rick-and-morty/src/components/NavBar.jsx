import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='container-navBar'>
            <ul className='nav-list'>
                <Link to={'/characters'} className="nav-item"><li className='li-nav'>Characters</li></Link>
                <Link to={'/locations'} className="nav-item"><li className='li-nav'>Locations</li></Link>
                <Link to={'/episodes'} className="nav-item"><li className='li-nav'>Episodes</li></Link>
            </ul>
        </nav>
    )
}

export default NavBar