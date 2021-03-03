import { Navbar, Nav, Form, Button } from "react-bootstrap";
import Languages from './Languages';
import translation from '../translation';
import React, { Fragment } from "react";
import { Switch, Route,Router } from "react-router-dom";

function NavBarComponent() {
  return (
<>
    <Navbar class="p-3 mb-2 bg-light text-white" bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          className="logo"
          src="http://www.acaryatak.com/content/assets/default/img/logo.png"
          width="200px"
          height="10%"
          alt="Acar Yatak logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
     
        <Nav className="ml-auto">
        <Languages/>
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
          <Router> 
          <Switch>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#salesoutlet">Sales Outlet</Nav.Link>
          <Nav.Link href="#aboutus">About Us</Nav.Link>
          <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Switch>
          </Router>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
   
    </>
  );
}

export default NavBarComponent;
