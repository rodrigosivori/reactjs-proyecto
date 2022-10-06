import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({id, producto, foto, precio}) => {
    console.log(foto);
    return(
        <div className='col-9 p-2'>
            <div className='card'>
                <Link to={'/item/' + id}> <img src={'/images/' + foto} className='card-img-top' alt={producto} /> </Link>
                <div className='card-body'>
                    <h5 className='card-title text-center'><b>{producto}</b></h5>
                    <p className='card-text text-center'>${precio}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;