import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruckLoading,faTasks} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faTwitter,faInstagram,faPinterest} from '@fortawesome/free-brands-svg-icons';

const CardCategory:React.FC = () =>(
    <div className="col-md-6 col-12 col-sm-12 col-lg-4 col-xl-3">
        <div className="card bg-success" style={{padding: "0px 12px 0px 12px"}} >
            <div className="card-header">
            <FontAwesomeIcon icon={faTruckLoading}/><strong className="fa fa-cutlery"> DevoladaApp</strong>
            </div>
            <div className="card-header user-header alt bg-dark">
                <div className="media">
                    <div className="media-body">
                        <a href="/appCustomer/Company"><h2 className="text-light display-6">Restaurantes</h2></a>
                    </div>
                </div>
            </div>
            <section className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <a href="#"><FontAwesomeIcon icon={faTasks}/> Comercios <span className="badge badge-danger pull-right">15</span></a>
                    </li>
                </ul>
            </section>
            <div className="card-body">
                <div className="card-text text-sm-center">
                    <a className="SocialI" href="#"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a className="SocialI" href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a className="SocialI" href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a className="SocialI" href="#"><FontAwesomeIcon icon={faPinterest}/></a>
                </div>
            </div>
        </div>
    </div>
)
export default CardCategory;
