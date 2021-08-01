import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import logoDevolada from "../img/Iconooficial.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faShoppingCart,faSearch} from '@fortawesome/free-solid-svg-icons';
import User from "../img/team/VictorAmaya.jpg";
const navbar:React.FC = ()=>(
    <header id="headerApp" className="header">
            <div className="top-left col-3">
                <div className="navbar-header">
                    <a className="navbar-brand" href="./"><Image src={logoDevolada} alt="Logo"/><span>De Volada</span></a>
                    <a id="menuToggle" className="menutoggle"> <FontAwesomeIcon icon={faBars}/> </a>
                </div>
            </div>
            <div className="top-right col-9 container">
                <div className="header-menu row">
                    <div className="header-left col-10 col-sm-10 col-md-11 col-lg-11 col-xl-11 row">
                        <div className="form-inline col-10 col-sm-10 col-md-10 col-lg-9 col-xl-10">
                            <form className="search-form">
                                <input className="form-control" type="text" placeholder="Search ..." aria-label="Search"/>
                                <button className="search-close" type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                            </form>
                        </div>

                        <div className="dropdown for-notification col 2">
                            <button className="btn" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FontAwesomeIcon icon={faShoppingCart}/>
                                <span className="count"> 3</span>
                            </button>
                        </div>
                    </div>

                    <div className="user-area dropdown float-right col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1">
                        <a href="#" className="">
                            <Image className="user-avatar rounded-circle" src={User} alt="User"/>
                        </a>
                        <span>Victor</span>
                    </div>

                </div>
            </div>
        </header>
)
export default navbar
