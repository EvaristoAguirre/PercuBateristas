import React from 'react';
import './Contacto.css';

const Contacto = () => {
    return(
        
        <>
        <div className="container contacto">
            <div className='contacto-indice'>
                <h2>Contacto</h2>
            </div>
            <div className='contacto-tarjeta'>
                <div className='contacto-tarjeta_A'>
                    <form action="">
                        <label htmlFor=""></label>
                        <input type="text" placeholder='Nombre:'/>
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" placeholder='Correo:'/>
                        <textarea name="" id="" cols="10" rows="5" placeholder='Comentario..'></textarea>   
                    </form>
                </div>
                <div className='contacto-tarjeta_B'>
                     <div className='tarjeta_B-texto'>
                        <h4>Seguinos en nuestras redes</h4>   
                    </div>   
                    <div className='tarjeta_B-redes'>
                        <h5>Hola Mundo</h5>
                        <a href="#"><i className="bi bi-facebook btn-face">Facebook</i></a>
                        <a href="#"><i className="bi bi-facebook btn-face">Instagram</i></a>
                        <a href="#"><i className="bi bi-facebook btn-face">YouTube</i></a>
                        <a href="#"><i className="bi bi-facebook btn-face">Guasap</i></a>
                    </div>
                </div>
            </div>
                
        </div> 
        
        </>
           
        
       
        
    )
}

export { Contacto }