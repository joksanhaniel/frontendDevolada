import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruckLoading,faTasks} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faTwitter,faInstagram,faPinterest} from '@fortawesome/free-brands-svg-icons';

const CardCategoryMenu:React.FC = () =>(
    <div style={{display:"contents"}}>
        <div className="col-12">
            <div className="imgMenu"></div>
        </div>
        <div className="col-12 WelcomeMenu">
            <h1>Menú</h1>
            <p >Pizzas de leña únicas o déjese tentar por nuestras pastas, antipasto, focaccias, ensaladas y platos de Bruschetta. Relájese en el agradable ambiente mientras disfruta de los aromas de los hornos de leña o siéntese al aire libre y tome el sol de Mildura.</p>
        </div>
        <div className="col-md-4 col-12 col-sm-6 col-lg-6 col-xl-4" data-toggle="modal" data-target="#exampleModalXl">
            <section className="card bg-success">
                <div className="twt-feed blue-bg">
                    <div className="media">
                        <div className="media-body">
                            <h2 className="text-white display-6">Combo #1</h2>
                            <p className="text-light">Pizza Cansone</p>
                        </div>
                    </div>
                </div>
                
                <div className="card-body">
                    <div className="custom-tab">

                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="custom-nav-home-tab" data-toggle="tab" href="#custom-nav-home" role="tab" aria-controls="custom-nav-home" aria-selected="true">Descripción</a>
                                <a className="nav-item nav-link" id="custom-nav-profile-tab" data-toggle="tab" href="#custom-nav-profile" role="tab" aria-controls="custom-nav-profile" aria-selected="false">Contenido</a>
                                <a className="nav-item nav-link" id="custom-nav-contact-tab" data-toggle="tab" href="#custom-nav-contact" role="tab" aria-controls="custom-nav-contact" aria-selected="false">Precio</a>
                            </div>
                        </nav>
                        <div className="tab-content pl-3 pt-2" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="custom-nav-home" role="tabpanel" aria-labelledby="custom-nav-home-tab">
                                <p style={{color: "#fff",fontSize:"x-large"}} >Pizzamia contiene 1 pizza tamaño mega-gigante.</p>
                                <p style={{color: "#fff"}} >Pizza mega-gigante de 12 porciones, un refresco 3 litros, 8 aros de cebolla, 8 complemento,  bocadillo de Entrada.</p>
                                <p style={{color: "#fff"}} >Precio L. 1,250.</p>
                            </div>
                        </div>
                        <a href=""><button type="button" className="btn btn-danger col-12">Ordenar</button></a>
                    </div>
                </div>
            </section>
        </div>
        <div className="col-md-4 col-12 col-sm-6 col-lg-6 col-xl-4" data-toggle="modal" data-target="#exampleModalXl">
            <section className="card bg-success">
                <div className="twt-feed blue-bg" >
                    <div className="media">
                        <div className="media-body">
                            <h2 className="text-white display-6">combo #2</h2>
                            <p className="text-light">Pizza mania</p>
                        </div>
                    </div>
                </div>
                
                <div className="card-body">
                    <div className="custom-tab">

                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="custom-nav-home-tab" data-toggle="tab" href="#custom-nav-home" role="tab" aria-controls="custom-nav-home" aria-selected="true">Descripción</a>
                                <a className="nav-item nav-link" id="custom-nav-profile-tab" data-toggle="tab" href="#custom-nav-profile" role="tab" aria-controls="custom-nav-profile" aria-selected="false">Contenido</a>
                                <a className="nav-item nav-link" id="custom-nav-contact-tab" data-toggle="tab" href="#custom-nav-contact" role="tab" aria-controls="custom-nav-contact" aria-selected="false">Precio</a>
                            </div>
                        </nav>
                        <div className="tab-content pl-3 pt-2" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="custom-nav-home" role="tabpanel" aria-labelledby="custom-nav-home-tab">
                                <p style={{color: "#ffffff",fontSize:"x-large"}}>Pizzamia contiene 1 pizza tamaño gigante.</p>
                                <p style={{color: "#ffffff"}}>Pizza gigante de 8 porciones, un refresco 2 litros, 4 aros de cebolla, 4 complementos.</p>
                                <p style={{color: "#ffffff"}}>Precio L. 350.</p>
                            </div>
                        </div>
                        <a href=""><button type="button" className="btn btn-danger col-12">Ordenar</button></a>
                    </div>
                </div>
            </section>
        </div>
    </div>
)
export default CardCategoryMenu;
