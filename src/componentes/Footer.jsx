import React from "react";
import logo from "./images/foto-logofondonegro.jpg";
import logoig from './images/logoig.png'
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className='fondo-header p-4' >
            <div className="row align-items-center text-center">
                <div className="col"></div>
                <Link to={'/'} className="nav-link active col" aria-current="page"><img src={logo} width="100" alt="Amelia cafe" /></Link>
                <div className="col">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active link-light" href="https://instagram.com/ameliacafe.caba" target="_blank" rel="noopener noreferrer"><img src={logoig} width="25" alt="Instagram" /> /ameliacafe.caba</a>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link disabled link-light m-0" >Rojas 702, Caballito - CABA</p>
                            <p className="nav-link disabled link-light m-0 p-0">08:00 a 20:00 - Todos los días</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>        
    )
} 
export default Footer;