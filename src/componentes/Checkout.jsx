import React, { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Success from "./Success";
import { CartContext } from "./CartContext";


const Checkout = () => {
    const {cart, clearAll, cartTotal, cartSuma} = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("");

    const sendOrder = () => {
        if ((name !== "") && (email !== "") && (phone !== "")) {
            const buyer = {name:name, email:email, phone:phone};
            const items = [];
           
            cart.forEach(item => {
                items.push({id:item.id, title:item.producto, price:item.precio, quantity:item.cantidad});
            });
           
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            const order = {buyer:buyer, items:items, date:now, total:cartSuma()};
            const db = getFirestore();
            const orderCollection =  collection(db, "orders");
            
            addDoc(orderCollection, order).then(({id}) => {
                setOrderId(id);
                clearAll();
            });
        }
    }


    return(
        <div className="fondo-menuppal">
            <div className="container py-5">
                {cartTotal() > 0 ?
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                            <div className="mb-3">
                                <label for="name" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nombre" onInput={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="telefono" class="form-label">Teléfono</label>
                                <input type="text" class="form-control" id="telefono" onInput={(e) => setPhone(e.target.value)} />
                            </div>
                            <button type="button" class="btn btn-success" onClick={() => {sendOrder()}}>Confirmar Pedido</button>
                    </div>
                    <div className="col-md-4">
                        <table className="table">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="text-start"><img src={"images/" + item.foto} alt={item.producto} title={item.producto} width="120" /></td>
                                        <td className="text-start align-middle">{item.producto} x {item.cantidad}</td>
                                        <td className="text-end align-middle">${item.cantidad * item.precio}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={2} className="text-end fw-bold">Total a Pagar</td>
                                    <td className="text-end fw-bold">${cartSuma()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                : orderId !== "" ? <Success id={orderId} /> : <div className="alert alert-danger text-center" role="alert">El carrito esta vacio!!</div>}
            </div>
        </div>

    
    )

} 

export default Checkout;