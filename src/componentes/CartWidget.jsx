import React from "react";
import imagen from "./images/logocarrito.png"

const Cartwidget = () => {
    return (
        <div>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><img src={imagen} width="25" alt="Carrito de compras"></img></a>
            </li>
        </div>        
    )
} 

export default Cartwidget;