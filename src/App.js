import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavbarComp from "./components/Navbar";
import Home from "./components/home/Home";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <BrowserRouter>
        <Link to="/home" /> // renders <a href="/home" />
        <Link to="/beds" /> // renders <a href="/beds" />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
