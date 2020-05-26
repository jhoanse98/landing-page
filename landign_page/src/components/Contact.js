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

          <div className="row text-center">
            <div className="col-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/>
              <p className="mb-0 mt-3">CRA. 6 No. 72-34 ED. IMAT</p>
              <p >MONTERIA - COLOMBIA</p>
              <p className="mb-0">CALLE 16 No. 15-42</p>
              <p className="mb-0">CONSULTORIO 303<br/>UNIDAD MÉDICA SAN JOSE</p>
              <p>VALLEDUPAR - COLOMBIA</p>
            </div>
            <div className="col-4">
              <FontAwesomeIcon icon={faPhone} className="icon"/>
              <p className="mb-0 mt-3">+57 310 6061877</p>
              <p className="mb-0">+57 320 5744230</p>
              <p >+57 313 3444492</p>
            </div>
            <div className="col-4">
              <FontAwesomeIcon icon={faEnvelope} className="icon"/>
              <p className="mb-0 mt-3">genocolsas@gmail.com</p>
              <p >comercialgenocol@gmail.com</p>
            </div>
          </div>
        </React.Fragment>
    </div>
  );
}

export default Contact;