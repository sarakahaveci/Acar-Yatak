
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import NavbarComp from './components/Navbar';
import {Router, Route} from "react-router-dom";
function App() {
  return (
    <>
   
    <NavbarComp />
     <Cards/>
     <Footer/>
     
    
          </>
  );
}

export default App;
