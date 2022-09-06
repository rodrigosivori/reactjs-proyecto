import React, {useState} from "react";


const ItemCount = ({initial, stock, onAdd}) => {
const [cantidad, setCantidad] = useState(initial);
const [itemStock, setItemStock] = useState(stock);
const [itemAdd, setItemAdd] = useState(onAdd);

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
        
    }
}


    return(
        <div className="container">
            <button className="btn btn-primary" disabled={cantidad <= 1} onClick={decrementarCantidad}>-</button>
            <input type='text' className="text-center col-1" value={cantidad} />
            <button className="btn btn-primary" disabled={cantidad >= itemStock} onClick={incrementarCantidad}>+</button> 
            <div>
                <button className="btn btn-primary pb-2" disabled={stock <= 0} onClick={() => {agregarProductos()}}>Agregar</button>
                <p>En stock: {itemStock}</p>
                <p>Agregaste: {itemAdd} de productos</p>
            </div>
        </div>

    );
};

export default ItemCount;

