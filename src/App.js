
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import NavbarComp from './components/Navbar';
function App() {
  return (
    <div className="App">
    
     <NavbarComp/>
     <header>Welcome to Acar Yatak website</header>
     <Cards/>
     <Footer/>
     
    </div>
  );
}

export default App;
