import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav>
            <div className="nav-logo">
                <h1>PercuBateristasOnLine</h1>
            </div>
            <ul className="nav-lista">
                <li><a href="#header">Home</a></li>
                <li><a href="#seccion-2">Nosotrxs</a></li>
                <li><a href="#seccion-3">Perculoops</a></li>
                <li><a href="#seccion-4">Imágenes</a></li>
                <li><a href="#seccion-5">Sesionista</a></li>
                <li><a href="#seccion-6">Contacto</a></li>
            </ul>

           <div className="nav-redes">
                <div className="btn-hamburguesa"></div>
                <a href="#">Facebook</a>
                <a href="#">Ig</a>
                <a href='#'>YouTube</a>
           </div>

           {/* <div>Login</div> */}

        </nav>
    )
}

export { Navbar }