import React from 'react';
import picture from '../img/Kids-Listen.jpg';
import meInteresa from '../img/Assets/me-interesa.png';
import triangulo from '../img/Assets/triangulo-blanco.png'
import '../styles/PruebaSuscripcion2.css';

const PruebaSuscripcion = () => {
    return (
        <section id="prueba-suscripcion2">         
            <div className="wrapper-promo2">
                <div className="contenido-promo2">
                    <img src={triangulo} alt="descuento" className="triangulo-promo2"/>  
                </div>
            </div>  
            <div className="prueba-suscripcion__wrapper-elements2">       
                <p className="suscribete2">Suscríbete</p>
                <div className="separador-linea2"></div>    
                <p className="linea-texto2">y obten clases gratis</p>
                {/* <button>correo electronico</button> */}
                <div class="hero__header-container">
                    <a class="btn btn-white btn-animated" href="true">Correo electronico</a>
                </div>
            </div>            
        </section>
    );
};

export default PruebaSuscripcion;