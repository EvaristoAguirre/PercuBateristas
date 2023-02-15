import React from 'react';
import './Galeria.css';

const Galeria = () => {
    return(
        <>
            <div className="galeria">
                <div className='galeria-indice'>
                    <div className='galeria-indice-semiCirculo'>
                        <h2>Galería</h2>
                    </div>
                </div>

                <div className='galeria-carrusell'>

                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="" class="d-block w-100" alt=" "></img>
                            </div>
                            <div class="carousel-item">
                                <img src="" class="d-block w-100" alt=" "></img>
                            </div>
                            <div class="carousel-item">
                                <img src="" class="d-block w-100" alt=" "></img>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                     </div>

                </div>
                
            </div>

        </>
    )
}

export { Galeria }