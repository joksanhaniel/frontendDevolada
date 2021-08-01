import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import User1 from "../../img/team/EdwinQuintero.jpeg";
import User2 from "../../img/team/VictorAmaya.jpg";
import User3 from "../../img/team/JoksanRamos.jpg";
import comillasL from "../../img/quote_sign_left.png";
import comillasR from "../../img/quote_sign_right.png";
import Col from 'react-bootstrap/Col';
const SectionTeam:React.FC = () => (
<div id="testimonials" className="weare">
    <Container className="wow fadeInUp" id="styleconteinerteam">
      <Row>
        <Col md="12">
          <h3 className="section-title">Desarrolladores</h3>
          <div className="section-title-divider"></div>
          <p className="section-description">Equipo conformado por estudiantes de la facultad de ingeniería en sistemas, de Universidad Nacional Autónoma de Honduras UNAH-CU. </p>
        </Col>
      </Row>
      <Row >
        <div className="col-md-3">
          <div className="profile">
            <div className="pic"><Image  src={User1} alt=""/></div>
            <h4>Edwin Quintero</h4>
            <span>Ing. Sistemas Computacional</span>
          </div>
        </div>
        <div className="col-md-9">
          <div className="quote">
            <b><Image  src={comillasL} alt=""/></b> Fronted Developer, React, estudiantes de ingeniería, departamento de TI <small><Image  src={comillasR} alt=""/></small>
          </div>
        </div>
      </Row>

      <Row>
        <div className="col-md-9">
          <div className="quote">
          <b><Image  src={comillasL} alt=""/></b> Fronted Developer, React, estudiantes de ingeniería, departamento de TI <small><Image  src={comillasR} alt=""/></small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="profile">
            <div className="pic"><Image  src={User2} alt=""/></div>
            <h4>Víctor Amaya</h4>
            <span>Ing. Sistemas Computacional</span>
          </div>
        </div>
      </Row>

      <Row >
        <div className="col-md-3">
          <div className="profile">
            <div className="pic"><Image  src={User3} alt=""/></div>
            <h4>Joksan Haniel Ramos</h4>
            <span>Ing. Sistemas Computacional</span>
          </div>
        </div>
        <div className="col-md-9">
          <div className="quote">
            <b><Image  src={comillasL} alt=""/></b> Backend Developer, Python-Django, estudiantes de ingeniería, departamento de TI <small><Image  src={comillasR} alt=""/></small>
          </div>
        </div>
      </Row>
    </Container>    
</div>
)
  
export default SectionTeam;