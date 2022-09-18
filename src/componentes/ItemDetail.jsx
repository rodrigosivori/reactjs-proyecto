import React from 'react';
//import ItemCount from './ItemCount';


const ItemDetail = ({item}) =>{

    return(
        <div className='row justify-content-center col-md-5 py-3'>
            <div className='card'>
                <img src={item.foto} className='card-img-top pt-2' alt={item.producto} />
                <div className='card-body'>
                    <h5 className='card-title text-center'><b>{item.producto}</b></h5>
                    <p className='card-text text-center'>${item.precio}</p>
                </div>
                {/* <ItemCount initial={1} stock={item.stock} onAdd={0}/> */}
            </div>
        </div>
    )
}

export default ItemDetail;