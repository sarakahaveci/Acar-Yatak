
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import NavbarComp from './components/Navbar';
import Products from './products/Products';
import {Route, Router} from 'react-router-dom';
function App() {
  return (
    <>
   <Router>
    <NavbarComp />
    <Route path="/product" component={Products} />
     <Cards/>
     <Footer/>
     </Router>
     
    
          </>
  );
}

export default App;
