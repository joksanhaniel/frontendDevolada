import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';



import "../css/styleLoginAndSingIn.css";
import '../css/vendor/bootstrap/css/bootstrap.min.css';
import fondo from "../img/bg-01.jpg";
import ImgPe from "../img/img2.png";
const SingIn:React.FC = () => (
  <div className="container-contact100">
		<div className="wrap-contact100">
			<form className="contact100-form validate-form" id="formpanel">
				<a href="Login" className="button scrolly">Inicio Sessión</a>
				<span className="contact100-form-title">
					Registrarse 
				</span>
					<Row>
						<div className="form-check col-6">
							<input id="Color-Check" className="form-check-input" type="radio" name="flexRadioDefault"/>
							<label className="form-check-label">
							  Personal
							</label>
						</div>
						<div className="form-check col-6">
							<input id="Color-Check" className="form-check-input" type="radio" name="flexRadioDefault" checked/>
							<label className="form-check-label">
							  Empresarial
							</label>
						</div>

					</Row>
				<div className="wrap-input100 validate-input" data-validate="Name is required">
					<label className="label-input100">Nombre Completo</label>
					<input id="nameUser" className="input100" type="text" name="name" placeholder="Ingrese su nombre..."/>
					<span className="focus-input100"></span>
				</div>
				<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<label className="label-input100">Email Address</label>
					<input id="email" className="input100" type="text" name="email" placeholder="Ingrese su correo"/>
					<span className="focus-input100"></span>
				</div>
				<div className="wrap-input100 validate-input" data-validate = "Password is required">
					<label className="label-input100">Contraseña</label>
					<input id="passwordI" className="input100" type="password" name="password" placeholder="Contraseña"/>
					<span className="focus-input100"></span>
					<a href=""></a>
				</div>
				<div className="wrap-input100 validate-input" data-validate = "Password is required">
					<label className="label-input100">confirme Contraseña</label>
					<input id="passwordII" className="input100" type="password" name="password" placeholder="Contraseña"/>
					<span className="focus-input100"></span>
				</div>
				<div>
					<button id="buttonPassword1" style={{marginLeft: "auto", display: "block"}}><i className="col-2 fa fa-eye"></i></button>
					<button id="buttonPassword2" style={{marginLeft: "auto", display: "none"}}><i className="col-2 fa fa-eye-slash" aria-hidden="true"></i></button>
				</div>

				<div className="wrap-input100 validate-input" data-validate = "Description is required">
					<label className="label-input100">Descripción de su perfil</label>
					<textarea id="message" className="input100" name="message" placeholder="Escriba su descripción aquí, para su muro de perfil"></textarea>
					<span className="focus-input100"></span>
				</div>

				<div className="container-contact100-form-btn">
					<button  className="contact100-form-btn" id="SendNewUser">
						Enviar
					</button>
				</div>

				<div className="contact100-form-social flex-c-m">
					<a href="#" className="contact100-form-social-item flex-c-m bg1 m-r-5">
						<i className="fa fa-facebook-f" aria-hidden="true"></i>
					</a>

					<a href="#" className="contact100-form-social-item flex-c-m bg2 m-r-5">
						<i className="fa fa-twitter" aria-hidden="true"></i>
					</a>

					<a href="#" className="contact100-form-social-item flex-c-m bg3">
						<i className="fa fa-youtube-play" aria-hidden="true"></i>
					</a>
				</div>
			</form>

			<div className="contact100-more flex-col-c-m" id="divPanel">
                <div className="col-md-7" id="hover">
                    <div className="text-img">
                       <figure><Image className="imgsize" src={ImgPe} /></figure>
                    </div>
                 </div>
			</div>
		</div>
	</div>
);
export default SingIn;