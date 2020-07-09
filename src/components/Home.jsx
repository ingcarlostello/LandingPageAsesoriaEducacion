import React from 'react';
import picture from '../img/Group1800.png';
import '../styles/Home.css';

const Home = () => {
    return (
        <section id="home">
            <div className="home position-relative d-flex align-items-center justify-content-center">
                <img src={picture} alt="girls" /> 
                <div className="home__text-wrapper position-absolute text-center">
                    <h1 className="display-4">Tutorías online</h1>
                    <hr className="my-2" />
                    <p>Clases en vivo</p>
                </div>
            </div>
        </section>
    );
};

export default Home;