import React from 'react';
import { useState } from 'react';
import ItemCount from './ItemCount';



const ItemDetail = ({item}) =>{
    
    const [cantidad, setCantidad] = useState(0)

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        console.log(cantidad);
        
    }

    return(
        <div className='row justify-content-center col-md-5 py-3'>
            <div className='card'>
                <img src={item.foto} className='card-img-top p-2' alt={item.producto} />
                <h4 className='card-title text-center'><b>{item.producto}</b></h4>
                <h5 className='card-text text-center'>${item.precio}</h5>
                <p className='text-center'>{item.descripcion}</p>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} cantidad={cantidad} setCantidad={setCantidad} />
                
                
                
            </div>
        </div>
    )
}

export default ItemDetail;