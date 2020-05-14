import React from 'react';
import Step1 from "../images/TestKit.png"
import Step2 from "../images/TestStep2.png"
import Step3 from "../images/TestStep3.png"
import Step4 from "../images/TestStep4.png"
import Step5 from "../images/TestStep5.png"
import "../css/Test.css"

function Test() {

  return (   
    <div>
        <React.Fragment>
          <div className="row justify-content-md-center">
            <h1 className="title">
              ¿CÓMO LO HACEMOS?
            </h1>
          </div>
          <div className="row MyContainer">
            <div className="col-6">
              <img src={Step1}></img>
            </div>
            <div className="col-6">
              <h1 className="title">1. TOMA DE MUESTRAS Y ENVÍO DE KITS</h1>
              <p className="MyContent">
                Práctica, rápida y tan eficaz como una muestra de sangre, GENO-COL
                ofrece la toma demuestra con tubo ORAgene-Dx puede ser realizado
                por el paciente o su responsable. La única preparación es tener ayuno
                completo 30 minutos antes de la toma. Los Saliva collection kit están
                disponibles para todo el país. Solicitudes: comericalgenocol@gmail.
                com
              </p>
            </div>
          </div>
          <div className="row MyContainer">
            <div className="col-6">
              <h1 className="title">2. RECEPCIÓN Y PREANALÍTICA</h1>
              <p className="MyContent">
                Tras la toma de la muestra, ésta es recibida en nuestro centro de
                acopio por un grupo especializado, responsable por la verificación
                documental y el registro del paciente , la muestra es enviada al laboratorio
                donde el ADN extraído es preparado para la secuenciación.
              </p>
            </div>
            <div className="col-6">
              <img src={Step2}></img>
            </div>
          </div>
          <div className="row MyContainer">
            <div className="col-6">
              <img src={Step3}></img>
            </div>
            <div className="col-6">
              <h1 className="title">3. PROCESAMIENTO</h1>
              <p className="MyContent">
                Se realiza el estudio solicitado permitiendo el análisis de uno o miles de
                genes en un mismo panel.
              </p>
            </div>
          </div>
          <div className="row MyContainer">
            <div className="col-6">
              <h1 className="title">4. BIOINFORMATICA</h1>
              <p className="MyContent">
                El producto de la secuenciación deriva en una
                enorme cantidad de datos de alta complejidad. Los equipos de bioinformática
                son responsables por la evaluación de la calidad, organización
                interpretación y traducción de los datos obtenidos.
              </p>
            </div>
            <div className="col-6">
              <img src={Step4}></img>
            </div>
          </div>
          <div className="row MyContainer">
            <div className="col-6">
              <img src={Step5}></img>
            </div>
            <div className="col-6">
              <h1 className="title">5. ANÁLISIS CLÍNICO</h1>
              <p className="MyContent">
                Se determinan las alteraciones genéticas encontradas
                que justifican el cuadro del paciente.
              </p>
            </div>
          </div>
          <div className="row MyContainer justify-content-md-center">
            <div className="col-6">
              <h1 className="title">6. RESULTADO</h1>
              <p className="MyContent">
                Es liberado para el médico tratante, paciente y/o cliente de forma digital .
              </p>
            </div>
          </div>
        </React.Fragment>
    </div>
  );
}

export default Test;