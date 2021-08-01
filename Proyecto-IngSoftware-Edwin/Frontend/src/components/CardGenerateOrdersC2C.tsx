import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
const C2C:React.FC = () =>(
    <Row id="OrdensUserModal" className="GenerateOrders col-12">
        <div className="ProdCOnte  col-12">
            <div className="BodyOrdes col-12 displayflex">
                <div className="modal-content col-12" style={{padding: "12px"}}>
                    <h1>Envió de paquetes de cliente a cliente.</h1>
                </div>

                <div className="col-6 paddinCero">
                    <div className="modal-content col-12" id="QuantityOrdensRequest" style={{padding: "12px"}}>
                        <Form className="displayflex">
                            <span className="col-12">Información personal envía</span>
                            <div className="form-group col-6">
                                <label>Primer Nombre</label>
                                <input type="text" className="form-control" id="NameOneCustomerUser" placeholder="Primer Nombre"/>
                            </div>
                            <div className="form-group col-6">
                                <label>Segundo Nombre</label>
                                <input type="text" className="form-control" id="NametwoCustomerUser" placeholder="Segundo Nombre"/>
                            </div>
                            <div className="form-group col-6">
                                <label>Primer Apellido</label>
                                <input type="text" className="form-control" id="LastNameOneCustomerUser" placeholder="Primer Apellido"/>
                            </div>
                            <div className="form-group col-6">
                                <label>segundo Apellido</label>
                                <input type="text" className="form-control" id="LastNameOneCustomerUser" placeholder="segundo Apellido"/>
                            </div>
                            <div className="form-group col-6">
                                <label>Numero Teléfono</label>
                                <input type="text" className="form-control" id="NameCategory" placeholder="Teléfono" value="+504-9900-0000"/>
                            </div>
                            <div className="form-group col-12">
                                <label>Descripción</label>
                                <textarea className="form-control" id="Description" placeholder="Ingrese si requiere algo en especial"></textarea>
                            </div>
                        </Form>
                    </div>
                    <div className="modal-content col-12" id="QuantityOrdensRequest" style={{padding: "12px"}}>
                        <Form className="displayflex">
                            <span className="col-12">ubicación </span>
                            <div className="form-group col-12">
                                <label>Dirección para la envío</label>
                                <input type="text" className="form-control" id="NameCategory" placeholder="Dirección" value="Col. la Kennedy/ calle del comercio."/>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="col-6 paddinCero">
                    <div className="modal-content col-12" id="QuantityOrdensRequest" style={{padding: "12px"}}>
                        <Form className="displayflex">
                            <span className="col-12">Información personal recibe</span>
                            <div className="form-group col-6">
                                <label>Primer Nombre</label>
                                <input type="text" className="form-control" id="NameOneCustomer" placeholder="Primer Nombre"/>
                            </div>
                            <div className="form-group col-6">
                                <label>Segundo Nombre</label>
                                <input type="text" className="form-control" id="NametwoCustomer" placeholder="Segundo Nombre"/>
                            </div>
                            <div className="form-group col-6">
                                <label>Primer Apellido</label>
                                <input type="text" className="form-control" id="LastNameOneCustomer" placeholder="Primer Apellido"/>
                            </div>
                            <div className="form-group col-6">
                                <label>segundo Apellido</label>
                                <input type="text" className="form-control" id="LastNameOneCustomer" placeholder="segundo Apellido"/>
                            </div>
                            <div className="form-group col-6">
                                <label>Numero Teléfono</label>
                                <input type="text" className="form-control" id="NameCategory" placeholder="Teléfono" value="+504-9900-0000"/>
                            </div>
                            <div className="form-group col-12">
                                <label>Descripción</label>
                                <textarea className="form-control" id="Description" placeholder="Ingrese si requiere algo en especial"></textarea>
                            </div>
                        </Form>
                    </div>
                    <div className="modal-content col-12" id="QuantityOrdensRequest" style={{padding: "12px"}}>
                        <Form className="displayflex">
                            <span className="col-12">ubicación </span>
                            <div className="form-group col-12">
                                <label>Dirección para la entrega</label>
                                <input type="text" className="form-control" id="NameCategory" placeholder="Dirección" value="Col. la Kennedy/ calle del comercio."/>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="col-12 paddinCero">
                    <div className="modal-content col-12" id="QuantityOrdensRequest" style={{padding: "12px"}}>
                        <Form className="displayflex">
                            <span className="col-12">Tiempo de envío  </span>
                            <div className="form-group col-12">
                                <input type="checkbox" defaultChecked/>
                                <label>Entrega inmediata  </label>
                                <input placeholder="" type="time" className="form-control col-3" value="00:30"/>
                            </div>
                            <div className="form-group col-6">
                                <label>Fecha</label>
                                <input placeholder="" type="date" className="form-control" value=""/>
                            </div>
                            <div className="form-group col-6">
                                <label>Hora</label>
                                <input placeholder="" type="time" className="form-control" value=""/>
                            </div>
                        </Form>
                    </div>
                    <div className="modal-content col-12" id="QuantityOrdensRequest" style={{padding: "12px"}}>
                        <Form className="displayflex">
                            <span className="col-12">Forma de pago </span>
                            <div className="form-group col-12 displayflex">
                                <label className="col-4">Elija una forma de pagó.</label>
                                <select className="form-control col-8">
                                    <option>Metodo de Pago</option>
                                    <option value="1">Efectivo</option>
                                    <option value="2">Link de Pago</option>
                                    <option value="3">Transferencia</option>
                                </select>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="modal-content col-12" id="QuantityOrdensRequest" style={{padding: "12px"}}>
                <button type="button" className="btn" id="AddCart">Realizar orden</button>
                </div>
            </div>
        </div>    
        
    </Row>
)
export default C2C;
/* 
                <Image src={imagen} alt=""/>



                
                    <div className="modal-content col-12" id="QuantityOrdensRequest" style={{padding: "12px"}}>
                        <Form className="displayflex">
                            <span className="col-12">Tiempo de envío  </span>
                            <div className="form-group col-12">
                                <input type="checkbox" defaultChecked/>
                                <label>Entrega inmediata  </label>
                                <input placeholder="" type="time" className="form-control col-3" value="00:30"/>
                            </div>
                            <div className="form-group col-6">
                                <label>Fecha</label>
                                <input placeholder="" type="date" className="form-control" value=""/>
                            </div>
                            <div className="form-group col-6">
                                <label>Hora</label>
                                <input placeholder="" type="time" className="form-control" value=""/>
                            </div>
                        </Form>
                    </div>
                    <div className="modal-content col-12" id="QuantityOrdensRequest" style={{padding: "12px"}}>
                        <Form className="displayflex">
                            <span className="col-12">Forma de pago </span>
                            <div className="form-group col-12 displayflex">
                                <label className="col-4">Elija una forma de pagó.</label>
                                <select className="form-control col-8">
                                    <option>Metodo de Pago</option>
                                    <option value="1">Efectivo</option>
                                    <option value="2">Link de Pago</option>
                                    <option value="3">Transferencia</option>
                                </select>
                            </div>
                        </Form>
                    </div>
*/