import React from 'react';

const Sesionista = () => {
    return(

        <>

        <div className='sesiones-indice'>
            <h2>Sesionista</h2>
        </div>
        <div className='sesiones-tarjeta'>
            <h3>Grabamos juntxs?</h3>
            <div className='sesiones-tarjeta-planes'>
                <div className='sesiones-planes_izq'>Foto 1</div>
                <div className='sesiones-planes_cen'>Foto 2</div>
                <div className='sesiones-planes_der'>Foto 3</div>
            </div>
            <div className='sesiones-tarjeta-texto'>
                <div className='sesiones-tarjeta-texto_izq'>Si estás buscando otro tipo de percusión para tu canción, podemos grabar de forma exclusiva para vos.</div>
                <div className='sesiones-tarjeta-texto_der'>Elegí qué es lo que necesitás.</div>
            </div>
        </div>
        
        </>

        
    )
}

export { Sesionista }