import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';


const Cart = () => {
    const { cart, clearItem, clearAll } = useContext(CartContext);
    if (cart != '') {

        return (
                
        <div className='fondo-menuppal p-5'>
            <div className='row justify-content-evenly m-3 p-3'>
                <h2>CARRITO</h2>
                {cart.map((item) => (
                    <div className='card col-md-2 p-0'>
                        <img src={'/images/' + item.foto} className='card-img-top pb-2' alt={item.producto} />
                        <h4 className='card-title text-center'><b>{item.producto}</b></h4>
                        <h5 className='card-text text-center'>${item.precio}</h5>
                        <p className='text-center'>Cantidad: {item.cantidad}</p>
                        <button className='btn btn-primary mb-3' onClick={() => clearItem(item.id)}>Eliminar Item</button>
                    </div>
                    ))}
            </div>
            <div className='row justify-content-center' >
                <button className='col-2 btn btn-primary ' onClick={clearAll}>Vaciar carrito</button>
            </div>
            <div className='row justify-content-center pt-2' >
                <button className='col-2 btn btn-primary '> <Link to='/checkout' className="checkOut nav-link">Finalizar Compra</Link></button>
            </div>
        </div>
        );
    } else {

        return (

        <div className='fondo-menuppal p-5'>
            <div className="col-md-12 text-center p-5">
                <div className="alert alert-danger text-center" role="alert">
                    <h3>NO HAY PRODUCTOS SELECCIONADOS</h3>
                    <h6>Por favor vuelva al listado y seleccione al menos 1 producto.</h6>
                </div>
                <button className='btn btn-primary col-2 mb-3'>
                            <Link to='/' className="checkOut nav-link">Volver al listado</Link>
                </button>
            </div>
        </div>
    
    ) 
}
};

export default Cart;