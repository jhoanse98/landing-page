import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import GenoCOl from '../images/Genocol.png'
import OBox from '../images/official-box-photo_color-genomics_3d_box_with-sleeve_v1.png'
import "../css/About.css"

function About() {

  return (   
    <div>
        <React.Fragment>
          <div className="row MyContainer">
            <div className="col-6">
              <img className="imgAuto" src={GenoCOl}></img>
            </div>
            <div className="col-6">
              <h1 className="title">¿QUIÉNES SOMOS?</h1>
              <p className="MyContent">Genomica de Colombia (GENO-COL) es un laboratorio que ofrece un servicio integral de calidad en el sector del diagnóstico molecular, facilitando, asesorando
                y ofreciendo a especialistas pruebas diagnósticas, citogenéticas y moleculares, novedosas y punteras.
                <br/><br/>
                Los objetivos de GENO-COL es potenciar y asesorar proyectos de promoción y prevención del Cáncer y ofertar servicios analíticos enfocados al diagnóstico
                genético, colaborando con el Sistema Nacional de Salud para facilitar el acceso a las técnicas más novedosas.
                GENO-COL dispone de la representación de laboratorios con servicios centrales dotados de equipos y tecnología de última generación que le permiten
                ofertar las técnicas más modernas de diagnóstico molecular.
                <br/><br/>
                Todas nuestras actividades están controladas por unas estrictas normas de calidad basadas en un sistema de análisis de riesgos, identificación y control de
                puntos críticos. Nuestras instalaciones cuentan con todas las autorizaciones legales pertinentes, protección de bases de datos y sistemas de seguridad en
                la información enviada a nuestros clientes.
                <br/><br/>
                En nuestro afán de superación y de ofrecer los últimos avances en el diagnóstico clínico, GENO-COL colabora con el grupo de investigación de la clínica
                oncológica IMAT.
              </p>
            </div>
          </div>
          <div className="row MyContainer">
            <div className="col-6">
              <h1 className="title">MISIÓN</h1>
              <p className="MyContent">Coadyuvar en el cuidado de la vida a través del uso de la medicina genómica mediante pruebas genéticas costo-efectivas para realizar una detección temprana de la enfermedad y un tratamiento especializado mediante un servicio eficiente, seguro y especializado.</p>
            </div>
            <div className="col-6">
              <h1 className="title">VISIÓN</h1>
              <p className="MyContent">
                En el 2021 ser una institución de salud de alta complejidad y modelo de
                referencia en el manejo de pacientes de cáncer de Alto riesgo hereditario y
                la prestación de servicios de diagnóstico genético y de biología molecular
                para masificar el uso de los estudios genéticos y la prevención de
                enfermedades oncológicas dando apoyo a población general, pacientes,
                familiares, médicos y entidades que utilicen nuestros servicios
              </p>
            </div>
          </div>
          <div className="row MyContainer">
            <div className="col-6">
              <h1 className="title">VALORES</h1>
              <ul className="text-lg-left ml-4 MyContent No-margin">
                  <li>
                      <p className="item-align No-margin">Servicio</p>
                  </li>
                  <li>
                      <p className="item-align No-margin">Eficiencia</p>
                  </li>
                  <li>
                      <p className="item-align No-margin">Respeto</p>
                  </li>
                  <li>
                      <p className="item-align No-margin">Liderazgo</p>
                  </li>
                  <li>
                      <p className="item-align No-margin">Responsabilidad</p>
                  </li>
                  <li>
                      <p className="item-align No-margin">Honestidad</p>
                  </li>
              </ul>
            </div>
            <div className="col-6">
              <img id="boxAbout" className="imgAuto" src={OBox}></img>
            </div>
          </div>
        </React.Fragment>
    </div>
  );
}

export default About;