import React from 'react';


const Hero = () => {
    return(
        <>
         <div className='hero'>
            <div className='hero-texto'>
                <h1>Lorem ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non voluptate iste quas sit odio nam aut, qui nulla ut eaque sint autem quaerat dicta soluta maxime repellendus, ipsum modi atque?
                </p>
                <button>Nosotrxs</button>
            </div>
            <div className='hero-imagen'>
                <img src="../../assets/Imagenes/hero-muestra.jpg" alt="hero-muestra" />
            </div>
         </div>
         
        </>
       
    )
}

export { Hero }