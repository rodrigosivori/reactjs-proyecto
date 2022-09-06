import React, { Component } from "react";
import ItemCount from "./ItemCount";

class ItemListContainer extends Component {
    render(){
        return(
            <div className="container text-center">
                  
                    <li className="row align-item-center">
                    <hr />
                    <a href="/" className="m-3 text-center">{this.props.valor}</a>
                    <ItemCount stock={5} initial={1} onAdd={0}/> 
                    </li>

            </div>
        )
    }
}

export default ItemListContainer;