import React, { Component } from "react";

class ItemListContainer extends Component {
    render(){
        return(
            <li>
                <a href="/">{this.props.valor}</a>
            </li>
        )
    }
}

export default ItemListContainer;