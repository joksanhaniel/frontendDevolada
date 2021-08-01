import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSitemap,faUtensils,faShoppingCart,faIndustry,faGlassCheers,faCar,faCoffee,faHeartbeat,faLaptop,faPlus,faSuitcase,faHandshake,faThList,faStar} from '@fortawesome/free-solid-svg-icons';
import CustomerLeft from "./CardLeftCustomer";
import DriveLeft from "./CardLeftDrive";

const PanelLeft:React.FC = () => (
    <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <CustomerLeft/>
            </div>
        </nav>
    </aside>
)
export default PanelLeft;