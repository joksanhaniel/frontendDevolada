import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import DeliveryImg1 from "../../img/delivery/PizzaHut.jpg";
import DeliveryImg2 from "../../img/delivery/Campero.jpg";
import DeliveryImg3 from "../../img/delivery/dunkin donuts.jpg";
import DeliveryImg4 from "../../img/delivery/Supermercados-la-Colonia.jpg";
import DeliveryImg5 from "../../img/delivery/Paiz.png";
import DeliveryImg6 from "../../img/delivery/walmart.jpg";
import DeliveryImg7 from "../../img/delivery/La mundial.jpg";
const Header:React.FC = () => (
   <div id="services" className="testimonial">
   <Container>
      <Row>
         <div className="col-md-12">
            <div className="titlepage">
               <h2>Cartera de <span className="rosadotext">servicio y productos</span></h2>
               <p>Podremos ver unas vistas de cartelera de productos y servicios que se brindan, esta asistencia de repartos, podremos verlas y generarlas sus pedidos de acuerdo a cada categoría.
               </p>
            </div>
         </div>
      </Row>
      <section id="demos">
         <Row>
            <div className="col-md-12">
               <div style={{display:"flex",overflowY:"hidden"}}>
                  <div className="item">

                     <Image className="ViewDelivery" src={DeliveryImg1} alt=""/>
                     <h3>Pizza Hut</h3>
                     <p>Cocina</p>
                  </div>
                  <div className="item">
                     <Image className="ViewDelivery" src={DeliveryImg2} alt=""/>
                     <h3>Campero</h3>
                     <p>Cocina</p>
                  </div>
                  <div className="item">
                     <Image className="ViewDelivery" src={DeliveryImg3} alt=""/>
                     <h3>Dunkin Donuts </h3>
                     <p>Repostería</p>
                  </div>
                  <div className="item">
                     <Image className="ViewDelivery" src={DeliveryImg4} alt=""/>
                     <h3>Supermercado la colonia </h3>
                     <p>Supermercado</p>
                  </div>
                  <div className="item">
                     <Image className="ViewDelivery" src={DeliveryImg5} alt=""/>
                     <h3>Supermercado Paiz Honduras</h3>
                     <p>Supermercado</p>
                  </div>
                  <div className="item">
                     <Image className="ViewDelivery" src={DeliveryImg6} alt=""/>
                     <h3>Walmart</h3>
                     <p>Tienda</p>
                  </div>
                  <div className="item">
                     <Image className="ViewDelivery" src={DeliveryImg7} alt=""/>
                     <h3>La Mundial</h3>
                     <p>Ferreteria</p>
                  </div>
               </div>
               <div className="owl-nav" >
                  <button type="button" role="presentation" className="owl-prev" >
                     <span aria-label="Previous">‹</span>
                     </button><button type="button" role="presentation" className="owl-next" >
                        <span aria-label="Next">›</span>
                  </button>
               </div>
               <div className="owl-dots">
                  <button role="button" className="owl-dot active">
                     <span></span>
                  </button>
                  <button role="button" className="owl-dot">
                     <span></span>
                  </button>
                  <button role="button" className="owl-dot">
                     <span></span>
                  </button>
               </div>
            </div>
         </Row>
      </section>
   </Container>
</div>
)
  
export default Header;