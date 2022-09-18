import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { productos } from './Productos';
 

const ItemDetailContainer = () => {

    const[item, setItem] = useState({})

    const {id} = useParams()
    
    useEffect(()=> {
    
    const getItemById = (id) => {
        return new Promise (resolve => {
            setTimeout(() => {
                resolve(productos.find(productos => productos.id === id))
            }, 500)
            console.log(id);
        })
    };
    
        getItemById(id)
            .then(response => {
                setItem(response)
        });
    },);
 
    return (
        <div className="fondo-menuppal p-5">
            <div className='container'>
                <div className='row justify-content-center'>
                    <ItemDetail item={item} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;