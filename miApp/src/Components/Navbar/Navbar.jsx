import React from 'react';

const Navbar = () => {
    return(
        <nav>
            <div class="logo">
                <h1>PERCUBATERISTASONLINE</h1>
            </div>
            <ul class="nav-lista">
                <li><a href="#header">Home</a></li>
                <li><a href="#seccion-2">About us</a></li>
                <li><a href="#seccion-3">Perculoops</a></li>
                <li><a href="#seccion-4">Imágenes</a></li>
                <li><a href="#seccion-5">Sesionista</a></li>
                <li><a href="#seccion-6">Contacto</a></li>
            </ul>
            
           <div class="nav-redes">
                <div class="btn-hamburguesa"><i class="fa-solid fa-bars"></i></div>
                <a href="https://www.facebook.com/evaristo.aguirre.1/"><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/EvaristoAguirre" target="_blank"><i class="fa-brands fa-github"></i></a>
           </div>

           <div>Login</div>

        </nav>
    )
}

export { Navbar }