import React from 'react';
import picture from '../img/Group1800.png';
import '../styles/Home.css';

const Home = () => {
    return (
        <section id="home">
            <div className="home position-relative d-flex align-items-center justify-content-center">
                <div className="wrapper-img position-relative">
                    <img src={picture} alt="girls" /> 
                    <div className='fondo position-absolute'></div>
                </div>
                
                <div className="home__text-wrapper position-absolute text-center">
                    <h1 className="display-4">Tutorías online</h1>                
                    <div className="separator-line"></div>
                    <p>Clases en vivo</p>
                </div>
            </div>
        </section>
    );
};

export default Home;