
import './App.css';
import Productslist from './pages/Productslist';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App"
  >
    <Header/>
     <Productslist/> 
     <Footer/>
    </div>
  );
}

export default App;
