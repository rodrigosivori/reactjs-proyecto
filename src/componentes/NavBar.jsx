import React from "react";
import { Link } from "react-router-dom";
import Cartwidget from "./CartWidget";
import logo from "./images/foto-logofondonegro.jpg";



const NavBar = () => {
 
    return (
    <div className='fondo-header p-3' >
        <div className='container'>
            <ul className="nav d-flex align-items-center justify-content-center pt-2">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link active" aria-current="page"><img src={logo} width="48" alt="Amelia cafe" /></Link>
                    </li>
                <li className="nav-item">
                    <Link to={'/category/cafe'} className="nav-link link-header" >Café</Link>
                    </li>
                <li className="nav-item">
                    <Link to={'/category/comida'} className="nav-link link-header">Comida</Link>
                    </li>
                <li className="nav-item">
                    <Link to={'/category/combos'} className="nav-link link-header">Combos</Link>
                    </li>
                <Cartwidget />
            </ul>
        </div>        
    </div>
    )
} 

export default NavBar;