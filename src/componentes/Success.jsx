import React from "react";
import Logo from "./images/foto-logofondoblanco.jpg";

const Success = ({id}) => {
    return (
        <div className='fondo-menuppal'>
            <div className="row">
                <div className="col-md-12 text-center p-5">
                    <h1>PEDIDO REALIZADO! :)</h1>
                    <p><img src={Logo} alt="BurgerKing" width="180" /></p>
                    <h5>Retira tu compra con el siguiente ID: <b>{id}</b></h5>
                    <p>Gracias por confiar en nosotros! ♥</p>
                </div>
            </div>
        </div>
    )
}

export default Success;