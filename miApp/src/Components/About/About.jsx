import React from 'react';
import './About.css'

const About = () => {
    return(
        <>
        <div className='nosotrxs'>
            <div className='nosotrxs-indice'>
                
                <div className='nosotrxs-indice-semiCirculo'>
                    <h2>NOSOTRXS</h2>
                </div>
                
            </div>

            <div className='nosotrxs-tarjeta'>

                <p className='nostroxs-tarjeta-texto'>Mi nombre es <span>Facundo Berjeli</span>  y soy una suerte de mezcla rara entre baterista y percusionista, <span>un percubaterista</span>.
                <br /> 
                <br />
                Soy un tipo inquieto que todo el tiempo está pensando cómo hacer mejor las cosas, que no puede dejar las manos quietas y que si lo descuidás un segundo ya planificó mil proyectos.
                <br />
                <br />
                Desde hace un par de años me dedico a explorar las distintas músicas de Latinoamérica con los tambores y hoy quiero utilizar mi conocimiento para ayudar a otras personas.
                <br /> 
                <br />
                Es por esto que creamos percubateristas online, un espacio al que podes sumarte si estas buscando algo relacionado con la percusión.</p>

            </div>
        </div>
        </>
        
    )
}

export { About }