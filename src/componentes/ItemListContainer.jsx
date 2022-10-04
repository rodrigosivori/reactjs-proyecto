import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { productos } from "./productos";


const ItemListContainer = () => {

   
    
    
    const [items, setItems] = useState([]);
    
    const {categoria} = useParams()

    useEffect(() => {

        if(!categoria){
            
            const getProductos = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productos);
                }, 500);
            });
            
            getProductos.then((respuesta) => {
                setItems(respuesta);
            });
        }else{
            const getProductos = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(productos);
                }, 500);
            });

            getProductos.then((respuesta) => {
                setItems(respuesta.filter(cat => cat.categoria === categoria));
            });
        }
        }, [categoria]);
        

   

    return (
        <div className="fondo-menuppal p-5">
            <div className="container">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;