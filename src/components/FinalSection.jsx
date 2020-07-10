import React from 'react';
import allKids from '../img/all-kids.jpg';
import '../styles/FinalSection.css';

const FinalSection = () => {
    return (
        <section id="fina-section">
            <div className="final-section">
                <div className="final-section__wrapper-img position-relative">
                    <img src={allKids} alt="girls" />                    
                    <div className='final-section-fondo position-absolute'>
                        <ul class="final-sections__links position-absolute ">
                            <li><a href="true">QUIENES SOMOS</a></li>
                            <li><a href="true">TÉRMINOS Y CONDICIONES</a></li>
                            <li><a href="true">PREGUNTAS FRECUENTES</a></li>
                            <li><a href="true">CONTÁCTENOS</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default FinalSection;