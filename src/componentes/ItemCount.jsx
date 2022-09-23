import React, {useState} from "react";
import { Link } from "react-router-dom";



const ItemCount = ({initial, stock, onAdd}) => {
const [cantidad, setCantidad] = useState(initial);
const [itemStock, setItemStock] = useState(stock);
const [itemAdd, setItemAdd] = useState(0);

const decrementarCantidad = () => {
    setCantidad(cantidad - 1);
}

const incrementarCantidad = () => {
    setCantidad(cantidad + 1);

}

const agregarProductos = () => {
    if ( cantidad <= itemStock) {
        setItemStock(itemStock - cantidad);
        setItemAdd(itemAdd + cantidad); 
        onAdd(itemAdd + cantidad);
    }       
}


    return(
        <div className="container">
            <div className="text-center">
                <button className="btn btn-primary col-1" disabled={cantidad <= 1} onClick={decrementarCantidad}>-</button>
                <input type='button' className="btn text-center col-md-2" disable value={cantidad} />
                <button className="btn btn-primary col-1" disabled={cantidad >= itemStock} onClick={incrementarCantidad}>+</button> 
            </div>
            <div className="text-center pb-3">
                <button className="btn btn-primary pb-2 mt-2" disabled={stock <= 0} onClick={() => {agregarProductos()}}>Agregar</button>
            </div>
            <p className="text-center">En stock: {itemStock}</p>
            <p className="text-center">Agregaste {itemAdd} de productos</p>
            <div className='row justify-content-center'>
                <button className='btn btn-primary col-5 mb-3'>
                    <Link to='/cart' className="checkOut nav-link">IR AL CARRITO </Link>
                </button>
            </div>
        </div>

    );
};

export default ItemCount;

