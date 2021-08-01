import React from "react";
import Navbar from "../components/Navbar";
import PanelLeft from "../components/Left-panel-app";
import Directional from "../components/breadcrumbFile";
import Footer from "../components/Footer";
import CardOrdersNotTakens from "../components/CardOrdersNotTakens";
import CardMyOrders from "../components/CardMyOrders";
import OrdersDelivered from "../components/CardOrdersDelivered";
import ListInvoice from "../components/CardListIncoive";
import CardInvoice from "../components/CardInvoice";
import Row from 'react-bootstrap/Row';

import "../css/StyleApp.css";
import '../css/vendor/bootstrap/css/bootstrap.min.css';
const Driver:React.FC = () => (
  <div>
    <PanelLeft/>
    <div id="right-panel" className="right-panel">
      <Navbar/>
      <Directional/>
      <CardOrdersNotTakens/>
      <CardMyOrders/>
      <OrdersDelivered/>
      <Row id="PanelInvoics">
        <ListInvoice/>
        <CardInvoice/>
      </Row>
      <Footer/>
    </div>
  </div>
);
export default Driver;