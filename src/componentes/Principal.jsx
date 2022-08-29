import React from "react";
import foto1 from "./images/foto-bowldefrutas.jpg"
import foto2 from "./images/foto-crossaintvegetales.jpg"
import foto3 from "./images/foto-sconfrutosrojos.jpg"

const Principal = () => {
    return (
        <div className="container fondo-menuppal">
            <div className="row">
                <div className="col-md-4">
                    <img src={foto1} alt="Bowl de Frutas" className="img-fluid rounded" />
                </div>
                <div className="col-md-4">
                    <img src={foto2} alt="Crossaint Vegetales" className="img-fluid rounded" />
                </div>
                <div className="col-md-4">
                    <img src={foto3} alt="Scon de Frutos Rojos" className="img-fluid rounded" />
                </div>
            </div>
        </div>        
    )
} 

export default Principal;