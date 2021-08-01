import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const Footer:React.FC = () => (
  <footer className="site-footer">
    <div className="footer-inner">
        <div className="row">
            <div className="col-sm-6">
                Copyright &copy; 2021 DevoladaApp
            </div>
            <div className="col-sm-6 text-right">
                Designed by <a href="">Unah</a>
            </div>
        </div>
    </div>
  </footer>
)
  
export default Footer;