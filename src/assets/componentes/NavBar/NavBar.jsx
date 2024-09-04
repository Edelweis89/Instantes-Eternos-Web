import './navbar.css';

function NavBar() {

    return <div className="navbar"> 

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <img className='logoNavBar' src="./public/1.png" alt="logo" />

            <ul>


                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Servicios</li>
                <li>Portafolio</li>
                <li>Contacto</li>

            </ul>
        </nav>

    </div>

}
export default NavBar