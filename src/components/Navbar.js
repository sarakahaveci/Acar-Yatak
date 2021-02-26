import { Navbar, Nav,form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Navbar.css'

export function NavbarComponent() {
  return (
    <> 
   
<Navbar  class="p-3 mb-2 bg-light text-white" >
    <Navbar.Brand href="#home">
     <img className="logo" 
            src="http://www.acaryatak.com/content/assets/default/img/logo.png"
            width="20%"
            height="10%"  
            alt="Acar Yatak logo" />
            <Navbar class="p-3 bg-light text-dark">
            <form class="form-inline mx-auto">
        
<input class="form-control mx-auto" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
      <Nav className="navbar-nav ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#products">Products</Nav.Link>
      <Nav.Link href="#aboutus">About Us</Nav.Link>
      <Nav.Link href="#contactus">Contact Us</Nav.Link>
    </Nav>
    </Navbar>
    </Navbar.Brand>
          </Navbar>
      
    </>
  );
}
export default NavbarComponent;