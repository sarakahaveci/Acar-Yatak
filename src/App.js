import { useState, useEffect, React } from "react";
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
import Convert from "./Convert";
function App() {
  let fromLang = "en";
  let toLang = "tr, ar";
  const API_KEY = ["AIzaSyA3_RriCQWU0BphQHwI7dlmNuWebOVjkdg"];
  let url = `https://translation.googleapis.com/language/translate/v2?key=${"AIzaSyA3_RriCQWU0BphQHwI7dlmNuWebOVjkdg"}`;
  url += "&q=" + encodeURI("");
  url += `&source=${fromLang}`;
  url += `&target=${toLang}`;

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("response from google: ", response);
    })
    .catch((error) => {
      console.log("There was an error with the translation request: ", error);
    });

  return (
    <div className="App">
      <NavbarComp />
      <Convert />
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
