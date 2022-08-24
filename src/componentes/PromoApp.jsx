import React from "react";
import applestore from "./images/apple_store.png";
import playstore from "./images/google_play.png";
import fotocelular from "./images/PromoApp.png"

const PromoApp = () => {
    return (
        <div className="row fondo-rojo my-5" >
            <div className="col-md-4 offset-md-2 pt-5 text-center">
                <img src={fotocelular} alt="Celular" width="480" />
            </div>
            <div className="col-md-4 p-5 text-white">
                <h3>Descarga la APP y disfruta mucho mas por mucho menos</h3>
                
                <p>
                <img src={applestore} alt="apple store" width="135" />
                <img src={playstore} alt="google play" width="135" />
                </p>

                <p>Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. Y otros paises. App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc. Se aplican terminos.</p>

        
            </div>
        </div>
    )
} 

export default PromoApp;