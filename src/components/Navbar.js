import { Navbar, Nav, Form, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Languages from "./Languages";
import translation from "../translation";
import React, { Fragment, useState } from "react";
import Basements from "./Basements";
import { MenuItems } from "./MenuItems";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function NavBarComponent() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav>
        <Navbar class="p-3 mb-2 bg-light text-white" bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">
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
              <Languages />
              <Form inline>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-dark">Search</Button>
              </Form>

              <Dropdown>
                <ul
                  onClick={handleClick}
                  className={click ? "dropdown-menu clicked" : "dropdown-menu"}
                >
                  {MenuItems.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          className={item.cName}
                          to={item.path}
                          onClick={() => setClick(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Dropdown>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="#salesoutlet">
                Sales Outlet
              </Nav.Link>
              <Nav.Link as={Link} to="#aboutus">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="#contactus">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </>
  );
}

export default NavBarComponent;
