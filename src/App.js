import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';



function App() {
  
  return (
  <div className='container-fluid p-0'>
    <BrowserRouter >
        <NavBar />

      <Routes>
        
      <Route exact path='/'  element={<ItemListContainer /> } />
      <Route exact path='/category/:categoria'  element={<ItemListContainer /> } />
      <Route exact path='/item/:id' element={ <ItemDetailContainer/> } />
     
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
