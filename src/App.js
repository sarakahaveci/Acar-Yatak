import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavbarComp from "./components/navbar/Navbar";
import Products from "./components/dropdown/Products";
import Home from "./components/home/Home";
import SalesOutlet from "./components/navbar/salesoutlet/Salesoutlet";
import AboutUs from "./components/navbar/aboutus/Aboutus";
import ContactUs from "./components/navbar/contactus/Contactus";
import OnePersonsBed from "./components/dropdown/OnePersonsBed";
import TwoPersonsBed from "./components/dropdown/TwoPersonsBed";
import OnePersonBase from "./components/dropdown/OnePersonBase";
import TwoPersonBase from "./components/dropdown/TwoPersonBase";
import Bunks from "./components/dropdown/Bunks";
import Linens from "./components/dropdown/Linens";
import { Switch, Route } from "react-router-dom";
import googletranslate from "translate-google-api";
import * as ReactTranslated from "react-translated";

function App() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
  return (
    <div className="App">
      <NavbarComp />
      <div id="google_translate_element"></div>
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
