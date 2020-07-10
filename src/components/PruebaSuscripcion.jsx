import React from 'react';
import picture from '../img/Kids-Listen.jpg';
import meInteresa from '../img/Assets/me-interesa.png';
import triangulo from '../img/Assets/triangulo-blanco.png'
import '../styles/PruebaSuscripcion.css';

const PruebaSuscripcion = () => {
    return (
        <section id="prueba-suscripcion">         
            <div className="wrapper-promo">
                <div className="contenido-promo">
                    <img src={triangulo} alt="descuento" className="triangulo-promo"/>  
                    <p className="porcentaje-promo">20%</p>
                </div>
            </div>  
            <div className="prueba-suscripcion__wrapper-elements">       
                <p className="suscribete">Suscríbete</p>
                <div className="separador-linea"></div>    
                <p className="linea-texto">y obten precios especiales</p>
                {/* <button>correo electronico</button> */}
                <div class="hero__header-container">
                    <a class="btn btn-white btn-animated" href="true">Correo electronico</a>
                </div>
            </div>            
        </section>
    );
};

export default PruebaSuscripcion;