import './App.css';
import Footer from './componentes/Footer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
//import ItemCount from './componentes/ItemCount';



function App() {
  const lista = ["Bowl de Frutas", "Crossaint Vegetales", "Scon de Frutos Rojos", "Pan de queso"]
  const items = lista.map(items => (
    <ItemListContainer valor={items} />
  ));

  return (
    <div className='container-fluid p-0'>
      <div className='fondo-header p-2'> 
        <NavBar />
      </div>
      <div className='fondo-menuppal p-5'>
        <ul>
          {items}
        </ul>
      </div>
      <Footer />
  
    </div>
  );
}

export default App;
