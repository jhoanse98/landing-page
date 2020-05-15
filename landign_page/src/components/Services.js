import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faTablets, faSchool, faFemale} from '@fortawesome/free-solid-svg-icons'
import Gen from '../images/gen.jpg'
import Gen2 from '../images/gen2.jpg'
import Pack from '../images/packgenocol.jpg'
import Herencia from '../images/hereditarias.jpg'
import BlueLogo from '../images/bluelogo.png'
import '../css/Services.css'


function ColorExperience() {

  return (   
    <div>
        <React.Fragment>
          <div className="row MyContainer align-items-center">
            <div  className="col-6 align-self-center">
              <h1 className="title">LA GENÉTICA ES DE TODOS Y PARA TODOS</h1>
              <p className="MyContent">
              Nuestra misión es hacer de los exámenes genéticos, diagnósticos accesibles para todos:
              </p>
            </div>
            <div className="col-6">
              <ul className="text-lg-left list-unstyled ml-4 MyContent No-margin">
                  <li>
                      <FontAwesomeIcon icon={faFemale} className="item-align CheckBoxIcon"/>
                      <p className="item-align No-margin">Pacientes Particulares</p>
                  </li>
                  <li>
                      <FontAwesomeIcon icon={faAmbulance} className="item-align CheckBoxIcon"/>
                      <p className="item-align No-margin">Entidades Promotoras de Salud</p>
                  </li>
                  <li>
                      <FontAwesomeIcon icon={faTablets} className="item-align CheckBoxIcon"/>
                      <p className="item-align No-margin">Industria Farmacéutica</p>
                  </li>
                  <li>
                      <FontAwesomeIcon icon={faSchool} className="item-align CheckBoxIcon"/>
                      <p className="item-align No-margin">Centros de Investigación</p>
                  </li>
              </ul>
            </div>
          </div>

          <div id="left" className="row MyContainer align-items-center">
            <div className="col-6">
              <h1 id="left" className="title">SERVICIOS</h1>
              <p className="Mycontent">
                GENO-COL le ofrece una amplia gama de servicios realizados con tecnologías de última generación y un asesoramiento personalizado en cada análisis:
              </p>
              <ul className="Mycontent">
                <li>
                  <p>Citogenética molecular <br/> (Hibridación in situ fluorescente (FISH), array-CGH)</p>
                </li>
                <br/>
                <li>
                  <p>Biología molecular <br/> (PCR, MLPA, pirosecuenciación, secuenciación masiva, NGS)</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <img id="reduce" className="imgAuto" src={Gen}></img>
            </div>
          </div>

          <div id="left" className="row MyContainer">
            <div className="col-4">
              <h3 id="left" className="title">
                HEMATO-ONCOLOGÍA
              </h3>
              <ul className="text-lg-left ml-4 MyContent No-margin">
                <li> <p className="MyContent"> LMC – Leucemia Mieloide Crónica </p></li>
                <li> <p className="MyContent"> LMA – Leucemia Mieloide Aguda </p></li>
                <li> <p className="MyContent"> LLC – Leucemia Linfática Crónica </p></li>
                <li> <p className="MyContent"> LLA – Leucemia Linfoblástica Aguda </p></li>
                <li> <p className="MyContent"> Síndromes Mielodisplásicos </p></li>
                <li> <p className="MyContent"> Mieloma Múltiple </p></li>
                <li> <p className="MyContent"> Linfomas </p></li>
                <li> <p className="MyContent"> Síndromes Linfoproliferativos </p></li>
                <li> <p className="MyContent"> Síndromes Mieloproliferativo </p></li>
                <li> <p className="MyContent"> Trombofilia </p></li>
                <li> <p className="MyContent"> Histocompatibilidad </p></li>
                <li> <p className="MyContent"> Otros(<a href="/contact">consultar</a>) </p></li>
              </ul>
            </div>
            <div className="col-4">
              <h3 id="left" className="title">
                TUMORES SÓLIDOS
              </h3>
              <ul className="text-lg-left ml-4 MyContent No-margin">
                <li> <p className="MyContent">Cáncer colorrectal</p></li>
                <li> <p className="MyContent">Cáncer de pulmón</p></li>
                <li> <p className="MyContent">Cáncer de mama</p></li>
                <li> <p className="MyContent">Cáncer de ovario</p></li>
                <li> <p className="MyContent">Cáncer de próstata</p></li>
                <li> <p className="MyContent">Cáncer de vejiga</p></li>
                <li> <p className="MyContent">Neuroblastoma</p></li>
                <li> <p className="MyContent">Sarcomas</p></li>
                <li> <p className="MyContent">Gliomas</p></li>
                <li> <p className="MyContent">Melanomas</p></li>
                <li> <p className="MyContent">Otros(<a href="/contact">consultar</a>)</p></li>
              </ul>
            </div>
            <div className="col-4">
              <h3 id="left" className="title">
                ENFERMEDADES HEREDITARIAS
              </h3>
              <ul className="text-lg-left ml-4 MyContent No-margin">
                <li> <p className="MyContent"> Cáncer hereditario</p></li>
                <li> <p className="MyContent"> Enfermedades neurodegenerativas</p></li>
                <li> <p className="MyContent"> Cardiopatías congénitas</p></li>
                <li> <p className="MyContent"> Síndromes hereditarios</p></li>
                <li> <p className="MyContent"> Otros(<a href="/contact">consultar</a>)</p></li>
              </ul>
            </div>
          </div>

          <div class="row MyContainer justify-content-between">
            <div class="col">
              <p className="MyContent">
                <b>LEUCEMIA LINFOBLÁSTICA AGUDA B (LLA-B)</b>
                <br/>BCR/ABL, t(9;22)(q34;q11)
                <br/>TEL/AML1, t(12;21)(p12;q22)
                <br/>CF3/PBX1, t(1;19)(q23;p13)
                <br/>MLL, del(11q23)
                <br/>TCMYC/IGH, t(8;14)(q24;q32)
                <br/>RUNX, iAMP 21
              </p>
            </div>
            <div class="col">
              <p className="MyContent">
                <b>LEUCEMIA LINFOBLASTICA AGUDA T (LLA-T)</b>
                <br/>SIL-TAL1, t(1p32)
                <br/>TLX3, t(5q35)
                <br/>MYB, del(6q23)
                <br/>NOTCH1
              </p>
            </div>
          </div>

          <div className="row MyContainer justify-content-center">
            <div class="col align-self-center">
                <p className="MyContent">
                  <b>LINFOMA MALT</b>
                  <br/>MALT1, (18q21)
                  <br/>IGH/MALT1, t(14;18)(q32;q21)
                  <br/>API2/MALT1, t(11;18)(q21;q21)
                </p>
              </div>
          </div>

          <div class="row MyContainer justify-content-between">
            <div class="col">
              <p className="MyContent">
                <b>LINFOMA DIFUSO DE CÉLULAS GRANDES B (LDCG-B)</b>
                <br/>IGH (14q32)
                <br/>BCL6, t(3;14)
                <br/>CMYC (8q24)
                <br/>IGH/BCL2, t(14;18)(q32;q21)
              </p>
            </div>
            <div class="col">
              <p className="MyContent">
                <b>LINFOMA FOLICULAR</b>
                <br/>IGH/BCL2, t(14;18)(q32;q21)
                <br/>BCL6, t(3;14)
                <br/>CMYC (8q24)
              </p>
            </div>
          </div>

          <div className="row MyContainer">
            <div className="col-6 align-items-center">
              <img id="imagepack" className="imgAuto" src={Pack}></img>
            </div>
            <div className="col-6 container align-self-center">
              <div className="row MyContainer">
                <div className="col-6">
                  <p className="MyContent">
                    <b>LINFOMA DEL MANTO (LM)</b>
                    <br/>CCND1/IGH, t(11;14)(q13;q32)
                  </p>
                </div>
                <div className="col-6">
                  <p className="MyContent">
                    <b>LINFOMA DE BURKITT (LB)</b>
                    <br/>CMYC (8q24)
                    <br/>CMYC/IGH t(8;14)(q24;q32)
                  </p>
                </div>
              </div>
              <div className="row MyContainer">
                <div className="col-6">
                  <p className="MyContent">
                    <b>SÍNDROMES LINFOPROLIFERATIVOS</b>
                    <br/>Clonalidad linfoide B (IGH)
                    <br/>Clonalidad linfoide T (TCR)
                  </p>
                </div>
                <div className="col-6">
                  <p className="MyContent">
                    <b>LINFOMA ANAPLÁSICO</b>
                    <br/>ALK, t(2p23)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row MyContainer justify-content-center">
            <div class="col align-self-center">
                <p className="MyContent">
                  <b>MIELOMA MÚLTIPLE</b>
                  <br/>RB1, del(13q14)
                  <br/>TP53, del(17p13.1)
                  <br/>del(1p32)
                  <br/>Ganancia 1q25
                  <br/>IGH, t(14q32)
                  <br/>FGFR3/IGH, t(4;14)(p16;q32)
                  <br/>BCL1/IGH, t(11;14)(q13;q32)
                  <br/>IGH/MAF, t(14;16)(q32;q23)
                  <br/>Trisomia 6p11.1-q11-1
                  <br/>Trisomia 9p11.1-q11.1
                  <br/>Trisomia 11p11.1-q11.1
                </p>
              </div>
          </div>

        <div className="MyContainer">
          <h2 id="left" className="title">
            Neoplasias hemato-oncológicas
          </h2>
        </div>

        <div id="left" className="row MyContainer">
          <div className="col-6">
            <p className="Mycontent">
              <b>LEUCEMIA MIELOBLÁSTICA AGUDA (LMA)</b>
              <br/>AML1/ETO, t(8;21)(q22;q22)
              <br/>PML/RARα, t(15;17)(q22;q21)
              <br/>RARα, t(17q21.1)
              <br/>CBFB/MYH11, inv(16)(p13;q22)
              <br/>MLL, del(11q23)
              <br/>DEK/NUP214 t(6;9) (p22;q34)
              <br/>BCR/ABL, t(9;22)(q34;q11)
              <br/>NPM1
              <br/>FLT3
              <br/>CEBPA
              <br/>DNMT3A
              <br/>IDH1/IDH2
            </p>
            <br/>
            <p className="Mycontent">
              <b>LMA-Secudarias</b>
              <br/>Monosomia Chr. 5
              <br/>Monosomia Chr. 7
              <br/>Monosomia Chr. 17
              <br/>Trisomia Chr. 8
            </p>
          </div>
          <div className="col-6">
            <p className="Mycontent">
              <b>SÍNDROMES MIELODISPLÁSICOS (SMD)</b>
              <br/>EGR1, del(5q31)
              <br/>del(7q31)
              <br/>Monosomía Chr. 7
              <br/>Monosomia Chr. 17
              <br/>Trisomía Chr.8
              <br/>D20S108, del(20q12)
              <br/>Nulisomía Chr. Y
              <br/>SF3B1
              <br/>TP53
              <br/>ASXL1
              <br/>DNMT3A
              <br/>RUNX1
            </p>
            <br/>
            <p className="Mycontent">
              <b>LEUCEMIA MIELOIDE CRÓNICA (LMC)</b>
              <br/>BCR/ABL, t(9;22)(q34;q11)
              <br/>FGFR1, del(8p12)
              <br/>PDGFRβ, t(5;12)(q13;13)
              <br/>Secuenciación región quinasa ABL (mutación T315)
            </p>
          </div>
        </div>

        <div id="left" className="row MyContainer">
          <div className="col-6 row">
            <div className="row col-12">
              <p className="Mycontent">
                <b>SÍNDROME HIPEREOSINOFÍLICO</b>
                <br/>FIPLI-PDGFRα, del(4q12)uenciación región quinasa ABL (mutación T315)
              </p>
            </div>
            <div className="row col-12">
              <p className="MyContent">
                <b>SÍNDROMES MIELOPROLIFERATIVOS (SMP)</b>
                <br/>del(4q12)
                <br/>EGFR, del(5q31)
                <br/>Deleción 7q31 / Monosomia Chr. 7
                <br/>Monosomia 8p11.1-q11
                <br/>D20S108, del(20q12)
                <br/>Nulisomía Yp11.1
                <br/>BCR/ABL, t(9;22)(q34;q11)
                <br/>JAK2
                <br/>CALR
                <br/>MPL
                <br/>ASXL1, CBL, DNMT3A, EZH2, IDH1/IDH2, IKZF1,
                <br/>SF3B1, SRSF2, TET2,U2AF1, etc (Panel)
              </p>
            </div>
            <div className="row col-12">
              <p className="MyContent">
                <b>TROMBOFILIA</b>
                <br/>Factor V (mutación de Leiden)
                <br/>Factor II (mutación 2021A)
                <br/>MTHFR (mutación C667T)
              </p>
            </div>
          </div>
          <div className="col-6 align-items-center">
            <img  className="imgAuto" src={Gen2}></img>
          </div>
        </div>

        <div className="MyContainer">
          <h2 id="left" className="title">
            Síndromes congénitos y enfermedades hereditarias
          </h2>
        </div>

        <div className="row MyContainer">
          <div className="col-4">
            <img id="herencia" className="imgAuto" src={Herencia}></img>
          </div>
          <div className="col-4">
            <p className="MyContent">
             <b>DERMATOLOGÍA</b>
              <br/>Neurofibromatosis
              <br/>NF1 NF2
              <br/>Síndrome Gorlin
              <br/>PTCH1, PTCH2, SUFU
              <br/>Melanoma Hereditario
              <br/>CDKN2A
              <br/>ICITOSIS CONGÉNITAS
              <br/>TGM1, ALOX12B, ALOXE3,
              <br/>ABCA12. STS
            </p>
            </div>
            <div className="col-4">
              <p className="MyContent">
                <b>OFTALMOLOGÍA</b>
                <br/>Retinoblastoma
                <br/>RB1
                <br/>Enfermedad de Stargardt
                <br/>ABCA4
                <br/>Síndrome X frágil
                <br/>FMR1
                <br/>Glaucoma congénito
                <br/>MYOC, CYP1B1,LTBP2 OPTN
              </p>
            </div>
        </div>

        <div className="row MyContainer">
          <div className="col-6">
            <p className="MyContent">
              <b>NEONATOLOGÍA</b>
              <br/>Síndrome Prader-Willi
              <br/>Síndrome Angelman
              <br/>B15511, del (15q11)
              <br/>GABRB3, del(15q12)
              <br/>Defectos Tubo Neural
              <br/>MTHFR, MTRR, MTHFD1,
              <br/>MTR, MMACHC, VANGL1,
              <br/>VANGL2, CCL2, FUZ
              <br/>Síndrome Beckwith Wiedemann
              <br/>11p15 5, CDKN1C, H19, IGF2,
              <br/>KCNQ1OT, NSD1
              <br/>Condrosisplastia punctacta
              <br/>AGPS, ARSE, EBP, GNPAT,
              <br/>IMPAD1, LBR, PEX7   
            </p>
          </div>
          <div className="col-6">
            <p className="MyContent">
              <b>PEDRIATRÍA</b>
              <br/>Síndrome de Aarskog
              <br/>FGD1
              <br/>Síndrome de Tourette
              <br/>SLITRK1
              <br/>Síndrome Coffin Lowry
              <br/>RPS6KA3
              <br/>Síndrome de Rett
              <br/>CDKL5, FOXG1, MECP2
              <br/>Síndrome Rubinstein Taybi
              <br/>CREBBP, EP300
              <br/>Síndrome de Hutchinson Gilford Progeria
              <br/>LMNA
            </p>
          </div>
        </div>
        
        <div className="MyContainer">
          <h2 id="left" className="title">
            Panel multigénico: 30 genes
          </h2>
        </div>

        <div id="left" className="row MyContainer justify-content-around">
          <div className="col-6">
            <img id="imgLogo" className="imgAuto" src={BlueLogo}></img>
          </div>
          <div className="col-6">
            <p className="MyContent">
             <b>30 GENES</b>
              <br/>APC, ATC, BAP1, BARD1,
              <br/>BMPR1A, BRCA1, BRCA2,
              <br/>BRIP1, CDH1, CDK4,
              <br/>CDKN2A (p14ARF),
              <br/>CDKM2A (P16INKK4A),
              <br/>CHEK2,EPCAM, GREM 1,
              <br/>MITF, MLH1, MSH2, MSH6,
              <br/>MUTYH NBN, PALB2, PMS2,
              <br/>POLD1, POLE PTEN, RAD51C,
              <br/>RAD51D, SMAD4, STK11, TPS3
            </p>
          </div>
        </div>

        </React.Fragment>
    </div>
  );
}

export default ColorExperience;