import { React, useState, useEffect } from "react";
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
import Search from "./components/dropdown/Search";

import { SearchContext } from "./searchContext";
// import Test from './components/dropdown/Test'
// import ParentComponent from "./Api";

import useBaseUrl from "./useBaseUrl";

// Added
import Admin from "./components/admin/Admin";
import axios from "axios";

function App() {
  const baseUrl = useBaseUrl();

  const [productsData, setProductsData] = useState({});
  const [searchData, setSearchData] = useState("search");

  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    const { data } = await axios.get(`${baseUrl}/public/products`);
    if (productsData.data) {
      if (productsData.data.length !== data.data.length) {
        setProductsData(data);
      }
    } else {
      setProductsData(data);
    }
  };

  return (
    <div className="App">
      <SearchContext.Provider value={{ searchData, setSearchData }}>
        <NavbarComp productsData={productsData} />
        <Convert />
        {/* <ParentComponent/> */}
        <main>
          <Switch>
            <Route exact path="/">
              <Home productsData={productsData} />
            </Route>

            <Route path="/products">
              <Products />
            </Route>

            <Route path="/OnePersonsBed">
              <OnePersonsBed productsData={productsData} />
            </Route>

            <Route path="/TwoPersonsBed">
              <TwoPersonsBed productsData={productsData} />
            </Route>

            <Route path="/OnePersonBase">
              <OnePersonBase productsData={productsData} />
            </Route>

            <Route path="/TwoPersonBase">
              <TwoPersonBase productsData={productsData} />
            </Route>

            <Route path="/Bunks">
              <Bunks productsData={productsData} />
            </Route>

            <Route path="/linens">
              <Linens productsData={productsData} />
            </Route>

            <Route path="/search">
              <Search productsData={productsData} />
            </Route>

            <Route path="/salesoutlet" component={SalesOutlet} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/contactus" component={ContactUs} />
            <Route>
              <Admin />
            </Route>
          </Switch>
        </main>
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
