import {
  Nav,
  Button,
  Form,
  Navbar,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function NavBarComponent() {
  return (
    <>
      <Navbar class="p-3 mb-2 bg-light text-white" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            className="logo"
            src="https://i.imgur.com/DxLjgyB.jpg"
            width="140px"
            height="auto"
            alt="Acar Yatak logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/">ACAR YATAK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home Page</Nav.Link>
            <Nav.Link href="Salesoutlet"> Our Agents</Nav.Link>

            <NavDropdown title="Product" id="basic-nav-dropdown">
              <Dropdown.Item as={Link} to="OnePersonsBed">
                One Person Beds
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="TwoPersonsBed">
                Two Person Beds
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="OnePersonBase">
                one person bed base
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="TwoPersonBase">
                two person bed base
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="Bunks">
                Bed Bunk
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="linens">
                Linens
              </Dropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Products">Product</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="aboutus">About Us</Nav.Link>
            <Nav.Link href="contactus">Contact Us</Nav.Link>
          </Nav>
          <div id="google_translate_element"></div>
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
