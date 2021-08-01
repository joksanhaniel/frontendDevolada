import React from "react";
import Image from 'react-bootstrap/Image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkedAlt,faMapMarker, } from '@fortawesome/free-solid-svg-icons';
import CompanyLogo from '../img/delivery/logo PizzaHut.jpg';
const CardCompany:React.FC = () =>(
    <div className="col-md-4 col-12 col-sm-6 col-lg-6 col-xl-4">
        <section className="card bg-success">
            <div className="twt-feed blue-bg" id="panelCardCompany">
                <div className="media">
                    <a href="/appCustomer/Company/1">
                        <Image className="align-self-center rounded-circle mr-3" style={{width:"85px", height:"85px"}}  alt="company" src={CompanyLogo}/>
                    </a>
                    <div className="media-body">
                        <h2 className="text-white display-6">PizzaHut</h2>
                        <p className="text-light">Restaurantes</p>
                    </div>
                </div>
            </div>
            <div className="weather-category twt-category">
                <ul>
                    <li className="active">
                        <h5>10</h5>
                        Sucursales
                    </li>
                    <li>
                        <h5>30</h5>
                        Productos
                    </li>
                </ul>
            </div>
            <footer className="twt-footer">
                <a href="#"><FontAwesomeIcon icon={faMapMarker}/></a>
                <span>Tegucigalpa,Honduras.</span> 
            </footer>
        </section>
    </div>
)
export default CardCompany;

