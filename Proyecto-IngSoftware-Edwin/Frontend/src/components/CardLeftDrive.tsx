import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSuitcase,faHandshake,faThList,faFileAlt,faCheckSquare,faMoneyBill} from '@fortawesome/free-solid-svg-icons';

const DriveLeft:React.FC = () => (
    <ul className="nav navbar-nav">
        <li className="menu-title"><span>Componentes</span></li>
        <li>
            <a href="/appDrive/OrdersNotTakens"><FontAwesomeIcon className="IfaIcons" icon={faSuitcase}/> <span>Ordenes no tomadas</span></a>
        </li>
        <li>
            <a href="/appDrive/MyOrders"><FontAwesomeIcon className="IfaIcons" icon={faHandshake}/> <span>Mis ordenes</span></a>
        </li>
        <li className="menu-item-has-children dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FontAwesomeIcon className="IfaIcons" icon={faThList}/> <span>Registros</span></a>
            <ul className="sub-menu children">
                <li><FontAwesomeIcon className="IfaIcons" icon={faFileAlt}/><a href="/appDrive/IncoiceOrders">Facturas</a></li>
                <li><FontAwesomeIcon className="IfaIcons" icon={faCheckSquare}/><a href="/appDrive/OrdersDelivered">Ordenes entregadas</a></li>
                <li><FontAwesomeIcon className="IfaIcons" icon={faMoneyBill}/><a href="/appDrive/Caja">Caja</a></li>
            </ul>
        </li>
    </ul>
)
export default DriveLeft;