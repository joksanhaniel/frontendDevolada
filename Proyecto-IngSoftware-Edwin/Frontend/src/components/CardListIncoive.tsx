import React from "react";

const ListInvoice:React.FC = () =>(
    <div className="col-lg-12" >
                <div className="card">
                    <div className="card-header">
                        <strong className="card-title">Lista facturas</strong>
                    </div>
                    <div className="card-body" style={{overflow: "auto;"}} >
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Factura</th>
                                  <th scope="col">ID</th>
                                  <th scope="col">Cliente</th>
                                  <th scope="col">Empresa</th>
                                  <th scope="col">Combo o productos</th>
                                  <th scope="col">Dirección</th>
                                  <th scope="col">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>
                                        <a  className="btn btn-warning">ir</a>
                                    </td>
                                    <td>#5466</td>
                                    <td>Oscar Mendoza</td>
                                    <td>PizzaHut</td>
                                    <td>Combo #1</td>
                                    <td>Col las palmas</td>
                                    <td>480</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>
                                        <a  className="btn btn-warning">ir</a>
                                    </td>
                                    <td>#5466</td>
                                    <td>Oscar Mendoza</td>
                                    <td>PizzaHut</td>
                                    <td>Combo #1</td>
                                    <td>Col las palmas</td>
                                    <td>480</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>
                                        <a  className="btn btn-warning">ir</a>
                                    </td>
                                    <td>#5466</td>
                                    <td>Oscar Mendoza</td>
                                    <td>PizzaHut</td>
                                    <td>Combo #1</td>
                                    <td>Col las palmas</td>
                                    <td>480</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
)
export default ListInvoice;
