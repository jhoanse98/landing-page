import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import Map from "../images/Map.png"
import "../css/Contact.css"

function Contact() {

  return (   
    <div>
        <React.Fragment>

          <div className="row MyContainer">
            <div className="col-6">
              <img className="imgAuto" src={Map}></img>
            </div>
            <div id="Where" className="col-6">
              <h1 className="title">¿DÓNDE TRABAJAMOS?</h1>
              <p className="MyContent">
                GENO-COL ha expandido su acción en Colombia a través de convenios
                locales creando una gran red de apoyo, y programas de diagnóstico
                exitosos por todo el país. Con procesos meticulosos y bien establecidos
                en gran parte del territorio, la investigación genética del cáncer ha roto
                las barreras y ha sido cada vez mas accesible para los pacientes.
              </p>
            </div>
          </div>

          <div class="row text-center">
            <div class="col-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/>
              <p>CRA. 6 #72-34 ED. IMAT</p>
              <p class="mb-0">MONTERIA - COLOMBIA</p>
            </div>
            <div class="col-4">
              <FontAwesomeIcon icon={faPhone} className="icon"/>
              <p>+57 310 6061877</p>
              <p >+57 320 5744230</p>
              <p >+57 313 3444492</p>
            </div>
            <div class="col-4">
              <FontAwesomeIcon icon={faEnvelope} className="icon"/>
              <p>genocolsas@gmail.com</p>
              <p class="mb-0">comercialgenocol@gmail.com</p>
            </div>
          </div>
        </React.Fragment>
    </div>
  );
}

export default Contact;