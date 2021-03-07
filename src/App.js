import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavbarComp from "./components/Navbar";
import Products from "./components/Products";
import Home from "./components/home/Home";
import SalesOutlet from "./components/salesoutlet/Salesoutlet";
import AboutUs from "./components/aboutus/Aboutus";
import ContactUs from "./components/contactus/Contactus";
import { Switch, Route } from "react-router-dom/Route";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <main>
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <p>home</p>;
            }}
          />
          <Route path="/products" component={Products} />
          <Route path="/salesoutlet" component={SalesOutlet} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contacts" component={ContactUs} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
