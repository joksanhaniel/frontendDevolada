import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import LogoImg from "../../img/logo.jpg";
import DeliveryImg from "../../img/img1.png";
const Header:React.FC = () => (
   <div id="contacts" className="contact">
   <Container>
      <Row>
         <div className="col-md-6">
            <div className="titlepage">
               <h2>Contáctanos </h2>
            </div>
            <div className="cont">
               <span>Descargas App móvil <br/>
                  Aún no disponibles</span>
               <a href="">Descargas </a>
            </div>
         </div>
         <div className="col-md-6">
            <form className="main_form">
               <div className="row">
                  <div className="col-sm-12">
                     <Button className="contactus" >Nombre Completo</Button>
                  </div>
                  <div className="col-sm-12">
                     <Button className="contactus" >Correo electrónico</Button>
                  </div>
                  <div className="col-sm-12">
                     <Button className="contactus" >Numero Telefonico</Button>
                  </div>
                  <div className="col-sm-12">
                     <Button className="contactus" >Mensaje</Button>
                  </div>
                  <div className="col-sm-6" style={{marginLeft:"auto",marginRight:"auto"}}>
                     <a className=".send" href="">Enviar</a>
                  </div>
               </div>
            </form>
         </div>
      </Row>
   </Container>
</div>
)
  
export default Header;