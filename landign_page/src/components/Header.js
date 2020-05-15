import React from "react";
import "../css/Header.css"
import Logo from '../images/Logo.png'


class HeaderExampleUsersIcon extends React.Component {

    state = {
        isScroll: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.scrollFunction);
    }

    toggleShow = (s) => {
        this.setState({isScroll: s})
    }

    scrollFunction = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.height = "50px";
            this.toggleShow(true);
        } else {
            document.getElementById("navbar").style.height = "100px";
            this.toggleShow(false);
        }
    }
    
    render () {
        return (
            <nav id="navbar" className="navbar fixed-top navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                <a id="logo" className={`navbar-brand col-3 ${this.state.isScroll ? "scaleImg" : ""}`} href="/">
                    <img id="imgLogo" src={Logo}/>
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
                            <a className="nav-link active" href="/services">LA EXPERIENCIA COLOR</a>
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
        )
    };
    
}

export default HeaderExampleUsersIcon
