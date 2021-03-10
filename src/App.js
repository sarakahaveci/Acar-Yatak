import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavbarComp from "./components/Navbar";
import Products from "./components/Products";
import Home from "./components/home/Home";
import SalesOutlet from "./components/salesoutlet/Salesoutlet";
import AboutUs from "./components/aboutus/Aboutus";
import ContactUs from "./components/contactus/Contactus";
import OnePersonsBed from './components/OnePersonsBed';
import TwoPersonsBed from './components/TwoPersonsBed';
import OnePersonBase from './components/OnePersonBase';
import TwoPersonBase from './components/TwoPersonBase';
import Bunks from './components/Bunks';
import Linens from './components/Linens';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/OnePersonsBed" component={OnePersonsBed} />
          <Route path="/TwoPersonsBed" component={TwoPersonsBed} />
          <Route path="/OnePersonBase" component={OnePersonBase} />
           <Route path="/TwoPersonBase" component={TwoPersonBase} />
            <Route path="/Bunks" component={Bunks} />
             <Route path="/linens" component={Linens} />
          <Route path="/products" component={Products} />
          <Route path="/salesoutlet" component={SalesOutlet} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
