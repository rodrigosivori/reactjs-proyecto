import React from "react";
import { Link } from "react-router-dom";
import imagen from "./images/logocarrito.png"

const Cartwidget = () => {
    return (
        <div>
            <li className="nav-item">
                <Link to='/cart' className="nav-link active" aria-current="page" href="/"><img src={imagen} width="25" alt="Carrito de compras"></img></Link>
            </li>
        </div>        
    )
} 

export default Cartwidget;