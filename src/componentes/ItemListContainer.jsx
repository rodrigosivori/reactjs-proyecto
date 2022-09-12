import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";



const ItemListContainer = () => {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productos = [
            {'id': 1, 'producto':'Bowl de Frutas', 'precio':450, 'stock':10, 'foto':'./images/foto-bowldefrutas.jpg' },
            {'id': 2, 'producto':'Crossaint de Vegetales', 'precio':350, 'stock':5, 'foto':'./images/foto-crossaintvegetales.jpg'},
            {'id': 3, 'producto':'Scon de Queso', 'precio':250, 'stock':8, 'foto':'./images/foto-sconqueso.jpg'},
            {'id': 4, 'producto':'Scon Frutos Rojos', 'precio':275, "stock":4, "foto":'./images/foto-sconfrutosrojos.jpg'}
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;