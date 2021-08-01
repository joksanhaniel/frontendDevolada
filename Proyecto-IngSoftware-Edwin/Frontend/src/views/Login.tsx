import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Logo from "../img/Iconooficial.png";

import "../css/styleLoginAndSingIn.css";
import '../css/vendor/bootstrap/css/bootstrap.min.css';


const axios= require("axios").default;
axios.post("http://localhost:9000/api/auth/token/", {
    username:"admin@delivery.com", 
    password:"teamdelivery",
    client_id:"O5H2ofqSSSoR77rdMcz8Yl4qwNolhVcZdI3blbcW", 
    client_secret:"5D7zYxAHdbl91dBs7VDqevhJ0xk3UjpCLFQuxZAIFX1t4aiYXgePujm6pCdIINjuuvjdF7onXICEHSEGkPTZh2GSKFlPpdxyihgM6FQv5zJPzEtlA2TUHwCuBvGRD7Np",
    grant_type:"password"
}).then((response:any) => console.log(response))

const login:React.FC = () => (
  <div id="LoginForm">
    <Container>
        <div className="login-form">
            <div className="main-div col-12 col-sm-10 col-md-10 col-xl-5 col-lg-7">
                <div className="panel col-4 imagenPanel">
                    <a href="myapp">
                        <Image src={Logo} alt="" style={{paddingBottom: "30px", width:"100%"}}/>
                    </a>
                </div>
                <div className="panel col-12">
                    <h2>Inicio de sesión</h2>
                    <p>Por favor ingrese el usuario y contraseña.</p>
                </div>
                <form id="Login">
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputEmail" name="name" placeholder="Correo ó usuario"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña"/>
                    </div>
                    <div className="forgot">
                        <a href="reset.html">¿Olvidaste tu contraseña?</a>
                    </div>
                    <a href="appCustomer">
                        <Button className="btn btn-primary">Login</Button>
                    </a>
                    <div id="registrar">
                        <a id="singInReg" href="singIn">Registrarse</a>
                    </div>
                </form>
            </div>
        </div>
    </Container>
</div>
);
export default login;