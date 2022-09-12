import './App.css';
import Footer from './componentes/Footer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
//import ItemCount from './componentes/ItemCount';



function App() {
  
  return (
    <div className='container-fluid p-0'>
      <div className='fondo-header p-2'> 
        <NavBar />
      </div>
      <div className='fondo-menuppal p-5'>
      <ItemListContainer />
     {/*  <ItemCount stock={5} initial={1} onAdd={0} /> */}
      </div>
      <Footer />
  
    </div>
  );
}

export default App;
