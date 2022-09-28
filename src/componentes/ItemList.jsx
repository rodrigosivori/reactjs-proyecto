import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
    return(
        <div className="row">
            {items.map(item => (
                <div className="col-4 row justify-content-center">
                    <Item id={item.id} producto={item.producto} foto={item.foto} precio={item.precio}/>
                </div>
            ))}
        </div>
    )
}

export default ItemList;