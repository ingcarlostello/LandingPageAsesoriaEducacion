import React from 'react';
import picture from '../img/Kids-Listen.jpg';
import trianguloBlanco from '../img/Assets/triangulo-blanco.png';
import meInteresa from '../img/Assets/me-interesa.png';
import '../styles/Subscribe.css';

const Subscribe = () => {
    return (
        <section id="subscribe">
            <div className="subscribe position-relative d-flex align-items-center justify-content-center">
                <img src={picture} alt="Kids Listen" />
                <div className="h-50 w-25 subscribe__text-wrapper position-absolute text-center">   
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <img src={trianguloBlanco} alt="descuento" className="triangulo-blanco" />  
                        <div className="porcentaje position-absolute text-center display-3 pr-3 pt-3"><p>20%</p></div>
                    </div>                    
                    <h1 className="display-4 text-white">Suscríbete</h1>
                    <hr className="my-2" />
                    <p className="text-white">y obten precios especiales</p>
                    <div class = "container-button position-relative">
                        <a href="true" class = "btn btn-white btn-animated">
                            Correo Electrónico                            
                        </a>
                        <img src={meInteresa} alt="me interesa" className="me-interesa position-absolute"/>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Subscribe;