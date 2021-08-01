import React from "react";
import Navbar from "../components/Navbar";
import PanelLeft from "../components/Left-panel-app";
import Directional from "../components/breadcrumbFile";
import CardCategory from "../components/CardCategory";
import CardCompany from "../components/CardCompany";
import Footer from "../components/Footer";
import CardBuy from "../components/CardBuyList";
import CardStateOrders from "../components/CardStateOrders";
import CardOrdersNotTakens from "../components/CardOrdersNotTakens";
import CardCategoryMenu from "../components/CardCompanyMenu";
import GenerateOrders from "../components/CardGenerateOrders";
import C2C from "../components/CardGenerateOrdersC2C";

import "../css/StyleApp.css";
import '../css/vendor/bootstrap/css/bootstrap.min.css';
const customer:React.FC = () => (
  <div>
    <PanelLeft/>
    <div id="right-panel" className="right-panel">
      <Navbar/>
      <Directional/>
      <div className="content">
        <div className="animated fadeIn">
            <div className="row">
              <C2C/>

              <CardBuy/>
              <CardStateOrders/>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  </div>
);
export default customer;

/*
              <CardCategory/>
              <CardCategory/>
              <CardCategory/>
              <CardCompany/>
              <CardCategoryMenu/>
              <GenerateOrders/>
              

*/