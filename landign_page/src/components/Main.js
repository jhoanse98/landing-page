import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import { faEnvelope, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import ImageIntro from "../images/kit.jpg";
import New1 from "../images/large_your-hospital-visit-is-coming-drd9pkdf.jpg"
import New2 from "../images/health-wellness_balanced-living_healthy-living_low-cost-genetic-tests_2714x1811_000096274071.jpg"
import New3 from "../images/oxitocinasocial.jpg"

import "../css/Main.css"
import { Link, useHistory } from "react-router-dom";


function Main() {

    return(
        <React.Fragment>
            
            <div id="Intro" className="row card">
                <img id="imgIntro" className="card-img" src={ImageIntro} alt="Card image"/>
                <div id="content" className="card-img-overlay text-center">
                    <p id="textIntro">Entienda su riesgo de cáncer hereditario con solo una muestra de saliva o sangre.</p>
                    <a id="btnIntro" className="btn btn-dark" href="/test" role="button">Conozca más</a>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12 information">
                    <h1>Asesoramiento Genético Oncológico</h1>
                    <p>Genomica de Colombia (GENO-COL) es un laboratorio que ofrece un servicio integral de calidad en el sector del diagnóstico molecular, facilitando, asesorando y ofreciendo a especialistas pruebas diagnósticas, citogenéticas y moleculares, novedosas y punteras.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-4 No-pading-rigth">
                    <div className="card NewCard">
                        <img className="card-img-top" src={New1} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">DETECCIÓN TEMPRANA</h5>
                            <p id="summary" className="card-text">La detección temprana mejora la probabilidad de supervivencia de los pacientes en algunos casos hasta de un 100%, al activar el panel Color incursiona en la ruta más efectiva de seguimiento, tratamiento y control de la enfermedad.</p>
                            <a href="/test">Seguir leyendo ></a>
                        </div>
                    </div>
                </div>
                <div id="Benefit" className="container col-4">
                    <div id="TitleBenefit">
                        <h2>BENEFICIOS</h2>
                    </div>
                    <div className="detailers-container">
                        <ul className="text-lg-left list-unstyled ml-4">
                            <li>
                                <FontAwesomeIcon icon={faCheckSquare} className="CheckBoxIcon"/>
                                <p>Detección temprana y tratamiento oportuno en familiares</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckSquare} className="CheckBoxIcon"/>
                                <p>Medicina personalizada y Preventiva</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckSquare} className="CheckBoxIcon"/>
                                <p>Vigilancia activa</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckSquare} className="CheckBoxIcon"/>
                                <p>Mejorar la calidad de vida del paciente y su familia</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-4 No-pading-left">
                    <div className="card NewCard">
                        <img className="card-img-top" src={New2} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">NUESTRO PORTAFOLIO</h5>
                            <p id="summary" className="card-text">Ofrecemos una alta gama de estudio con tecnologias de última generación y un asesoramiento personalizado por un grupo interdisciplinar.</p>
                            <a href="/services">Seguir leyendo ></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-4 No-pading-rigth">
                    <div className="card NewCard">
                        <img className="card-img-top" src={New3} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">¿POR QUÉ DEBO HACERME UNA PRUEBA GENÉTICA?</h5>
                            <p id="summary" className="card-text">Los test genéticos te permiten crear un plan personalizado en colaboración con tu médico para prevenir o detectar múltiples enfermedades de índole hereditario e infeccioso en un estudio temprano más facíl de tratar.</p>
                            <a href="/why">Seguir leyendo ></a>
                        </div>
                    </div>
                </div>
                
                <div id="AskContainer" className="container col-4">
                    <div id="Ask">
                        <h2>¿TIENE DUDAS Y PREGUNTAS?</h2>
                    </div>
                    <div id="AskButton">
                        <a className="btn btn-primary" href="/contact" role="button">Contáctenos</a>
                    </div>
                </div>

                <div id="MyContact" className="col-4">

                    <div className="card-body contact text-center">

                        <h2 className="my-4 pb-2">CONTÁCTENOS</h2>
                        <ul className="text-lg-left list-unstyled ml-4">
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="item-align icon"/>
                                <p className="item-align">
                                    CRA. 6 #72-34 ED. IMAT<br/>MONTERIA - COLOMBIA
                                    <br/><br/>
                                    CALLE 16 No. 15-42<br/>CONSULTORIO 303<br/>UD. MÉDICA SAN JOSE<br/>VALLEDUPAR - COLOMBIA
                                </p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} className="item-align icon"/>
                                <p className="item-align">+57 320 5744230</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className="item-align icon"/>
                                <p className="item-align">genocolsas@gmail.com</p>
                            </li>
                        </ul>
                        <hr className="hr-light my-4"/>
                        <ul className="list-inline text-center list-unstyled">
                            <li className="list-inline-item">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Main;