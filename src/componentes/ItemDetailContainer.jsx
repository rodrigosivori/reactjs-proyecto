import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from './ItemDetail';
import { productos } from './productos';
 

const ItemDetailContainer = () => {

    const[item, setItem] = useState({})

    useEffect( () => {
        const getProducto = () => 
            new Promise ((resolve) => {
                const producto = productos.find((productos) => productos.id === 3);
                setTimeout (() => {
                    resolve(producto);
                },2000)
            });

            getProducto()
                .then((detalle) => {
                    setItem(detalle);
                });
    }, []);

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <ItemDetail item={item} />
            </div>
        </div>
    );
}

export default ItemDetailContainer;