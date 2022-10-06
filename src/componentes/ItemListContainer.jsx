import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    
    const [items, setItems] = useState([]);
    
    const {id, categoria} = useParams()

    useEffect(() => {

    if (!categoria){

        const db = getFirestore();
        
        const itemsCollection = collection(db, "productos");
        
        const queryItems = id ? query(itemsCollection, where("id", "==", id)) : itemsCollection;
        
        getDocs(queryItems).then((items) => {
            setItems(items.docs.map(item => ({id:item.id, ...item.data()})));
        });
   
   
    } else {

        const db = getFirestore();
        
        const itemsCollection = collection(db, "productos");
        
        const queryItems = categoria ? query(itemsCollection, where("categoria", "==", categoria)) : itemsCollection;
        
        getDocs(queryItems).then((items) => {
            setItems(items.docs.map(item => ({id:item.id, ...item.data()})));
        });
   
    };


}, [categoria, id]);

        

    return (
        <div className="fondo-menuppal p-5">
            <div className="container">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;