import './App.css';
import Footer from './componentes/Footer';
import NavBar from './componentes/NavBar';
/* 
import Destacado from './componentes/Destacado';
import Footer from './componentes/Footer'; */
import Principal from './componentes/Principal';
/* import PromoApp from './componentes/PromoApp'; */

function App() {
  return (
    <div className='container-fluid p-0'>
      <div className='fondo-header p-2'> 
        <NavBar />
      </div>
      <div className='fondo-menuppal pt-4 pb-3'>
      <Principal />
      </div>
      <Footer />
                 {/*  <Destacado />
      <Cupones />
      <PromoApp />
            */} 
    </div>
  );
}

export default App;
