import React, {useState} from "react";
import ImageIntro from "../images/kit.jpg";
import New1 from "../images/large_your-hospital-visit-is-coming-drd9pkdf.jpg"
import New2 from "../images/health-wellness_balanced-living_healthy-living_low-cost-genetic-tests_2714x1811_000096274071.jpg"
import New3 from "../images/oxitocinasocial.jpg"

import "../css/Main.css"
import { Link, useHistory } from "react-router-dom";
import { CheckBox } from 'react-bootstrap-icons';

const Main = () => {

    return(
        <React.Fragment>
            
            <div id="Intro" className="row card">
                <img id="imgIntro" className="card-img" src={ImageIntro} alt="Card image"/>
                <div id="content" className="card-img-overlay text-center">
                    <p id="textIntro">Entienda su riesgo de cáncer hereditario, con solo una muestra de saliva puede entender si este en riesgo de cáncer hereditario de mama y ovarios.</p>
                    <button id="btnIntro" className="btn btn-dark">Conozca más</button>
                </div>
            </div>
            
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src={New1} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#">Seguir leyendo</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="">
                        <tr>
                            <CheckBox/>
                        </tr>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src={New2} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#">Seguir leyendo</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-between">
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src={New3} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#">Seguir leyendo</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Main;