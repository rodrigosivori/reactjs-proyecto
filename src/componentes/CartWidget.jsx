import React from "react";
import imagen from "./images/foto-logofondoblanco.jpg"

const Cartwidget = () => {
    return (
        <div>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><img src={imagen} width="48" alt="Carrito de compras"></img></a>
            </li>
        </div>        
    )
} 

export default Cartwidget;