
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import NavbarComp from './components/Navbar';
import { RouteBlock } from "./RouteBlock";
import { Route, useLocation } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Route path="/" component={NavbarComp} />
      <RouteBlock />
     <Cards/>
     <Footer/>
     
    </div>
  );
}

export default App;
