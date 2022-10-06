import React, { useEffect,  useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from "firebase/firestore";

 

const ItemDetailContainer = () => {

    const[item, setItem] = useState({})

    const {id} = useParams()
    
    useEffect(()=> {
    
        const db = getFirestore();
      
        const res = doc(db, "productos", id);
      
        getDoc(res).then((item) => {
      
            if (item.exists()) {
                setItem({id:item.id, ...item.data()});
                
            }            
        });
    }, [id]);

    
    return (
        <div className="fondo-menuppal p-5">
            <div className='container'>
                <div className='row justify-content-center'>
                    <ItemDetail item={item}/>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;