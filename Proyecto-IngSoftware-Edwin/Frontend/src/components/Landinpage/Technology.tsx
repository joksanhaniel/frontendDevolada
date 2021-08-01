import React from "react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Service1 from "../../img/service1.png";
import Service2 from "../../img/service2.png";
import Service3 from "../../img/service3.png";
const Header:React.FC = () => (
   <div id="Tecnology" className="three_box">
   <Container>
      <Row>
         <h3 className="col-12" id="colorTextService">Tecnología del sitio web</h3>
         <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="Soft-box">
               <i><Image  src={Service1} alt=""/> </i>
               <h3> Software</h3>
               <p>React, Django</p>
               <p>Vesion 1.2.0</p>
            </div>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="Soft-box">
               <i><Image  src={Service2} alt=""/> </i>
               <h3>App Movil</h3>
               <p>Actualmente no contamos con app, pero nuestro equipo desarrollo está trabajando en ello.</p>
            </div>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div className="Soft-box">
               <i><Image  src={Service3} alt=""/> </i>
               <h3>Sitio web</h3>
               <p>Contamos con la página desarrollo tecnológico, destinada para clientes que gestionan servicios de repartos, en global.</p>
            </div>
         </div>
      </Row>
   </Container>
</div>
)
  
export default Header;