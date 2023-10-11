import logo from '../images/react.svg'

function Navbar() {
    return (
        <nav className='navbar'>

            <figure className='figure-logo'>
                <img className='nav-logo' src={logo} alt="" />
            </figure>
            <ul className="nav-list">
                <li className="nav-item"><a className='nav-link' href="#">Sobre Nosotros</a></li>
                <li className="nav-item"><a className='nav-link' href="#">Proyectos</a></li>
                <li className="nav-item"><a className='nav-link' href="#">Hablidades</a></li>
                <li className="nav-item"><a className='nav-link' href="#">Contactos</a></li>
            </ul>
        </nav>
    )
}

export default Navbar