import React from 'react';
import Image from '../images/oxitocinasocial.jpg'

function Why() {

  return (   
    <div>
        <React.Fragment>
        <div id="Intro" className="row card">
          <img id="imgIntro" className="card-img" src={Image} alt="Card image"/>
        </div>
          <div className="MyContainer row">
            <div id="left" className="row MyContainer align-items-center">
              <div className="col-12">
                <h1 id="left" className="title">¿POR QUE HACERME UNA PRUEBA GENÉTICA?</h1>
                <p className="Mycontent">
                  Los test genéticos te permiten crear un plan personalizado en colaboración con tu médico para prevenir o detectar multiples enfermedades de índole hereditario e infeccioso en un estudío temprano más facíl de tratar.
                </p>
              </div>
            </div>
          </div>
        </React.Fragment>
    </div>
  );
}

export default Why;