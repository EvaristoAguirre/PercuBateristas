import React from 'react';

const Hero = () => {
    return(
        <>
         <div class="hero-caja-texto">
        <div class="texto-hero">
            <h2>PercuBateristasOnLine</h2>
            
            <div class="btns-hero">
                <button class="btn-hero">Mirá mis trabajos</button>
                <div class="link-hero">
                    <a href="#"><p>Contactame</p></a>
                    <i class="fas fa-arrow-circle-down"></i>    
                </div>
            </div>
        </div>
        <div class="imagen-hero">
            <h4>Imagen</h4>
        </div>
    </div>
    <div class="hero-flecha"><i class="fa-solid fa-arrow-down"></i></div>
        </>
       
    )
}

export { Hero }