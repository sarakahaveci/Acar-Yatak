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
            width="18%"
            height="10%"
            className="d-inline-block align-top "
            alt="React Bootstrap logo" />
   
      
        <Navbar.Brand href="#home">Acar Yatak</Navbar.Brand>
       
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
      
      <Navbar bg="light">
        <Navbar.Brand href="#home"></Navbar.Brand>
      </Navbar>

       </Navbar.Brand>
       </Navbar>
    </div>
  );
}
export default NavbarComponent;