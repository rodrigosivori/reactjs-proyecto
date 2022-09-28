import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import CartProvider from './componentes/CartContext';
import Cart from './componentes/Cart';



function App() {
  
  return (
    <CartProvider>
      <div className='container-fluid p-0'>
        <BrowserRouter >
          <NavBar />
          <Routes>
            <Route exact path='/'  element={<ItemListContainer /> } />
            <Route exact path='/category/:categoria'  element={<ItemListContainer /> } />
            <Route exact path='/item/:id' element={ <ItemDetailContainer/> } />
            <Route exact path='/cart' element={ <Cart /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
