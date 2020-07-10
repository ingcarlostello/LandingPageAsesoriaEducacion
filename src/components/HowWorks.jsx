import React from 'react';
import image from '../img/Assets/triangulo.png';
import playButton from '../img/Logos/play-button.png';
import '../styles/HowWorks.css';

const HowWorks = () => {
    return (
        <section id="how-works" className="how-works">
            <div className="how-Works__text-wrapper text-center">
                <h1 className="display-4">Cómo funciona</h1>
                <div className="separator-line-how-works"></div>
                <p>Clases en vivo, personalizadas para niños y jóvenes<br /> de colegio que les permite aprender de manera<br /> segura y desde cualquier lugar </p>
            </div>
            <div className="row" id="row-how-works">
                <div className="col-sm col-md-6 h-25 col-lg-3">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <img src={image} alt="paso 3" className="triangulo1 img-fluid" />
                        <div className="number one position-absolute text-center"><p>1</p></div>
                    </div>
                    <div className="info-text text-center">
                        <p>Elige <br />una materia</p>
                    </div>
                </div>
                <div className="col-sm col-md-6 h-25 col-lg-3">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <img src={image} alt="paso 3" className="triangulo2 img-fluid" />
                        <div className="number two position-absolute text-center"><p>2</p></div>
                    </div>
                    <div className="info-text text-center">
                        <p>Selecciona <br />un tutor</p>
                    </div>
                </div>
                <div className="col-sm col-md-6 h-25 col-lg-3">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <img src={image} alt="paso 3" className="triangulo3 img-fluid" />
                        <div className="number three position-absolute text-center"><p>3</p></div>                        
                    </div>
                    <div className="info-text text-center">
                        <p>Programa <br />tu clase</p>
                    </div>
                </div>
                <div className="col-sm col-md-6 h-25 col-lg-3">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <img src={image} alt="paso 3" className="triangulo4 img-fluid" />
                        <div className="number four position-absolute text-center"><p>4</p></div>
                    </div>
                    <div className="info-text text-center">
                        <p>¡A<br /> Aprender!</p>
                    </div>
                </div>
            </div>
            <div className="play-button text-center">
                <img src={playButton} alt="play" className='icon-play-button'/>
                <h3>Ver video</h3>
            </div>
        </section>
    );
};

export default HowWorks;