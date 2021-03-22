import React, { useEffect } from "react";
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

function App() {
  const SamplePage = () => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          layout:
            window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
        },
        "google_translate_element"
      );
    };
    useEffect(() => {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);
    return (
      <>
        <div className="App">
          <div id="google_translate_element"></div>
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
      </>
    );
  };
}
export default App;
