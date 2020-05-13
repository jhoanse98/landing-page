import React, {useState} from "react";
import ImageIntro from "../images/kit.jpg";
import "../css/Main.css"
import { Link, useHistory } from "react-router-dom";

const Main = () => {

    return(
        <React.Fragment>
            
            <div className="card">
                <img className="card-img" src={ImageIntro} alt="Card image"/>
                <div id="content" className="card-img-overlay text-center">
                    <p id="textIntro">Entienda su riesgo de cáncer hereditario, con solo una muestra de saliva puede entender si este en riesgo de cáncer hereditario de mama y ovarios.</p>
                    <button id="btnIntro" className="btn btn-dark">Conozca más</button>
                </div>
            </div>
            
        </React.Fragment>
    )
}


export default Main;