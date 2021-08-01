import React from "react";

const CardMyOrders:React.FC = () =>(
    <div className="row">
        <div className="col-lg-12" style={{padding: "0px 45px 0px 45px"}} >
            <div className="card">
                <div className="card-header">
                    <strong className="card-title">Ordenes tomadas</strong>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Empresa</th>
                                <th scope="col">Combo o productos</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cambio estados</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>#5466</td>
                                <td>Oscar Mendoza</td>
                                <td>PizzaHut</td>
                                <td>Combo #1</td>
                                <td>Col las palmas</td>
                                <td>2</td>
                                <td>400</td>
                                <td>
                                    <a href="//appDriver/OnchangeStatus" className="btn btn-success">Estados</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)
export default CardMyOrders;
