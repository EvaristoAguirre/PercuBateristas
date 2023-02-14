import React from 'react';

const Perculoops = () => {
    return(
        
        <>
        <div className='perculoops'>
            
            <div className='perculoops-indice'>
                <h2>Perculoops</h2>
            </div>
            <div className='perculoops-reproductor'>
                <h4>Nombre de canción</h4>
                <div className='perculoops-reproductor-progreso'></div>
                <div className='perculoops-reproductor-duracion'></div>
                <div className='perculoops-reproductor-controladores'>
                    <button className='btn-atras'>Atras</button>
                    <button className='btn-play'>Play</button>
                    <button className='btn-adelante'>Adelante</button>
                </div>
            </div>
            <div className='perculoops-lista_de_temas'>

            </div>

        </div>


        </>
        
    )
}

export { Perculoops }