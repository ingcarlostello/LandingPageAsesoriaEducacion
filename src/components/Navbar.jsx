import React from 'react';
import youtubeButton from '../img/Logos/youtubeButton.png'
import youtubeLogo from '../img/Logos/youtube-logo.png'
import '../styles/Navbar.css';
const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-4 bg-white rounded">
          
            <img src={youtubeLogo} alt="youtube logo" className="navbar-logo"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              
                <img className="navbar-toggler-icon" src={youtubeButton} alt="youtube"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="true">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="true">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="true">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="true">Success stories</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;