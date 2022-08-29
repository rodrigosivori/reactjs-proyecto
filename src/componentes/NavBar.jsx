import React from "react";
import Cartwidget from "./CartWidget";
import logo from "./images/foto-logofondonegro.jpg";

const NavBar = () => {
    return (
        <div className="container">
            <ul className="nav d-flex align-items-center justify-content-center pt-2">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/"><img src={logo} width="48" alt="Amelia cafe"></img></a>
                    </li>
                <li className="nav-item">
                    <a className="nav-link link-header" href="/">Menu</a>
                    </li>
                <li className="nav-item">
                    <a className="nav-link link-header" href="/">Local</a>
                    </li>
                <li className="nav-item">
                    <a className="nav-link link-header" href="/">Contactanos</a>
                    </li>
                <Cartwidget />
            </ul>
        </div>        
    )
} 

export default NavBar;