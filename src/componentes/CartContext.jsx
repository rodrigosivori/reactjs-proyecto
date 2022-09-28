import { createContext, useState } from 'react';
// import { productos } from './Productos';


export const CartContext = createContext();

const CartProvider = (items) => {
  
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        const producto = { ...item, cantidad };
        if (isInCart(item.id)) {
            sumarCantidad(producto);
        } else {
            setCart([...cart, producto]);
        }
     
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const sumarCantidad = (producto) => {
        const cartUpdated = cart.map((itemInCart) => {
            if (producto.id === itemInCart.id) {
                const productUpdated = {
                    ...itemInCart,
                    cantidad: producto.cantidad,
                };
                return productUpdated;
            } else {
                return itemInCart;
            }
        });
        setCart(cartUpdated);
    };

    const clearAll = () => {
        setCart([]);
    };

    const totalUnidades = () => {
        const copia = [...cart];
        let count = 0;
        copia.forEach((producto) => {
            count = count + producto.cantidad;
        });
        return count;
    };

    //console.log(cart);

    const clearItem = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);
    };


    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, clearAll, totalUnidades, clearItem }}>
            {items.children}
        </CartContext.Provider>
    );
};

export default CartProvider;