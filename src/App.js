
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import NavbarComp from './components/Navbar';
import Products from './components/Products';
import Home from './components/home/Home';
import SalesOutlet from './components/salesoutlet/Salesoutlet';
import AboutUs from './components/aboutus/Aboutus';
import ContactUs from './components/contactus/Contactus';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
    <NavbarComp/>
       <main>
           <Switch>
           <Route path="/home" component={Home} />
           <Route path="/products" component={Products} />
           <Route path="/salesoutlet" component={SalesOutlet} />
           <Route path="/aboutus" component={AboutUs} />
           <Route path="/contacts" component={ContactUs} />
          </Switch>
         </main>
     <Footer/>
    </div>
  );
}

export default App;
