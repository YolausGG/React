import { Link } from 'react-router-dom'

function NavBar() {
    const openCloseNavBar = () => {

        const toggleBtnIcon = document.getElementById('icon-menu-burger')
        const dropDownMenu = document.getElementById('dropdown_nav-menu')

        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen ? 'fi fi-br-cross' : 'fi fi-br-menu-burger'
    }
    return (
        <nav className='container-navBar'>
            <ul className='nav-list'>
                <Link to={'/characters'} className="nav-item"><li className='li-nav'>Characters</li></Link>
                <Link to={'/locations'} className="nav-item"><li className='li-nav'>Locations</li></Link>
                <Link to={'/episodes'} className="nav-item"><li className='li-nav'>Episodes</li></Link>
            </ul>
            <ul id="dropdown_nav-menu">
                <Link onClick={openCloseNavBar} to={'/characters'} className="nav-item"><li className='li-nav'>Characters</li></Link>
                <Link onClick={openCloseNavBar} to={'/locations'} className="nav-item"><li className='li-nav'>Locations</li></Link>
                <Link onClick={openCloseNavBar} to={'/episodes'} className="nav-item"><li className='li-nav'>Episodes</li></Link>
            </ul>
            <div id="toggle-btn">
                <i id='icon-menu-burger' onClick={openCloseNavBar} className="fi fi-br-menu-burger"></i>
            </div>
        </nav>
    )
}

export default NavBar