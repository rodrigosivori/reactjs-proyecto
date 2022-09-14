import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
    return(
        <div className="row">
        {items.map(item => (
            <div className="col-md-4 py-3">
                <Item id={item.id} producto={item.producto} foto={item.foto} precio={item.precio} />
                
            </div>)
        )}
    </div>
    )
}

export default ItemList;