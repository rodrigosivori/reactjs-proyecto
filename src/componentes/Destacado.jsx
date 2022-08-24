import React from "react";
import imagen from "./images/destacado.jpg"
const Destacado = () => {
    return (
        <div>
            <img src={imagen} alt="destacado" className="img-fluid"></img>
        </div>        
    )
} 

export default Destacado;