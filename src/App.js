import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavbarComp from "./components/Navbar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Route path="/home/" exact component={Home} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
