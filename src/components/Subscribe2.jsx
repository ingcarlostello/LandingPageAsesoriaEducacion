import React from 'react';
import picture from '../img/two-girls.jpg';
import trianguloBlanco from '../img/Assets/triangulo-blanco.png';
import meInteresa from '../img/Assets/me-interesa.png';
import '../styles/Subscribe2.css';

const Subscribe2 = () => {
    return (
         <section id="subscribe2">
            <div className="subscribe2 position-relative d-flex align-items-center justify-content-center">
                <div className="subscribe2-wrapper-img position-relative">
                    <img src={picture} alt="Kids Listen" />
                    <div className='fondo position-absolute'></div>
                </div> 
                
                <div className="h-50 w-25 subscribe__text-wrapper position-absolute text-center">   
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <img src={trianguloBlanco} alt="descuento" className="triangulo-blanco position-absolute" />                        
                    </div>                    
                    <h1 className="display-4 text-white position-absolute suscribete2">Suscríbete</h1>
                    <hr className="my-2" />
                    <p className="text-white-suscribete2 position-absolute">y obten clases gratis</p>
                    <div class = "container-button2 position-absolute">
                        <a href="true" class = "btn btn-white btn-animated">
                            Correo Electrónico                            
                        </a>
                        {/* <img src={meInteresa} alt="me interesa" className="me-interesa2 position-absolute"/> */}
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Subscribe2;