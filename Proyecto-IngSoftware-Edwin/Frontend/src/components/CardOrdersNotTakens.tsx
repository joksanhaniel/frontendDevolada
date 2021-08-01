import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarker} from '@fortawesome/free-solid-svg-icons';

const CardOrdersNotTakens:React.FC = () =>(
    <div className="col-12 row" style={{padding: "20px 15px 0px 30px"}} >
            <div className="col-md-6 col-12 col-sm-12 col-lg-6 col-xl-4">
                <div className="card bg-success1">
                    <div className="card-body">
                        <div className="mx-auto d-block cardOrdersNottakes">
                            <h1 className="text-sm-center mt-2 mb-1">PizzaHut</h1>
                            <h2 className="text-sm-center mt-2 mb-1">Combo #2</h2>
                            <h3 className="text-sm-center mt-2 mb-1">
                                <span>Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet ad nam quidem delectus incidunt repellat officiis laborum.
                            </h3>
                            <h3 className="text-sm-center mt-2 mb-1">
                                <span>Precio:</span> 400.00
                            </h3>
                            <hr/>
                            <div className="location text-sm-center"><FontAwesomeIcon icon={faMapMarker}/> Colonia centro america</div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success">Tomar pedido</button>
                </div>
            </div>
            <div className="col-md-6 col-12 col-sm-12 col-lg-6 col-xl-4">
                <div className="card bg-success1">
                    <div className="card-body">
                        <div className="mx-auto d-block cardOrdersNottakes">
                            <h1 className="text-sm-center mt-2 mb-1">PizzaHut</h1>
                            <h2 className="text-sm-center mt-2 mb-1">Combo #1</h2>
                            <h3 className="text-sm-center mt-2 mb-1">
                                <span>Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet ad nam quidem delectus incidunt repellat officiis laborum.
                            </h3>
                            <h3 className="text-sm-center mt-2 mb-1">
                                <span>Precio:</span> 700.00
                            </h3>
                            <hr/>
                            <div className="location text-sm-center"><FontAwesomeIcon icon={faMapMarker}/> Colonia centro america</div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success">Tomar pedido</button>
                </div>
            </div>
            <div className="col-md-6 col-12 col-sm-12 col-lg-6 col-xl-4">
                <div className="card bg-success1">
                    <div className="card-body">
                        <div className="mx-auto d-block cardOrdersNottakes">
                            <h1 className="text-sm-center mt-2 mb-1">PizzaHut</h1>
                            <h2 className="text-sm-center mt-2 mb-1">Combo #3</h2>
                            <h3 className="text-sm-center mt-2 mb-1">
                                <span>Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet ad nam quidem delectus incidunt repellat officiis laborum.
                            </h3>
                            <h3 className="text-sm-center mt-2 mb-1">
                                <span>Precio:</span> 1,200.00
                            </h3>
                            <hr/>
                            <div className="location text-sm-center"><FontAwesomeIcon icon={faMapMarker}/> Colonia centro america</div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success">Tomar pedido</button>
                </div>
            </div>
        </div>
)
export default CardOrdersNotTakens;
