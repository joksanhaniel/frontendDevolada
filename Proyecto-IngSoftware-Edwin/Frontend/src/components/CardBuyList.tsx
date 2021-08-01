import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruckLoading,faTasks} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faTwitter,faInstagram,faPinterest} from '@fortawesome/free-brands-svg-icons';

const CardBuy:React.FC = () =>(
    <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <strong className="card-title">Lista de compras</strong>
                    </div>
                    <div className="table-stats order-table ov-h">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th className="serial">#</th>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="serial">1.</td>
                                    <td> #5469 </td>
                                    <td>  <span className="name">Louis Stanley</span> </td>
                                    <td> <span className="product">iMax</span> </td>
                                    <td><span className="price">1</span></td>
                                    <td><span className="count">231</span></td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="serial">2.</td>
                                    <td> #5468 </td>
                                    <td>  <span className="name">Gregory Dixon</span> </td>
                                    <td> <span className="product">iPad</span> </td>
                                    <td><span className="price">1</span></td>
                                    <td><span className="count">250</span></td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="serial">3.</td>
                                    <td> #5467 </td>
                                    <td>  <span className="name">Catherine Dixon</span> </td>
                                    <td> <span className="product">SSD</span> </td>
                                    <td><span className="price">1</span></td>
                                    <td><span className="count">250</span></td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="serial">4.</td>
                                    <td> #5466 </td>
                                    <td>  <span className="name">Mary Silva</span> </td>
                                    <td> <span className="product">Magic Mouse</span> </td>
                                    <td><span className="price">1</span></td>
                                    <td><span className="count">250</span></td>
                                    <td>
                                        <span className="badge badge-pending">Pendiente</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
)
export default CardBuy;
