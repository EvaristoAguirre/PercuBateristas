import React from 'react';
import './Hero.css'


const Hero = () => {
    return(
        <>
         <div className='hero'>
            <div className='container container-hero'>
               <div className='hero-texto'>
                    <div className='hero-texto-mov'>
                       <p>Queremos ayudarte a encontrar el ritmo vital de la música a través de la percusión.
                        </p>
                    </div>
                    
                    <button className='hero-btn'>Nosotrxs</button> 
                </div>

                <div className='hero-imagen'>
                <img src="../../public/hero-muestra.jpg" alt="hero-muestra" />
                </div> 
            </div>
            
         </div>
         
        </>
       
    )
}

export { Hero }