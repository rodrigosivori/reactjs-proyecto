import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cart, clearItem, clearAll } = useContext(CartContext);

    return (
        
    <div className='fondo-menuppal p-5'>
        <div className='row justify-content-evenly m-3 p-3'>

            <h2>CARRITO</h2>
            {cart.map((item) => (
                <div className='card col-md-2 p-0'>
                    <img src={item.foto} className='card-img-top pb-2' alt={item.producto} />
                    <h4 className='card-title text-center'><b>{item.producto}</b></h4>
                    <h5 className='card-text text-center'>${item.precio}</h5>
                    <p className='text-center'>Cantidad: {item.cantidad}</p>
                    <button className='btn btn-primary mb-2' onClick={() => clearItem(item.id)}>Eliminar Item</button>
                </div>
                ))}
        </div>
        <div className='row justify-content-center' >
            <button className='col-2 btn btn-primary ' onClick={clearAll}>Vaciar carrito</button>
        </div>
    </div>
    );
};

export default Cart;