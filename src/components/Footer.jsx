import React from 'react';
import youtubeLogo from '../img/Logos/youtube-logo.png';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <section id="footer">
            <footer >
                <img className="footer-image" src={youtubeLogo} alt=""/>
            </footer>
        </section>
    );
};

export default Footer;