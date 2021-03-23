import {
  Nav,
  Button,
  Form,
  Navbar,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Languages from "./Languages";
import { Link } from "react-router-dom";

function NavBarComponent() {
  return (
    <>
      <Navbar class="p-3 mb-2 bg-light text-white" bg="light" expand="lg">
        <Navbar.Brand href="#home">  
        <img
            className="logo"
            src="https://i.imgur.com/4XugT2h.jpg"
            width="150px"
            height="130px"
            alt="Acar Yatak logo"
          />
          
        </Navbar.Brand>
        <Navbar.Brand href="/">Acar Yatak</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
          <Languages />
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
