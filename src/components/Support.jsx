import React from 'react';
import minTic from '../img/Logos/MinTic.png';
import camaraComercio from '../img/Logos/camara-comercio.png';
import viveDigital from '../img/Logos/vive-digital.png';
import appCO from '../img/Logos/appsCO.png';
import nuevoPais from '../img/Logos/nuevo-pais.png';
import '../styles/Support.css';

const Support = () => {
    return (
        <secton id="support">
            <div className="support__text-wrapper text-center">
                <h1 className="display-4">¡Servicio de calidad y<br />credibilidad!</h1>
               <div className="separator-line-support"></div>
                <p>Contamos con el apoyo gubernamental, local y nacional<br />para una efectiva entrega de contenidos y clases de calidad certificadas</p>
            </div>
            <div className="row logo d-flex align-items-center justify-content-center">
                <img src={minTic} alt="Min Tic Colombia" />
            </div>
            <div className="mt-3 mx-3 row logos">
                <div className="col-sm-12 col-md-6 col-lg-3 mt-5">
                    <img className="logos-gobierno" src={camaraComercio} alt="camara de comercio" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 mt-5">
                    <img className="logos-gobierno" src={viveDigital} alt="vive digital" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 mt-5">
                    <img className="logos-gobierno" src={appCO} alt="apps co" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3 mt-5">
                    <img className="logos-gobierno" src={nuevoPais} alt="nuevo pais" />
                </div>



            </div>
        </secton>
    );
};

export default Support;