import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import LogoImg from "../../img/Iconooficial.png";
import DeliveryImg from "../../img/img1.png";
const Header:React.FC = () => (
    <header id="Home">
         <div className="header_bg">
            <div className="header">
               <Container>
                  <Row>
                     <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                           <div className="center-desk">
                              <div className="logo">
                                 <a href="myapp"><Image style={{width:"40%"}}  src={LogoImg} alt=""/></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                        <ul className="costomer">
                           <li>Servicio al cliente: <a href="#">+504-9900-0000</a></li>
                        </ul>
                     </div>
                  </Row>
               </Container>
            </div>
            <section className="banner_main">
               <div className="container-fluid">
                  <div className="row d_flex">
                     <div className="col-md-5">
                        <div  className="text-bg">
                           <span  style={{fontSize: "90px"}}>DeVolada<br/></span>
                           <h1 className="colorTextñ" >Delivery</h1>
                           <span className="colorTextñ" style={{fontSize: "45px;"}}>Sitio Especializado</span>
                           <p className="colorTextñ" style={{fontSize: "23px;"}}>Para brindar servicio de reparto de diversos productos, teniendo en cuenta su experiencia, brindando uno de los mejores servicios y calidad de ellos.</p>
                           <a href="login">Iniciar experiencia</a>
                        </div>
                     </div>
                     <div className="col-md-7" id="hover">
                        <div className="text-img">
                           <figure><Image src={DeliveryImg} alt=""/></figure>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </header>
)
  
export default Header;