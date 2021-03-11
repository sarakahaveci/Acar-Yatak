import {
  Nav,
  NavItem,
  Button,
  Form,
  Navbar,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Languages from "./Languages";
import React, { Fragment, useState } from "react";
import { BrowserRouter, Link, NavLink } from "react-router-dom";

function NavBarComponent() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <img
        className="logo"
        src="http://www.acaryatak.com/content/assets/default/img/logo.png"
        width="200px"
        height="10%"
        alt="Acar Yatak logo"
      />
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Acar Yatak</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Languages />
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Salesoutlet">Sales Out</Nav.Link>

            <NavDropdown title="Product" id="basic-nav-dropdown">
              <Dropdown.Item as={Link} to="OnePersonsBed">
                One Person Beds
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="TwoPersonsBed">
                Two Person Beds
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="OnePersonBase">
                One Person Beds Basement
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="TwoPersonBase">
                Two Person Beds Basement
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="Bunks">
                Beds Bunks
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="linens">
                Linens
              </Dropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Products">Products</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="aboutus">About Us</Nav.Link>
            <Nav.Link href="contactus">Contact Us</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBarComponent;