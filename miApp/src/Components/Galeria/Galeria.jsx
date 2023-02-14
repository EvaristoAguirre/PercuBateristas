import React from 'react';

const Galeria = () => {
    return(
        <>
            <div class="seccion-encabezado">
                <p>Portfolio</p>
                <h2>Algunos de mis proyectos recientes</h2>
            </div>
            
            <div class="portfolio-lista">
                    <ul>
                        <li>Tocando</li>
                        <li>Recitales</li>
                        <li>Ensayos</li>
                        <li>Sesiones</li>
                        <li>YouTube</li>
                    </ul>
            </div>
                
            <div class="portfolio-galeria">
                    <div>*imagen*</div>
                    <div>*imagen*</div>
                    <div>*imagen*</div>
                    <div>*imagen*</div>
                    <div>*imagen*</div>
                    <div>*imagen*</div>
            </div>
        </>
    )
}

export { Galeria }