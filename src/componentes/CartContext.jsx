import { createContext, useState } from 'react';


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
                    cantidad: itemInCart.cantidad + producto.cantidad
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
    
    const cartTotal = () => {
        return cart.reduce((total, item) => total+=item.cantidad, 0);
    };

    const cartSuma = () => {
        return cart.reduce((total, item) => total+=item.cantidad*item.precio, 0);
    }


    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, clearAll, totalUnidades, clearItem, cartTotal, cartSuma }}>
            {items.children}
        </CartContext.Provider>
    );
};

export default CartProvider;