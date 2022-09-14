import React from 'react';

const Item = ({producto, foto, precio}) => {
    return(
        <div className='col-9 p-2'>
            <div className='card'>
                <img src={foto} className='card-img-top' alt={producto} />
                <div className='card-body'>
                    <h5 className='card-title text-center'><b>{producto}</b></h5>
                    <p className='card-text text-center'>${precio}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;