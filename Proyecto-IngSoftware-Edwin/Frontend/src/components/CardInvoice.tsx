import React from "react";

const CardInvoice:React.FC = () =>(
    <div className="col-lg-12">
        <div className="card">
            <div className="card-header">
                <strong className="card-title">Facturas</strong>
            </div>
        </div><div id="app" className="col-12" style={{background: "white"}} >
            <h2>Factura # <span>2595</span></h2>
            <div className="row my-3">
                <div className="col-8">
                <h1>DevoladaApp</h1>
                <p>Delivery</p>
                <p>Miramontes Sur</p>
                <p>casa 2593</p>
                </div>
                <div className="col-4">
                <img style={{width: "100%"}}  src="../../images/logo.jpg" />
                </div>
            </div>
            
            <hr />
            
            <div className="row fact-info mt-3">
                <div className="col-3">
                <h5>Facturar a</h5>
                <p>
                    Arian Manuel Garcia Reynoso
                </p>
                </div>
                <div className="col-3">
                <h5>Enviar a</h5>
                <p>
                    Cotui, Sanchez Ramirez
                    Santa Fe, #19
                    arianmanuel75@gmail.com
                </p>
                </div>
                <div className="col-3">
                <h5>N° de factura</h5>
                <h5>Fecha</h5>
                <h5>Fecha de vencimiento</h5>
                </div>
                <div className="col-3">
                <h5>103</h5>
                <p>09/05/2019</p>
                <p>09/05/2019</p>
                </div>
            </div>
            
            <div className="row my-5" style={{padding: "0px 15px;"}} >
                <table className="table table-borderless factura">
                <thead>
                    <tr>
                    <th>Cant.</th>
                    <th>Descripcion</th>
                    <th>Precio Unitario</th>
                    <th>Importe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Clases de Cha-Cha-Cha</td>
                    <td>3,000.00</td>
                    <td>3,000.00</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Clases de Salsa</td>
                    <td>4,000.00</td>
                    <td>12,000.00</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    <th></th>
                    <th></th>
                    <th>Total Factura</th>
                    <th>RD$15,000.00</th>
                    </tr>
                </tfoot>
                </table>
            </div>
            
            <div className="cond row">
                <div className="col-12 mt-3">
                <h4>Condiciones y formas de pago</h4>
                <p>El pago se debe realizar en un plazo de 15 dias.</p>
                <p>
                    Banco Banreserva
                    <br />
                    IBAN: DO XX 0075 XXXX XX XX XXXX XXXX
                    <br />
                    Código SWIFT: BPDODOSXXXX
                </p>
                </div>
            </div>
        </div>
    </div>   
)
export default CardInvoice;
