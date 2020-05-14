import React from 'react'
import "../css/Header.css"


function HeaderExampleUsersIcon() {
    return (
        <nav id="navbar" className="navbar fixed-top navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
            <a id="logo" className="navbar-brand" href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" width="30" height="30" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">INICIO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/about">¿QUIÉNES SOMOS?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/color-experience">LA EXPERIENCIA COLOR</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/why">¿POR QUE HACERME UNA PRUEBA GENÉTICA?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/test">EL TEST</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/contact">CONTACTENOS</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderExampleUsersIcon
