import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruckLoading,faTasks} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faTwitter,faInstagram,faPinterest} from '@fortawesome/free-brands-svg-icons';

const CardStateOrders:React.FC = () =>(
    <div className="col-lg-12" style={{padding: "0px 45px 0px 45px"}} >
                <div className="card">
                    <div className="card-header">
                        <strong className="card-title">Lista estados de pedidos</strong>
                    </div>
                    <div className="table-stats order-table ov-h">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th className="serial">#</th>
                                    <th>ID</th>
                                    <th>Nombre Repartidor</th>
                                    <th>Tomado</th>
                                    <th>Reclamado</th>
                                    <th>Encamino</th>
                                    <th>Entregado</th>
                                    <th>completado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="serial">1.</td>
                                    <td> #5469 </td>
                                    <td>  <span className="name">Louis Stanley</span> </td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="serial">2.</td>
                                    <td> #5468 </td>
                                    <td>  <span className="name">Gregory Dixon</span> </td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-pending">Pendiente</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="serial">3.</td>
                                    <td> #5467 </td>
                                    <td>  <span className="name">Catherine Dixon</span> </td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-complete">Completado</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-pending">Pendiente</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-pending">Pendiente</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="serial">4.</td>
                                    <td> #5466 </td>
                                    <td>  <span className="name">------</span> </td>
                                    <td>
                                        <span className="badge badge-pending">Pendiente</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-pending">Pendiente</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-pending">Pendiente</span>
                                    </td>
                                    <td>
                                        <span className="badge badge-pending">Pendiente</span>
                                    </td>
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
export default CardStateOrders;
