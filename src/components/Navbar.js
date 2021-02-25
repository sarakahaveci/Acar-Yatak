import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';
import './Navbar.css'

export function NavbarComponent() {
  return (
    <div> 
        <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
            src="http://www.acaryatak.com/content/assets/default/img/logo.png"
            width="15%"
            height="20%"
            display="flex"
            className="d-inline-block align-top"  
            alt="React Bootstrap logo" />
              <Navbar inverse className="fixed-top nav-bar px-2">
              <Navbar.Brand href="#home">Acar Yatak</Navbar.Brand> 

              <Nav.Link href="#home">Home</Nav.Link>

          <Nav.Link href="#features">Corporate</Nav.Link>
  
          <Nav.Link href="#pricing">Products</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Navbar>
      <Navbar bg="light">
        <Navbar.Brand href="#home"></Navbar.Brand>
      </Navbar>

       </Navbar.Brand>
       </Navbar>
    </div>
  );
}
export default NavbarComponent;