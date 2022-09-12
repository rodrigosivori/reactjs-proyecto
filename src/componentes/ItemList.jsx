import React from 'react';
import Item from './Item';
import ItemCount from './ItemCount';

const ItemList = ({items}) => {
    return(
        <div className="row">
        {items.map(item => (
            <div className="col-md-4 py-3">
                <Item id={item.id} producto={item.producto} foto={item.foto} precio={item.precio} />
                <ItemCount initial={1} stock={item.stock} onAdd={0}/>
            </div>)
        )}
    </div>
    )
}

export default ItemList;