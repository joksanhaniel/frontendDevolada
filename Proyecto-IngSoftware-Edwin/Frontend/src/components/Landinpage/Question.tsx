import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ImgQuestion from "../../img/ask.jpg";
const Header:React.FC = () => (
<div id="asked"  className="asked_main">
   <Container>
      <Row>
         <div className="col-md-12">
            <div className="titlepage">
               <h2>Preguntas <span className="rosadotext"> Frecuentes</span></h2>
            </div>
         </div>
      </Row>
   </Container>
   <div className="container-fluid">
      <Row>
         <div className="col-md-6">
            <div className="ask_img">
               <figure><Image src={ImgQuestion} alt="#"/></figure>
            </div>
         </div>
         <div className="col-md-6">
            <div className="ask_box">
               <div className="simpaly">
                  <div className="slider"><span>+</span><a href="#">
                     Realizan Todo tipos de encargos</a>
                  </div>
                  <div className="content">
                     <p> Trabajos bajo pedidos, mediante la página web, con empresas que se muestran en la app con sus productos respectivos.
                     </p>
                  </div>
               </div>
               <div className="simpaly">
                  <div className="slider"><span>+</span><a href="#">
                     Puede una obtener los servicios Delivery</a>
                  </div>
                  <div className="content">
                     <p>Poner se en contacto con el administrador de la app, el cual se puede comunicar mediante a correo, abajo se mostrará un formulario.
                     </p>
                  </div>
               </div>
               <div className="simpaly">
                  <div className="slider"><span>+</span><a href="#">
                     ¿Las transferencias son seguras?</a>
                  </div>
                  <div className="content">
                     <p> 
                        Contamos con pagos mediante tarjeta o pago en efectivo. 
                     </p>
                  </div>
               </div>
               <div className="simpaly">
                  <div className="slider"><span>+</span><a href="#">
                     ¿Tienen descuentos?</a>
                  </div>
                  <div className="content">
                     <p> 
                        Contamos con promociones, descuentos, tanto en los productos como en las entregas.
                     </p>
                  </div>
               </div>
               <div className="simpaly">
                  <div className="slider"><span>+</span><a href="#">
                     ¿Tiene servicios 24 horas?
                     </a>
                  </div>
                  <div className="content">
                     <p> 
                        Contamos con un horario de 8:00 am a 9:00 pm.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </Row>
   </div>
</div>
)
  
export default Header;